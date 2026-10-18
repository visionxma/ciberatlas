# Checklist: aplicação web (OWASP Top 10:2025)

> **English:** Web application checklist mapped to the OWASP Top 10:2025 categories A01 to A10, with read-only checks you can run against your own app.

O [OWASP Top 10:2025](https://owasp.org/Top10/2025/) é a lista da fundação OWASP (Open Worldwide Application Security Project) com as 10 categorias de risco mais relevantes para aplicações web. Use este checklist em cada projeto novo e antes de cada versão grande. Rode os testes **apenas** contra aplicações suas ou com autorização escrita.

## A01 · Broken Access Control (controle de acesso quebrado)

[Página oficial](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/). A falha de deixar um usuário ver ou mudar o que não é dele. Inclui SSRF (o servidor fazer requisições a endereços internos por pedido do atacante), listado nos CWEs da categoria.

- [ ] Negar por padrão: toda rota exige permissão explícita.
- [ ] A permissão é checada **no servidor**, em cada requisição, e não só escondendo o botão na tela.
- [ ] Todo acesso a registro por identificador (`/pedidos/123`) confere que o registro pertence ao usuário. Teste logando com duas contas e trocando o identificador.
- [ ] Proteção contra CSRF (pedido forjado a partir de outro site): cookies `SameSite` e token anti-CSRF nas ações que mudam estado.
- [ ] O servidor só chama endereços permitidos quando busca URL fornecida por usuário (lista de destinos aceitos, bloqueio de redes internas e do endereço de metadados da nuvem).
- [ ] Listagem de diretórios desligada; arquivos de backup e `.git` fora do servidor web.
  - Conferir: `curl -s -o /dev/null -w '%{http_code}\n' https://seu-site/.git/HEAD` (esperado: 404 ou 403)
- Guia: [Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)

## A02 · Security Misconfiguration (configuração insegura)

[Página oficial](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/). Subiu de posição conforme mais software depende de configuração; inclui XXE (leitura de arquivos por XML malformado).

- [ ] Modo de depuração desligado em produção; páginas de erro sem detalhes internos.
- [ ] Contas e senhas padrão trocadas; painéis administrativos fora da internet aberta.
- [ ] Cabeçalhos de segurança enviados.
  - Conferir: `curl -sI https://seu-site | grep -iE 'strict-transport-security|content-security-policy|x-content-type-options|referrer-policy|permissions-policy'`
  - Ou meça no [HTTP Observatory](https://developer.mozilla.org/en-US/observatory). Guia: [HTTP Headers Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html)
- [ ] Processadores de XML com entidades externas desligadas.
- [ ] Configuração da nuvem e dos containers revisada: veja o [checklist de nuvem](nuvem.md) e [containers e Kubernetes](../../catalogo/containers-e-kubernetes.md).
- [ ] `security.txt` publicado: [como fazer](../brasil/security-txt.md).

## A03 · Software Supply Chain Failures (falhas na cadeia de suprimentos de software)

[Página oficial](https://owasp.org/Top10/2025/A03_2025-Software_Supply_Chain_Failures/). Risco que vem de dependências, ferramentas de build e fornecedores.

- [ ] Lista de componentes (SBOM) gerada a cada build. Ferramenta: [Syft](https://github.com/anchore/syft); formatos [CycloneDX](https://cyclonedx.org/) e [SPDX](https://spdx.dev/).
- [ ] Varredura de dependências no CI: [OSV-Scanner](https://github.com/google/osv-scanner), [Trivy](https://github.com/aquasecurity/trivy) ou [Dependabot](https://docs.github.com/en/code-security/dependabot).
  - Conferir (Node): `npm audit`
- [ ] Versões fixadas por arquivo de trava (lockfile) e revisadas em cada atualização; só pacotes de fontes confiáveis.
- [ ] Pipeline de CI com permissões mínimas; segredos do pipeline não visíveis a código de terceiros.
- [ ] Artefatos assinados e procedência registrada: [SLSA](https://slsa.dev/); saúde do projeto: [OpenSSF Scorecard](https://scorecard.dev/).
- Catálogo: [cadeia de suprimentos e SBOM](../../catalogo/cadeia-de-suprimentos-e-sbom.md)

## A04 · Cryptographic Failures (falhas criptográficas)

[Página oficial](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/).

- [ ] HTTPS em tudo, com redirecionamento do HTTP e HSTS (cabeçalho que obriga o navegador a usar HTTPS).
  - Conferir: `curl -sI https://seu-site | grep -i strict-transport-security`
- [ ] TLS atual e sem protocolos antigos. Guia: [Transport Layer Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html) e [criptografia e TLS](../../catalogo/criptografia-e-tls.md).
- [ ] Senhas guardadas com função própria para isso (Argon2id, scrypt ou bcrypt), nunca em texto puro ou com hash simples. Guia: [Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).
- [ ] Dados sensíveis (documentos, cartões, saúde) cifrados em repouso; chaves fora do código e rotacionáveis.
- [ ] Só algoritmos e bibliotecas padrão; nada de criptografia inventada.

## A05 · Injection (injeção)

[Página oficial](https://owasp.org/Top10/2025/A05_2025-Injection/). Dado do usuário interpretado como comando (SQL, sistema operacional, LDAP, XSS).

- [ ] Consultas parametrizadas ou ORM em todo acesso ao banco. Guia: [SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html).
- [ ] Saída escapada conforme o contexto (HTML, atributo, JavaScript, URL); framework com escape automático ligado.
- [ ] `Content-Security-Policy` configurado como segunda barreira contra XSS (script injetado no navegador). Guia: [CSP Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html).
- [ ] Nenhum dado de usuário vai para comando de sistema, caminho de arquivo ou avaliação de código.
- [ ] SAST no CI: [Semgrep](https://semgrep.dev/) (`semgrep scan --config p/owasp-top-ten`) e [DAST com OWASP ZAP](https://www.zaproxy.org/) no ambiente de teste. Catálogo: [análise estática](../../catalogo/analise-estatica-de-codigo.md), [testes dinâmicos](../../catalogo/testes-dinamicos-de-aplicacao.md).

## A06 · Insecure Design (design inseguro)

[Página oficial](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/). Falha na ideia, que nenhuma correção de código conserta depois.

- [ ] Modelagem de ameaças antes de funcionalidades sensíveis (pagamento, login, upload, API pública). Guia: [Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html) e [modelagem de ameaças](../../catalogo/modelagem-de-ameacas.md).
- [ ] Limite de tentativas e de uso em login, recuperação de senha, cadastro, cupom e envio de e-mail.
- [ ] Regras de negócio com casos de abuso testados (comprar valor negativo, repetir cupom, pular etapa do fluxo).
- [ ] Ambientes de teste e produção separados, com dados reais fora do teste.
- [ ] Requisitos de segurança escritos, por exemplo com base no [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/).

## A07 · Authentication Failures (falhas de autenticação)

[Página oficial](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/).

- [ ] Autenticação pronta (provedor de identidade ou biblioteca madura) em vez de código próprio. Catálogo: [identidade e acesso](../../catalogo/identidade-e-acesso.md).
- [ ] 2FA ou passkey (login sem senha) disponível, obrigatório para administradores.
- [ ] Senha nova checada contra lista de senhas vazadas; sem regras que forçam senha curta e complicada.
- [ ] Sessão com identificador aleatório, cookie `HttpOnly`, `Secure` e `SameSite`; sessão renovada no login e destruída no logout.
- [ ] Recuperação de senha por link de uso único e curta duração; mensagens iguais para conta existente e inexistente.
- [ ] Bloqueio ou atraso progressivo após tentativas falhas.
- Guia: [Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

## A08 · Software or Data Integrity Failures (falhas de integridade de software ou dados)

[Página oficial](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/).

- [ ] Scripts de terceiros carregados com Subresource Integrity (SRI, hash que o navegador confere) ou servidos por você.
- [ ] Atualizações automáticas e plugins só de fontes assinadas e verificadas.
- [ ] Dados serializados vindos de fora (JSON, objetos, cookies) validados por esquema; nada de desserializar objeto arbitrário.
- [ ] Pipeline de CI/CD exige revisão de código e proteção da branch principal, e não aceita publicar sem teste.
- [ ] Cookies e tokens com assinatura verificada no servidor.

## A09 · Security Logging and Alerting Failures (falhas de registro e alerta)

[Página oficial](https://owasp.org/Top10/2025/A09_2025-Security_Logging_and_Alerting_Failures/). Registrar não basta; alguém precisa ser avisado.

- [ ] Registro de logins (sucesso e falha), mudanças de permissão, acessos negados e ações administrativas, com data, hora, usuário e origem.
- [ ] Logs sem senha, token nem dado pessoal em excesso. Guia: [Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html).
- [ ] Logs enviados para fora do servidor da aplicação e protegidos contra alteração. Catálogo: [SIEM e logs](../../catalogo/siem-e-logs.md).
- [ ] Alertas para os eventos que importam (picos de login falho, acesso negado em massa, conta admin nova) com dono definido.
- [ ] Plano de resposta conhecido pela equipe: [primeira hora de um incidente](resposta-a-incidente-primeira-hora.md).

## A10 · Mishandling of Exceptional Conditions (tratamento incorreto de condições excepcionais)

[Página oficial](https://owasp.org/Top10/2025/A10_2025-Mishandling_of_Exceptional_Conditions/). Erros, falhas e entradas inesperadas que o sistema trata mal.

- [ ] Falhar fechado: se a checagem de permissão ou de autenticação der erro, o acesso é **negado**, nunca liberado ("fail open").
- [ ] Erros não mostram pilha de chamadas, caminhos nem consultas ao usuário; só uma mensagem genérica e um código para o suporte. Guia: [Error Handling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Error_Handling_Cheat_Sheet.html).
- [ ] Toda exceção é capturada em um ponto central; retornos de função e parâmetros ausentes ou extras são tratados.
- [ ] Transação por inteiro: se um passo falha, o estado volta ao anterior (sem pagamento sem pedido, nem pedido sem pagamento).
- [ ] Limites de tempo, memória e tamanho de entrada para evitar que um erro derrube o serviço.
- [ ] Testes com entradas anormais (vazio, enorme, caracteres estranhos, pedidos repetidos e simultâneos).

## Depois do checklist

- Registre o que falhou e abra tarefa para cada item, com prazo e dono.
- Repita a cada versão grande. Veja também o guia [Comece aqui: desenvolvedor](../comece-aqui/desenvolvedor.md).

Revisado em 18/10/2026
