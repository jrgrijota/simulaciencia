// Portada: presentación, bloques temáticos, catálogo con
// buscador y filtros (tema, materia y curso) y «Pensado para el aula».
import { simulations, allTags, COURSES, TOPICS, tagLabel } from '../data/simulations.js';
import { cardMarkup, subjectDot } from '../components/card.js';
import { footerMarkup } from '../components/footer.js';
import { langSwitchMarkup } from '../components/lang-switch.js';
import { pagePath, homePath } from '../paths.js';
import { getLang, L } from '../i18n.js';

const FILTER_BASE =
  'filter-btn inline-flex min-h-9 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-bold transition-colors';
const FILTER_ON = 'border-[#0369a1] bg-[#0369a1] text-white';
const FILTER_OFF = 'border-[#cbd5e1] bg-white text-[#334155] hover:border-[#0369a1] hover:text-[#0369a1]';

const CHECK = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#15803d" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="shrink-0"><path d="M4 12l5 5L20 6"/></svg>`;
const GITHUB_URL = 'https://github.com/jrgrijota/simulaciencia';

// Iconos de los bloques temáticos (trazo de 2 px, 32 × 32).
const TOPIC_ICON = {
  fuerzas: '<path d="M3 27H29V11Z"/><rect x="15" y="12" width="7" height="7" transform="rotate(-31 18.5 15.5)"/>',
  energia: '<path d="M18 3L8 18H16L14 29L24 13H16Z"/>',
  ondas: '<path d="M2 16C5 6 9 6 12 16S19 26 22 16S28 7 30 11" stroke-linecap="round"/>',
  materia: '<path d="M13 19V6A3 3 0 0 1 19 6V19" stroke-linecap="round"/><circle cx="16" cy="24" r="5"/><path d="M16 22V12" stroke-linecap="round"/>',
  atomo: '<circle cx="16" cy="16" r="2.5" fill="currentColor"/><ellipse cx="16" cy="16" rx="13" ry="5.5"/><ellipse cx="16" cy="16" rx="13" ry="5.5" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="13" ry="5.5" transform="rotate(120 16 16)"/>',
  reacciones: '<path d="M12 4H20M14 4V12L6 26Q5 29 8 29H24Q27 29 26 26L18 12V4"/><path d="M9 21H23"/>',
};
const TOPIC_COLOR = { fuerzas: '#0369a1', energia: '#0369a1', ondas: '#0369a1', materia: '#c2410c', atomo: '#6d28d9', reacciones: '#c2410c' };

const simsWord = (n) => L(`${n} simulaciones`, `${n} simulations`, `${n} simulacions`, `${n} simulazio`, `${n} simulacións`);

