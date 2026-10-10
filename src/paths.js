// Direcciones públicas de cada página. Las usan el navegador (router, enlaces,
// <head>) y el build (sitemap, páginas pregeneradas), así que no tocan el DOM.
//
//   /                          => Catálogo
//   /simulaciones/<nombre>/    => Modo Laboratorio de la simulación sim-<nombre>
//   /guias/<nombre>/           => Su guía docente
//   /sobre-el-proyecto/        => Página "Sobre el proyecto"
//   /aviso-legal/              => Aviso legal y privacidad
//
// En inglés (interfaz y simulaciones; las guías y el aviso legal solo existen en español):
//
//   /en/                       => Catálogo
//   /en/simulations/<nombre>/  => Modo Laboratorio
//   /en/about/                 => Sobre el proyecto

export const SITE_URL = 'https://simulaciencia.es/';
export const LANGS = ['es', 'en'];

const slug = (simId) => simId.replace(/^sim-/, '');

const HOME = { es: '/', en: '/en/' };
const SIM_DIR = { es: '/simulaciones/', en: '/en/simulations/' };

export const homePath = (lang = 'es') => HOME[lang];
export const simPath = (simId, lang = 'es') => `${SIM_DIR[lang]}${slug(simId)}/`;
export const guidePath = (simId) => `/guias/${slug(simId)}/`;
export const PAGE_PATHS = { about: '/sobre-el-proyecto/', legal: '/aviso-legal/' };
export const PAGE_PATHS_EN = { about: '/en/about/' };

// Ruta de una página fija en un idioma; null si no existe en él (el aviso legal en inglés).
export const pagePath = (page, lang = 'es') => (lang === 'en' ? PAGE_PATHS_EN : PAGE_PATHS)[page] || null;

export const absoluteUrl = (path) => SITE_URL + path.replace(/^\//, '');

// Ruta => { lang, simId, guideId, page }. Lo que no reconoce cae en el catálogo
// de su idioma.
export function parsePath(pathname) {
  const path = pathname.endsWith('/') ? pathname : pathname + '/';
  const lang = path.startsWith('/en/') ? 'en' : 'es';
  if (lang === 'en') {
    const m = path.match(/^\/en\/simulations\/([a-z0-9-]+)\/$/);
    const page = Object.keys(PAGE_PATHS_EN).find((k) => PAGE_PATHS_EN[k] === path) || null;
    return { lang, simId: m ? `sim-${m[1]}` : null, guideId: null, page };
  }
  const m = path.match(/^\/(simulaciones|guias)\/([a-z0-9-]+)\/$/);
  const page = Object.keys(PAGE_PATHS).find((k) => PAGE_PATHS[k] === path) || null;
  return {
    lang,
    simId: m?.[1] === 'simulaciones' ? `sim-${m[2]}` : null,
    guideId: m?.[1] === 'guias' ? `sim-${m[2]}` : null,
    page,
  };
}

// La misma página en el otro idioma, o null si no existe (guías y aviso legal).
// Sirve para el selector de idioma y para las etiquetas hreflang.
export function translatedPath({ simId, guideId, page }, lang) {
  if (guideId) return null;
  if (simId) return simPath(simId, lang);
  if (page) return pagePath(page, lang);
  return homePath(lang);
}
