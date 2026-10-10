// Idioma de la página que se está mostrando (es, en, ca o eu).
// El español es el idioma principal: los textos en español siguen escritos en
// cada vista junto a su traducción. main.js fija el idioma de cada ruta
// antes de pintarla (ver src/paths.js).

let current = 'es';

export const getLang = () => current;
export const isEn = () => current === 'en';

export function setLang(lang) {
  current = ['en', 'ca', 'eu'].includes(lang) ? lang : 'es';
  document.documentElement.lang = current;
}

// L({ es: '…', en: '…', ca: '…', eu: '…' }) o L('es', 'en', 'ca', 'eu'): el texto del idioma activo.
export function L(es, en, ca, eu) {
  if (typeof es === 'object') return es[current] ?? es.es;
  return { es, en, ca, eu }[current] ?? es;
}
