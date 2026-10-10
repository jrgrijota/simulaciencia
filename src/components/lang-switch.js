// Enlace a la misma página en el otro idioma (o a la portada, si esa página
// solo existe en español, como las guías y el aviso legal).
import { getRoute } from '../router.js';
import { getLang } from '../i18n.js';
import { translatedPath, homePath } from '../paths.js';

const CLASS =
  'inline-flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-[#64748b] transition-colors hover:bg-[#f1f5f9] hover:text-[#0284c7]';

// compact: en el móvil solo el icono (cabecera del laboratorio, con poco sitio).
export function langSwitchMarkup({ compact = false } = {}) {
  const other = getLang() === 'en' ? 'es' : 'en';
  const href = translatedPath(getRoute(), other) || homePath(other);
  const label = other === 'en' ? 'English' : 'Español';
  return `
    <a href="${href}" data-route hreflang="${other}" lang="${other}" aria-label="${label}" class="${CLASS}">
      <i data-lucide="languages" class="h-4 w-4"></i>
      <span${compact ? ' class="hidden sm:inline"' : ''}>${label}</span>
    </a>`;
}
