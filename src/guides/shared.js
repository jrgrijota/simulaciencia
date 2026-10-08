// Utilidades de las guías docentes compartidas por la web (navegador) y por
// scripts/build-guides.mjs (Node), para que las dos procesen igual el Markdown.
//
// Cada guía es guias/<nombre>.md y pertenece a la simulación `sim-<nombre>`
// del catálogo. Los archivos se pueden sustituir tal cual al regenerarlos.

import { Marked } from 'marked';

export const SITE_URL = 'https://simulaciencia.es/';

export function guideIdFromFile(fileName) {
  return 'sim-' + fileName.replace(/^.*[\\/]/, '').replace(/\.md$/, '');
}

// Nombre de las descargas: guias/guia-docente-<nombre>.{pdf,docx,odt}
export function downloadBase(simId) {
  return `guias/guia-docente-${simId.replace(/^sim-/, '')}`;
}

// Las guías enlazan a cada simulación en jrgrijota.github.io; se reescriben
// a su página del portal, que es la dirección pública.
export function rewriteLinks(md) {
  return md
    .replace(/https:\/\/jrgrijota\.github\.io\/simulacion-([a-z-]+)\/?/g, `${SITE_URL}?sim=sim-$1`)
    .replace(/\[jrgrijota\.github\.io\/simulacion-([a-z-]+)\/?\]/g, '[simulaciencia.es/?sim=sim-$1]');
}

export function guideTitle(md) {
  const m = md.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : 'Guía docente';
}

// Primer párrafo de «Ficha rápida»: sirve de descripción para Google.
export function guideSummary(md) {
  const m = md.match(/^##\s+Ficha rápida\s*\n+([^\n#|][^\n]*)/m);
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

export function renderGuideHtml(markdown) {
  return md
    .parse(rewriteLinks(markdown))
    .replace(/<table>/g, '<div class="guide-table"><table>')
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
export function licenseNote(simId) {
  return [
    '---',
    '',
    `© 2026 Juan Ramón Grijota · SimulaCiencia. Guía publicada bajo licencia Creative Commons ` +
      `Atribución-CompartirIgual 4.0 (CC BY-SA 4.0): https://creativecommons.org/licenses/by-sa/4.0/deed.es`,
    '',
    `Puedes adaptarla y compartirla citando la autoría y manteniendo la misma licencia. ` +
      `Versión actualizada y simulación en ${SITE_URL}?guia=${simId}`,
  ].join('\n');
}
