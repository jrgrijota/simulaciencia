// Direcciones públicas de cada página. Las usan el navegador (router, enlaces,
// <head>) y el build (sitemap, páginas pregeneradas), así que no tocan el DOM.
//
//   /                          => Catálogo
//   /simulaciones/<nombre>/    => Modo Laboratorio de la simulación sim-<nombre>
//   /guias/<nombre>/           => Su guía docente
//   /sobre-el-proyecto/        => Página "Sobre el proyecto"
//   /aviso-legal/              => Aviso legal y privacidad
//
// En inglés y en catalán (interfaz y simulaciones; las guías y el aviso legal solo
// existen en español):
//
//   /en/                       /ca/                          => Catálogo
//   /en/simulations/<nombre>/  /ca/simulacions/<nombre>/     => Modo Laboratorio
//   /en/about/                 /ca/sobre-el-projecte/        => Sobre el proyecto

export const SITE_URL = 'https://simulaciencia.es/';
export const LANGS = ['es', 'en', 'ca'];

const slug = (simId) => simId.replace(/^sim-/, '');

const HOME = { es: '/', en: '/en/', ca: '/ca/' };
const SIM_DIR = { es: '/simulaciones/', en: '/en/simulations/', ca: '/ca/simulacions/' };

export const homePath = (lang = 'es') => HOME[lang];
export const simPath = (simId, lang = 'es') => `${SIM_DIR[lang]}${slug(simId)}/`;
export const guidePath = (simId) => `/guias/${slug(simId)}/`;
export const PAGE_PATHS = { about: '/sobre-el-proyecto/', legal: '/aviso-legal/' };
const PAGES = {
  es: PAGE_PATHS,
  en: { about: '/en/about/' },
  ca: { about: '/ca/sobre-el-projecte/' },
};

// Páginas fijas de un idioma (para el sitemap y las páginas pregeneradas).
export const pagePaths = (lang) => Object.values(PAGES[lang]);

// Ruta de una página fija en un idioma; null si no existe en él (el aviso legal fuera del español).
export const pagePath = (page, lang = 'es') => PAGES[lang][page] || null;

export const absoluteUrl = (path) => SITE_URL + path.replace(/^\//, '');

// Ruta => { lang, simId, guideId, page }. Lo que no reconoce cae en el catálogo
// de su idioma.
export function parsePath(pathname) {
  const path = pathname.endsWith('/') ? pathname : pathname + '/';
  const lang = LANGS.find((l) => l !== 'es' && path.startsWith(HOME[l])) || 'es';
  const page = Object.keys(PAGES[lang]).find((k) => PAGES[lang][k] === path) || null;
  if (lang !== 'es') {
    const slug = path.startsWith(SIM_DIR[lang]) ? path.slice(SIM_DIR[lang].length).match(/^([a-z0-9-]+)\/$/) : null;
    return { lang, simId: slug ? `sim-${slug[1]}` : null, guideId: null, page };
  }
  const m = path.match(/^\/(simulaciones|guias)\/([a-z0-9-]+)\/$/);
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
