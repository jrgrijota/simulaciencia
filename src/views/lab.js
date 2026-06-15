import { navigateToCatalog, buildShareUrl } from '../router.js';

function buildEmbedCode(sim) {
  const url = sim.url;
  return `<iframe\n  src="${url}"\n  title="${sim.title}"\n  width="100%"\n  height="600"\n  frameborder="0"\n  allowfullscreen\n></iframe>`;
}

function createShareModal(sim) {
  const shareUrl = buildShareUrl(sim.id);
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
        <h2 id="share-modal-title" class="font-semibold text-[#1e293b]">Compartir simulación</h2>
        <button id="share-close" aria-label="Cerrar" class="rounded-md p-1 text-[#64748b] transition-colors hover:bg-[#f1f5f9] hover:text-[#1e293b]">
          <i data-lucide="x" class="h-5 w-5"></i>
        </button>
      </div>

      <div class="flex flex-col gap-5 p-5">

        <!-- Bloque 1: enlace directo -->
        <div>
          <p class="text-sm font-semibold text-[#1e293b]">Enlace directo</p>
          <p class="mt-0.5 text-xs text-[#64748b]">Pégalo en el chat de clase, en un correo o en tu plataforma (Moodle, Classroom, Teams…).</p>
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
              class="copy-btn inline-flex shrink-0 items-center gap-1.5 rounded-md bg-[#0284c7] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#0369a1]"
            >
              <i data-lucide="copy" class="h-3.5 w-3.5"></i>
              <span class="copy-label">Copiar</span>
            </button>
          </div>
        </div>

        <!-- Bloque 2: código embed -->
        <div>
          <p class="text-sm font-semibold text-[#1e293b]">Insertar en tu web o en Moodle</p>
          <p class="mt-0.5 text-xs text-[#64748b]">Si tu plataforma permite añadir HTML, pega este código. La simulación aparecerá integrada en la página.</p>
          <div class="mt-2 flex gap-2">
            <textarea
              id="share-embed"
              readonly
              rows="4"
              class="min-w-0 flex-1 resize-none rounded-md border border-[#e2e8f0] bg-[#f8fafc] px-3 py-1.5 font-mono text-xs text-[#1e293b] focus:outline-none"
            >${embedCode}</textarea>
            <button
              data-copy="share-embed"
              class="copy-btn inline-flex shrink-0 items-start gap-1.5 rounded-md bg-[#0284c7] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#0369a1]"
            >
              <i data-lucide="copy" class="h-3.5 w-3.5 mt-0.5"></i>
              <span class="copy-label">Copiar</span>
            </button>
          </div>
        </div>

      </div>
    </div>`;
  return el;
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
}

function flashCopied(btn) {
  const label = btn.querySelector('.copy-label');
  const icon = btn.querySelector('[data-lucide]');
  label.textContent = '¡Copiado!';
  icon.setAttribute('data-lucide', 'check');
  if (window.lucide) window.lucide.createIcons({ nodes: [icon] });
  btn.classList.replace('bg-[#0284c7]', 'bg-[#16a34a]');
  btn.classList.replace('hover:bg-[#0369a1]', 'hover:bg-[#15803d]');
  setTimeout(() => {
    label.textContent = 'Copiar';
    icon.setAttribute('data-lucide', 'copy');
    if (window.lucide) window.lucide.createIcons({ nodes: [icon] });
    btn.classList.replace('bg-[#16a34a]', 'bg-[#0284c7]');
    btn.classList.replace('hover:bg-[#15803d]', 'hover:bg-[#0369a1]');
  }, 2000);
}

// Ancho de diseño base de las simulaciones: panel de control (370px) + lienzo
// p5.js (900px) = 1270px. Por debajo de esto hay que escalar para no recortar.
const BASE_WIDTH = 1270;

export function renderLab(root, sim) {
  root.innerHTML = `
  <div class="flex h-screen flex-col overflow-hidden">
    <header data-print-hide class="flex h-14 shrink-0 items-center gap-3 border-b border-[#e2e8f0] bg-white px-4">
      <button id="lab-back" class="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-[#1e293b] transition-colors hover:bg-[#f1f5f9] hover:text-[#0284c7]">
        <i data-lucide="arrow-left" class="h-4 w-4"></i>
        Volver al catálogo
      </button>
      <div class="hidden h-5 w-px bg-[#e2e8f0] sm:block"></div>
      <h1 class="hidden truncate font-semibold text-[#1e293b] sm:block">${sim.title}</h1>
      <button id="lab-fs" class="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[#e2e8f0] bg-white px-3 py-1.5 text-sm font-medium text-[#1e293b] transition-colors hover:border-[#0284c7] hover:text-[#0284c7]">
        <i data-lucide="maximize" class="h-4 w-4"></i>
        <span class="hidden sm:inline">Pantalla completa</span>
      </button>
      <button id="lab-share" class="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-[#0284c7] px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#0369a1]">
        <i data-lucide="share-2" class="h-4 w-4"></i>
        <span class="hidden sm:inline">Compartir</span>
      </button>
    </header>

    <div id="lab-stage" data-print-main class="relative min-h-0 flex-1 overflow-hidden bg-[#f8fafc]">
      <div id="lab-loader" class="lab-skeleton absolute inset-0 z-10 flex items-center justify-center text-sm text-[#64748b]">
        Cargando simulación…
      </div>
      <button id="lab-fs-exit" class="absolute right-4 top-4 z-20 hidden items-center gap-1.5 rounded-md bg-[#1e293b]/85 px-3 py-1.5 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-[#1e293b]">
        <i data-lucide="minimize" class="h-4 w-4"></i>
        Salir de pantalla completa
      </button>
      <div class="absolute inset-0 flex justify-center">
        <iframe
          id="lab-frame"
          title="${sim.title}"
          src="${sim.url}"
          sandbox="allow-scripts allow-same-origin allow-forms"
          referrerpolicy="no-referrer-when-downgrade"
          class="block border-0 opacity-0 transition-opacity duration-300"
        ></iframe>
      </div>
    </div>
  </div>`;

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
    modal.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

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
    if (modal) { modal.remove(); modal = null; }
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
