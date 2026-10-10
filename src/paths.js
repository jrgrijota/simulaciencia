// Direcciones públicas de cada página. Las usan el navegador (router, enlaces,
// <head>) y el build (sitemap, páginas pregeneradas), así que no tocan el DOM.
//
//   /                          => Catálogo
//   /simulaciones/<nombre>/    => Modo Laboratorio de la simulación sim-<nombre>
//   /guias/<nombre>/           => Su guía docente
//   /sobre-el-proyecto/        => Página "Sobre el proyecto"
//   /aviso-legal/              => Aviso legal y privacidad

export const SITE_URL = 'https://simulaciencia.es/';

const slug = (simId) => simId.replace(/^sim-/, '');

export const simPath = (simId) => `/simulaciones/${slug(simId)}/`;
export const guidePath = (simId) => `/guias/${slug(simId)}/`;
export const PAGE_PATHS = { about: '/sobre-el-proyecto/', legal: '/aviso-legal/' };

export const absoluteUrl = (path) => SITE_URL + path.replace(/^\//, '');

// Ruta => { simId, guideId, page }. Lo que no reconoce cae en el catálogo.
export function parsePath(pathname) {
  const path = pathname.endsWith('/') ? pathname : pathname + '/';
  const m = path.match(/^\/(simulaciones|guias)\/([a-z0-9-]+)\/$/);
  const page = Object.keys(PAGE_PATHS).find((k) => PAGE_PATHS[k] === path) || null;
  return {
    simId: m?.[1] === 'simulaciones' ? `sim-${m[2]}` : null,
    guideId: m?.[1] === 'guias' ? `sim-${m[2]}` : null,
    page,
  };
}
