// Portada: presentación, catálogo con
// buscador y filtros (tipo, tema y curso) y «Pensado para el aula».
import { simulationsIn, simKind, COURSES, TOPICS, KINDS } from '../data/simulations.js';
import { cardMarkup } from '../components/card.js';
import { footerMarkup } from '../components/footer.js';
import { siteHeaderMarkup } from '../components/site-header.js';
import { saveCatalogPlace, takeCatalogPlace } from '../catalog-place.js';
import { getLang, L } from '../i18n.js';

const FILTER_BASE =
  'filter-btn inline-flex min-h-9 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-bold transition-colors';
const FILTER_ON = 'border-[#0369a1] bg-[#0369a1] text-white';
const FILTER_OFF = 'border-[#cbd5e1] bg-white text-[#334155] hover:border-[#0369a1] hover:text-[#0369a1]';


const simsWord = (n) => L(`${n} simulaciones`, `${n} simulations`, `${n} simulacions`, `${n} simulazio`, `${n} simulacións`);

export function renderCatalog(root) {
  const lang = getLang();
  const simulations = simulationsIn(lang);
  const total = simulations.length;
  // Filtro «Tipo» solo si el catálogo de este idioma mezcla simulaciones y prácticas.
  const kinds = KINDS.filter((k) => simulations.some((s) => simKind(s) === k.id));
  const mixed = kinds.length > 1;
  const KIND_ICON = { simulacion: 'monitor-play', practica: 'flask-conical' };
  const LABEL = 'shrink-0 text-xs sm:w-16 sm:pt-2.5 font-bold uppercase tracking-wide text-[#475569]';

  const filterButton = (attr, value, label, on, extra = '') =>
    `<button type="button" ${attr}="${value}"${extra} aria-pressed="${on}" class="${FILTER_BASE} ${on ? FILTER_ON : FILTER_OFF}">${label}</button>`;

  const kindFilters = [
    filterButton('data-kind', 'all', L('Todo', 'All', 'Tot', 'Guztiak', 'Todo'), true),
    ...kinds.map((k) =>
      filterButton(
        'data-kind',
        k.id,
        `<i data-lucide="${KIND_ICON[k.id]}" class="h-4 w-4"></i>${L(k.label)} <span class="font-normal opacity-80">${simulations.filter((s) => simKind(s) === k.id).length}</span>`,
        false,
      ),
    ),
  ].join('');

  const topicFilters = [
    filterButton('data-topic', 'all', L('Todos', 'All', 'Tots', 'Guztiak', 'Todos'), true),
    ...TOPICS.map((t) => filterButton('data-topic', t.id, L(t.label), false)),
  ].join('');

  // Un docente busca por el curso que da: filtro propio, combinable con la materia.
  const courseFilters = [{ id: 'all', label: 'Todos', en: 'All', ca: 'Tots', eu: 'Guztiak', gl: 'Todos' }, ...COURSES]
    .map((c, i) =>
      filterButton('data-course', c.id, lang === 'es' ? c.label : c[lang], i === 0, lang === 'en' && c.enTitle ? ` title="${c.enTitle}"` : ''),
    )
    .join('');

  const features = [
    {
      icon: '<path d="M4 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H4z"/><path d="M13 8a3 3 0 0 1 3-3h4v13h-5a2 2 0 0 0-2 2"/>',
      title: L('Guía docente y ficha de actividades en cada simulación', 'A teacher guide and an activity worksheet for every simulation', 'Guia docent i fitxa d’activitats per a cada simulació', 'Irakaslearen gida eta jarduera-fitxa simulazio bakoitzean', 'Guía docente e ficha de actividades en cada simulación'),
      text: L(
        'Cursos, saberes básicos, una secuencia para la clase y las concepciones alternativas que ayuda a corregir. Y una ficha de actividades para el alumnado, con enlaces que abren la simulación ya preparada.',
        'Year groups, curriculum content, a lesson sequence and the misconceptions it helps to address. And an activity worksheet for students, with links that open the simulation already set up.',
        'Cursos, sabers bàsics, una seqüència per a la classe i les concepcions alternatives que ajuda a corregir (en castellà). I una fitxa d’activitats per a l’alumnat, amb enllaços que obren la simulació ja preparada.',
        'Mailak, oinarrizko jakintzak, eskolarako sekuentzia bat eta zuzentzen laguntzen dituen ideia okerrak (gaztelaniaz). Eta ikasleentzako jarduera-fitxa bat, simulazioa prestatuta irekitzen duten estekekin.',
        'Cursos, saberes básicos, unha secuencia para a clase e as concepcións alternativas que axuda a corrixir (en castelán). E unha ficha de actividades para o alumnado, con ligazóns que abren a simulación xa preparada.',
      ),
    },
    {
      icon: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
      title: L('En el aula o en casa', 'In class or at home', "A l'aula o a casa", 'Ikasgelan edo etxean', 'Na aula ou na casa'),
      text: L(
        'Sin instalar nada: en el ordenador, la pizarra digital o el móvil, con enlace directo para Classroom, Moodle o Teams.',
        'Nothing to install: on a computer, an interactive whiteboard or a phone, with a direct link for Classroom, Moodle or Teams.',
        "Sense instal·lar res: a l'ordinador, la pissarra digital o el mòbil, amb enllaç directe per a Classroom, Moodle o Teams.",
        'Ezer instalatu gabe: ordenagailuan, arbel digitalean edo mugikorrean, Classroom, Moodle edo Teamserako esteka zuzenarekin.',
        'Sen instalar nada: no ordenador, no encerado dixital ou no móbil, con ligazón directa para Classroom, Moodle ou Teams.',
      ),
    },
    {
      icon: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.75-1.4"/>',
      title: L('Libre y abierto', 'Free and open', 'Lliure i obert', 'Librea eta irekia', 'Libre e aberto'),
      text: L(
        'Código con licencia MIT y contenidos CC BY-SA 4.0: úsalas, adáptalas y compártelas.',
        'MIT-licensed code and CC BY-SA 4.0 content: use them, adapt them and share them.',
        'Codi amb llicència MIT i continguts CC BY-SA 4.0: fes-les servir, adapta-les i comparteix-les.',
        'MIT lizentziako kodea eta CC BY-SA 4.0 edukiak: erabili, egokitu eta partekatu.',
        'Código con licenza MIT e contidos CC BY-SA 4.0: úsaas, adáptaas e compárteas.',
      ),
    },
  ]
    .map(
      (f) => `
        <div class="rounded-xl border border-white/10 bg-white/5 p-5">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#7dd3fc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${f.icon}</svg>
          <h3 class="mt-3 text-lg font-bold text-white">${f.title}</h3>
          <p class="mt-1 leading-relaxed text-[#cbd5e1]">${f.text}</p>
        </div>`,
    )
    .join('');

  root.innerHTML = `
  <div class="min-h-screen">
    ${siteHeaderMarkup()}

    <main>
      <section class="paper border-b border-[#e2e8f0]">
        <div class="mx-auto max-w-6xl px-4 py-8 md:py-14">
          <div class="text-center">
            <h1 class="text-4xl font-extrabold leading-[1.05] text-balance text-[#0f172a] sm:text-5xl md:text-6xl xl:whitespace-nowrap">${L(
              'La física y la química, <span class="text-[#0369a1]">para tocarlas.</span>',
              'Physics and chemistry <span class="text-[#0369a1]">you can touch.</span>',
              'La física i la química, <span class="text-[#0369a1]">per tocar-les.</span>',
              'Fisika eta kimika, <span class="text-[#0369a1]">ukitzeko moduan.</span>',
              'A física e a química, <span class="text-[#0369a1]">para tocalas.</span>',
            )}</h1>
          </div>
        </div>
      </section>

      <section id="catalogo" class="mx-auto max-w-6xl px-4 pb-12 pt-8" aria-labelledby="catalogo-titulo">
        <h2 id="catalogo-titulo" tabindex="-1" class="sr-only">${mixed ? 'Simulaciones y prácticas de laboratorio' : L('Todas las simulaciones', 'All simulations', 'Totes les simulacions', 'Simulazio guztiak', 'Todas as simulacións')}</h2>
        <div data-print-hide class="relative">
          <label for="search" class="sr-only">${L('Buscar', 'Search', 'Cerca', 'Bilatu', 'Buscar')}</label>
          <i data-lucide="search" class="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748b]"></i>
          <input
            id="search"
            name="q"
            type="search"
            placeholder="${L('Buscar por nombre, tema o nivel…', 'Search by name, topic or year…', 'Cerca per nom, tema o nivell…', 'Bilatu izenaren, gaiaren edo mailaren arabera…', 'Buscar por nome, tema ou nivel…')}"
            autocomplete="off"
            class="min-h-12 w-full rounded-lg border border-[#cbd5e1] bg-white py-3 pl-11 pr-4 text-[#1e293b] placeholder:text-[#64748b] focus:border-[#0369a1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0369a1]/40"
          />
        </div>

        <button id="filters-toggle" type="button" data-print-hide aria-expanded="false" aria-controls="filters-panel" class="mt-3 inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#cbd5e1] bg-white px-4 text-sm font-bold text-[#1e293b] sm:hidden">
          <i data-lucide="sliders-horizontal" class="h-4 w-4"></i>
          ${L('Filtros', 'Filters', 'Filtres', 'Iragazkiak', 'Filtros')}<span id="filters-n" class="font-normal text-[#475569]"></span>
        </button>
        <div id="filters-panel" data-print-hide class="mt-3 hidden flex-col gap-3 rounded-xl border border-[#e2e8f0] bg-white p-4 sm:mt-4 sm:flex">
          ${mixed ? `<div class="flex flex-col gap-1.5 sm:flex-row sm:gap-2">
            <span class="${LABEL}">${L('Tipo', 'Type', 'Tipus', 'Mota', 'Tipo')}</span>
            <div id="kind-filters" role="group" aria-label="${L('Tipo', 'Type', 'Tipus', 'Mota', 'Tipo')}" class="flex flex-wrap gap-2">${kindFilters}</div>
          </div>` : ''}
          <div class="flex flex-col gap-1.5 sm:flex-row sm:gap-2">
            <span class="${LABEL}">${L('Tema', 'Topic', 'Tema', 'Gaia', 'Tema')}</span>
            <div id="topic-filters" role="group" aria-label="${L('Tema', 'Topic', 'Tema', 'Gaia', 'Tema')}" class="flex flex-wrap gap-2">${topicFilters}</div>
          </div>
          <div class="flex flex-col gap-1.5 sm:flex-row sm:gap-2">
            <span class="${LABEL}">${L('Curso', 'Year', 'Curs', 'Maila', 'Curso')}</span>
            <div id="course-filters" role="group" aria-label="${L('Curso', 'Year', 'Curs', 'Maila', 'Curso')}" class="flex flex-wrap gap-2">${courseFilters}</div>
          </div>
        </div>

        <div id="results" class="mt-4 hidden flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <p id="count" class="font-bold text-[#334155]" aria-live="polite"></p>
          <button id="clear-active" type="button" class="inline-flex min-h-11 items-center gap-1 rounded-md px-1 font-bold text-[#0369a1] underline-offset-4 hover:underline">
            <i data-lucide="x" class="h-4 w-4"></i>${L('Quitar filtros', 'Clear filters', 'Treu els filtres', 'Kendu iragazkiak', 'Quitar filtros')}
          </button>
        </div>

        <div id="grid" class="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          ${simulations.map((sim) => cardMarkup(sim, { showKind: mixed })).join('')}
        </div>

        <div id="empty" class="hidden flex-col items-center gap-3 py-20 text-center text-[#475569]">
          <i data-lucide="search-x" class="h-8 w-8"></i>
          <p>${mixed ? 'No hay simulaciones ni prácticas que coincidan con tu búsqueda.' : L('No hay simulaciones que coincidan con tu búsqueda.', 'No simulations match your search.', 'No hi ha cap simulació que coincideixi amb la cerca.', 'Ez dago bilaketarekin bat datorren simulaziorik.', 'Non hai simulacións que coincidan coa túa busca.')}</p>
          <button id="clear-filters" type="button" class="${FILTER_BASE} ${FILTER_OFF}">${L('Quitar los filtros', 'Clear filters', 'Treu els filtres', 'Kendu iragazkiak', 'Quitar os filtros')}</button>
        </div>
      </section>

      <section data-print-hide class="bg-[#0f172a]" aria-labelledby="aula-titulo">
        <div class="mx-auto max-w-6xl px-4 py-14">
          <h2 id="aula-titulo" class="text-center text-3xl font-bold text-white">${L('Pensado para el aula', 'Made for the classroom', "Pensat per a l'aula", 'Ikasgelarako pentsatua', 'Pensado para a aula')}</h2>
          <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">${features}</div>
        </div>
      </section>
    </main>
    ${footerMarkup()}
  </div>`;

  const grid = root.querySelector('#grid');
  const empty = root.querySelector('#empty');
  const results = root.querySelector('#results');
  const count = root.querySelector('#count');
  const search = root.querySelector('#search');
  const toggle = root.querySelector('#filters-toggle');
  const panel = root.querySelector('#filters-panel');
  const bars = {
    ...(mixed ? { kind: root.querySelector('#kind-filters') } : {}),
    topic: root.querySelector('#topic-filters'),
    course: root.querySelector('#course-filters'),
  };

  let term = '';
  const active = { ...(mixed ? { kind: 'all' } : {}), topic: 'all', course: 'all' };

  function apply() {
    const topic = TOPICS.find((t) => t.id === active.topic);
    let visible = 0;
    simulations.forEach((sim) => {
      const el = grid.querySelector(`[data-sim-id="${sim.id}"]`);
      const show =
        (!term || el.dataset.search.includes(term)) &&
        (!active.kind || active.kind === 'all' || simKind(sim) === active.kind) &&
        (!topic || topic.sims.includes(sim.id)) &&
        (active.course === 'all' || sim.courses.includes(active.course));
      el.classList.toggle('hidden', !show);
      if (show) visible += 1;
    });
    empty.classList.toggle('hidden', visible !== 0);
    empty.classList.toggle('flex', visible === 0);

    // Con algún filtro o búsqueda: «3 de 14 simulaciones · Quitar filtros».
    const filtering = Boolean(term) || Object.values(active).some((v) => v !== 'all');
    results.classList.toggle('hidden', !filtering || visible === 0);
    results.classList.toggle('flex', filtering && visible !== 0);
    count.textContent = filtering ? countText(visible) : '';
    const n = Object.values(active).filter((v) => v !== 'all').length;
    root.querySelector('#filters-n').textContent = n ? ` (${n})` : '';
  }

  // «3 de 14 simulaciones»; con prácticas en el catálogo, cuenta del tipo elegido o
  // «4 de 15 recursos» si no se ha elegido ninguno.
  function countText(visible) {
    if (mixed && active.kind === 'practica') {
      const n = simulations.filter((s) => simKind(s) === 'practica').length;
      return `${visible} de ${n} ${n === 1 ? 'práctica' : 'prácticas'} de laboratorio`;
    }
    if (mixed && active.kind === 'simulacion') {
      const n = simulations.filter((s) => simKind(s) === 'simulacion').length;
      return `${visible} de ${n} simulaciones`;
    }
    if (mixed) return `${visible} de ${total} recursos`;
    return L(`${visible} de ${total} simulaciones`, `${visible} of ${total} simulations`, `${visible} de ${total} simulacions`, `${total} simulaziotatik ${visible}`, `${visible} de ${total} simulacións`);
  }

  // Marca el botón activo de una fila de filtros.
  function select(kind, value) {
    active[kind] = value;
    bars[kind].querySelectorAll('button').forEach((b) => {
      const on = b.getAttribute(`data-${kind}`) === value;
      b.setAttribute('aria-pressed', String(on));
      b.className = `${FILTER_BASE} ${on ? FILTER_ON : FILTER_OFF}`;
    });
  }

  // Los filtros y la búsqueda van en la dirección (?tema=ondas&curso=2eso&q=…),
  // para poder compartir o guardar el catálogo ya filtrado.
  // Tipo: ?tipo=simulaciones o ?tipo=practicas.
  const PARAM = { ...(mixed ? { kind: 'tipo' } : {}), topic: 'tema', course: 'curso' };
  const KIND_SLUG = { simulacion: 'simulaciones', practica: 'practicas' };
  const slug = (v) => v.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  function syncUrl() {
    const url = new URL(location.href);
    for (const [kind, name] of Object.entries(PARAM)) {
      if (active[kind] === 'all') url.searchParams.delete(name);
      else url.searchParams.set(name, kind === 'kind' ? KIND_SLUG[active.kind] : slug(active[kind]));
    }
    if (term) url.searchParams.set('q', search.value.trim());
    else url.searchParams.delete('q');
    history.replaceState(history.state, '', url);
  }

  search.addEventListener('input', (e) => {
    term = e.target.value.trim().toLowerCase();
    syncUrl();
    apply();
  });

  for (const kind of Object.keys(bars)) {
    bars[kind].addEventListener('click', (e) => {
      const btn = e.target.closest(`[data-${kind}]`);
      if (!btn) return;
      select(kind, btn.getAttribute(`data-${kind}`));
      syncUrl();
      apply();
    });
  }

  function clearAll() {
    search.value = '';
    term = '';
    Object.keys(bars).forEach((k) => select(k, 'all'));
    syncUrl();
    apply();
    search.focus();
  }
  root.querySelector('#clear-filters').addEventListener('click', clearAll);
  root.querySelector('#clear-active').addEventListener('click', clearAll);

  // Móvil: los filtros se pliegan tras el botón «Filtros» (en pantallas anchas se ven siempre).
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    panel.classList.toggle('hidden', !open);
    panel.classList.toggle('flex', open);
  });

  // Catálogo ya filtrado desde la dirección y ancla #catalogo.
  const params = new URLSearchParams(location.search);
  for (const [kind, name] of Object.entries(PARAM)) {
    const wanted = params.get(name);
    const value = (b) => b.getAttribute(`data-${kind}`);
    const btn = wanted && [...bars[kind].querySelectorAll('button')].find((b) => (kind === 'kind' ? KIND_SLUG[value(b)] : slug(value(b))) === wanted);
    if (btn) select(kind, btn.getAttribute(`data-${kind}`));
  }
  if (params.get('q')) {
    search.value = params.get('q');
    term = search.value.trim().toLowerCase();
  }
  apply();
  if (location.hash === '#catalogo') {
    requestAnimationFrame(() => root.querySelector('#catalogo').scrollIntoView({ block: 'start' }));
  }

  // Al salir a una simulación o a una guía se guarda dónde estaba el catálogo; al
  // volver (Atrás, «Volver al catálogo» o el logo) se recupera la posición y el foco
  // vuelve al título de esa tarjeta.
  root.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-route]');
    const card = a?.closest('[data-sim-id]');
    if (!card) return;
    saveCatalogPlace({ url: location.pathname + location.search, y: window.scrollY, sim: card.dataset.simId });
  });
  const place = takeCatalogPlace(location.pathname + location.search);
  if (place) {
    requestAnimationFrame(() => {
      window.scrollTo(0, place.y);
      root.querySelector(`[data-sim-id="${place.sim}"] h3 a`)?.focus({ preventScroll: true });
    });
  }

  // El catálogo no instala listeners globales: nada que limpiar.
  return null;
}
