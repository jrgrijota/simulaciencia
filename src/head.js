// <head> por ruta: título, descripción, URL canónica, vista previa al compartir
// y datos estructurados. Es lo que leen Google, la pestaña del navegador y
// WhatsApp o Classroom. scripts/prerender.mjs guarda el resultado en el HTML de
// cada página; al cargarla, este módulo reutiliza esas etiquetas.
// Además, el <head> enlaza la versión de cada idioma (hreflang).
import { simPath, guidePath, guionPath, homePath, pagePath, absoluteUrl, translatedPath, coursePath, topicPath, LANGS, GUIDE_LANGS } from './paths.js';
import { collectionInfo } from './data/collections.js';
import { thumbMarkup } from './components/thumbs.js';
import { simulationsIn, courseLabel, simTitle, simDescription, tagLabel, isPractical, studentDoc, TOPICS } from './data/simulations.js';

export const SITE = 'SimulaCiencia';
// La ficha completa del autor y del sitio está en index.html (@id #autor y #web).
const AUTHOR = { '@type': 'Person', '@id': 'https://simulaciencia.es/#autor', name: 'Juan Ramón Grijota' };
const WEBSITE = { '@id': 'https://simulaciencia.es/#web' };
const LICENSE = {
  es: 'https://creativecommons.org/licenses/by-sa/4.0/deed.es',
  en: 'https://creativecommons.org/licenses/by-sa/4.0/deed.en',
  ca: 'https://creativecommons.org/licenses/by-sa/4.0/deed.ca',
  eu: 'https://creativecommons.org/licenses/by-sa/4.0/deed.eu',
  gl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.gl',
};

// Los del catálogo (en español, iguales que en index.html). No se leen del
// documento porque la página pregenerada de una guía o simulación ya trae los suyos.
const DEFAULT_TITLE = {
  es: `${SITE} · Simulaciones de Física y Química`,
  en: `${SITE} · Physics and Chemistry Simulations`,
  ca: `${SITE} · Simulacions de Física i Química`,
  eu: `${SITE} · Fisika eta Kimikako simulazioak`,
  gl: `${SITE} · Simulacións de Física e Química`,
};
const DEFAULT_DESCRIPTION = {
  es: 'Catálogo de simulaciones interactivas de Física y Química para el aula. Acceso inmediato, sin instalación.',
  en: 'Interactive Physics and Chemistry simulations for the classroom. Free, instant access, nothing to install.',
  ca: "Catàleg de simulacions interactives de Física i Química per a l'aula. Accés immediat, sense instal·lació.",
  eu: 'Gelarako Fisika eta Kimikako simulazio interaktiboen katalogoa. Berehalako sarbidea, instalaziorik gabe.',
  gl: 'Catálogo de simulacións interactivas de Física e Química para a aula. Acceso inmediato, sen instalación.',
};
const DEFAULT_OG_DESCRIPTION = {
  es: 'Simulaciones interactivas y gratuitas de Física y Química para ESO y Bachillerato. Sin instalación ni registro.',
  en: 'Free interactive Physics and Chemistry simulations for secondary school. No installation or sign-up.',
  ca: 'Simulacions interactives i gratuïtes de Física i Química per a ESO i Batxillerat. Sense instal·lació ni registre.',
  eu: 'Fisika eta Kimikako simulazio interaktibo eta doakoak DBHrako eta Batxilergorako. Instalaziorik eta erregistrorik gabe.',
  gl: 'Simulacións interactivas e gratuítas de Física e Química para ESO e Bacharelato. Sen instalación nin rexistro.',
};
const ABOUT_DESCRIPTION = {
  es: 'Quién hace SimulaCiencia y por qué: un profesor de Física y Química de la Comunidad de Madrid que crea simulaciones libres y gratuitas para el aula.',
  en: 'Who makes SimulaCiencia and why: a Physics and Chemistry teacher in Madrid creating free, open simulations for the classroom.',
  ca: "Qui fa SimulaCiencia i per què: un professor de Física i Química de la Comunitat de Madrid que crea simulacions lliures i gratuïtes per a l'aula.",
  eu: 'Nork egiten du SimulaCiencia eta zergatik: Madrilgo Erkidegoko Fisika eta Kimikako irakasle bat, gelarako simulazio libre eta doakoak sortzen dituena.',
  gl: 'Quen fai SimulaCiencia e por que: un profesor de Física e Química da Comunidade de Madrid que crea simulacións libres e gratuítas para a aula.',
};
const OG_LOCALE = { es: 'es_ES', en: 'en_GB', ca: 'ca_ES', eu: 'eu_ES', gl: 'gl_ES' };
const PRACTICAL_KIND = 'Práctica de laboratorio simulada';
const FICHA_DESCRIPTION = {
  es: (t) => `Ficha de actividades para el alumnado con la simulación «${t}»: predice, observa y explica, con enlaces que abren la simulación ya preparada. Descarga en Word y LibreOffice para adaptarla, o en PDF.`,
  en: (t) => `Activity worksheet for students with the “${t}” simulation: predict, observe and explain, with links that open the simulation already set up. Download as Word or LibreOffice to adapt it, or as PDF.`,
  ca: (t) => `Fitxa d’activitats per a l’alumnat amb la simulació «${t}»: prediu, observa i explica, amb enllaços que obren la simulació ja preparada. Descàrrega en Word i LibreOffice per adaptar-la, o en PDF.`,
  eu: (t) => `Ikasleentzako jarduera-fitxa, «${t}» simulazioarekin: iragarri, behatu eta azaldu, simulazioa prestatuta irekitzen duten estekekin. Deskargatu Word edo LibreOffice formatuan egokitzeko, edo PDFn.`,
  gl: (t) => `Ficha de actividades para o alumnado coa simulación «${t}»: predí, observa e explica, con ligazóns que abren a simulación xa preparada. Descarga en Word e LibreOffice para adaptala, ou en PDF.`,
};
const KIND = { es: 'Simulación interactiva', en: 'Interactive simulation', ca: 'Simulació interactiva', eu: 'Simulazio interaktiboa', gl: 'Simulación interactiva' };

