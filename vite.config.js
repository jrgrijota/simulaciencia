import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync } from 'node:fs';
import { simulations } from './src/data/simulations.js';
import { guideIdFromFile } from './src/guides/shared.js';
import { SITE_URL, simPath, guidePath, PAGE_PATHS, absoluteUrl } from './src/paths.js';

// Genera sitemap.xml en cada build a partir del catálogo, para que las
// simulaciones y guías nuevas aparezcan en Google sin mantener el archivo a mano.
function sitemap() {
  return {
    name: 'sitemap',
    generateBundle() {
      const urls = [
        SITE_URL,
        ...simulations.map((s) => absoluteUrl(simPath(s.id))),
        ...readdirSync('guias')
          .filter((f) => f.endsWith('.md'))
          .map((f) => absoluteUrl(guidePath(guideIdFromFile(f)))),
        ...Object.values(PAGE_PATHS).map(absoluteUrl),
      ];
      const body = urls
        .map((loc) => `  <url><loc>${loc}</loc></url>`)
        .join('\n');
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
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
