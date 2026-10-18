#!/usr/bin/env python3
"""Robô do CiberAtlas: valida os dados, coleta métricas do GitHub e gera o catálogo.

Uso:
    python scripts/ciberatlas.py validar            # formato, duplicatas, categorias
    python scripts/ciberatlas.py metricas           # estrelas, atividade, licença, arquivado
    python scripts/ciberatlas.py conferir           # falha se algum repositório não existe
    python scripts/ciberatlas.py gerar              # README, catalogo/, api/, llms.txt
    python scripts/ciberatlas.py tudo               # os três, em ordem

Token do GitHub: GITHUB_TOKEN, GH_TOKEN ou `gh auth token`.
"""
from __future__ import annotations

import datetime as dt
import json
import os
import re
import subprocess
import sys
import urllib.request
from collections import defaultdict
from pathlib import Path

import yaml

RAIZ = Path(__file__).resolve().parent.parent
DADOS = RAIZ / "dados"
ITENS = DADOS / "itens"
METRICAS = DADOS / "metricas.json"
CATALOGO = RAIZ / "catalogo"
API = RAIZ / "api"
REPO_ATLAS = "visionxma/ciberatlas"
URL_ATLAS = f"https://github.com/{REPO_ATLAS}"

LIMITE_DESC = 140
DIAS_ATIVO = 183
DIAS_MORNO = 730
CUSTOS = {"gratis", "freemium", "pago"}
NIVEIS = {"entrada", "intermediario", "avancado"}
IDIOMAS = {"pt", "en", "es", "fr", "de"}
CAMPOS = {"nome", "repo", "url", "categoria", "desc", "desc_en", "tags", "custo",
          "idiomas", "nivel", "emissor"}
RE_REPO = re.compile(r"^[A-Za-z0-9-]+/[A-Za-z0-9._-]+$")
RE_TAG = re.compile(r"^[a-z0-9][a-z0-9+.-]*$")
PALAVRAS_PROIBIDAS = re.compile(
    r"\b(poderos[oa]|incr[ií]vel|melhor do mundo|revolucion[aá]ri[oa]|"
    r"powerful|amazing|awesome|best-in-class|blazing)\b", re.I)

MESES_PT = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"]
MESES_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


# ---------------------------------------------------------------- leitura

def carregar_mapa() -> tuple[list[dict], list[dict]]:
    mapa = yaml.safe_load((DADOS / "categorias.yml").read_text(encoding="utf-8"))
    return mapa["grupos"], mapa["categorias"]


def carregar_itens() -> list[dict]:
    itens = []
    for arq in sorted(ITENS.glob("*.yml")):
        lista = yaml.safe_load(arq.read_text(encoding="utf-8")) or []
        for i, item in enumerate(lista):
            item = dict(item)
            item["_arquivo"] = f"{arq.name}#{i + 1}"
            itens.append(item)
    return itens


def carregar_metricas() -> dict:
    if METRICAS.exists():
        return json.loads(METRICAS.read_text(encoding="utf-8"))
    return {"_atualizado": None, "repos": {}}


# ---------------------------------------------------------------- validar