const metaDescription = document.querySelector('meta[name="description"]');

// Vista previa al compartir: la imagen de la simulación (public/og/<nombre>.png,
// generada con `npm run og` desde su miniatura) o la general de la web.
// (El texto alternativo general es el de index.html; no se lee del documento porque
// la página pregenerada de una simulación ya trae el suyo.)
const DEFAULT_IMAGE = { url: absoluteUrl('/og-image.png'), alt: 'SimulaCiencia: simulaciones interactivas de Física y Química para el aula' };
const simImage = (sim, lang) =>
  thumbMarkup(sim.id) ? { url: absoluteUrl(`/og/${sim.id.replace(/^sim-/, '')}.png`), alt: `${simTitle(sim, lang)} · ${SITE}` } : DEFAULT_IMAGE;

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
const guideUrl = (id, lang = 'es') => absoluteUrl(guidePath(id, lang));

// Cursos en los que la guía propone la simulación (2.º ESO, 1.º Bach.…).
function levels(sim, lang = 'es') {
  return sim.courses.map((c) => courseLabel(c, lang));
}

// Edad del alumnado de esos cursos, en números: los repositorios de recursos
// educativos de otros países (OER Commons, Merlot…) no entienden «2.º ESO».
const AGES = { '2ESO': [13, 14], '3ESO': [14, 15], '4ESO': [15, 16], '1BACH': [16, 17], '2BACH': [17, 18] };
function ageRange(sim) {
  const ages = sim.courses.flatMap((c) => AGES[c] ?? []);
  return ages.length ? `${Math.min(...ages)}-${Math.max(...ages)}` : undefined;
}

function simResource(sim, lang = 'es') {
  return {
    '@type': 'LearningResource',
    name: simTitle(sim, lang),
    description: simDescription(sim, lang),
    url: simUrl(sim.id, lang),
    learningResourceType: isPractical(sim) ? PRACTICAL_KIND : KIND[lang],
    educationalLevel: levels(sim, lang),
    typicalAgeRange: ageRange(sim),
    interactivityType: 'active',
    audience: [
      { '@type': 'EducationalAudience', educationalRole: 'student' },
      { '@type': 'EducationalAudience', educationalRole: 'teacher' },
    ],
    about: sim.tags.filter((t) => t !== 'ESO' && t !== 'Bachillerato').map((t) => tagLabel(t, lang)),
    teaches: TOPICS.filter((t) => t.sims.includes(sim.id)).map((t) => t.label[lang] ?? t.label.es),
    inLanguage: lang,
    isAccessibleForFree: true,
    author: AUTHOR,
    license: LICENSE[lang],
    isPartOf: WEBSITE,
    image: simImage(sim, lang).url,
  };
}

