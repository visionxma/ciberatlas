> **English:** How CiberAtlas maps its categories to NIST CSF 2.0, MITRE D3FEND, CIS Controls v8.1, MITRE ATT&CK, OWASP Top 10 and MITRE ATLAS, and how a defender uses each one.

# Frameworks: como o Atlas se organiza

Um framework (estrutura de referência) é uma lista organizada de coisas que uma equipe de segurança precisa fazer ou vigiar. O Atlas usa vários. Cada um responde a uma pergunta diferente. Esta página mostra qual pergunta cada um responde e em quais categorias do [catálogo](../catalogo/) você encontra ferramentas para ela.

Os mapeamentos vêm do arquivo `dados/categorias.yml`. Um mesmo item pode aparecer em mais de uma linha. Isso é esperado: uma ferramenta de SIEM ajuda ao mesmo tempo a detectar (NIST CSF) e a cumprir o controle de logs (CIS).

## Qual framework usar para quê

| Pergunta | Framework | Natureza |
|---|---|---|
| Como organizo a segurança da empresa inteira? | NIST CSF 2.0 | Estrutura de gestão, por funções |
| Que técnica defensiva cobre esta lacuna? | MITRE D3FEND | Ontologia (vocabulário formal) de contramedidas |
| Por onde começo a implantar controles concretos? | CIS Controls v8.1 | 18 controles priorizados |
| Como atacantes agem e como eu detecto isso? | MITRE ATT&CK | Base de conhecimento de táticas e técnicas |
| Quais falhas mais comuns minha aplicação web deve evitar? | OWASP Top 10:2025 | Lista de riscos, para desenvolvimento |
| E se minha aplicação usa IA ou agentes? | OWASP Top 10 for Agentic Applications e MITRE ATLAS | Riscos e técnicas específicos de IA |

## NIST CSF 2.0

