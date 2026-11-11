import { guideIdFromFile } from '../guides/shared.js';
import { guideLang } from '../paths.js';

// Las guías se cargan bajo demanda: el catálogo solo necesita saber cuáles existen.
// guias/*.md en español y guias/en/*.md en inglés.
// Los documentos del alumnado (guiones/*.md de las prácticas y fichas/*.md de las
// simulaciones) van como «guion».
const files = {
  es: import.meta.glob('/guias/*.md', { query: '?raw', import: 'default' }),
  en: import.meta.glob('/guias/en/*.md', { query: '?raw', import: 'default' }),
  guion: import.meta.glob(['/guiones/*.md', '/fichas/*.md'], { query: '?raw', import: 'default' }),
};

const loaders = Object.fromEntries(
  Object.entries(files).map(([lang, glob]) => [
    lang,
    new Map(Object.entries(glob).map(([path, load]) => [guideIdFromFile(path), load])),
  ]),
);

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

// Documento del alumnado: guion de una práctica o ficha de una simulación (solo en español).
export function hasGuion(simId) {
  return loaders.guion.has(simId);
}

export function loadGuion(simId) {
  return loaders.guion.get(simId)();
}
