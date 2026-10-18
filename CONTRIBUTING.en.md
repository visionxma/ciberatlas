# Contributing

> **Português:** veja [CONTRIBUTING.md](CONTRIBUTING.md).

Thanks for helping the Atlas grow without rotting. Three ways to help, simplest first.

## 1. Suggest an item (no git)

Open the [suggestion form](https://github.com/visionxma/ciberatlas/issues/new?template=sugerir-item.yml).
Name, link, category and one sentence on what it does. A maintainer turns it into an entry.

## 2. Report a problem

Broken link, abandoned project, wrong description, item that should not be here:
[open a report](https://github.com/visionxma/ciberatlas/issues/new?template=reportar-problema.yml).

## 3. Pull request

1. Pick the right group file in [`dados/itens/`](dados/itens/) (each category's group is
   in [`dados/categorias.yml`](dados/categorias.yml)).
2. Add the entry at the end of its category, following [`dados/LEIA-ME.md`](dados/LEIA-ME.md):

   ```yaml
   - nome: Project Name
     repo: owner/name
     categoria: category-id
     desc: O que faz, em português, até 140 caracteres.
     desc_en: What it does, in English, up to 140 characters.
   ```

   The Portuguese line can be left for a maintainer to write. Say so in the PR.
3. Optional local check: `pip install pyyaml && python scripts/ciberatlas.py validar`.
4. Open the pull request. The bot validates it right away. **Do not edit** the marked blocks
   in `README.md`, nor `catalogo/`, `api/` or `llms.txt`: they are generated after merge.

## What gets in

- GitHub projects that exist, are not archived and had activity in the last 24 months.
- Resources outside GitHub with an official page that is online.
- Defensive focus. Testing tools are listed when the expected use is testing your own
  systems or a training environment.
- Factual descriptions. No "powerful", "amazing" or "best".

## What stays out

Malware, covert remote access, phishing kits, payload and exploit collections, denial of
service, people tracking, credential theft, AI jailbreaks, leaks, and anything whose main
use is attacking others.

## Response time

The automatic validation answers within minutes.

## Conduct

Everyone follows the [Code of Conduct](CODE_OF_CONDUCT.md).
