// Tarjeta de simulación: miniatura, materia, cursos, título, descripción y los dos
// enlaces. Todo el contenido visible de un vistazo, sin efectos hover que oculten datos.
import { guideLangFor } from '../data/guides.js';
import { subjectTags, courseLabel, simTitle, simDescription, tagLabel } from '../data/simulations.js';
import { simPath, guidePath } from '../paths.js';
import { getLang, L } from '../i18n.js';
import { thumbMarkup } from './thumbs.js';

// Color de cada materia (punto de la etiqueta).
export const SUBJECT_COLOR = { Física: '#0369a1', Química: '#c2410c', 'Física Cuántica': '#6d28d9' };

export const subjectDot = (tag) =>
  `<svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" focusable="false" class="shrink-0"><circle cx="5" cy="5" r="5" fill="${SUBJECT_COLOR[tag] || '#64748b'}"/></svg>`;

const TAG_CLASS =
  'inline-flex items-center gap-1.5 rounded-full border border-[#e2e8f0] bg-white px-2.5 py-0.5 text-xs font-bold text-[#334155]';
const BUTTON = 'inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-bold transition-colors';

export function cardMarkup(sim) {
  const lang = getLang();
  const title = simTitle(sim, lang);
  const description = simDescription(sim, lang);
  const courses = sim.courses.map((c) => courseLabel(c, lang));
  const tagLabels = sim.tags.map((t) => tagLabel(t, lang));
  const haystack = `${title} ${description} ${tagLabels.join(' ')} ${courses.join(' ')}`.toLowerCase();
  const guide = guideLangFor(sim.id, lang);
  const guideButton = guide
    ? `
      <a
        href="${guidePath(sim.id, guide)}"
        data-route${guide !== lang ? ` hreflang="${guide}"` : ''}
        class="${BUTTON} border border-[#cbd5e1] bg-white text-[#1e293b] hover:border-[#0369a1] hover:text-[#0369a1]"
      >
        <i data-lucide="book-open" class="h-4 w-4"></i>
        ${L('Guía docente', 'Teacher guide', 'Guia docent (en castellà)', 'Irakaslearen gida (gaztelaniaz)', 'Guía docente (en castelán)')}
      </a>`
    : '';
  const tags = subjectTags(sim)
    .map((t) => `<span class="${TAG_CLASS}">${subjectDot(t)}${tagLabel(t, lang)}</span>`)
    .join('');

  return `
  <article
    class="sim-card flex flex-col overflow-hidden rounded-xl border border-[#e2e8f0] bg-white shadow-sm"
    data-sim-id="${sim.id}"
    data-search="${haystack}"
  >
    <div class="paper aspect-[16/9] border-b border-[#e2e8f0]">${thumbMarkup(sim.id)}</div>
    <div class="flex flex-1 flex-col p-5">
      <div class="flex flex-wrap gap-1.5">${tags}</div>
      <h3 class="mt-3 text-xl font-bold text-[#0f172a]">${title}</h3>
      <p class="mt-1 font-mono text-xs text-[#475569]"><span class="sr-only">${L('Cursos:', 'Years:', 'Cursos:', 'Mailak:', 'Cursos:')} </span>${courses.join(' · ')}</p>
      <p class="mt-2 text-[0.95rem] leading-relaxed text-[#475569]">${description}</p>
      <div class="mt-auto flex flex-wrap gap-2 pt-4">
        <a
          href="${simPath(sim.id, lang)}"
          data-route
          class="${BUTTON} bg-[#0369a1] text-white hover:bg-[#075985]"
        >
          <i data-lucide="play" class="h-4 w-4"></i>
          ${L('Abrir simulación', 'Open simulation', 'Obre la simulació', 'Ireki simulazioa', 'Abrir simulación')}
        </a>${guideButton}
      </div>
    </div>
  </article>`;
}
