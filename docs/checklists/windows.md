# Checklist: Windows

> **English:** Hardening checklist for Windows with read-only PowerShell checks: updates, BitLocker, Defender, standard accounts for daily work, LAPS, Sysmon and PowerShell logging.

Os comandos abaixo só leem o estado. Abra o PowerShell como administrador para os que pedem. Se o computador pertence a uma empresa, fale com quem administra antes de mudar política.

## 1. Atualizações

- [ ] Windows Update ligado e sem pendências antigas. Em Configurações, abra Windows Update e confira "Você está atualizado".
  - Conferir últimas correções instaladas: `Get-HotFix | Sort-Object InstalledOn -Descending | Select-Object -First 5`
- [ ] Navegador, Office e demais programas atualizando sozinhos.
- [ ] Sistema com suporte do fabricante. Versão sem atualizações de segurança não é defensável. Veja a [página de atualizações da Microsoft](https://support.microsoft.com/windows).

## 2. Criptografia de disco (BitLocker)

BitLocker cifra o disco. Notebook perdido ou roubado deixa de expor os arquivos. Documentação: [BitLocker](https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/).

- [ ] Todos os discos fixos cifrados.
  - Conferir: `Get-BitLockerVolume` (veja `ProtectionStatus` = `On`)
- [ ] Chave de recuperação guardada fora do computador (conta Microsoft da empresa, Active Directory ou Entra ID, ou cofre de senhas). Sem ela, perder o TPM (chip de segurança) significa perder os dados.
- [ ] Inicialização segura ligada e TPM presente.
  - Conferir: `Confirm-SecureBootUEFI` e `Get-Tpm`

## 3. Microsoft Defender e firewall

- [ ] Defender ativo, com proteção em tempo real, na nuvem e atualizado. Veja o [Microsoft Defender Antivírus](https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows).
  - Conferir: `Get-MpComputerStatus | Select-Object AMServiceEnabled, RealTimeProtectionEnabled, AntivirusSignatureLastUpdated`
- [ ] Firewall do Windows ligado nos três perfis (domínio, privado, público).
  - Conferir: `Get-NetFirewallProfile | Select-Object Name, Enabled`
- [ ] SMBv1 (protocolo antigo de compartilhamento de arquivos) desligado.
  - Conferir: `Get-SmbServerConfiguration | Select-Object EnableSMB1Protocol`

## 4. Contas: administrador só quando precisa

- [ ] O uso diário é feito numa conta **padrão**, não administradora. A conta admin entra só para instalar e configurar. O Windows pede confirmação pelo [Controle de Conta de Usuário (UAC)](https://learn.microsoft.com/en-us/windows/security/application-security/application-control/user-account-control/how-it-works), que deve ficar ligado.
  - Conferir quem é administrador: `Get-LocalGroupMember -Group Administrators`
- [ ] Conta "Convidado" desativada.
  - Conferir: `Get-LocalUser | Select-Object Name, Enabled`
- [ ] Senha forte e, quando possível, Windows Hello (PIN ou biometria) e 2FA na conta Microsoft.

## 5. Senha de administrador local única por máquina (LAPS)

Quando todos os computadores têm a mesma senha de administrador local, invadir um permite entrar em todos. O **Windows LAPS** (Local Administrator Password Solution) gera uma senha diferente por máquina e a guarda no diretório. Veja a [visão geral](https://learn.microsoft.com/en-us/windows-server/identity/laps/laps-overview) e a lista de versões compatíveis.

- [ ] LAPS ativo para os computadores da organização (aplica-se a ambientes com Active Directory ou Entra ID).
- [ ] Quem pode ler as senhas LAPS é uma lista curta e revisada.

## 6. Registro de eventos: Sysmon e PowerShell logging

Sem registro não há investigação. Estes dois itens dão visibilidade com baixo custo.

- [ ] [Sysmon](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon) (monitor de sistema da Microsoft Sysinternals) instalado com uma configuração conhecida, como [SwiftOnSecurity/sysmon-config](https://github.com/SwiftOnSecurity/sysmon-config) ou [sysmon-modular](https://github.com/olafhartong/sysmon-modular). Teste antes em poucos computadores, porque gera volume de eventos.
  - Conferir: `Get-Service Sysmon64 -ErrorAction SilentlyContinue`
- [ ] Registro de blocos de script do PowerShell (evento 4104) ligado, e de módulo. Configuração por política de grupo, descrita em [about_Logging_Windows](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_logging_windows).
  - Conferir: `Get-ItemProperty 'HKLM:\SOFTWARE\Policies\Microsoft\Windows\PowerShell\ScriptBlockLogging' -ErrorAction SilentlyContinue`
- [ ] Auditoria de criação de processo (evento 4688) e de logon ligada na política de auditoria.
  - Conferir: `auditpol /get /category:*`
- [ ] Os eventos saem da máquina para um coletor central. Veja [endpoint e telemetria](../../catalogo/endpoint-e-telemetria.md) e [SIEM e logs](../../catalogo/siem-e-logs.md).

## 7. Backup

- [ ] Backup 3-2-1 (3 cópias, 2 mídias, 1 fora do local), com uma cópia que o computador não consegue apagar. Veja [backup e recuperação](../../catalogo/backup-e-recuperacao.md).
- [ ] Restauração de um arquivo testada.

## 8. Referências para ir além

- [Linhas de base de segurança da Microsoft](https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines) e os [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks).
- [Hardening de sistemas](../../catalogo/hardening-de-sistemas.md) no catálogo.
- Sinal de invasão: [a primeira hora de um incidente](resposta-a-incidente-primeira-hora.md).

Revisado em 18/10/2026
