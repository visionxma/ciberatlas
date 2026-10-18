# Comece aqui: analista de SOC (blue team)

> **English:** Ten ordered actions for SOC analysts and blue teams: log coverage, SIEM, Sigma rules, network and endpoint detection, MITRE ATT&CK mapping, playbooks and metrics.

## Você está aqui se…

Você trabalha ou quer trabalhar num SOC (centro de operações de segurança, quem monitora e responde a alertas) ou numa equipe azul (blue team, o lado da defesa). Você precisa de visibilidade, de alertas que valham a pena e de um processo repetível para tratá-los.

## As 10 primeiras ações, em ordem de impacto

- [ ] **1. Descubra o que você consegue ver e o que não consegue.** Liste as fontes de log (servidores, estações, firewall, e-mail, nuvem, identidade) e marque as que ainda não chegam ao SIEM. Sem log não há detecção. Comece por [inventário de ativos](../../catalogo/inventario-de-ativos.md).
- [ ] **2. Centralize os logs num SIEM** (sistema que coleta, correlaciona e alerta sobre eventos). Opções abertas como o [Wazuh](https://wazuh.com/) funcionam em ambiente pequeno. Garanta relógio sincronizado (NTP) em tudo, senão a linha do tempo mente. Catálogo: [SIEM e logs](../../catalogo/siem-e-logs.md).
- [ ] **3. Cubra primeiro as fontes de identidade e de endpoint:** logins (sucesso e falha), criação de contas, mudanças de privilégio, processos novos. É onde a maioria das invasões deixa rastro. No Windows, veja o [checklist](../checklists/windows.md) (Sysmon e PowerShell logging). Catálogo: [endpoint e telemetria](../../catalogo/endpoint-e-telemetria.md).
- [ ] **4. Adote regras Sigma.** Sigma é um formato aberto de regra de detecção que se converte para vários SIEMs. Comece pelo repositório [SigmaHQ/sigma](https://github.com/SigmaHQ/sigma) e ajuste ao seu ambiente. Catálogo: [regras de detecção](../../catalogo/regras-de-deteccao.md).
- [ ] **5. Mapeie as detecções no MITRE ATT&CK** ([attack.mitre.org](https://attack.mitre.org/)), a base de táticas e técnicas de atacantes. O mapa mostra quais técnicas você cobre e quais estão cegas. Use [MITRE CAR](https://car.mitre.org/) como exemplos de análises.
- [ ] **6. Adicione detecção de rede** com [Zeek](https://zeek.org/) (registra o que acontece nas conexões) e [Suricata](https://suricata.io/) (assinaturas de intrusão). Para uma plataforma pronta, veja o [Security Onion](https://securityonionsolutions.com/). Catálogo: [detecção de rede](../../catalogo/deteccao-de-rede.md).
- [ ] **7. Teste as próprias detecções** em laboratório com o [Atomic Red Team](https://github.com/redcanaryco/atomic-red-team) (pequenos testes de técnica ATT&CK), só em máquinas suas e de teste. Detecção que nunca foi exercitada é suposição.
- [ ] **8. Escreva um playbook (roteiro passo a passo) para cada tipo de alerta frequente:** phishing, conta suspeita, malware em estação, ransomware. Cada um com quem decide, o que verificar, quando isolar e quando escalar. Base: [NIST SP 800-61r3](https://csrc.nist.gov/pubs/sp/800/61/r3/final) e [resposta a incidentes](../../catalogo/resposta-a-incidentes.md). Use o [checklist da primeira hora](../checklists/resposta-a-incidente-primeira-hora.md).
- [ ] **9. Alimente-se de inteligência de ameaças útil:** o catálogo de [vulnerabilidades exploradas ativamente da CISA](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) mostra o que priorizar para corrigir. Veja [inteligência de ameaças](../../catalogo/inteligencia-de-ameacas.md).
- [ ] **10. Meça o SOC:** tempo até detectar e tempo até conter, quantidade de alertas por regra, taxa de falso positivo, cobertura de técnicas ATT&CK. Acompanhe a tendência por mês. Regra que só gera ruído é ajustada ou desligada.

## O que NÃO perder tempo fazendo agora

- Ativar todas as regras de uma vez. Você ganha milhares de alertas e perde a confiança da equipe. Ligue por prioridade e ajuste.
- Comprar ferramenta antes de saber quais logs faltam.
- Caçar ameaça avançada (threat hunting) sem a base de logs do item 3.
- Medir sucesso por número de alertas fechados. Meça o que foi realmente detectado e contido.

## Próximo nível

- Forense e coleta remota: [forense digital](../../catalogo/forense-digital.md) e [resposta a incidentes e SOAR](../../catalogo/resposta-a-incidentes.md).
- Triagem defensiva de arquivo suspeito: [análise de malware](../../catalogo/analise-de-malware.md).
- Iscas que só um intruso tocaria: [enganação e iscas](../../catalogo/enganacao-e-iscas.md).
- Mapeie defesas no [MITRE D3FEND](https://d3fend.mitre.org/) e acompanhe o [NIST CSF](https://www.nist.gov/cyberframework).

Revisado em 18/10/2026
