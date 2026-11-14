// Direcciones públicas de cada página. Las usan el navegador (router, enlaces,
// <head>) y el build (sitemap, páginas pregeneradas), así que no tocan el DOM.
//
//   /                          => Catálogo
//   /simulaciones/<nombre>/    => Modo Laboratorio de la simulación sim-<nombre>
//   /guias/<nombre>/           => Su guía docente
//   /guiones/<nombre>/         => Guion del alumnado de una práctica de laboratorio (solo en español)
//   /fichas/<nombre>/          => Ficha de actividades del alumnado de una simulación
//   /sobre-el-proyecto/        => Página "Sobre el proyecto"
//   /aviso-legal/              => Aviso legal y privacidad
//   /cursos/<curso>/           => Simulaciones y prácticas de un curso (2-eso, 1-bachillerato…)
//   /temas/<tema>/             => Simulaciones y prácticas de un bloque temático
//
// En inglés, catalán, euskera y gallego (interfaz y simulaciones; el aviso legal solo
// existe en español y las guías, en español e inglés):
//
//   /en/                       /ca/                       /eu/                        /gl/                      => Catálogo
//   /en/simulations/<nombre>/  /ca/simulacions/<nombre>/  /eu/simulazioak/<nombre>/   /gl/simulacions/<nombre>/ => Modo Laboratorio
//   /en/guides/<nombre>/                                                                                       => Guía docente
//   /en/worksheets/<nombre>/   /ca/fitxes/<nombre>/       /eu/fitxak/<nombre>/        /gl/fichas/<nombre>/      => Ficha de actividades
//   /en/about/                 /ca/sobre-el-projecte/     /eu/proiektuari-buruz/      /gl/sobre-o-proxecto/     => Sobre el proyecto
//   /en/year-groups/<curso>/   /ca/cursos/<curso>/        /eu/mailak/<curso>/         /gl/cursos/<curso>/       => Por curso
//   /en/topics/<tema>/         /ca/temes/<tema>/          /eu/gaiak/<tema>/           /gl/temas/<tema>/         => Por tema
// (el nombre del curso y del tema va traducido: COURSE_SLUGS y TOPIC_SLUGS)

import { getSimulationById, availableIn, isPractical, simulationsIn, COURSES, TOPICS } from './data/simulations.js';

export const SITE_URL = 'https://simulaciencia.es/';
export const LANGS = ['es', 'en', 'ca', 'eu', 'gl'];

const slug = (simId) => simId.replace(/^sim-/, '');

const HOME = { es: '/', en: '/en/', ca: '/ca/', eu: '/eu/', gl: '/gl/' };
const SIM_DIR = { es: '/simulaciones/', en: '/en/simulations/', ca: '/ca/simulacions/', eu: '/eu/simulazioak/', gl: '/gl/simulacions/' };

export const homePath = (lang = 'es') => HOME[lang];
export const simPath = (simId, lang = 'es') => `${SIM_DIR[lang]}${slug(simId)}/`;

// Idiomas con guías docentes (guias/*.md en español, guias/en/*.md en inglés).
export const GUIDE_LANGS = ['es', 'en'];
const GUIDE_DIR = { es: '/guias/', en: '/en/guides/' };
// Idioma de la guía que se enlaza desde una página: la suya si existe, si no la española.
export const guideLang = (lang) => (GUIDE_DIR[lang] ? lang : 'es');
export const guidePath = (simId, lang = 'es') => `${GUIDE_DIR[guideLang(lang)]}${slug(simId)}/`;
// Documentos del alumnado: guiones de las prácticas (guiones/*.md, solo en español)
// y fichas de actividades de las simulaciones (fichas/*.md y su traducción en
// fichas/<idioma>/*.md, en los cinco idiomas). En el código, los dos son «guion»;
// la carpeta y la dirección dependen del tipo.
export const STUDENT_DOC_DIRS = ['guiones', 'fichas'];
// Idiomas con fichas de actividades. Cada ficha tiene que existir en todos.
export const FICHA_LANGS = LANGS;
const FICHA_DIR = { es: '/fichas/', en: '/en/worksheets/', ca: '/ca/fitxes/', eu: '/eu/fitxak/', gl: '/gl/fichas/' };
const isPracticalId = (simId) => {
  const sim = getSimulationById(simId);
  return !sim || isPractical(sim);
};
export const guionPath = (simId, lang = 'es') =>
  isPracticalId(simId) ? `/guiones/${slug(simId)}/` : `${FICHA_DIR[lang] || FICHA_DIR.es}${slug(simId)}/`;
