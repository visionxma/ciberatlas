# Checklist: nuvem

> **English:** Cloud account checklist: protected root account, MFA, least privilege, audit logs on, private buckets and scanning with Prowler or ScoutSuite. Applies to AWS, Azure and Google Cloud.

Os termos mudam de provedor, mas os controles são os mesmos. Os exemplos de comando usam a AWS CLI e só leem o estado. Rode apenas na **sua** conta.

## 1. Conta raiz protegida

A conta raiz (root, na AWS) ou o administrador global (Azure e Entra ID) pode tudo e não tem limite. Veja as [boas práticas da conta raiz na AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/root-user-best-practices.html).

- [ ] E-mail da conta raiz é uma caixa da organização com 2FA, não o e-mail pessoal de alguém.
- [ ] MFA (autenticação multifator) ligado na conta raiz, de preferência com chave física (FIDO2), mais um segundo dispositivo de reserva.
- [ ] Sem chaves de acesso (access keys) na conta raiz.
  - Conferir: `aws iam get-account-summary` (veja `AccountAccessKeysPresent`, esperado 0 e `AccountMFAEnabled`, esperado 1)
- [ ] A conta raiz é usada só para o que só ela faz. O trabalho diário é de usuários e papéis comuns.

## 2. MFA para todo mundo

- [ ] MFA obrigatório para todos os usuários humanos. Guias: [MFA no IAM da AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html) e [MFA no Microsoft Entra](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-mfa-howitworks).
  - Conferir (AWS): `aws iam generate-credential-report` e depois `aws iam get-credential-report` (coluna `mfa_active`)
- [ ] Login pelo provedor de identidade da empresa (SSO, login único), em vez de usuários locais soltos. Catálogo: [identidade e acesso](../../catalogo/identidade-e-acesso.md).

## 3. Menor privilégio

Cada pessoa e cada serviço recebe só a permissão de que precisa. Boas práticas: [IAM na AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html), [Azure](https://learn.microsoft.com/en-us/azure/security/fundamentals/best-practices-and-patterns), [Google Cloud](https://cloud.google.com/security/best-practices).

- [ ] Ninguém tem administrador total sem necessidade. Permissões dadas por grupo ou papel, não por usuário.
  - Conferir (AWS): `aws iam list-attached-user-policies --user-name USUARIO` e `aws iam list-entities-for-policy --policy-arn arn:aws:iam::aws:policy/AdministratorAccess`
- [ ] Serviços usam papéis com credencial temporária, e não chaves fixas guardadas em código ou servidor. Veja [gestão de segredos](../../catalogo/gestao-de-segredos.md).
- [ ] Chaves de acesso antigas ou sem uso removidas; usuários de quem saiu da empresa desativados.
  - Conferir (AWS): o relatório de credenciais (item 2) mostra a data de último uso de cada chave.
- [ ] Limites no nível da organização para impedir ações perigosas ([Service Control Policies](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) e equivalentes).

## 4. Logs de auditoria ligados

Sem log não dá para saber quem fez o quê. Guarde em conta separada e proteja contra apagamento.

- [ ] AWS: [CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html) ligado em todas as regiões, com logs enviados a um bucket protegido.
  - Conferir: `aws cloudtrail describe-trails` e `aws cloudtrail get-trail-status --name NOME`
- [ ] Azure: Activity Log e logs de diagnóstico enviados a um workspace. Google Cloud: Cloud Audit Logs ligados.
- [ ] Alertas para eventos críticos: login do root, mudança de política, desligamento do log, criação de chave de acesso. Veja [SIEM e logs](../../catalogo/siem-e-logs.md).
- [ ] Serviço nativo de postura ligado: [Security Hub](https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html), [Defender for Cloud](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-cloud-introduction) ou [Security Command Center](https://cloud.google.com/security-command-center/docs/security-command-center-overview).

## 5. Armazenamento privado

Bucket (pasta de arquivos na nuvem) aberto por engano é uma das causas mais comuns de vazamento.

- [ ] Bloqueio de acesso público ligado na conta e em cada bucket. Guias: [AWS S3 Block Public Access](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html), [Azure](https://learn.microsoft.com/en-us/azure/storage/blobs/anonymous-read-access-prevent) e [Google Cloud](https://cloud.google.com/storage/docs/public-access-prevention).
  - Conferir (AWS): `aws s3control get-public-access-block --account-id ID_DA_CONTA`
- [ ] Criptografia em repouso ligada e versionamento ativo nos buckets importantes.
- [ ] Bancos de dados e filas sem endereço público; acesso por rede privada.
  - Conferir (AWS): `aws ec2 describe-security-groups --query "SecurityGroups[?IpPermissions[?IpRanges[?CidrIp=='0.0.0.0/0']]].GroupId"` (grupos abertos para todo mundo; revise os que expõem portas além de 80 e 443)

## 6. Varredura automática da postura

Estas ferramentas leem a configuração da conta e listam os desvios. Não alteram nada.

- [ ] Rodar [Prowler](https://github.com/prowler-cloud/prowler) (AWS, Azure, GCP e Kubernetes) ou [ScoutSuite](https://github.com/nccgroup/ScoutSuite) e guardar o relatório.
- [ ] Tratar primeiro o que está crítico e aberto para a internet; depois o resto. Repetir em agenda fixa e a cada mudança grande.
- [ ] Verificar o código de infraestrutura (Terraform, CloudFormation) **antes** do deploy (publicação) com ferramentas como o [Checkov](https://github.com/bridgecrewio/checkov). Catálogo: [segurança em nuvem e IaC](../../catalogo/seguranca-em-nuvem.md).

## 7. Backup e resposta

- [ ] Backups fora da conta de produção ou com bloqueio de apagamento. Veja [backup e recuperação](../../catalogo/backup-e-recuperacao.md).
- [ ] Contato de segurança e de cobrança atualizados no provedor.
- [ ] Alerta de custo ligado: custo inesperado costuma ser o primeiro sinal de credencial roubada.
- [ ] Plano para credencial vazada: desativar a chave, revisar o log de uso e abrir incidente. Veja [a primeira hora de um incidente](resposta-a-incidente-primeira-hora.md).

Revisado em 18/10/2026
