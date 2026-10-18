# Checklist: macOS

> **English:** Hardening checklist for macOS with read-only terminal checks: FileVault, firewall, Gatekeeper, updates, and the drduh security guide.

Os comandos abaixo só leem o estado. Rode no Terminal do **seu** Mac. Se o Mac é da empresa, fale antes com quem administra.

## 1. Atualizações

- [ ] macOS e aplicativos atualizados, com atualização automática ligada. Guia da Apple: [Manter o Mac atualizado](https://support.apple.com/guide/mac-help/mchlpx1065/mac) e [Atualizar o macOS](https://support.apple.com/pt-br/108382).
  - Conferir pendências: `softwareupdate --list`
  - Conferir verificação automática: `defaults read /Library/Preferences/com.apple.SoftwareUpdate AutomaticCheckEnabled`
- [ ] Mac ainda recebe atualizações de segurança da Apple. Se o modelo saiu da lista, planeje a troca.

## 2. FileVault (criptografia do disco)

FileVault cifra o disco inteiro. Mac perdido ou roubado deixa de expor os arquivos. Guia: [Proteger dados com o FileVault](https://support.apple.com/guide/mac-help/mh11785/mac).

- [ ] FileVault ligado.
  - Conferir: `fdesetup status` (esperado: "FileVault is On.")
- [ ] Chave de recuperação guardada fora do Mac (cofre de senhas ou conta da empresa), nunca só no próprio computador.
- [ ] Senha de login forte e bloqueio de tela pedindo senha logo ao suspender ou proteger a tela.

## 3. Firewall

- [ ] Firewall do macOS ligado. Guia: [Bloquear conexões com firewall](https://support.apple.com/guide/mac-help/mh34041/mac).
  - Conferir: `/usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate`
- [ ] Modo furtivo (não responde a sondagens) ligado em redes públicas.
  - Conferir: `/usr/libexec/ApplicationFirewall/socketfilterfw --getstealthmode`

## 4. Gatekeeper e proteção contra malware

Gatekeeper só deixa abrir programas de desenvolvedores identificados ou da App Store. Veja [Gatekeeper e Runtime Protection](https://support.apple.com/guide/security/gatekeeper-and-runtime-protection-sec5599b66df/web) e [proteger o Mac contra malware](https://support.apple.com/guide/mac-help/mh40596/mac).

- [ ] Gatekeeper ligado.
  - Conferir: `spctl --status` (esperado: "assessments enabled")
- [ ] Proteção da Integridade do Sistema (SIP) ligada.
  - Conferir: `csrutil status`
- [ ] Programas só de fonte conhecida. Não use a opção "Abrir mesmo assim" em app que você não sabe de onde veio.

## 5. Contas e acesso

- [ ] Uso diário numa conta **padrão**; a conta administradora só para instalar e configurar.
  - Conferir: `dscl . -read /Groups/admin GroupMembership`
- [ ] Login automático desligado.
  - Conferir: `defaults read /Library/Preferences/com.apple.loginwindow autoLoginUser` (erro de "does not exist" é o resultado bom)
- [ ] Login remoto (SSH) e compartilhamento de tela desligados, se não usa.
  - Conferir: `sudo systemsetup -getremotelogin`
- [ ] Conta da Apple com verificação em dois fatores ligada.

## 6. Privacidade e permissões

- [ ] Em Ajustes do Sistema, revise Privacidade e Segurança: quais apps têm acesso a câmera, microfone, gravação de tela, acesso total ao disco e acessibilidade. Remova o que não reconhece.
- [ ] Extensões do navegador revisadas. Remova as que você não usa.

## 7. Backup

- [ ] Time Machine ou outro backup cifrado, em disco externo ou nuvem. Mais uma cópia fora do local (regra 3-2-1: 3 cópias, 2 mídias, 1 fora).
  - Conferir: `tmutil destinationinfo`
- [ ] Restauração de um arquivo testada. Veja [backup e recuperação](../../catalogo/backup-e-recuperacao.md).

## 8. Para ir além

- O guia comunitário [drduh/macOS-Security-and-Privacy-Guide](https://github.com/drduh/macOS-Security-and-Privacy-Guide) cobre ajustes avançados de privacidade e segurança, em inglês. Leia antes de aplicar: algumas mudanças reduzem a comodidade.
- Documentação técnica da Apple: [Apple Platform Security](https://support.apple.com/guide/security/welcome/web).
- [Hardening de sistemas](../../catalogo/hardening-de-sistemas.md) no catálogo.
- Sinal de invasão: [a primeira hora de um incidente](resposta-a-incidente-primeira-hora.md).

Revisado em 18/10/2026
