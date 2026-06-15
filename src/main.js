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

const app = document.getElementById('app');
const ICONS = { Search, SearchX, ArrowLeft, Copy, FlaskConical, Maximize, Minimize };

let cleanup = null;

function render() {
  if (cleanup) {
    cleanup();
    cleanup = null;
  }

  const { simId } = getRoute();
  const sim = simId ? getSimulationById(simId) : null;

  // ?sim inválido => degradamos al catálogo de forma silenciosa.
  cleanup = sim ? renderLab(app, sim) : renderCatalog(app);

  // Sustituye los <i data-lucide> por sus SVG tras inyectar el HTML.
  createIcons({ icons: ICONS });
}

onRouteChange(render);
render();
