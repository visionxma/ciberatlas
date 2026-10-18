> **English:** An application security path covering secure development, the OWASP Top 10, threat modeling, SAST, DAST and software supply chain, with free resources, legal labs and concrete deliverables.

# Trilha AppSec: desenvolvimento seguro

AppSec (segurança de aplicações) é o trabalho de evitar falhas de segurança em software, desde o desenho até a publicação. Esta trilha serve a quem desenvolve e a quem revisa código. Ela pressupõe a base da [trilha Fundamentos](fundamentos.md), em especial redes e programação.

Pratique só em laboratório próprio ou autorizado. Veja a [legislação brasileira](../brasil/legislacao.md). Aplicações vulneráveis de treino rodam na sua máquina, nunca expostas à internet.

## Etapa 1: o que dá errado em uma aplicação web

- **O que aprender:** o modelo de requisição e resposta, sessões, cookies e a lista de riscos do OWASP Top 10:2025, de A01 (Broken Access Control) a A10 (Mishandling of Exceptional Conditions). A lista completa está em [frameworks](../frameworks.md).
- **Recurso gratuito:** [OWASP Top 10:2025](https://owasp.org/Top10/2025/).
- **Laboratório:** escolha uma aplicação sua e relacione, para cada item A01 a A10, onde ela poderia falhar.
- **Como saber que terminou:** você tem uma tabela de dez linhas com a hipótese de falha em cada item e o arquivo do código envolvido.

## Etapa 2: falhas clássicas na prática

- **O que aprender:** como funcionam injeção de SQL, XSS (script entre sites), falhas de controle de acesso e de autenticação, e como cada uma é corrigida.
- **Recurso gratuito:** [PortSwigger Web Security Academy](https://portswigger.net/web-security), com explicação e laboratórios integrados.
- **Laboratório:** resolva 15 laboratórios, distribuídos entre injeção, XSS e controle de acesso.
- **Como saber que terminou:** você escreveu 3 relatos de resolução, e cada um termina com o trecho de código que corrige a falha.

## Etapa 3: uma aplicação vulnerável de treino

- **O que aprender:** encontrar falhas em uma aplicação completa e entender a causa de cada uma.
- **Recurso gratuito:** [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/). Siga as instruções de execução local do próprio projeto. O guia [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/) organiza o que testar.
- **Laboratório:** rode o Juice Shop na sua máquina e resolva 10 desafios.
- **Como saber que terminou:** para cada desafio, você anotou a falha, o item do Top 10 correspondente e a correção que aplicaria.

## Etapa 4: desenvolvimento seguro

- **O que aprender:** práticas de ciclo de vida seguro, revisão de código, validação de entrada, tratamento de erros e gestão de dependências.
- **Recurso gratuito:** [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org), o [NIST SP 800-218 (SSDF)](https://csrc.nist.gov/pubs/sp/800/218/final) e o [OWASP SAMM](https://owaspsamm.org), modelo para medir a maturidade da prática.
- **Laboratório:** revise um projeto seu com a folha de verificação das Cheat Sheets mais relevantes ao seu caso.
- **Como saber que terminou:** você abriu uma lista de correções priorizadas no repositório do projeto e corrigiu as três mais graves.

## Etapa 5: modelagem de ameaças

- **O que aprender:** desenhar o fluxo de dados de um sistema, marcar as fronteiras de confiança e levantar o que pode dar errado antes de escrever código.
- **Recurso gratuito:** [OWASP Threat Modeling](https://owasp.org/www-community/Threat_Modeling) e a ferramenta [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/).
- **Laboratório:** modele uma aplicação sua no Threat Dragon.
- **Como saber que terminou:** você tem um diagrama de fluxo de dados e uma lista de 5 ameaças com a mitigação de cada uma. Veja [Modelagem de ameaças](../../catalogo/modelagem-de-ameacas.md).

## Etapa 6: análise estática (SAST) e segredos no código

- **O que aprender:** SAST é a análise do código-fonte sem executá-lo. Aprenda a rodar um analisador, ler os achados, separar falso positivo e impedir que chaves e senhas entrem no repositório.
- **Recurso gratuito:** [Semgrep](https://semgrep.dev) para análise e [gitleaks](https://github.com/gitleaks/gitleaks) para segredos.
- **Laboratório:** rode as duas ferramentas contra um repositório seu e inclua-as no pipeline de integração contínua.
- **Como saber que terminou:** o pipeline falha quando você insere de propósito um segredo falso de teste, e passa depois que você o remove. Veja [Análise estática de código](../../catalogo/analise-estatica-de-codigo.md) e [Segredos no código](../../catalogo/segredos-no-codigo.md).

## Etapa 7: teste dinâmico (DAST)

- **O que aprender:** DAST é o teste da aplicação em execução, de fora para dentro. Aprenda a configurar um escaneamento, ler o relatório e ajustar o ruído.
- **Recurso gratuito:** [OWASP ZAP](https://www.zaproxy.org), com o [guia de início](https://www.zaproxy.org/getting-started/).
- **Laboratório:** rode o ZAP contra o Juice Shop local e contra uma aplicação sua em ambiente de teste.
- **Como saber que terminou:** você tem um relatório com os achados classificados e corrigiu 3 deles na sua aplicação. Veja [Testes dinâmicos de aplicação](../../catalogo/testes-dinamicos-de-aplicacao.md).

## Etapa 8: cadeia de suprimentos de software

- **O que aprender:** SBOM (lista de materiais de software, com todos os componentes), varredura de dependências, assinatura de artefatos e avaliação da saúde de um projeto aberto. É o tema do item A03 do Top 10:2025.
- **Recurso gratuito:** [Syft](https://github.com/anchore/syft) para gerar SBOM, [Grype](https://github.com/anchore/grype) para varredura, [SLSA](https://slsa.dev) como modelo de níveis de segurança da cadeia, [Sigstore](https://www.sigstore.dev) para assinatura e [OpenSSF Scorecard](https://github.com/ossf/scorecard) para avaliar projetos.
- **Laboratório:** gere o SBOM de um projeto seu e varra as dependências.
- **Como saber que terminou:** você tem o SBOM e o relatório de vulnerabilidades no repositório, e escreveu uma política de atualização de dependências de uma página. Veja [Cadeia de suprimentos e SBOM](../../catalogo/cadeia-de-suprimentos-e-sbom.md).

## Etapa 9: aprofundamento e IA

- **O que aprender:** segurança de sistemas em profundidade e riscos de aplicações com IA, como o item ASI01 (Agent Goal Hijack) do OWASP Top 10 for Agentic Applications.
- **Recurso gratuito:** [Stanford CS253](https://web.stanford.edu/class/cs253/), sobre segurança web, e [MIT 6.858](https://ocw.mit.edu/courses/6-858-computer-systems-security-fall-2014/), sobre segurança de sistemas. Para IA, o [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/).
- **Laboratório:** faça os exercícios de uma das aulas, ou, se você usa IA em um produto, aplique a lista de riscos de LLM a ele.
- **Como saber que terminou:** você completou uma das disciplinas, ou escreveu a análise de riscos de uma aplicação com IA. Veja [Segurança de IA e LLM](../../catalogo/seguranca-de-ia.md).

## Depois da trilha

Para continuar a praticar, [pwn.college](https://pwn.college) tem material em profundidade. Para certificações, [Certificações](../../catalogo/certificacoes.md). Termos novos estão no [glossário](../glossario.md).

Revisado em 18/10/2026
