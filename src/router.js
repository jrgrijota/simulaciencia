// Enrutado por query param:
//   ?sim=<id>     => Modo Laboratorio
//   ?guia=<id>    => Guía docente de la simulación
//   ?page=about   => Página "Sobre el proyecto"
//   ?page=legal   => Aviso legal y privacidad
//   (sin param)   => Catálogo
// Permite enlaces profundos compartibles.
const SIM_PARAM = 'sim';
const PAGE_PARAM = 'page';
const GUIDE_PARAM = 'guia';

export function getRoute() {
  const params = new URLSearchParams(window.location.search);
  return { simId: params.get(SIM_PARAM), guideId: params.get(GUIDE_PARAM), page: params.get(PAGE_PARAM) };
}

// Rutas relativas para los <a href> (funcionan en local y en simulaciencia.es).
export const simHref = (id) => `?${SIM_PARAM}=${id}`;
export const guideHref = (id) => `?${GUIDE_PARAM}=${id}`;
export const pageHref = (name) => `?${PAGE_PARAM}=${name}`;

export function navigateTo(url) {
  pushAndNotify(url);
}

function pushAndNotify(url) {
  window.history.pushState({}, '', url);
  // re-dispara el ciclo de render (mismo canal que el botón atrás del navegador)
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function navigateToCatalog() {
  const url = new URL(window.location.href);
  url.searchParams.delete(SIM_PARAM);
  url.searchParams.delete(PAGE_PARAM);
  url.searchParams.delete(GUIDE_PARAM);
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
