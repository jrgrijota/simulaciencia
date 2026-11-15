// Portada: título, buscador, tarjetas por tema y por curso (cada una lleva a su
// página, /temas/… o /cursos/…, y enlaza ya sus simulaciones) y «Pensado para el
// aula». El catálogo completo, con todas las tarjetas, sigue en la página: se
// enseña al buscar o con «Ver las 15 juntas» (?todas en la dirección).
import { simulationsIn, COURSES, TOPICS, courseLabel, simTitle, isPractical } from '../data/simulations.js';
import { topicSims, courseSims, topicPath, coursePath, simPath } from '../paths.js';
import { cardMarkup } from '../components/card.js';
import { thumbMarkup } from '../components/thumbs.js';
import { footerMarkup } from '../components/footer.js';
import { siteHeaderMarkup } from '../components/site-header.js';
import { saveCatalogPlace, takeCatalogPlace } from '../catalog-place.js';
import { getLang, L } from '../i18n.js';

const BUTTON =
  'inline-flex min-h-11 w-full items-center justify-center gap-1.5 rounded-lg bg-[#0369a1] px-3 py-2 text-sm font-bold text-white transition-colors hover:bg-[#075985]';
const LIST_LINK = 'flex items-center gap-2 rounded-md py-1 text-[0.95rem] font-bold text-[#1e293b] hover:text-[#0369a1]';
const KICKER = 'text-xs font-bold uppercase tracking-wide text-[#0369a1]';
const CARD = 'flex flex-col overflow-hidden rounded-xl border border-[#e2e8f0] bg-white shadow-sm';
const TEXT_LINK = 'inline-flex min-h-11 items-center gap-1 rounded-md px-1 text-sm font-bold text-[#0369a1] underline-offset-4 hover:underline';

// «4 simulaciones · 1 práctica» (las prácticas, por ahora, solo en español).
function countText(sims) {
  const n = sims.filter((s) => !isPractical(s)).length;
  const p = sims.length - n;
  const a = L(
    `${n} ${n === 1 ? 'simulación' : 'simulaciones'}`,
    `${n} ${n === 1 ? 'simulation' : 'simulations'}`,
    `${n} ${n === 1 ? 'simulació' : 'simulacions'}`,
    `${n} simulazio`,
    `${n} ${n === 1 ? 'simulación' : 'simulacións'}`,
  );
  return p ? `${a} · ${p} ${p === 1 ? 'práctica' : 'prácticas'}` : a;
}

// Cursos que abarca un tema: «2.º ESO – 4.º ESO».
function courseRange(sims, lang) {
  const cs = COURSES.filter((c) => sims.some((s) => s.courses.includes(c.id)));
  if (!cs.length) return '';
  const first = courseLabel(cs[0].id, lang);
  return cs.length > 1 ? `${first} – ${courseLabel(cs[cs.length - 1].id, lang)}` : first;
}

// Mosaico con las miniaturas de las simulaciones del tema (de 1 a 4).
function mosaic(sims) {
  const ids = sims.map((s) => s.id).slice(0, 4);
  const tile = (id, extra = '') => `<div class="paper flex items-center overflow-hidden ${extra}">${thumbMarkup(id)}</div>`;
  if (ids.length === 1) return `<div class="paper h-full">${thumbMarkup(ids[0])}</div>`;
  if (ids.length === 2) return `<div class="grid h-full grid-cols-2 gap-px bg-[#e2e8f0]">${ids.map((id) => tile(id)).join('')}</div>`;
  if (ids.length === 3)
    return `<div class="grid h-full grid-cols-3 grid-rows-2 gap-px bg-[#e2e8f0]">${tile(ids[0], 'col-span-2 row-span-2')}${tile(ids[1])}${tile(ids[2])}</div>`;
  return `<div class="grid h-full grid-cols-2 grid-rows-2 gap-px bg-[#e2e8f0]">${ids.map((id) => tile(id)).join('')}</div>`;
}

