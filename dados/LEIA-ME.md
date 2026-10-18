# Formato dos dados

Tudo o que aparece no catálogo nasce aqui. O `README.md`, as páginas de
`catalogo/`, o `api/catalogo.json` e o `llms.txt` são **gerados** por
`scripts/ciberatlas.py` a partir destes arquivos. Nunca edite os gerados à mão.

## Arquivos

| arquivo | conteúdo |
|---|---|
| `categorias.yml` | grupos (funções do NIST CSF 2.0 + Aprender + Pessoas) e categorias |
| `itens/<grupo>-<nome>.yml` | os itens de cada grupo, uma lista YAML |
| `metricas.json` | gerado pelo robô: estrelas, última atividade, licença, arquivado |

## Um item

```yaml
- nome: Wazuh
  repo: wazuh/wazuh
  url: https://wazuh.com
  categoria: siem-e-logs
  desc: Plataforma aberta de SIEM e XDR para servidores, estações e nuvem.
  desc_en: Open-source SIEM and XDR platform for servers, workstations and cloud.
  tags: [siem, xdr]
```

| campo | obrigatório | regra |
|---|---|---|
| `nome` | sim | nome oficial do projeto |
| `repo` | se for projeto no GitHub | `dono/nome`, exatamente como o GitHub mostra |
| `url` | se não houver `repo` | página oficial, `https://` |
| `categoria` | sim | um `id` de `categorias.yml` |
| `desc` | sim | português do Brasil, até 140 caracteres, diz o que faz — sem "poderoso", "incrível", "o melhor" |
| `desc_en` | sim | a mesma frase em inglês, até 140 caracteres |
| `tags` | não | minúsculas, sem acento |
| `custo` | itens sem `repo` | `gratis`, `freemium` ou `pago` |
| `idiomas` | não | idiomas do material: `pt`, `en`, `es` |
| `nivel` | não | `entrada`, `intermediario` ou `avancado` (cursos e certificações) |
| `emissor` | não | quem emite (certificações) |

## O que entra

- **Projeto do GitHub:** existe, não está arquivado e teve atividade nos últimos
  24 meses. Popularidade conta (em geral 200+ estrelas), mas projeto oficial de
  órgão público, fundação (OWASP, Linux Foundation, OpenSSF) ou CERT entra mesmo
  com menos.
- **Recurso fora do GitHub:** página oficial no ar, de quem mantém o recurso.
- **Foco defensivo.** O Atlas cataloga o que ajuda a proteger, detectar,
  responder, recuperar e aprender. Ferramenta de teste entra quando o uso
  esperado é testar o **próprio** sistema ou um ambiente de treino.

## O que não entra

Malware, ferramentas de controle remoto clandestino, kits de phishing, coleções
de payloads e exploits prontos, ferramentas de negação de serviço, rastreamento
de pessoas, roubo de credenciais, listas de jailbreak de IA, vazamentos e
qualquer coisa cujo uso principal seja atacar terceiros. Também não entra
projeto abandonado (o robô move para o [cemitério](../catalogo/cemiterio.md)).

## Saúde (calculada pelo robô)

| selo | regra |
|---|---|
| 🟢 ativo | atividade nos últimos 6 meses |
| 🟡 morno | última atividade entre 6 e 24 meses |
| 🔴 parado | mais de 24 meses sem atividade — vai para o cemitério |
| ⚫ arquivado | arquivado pelo dono — vai para o cemitério |
