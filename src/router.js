// Enrutado por query param:
//   ?sim=<id>  => Modo Laboratorio
//   ?about     => Página "Acerca de"
//   (sin param) => Catálogo
const SIM_PARAM = 'sim';
const ABOUT_PARAM = 'about';

export function getRoute() {
  const params = new URLSearchParams(window.location.search);
  return {
    simId: params.get(SIM_PARAM),
    about: params.has(ABOUT_PARAM),
  };
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
  url.searchParams.delete(ABOUT_PARAM);
  pushAndNotify(url);
}

export function navigateToAbout() {
  const url = new URL(window.location.origin + window.location.pathname);
  url.searchParams.set(ABOUT_PARAM, '');
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
