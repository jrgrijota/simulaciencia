// Enrutado por query param:
//   ?sim=<id>     => Modo Laboratorio
//   ?page=about   => Página "Sobre el proyecto"
//   ?page=legal   => Aviso legal y privacidad
//   (sin param)   => Catálogo
// Permite enlaces profundos compartibles.
const SIM_PARAM = 'sim';
const PAGE_PARAM = 'page';

export function getRoute() {
  const params = new URLSearchParams(window.location.search);
  return { simId: params.get(SIM_PARAM), page: params.get(PAGE_PARAM) };
}

function pushAndNotify(url) {
  window.history.pushState({}, '', url);
  // re-dispara el ciclo de render (mismo canal que el botón atrás del navegador)
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function navigateToSim(id) {
  const url = new URL(window.location.href);
  url.searchParams.set(SIM_PARAM, id);
  pushAndNotify(url);
}

export function navigateToCatalog() {
  const url = new URL(window.location.href);
  url.searchParams.delete(SIM_PARAM);
  url.searchParams.delete(PAGE_PARAM);
  pushAndNotify(url);
}

export function navigateToPage(name) {
  const url = new URL(window.location.origin + window.location.pathname);
  url.searchParams.set(PAGE_PARAM, name);
  pushAndNotify(url);
}

export function onRouteChange(cb) {
  window.addEventListener('popstate', cb);
}

// URL absoluta y limpia para compartir en Moodle, Teams o Classroom.
export function buildShareUrl(id) {
  const url = new URL(window.location.origin + window.location.pathname);
  url.searchParams.set(SIM_PARAM, id);
  return url.toString();
}
