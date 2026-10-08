import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { simulations } from './src/data/simulations.js';

const SITE_URL = 'https://simulaciencia.es/';

// Genera sitemap.xml en cada build a partir del catálogo, para que las
// simulaciones nuevas aparezcan en Google sin mantener el archivo a mano.
function sitemap() {
  return {
    name: 'sitemap',
    generateBundle() {
      const urls = [
        SITE_URL,
        ...simulations.map((s) => `${SITE_URL}?sim=${s.id}`),
        `${SITE_URL}?page=about`,
        `${SITE_URL}?page=legal`,
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
  // base relativo: funciona tanto en user.github.io como en user.github.io/repo
  // sin tener que conocer el nombre del repositorio de despliegue.
  base: './',
  plugins: [tailwindcss(), sitemap()],
});
