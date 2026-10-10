// Genera un HTML completo por página (dist/guias/densidad/index.html…) tras
// `vite build`. Cada página se abre en Chrome sin interfaz con la propia web y
// se guarda el DOM resultante: el mismo marcado que pinta el navegador, con su
// título, descripción, URL canónica y vista previa al compartir. Así Google lee
// cada guía sin ejecutar JavaScript y WhatsApp o Classroom muestran la página
// concreta. Al cargarla, main.js vuelve a pintarla igual y le añade los eventos.
//
// Sin Chrome (en local) cada página recibe una copia de index.html: la web
// funciona igual, solo que sin contenido pregenerado.

import { execFile } from 'node:child_process';
import { createServer } from 'node:http';
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, extname, join, resolve } from 'node:path';
import { promisify } from 'node:util';
import { simulations } from '../src/data/simulations.js';
import { guideIdFromFile } from '../src/guides/shared.js';
import { simPath, guidePath, homePath, PAGE_PATHS, PAGE_PATHS_EN } from '../src/paths.js';
import { findChrome } from './tools.mjs';

const ROOT = resolve(import.meta.dirname, '..');
const OUT = join(ROOT, 'dist');
const INDEX = readFileSync(join(OUT, 'index.html'));

const routes = [
  '/',
  ...simulations.map((s) => simPath(s.id)),
  ...readdirSync(join(ROOT, 'guias'))
    .filter((f) => f.endsWith('.md'))
    .map((f) => guidePath(guideIdFromFile(f))),
  ...Object.values(PAGE_PATHS),
  // Versión inglesa (sin guías ni aviso legal, que solo están en español)
  homePath('en'),
  ...simulations.map((s) => simPath(s.id, 'en')),
  ...Object.values(PAGE_PATHS_EN),
];

// GitHub Pages sirve 404.html en las direcciones que no existen; la web las
// lleva al catálogo.
copyFileSync(join(OUT, 'index.html'), join(OUT, '404.html'));

const chrome = findChrome('Las páginas no se pregeneran.');

// Servidor de dist/ como GitHub Pages: archivo si existe, si no index.html.
const TYPES = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.woff2': 'font/woff2', '.woff': 'font/woff', '.xml': 'application/xml', '.txt': 'text/plain',
};
const server = createServer((req, res) => {
  const file = join(OUT, decodeURIComponent(new URL(req.url, 'http://x').pathname));
  const isFile = file.startsWith(OUT) && existsSync(file) && statSync(file).isFile();
  res.writeHead(200, { 'Content-Type': TYPES[isFile ? extname(file) : '.html'] || 'application/octet-stream' });
  res.end(isFile ? readFileSync(file) : INDEX);
});

async function snapshot(origin, route) {
  const { stdout } = await promisify(execFile)(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-first-run',
      `--user-data-dir=${join(tmpdir(), `simulaciencia-prerender-${process.pid}`)}`,
      // Solo la propia web: ni analítica ni las simulaciones de los iframes.
      '--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE localhost',
      // Tiempo virtual para que terminen las cargas diferidas (el Markdown de las guías).
      '--virtual-time-budget=10000',
      '--window-size=1280,800',
      ...(process.env.CI ? ['--no-sandbox'] : []),
      '--dump-dom',
      origin + route,
    ],
    { maxBuffer: 32 * 1024 * 1024 },
  );
  if (!/<div id="app">\s*</.test(stdout)) throw new Error(`${route}: la página quedó vacía`);
  if (stdout.includes('Cargando la guía…')) throw new Error(`${route}: la guía no terminó de cargar`);
  // El iframe lo vuelve a crear main.js al cargar; sin src no se descarga dos veces.
  return stdout.replace(/(<iframe id="lab-frame"[^>]*?) src="[^"]*"/, '$1');
}

let pages = 0;
if (chrome) {
  await new Promise((ok) => server.listen(0, '127.0.0.1', ok));
  const origin = `http://localhost:${server.address().port}`;
  try {
    const html = [];
    for (const route of routes) html.push(await snapshot(origin, route));
    routes.forEach((route, i) => {
      const file = join(OUT, route, 'index.html');
      mkdirSync(dirname(file), { recursive: true });
      writeFileSync(file, html[i]);
    });
    pages = routes.length;
  } finally {
    server.close();
  }
} else {
  for (const route of routes.slice(1)) {
    mkdirSync(join(OUT, route), { recursive: true });
    copyFileSync(join(OUT, 'index.html'), join(OUT, route, 'index.html'));
  }
}
console.log(`Páginas: ${routes.length} (${pages ? 'pregeneradas' : 'sin pregenerar'})`);
