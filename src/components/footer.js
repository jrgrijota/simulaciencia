import { PAGE_PATHS, pagePath } from '../paths.js';
import { getLang, L } from '../i18n.js';
import { langSwitchMarkup } from './lang-switch.js';

const LINK = 'underline hover:text-[#0284c7]';

export function footerMarkup() {
  const lang = getLang();
  return `
    <footer data-print-hide class="border-t border-[#e2e8f0]">
      <div class="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-[#64748b]">
        © 2026 Juan Ramón Grijota · ${L('Código bajo licencia', 'Code under the', 'Codi amb llicència')}
        <a href="https://opensource.org/license/mit" target="_blank" rel="noopener" class="${LINK}">MIT</a>
        ${L('· Contenido bajo', 'licence · Content under', '· Contingut amb')}
        <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.${lang}" target="_blank" rel="noopener license" class="${LINK}">CC BY-SA 4.0</a>
        · <a href="${pagePath('about', lang)}" data-route class="${LINK}">${L('Sobre el proyecto', 'About the project', 'Sobre el projecte')}</a>
        · <a href="${PAGE_PATHS.legal}" data-route${lang !== 'es' ? ' hreflang="es"' : ''} class="${LINK}">${L('Aviso legal y privacidad', 'Legal notice and privacy (in Spanish)', 'Avís legal i privacitat (en castellà)')}</a>
        <div class="mt-3 flex justify-center">${langSwitchMarkup()}</div>
      </div>
    </footer>`;
}
