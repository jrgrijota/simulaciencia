// Genera la imagen de vista previa (og:image, 1200 × 630) de cada simulación en
// public/og/<nombre>.png, a partir de su miniatura del catálogo (src/components/thumbs.js).
// Es la imagen que muestran WhatsApp, Classroom, Teams o Google Discover al compartir
// la simulación o su guía. No lleva texto en ningún idioma, así que vale para los cinco.
//
// No va en el build: las imágenes se guardan en el repo. Al añadir una simulación
// o cambiar su miniatura, ejecuta `npm run og` y sube las imágenes nuevas.

import { mkdirSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { simulations } from '../src/data/simulations.js';
import { thumbMarkup } from '../src/components/thumbs.js';
import { findChrome } from './tools.mjs';

const ROOT = resolve(import.meta.dirname, '..');
const OUT = join(ROOT, 'public', 'og');
const TMP = join(tmpdir(), `simulaciencia-og-${process.pid}`);
mkdirSync(OUT, { recursive: true });
mkdirSync(TMP, { recursive: true });

const font = (path) => pathToFileURL(join(ROOT, 'node_modules', path)).href;
const LOGO = `<svg viewBox="0 0 64 64" width="120" height="120" aria-hidden="true">
  <g fill="none" stroke="#0284c7" stroke-opacity=".7" stroke-width="1.6">
    <ellipse cx="32" cy="32" rx="28" ry="10"/>
    <ellipse cx="32" cy="32" rx="28" ry="10" transform="rotate(60 32 32)"/>
    <ellipse cx="32" cy="32" rx="28" ry="10" transform="rotate(120 32 32)"/>
  </g>
  <circle cx="32" cy="32" r="5.5" fill="#00c8ff"/>
</svg>`;

const page = (thumb) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: 'JetBrains Mono'; src: url('${font('@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2')}'); }
@font-face { font-family: 'Bricolage Grotesque'; font-weight: 200 800; src: url('${font('@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2')}'); }
html, body { margin: 0; width: 1200px; height: 630px; overflow: hidden; }
body { background: #f8fafc; border-left: 16px solid #0284c7; box-sizing: border-box; display: flex; align-items: center; gap: 48px; padding: 0 56px 0 64px; font-family: 'Bricolage Grotesque', sans-serif; }
.thumb { width: 800px; height: 450px; flex: none; background: #fff; border: 2px solid #e2e8f0; border-radius: 24px; overflow: hidden; }
.brand { display: flex; flex-direction: column; align-items: center; gap: 20px; color: #0369a1; font-size: 30px; font-weight: 700; letter-spacing: -0.01em; text-align: center; line-height: 1.1; }
</style></head><body><div class="thumb">${thumb}</div><div class="brand">${LOGO}<span>simula<br>ciencia.es</span></div></body></html>`;

// Con Playwright, si está instalado (más fiable en contenedores); si no, con Chrome.
let shoot;
let close = async () => {};
try {
  // require y no import: así también lo encuentra si está instalado de forma global.
  const { chromium } = createRequire(import.meta.url)('playwright');
  const browser = await chromium.launch();
  const tab = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  shoot = async (html, png) => {
    await tab.goto(pathToFileURL(html).href);
    await tab.evaluate(() => document.fonts.ready);
    await tab.screenshot({ path: png });
  };
  close = () => browser.close();
} catch {
  const chrome = findChrome('No se generan las imágenes.');
  if (!chrome) process.exit(0);
  shoot = async (html, png) =>
    execFileSync(chrome, [
      '--headless=new', '--disable-gpu', '--hide-scrollbars', '--window-size=1200,630',
      `--user-data-dir=${join(TMP, 'chrome')}`, ...(process.env.CI ? ['--no-sandbox'] : []),
      `--screenshot=${png}`, pathToFileURL(html).href,
    ], { stdio: 'ignore' });
}

let n = 0;
for (const sim of simulations) {
  const thumb = thumbMarkup(sim.id);
  if (!thumb) continue;
  const name = sim.id.replace(/^sim-/, '');
  const html = join(TMP, `${name}.html`);
  writeFileSync(html, page(thumb));
  await shoot(html, join(OUT, `${name}.png`));
  n++;
}
await close();
console.log(`Imágenes de vista previa: ${n} en public/og/`);
