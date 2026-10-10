// <head> por ruta: título, descripción, URL canónica, vista previa al compartir
// y datos estructurados. Es lo que leen Google, la pestaña del navegador y
// WhatsApp o Classroom. scripts/prerender.mjs guarda el resultado en el HTML de
// cada página; al cargarla, este módulo reutiliza esas etiquetas.
import { SITE_URL, simPath, guidePath, PAGE_PATHS, absoluteUrl } from './paths.js';
import { simulations, courseLabel } from './data/simulations.js';

export const SITE = 'SimulaCiencia';
const AUTHOR = { '@type': 'Person', name: 'Juan Ramón Grijota' };
const LICENSE = 'https://creativecommons.org/licenses/by-sa/4.0/deed.es';

// Los del catálogo, iguales que en index.html. No se leen del documento porque
// la página pregenerada de una guía o simulación ya trae los suyos.
const DEFAULT_TITLE = `${SITE} · Simulaciones de Física y Química`;
const DEFAULT_DESCRIPTION =
  'Catálogo de simulaciones interactivas de Física y Química para el aula. Acceso inmediato, sin instalación.';
const DEFAULT_OG_DESCRIPTION =
  'Simulaciones interactivas y gratuitas de Física y Química para ESO y Bachillerato. Sin instalación ni registro.';

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
const jsonLd = headElement('#ld-route', 'script', { id: 'ld-route', type: 'application/ld+json' });

const simUrl = (id) => absoluteUrl(simPath(id));
const guideUrl = (id) => absoluteUrl(guidePath(id));

// Cursos en los que la guía propone la simulación (2.º ESO, 1.º Bach.…).
function levels(sim) {
  return sim.courses.map(courseLabel);
}

function simResource(sim) {
  return {
    '@type': 'LearningResource',
    name: sim.title,
    description: sim.description,
    url: simUrl(sim.id),
    learningResourceType: 'Simulación interactiva',
    educationalLevel: levels(sim),
    about: sim.tags.filter((t) => t !== 'ESO' && t !== 'Bachillerato'),
    inLanguage: 'es',
    isAccessibleForFree: true,
    author: AUTHOR,
    license: LICENSE,
  };
}

const PAGES = {
  about: { title: `Sobre el proyecto · ${SITE}`, url: absoluteUrl(PAGE_PATHS.about) },
  legal: { title: `Aviso legal y privacidad · ${SITE}`, url: absoluteUrl(PAGE_PATHS.legal) },
};

function set(title, description, url, data) {
  document.title = title;
  metaDescription.content = description;
  canonical.href = url;
  og('url').content = url;
  og('title').content = title;
  og('description').content = description === DEFAULT_DESCRIPTION ? DEFAULT_OG_DESCRIPTION : description;
  jsonLd.textContent = JSON.stringify({ '@context': 'https://schema.org', ...data });
}

export function updateHead({ sim, guideSim, page }) {
  if (guideSim) {
    return set(
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
        license: LICENSE,
        isBasedOn: simUrl(guideSim.id),
      },
    );
  }
  if (sim) return set(`${sim.title} · Simulación interactiva · ${SITE}`, sim.description, simUrl(sim.id), simResource(sim));
  if (PAGES[page]) return set(PAGES[page].title, DEFAULT_DESCRIPTION, PAGES[page].url, { '@type': 'WebPage', url: PAGES[page].url });
  set(DEFAULT_TITLE, DEFAULT_DESCRIPTION, SITE_URL, {
    '@type': 'CollectionPage',
    name: DEFAULT_TITLE,
    url: SITE_URL,
    inLanguage: 'es',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: simulations.map((s, i) => ({ '@type': 'ListItem', position: i + 1, item: simResource(s) })),
    },
  });
}

// La descripción de cada guía es su «Ficha rápida», que solo se conoce al cargarla.
export function setDescription(text) {
  if (!text) return;
  metaDescription.content = text;
  og('description').content = text;
}
