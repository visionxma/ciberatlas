# Comece aqui: desenvolvedor

> **English:** Ten ordered actions for developers: secrets out of git, SAST and dependency scanning in CI, SBOM, OWASP Top 10:2025, security headers, off-the-shelf authentication and a security.txt file.

## Você está aqui se…

Você escreve e publica software (site, API, app) e quer o conjunto de práticas que mais reduz risco por hora gasta. Serve para quem trabalha sozinho e para quem está num time com pipeline de CI (integração contínua, a esteira que testa e publica o código a cada alteração).

## As 10 primeiras ações, em ordem de impacto

- [ ] **1. Tire os segredos do git.** Chaves de API, senhas e tokens no repositório são lidos por robôs em minutos depois de publicados. Varra o histórico com [Gitleaks](https://github.com/gitleaks/gitleaks) ou [TruffleHog](https://github.com/trufflesecurity/trufflehog) (`gitleaks detect --source .` só lê). Achou algo, revogue a chave; apagar o commit não basta. Veja [segredos vazados no código](../../catalogo/segredos-no-codigo.md).
- [ ] **2. Guarde segredos em cofre ou variável de ambiente do provedor,** nunca em arquivo versionado. Use um hook de pré-commit (script que roda antes de cada commit) com a mesma ferramenta do item 1. Guia: [Secrets Management Cheat Sheet (OWASP)](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html) e [gestão de segredos](../../catalogo/gestao-de-segredos.md).
- [ ] **3. Use autenticação pronta, não feita à mão.** Provedor de identidade, biblioteca madura do seu framework ou login social. Cadastro, recuperação de senha e sessão têm detalhes que se erram fácil. Se precisar guardar senha, siga o [Password Storage Cheat Sheet (OWASP)](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html). Ofereça 2FA ou passkey (login sem senha). Catálogo: [identidade e acesso](../../catalogo/identidade-e-acesso.md).
- [ ] **4. Varra dependências no CI.** A maioria do código que roda em produção é de terceiros. Use o `npm audit`, o [OSV-Scanner](https://github.com/google/osv-scanner), o [Trivy](https://github.com/aquasecurity/trivy) ou o [Dependabot](https://docs.github.com/en/code-security/dependabot) para avisar de versões com falha conhecida. Catálogo: [gestão de vulnerabilidades](../../catalogo/gestao-de-vulnerabilidades.md).
- [ ] **5. Rode SAST (análise estática: lê o código sem executar e aponta padrões inseguros) em todo pull request.** O [Semgrep](https://semgrep.dev/) é um ponto de partida (`semgrep scan --config p/owasp-top-ten`). Falha crítica bloqueia o merge. Catálogo: [análise estática de código](../../catalogo/analise-estatica-de-codigo.md).
- [ ] **6. Conheça o OWASP Top 10:2025** e confira o seu app contra cada item. A lista tem 10 categorias de risco, de controle de acesso quebrado a tratamento errado de condições excepcionais. Fonte: [OWASP Top 10:2025](https://owasp.org/Top10/2025/). Use o [checklist de aplicação web](../checklists/aplicacao-web.md), que já vem mapeado.
- [ ] **7. Gere um SBOM (lista de componentes do software, como a lista de ingredientes) a cada build.** Com ele, quando sair uma falha nova você responde "estou afetado?" em minutos. Ferramentas: [Syft](https://github.com/anchore/syft) (`syft dir:. -o cyclonedx-json`), formatos [CycloneDX](https://cyclonedx.org/) e [SPDX](https://spdx.dev/). Contexto: [CISA SBOM](https://www.cisa.gov/sbom) e [cadeia de suprimentos e SBOM](../../catalogo/cadeia-de-suprimentos-e-sbom.md).
- [ ] **8. Envie os cabeçalhos de segurança HTTP:** `Strict-Transport-Security`, `Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`. Meça o seu site no [HTTP Observatory (MDN)](https://developer.mozilla.org/en-US/observatory) e consulte o [HTTP Headers Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html). Veja [WAF e proteção web](../../catalogo/waf-e-protecao-web.md).
- [ ] **9. Valide toda entrada e use consulta parametrizada** no banco. Nunca monte SQL concatenando texto do usuário. Guia: [SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html). Teste o app rodando com [OWASP ZAP](https://www.zaproxy.org/), só no seu próprio ambiente: [testes dinâmicos (DAST)](../../catalogo/testes-dinamicos-de-aplicacao.md).
- [ ] **10. Publique um `security.txt`** em `/.well-known/security.txt`, com um contato para quem achar uma falha no seu sistema. Passo a passo: [security.txt](../brasil/security-txt.md) e [securitytxt.org](https://securitytxt.org/).

## O que NÃO perder tempo fazendo agora

- Escrever sua própria criptografia ou seu próprio sistema de sessão. Use as bibliotecas padrão do framework.
- Perseguir todo alerta de severidade baixa de uma ferramenta nova. Comece pelos críticos e pelos que têm correção disponível.
- Tentar chegar a "zero alertas" antes de ligar o scanner no CI. Ligue, registre o ponto de partida e impeça que piore.
- Testar o sistema de terceiros "para ajudar". Sem autorização escrita é crime; veja [legislação](../brasil/legislacao.md).

## Próximo nível

- Faça [modelagem de ameaças](../../catalogo/modelagem-de-ameacas.md) antes de construir funcionalidades novas ([Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)).
- Meça o nível do projeto com [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/) e [OpenSSF Scorecard](https://scorecard.dev/).
- Assine artefatos e adote os níveis do [SLSA](https://slsa.dev/) para a esteira de build.
- Revise containers e infraestrutura como código: [containers e Kubernetes](../../catalogo/containers-e-kubernetes.md) e [nuvem e IaC](../../catalogo/seguranca-em-nuvem.md).

Revisado em 18/10/2026
