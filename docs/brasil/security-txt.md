# Como publicar um security.txt e uma política de divulgação responsável

> **English:** Short guide to publishing a /.well-known/security.txt file (RFC 9116) on your website so security researchers know whom to contact, with a ready example in Portuguese and a 12-line coordinated vulnerability disclosure policy a small company can copy.

O `security.txt` é um arquivo de texto no seu site que diz a quem achou uma falha como avisar você. Sem ele, quem acha a falha não sabe a quem escrever e muitas vezes desiste. O formato é a [RFC 9116](https://www.rfc-editor.org/rfc/rfc9116) (RFC é o documento técnico que define padrões da internet). Divulgação responsável (coordinated vulnerability disclosure) é combinar com o dono do sistema o aviso e o prazo antes de falar publicamente da falha.

## O que o arquivo tem

Cada linha é um campo no formato `Nome: valor`. Linha que começa com `#` é comentário.

| Campo | Obrigatório | Para que serve |
|---|---|---|
| `Contact` | Sim | Como relatar: e-mail (`mailto:`), telefone (`tel:`) ou página (`https://`). Pode repetir, em ordem de preferência |
| `Expires` | Sim | Data e hora (formato RFC 3339) depois da qual o arquivo é considerado velho. A RFC recomenda menos de um ano à frente. Aparece uma vez só |
| `Encryption` | Não | Endereço (`https://`) da chave pública OpenPGP (padrão aberto de criptografia) para quem quer enviar o relato cifrado. A chave em si não vai no arquivo |
| `Preferred-Languages` | Não | Idiomas aceitos, por exemplo `pt-BR, en`. Sem o campo, a RFC diz que o pesquisador pode assumir inglês |
| `Canonical` | Não | Endereço oficial do arquivo. Recomendado quando o arquivo é assinado |
| `Policy` | Não | Link da sua política de divulgação responsável |
| `Acknowledgments` | Não | Página que agradece a quem relatou |
| `Hiring` | Não | Página de vagas de segurança |

## Exemplo pronto

Troque `exemplo.com.br` pelo seu domínio e a data de `Expires` por uma data a menos de um ano à frente.

```
# Canal de segurança de exemplo.com.br
Contact: mailto:security@exemplo.com.br
Contact: https://exemplo.com.br/seguranca/contato
Expires: 2027-06-30T23:59:00Z
Encryption: https://exemplo.com.br/seguranca/chave-pgp.asc
Preferred-Languages: pt-BR, en
Canonical: https://exemplo.com.br/.well-known/security.txt
Policy: https://exemplo.com.br/seguranca/politica
Acknowledgments: https://exemplo.com.br/seguranca/agradecimentos
```

Se você não tem chave PGP, página de política ou de agradecimentos ainda, apague essas linhas. Só `Contact` e `Expires` são obrigatórios.

## Como publicar

1. **Crie a caixa de e-mail.** A RFC manda seguir as convenções da RFC 2142 para endereços de segurança, que usa `security@seudominio`. Pelo menos duas pessoas devem ler essa caixa.
2. **Escreva o arquivo.** Salve como `security.txt`, texto puro, em UTF-8.
3. **Coloque no caminho certo.** A RFC exige `https://seudominio/.well-known/security.txt`. Pode haver também uma cópia na raiz (`/security.txt`) por compatibilidade, mas se as duas existirem vale a do `/.well-known/`. A pasta `.well-known` fica na raiz pública do site. Em hospedagem estática, crie a pasta e o arquivo ali.
4. **Sirva por HTTPS com o tipo certo.** O arquivo precisa de `Content-Type: text/plain` com `charset=utf-8`. Exemplo para nginx (servidor web):

   ```
   location = /.well-known/security.txt {
       default_type text/plain;
       charset utf-8;
   }
   ```

5. **Teste.**

   ```
   curl -sI https://seudominio/.well-known/security.txt
   curl -s  https://seudominio/.well-known/security.txt
   ```

   Confira se o primeiro mostra `200` e `content-type: text/plain; charset=utf-8`, e se o segundo mostra o texto.
6. **Marque a renovação.** Ponha na agenda uma data antes do `Expires`. Arquivo vencido é tratado como velho e pode ser ignorado.
7. **Um arquivo por domínio.** O arquivo vale só para o domínio ou IP (endereço de rede) onde está. Subdomínios com outro dono precisam do próprio.

**Assinatura (opcional).** A RFC recomenda assinar o arquivo com OpenPGP, no formato de assinatura de texto (cleartext), e usar o campo `Canonical` junto, para que a assinatura confirme o endereço do arquivo. Exemplo real: o [security.txt do CERT.br](https://cert.br/.well-known/security.txt) é assinado e traz contato `security@cert.br`, idiomas `en, pt-br` e chave em `https://cert.br/pgp/CERTbr.asc`.

## Política de divulgação responsável: modelo para copiar

Publique em uma página do seu site e aponte o campo `Policy` para ela. Preencha os colchetes. Os prazos ficam com você: escreva só o que sua equipe consegue cumprir.

```
Política de divulgação responsável de [Empresa]

1. Escopo. Vale para [domínios e sistemas]. Está fora do escopo: [sistemas de terceiros, ataque de negação de serviço, engenharia social contra funcionários].
2. Como relatar. Escreva para security@exemplo.com.br com o endereço afetado, os passos para reproduzir e o impacto que você observou. Chave PGP em [endereço].
3. O que pedimos. Teste apenas contas e dados seus. Pare ao provar que a falha existe. Não copie, altere nem apague dados de terceiros. Não derrube o serviço.
4. Sigilo. Não divulgue a falha antes de combinarmos a data com você.
5. O que prometemos. Confirmamos o recebimento em até [PRAZO] e informamos o andamento a cada [PRAZO].
6. Correção. Corrigimos conforme a gravidade e combinamos com você a data de divulgação.
7. Reconhecimento. Com a sua autorização, citamos seu nome em [página de agradecimentos]. [Não oferecemos recompensa em dinheiro.]
8. Boa-fé. Quem segue esta política e age de boa-fé não sofrerá ação de [Empresa] por isso.
9. Limite. Esta política não autoriza acesso a dados de terceiros nem dispensa o cumprimento da lei.
10. Dados pessoais. Se o relato tiver dados pessoais, usamos só para tratar a falha.
11. Contato. security@exemplo.com.br
12. Atualizada em [data].
```

**Cuidados**

- A promessa de boa-fé (item 8) obriga a sua empresa. Ela não muda o que a lei penal diz e não vale em nome de clientes ou terceiros afetados. O art. 154-A do Código Penal trata de invadir dispositivo sem autorização (veja [legislacao.md](legislacao.md)). Peça a um advogado que revise o item.
- Se um relato revelar que dados pessoais ficaram expostos, siga o roteiro de [incidente-lgpd-passo-a-passo.md](incidente-lgpd-passo-a-passo.md). Os 3 dias úteis contam do momento em que você soube que o incidente afetou dados pessoais.
- Responda a quem relatou. Silêncio faz o pesquisador procurar outro caminho.
- Órgão público: o governo federal tem um [modelo de política de gestão de vulnerabilidades](https://www.gov.br/governodigital/pt-br/privacidade-e-seguranca/ppsi-2.0/arquivos/modelo-de-politica-de-gestao-de-vulnerabilidades-v1-0-14mai2026.pdf) para órgãos e entidades do SISP. A licença do modelo não permite obras derivadas.
- Em Portugal, o CERT.PT é a entidade coordenadora nacional da divulgação coordenada de vulnerabilidades. Veja [../portugal/README.md](../portugal/README.md).

## Fontes

- [RFC 9116: A File Format to Aid in Security Vulnerability Disclosure](https://www.rfc-editor.org/rfc/rfc9116)
- [security.txt do CERT.br](https://cert.br/.well-known/security.txt)
- [securitytxt.org](https://securitytxt.org/): página do projeto, com gerador de arquivo

Revisado em 18/10/2026

Este material é informativo e não substitui orientação jurídica.
