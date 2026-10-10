// Enrutado por ruta (ver src/paths.js). Los enlaces antiguos con ?sim=, ?guia= y
// ?page= los redirige un script al principio de index.html.
import { parsePath, simPath, absoluteUrl } from './paths.js';

export function getRoute() {
  return parsePath(window.location.pathname);
}

export function navigateTo(url) {
  window.history.pushState({}, '', url);
  // re-dispara el ciclo de render (mismo canal que el botón atrás del navegador)
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function navigateToCatalog() {
  navigateTo('/');
}

export function onRouteChange(cb) {
  window.addEventListener('popstate', cb);
}

// URL absoluta y limpia para compartir en Moodle, Teams o Classroom.
export function buildShareUrl(id) {
  return absoluteUrl(simPath(id));
}
