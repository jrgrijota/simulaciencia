// Contacto: un único formulario «Escríbeme» que se abre en una ventana desde
// cualquier página (botón de la cabecera, enlace del pie, «Sobre el proyecto» y
// la tarjeta del final de cada simulación y guía). Lo envía Formspree, que reenvía
// el mensaje al correo del autor; la web no guarda nada.
//
// El formulario cambia según desde dónde se abra (acuerdo de la mesa de revisión):
//   - desde una simulación (alumnado, sobre todo): solo el mensaje y el correo opcional;
//   - desde una guía, el pie o la cabecera: además «¿Eres docente?» y «¿La usas en clase?».
// El correo siempre es opcional («solo si quieres respuesta»): no se pide a menores.
//
// Cualquier elemento con data-contact abre la ventana (ver installContact en main.js):
//   data-contact="sim|guide|general" y, si va ligado a una simulación, data-contact-sim="<id>".
import { L, getLang } from '../i18n.js';
import { PAGE_PATHS } from '../paths.js';
import { COURSES, courseLabel, getSimulationById, simTitle } from '../data/simulations.js';
import { trackEvent } from '../analytics.js';
import { copyText, flashCopied } from './copy.js';

// Código del formulario en Formspree (https://formspree.io/f/<código>).
const FORMSPREE_ID = 'xjywzege';
const ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;
export const CONTACT_EMAIL = 'contacto@simulaciencia.es';

const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ESC[c]);

const FIELD = 'w-full rounded-md border border-[#cbd5e1] bg-white px-3 py-2 text-[#0f172a] focus:border-[#0369a1] focus:outline-2 focus:outline-[#0369a1]/30';
const LABEL = 'block text-sm font-bold text-[#1e293b]';
const HINT = 'font-normal text-[#64748b]';
const CHOICE = 'inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-md border border-[#cbd5e1] px-3 text-sm text-[#1e293b] has-[:checked]:border-[#0369a1] has-[:checked]:bg-[#f0f9ff] has-[:checked]:font-bold';

const t = {
  open: () => L('Escríbeme', 'Write to me', 'Escriu-me', 'Idatzi iezadazu', 'Escríbeme'),
  close: () => L('Cerrar', 'Close', 'Tanca', 'Itxi', 'Pechar'),
};

// Botón de la cabecera: discreto, con borde, para no ser un tercer enlace igual.
export function contactHeaderButton({ hideOnMobile = false } = {}) {
  return `<button type="button" data-contact="general" class="${hideOnMobile ? 'max-sm:hidden ' : ''}inline-flex min-h-11 items-center gap-1.5 rounded-md border border-[#cbd5e1] px-3 text-sm font-bold text-[#0369a1] transition-colors hover:border-[#0369a1] hover:bg-[#f0f9ff]">
            <i data-lucide="mail" class="h-4 w-4"></i>
            <span class="sr-only sm:not-sr-only">${t.open()}</span>
          </button>`;
}

// Tarjeta pequeña al final de una simulación o de una guía. Tono cercano, sin
// presentarse como profesor (eso queda para la ventana general).
export function contactCardMarkup(sim, from) {
  const guide = from === 'guide';
  return `
      <aside data-print-hide aria-labelledby="contact-card-${from}" class="mt-8 flex flex-col gap-3 rounded-lg border border-[#bae6fd] bg-[#f0f9ff] p-5 sm:flex-row sm:items-center">
        <div class="flex-1">
          <h2 id="contact-card-${from}" class="!m-0 !border-0 !p-0 text-base font-bold text-[#0f172a]">${
            guide
              ? L('¿Cómo te ha ido en clase?', 'How did it go in class?', 'Com t’ha anat a classe?', 'Nola joan zaizu klasean?', 'Como che foi na clase?')
              : L('¿Se te ocurre una mejora?', 'Can you think of an improvement?', 'Se t’acut alguna millora?', 'Hobekuntzaren bat bururatzen zaizu?', 'Ocórreseche unha mellora?')
          }</h2>
          <p class="!m-0 mt-1 text-sm leading-relaxed text-[#334155]">${
            guide
              ? L(
                  'Cuéntame qué ha funcionado, qué cambiarías o qué echas en falta. Leo todos los mensajes.',
                  'Tell me what worked, what you would change or what is missing. I read every message.',
                  'Explica’m què ha funcionat, què canviaries o què hi trobes a faltar. Llegeixo tots els missatges.',
                  'Kontaidazu zer ibili den ondo, zer aldatuko zenukeen edo zer falta den. Mezu guztiak irakurtzen ditut.',
                  'Cóntame que funcionou, que cambiarías ou que botas en falta. Leo todas as mensaxes.',
                )
              : L(
                  'Algo que no funciona, algo que no se entiende o una idea para hacerla mejor. Se leen todos los mensajes.',
                  'Something that doesn’t work, something unclear or an idea to make it better. Every message is read.',
                  'Alguna cosa que no funciona, que no s’entén o una idea per fer-la millor. Es llegeixen tots els missatges.',
                  'Zerbait ez dabil, ez da ulertzen edo hobetzeko ideia bat duzu? Mezu guztiak irakurtzen dira.',
                  'Algo que non funciona, algo que non se entende ou unha idea para facela mellor. Lense todas as mensaxes.',
                )
          }</p>
        </div>
        <button type="button" data-contact="${from}" data-contact-sim="${esc(sim.id)}" class="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-[#0369a1] px-4 text-sm font-bold text-white transition-colors hover:bg-[#075985] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0369a1] sm:self-auto">
          <i data-lucide="mail" class="h-4 w-4"></i>
          ${guide ? t.open() : L('Cuéntalo', 'Tell us', 'Explica-ho', 'Kontatu', 'Cóntao')}
        </button>
      </aside>`;
}