def validar(_args=None) -> int:
    grupos, categorias = carregar_mapa()
    ids_grupo = {g["id"] for g in grupos}
    ids_cat = set()
    erros: list[str] = []

    for c in categorias:
        if c["id"] in ids_cat:
            erros.append(f"categorias.yml: categoria repetida {c['id']}")
        ids_cat.add(c["id"])
        if c.get("grupo") not in ids_grupo:
            erros.append(f"categorias.yml: {c['id']} tem grupo desconhecido {c.get('grupo')}")
        for campo in ("nome", "name", "descricao", "description"):
            if not c.get(campo):
                erros.append(f"categorias.yml: {c['id']} sem {campo}")

    itens = carregar_itens()
    vistos_repo: dict[str, str] = {}
    vistos_url: dict[str, str] = {}
    por_categoria = defaultdict(int)

    for it in itens:
        onde = it["_arquivo"]
        extras = set(it) - CAMPOS - {"_arquivo"}
        if extras:
            erros.append(f"{onde}: campo desconhecido {sorted(extras)}")
        for campo in ("nome", "categoria", "desc", "desc_en"):
            if not str(it.get(campo) or "").strip():
                erros.append(f"{onde}: falta '{campo}'")
        if it.get("categoria") and it["categoria"] not in ids_cat:
            erros.append(f"{onde}: categoria desconhecida '{it['categoria']}'")
        por_categoria[it.get("categoria")] += 1

        repo, url = it.get("repo"), it.get("url")
        if not repo and not url:
            erros.append(f"{onde}: precisa de 'repo' ou 'url'")
        if repo:
            if not RE_REPO.match(repo):
                erros.append(f"{onde}: repo fora do formato dono/nome: {repo}")
            chave = repo.lower()
            if chave in vistos_repo:
                erros.append(f"{onde}: repo repetido {repo} (já em {vistos_repo[chave]})")
            vistos_repo[chave] = onde
        if url:
            if not str(url).startswith(("https://", "http://")):
                erros.append(f"{onde}: url sem https:// — {url}")
            chave = str(url).rstrip("/").lower()
            if not repo and chave in vistos_url:
                erros.append(f"{onde}: url repetida {url} (já em {vistos_url[chave]})")
            vistos_url[chave] = onde
        if not repo and it.get("custo") not in CUSTOS:
            erros.append(f"{onde}: item sem repo precisa de custo em {sorted(CUSTOS)}")
        if it.get("custo") and it["custo"] not in CUSTOS:
            erros.append(f"{onde}: custo inválido {it['custo']}")
        if it.get("nivel") and it["nivel"] not in NIVEIS:
            erros.append(f"{onde}: nivel inválido {it['nivel']}")
        for idioma in it.get("idiomas") or []:
            if idioma not in IDIOMAS:
                erros.append(f"{onde}: idioma inválido {idioma}")
        for tag in it.get("tags") or []:
            if not RE_TAG.match(str(tag)):
                erros.append(f"{onde}: tag fora do padrão (minúsculas, sem acento): {tag}")
        for campo in ("desc", "desc_en"):
            texto = str(it.get(campo) or "")
            if len(texto) > LIMITE_DESC:
                erros.append(f"{onde}: {campo} com {len(texto)} caracteres (máx. {LIMITE_DESC})")
            if PALAVRAS_PROIBIDAS.search(texto):
                erros.append(f"{onde}: {campo} com adjetivo de marketing: {texto!r}")

    vazias = sorted(c["id"] for c in categorias if por_categoria.get(c["id"], 0) == 0)
    print(f"{len(itens)} itens em {len(ids_cat)} categorias; {len(vistos_repo)} repositórios.")
    if vazias:
        print(f"aviso: categorias sem item: {', '.join(vazias)}")
    if erros:
        print(f"\n{len(erros)} erro(s):")
        for e in erros:
            print(f"  - {e}")
        return 1
    print("validação ok.")
    return 0


# ---------------------------------------------------------------- métricas

def token_github() -> str:
    for nome in ("GITHUB_TOKEN", "GH_TOKEN"):
        if os.environ.get(nome):
            return os.environ[nome]
    try:
        return subprocess.run(["gh", "auth", "token"], capture_output=True, text=True,
                              check=True).stdout.strip()
    except (OSError, subprocess.CalledProcessError):
        sys.exit("sem token do GitHub: defina GITHUB_TOKEN ou rode `gh auth login`.")