// Migas de pan (Inicio › Simulación › Guía): Google las muestra en el resultado en
// lugar de la dirección. `trail`: [nombre, url] después de la portada.
const HOME_NAME = { es: 'Inicio', en: 'Home', ca: 'Inici', eu: 'Hasiera', gl: 'Inicio' };
function withBreadcrumb(data, lang, trail) {
  const items = [[HOME_NAME[lang], absoluteUrl(homePath(lang))], ...trail];
  return {
    '@graph': [
      data,
      {
        '@type': 'BreadcrumbList',
        itemListElement: items.map(([name, item], i) => ({ '@type': 'ListItem', position: i + 1, name, item })),
      },
    ],
  };
}

const PAGES = {
  about: { es: `Sobre el proyecto · ${SITE}`, en: `About the project · ${SITE}`, ca: `Sobre el projecte · ${SITE}`, eu: `Proiektuari buruz · ${SITE}`, gl: `Sobre o proxecto · ${SITE}` },
  legal: { es: `Aviso legal y privacidad · ${SITE}` },
};

// <link rel="alternate" hreflang> de las páginas que existen en más de un idioma
// (catálogo, simulaciones, guías y «Sobre el proyecto»); x-default es la española.
function setAlternates(route) {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((l) => l.remove());
  const paths = LANGS.map((l) => [l, translatedPath(route, l)]).filter(([, p]) => p);
  if (paths.length < 2) return;
  for (const [l, p] of [...paths, ['x-default', paths[0][1]]]) {
    document.head.append(Object.assign(document.createElement('link'), { rel: 'alternate', hreflang: l, href: absoluteUrl(p) }));
  }
}

function set(lang, title, description, url, data, locales = LANGS, image = DEFAULT_IMAGE) {
  document.title = title;
  og('image').content = image.url;
  if (og('image:alt') && image.alt) og('image:alt').content = image.alt;
  metaDescription.content = description;
  canonical.href = url;
  og('url').content = url;
  og('title').content = title;
  og('description').content = description === DEFAULT_DESCRIPTION[lang] ? DEFAULT_OG_DESCRIPTION[lang] : description;
  ogLocale.content = OG_LOCALE[lang];
  document.head.querySelectorAll('meta[property="og:locale:alternate"]').forEach((m) => m.remove());
  for (const l of locales.filter((l) => l !== lang)) {
    const m = document.createElement('meta');
    m.setAttribute('property', 'og:locale:alternate');
    m.content = OG_LOCALE[l];
    ogLocale.after(m);
  }
  jsonLd.textContent = JSON.stringify({ '@context': 'https://schema.org', ...data });
}

