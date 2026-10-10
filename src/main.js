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
  FlaskConical,
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
import { getSimulationById } from './data/simulations.js';
import { renderCatalog } from './views/catalog.js';
import { renderLab } from './views/lab.js';
import { renderLegal } from './views/legal.js';
import { renderAbout } from './views/about.js';
import { renderGuide } from './views/guide.js';
import { hasGuide } from './data/guides.js';

const app = document.getElementById('app');
const ICONS = { Search, SearchX, ArrowLeft, Copy, Check, FlaskConical, Maximize, Minimize, Share2, Mail, X, Info, Download, BookOpen };

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

function render() {
  if (cleanup) {
    cleanup();
    cleanup = null;
  }

  const { simId, guideId, page } = getRoute();
  const sim = simId ? getSimulationById(simId) : null;
  const guideSim = !sim && guideId && hasGuide(guideId) ? getSimulationById(guideId) : null;

  // Rutas desconocidas => degradamos al catálogo de forma silenciosa.
  if (sim) cleanup = renderLab(app, sim);
  else if (guideSim) cleanup = renderGuide(app, guideSim);
  else if (page === 'about') cleanup = renderAbout(app);
  else if (page === 'legal') cleanup = renderLegal(app);
  else cleanup = renderCatalog(app);

  updateHead({ sim, guideSim, page: sim || guideSim ? null : page });
  window.scrollTo(0, 0);
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
