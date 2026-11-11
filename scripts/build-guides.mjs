// Genera las descargas de cada guía docente (PDF, Word y LibreOffice) a partir
// de guias/*.md (y de su traducción, guias/en/*.md), y las de los documentos del
// alumnado (guiones/*.md, guion de una práctica; fichas/*.md, ficha de actividades
// de una simulación). Se ejecuta tras `vite build` y escribe en dist/guias/,
// dist/en/guides/, dist/guiones/ y dist/fichas/.
//
//   PDF:  la guía en HTML (mismo Markdown que la web) impresa con Chrome sin interfaz.
//   DOCX y ODT: Pandoc.
//
// Rutas de las herramientas: variables CHROME_PATH y PANDOC_PATH, o las habituales.
// En GitHub Actions (CI) falta una herramienta => error, para no publicar enlaces
// rotos. En local solo avisa y se salta ese formato.

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { strFromU8, strToU8, unzipSync, zipSync } from 'fflate';
import {
  downloadBase,
  guideIdFromFile,
  guideTitle,
  licenseNote,
  renderGuideHtml,
  rewriteLinks,
} from '../src/guides/shared.js';
import { absoluteUrl, guidePath, guionPath, GUIDE_LANGS, STUDENT_DOC_DIRS } from '../src/paths.js';
import { getSimulationById, isPractical } from '../src/data/simulations.js';
import { findTool, findChrome } from './tools.mjs';

// Pandoc deja las tablas sin bordes y con letra con serifa. Se retocan los XML
// internos (DOCX y ODT son ZIP) para que se parezcan a la web y al PDF.
const BORDER = 'CBD5E1';
const HEADER_BG = 'F1F5F9';

// Cada retoque es [archivo interno, patrón, sustitución]. Si un patrón no aparece
// (p. ej. otra versión de Pandoc escribe distinto el XML), se detiene el build en
// vez de publicar en silencio documentos sin formato.
// Los retoques de `optional` (filas más altas en los guiones) solo avisan si no aparecen.
function patchZip(path, patches, optional = []) {
  const files = unzipSync(readFileSync(path));
  for (const [list, strict] of [[patches, true], [optional, false]]) {
    for (const [name, pattern, replacement] of list) {
      const before = strFromU8(files[name]);
      const after = before.replace(pattern, replacement);
      if (after === before) {
        if (strict) throw new Error(`${path}: no se encuentra ${pattern} en ${name}`);
        console.warn(`⚠ ${path}: no se encuentra ${pattern} en ${name}; se deja sin ese retoque`);
      }
      files[name] = strToU8(after);
    }
  }
  // ODT exige que «mimetype» vaya primero y sin comprimir.
  const entries = Object.entries(files).map(([n, d]) => [n, n === 'mimetype' ? [d, { level: 0 }] : d]);
  writeFileSync(path, zipSync(Object.fromEntries(entries)));
}

// En los guiones, las filas de las tablas son más altas para escribir a mano en ellas.
function patchDocx(path, doc = 'guide') {
  const side = (s) => `<w:${s} w:val="single" w:sz="4" w:space="0" w:color="${BORDER}" />`;
  const borders = `<w:tblBorders>${['top', 'left', 'bottom', 'right', 'insideH', 'insideV'].map(side).join('')}</w:tblBorders>`;
  const calibri = '<w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Calibri" w:cs="Calibri" />';
  patchZip(path, [
    // Bordes finos en todas las celdas y fila de cabecera en negrita con fondo gris.
    ['word/styles.xml', /(<w:style w:type="table" w:default="1" w:styleId="Table">[\s\S]*?<w:tblPr>)/, `$1${borders}`],
    [
      'word/styles.xml',
      /(w:styleId="Table">[\s\S]*?<w:tblStylePr w:type="firstRow">)\s*<w:tcPr>/,
      `$1<w:rPr><w:b /></w:rPr><w:tcPr><w:shd w:val="clear" w:color="auto" w:fill="${HEADER_BG}" />`,
    ],
    // Letra sin serifa (Calibri) a 11 pt en el texto y en los títulos.
    ['word/styles.xml', /<w:rFonts w:asciiTheme="(minor|major)HAnsi"[^>]*\/>/g, calibri],
    ['word/styles.xml', /(<w:rPrDefault>[\s\S]*?)<w:sz w:val="24" \/>\s*<w:szCs w:val="24" \/>/, '$1<w:sz w:val="22" /><w:szCs w:val="22" />'],
    // Tablas a todo el ancho de la página.
    ['word/document.xml', /<w:tblW w:type="auto" w:w="0" \/>/g, '<w:tblW w:type="pct" w:w="5000" />'],
  ], doc === 'guion'
    ? [['word/document.xml', /<w:tr>(?!\s*<w:trPr>\s*<w:tblHeader)/g, '<w:tr><w:trPr><w:trHeight w:val="480" /></w:trPr>']]
    : []);
}