O NIST Cybersecurity Framework (CSF, estrutura de segurança cibernética do instituto americano de padrões NIST) 2.0 foi publicado em 26/02/2024. Ele organiza o trabalho de segurança em seis funções: GV Govern (governar), ID Identify (identificar), PR Protect (proteger), DE Detect (detectar), RS Respond (responder) e RC Recover (recuperar). Fonte oficial: [NIST CSF 2.0](https://csrc.nist.gov/pubs/cswp/29/the-nist-cybersecurity-framework-csf-20/final).

O Atlas usa as seis funções como grupos principais do catálogo. Mais dois grupos são do próprio Atlas e não existem no CSF: AP (Aprender) e PE (Pessoas, proteção para qualquer indivíduo).

| Sigla | Função | Categorias do Atlas |
|---|---|---|
| GV | Govern (Governar) | [GRC e conformidade](../catalogo/grc-e-conformidade.md); [Privacidade e dados pessoais](../catalogo/privacidade-e-dados-pessoais.md) |
| ID | Identify (Identificar) | [Inventário de ativos](../catalogo/inventario-de-ativos.md); [Gestão de vulnerabilidades](../catalogo/gestao-de-vulnerabilidades.md); [Cadeia de suprimentos e SBOM](../catalogo/cadeia-de-suprimentos-e-sbom.md); [Modelagem de ameaças](../catalogo/modelagem-de-ameacas.md) |
| PR | Protect (Proteger) | [Análise estática de código (SAST)](../catalogo/analise-estatica-de-codigo.md); [Segredos vazados no código](../catalogo/segredos-no-codigo.md); [Gestão de segredos](../catalogo/gestao-de-segredos.md); [Identidade e acesso (IAM)](../catalogo/identidade-e-acesso.md); [Hardening de sistemas](../catalogo/hardening-de-sistemas.md); [Segurança em nuvem e IaC](../catalogo/seguranca-em-nuvem.md); [Containers e Kubernetes](../catalogo/containers-e-kubernetes.md); [Rede, firewall e VPN](../catalogo/rede-firewall-e-vpn.md); [WAF e proteção de aplicações web](../catalogo/waf-e-protecao-web.md); [Testes dinâmicos de aplicação (DAST)](../catalogo/testes-dinamicos-de-aplicacao.md); [Criptografia e TLS](../catalogo/criptografia-e-tls.md); [Segurança de e-mail](../catalogo/seguranca-de-email.md); [Segurança de IA e LLM](../catalogo/seguranca-de-ia.md) |
| DE | Detect (Detectar) | [SIEM e gestão de logs](../catalogo/siem-e-logs.md); [Regras de detecção](../catalogo/regras-de-deteccao.md); [Detecção de intrusão em rede (IDS/NSM)](../catalogo/deteccao-de-rede.md); [Endpoint e telemetria (EDR)](../catalogo/endpoint-e-telemetria.md); [Inteligência de ameaças](../catalogo/inteligencia-de-ameacas.md); [Enganação e iscas (honeypots)](../catalogo/enganacao-e-iscas.md) |
| RS | Respond (Responder) | [Resposta a incidentes e SOAR](../catalogo/resposta-a-incidentes.md); [Forense digital](../catalogo/forense-digital.md); [Análise de malware (defensiva)](../catalogo/analise-de-malware.md) |
| RC | Recover (Recuperar) | [Backup e recuperação](../catalogo/backup-e-recuperacao.md) |
| AP | Learn (Aprender) | [Laboratórios e CTF (prática legal)](../catalogo/laboratorios-e-ctf.md); [Cursos gratuitos](../catalogo/cursos-gratuitos.md); [Certificações](../catalogo/certificacoes.md); [Guias e referências](../catalogo/guias-e-referencias.md); [Listas irmãs](../catalogo/listas-irmas.md); [Comunidade lusófona](../catalogo/comunidade-lusofona.md) |
| PE | People (Pessoas) | [Senhas e autenticação em dois fatores](../catalogo/senhas-e-autenticacao.md); [Privacidade e comunicação segura](../catalogo/privacidade-pessoal.md) |

Como usar: faça um diagnóstico simples. Para cada função, anote o que sua organização já tem e o que falta. Depois abra as categorias da função mais fraca. O CSF não prescreve ferramenta; ele diz onde olhar. Para a lista completa de resultados esperados, consulte a [página do NIST](https://www.nist.gov/cyberframework).

## MITRE D3FEND

O MITRE D3FEND é uma ontologia de técnicas defensivas. Ele descreve contramedidas em vocabulário comum, para que equipes comparem o que cada controle faz. O Atlas usa a versão 1.6.0 da ontologia, de 31/08/2026. Fonte: [D3FEND](https://d3fend.mitre.org). As táticas são confirmadas pela [API oficial](https://d3fend.mitre.org/api/tactic/all.json).

São sete táticas, na ordem de exibição da API:

1. Model: entender e mapear o que existe.
2. Harden: reduzir a superfície de ataque.
3. Detect: identificar atividade maliciosa.
4. Isolate: criar barreiras entre sistemas e dados.
5. Deceive: oferecer iscas a quem invade.
6. Evict: remover o invasor do ambiente.
7. Restore: devolver o sistema a um estado bom.

No Atlas, o campo `d3fend` de cada categoria indica a tática que ela mais exerce. As categorias dos grupos AP e PE não têm tática, porque ensinam ou protegem pessoas e não sistemas.

| Tática | Categorias do Atlas |
|---|---|
| Model | [GRC e conformidade](../catalogo/grc-e-conformidade.md); [Privacidade e dados pessoais](../catalogo/privacidade-e-dados-pessoais.md); [Inventário de ativos](../catalogo/inventario-de-ativos.md); [Cadeia de suprimentos e SBOM](../catalogo/cadeia-de-suprimentos-e-sbom.md); [Modelagem de ameaças](../catalogo/modelagem-de-ameacas.md) |
| Harden | [Gestão de vulnerabilidades](../catalogo/gestao-de-vulnerabilidades.md); [Análise estática de código (SAST)](../catalogo/analise-estatica-de-codigo.md); [Segredos vazados no código](../catalogo/segredos-no-codigo.md); [Gestão de segredos](../catalogo/gestao-de-segredos.md); [Identidade e acesso (IAM)](../catalogo/identidade-e-acesso.md); [Hardening de sistemas](../catalogo/hardening-de-sistemas.md); [Segurança em nuvem e IaC](../catalogo/seguranca-em-nuvem.md); [Containers e Kubernetes](../catalogo/containers-e-kubernetes.md); [Testes dinâmicos de aplicação (DAST)](../catalogo/testes-dinamicos-de-aplicacao.md); [Criptografia e TLS](../catalogo/criptografia-e-tls.md); [Segurança de IA e LLM](../catalogo/seguranca-de-ia.md) |
| Detect | [SIEM e gestão de logs](../catalogo/siem-e-logs.md); [Regras de detecção](../catalogo/regras-de-deteccao.md); [Detecção de intrusão em rede (IDS/NSM)](../catalogo/deteccao-de-rede.md); [Endpoint e telemetria (EDR)](../catalogo/endpoint-e-telemetria.md); [Inteligência de ameaças](../catalogo/inteligencia-de-ameacas.md); [Forense digital](../catalogo/forense-digital.md); [Análise de malware (defensiva)](../catalogo/analise-de-malware.md) |
| Isolate | [Rede, firewall e VPN](../catalogo/rede-firewall-e-vpn.md); [WAF e proteção de aplicações web](../catalogo/waf-e-protecao-web.md); [Segurança de e-mail](../catalogo/seguranca-de-email.md) |
| Deceive | [Enganação e iscas (honeypots)](../catalogo/enganacao-e-iscas.md) |
| Evict | [Resposta a incidentes e SOAR](../catalogo/resposta-a-incidentes.md) |
| Restore | [Backup e recuperação](../catalogo/backup-e-recuperacao.md) |

Como usar: se um relatório de incidente aponta que o invasor ficou semanas sem ser visto, a lacuna está em Detect. Abra as categorias dessa tática. Se o problema foi não conseguir voltar a operar, olhe Restore.

## CIS Controls v8.1

Os CIS Controls (controles do Center for Internet Security) v8.1 são 18 controles de segurança priorizados. Fonte: [lista oficial](https://www.cisecurity.org/controls/cis-controls-list). A coluna da direita mostra as categorias do Atlas que ajudam a cumpri-los, a partir do campo `cis`.

| Nº | Controle (nome oficial em inglês) | Categorias do Atlas |
|---|---|---|
| 1 | Inventory and Control of Enterprise Assets | [Inventário de ativos](../catalogo/inventario-de-ativos.md) |
| 2 | Inventory and Control of Software Assets | [Inventário de ativos](../catalogo/inventario-de-ativos.md); [Cadeia de suprimentos e SBOM](../catalogo/cadeia-de-suprimentos-e-sbom.md) |
| 3 | Data Protection | [Privacidade e dados pessoais](../catalogo/privacidade-e-dados-pessoais.md); [Segredos vazados no código](../catalogo/segredos-no-codigo.md); [Gestão de segredos](../catalogo/gestao-de-segredos.md); [Criptografia e TLS](../catalogo/criptografia-e-tls.md) |
| 4 | Secure Configuration of Enterprise Assets and Software | [Hardening de sistemas](../catalogo/hardening-de-sistemas.md); [Segurança em nuvem e IaC](../catalogo/seguranca-em-nuvem.md); [Containers e Kubernetes](../catalogo/containers-e-kubernetes.md) |
| 5 | Account Management | [Identidade e acesso (IAM)](../catalogo/identidade-e-acesso.md); [Senhas e autenticação em dois fatores](../catalogo/senhas-e-autenticacao.md) |
| 6 | Access Control Management | [Gestão de segredos](../catalogo/gestao-de-segredos.md); [Identidade e acesso (IAM)](../catalogo/identidade-e-acesso.md); [Senhas e autenticação em dois fatores](../catalogo/senhas-e-autenticacao.md) |
| 7 | Continuous Vulnerability Management | [Gestão de vulnerabilidades](../catalogo/gestao-de-vulnerabilidades.md); [Containers e Kubernetes](../catalogo/containers-e-kubernetes.md) |
| 8 | Audit Log Management | [SIEM e gestão de logs](../catalogo/siem-e-logs.md); [Regras de detecção](../catalogo/regras-de-deteccao.md) |
| 9 | Email and Web Browser Protections | [Segurança de e-mail](../catalogo/seguranca-de-email.md); [Privacidade e comunicação segura](../catalogo/privacidade-pessoal.md) |
| 10 | Malware Defenses | [Endpoint e telemetria (EDR)](../catalogo/endpoint-e-telemetria.md); [Análise de malware (defensiva)](../catalogo/analise-de-malware.md) |
| 11 | Data Recovery | [Backup e recuperação](../catalogo/backup-e-recuperacao.md) |
| 12 | Network Infrastructure Management | [Rede, firewall e VPN](../catalogo/rede-firewall-e-vpn.md) |
| 13 | Network Monitoring and Defense | [Rede, firewall e VPN](../catalogo/rede-firewall-e-vpn.md); [WAF e proteção de aplicações web](../catalogo/waf-e-protecao-web.md); [SIEM e gestão de logs](../catalogo/siem-e-logs.md); [Regras de detecção](../catalogo/regras-de-deteccao.md); [Detecção de intrusão em rede (IDS/NSM)](../catalogo/deteccao-de-rede.md); [Endpoint e telemetria (EDR)](../catalogo/endpoint-e-telemetria.md); [Inteligência de ameaças](../catalogo/inteligencia-de-ameacas.md); [Enganação e iscas (honeypots)](../catalogo/enganacao-e-iscas.md) |
| 14 | Security Awareness and Skills Training | [Laboratórios e CTF (prática legal)](../catalogo/laboratorios-e-ctf.md); [Cursos gratuitos](../catalogo/cursos-gratuitos.md); [Certificações](../catalogo/certificacoes.md); [Guias e referências](../catalogo/guias-e-referencias.md); [Listas irmãs](../catalogo/listas-irmas.md); [Comunidade lusófona](../catalogo/comunidade-lusofona.md) |
| 15 | Service Provider Management | [GRC e conformidade](../catalogo/grc-e-conformidade.md) |
| 16 | Application Software Security | [Cadeia de suprimentos e SBOM](../catalogo/cadeia-de-suprimentos-e-sbom.md); [Modelagem de ameaças](../catalogo/modelagem-de-ameacas.md); [Análise estática de código (SAST)](../catalogo/analise-estatica-de-codigo.md); [Segredos vazados no código](../catalogo/segredos-no-codigo.md); [Segurança em nuvem e IaC](../catalogo/seguranca-em-nuvem.md); [WAF e proteção de aplicações web](../catalogo/waf-e-protecao-web.md); [Testes dinâmicos de aplicação (DAST)](../catalogo/testes-dinamicos-de-aplicacao.md); [Segurança de IA e LLM](../catalogo/seguranca-de-ia.md) |
| 17 | Incident Response Management | [GRC e conformidade](../catalogo/grc-e-conformidade.md); [Resposta a incidentes e SOAR](../catalogo/resposta-a-incidentes.md); [Forense digital](../catalogo/forense-digital.md); [Análise de malware (defensiva)](../catalogo/analise-de-malware.md) |
| 18 | Penetration Testing | [Testes dinâmicos de aplicação (DAST)](../catalogo/testes-dinamicos-de-aplicacao.md) |

Como usar: os controles ajudam uma equipe pequena a decidir a ordem de trabalho. Comece pelos de número baixo (inventário, software, dados, configuração, contas). Sem saber o que existe, não há como proteger. O CIS também publica agrupamentos por tamanho de organização; consulte a [página dos controles](https://www.cisecurity.org/controls).

## MITRE ATT&CK

O MITRE ATT&CK (Adversarial Tactics, Techniques, and Common Knowledge) é uma base pública de conhecimento sobre como atacantes agem, organizada em táticas (o objetivo), técnicas (como se alcança o objetivo) e subtécnicas. O Atlas considera a versão 20.0, de 13/10/2026. Site oficial: [attack.mitre.org](https://attack.mitre.org). Os dados estruturados em formato STIX (padrão de troca de inteligência de ameaças) ficam em [attack-stix-data](https://github.com/mitre-attack/attack-stix-data).

O Atlas não lista as táticas aqui. Os nomes e a organização podem mudar entre versões. Consulte sempre a matriz na página oficial.

Um defensor usa o ATT&CK de quatro formas:

1. Mapear detecções. Cada regra de detecção recebe a técnica que cobre. Regras do projeto [Sigma](https://github.com/SigmaHQ/sigma) já trazem essas marcações. O resultado é um inventário do que você consegue ver.
2. Achar lacunas. Pinte a matriz com o que está coberto. O [ATT&CK Navigator](https://github.com/mitre-attack/attack-navigator) faz isso em camadas. As áreas em branco são candidatas a novas regras.
3. Priorizar. Nenhuma equipe cobre tudo. Escolha as técnicas que relatórios de inteligência associam ao seu setor e comece por elas.
4. Planejar exercícios. Um exercício de purple team (equipe vermelha e azul trabalhando juntas) testa técnicas específicas em ambiente autorizado e verifica se o alerta disparou.

Categorias do Atlas mais ligadas ao ATT&CK: [Regras de detecção](../catalogo/regras-de-deteccao.md), [Inteligência de ameaças](../catalogo/inteligencia-de-ameacas.md), [SIEM e gestão de logs](../catalogo/siem-e-logs.md) e [Endpoint e telemetria (EDR)](../catalogo/endpoint-e-telemetria.md).

## OWASP Top 10:2025

O OWASP (Open Worldwide Application Security Project) Top 10 é a lista de riscos mais críticos em aplicações web, voltada a quem desenvolve. Fonte: [OWASP Top 10:2025](https://owasp.org/Top10/2025/).

| Código | Risco (nome oficial em inglês) | Onde aprofundar no Atlas |
|---|---|---|
| A01 | Broken Access Control (controle de acesso quebrado) | [Identidade e acesso (IAM)](../catalogo/identidade-e-acesso.md), [Testes dinâmicos (DAST)](../catalogo/testes-dinamicos-de-aplicacao.md) |
| A02 | Security Misconfiguration (configuração de segurança incorreta) | [Hardening de sistemas](../catalogo/hardening-de-sistemas.md), [Segurança em nuvem e IaC](../catalogo/seguranca-em-nuvem.md) |
| A03 | Software Supply Chain Failures (falhas na cadeia de suprimentos de software) | [Cadeia de suprimentos e SBOM](../catalogo/cadeia-de-suprimentos-e-sbom.md), [Gestão de vulnerabilidades](../catalogo/gestao-de-vulnerabilidades.md) |
| A04 | Cryptographic Failures (falhas criptográficas) | [Criptografia e TLS](../catalogo/criptografia-e-tls.md) |
| A05 | Injection (injeção) | [Análise estática (SAST)](../catalogo/analise-estatica-de-codigo.md), [WAF](../catalogo/waf-e-protecao-web.md) |
| A06 | Insecure Design (projeto inseguro) | [Modelagem de ameaças](../catalogo/modelagem-de-ameacas.md) |
| A07 | Authentication Failures (falhas de autenticação) | [Identidade e acesso (IAM)](../catalogo/identidade-e-acesso.md), [Senhas e 2FA](../catalogo/senhas-e-autenticacao.md) |
| A08 | Software or Data Integrity Failures (falhas de integridade de software ou dados) | [Cadeia de suprimentos e SBOM](../catalogo/cadeia-de-suprimentos-e-sbom.md) |
| A09 | Security Logging and Alerting Failures (falhas de registro e alerta) | [SIEM e gestão de logs](../catalogo/siem-e-logs.md) |
| A10 | Mishandling of Exceptional Conditions (tratamento incorreto de condições excepcionais) | [Análise estática (SAST)](../catalogo/analise-estatica-de-codigo.md), [Testes dinâmicos (DAST)](../catalogo/testes-dinamicos-de-aplicacao.md) |

A coluna "Onde aprofundar" é uma escolha editorial do Atlas, não um mapeamento oficial da OWASP. A trilha [AppSec](trilhas/appsec.md) pratica cada item.

## IA e agentes: OWASP Agentic e MITRE ATLAS

Quem constrói ou usa sistemas com IA enfrenta riscos que o Top 10 web não cobre. Duas referências ajudam.

1. **OWASP Top 10 for Agentic Applications** (edição 2026, publicada em 09/12/2025). Lista os riscos de agentes de IA, isto é, programas que planejam e executam ações sozinhos. O primeiro item, ASI01, é Agent Goal Hijack (sequestro do objetivo do agente). Fonte: [anúncio oficial](https://genai.owasp.org/2025/12/09/owasp-top-10-for-agentic-applications-the-benchmark-for-agentic-security-in-the-age-of-autonomous-ai/). O projeto irmão para modelos de linguagem é o [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/).
2. **MITRE ATLAS** (Adversarial Threat Landscape for Artificial-Intelligence Systems). Base de conhecimento no mesmo estilo do ATT&CK, voltada a sistemas de IA. O Atlas considera a release 2026.09. Site: [atlas.mitre.org](https://atlas.mitre.org). Dados: [atlas-data](https://github.com/mitre-atlas/atlas-data).

Use a OWASP como lista de verificação de projeto e o MITRE ATLAS para mapear detecções e exercícios, como se faz com o ATT&CK. Ferramentas e guias estão em [Segurança de IA e LLM](../catalogo/seguranca-de-ia.md).

## Próximos passos

1. Para começar a estudar, siga as [trilhas](trilhas/README.md).
2. Para entender um termo, consulte o [glossário](glossario.md).
3. Para ferramentas, abra o [catálogo](../catalogo/).

Revisado em 18/10/2026
