import { navigateToCatalog, buildShareUrl } from '../router.js';

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
      <button id="lab-copy" class="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-[#0284c7] px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#0369a1]">
        <i data-lucide="copy" class="h-4 w-4"></i>
        <span id="lab-copy-label" class="hidden sm:inline">Copiar enlace para clase</span>
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

  // Fondo negro en el escenario: las franjas laterales (cuando la pantalla es
  // más ancha que 1270px) y la pantalla completa quedan neutras y disimulan
  // bien con cualquier tema de la simulación.
  stage.style.backgroundColor = '#000000';
  const loader = root.querySelector('#lab-loader');
  const copyBtn = root.querySelector('#lab-copy');
  const copyLabel = root.querySelector('#lab-copy-label');

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

  let resetTimer;
  copyBtn.addEventListener('click', async () => {
    const url = buildShareUrl(sim.id);
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = url;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    copyLabel.textContent = '¡Enlace copiado!';
    copyBtn.classList.remove('bg-[#0284c7]', 'hover:bg-[#0369a1]');
    copyBtn.classList.add('bg-[#16a34a]');
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      copyLabel.textContent = 'Copiar enlace para clase';
      copyBtn.classList.add('bg-[#0284c7]', 'hover:bg-[#0369a1]');
      copyBtn.classList.remove('bg-[#16a34a]');
    }, 2000);
  });

  // Ajuste inicial + en cada redimensionado de ventana (proyector, rotación…).
  fit();
  requestAnimationFrame(fit);
  const onResize = () => fit();
  window.addEventListener('resize', onResize);

  // Cleanup: al volver al catálogo, retira los listeners globales y el timer.
  return () => {
    window.removeEventListener('resize', onResize);
    document.removeEventListener('fullscreenchange', onFullscreenChange);
    document.removeEventListener('webkitfullscreenchange', onFullscreenChange);
    if (isFullscreen()) exitFullscreen();
    clearTimeout(resetTimer);
  };
}
