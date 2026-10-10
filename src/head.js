// <head> por ruta: título, descripción, URL canónica, vista previa al compartir
// y datos estructurados. Es lo que leen Google, la pestaña del navegador y
// WhatsApp o Classroom. scripts/prerender.mjs guarda el resultado en el HTML de
// cada página; al cargarla, este módulo reutiliza esas etiquetas.
// Además, el <head> enlaza la versión de cada idioma (hreflang).
import { simPath, guidePath, homePath, pagePath, absoluteUrl, translatedPath, LANGS } from './paths.js';
import { simulations, courseLabel, simTitle, simDescription, tagLabel } from './data/simulations.js';

export const SITE = 'SimulaCiencia';
const AUTHOR = { '@type': 'Person', name: 'Juan Ramón Grijota' };
const LICENSE = {
  es: 'https://creativecommons.org/licenses/by-sa/4.0/deed.es',
  en: 'https://creativecommons.org/licenses/by-sa/4.0/deed.en',
  ca: 'https://creativecommons.org/licenses/by-sa/4.0/deed.ca',
};

// Los del catálogo (en español, iguales que en index.html). No se leen del
// documento porque la página pregenerada de una guía o simulación ya trae los suyos.
const DEFAULT_TITLE = {
  es: `${SITE} · Simulaciones de Física y Química`,
  en: `${SITE} · Physics and Chemistry Simulations`,
  ca: `${SITE} · Simulacions de Física i Química`,
};
const DEFAULT_DESCRIPTION = {
  es: 'Catálogo de simulaciones interactivas de Física y Química para el aula. Acceso inmediato, sin instalación.',
  en: 'Interactive Physics and Chemistry simulations for the classroom. Free, instant access, nothing to install.',
  ca: "Catàleg de simulacions interactives de Física i Química per a l'aula. Accés immediat, sense instal·lació.",
};
const DEFAULT_OG_DESCRIPTION = {
  es: 'Simulaciones interactivas y gratuitas de Física y Química para ESO y Bachillerato. Sin instalación ni registro.',
  en: 'Free interactive Physics and Chemistry simulations for secondary school. No installation or sign-up.',
  ca: 'Simulacions interactives i gratuïtes de Física i Química per a ESO i Batxillerat. Sense instal·lació ni registre.',
};
const OG_LOCALE = { es: 'es_ES', en: 'en_GB', ca: 'ca_ES' };
const KIND = { es: 'Simulación interactiva', en: 'Interactive simulation', ca: 'Simulació interactiva' };

const metaDescription = document.querySelector('meta[name="description"]');

const og = (prop) => document.querySelector(`meta[property="og:${prop}"]`);

function headElement(selector, tag, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = Object.assign(document.createElement(tag), attrs);
    document.head.append(el);
  }
  return el;
}

const canonical = headElement('link[rel="canonical"]', 'link', { rel: 'canonical' });
const ogLocale = og('locale');
const jsonLd = headElement('#ld-route', 'script', { id: 'ld-route', type: 'application/ld+json' });

const simUrl = (id, lang = 'es') => absoluteUrl(simPath(id, lang));
const guideUrl = (id) => absoluteUrl(guidePath(id));

// Cursos en los que la guía propone la simulación (2.º ESO, 1.º Bach.…).
function levels(sim, lang = 'es') {
  return sim.courses.map((c) => courseLabel(c, lang));
}

function simResource(sim, lang = 'es') {
  return {
    '@type': 'LearningResource',
    name: simTitle(sim, lang),
    description: simDescription(sim, lang),
    url: simUrl(sim.id, lang),
    learningResourceType: KIND[lang],
    educationalLevel: levels(sim, lang),
    about: sim.tags.filter((t) => t !== 'ESO' && t !== 'Bachillerato').map((t) => tagLabel(t, lang)),
    inLanguage: lang,
    isAccessibleForFree: true,
    author: AUTHOR,
    license: LICENSE[lang],
  };
}

const PAGES = {
  about: { es: `Sobre el proyecto · ${SITE}`, en: `About the project · ${SITE}`, ca: `Sobre el projecte · ${SITE}` },
  legal: { es: `Aviso legal y privacidad · ${SITE}` },
};

// <link rel="alternate" hreflang> de las páginas que existen en todos los idiomas
// (catálogo, simulaciones y «Sobre el proyecto»); x-default es la española.
function setAlternates(route) {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((l) => l.remove());
  const paths = LANGS.map((l) => [l, translatedPath(route, l)]);
  if (paths.some(([, p]) => !p)) return;
  for (const [l, p] of [...paths, ['x-default', paths[0][1]]]) {
    document.head.append(Object.assign(document.createElement('link'), { rel: 'alternate', hreflang: l, href: absoluteUrl(p) }));
  }
}

function set(lang, title, description, url, data) {
  document.title = title;
  metaDescription.content = description;
  canonical.href = url;
  og('url').content = url;
  og('title').content = title;
  og('description').content = description === DEFAULT_DESCRIPTION[lang] ? DEFAULT_OG_DESCRIPTION[lang] : description;
  ogLocale.content = OG_LOCALE[lang];
  document.head.querySelectorAll('meta[property="og:locale:alternate"]').forEach((m) => m.remove());
  for (const l of LANGS.filter((l) => l !== lang)) {
    const m = document.createElement('meta');
    m.setAttribute('property', 'og:locale:alternate');
    m.content = OG_LOCALE[l];
    ogLocale.after(m);
  }
  jsonLd.textContent = JSON.stringify({ '@context': 'https://schema.org', ...data });
}

export function updateHead({ sim, guideSim, page, lang = 'es' }) {
  setAlternates({ simId: sim?.id, guideId: guideSim?.id, page });
  if (guideSim) {
    return set(
      'es',
      `Guía docente: ${guideSim.title} · ${SITE}`,
      `Guía para usar en clase la simulación «${guideSim.title}»: cursos y saberes básicos, secuencia de ` +
        'explicación, concepciones alternativas y simplificaciones. Descarga en PDF, Word y LibreOffice.',
      guideUrl(guideSim.id),
      {
        '@type': 'LearningResource',
        name: `Guía docente: ${guideSim.title}`,
        url: guideUrl(guideSim.id),
        learningResourceType: 'Guía didáctica',
        educationalLevel: levels(guideSim),
        audience: { '@type': 'EducationalAudience', educationalRole: 'teacher' },
        inLanguage: 'es',
        isAccessibleForFree: true,
        author: AUTHOR,
        license: LICENSE.es,
        isBasedOn: simUrl(guideSim.id),
      },
    );
  }
  if (sim) {
    return set(lang, `${simTitle(sim, lang)} · ${KIND[lang]} · ${SITE}`, simDescription(sim, lang), simUrl(sim.id, lang), simResource(sim, lang));
  }
  if (PAGES[page]) {
    const url = absoluteUrl(pagePath(page, lang));
    return set(lang, PAGES[page][lang], DEFAULT_DESCRIPTION[lang], url, { '@type': 'WebPage', url, inLanguage: lang });
  }
  const home = absoluteUrl(homePath(lang));
  set(lang, DEFAULT_TITLE[lang], DEFAULT_DESCRIPTION[lang], home, {
    '@type': 'CollectionPage',
    name: DEFAULT_TITLE[lang],
    url: home,
    inLanguage: lang,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: simulations.map((s, i) => ({ '@type': 'ListItem', position: i + 1, item: simResource(s, lang) })),
    },
  });
}

// La descripción de cada guía es su «Ficha rápida», que solo se conoce al cargarla.
export function setDescription(text) {
  if (!text) return;
  metaDescription.content = text;
  og('description').content = text;
}
