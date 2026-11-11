import { guideIdFromFile } from '../guides/shared.js';
import { guideLang } from '../paths.js';

// Las guías se cargan bajo demanda: el catálogo solo necesita saber cuáles existen.
// guias/*.md en español y guias/en/*.md en inglés.
// Los documentos del alumnado (guiones/*.md de las prácticas y fichas/*.md de las
// simulaciones, con sus traducciones en fichas/<idioma>/*.md) van como «guion».
const files = {
  es: import.meta.glob('/guias/*.md', { query: '?raw', import: 'default' }),
  en: import.meta.glob('/guias/en/*.md', { query: '?raw', import: 'default' }),
};
const guionFiles = {
  es: import.meta.glob(['/guiones/*.md', '/fichas/*.md'], { query: '?raw', import: 'default' }),
  en: import.meta.glob('/fichas/en/*.md', { query: '?raw', import: 'default' }),
  ca: import.meta.glob('/fichas/ca/*.md', { query: '?raw', import: 'default' }),
  eu: import.meta.glob('/fichas/eu/*.md', { query: '?raw', import: 'default' }),
  gl: import.meta.glob('/fichas/gl/*.md', { query: '?raw', import: 'default' }),
};

const toLoaders = (byLang) =>
  Object.fromEntries(
    Object.entries(byLang).map(([lang, glob]) => [
      lang,
      new Map(Object.entries(glob).map(([path, load]) => [guideIdFromFile(path), load])),
    ]),
  );
const loaders = toLoaders(files);
const guionLoaders = toLoaders(guionFiles);

// Idioma en el que se enlaza la guía desde una página en `lang`: el suyo si la
// guía está traducida, si no el español. null si la simulación no tiene guía.
export function guideLangFor(simId, lang = 'es') {
  const l = guideLang(lang);
  if (loaders[l].has(simId)) return l;
  return loaders.es.has(simId) ? 'es' : null;
}

export function hasGuide(simId, lang = 'es') {
  return loaders[lang]?.has(simId) ?? false;
}

export function loadGuide(simId, lang = 'es') {
  return loaders[lang].get(simId)();
}

// Documento del alumnado: guion de una práctica (solo en español) o ficha de
// actividades de una simulación (en cada idioma).
export function hasGuion(simId, lang = 'es') {
  return guionLoaders[lang]?.has(simId) ?? false;
}

export function loadGuion(simId, lang = 'es') {
  return guionLoaders[lang].get(simId)();
}
