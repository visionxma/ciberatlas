<div align="center">

# CiberAtlas

**The open, living atlas of defensive cybersecurity.**

In Portuguese and English. Re-checked every week by a bot. Organized by NIST CSF 2.0,
MITRE D3FEND and the CIS Controls.

**[🔎 Search the site](https://visionxma.github.io/ciberatlas/?lang=en)** · [Português](README.md) · [Catalog](catalogo/en/README.md) · [Start here (in Portuguese)](docs/comece-aqui/README.md) · [Contribute](CONTRIBUTING.en.md) · [Open data](#use-the-data)

<!-- atlas:selos -->
![itens](https://img.shields.io/badge/items-412-0b7285) ![projetos](https://img.shields.io/badge/verified%20projects-341-2b8a3e) ![atualizado](https://img.shields.io/badge/updated-2026--10--19-495057) ![licença](https://img.shields.io/badge/data-CC0--1.0-495057)
<!-- /atlas:selos -->

</div>

<!-- atlas:numeros -->
**412 items** in **37 categories** · **341 open-source projects** checked by the bot on 2026-10-19 (312 active in the last 6 months) · 2.97M combined stars · 3 in the [graveyard](catalogo/cemiterio.md)
<!-- /atlas:numeros -->

---

## Why it exists

Hand-maintained security lists rot. The link stays, the project dies, gets archived or
changes hands. On 2026-10-18, the most-starred "awesome security" list on GitHub had no
commit since 2026-01-11 and 326 open pull requests. Of the 15 most-starred lists with that
name, 5 were archived or had no commit for over a year. Newcomers cannot tell what still
works without opening every entry.

CiberAtlas fixes that with three choices:

| | traditional list | CiberAtlas |
|---|---|---|
| Is the project alive? | open each one | health badge on every row, measured weekly |
| Abandoned project | stays listed | moves itself to the [graveyard](catalogo/cemiterio.md) |
| Structure | maintainer's taste | NIST CSF 2.0, MITRE D3FEND and CIS Controls v8.1 |
| Language | English | Portuguese and English, side by side |
| Legal context | none | Brazil's LGPD, ANPD, Criminal Code and Portugal's NIS2 law (guides in Portuguese, English summary at the top) |
| Machine use | copy-paste markdown | [open JSON](api/catalogo.json) and [`llms.txt`](llms.txt) for AI |
| Where to start | one huge page | one entry point per profile |

The focus is **defense**: protect, detect, respond, recover and learn. Testing tools are
listed when the expected use is testing your own systems or a training lab.

## Catalog

Each category has a page with the full table: what the project does, stars, last
activity, license and health badge. 🟢 active in the last 6 months · 🟡 6 to 24 months ·
🌐 resource outside GitHub.

<!-- atlas:indice -->
### GV · Govern (17)

_Strategy, roles, policy, compliance and privacy._

- [GRC & compliance](catalogo/en/grc-e-conformidade.md) · 7 — Risk, controls and audit management (ISO 27001, NIST, CIS, GDPR).
- [Privacy & personal data](catalogo/en/privacidade-e-dados-pessoais.md) · 10 — Find, classify and protect personal data — the technical side of GDPR/LGPD.

### ID · Identify (50)

_Know what you have, what is exposed and what can go wrong._

- [Asset inventory](catalogo/en/inventario-de-ativos.md) · 12 — Know which machines, software and accounts exist in your organization.
- [Vulnerability management](catalogo/en/gestao-de-vulnerabilidades.md) · 15 — Find and prioritize known flaws in your own systems, images and dependencies.
- [Supply chain & SBOM](catalogo/en/cadeia-de-suprimentos-e-sbom.md) · 15 — Software bill of materials, artifact signing and dependency health.
- [Threat modeling](catalogo/en/modelagem-de-ameacas.md) · 8 — Diagram the system and find where it can be attacked before writing code.

### PR · Protect (114)

_Code, identities, systems, cloud and network hardened before the attack._

- [Static code analysis (SAST)](catalogo/en/analise-estatica-de-codigo.md) · 9 — Find security flaws in source code before it ships.
- [Leaked secrets in code](catalogo/en/segredos-no-codigo.md) · 8 — Find keys, passwords and tokens left in git before someone else does.
- [Secrets management](catalogo/en/gestao-de-segredos.md) · 6 — Store and distribute application credentials without plaintext.
- [Identity & access (IAM)](catalogo/en/identidade-e-acesso.md) · 10 — Single sign-on, MFA, access control and privileged access.
- [System hardening](catalogo/en/hardening-de-sistemas.md) · 10 — Audit and harden Linux, Windows and macOS against known benchmarks.
- [Cloud & IaC security](catalogo/en/seguranca-em-nuvem.md) · 8 — Audit AWS, Azure and GCP accounts and infrastructure-as-code before deploy.
- [Containers & Kubernetes](catalogo/en/containers-e-kubernetes.md) · 9 — Policies, benchmarks and scanning for images and clusters.
- [Network, firewall & VPN](catalogo/en/rede-firewall-e-vpn.md) · 11 — Segment, filter and connect securely.
- [WAF & web application protection](catalogo/en/waf-e-protecao-web.md) · 7 — Filter malicious traffic before it reaches the application.
- [Dynamic application testing (DAST)](catalogo/en/testes-dinamicos-de-aplicacao.md) · 6 — Test your own running application in the pipeline, before attackers do.
- [Cryptography & TLS](catalogo/en/criptografia-e-tls.md) · 10 — Certificates, file encryption and TLS configuration audit.
- [Email security](catalogo/en/seguranca-de-email.md) · 10 — SPF, DKIM, DMARC, anti-spam and abuse reports for your domain.
- [AI & LLM security](catalogo/en/seguranca-de-ia.md) · 10 — Test and protect your own models and agents against prompt injection and leakage.

### DE · Detect (61)

_See the attack happening — logs, network, endpoint, intel and decoys._

- [SIEM & log management](catalogo/en/siem-e-logs.md) · 10 — Centralize, correlate and alert on security events.
- [Detection rules](catalogo/en/regras-de-deteccao.md) · 11 — Ready-made open rules (Sigma, YARA and friends) and tools that run them.
- [Network intrusion detection (IDS/NSM)](catalogo/en/deteccao-de-rede.md) · 11 — See traffic, record sessions and detect anomalous behavior.
- [Endpoint & telemetry (EDR)](catalogo/en/endpoint-e-telemetria.md) · 10 — Visibility and detection on servers, workstations and containers.
- [Threat intelligence](catalogo/en/inteligencia-de-ameacas.md) · 10 — Share and enrich indicators and understand who attacks and how.
- [Deception & decoys (honeypots)](catalogo/en/enganacao-e-iscas.md) · 9 — Traps only an intruder would touch — alarms with almost no false positives.

### RS · Respond (34)

_Contain, investigate and understand what happened._

- [Incident response & SOAR](catalogo/en/resposta-a-incidentes.md) · 11 — Cases, playbooks, automation and remote collection during an incident.
- [Digital forensics](catalogo/en/forense-digital.md) · 11 — Memory, disk and timeline to reconstruct what happened.
- [Malware analysis (defensive)](catalogo/en/analise-de-malware.md) · 12 — Understand a suspicious file to detect and remove it — reversing and triage.

### RC · Recover (12)

_Get back to operation with intact data._

- [Backup & recovery](catalogo/en/backup-e-recuperacao.md) · 12 — Encrypted, verifiable, restorable copies — the last line against ransomware.

### AP · Learn (99)

_Legal labs, courses, certifications, guides and communities._

- [Labs & CTF (legal practice)](catalogo/en/laboratorios-e-ctf.md) · 27 — Environments built for training without touching anyone's systems.
- [Free courses](catalogo/en/cursos-gratuitos.md) · 12 — Open courses from recognized universities and organizations.
- [Certifications](catalogo/en/certificacoes.md) · 16 — Recognized certifications by level and focus; penetration-testing ones are listed as training (no prices — they change).
- [Guides & references](catalogo/en/guias-e-referencias.md) · 18 — Cheat sheets, testing guides, standards and open books.
- [Sister lists](catalogo/en/listas-irmas.md) · 15 — Other open, maintained lists that go deep on one topic.
- [Portuguese-speaking community](catalogo/en/comunidade-lusofona.md) · 11 — Events, groups and material in Portuguese.

### PE · People (25)

_Protection for anyone — passwords, 2FA, privacy and communication._

- [Passwords & two-factor authentication](catalogo/en/senhas-e-autenticacao.md) · 11 — Open, auditable password managers and 2FA apps.
- [Privacy & secure communication](catalogo/en/privacidade-pessoal.md) · 14 — Messengers, browser, tracker blocking and everyday guides.
<!-- /atlas:indice -->

## How the Atlas stays alive

1. **Every proposal is validated on the spot.** A bot checks the format, looks for
   duplicates and confirms the repository exists, is not archived and had activity in the last
   24 months.
2. **Every week the bot measures everything again** through the GitHub API: stars, last
   commit date, license and archived flag. Tables, JSON and `llms.txt` are regenerated.
3. **Projects archived or idle for 24+ months leave the tables** for the
   [graveyard](catalogo/cemiterio.md). If activity resumes, the bot brings them back.
4. **Links outside GitHub are tested weekly.** A broken link opens an issue by itself.

## Use the data

Everything here is public domain (CC0). Use it in tools, courses, dashboards, research or
AI agents, no permission needed.

```bash
curl -s https://raw.githubusercontent.com/visionxma/ciberatlas/main/api/catalogo.json \
  | jq '.itens[] | select(.grupo == "DE" and .saude == "ativo") | {nome, link, desc_en}'
```

## Badge for listed projects

```markdown
[![Listed on CiberAtlas](https://img.shields.io/badge/listed%20on-CiberAtlas-0b7285)](https://github.com/visionxma/ciberatlas)
```

## Contribute

No git needed: [suggest an item with the form](https://github.com/visionxma/ciberatlas/issues/new?template=sugerir-item.yml).
Prefer a pull request? Edit a file in `dados/itens/` and the bot does the rest. See
[CONTRIBUTING.en.md](CONTRIBUTING.en.md).

## Ethics and law

Practice only on your own systems or on labs built for it. The Atlas does not list
malware, phishing kits, exploit collections, denial-of-service tools or people tracking.

## License

Data, catalog and guides: [CC0 1.0](LICENSE), public domain. Bot code: [MIT](scripts/LICENSE).
Each listed project keeps its owner's license, shown in the table.

---

<div align="center">

**CiberAtlas** · open, alive and public domain

Maintained by [VisionX](https://visionxma.com)

</div>
