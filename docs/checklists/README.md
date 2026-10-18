# Checklists

> **English:** Practical security checklists with read-only check commands: Linux server, Windows, macOS, web application (OWASP Top 10:2025), cloud and first-hour incident response.

Cada checklist traz itens para marcar e, quando existe, um comando de conferência. Os comandos só leem o estado do sistema e devem rodar apenas em equipamentos seus ou autorizados.

| Checklist | Para quê |
|---|---|
| [Servidor Linux](servidor-linux.md) | Atualização automática, SSH por chave, firewall, fail2ban ou CrowdSec, auditoria com Lynis, logs e backups. |
| [Windows](windows.md) | Atualizações, BitLocker, Defender, conta sem administrador no dia a dia, LAPS, Sysmon e registro do PowerShell. |
| [macOS](macos.md) | FileVault, firewall, Gatekeeper, atualizações e o guia drduh. |
| [Aplicação web](aplicacao-web.md) | As 10 categorias do OWASP Top 10:2025, de A01 a A10, com testes. |
| [Nuvem](nuvem.md) | Conta raiz, MFA, menor privilégio, logs de auditoria, buckets privados e varredura com Prowler. |
| [Primeira hora de um incidente](resposta-a-incidente-primeira-hora.md) | O que fazer e o que não fazer: isolar, preservar evidência, registrar, acionar e comunicar. |

Por onde começar: veja as páginas por perfil em [Comece aqui](../comece-aqui/README.md).

Revisado em 18/10/2026
