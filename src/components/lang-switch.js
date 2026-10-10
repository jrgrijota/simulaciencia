// Selector de idioma: los tres idiomas siempre visibles (ES · EN · CA), con el
// actual marcado. Cada uno enlaza a la misma página en ese idioma, o a su
// portada si la página solo existe en español (las guías y el aviso legal).
import { getRoute } from '../router.js';
import { getLang } from '../i18n.js';
import { LANGS, translatedPath, homePath } from '../paths.js';

const NAMES = { es: 'Español', en: 'English', ca: 'Català' };
const GROUP_LABEL = { es: 'Idioma', en: 'Language', ca: 'Idioma' };

const ITEM = 'rounded px-2 py-1 text-xs font-semibold uppercase tracking-wide transition-colors';
const CURRENT = 'bg-white text-[#0284c7] shadow-sm';
const OTHER = 'text-[#64748b] hover:text-[#0284c7]';

export function langSwitchMarkup() {
  const lang = getLang();
  const route = getRoute();
  const items = LANGS.map((l) => {
    if (l === lang) {
      return `<span aria-current="true" title="${NAMES[l]}" class="${ITEM} ${CURRENT}">${l}</span>`;
    }
    const href = translatedPath(route, l) || homePath(l);
    return `<a href="${href}" data-route hreflang="${l}" lang="${l}" title="${NAMES[l]}" aria-label="${NAMES[l]}" class="${ITEM} ${OTHER}">${l}</a>`;
  }).join('');
  return `
    <nav aria-label="${GROUP_LABEL[lang]}" class="inline-flex shrink-0 items-center gap-0.5 rounded-md border border-[#e2e8f0] bg-[#f1f5f9] p-0.5">
      ${items}
    </nav>`;
}