function patchOdt(path, doc = 'guide') {
  const cell = (bg) =>
    `<style:table-cell-properties fo:border="0.5pt solid #${BORDER}" fo:padding="0.1cm"${bg ? ` fo:background-color="#${HEADER_BG}"` : ''} />`;
  patchZip(path, [
    [
      'content.xml',
      /(style:name="TableHeaderRowCell" style:family="table-cell">\s*)<style:table-cell-properties fo:border="none" \/>/,
      `$1${cell(true)}`,
    ],
    [
      'content.xml',
      /(style:name="TableRowCell" style:family="table-cell">\s*)<style:table-cell-properties fo:border="none" \/>/,
      `$1${cell(false)}`,
    ],
    ['content.xml', /<style:table-properties table:align="center" \/>/g, '<style:table-properties table:align="margins" />'],
    ['styles.xml', 'style:font-name="Times New Roman"', 'style:font-name="Arial"'],
  ], doc === 'guion'
    ? [
        [
          'content.xml',
          /(<office:automatic-styles>)/,
          '$1<style:style style:name="FilaGuion" style:family="table-row"><style:table-row-properties style:min-row-height="0.85cm" /></style:style>',
        ],
        ['content.xml', /<table:table-row>/g, '<table:table-row table:style-name="FilaGuion">'],
      ]
    : []);
}


const ROOT = resolve(import.meta.dirname, '..');
const OUT = join(ROOT, 'dist');
const CI = !!process.env.CI;
const chrome = findChrome();
const pandoc = findTool('PANDOC_PATH', ['pandoc']);

const fontUrl = (w) =>
  pathToFileURL(join(ROOT, `node_modules/@fontsource/inter/files/inter-latin-${w}-normal.woff2`)).href;

// Textos fijos de las descargas en cada idioma de las guías.
const TEXT = {
  guion: {
    kicker: 'Guion de la práctica',
    license: (url, link) =>
      `Guion publicado bajo licencia <a href="${url}">CC BY-SA 4.0</a>: puedes adaptarlo y compartirlo citando ` +
      `la autoría y con la misma licencia. Práctica en ${link}.`,
    pandocLang: 'es-ES',
  },
  ficha: {
    kicker: 'Ficha de actividades',
    license: (url, link) =>
      `Ficha publicada bajo licencia <a href="${url}">CC BY-SA 4.0</a>: puedes adaptarla y compartirla citando ` +
      `la autoría y con la misma licencia. Simulación en ${link}.`,
    pandocLang: 'es-ES',
  },
  es: {
    kicker: 'Guía docente',
    license: (url, link) =>
      `Guía publicada bajo licencia <a href="${url}">CC BY-SA 4.0</a>: puedes adaptarla y compartirla citando ` +
      `la autoría y con la misma licencia. Versión actualizada y simulación en ${link}.`,
    pandocLang: 'es-ES',
  },
  en: {
    kicker: 'Teacher guide',
    license: (url, link) =>
      `Guide published under a <a href="${url}">CC BY-SA 4.0</a> licence: you may adapt and share it, crediting ` +
      `the author and keeping the same licence. Latest version and simulation at ${link}.`,
    pandocLang: 'en-GB',
  },
};

