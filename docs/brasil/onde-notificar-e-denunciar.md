# Onde notificar e onde denunciar no Brasil

> **English:** A lookup table for "this happened, go there": CERT.br (national incident response group, email only), CTIR Gov (federal public administration), ANPD (data protection authority), SaferNet (NGO for anonymous reports of human-rights crimes online), police stations and virtual police stations, and coordinated vulnerability disclosure through security.txt.

Procure a linha que descreve o seu caso. Cada canal recebe um tipo de relato. Mandar para o canal errado atrasa o atendimento e, no caso da ANPD, pode deixar um prazo legal correr.

## Aconteceu X, procure Y

| Aconteceu | Procure | Observação |
|---|---|---|
| Sua organização sofreu incidente com dados pessoais de terceiros (você é o controlador) | [ANPD, canal CIS](https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/comunicado-de-incidente-de-seguranca-cis) | Prazo de 3 dias úteis. Roteiro completo em [incidente-lgpd-passo-a-passo.md](incidente-lgpd-passo-a-passo.md) |
| Seus dados pessoais foram afetados em incidente de uma empresa | O canal de denúncia da ANPD, indicado na página do CIS | O canal CIS é só para controladores. A página da ANPD manda usar o canal de denúncia para noticiar incidente com dados seus ou de terceiros. Você também pode escrever à empresa |
| Incidente com origem em outra rede ou IP (endereço de rede; por exemplo, ataque ou varredura vindos de um endereço identificável) | [CERT.br](https://cert.br/reportar/), por e-mail, e a rede de origem | Veja "Como reportar ao CERT.br" abaixo |
| Incidente em órgão ou entidade da administração pública federal | [CTIR Gov](https://www.gov.br/gsi/pt-br/assuntos/ctir/operacoes-e-servicos/notificacao-de-incidentes) | Centro de Prevenção, Tratamento e Resposta a Incidentes Cibernéticos de Governo, do GSI (Gabinete de Segurança Institucional) |
| Instituição financeira ou de pagamento com incidente relevante que configure crise | Banco Central, por comunicação tempestiva | Res. CMN 4.893/2021 e Res. BCB 85/2021, art. 20, III. Veja [legislacao.md](legislacao.md) |
| Crime contra você ou sua empresa: invasão de dispositivo, fraude eletrônica, golpe com furto ou estelionato por meio eletrônico | Delegacia especializada ou delegacia virtual | Veja "Delegacias" abaixo. Leve capturas de tela, logs e a linha do tempo |
| Conteúdo na internet sobre pornografia infantil, racismo, apologia e incitação a crimes contra a vida, xenofobia, neonazismo, maus tratos contra animais, intolerância religiosa, LGBTfobia, tráfico de pessoas, violência ou discriminação contra mulheres | [SaferNet](https://new.safernet.org.br/denuncie) | ONG (organização não governamental). Denúncia anônima. Não é órgão do governo |
| Você achou uma vulnerabilidade em site ou sistema de terceiros | O canal de segurança da própria organização, normalmente no `security.txt` | Veja "Divulgação responsável" abaixo e [security-txt.md](security-txt.md) |
| Você mora ou a empresa está em Portugal | CNCS e CERT.PT | Veja [../portugal/README.md](../portugal/README.md) |

Golpe financeiro e invasão de conta não estão entre os temas do formulário da SaferNet. Esses casos vão para a delegacia.

## Como reportar ao CERT.br

O CERT.br "atende ao público exclusivamente através de e-mail". Envie para [cert@cert.br](mailto:cert@cert.br). Fonte: [cert.br/reportar](https://cert.br/reportar/).

O que o CERT.br pede em toda notificação:

- logs (registros de eventos) completos ou outras evidências, conforme o tipo de incidente;
- data, horário e fuso horário (timezone) dos logs ou da atividade;
- dados completos do incidente ou qualquer informação usada para identificar a atividade.

O CERT.br também recomenda enviar um e-mail de notificação **direto** para os contatos da rede de onde partiu a atividade, com cert@cert.br no campo "Cc:". A forma de achar o contato de cada rede e os modelos de mensagem em português e inglês estão no documento [Recomendações para Notificações de Incidentes de Segurança](https://cert.br/docs/notificacoes/).

Modelo curto de e-mail:

```
Para: [contato da rede de origem]
Cc: cert@cert.br
Assunto: Atividade maliciosa a partir de [IP ou domínio]

Prezados,

Entre [data e hora de início] e [data e hora de fim], fuso [-03:00 ou UTC],
recebemos [tipo da atividade: tentativas de login, varredura de portas,
envio de phishing (golpe que imita mensagem legítima)...] a partir de [IP ou domínio de origem].

Trechos dos logs, com data, hora e fuso, seguem abaixo e em anexo:
[linhas do log]

Pedimos que verifiquem e tomem as providências cabíveis.

[Nome, organização, contato]
```

O CERT.br tem chave PGP (padrão de criptografia de mensagens), com validade anual, gerada em janeiro. Os dados da chave estão na [página de contato](https://cert.br/contato/).

## Delegacias

- [Lista da SaferNet de delegacias especializadas em crimes cibernéticos](https://new.safernet.org.br/content/delegacias-cibercrimes). Segundo a página, existem delegacias especializadas em alguns estados. Na lista aparecem Bahia, Espírito Santo, Maranhão, Mato Grosso, Mato Grosso do Sul, Minas Gerais, Pará, Paraná, Pernambuco, Piauí, Rio Grande do Sul, São Paulo, Sergipe, Rio de Janeiro, Tocantins, Distrito Federal, Goiás e Santa Catarina. Onde não há uma, a orientação é procurar a delegacia mais próxima de casa.
- A 4ª Delegacia de Delitos Cometidos por Meios Eletrônicos de São Paulo atende apenas fraudes financeiras por meios eletrônicos, segundo a lista. Outros crimes digitais vão para uma delegacia comum.
- [Delegacias virtuais por estado, reunidas pelo Ministério da Justiça e Segurança Pública](https://www.gov.br/mj/pt-br/acesso-a-informacao/acoes-e-programas/celular-seguro/delegacias-virtuais-1). A página tem um link por unidade da federação.

Endereços e telefones mudam. Confira no site da polícia civil do seu estado antes de ir.

## Divulgação responsável de vulnerabilidade

Divulgação responsável (coordinated vulnerability disclosure) é avisar quem é dono do sistema, em privado, antes de tornar pública a falha. A organização que quer receber esses avisos publica um arquivo `security.txt`, padrão da [RFC 9116](https://www.rfc-editor.org/rfc/rfc9116), em `/.well-known/security.txt`.

Se você achou uma falha:

- [ ] Abra `https://dominio-do-site/.well-known/security.txt`. Se existir, siga o campo `Contact`, na língua indicada em `Preferred-Languages`.
- [ ] Se existir `Policy`, leia a política antes de enviar.
- [ ] Descreva o que viu e como reproduzir. Não explore a falha além do mínimo para provar que ela existe e não copie dados de terceiros. O art. 154-A do Código Penal pune a invasão sem autorização. Veja [legislacao.md](legislacao.md).
- [ ] Não publique a falha antes de a organização corrigir ou responder.

Exemplo real: o CERT.br publica o dele em [cert.br/.well-known/security.txt](https://cert.br/.well-known/security.txt), com contato `security@cert.br`, idiomas inglês e português do Brasil e chave PGP para comunicação criptografada.

Para publicar o seu: [security-txt.md](security-txt.md). Para órgãos públicos, o governo federal publicou um [modelo de política de gestão de vulnerabilidades](https://www.gov.br/governodigital/pt-br/privacidade-e-seguranca/ppsi-2.0/arquivos/modelo-de-politica-de-gestao-de-vulnerabilidades-v1-0-14mai2026.pdf) (versão 1.0, de maio de 2026, do Programa de Privacidade e Segurança da Informação). O documento é para órgãos e entidades do governo federal que integram o SISP, segundo o próprio texto, e tem licença que não permite obras derivadas. Use como referência de leitura, não copie.

## Resumo de contatos

| Canal | Como | Endereço |
|---|---|---|
| CERT.br | E-mail | cert@cert.br |
| ANPD, dúvidas sobre comunicação de incidente | E-mail | incidentes@anpd.gov.br |
| ANPD, comunicação de incidente | Peticionamento eletrônico no SEI!ANPD, login Gov.br | Página do CIS, acima |
| CTIR Gov | Página de notificação | Link na tabela acima |
| SaferNet | Formulário, denúncia anônima | https://new.safernet.org.br/denuncie |

Revisado em 18/10/2026

Este material é informativo e não substitui orientação jurídica.
