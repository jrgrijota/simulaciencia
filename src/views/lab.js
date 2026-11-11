import { navigateToCatalog, buildShareUrl } from '../router.js';
import { guidePath, guionPath } from '../paths.js';
import { guideLangFor, hasGuion, loadGuide } from '../data/guides.js';
import { guideSummary, guideMisconceptions, inlineHtml } from '../guides/shared.js';
import { footerMarkup } from '../components/footer.js';
import { copyText, flashCopied } from '../components/copy.js';
import { langSwitchMarkup } from '../components/lang-switch.js';
import { simTitle, simUrl, simDescription, isPractical, studentDoc, courseLabel, subjectTags, tagLabel, TOPICS } from '../data/simulations.js';
import { getLang, L } from '../i18n.js';

// Parámetros (sim.params) que se pasan de la dirección de la web a la simulación o
// a la práctica, para abrirla ya preparada:
//   /simulaciones/practica-densidad/?nivel=libre&muestra=7
//   /simulaciones/densidad/?modo=comparar&a=madera&b=hierro (fichas del alumnado)
function withSimParams(sim, href) {
  if (!sim.params) return href;
  const url = new URL(href);
  const here = new URLSearchParams(location.search);
  for (const p of sim.params) if (here.has(p)) url.searchParams.set(p, here.get(p));
  return url.href;
}
const frameUrl = (sim, lang) => withSimParams(sim, simUrl(sim, lang));

// La ficha o el guion del alumnado solo están en español.
const hasStudentDoc = (sim, lang) => lang === 'es' && hasGuion(sim.id);

function buildEmbedCode(sim) {
  const lang = getLang();
  const url = frameUrl(sim, lang);
  return `<iframe\n  src="${url}"\n  title="${simTitle(sim, lang)}"\n  width="100%"\n  height="600"\n  frameborder="0"\n  allowfullscreen\n></iframe>`;
}