export function renderCatalog(root) {
  const lang = getLang();
  const total = simulations.length;
  const home = homePath(lang);
  const about = pagePath('about', lang);
  const LABEL = 'shrink-0 text-xs sm:w-16 sm:pt-2.5 font-bold uppercase tracking-wide text-[#475569]';

  const filterButton = (attr, value, label, on, extra = '') =>
    `<button type="button" ${attr}="${value}"${extra} aria-pressed="${on}" class="${FILTER_BASE} ${on ? FILTER_ON : FILTER_OFF}">${label}</button>`;

  const topicFilters = [
    filterButton('data-topic', 'all', L('Todos', 'All', 'Tots', 'Guztiak', 'Todos'), true),
    ...TOPICS.map((t) => filterButton('data-topic', t.id, L(t.label), false)),
  ].join('');

  const filters = ['all', ...allTags]
    .map((value, i) =>
      filterButton('data-tag', value, i === 0 ? L('Todas', 'All', 'Totes', 'Guztiak', 'Todas') : `${subjectDot(value)}${tagLabel(value, lang)}`, i === 0),
    )
    .join('');

  // Un docente busca por el curso que da: filtro propio, combinable con la materia.
  const courseFilters = [{ id: 'all', label: 'Todos', en: 'All', ca: 'Tots', eu: 'Guztiak', gl: 'Todos' }, ...COURSES]
    .map((c, i) =>
      filterButton('data-course', c.id, lang === 'es' ? c.label : c[lang], i === 0, lang === 'en' && c.enTitle ? ` title="${c.enTitle}"` : ''),
    )
    .join('');

  const topicCards = TOPICS.map(
    (t) => `
        <a href="${home}?tema=${t.id}#catalogo" data-topic-link="${t.id}" class="group flex min-h-11 flex-col gap-2 rounded-xl border border-[#e2e8f0] bg-white p-3.5 shadow-sm transition-colors hover:border-[#0369a1] sm:flex-row sm:items-center sm:gap-4 sm:p-4">
          <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true" class="shrink-0" style="color:${TOPIC_COLOR[t.id]}">${TOPIC_ICON[t.id]}</svg>
          <span class="flex flex-col">
            <span class="font-display text-base font-bold leading-tight text-[#0f172a] group-hover:text-[#0369a1] sm:text-lg">${L(t.label)}</span>
            <span class="font-mono text-xs text-[#475569]">${simsWord(t.sims.length)}</span>
          </span>
        </a>`,
  ).join('');

  const features = [
    {
      icon: '<path d="M4 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H4z"/><path d="M13 8a3 3 0 0 1 3-3h4v13h-5a2 2 0 0 0-2 2"/>',
      title: L('Guía docente en cada simulación', 'A teacher guide for every simulation', 'Guia docent per a cada simulació', 'Irakaslearen gida simulazio bakoitzean', 'Guía docente en cada simulación'),
      text: L(
        'Cursos, saberes básicos, una secuencia para la clase y las concepciones alternativas que ayuda a corregir.',
        'Year groups, curriculum content, a lesson sequence and the misconceptions it helps to address.',
        'Cursos, sabers bàsics, una seqüència per a la classe i les concepcions alternatives que ajuda a corregir. En castellà.',
        'Mailak, oinarrizko jakintzak, eskolarako sekuentzia bat eta zuzentzen laguntzen dituen ideia okerrak. Gaztelaniaz.',
        'Cursos, saberes básicos, unha secuencia para a clase e as concepcións alternativas que axuda a corrixir. En castelán.',
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
      icon: '<circle cx="12" cy="12" r="9"/><path d="M15 9.5a3.5 3.5 0 1 0 0 5"/>',
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

  const NAV_LINK = 'min-h-11 items-center rounded-md px-3 text-sm font-bold text-[#334155] transition-colors hover:bg-[#f1f5f9] hover:text-[#0369a1]';

  root.innerHTML = `
  <div class="min-h-screen">
    <header data-print-hide class="sticky top-0 z-20 border-b border-[#e2e8f0] bg-white/95 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center gap-2 px-4 py-2">
        <a href="${home}" data-route class="mr-auto flex min-h-11 items-center gap-2 rounded-md text-[#0f172a]">
          <img src="/logo.svg" alt="SimulaCiencia" width="32" height="32" class="h-8 w-8" />
          <span aria-hidden="true" class="font-display text-xl font-bold tracking-tight">Simula<span class="text-[#0369a1]">Ciencia</span></span>
        </a>
        <nav aria-label="${L('Principal', 'Main', 'Principal', 'Nagusia', 'Principal')}" class="flex items-center gap-1">
          <a href="#catalogo" class="${NAV_LINK} hidden md:inline-flex">${L('Simulaciones', 'Simulations', 'Simulacions', 'Simulazioak', 'Simulacións')}</a>
          <a href="${about}" data-route class="${NAV_LINK} inline-flex gap-1.5">
            <i data-lucide="info" class="h-4 w-4 sm:hidden"></i>
            <span class="sr-only sm:not-sr-only">${L('Sobre el proyecto', 'About', 'Sobre el projecte', 'Proiektuari buruz', 'Sobre o proxecto')}</span>
          </a>
          <a href="${GITHUB_URL}" target="_blank" rel="noopener" class="${NAV_LINK} hidden lg:inline-flex">GitHub</a>
        </nav>
        ${langSwitchMarkup({ compact: true })}
      </div>
    </header>

    <main>
      <section class="paper border-b border-[#e2e8f0]">
        <div class="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div class="text-center">
            <p class="font-mono text-sm font-medium text-[#0369a1]">${L(
              'Física y Química · 2.º ESO – 2.º Bachillerato',
              'Physics and Chemistry · ages 13 to 18',
              'Física i Química · 2n ESO – 2n Batxillerat',
              'Fisika eta Kimika · DBH 2. – Batxilergoko 2.',
              'Física e Química · 2.º ESO – 2.º Bacharelato',
            )}</p>
            <h1 class="mt-3 text-4xl font-extrabold leading-[1.05] text-balance text-[#0f172a] sm:text-5xl md:text-6xl xl:whitespace-nowrap">${L(
              'La física y la química, <span class="text-[#0369a1]">para tocarlas.</span>',
              'Physics and chemistry <span class="text-[#0369a1]">you can touch.</span>',
              'La física i la química, <span class="text-[#0369a1]">per tocar-les.</span>',
              'Fisika eta kimika, <span class="text-[#0369a1]">ukitzeko moduan.</span>',
              'A física e a química, <span class="text-[#0369a1]">para tocalas.</span>',
            )}</h1>
            <p class="mx-auto mt-5 max-w-4xl text-balance text-lg leading-relaxed text-[#334155]">${L(
              'Simulaciones interactivas, cada una con su guía docente.',
              'Interactive simulations, each with its own teacher guide.',
              'Simulacions interactives, cadascuna amb la seva guia docent (en castellà).',
              'Simulazio interaktiboak, bakoitza bere irakaslearen gidarekin (gaztelaniaz).',
              'Simulacións interactivas, cada unha coa súa guía docente (en castelán).',
            )}</p>
            <ul class="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-bold text-[#334155]">
              <li class="flex items-center gap-2">${CHECK}${L('Guía docente incluida', 'Teacher guide included', 'Guia docent inclosa', 'Irakaslearen gida barne', 'Guía docente incluída')}</li>
              <li class="flex items-center gap-2">${CHECK}${L('Sin instalación ni cuenta', 'No install, no account', 'Sense instal·lació ni compte', 'Instalaziorik eta konturik gabe', 'Sen instalación nin conta')}</li>
              <li class="flex items-center gap-2">${CHECK}${L('Libre: MIT y CC BY-SA 4.0', 'Open: MIT and CC BY-SA 4.0', 'Lliure: MIT i CC BY-SA 4.0', 'Librea: MIT eta CC BY-SA 4.0', 'Libre: MIT e CC BY-SA 4.0')}</li>
            </ul>
          </div>
        </div>
      </section>

      <section data-print-hide class="border-b border-[#e2e8f0] bg-[#f1f5f9]" aria-labelledby="bloques-titulo">
        <div class="mx-auto max-w-6xl px-4 py-12">
          <h2 id="bloques-titulo" class="text-3xl font-bold text-[#0f172a]">${L('Explora por bloques', 'Browse by topic', 'Explora per blocs', 'Arakatu gaika', 'Explora por bloques')}</h2>
          <p class="mt-1 text-[#475569]">${L(
            'Elige un tema y encuentra todas sus simulaciones.',
            'Pick a topic to see all its simulations.',
            "Tria un tema i troba'n totes les simulacions.",
            'Aukeratu gai bat eta ikusi haren simulazio guztiak.',
            'Escolle un tema e atopa todas as súas simulacións.',
          )}</p>
          <div class="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-3">${topicCards}</div>
        </div>
      </section>

      <section id="catalogo" class="mx-auto max-w-6xl px-4 py-12" aria-labelledby="catalogo-titulo">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="catalogo-titulo" tabindex="-1" class="text-3xl font-bold text-[#0f172a] focus:outline-none">${L('Todas las simulaciones', 'All simulations', 'Totes les simulacions', 'Simulazio guztiak', 'Todas as simulacións')}</h2>
            <p id="count" class="mt-1 font-mono text-sm text-[#475569]" aria-live="polite">${simsWord(total)}</p>
          </div>
          <div data-print-hide class="relative w-full sm:w-80">
            <label for="search" class="sr-only">${L('Buscar', 'Search', 'Cerca', 'Bilatu', 'Buscar')}</label>
            <i data-lucide="search" class="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748b]"></i>
            <input
              id="search"
              type="search"
              placeholder="${L('Buscar por nombre, tema o nivel…', 'Search by name, topic or year…', 'Cerca per nom, tema o nivell…', 'Bilatu izenaren, gaiaren edo mailaren arabera…', 'Buscar por nome, tema ou nivel…')}"
              autocomplete="off"
              class="min-h-11 w-full rounded-lg border border-[#cbd5e1] bg-white py-2.5 pl-11 pr-4 text-[#1e293b] placeholder:text-[#64748b] focus:border-[#0369a1] focus:outline-none"
            />
          </div>
        </div>

        <div data-print-hide class="mt-6 flex flex-col gap-3 rounded-xl border border-[#e2e8f0] bg-white p-4">
          <div class="flex flex-col gap-1.5 sm:flex-row sm:gap-2">
            <span class="${LABEL}">${L('Tema', 'Topic', 'Tema', 'Gaia', 'Tema')}</span>
            <div id="topic-filters" role="group" aria-label="${L('Tema', 'Topic', 'Tema', 'Gaia', 'Tema')}" class="flex flex-wrap gap-2">${topicFilters}</div>
          </div>
          <div class="flex flex-col gap-1.5 sm:flex-row sm:gap-2">
            <span class="${LABEL}">${L('Materia', 'Subject', 'Matèria', 'Ikasgaia', 'Materia')}</span>
            <div id="filters" role="group" aria-label="${L('Materia', 'Subject', 'Matèria', 'Ikasgaia', 'Materia')}" class="flex flex-wrap gap-2">${filters}</div>
          </div>
          <div class="flex flex-col gap-1.5 sm:flex-row sm:gap-2">
            <span class="${LABEL}">${L('Curso', 'Year', 'Curs', 'Maila', 'Curso')}</span>
            <div id="course-filters" role="group" aria-label="${L('Curso', 'Year', 'Curs', 'Maila', 'Curso')}" class="flex flex-wrap gap-2">${courseFilters}</div>
          </div>
        </div>

        <div id="grid" class="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          ${simulations.map(cardMarkup).join('')}
        </div>

        <div id="empty" class="hidden flex-col items-center gap-3 py-20 text-center text-[#475569]">
          <i data-lucide="search-x" class="h-8 w-8"></i>
          <p>${L('No hay simulaciones que coincidan con tu búsqueda.', 'No simulations match your search.', 'No hi ha cap simulació que coincideixi amb la cerca.', 'Ez dago bilaketarekin bat datorren simulaziorik.', 'Non hai simulacións que coincidan coa túa busca.')}</p>
          <button id="clear-filters" type="button" class="${FILTER_BASE} ${FILTER_OFF}">${L('Quitar los filtros', 'Clear filters', 'Treu els filtres', 'Kendu iragazkiak', 'Quitar os filtros')}</button>
        </div>
      </section>

      <section data-print-hide class="bg-[#0f172a]" aria-labelledby="aula-titulo">
        <div class="mx-auto max-w-6xl px-4 py-14">
          <h2 id="aula-titulo" class="text-3xl font-bold text-white">${L('Pensado para el aula', 'Made for the classroom', "Pensat per a l'aula", 'Ikasgelarako pentsatua', 'Pensado para a aula')}</h2>
          <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">${features}</div>
        </div>
      </section>
    </main>
    ${footerMarkup()}
  </div>`;

  const grid = root.querySelector('#grid');
  const empty = root.querySelector('#empty');
  const count = root.querySelector('#count');
  const search = root.querySelector('#search');
  const bars = {
    topic: root.querySelector('#topic-filters'),
    tag: root.querySelector('#filters'),
    course: root.querySelector('#course-filters'),
  };

  let term = '';
  const active = { topic: 'all', tag: 'all', course: 'all' };

  function apply() {
    const topic = TOPICS.find((t) => t.id === active.topic);
    let visible = 0;
    simulations.forEach((sim) => {
      const el = grid.querySelector(`[data-sim-id="${sim.id}"]`);
      const show =
        (!term || el.dataset.search.includes(term)) &&
        (!topic || topic.sims.includes(sim.id)) &&
        (active.tag === 'all' || sim.tags.includes(active.tag)) &&
        (active.course === 'all' || sim.courses.includes(active.course));
      el.classList.toggle('hidden', !show);
      if (show) visible += 1;
    });
    empty.classList.toggle('hidden', visible !== 0);
    empty.classList.toggle('flex', visible === 0);
    count.textContent =
      visible === total
        ? simsWord(total)
        : L(`${visible} de ${total} simulaciones`, `${visible} of ${total} simulations`, `${visible} de ${total} simulacions`, `${total} simulaziotatik ${visible}`, `${visible} de ${total} simulacións`);
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

  // El tema va en la dirección (?tema=ondas) para poder enlazar el catálogo ya filtrado.
  function syncUrl() {
    const url = new URL(location.href);
    if (active.topic === 'all') url.searchParams.delete('tema');
    else url.searchParams.set('tema', active.topic);
    history.replaceState(history.state, '', url);
  }

  search.addEventListener('input', (e) => {
    term = e.target.value.trim().toLowerCase();
    apply();
  });

  for (const kind of Object.keys(bars)) {
    bars[kind].addEventListener('click', (e) => {
      const btn = e.target.closest(`[data-${kind}]`);
      if (!btn) return;
      select(kind, btn.getAttribute(`data-${kind}`));
      if (kind === 'topic') syncUrl();
      apply();
    });
  }

  root.querySelector('#clear-filters').addEventListener('click', () => {
    search.value = '';
    term = '';
    Object.keys(bars).forEach((k) => select(k, 'all'));
    syncUrl();
    apply();
    search.focus();
  });

  // Baja al catálogo y le pasa el foco (para el teclado y el lector de pantalla).
  function goToCatalog() {
    const heading = root.querySelector('#catalogo-titulo');
    root.querySelector('#catalogo').scrollIntoView({ block: 'start' });
    heading.focus({ preventScroll: true });
  }

  // Los enlaces a #catalogo no cambian la dirección: un cambio de ancla dispara
  // popstate y el router volvería a pintar la página.
  root.querySelectorAll('a[href="#catalogo"]').forEach((a) =>
    a.addEventListener('click', (e) => {
      e.preventDefault();
      goToCatalog();
    }),
  );

  // Un bloque temático deja el catálogo filtrado solo por ese tema y baja hasta él.
  root.querySelectorAll('[data-topic-link]').forEach((a) =>
    a.addEventListener('click', (e) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      search.value = '';
      term = '';
      select('tag', 'all');
      select('course', 'all');
      select('topic', a.dataset.topicLink);
      syncUrl();
      apply();
      goToCatalog();
    }),
  );

  // Catálogo ya filtrado desde la dirección (?tema=…) y ancla #catalogo.
  const fromUrl = new URLSearchParams(location.search).get('tema');
  if (TOPICS.some((t) => t.id === fromUrl)) {
    select('topic', fromUrl);
    apply();
  }
  if (location.hash === '#catalogo') {
    requestAnimationFrame(() => root.querySelector('#catalogo').scrollIntoView({ block: 'start' }));
  }

  // El catálogo no instala listeners globales: nada que limpiar.
  return null;
}