function teacherFields() {
  const radio = (name, value, label) =>
    `<label class="${CHOICE}"><input type="radio" name="${name}" value="${value}" class="accent-[#0369a1]" /> ${label}</label>`;
  const courses = COURSES.map((c) => `<option value="${esc(courseLabel(c.id, 'es'))}">${esc(courseLabel(c.id, getLang()))}</option>`).join('');
  return `
          <fieldset>
            <legend class="${LABEL}">${L('¿Quién escribe?', 'Who is writing?', 'Qui escriu?', 'Nor ari da idazten?', 'Quen escribe?')} <span class="${HINT}">${L('(opcional)', '(optional)', '(opcional)', '(aukerakoa)', '(opcional)')}</span></legend>
            <div class="mt-2 flex flex-wrap gap-2">
              ${radio('perfil', 'Docente', L('Docente', 'Teacher', 'Docent', 'Irakaslea', 'Docente'))}
              ${radio('perfil', 'Estudiante', L('Estudiante', 'Student', 'Estudiant', 'Ikaslea', 'Estudante'))}
              ${radio('perfil', 'Otra persona', L('Otra persona', 'Someone else', 'Una altra persona', 'Beste norbait', 'Outra persoa'))}
            </div>
          </fieldset>
          <div data-contact-teacher hidden class="flex flex-col gap-3 rounded-md bg-[#f8fafc] p-3">
            <fieldset>
              <legend class="${LABEL}">${L('¿Usas SimulaCiencia en clase?', 'Do you use SimulaCiencia in class?', 'Fas servir SimulaCiencia a classe?', 'SimulaCiencia klasean erabiltzen duzu?', 'Usas SimulaCiencia na clase?')}</legend>
              <div class="mt-2 flex flex-wrap gap-2">
                ${radio('usa_en_clase', 'Sí', L('Sí', 'Yes', 'Sí', 'Bai', 'Si'))}
                ${radio('usa_en_clase', 'Todavía no', L('Todavía no', 'Not yet', 'Encara no', 'Oraindik ez', 'Aínda non'))}
              </div>
            </fieldset>
            <label class="${LABEL}">${L('¿En qué curso?', 'Which year group?', 'A quin curs?', 'Zein mailatan?', 'En que curso?')}
              <select name="curso" class="${FIELD} mt-1 font-normal">
                <option value="">—</option>${courses}<option value="Otro">${L('Otro', 'Other', 'Un altre', 'Beste bat', 'Outro')}</option>
              </select>
            </label>
          </div>`;
}