function createShareModal(sim) {
  const practical = isPractical(sim);
  // El enlace conserva los parámetros de la dirección (en una práctica, el nivel,
  // la muestra y la probeta; en una simulación, el modo y los valores de la ficha).
  const shareUrl = withSimParams(sim, buildShareUrl(sim.id));
  const embedCode = buildEmbedCode(sim);

  const el = document.createElement('div');
  el.id = 'share-modal';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.setAttribute('aria-labelledby', 'share-modal-title');
  el.className = 'fixed inset-0 z-50 flex items-center justify-center p-4';
  el.innerHTML = `
    <div class="absolute inset-0 bg-[#1e293b]/60 backdrop-blur" id="share-backdrop"></div>
    <div class="relative w-full max-w-lg rounded-lg border border-[#e2e8f0] bg-white shadow-xl">
      <div class="flex items-center justify-between border-b border-[#e2e8f0] px-5 py-4">
        <h2 id="share-modal-title" class="font-semibold text-[#1e293b]">${practical ? 'Compartir práctica' : L('Compartir simulación', 'Share simulation', 'Comparteix la simulació', 'Partekatu simulazioa', 'Compartir simulación')}</h2>
        <button id="share-close" aria-label="${L('Cerrar', 'Close', 'Tanca', 'Itxi', 'Pechar')}" class="rounded-md p-1 text-[#64748b] transition-colors hover:bg-[#f1f5f9] hover:text-[#1e293b]">
          <i data-lucide="x" class="h-5 w-5"></i>
        </button>
      </div>

      <div class="flex flex-col gap-5 p-5">

        <!-- Bloque 1: enlace directo -->
        <div>
          <p class="text-sm font-semibold text-[#1e293b]">${L('Enlace directo', 'Direct link', 'Enllaç directe', 'Esteka zuzena', 'Ligazón directa')}</p>
          <p class="mt-0.5 text-xs text-[#64748b]">${L('Pégalo en el chat de clase, en un correo o en tu plataforma (Moodle, Classroom, Teams…).', 'Paste it into your class chat, an email or your platform (Moodle, Classroom, Teams…).', 'Enganxa’l al xat de classe, en un correu o a la teva plataforma (Moodle, Classroom, Teams…).', 'Itsatsi klaseko txatean, mezu elektroniko batean edo zure plataforman (Moodle, Classroom, Teams…).', 'Pégaa no chat da clase, nun correo ou na túa plataforma (Moodle, Classroom, Teams…).')}</p>
          <div class="mt-2 flex gap-2">
            <input
              id="share-url"
              type="text"
              readonly
              value="${shareUrl}"
              class="min-w-0 flex-1 rounded-md border border-[#e2e8f0] bg-[#f8fafc] px-3 py-1.5 text-xs text-[#1e293b] focus:outline-none"
            />
            <button
              data-copy="share-url"
              class="copy-btn inline-flex shrink-0 items-center gap-1.5 rounded-md bg-[#0369a1] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#075985]"
            >
              <i data-lucide="copy" class="h-3.5 w-3.5"></i>
              <span class="copy-label">${L('Copiar', 'Copy', 'Copia', 'Kopiatu', 'Copiar')}</span>
            </button>
          </div>
        </div>

        <!-- Bloque 2: código embed -->
        <div>
          <p class="text-sm font-semibold text-[#1e293b]">${L('Insertar en tu web o en Moodle', 'Embed in your website or Moodle', 'Insereix-la al teu web o a Moodle', 'Txertatu zure webgunean edo Moodlen', 'Inserir na túa web ou en Moodle')}</p>
          <p class="mt-0.5 text-xs text-[#64748b]">${L('Si tu plataforma permite añadir HTML, pega este código. La simulación aparecerá integrada en la página.', 'If your platform lets you add HTML, paste this code. The simulation will appear inside the page.', 'Si la teva plataforma permet afegir HTML, enganxa aquest codi. La simulació apareixerà integrada a la pàgina.', 'Zure plataformak HTMLa gehitzen uzten badu, itsatsi kode hau. Simulazioa orrian txertatuta agertuko da.', 'Se a túa plataforma permite engadir HTML, pega este código. A simulación aparecerá integrada na páxina.')}</p>
          <div class="mt-2 flex gap-2">
            <textarea
              id="share-embed"
              readonly
              rows="4"
              class="min-w-0 flex-1 resize-none rounded-md border border-[#e2e8f0] bg-[#f8fafc] px-3 py-1.5 font-mono text-xs text-[#1e293b] focus:outline-none"
            >${embedCode}</textarea>
            <button
              data-copy="share-embed"
              class="copy-btn inline-flex shrink-0 items-start gap-1.5 rounded-md bg-[#0369a1] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#075985]"
            >
              <i data-lucide="copy" class="h-3.5 w-3.5 mt-0.5"></i>
              <span class="copy-label">${L('Copiar', 'Copy', 'Copia', 'Kopiatu', 'Copiar')}</span>
            </button>
          </div>
        </div>

      </div>
    </div>`;
  return el;
}

// «Sobre esta simulación»: texto bajo el escenario, en el propio HTML pregenerado,
// para que los buscadores y las IA sepan qué enseña la página sin ejecutar la
// simulación (que va en un iframe de otro dominio). Datos del catálogo y, en
// español e inglés, el resumen y las ideas previas de la guía docente.
const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ESC[c]);
const ABOUT_LINK = 'font-medium text-[#0369a1] underline hover:text-[#075985]';

