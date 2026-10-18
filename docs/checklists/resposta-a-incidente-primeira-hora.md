# Checklist: a primeira hora de um incidente

> **English:** What to do and what not to do in the first hour of a security incident: isolate from the network, preserve evidence, log everything with timestamps, call the decision maker and handle communication.

Incidente de segurança é qualquer evento que compromete ou ameaça dados, contas ou sistemas: ransomware, conta invadida, vazamento, golpe de pagamento bem-sucedido. A primeira hora decide o tamanho do prejuízo. Respire, siga a ordem e escreva tudo.

## 0. Antes de tudo

- [ ] Avise **uma** pessoa que decide (dono, diretor ou responsável de TI). Você não decide sozinho o que é grande demais.
- [ ] Abra um registro (caderno, documento compartilhado, mensagem para si) e anote cada ação **com data e hora**. Esse registro vale ouro depois.

## 1. Conter: isolar da rede

- [ ] **Tire a máquina afetada da rede:** desconecte o cabo de rede ou desligue o Wi-Fi. Isso impede o avanço do ataque e a saída de dados.
- [ ] **Não desligue o computador à toa.** Desligar apaga a memória (RAM), onde ficam provas como processos, conexões e chaves. Desligue só se não houver outra forma de parar o dano e anote que fez isso. Se tiver dúvida, isole da rede e espere orientação.
- [ ] Servidores na nuvem: troque as regras de rede para isolar a máquina (sem apagar), e tire um snapshot (cópia do disco no momento) antes de qualquer mudança.
- [ ] Conta suspeita de invasão: troque a senha a partir de **outro** aparelho limpo, encerre todas as sessões e ligue o 2FA. Se o e-mail foi invadido, comece por ele.
- [ ] Credencial ou chave vazada: revogue e emita outra. Revogar vem antes de investigar o uso.
- [ ] Pagamento enviado a golpista: ligue para o banco **agora** e peça o bloqueio e a contestação (no Pix, o MED, Mecanismo Especial de Devolução). Tempo conta.

## 2. Preservar evidência

- [ ] **Não apague nada,** não formate, não reinstale e não "limpe" ainda. Reinstalar destrói a prova e pode deixar a porta de entrada aberta.
- [ ] Fotografe a tela (mensagem de resgate, aviso do antivírus, e-mail) em vez de fechar a janela.
- [ ] Guarde os arquivos suspeitos (e-mail original com cabeçalhos, anexo, link) sem abrir. Não encaminhe o malware para os outros.
- [ ] Salve logs relevantes (servidor, firewall, nuvem, e-mail) antes que sejam sobrescritos. Cópia para outro local, nunca no equipamento afetado.
- [ ] Anote quem usou o equipamento, o que fez e quando percebeu o problema.
- [ ] Guarde os discos da máquina atingida para análise forense (reconstrução do que aconteceu). Catálogo: [forense digital](../../catalogo/forense-digital.md).

## 3. Entender o tamanho

- [ ] O que foi atingido: quais máquinas, contas, sistemas e tipos de dados (clientes, funcionários, pagamentos, saúde).
- [ ] Há dados pessoais envolvidos? Se sim, a LGPD pode exigir comunicação. Veja o passo a passo abaixo.
- [ ] Os backups estão a salvo? Desconecte as cópias online do que foi atingido antes de qualquer restauração.
- [ ] Pergunte "como entrou?" antes de restaurar. Restaurar sem fechar a porta repete o incidente.

## 4. Acionar quem precisa

- [ ] Quem decide (já avisado no item 0), quem cuida da TI ou prestador, e o jurídico ou advogado se houver dados pessoais.
- [ ] Banco e operadora de cartão, se houve fraude financeira.
- [ ] Provedor de nuvem, de e-mail ou de hospedagem, se a conta ou o serviço está comprometido.
- [ ] Seguradora, se houver seguro cibernético, que costuma exigir aviso rápido (veja a apólice).
- [ ] Equipe de resposta externa, se o caso é grande ou você não tem experiência. Veja [resposta a incidentes](../../catalogo/resposta-a-incidentes.md).
- [ ] Autoridades e órgãos: [onde notificar e denunciar](../brasil/onde-notificar-e-denunciar.md). Para vazamento de dados pessoais: [incidente LGPD passo a passo](../brasil/incidente-lgpd-passo-a-passo.md).

## 5. Comunicar

- [ ] Um único porta-voz. Mensagens combinadas, curtas e factuais.
- [ ] Diga ao time o que fazer (não abrir tal anexo, trocar tal senha) e o que **não** fazer (não comentar em redes sociais).
- [ ] Clientes e parceiros afetados são avisados com o que se sabe, o que se faz e o que eles devem fazer. Não prometa o que ainda não sabe. Prazos de notificação à ANPD (Autoridade Nacional de Proteção de Dados) estão no [passo a passo LGPD](../brasil/incidente-lgpd-passo-a-passo.md).
- [ ] Não negocie nem pague resgate sem decisão de quem manda e sem aconselhamento jurídico. Antes, veja se há ferramenta de recuperação no [No More Ransom](https://www.nomoreransom.org/pt/index.html).

## O que NÃO fazer na primeira hora

- Não desligue, formate ou reinstale a máquina por reflexo.
- Não apague e-mails, logs ou arquivos "para limpar".
- Não use o computador afetado para trocar senhas ou conversar sobre o incidente.
- Não "contra-ataque" nem invada o sistema do atacante. É crime e pode piorar.
- Não conte a ninguém além do necessário antes de a decisão de comunicação ser tomada.
- Não culpe uma pessoa no calor do momento; quem teme punição esconde informação.

## Depois da primeira hora

- Erradique a causa (feche a porta de entrada), restaure a partir de backup limpo e vigie por sinais de volta.
- Faça uma revisão sem culpados e transforme o aprendizado em controle. Estrutura de referência: [NIST SP 800-61r3](https://csrc.nist.gov/pubs/sp/800/61/r3/final) e, para ransomware, [Stop Ransomware (CISA)](https://www.cisa.gov/stopransomware).
- Treine o roteiro uma vez por ano com um exercício de simulação. Veja o [plano de resposta da CISA](https://www.cisa.gov/resources-tools/resources/incident-response-plan-irp-basics).

Revisado em 18/10/2026
