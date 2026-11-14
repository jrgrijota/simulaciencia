// Cabecera común de la portada, «Sobre el proyecto», las guías y el aviso legal:
// logo (lleva a la portada), «Sobre el proyecto», un hueco para un botón propio de
// la página (la guía pone «Abrir la simulación») y el selector de idioma.
// En móviles estrechos, si hay botón propio, solo queda el logo (sin el nombre).
// El laboratorio tiene su propia barra de herramientas.
import { pagePath, homePath } from '../paths.js';
import { getLang, L } from '../i18n.js';
import { langSwitchMarkup } from './lang-switch.js';

const NAV_LINK =
  'inline-flex min-h-11 items-center gap-1.5 rounded-md px-3 text-sm font-bold text-[#334155] transition-colors hover:bg-[#f1f5f9] hover:text-[#0369a1]';

export function siteHeaderMarkup({ current = null, extra = '' } = {}) {
  const lang = getLang();
  const about = pagePath('about', lang);
  return `
    <header data-print-hide class="sticky top-0 z-20 border-b border-[#e2e8f0] bg-white/95 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center gap-2 px-4 py-2">
        <a href="${homePath(lang)}" data-route class="mr-auto flex min-h-11 items-center gap-2 rounded-md text-[#0f172a]">
          <img src="/logo.svg" alt="SimulaCiencia" width="32" height="32" class="h-8 w-8" />
          <span aria-hidden="true" translate="no" class="${extra ? 'max-[420px]:hidden ' : ''}font-display text-xl font-bold tracking-tight">Simula<span class="text-[#0369a1]">Ciencia</span></span>
        </a>
        <nav aria-label="${L('Principal', 'Main', 'Principal', 'Nagusia', 'Principal')}" class="flex items-center gap-1">
          <a href="${pagePath('news', lang)}" data-route${current === 'news' ? ' aria-current="page"' : ''} class="${NAV_LINK}${current === 'news' ? ' text-[#0369a1]' : ''}">
            <i data-lucide="newspaper" class="h-4 w-4 sm:hidden"></i>
            <span class="sr-only sm:not-sr-only">${L('Novedades', 'What’s new', 'Novetats', 'Berriak', 'Novidades')}</span>
          </a>
          <a href="${about}" data-route${current === 'about' ? ' aria-current="page"' : ''} class="${NAV_LINK}${current === 'about' ? ' text-[#0369a1]' : ''}">
            <i data-lucide="info" class="h-4 w-4 sm:hidden"></i>
            <span class="sr-only sm:not-sr-only">${L('Sobre el proyecto', 'About', 'Sobre el projecte', 'Proiektuari buruz', 'Sobre o proxecto')}</span>
          </a>
          ${extra}
        </nav>
        ${langSwitchMarkup({ compact: true })}
      </div>
    </header>`;
}