// Tarjeta de un tema: mosaico, recuento, nombre, cursos, sus simulaciones (cada una
// enlazada) y el botón a la página del tema.
function topicCard(t, lang) {
  const sims = topicSims(t.id, lang);
  const href = topicPath(t.id, lang);
  const label = t.label[lang] ?? t.label.es;
  const items = sims
    .map((s) => {
      const p = isPractical(s);
      return `
        <li><a href="${simPath(s.id, lang)}" data-route class="${LIST_LINK} group">
          <i data-lucide="${p ? 'flask-conical' : 'play'}" class="h-4 w-4 shrink-0 ${p ? 'text-[#7c2d4f]' : 'text-[#0369a1]'}"></i>
          <span class="underline-offset-4 group-hover:underline">${simTitle(s, lang)}${p ? '<span class="sr-only"> (práctica de laboratorio)</span>' : ''}</span>
        </a></li>`;
    })
    .join('');
  return `
  <article class="${CARD}" data-place="tema-${t.id}">
    <div class="aspect-[2/1] border-b border-[#e2e8f0] sm:aspect-[16/9]">${mosaic(sims)}</div>
    <div class="flex flex-1 flex-col p-4 sm:p-5">
      <p class="${KICKER}">${countText(sims)}</p>
      <h3 class="mt-2 text-lg font-bold text-pretty text-[#0f172a] sm:text-xl">
        <a href="${href}" data-route class="rounded-sm underline-offset-4 hover:text-[#0369a1] hover:underline">${label}</a>
      </h3>
      <p class="mt-1 text-sm font-bold text-[#475569]"><span class="sr-only">${L('Cursos:', 'Years:', 'Cursos:', 'Mailak:', 'Cursos:')} </span>${courseRange(sims, lang)}</p>
      <ul class="mt-3 grid gap-0.5 border-t border-[#e2e8f0] pt-3">${items}
      </ul>
      <div class="mt-auto pt-4">
        <a href="${href}" data-route class="${BUTTON}" aria-label="${L('Ver el tema', 'View topic', 'Veure el tema', 'Ikusi gaia', 'Ver o tema')}: ${label}">
          <i data-lucide="layout-grid" class="h-4 w-4"></i>${L('Ver el tema', 'View topic', 'Veure el tema', 'Ikusi gaia', 'Ver o tema')}
        </a>
      </div>
    </div>
  </article>`;
}

// El curso en grande: la cifra en azul y la etapa al lado («2.º ESO», «DBH 2.»,
// «Year 9 (8th grade)»).
function courseHeading(c, lang) {
  if (lang === 'en') {
    const [main, rest] = c.en.split(' (');
    return `<span class="font-display text-4xl font-extrabold leading-none text-[#0369a1]">${main}</span>${rest ? `<span class="font-display text-lg font-bold text-[#475569]">${rest.replace(')', '')}</span>` : ''}`;
  }
  const label = courseLabel(c.id, lang);
  const parts = label.split(' ');
  const num = parts.find((p) => /\d/.test(p)) || parts[0];
  const stage = parts.filter((p) => p !== num).join(' ');
  return `<span class="font-display text-5xl font-extrabold leading-none text-[#0369a1]">${num}</span><span class="font-display text-2xl font-extrabold text-[#0f172a]">${stage}</span>`;
}

