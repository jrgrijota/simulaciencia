// Selector de idioma: un desplegable (patrón «disclosure» de WAI-ARIA para
// navegación). El botón muestra el idioma actual; la lista enlaza a la misma
// página en cada idioma, o a su portada si la página solo existe en español
// (las guías y el aviso legal). Cada idioma lleva su bandera, pero siempre junto
// a su nombre escrito en ese idioma: la bandera sola no identifica un idioma.
//
// Teclado: Intro/Espacio abre y cierra, ↓/↑ recorren la lista, Inicio/Fin van al
// primero/último y Esc cierra y devuelve el foco al botón. Se cierra también al
// pulsar fuera o al salir con Tab.
import { getRoute } from '../router.js';
import { getLang } from '../i18n.js';
import { LANGS, translatedPath, homePath } from '../paths.js';

const NAMES = { es: 'Español', en: 'English', ca: 'Català', eu: 'Euskara' };
const LABEL = { es: 'Idioma', en: 'Language', ca: 'Idioma', eu: 'Hizkuntza' };

let uid = 0;

// Banderas en SVG (los emojis de bandera no se ven en Windows y no existen para
// Cataluña ni Euskadi).
function flag(lang) {
  const id = `uj${++uid}`;
  const svg = {
    es: `<rect width="3" height="2" fill="#AA151B"/><rect y=".5" width="3" height="1" fill="#F1BF00"/>`,
    en: `<clipPath id="${id}"><path d="M30 15h30v15zv15H0zH0V0zV0h30z"/></clipPath><rect width="60" height="30" fill="#012169"/><path d="M0 0l60 30m0-30L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0l60 30m0-30L0 30" clip-path="url(#${id})" stroke="#C8102E" stroke-width="4"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/>`,
    ca: `<rect width="9" height="9" fill="#FCDD09"/><path d="M0 1.5h9m0 2H0m0 2h9m0 2H0" stroke="#DA121A"/>`,
    eu: `<rect width="50" height="28" fill="#D52B1E"/><path d="M0 0l50 28M50 0L0 28" stroke="#009B48" stroke-width="4.3"/><path d="M25 0v28M0 14h50" stroke="#fff" stroke-width="4.3"/>`,
  }[lang];
  const box = { es: '0 0 3 2', en: '0 0 60 30', ca: '0 0 9 9', eu: '0 0 50 28' }[lang];
  return `<svg viewBox="${box}" preserveAspectRatio="none" aria-hidden="true" focusable="false" class="h-3.5 w-5 shrink-0 rounded-[2px] ring-1 ring-black/10">${svg}</svg>`;
}

const BUTTON =
  'inline-flex min-h-9 shrink-0 items-center gap-2 rounded-md border border-[#e2e8f0] bg-white px-2.5 py-1.5 text-sm font-medium text-[#1e293b] transition-colors hover:border-[#0284c7] hover:text-[#0284c7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284c7]';
const ITEM =
  'flex min-h-11 items-center gap-2.5 rounded px-3 py-2 text-sm text-[#1e293b] hover:bg-[#f1f5f9] focus:bg-[#f1f5f9] focus:outline-none';

// compact: en el móvil el botón muestra la bandera y el código (ES, EN…) en vez
// del nombre, para que quepa en la cabecera del laboratorio.
// up: la lista se abre hacia arriba (en el pie de página).
export function langSwitchMarkup({ compact = false, up = false } = {}) {
  const lang = getLang();
  const route = getRoute();
  const menuId = `lang-menu-${++uid}`;
  const items = LANGS.map((l) => {
    const current = l === lang;
    const href = translatedPath(route, l) || homePath(l);
    return `
        <li>
          <a href="${href}" data-route hreflang="${l}" lang="${l}" ${current ? 'aria-current="true"' : ''} class="${ITEM}${current ? ' font-semibold' : ''}">
            ${flag(l)}
            <span class="flex-1">${NAMES[l]}</span>
            ${current ? '<svg viewBox="0 0 24 24" aria-hidden="true" class="h-4 w-4 text-[#0284c7]" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>' : ''}
          </a>
        </li>`;
  }).join('');
  const name = compact
    ? `<span class="sm:hidden">${lang.toUpperCase()}</span><span class="hidden sm:inline">${NAMES[lang]}</span>`
    : `<span>${NAMES[lang]}</span>`;
  return `
    <div class="lang-switch relative" data-lang-switch>
      <button type="button" aria-expanded="false" aria-controls="${menuId}" class="${BUTTON}">
        ${flag(lang)}
        <span class="sr-only">${LABEL[lang]}: </span>${name}
        <svg viewBox="0 0 24 24" aria-hidden="true" class="lang-chevron h-4 w-4 text-[#64748b] transition-transform" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <ul id="${menuId}" hidden class="absolute ${up ? 'bottom-full mb-1 left-1/2 -translate-x-1/2' : 'right-0 mt-1'} z-50 min-w-44 text-left rounded-md border border-[#e2e8f0] bg-white p-1 shadow-lg">
        ${items}
      </ul>
    </div>`;
}

// Comportamiento: un único conjunto de escuchas en el documento, que sirve para
// todos los selectores que pinten las vistas.
function setOpen(root, open) {
  root.querySelector('button').setAttribute('aria-expanded', String(open));
  root.querySelector('ul').hidden = !open;
  root.querySelector('.lang-chevron')?.classList.toggle('rotate-180', open);
}

function closeAll(except) {
  document.querySelectorAll('[data-lang-switch]').forEach((r) => r !== except && setOpen(r, false));
}

if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    const root = e.target.closest('[data-lang-switch]');
    closeAll(root);
    if (!root) return;
    if (e.target.closest('button')) {
      setOpen(root, root.querySelector('ul').hidden);
    } else if (e.target.closest('a')) {
      setOpen(root, false);
    }
  });

  document.addEventListener('keydown', (e) => {
    const root = e.target.closest?.('[data-lang-switch]');
    if (!root) return;
    const button = root.querySelector('button');
    const links = [...root.querySelectorAll('a')];
    const open = !root.querySelector('ul').hidden;
    const i = links.indexOf(document.activeElement);
    const focus = (n) => links[(n + links.length) % links.length].focus();
    if (e.key === 'Escape' && open) {
      setOpen(root, false);
      button.focus();
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) setOpen(root, true);
      const current = links.findIndex((a) => a.hasAttribute('aria-current'));
      if (i === -1) focus(e.key === 'ArrowDown' ? Math.max(current, 0) : links.length - 1);
      else focus(i + (e.key === 'ArrowDown' ? 1 : -1));
    } else if ((e.key === 'Home' || e.key === 'End') && open && i !== -1) {
      e.preventDefault();
      focus(e.key === 'Home' ? 0 : links.length - 1);
    }
  });

  // Salir con Tab (o con el ratón a otro control) cierra la lista.
  document.addEventListener('focusout', (e) => {
    const root = e.target.closest?.('[data-lang-switch]');
    if (root && !root.contains(e.relatedTarget)) setOpen(root, false);
  });
}
