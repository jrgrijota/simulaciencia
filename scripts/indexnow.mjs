// Avisa por IndexNow (Bing, Yandex, Seznam, Naver, Yep…) de las páginas nuevas
// tras cada despliegue, para que esos buscadores no esperen a su próxima visita.
// Un aviso a api.indexnow.org llega a todos los buscadores que usan el protocolo.
// Google no lo usa: para Google sigue valiendo el sitemap de Search Console.
//
//   node scripts/indexnow.mjs list [--todas]  → escribe las direcciones a avisar
//   node scripts/indexnow.mjs send <archivo>   → las envía
//
// «list» compara dist/sitemap.xml con el sitemap publicado (aún el anterior,
// porque se ejecuta antes de desplegar) y da las páginas nuevas más las
// portadas de cada idioma, que cambian con cada simulación que se añade.
// Con --todas da todas las del sitemap (botón «Run workflow» en GitHub).
// La clave no es secreta: los buscadores la comprueban en public/<clave>.txt.
import { readFileSync } from 'node:fs';
import { homePath, absoluteUrl, LANGS } from '../src/paths.js';

const KEY = '56c397aaf82bf4c13790732c7ba8417b';
const HOST = 'simulaciencia.es';
const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

async function list(all) {
  const built = locs(readFileSync('dist/sitemap.xml', 'utf8'));
  if (all) return built;
  let live = [];
  try {
    const res = await fetch(`https://${HOST}/sitemap.xml`);
    if (res.ok) live = locs(await res.text());
  } catch {}
  const homes = LANGS.map((l) => absoluteUrl(homePath(l)));
  return [...new Set([...homes, ...built.filter((u) => !live.includes(u))])];
}

async function send(file) {
  const urlList = readFileSync(file, 'utf8').split('\n').filter(Boolean);
  if (!urlList.length) return console.log('IndexNow: nada que avisar.');
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
  });
  // 200 y 202 son éxito (202: la clave aún se está comprobando).
  console.log(`IndexNow: ${res.status} ${res.statusText} · ${urlList.length} direcciones`);
  console.log(urlList.join('\n'));
  if (!res.ok) process.exitCode = 1;
}

const [cmd, arg] = process.argv.slice(2);
if (cmd === 'list') console.log((await list(arg === '--todas')).join('\n'));
else if (cmd === 'send') await send(arg);
else console.error('Uso: node scripts/indexnow.mjs list [--todas] | send <archivo>');
