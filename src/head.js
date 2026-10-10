// <head> por ruta: título, descripción, URL canónica y datos estructurados.
// Es lo que leen Google y la pestaña del navegador. La URL canónica se fija por
// JavaScript (y no en index.html) porque todas las rutas comparten ese archivo.
import { SITE_URL } from './guides/shared.js';
import { simulations, courseLabel } from './data/simulations.js';

export const SITE = 'SimulaCiencia';
const AUTHOR = { '@type': 'Person', name: 'Juan Ramón Grijota' };
const LICENSE = 'https://creativecommons.org/licenses/by-sa/4.0/deed.es';

const DEFAULT_TITLE = document.title;
const metaDescription = document.querySelector('meta[name="description"]');
const DEFAULT_DESCRIPTION = metaDescription.content;

const canonical = document.createElement('link');
canonical.rel = 'canonical';
document.head.append(canonical);

const jsonLd = document.createElement('script');
jsonLd.type = 'application/ld+json';
document.head.append(jsonLd);

export const simUrl = (id) => `${SITE_URL}?sim=${id}`;
export const guideUrl = (id) => `${SITE_URL}?guia=${id}`;

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
  about: { title: `Sobre el proyecto · ${SITE}`, url: `${SITE_URL}?page=about` },
  legal: { title: `Aviso legal y privacidad · ${SITE}`, url: `${SITE_URL}?page=legal` },
};

function set(title, description, url, data) {
  document.title = title;
  metaDescription.content = description;
  canonical.href = url;
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
  if (text) metaDescription.content = text;
}
