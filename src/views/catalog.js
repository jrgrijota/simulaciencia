import { simulations, allTags } from '../data/simulations.js';
import { cardMarkup } from '../components/card.js';
import { navigateToSim } from '../router.js';

const FILTER_BASE =
  'filter-btn rounded-md border px-3 py-1.5 text-sm font-medium transition-colors';
const FILTER_ON = 'border-[#0284c7] bg-[#0284c7] text-white';
const FILTER_OFF = 'border-[#e2e8f0] bg-white text-[#64748b] hover:border-[#0284c7] hover:text-[#0284c7]';

export function renderCatalog(root) {
  const filters = ['Todas', ...allTags]
    .map((label, i) => {
      const value = i === 0 ? 'all' : label;
      const state = i === 0 ? FILTER_ON : FILTER_OFF;
      return `<button data-tag="${value}" aria-pressed="${i === 0}" class="${FILTER_BASE} ${state}">${label}</button>`;
    })
    .join('');

  root.innerHTML = `
  <div class="min-h-screen">
    <header data-print-hide class="sticky top-0 z-20 border-b border-[#e2e8f0] bg-white/95 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <span class="text-lg font-bold tracking-tight text-[#1e293b]">
          <span class="text-[#0284c7]">⚗</span> SimulaCiencia
        </span>
        <span class="hidden text-sm text-[#64748b] sm:inline">· Simulaciones de Física y Química</span>
      </div>
    </header>

    <main class="mx-auto max-w-6xl px-4 py-6">
      <div data-print-hide class="mb-6 flex flex-col gap-3">
        <div class="relative">
          <i data-lucide="search" class="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748b]"></i>
          <input
            id="search"
            type="search"
            placeholder="Buscar simulación por nombre, tema o nivel…"
            autocomplete="off"
            class="w-full rounded-md border border-[#e2e8f0] bg-white py-2.5 pl-11 pr-4 text-sm text-[#1e293b] placeholder:text-[#94a3b8] focus:border-[#0284c7] focus:outline-none"
          />
        </div>
        <div id="filters" class="flex flex-wrap gap-2">${filters}</div>
      </div>

      <div id="grid" class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        ${simulations.map(cardMarkup).join('')}
      </div>

      <div id="empty" class="hidden flex-col items-center gap-2 py-20 text-center text-[#64748b]">
        <i data-lucide="search-x" class="h-8 w-8"></i>
        <p class="text-sm">No hay simulaciones que coincidan con tu búsqueda.</p>
      </div>
    </main>
  </div>`;

  const grid = root.querySelector('#grid');
  const empty = root.querySelector('#empty');
  const search = root.querySelector('#search');
  const filterBar = root.querySelector('#filters');

  let term = '';
  let activeTag = 'all';

  function apply() {
    let visible = 0;
    simulations.forEach((sim) => {
      const el = grid.querySelector(`[data-sim-id="${sim.id}"]`);
      const matchTerm = !term || el.dataset.search.includes(term);
      const matchTag = activeTag === 'all' || sim.tags.includes(activeTag);
      const show = matchTerm && matchTag;
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

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-open]');
    if (!btn) return;
    navigateToSim(btn.dataset.open);
  });

  // El catálogo no instala listeners globales: nada que limpiar.
  return null;
}
