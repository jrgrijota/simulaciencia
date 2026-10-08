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

import { getRoute, onRouteChange } from './router.js';
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

// Título y descripción por ruta: es lo que muestran Google y la pestaña del navegador.
const SITE = 'SimulaCiencia';
const DEFAULT_TITLE = document.title;
const metaDescription = document.querySelector('meta[name="description"]');
const DEFAULT_DESCRIPTION = metaDescription.content;
const PAGE_TITLES = {
  about: `Sobre el proyecto · ${SITE}`,
  legal: `Aviso legal y privacidad · ${SITE}`,
};

function updateHead(sim, guideSim, page) {
  if (guideSim) {
    document.title = `Guía docente: ${guideSim.title} · ${SITE}`;
    metaDescription.content =
      `Guía para usar en clase la simulación «${guideSim.title}»: cursos y saberes básicos, secuencia de ` +
      'explicación, concepciones alternativas y simplificaciones. Descarga en PDF, Word y LibreOffice.';
    return;
  }
  document.title = sim ? `${sim.title} · Simulación interactiva · ${SITE}` : PAGE_TITLES[page] || DEFAULT_TITLE;
  metaDescription.content = sim ? sim.description : DEFAULT_DESCRIPTION;
}

// Registra la visita en GoatCounter con la ruta completa (?sim=…), para saber qué
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

  // ?sim, ?guia o ?page inválidos => degradamos al catálogo de forma silenciosa.
  if (sim) cleanup = renderLab(app, sim);
  else if (guideSim) cleanup = renderGuide(app, guideSim);
  else if (page === 'about') cleanup = renderAbout(app);
  else if (page === 'legal') cleanup = renderLegal(app);
  else cleanup = renderCatalog(app);

  updateHead(sim, guideSim, sim || guideSim ? null : page);
  window.scrollTo(0, 0);
  trackPageview();

  // Sustituye los <i data-lucide> por sus SVG tras inyectar el HTML.
  createIcons({ icons: ICONS });
}

onRouteChange(render);
render();