// Tarjeta de un curso: el curso en grande con una tira de miniaturas y, dentro, los
// temas que se tratan en él con cuántos recursos tiene cada uno.
function courseCard(c, lang, span) {
  const sims = courseSims(c.id, lang);
  const href = coursePath(c.id, lang);
  const label = courseLabel(c.id, lang);
  const SHOWN = 4;
  const strip = sims
    .slice(0, SHOWN)
    .map((s) => `<div class="paper h-9 w-16 shrink-0 overflow-hidden rounded border border-[#e2e8f0]">${thumbMarkup(s.id)}</div>`)
    .join('');
  const more = sims.length > SHOWN ? `<span class="text-sm font-bold text-[#475569]">+${sims.length - SHOWN}</span>` : '';
  const topics = TOPICS.map((t) => ({ t, n: sims.filter((s) => t.sims.includes(s.id)).length }))
    .filter(({ t, n }) => n && topicPath(t.id, lang))
    .map(
      ({ t, n }) => `
        <li><a href="${topicPath(t.id, lang)}" data-route class="${LIST_LINK} justify-between gap-3">
          <span>${t.label[lang] ?? t.label.es}</span><span class="rounded-full bg-[#f1f5f9] px-2 py-0.5 text-xs text-[#475569]">${n}</span>
        </a></li>`,
    )
    .join('');
  const title = L(`Simulaciones para ${label}`, `Simulations for ${label}`, `Simulacions per a ${label}`, `${label} mailarako simulazioak`, `Simulacións para ${label}`);
  return `
  <article class="${CARD} ${span}" data-place="curso-${c.id}">
    <div class="paper flex flex-col gap-3 border-b border-[#e2e8f0] p-4 sm:p-5" aria-hidden="true">
      <div class="flex flex-wrap items-baseline gap-x-2">${courseHeading(c, lang)}</div>
      <div class="flex items-center gap-1.5 overflow-hidden">${strip}${more}</div>
    </div>
    <div class="flex flex-1 flex-col p-4 sm:p-5">
      <p class="${KICKER}">${countText(sims)}</p>
      <h3 class="mt-2 text-lg font-bold text-pretty text-[#0f172a] sm:text-xl">
        <a href="${href}" data-route class="rounded-sm underline-offset-4 hover:text-[#0369a1] hover:underline"${lang === 'en' ? ` title="${c.enTitle}"` : ''}>${title}</a>
      </h3>
      <ul class="mt-3 grid gap-0.5 border-t border-[#e2e8f0] pt-3" aria-label="${L('Temas', 'Topics', 'Temes', 'Gaiak', 'Temas')}">${topics}
      </ul>
      <div class="mt-auto pt-4">
        <a href="${href}" data-route class="${BUTTON}" aria-label="${L('Ver el curso', 'View year group', 'Veure el curs', 'Ikusi maila', 'Ver o curso')}: ${label}">
          <i data-lucide="graduation-cap" class="h-4 w-4"></i>${L('Ver el curso', 'View year group', 'Veure el curs', 'Ikusi maila', 'Ver o curso')}
        </a>
      </div>
    </div>
  </article>`;
}

