<!-- Gerado por scripts/ciberatlas.py — não edite à mão -->
# Catálogo do CiberAtlas

**412 itens** em **37 categorias** · **341 projetos abertos** conferidos pelo robô em 26/10/2026 (313 com atividade nos últimos 6 meses) · 2,98 milhões de estrelas somadas · 3 no [cemitério](cemiterio.md)

[English](en/README.md) · [← Início](../README.md) · [Cemitério](cemiterio.md)

### GV · Governar (17)

_Estratégia, papéis, políticas, conformidade e privacidade._

- [GRC e conformidade](grc-e-conformidade.md) · 7 — Gestão de riscos, controles e auditorias (ISO 27001, NIST, CIS, LGPD).
- [Privacidade e dados pessoais](privacidade-e-dados-pessoais.md) · 10 — Encontrar, classificar e proteger dados pessoais — base técnica da LGPD.

### ID · Identificar (50)

_Saber o que você tem, o que está exposto e o que pode dar errado._

- [Inventário de ativos](inventario-de-ativos.md) · 12 — Saber quais máquinas, softwares e contas existem na sua organização.
- [Gestão de vulnerabilidades](gestao-de-vulnerabilidades.md) · 15 — Achar e priorizar falhas conhecidas nos seus próprios sistemas, imagens e dependências.
- [Cadeia de suprimentos e SBOM](cadeia-de-suprimentos-e-sbom.md) · 15 — Lista de componentes (SBOM), assinatura de artefatos e saúde das dependências.
- [Modelagem de ameaças](modelagem-de-ameacas.md) · 8 — Desenhar o sistema e descobrir onde ele pode ser atacado antes de escrever o código.

### PR · Proteger (114)

_Código, identidades, sistemas, nuvem e rede endurecidos antes do ataque._

- [Análise estática de código (SAST)](analise-estatica-de-codigo.md) · 9 — Encontrar falhas de segurança no código-fonte antes de ir para produção.
- [Segredos vazados no código](segredos-no-codigo.md) · 8 — Achar chaves, senhas e tokens esquecidos no git antes que outra pessoa ache.
- [Gestão de segredos](gestao-de-segredos.md) · 6 — Guardar e distribuir credenciais de aplicação sem deixá-las em texto puro.
- [Identidade e acesso (IAM)](identidade-e-acesso.md) · 10 — Login único, MFA, controle de acesso e acesso privilegiado.
- [Hardening de sistemas](hardening-de-sistemas.md) · 10 — Auditar e endurecer Linux, Windows e macOS contra benchmarks conhecidos.
- [Segurança em nuvem e IaC](seguranca-em-nuvem.md) · 8 — Auditar contas AWS, Azure e GCP e a infraestrutura como código antes do deploy.
- [Containers e Kubernetes](containers-e-kubernetes.md) · 9 — Políticas, benchmarks e varredura para imagens e clusters.
- [Rede, firewall e VPN](rede-firewall-e-vpn.md) · 11 — Segmentar, filtrar e conectar com segurança.
- [WAF e proteção de aplicações web](waf-e-protecao-web.md) · 7 — Filtrar tráfego malicioso antes que ele chegue à aplicação.
- [Testes dinâmicos de aplicação (DAST)](testes-dinamicos-de-aplicacao.md) · 6 — Testar a própria aplicação rodando, no pipeline, antes do atacante.
- [Criptografia e TLS](criptografia-e-tls.md) · 10 — Certificados, criptografia de arquivos e auditoria de configuração TLS.
- [Segurança de e-mail](seguranca-de-email.md) · 10 — SPF, DKIM, DMARC, antispam e relatórios de abuso do seu domínio.
- [Segurança de IA e LLM](seguranca-de-ia.md) · 10 — Testar e proteger seus próprios modelos e agentes contra injeção de prompt e vazamento.

### DE · Detectar (61)

_Ver o ataque acontecendo — logs, rede, endpoint, inteligência e iscas._

- [SIEM e gestão de logs](siem-e-logs.md) · 10 — Centralizar, correlacionar e alertar sobre eventos de segurança.
- [Regras de detecção](regras-de-deteccao.md) · 11 — Regras prontas e abertas (Sigma, YARA e afins) e ferramentas que as aplicam.
- [Detecção de intrusão em rede (IDS/NSM)](deteccao-de-rede.md) · 11 — Ver o tráfego, registrar sessões e detectar comportamento anômalo.
- [Endpoint e telemetria (EDR)](endpoint-e-telemetria.md) · 10 — Visibilidade e detecção em servidores, estações e containers.
- [Inteligência de ameaças](inteligencia-de-ameacas.md) · 10 — Compartilhar e enriquecer indicadores e entender quem ataca e como.
- [Enganação e iscas (honeypots)](enganacao-e-iscas.md) · 9 — Armadilhas que só um intruso tocaria — alarme quase sem falso positivo.

### RS · Responder (34)

_Conter, investigar e entender o que aconteceu._

- [Resposta a incidentes e SOAR](resposta-a-incidentes.md) · 11 — Casos, playbooks, automação e coleta remota durante o incidente.
- [Forense digital](forense-digital.md) · 11 — Memória, disco e linha do tempo para reconstruir o que aconteceu.
- [Análise de malware (defensiva)](analise-de-malware.md) · 12 — Entender um arquivo suspeito para detectar e remover — engenharia reversa e triagem.

### RC · Recuperar (12)

_Voltar a operar com os dados íntegros._

- [Backup e recuperação](backup-e-recuperacao.md) · 12 — Cópias criptografadas, verificáveis e restauráveis — a última linha contra ransomware.

### AP · Aprender (99)

_Laboratórios legais, cursos, certificações, guias e comunidades._

- [Laboratórios e CTF (prática legal)](laboratorios-e-ctf.md) · 27 — Ambientes feitos para treinar sem tocar em sistema de ninguém.
- [Cursos gratuitos](cursos-gratuitos.md) · 12 — Cursos abertos de universidades e organizações reconhecidas.
- [Certificações](certificacoes.md) · 16 — Certificações reconhecidas, por nível e foco; as de teste de invasão entram como formação (sem preço — ele muda).
- [Guias e referências](guias-e-referencias.md) · 18 — Cheat sheets, guias de teste, normas e livros abertos.
- [Listas irmãs](listas-irmas.md) · 15 — Outras listas abertas, mantidas, que aprofundam um tema específico.
- [Comunidade lusófona](comunidade-lusofona.md) · 11 — Eventos, grupos e materiais em português.

### PE · Pessoas (25)

_Proteção para qualquer pessoa — senhas, 2FA, privacidade e comunicação._

- [Senhas e autenticação em dois fatores](senhas-e-autenticacao.md) · 11 — Gerenciadores de senha e apps de 2FA abertos e auditáveis.
- [Privacidade e comunicação segura](privacidade-pessoal.md) · 14 — Mensageiros, navegador, bloqueio de rastreadores e guias para o dia a dia.
