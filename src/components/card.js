// Tarjeta de simulación: miniatura, materia, cursos, título, descripción y los
// botones (abrir a todo el ancho; guía y ficha debajo, llenando la misma anchura).
// Todo el contenido visible de un vistazo, sin efectos hover que oculten datos.
import { guideLangFor, hasGuion } from '../data/guides.js';
import { subjectTags, courseLabel, simTitle, simDescription, tagLabel, isPractical, studentDoc } from '../data/simulations.js';
import { simPath, guidePath, guionPath } from '../paths.js';
import { getLang, L } from '../i18n.js';
import { thumbMarkup } from './thumbs.js';

// Color de cada materia (punto de la etiqueta).
export const SUBJECT_COLOR = { Física: '#0369a1', Química: '#c2410c' };

export const subjectDot = (tag) =>
  `<svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" focusable="false" class="shrink-0"><circle cx="5" cy="5" r="5" fill="${SUBJECT_COLOR[tag] || '#64748b'}"/></svg>`;

const TAG_CLASS =
  'inline-flex items-center gap-1.5 rounded-full border border-[#e2e8f0] bg-white px-2.5 py-0.5 text-xs font-bold text-[#334155]';
const BUTTON = 'inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-bold transition-colors';
// Guía y ficha, en la fila de abajo: crecen hasta llenarla entre las dos. Con algo
// menos de relleno caben juntas en una tarjeta de tres columnas; si no caben (tarjeta
// muy estrecha), cada una pasa a su propia fila, también a todo el ancho.
const SECONDARY =
  'inline-flex min-h-11 flex-auto items-center justify-center gap-1 whitespace-nowrap rounded-lg border border-[#cbd5e1] bg-white px-2 py-2 text-sm font-bold text-[#1e293b] transition-colors hover:border-[#0369a1] hover:text-[#0369a1]';

// Tipo de recurso, encima del título: solo cuando el catálogo mezcla simulaciones y
// prácticas (showKind). Las prácticas llevan además su franja de color.
const KIND_BADGE = {
  simulacion: { icon: 'monitor-play', color: '#0369a1', text: 'Simulación' },
  practica: { icon: 'flask-conical', color: '#7c2d4f', text: 'Práctica de laboratorio' },
};

export function cardMarkup(sim, { showKind = false } = {}) {
  const lang = getLang();
  const practical = isPractical(sim);
  const title = simTitle(sim, lang);
  const description = simDescription(sim, lang);
  const courses = sim.courses.map((c) => courseLabel(c, lang));
  const tagLabels = sim.tags.map((t) => tagLabel(t, lang));
  const kindWords = practical ? 'práctica de laboratorio' : '';
  const haystack = `${title} ${description} ${tagLabels.join(' ')} ${courses.join(' ')} ${kindWords}`.toLowerCase();
  const guide = guideLangFor(sim.id, lang);
  const guionButton =
    lang === 'es' && hasGuion(sim.id)
      ? `
      <a
        href="${guionPath(sim.id)}"
        data-route
        class="${SECONDARY}"
      >
        <i data-lucide="clipboard-list" class="h-4 w-4 shrink-0"></i>
        ${studentDoc(sim).label}
      </a>`
      : '';
  const kind = KIND_BADGE[practical ? 'practica' : 'simulacion'];
  const kindLine = showKind
    ? `<p class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide" style="color:${kind.color}"><i data-lucide="${kind.icon}" class="h-4 w-4"></i>${kind.text}</p>`
    : '';
  const guideButton = guide
    ? `
      <a
        href="${guidePath(sim.id, guide)}"
        data-route${guide !== lang ? ` hreflang="${guide}"` : ''}
        class="${SECONDARY}"
      >
        <i data-lucide="book-open" class="h-4 w-4 shrink-0"></i>
        ${L('Guía docente', 'Teacher guide', 'Guia docent (en castellà)', 'Irakaslearen gida (gaztelaniaz)', 'Guía docente (en castelán)')}
      </a>`
    : '';
  // Fila de abajo: guía y ficha (o guion), juntas tan anchas como el botón azul. Si
  // solo hay una, ocupa la fila entera.
  const secondary =
    guideButton || guionButton
      ? `
        <div class="flex flex-wrap gap-2">${guideButton}${guionButton}
        </div>`
      : '';
  const tags = subjectTags(sim)
    .map((t) => `<span class="${TAG_CLASS}">${subjectDot(t)}${tagLabel(t, lang)}</span>`)
    .join('');

  return `
  <article
    class="sim-card flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm ${practical ? 'border-[#d8b4c6] border-t-4 border-t-[#7c2d4f]' : 'border-[#e2e8f0]'}"
    data-sim-id="${sim.id}"
    data-kind="${practical ? 'practica' : 'simulacion'}"
    data-search="${haystack}"
  >
    <div class="paper aspect-[2/1] border-b border-[#e2e8f0] sm:aspect-[16/9]">${thumbMarkup(sim.id)}</div>
    <div class="flex flex-1 flex-col p-4 sm:p-5">
      ${kindLine}
      <div class="${showKind ? 'mt-2 ' : ''}flex flex-wrap gap-1.5">${tags}</div>
      <h3 class="mt-3 text-lg font-bold text-pretty text-[#0f172a] sm:text-xl">
        <a href="${simPath(sim.id, lang)}" data-route class="rounded-sm underline-offset-4 hover:text-[#0369a1] hover:underline">${title}</a>
      </h3>
      <p class="mt-1 text-sm font-bold text-[#475569]"><span class="sr-only">${L('Cursos:', 'Years:', 'Cursos:', 'Mailak:', 'Cursos:')} </span>${courses.join(' · ')}</p>
      <p class="mt-2 line-clamp-3 break-words text-[0.95rem] leading-relaxed text-[#475569] sm:line-clamp-none">${description}</p>
      <div class="mt-auto grid gap-2 pt-4">
        <a
          href="${simPath(sim.id, lang)}"
          data-route
          class="${BUTTON} w-full bg-[#0369a1] text-white hover:bg-[#075985]"
        >
          <i data-lucide="play" class="h-4 w-4"></i>
          ${practical ? 'Abrir práctica' : L('Abrir simulación', 'Open simulation', 'Obre la simulació', 'Ireki simulazioa', 'Abrir simulación')}
        </a>${secondary}
      </div>
    </div>
  </article>`;
}