export function updateHead({ sim, guideSim, guionSim, courseId = null, topicId = null, page, lang = 'es' }) {
  setAlternates({ simId: sim?.id, guideId: guideSim?.id, guionId: guionSim?.id, courseId, topicId, page });
  if (courseId || topicId) {
    const info = collectionInfo({ courseId, topicId }, lang);
    const url = absoluteUrl(courseId ? coursePath(courseId, lang) : topicPath(topicId, lang));
    const locales = LANGS.filter((l) => translatedPath({ courseId, topicId }, l));
    return set(
      lang,
      `${info.h1} · ${SITE}`,
      shortDescription(info.intro),
      url,
      withBreadcrumb({
        '@type': 'CollectionPage',
        name: info.h1,
        description: info.intro,
        url,
        inLanguage: lang,
        isPartOf: WEBSITE,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: info.sims.map((s, i) => ({ '@type': 'ListItem', position: i + 1, item: simResource(s, lang) })),
        },
      }, lang, [[info.label, url]]),
      locales,
    );
  }
  if (guionSim) {
    const practical = isPractical(guionSim);
    const l = practical ? 'es' : lang;
    const title = simTitle(guionSim, l);
    const url = absoluteUrl(guionPath(guionSim.id, l));
    const doc = studentDoc(guionSim, l);
    return set(
      l,
      `${doc.title}: ${title} · ${SITE}`,
      practical
        ? `Guion para el alumnado de la práctica de laboratorio «${title}»: objetivo, procedimiento, tabla de datos, ` +
            'cálculos y cuestiones. Descarga en Word y LibreOffice para adaptarlo, o en PDF.'
        : FICHA_DESCRIPTION[l](title),
      url,
      withBreadcrumb({
        '@type': 'LearningResource',
        name: `${doc.title}: ${title}`,
        url,
        learningResourceType: doc.type,
        educationalLevel: levels(guionSim, l),
        typicalAgeRange: ageRange(guionSim),
        audience: { '@type': 'EducationalAudience', educationalRole: 'student' },
        inLanguage: l,
        isAccessibleForFree: true,
        author: AUTHOR,
        license: LICENSE[l],
        isBasedOn: simUrl(guionSim.id, l),
      }, l, [[title, simUrl(guionSim.id, l)], [doc.short, url]]),
      practical ? ['es'] : LANGS,
      simImage(guionSim, l),
    );
  }
  if (guideSim) {
    const en = lang === 'en';
    const l = en ? 'en' : 'es';
    const title = simTitle(guideSim, l);
    const practical = isPractical(guideSim);
    const name = en ? `Teacher guide: ${title}` : `Guía docente: ${title}`;
    return set(
      l,
      `${name} · ${SITE}`,
      en
        ? `Guide to using the “${title}” simulation in class: year groups and curriculum content, teaching ` +
            'sequence, misconceptions and simplifications. Download as PDF, Word or LibreOffice.'
        : practical
          ? `Guía para usar en clase la práctica de laboratorio «${title}»: cursos y saberes básicos, propuesta ` +
            'de sesión, clave de las muestras, evaluación y concepciones alternativas. Descarga en PDF, Word y LibreOffice.'
          : `Guía para usar en clase la simulación «${title}»: cursos y saberes básicos, secuencia de ` +
            'explicación, concepciones alternativas y simplificaciones. Descarga en PDF, Word y LibreOffice.',
      guideUrl(guideSim.id, l),
      withBreadcrumb({
        '@type': 'LearningResource',
        name,
        url: guideUrl(guideSim.id, l),
        learningResourceType: en ? 'Teacher guide' : 'Guía didáctica',
        educationalLevel: levels(guideSim, l),
        typicalAgeRange: ageRange(guideSim),
        audience: { '@type': 'EducationalAudience', educationalRole: 'teacher' },
        inLanguage: l,
        isAccessibleForFree: true,
        author: AUTHOR,
        license: LICENSE[l],
        isBasedOn: simUrl(guideSim.id, l),
      }, l, [[title, simUrl(guideSim.id, l)], [en ? 'Teacher guide' : 'Guía docente', guideUrl(guideSim.id, l)]]),
      practical ? ['es'] : GUIDE_LANGS,
      simImage(guideSim, l),
    );
  }
  if (sim) {
    const kind = isPractical(sim) ? PRACTICAL_KIND : KIND[lang];
    return set(lang, `${simTitle(sim, lang)} · ${kind} · ${SITE}`, simDescription(sim, lang), simUrl(sim.id, lang), withBreadcrumb(simResource(sim, lang), lang, [[simTitle(sim, lang), simUrl(sim.id, lang)]]), sim.langs || LANGS, simImage(sim, lang));
  }
  if (PAGES[page]) {
    const url = absoluteUrl(pagePath(page, lang));
    return set(lang, PAGES[page][lang], (page === 'about' && ABOUT_DESCRIPTION[lang]) || DEFAULT_DESCRIPTION[lang], url, { '@type': 'WebPage', url, inLanguage: lang });
  }
  const home = absoluteUrl(homePath(lang));
  set(lang, DEFAULT_TITLE[lang], DEFAULT_DESCRIPTION[lang], home, {
    '@type': 'CollectionPage',
    name: DEFAULT_TITLE[lang],
    url: home,
    inLanguage: lang,
    isPartOf: WEBSITE,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: simulationsIn(lang).map((s, i) => ({ '@type': 'ListItem', position: i + 1, item: simResource(s, lang) })),
    },
  });
}

// La descripción de cada guía es su «Ficha rápida», que solo se conoce al cargarla.
// Google corta la descripción hacia los 155-160 caracteres: se queda con las
// frases completas que caben o, si la primera ya es larga, la corta en una palabra.
export function shortDescription(text, max = 160) {
  const clean = text.replace(/[*_`]/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').trim();
  if (clean.length <= max) return clean;
  const sentences = clean.match(/[^.!?]+[.!?]+(\s|$)/g) || [];
  let out = '';
  for (const s of sentences) {
    if ((out + s).trim().length > max) break;
    out += s;
  }
  if (out.trim().length >= 70) return out.trim();
  return clean.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';
}

export function setDescription(text) {
  if (!text) return;
  text = shortDescription(text);
  metaDescription.content = text;
  og('description').content = text;
}
