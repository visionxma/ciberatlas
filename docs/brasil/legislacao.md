# Legislação brasileira de cibersegurança

> **English:** The Brazilian rules that matter for defensive security: the criminal offense of breaking into a device (Penal Code art. 154-A), the LGPD (data protection law) security and breach duties, ANPD Resolution 15/2024 (breach notification), the Marco Civil log-retention rules, central bank rules for financial and payment institutions, and the national cybersecurity policy. The Cybersecurity Legal Framework bill is not law yet.

Cada seção diz o que a norma exige ou criminaliza, o artigo-chave e o link do texto oficial. Os trechos entre aspas vêm do texto oficial lido em 18/10/2026. O resto é explicação em linguagem simples.

## Resumo

| Norma | Do que trata | Quem alcança | Ponto-chave |
|---|---|---|---|
| [Código Penal, art. 154-A](#código-penal-art-154-a-invasão-de-dispositivo-informático) (Leis 12.737/2012 e 14.155/2021) | Crime de invadir dispositivo informático | Qualquer pessoa | Reclusão de 1 a 4 anos e multa; sobe com prejuízo econômico (§2º) e com certos conteúdos obtidos (§3º) |
| [Lei 14.155/2021](#fraude-eletrônica-lei-141552021) | Furto e estelionato por meio eletrônico | Qualquer pessoa | Reclusão de 4 a 8 anos e multa (CP art. 155 §4º-B e art. 171 §2º-A) |
| [LGPD, Lei 13.709/2018](#lgpd-lei-137092018) | Segurança de dados pessoais e aviso de incidente | Quem trata dados pessoais | Arts. 46 a 49; art. 48 manda comunicar a ANPD e os titulares |
| [Res. CD/ANPD 15/2024](#resolução-cdanpd-152024-comunicação-de-incidente) | Regras do aviso de incidente | Controlador de dados pessoais | 3 dias úteis; complemento em até 20 dias úteis; registro por 5 anos |
| [Marco Civil, Lei 12.965/2014](#marco-civil-da-internet-lei-129652014) | Guarda de registros de acesso (logs) | Provedores de conexão e de aplicações | 1 ano (conexão, art. 13); 6 meses (aplicações, art. 15) |
| [Res. CMN 4.893/2021](#resoluções-cmn-48932021-e-bcb-852021) | Política de segurança cibernética e nuvem | Instituições autorizadas pelo Banco Central, exceto as de pagamento | Política escrita, plano de resposta a incidentes, aviso ao Banco Central em crise |
| [Res. BCB 85/2021](#resoluções-cmn-48932021-e-bcb-852021) | O mesmo, para instituições de pagamento | Instituições de pagamento | Mesma estrutura da 4.893 |
| [Decreto 11.856/2023](#decreto-118562023-pnciber-e-cnciber) | Política Nacional de Cibersegurança (PNCiber) | Define diretrizes para o país; sem obrigação direta para empresa privada | Cria o Comitê Nacional de Cibersegurança (CNCiber), presidido pelo GSI |
| [PL 4752/2025](#pl-47522025-marco-legal-da-cibersegurança) | Marco Legal da Cibersegurança | Ninguém ainda | Projeto em tramitação no Senado; não é lei |

## Código Penal, art. 154-A: invasão de dispositivo informático

Criado pela Lei 12.737/2012 e reescrito pela Lei 14.155/2021.

**O que criminaliza.** "Invadir dispositivo informático de uso alheio, conectado ou não à rede de computadores, com o fim de obter, adulterar ou destruir dados ou informações sem autorização expressa ou tácita do usuário do dispositivo ou de instalar vulnerabilidades para obter vantagem ilícita."

| Parágrafo | O que diz | Pena |
|---|---|---|
| caput | A invasão com um dos fins acima | Reclusão de 1 a 4 anos e multa |
| §1º | Quem "produz, oferece, distribui, vende ou difunde dispositivo ou programa de computador com o intuito de permitir a prática" da conduta do caput | A mesma do caput |
| §2º | Aumento de 1/3 a 2/3 se da invasão resulta prejuízo econômico | Pena do caput aumentada |
| §3º | A invasão obtém conteúdo de comunicações eletrônicas privadas, segredos comerciais ou industriais, informações sigilosas definidas em lei, ou dá controle remoto não autorizado do dispositivo | Reclusão de 2 a 5 anos e multa |
| §4º | Na hipótese do §3º, divulgação, comercialização ou transmissão a terceiro dos dados obtidos | Aumento de um a dois terços |

**O que isso muda na prática.**

- A palavra que separa teste de crime é "autorização". Faça teste de invasão (pentest) só com autorização escrita de quem é dono do sistema, com escopo e datas.
- O §1º alcança quem produz ou distribui programa feito para permitir a invasão. Ferramenta de segurança de uso legítimo precisa de contexto claro (documentação, finalidade, público).
- Vulnerabilidade achada em sistema de terceiro: não explore além do mínimo e não copie dados. Veja [security-txt.md](security-txt.md) e [onde-notificar-e-denunciar.md](onde-notificar-e-denunciar.md).

Fontes: [Lei 14.155/2021](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14155.htm) · [Código Penal compilado](https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm) · [Lei 12.737/2012](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12737.htm)

## Fraude eletrônica (Lei 14.155/2021)

A mesma lei endureceu dois crimes comuns em golpes digitais:

| Dispositivo | Conduta | Pena |
|---|---|---|
| CP art. 155, §4º-B | Furto mediante fraude cometido por dispositivo eletrônico ou informático, com ou sem violação de mecanismo de segurança ou uso de programa malicioso | Reclusão de 4 a 8 anos e multa |
| CP art. 171, §2º-A (fraude eletrônica) | Estelionato com uso de informações fornecidas pela vítima, ou por terceiro induzido a erro, por redes sociais, telefone ou e-mail fraudulento | Reclusão de 4 a 8 anos e multa |

Há aumentos de pena quando o servidor fica fora do Brasil (art. 155 §4º-C, I, e art. 171 §2º-B) e quando a vítima é idosa ou vulnerável (art. 155 §4º-C, II, e art. 171 §4º). Leia os parágrafos no texto oficial antes de citar a fração exata.

Fonte: [Lei 14.155/2021](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14155.htm)

## LGPD (Lei 13.709/2018)

A LGPD (Lei Geral de Proteção de Dados Pessoais) vale para quem trata dados de pessoas, empresa pequena ou grande. Os artigos de segurança:

| Artigo | O que exige |
|---|---|
| Art. 46 | Os agentes de tratamento devem adotar "medidas de segurança, técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito". O §2º manda observar essas medidas "desde a fase de concepção do produto ou do serviço até a sua execução" (privacidade desde a concepção, ou privacy by design) |
| Art. 47 | A obrigação de garantir segurança vale "mesmo após o seu término" do tratamento |
| Art. 48 | O controlador comunica à ANPD e ao titular o incidente que "possa acarretar risco ou dano relevante aos titulares". A comunicação traz, no mínimo, os seis itens do §1º (lista completa em [incidente-lgpd-passo-a-passo.md](incidente-lgpd-passo-a-passo.md)). O §2º permite que a ANPD determine providências, como ampla divulgação do fato e medidas para reverter ou mitigar os efeitos. O §3º manda considerar, na gravidade, se o controlador comprovou medidas técnicas que tornem os dados ininteligíveis para terceiros |
| Art. 49 | Os sistemas que tratam dados pessoais devem ser estruturados para atender aos requisitos de segurança, aos padrões de boas práticas e de governança e aos princípios da lei |

**Sanções administrativas (art. 52, incisos I a III).** Advertência com prazo para corrigir; multa simples de até 2% do faturamento da pessoa jurídica de direito privado, grupo ou conglomerado no Brasil no último exercício, sem tributos, limitada a R$ 50.000.000,00 por infração; multa diária, dentro desse mesmo teto. O art. 52 tem outros incisos (publicização da infração, bloqueio e eliminação dos dados, entre outros). Leia o artigo inteiro no texto oficial.

**Quem é quem.** O controlador decide sobre o tratamento. O operador trata os dados em nome dele. O encarregado (DPO, data protection officer) é o ponto de contato com titulares e ANPD. O dever do art. 48 é do controlador.

Fonte: [Lei 13.709/2018](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)

## Resolução CD/ANPD 15/2024: comunicação de incidente

Aprovada em 24/04/2024. Define como cumprir o art. 48 da LGPD.

| Regra | Artigo |
|---|---|
| Quando o incidente pode acarretar risco ou dano relevante: afeta significativamente interesses e direitos fundamentais dos titulares e envolve, cumulativamente, pelo menos um destes: dado sensível, dado de criança, adolescente ou idoso, dado financeiro, dado de autenticação em sistemas, dado protegido por sigilo legal, judicial ou profissional, ou dados em larga escala | Art. 5º |
| Comunicar a ANPD em 3 dias úteis, contados do conhecimento de que o incidente afetou dados pessoais | Art. 6º, caput e §1º |
| Complementar as informações, de maneira fundamentada, em até 20 dias úteis, contados da comunicação | Art. 6º, §3º |
| Comunicar os titulares em 3 dias úteis, em linguagem simples, de forma direta e individualizada quando possível | Art. 9º |
| Para agentes de tratamento de pequeno porte, os prazos de comunicação à ANPD e aos titulares contam em dobro | Art. 6º, §8º, e art. 9º, §6º |
| Manter o registro de todo incidente, inclusive o não comunicado, por no mínimo 5 anos | Art. 10 |

O passo a passo completo está em [incidente-lgpd-passo-a-passo.md](incidente-lgpd-passo-a-passo.md). Canal da ANPD: [Comunicação de Incidente de Segurança (CIS)](https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/comunicado-de-incidente-de-seguranca-cis).

Fonte: [texto da Resolução](https://dspace.mj.gov.br/bitstream/1/12879/2/RES_ANPD_2024_15.html)

## Marco Civil da Internet (Lei 12.965/2014)

Define quem guarda registros de acesso e por quanto tempo. Esses registros são a base de evidência de quase todo incidente.

| Quem | Dever | Prazo | Artigo |
|---|---|---|---|
| Provedor de conexão (o administrador de sistema autônomo respectivo) | Manter os registros de conexão, sob sigilo, em ambiente controlado e de segurança. A responsabilidade não pode ser transferida a terceiros | 1 ano | Art. 13, caput e §1º |
| Provedor de conexão | É vedado guardar os registros de acesso a aplicações de internet | Não se aplica | Art. 14 |
| Provedor de aplicações constituído como pessoa jurídica, que exerça a atividade de forma organizada, profissionalmente e com fins econômicos | Manter os registros de acesso a aplicações, sob sigilo, em ambiente controlado e de segurança | 6 meses | Art. 15, caput |

Pontos que a lei deixa claros:

- Autoridade policial, administrativa ou o Ministério Público pode pedir, por cautela, que os registros sejam guardados por prazo maior (art. 13 §2º e art. 15 §2º). Quem pede tem 60 dias para ir à Justiça (art. 13 §3º).
- Entregar os registros a quem pede exige autorização judicial (art. 13 §5º e art. 15 §3º).
- Para provedor de aplicações não alcançado pelo art. 15, ordem judicial pode obrigar a guarda por tempo certo, para fatos específicos (art. 15 §1º).

O texto remete a um regulamento para os detalhes. Esse regulamento não foi lido para esta versão.

Fonte: [Lei 12.965/2014](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l12965.htm)

## Resoluções CMN 4.893/2021 e BCB 85/2021

Duas normas gêmeas do Banco Central sobre política de segurança cibernética e contratação de serviços de processamento, armazenamento de dados e computação em nuvem.

| | Res. CMN 4.893, de 26/02/2021 | Res. BCB 85, de 08/04/2021 |
|---|---|---|
| Quem | Instituições autorizadas a funcionar pelo Banco Central. O parágrafo único do art. 1º exclui administradoras de consórcio, instituições de pagamento, corretoras e distribuidoras de títulos e valores mobiliários e corretoras de câmbio, que seguem a regulamentação do Banco Central | Instituições de pagamento autorizadas a funcionar pelo Banco Central |
| Política | Política de segurança cibernética compatível com porte, perfil de risco, modelo de negócio e sensibilidade dos dados (art. 2º) | Idem (art. 2º) |
| Conteúdo mínimo da política | Objetivos, controles, registro e análise de incidentes relevantes, diretrizes para terceiros, cultura de segurança e compartilhamento de informações sobre incidentes (art. 3º) | Idem (art. 3º) |
| Controles que a política cobre | O §2º do art. 3º foi reescrito pela Res. CMN 5.274, de 18/12/2025. Leia a versão vigente | No mínimo: autenticação, criptografia, prevenção e detecção de intrusão, prevenção de vazamento, testes e varreduras periódicos de vulnerabilidade, proteção contra software malicioso, rastreabilidade, controle de acesso, segmentação de rede e cópias de segurança (art. 3º, §2º, texto original) |
| Aviso ao Banco Central | Comunicação tempestiva de incidentes relevantes e de interrupções de serviços relevantes que configurem situação de crise (art. 20, III) | Idem (art. 20, III) |

A Res. CMN 5.274, de 18/12/2025 (Diário Oficial de 22/12/2025), alterou a 4.893 e entrou em vigor na publicação; as instituições em funcionamento têm até 01/03/2026 para se adequar (art. 2º).

Fontes: [Res. CMN 5.274 (site do Banco Central)](https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%c3%a7%c3%a3o%20CMN&numero=5274) · [Res. CMN 4.893 (versão vigente, no site do Banco Central)](https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%c3%a7%c3%a3o%20CMN&numero=4893) · [Res. BCB 85 (Diário Oficial da União)](https://www.in.gov.br/en/web/dou/-/resolucao-bcb-n-85-de-8-de-abril-de-2021-313194098)

Estas normas valem só para o setor financeiro e de pagamentos. A seção de contratação de nuvem não foi detalhada aqui; leia os capítulos correspondentes nos textos acima.

## Decreto 11.856/2023: PNCiber e CNCiber

Decreto de 26/12/2023. Institui a Política Nacional de Cibersegurança (PNCiber, art. 1º), "com a finalidade de orientar a atividade de segurança cibernética no País", e o Comitê Nacional de Cibersegurança (CNCiber, art. 5º).

- Instrumentos da PNCiber: a Estratégia Nacional de Cibersegurança e o Plano Nacional de Cibersegurança (art. 4º).
- O CNCiber acompanha a implementação da PNCiber e propõe medidas (art. 6º). O Gabinete de Segurança Institucional da Presidência da República (GSI) o preside (art. 7º, I). Tem membros do governo, do Banco Central, da Anatel, do Comitê Gestor da Internet no Brasil, da sociedade civil, de instituições científicas e do setor empresarial.
- O decreto define princípios, objetivos, instrumentos e o comitê. O texto lido não traz obrigação de segurança para empresa privada.

Fonte: [Decreto 11.856/2023](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/decreto/d11856.htm)

## PL 4752/2025: Marco Legal da Cibersegurança

**Não é lei.** Situação em 18/10/2026:

- Projeto de lei do Senado, apresentado em 24/09/2025. Ementa: "Institui o Marco Legal da Cibersegurança, cria o Programa Nacional de Segurança e Resiliência Digital e altera a Lei nº 13.756, de 12 de dezembro de 2018".
- Aprovado na CCJ (Comissão de Constituição e Justiça) em 10/12/2025.
- Audiência na CCT (Comissão de Ciência, Tecnologia, Inovação, Comunicação e Informática) em 30/06/2026. A página do Senado mostra o projeto "Em tramitação", com o último estado em 03/09/2026: "matéria com a relatoria".
- Até virar lei, precisa passar pelas duas Casas do Congresso e ser sancionado. Nenhuma obrigação do projeto vale hoje.

Fonte: [página do projeto no Senado](https://www25.senado.leg.br/web/atividade/materias/-/materia/170613/)

## O que ficou fora desta versão

- Regulamento da LGPD para agentes de tratamento de pequeno porte (Res. CD/ANPD 2/2022): citado pela Res. 15/2024 para dobrar prazos, mas o texto não foi lido aqui. Confira lá se a sua empresa se enquadra.
- Regulamento do Marco Civil (a que o art. 13 e o art. 15 remetem).
- Normas setoriais de saúde, telecomunicações e energia.
- Direito do consumidor e responsabilidade civil por vazamento.

Quem está em Portugal: [../portugal/README.md](../portugal/README.md).

Revisado em 18/10/2026

Este material é informativo e não substitui orientação jurídica.
