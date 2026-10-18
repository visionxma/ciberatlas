# Portugal: o novo regime jurídico da cibersegurança

> **English:** Portugal layer of CiberAtlas. Law 46/2018 (the old cyberspace security regime) was repealed. Decree-Law 125/2025 of 4 December 2025 now sets the cybersecurity legal regime and transposes the EU NIS2 Directive. Law 59/2025 authorized the Government to do it. The CNCS is the national authority and CERT.PT the national incident response team.

Este arquivo resume o que mudou em Portugal e o que uma entidade abrangida precisa fazer num incidente. Os textos citados vêm do Diário da República, lido em 18/10/2026. Os artigos do "regime" são os do regime jurídico da cibersegurança, aprovado em anexo ao Decreto-Lei 125/2025.

## Resumo

| Norma | Data | Situação | O que faz |
|---|---|---|---|
| [Lei 46/2018](https://diariodarepublica.pt/dr/detalhe/lei/46-2018-116029384) | 13/08/2018 | **Revogada** | Regime jurídico da segurança do ciberespaço; transpôs a Diretiva (UE) 2016/1148 |
| [Lei 59/2025](https://diariodarepublica.pt/dr/detalhe/lei/59-2025-941547424) | 22/10/2025 | Lei de autorização | Autoriza o Governo a transpor a Diretiva (UE) 2022/2555 |
| [Decreto-Lei 125/2025](https://diariodarepublica.pt/dr/detalhe/decreto-lei/125-2025-962603401) | 04/12/2025 | **Em vigor** | Aprova o regime jurídico da cibersegurança; transpõe a Diretiva (UE) 2022/2555, a NIS2 |

NIS2 é o nome corrente da Diretiva (UE) 2022/2555, a segunda diretiva europeia sobre segurança de redes e sistemas de informação (Network and Information Security 2). Ela revoga a primeira, a Diretiva (UE) 2016/1148.

## Como as três normas se encaixam

1. A **Lei 59/2025** deu ao Governo a autorização legislativa para aprovar o regime e transpor a diretiva. Autorizou também alterações à Lei de Segurança Interna, à Lei do Cibercrime e à Lei das Comunicações Eletrónicas.
2. O **Decreto-Lei 125/2025** usou essa autorização. O art. 9.º revoga a Lei 46/2018 e a sua regulamentação, o Decreto-Lei 65/2021, além de outros trechos.
3. O art. 11.º diz que o decreto-lei entra em vigor 120 dias após a publicação.
4. O art. 10.º, n.º 2, adia alguns efeitos: certos artigos só valem 24 meses depois de publicada a regulamentação a que o regime remete (arts. 27.º, n.os 1 e 2, 28.º a 30.º e 33.º, entre outros). Confira o texto antes de afirmar que uma obrigação já vale.

## Quem está abrangido

O regime se aplica a **entidades essenciais**, **entidades importantes** e **entidades públicas relevantes**, a parte da Administração Pública incluída.

- Entidades privadas de um dos tipos listados nos anexos I ou II do decreto-lei, que sejam pelo menos médias empresas e prestem serviços ou exerçam atividade na União Europeia (art. 3.º, n.º 1).
- Entidades dos anexos I ou II que, independentemente da dimensão, preencham algum dos requisitos do art. 3.º, n.º 2 (por exemplo, fornecedores de redes públicas de comunicações eletrónicas).
- Entidades essenciais, segundo o art. 6.º: as dos tipos do anexo I que excedam os limiares de média empresa; prestadores de serviços de confiança qualificados, registos de nomes de domínio de topo e prestadores de DNS (sistema de nomes de domínio), qualquer que seja a dimensão; entidades identificadas como críticas; e outras, nos termos do artigo.
- Entidades importantes: as dos anexos I e II que não sejam essenciais (art. 6.º, n.º 2).

Se a sua empresa é pequena e o tipo de atividade não está no art. 3.º, n.º 2, leia os anexos I e II e o anexo III (dimensão) antes de concluir que está dentro ou fora.

## O que as entidades abrangidas fazem

**Identificar-se.** Na plataforma eletrónica do CNCS, em 30 dias após o início da atividade. Quem já estava em atividade na entrada em vigor tem 60 dias após a plataforma ficar disponível (art. 8.º, n.º 1).

**Notificar incidente significativo** (arts. 40.º a 44.º):

| Notificação | Prazo | Artigo |
|---|---|---|
| Inicial | Sem demora injustificada e até 24 horas após concluir que existe, ou pode vir a existir, um incidente significativo | 42.º, n.º 1 |
| Atualização da inicial, quando necessário | Até 72 horas após a verificação do incidente | 42.º, n.º 3 |
| Fim do impacto significativo | Sem demora injustificada e em até 24 horas após o fim do impacto | 43.º, n.º 1 |
| Relatório final | Em até 30 dias úteis após a notificação do fim do impacto | 44.º, n.º 1 |

Pontos do texto:

- Para decidir se o incidente é significativo, a entidade considera, entre outros, o número de utilizadores afetados, o total de utilizadores do serviço, a duração, a gravidade da perturbação e o impacto nas atividades económicas e sociais (art. 40.º, n.º 3).
- Se o incidente for resolvido em até duas horas após a deteção, a entidade só envia a notificação de fim do impacto significativo (art. 41.º, n.º 2).
- As notificações vão pela plataforma eletrónica do CNCS (art. 40.º, n.º 6).
- A mera notificação não gera responsabilidade acrescida (art. 40.º, n.º 2).
- Cumprir o regime não dispensa as notificações específicas a outras autoridades, como o Ministério Público, a Polícia Judiciária e a CNPD, a autoridade de proteção de dados (art. 40.º, n.º 5).

## CNCS e CERT.PT

| Entidade | Papel | Base |
|---|---|---|
| **CNCS** (Centro Nacional de Cibersegurança) | Autoridade nacional de cibersegurança; ponto de contacto único para cooperação na União Europeia e a nível internacional | Art. 19.º |
| **CERT.PT** | Equipa nacional de resposta a incidentes de cibersegurança, integrada no CNCS, com autonomia técnica e operacional | Art. 22.º |
| **CERT.PT**, divulgação de vulnerabilidades | Entidade coordenadora nacional da divulgação coordenada de vulnerabilidades. Faz de intermediário de confiança entre quem comunica e o fabricante ou fornecedor, e preserva o anonimato de quem comunica, se este pedir | Art. 38.º |

Para notificar: [CNCS, notificação de incidentes](https://cncs.gov.pt/en/notificacao-incidentes/). O site do CNCS usa proteção contra robôs e não respondeu a leitura automática em 18/10/2026. Abra o endereço num navegador comum.

## Brasil e Portugal, lado a lado

As normas respondem a perguntas diferentes. Não trate uma como tradução da outra.

| Tema | Brasil | Portugal |
|---|---|---|
| Lei geral de cibersegurança | O Marco Legal da Cibersegurança (PL 4752/2025) ainda é projeto. A PNCiber é de 2023 e é decreto | Decreto-Lei 125/2025, que transpõe a NIS2 |
| Gatilho do aviso | Incidente com dados pessoais que possa acarretar risco ou dano relevante (LGPD art. 48) | Incidente significativo em entidade abrangida |
| Prazos | 3 dias úteis para a ANPD e os titulares | 24 h (inicial) e 72 h (atualização) para o CNCS |
| Equipa de resposta | CERT.br (público em geral); CTIR Gov (administração pública federal) | CERT.PT, dentro do CNCS |
| Divulgação de vulnerabilidade | Padrão `security.txt`, RFC 9116; sem coordenador legal nomeado nas fontes lidas | CERT.PT é coordenador nacional (art. 38.º) |

Camada brasileira: [../brasil/README.md](../brasil/README.md). Roteiro de incidente com dados pessoais no Brasil: [../brasil/incidente-lgpd-passo-a-passo.md](../brasil/incidente-lgpd-passo-a-passo.md).

## O que ficou fora desta versão

- Regulamento Geral sobre a Proteção de Dados (RGPD) e o papel da CNPD na violação de dados pessoais em Portugal. O decreto-lei só os menciona no art. 40.º, n.º 5.
- Coimas e sanções do regime.
- Os anexos I, II e III do decreto-lei, tipo por tipo.
- As alterações à Lei do Cibercrime (Lei 109/2009), à Lei de Segurança Interna e à Lei das Comunicações Eletrónicas.
- A regulamentação que o CNCS ainda vai publicar (formato de notificação, taxonomia de incidentes, funcionamento da plataforma).

Revisado em 18/10/2026

Este material é informativo e não substitui orientação jurídica.
