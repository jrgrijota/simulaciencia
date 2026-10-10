import { navigateToCatalog } from '../router.js';
import { simPath } from '../paths.js';
import { setDescription } from '../head.js';
import { footerMarkup } from '../components/footer.js';
import { loadGuide } from '../data/guides.js';
import { renderGuideHtml, guideToc, guideSummary, downloadBase } from '../guides/shared.js';

const BTN_SECONDARY =
  'inline-flex items-center gap-1.5 rounded-md border border-[#e2e8f0] bg-white px-3 py-1.5 text-sm font-medium text-[#1e293b] transition-colors hover:border-[#0284c7] hover:text-[#0284c7]';
const BTN_PRIMARY =
  'inline-flex items-center gap-1.5 rounded-md bg-[#0284c7] px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#0369a1]';

const DOWNLOADS = [
  { ext: 'pdf', label: 'PDF', hint: 'para imprimir' },
  { ext: 'docx', label: 'Word', hint: 'editable' },
  { ext: 'odt', label: 'LibreOffice', hint: 'editable' },
];

function tocMarkup(toc) {
  const items = toc
    .map(
      (t) =>
        `<li class="${t.depth === 3 ? 'pl-4' : 'font-medium'}"><a href="#${t.id}" class="hover:text-[#0284c7] hover:underline">${t.text}</a></li>`,
    )
    .join('');
  return `
    <nav data-print-hide aria-label="Contenido de la guía" class="mb-8 rounded-md border border-[#e2e8f0] bg-white px-4 py-3">
      <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-[#64748b]">En esta guía</p>
      <ul class="space-y-1 text-sm text-[#1e293b]">${items}</ul>
    </nav>`;
}

export function renderGuide(root, sim) {
  const base = downloadBase(sim.id);
  const downloads = DOWNLOADS.map(
    (d) => `
      <a href="/${base}.${d.ext}" download data-download class="${d.ext === 'pdf' ? BTN_PRIMARY : BTN_SECONDARY}">
        <i data-lucide="download" class="h-4 w-4"></i>
        ${d.label} <span class="hidden font-normal opacity-75 sm:inline">· ${d.hint}</span>
      </a>`,
  ).join('');

  root.innerHTML = `
  <div class="min-h-screen">
    <header data-print-hide class="sticky top-0 z-20 border-b border-[#e2e8f0] bg-white/95 backdrop-blur">
      <div class="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
        <button id="guide-back" class="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-[#1e293b] transition-colors hover:bg-[#f1f5f9] hover:text-[#0284c7]">
          <i data-lucide="arrow-left" class="h-4 w-4"></i>
          Volver al catálogo
        </button>
        <a href="${simPath(sim.id)}" data-route class="${BTN_SECONDARY} ml-auto">
          <i data-lucide="flask-conical" class="h-4 w-4"></i>
          <span class="hidden sm:inline">Abrir la simulación</span><span class="sm:hidden">Simulación</span>
        </a>
      </div>
    </header>

    <main data-print-main class="mx-auto max-w-3xl px-4 py-8">
      <p class="mb-1 text-sm font-semibold uppercase tracking-wide text-[#0284c7]">Guía docente</p>
      <div id="guide-body" class="guide-prose">
        <p class="text-sm text-[#64748b]">Cargando la guía…</p>
      </div>
    </main>
    ${footerMarkup()}
  </div>`;

  let cancelled = false;
  loadGuide(sim.id).then((markdown) => {
    if (cancelled) return;
    setDescription(guideSummary(markdown));
    const body = root.querySelector('#guide-body');
    const html = renderGuideHtml(markdown);
    // El h1 va primero; tras él, las descargas y el índice.
    const h1End = html.indexOf('</h1>') + '</h1>'.length;
    body.innerHTML = `
      ${html.slice(0, h1End)}
      <div data-print-hide class="mb-6 flex flex-wrap items-center gap-2">
        <span class="mr-1 text-sm text-[#64748b]">Descargar:</span>${downloads}
      </div>
      ${tocMarkup(guideToc(markdown))}
      ${html.slice(h1End)}
      <p class="mt-10 border-t border-[#e2e8f0] pt-4 text-xs text-[#64748b]">
        © 2026 Juan Ramón Grijota · Guía bajo licencia
        <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.es" target="_blank" rel="noopener license">CC BY-SA 4.0</a>:
        puedes adaptarla y compartirla citando la autoría y con la misma licencia.
      </p>`;
    window.lucide?.createIcons({ nodes: [...body.querySelectorAll('[data-lucide]')] });

    // Las descargas se cuentan como eventos en GoatCounter (sin cookies).
    body.querySelectorAll('[data-download]').forEach((a) =>
      a.addEventListener('click', () =>
        window.goatcounter?.count?.({ path: '/' + a.getAttribute('href'), title: `Descarga: ${sim.title}`, event: true }),
      ),
    );

    // Saltos del índice sin cambiar la URL (el router usa la query string).
    body.querySelectorAll('nav a[href^="#"]').forEach((a) =>
      a.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById(a.getAttribute('href').slice(1))?.scrollIntoView({ behavior: 'smooth' });
      }),
    );
  });

  root.querySelector('#guide-back').addEventListener('click', navigateToCatalog);

  return () => {
    cancelled = true;
  };
}
