// Idioma de la página que se está mostrando y textos de la interfaz en inglés.
// El español es el idioma principal: los textos en español siguen escritos en
// cada vista y aquí solo está su traducción. main.js fija el idioma de cada ruta
// antes de pintarla (ver src/paths.js).

let current = 'es';

export const getLang = () => current;
export const isEn = () => current === 'en';

export function setLang(lang) {
  current = lang === 'en' ? 'en' : 'es';
  document.documentElement.lang = current;
}

// L({ es: '…', en: '…' }) o L('…', '…'): el texto del idioma activo.
export function L(es, en) {
  if (typeof es === 'object') return es[current] ?? es.es;
  return current === 'en' ? en : es;
}
