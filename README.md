<div align="center">

# CiberAtlas

**O atlas aberto e vivo da cibersegurança defensiva.**

Em português e inglês. Conferido toda semana por um robô. Organizado pelo NIST CSF 2.0,
pelo MITRE D3FEND e pelos CIS Controls.

**[🔎 Buscar no site](https://visionxma.github.io/ciberatlas/)** · [English](README.en.md) · [Catálogo](catalogo/README.md) · [Comece aqui](docs/comece-aqui/README.md) · [Brasil](docs/brasil/README.md) · [Contribuir](CONTRIBUTING.md) · [Dados abertos](#use-os-dados)

<!-- atlas:selos -->
![itens](https://img.shields.io/badge/itens-412-0b7285) ![projetos](https://img.shields.io/badge/projetos%20verificados-341-2b8a3e) ![atualizado](https://img.shields.io/badge/atualizado-2026--10--26-495057) ![licença](https://img.shields.io/badge/dados-CC0--1.0-495057)
<!-- /atlas:selos -->

</div>

<!-- atlas:numeros -->
**412 itens** em **37 categorias** · **341 projetos abertos** conferidos pelo robô em 26/10/2026 (313 com atividade nos últimos 6 meses) · 2,98 milhões de estrelas somadas · 3 no [cemitério](catalogo/cemiterio.md)
<!-- /atlas:numeros -->

---

## Por que existe

Lista de segurança feita à mão envelhece. O link continua lá, mas o projeto morreu, foi
arquivado ou trocou de dono. Em 18/10/2026, a lista "awesome security" mais estrelada do
GitHub estava sem commit desde 11/01/2026 e tinha 326 pedidos de alteração abertos. Das 15
mais estreladas com esse nome, 5 estavam arquivadas ou sem commit havia mais de um ano.
Quem chega não tem como saber o que ainda presta sem abrir item por item.

O CiberAtlas resolve isso com três escolhas:

| | lista tradicional | CiberAtlas |
|---|---|---|
| Saber se o projeto está vivo | abrir um por um | selo de saúde em cada linha, medido toda semana |
| Projeto abandonado | fica na lista | vai sozinho para o [cemitério](catalogo/cemiterio.md) |
| Organização | gosto de quem mantém | NIST CSF 2.0, MITRE D3FEND e CIS Controls v8.1 |
| Idioma | inglês | português e inglês, lado a lado |
| Contexto legal | nenhum | LGPD, ANPD, Marco Civil, Código Penal, NIS2 em Portugal |
| Uso por outros sistemas | copiar e colar markdown | [JSON aberto](api/catalogo.json) e [`llms.txt`](llms.txt) para IAs |
| Por onde começar | uma página enorme | uma porta de entrada para cada perfil |

O foco é **defesa**: proteger, detectar, responder, recuperar e aprender. Ferramenta de
teste entra quando o uso esperado é testar o próprio sistema ou um laboratório de treino.

## Comece aqui

| você é | comece por |
|---|---|
| dono de pequena empresa, sem equipe de TI | [10 ações para a sua empresa](docs/comece-aqui/pequena-empresa.md) |
| pessoa desenvolvedora | [segurança no código e no pipeline](docs/comece-aqui/desenvolvedor.md) |
| estudante ou em transição de carreira | [por onde estudar sem cair em armadilha](docs/comece-aqui/estudante.md) |
| analista de SOC ou blue team | [detecção e resposta](docs/comece-aqui/analista-soc.md) |
| qualquer pessoa, no celular e nas contas | [proteja sua vida digital](docs/comece-aqui/pessoa-comum.md) |
| responsável por dados pessoais (DPO) | [incidente com dados pessoais, passo a passo](docs/brasil/incidente-lgpd-passo-a-passo.md) |

## Catálogo

Cada categoria tem uma página com a tabela completa: o que o projeto faz, estrelas, última
atividade, licença e selo de saúde. 🟢 ativo nos últimos 6 meses · 🟡 entre 6 e 24 meses ·
🌐 recurso fora do GitHub.

<!-- atlas:indice -->
### GV · Governar (17)

_Estratégia, papéis, políticas, conformidade e privacidade._

- [GRC e conformidade](catalogo/grc-e-conformidade.md) · 7 — Gestão de riscos, controles e auditorias (ISO 27001, NIST, CIS, LGPD).
- [Privacidade e dados pessoais](catalogo/privacidade-e-dados-pessoais.md) · 10 — Encontrar, classificar e proteger dados pessoais — base técnica da LGPD.

### ID · Identificar (50)

_Saber o que você tem, o que está exposto e o que pode dar errado._

- [Inventário de ativos](catalogo/inventario-de-ativos.md) · 12 — Saber quais máquinas, softwares e contas existem na sua organização.
- [Gestão de vulnerabilidades](catalogo/gestao-de-vulnerabilidades.md) · 15 — Achar e priorizar falhas conhecidas nos seus próprios sistemas, imagens e dependências.
- [Cadeia de suprimentos e SBOM](catalogo/cadeia-de-suprimentos-e-sbom.md) · 15 — Lista de componentes (SBOM), assinatura de artefatos e saúde das dependências.
- [Modelagem de ameaças](catalogo/modelagem-de-ameacas.md) · 8 — Desenhar o sistema e descobrir onde ele pode ser atacado antes de escrever o código.

### PR · Proteger (114)

_Código, identidades, sistemas, nuvem e rede endurecidos antes do ataque._

- [Análise estática de código (SAST)](catalogo/analise-estatica-de-codigo.md) · 9 — Encontrar falhas de segurança no código-fonte antes de ir para produção.
- [Segredos vazados no código](catalogo/segredos-no-codigo.md) · 8 — Achar chaves, senhas e tokens esquecidos no git antes que outra pessoa ache.
- [Gestão de segredos](catalogo/gestao-de-segredos.md) · 6 — Guardar e distribuir credenciais de aplicação sem deixá-las em texto puro.
- [Identidade e acesso (IAM)](catalogo/identidade-e-acesso.md) · 10 — Login único, MFA, controle de acesso e acesso privilegiado.
- [Hardening de sistemas](catalogo/hardening-de-sistemas.md) · 10 — Auditar e endurecer Linux, Windows e macOS contra benchmarks conhecidos.
- [Segurança em nuvem e IaC](catalogo/seguranca-em-nuvem.md) · 8 — Auditar contas AWS, Azure e GCP e a infraestrutura como código antes do deploy.
- [Containers e Kubernetes](catalogo/containers-e-kubernetes.md) · 9 — Políticas, benchmarks e varredura para imagens e clusters.
- [Rede, firewall e VPN](catalogo/rede-firewall-e-vpn.md) · 11 — Segmentar, filtrar e conectar com segurança.
- [WAF e proteção de aplicações web](catalogo/waf-e-protecao-web.md) · 7 — Filtrar tráfego malicioso antes que ele chegue à aplicação.
- [Testes dinâmicos de aplicação (DAST)](catalogo/testes-dinamicos-de-aplicacao.md) · 6 — Testar a própria aplicação rodando, no pipeline, antes do atacante.
- [Criptografia e TLS](catalogo/criptografia-e-tls.md) · 10 — Certificados, criptografia de arquivos e auditoria de configuração TLS.
- [Segurança de e-mail](catalogo/seguranca-de-email.md) · 10 — SPF, DKIM, DMARC, antispam e relatórios de abuso do seu domínio.
- [Segurança de IA e LLM](catalogo/seguranca-de-ia.md) · 10 — Testar e proteger seus próprios modelos e agentes contra injeção de prompt e vazamento.

### DE · Detectar (61)

_Ver o ataque acontecendo — logs, rede, endpoint, inteligência e iscas._

- [SIEM e gestão de logs](catalogo/siem-e-logs.md) · 10 — Centralizar, correlacionar e alertar sobre eventos de segurança.
- [Regras de detecção](catalogo/regras-de-deteccao.md) · 11 — Regras prontas e abertas (Sigma, YARA e afins) e ferramentas que as aplicam.
- [Detecção de intrusão em rede (IDS/NSM)](catalogo/deteccao-de-rede.md) · 11 — Ver o tráfego, registrar sessões e detectar comportamento anômalo.
- [Endpoint e telemetria (EDR)](catalogo/endpoint-e-telemetria.md) · 10 — Visibilidade e detecção em servidores, estações e containers.
- [Inteligência de ameaças](catalogo/inteligencia-de-ameacas.md) · 10 — Compartilhar e enriquecer indicadores e entender quem ataca e como.
- [Enganação e iscas (honeypots)](catalogo/enganacao-e-iscas.md) · 9 — Armadilhas que só um intruso tocaria — alarme quase sem falso positivo.

### RS · Responder (34)

_Conter, investigar e entender o que aconteceu._

- [Resposta a incidentes e SOAR](catalogo/resposta-a-incidentes.md) · 11 — Casos, playbooks, automação e coleta remota durante o incidente.
- [Forense digital](catalogo/forense-digital.md) · 11 — Memória, disco e linha do tempo para reconstruir o que aconteceu.
- [Análise de malware (defensiva)](catalogo/analise-de-malware.md) · 12 — Entender um arquivo suspeito para detectar e remover — engenharia reversa e triagem.

### RC · Recuperar (12)

_Voltar a operar com os dados íntegros._

- [Backup e recuperação](catalogo/backup-e-recuperacao.md) · 12 — Cópias criptografadas, verificáveis e restauráveis — a última linha contra ransomware.

### AP · Aprender (99)

_Laboratórios legais, cursos, certificações, guias e comunidades._

- [Laboratórios e CTF (prática legal)](catalogo/laboratorios-e-ctf.md) · 27 — Ambientes feitos para treinar sem tocar em sistema de ninguém.
- [Cursos gratuitos](catalogo/cursos-gratuitos.md) · 12 — Cursos abertos de universidades e organizações reconhecidas.
- [Certificações](catalogo/certificacoes.md) · 16 — Certificações reconhecidas, por nível e foco; as de teste de invasão entram como formação (sem preço — ele muda).
- [Guias e referências](catalogo/guias-e-referencias.md) · 18 — Cheat sheets, guias de teste, normas e livros abertos.
- [Listas irmãs](catalogo/listas-irmas.md) · 15 — Outras listas abertas, mantidas, que aprofundam um tema específico.
- [Comunidade lusófona](catalogo/comunidade-lusofona.md) · 11 — Eventos, grupos e materiais em português.

### PE · Pessoas (25)

_Proteção para qualquer pessoa — senhas, 2FA, privacidade e comunicação._

- [Senhas e autenticação em dois fatores](catalogo/senhas-e-autenticacao.md) · 11 — Gerenciadores de senha e apps de 2FA abertos e auditáveis.
- [Privacidade e comunicação segura](catalogo/privacidade-pessoal.md) · 14 — Mensageiros, navegador, bloqueio de rastreadores e guias para o dia a dia.
<!-- /atlas:indice -->

## Brasil e Portugal

Nenhuma lista grande trata do que muda quando o incidente acontece aqui.

- [Legislação brasileira de segurança da informação](docs/brasil/legislacao.md): LGPD,
  Código Penal (art. 154-A), Marco Civil, normas do Banco Central e a Política Nacional de
  Cibersegurança
- [Incidente com dados pessoais, passo a passo](docs/brasil/incidente-lgpd-passo-a-passo.md):
  as primeiras 24 horas e a comunicação à ANPD em 3 dias úteis
- [Onde notificar e denunciar](docs/brasil/onde-notificar-e-denunciar.md): CERT.br, CTIR Gov,
  ANPD, SaferNet, delegacias
- [security.txt e divulgação responsável](docs/brasil/security-txt.md): modelo pronto para copiar
- [Portugal](docs/portugal/README.md): o novo Regime Jurídico da Cibersegurança (NIS2) e o CNCS

## Guias

- [Checklists](docs/checklists/README.md): servidor Linux, Windows, macOS, aplicação web,
  nuvem e a primeira hora de um incidente
- [Trilhas de estudo](docs/trilhas/README.md): fundamentos, blue team, AppSec e nuvem, só
  com material gratuito e laboratório legal
- [Frameworks](docs/frameworks.md): como o NIST CSF 2.0, o D3FEND, os CIS Controls, o ATT&CK
  e o OWASP Top 10 se encaixam no Atlas
- [Glossário português–inglês](docs/glossario.md)

## Como o Atlas se mantém vivo

1. **Toda proposta é validada na hora.** Um robô confere o formato, procura duplicata,
   confirma que o repositório existe, não está arquivado e teve atividade nos últimos 24 meses.
2. **Toda semana o robô mede tudo de novo** pela API do GitHub: estrelas, data do último
   commit, licença e arquivamento. As tabelas, o JSON e o `llms.txt` são regenerados.
3. **Projeto parado há mais de 24 meses ou arquivado sai das tabelas** e vai para o
   [cemitério](catalogo/cemiterio.md). Se voltar a ter atividade, o robô o devolve.
4. **Links de fora do GitHub são testados toda semana.** Link quebrado abre uma issue sozinho.

Os dados ficam em [`dados/`](dados/LEIA-ME.md), em YAML. Todo o resto é gerado por
[`scripts/ciberatlas.py`](scripts/ciberatlas.py).

## Use os dados

Tudo o que está aqui está em domínio público (CC0). Use em ferramenta, curso, painel,
pesquisa ou agente de IA, sem pedir permissão.

```bash
# todos os itens, com categoria, framework, estrelas e saúde
curl -s https://raw.githubusercontent.com/visionxma/ciberatlas/main/api/catalogo.json \
  | jq '.itens[] | select(.grupo == "DE" and .saude == "ativo") | {nome, link, estrelas}'
```

- [`api/catalogo.json`](api/catalogo.json): todos os itens, com grupo do NIST CSF 2.0,
  tática do D3FEND, CIS Controls, estrelas, última atividade e saúde
- [`api/categorias.json`](api/categorias.json): o mapa de grupos e categorias
- [`llms.txt`](llms.txt): o Atlas inteiro num formato que modelos de linguagem leem bem

## Selo para projetos listados

Seu projeto está no Atlas? Mostre no README dele:

```markdown
[![Listado no CiberAtlas](https://img.shields.io/badge/listado%20no-CiberAtlas-0b7285)](https://github.com/visionxma/ciberatlas)
```

## Contribuir

Não precisa saber git: [sugira um item pelo formulário](https://github.com/visionxma/ciberatlas/issues/new?template=sugerir-item.yml).
Quem prefere pull request edita um arquivo em `dados/itens/` e o robô faz o resto.
Critérios e passo a passo em [CONTRIBUTING.md](CONTRIBUTING.md).

## Ética e lei

Pratique só em sistema seu ou em laboratório feito para isso. No Brasil, invadir
dispositivo alheio é crime (art. 154-A do Código Penal, com pena de 1 a 4 anos de reclusão
desde a Lei 14.155/2021). O Atlas não lista malware, kit de phishing, coleção de exploits,
ferramenta de negação de serviço nem rastreamento de pessoas. Veja [o que entra e o que não
entra](dados/LEIA-ME.md#o-que-entra).

## Licença

Dados, catálogo e guias: [CC0 1.0](LICENSE), domínio público. Código do robô:
[MIT](scripts/LICENSE). Cada projeto listado tem a licença do próprio dono, mostrada na tabela.

---

<div align="center">

**CiberAtlas** · aberto, vivo e em domínio público

Mantido pela [VisionX](https://visionxma.com)

</div>