function aboutMarkup(sim, lang, guide) {
  const practical = isPractical(sim);
  const topics = TOPICS.filter((t) => t.sims.includes(sim.id)).map((t) => t.label[lang] ?? t.label.es);
  const row = (label, value) =>
    value ? `<div><dt class="font-semibold text-[#1e293b]">${label}</dt><dd class="text-[#475569]">${value}</dd></div>` : '';
  const guideLink = guide
    ? `<a href="${guidePath(sim.id, guide)}" data-route${guide !== lang ? ` hreflang="${guide}"` : ''} class="${ABOUT_LINK}">${
        practical
          ? 'Guía docente de la práctica'
          : L('Guía docente', 'Teacher guide', 'Guia docent (en castellà)', 'Irakaslearen gida (gaztelaniaz)', 'Guía docente (en castelán)')
      }</a>`
    : '';
  const guionLink = hasStudentDoc(sim, lang) ? `<a href="${guionPath(sim.id)}" data-route class="${ABOUT_LINK}">${studentDoc(sim).label}</a>` : '';
  return `
  <section id="lab-about" aria-labelledby="lab-about-title" data-print-hide class="border-t border-[#e2e8f0] bg-white">
    <div class="mx-auto max-w-3xl px-4 py-10 text-[#334155]">
      <h2 id="lab-about-title" class="text-xl font-semibold text-[#1e293b]">${
        practical
          ? 'Sobre esta práctica'
          : L('Sobre esta simulación', 'About this simulation', 'Sobre aquesta simulació', 'Simulazio honi buruz', 'Sobre esta simulación')
      }: ${esc(simTitle(sim, lang))}</h2>
      <p class="mt-3 leading-relaxed">${esc(simDescription(sim, lang))}</p>
      <div id="lab-about-guide"${guide === lang ? ' data-pending' : ''}></div>
      ${!practical && hasStudentDoc(sim, lang) ? `<p class="mt-3 leading-relaxed">Esta simulación tiene una <a href="${guionPath(sim.id)}" data-route class="${ABOUT_LINK}">ficha de actividades</a> asociada para el alumnado: predice, observa y explica, con enlaces que abren la simulación ya preparada. Se descarga en Word, LibreOffice o PDF.</p>` : ''}
      ${guide && guide !== lang ? `<p class="mt-3 leading-relaxed">${L(
        '',
        '',
        'La guia docent, en castellà, recull per a cada curs els sabers bàsics, una seqüència per explicar-la a classe i les idees prèvies de l’alumnat que ajuda a corregir.',
        'Irakaslearen gidak, gaztelaniaz, maila bakoitzeko oinarrizko jakintzak, klasean azaltzeko sekuentzia bat eta ikasleen aurretiazko ideia okerrak zuzentzeko proposamenak biltzen ditu.',
        'A guía docente, en castelán, recolle para cada curso os saberes básicos, unha secuencia para explicala na clase e as ideas previas do alumnado que axuda a corrixir.',
      )}</p>` : ''}
      <dl class="mt-6 grid gap-4 text-sm sm:grid-cols-2">
        ${row(L('Cursos', 'Year groups', 'Cursos', 'Mailak', 'Cursos'), sim.courses.map((c) => courseLabel(c, lang)).join(', '))}
        ${row(L('Materia', 'Subject', 'Matèria', 'Ikasgaia', 'Materia'), subjectTags(sim).map((t) => tagLabel(t, lang)).join(', '))}
        ${row(L('Tema', 'Topic', 'Tema', 'Gaia', 'Tema'), topics.join(', '))}
        ${row(
          L('Uso', 'Use', 'Ús', 'Erabilera', 'Uso'),
          L(
            'Gratis, sin registro ni instalación. En el navegador del ordenador, la tableta o el móvil.',
            'Free, no sign-up or installation. Runs in the browser on a computer, tablet or phone.',
            "Gratuïta, sense registre ni instal·lació. Al navegador de l'ordinador, la tauleta o el mòbil.",
            'Doakoa, erregistrorik eta instalaziorik gabe. Ordenagailuko, tabletako edo mugikorreko nabigatzailean.',
            'De balde, sen rexistro nin instalación. No navegador do ordenador, a tableta ou o móbil.',
          ),
        )}
      </dl>
      <p class="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        ${guideLink}
        ${guionLink}
        <a href="${frameUrl(sim, lang)}" target="_blank" rel="noopener" class="${ABOUT_LINK}">${L(
          'Abrir sola en una pestaña',
          'Open on its own in a new tab',
          'Obre-la sola en una pestanya',
          'Ireki bakarrik fitxa berri batean',
          'Abrila soa nunha lapela',
        )}</a>
      </p>
      <p class="mt-6 text-xs text-[#64748b]">${L(
        'Autor: Juan Ramón Grijota, profesor de Física y Química. Licencia',
        'Author: Juan Ramón Grijota, Physics and Chemistry teacher. Licence',
        'Autor: Juan Ramón Grijota, professor de Física i Química. Llicència',
        'Egilea: Juan Ramón Grijota, Fisika eta Kimikako irakaslea. Lizentzia:',
        'Autor: Juan Ramón Grijota, profesor de Física e Química. Licenza',
      )} <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.${lang}" target="_blank" rel="noopener license" class="underline hover:text-[#0369a1]">CC BY-SA 4.0</a>.</p>
    </div>
  </section>
  ${footerMarkup()}`;
}

