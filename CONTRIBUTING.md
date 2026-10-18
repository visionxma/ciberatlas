# Como contribuir

> **English:** see [CONTRIBUTING.en.md](CONTRIBUTING.en.md).

Obrigado por ajudar o Atlas a crescer sem apodrecer. Há três jeitos de contribuir, do mais
simples ao mais completo.

## 1. Sugerir um item (sem git)

Abra o [formulário de sugestão](https://github.com/visionxma/ciberatlas/issues/new?template=sugerir-item.yml).
Você informa o nome, o link, a categoria e uma frase dizendo o que o projeto faz. Quem
mantém o Atlas transforma em item.

## 2. Avisar de um problema

Link quebrado, projeto abandonado, descrição errada, item que não deveria estar aqui:
[abra um aviso](https://github.com/visionxma/ciberatlas/issues/new?template=reportar-problema.yml).

## 3. Pull request

1. Escolha o arquivo do grupo certo em [`dados/itens/`](dados/itens/) (o grupo de cada
   categoria está em [`dados/categorias.yml`](dados/categorias.yml)).
2. Acrescente o item no fim da categoria, no formato descrito em
   [`dados/LEIA-ME.md`](dados/LEIA-ME.md):

   ```yaml
   - nome: Nome do Projeto
     repo: dono/nome
     categoria: id-da-categoria
     desc: O que faz, em português, até 140 caracteres.
     desc_en: What it does, in English, up to 140 characters.
   ```

3. Se quiser conferir antes de enviar:

   ```bash
   pip install pyyaml
   python scripts/ciberatlas.py validar
   ```

4. Abra o pull request. O robô valida na hora e diz o que falta. **Não edite** `README.md`
   nos blocos marcados, `catalogo/`, `api/` nem `llms.txt`: eles são gerados depois do merge.

## O que entra

- Projeto do GitHub que existe, não está arquivado e teve atividade nos últimos 24 meses.
- Recurso fora do GitHub com página oficial no ar.
- Foco defensivo. Ferramenta de teste entra quando o uso esperado é testar o próprio
  sistema ou um ambiente de treino.
- Descrição factual. Nada de "poderoso", "incrível" ou "o melhor".

## O que não entra

Malware, controle remoto clandestino, kit de phishing, coleção de payloads e exploits,
negação de serviço, rastreamento de pessoas, roubo de credenciais, jailbreak de IA,
vazamentos e qualquer coisa cujo uso principal seja atacar terceiros.

## Guias e traduções

Correções e melhorias nos guias de [`docs/`](docs/) são bem-vindas. Toda afirmação sobre
lei, prazo ou número precisa de link para a fonte oficial.

## Prazo

A validação automática responde em minutos.

## Conduta

Todos seguem o [Código de Conduta](CODE_OF_CONDUCT.md).