function pdfHtml(title, body, simId, lang, doc = 'guide', practical = true) {
  const guion = doc === 'guion';
  const t = TEXT[guion ? (practical ? 'guion' : 'ficha') : lang];
  const url = absoluteUrl(guion ? guionPath(simId) : guidePath(simId, lang));
  return `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"><title>${title}</title>
<style>
  @font-face { font-family: Inter; font-weight: 400; src: url(${fontUrl(400)}); }
  @font-face { font-family: Inter; font-weight: 600; src: url(${fontUrl(600)}); }
  @font-face { font-family: Inter; font-weight: 700; src: url(${fontUrl(700)}); }
  @page { size: A4; margin: 18mm 16mm 20mm;
    @bottom-left { content: "SimulaCiencia · simulaciencia.es"; font: 8pt Inter, sans-serif; color: #64748b; }
    @bottom-right { content: counter(page) " / " counter(pages); font: 8pt Inter, sans-serif; color: #64748b; } }
  body { font-family: Inter, system-ui, sans-serif; font-size: 10pt; line-height: 1.55; color: #1e293b; margin: 0; }
  .kicker { margin: 0 0 4pt; font-size: 8.5pt; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: #0369a1; }
  h1 { margin: 0 0 12pt; font-size: 19pt; line-height: 1.2; }
  h2 { margin: 18pt 0 6pt; padding-bottom: 3pt; border-bottom: 1px solid #cbd5e1; font-size: 13.5pt; break-after: avoid; }
  h3 { margin: 13pt 0 4pt; font-size: 11pt; color: #0369a1; break-after: avoid; }
  p, ul, ol { margin: 0 0 6pt; }
  ul, ol { padding-left: 16pt; }
  li { margin-bottom: 2pt; }
  strong { font-weight: 600; }
  a { color: #0369a1; }
  .guide-table { margin: 0 0 9pt; }
  table { width: 100%; border-collapse: collapse; font-size: 8.5pt; line-height: 1.4; }
  th, td { padding: 4pt 6pt; border: 1px solid #cbd5e1; text-align: left; vertical-align: top; }
  th { background: #f1f5f9; font-weight: 600; }
  tr { break-inside: avoid; }
  ${guion ? '.guide-table td:empty { height: 26pt; } h2 { margin-top: 14pt; }' : ''}
  .license { margin-top: 16pt; padding-top: 6pt; border-top: 1px solid #cbd5e1; font-size: 8pt; color: #64748b; }
</style></head>
<body>
  <p class="kicker">${t.kicker} · SimulaCiencia</p>
  ${body}
  <p class="license">© 2026 Juan Ramón Grijota · SimulaCiencia. ${t.license(
    `https://creativecommons.org/licenses/by-sa/4.0/deed.${lang}`,
    `<a href="${url}">${url.replace('https://', '')}</a>`,
  )}</p>
</body></html>`;
}

// Guías de cada idioma: guias/*.md (español) y guias/<idioma>/*.md.
const guides = GUIDE_LANGS.flatMap((lang) => {
  const dir = join(ROOT, 'guias', lang === 'es' ? '' : lang);
  return readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => ({ lang, file: join(dir, f) }));
});
// Documentos del alumnado (guiones y fichas): guiones/*.md, solo en español.
guides.push(
  ...STUDENT_DOC_DIRS.filter((d) => existsSync(join(ROOT, d))).flatMap((d) =>
    readdirSync(join(ROOT, d))
      .filter((f) => f.endsWith('.md'))
      .map((f) => ({ lang: 'es', doc: 'guion', file: join(ROOT, d, f) })),
  ),
);
const tmp = join(tmpdir(), `simulaciencia-guias-${process.pid}`);
mkdirSync(tmp, { recursive: true });

for (const { lang, file, doc = 'guide' } of guides) {
  const simId = guideIdFromFile(file);
  const markdown = readFileSync(file, 'utf8');
  const title = guideTitle(markdown);
  const sim = getSimulationById(simId);
  if (!sim) throw new Error(`${file}: no hay ninguna simulación ${simId} en el catálogo`);
  const practical = isPractical(sim);
  const out = join(OUT, downloadBase(simId, lang, doc, practical));
  mkdirSync(dirname(out), { recursive: true });

  if (chrome) {
    const html = join(tmp, `${doc}-${lang}-${simId}.html`);
    writeFileSync(html, pdfHtml(title, renderGuideHtml(markdown, lang), simId, lang, doc, practical));
    execFileSync(chrome, [
      '--headless=new',
      '--disable-gpu',
      '--no-first-run',
      `--user-data-dir=${join(tmp, 'chrome')}`,
      '--no-pdf-header-footer',
      ...(CI ? ['--no-sandbox'] : []),
      `--print-to-pdf=${out}.pdf`,
      pathToFileURL(html).href,
    ], { stdio: 'ignore' });
  }

  if (pandoc) {
    // El título va a los metadatos (estilo «Título» y propiedades del documento),
    // así que se quita el h1 del cuerpo para no duplicarlo.
    const body = rewriteLinks(markdown, lang).replace(/^#\s+.+\n+/m, '') + '\n\n' + licenseNote(simId, lang, doc, practical) + '\n';
    for (const ext of ['docx', 'odt']) {
      execFileSync(pandoc, [
        '-f', 'gfm', '-t', ext, '-o', `${out}.${ext}`,
        '--metadata', `title=${title}`,
        '--metadata', 'author=Juan Ramón Grijota · SimulaCiencia',
        '--metadata', `lang=${TEXT[lang].pandocLang}`,
      ], { input: body });
    }
    patchDocx(`${out}.docx`, doc);
    patchOdt(`${out}.odt`, doc);
  }
  console.log(`✓ ${doc === 'guion' ? (practical ? 'guion' : 'ficha') : lang} ${simId}`);
}

rmSync(tmp, { recursive: true, force: true });
console.log(`Guías: ${guides.length} (${[chrome && 'PDF', pandoc && 'DOCX, ODT'].filter(Boolean).join(', ') || 'sin descargas'})`);
