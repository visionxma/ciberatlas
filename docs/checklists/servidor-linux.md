# Checklist: servidor Linux

> **English:** Hardening checklist for a Linux server with read-only check commands: automatic updates, SSH keys only, no remote root, firewall, fail2ban or CrowdSec, Lynis audit, logs and tested backups.

Os comandos de conferência abaixo só leem o estado. Rode no **seu** servidor. Os exemplos assumem Debian ou Ubuntu; em outras distribuições mude o gerenciador de pacotes. Faça os itens em ordem: os primeiros reduzem mais risco.

## 1. Atualizações

- [ ] Atualizações de segurança automáticas ligadas. No Debian e no Ubuntu isso é o `unattended-upgrades` ([Debian](https://wiki.debian.org/UnattendedUpgrades), [Ubuntu](https://ubuntu.com/server/docs/how-to/software/automatic-updates/)).
  - Conferir: `systemctl is-enabled unattended-upgrades` e `apt list --upgradable`
- [ ] Reinício agendado quando o kernel é atualizado (o kernel novo só vale depois do reboot).
  - Conferir: `ls /var/run/reboot-required` (se o arquivo existe, falta reiniciar)
- [ ] Nenhum serviço desnecessário rodando.
  - Conferir: `systemctl list-units --type=service --state=running`

## 2. Acesso por SSH

SSH (Secure Shell) é a forma padrão de entrar no servidor. Documentação de todas as opções: [sshd_config](https://man.openbsd.org/sshd_config).

- [ ] Login só por chave, sem senha (`PasswordAuthentication no`). Faça a chave funcionar **antes** de desligar a senha, e mantenha uma segunda sessão aberta durante a mudança.
- [ ] Sem login remoto como root (`PermitRootLogin no`). Use um usuário comum com `sudo`.
- [ ] Lista de quem pode entrar (`AllowUsers` ou `AllowGroups`).
- [ ] Chaves privadas protegidas com senha e guardadas em quem as usa; chaves públicas de quem saiu removidas de `authorized_keys`.
  - Conferir a configuração em vigor: `sudo sshd -T | grep -Ei 'permitrootlogin|passwordauthentication|pubkeyauthentication|allowusers'`
  - Conferir a postura do servidor SSH: [ssh-audit](https://github.com/jtesta/ssh-audit) (`ssh-audit seu.servidor`, rode só contra o seu)

## 3. Firewall e portas

- [ ] Política padrão de entrada: negar. Abrir só o que o serviço precisa (22, 80, 443 e pouco mais). Ferramentas: `ufw` ([guia Ubuntu](https://documentation.ubuntu.com/server/how-to/security/firewalls/)), `firewalld` ou `nftables`.
  - Conferir: `sudo ufw status verbose`
- [ ] Banco de dados e painéis administrativos **não** escutam na internet; só em `127.0.0.1` ou rede privada.
  - Conferir: `sudo ss -tulpn` (veja quais portas escutam em `0.0.0.0` ou `[::]`)
- [ ] Se o SSH precisa ficar na internet, limite por IP de origem ou por VPN quando possível. Mais em [rede, firewall e VPN](../../catalogo/rede-firewall-e-vpn.md).

## 4. Contas e privilégios

- [ ] Nenhuma conta sem senha ou sem chave; só root com UID 0.
  - Conferir: `awk -F: '($3==0){print $1}' /etc/passwd` e `sudo awk -F: '($2==""){print $1}' /etc/shadow`
- [ ] Quem tem `sudo` é conhecido e revisado.
  - Conferir: `getent group sudo` (ou `wheel` em distribuições Red Hat)
- [ ] Contas de ex-colaboradores removidas ou bloqueadas.
  - Conferir: `lastlog | head -30`

## 5. Proteção contra força bruta

- [ ] [fail2ban](https://github.com/fail2ban/fail2ban) ou [CrowdSec](https://www.crowdsec.net/) instalado e vigiando o SSH. Eles bloqueiam IPs que erram login repetidamente. Documentação do CrowdSec: [docs.crowdsec.net](https://docs.crowdsec.net/).
  - Conferir: `sudo fail2ban-client status sshd` ou `sudo cscli decisions list`
- [ ] Alertas de login falho chegam a alguém. Isso depende de logs centralizados (seção 7).

## 6. Auditoria com Lynis

[Lynis](https://cisofy.com/lynis/) é um auditor de hardening que lê o sistema e dá recomendações. Não altera nada.

- [ ] Rodar e guardar o relatório: `sudo lynis audit system`
- [ ] Tratar primeiro os avisos (warnings), depois as sugestões. Rode de novo depois dos ajustes e compare.
- [ ] Repetir a cada mudança grande ou em agenda fixa. Mais em [hardening de sistemas](../../catalogo/hardening-de-sistemas.md). Para ir além, os [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks) detalham cada configuração.

## 7. Logs e auditoria

- [ ] Logs de autenticação ativos e com retenção definida.
  - Conferir: `sudo journalctl -u ssh --since today --no-pager | tail -50` (o nome da unidade pode ser `sshd`) e `last -n 20`
- [ ] Logs enviados para fora do servidor (SIEM, serviço de logs ou outro servidor). Quem invade apaga o log local. Veja [SIEM e logs](../../catalogo/siem-e-logs.md).
- [ ] Opcional: `auditd` com um conjunto de regras conhecido, como o [Neo23x0/auditd](https://github.com/Neo23x0/auditd) ([manual do auditd](https://man7.org/linux/man-pages/man8/auditd.8.html)).
  - Conferir: `systemctl is-active auditd`
- [ ] Relógio sincronizado.
  - Conferir: `timedatectl`

## 8. Backups

- [ ] Backup 3-2-1: 3 cópias, 2 tipos de mídia, 1 fora do servidor e fora da mesma conta. Ferramentas abertas com criptografia: [restic](https://restic.net/) e [BorgBackup](https://www.borgbackup.org/).
- [ ] Pelo menos uma cópia que o servidor não consegue apagar (modo somente-acréscimo, versão imutável ou cópia offline). Ransomware apaga o que alcança.
- [ ] Restauração testada **em pasta ou máquina de teste**, nunca por cima da produção.
  - Conferir a lista de cópias: `restic snapshots` (ou `borg list`)
- Mais em [backup e recuperação](../../catalogo/backup-e-recuperacao.md).

## Se algo estiver errado

Se você achar sinal de invasão (conta desconhecida, processo estranho, login de país inesperado), siga [a primeira hora de um incidente](resposta-a-incidente-primeira-hora.md) antes de apagar qualquer coisa.

Revisado em 18/10/2026