// Páginas por curso y por tema: reúnen las simulaciones y prácticas de un curso o de
// un bloque temático (TOPICS), para que quien busca «simulaciones de 3.º ESO» o
// «simulaciones del átomo» llegue a una página que responde a eso. Solo existen en
// un idioma si tienen algo que enseñar en él.
const COURSE_DIR = { es: '/cursos/', en: '/en/year-groups/', ca: '/ca/cursos/', eu: '/eu/mailak/', gl: '/gl/cursos/' };
const TOPIC_DIR = { es: '/temas/', en: '/en/topics/', ca: '/ca/temes/', eu: '/eu/gaiak/', gl: '/gl/temas/' };
export const COURSE_SLUGS = {
  '2ESO': { es: '2-eso', en: 'year-9', ca: '2n-eso', eu: 'dbh-2', gl: '2-eso' },
  '3ESO': { es: '3-eso', en: 'year-10', ca: '3r-eso', eu: 'dbh-3', gl: '3-eso' },
  '4ESO': { es: '4-eso', en: 'year-11', ca: '4t-eso', eu: 'dbh-4', gl: '4-eso' },
  '1BACH': { es: '1-bachillerato', en: 'year-12', ca: '1r-batxillerat', eu: 'batxilergoa-1', gl: '1-bacharelato' },
  '2BACH': { es: '2-bachillerato', en: 'year-13', ca: '2n-batxillerat', eu: 'batxilergoa-2', gl: '2-bacharelato' },
};
export const TOPIC_SLUGS = {
  fuerzas: { es: 'fuerzas-y-gravitacion', en: 'forces-and-gravity', ca: 'forces-i-gravitacio', eu: 'indarrak-eta-grabitazioa', gl: 'forzas-e-gravitacion' },
  energia: { es: 'energia-y-electricidad', en: 'energy-and-electricity', ca: 'energia-i-electricitat', eu: 'energia-eta-elektrizitatea', gl: 'enerxia-e-electricidade' },
  ondas: { es: 'ondas-y-luz', en: 'waves-and-light', ca: 'ones-i-llum', eu: 'uhinak-eta-argia', gl: 'ondas-e-luz' },
  materia: { es: 'materia-y-estados', en: 'matter-and-states', ca: 'materia-i-estats', eu: 'materia-eta-egoerak', gl: 'materia-e-estados' },
  atomo: { es: 'el-atomo', en: 'the-atom', ca: 'l-atom', eu: 'atomoa', gl: 'o-atomo' },
  reacciones: { es: 'enlaces-y-reacciones', en: 'bonds-and-reactions', ca: 'enllacos-i-reaccions', eu: 'loturak-eta-erreakzioak', gl: 'enlaces-e-reaccions' },
};
// Simulaciones y prácticas de una página por curso o por tema, en ese idioma.
export const courseSims = (courseId, lang = 'es') => simulationsIn(lang).filter((s) => s.courses.includes(courseId));
export const topicSims = (topicId, lang = 'es') => {
  const topic = TOPICS.find((t) => t.id === topicId);
  return topic ? simulationsIn(lang).filter((s) => topic.sims.includes(s.id)) : [];
};
export const coursePath = (courseId, lang = 'es') =>
  COURSE_SLUGS[courseId] && courseSims(courseId, lang).length ? `${COURSE_DIR[lang]}${COURSE_SLUGS[courseId][lang]}/` : null;
export const topicPath = (topicId, lang = 'es') =>
  TOPIC_SLUGS[topicId] && topicSims(topicId, lang).length ? `${TOPIC_DIR[lang]}${TOPIC_SLUGS[topicId][lang]}/` : null;
// Todas las páginas por curso y por tema de un idioma (sitemap y páginas pregeneradas).
export const collectionPaths = (lang = 'es') =>
  [...COURSES.map((c) => coursePath(c.id, lang)), ...TOPICS.map((t) => topicPath(t.id, lang))].filter(Boolean);
const bySlug = (slugs, lang, value) => Object.keys(slugs).find((id) => slugs[id][lang] === value) || null;

export const PAGE_PATHS = { about: '/sobre-el-proyecto/', legal: '/aviso-legal/' };
const PAGES = {
  es: PAGE_PATHS,
  en: { about: '/en/about/' },
  ca: { about: '/ca/sobre-el-projecte/' },
  eu: { about: '/eu/proiektuari-buruz/' },
  gl: { about: '/gl/sobre-o-proxecto/' },
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
    const under = (dir) => (dir && path.startsWith(dir) ? path.slice(dir.length).match(/^([a-z0-9-]+)\/$/)?.[1] : null);
    const sim = under(SIM_DIR[lang]);
    const guide = under(GUIDE_DIR[lang]);
    const ficha = under(FICHA_DIR[lang]);
    const courseId = bySlug(COURSE_SLUGS, lang, under(COURSE_DIR[lang]));
    const topicId = bySlug(TOPIC_SLUGS, lang, under(TOPIC_DIR[lang]));
    return { lang, simId: sim ? `sim-${sim}` : null, guideId: guide ? `sim-${guide}` : null, guionId: ficha ? `sim-${ficha}` : null, courseId, topicId, page };
  }
  const m = path.match(/^\/(simulaciones|guias|guiones|fichas|cursos|temas)\/([a-z0-9-]+)\/$/);
  return {
    lang,
    simId: m?.[1] === 'simulaciones' ? `sim-${m[2]}` : null,
    guideId: m?.[1] === 'guias' ? `sim-${m[2]}` : null,
    guionId: m?.[1] === 'guiones' || m?.[1] === 'fichas' ? `sim-${m[2]}` : null,
    courseId: m?.[1] === 'cursos' ? bySlug(COURSE_SLUGS, 'es', m[2]) : null,
    topicId: m?.[1] === 'temas' ? bySlug(TOPIC_SLUGS, 'es', m[2]) : null,
    page,
  };
}

// La misma página en el otro idioma, o null si no existe (el aviso legal fuera del
// español, las guías fuera del español y el inglés, y las prácticas y sus guiones
// fuera del español; las fichas de actividades están en todos).
// Sirve para el selector de idioma y para las etiquetas hreflang.
export function translatedPath({ simId, guideId, guionId, courseId, topicId, page }, lang) {
  if (courseId) return coursePath(courseId, lang);
  if (topicId) return topicPath(topicId, lang);
  if (guionId) return isPracticalId(guionId) ? (lang === 'es' ? guionPath(guionId) : null) : guionPath(guionId, lang);
  const sim = getSimulationById(simId || guideId);
  if (sim && !availableIn(sim, lang)) return null;
  if (guideId) return GUIDE_DIR[lang] ? guidePath(guideId, lang) : null;
  if (simId) return simPath(simId, lang);
  if (page) return pagePath(page, lang);
  return homePath(lang);
}
