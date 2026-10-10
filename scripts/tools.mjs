// Localiza Chrome y Pandoc para los scripts de build. Rutas: variables
// CHROME_PATH y PANDOC_PATH, o las habituales. En GitHub Actions (CI) que falte
// una herramienta es un error; en local solo se avisa y se devuelve null.

import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';

export function findTool(envVar, candidates, skipped = 'Se omiten esos formatos.') {
  if (process.env[envVar]) return process.env[envVar];
  for (const c of candidates) {
    if (c.includes('/') || c.includes('\\')) {
      if (existsSync(c)) return c;
    } else {
      try {
        execFileSync(c, ['--version'], { stdio: 'ignore' });
        return c;
      } catch {}
    }
  }
  const msg = `No se encuentra ${envVar.replace('_PATH', '').toLowerCase()} (define ${envVar}).`;
  if (process.env.CI) throw new Error(msg);
  console.warn(`⚠ ${msg} ${skipped}`);
  return null;
}

export function findChrome(skipped) {
  return findTool(
    'CHROME_PATH',
    [
      'C:/Program Files/Google/Chrome/Application/chrome.exe',
      'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
      '/usr/bin/google-chrome',
      '/usr/bin/chromium',
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    ],
    skipped,
  );
}
