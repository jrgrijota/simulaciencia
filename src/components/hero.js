// Hero de la portada: la simulación de Espectros Atómicos de verdad, incrustada.
//
// El marcado lleva una captura (ligera, y es lo que guarda la página pregenerada);
// mountHero() la cambia por el iframe cuando conviene:
//   - Pantallas de 768 px o más: se carga sola (loading="lazy").
//   - Con «reducir movimiento» activado: se queda la captura y un botón para cargarla.
//   - Móvil: solo la captura; la simulación se abre con el enlace de debajo,
//     porque escalada a ese ancho no se puede usar.
// La simulación se dibuja a 1200 px de ancho como mínimo (con su panel al lado) y
// se escala para caber en el recuadro, igual que hace el Modo Laboratorio.
import { getSimulationById, simTitle, simUrl, courseLabel } from '../data/simulations.js';
import { simPath } from '../paths.js';
import { getLang, L } from '../i18n.js';

const HERO_SIM = 'sim-espectros';
const BASE_W = 1200;
const BASE_H = 700;

export function heroFigureMarkup() {
  const lang = getLang();
  const sim = getSimulationById(HERO_SIM);
  const title = simTitle(sim, lang);
  const courses = sim.courses.map((c) => courseLabel(c, lang)).join(' · ');
  return `
  <figure class="overflow-hidden rounded-2xl border border-[#cbd5e1] bg-white shadow-xl shadow-slate-900/10">
    <div class="flex flex-wrap items-center justify-between gap-2 border-b border-[#e2e8f0] px-4 py-2.5">
      <figcaption class="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
        <span class="font-display text-base font-bold text-[#0f172a]">${title}</span>
        <span class="font-mono text-xs text-[#475569]">${courses}</span>
      </figcaption>
      <span id="hero-live" hidden class="inline-flex items-center gap-1.5 rounded-full bg-[#dcfce7] px-2.5 py-0.5 text-xs font-bold text-[#166534]">
        <svg width="8" height="8" viewBox="0 0 10 10" aria-hidden="true"><circle cx="5" cy="5" r="5" fill="#16a34a"/></svg>
        ${L('Interactiva: pruébala aquí', 'Interactive: try it here', 'Interactiva: prova-la aquí', 'Interaktiboa: probatu hemen', 'Interactiva: próbaa aquí')}
      </span>
    </div>
    <div id="hero-stage" class="hero-stage relative overflow-hidden bg-[#0f0f0f]">
      <img
        id="hero-poster"
        src="/portada/espectros-${lang}.jpg"
        width="${BASE_W}" height="${BASE_H}"
        alt="${L(
          'Captura de la simulación: átomo de hidrógeno con sus niveles de energía, diagrama de niveles y espectro de absorción y de emisión',
          'Screenshot of the simulation: a hydrogen atom with its energy levels, a level diagram and the absorption and emission spectra',
          "Captura de la simulació: àtom d'hidrogen amb els seus nivells d'energia, diagrama de nivells i espectre d'absorció i d'emissió",
          'Simulazioaren pantaila-argazkia: hidrogeno-atomoa bere energia-mailekin, mailen diagrama eta xurgapen- eta igorpen-espektroa',
          'Captura da simulación: átomo de hidróxeno cos seus niveis de enerxía, diagrama de niveis e espectro de absorción e de emisión',
        )}"
        class="absolute inset-0 h-full w-full object-cover object-left-top"
      />
      <button
        id="hero-load"
        type="button"
        hidden
        class="absolute left-1/2 top-1/2 inline-flex min-h-11 -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-lg bg-[#0369a1] px-5 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-[#075985]"
      >
        <i data-lucide="play" class="h-4 w-4"></i>
        ${L('Cargar la simulación aquí', 'Load the simulation here', 'Carrega la simulació aquí', 'Kargatu simulazioa hemen', 'Cargar a simulación aquí')}
      </button>
    </div>
    <div class="flex flex-wrap items-center justify-between gap-3 border-t border-[#e2e8f0] px-4 py-3">
      <p class="text-sm text-[#475569]">${L(
        'Ilumina el átomo, provoca saltos entre niveles y mira cómo se forma su espectro.',
        'Shine light on the atom, make electrons jump between levels and watch its spectrum appear.',
        "Il·lumina l'àtom, provoca salts entre nivells i mira com se'n forma l'espectre.",
        'Argiztatu atomoa, eragin mailen arteko jauziak eta ikusi nola sortzen den haren espektroa.',
        'Ilumina o átomo, provoca saltos entre niveis e mira como se forma o seu espectro.',
      )}</p>
      <a href="${simPath(HERO_SIM, lang)}" data-route class="inline-flex min-h-11 items-center gap-2 rounded-lg px-1 text-sm font-bold text-[#0369a1] underline-offset-4 hover:text-[#075985] hover:underline">
        ${L('Abrir la simulación completa', 'Open the full simulation', 'Obre la simulació completa', 'Ireki simulazio osoa', 'Abrir a simulación completa')}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
  </figure>`;
}

export function mountHero(root) {
  const stage = root.querySelector('#hero-stage');
  if (!stage) return null;
  const lang = getLang();
  const sim = getSimulationById(HERO_SIM);
  const button = root.querySelector('#hero-load');
  const live = root.querySelector('#hero-live');
  const wide = window.matchMedia('(min-width: 768px)');
  const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
  let iframe = null;
  let observer = null;

  function fit() {
    const w = stage.clientWidth;
    const width = Math.max(w, BASE_W);
    const factor = w / width;
    iframe.style.width = `${width}px`;
    iframe.style.height = `${(width * BASE_H) / BASE_W}px`;
    iframe.style.transform = factor < 1 ? `scale(${factor})` : 'none';
  }

  function load({ focus = false } = {}) {
    if (iframe) return;
    button.hidden = true;
    iframe = document.createElement('iframe');
    iframe.id = 'hero-frame';
    iframe.title = `${simTitle(sim, lang)}: ${L('simulación interactiva', 'interactive simulation', 'simulació interactiva', 'simulazio interaktiboa', 'simulación interactiva')}`;
    iframe.loading = 'lazy';
    iframe.allow = 'fullscreen';
    iframe.style.opacity = '0';
    iframe.style.transition = 'opacity .3s';
    iframe.addEventListener('load', () => {
      iframe.style.opacity = '1';
      live.hidden = false;
    }, { once: true });
    iframe.src = simUrl(sim, lang);
    stage.append(iframe);
    fit();
    observer = new ResizeObserver(fit);
    observer.observe(stage);
    if (focus) iframe.focus();
  }

  button.addEventListener('click', () => load({ focus: true }));
  if (wide.matches && !calm.matches) load();
  else if (wide.matches) button.hidden = false;

  return () => observer?.disconnect();
}
