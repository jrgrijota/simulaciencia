// Inter servida desde el propio portal (sin peticiones a Google Fonts).
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/inter/latin-700.css';
import './style.css';
import {
  createIcons,
  Search,
  SearchX,
  ArrowLeft,
  Copy,
  Check,
  Play,
  Maximize,
  Minimize,
  Share2,
  Mail,
  X,
  Info,
  Download,
  BookOpen,
} from 'lucide';

import { getRoute, onRouteChange, navigateTo } from './router.js';
import { updateHead } from './head.js';
import { setLang, L } from './i18n.js';
import { getSimulationById } from './data/simulations.js';
import { renderCatalog } from './views/catalog.js';
import { renderLab } from './views/lab.js';
import { renderLegal } from './views/legal.js';
import { renderAbout } from './views/about.js';
import { renderGuide } from './views/guide.js';
import { hasGuide } from './data/guides.js';
import { updateLangNotice } from './components/lang-notice.js';

const app = document.getElementById('app');
const ICONS = { Search, SearchX, ArrowLeft, Copy, Check, Play, Maximize, Minimize, Share2, Mail, X, Info, Download, BookOpen };

// Expone createIcons globalmente para que el modal de lab.js pueda usarlo.
window.lucide = { createIcons: (opts) => createIcons({ icons: ICONS, ...opts }) };

// Registra la visita en GoatCounter con la ruta completa (/simulaciones/…), para saber qué
// simulaciones se abren. El script carga en async: si aún no está, espera a su load.
// Si un bloqueador o el cortafuegos del centro lo impiden, simplemente no se cuenta.
function trackPageview() {
  const hit = { path: location.pathname + location.search, title: document.title };
  const send = () => window.goatcounter.count(hit);
  if (window.goatcounter?.count) send();
  else document.getElementById('goatcounter')?.addEventListener('load', send, { once: true });
}

let cleanup = null;

// Lleva el foco al principio del contenido: el título de la página si se ve,
// si no el <main> o la aplicación entera. Lo usan el enlace «Saltar al contenido»
// y cada cambio de página, para que el teclado y el lector de pantalla no se
// queden en la página anterior.
function focusContent() {
  const target =
    [...app.querySelectorAll('h1')].find((h) => h.getClientRects().length && getComputedStyle(h).display !== 'contents') ||
    app.querySelector('main') ||
    app;
  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
}

const skipLink = document.getElementById('skip-link');
skipLink.addEventListener('click', (e) => {
  e.preventDefault();
  focusContent();
});

let firstRender = true;

function render() {
  if (cleanup) {
    cleanup();
    cleanup = null;
  }

  const route = getRoute();
  const { simId, guideId, page } = route;
  setLang(route.lang);
  const sim = simId ? getSimulationById(simId) : null;
  const guideSim = !sim && guideId && hasGuide(guideId, route.lang) ? getSimulationById(guideId) : null;

  // Rutas desconocidas => degradamos al catálogo de forma silenciosa.
  if (sim) cleanup = renderLab(app, sim);
  else if (guideSim) cleanup = renderGuide(app, guideSim);
  else if (page === 'about') cleanup = renderAbout(app);
  else if (page === 'legal') cleanup = renderLegal(app);
  else cleanup = renderCatalog(app);

  updateHead({ sim, guideSim, page: sim || guideSim ? null : page, lang: route.lang });
  updateLangNotice();
  window.scrollTo(0, 0);
  skipLink.textContent = L('Saltar al contenido', 'Skip to content', 'Salta al contingut', 'Joan edukira', 'Saltar ao contido');
  if (!firstRender) {
    focusContent();
    document.getElementById('route-announcer').textContent = document.title;
  }
  firstRender = false;
  trackPageview();

  // Sustituye los <i data-lucide> por sus SVG tras inyectar el HTML.
  createIcons({ icons: ICONS });
}

// Los enlaces internos son <a href="/simulaciones/…"> para que Google pueda seguirlos;
// con un clic normal se navega sin recargar la página.
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[data-route]');
  if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  e.preventDefault();
  navigateTo(a.href);
});

onRouteChange(render);
render();
