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
  FlaskConical,
  Maximize,
  Minimize,
} from 'lucide';

import { getRoute, onRouteChange } from './router.js';
import { getSimulationById } from './data/simulations.js';
import { renderCatalog } from './views/catalog.js';
import { renderLab } from './views/lab.js';
import { renderLegal } from './views/legal.js';

const app = document.getElementById('app');
const ICONS = { Search, SearchX, ArrowLeft, Copy, FlaskConical, Maximize, Minimize };

let cleanup = null;

function render() {
  if (cleanup) {
    cleanup();
    cleanup = null;
  }

  const { simId, page } = getRoute();
  const sim = simId ? getSimulationById(simId) : null;

  // ?sim inválido => degradamos al catálogo de forma silenciosa.
  if (sim) cleanup = renderLab(app, sim);
  else if (page === 'legal') cleanup = renderLegal(app);
  else cleanup = renderCatalog(app);

  // Sustituye los <i data-lucide> por sus SVG tras inyectar el HTML.
  createIcons({ icons: ICONS });
}

onRouteChange(render);
render();