export function renderCatalog(root) {
  const lang = getLang();
  // Las direcciones del catálogo con filtros de antes (?tema=ondas, ?curso=3eso)
  // llevan ahora a la página de ese tema o de ese curso.
  const old = new URLSearchParams(location.search);
  const oldTopic = TOPICS.find((t) => t.id === old.get('tema'));
  const oldCourse = COURSES.find((c) => c.id.toLowerCase() === old.get('curso'));
  const target = (oldTopic && topicPath(oldTopic.id, lang)) || (oldCourse && coursePath(oldCourse.id, lang));
  if (target) {
    // Después de terminar este render, para que no lo pise.
    setTimeout(() => {
      history.replaceState(history.state, '', target);
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
  }
  const simulations = simulationsIn(lang);
  const total = simulations.length;
  const mixed = simulations.some(isPractical) && simulations.some((s) => !isPractical(s));
  const topics = TOPICS.filter((t) => topicPath(t.id, lang));
  const courses = COURSES.filter((c) => coursePath(c.id, lang));
  const H2 = 'text-2xl font-bold text-[#0f172a] sm:text-3xl';

  const features = [
    {
      icon: '<path d="M4 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H4z"/><path d="M13 8a3 3 0 0 1 3-3h4v13h-5a2 2 0 0 0-2 2"/>',
      title: L('Guía docente y ficha de actividades en cada simulación', 'A teacher guide and an activity worksheet for every simulation', 'Guia docent i fitxa d’activitats per a cada simulació', 'Irakaslearen gida eta jarduera-fitxa simulazio bakoitzean', 'Guía docente e ficha de actividades en cada simulación'),
      text: L(
        'Cursos, saberes básicos, una secuencia para la clase y las concepciones alternativas que ayuda a corregir. Y una ficha de actividades para el alumnado, con enlaces que abren la simulación ya preparada.',
        'Year groups, curriculum content, a lesson sequence and the misconceptions it helps to address. And an activity worksheet for students, with links that open the simulation already set up.',
        'Cursos, sabers bàsics, una seqüència per a la classe i les concepcions alternatives que ajuda a corregir, segons el currículum de Catalunya. I una fitxa d’activitats per a l’alumnat, amb enllaços que obren la simulació ja preparada.',
        'Mailak, oinarrizko jakintzak, eskolarako sekuentzia bat eta zuzentzen laguntzen dituen ideia okerrak, Euskadiko curriculumaren arabera. Eta ikasleentzako jarduera-fitxa bat, simulazioa prestatuta irekitzen duten estekekin.',
        'Cursos, saberes básicos, unha secuencia para a clase e as concepcións alternativas que axuda a corrixir, segundo o currículo de Galicia. E unha ficha de actividades para o alumnado, con ligazóns que abren a simulación xa preparada.',
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

      <div id="catalogo" class="mx-auto max-w-6xl px-4 pb-12 pt-8">
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

        <div id="browse">
          <section class="pt-10" aria-labelledby="temas-titulo">
            <div class="flex flex-wrap items-end justify-between gap-2">
              <h2 id="temas-titulo" class="${H2}">${L('Por temas', 'By topic', 'Per temes', 'Gaika', 'Por temas')}</h2>
              <a href="?todas" id="show-all" class="${TEXT_LINK}">${L(`Ver las ${total} juntas`, `See all ${total} together`, `Veure-les totes (${total})`, `Ikusi ${total}ak batera`, `Ver as ${total} xuntas`)}<i data-lucide="arrow-right" class="h-4 w-4"></i></a>
            </div>
            <div class="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">${topics.map((t) => topicCard(t, lang)).join('')}</div>
          </section>

          <section class="pt-12" aria-labelledby="cursos-titulo">
            <h2 id="cursos-titulo" class="${H2}">${L('Por cursos', 'By year group', 'Per cursos', 'Mailaka', 'Por cursos')}</h2>
            <div class="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
              ${courses.map((c) => courseCard(c, lang, c.id.endsWith('ESO') ? 'lg:col-span-2' : 'lg:col-span-3')).join('')}
            </div>
          </section>
        </div>

        <section id="all" class="hidden pt-8" aria-labelledby="todas-titulo">
          <div class="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
            <h2 id="todas-titulo" tabindex="-1" class="${H2}">${mixed ? 'Simulaciones y prácticas de laboratorio' : L('Todas las simulaciones', 'All simulations', 'Totes les simulacions', 'Simulazio guztiak', 'Todas as simulacións')}</h2>
            <a href="./" id="back-browse" class="${TEXT_LINK}"><i data-lucide="arrow-left" class="h-4 w-4"></i>${L('Por temas y cursos', 'By topic and year group', 'Per temes i cursos', 'Gaika eta mailaka', 'Por temas e cursos')}</a>
          </div>
          <p id="count" class="mt-2 text-sm font-bold text-[#334155]" aria-live="polite"></p>
          <div id="grid" class="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            ${simulations.map((sim) => cardMarkup(sim, { showKind: mixed })).join('')}
          </div>
          <div id="empty" class="hidden flex-col items-center gap-3 py-20 text-center text-[#475569]">
            <i data-lucide="search-x" class="h-8 w-8"></i>
            <p>${mixed ? 'No hay simulaciones ni prácticas que coincidan con tu búsqueda.' : L('No hay simulaciones que coincidan con tu búsqueda.', 'No simulations match your search.', 'No hi ha cap simulació que coincideixi amb la cerca.', 'Ez dago bilaketarekin bat datorren simulaziorik.', 'Non hai simulacións que coincidan coa túa busca.')}</p>
          </div>
        </section>
      </div>

      <section data-print-hide class="bg-[#0f172a]" aria-labelledby="aula-titulo">
        <div class="mx-auto max-w-6xl px-4 py-14">
          <h2 id="aula-titulo" class="text-center text-3xl font-bold text-white">${L('Pensado para el aula', 'Made for the classroom', "Pensat per a l'aula", 'Ikasgelarako pentsatua', 'Pensado para a aula')}</h2>
          <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">${features}</div>
        </div>
      </section>
    </main>
    ${footerMarkup()}
  </div>`;

  const browse = root.querySelector('#browse');
  const all = root.querySelector('#all');
  const grid = root.querySelector('#grid');
  const empty = root.querySelector('#empty');
  const count = root.querySelector('#count');
  const search = root.querySelector('#search');

  let term = '';
  let showAll = false;

  // Con búsqueda o con «Ver las 15 juntas» se enseñan las tarjetas de simulación;
  // si no, los temas y los cursos.
  function apply() {
    const list = showAll || Boolean(term);
    browse.classList.toggle('hidden', list);
    all.classList.toggle('hidden', !list);
    let visible = 0;
    grid.querySelectorAll('[data-sim-id]').forEach((el) => {
      const show = !term || el.dataset.search.includes(term);
      el.classList.toggle('hidden', !show);
      if (show) visible += 1;
    });
    empty.classList.toggle('hidden', visible !== 0);
    empty.classList.toggle('flex', visible === 0);
    count.textContent = term && visible ? countLine(visible) : '';
  }

  function countLine(visible) {
    if (mixed) return `${visible} de ${total} recursos`;
    return L(`${visible} de ${total} simulaciones`, `${visible} of ${total} simulations`, `${visible} de ${total} simulacions`, `${total} simulaziotatik ${visible}`, `${visible} de ${total} simulacións`);
  }

  // La búsqueda y «todas» van en la dirección (?q=… o ?todas), para compartirlas y
  // para volver al mismo sitio con Atrás.
  function syncUrl() {
    const url = new URL(location.href);
    if (term) url.searchParams.set('q', search.value.trim());
    else url.searchParams.delete('q');
    if (showAll) url.searchParams.set('todas', '');
    else url.searchParams.delete('todas');
    history.replaceState(history.state, '', url.toString().replace('todas=', 'todas'));
  }

  search.addEventListener('input', (e) => {
    term = e.target.value.trim().toLowerCase();
    syncUrl();
    apply();
  });

  root.querySelector('#show-all').addEventListener('click', (e) => {
    e.preventDefault();
    showAll = true;
    syncUrl();
    apply();
    root.querySelector('#todas-titulo').focus({ preventScroll: true });
    all.scrollIntoView({ block: 'start' });
  });

  root.querySelector('#back-browse').addEventListener('click', (e) => {
    e.preventDefault();
    showAll = false;
    search.value = '';
    term = '';
    syncUrl();
    apply();
    root.querySelector('#temas-titulo').scrollIntoView({ block: 'start' });
    search.focus({ preventScroll: true });
  });

  const params = new URLSearchParams(location.search);
  if (params.has('todas')) showAll = true;
  if (params.get('q')) {
    search.value = params.get('q');
    term = search.value.trim().toLowerCase();
  }
  apply();
  if (location.hash === '#catalogo') {
    requestAnimationFrame(() => root.querySelector('#catalogo').scrollIntoView({ block: 'start' }));
  }

  // Al salir a una simulación, una guía, un tema o un curso se guarda dónde estaba la
  // portada; al volver (Atrás, «Volver al catálogo» o el logo) se recupera la
  // posición y el foco vuelve al título de esa tarjeta.
  root.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-route]');
    const card = a?.closest('[data-sim-id], [data-place]');
    if (!card) return;
    saveCatalogPlace({ url: location.pathname + location.search, y: window.scrollY, place: card.dataset.simId ? `[data-sim-id="${card.dataset.simId}"]` : `[data-place="${card.dataset.place}"]` });
  });
  const place = takeCatalogPlace(location.pathname + location.search);
  if (place) {
    requestAnimationFrame(() => {
      window.scrollTo(0, place.y);
      if (place.place) root.querySelector(`${place.place} h3 a`)?.focus({ preventScroll: true });
    });
  }

  // La portada no instala listeners globales: nada que limpiar.
  return null;
}
