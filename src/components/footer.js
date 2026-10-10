import { PAGE_PATHS } from '../paths.js';

const LINK = 'underline hover:text-[#0284c7]';

export function footerMarkup() {
  return `
    <footer data-print-hide class="border-t border-[#e2e8f0]">
      <div class="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-[#64748b]">
        © 2026 Juan Ramón Grijota · Código bajo licencia
        <a href="https://opensource.org/license/mit" target="_blank" rel="noopener" class="${LINK}">MIT</a>
        · Contenido bajo
        <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.es" target="_blank" rel="noopener license" class="${LINK}">CC BY-SA 4.0</a>
        · <a href="${PAGE_PATHS.about}" data-route class="${LINK}">Sobre el proyecto</a>
        · <a href="${PAGE_PATHS.legal}" data-route class="${LINK}">Aviso legal y privacidad</a>
      </div>
    </footer>`;
}
