// Enrutado por ruta (ver src/paths.js). Los enlaces antiguos con ?sim=, ?guia= y
// ?page= los redirige un script al principio de index.html.
import { parsePath, simPath, homePath, absoluteUrl } from './paths.js';
import { getLang } from './i18n.js';
import { savedCatalogUrl } from './catalog-place.js';

export function getRoute() {
  return parsePath(window.location.pathname);
}

export function navigateTo(url) {
  window.history.pushState({}, '', url);
  // re-dispara el ciclo de render (mismo canal que el botón atrás del navegador)
  window.dispatchEvent(new PopStateEvent('popstate'));
}

// Vuelve al catálogo tal como se dejó (filtros incluidos) si se salió de él desde una tarjeta.
export function navigateToCatalog() {
  const home = homePath(getLang());
  navigateTo(savedCatalogUrl(home) || home);
}

export function onRouteChange(cb) {
  window.addEventListener('popstate', cb);
}

// URL absoluta y limpia para compartir en Moodle, Teams o Classroom.
export function buildShareUrl(id) {
  return absoluteUrl(simPath(id, getLang()));
}
