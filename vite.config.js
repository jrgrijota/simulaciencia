import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync } from 'node:fs';
import { simulations } from './src/data/simulations.js';
import { guideIdFromFile } from './src/guides/shared.js';

const SITE_URL = 'https://simulaciencia.es/';

// Genera sitemap.xml en cada build a partir del catálogo, para que las
// simulaciones y guías nuevas aparezcan en Google sin mantener el archivo a mano.
function sitemap() {
  return {
    name: 'sitemap',
    generateBundle() {
      const urls = [
        SITE_URL,
        ...simulations.map((s) => `${SITE_URL}?sim=${s.id}`),
        ...readdirSync('guias')
          .filter((f) => f.endsWith('.md'))
          .map((f) => `${SITE_URL}?guia=${guideIdFromFile(f)}`),
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

// Catálogo en HTML plano dentro de <noscript>: lo leen los buscadores y las
// herramientas que no ejecutan JavaScript. Con JavaScript no se muestra.
function staticCatalog() {
  return {
    name: 'static-catalog',
    transformIndexHtml(html) {
      const guides = new Set(readdirSync('guias').filter((f) => f.endsWith('.md')).map(guideIdFromFile));
      const items = simulations
        .map((s) => {
          const guide = guides.has(s.id) ? ` · <a href="?guia=${s.id}">Guía docente</a>` : '';
          return `<li><a href="?sim=${s.id}">${s.title}</a>: ${s.description}${guide}</li>`;
        })
        .join('');
      return html.replace(
        '<!--catalogo-sin-js-->',
        `<noscript><h1>SimulaCiencia · Simulaciones de Física y Química</h1>` +
          `<p>Simulaciones interactivas y gratuitas de Física y Química para ESO y Bachillerato, cada una con su guía docente. ` +
          `Para usarlas hay que activar JavaScript.</p><ul>${items}</ul>` +
          `<p><a href="?page=about">Sobre el proyecto</a> · <a href="?page=legal">Aviso legal y privacidad</a></p></noscript>`,
      );
    },
  };
}

export default defineConfig({
  // base relativo: funciona tanto en user.github.io como en user.github.io/repo
  // sin tener que conocer el nombre del repositorio de despliegue.
  base: './',
  plugins: [tailwindcss(), sitemap(), staticCatalog()],
});
