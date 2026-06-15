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
} from 'lucide';

import { getRoute, onRouteChange } from './router.js';
import { getSimulationById } from './data/simulations.js';
import { renderCatalog } from './views/catalog.js';
import { renderLab } from './views/lab.js';
import { renderAbout } from './views/about.js';

const app = document.getElementById('app');
const ICONS = { Search, SearchX, ArrowLeft, Copy, Check, FlaskConical, Maximize, Minimize, Share2, Mail, X, Info };

// Expone createIcons globalmente para que el modal de lab.js pueda usarlo.
window.lucide = { createIcons: (opts) => createIcons({ icons: ICONS, ...opts }) };

let cleanup = null;

function render() {
  if (cleanup) {
    cleanup();
    cleanup = null;
  }

  const { simId, about } = getRoute();
  const sim = simId ? getSimulationById(simId) : null;

  if (about) {
    cleanup = renderAbout(app);
  } else if (sim) {
    cleanup = renderLab(app, sim);
  } else {
    cleanup = renderCatalog(app);
  }

  createIcons({ icons: ICONS });
}

onRouteChange(render);
render();
