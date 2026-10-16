// Aviso de idioma: si el navegador del visitante está en otro idioma de la web,
// una tarjeta discreta abajo le ofrece la misma página en ese idioma. Si su
// idioma no es ninguno de los de la web, le ofrece el inglés.
//
// No redirige nunca: Google rastrea con el navegador en inglés y debe poder leer
// cada versión, y quien prefiera seguir en la página actual no queda atrapado.
// Al cerrarlo o al elegir un idioma (aquí o en el selector) no vuelve a salir.
// El texto va en el idioma que se ofrece, que es el que el visitante entiende.
import { getRoute } from '../router.js';
import { getLang } from '../i18n.js';
import { LANGS, translatedPath } from '../paths.js';
import { flag } from './lang-switch.js';

const KEY = 'simulaciencia-aviso-idioma';
const TEXT = {
  es: { msg: 'Esta página también está disponible en español.', go: 'Ver en español', close: 'Cerrar' },
  en: { msg: 'This page is also available in English.', go: 'View in English', close: 'Close' },
  ca: { msg: 'Aquesta pàgina també està disponible en català.', go: 'Veure-la en català', close: 'Tanca' },
  eu: { msg: 'Orri hau euskaraz ere badago.', go: 'Ikusi euskaraz', close: 'Itxi' },
  gl: { msg: 'Esta páxina tamén está dispoñible en galego.', go: 'Ver en galego', close: 'Pechar' },
};

// El primer idioma de la web en la lista de preferencias del navegador
// («ca-ES» cuenta como catalán); si no hay ninguno, el inglés.
export function browserLang(prefs) {
  for (const p of prefs) {
    const l = String(p).toLowerCase().split('-')[0];
    if (LANGS.includes(l)) return l;
  }
  return 'en';
}

const storage = {
  get: () => {
    try {
      return localStorage.getItem(KEY);
    } catch {
      return null;
    }
  },
  set: () => {
    try {
      localStorage.setItem(KEY, 'cerrado');
    } catch {
      // Sin almacenamiento (modo privado estricto) solo se oculta en esta visita.
    }
  },
};

let dismissed = false;

function remove() {
  document.getElementById('lang-notice')?.remove();
}

function dismiss() {
  dismissed = true;
  storage.set();
  remove();
}

// Se llama tras pintar cada página.
export function updateLangNotice() {
  remove();
  // HeadlessChrome: el Chrome sin interfaz del pregenerado (scripts/prerender.mjs);
  // así el aviso no queda guardado en el HTML de las páginas.
  if (dismissed || /HeadlessChrome/.test(navigator.userAgent) || storage.get()) return;
  const lang = browserLang(navigator.languages?.length ? navigator.languages : [navigator.language || '']);
  const href = translatedPath(getRoute(), lang);
  // El aviso legal (y las guías fuera del español y el inglés) no está traducido: ahí no se ofrece nada.
  if (lang === getLang() || !href) return;

  const t = TEXT[lang];
  const el = document.createElement('div');
  el.id = 'lang-notice';
  el.lang = lang;
  el.setAttribute('role', 'region');
  el.setAttribute('aria-label', t.msg);
  el.className =
    'fixed inset-x-4 bottom-4 z-40 mx-auto flex max-w-md items-center gap-3 rounded-lg border border-[#e2e8f0] bg-white p-3 pl-4 text-sm text-[#1e293b] shadow-lg';
  el.innerHTML = `
    ${flag(lang)}
    <p class="flex-1">${t.msg}
      <a href="${href}" data-route hreflang="${lang}" class="font-semibold text-[#0284c7] underline-offset-2 hover:underline">${t.go}</a>
    </p>
    <button type="button" aria-label="${t.close}" class="shrink-0 rounded-md p-1 text-[#64748b] transition-colors hover:bg-[#f1f5f9] hover:text-[#1e293b]">
      <svg viewBox="0 0 24 24" aria-hidden="true" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>`;
  el.querySelector('a').addEventListener('click', dismiss);
  el.querySelector('button').addEventListener('click', dismiss);
  document.body.append(el);
}

// Elegir un idioma en el selector también cuenta como elección.
if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-lang-switch] a')) dismiss();
  });
}
