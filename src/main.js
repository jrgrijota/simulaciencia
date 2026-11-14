// Fuentes servidas desde el propio portal (sin peticiones a Google Fonts):
// Atkinson Hyperlegible para el texto, Bricolage Grotesque para los títulos y
// JetBrains Mono para los datos.
import '@fontsource/atkinson-hyperlegible/latin-400.css';
import '@fontsource/atkinson-hyperlegible/latin-700.css';
import '@fontsource-variable/bricolage-grotesque/wght.css';
import '@fontsource/jetbrains-mono/latin-400.css';
import '@fontsource/jetbrains-mono/latin-500.css';
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
  SlidersHorizontal,
  FlaskConical,
  ClipboardList,
  MonitorPlay,
} from 'lucide';

import { getRoute, onRouteChange, navigateTo } from './router.js';
import { updateHead } from './head.js';
import { setLang, L } from './i18n.js';
import { getSimulationById, availableIn } from './data/simulations.js';
import { renderCatalog } from './views/catalog.js';
import { renderLab } from './views/lab.js';
import { renderLegal } from './views/legal.js';
import { renderAbout } from './views/about.js';
import { renderCollection } from './views/collection.js';
import { renderGuide } from './views/guide.js';
import { hasGuide, hasGuion } from './data/guides.js';
import { updateLangNotice } from './components/lang-notice.js';
import { trackPageview } from './analytics.js';
import { homePath, coursePath, topicPath } from './paths.js';

const app = document.getElementById('app');
const ICONS = { Search, SearchX, ArrowLeft, Copy, Check, Play, Maximize, Minimize, Share2, Mail, X, Info, Download, BookOpen, SlidersHorizontal, FlaskConical, ClipboardList, MonitorPlay };

// Expone createIcons globalmente para que el modal de lab.js pueda usarlo.
window.lucide = { createIcons: (opts) => createIcons({ icons: ICONS, ...opts }) };

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

// Aviso de «página no encontrada» encima del catálogo, título propio y noindex.
function setNotFound(on) {
  document.head.querySelector('meta[name="robots"][data-not-found]')?.remove();
  if (!on) return;
  const robots = document.createElement('meta');
  robots.name = 'robots';
  robots.content = 'noindex';
  robots.dataset.notFound = '';
  document.head.append(robots);
  document.title = `${L('Página no encontrada', 'Page not found', 'Pàgina no trobada', 'Ez da orria aurkitu', 'Páxina non atopada')} · SimulaCiencia`;
  const notice = document.createElement('div');
  notice.setAttribute('role', 'status');
  notice.className = 'mx-auto mt-4 max-w-6xl px-4';
  notice.innerHTML = `<p class="rounded-md border border-[#fde68a] bg-[#fffbeb] px-4 py-3 text-sm text-[#78350f]">${L(
    'No hemos encontrado esa página. Puede que el enlace esté mal escrito o que la página haya cambiado de dirección. Aquí tienes todas las simulaciones.',
    'We couldn’t find that page. The link may be mistyped, or the page may have moved. Here are all the simulations.',
    'No hem trobat aquesta pàgina. Potser l’enllaç està mal escrit o la pàgina ha canviat d’adreça. Aquí tens totes les simulacions.',
    'Ez dugu orri hori aurkitu. Baliteke esteka gaizki idatzita egotea edo orriak helbidez aldatu izana. Hemen dituzu simulazio guztiak.',
    'Non atopamos esa páxina. Pode que a ligazón estea mal escrita ou que a páxina cambiase de enderezo. Aquí tes todas as simulacións.',
  )}</p>`;
  app.querySelector('main')?.prepend(notice);
}

let firstRender = true;

function render() {
  if (cleanup) {
    cleanup();
    cleanup = null;
  }

  const route = getRoute();
  const { simId, guideId, guionId, page } = route;
  // Páginas por curso y por tema, solo si tienen algo en este idioma.
  const courseId = route.courseId && coursePath(route.courseId, route.lang) ? route.courseId : null;
  const topicId = route.topicId && topicPath(route.topicId, route.lang) ? route.topicId : null;
  setLang(route.lang);
  // Solo lo que existe en el idioma de la página (las prácticas, por ahora, en español).
  const find = (id) => {
    const s = id ? getSimulationById(id) : null;
    return s && availableIn(s, route.lang) ? s : null;
  };
  const sim = find(simId);
  const guideSim = !sim && guideId && hasGuide(guideId, route.lang) ? find(guideId) : null;
  const guionSim = guionId && hasGuion(guionId, route.lang) ? find(guionId) : null;

  // Una dirección que no existe (enlace roto o mal escrito) enseña el catálogo de su
  // idioma con un aviso. GitHub Pages ya la sirve con código 404 (404.html), y el
  // noindex evita que un buscador la tome por la portada.
  const path = location.pathname.endsWith('/') ? location.pathname : location.pathname + '/';
  const notFound = !sim && !guideSim && !guionSim && !courseId && !topicId && !page && path !== homePath(route.lang);

  if (sim) cleanup = renderLab(app, sim);
  else if (guideSim) cleanup = renderGuide(app, guideSim);
  else if (guionSim) cleanup = renderGuide(app, guionSim, 'guion');
  else if (courseId || topicId) cleanup = renderCollection(app, { courseId, topicId });
  else if (page === 'about') cleanup = renderAbout(app);
  else if (page === 'legal') cleanup = renderLegal(app);
  else cleanup = renderCatalog(app);

  updateHead({ sim, guideSim, guionSim, courseId, topicId, page: sim || guideSim || guionSim ? null : page, lang: route.lang });
  setNotFound(notFound);
  updateLangNotice();
  window.scrollTo(0, 0);
  skipLink.textContent = L('Saltar al contenido', 'Skip to content', 'Salta al contingut', 'Joan edukira', 'Saltar ao contido');
  if (!firstRender) {
    focusContent();
    document.getElementById('route-announcer').textContent = document.title;
  }
  firstRender = false;
  trackPageview(notFound ? `No encontrada: ${location.pathname}` : document.title);

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
