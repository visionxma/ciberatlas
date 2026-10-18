> **English:** A cloud security path covering IAM, logging, infrastructure as code, posture audits and containers, with free resources, legal labs and concrete deliverables.

# Trilha Nuvem: identidade, logs, código e containers

Segurança em nuvem é proteger contas, redes, dados e cargas de trabalho que rodam em provedores como AWS, Azure e GCP. Esta trilha usa a AWS nos exemplos porque os laboratórios gratuitos citados são dela. Os conceitos valem para os outros provedores. Ela pressupõe a base da [trilha Fundamentos](fundamentos.md).

Pratique só em laboratório próprio ou autorizado. Veja a [legislação brasileira](../brasil/legislacao.md).

Antes de qualquer etapa:

1. Crie uma conta de nuvem exclusiva para estudo, sem nenhum dado real.
2. Configure um alerta de gasto. Veja [AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html).
3. Ative MFA na conta raiz e não use a conta raiz no dia a dia.
4. Ao terminar cada laboratório, apague os recursos criados.

## Etapa 1: o modelo de responsabilidade compartilhada

- **O que aprender:** o que o provedor protege e o que fica com você, e os principais serviços de nuvem.
- **Recurso gratuito:** [Modelo de responsabilidade compartilhada da AWS](https://aws.amazon.com/compliance/shared-responsibility-model/).
- **Laboratório:** escolha três serviços que você usa ou pretende usar e liste, para cada um, o que é responsabilidade sua.
- **Como saber que terminou:** você tem uma tabela de responsabilidades por serviço, com a configuração que cabe a você em cada linha.

## Etapa 2: identidade e acesso (IAM)

- **O que aprender:** usuários, grupos, funções, políticas, menor privilégio, MFA e credenciais temporárias.
- **Recurso gratuito:** [Introdução ao IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html) e as [boas práticas de IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html), da documentação da AWS. Para treinar contra erros reais, [flAWS](http://flaws.cloud) e [flAWS 2](http://flaws2.cloud).
- **Laboratório:** resolva os níveis do flAWS e, na sua conta de estudo, escreva uma política de acesso mínimo para um usuário de leitura.
- **Como saber que terminou:** você tem a política em arquivo, testada, e um relato do flAWS em que cada nível termina com a configuração correta. Veja [Identidade e acesso (IAM)](../../catalogo/identidade-e-acesso.md).

## Etapa 3: registro e monitoramento

- **O que aprender:** quem fez o quê na conta, onde guardar os registros e como alertar sobre ações sensíveis.
- **Recurso gratuito:** [Guia do AWS CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html).
- **Laboratório:** ative o registro na sua conta de estudo, guarde os registros em local protegido e gere uma ação sensível de propósito.
- **Como saber que terminou:** você encontrou no registro a sua própria ação de teste e configurou um alerta para ela. Veja [SIEM e gestão de logs](../../catalogo/siem-e-logs.md).

## Etapa 4: infraestrutura como código (IaC)

- **O que aprender:** descrever a infraestrutura em arquivos versionados e verificá-los antes de aplicar.
- **Recurso gratuito:** documentação do [Terraform](https://developer.hashicorp.com/terraform) e do verificador [Checkov](https://www.checkov.io).
- **Laboratório:** escreva um arquivo de Terraform com um bucket de armazenamento e rode o Checkov antes de aplicar.
- **Como saber que terminou:** você corrigiu 5 achados do Checkov, e o repositório mostra o antes e o depois. Veja [Segurança em nuvem e IaC](../../catalogo/seguranca-em-nuvem.md).

## Etapa 5: auditoria de postura

- **O que aprender:** comparar a configuração da conta com benchmarks (listas de configuração recomendada) e priorizar correções.
- **Recurso gratuito:** [Prowler](https://github.com/prowler-cloud/prowler), [ScoutSuite](https://github.com/nccgroup/ScoutSuite) e os [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks).
- **Laboratório:** rode uma das ferramentas contra a sua conta de estudo.
- **Como saber que terminou:** você tem um relatório com os dez achados mais graves, cada um com o responsável e a correção. Mapeamento com o CIS Controls em [frameworks](../frameworks.md).

## Etapa 6: containers e Kubernetes

- **O que aprender:** imagens, camadas, execução sem privilégio, segredos, varredura de imagens e as proteções do Kubernetes.
- **Recurso gratuito:** [Segurança no Kubernetes](https://kubernetes.io/docs/concepts/security/), o [Trivy](https://trivy.dev) para varrer imagens, o [Docker Bench](https://github.com/docker/docker-bench-security) para auditar a configuração e o [Falco](https://falco.org) para detecção em execução.
- **Laboratório:** varra uma imagem sua com o Trivy e rode o Docker Bench no seu ambiente. Para Kubernetes, pratique no [Kubernetes Goat](https://github.com/madhuakula/kubernetes-goat), um cluster vulnerável de treino que roda no seu ambiente.
- **Como saber que terminou:** você reduziu os achados críticos de uma imagem sua e documentou o que mudou no Dockerfile. Veja [Containers e Kubernetes](../../catalogo/containers-e-kubernetes.md).

## Etapa 7: ataque e defesa em laboratório

- **O que aprender:** como um invasor encadeia permissões mal configuradas, para você reconhecer o padrão e fechá-lo.
- **Recurso gratuito:** [CloudGoat](https://github.com/RhinoSecurityLabs/cloudgoat), da Rhino Security Labs, que cria ambientes vulneráveis de propósito.
- **Laboratório:** rode um cenário do CloudGoat apenas na sua conta de estudo, com alerta de gasto ativo. Destrua o cenário ao terminar.
- **Como saber que terminou:** para o cenário, você escreveu a cadeia de erros de configuração, o registro que a revelaria e a correção de cada elo.

## Etapa 8: detecção e resposta na nuvem

- **O que aprender:** transformar o que você viu nas etapas anteriores em alertas e em um roteiro de resposta.
- **Recurso gratuito:** o [CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html) como fonte e a [matriz do ATT&CK](https://attack.mitre.org) como mapa de técnicas. Para o roteiro, a [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final).
- **Laboratório:** escreva três alertas para ações sensíveis da sua conta e um roteiro de resposta a um vazamento de chave de acesso.
- **Como saber que terminou:** você disparou cada alerta de propósito e o roteiro está no repositório, com os passos para revogar a chave e investigar o uso dela.

## Depois da trilha

Para certificações do provedor que você escolheu, veja [Certificações](../../catalogo/certificacoes.md). Para o lado de detecção, siga a [trilha Blue team](blue-team.md). Termos novos estão no [glossário](../glossario.md).

Revisado em 18/10/2026
