// Comprueba, después de `npm run build`, que los enlaces internos de las páginas
// pregeneradas y las direcciones del sitemap llevan a algo que existe en dist/.
// Lo ejecuta la comprobación de cada PR (.github/workflows/pr-check.yml); también
// se puede lanzar a mano: node scripts/check-links.mjs
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { SITE_URL } from '../src/paths.js';

const OUT = resolve(import.meta.dirname, '..', 'dist');

const htmlFiles = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? htmlFiles(p) : f.endsWith('.html') ? [p] : [];
  });

// /simulaciones/densidad/ → dist/simulaciones/densidad/index.html; /og/x.png → dist/og/x.png
function exists(path) {
  const clean = decodeURIComponent(path.split(/[?#]/)[0]);
  const file = join(OUT, clean);
  if (!file.startsWith(OUT)) return false;
  return clean.endsWith('/') ? existsSync(join(file, 'index.html')) : existsSync(file);
}

const broken = [];
const pages = htmlFiles(OUT).filter((f) => !f.endsWith('404.html'));
for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  for (const [, attr, raw] of html.matchAll(/\s(href|src)="([^"]+)"/g)) {
    const url = raw.replace(/&amp;/g, '&');
    const path = url.startsWith(SITE_URL) ? '/' + url.slice(SITE_URL.length) : url;
    if (!path.startsWith('/') || path.startsWith('//')) continue;
    if (!exists(path)) broken.push(`${relative(OUT, file)}: ${attr}="${raw}"`);
  }
}

const sitemap = readFileSync(join(OUT, 'sitemap.xml'), 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const loc of locs) if (!exists('/' + loc.slice(SITE_URL.length))) broken.push(`sitemap.xml: ${loc}`);

const unique = [...new Set(broken)];
if (unique.length) {
  console.error(`Enlaces rotos: ${unique.length}\n` + unique.map((b) => `  ${b}`).join('\n'));
  process.exit(1);
}
console.log(`Enlaces internos correctos: ${pages.length} páginas y ${locs.length} direcciones del sitemap.`);