// Resumen de la guía («Ficha rápida») y hasta cuatro ideas previas que la
// simulación ayuda a corregir. Solo si la guía está en el idioma de la página.
async function fillAboutFromGuide(root, sim, lang) {
  const box = root.querySelector('#lab-about-guide[data-pending]');
  if (!box) return;
  const md = await loadGuide(sim.id, lang);
  if (!box.isConnected) return;
  const summary = guideSummary(md);
  const ideas = guideMisconceptions(md).slice(0, 4);
  box.innerHTML = `
    ${summary ? `<p class="mt-3 leading-relaxed">${inlineHtml(summary, lang)}</p>` : ''}
    ${ideas.length ? `
      <h3 class="mt-6 font-semibold text-[#1e293b]">${L('Ideas previas que ayuda a corregir', 'Misconceptions it helps to address')}</h3>
      <ul class="mt-2 list-disc space-y-1.5 pl-5 leading-relaxed">
        ${ideas.map((i) => `<li>${esc(i.idea)}: ${esc(i.correct.replace(/\.$/, ''))}.</li>`).join('')}
      </ul>` : ''}`;
  box.removeAttribute('data-pending');
}

// Ancho de diseño base de las simulaciones: panel de control (370px) + lienzo
// p5.js (900px) = 1270px. Por debajo de esto hay que escalar para no recortar.
const BASE_WIDTH = 1270;