def graphql(token: str, consulta: str) -> dict:
    req = urllib.request.Request(
        "https://api.github.com/graphql",
        data=json.dumps({"query": consulta}).encode(),
        headers={"Authorization": f"bearer {token}", "User-Agent": "ciberatlas-robo"},
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        return json.loads(resp.read())


def metricas(_args=None) -> int:
    itens = carregar_itens()
    repos = sorted({it["repo"] for it in itens if it.get("repo")}, key=str.lower)
    token = token_github()
    resultado: dict[str, dict] = {}
    faltando: list[str] = []
    lote = 40
    for ini in range(0, len(repos), lote):
        parte = repos[ini:ini + lote]
        campos = []
        for n, repo in enumerate(parte):
            dono, nome = repo.split("/", 1)
            campos.append(
                f'r{n}: repository(owner: {json.dumps(dono)}, name: {json.dumps(nome)}) {{'
                " nameWithOwner stargazerCount pushedAt isArchived createdAt"
                " licenseInfo { spdxId }"
                " defaultBranchRef { target { ... on Commit { committedDate } } } }")
        resposta = graphql(token, "query { " + " ".join(campos) + " rateLimit { remaining } }")
        dados = resposta.get("data") or {}
        for n, repo in enumerate(parte):
            r = dados.get(f"r{n}")
            if not r:
                faltando.append(repo)
                continue
            alvo = ((r.get("defaultBranchRef") or {}).get("target") or {})
            resultado[repo.lower()] = {
                "repo": r["nameWithOwner"],
                "estrelas": r["stargazerCount"],
                "ultima_atividade": (alvo.get("committedDate") or r["pushedAt"] or "")[:10],
                "arquivado": r["isArchived"],
                "licenca": (r.get("licenseInfo") or {}).get("spdxId"),
                "criado": r["createdAt"][:10],
            }
        restante = (dados.get("rateLimit") or {}).get("remaining")
        print(f"lote {ini // lote + 1}: {len(parte)} repos, cota restante {restante}")

    saida = {
        "_atualizado": dt.date.today().isoformat(),
        "_fonte": "GitHub GraphQL API",
        "repos": dict(sorted(resultado.items())),
        "nao_encontrados": faltando,
    }
    METRICAS.write_text(json.dumps(saida, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    renomeados = [(it["repo"], resultado[it["repo"].lower()]["repo"]) for it in itens
                  if it.get("repo") and it["repo"].lower() in resultado
                  and resultado[it["repo"].lower()]["repo"] != it["repo"]]
    print(f"{len(resultado)} repositórios medidos; {len(faltando)} não encontrados.")
    for antigo, novo in renomeados:
        print(f"  renomeado: {antigo} -> {novo}")
    for repo in faltando:
        print(f"  não encontrado: {repo}")
    return 0


# ---------------------------------------------------------------- gerar

def saude(m: dict | None, hoje: dt.date) -> str:
    if not m:
        return "site"
    if m["arquivado"]:
        return "arquivado"
    try:
        dias = (hoje - dt.date.fromisoformat(m["ultima_atividade"])).days
    except ValueError:
        return "parado"
    if dias <= DIAS_ATIVO:
        return "ativo"
    if dias <= DIAS_MORNO:
        return "morno"
    return "parado"


SELO = {"ativo": "🟢", "morno": "🟡", "parado": "🔴", "arquivado": "⚫", "site": "🌐"}
SELO_TXT = {
    "pt": {"ativo": "ativo", "morno": "morno", "parado": "parado", "arquivado": "arquivado", "site": "site"},
    "en": {"ativo": "active", "morno": "slow", "parado": "stale", "arquivado": "archived", "site": "website"},
}
CUSTO_TXT = {
    "pt": {"gratis": "grátis", "freemium": "freemium", "pago": "pago"},
    "en": {"gratis": "free", "freemium": "freemium", "pago": "paid"},
}
NIVEL_TXT = {
    "pt": {"entrada": "entrada", "intermediario": "intermediário", "avancado": "avançado"},
    "en": {"entrada": "entry", "intermediario": "intermediate", "avancado": "advanced"},
}


def estrelas(n: int, lingua: str) -> str:
    if n >= 1_000_000:
        valor = f"{n / 1_000_000:.2f}".rstrip("0").rstrip(".")
        if lingua != "pt":
            return f"{valor}M"
        return f"{valor.replace('.', ',')} {'milhão' if valor == '1' else 'milhões'}"
    if n >= 1000:
        valor = f"{n / 1000:.1f}".rstrip("0").rstrip(".")
        return f"{valor.replace('.', ',')} mil" if lingua == "pt" else f"{valor}k"
    return str(n)


def mes(data: str, lingua: str) -> str:
    if not data:
        return "—"
    d = dt.date.fromisoformat(data)
    return f"{(MESES_PT if lingua == 'pt' else MESES_EN)[d.month - 1]} {d.year}"


def link_item(it: dict) -> str:
    return f"https://github.com/{it['repo']}" if it.get("repo") else it["url"]


def montar(lingua: str = "pt"):
    grupos, categorias = carregar_mapa()
    met = carregar_metricas()
    hoje = dt.date.fromisoformat(met["_atualizado"]) if met.get("_atualizado") else dt.date.today()
    itens = carregar_itens()
    for it in itens:
        m = met["repos"].get(it["repo"].lower()) if it.get("repo") else None
        if it.get("repo") and m:
            it["repo"] = m["repo"]
        it["_m"] = m
        it["_saude"] = saude(m, hoje) if (m or not it.get("repo")) else "site"
        if it.get("repo") and not m:
            it["_saude"] = "pendente"
    return grupos, categorias, itens, met, hoje


def ordenar(lista: list[dict]) -> list[dict]:
    return sorted(lista, key=lambda it: (
        0 if it.get("_m") else 1,
        -(it["_m"]["estrelas"] if it.get("_m") else 0),
        it["nome"].lower()))


def linha_tabela(it: dict, lingua: str) -> str:
    desc = it["desc"] if lingua == "pt" else it["desc_en"]
    nome = f"[{it['nome']}]({link_item(it)})"
    if it.get("repo") and it.get("url"):
        nome += f" · [{'site' if lingua == 'pt' else 'site'}]({it['url']})"
    m = it.get("_m")
    if m:
        info = m["licenca"] or "—"
        if info == "NOASSERTION":
            info = "outra" if lingua == "pt" else "other"
        col_est = f"⭐ {estrelas(m['estrelas'], lingua)}"
        col_ativ = mes(m["ultima_atividade"], lingua)
    else:
        partes = []
        if it.get("custo"):
            partes.append(CUSTO_TXT[lingua][it["custo"]])
        if it.get("nivel"):
            partes.append(NIVEL_TXT[lingua][it["nivel"]])
        if it.get("emissor"):
            partes.append(it["emissor"])
        if it.get("idiomas"):
            partes.append("/".join(it["idiomas"]))
        info = " · ".join(partes) or "—"
        col_est, col_ativ = "—", "—"
    s = it["_saude"]
    selo = f"{SELO.get(s, '⏳')} {SELO_TXT[lingua].get(s, 'pendente' if lingua == 'pt' else 'pending')}"
    desc = desc.replace("|", "\\|")
    return f"| {nome} | {desc} | {col_est} | {col_ativ} | {info} | {selo} |"


CABECALHO = {
    "pt": "| Projeto | O que faz | Estrelas | Última atividade | Licença ou acesso | Saúde |\n|---|---|--:|---|---|---|",
    "en": "| Project | What it does | Stars | Last activity | License or access | Health |\n|---|---|--:|---|---|---|",
}


def pagina_categoria(cat: dict, grupo: dict, lista: list[dict], lingua: str, hoje: dt.date) -> str:
    pt = lingua == "pt"
    nome = cat["nome"] if pt else cat["name"]
    desc = cat["descricao"] if pt else cat["description"]
    g_nome = grupo["nome"] if pt else grupo["name"]
    volta = "README.md" if pt else "README.md"
    outra = f"en/{cat['id']}.md" if pt else f"../{cat['id']}.md"
    linhas = [
        "<!-- Gerado por scripts/ciberatlas.py — não edite à mão; edite dados/itens/*.yml -->",
        f"# {nome}",
        "",
        f"> {desc}",
        "",
    ]
    meta = [f"**{'Grupo' if pt else 'Group'}:** {grupo['id']} · {g_nome}"]
    if cat.get("d3fend"):
        meta.append(f"**D3FEND:** [{cat['d3fend']}](https://d3fend.mitre.org/tactic/d3f:{cat['d3fend']}/)")
    if cat.get("cis"):
        meta.append(f"**CIS Controls v8.1:** {', '.join(str(c) for c in cat['cis'])}")
    linhas += [" · ".join(meta), "",
               f"[← {'Catálogo' if pt else 'Catalog'}]({volta}) · "
               f"[{'English' if pt else 'Português'}]({outra})", ""]
    vivos = [it for it in lista if it["_saude"] not in ("parado", "arquivado")]
    if not vivos:
        linhas.append("_Nenhum item ainda. [Sugira um](../CONTRIBUTING.md)._" if pt else
                      "_No items yet. [Suggest one](../../CONTRIBUTING.en.md)._")
    else:
        linhas += [CABECALHO[lingua]] + [linha_tabela(it, lingua) for it in ordenar(vivos)]
    linhas += ["",
               (f"_{len(vivos)} itens · métricas do GitHub de {hoje.strftime('%d/%m/%Y')} · "
                "🟢 atividade nos últimos 6 meses · 🟡 entre 6 e 24 meses · 🌐 recurso fora do GitHub_")
               if pt else
               (f"_{len(vivos)} items · GitHub metrics from {hoje.isoformat()} · "
                "🟢 activity in the last 6 months · 🟡 6 to 24 months · 🌐 resource outside GitHub_"),
               ""]
    return "\n".join(linhas)


def indice_catalogo(grupos, categorias, itens, lingua: str, prefixo: str) -> str:
    pt = lingua == "pt"
    contagem = defaultdict(int)
    for it in itens:
        if it["_saude"] not in ("parado", "arquivado"):
            contagem[it["categoria"]] += 1
    linhas = []
    for g in grupos:
        cats = [c for c in categorias if c["grupo"] == g["id"]]
        total = sum(contagem[c["id"]] for c in cats)
        linhas.append(f"### {g['id']} · {g['nome'] if pt else g['name']} ({total})")
        linhas.append("")
        linhas.append(f"_{g['descricao'] if pt else g['description']}_")
        linhas.append("")
        for c in cats:
            alvo = f"{prefixo}{c['id']}.md"
            linhas.append(f"- [{c['nome'] if pt else c['name']}]({alvo}) · {contagem[c['id']]} — "
                          f"{c['descricao'] if pt else c['description']}")
        linhas.append("")
    return "\n".join(linhas).rstrip() + "\n"


def numeros(itens, categorias, met, lingua: str) -> dict:
    vivos = [it for it in itens if it["_saude"] not in ("parado", "arquivado")]
    repos = [it for it in vivos if it.get("_m")]
    return {
        "itens": len(vivos),
        "repos": len(repos),
        "categorias": len(categorias),
        "ativos": sum(1 for it in repos if it["_saude"] == "ativo"),
        "estrelas": sum(it["_m"]["estrelas"] for it in repos),
        "cemiterio": sum(1 for it in itens if it["_saude"] in ("parado", "arquivado")),
        "data": met.get("_atualizado") or dt.date.today().isoformat(),
    }


def bloco_numeros(n: dict, lingua: str) -> str:
    if lingua == "pt":
        d = dt.date.fromisoformat(n["data"]).strftime("%d/%m/%Y")
        return (f"**{n['itens']} itens** em **{n['categorias']} categorias** · "
                f"**{n['repos']} projetos abertos** conferidos pelo robô em {d} "
                f"({n['ativos']} com atividade nos últimos 6 meses) · "
                f"{estrelas(n['estrelas'], 'pt')}{' de' if n['estrelas'] >= 1_000_000 else ''} estrelas somadas · "
                f"{n['cemiterio']} no [cemitério](catalogo/cemiterio.md)")
    return (f"**{n['itens']} items** in **{n['categorias']} categories** · "
            f"**{n['repos']} open-source projects** checked by the bot on {n['data']} "
            f"({n['ativos']} active in the last 6 months) · "
            f"{estrelas(n['estrelas'], 'en')} combined stars · "
            f"{n['cemiterio']} in the [graveyard](catalogo/cemiterio.md)")


def trocar_bloco(texto: str, nome: str, conteudo: str) -> str:
    ini, fim = f"<!-- atlas:{nome} -->", f"<!-- /atlas:{nome} -->"
    padrao = re.compile(re.escape(ini) + r".*?" + re.escape(fim), re.S)
    if not padrao.search(texto):
        return texto
    return padrao.sub(lambda _m: f"{ini}\n{conteudo.strip()}\n{fim}", texto)


def cemiterio(itens, hoje) -> str:
    mortos = [it for it in itens if it["_saude"] in ("parado", "arquivado")]
    linhas = [
        "<!-- Gerado por scripts/ciberatlas.py — não edite à mão -->",
        "# Cemitério · Graveyard",
        "",
        "> Projetos que estavam no Atlas e foram arquivados pelo dono ou passaram mais de 24 meses "
        "sem atividade. Saem das tabelas principais, mas ficam registrados aqui. "
        "Se um voltar a ter atividade, o robô o devolve sozinho.",
        ">",
        "> **English:** projects archived by their owners or with no activity for 24+ months. "
        "They leave the main tables; the bot restores them automatically if activity resumes.",
        "",
        "[← Catálogo](README.md)",
        "",
    ]
    if not mortos:
        linhas.append(f"_Vazio em {hoje.strftime('%d/%m/%Y')}: todo projeto listado está vivo._")
    else:
        linhas += ["| Projeto | Categoria | Última atividade | Motivo |", "|---|---|---|---|"]
        for it in sorted(mortos, key=lambda x: x["nome"].lower()):
            motivo = "arquivado" if it["_saude"] == "arquivado" else "mais de 24 meses parado"
            linhas.append(f"| [{it['nome']}]({link_item(it)}) | [{it['categoria']}]({it['categoria']}.md) | "
                          f"{mes(it['_m']['ultima_atividade'], 'pt')} | {motivo} |")
    return "\n".join(linhas) + "\n"


def gerar(_args=None) -> int:
    grupos, categorias, itens, met, hoje = montar()
    por_grupo = {g["id"]: g for g in grupos}
    por_cat = defaultdict(list)
    for it in itens:
        por_cat[it["categoria"]].append(it)

    (CATALOGO / "en").mkdir(parents=True, exist_ok=True)
    API.mkdir(exist_ok=True)
    for c in categorias:
        g = por_grupo[c["grupo"]]
        (CATALOGO / f"{c['id']}.md").write_text(
            pagina_categoria(c, g, por_cat[c["id"]], "pt", hoje), encoding="utf-8")
        (CATALOGO / "en" / f"{c['id']}.md").write_text(
            pagina_categoria(c, g, por_cat[c["id"]], "en", hoje), encoding="utf-8")

    n_pt = numeros(itens, categorias, met, "pt")
    cab = "<!-- Gerado por scripts/ciberatlas.py — não edite à mão -->\n"
    (CATALOGO / "README.md").write_text(
        cab + "# Catálogo do CiberAtlas\n\n" + bloco_numeros(n_pt, "pt").replace("catalogo/", "") +
        "\n\n[English](en/README.md) · [← Início](../README.md) · [Cemitério](cemiterio.md)\n\n" +
        indice_catalogo(grupos, categorias, itens, "pt", ""), encoding="utf-8")
    (CATALOGO / "en" / "README.md").write_text(
        cab + "# CiberAtlas catalog\n\n" + bloco_numeros(n_pt, "en").replace("catalogo/", "../") +
        "\n\n[Português](../README.md) · [← Home](../../README.en.md)\n\n" +
        indice_catalogo(grupos, categorias, itens, "en", ""), encoding="utf-8")
    (CATALOGO / "cemiterio.md").write_text(cemiterio(itens, hoje), encoding="utf-8")

    # READMEs da raiz: só os blocos marcados
    for arq, lingua, prefixo in (("README.md", "pt", "catalogo/"), ("README.en.md", "en", "catalogo/en/")):
        caminho = RAIZ / arq
        if not caminho.exists():
            continue
        texto = caminho.read_text(encoding="utf-8")
        texto = trocar_bloco(texto, "numeros", bloco_numeros(n_pt, lingua))
        texto = trocar_bloco(texto, "indice", indice_catalogo(grupos, categorias, itens, lingua, prefixo))
        texto = trocar_bloco(texto, "selos", (
            f"![itens](https://img.shields.io/badge/{'itens' if lingua == 'pt' else 'items'}-{n_pt['itens']}-0b7285) "
            f"![projetos](https://img.shields.io/badge/{'projetos%20verificados' if lingua == 'pt' else 'verified%20projects'}-{n_pt['repos']}-2b8a3e) "
            f"![atualizado](https://img.shields.io/badge/{'atualizado' if lingua == 'pt' else 'updated'}-{n_pt['data'].replace('-', '--')}-495057) "
            f"![licença](https://img.shields.io/badge/{'dados' if lingua == 'pt' else 'data'}-CC0--1.0-495057)"))
        caminho.write_text(texto, encoding="utf-8")

    # API aberta
    saida = []
    for it in itens:
        c = next(c for c in categorias if c["id"] == it["categoria"])
        m = it.get("_m") or {}
        saida.append({
            "nome": it["nome"],
            "link": link_item(it),
            "repo": it.get("repo"),
            "site": it.get("url"),
            "categoria": it["categoria"],
            "grupo": c["grupo"],
            "nist_csf": c["grupo"] if c["grupo"] in ("GV", "ID", "PR", "DE", "RS", "RC") else None,
            "d3fend": c.get("d3fend"),
            "cis_controls": c.get("cis", []),
            "desc": it["desc"],
            "desc_en": it["desc_en"],
            "tags": it.get("tags", []),
            "custo": it.get("custo"),
            "nivel": it.get("nivel"),
            "emissor": it.get("emissor"),
            "idiomas": it.get("idiomas", []),
            "estrelas": m.get("estrelas"),
            "ultima_atividade": m.get("ultima_atividade"),
            "licenca": m.get("licenca"),
            "saude": it["_saude"],
        })
    saida.sort(key=lambda x: (x["grupo"], x["categoria"], x["nome"].lower()))
    meta = {"fonte": URL_ATLAS, "licenca": "CC0-1.0", "metricas_de": met.get("_atualizado"),
            "total": len(saida)}
    (API / "catalogo.json").write_text(
        json.dumps({"meta": meta, "itens": saida}, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    (API / "categorias.json").write_text(
        json.dumps({"grupos": grupos, "categorias": categorias}, ensure_ascii=False, indent=1) + "\n",
        encoding="utf-8")

    # llms.txt (https://llmstxt.org)
    l = [
        "# CiberAtlas",
        "",
        "> Atlas aberto e vivo de cibersegurança defensiva, em português e inglês. Cada projeto é "
        "conferido toda semana por robô (existe, não está arquivado, teve atividade) e cada categoria "
        "é mapeada no NIST CSF 2.0, no MITRE D3FEND e nos CIS Controls v8.1. Dados em CC0.",
        "",
        f"Dados legíveis por máquina: {URL_ATLAS}/blob/main/api/catalogo.json",
        "",
        "## Guias",
        "",
        f"- [Comece aqui por perfil]({URL_ATLAS}/blob/main/docs/comece-aqui/README.md): pequena empresa, desenvolvedor, estudante, analista de SOC, pessoa comum",
        f"- [Brasil: legislação, LGPD e incidentes]({URL_ATLAS}/blob/main/docs/brasil/README.md)",
        f"- [Portugal: NIS2 e CNCS]({URL_ATLAS}/blob/main/docs/portugal/README.md)",
        f"- [Checklists]({URL_ATLAS}/blob/main/docs/checklists/README.md)",
        f"- [Trilhas de estudo]({URL_ATLAS}/blob/main/docs/trilhas/README.md)",
        f"- [Frameworks]({URL_ATLAS}/blob/main/docs/frameworks.md)",
        f"- [Glossário PT-EN]({URL_ATLAS}/blob/main/docs/glossario.md)",
        "",
    ]
    for g in grupos:
        for c in [c for c in categorias if c["grupo"] == g["id"]]:
            vivos = ordenar([it for it in por_cat[c["id"]] if it["_saude"] not in ("parado", "arquivado")])
            if not vivos:
                continue
            l += [f"## {g['nome']} / {c['nome']}", ""]
            for it in vivos:
                l.append(f"- [{it['nome']}]({link_item(it)}): {it['desc']}")
            l.append("")
    (RAIZ / "llms.txt").write_text("\n".join(l), encoding="utf-8")

    print(f"gerado: {len(categorias)} categorias x 2 idiomas, api/catalogo.json ({len(saida)} itens), "
          f"llms.txt, cemitério ({n_pt['cemiterio']}).")
    return 0


def conferir(_args=None) -> int:
    """Depois de `metricas`: falha se algum repositório não existe; avisa os parados."""
    met = carregar_metricas()
    hoje = dt.date.fromisoformat(met["_atualizado"])
    faltando = met.get("nao_encontrados") or []
    mortos = [(m["repo"], saude(m, hoje)) for m in met["repos"].values()
              if saude(m, hoje) in ("parado", "arquivado")]
    for repo, s in mortos:
        print(f"aviso: {repo} está {s} — vai para o cemitério")
    for repo in faltando:
        print(f"erro: repositório não encontrado no GitHub: {repo}")
    print(f"conferência: {len(met['repos'])} medidos, {len(faltando)} não encontrados, {len(mortos)} no cemitério.")
    return 1 if faltando else 0


def tudo(args=None) -> int:
    return validar(args) or metricas(args) or gerar(args)


def main() -> int:
    comandos = {"validar": validar, "metricas": metricas, "conferir": conferir,
                "gerar": gerar, "tudo": tudo}
    if len(sys.argv) < 2 or sys.argv[1] not in comandos:
        print(__doc__)
        return 2
    return comandos[sys.argv[1]](sys.argv[2:])


if __name__ == "__main__":
    sys.exit(main())
