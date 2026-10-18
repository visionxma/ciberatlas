# Comece aqui: pequena empresa

> **English:** Ten ordered actions for a small business owner with no IT team: MFA everywhere, tested backups, updates, a password manager, email authentication, payment-scam awareness and a named contact for incidents.

## Você está aqui se…

Você é dono ou dona de um negócio pequeno e ninguém na equipe cuida de TI. Os computadores, o e-mail, o banco no celular e o WhatsApp da empresa são "só ferramentas", e você quer o conjunto mínimo que evita a maior parte dos problemas.

## As 10 primeiras ações, em ordem de impacto

- [ ] **1. Ligue a verificação em dois passos (2FA, segundo código além da senha) em tudo que importa.** Comece por e-mail, banco, domínio do site, WhatsApp e redes sociais da empresa. O e-mail vem primeiro porque ele redefine as outras senhas. Prefira app autenticador a SMS. Guia: [Turn On MFA (CISA)](https://www.cisa.gov/secure-our-world/turn-mfa) e [senhas e 2FA no catálogo](../../catalogo/senhas-e-autenticacao.md).
- [ ] **2. Adote um gerenciador de senhas e dê uma senha única para cada serviço.** Senha repetida faz um vazamento num site abrir todos os outros. Veja opções abertas em [senhas e autenticação](../../catalogo/senhas-e-autenticacao.md) e a orientação em [Use Strong Passwords (CISA)](https://www.cisa.gov/secure-our-world/use-strong-passwords).
- [ ] **3. Faça backup 3-2-1 e teste a restauração.** A regra: 3 cópias dos dados, em 2 tipos diferentes de mídia, com 1 cópia fora do escritório (nuvem ou disco guardado em outro lugar). Backup que nunca foi restaurado é uma aposta. Restaure uma pasta de teste a cada trimestre. Ferramentas: [backup e recuperação](../../catalogo/backup-e-recuperacao.md).
- [ ] **4. Deixe as atualizações automáticas ligadas** no Windows, no macOS, no celular, no navegador e no roteador. Falhas conhecidas são a porta mais usada. Detalhes por sistema: [Windows](../checklists/windows.md), [macOS](../checklists/macos.md).
- [ ] **5. Separe a conta de administrador da conta do dia a dia.** Quem navega e abre anexos não deveria ser administrador do computador. Se um código malicioso rodar, ele herda só o poder da conta comum. Passo a passo em [Windows](../checklists/windows.md).
- [ ] **6. Configure SPF, DKIM e DMARC no domínio do e-mail da empresa.** São três registros no DNS (a lista telefônica do domínio) que provam que a mensagem veio de você e mandam o provedor rejeitar quem se passa pela sua marca. Peça ao provedor do e-mail ou ao suporte do domínio. Ferramentas: [segurança de e-mail](../../catalogo/seguranca-de-email.md).
- [ ] **7. Treine quem paga contas: golpe de Pix e de boleto falso.** Confirme por outro canal (ligação para um número que você já tinha) qualquer mudança de chave Pix ou de conta de fornecedor. Abra o boleto no app do banco e compare o beneficiário com o esperado antes de pagar. Se pagou errado, avise o banco na hora e peça a contestação do Pix (MED, Mecanismo Especial de Devolução). Referência: [Pix no Banco Central](https://www.bcb.gov.br/estabilidadefinanceira/pix).
- [ ] **8. Faça uma lista do que você tem:** computadores, celulares, contas na nuvem, sistemas contratados e quem acessa cada um. Quem sai da empresa perde o acesso no mesmo dia. Sem lista não há como proteger. Veja [inventário de ativos](../../catalogo/inventario-de-ativos.md).
- [ ] **9. Cifre os discos de notebooks e celulares** (BitLocker no Windows, FileVault no macOS, criptografia padrão no celular com bloqueio de tela). Notebook perdido deixa de ser vazamento de clientes. Passos: [Windows](../checklists/windows.md) e [macOS](../checklists/macos.md).
- [ ] **10. Escreva, numa folha, quem chamar num incidente.** Nome e telefone de quem decide, de quem cuida da TI (mesmo que seja um prestador), do banco e do advogado. Anexe os dois guias: [incidente com dados pessoais (LGPD) passo a passo](../brasil/incidente-lgpd-passo-a-passo.md) e [onde notificar e denunciar](../brasil/onde-notificar-e-denunciar.md). Leia também a [primeira hora de um incidente](../checklists/resposta-a-incidente-primeira-hora.md).

## O que NÃO perder tempo fazendo agora

- Comprar ferramenta cara de monitoramento. Sem as 10 ações acima, ela não resolve o básico.
- Trocar senha todo mês por rotina. Troque quando houver sinal de vazamento ou quando alguém sair; senha longa e única vale mais.
- Montar política de segurança de 40 páginas que ninguém lê. Uma folha com as regras acima basta no começo.
- Mudar de antivírus a cada notícia. Mantenha o do sistema (Microsoft Defender no Windows) atualizado.

## Próximo nível

- Conheça os [CIS Controls](https://www.cisecurity.org/controls) (lista priorizada de controles). O Grupo de Implementação 1 foi desenhado para organizações pequenas.
- Revise o que a [LGPD](../brasil/incidente-lgpd-passo-a-passo.md) pede da sua empresa e veja [privacidade e dados pessoais](../../catalogo/privacidade-e-dados-pessoais.md).
- Contrate um serviço de backup gerenciado ou um prestador de TI com contrato que cite segurança.
- Leia a [Cartilha de Segurança para Internet](https://cartilha.cert.br) do CERT.br, em português.

Revisado em 18/10/2026
