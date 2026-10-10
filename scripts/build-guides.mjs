// Genera las descargas de cada guía docente (PDF, Word y LibreOffice) a partir
// de guias/*.md. Se ejecuta tras `vite build` y escribe en dist/guias/.
//
//   PDF:  la guía en HTML (mismo Markdown que la web) impresa con Chrome sin interfaz.
//   DOCX y ODT: Pandoc.
//
// Rutas de las herramientas: variables CHROME_PATH y PANDOC_PATH, o las habituales.
// En GitHub Actions (CI) falta una herramienta => error, para no publicar enlaces
// rotos. En local solo avisa y se salta ese formato.

import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
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
import { absoluteUrl, guidePath } from '../src/paths.js';
import { findTool, findChrome } from './tools.mjs';

// Pandoc deja las tablas sin bordes y con letra con serifa. Se retocan los XML
// internos (DOCX y ODT son ZIP) para que se parezcan a la web y al PDF.
const BORDER = 'CBD5E1';
const HEADER_BG = 'F1F5F9';

// Cada retoque es [archivo interno, patrón, sustitución]. Si un patrón no aparece
// (p. ej. otra versión de Pandoc escribe distinto el XML), se detiene el build en
// vez de publicar en silencio documentos sin formato.
function patchZip(path, patches) {
  const files = unzipSync(readFileSync(path));
  for (const [name, pattern, replacement] of patches) {
    const before = strFromU8(files[name]);
    const after = before.replace(pattern, replacement);
    if (after === before) throw new Error(`${path}: no se encuentra ${pattern} en ${name}`);
    files[name] = strToU8(after);
  }
  // ODT exige que «mimetype» vaya primero y sin comprimir.
  const entries = Object.entries(files).map(([n, d]) => [n, n === 'mimetype' ? [d, { level: 0 }] : d]);
  writeFileSync(path, zipSync(Object.fromEntries(entries)));
}

function patchDocx(path) {
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
  ]);
}

function patchOdt(path) {
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
  ]);
}


const ROOT = resolve(import.meta.dirname, '..');
const OUT = join(ROOT, 'dist');
const CI = !!process.env.CI;
const chrome = findChrome();
const pandoc = findTool('PANDOC_PATH', ['pandoc']);

const fontUrl = (w) =>
  pathToFileURL(join(ROOT, `node_modules/@fontsource/inter/files/inter-latin-${w}-normal.woff2`)).href;

function pdfHtml(title, body, simId) {
  return `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><title>${title}</title>
<style>
  @font-face { font-family: Inter; font-weight: 400; src: url(${fontUrl(400)}); }
  @font-face { font-family: Inter; font-weight: 600; src: url(${fontUrl(600)}); }
  @font-face { font-family: Inter; font-weight: 700; src: url(${fontUrl(700)}); }
  @page { size: A4; margin: 18mm 16mm 20mm;
    @bottom-left { content: "SimulaCiencia · simulaciencia.es"; font: 8pt Inter, sans-serif; color: #64748b; }
    @bottom-right { content: counter(page) " / " counter(pages); font: 8pt Inter, sans-serif; color: #64748b; } }
  body { font-family: Inter, system-ui, sans-serif; font-size: 10pt; line-height: 1.55; color: #1e293b; margin: 0; }
  .kicker { margin: 0 0 4pt; font-size: 8.5pt; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: #0284c7; }
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
  .license { margin-top: 16pt; padding-top: 6pt; border-top: 1px solid #cbd5e1; font-size: 8pt; color: #64748b; }
</style></head>
<body>
  <p class="kicker">Guía docente · SimulaCiencia</p>
  ${body}
  <p class="license">© 2026 Juan Ramón Grijota · SimulaCiencia. Guía publicada bajo licencia
  <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.es">CC BY-SA 4.0</a>: puedes adaptarla y
  compartirla citando la autoría y con la misma licencia. Versión actualizada y simulación en
  <a href="${absoluteUrl(guidePath(simId))}">${absoluteUrl(guidePath(simId)).replace('https://', '')}</a>.</p>
</body></html>`;
}

const files = readdirSync(join(ROOT, 'guias')).filter((f) => f.endsWith('.md'));
mkdirSync(join(OUT, 'guias'), { recursive: true });
const tmp = join(tmpdir(), `simulaciencia-guias-${process.pid}`);
mkdirSync(tmp, { recursive: true });

for (const file of files) {
  const simId = guideIdFromFile(file);
  const markdown = readFileSync(join(ROOT, 'guias', file), 'utf8');
  const title = guideTitle(markdown);
  const out = join(OUT, downloadBase(simId));

  if (chrome) {
    const html = join(tmp, `${simId}.html`);
    writeFileSync(html, pdfHtml(title, renderGuideHtml(markdown), simId));
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
    const body = rewriteLinks(markdown).replace(/^#\s+.+\n+/m, '') + '\n\n' + licenseNote(simId) + '\n';
    for (const ext of ['docx', 'odt']) {
      execFileSync(pandoc, [
        '-f', 'gfm', '-t', ext, '-o', `${out}.${ext}`,
        '--metadata', `title=${title}`,
        '--metadata', 'author=Juan Ramón Grijota · SimulaCiencia',
        '--metadata', 'lang=es-ES',
      ], { input: body });
    }
    patchDocx(`${out}.docx`);
    patchOdt(`${out}.odt`);
  }
  console.log(`✓ ${simId}`);
}

rmSync(tmp, { recursive: true, force: true });
console.log(`Guías: ${files.length} (${[chrome && 'PDF', pandoc && 'DOCX, ODT'].filter(Boolean).join(', ') || 'sin descargas'})`);
