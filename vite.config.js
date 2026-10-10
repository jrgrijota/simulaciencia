import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync } from 'node:fs';
import { simulations } from './src/data/simulations.js';
import { guideIdFromFile } from './src/guides/shared.js';
import { simPath, guidePath, homePath, PAGE_PATHS, PAGE_PATHS_EN, LANGS, parsePath, translatedPath, absoluteUrl } from './src/paths.js';

// Genera sitemap.xml en cada build a partir del catálogo, para que las
// simulaciones y guías nuevas aparezcan en Google sin mantener el archivo a mano.
// Las páginas que existen en los dos idiomas llevan sus alternativas (hreflang).
function sitemap() {
  return {
    name: 'sitemap',
    generateBundle() {
      const paths = [
        homePath('es'),
        ...simulations.map((s) => simPath(s.id)),
        ...readdirSync('guias')
          .filter((f) => f.endsWith('.md'))
          .map((f) => guidePath(guideIdFromFile(f))),
        ...Object.values(PAGE_PATHS),
        homePath('en'),
        ...simulations.map((s) => simPath(s.id, 'en')),
        ...Object.values(PAGE_PATHS_EN),
      ];
      const body = paths
        .map((path) => {
          const alt = LANGS.map((l) => [l, translatedPath(parsePath(path), l)]);
          const links = alt.every(([, p]) => p)
            ? [...alt, ['x-default', alt[0][1]]]
                .map(([l, p]) => `\n    <xhtml:link rel="alternate" hreflang="${l}" href="${absoluteUrl(p)}"/>`)
                .join('')
            : '';
          return `  <url><loc>${absoluteUrl(path)}</loc>${links}${links && '\n  '}</url>`;
        })
        .join('\n');
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source:
          '<?xml version="1.0" encoding="UTF-8"?>\n' +
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
          `${body}\n</urlset>\n`,
      });
    },
  };
}

export default defineConfig({
  // base absoluto: las páginas viven en subcarpetas (/guias/densidad/) y la web
  // se sirve en la raíz de simulaciencia.es.
  base: '/',
  plugins: [tailwindcss(), sitemap()],
});
