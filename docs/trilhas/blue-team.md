> **English:** A defensive path for SOC, SIEM, detection engineering, incident response and forensics, with free resources, legal labs and concrete deliverables.

# Trilha Blue team: monitorar, detectar e responder

Blue team é a equipe que defende: monitora, detecta e responde a ataques. Esta trilha leva você a montar um laboratório de monitoramento e a documentar investigações. Ela pressupõe a base da [trilha Fundamentos](fundamentos.md).

Pratique só em laboratório próprio ou autorizado. Veja a [legislação brasileira](../brasil/legislacao.md). Arquivos suspeitos só em máquina virtual isolada.

## Etapa 1: como um SOC trabalha

- **O que aprender:** o que é um SOC (Security Operations Center, centro de operações de segurança), o ciclo de vida de um incidente, triagem e escalonamento.
- **Recurso gratuito:** [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final), o guia oficial de resposta a incidentes.
- **Laboratório:** leia o guia e desenhe o fluxo de um alerta de phishing, da chegada à conclusão.
- **Como saber que terminou:** você tem um fluxograma de uma página, com quem faz o quê em cada passo.

## Etapa 2: logs e SIEM

- **O que aprender:** fontes de log, coleta por agente, normalização, correlação e alerta. SIEM é o sistema que centraliza e correlaciona eventos de segurança.
- **Recurso gratuito:** [Wazuh, guia de início rápido](https://documentation.wazuh.com/current/quickstart.html). O site do projeto é [wazuh.com](https://wazuh.com).
- **Laboratório:** suba o Wazuh numa máquina virtual sua e instale um agente em outra máquina sua.
- **Como saber que terminou:** você subiu um Wazuh em casa e escreveu 3 regras que disparam alertas verificados. Veja [SIEM e gestão de logs](../../catalogo/siem-e-logs.md).

## Etapa 3: engenharia de detecção

- **O que aprender:** transformar comportamento suspeito em regra. Formato Sigma, mapeamento para técnicas do MITRE ATT&CK e controle de falsos positivos.
- **Recurso gratuito:** [repositório do Sigma](https://github.com/SigmaHQ/sigma) e a [matriz do ATT&CK](https://attack.mitre.org). Como usar o ATT&CK, em [frameworks](../frameworks.md).
- **Laboratório:** em máquina virtual sua, execute testes do [Atomic Red Team](https://github.com/redcanaryco/atomic-red-team) e confira se seus alertas disparam.
- **Como saber que terminou:** você escreveu 5 regras no formato Sigma, cada uma marcada com a técnica do ATT&CK que cobre, e provou que o teste correspondente gerou o alerta. Veja [Regras de detecção](../../catalogo/regras-de-deteccao.md).

## Etapa 4: monitoramento de rede

- **O que aprender:** captura de pacotes, registro de sessões, assinaturas de IDS (sistema de detecção de intrusão) e análise de tráfego anômalo.
- **Recurso gratuito:** documentação do [Zeek](https://docs.zeek.org), do [Suricata](https://docs.suricata.io) e do [Security Onion](https://docs.securityonion.net).
- **Laboratório:** analise uma captura de tráfego (PCAP) de treino do [Malware Traffic Analysis](https://www.malware-traffic-analysis.net), dentro de máquina virtual isolada.
- **Como saber que terminou:** você entrega um relatório com linha do tempo, máquinas afetadas e indicadores de comprometimento (IOCs) extraídos. Veja [Detecção de rede](../../catalogo/deteccao-de-rede.md).

## Etapa 5: treino como analista

- **O que aprender:** investigar alertas reais de ponta a ponta, em ambientes simulados.
- **Recurso gratuito:** [CyberDefenders](https://cyberdefenders.org), [LetsDefend](https://letsdefend.io), [Blue Team Labs Online](https://blueteamlabs.online) e [TryHackMe](https://tryhackme.com). Confira o que está aberto em cada um.
- **Laboratório:** resolva 10 investigações, de pelo menos duas plataformas.
- **Como saber que terminou:** você escreveu um relatório curto de cada uma, com evidência, conclusão e recomendação.

## Etapa 6: resposta a incidentes

- **O que aprender:** contenção, erradicação, recuperação, comunicação e lições aprendidas. Playbook é o roteiro escrito de resposta a um tipo de incidente.
- **Recurso gratuito:** novamente a [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final), agora para escrever. Gestão de casos com o [TheHive](https://thehive-project.org) e coleta remota com o [Velociraptor](https://docs.velociraptor.app).
- **Laboratório:** faça um exercício de mesa (simulação discutida, sem tocar em sistemas) de um ransomware no seu laboratório.
- **Como saber que terminou:** você escreveu um playbook de ransomware com papéis, decisões e contatos, e registrou o resultado do exercício. Veja [Resposta a incidentes e SOAR](../../catalogo/resposta-a-incidentes.md).

## Etapa 7: forense digital

- **O que aprender:** preservar evidência, analisar memória e disco, montar linha do tempo e manter cadeia de custódia.
- **Recurso gratuito:** [Volatility Foundation](https://volatilityfoundation.org), para memória, e o [Velociraptor](https://docs.velociraptor.app), para coleta.
- **Laboratório:** resolva desafios de forense de memória e disco do CyberDefenders ou do Blue Team Labs Online.
- **Como saber que terminou:** você reconstruiu uma linha do tempo de um incidente simulado e a documentou com a evidência de cada passo. Veja [Forense digital](../../catalogo/forense-digital.md).

## Etapa 8: caça a ameaças e inteligência

- **O que aprender:** threat hunting (busca ativa por ameaças que os alertas não pegaram), hipóteses de caça e uso de inteligência de ameaças.
- **Recurso gratuito:** [Elastic Security Labs](https://www.elastic.co/security-labs), com pesquisas publicadas, e a matriz do [MITRE ATT&CK](https://attack.mitre.org).
- **Laboratório:** escolha uma técnica do ATT&CK, escreva uma hipótese e procure a evidência nos logs do seu laboratório.
- **Como saber que terminou:** você documentou uma caça completa: hipótese, consultas, resultado e a regra nova que nasceu dela. Veja [Inteligência de ameaças](../../catalogo/inteligencia-de-ameacas.md).

## Depois da trilha

Revise sua cobertura de detecção com a matriz do ATT&CK e escolha uma especialização: engenharia de detecção, resposta a incidentes ou forense. Para certificações, veja [Certificações](../../catalogo/certificacoes.md). Termos novos estão no [glossário](../glossario.md).

Revisado em 18/10/2026
