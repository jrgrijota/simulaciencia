import { PAGE_PATHS, pagePath, coursePath, topicPath } from '../paths.js';
import { COURSES, TOPICS, courseLabel } from '../data/simulations.js';
import { getLang, L } from '../i18n.js';
import { langSwitchMarkup } from './lang-switch.js';

const LINK = 'underline hover:text-[#0369a1]';

// Enlaces a las páginas por curso y por tema en todas las páginas: el docente salta a
// su curso desde cualquier sitio y los buscadores las encuentran.
function collectionLinks(lang) {
  const row = (title, items) =>
    `<p class="mb-2"><span class="font-bold text-[#475569]">${title}:</span> ${items
      .filter(([href]) => href)
      .map(([href, label]) => `<a href="${href}" data-route class="${LINK}">${label}</a>`)
      .join(' · ')}</p>`;
  return `<nav aria-label="${L('Por curso y por tema', 'By year group and topic', 'Per curs i per tema', 'Mailaka eta gaika', 'Por curso e por tema')}" class="mb-4 border-b border-[#e2e8f0] pb-4">
          ${row(L('Por curso', 'By year group', 'Per curs', 'Mailaka', 'Por curso'), COURSES.map((c) => [coursePath(c.id, lang), courseLabel(c.id, lang)]))}
          ${row(L('Por tema', 'By topic', 'Per tema', 'Gaika', 'Por tema'), TOPICS.map((t) => [topicPath(t.id, lang), t.label[lang] ?? t.label.es]))}
        </nav>`;
}

export function footerMarkup() {
  const lang = getLang();
  return `
    <footer data-print-hide class="border-t border-[#e2e8f0]">
      <div class="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-[#64748b]">
        ${collectionLinks(lang)}
        © 2026 Juan Ramón Grijota · ${L('Código bajo licencia', 'Code under the', 'Codi amb llicència', 'Kodea', 'Código baixo licenza')}
        <a href="https://opensource.org/license/mit" target="_blank" rel="noopener" class="${LINK}">MIT</a>
        ${L('· Contenido bajo', 'licence · Content under', '· Contingut amb', 'lizentziapean · Edukia:', '· Contido baixo')}
        <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.${lang}" target="_blank" rel="noopener license" class="${LINK}">CC BY-SA 4.0</a>
        · <a href="${pagePath('about', lang)}" data-route class="${LINK}">${L('Sobre el proyecto', 'About the project', 'Sobre el projecte', 'Proiektuari buruz', 'Sobre o proxecto')}</a>
        · <a href="https://github.com/jrgrijota/simulaciencia" target="_blank" rel="noopener" class="${LINK}">GitHub</a>
        · <a href="${PAGE_PATHS.legal}" data-route${lang !== 'es' ? ' hreflang="es"' : ''} class="${LINK}">${L('Aviso legal y privacidad', 'Legal notice and privacy (in Spanish)', 'Avís legal i privacitat (en castellà)', 'Lege-oharra eta pribatutasuna (gaztelaniaz)', 'Aviso legal e privacidade (en castelán)')}</a>
        <div class="mt-3 flex justify-center">${langSwitchMarkup({ up: true })}</div>
      </div>
    </footer>`;
}