export function renderLab(root, sim) {
  const lang = getLang();
  const title = simTitle(sim, lang);
  const guide = guideLangFor(sim.id, lang);
  const withGuide = !!guide;
  const practical = isPractical(sim);
  const guionButton = hasStudentDoc(sim, lang)
    ? `<a href="${guionPath(sim.id)}" data-route class="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[#e2e8f0] bg-white px-3 py-1.5 text-sm font-medium text-[#1e293b] transition-colors hover:border-[#0369a1] hover:text-[#0369a1]">
        <i data-lucide="clipboard-list" class="h-4 w-4"></i>
        <span class="sr-only sm:not-sr-only">${studentDoc(sim).short}</span>
      </a>`
    : '';
  const guideButton = withGuide
    ? `${guionButton}<a href="${guidePath(sim.id, guide)}" data-route${guide !== lang ? ` hreflang="${guide}"` : ''} class="${guionButton ? '' : 'ml-auto '}inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[#e2e8f0] bg-white px-3 py-1.5 text-sm font-medium text-[#1e293b] transition-colors hover:border-[#0369a1] hover:text-[#0369a1]">
        <i data-lucide="book-open" class="h-4 w-4"></i>
        <span class="sr-only sm:not-sr-only">${L('Guía docente', 'Teacher guide', 'Guia docent (castellà)', 'Irakaslearen gida (gaztelaniaz)', 'Guía docente (castelán)')}</span>
      </a>`
    : '';
  root.innerHTML = `
  <div class="flex h-screen flex-col overflow-hidden">
    <header data-print-hide class="flex h-14 shrink-0 items-center gap-3 border-b border-[#e2e8f0] bg-white px-4">
      <button id="lab-back" aria-label="${L('Volver al catálogo', 'Back to catalogue', 'Torna al catàleg', 'Itzuli katalogora', 'Volver ao catálogo')}" class="inline-flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-[#1e293b] transition-colors hover:bg-[#f1f5f9] hover:text-[#0369a1]">
        <i data-lucide="arrow-left" class="h-4 w-4"></i>
        <span class="hidden sm:inline">${L('Volver al catálogo', 'Back to catalogue', 'Torna al catàleg', 'Itzuli katalogora', 'Volver ao catálogo')}</span>
      </button>
      <div class="hidden h-5 w-px bg-[#e2e8f0] sm:block"></div>
      <h1 class="sr-only truncate font-semibold text-[#1e293b] sm:not-sr-only">${title}</h1>
      ${guideButton}
      <button id="lab-fs" class="${withGuide ? '' : 'ml-auto '}inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[#e2e8f0] bg-white px-3 py-1.5 text-sm font-medium text-[#1e293b] transition-colors hover:border-[#0369a1] hover:text-[#0369a1]">
        <i data-lucide="maximize" class="h-4 w-4"></i>
        <span class="sr-only sm:not-sr-only">${L('Pantalla completa', 'Full screen', 'Pantalla completa', 'Pantaila osoa', 'Pantalla completa')}</span>
      </button>
      <button id="lab-share" class="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-[#0369a1] px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#075985]">
        <i data-lucide="share-2" class="h-4 w-4"></i>
        <span class="sr-only sm:not-sr-only">${L('Compartir', 'Share', 'Comparteix', 'Partekatu', 'Compartir')}</span>
      </button>
      ${langSwitchMarkup({ compact: true })}
    </header>

    <div id="lab-stage" data-print-main class="relative min-h-0 flex-1 overflow-hidden bg-[#f8fafc]">
      <div id="lab-loader" class="lab-skeleton absolute inset-0 z-10 flex items-center justify-center text-sm text-[#64748b]">
        ${practical ? 'Cargando la práctica…' : L('Cargando simulación…', 'Loading simulation…', 'Carregant la simulació…', 'Simulazioa kargatzen…', 'Cargando a simulación…')}
      </div>
      <button id="lab-fs-exit" class="absolute right-4 top-4 z-20 hidden items-center gap-1.5 rounded-md bg-[#1e293b]/85 px-3 py-1.5 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-[#1e293b]">
        <i data-lucide="minimize" class="h-4 w-4"></i>
        ${L('Salir de pantalla completa', 'Exit full screen', 'Surt de la pantalla completa', 'Irten pantaila osotik', 'Saír da pantalla completa')}
      </button>
      <div class="absolute inset-0 flex justify-center">
        <iframe
          id="lab-frame"
          title="${title}"
          src="${frameUrl(sim, lang)}"
          sandbox="allow-scripts allow-same-origin allow-forms"
          referrerpolicy="no-referrer-when-downgrade"
          class="block border-0 opacity-0 transition-opacity duration-300"
        ></iframe>
      </div>
    </div>
  </div>
  ${aboutMarkup(sim, lang, guide)}`;
  fillAboutFromGuide(root, sim, lang);

  const stage = root.querySelector('#lab-stage');
  const iframe = root.querySelector('#lab-frame');

  stage.style.backgroundColor = '#000000';
  const loader = root.querySelector('#lab-loader');

  // --- Ajuste del iframe ---
  // Dos estrategias según el tipo de simulación:
  //  · responsive: la simulación adapta su propio layout (panel/lienzo) a
  //    cualquier ancho. La dejamos ocupar el 100% y NO la escalamos: así su
  //    diseño móvil/tablet funciona como en su web original.
  //  · rígida (~1270px): no se adapta, así que la escalamos proporcionalmente
  //    con transform: scale() para encuadrarla entera, sin scroll horizontal ni
  //    recortes. Nunca ampliamos por encima de 1:1 (factor máximo = 1).
  function fit() {
    const availW = stage.clientWidth;
    const availH = stage.clientHeight;
    if (!availW || !availH) return;

    if (sim.responsive !== false) {
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.transform = 'none';
      return;
    }

    const factor = Math.min(1, availW / BASE_WIDTH);
    iframe.style.width = `${BASE_WIDTH}px`;
    // alto lógico tal que, tras escalar, ocupe todo el alto disponible
    iframe.style.height = `${availH / factor}px`;
    iframe.style.transform = `scale(${factor})`;
    iframe.style.transformOrigin = 'top center';
  }

  iframe.addEventListener('load', () => {
    loader.style.display = 'none';
    iframe.style.opacity = '1';
    fit();
  });

  root.querySelector('#lab-back').addEventListener('click', navigateToCatalog);

  // --- Pantalla completa (Fullscreen API) ---
  // Ponemos a pantalla completa solo el escenario: la simulación se ve sin
  // navbar ni cromo del navegador. Salir con el botón flotante o con Esc.
  const fsExit = root.querySelector('#lab-fs-exit');

  const isFullscreen = () =>
    document.fullscreenElement || document.webkitFullscreenElement;

  function enterFullscreen() {
    const fn = stage.requestFullscreen || stage.webkitRequestFullscreen;
    if (fn) fn.call(stage);
  }
  function exitFullscreen() {
    const fn = document.exitFullscreen || document.webkitExitFullscreen;
    if (fn) fn.call(document);
  }

  function onFullscreenChange() {
    const fs = !!isFullscreen();
    fsExit.classList.toggle('hidden', !fs);
    fsExit.classList.toggle('flex', fs);
    // El tamaño del escenario cambia al entrar/salir: reajusta el escalado.
    fit();
    requestAnimationFrame(fit);
  }

  root.querySelector('#lab-fs').addEventListener('click', enterFullscreen);
  fsExit.addEventListener('click', exitFullscreen);
  document.addEventListener('fullscreenchange', onFullscreenChange);
  document.addEventListener('webkitfullscreenchange', onFullscreenChange);

  // --- Modal de compartir ---
  let modal = null;

  function openModal() {
    modal = createShareModal(sim);
    document.body.appendChild(modal);
    if (window.lucide) window.lucide.createIcons({ nodes: modal.querySelectorAll('[data-lucide]') });

    modal.querySelector('#share-close').addEventListener('click', closeModal);
    modal.querySelector('#share-backdrop').addEventListener('click', closeModal);
    // Esc cierra; Tab y Mayús+Tab no salen de la ventana mientras está abierta.
    modal.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') return closeModal();
      if (e.key !== 'Tab') return;
      const items = [...modal.querySelectorAll('button, input, textarea')];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    modal.querySelectorAll('.copy-btn').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const sourceId = btn.dataset.copy;
        const source = modal.querySelector(`#${sourceId}`);
        await copyText(source.value);
        flashCopied(btn);
      });
    });

    modal.querySelector('#share-close').focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.remove();
    modal = null;
    // El foco vuelve al botón que abrió la ventana.
    root.querySelector('#lab-share')?.focus();
  }

  root.querySelector('#lab-share').addEventListener('click', openModal);

  // Ajuste inicial + en cada redimensionado de ventana (proyector, rotación…).
  fit();
  requestAnimationFrame(fit);
  const onResize = () => fit();
  window.addEventListener('resize', onResize);

  // Cleanup: al volver al catálogo, retira los listeners globales y el modal.
  return () => {
    window.removeEventListener('resize', onResize);
    document.removeEventListener('fullscreenchange', onFullscreenChange);
    document.removeEventListener('webkitfullscreenchange', onFullscreenChange);
    if (isFullscreen()) exitFullscreen();
    closeModal();
  };
}
