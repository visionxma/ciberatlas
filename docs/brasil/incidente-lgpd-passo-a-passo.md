# Incidente com dados pessoais no Brasil: passo a passo

> **English:** A practical roadmap for a personal-data incident in Brazil under the LGPD (Brazil's data protection law): contain and preserve evidence in the first 24 hours, decide whether the incident carries "relevant risk or damage" (art. 48), notify the ANPD (data protection authority) and the people affected within 3 business days (Resolution CD/ANPD 15/2024), then keep the record for 5 years. Includes a checklist and a plain-language message template.

Este roteiro serve a quem trata dados de pessoas: dono de pequena empresa, DPO (encarregado pelo tratamento de dados pessoais), time de TI, estudante que quer ver como funciona. Ele junta duas coisas diferentes:

- **O que a lei manda.** Vem da LGPD (Lei Geral de Proteção de Dados Pessoais, Lei 13.709/2018) e da Resolução CD/ANPD 15/2024. Está marcado com o artigo.
- **O que a boa prática manda.** Conter, preservar evidência e registrar nas primeiras 24 h é prática comum de resposta a incidentes. Não é prazo legal. Está marcado como "prática".

ANPD é a Autoridade Nacional de Proteção de Dados. Controlador é quem decide sobre o tratamento dos dados. Operador trata os dados em nome do controlador. O dever de comunicar é do controlador (LGPD art. 48). Quem é operador avisa o controlador sem demora.

## Linha do tempo

| Quando | O que fazer | Base |
|---|---|---|
| Primeiras 24 h | Conter, preservar evidência, registrar | Prática |
| Até 3 dias úteis do conhecimento de que o incidente afetou dados pessoais | Comunicar a ANPD e os titulares (as pessoas a quem os dados se referem) | Res. 15/2024, arts. 6º e 9º |
| Até 3 dias úteis depois do fim desse prazo | Juntar ao processo na ANPD a declaração de que os titulares foram avisados, com os meios usados | Res. 15/2024, art. 9º, §4º |
| Até 20 dias úteis depois da comunicação | Complementar, de maneira fundamentada, as informações enviadas à ANPD | Res. 15/2024, art. 6º, §3º |
| No mínimo 3 meses | Manter o aviso público visível, se não deu para avisar cada titular direto | Res. 15/2024, art. 9º, §3º |
| No mínimo 5 anos | Guardar o registro do incidente, mesmo o não comunicado | Res. 15/2024, art. 10 |

Agentes de tratamento de pequeno porte têm os prazos de comunicação à ANPD, de complemento e de aviso aos titulares contados em dobro (Res. 15/2024, art. 6º, §8º, e art. 9º, §6º). O enquadramento como pequeno porte vem da Res. CD/ANPD 2/2022, que não foi lida para esta versão. Confira nela se a sua empresa se enquadra antes de contar com o prazo dobrado.

## Passo 1. Primeiras 24 horas: conter, preservar, registrar

Prática, não prazo legal.

**Conter**

- [ ] Reúna quem decide (dono, TI, encarregado, jurídico) e escolha uma pessoa para coordenar.
- [ ] Isole o que está comprometido: tire a máquina da rede, bloqueie a conta, feche o acesso. Não apague nada.
- [ ] Revogue e troque senhas, chaves de API (interface de comunicação entre sistemas) e tokens (chaves de acesso temporárias) envolvidos. Encerre sessões abertas. Ligue o MFA (autenticação em dois fatores) onde faltar.
- [ ] Pare o que ainda vaza: armazenamento público, link aberto, regra de firewall (barreira que filtra o tráfego de rede) frouxa.
- [ ] Avise hospedagem, nuvem e banco se o incidente passa por eles.

**Preservar evidência**

- [ ] Copie os logs (registros de eventos) antes de qualquer limpeza: servidor, aplicação, firewall, e-mail, nuvem. Guarde a cópia fora do sistema atingido, em modo somente leitura.
- [ ] Anote data, hora e fuso horário de tudo (por exemplo, UTC, o horário universal, ou -03:00, o horário de Brasília).
- [ ] Gere o hash (impressão digital do arquivo, como o SHA-256) de cada cópia.
- [ ] Capture telas e guarde mensagens: e-mail do atacante, pedido de resgate, aviso de erro.
- [ ] Antes de reinstalar ou formatar uma máquina, tire uma imagem do disco ou um snapshot (cópia instantânea).
- [ ] Os logs de acesso também são guardados por provedores por prazo legal (1 ano para conexão, 6 meses para aplicações, no Marco Civil, arts. 13 e 15). Veja [legislacao.md](legislacao.md).

**Registrar**

- [ ] Abra o registro do incidente (campos no passo 8) e comece uma linha do tempo: quem fez o quê, quando.
- [ ] Anote o momento em que a organização soube que dados pessoais foram afetados. Dele sai a contagem dos 3 dias úteis (Res. 15/2024, art. 6º, §1º).

## Passo 2. Confirmar o que foi afetado

A Resolução define incidente de segurança como "qualquer evento adverso confirmado, relacionado à violação das propriedades de confidencialidade, integridade, disponibilidade e autenticidade da segurança de dados pessoais" (art. 3º, XII).

- [ ] Quais sistemas e quais dados foram tocados?
- [ ] Houve acesso, cópia, alteração, perda ou indisponibilidade?
- [ ] Quantos titulares? Há crianças, adolescentes ou idosos entre eles?
- [ ] Quando começou e quando terminou, se terminou?
- [ ] Qual a causa principal, se já se sabe?

Se a investigação demorar, não espere ela acabar para comunicar. A comunicação à ANPD aceita complemento depois (passo 4), e o atraso, se houver, precisa de motivo escrito.

## Passo 3. Avaliar "risco ou dano relevante" (art. 48)

O art. 48 da LGPD manda comunicar o incidente "que possa acarretar risco ou dano relevante aos titulares". A Res. 15/2024, art. 5º, diz quando isso ocorre: quando o incidente "puder afetar significativamente interesses e direitos fundamentais dos titulares" **e**, ao mesmo tempo, envolver pelo menos um destes critérios:

| Critério (art. 5º) | Exemplo |
|---|---|
| Dados pessoais sensíveis | Saúde, biometria, origem racial, religião |
| Dados de crianças, de adolescentes ou de idosos | Cadastro de escola, de plano de saúde |
| Dados financeiros | Número de cartão, dados de pagamento |
| Dados de autenticação em sistemas | Login, senha, token |
| Dados protegidos por sigilo legal, judicial ou profissional | Prontuário, processo |
| Dados em larga escala | Número significativo de titulares, considerando volume, duração, frequência e extensão geográfica (§2º) |

O §1º do art. 5º dá exemplos de afetar significativamente: impedir o exercício de direitos ou o uso de um serviço, ou causar danos materiais ou morais, como discriminação, violação da integridade física, do direito à imagem e à reputação, fraudes financeiras ou roubo de identidade.

O art. 48, §3º, manda considerar na gravidade se o controlador comprovou medidas técnicas adequadas que tornem os dados ininteligíveis para terceiros não autorizados.

**Perguntas de decisão**

- [ ] Os dados afetados dão para fraude, golpe ou discriminação contra a pessoa?
- [ ] Algum critério da tabela se aplica?
- [ ] Os dados estavam protegidos de modo que o atacante não consegue lê-los (por exemplo, criptografia sem a chave)? Anexe a prova.

Se as duas condições valem, comunique. Se você decidir **não** comunicar, escreva o motivo no registro (art. 10, §1º, VIII). A ANPD pode apurar incidente que o controlador não comunicou e mandar comunicar depois (Res. 15/2024, arts. 16 e 17). Na dúvida, peça parecer jurídico. O prazo corre enquanto você decide.

## Passo 4. Comunicar a ANPD

**Quem faz.** O encarregado, ou um representante constituído do controlador. Quem comunica precisa juntar, no mesmo prazo de 3 dias úteis, o documento que comprova o vínculo (contratual, empregatício ou funcional) ou o instrumento de poderes de representação (Res. 15/2024, art. 6º, §§5º e 6º). Sem isso, a ANPD pode abrir apuração do incidente (§7º). Deixe esses documentos prontos antes de precisar.

**Onde.** Canal [Comunicação de Incidente de Segurança (CIS)](https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/comunicado-de-incidente-de-seguranca-cis). A página da ANPD informa que a comunicação se faz por peticionamento eletrônico no sistema SEI!ANPD, com login do Gov.br. Depois do login, é preciso peticionar a comprovação de representação antes de pedir acesso integral ao processo. Dúvidas sobre o procedimento: incidentes@anpd.gov.br.

**O que a comunicação traz.** O mínimo da lei, no art. 48, §1º:

1. a descrição da natureza dos dados pessoais afetados;
2. as informações sobre os titulares envolvidos;
3. a indicação das medidas técnicas e de segurança utilizadas para a proteção dos dados, observados os segredos comercial e industrial;
4. os riscos relacionados ao incidente;
5. os motivos da demora, no caso de a comunicação não ter sido imediata;
6. as medidas que foram ou que serão adotadas para reverter ou mitigar os efeitos do prejuízo.

A Resolução detalha e acrescenta itens (art. 6º, §2º). Tenha pronto:

- [ ] natureza e categoria dos dados pessoais afetados;
- [ ] número de titulares afetados, separando crianças, adolescentes e idosos quando houver;
- [ ] medidas técnicas e de segurança usadas para proteger os dados, antes e depois do incidente;
- [ ] riscos e possíveis impactos aos titulares;
- [ ] motivos da demora, se passou dos 3 dias úteis;
- [ ] medidas adotadas ou a adotar para reverter ou mitigar os efeitos;
- [ ] data da ocorrência, se for possível saber, e data em que o controlador soube;
- [ ] dados do encarregado ou de quem representa o controlador;
- [ ] identificação do controlador e, se for o caso, declaração de que é agente de tratamento de pequeno porte;
- [ ] identificação do operador, se houver;
- [ ] descrição do incidente, com a causa principal, se identificada;
- [ ] total de titulares cujos dados são tratados nas atividades afetadas.

**Comunicação preliminar.** Se faltar informação, envie o que tem dentro do prazo. A Resolução permite complementar, de maneira fundamentada, em até 20 dias úteis, contados da comunicação (art. 6º, §3º).

**Sigilo.** Se a comunicação tiver informação protegida, como segredo comercial ou industrial, peça sigilo de forma fundamentada e indique o que deve ser restringido (art. 7º). Documentos peticionados como públicos podem ser vistos por qualquer pessoa, segundo a página da ANPD. Confira o nível de acesso de cada documento.

**Depois.** A ANPD pode pedir mais informações a qualquer tempo, como o registro das operações de tratamento, o RIPD (relatório de impacto à proteção de dados pessoais) e o relatório de tratamento do incidente (art. 8º). Pode determinar providências, como ampla divulgação do fato em meios de comunicação, às custas do controlador, quando o aviso dele não alcançar parte significativa dos titulares (art. 19). Comunicar a ANPD não encerra a obrigação: o titular também precisa ser avisado, segundo a própria página da ANPD.

## Passo 5. Comunicar os titulares

Prazo: 3 dias úteis do conhecimento (Res. 15/2024, art. 9º). A comunicação traz:

- [ ] a descrição da natureza e da categoria dos dados afetados;
- [ ] as medidas técnicas e de segurança usadas para proteger os dados, observados os segredos comercial e industrial;
- [ ] os riscos e os possíveis impactos para a pessoa;
- [ ] os motivos da demora, se houve;
- [ ] as medidas adotadas ou a adotar para reverter ou mitigar os efeitos, quando couber;
- [ ] a data em que o controlador soube do incidente;
- [ ] o contato para obter informações e, se houver, os dados do encarregado.

**Como.** Linguagem simples e fácil de entender. De forma direta e individualizada, quando for possível identificar a pessoa: pelos meios que a organização já usa com ela, como telefone, e-mail, mensagem ou carta (art. 9º, §§1º e 2º).

**Se não der para avisar cada um.** Se a comunicação direta for inviável ou não der para identificar todos os titulares, avise no mesmo prazo e com as mesmas informações pelos meios disponíveis: site, aplicativos, redes sociais e canais de atendimento. O aviso fica com visibilidade direta e fácil por no mínimo 3 meses (art. 9º, §3º).

**Boa prática.** Incluir recomendações para reduzir o dano, como trocar senha e desconfiar de contato inesperado, pode contar como boa prática (art. 9º, §5º).

### Modelo de texto para os titulares

Troque o que está entre colchetes. Apague as linhas que não se aplicam.

```
Assunto: Aviso sobre um incidente de segurança com os seus dados

Olá, [nome].

Em [data], a [empresa] soube de um incidente de segurança que afetou dados seus.

O que aconteceu
[Uma ou duas frases. Exemplo: uma pessoa sem autorização acessou nosso sistema de cadastro.]

Quais dados foram afetados
[Lista: nome, e-mail, telefone, CPF...]

O que isso pode causar
[Exemplo: golpes por e-mail, telefone ou mensagem usando seus dados.]

O que já fizemos
[Exemplo: bloqueamos o acesso, trocamos as senhas do sistema e passamos a
 monitorar o ambiente.] Antes do incidente, os dados eram protegidos por
[medidas: senha, criptografia, controle de acesso...].

O que você pode fazer
[Exemplo: troque a senha que usa conosco e em qualquer outro site em que
 repita a mesma; desconfie de mensagens que peçam dados ou dinheiro em nosso nome.]

[Se o aviso passou do prazo: Estamos avisando só agora porque [motivo].]

Também avisamos a ANPD, a Autoridade Nacional de Proteção de Dados.

Dúvidas: fale com [nome do encarregado], [e-mail], [telefone].

[Empresa]
```

## Passo 6. CERT.br, quando fizer sentido

O CERT.br (grupo de resposta a incidentes de segurança do NIC.br) recebe relatos de atividade maliciosa por e-mail: [cert@cert.br](mailto:cert@cert.br). Reportar a ele não é o aviso do art. 48 e não substitui a comunicação à ANPD.

Faz sentido quando o ataque vem de uma rede ou de um endereço IP (número que identifica um dispositivo na rede) identificável, ou quando há phishing (golpe que imita mensagem legítima para roubar dados) ou malware (software malicioso) hospedado em algum lugar. Detalhes de como enviar em [onde-notificar-e-denunciar.md](onde-notificar-e-denunciar.md). Órgão da administração pública federal usa o CTIR Gov, na mesma página.

- [ ] Reunir logs com data, hora e fuso.
- [ ] Notificar os contatos da rede de onde partiu a atividade, com cert@cert.br em cópia.

## Passo 7. Boletim de ocorrência, quando houver crime

Invasão de sistema, fraude eletrônica e golpes com furto ou estelionato por meio eletrônico são crimes (art. 154-A, art. 155 §4º-B e art. 171 §2º-A do Código Penal; veja [legislacao.md](legislacao.md)). Registre a ocorrência.

- [ ] Procure uma delegacia especializada em crimes cibernéticos ou a delegacia virtual do seu estado. A lista está em [onde-notificar-e-denunciar.md](onde-notificar-e-denunciar.md).
- [ ] Leve a linha do tempo, as capturas de tela, os logs copiados e os hashes.
- [ ] Guarde o número do boletim no registro do incidente.

O boletim de ocorrência não substitui a comunicação à ANPD, nem o contrário.

## Passo 8. Registrar o incidente

Todo incidente é registrado, inclusive o que você decidiu não comunicar. Guarde por no mínimo 5 anos, contados da data do registro, salvo obrigação adicional que exija mais tempo (Res. 15/2024, art. 10). O registro tem, no mínimo:

- [ ] data em que o incidente foi conhecido;
- [ ] descrição geral das circunstâncias;
- [ ] natureza e categoria dos dados afetados;
- [ ] número de titulares afetados;
- [ ] avaliação do risco e dos possíveis danos aos titulares;
- [ ] medidas de correção e de mitigação, quando houver;
- [ ] forma e conteúdo da comunicação, se o incidente foi comunicado à ANPD e aos titulares;
- [ ] motivos de não ter comunicado, quando for o caso.

## Passo 9. Depois do incidente

Prática, com base na LGPD art. 46 (medidas de segurança) e art. 49 (sistemas estruturados para atender aos requisitos de segurança).

- [ ] Fazer a análise da causa raiz e escrever o que mudou.
- [ ] Corrigir a falha que permitiu o incidente e testar o conserto.
- [ ] Atualizar o plano de resposta a incidentes e treinar o time.
- [ ] Responder as pessoas que escreverem depois do aviso.
- [ ] Acompanhar o que a ANPD pedir. Ela pode exigir medidas adicionais (Res. 15/2024, art. 15).

## Checklist resumido

- [ ] Hora 0: anotei quando soube e quem coordena.
- [ ] 24 h: contive, copiei logs com hash, registrei a linha do tempo.
- [ ] Confirmei se dados pessoais foram afetados e quais.
- [ ] Avaliei risco ou dano relevante com a tabela do passo 3 e anotei a decisão.
- [ ] Comunicação à ANPD enviada em até 3 dias úteis, com a prova de representação.
- [ ] Titulares avisados em até 3 dias úteis; declaração à ANPD em até 3 dias úteis depois.
- [ ] Complemento à ANPD em até 20 dias úteis, se faltou informação.
- [ ] CERT.br ou CTIR Gov avisado, se couber.
- [ ] Boletim de ocorrência feito, se houve crime.
- [ ] Registro do incidente guardado por 5 anos.
- [ ] Causa raiz corrigida.

## Fontes

- [LGPD, arts. 46 a 49](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)
- [Resolução CD/ANPD 15/2024](https://dspace.mj.gov.br/bitstream/1/12879/2/RES_ANPD_2024_15.html)
- [ANPD: Comunicação de Incidente de Segurança (CIS)](https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/comunicado-de-incidente-de-seguranca-cis)
- [CERT.br: Reportar Incidentes](https://cert.br/reportar/)

Revisado em 18/10/2026

Este material é informativo e não substitui orientação jurídica.
