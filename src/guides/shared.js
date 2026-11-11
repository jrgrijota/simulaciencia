// Utilidades de las guías docentes compartidas por la web (navegador) y por
// scripts/build-guides.mjs (Node), para que las dos procesen igual el Markdown.
//
// Cada guía es guias/<nombre>.md (en inglés, guias/en/<nombre>.md) y pertenece a la
// simulación `sim-<nombre>` del catálogo. Los archivos se pueden sustituir tal cual
// al regenerarlos.

import { Marked } from 'marked';
import { SITE_URL, guidePath, simPath, absoluteUrl } from '../paths.js';

export { SITE_URL };

export function guideIdFromFile(fileName) {
  return 'sim-' + fileName.replace(/^.*[\\/]/, '').replace(/\.md$/, '');
}

// Nombre de las descargas: guias/guia-docente-<nombre>.{pdf,docx,odt}
// y, en inglés, en/guides/teacher-guide-<nombre>.{pdf,docx,odt}
// y, para los guiones del alumnado de las prácticas, guiones/guion-<nombre>.{pdf,docx,odt}.
export function downloadBase(simId, lang = 'es', doc = 'guide') {
  const name = simId.replace(/^sim-/, '');
  if (doc === 'guion') return `guiones/guion-${name}`;
  return lang === 'en' ? `en/guides/teacher-guide-${name}` : `guias/guia-docente-${name}`;
}

// Las guías enlazan a cada simulación en jrgrijota.github.io; se reescriben
// a su página del portal en el idioma de la guía, que es la dirección pública.
export function rewriteLinks(md, lang = 'es') {
  const url = (name) => absoluteUrl(simPath(`sim-${name}`, lang));
  return md
    .replace(/\[jrgrijota\.github\.io\/simulacion-([a-z-]+)\/?\]/g, (_, n) => `[${url(n).replace('https://', '')}]`)
    .replace(/https:\/\/jrgrijota\.github\.io\/simulacion-([a-z-]+)\/?/g, (_, n) => url(n));
}

export function guideTitle(md) {
  const m = md.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : 'Guía docente';
}

// Primer párrafo de «Ficha rápida» («Quick reference»; en los guiones, «Objetivo»): sirve de descripción para Google.
export function guideSummary(md) {
  const m = md.match(/^##\s+(?:Ficha rápida|Quick reference|Objetivo)\s*\n+([^\n#|][^\n]*)/m);
  return m ? m[1].trim() : '';
}

export function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function plain(mdText) {
  return mdText.replace(/[*_`]/g, '').trim();
}

// Encabezados con id (para el índice) y tablas envueltas para poder
// desplazarlas en horizontal en el móvil.
const md = new Marked({
  gfm: true,
  renderer: {
    heading({ tokens, depth, text }) {
      return `<h${depth} id="${slugify(plain(text))}">${this.parser.parseInline(tokens)}</h${depth}>\n`;
    },
  },
});

export function renderGuideHtml(markdown, lang = 'es') {
  let n = 0;
  return md
    .parse(rewriteLinks(markdown, lang))
    // tabindex: en el móvil la tabla se desplaza de lado y así también se mueve con el teclado.
    .replace(/<table>/g, () => `<div class="guide-table" tabindex="0" role="region" aria-label="${lang === 'en' ? 'Table' : 'Tabla'} ${++n}"><table>`)
    .replace(/<\/table>/g, '</table></div>');
}

// Índice: secciones (##) y cursos (###).
export function guideToc(markdown) {
  return md
    .lexer(markdown)
    .filter((t) => t.type === 'heading' && (t.depth === 2 || t.depth === 3))
    .map((t) => ({ depth: t.depth, text: plain(t.text), id: slugify(plain(t.text)) }));
}

// Aviso que acompaña a cada archivo descargado, que circula sin la web.
export function licenseNote(simId, lang = 'es', doc = 'guide') {
  if (doc === 'guion') {
    return [
      '---',
      '',
      `© 2026 Juan Ramón Grijota · SimulaCiencia. Guion publicado bajo licencia Creative Commons ` +
        `Atribución-CompartirIgual 4.0 (CC BY-SA 4.0): https://creativecommons.org/licenses/by-sa/4.0/deed.es. ` +
        `Puedes adaptarlo a tu clase y compartirlo citando la autoría y con la misma licencia.`,
      '',
      `Práctica: ${absoluteUrl(simPath(simId))}`,
    ].join('\n');
  }
  if (lang === 'en') {
    return [
      '---',
      '',
      `© 2026 Juan Ramón Grijota · SimulaCiencia. Guide published under a Creative Commons ` +
        `Attribution-ShareAlike 4.0 licence (CC BY-SA 4.0): https://creativecommons.org/licenses/by-sa/4.0/deed.en`,
      '',
      `You may adapt and share it, crediting the author and keeping the same licence. ` +
        `Latest version and simulation at ${absoluteUrl(guidePath(simId, 'en'))}`,
    ].join('\n');
  }
  return [
    '---',
    '',
    `© 2026 Juan Ramón Grijota · SimulaCiencia. Guía publicada bajo licencia Creative Commons ` +
      `Atribución-CompartirIgual 4.0 (CC BY-SA 4.0): https://creativecommons.org/licenses/by-sa/4.0/deed.es`,
    '',
    `Puedes adaptarla y compartirla citando la autoría y manteniendo la misma licencia. ` +
      `Versión actualizada y simulación en ${absoluteUrl(guidePath(simId))}`,
  ].join('\n');
}

// Texto en línea de una guía (negritas, enlaces…) convertido a HTML.
export function inlineHtml(text, lang = 'es') {
  return md.parseInline(rewriteLinks(text, lang));
}

// Filas de la tabla de «Concepciones alternativas…» («Misconceptions…»): la idea
// del alumnado y la idea correcta. Las usa la página de cada simulación y llms.txt.
export function guideMisconceptions(markdown) {
  const section = markdown.match(/^##\s+(?:Concepciones alternativas|Misconceptions)[^\n]*\n([\s\S]*?)(?=^##\s|(?![\s\S]))/m);
  if (!section) return [];
  return section[1]
    .split('\n')
    .filter((l) => l.startsWith('|') && !/^\|\s*-/.test(l))
    .slice(1) // cabecera
    .map((l) => l.split('|').slice(1, -1).map((c) => plain(c)))
    .filter((c) => c.length >= 2 && c[0] && c[1])
    .map(([idea, correct]) => ({ idea, correct }));
}
