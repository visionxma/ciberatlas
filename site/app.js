/* ==========================================================================
   CiberAtlas — busca viva do catálogo.
   Sem dependência e sem passo de build. Lê ./api/catalogo.json e ./api/categorias.json.
   Estado na URL (?q=&g=&c=&s=&custo=&nivel=&o=&lang=) para compartilhar uma busca.
   Nada sai do navegador: sem rastreador, sem analytics, sem cookie.
   ========================================================================== */
(function () {
  'use strict';

  var raiz = document.documentElement;
  var $ = function (s) { return document.querySelector(s); };

  /* ---------- Textos da interface ---------- */
  var T = {
    pt: {
      titulo: 'O atlas aberto da cibersegurança defensiva',
      sub: 'Ferramentas e recursos para proteger, detectar, responder e recuperar, em português e inglês.',
      sub2: ' Cada projeto traz a saúde, as estrelas e a última atividade, conferidas por um robô.',
      selo: 'Catálogo aberto · re-medido toda semana',
      pular: 'Pular para os resultados',
      guias: 'Guias', guiasCurto: 'Ler os guias', repo: 'Repositório no GitHub',
      temaAuto: 'Tema: do aparelho (tocar para claro)', temaClaro: 'Tema: claro (tocar para escuro)', temaEscuro: 'Tema: escuro (tocar para o do aparelho)',
      nItens: 'itens', nCategorias: 'categorias', nVerificados: 'verificados', nEstrelas: 'estrelas',
      buscaRotulo: 'Buscar no catálogo', buscaPh: 'Busque: firewall, LGPD, SIEM…', limparBusca: 'Limpar busca',
      medidoEm: 'Métricas de', filtros: 'Filtros',
      fGrupo: 'Função', fCategoria: 'Categoria', fSaude: 'Saúde', fCusto: 'Custo', fNivel: 'Nível', fOrdem: 'Ordenar',
      todos: 'Todos', todas: 'Todas',
      oRelevancia: 'Relevância', oEstrelas: 'Estrelas', oAtividade: 'Atividade', oNome: 'Nome (A–Z)',
      legenda: 'O que é a saúde',
      limparTudo: 'Limpar filtros',
      vazioTitulo: 'Nada encontrado com esses filtros.',
      vazioTexto: 'Tente outra palavra, tire um filtro ou sugira a ferramenta que está faltando.',
      sugerir: 'Sugerir item',
      ctaTitulo: 'Falta uma ferramenta defensiva?',
      ctaTexto: 'O catálogo cresce por sugestão. Um formulário curto no GitHub, e o robô passa a medir o projeto toda semana.',
      rProjeto: 'Projeto', rRepo: 'Repositório', rContribuir: 'Como contribuir',
      rGuias: 'Guias', rTodosGuias: 'Todos os guias', rComece: 'Comece aqui', rBrasil: 'Brasil e LGPD',
      rDados: 'Dados abertos', rPrivacidade: 'Privacidade',
      rPrivTexto: 'Sem rastreador, sem analytics e sem cookie. Idioma e tema ficam só no seu navegador.',
      rLicenca: 'dados em domínio público',
      mais: function (n) { return 'Mostrar mais · faltam ' + n; },
      contagem: function (n, total) {
        var p = n === 1 ? 'item' : 'itens';
        return n === total ? fmtInt(n) + ' ' + p : fmtInt(n) + ' <small>de ' + fmtInt(total) + '</small> ' + p;
      },
      mEstrelas: 'Estrelas no GitHub', mAtividade: 'Última atividade', mLicenca: 'Licença',
      mEmissor: 'Emissor', mCusto: 'Custo', mNivel: 'Nível',
      saude: { ativo: 'Ativo', morno: 'Morno', parado: 'Parado', arquivado: 'Arquivado', site: 'Site', pendente: 'A medir' },
      saudeDesc: {
        ativo: 'atividade nos últimos 6 meses',
        morno: 'última atividade entre 6 e 24 meses',
        parado: 'mais de 24 meses sem atividade',
        arquivado: 'arquivado pelo dono do projeto',
        site: 'recurso fora do GitHub',
        pendente: 'entra na próxima medição do robô'
      },
      custo: { gratis: 'Grátis', pago: 'Pago', freemium: 'Freemium' },
      nivel: { entrada: 'Entrada', iniciante: 'Iniciante', intermediario: 'Intermediário', avancado: 'Avançado' },
      meses: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
      docTitulo: 'CiberAtlas: catálogo aberto de cibersegurança defensiva (PT-BR e EN)',
      docDesc: 'Busque ferramentas e recursos abertos de cibersegurança defensiva, em português e inglês, com saúde, estrelas, licença e última atividade medidas toda semana por um robô. Dados em domínio público (CC0).',
      cc0: 'https://creativecommons.org/publicdomain/zero/1.0/deed.pt-br',
      numerosAria: 'O catálogo em números', abrir: 'abre em nova aba'
    },
    en: {
      titulo: 'The open atlas of defensive cybersecurity',
      sub: 'Tools and resources to protect, detect, respond and recover, in Portuguese and English.',
      sub2: ' Every project shows its health, stars and last activity, checked by a bot.',
      selo: 'Open catalog · re-measured every week',
      pular: 'Skip to results',
      guias: 'Guides', guiasCurto: 'Read the guides', repo: 'Repository on GitHub',
      temaAuto: 'Theme: device (tap for light)', temaClaro: 'Theme: light (tap for dark)', temaEscuro: 'Theme: dark (tap for device)',
      nItens: 'items', nCategorias: 'categories', nVerificados: 'verified', nEstrelas: 'stars',
      buscaRotulo: 'Search the catalog', buscaPh: 'Search: firewall, GDPR, SIEM…', limparBusca: 'Clear search',
      medidoEm: 'Metrics from', filtros: 'Filters',
      fGrupo: 'Function', fCategoria: 'Category', fSaude: 'Health', fCusto: 'Cost', fNivel: 'Level', fOrdem: 'Sort by',
      todos: 'All', todas: 'All',
      oRelevancia: 'Relevance', oEstrelas: 'Stars', oAtividade: 'Activity', oNome: 'Name (A–Z)',
      legenda: 'What health means',
      limparTudo: 'Clear filters',
      vazioTitulo: 'Nothing matches these filters.',
      vazioTexto: 'Try another word, remove a filter or suggest the tool that is missing.',
      sugerir: 'Suggest an item',
      ctaTitulo: 'Missing a defensive tool?',
      ctaTexto: 'The catalog grows by suggestion. One short form on GitHub, and the bot starts measuring the project every week.',
      rProjeto: 'Project', rRepo: 'Repository', rContribuir: 'How to contribute',
      rGuias: 'Guides', rTodosGuias: 'All guides', rComece: 'Start here', rBrasil: 'Brazil and LGPD',
      rDados: 'Open data', rPrivacidade: 'Privacy',
      rPrivTexto: 'No tracker, no analytics and no cookie. Language and theme stay in your browser only.',
      rLicenca: 'public domain data',
      mais: function (n) { return 'Show more · ' + n + ' left'; },
      contagem: function (n, total) {
        var p = n === 1 ? 'item' : 'items';
        return n === total ? fmtInt(n) + ' ' + p : fmtInt(n) + ' <small>of ' + fmtInt(total) + '</small> ' + p;
      },
      mEstrelas: 'GitHub stars', mAtividade: 'Last activity', mLicenca: 'License',
      mEmissor: 'Issuer', mCusto: 'Cost', mNivel: 'Level',
      saude: { ativo: 'Active', morno: 'Lukewarm', parado: 'Stale', arquivado: 'Archived', site: 'Website', pendente: 'Pending' },
      saudeDesc: {
        ativo: 'activity in the last 6 months',
        morno: 'last activity 6 to 24 months ago',
        parado: 'over 24 months without activity',
        arquivado: 'archived by the project owner',
        site: 'resource outside GitHub',
        pendente: 'joins the next bot measurement'
      },
      custo: { gratis: 'Free', pago: 'Paid', freemium: 'Freemium' },
      nivel: { entrada: 'Entry', iniciante: 'Beginner', intermediario: 'Intermediate', avancado: 'Advanced' },
      meses: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      docTitulo: 'CiberAtlas: open catalog of defensive cybersecurity (PT-BR and EN)',
      docDesc: 'Search open defensive cybersecurity tools and resources, in Portuguese and English, with health, stars, license and last activity measured every week by a bot. Public domain data (CC0).',
      cc0: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
      numerosAria: 'The catalog in numbers', abrir: 'opens in a new tab'
    }
  };
  var ORDEM_SAUDE = ['ativo', 'morno', 'parado', 'arquivado', 'site', 'pendente'];
  var ORDEM_NIVEL = ['entrada', 'iniciante', 'intermediario', 'avancado'];

  /* ---------- Estado ---------- */
  var params = new URLSearchParams(location.search);
  var guardado = null;
  try { guardado = localStorage.getItem('ciberatlas-idioma'); } catch (e) {}
  var est = {
    lang: (params.get('lang') === 'en' || params.get('lang') === 'pt') ? params.get('lang')
      : (guardado || ((navigator.language || 'pt').toLowerCase().indexOf('pt') === 0 ? 'pt' : 'en')),
    q: params.get('q') || '',
    g: params.get('g') || '',
    c: params.get('c') || '',
    s: params.get('s') || '',
    custo: params.get('custo') || '',
    nivel: params.get('nivel') || '',
    o: params.get('o') || '',
    mostrar: 0
  };
  var dados = { itens: [], grupos: [], categorias: [], catPorId: {}, grupoPorId: {}, meta: {} };
  var t = function () { return T[est.lang]; };

  /* ---------- Formatação ---------- */
  function fmtInt(n) { return n.toLocaleString(est.lang === 'pt' ? 'pt-BR' : 'en-US'); }
  function fmtEstrelas(n) {
    if (n == null) return null;
    var pt = est.lang === 'pt';
    if (n < 1000) return String(n);
    var v, suf;
    if (n < 1e6) { v = n / 1000; suf = pt ? ' mil' : 'k'; } else { v = n / 1e6; suf = pt ? ' mi' : 'M'; }
    var casas = v >= 100 ? 0 : (n >= 1e6 && v < 10 ? 2 : 1);
    var txt = v.toLocaleString(pt ? 'pt-BR' : 'en-US', { maximumFractionDigits: casas, minimumFractionDigits: 0 });
    return txt + suf;
  }
  function fmtMes(iso) {
    if (!iso) return null;
    var a = iso.slice(0, 4), m = parseInt(iso.slice(5, 7), 10);
    if (!a || !m) return null;
    return t().meses[m - 1] + ' ' + a;
  }
  function fmtData(iso) {
    if (!iso) return '';
    var a = iso.slice(0, 4), m = parseInt(iso.slice(5, 7), 10), d = parseInt(iso.slice(8, 10), 10);
    return est.lang === 'pt'
      ? String(d).padStart(2, '0') + '/' + String(m).padStart(2, '0') + '/' + a
      : t().meses[m - 1] + ' ' + d + ', ' + a;
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function rotulo(mapa, v) { return (mapa && mapa[v]) || (v ? v.charAt(0).toUpperCase() + v.slice(1) : ''); }

  /* ---------- Busca que ignora acento e maiúscula ---------- */
  var reAcento = /[̀-ͯ]/g;
  function norm(s) { return String(s || '').normalize('NFD').replace(reAcento, '').toLowerCase(); }
  function termos(q) { return norm(q).split(/\s+/).filter(Boolean); }

  function prepara(item) {
    var cat = dados.catPorId[item.categoria] || {};
    var gr = dados.grupoPorId[item.grupo] || {};
    item._nome = norm(item.nome);
    item._tags = norm((item.tags || []).join(' '));
    item._desc = norm((item.desc || '') + ' ' + (item.desc_en || ''));
    item._cat = norm([cat.nome, cat.name, gr.nome, gr.name, item.emissor, item.repo].join(' '));
    item._ts = item.ultima_atividade ? Date.parse(item.ultima_atividade) || 0 : 0;
  }
  /* Pontua: nome pesa mais que tag, que pesa mais que descrição e categoria. 0 = não casa. */
  function pontua(item, ts) {
    var total = 0;
    for (var i = 0; i < ts.length; i++) {
      var k = ts[i], p = 0;
      if (item._nome.indexOf(k) === 0) p = 8;
      else if (item._nome.indexOf(k) > -1) p = 6;
      else if (item._tags.indexOf(k) > -1) p = 4;
      else if (item._cat.indexOf(k) > -1) p = 3;
      else if (item._desc.indexOf(k) > -1) p = 2;
      if (!p) return 0;
      total += p;
    }
    return total;
  }
  /* Destaca os termos no texto ORIGINAL, mapeando posições da forma sem acento. */
  function destaca(texto, ts) {
    texto = String(texto || '');
    if (!ts.length) return esc(texto);
    var n = '', mapa = [];
    for (var i = 0; i < texto.length; i++) {
      var f = norm(texto[i]);
      for (var j = 0; j < f.length; j++) { n += f[j]; mapa.push(i); }
    }
    var marca = new Array(texto.length).fill(false);
    ts.forEach(function (k) {
      var de = 0, pos;
      while (k && (pos = n.indexOf(k, de)) > -1) {
        for (var x = pos; x < pos + k.length; x++) marca[mapa[x]] = true;
        de = pos + k.length;
      }
    });
    var out = '', aberto = false;
    for (var y = 0; y < texto.length; y++) {
      if (marca[y] && !aberto) { out += '<mark>'; aberto = true; }
      if (!marca[y] && aberto) { out += '</mark>'; aberto = false; }
      out += esc(texto[y]);
    }
    return out + (aberto ? '</mark>' : '');
  }

  /* ---------- Filtro ---------- */
  function passa(item, ignorar) {
    if (est.g && ignorar !== 'g' && item.grupo !== est.g) return false;
    if (est.c && ignorar !== 'c' && ignorar !== 'g' && item.categoria !== est.c) return false;
    if (est.s && ignorar !== 's' && item.saude !== est.s) return false;
    if (est.custo && ignorar !== 'custo' && item.custo !== est.custo) return false;
    if (est.nivel && ignorar !== 'nivel' && item.nivel !== est.nivel) return false;
    return true;
  }
  function ordemPadrao() { return est.q.trim() ? 'relevancia' : 'estrelas'; }
  function ordemAtual() {
    var o = est.o || ordemPadrao();
    if (o === 'relevancia' && !est.q.trim()) o = 'estrelas';
    return o;
  }
  function compara(o) {
    var porNome = function (a, b) { return a.nome.localeCompare(b.nome, est.lang === 'pt' ? 'pt-BR' : 'en', { sensitivity: 'base' }); };
    var porEstrelas = function (a, b) { return (b.estrelas == null ? -1 : b.estrelas) - (a.estrelas == null ? -1 : a.estrelas); };
    if (o === 'nome') return porNome;
    if (o === 'atividade') return function (a, b) { return (b._ts - a._ts) || porEstrelas(a, b) || porNome(a, b); };
    if (o === 'relevancia') return function (a, b) { return (b._p - a._p) || porEstrelas(a, b) || porNome(a, b); };
    return function (a, b) { return porEstrelas(a, b) || (b._ts - a._ts) || porNome(a, b); };
  }

  /* ---------- Desenho ---------- */
  var el = {
    q: $('#q'), form: $('#form-busca'), limparQ: $('#limpar-q'),
    grupos: $('#grupos'), cat: $('#f-categoria'), saude: $('#f-saude'), custo: $('#f-custo'), nivel: $('#f-nivel'), ordem: $('#f-ordem'),
    campoCusto: $('#campo-custo'), campoNivel: $('#campo-nivel'),
    lista: $('#lista'), contagem: $('#contagem'), vazio: $('#vazio'), maisBox: $('#mais-box'), mais: $('#mais'),
    limparTudo: $('#limpar-tudo'), vazioLimpar: $('#vazio-limpar'), legenda: $('#legenda'), tema: $('#tema')
  };
  var ICONE = {
    estrela: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3.2 2.7 5.5 6 .9-4.35 4.25 1 6L12 17l-5.35 2.85 1-6L3.3 9.6l6-.9z"/></svg>',
    relogio: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
    balanca: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16M7 20h10M5 7h14M5 7l-2.5 6a2.8 2.8 0 0 0 5 0zM19 7l-2.5 6a2.8 2.8 0 0 0 5 0z"/></svg>',
    selo: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="9" r="5.5"/><path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7"/></svg>',
    moeda: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M14.8 9.2c-.5-.9-1.6-1.4-2.8-1.4-1.6 0-2.8.8-2.8 2.1 0 2.9 5.8 1.4 5.8 4.3 0 1.3-1.3 2.1-3 2.1-1.3 0-2.5-.6-3-1.5M12 6v1.8M12 16.3V18"/></svg>',
    degrau: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19h4v-5h4V9h4V5h4"/></svg>',
    seta: '<svg class="cartao__seta" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>'
  };

  function cartao(item, ts, i) {
    var L = t();
    var cat = dados.catPorId[item.categoria] || {};
    var nomeCat = est.lang === 'pt' ? cat.nome : (cat.name || cat.nome);
    var desc = est.lang === 'pt' ? (item.desc || item.desc_en) : (item.desc_en || item.desc);
    var href = item.link || item.site || (item.repo ? 'https://github.com/' + item.repo : '#');
    var saude = item.saude || 'pendente';

    var meta = [];
    var est_ = fmtEstrelas(item.estrelas);
    if (est_) meta.push([ICONE.estrela, L.mEstrelas, est_]);
    var mes = fmtMes(item.ultima_atividade);
    if (mes) meta.push([ICONE.relogio, L.mAtividade, mes]);
    if (item.licenca && item.licenca !== 'NOASSERTION') meta.push([ICONE.balanca, L.mLicenca, item.licenca]);
    else if (item.licenca === 'NOASSERTION') meta.push([ICONE.balanca, L.mLicenca, est.lang === 'pt' ? 'outra' : 'other']);
    if (item.emissor) meta.push([ICONE.selo, L.mEmissor, item.emissor]);
    if (item.custo) meta.push([ICONE.moeda, L.mCusto, rotulo(L.custo, item.custo)]);
    if (item.nivel) meta.push([ICONE.degrau, L.mNivel, rotulo(L.nivel, item.nivel)]);
    meta = meta.slice(0, 3);
    var metaHtml = meta.length ? '<dl class="meta">' + meta.map(function (m) {
      return '<div title="' + esc(m[1]) + '"><dt>' + m[0] + '<span class="sr">' + esc(m[1]) + '</span></dt><dd>' + esc(m[2]) + '</dd></div>';
    }).join('') + '</dl>' : '';

    return '<li class="item entra" style="--i:' + Math.min(i, 12) + '"><article class="cartao">' +
      '<div class="cartao__topo"><span class="saude saude--' + esc(saude) + '" title="' + esc(L.saudeDesc[saude] || '') + '">' + esc(rotulo(L.saude, saude)) + '</span>' +
      '<span class="cartao__cat" title="' + esc(nomeCat || '') + '"><abbr title="' + esc(grupoNome(item.grupo)) + '">' + esc(item.grupo) + '</abbr>' + esc(nomeCat || '') + '</span></div>' +
      '<h3 class="cartao__nome"><a href="' + esc(href) + '" target="_blank" rel="noopener" title="' + esc(L.abrir) + '">' + destaca(item.nome, ts) + ICONE.seta + '</a></h3>' +
      '<p class="cartao__desc">' + destaca(desc, ts) + '</p>' +
      metaHtml +
      '</article></li>';
  }
  function grupoNome(id) {
    var g = dados.grupoPorId[id];
    return g ? (est.lang === 'pt' ? g.nome : (g.name || g.nome)) : id;
  }
  /* Lote = 6 fileiras da grade (6 no celular, 12 com 2 colunas, 18 com 3): cada lote cabe em ~2 telas. */
  function colunasLista() { return getComputedStyle(el.lista).gridTemplateColumns.split(' ').filter(Boolean).length || 1; }
  function tamanhoPagina() { return colunasLista() * 6; }

  function opcoes(sel, lista, valor, rotuloTodos) {
    var html = '<option value="">' + esc(rotuloTodos) + '</option>';
    lista.forEach(function (o) {
      if (o.grupo) { html += o.abre ? '<optgroup label="' + esc(o.grupo) + '">' : '</optgroup>'; return; }
      html += '<option value="' + esc(o.v) + '"' + (o.v === valor ? ' selected' : '') + (o.n === 0 && o.v !== valor ? ' disabled' : '') + '>' + esc(o.r) + (o.n != null ? ' (' + o.n + ')' : '') + '</option>';
    });
    sel.innerHTML = html;
    sel.value = valor;
    sel.classList.toggle('ativo', !!valor);
  }

  function desenhaFiltros(ts) {
    var L = t();
    var base = dados.itens.filter(function (it) { return !ts.length || it._p > 0; });

    /* Grupos com contagem viva (respeita busca e os outros filtros). */
    var nG = {}, totalG = 0;
    base.forEach(function (it) { if (passa(it, 'g')) { nG[it.grupo] = (nG[it.grupo] || 0) + 1; totalG++; } });
    var html = '<button type="button" class="grupo" data-g="" aria-pressed="' + (!est.g) + '"><span class="grupo__nome">' + esc(L.todos) + '</span><span class="grupo__n">' + totalG + '</span></button>';
    dados.grupos.forEach(function (g) {
      var n = nG[g.id] || 0;
      html += '<button type="button" class="grupo' + (n ? '' : ' vazio-grupo') + '" data-g="' + esc(g.id) + '" aria-pressed="' + (est.g === g.id) + '" title="' + esc(est.lang === 'pt' ? g.descricao : g.description) + '">' +
        '<span class="grupo__nome">' + esc(est.lang === 'pt' ? g.nome : g.name) + '</span><span class="grupo__n">' + n + '</span></button>';
    });
    el.grupos.innerHTML = html;

    /* Categoria depende do grupo. Sem grupo: todas, agrupadas por função. */
    var nC = {};
    base.forEach(function (it) { if (passa(it, 'c')) nC[it.categoria] = (nC[it.categoria] || 0) + 1; });
    var listaC = [];
    dados.grupos.forEach(function (g) {
      if (est.g && est.g !== g.id) return;
      var cs = dados.categorias.filter(function (c) { return c.grupo === g.id; });
      if (!cs.length) return;
      if (!est.g) listaC.push({ grupo: est.lang === 'pt' ? g.nome : g.name, abre: true });
      cs.forEach(function (c) { listaC.push({ v: c.id, r: est.lang === 'pt' ? c.nome : (c.name || c.nome), n: nC[c.id] || 0 }); });
      if (!est.g) listaC.push({ grupo: true, abre: false });
    });
    opcoes(el.cat, listaC, est.c, L.todas);

    /* Saúde: só os valores que existem no catálogo. */
    var nS = {}, existe = {};
    dados.itens.forEach(function (it) { existe[it.saude] = 1; });
    base.forEach(function (it) { if (passa(it, 's')) nS[it.saude] = (nS[it.saude] || 0) + 1; });
    opcoes(el.saude, ORDEM_SAUDE.filter(function (s) { return existe[s] || s === est.s; })
      .map(function (s) { return { v: s, r: L.saude[s], n: nS[s] || 0 }; }), est.s, L.todas);

    /* Custo e nível só aparecem quando o catálogo traz pelo menos dois valores. */
    [['custo', el.custo, el.campoCusto, L.custo, null], ['nivel', el.nivel, el.campoNivel, L.nivel, ORDEM_NIVEL]].forEach(function (f) {
      var chave = f[0], vals = {}, cont = {};
      dados.itens.forEach(function (it) { if (it[chave]) vals[it[chave]] = 1; });
      base.forEach(function (it) { if (it[chave] && passa(it, chave)) cont[it[chave]] = (cont[it[chave]] || 0) + 1; });
      var lista = Object.keys(vals);
      if (f[4]) lista.sort(function (a, b) { return (f[4].indexOf(a) + 1 || 99) - (f[4].indexOf(b) + 1 || 99); });
      f[2].hidden = lista.length < 2 && !est[chave];
      opcoes(f[1], lista.map(function (v) { return { v: v, r: rotulo(f[3], v), n: cont[v] || 0 }; }), est[chave], L.todos);
    });

    /* Ordenar */
    var o = ordemAtual();
    var ords = (est.q.trim() ? ['relevancia'] : []).concat(['estrelas', 'atividade', 'nome']);
    el.ordem.innerHTML = ords.map(function (k) {
      var r = { relevancia: L.oRelevancia, estrelas: L.oEstrelas, atividade: L.oAtividade, nome: L.oNome }[k];
      return '<option value="' + k + '"' + (k === o ? ' selected' : '') + '>' + esc(r) + '</option>';
    }).join('');

    /* Campo que sobra sozinho numa linha de 2 ocupa a linha toda. */
    var campos = Array.prototype.filter.call(document.querySelectorAll('.filtro--selects .campo:not(.campo--largo)'), function (c) { return !c.hidden; });
    campos.forEach(function (c, i) { c.classList.toggle('impar', campos.length % 2 === 1 && i === campos.length - 1); });
  }

  function filtrosAtivos() { return !!(est.q.trim() || est.g || est.c || est.s || est.custo || est.nivel); }

  function desenha(manterQuantidade, refazer) {
    var L = t();
    var ts = termos(est.q);
    dados.itens.forEach(function (it) { it._p = ts.length ? pontua(it, ts) : 1; });
    desenhaFiltros(ts);

    var res = dados.itens.filter(function (it) { return it._p > 0 && passa(it); });
    res.sort(compara(ordemAtual()));

    var pagina = tamanhoPagina();
    if (!manterQuantidade && !refazer) est.mostrar = pagina;
    var vis = res.slice(0, est.mostrar);
    if (refazer) { el.lista.innerHTML = ''; manterQuantidade = true; }
    var antes = manterQuantidade ? el.lista.children.length : 0;
    var novos = vis.slice(antes).map(function (it, i) { return cartao(it, ts, i); }).join('');
    if (manterQuantidade) el.lista.insertAdjacentHTML('beforeend', novos);
    else el.lista.innerHTML = novos;

    el.contagem.innerHTML = L.contagem(res.length, dados.itens.length);
    el.vazio.hidden = res.length > 0;
    var falta = res.length - vis.length;
    el.maisBox.hidden = falta <= 0;
    el.mais.textContent = L.mais(fmtInt(falta));
    el.limparTudo.hidden = !filtrosAtivos();
    el.limparQ.hidden = !est.q;
    el.form.classList.toggle('tem-texto', !!est.q);
  }

  /* ---------- URL ---------- */
  var tURL = 0, mexeu = params.toString() !== '';
  function gravaURL() {
    clearTimeout(tURL);
    tURL = setTimeout(function () {
      var p = new URLSearchParams();
      if (est.q.trim()) p.set('q', est.q.trim());
      if (est.g) p.set('g', est.g);
      if (est.c) p.set('c', est.c);
      if (est.s) p.set('s', est.s);
      if (est.custo) p.set('custo', est.custo);
      if (est.nivel) p.set('nivel', est.nivel);
      if (est.o && est.o !== ordemPadrao()) p.set('o', est.o);
      if (mexeu) p.set('lang', est.lang);
      var qs = p.toString();
      history.replaceState(null, '', location.pathname + (qs ? '?' + qs : '') + location.hash);
    }, 220);
  }

  /* ---------- Idioma ---------- */
  function aplicaIdioma() {
    var L = t();
    raiz.lang = est.lang === 'pt' ? 'pt-BR' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(function (n) { var v = L[n.dataset.i18n]; if (typeof v === 'string') n.textContent = v; });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (n) { n.placeholder = L[n.dataset.i18nPh]; });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (n) { var v = L[n.dataset.i18nAria]; if (v) n.setAttribute('aria-label', v); });
    document.querySelectorAll('.idioma__op').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === est.lang)); });
    document.title = L.docTitulo;
    var md = document.querySelector('meta[name="description"]'); if (md) md.content = L.docDesc;
    $('#link-cc0').href = L.cc0;
    document.querySelector('.numeros').setAttribute('aria-label', L.numerosAria);
    $('#medido-data').textContent = fmtData(dados.meta.metricas_de || $('#medido-data').getAttribute('datetime'));
    el.legenda.innerHTML = ORDEM_SAUDE.map(function (s) {
      return '<li><span class="saude saude--' + s + '"></span><span><b>' + esc(L.saude[s]) + '</b>: ' + esc(L.saudeDesc[s]) + '</span></li>';
    }).join('');
    aplicaTemaRotulo();
    if (dados.itens.length) { escreveNumeros(false); desenha(); }
  }

  /* ---------- Tema: aparelho → claro → escuro ---------- */
  function aplicaTemaRotulo() {
    var tm = raiz.dataset.tema || 'auto';
    el.tema.setAttribute('aria-label', t()[{ auto: 'temaAuto', claro: 'temaClaro', escuro: 'temaEscuro' }[tm]]);
  }
  el.tema.addEventListener('click', function () {
    var prox = { auto: 'claro', claro: 'escuro', escuro: 'auto' }[raiz.dataset.tema || 'auto'];
    raiz.dataset.tema = prox;
    try { if (prox === 'auto') localStorage.removeItem('ciberatlas-tema'); else localStorage.setItem('ciberatlas-tema', prox); } catch (e) {}
    aplicaTemaRotulo();
  });

  /* ---------- Números da abertura (contador animado) ---------- */
  var numeros = {};
  function escreveNumeros(animar) {
    var alvo = {
      itens: function (v) { return fmtInt(Math.round(v)); },
      categorias: function (v) { return fmtInt(Math.round(v)); },
      verificados: function (v) { return fmtInt(Math.round(v)); },
      estrelas: function (v) { return fmtEstrelas(Math.round(v)) || '0'; }
    };
    var reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    Object.keys(alvo).forEach(function (k) {
      var nodo = document.querySelector('[data-n="' + k + '"]');
      if (!nodo) return;
      var fim = numeros[k] || 0;
      if (!animar || reduz) { nodo.textContent = alvo[k](fim); return; }
      var t0 = performance.now(), dur = 1100;
      (function passo(agora) {
        var p = Math.min(1, (agora - t0) / dur), e = 1 - Math.pow(1 - p, 3);
        nodo.textContent = alvo[k](fim * e);
        if (p < 1) requestAnimationFrame(passo);
      })(t0);
    });
  }

  /* ---------- Eventos ---------- */
  var rafBusca = 0;
  el.q.addEventListener('input', function () {
    est.q = el.q.value; est.o = ''; mexeu = true;
    cancelAnimationFrame(rafBusca);
    rafBusca = requestAnimationFrame(function () { desenha(); gravaURL(); });
  });
  el.form.addEventListener('submit', function (e) {
    e.preventDefault(); el.q.blur();
    $('#resultados').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  });
  el.q.addEventListener('keydown', function (e) { if (e.key === 'Escape' && el.q.value) { e.preventDefault(); limparBusca(); } });
  function limparBusca() { el.q.value = ''; est.q = ''; est.o = ''; mexeu = true; desenha(); gravaURL(); el.q.focus(); }
  el.limparQ.addEventListener('click', limparBusca);

  document.addEventListener('keydown', function (e) {
    if (e.key !== '/' || e.metaKey || e.ctrlKey || e.altKey) return;
    var a = document.activeElement;
    if (a && (a.tagName === 'INPUT' || a.tagName === 'SELECT' || a.tagName === 'TEXTAREA' || a.isContentEditable)) return;
    e.preventDefault(); el.q.focus(); el.q.select();
  });

  el.grupos.addEventListener('click', function (e) {
    var b = e.target.closest('.grupo');
    if (!b) return;
    var g = b.dataset.g;
    est.g = (g && est.g === g) ? '' : g;
    if (est.c && (dados.catPorId[est.c] || {}).grupo !== est.g) est.c = '';
    mexeu = true; desenha(); gravaURL();
  });
  el.cat.addEventListener('change', function () {
    est.c = el.cat.value;
    if (est.c) est.g = (dados.catPorId[est.c] || {}).grupo || est.g;
    mexeu = true; desenha(); gravaURL();
  });
  [['s', el.saude], ['custo', el.custo], ['nivel', el.nivel]].forEach(function (f) {
    f[1].addEventListener('change', function () { est[f[0]] = f[1].value; mexeu = true; desenha(); gravaURL(); });
  });
  el.ordem.addEventListener('change', function () { est.o = el.ordem.value; mexeu = true; desenha(); gravaURL(); });
  function limparTudo() {
    est.q = ''; el.q.value = ''; est.g = est.c = est.s = est.custo = est.nivel = est.o = '';
    mexeu = true; desenha(); gravaURL();
  }
  el.limparTudo.addEventListener('click', limparTudo);
  el.vazioLimpar.addEventListener('click', limparTudo);
  el.mais.addEventListener('click', function () { est.mostrar += tamanhoPagina(); desenha(true); });

  document.querySelectorAll('.idioma__op').forEach(function (b) {
    b.addEventListener('click', function () {
      if (est.lang === b.dataset.lang) return;
      est.lang = b.dataset.lang; mexeu = true;
      try { localStorage.setItem('ciberatlas-idioma', est.lang); } catch (e) {}
      aplicaIdioma(); gravaURL();
    });
  });
  window.addEventListener('pageshow', function () { $('#ano').textContent = new Date().getFullYear(); });

  /* ---------- Carga ---------- */
  $('#ano').textContent = new Date().getFullYear();
  el.q.value = est.q;
  aplicaIdioma();

  Promise.all([
    fetch('./api/catalogo.json').then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }),
    fetch('./api/categorias.json').then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
  ]).then(function (res) {
    var cat = res[0], cats = res[1];
    dados.meta = cat.meta || {};
    dados.grupos = cats.grupos || [];
    dados.categorias = cats.categorias || [];
    dados.grupos.forEach(function (g) { dados.grupoPorId[g.id] = g; });
    dados.categorias.forEach(function (c) { dados.catPorId[c.id] = c; });
    dados.itens = (cat.itens || []).filter(function (it) { return it && it.nome; });
    dados.itens.forEach(prepara);

    /* Valor de URL que não existe no catálogo é descartado em silêncio. */
    if (est.g && !dados.grupoPorId[est.g]) est.g = '';
    if (est.c && !dados.catPorId[est.c]) est.c = '';
    if (est.c && !est.g) est.g = dados.catPorId[est.c].grupo;
    if (est.s && ORDEM_SAUDE.indexOf(est.s) < 0) est.s = '';
    if (['relevancia', 'estrelas', 'atividade', 'nome'].indexOf(est.o) < 0) est.o = '';

    numeros.itens = dados.itens.length;
    numeros.categorias = dados.categorias.length;
    numeros.verificados = dados.itens.filter(function (it) { return ['ativo', 'morno', 'parado', 'arquivado'].indexOf(it.saude) > -1; }).length;
    numeros.estrelas = dados.itens.reduce(function (s, it) { return s + (it.estrelas || 0); }, 0);
    var md = $('#medido-data');
    if (dados.meta.metricas_de) { md.setAttribute('datetime', dados.meta.metricas_de); md.textContent = fmtData(dados.meta.metricas_de); }
    escreveNumeros(true);
    desenha();
    colsAntes = colunasLista();
  }).catch(function () {
    el.contagem.textContent = '';
    el.vazio.hidden = false;
    el.vazio.querySelector('.vazio__titulo').textContent = est.lang === 'pt'
      ? 'Não deu para carregar o catálogo agora.' : 'The catalog could not be loaded right now.';
  });

  /* Mudou o número de colunas (girar o aparelho, redimensionar): o lote acompanha. */
  var colsAntes = 0, tCols = 0;
  window.addEventListener('resize', function () {
    clearTimeout(tCols);
    tCols = setTimeout(function () {
      var c = colunasLista();
      if (colsAntes && c !== colsAntes && dados.itens.length) {
        est.mostrar = Math.max(c * 6, Math.ceil(el.lista.children.length / c) * c);
        desenha(true, true);
      }
      colsAntes = c;
    }, 150);
  });
})();
