// Página por curso (/cursos/3-eso/) o por tema (/temas/el-atomo/): título, entradilla,
// las tarjetas de sus simulaciones y prácticas, y enlaces a los demás cursos y temas.
// Responde a búsquedas como «simulaciones de física y química 3.º ESO».
import { COURSES, TOPICS, courseLabel, isPractical } from '../data/simulations.js';
import { collectionInfo } from '../data/collections.js';
import { coursePath, topicPath, homePath } from '../paths.js';
import { cardMarkup } from '../components/card.js';
import { footerMarkup } from '../components/footer.js';
import { siteHeaderMarkup } from '../components/site-header.js';
import { getLang, L } from '../i18n.js';

const CHIP =
  'inline-flex min-h-9 items-center rounded-full border border-[#cbd5e1] bg-white px-3.5 py-1.5 text-sm font-bold text-[#334155] transition-colors hover:border-[#0369a1] hover:text-[#0369a1]';
const CHIP_ON = 'inline-flex min-h-9 items-center rounded-full border border-[#0369a1] bg-[#0369a1] px-3.5 py-1.5 text-sm font-bold text-white';

// Fila de enlaces a todos los cursos o temas, con el actual marcado.
function chips(items, current) {
  return items
    .map(({ id, href, label }) =>
      id === current
        ? `<li><span aria-current="page" class="${CHIP_ON}">${label}</span></li>`
        : `<li><a href="${href}" data-route class="${CHIP}">${label}</a></li>`,
    )
    .join('');
}

export function collectionNav(lang, { courseId = null, topicId = null } = {}) {
  const courses = COURSES.map((c) => ({ id: c.id, href: coursePath(c.id, lang), label: courseLabel(c.id, lang) })).filter((c) => c.href);
  const topics = TOPICS.map((t) => ({ id: t.id, href: topicPath(t.id, lang), label: t.label[lang] ?? t.label.es })).filter((t) => t.href);
  const H = 'text-sm font-bold uppercase tracking-wide text-[#475569]';
  return `
    <nav aria-label="${L('Por curso y por tema', 'By year group and topic', 'Per curs i per tema', 'Mailaka eta gaika', 'Por curso e por tema')}" class="grid gap-6 md:grid-cols-2">
      <div>
        <h2 class="${H}">${L('Por curso', 'By year group', 'Per curs', 'Mailaka', 'Por curso')}</h2>
        <ul class="mt-3 flex flex-wrap gap-2">${chips(courses, courseId)}</ul>
      </div>
      <div>
        <h2 class="${H}">${L('Por tema', 'By topic', 'Per tema', 'Gaika', 'Por tema')}</h2>
        <ul class="mt-3 flex flex-wrap gap-2">${chips(topics, topicId)}</ul>
      </div>
    </nav>`;
}

export function renderCollection(root, { courseId = null, topicId = null }) {
  const lang = getLang();
  const info = collectionInfo({ courseId, topicId }, lang);
  const mixed = info.sims.some(isPractical) && info.sims.some((s) => !isPractical(s));

  root.innerHTML = `
  <div class="min-h-screen">
    ${siteHeaderMarkup()}

    <main>
      <section class="paper border-b border-[#e2e8f0]">
        <div class="mx-auto max-w-6xl px-4 py-8 md:py-12">
          <nav aria-label="${L('Estás en', 'You are here', 'Ets a', 'Hemen zaude', 'Estás en')}" class="text-sm text-[#475569]">
            <ol class="flex flex-wrap items-center gap-1.5">
              <li><a href="${homePath(lang)}" data-route class="font-bold text-[#0369a1] underline-offset-4 hover:underline">${L('Inicio', 'Home', 'Inici', 'Hasiera', 'Inicio')}</a></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page">${info.label}</li>
            </ol>
          </nav>
          <h1 class="mt-3 max-w-4xl text-3xl font-extrabold leading-[1.1] text-balance text-[#0f172a] sm:text-4xl md:text-5xl">${info.h1}</h1>
          <p class="mt-4 max-w-3xl text-lg leading-relaxed text-[#334155]">${info.intro}</p>
          ${info.note ? `<p class="mt-2 max-w-3xl text-sm text-[#64748b]">${info.note}</p>` : ''}
        </div>
      </section>

      <section class="mx-auto max-w-6xl px-4 pb-12 pt-8" aria-labelledby="coleccion-lista">
        <h2 id="coleccion-lista" class="sr-only">${L('Simulaciones', 'Simulations', 'Simulacions', 'Simulazioak', 'Simulacións')}</h2>
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          ${info.sims.map((sim) => cardMarkup(sim, { showKind: mixed })).join('')}
        </div>
      </section>

      <section data-print-hide class="border-t border-[#e2e8f0] bg-white">
        <div class="mx-auto max-w-6xl px-4 py-10">
          ${collectionNav(lang, { courseId, topicId })}
        </div>
      </section>
    </main>
    ${footerMarkup()}
  </div>`;

  return null;
}