function dialogMarkup(from, sim) {
  const forSim = from === 'sim' && sim;
  const title = forSim
    ? L('¿Algo que mejorar?', 'Something to improve?', 'Alguna cosa a millorar?', 'Zerbait hobetzeko?', 'Algo que mellorar?')
    : t.open();
  const intro = forSim
    ? L(
        `Sobre «${esc(simTitle(sim, 'es'))}»: cuéntalo con tus palabras, aunque sea una frase. Se leen todos los mensajes.`,
        `About “${esc(simTitle(sim, 'en'))}”: tell us in your own words, even just one sentence. Every message is read.`,
        `Sobre «${esc(simTitle(sim, 'ca'))}»: explica-ho amb les teves paraules, encara que sigui una frase. Es llegeixen tots els missatges.`,
        `«${esc(simTitle(sim, 'eu'))}» simulazioari buruz: kontatu zure hitzekin, esaldi bat besterik ez bada ere. Mezu guztiak irakurtzen dira.`,
        `Sobre «${esc(simTitle(sim, 'gl'))}»: cóntao coas túas palabras, aínda que sexa unha frase. Lense todas as mensaxes.`,
      )
    : L(
        'Soy Juanra, profesor de Física y Química y creador de SimulaCiencia. Si has encontrado un fallo, ves algo que se pueda mejorar o echas en falta alguna simulación para tus clases, no dudes en escribirme. Estaré encantado de leer lo que consideres importante y responder si dejas tu correo. SimulaCiencia es un proyecto en crecimiento y se tiene que seguir construyendo con las aportaciones de todas las personas que utilizamos las simulaciones.',
        'I’m Juanra, a Physics and Chemistry teacher and the creator of SimulaCiencia. If you have found a bug, see something that could be improved or miss a simulation for your lessons, please write to me (in English or Spanish). I’ll be glad to read whatever you think is important and to reply if you leave your email. SimulaCiencia is a growing project, and it has to keep being built with the contributions of all of us who use the simulations.',
        'Soc en Juanra, professor de Física i Química i creador de SimulaCiencia. Si has trobat un error, veus alguna cosa que es pugui millorar o trobes a faltar alguna simulació per a les teves classes, no dubtis a escriure’m (en català o en castellà). Estaré encantat de llegir el que consideris important i de respondre’t si hi deixes el correu. SimulaCiencia és un projecte en creixement i s’ha de continuar construint amb les aportacions de totes les persones que fem servir les simulacions.',
        'Juanra naiz, Fisika eta Kimikako irakaslea eta SimulaCienciaren sortzailea. Akatsen bat aurkitu baduzu, hobetu daitekeen zerbait ikusten baduzu edo zure klaseetarako simulazioren bat falta baduzu, ez izan zalantzarik idazteko (gaztelaniaz edo ingelesez). Pozik irakurriko dut garrantzitsutzat jotzen duzuna, eta erantzun egingo dizut helbidea uzten baduzu. SimulaCiencia hazten ari den proiektua da, eta simulazioak erabiltzen ditugun pertsona guztion ekarpenekin eraikitzen jarraitu behar du.',
        'Son Juanra, profesor de Física e Química e creador de SimulaCiencia. Se atopaches un fallo, ves algo que se poida mellorar ou botas en falta algunha simulación para as túas clases, non dubides en escribirme (en galego ou en castelán). Estarei encantado de ler o que consideres importante e de responderche se deixas o teu correo. SimulaCiencia é un proxecto en crecemento e ten que seguir construíndose coas achegas de todas as persoas que usamos as simulacións.',
      );
  const placeholder = forSim
    ? L('Por ejemplo: no entiendo qué hace el botón…', 'For example: I don’t understand what the button…', 'Per exemple: no entenc què fa el botó…', 'Adibidez: ez dut ulertzen botoiak zer egiten duen…', 'Por exemplo: non entendo que fai o botón…')
    : L('Por ejemplo: la uso en 3.º ESO para…', 'For example: I use it with Year 10 to…', 'Per exemple: la faig servir a 3r d’ESO per…', 'Adibidez: DBH 3n erabiltzen dut…', 'Por exemplo: úsoa en 3.º ESO para…');
  return `
    <form method="dialog" data-contact-form class="flex max-h-[calc(100dvh-2rem)] flex-col">
      <div class="flex items-center justify-between gap-3 border-b border-[#e2e8f0] px-5 py-2">
        <div>
          <h2 id="contact-title" class="font-display text-xl font-bold text-[#0f172a]">${title}</h2>
        </div>
        <button type="button" data-contact-close aria-label="${t.close()}" class="-mr-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-[#64748b] transition-colors hover:bg-[#f1f5f9] hover:text-[#1e293b]">
          <i data-lucide="x" class="h-5 w-5"></i>
        </button>
      </div>
      <div data-contact-fields class="flex flex-col gap-4 overflow-y-auto px-5 py-4">
        <p class="text-sm leading-relaxed text-[#475569]">${intro}</p>
        <label class="${LABEL}">${L('Tu mensaje', 'Your message', 'El teu missatge', 'Zure mezua', 'A túa mensaxe')}
          <textarea name="mensaje" required rows="${forSim ? 4 : 5}" maxlength="5000" placeholder="${placeholder}" class="${FIELD} mt-1 font-normal"></textarea>
        </label>
        ${forSim ? '' : teacherFields()}
        <label class="${LABEL}">${L('Tu correo', 'Your email', 'El teu correu', 'Zure helbide elektronikoa', 'O teu correo')} <span class="${HINT}">${L('(solo si quieres respuesta)', '(only if you’d like a reply)', '(només si vols resposta)', '(erantzuna nahi baduzu bakarrik)', '(só se queres resposta)')}</span>
          <input type="email" name="email" autocomplete="email" class="${FIELD} mt-1 font-normal" />
        </label>
        <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" class="hidden" />
        <p class="text-xs leading-relaxed text-[#64748b]">${L(
          `El mensaje se envía con Formspree y solo se usa para leerlo y, si dejas tu correo, contestarte. <a href="${PAGE_PATHS.legal}" data-route class="underline hover:text-[#0369a1]">Privacidad</a>.`,
          `The message is sent through Formspree and is only used to read it and, if you leave your email, to reply. <a href="${PAGE_PATHS.legal}" data-route hreflang="es" class="underline hover:text-[#0369a1]">Privacy (in Spanish)</a>.`,
          `El missatge s’envia amb Formspree i només s’utilitza per llegir-lo i, si hi deixes el correu, respondre’t. <a href="${PAGE_PATHS.legal}" data-route hreflang="es" class="underline hover:text-[#0369a1]">Privacitat (en castellà)</a>.`,
          `Mezua Formspree bidez bidaltzen da, eta irakurtzeko eta, helbidea uzten baduzu, erantzuteko bakarrik erabiltzen da. <a href="${PAGE_PATHS.legal}" data-route hreflang="es" class="underline hover:text-[#0369a1]">Pribatutasuna (gaztelaniaz)</a>.`,
          `A mensaxe envíase con Formspree e só se usa para lela e, se deixas o teu correo, contestarche. <a href="${PAGE_PATHS.legal}" data-route hreflang="es" class="underline hover:text-[#0369a1]">Privacidade (en castelán)</a>.`,
        )}</p>
        <p data-contact-error role="alert" hidden class="rounded-md border border-[#fecaca] bg-[#fef2f2] px-3 py-2 text-sm text-[#7f1d1d]">${L(
          'No se ha podido enviar. Prueba otra vez dentro de un rato o escribe directamente al correo de abajo.',
          'It couldn’t be sent. Try again in a while or write directly to the email address below.',
          'No s’ha pogut enviar. Torna-ho a provar d’aquí a una estona o escriu directament al correu de sota.',
          'Ezin izan da bidali. Saiatu berriro geroago edo idatzi zuzenean beheko helbidera.',
          'Non se puido enviar. Proba outra vez dentro dun anaco ou escribe directamente ao correo de abaixo.',
        )}</p>
      </div>
      <div data-contact-done hidden role="status" class="flex flex-col items-center gap-2 px-5 py-10 text-center">
        <span class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#dcfce7] text-[#166534]"><i data-lucide="check" class="h-6 w-6"></i></span>
        <p class="font-display text-xl font-bold text-[#0f172a]">${L('¡Gracias por escribir!', 'Thanks for writing!', 'Gràcies per escriure!', 'Eskerrik asko idazteagatik!', 'Grazas por escribir!')}</p>
        <p class="text-sm text-[#475569]">${L(
          'El mensaje ha llegado. Si has dejado tu correo, te contestaré lo antes posible.',
          'Your message has arrived. If you left your email, I’ll reply as soon as I can.',
          'El missatge ha arribat. Si hi has deixat el correu, et respondré tan aviat com pugui.',
          'Mezua iritsi da. Helbidea utzi baduzu, ahal bezain laster erantzungo dizut.',
          'A mensaxe chegou. Se deixaches o teu correo, contestareiche canto antes.',
        )}</p>
      </div>
      <div data-contact-actions class="flex flex-wrap items-center justify-between gap-3 border-t border-[#e2e8f0] px-5 py-3">
        <p class="text-xs text-[#64748b]">${L('¿Prefieres el correo?', 'Prefer email?', 'Prefereixes el correu?', 'Posta elektronikoa nahiago?', 'Prefires o correo?')}
          <a href="mailto:${CONTACT_EMAIL}" translate="no" class="font-bold underline hover:text-[#0369a1]">${CONTACT_EMAIL}</a>
          <button type="button" data-contact-copy class="ml-1 inline-flex min-h-8 items-center gap-1 rounded px-1.5 font-bold text-[#0369a1] hover:bg-[#f0f9ff]"><i data-lucide="copy" class="h-3.5 w-3.5"></i><span class="copy-label">${L('Copiar', 'Copy', 'Copia', 'Kopiatu', 'Copiar')}</span></button>
        </p>
        <button type="submit" data-contact-send class="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#0369a1] px-5 font-bold text-white transition-colors hover:bg-[#075985] disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0369a1]">
          <i data-lucide="send" class="h-4 w-4"></i>
          <span>${L('Enviar', 'Send', 'Envia', 'Bidali', 'Enviar')}</span>
        </button>
      </div>
    </form>`;
}

