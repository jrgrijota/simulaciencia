// Tarjeta de simulación: todo el contenido visible de un vistazo,
// sin efectos hover que oculten datos.
import { hasGuide } from '../data/guides.js';
import { subjectTags, courseLabel, simTitle, simDescription, tagLabel } from '../data/simulations.js';
import { simPath, guidePath } from '../paths.js';
import { getLang, L } from '../i18n.js';

const TAG_CLASS =
  'inline-flex items-center rounded-md border border-[#e2e8f0] bg-[#f8fafc] px-2 py-0.5 text-xs font-medium text-[#64748b]';

export function cardMarkup(sim) {
  const lang = getLang();
  const title = simTitle(sim, lang);
  const description = simDescription(sim, lang);
  const courses = sim.courses.map((c) => courseLabel(c, lang));
  const tagLabels = sim.tags.map((t) => tagLabel(t, lang));
  const haystack = `${title} ${description} ${tagLabels.join(' ')} ${courses.join(' ')}`.toLowerCase();
  const guideButton = hasGuide(sim.id)
    ? `
    <a
      href="${guidePath(sim.id)}"
      data-route${lang !== 'es' ? ' hreflang="es"' : ''}
      class="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-[#e2e8f0] bg-white px-4 py-2 text-sm font-medium text-[#1e293b] transition-colors hover:border-[#0284c7] hover:text-[#0284c7]"
    >
      <i data-lucide="book-open" class="h-4 w-4"></i>
      ${L('Guía docente', 'Teacher guide (in Spanish)', 'Guia docent (en castellà)', 'Irakaslearen gida (gaztelaniaz)')}
    </a>`
    : '';
  const tags = subjectTags(sim).map((t) => `<span class="${TAG_CLASS}">${tagLabel(t, lang)}</span>`).join('');
  const courseLine = `<p class="mt-2 text-xs text-[#64748b]"><span class="font-medium text-[#1e293b]">${L('Cursos:', 'Years:', 'Cursos:', 'Mailak:')}</span> ${courses.join(' · ')}</p>`;

  return `
  <article
    class="sim-card flex flex-col rounded-md border border-[#e2e8f0] bg-white p-5"
    data-sim-id="${sim.id}"
    data-search="${haystack}"
  >
    <h3 class="text-base font-semibold text-[#1e293b]">${title}</h3>
    <p class="mt-1.5 line-clamp-2 text-sm leading-relaxed text-[#64748b]">${description}</p>
    <div class="mt-3 flex flex-wrap gap-1.5">${tags}</div>
    ${courseLine}
    <a
      href="${simPath(sim.id, lang)}"
      data-route
      class="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-[#0284c7] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0369a1] focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <i data-lucide="flask-conical" class="h-4 w-4"></i>
      ${L('Abrir laboratorio', 'Open lab', 'Obre el laboratori', 'Ireki laborategia')}
    </a>${guideButton}
  </article>`;
}
