import { simulations, allTags, COURSES, tagLabel } from '../data/simulations.js';
import { cardMarkup } from '../components/card.js';
import { footerMarkup } from '../components/footer.js';
import { langSwitchMarkup } from '../components/lang-switch.js';
import { pagePath } from '../paths.js';
import { getLang, L } from '../i18n.js';

const FILTER_BASE =
  'filter-btn rounded-md border px-3 py-1.5 text-sm font-medium transition-colors';
const FILTER_ON = 'border-[#0284c7] bg-[#0284c7] text-white';
const FILTER_OFF = 'border-[#e2e8f0] bg-white text-[#64748b] hover:border-[#0284c7] hover:text-[#0284c7]';

export function renderCatalog(root) {
  const lang = getLang();
  const filters = ['all', ...allTags]
    .map((value, i) => {
      const label = i === 0 ? L('Todas', 'All', 'Totes') : tagLabel(value, lang);
      const state = i === 0 ? FILTER_ON : FILTER_OFF;
      return `<button data-tag="${value}" aria-pressed="${i === 0}" class="${FILTER_BASE} ${state}">${label}</button>`;
    })
    .join('');

  // Un docente busca por el curso que da: filtro propio, combinable con la materia.
  const courseFilters = [{ id: 'all', label: 'Todos', en: 'All', ca: 'Tots' }, ...COURSES]
    .map((c, i) => {
      const state = i === 0 ? FILTER_ON : FILTER_OFF;
      return `<button data-course="${c.id}" aria-pressed="${i === 0}" class="${FILTER_BASE} ${state}">${lang === 'es' ? c.label : c[lang]}</button>`;
    })
    .join('');
  const LABEL = 'w-16 shrink-0 text-xs font-semibold uppercase tracking-wide text-[#64748b]';

  root.innerHTML = `
  <div class="min-h-screen">
    <header data-print-hide class="sticky top-0 z-20 border-b border-[#e2e8f0] bg-white/95 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <h1 class="contents">
          <span class="text-lg font-bold tracking-tight text-[#1e293b]">
            <span class="text-[#0284c7]">⚗</span> SimulaCiencia
          </span>
          <span class="hidden text-sm text-[#64748b] sm:inline">· ${L('Simulaciones de Física y Química', 'Physics and Chemistry Simulations', 'Simulacions de Física i Química')}</span>
        </h1>
        <a href="${pagePath('about', lang)}" data-route class="ml-auto inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-[#64748b] transition-colors hover:bg-[#f1f5f9] hover:text-[#0284c7]">
          <i data-lucide="info" class="h-4 w-4"></i>
          <span class="hidden sm:inline">${L('Sobre el proyecto', 'About', 'Sobre el projecte')}</span>
        </a>
        ${langSwitchMarkup()}
      </div>
    </header>

    <main class="mx-auto max-w-6xl px-4 py-6">
      <p class="mb-4 text-sm leading-relaxed text-[#64748b]">
        ${L(
          `Simulaciones interactivas y gratuitas de Física y Química para ESO y Bachillerato, con su guía docente.
        Sin instalar nada ni crear una cuenta.`,
          `Free interactive Physics and Chemistry simulations for secondary school (ESO and Bachillerato in Spain).
        Nothing to install and no account needed. Teacher guides are available in Spanish.`,
          `Simulacions interactives i gratuïtes de Física i Química per a ESO i Batxillerat.
        Sense instal·lar res ni crear cap compte. Les guies docents estan en castellà.`,
        )}
      </p>
      <div data-print-hide class="mb-6 flex flex-col gap-3">
        <div class="relative">
          <i data-lucide="search" class="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748b]"></i>
          <input
            id="search"
            type="search"
            placeholder="${L('Buscar simulación por nombre, tema o nivel…', 'Search by name, topic or year…', 'Cerca per nom, tema o nivell…')}"
            autocomplete="off"
            class="w-full rounded-md border border-[#e2e8f0] bg-white py-2.5 pl-11 pr-4 text-sm text-[#1e293b] placeholder:text-[#94a3b8] focus:border-[#0284c7] focus:outline-none"
          />
        </div>
        <div class="flex items-center gap-2">
          <span class="${LABEL}">${L('Materia', 'Subject', 'Matèria')}</span>
          <div id="filters" role="group" aria-label="${L('Materia', 'Subject', 'Matèria')}" class="flex flex-wrap gap-2">${filters}</div>
        </div>
        <div class="flex items-center gap-2">
          <span class="${LABEL}">${L('Curso', 'Year', 'Curs')}</span>
          <div id="course-filters" role="group" aria-label="${L('Curso', 'Year', 'Curs')}" class="flex flex-wrap gap-2">${courseFilters}</div>
        </div>
      </div>

      <div id="grid" class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        ${simulations.map(cardMarkup).join('')}
      </div>

      <div id="empty" class="hidden flex-col items-center gap-2 py-20 text-center text-[#64748b]">
        <i data-lucide="search-x" class="h-8 w-8"></i>
        <p class="text-sm">${L('No hay simulaciones que coincidan con tu búsqueda.', 'No simulations match your search.', 'No hi ha cap simulació que coincideixi amb la cerca.')}</p>
      </div>
    </main>
    ${footerMarkup()}
  </div>`;

  const grid = root.querySelector('#grid');
  const empty = root.querySelector('#empty');
  const search = root.querySelector('#search');
  const filterBar = root.querySelector('#filters');
  const courseBar = root.querySelector('#course-filters');

  let term = '';
  let activeTag = 'all';
  let activeCourse = 'all';

  function apply() {
    let visible = 0;
    simulations.forEach((sim) => {
      const el = grid.querySelector(`[data-sim-id="${sim.id}"]`);
      const matchTerm = !term || el.dataset.search.includes(term);
      const matchTag = activeTag === 'all' || sim.tags.includes(activeTag);
      const matchCourse = activeCourse === 'all' || sim.courses.includes(activeCourse);
      const show = matchTerm && matchTag && matchCourse;
      el.classList.toggle('hidden', !show);
      if (show) visible += 1;
    });
    empty.classList.toggle('hidden', visible !== 0);
    empty.classList.toggle('flex', visible === 0);
  }

  search.addEventListener('input', (e) => {
    term = e.target.value.trim().toLowerCase();
    apply();
  });

  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-tag]');
    if (!btn) return;
    activeTag = btn.dataset.tag;
    filterBar.querySelectorAll('[data-tag]').forEach((b) => {
      const on = b === btn;
      b.setAttribute('aria-pressed', String(on));
      b.className = `${FILTER_BASE} ${on ? FILTER_ON : FILTER_OFF}`;
    });
    apply();
  });

  courseBar.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-course]');
    if (!btn) return;
    activeCourse = btn.dataset.course;
    courseBar.querySelectorAll('[data-course]').forEach((b) => {
      const on = b === btn;
      b.setAttribute('aria-pressed', String(on));
      b.className = `${FILTER_BASE} ${on ? FILTER_ON : FILTER_OFF}`;
    });
    apply();
  });

  // El catálogo no instala listeners globales: nada que limpiar.
  return null;
}