export function openContact({ from = 'general', simId = null } = {}) {
  const sim = simId ? getSimulationById(simId) : null;
  const dialog = document.createElement('dialog');
  dialog.setAttribute('aria-labelledby', 'contact-title');
  dialog.className =
    'contact-dialog m-auto w-[calc(100%-2rem)] max-w-lg rounded-xl border border-[#e2e8f0] bg-white p-0 text-left shadow-2xl backdrop:bg-[#0f172a]/60 backdrop:backdrop-blur-sm';
  dialog.innerHTML = dialogMarkup(from, sim);
  document.body.append(dialog);
  window.lucide?.createIcons({ nodes: [...dialog.querySelectorAll('[data-lucide]')] });

  const form = dialog.querySelector('form');
  const close = () => dialog.close();
  dialog.addEventListener('close', () => dialog.remove());
  dialog.querySelector('[data-contact-close]').addEventListener('click', close);
  // Un clic fuera de la ventana (en el fondo) la cierra.
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) close();
  });
  dialog.querySelectorAll('a[data-route]').forEach((a) => a.addEventListener('click', close));

  // «¿Usas SimulaCiencia en clase?» solo aparece si quien escribe es docente.
  const teacher = dialog.querySelector('[data-contact-teacher]');
  form.querySelectorAll('input[name="perfil"]').forEach((r) =>
    r.addEventListener('change', () => {
      teacher.hidden = form.perfil.value !== 'Docente';
    }),
  );

  const copyBtn = dialog.querySelector('[data-contact-copy]');
  copyBtn.addEventListener('click', async () => {
    await copyText(CONTACT_EMAIL);
    flashCopied(copyBtn);
  });

  const slug = sim ? sim.id.replace(/^sim-/, '') : from;
  trackEvent(`contacto/abrir/${slug}`, `Contacto abierto: ${sim ? sim.title : from}`);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const send = dialog.querySelector('[data-contact-send]');
    const error = dialog.querySelector('[data-contact-error]');
    error.hidden = true;
    send.disabled = true;
    const data = new FormData(form);
    if (teacher?.hidden) {
      data.delete('usa_en_clase');
      data.delete('curso');
    }
    data.set('origen', from === 'sim' ? 'Simulación' : from === 'guide' ? 'Guía' : 'General');
    if (sim) data.set('simulacion', sim.title);
    data.set('pagina', location.href);
    data.set('idioma', getLang());
    data.set('_subject', `SimulaCiencia: ${sim ? sim.title : 'mensaje'}${from === 'guide' ? ' (guía)' : ''}`);
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(String(res.status));
      dialog.querySelector('[data-contact-fields]').hidden = true;
      dialog.querySelector('[data-contact-actions]').hidden = true;
      dialog.querySelector('[data-contact-done]').hidden = false;
      dialog.querySelector('[data-contact-close]').focus();
      trackEvent(`contacto/enviado/${slug}`, `Contacto enviado: ${sim ? sim.title : from}`);
    } catch {
      error.hidden = false;
      send.disabled = false;
    }
  });

  dialog.showModal();
  form.mensaje.focus();
}

// Un solo escuchador para toda la web: cualquier [data-contact] abre la ventana.
export function installContact() {
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-contact]');
    if (!el || e.defaultPrevented) return;
    e.preventDefault();
    openContact({ from: el.dataset.contact, simId: el.dataset.contactSim || null });
  });
}
