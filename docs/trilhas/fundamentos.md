> **English:** A zero-to-first-job path covering networking, Linux, Windows, scripting and core security concepts, with free resources, legal labs and concrete deliverables.

# Trilha Fundamentos: do zero ao primeiro emprego

Esta trilha dá a base que as outras três pressupõem. Ela tem oito etapas. Cada uma termina com um entregável. Guarde todos em um repositório seu.

Pratique só em laboratório próprio ou autorizado. Veja a [legislação brasileira](../brasil/legislacao.md).

## Etapa 1: preparar o laboratório

- **O que aprender:** o que é uma máquina virtual (computador simulado dentro do seu computador) e por que ela isola riscos.
- **Recurso gratuito:** [VirtualBox](https://www.virtualbox.org), para criar máquinas virtuais, e [Ubuntu Server](https://ubuntu.com/download/server), o sistema que você vai instalar nelas.
- **Laboratório:** instale uma máquina Ubuntu Server dentro do VirtualBox, no seu computador.
- **Como saber que terminou:** a máquina liga, você entra por terminal, tira um instantâneo (snapshot) dela e consegue voltar ao estado salvo.

## Etapa 2: redes

- **O que aprender:** endereço IP, máscara de rede, DNS (sistema que traduz nome em endereço), HTTP, portas, TCP e UDP, e o caminho de um pacote entre dois computadores.
- **Recurso gratuito:** [Wireshark User's Guide](https://www.wireshark.org/docs/), a documentação oficial do analisador de pacotes.
- **Laboratório:** capture o tráfego do seu próprio computador enquanto abre uma página.
- **Como saber que terminou:** você identificou na captura uma consulta DNS e uma requisição HTTP e escreveu uma página explicando cada campo que viu.

## Etapa 3: Linux e linha de comando

- **O que aprender:** navegar em pastas, permissões de arquivo, usuários, processos, pipes e busca em texto.
- **Recurso gratuito:** [OverTheWire Bandit](https://overthewire.org/wargames/bandit/), jogo de terminal que ensina comando por comando.
- **Laboratório:** resolva os 10 primeiros níveis do Bandit.
- **Como saber que terminou:** você tem um arquivo com os comandos usados em cada nível e uma frase sobre o que cada um faz.

## Etapa 4: Windows

- **O que aprender:** processos, serviços, registro, programas que iniciam com o sistema e conexões de rede abertas.
- **Recurso gratuito:** [Windows Security na Microsoft Learn](https://learn.microsoft.com/en-us/windows/security/) e as ferramentas [Sysinternals](https://learn.microsoft.com/en-us/sysinternals/), como o [Process Explorer](https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer).
- **Laboratório:** num Windows seu, liste o que roda e o que inicia com o sistema.
- **Como saber que terminou:** você tem um inventário de uma página com os processos esperados, e consegue dizer de onde vem cada um.

## Etapa 5: programação e scripts

- **O que aprender:** variáveis, laços, funções, leitura de arquivos e expressões regulares em Python.
- **Recurso gratuito:** [CS50's Introduction to Programming with Python](https://cs50.harvard.edu/python/) e o [tutorial oficial do Python](https://docs.python.org/3/tutorial/).
- **Laboratório:** escreva um script que leia o arquivo de log de autenticação da sua máquina Ubuntu e conte as falhas de login por endereço.
- **Como saber que terminou:** o script está no seu repositório, com um README que explica como rodar e um exemplo de saída.

## Etapa 6: conceitos de segurança

- **O que aprender:** confidencialidade, integridade e disponibilidade; ameaça, vulnerabilidade e risco; menor privilégio; defesa em profundidade; engenharia social.
- **Recurso gratuito:** [CS50's Introduction to Cybersecurity](https://cs50.harvard.edu/cybersecurity/) e a [Cartilha de Segurança para Internet](https://cartilha.cert.br), do CERT.br.
- **Laboratório:** faça um modelo de ameaças da sua rede doméstica: liste o que você tem, quem poderia atacar e como se defender.
- **Como saber que terminou:** você entrega uma página com ativos, ameaças, riscos e as cinco medidas que mais reduzem o risco. Termos novos estão no [glossário](../glossario.md).

## Etapa 7: contas, senhas e criptografia básica

- **O que aprender:** hash de senha, autenticação em dois fatores (MFA), certificados TLS e a diferença entre cifrar e codificar.
- **Recurso gratuito:** [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org), com as folhas sobre armazenamento de senhas e autenticação.
- **Laboratório:** ative MFA em todas as suas contas principais, adote um gerenciador de senhas e inspecione o certificado de um site no navegador.
- **Como saber que terminou:** você tem uma lista das suas contas com MFA ativo e consegue explicar a cadeia de certificados de um site. Ferramentas em [Senhas e autenticação](../../catalogo/senhas-e-autenticacao.md) e [Criptografia e TLS](../../catalogo/criptografia-e-tls.md).

## Etapa 8: primeiros desafios (CTF) e escolha de caminho

- **O que aprender:** resolver problemas curtos de segurança sob a forma de competição de bandeiras (CTF, Capture The Flag).
- **Recurso gratuito:** [picoCTF](https://picoctf.org). Para ir mais fundo depois, [pwn.college](https://pwn.college).
- **Laboratório:** resolva 10 desafios do picoCTF.
- **Como saber que terminou:** você publicou o relato de resolução (write-up) de 3 deles no seu repositório e escolheu a próxima trilha: [Blue team](blue-team.md), [AppSec](appsec.md) ou [Nuvem](nuvem.md).

## Depois da trilha

Com os oito entregáveis, você tem um portfólio inicial. Para certificações de entrada, veja [Certificações](../../catalogo/certificacoes.md). Para comunidades em português, [Comunidade lusófona](../../catalogo/comunidade-lusofona.md).

Revisado em 18/10/2026
