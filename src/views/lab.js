import { navigateToCatalog, buildShareUrl } from '../router.js';
import { guidePath, guionPath, simPath, absoluteUrl, coursePath, topicPath, PAGE_PATHS } from '../paths.js';
import { PLATFORMS } from '../data/platforms.js';
import { trackEvent } from '../analytics.js';
import { guideLangFor, guideLabel, hasGuion, loadGuide } from '../data/guides.js';
import { guideSummary, guideMisconceptions, inlineHtml } from '../guides/shared.js';
import { footerMarkup } from '../components/footer.js';
import { copyText, flashCopied } from '../components/copy.js';
import { langSwitchMarkup } from '../components/lang-switch.js';
import { simTitle, simUrl, simDescription, isPractical, studentDoc, courseLabel, subjectTags, tagLabel, TOPICS, simulationsIn } from '../data/simulations.js';
import { getLang, L } from '../i18n.js';
import { contactCardMarkup } from '../components/contact.js';

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

// Ficha de actividades (en cada idioma) o guion de la práctica (solo en español).
const hasStudentDoc = (sim, lang) => hasGuion(sim.id, lang);

// Nombre corto de la simulación para los eventos de GoatCounter («insertar/densidad»).
const simSlug = (sim) => sim.id.replace(/^sim-/, '');

// El código de inserción lleva debajo del iframe una línea con enlace a la página de la
// simulación: quien la inserta en Moodle, Classroom o su web lleva al alumnado y a otros
// docentes a la guía y la ficha, y la web gana un enlace.
function buildEmbedCode(sim) {
  const lang = getLang();
  const url = frameUrl(sim, lang);
  const page = absoluteUrl(simPath(sim.id, lang));
  const credit = isPractical(sim)
    ? L(
        'Práctica de <a href="{}">SimulaCiencia</a>, con guía docente y guion del alumnado.',
        'Lab practical from <a href="{}">SimulaCiencia</a>, with a teacher guide and a student lab sheet.',
        'Pràctica de <a href="{}">SimulaCiencia</a>, amb guia docent i guió de l’alumnat.',
        '<a href="{}">SimulaCiencia</a> webguneko praktika, irakaslearen gidarekin eta ikaslearen gidoiarekin.',
        'Práctica de <a href="{}">SimulaCiencia</a>, con guía docente e guión do alumnado.',
      ).replace('{}', page)
    : L(
        'Simulación de <a href="{}">SimulaCiencia</a>, con guía docente y ficha de actividades.',
        'Simulation from <a href="{}">SimulaCiencia</a>, with a teacher guide and an activity worksheet.',
        'Simulació de <a href="{}">SimulaCiencia</a>, amb guia docent i fitxa d’activitats.',
        '<a href="{}">SimulaCiencia</a> webguneko simulazioa, irakaslearen gidarekin eta jarduera-fitxarekin.',
        'Simulación de <a href="{}">SimulaCiencia</a>, con guía docente e ficha de actividades.',
      ).replace('{}', page);
  // En español, una línea más que lleva a la página de ayuda: quien ve la simulación
  // insertada en el aula virtual de otro docente descubre que puede hacer lo mismo.
  const more = lang === 'es' ? ` <a href="${absoluteUrl(PAGE_PATHS.insertar)}">Insértala en tu aula virtual</a>.` : '';
  return `<iframe\n  src="${url}"\n  title="${simTitle(sim, lang)}"\n  width="100%"\n  height="600"\n  frameborder="0"\n  allowfullscreen\n></iframe>\n<p style="font-size:14px">${credit}${more}</p>`;
}

const COPY_BTN = 'copy-btn inline-flex h-9 min-w-[7.5rem] shrink-0 items-center justify-center gap-1.5 rounded-md bg-[#0369a1] px-3 text-xs font-semibold text-white transition-colors hover:bg-[#075985] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0369a1]';
const FIELD = 'rounded-md border border-[#e2e8f0] bg-[#f8fafc] text-xs text-[#1e293b] focus:border-[#0369a1] focus:outline-none';

function copyButton(sourceId, label, extra = '') {
  return `<button data-copy="${sourceId}" type="button" class="${COPY_BTN} ${extra}">
              <i data-lucide="copy" class="h-3.5 w-3.5"></i>
              <span class="copy-label">${label}</span>
            </button>`;
}

// Pestaña de una plataforma en el diálogo «Insertar»: pasos numerados, el código (o el
// enlace, donde no se puede insertar) con su botón y, si hace falta, un aviso.
function platformPanel(p, shareUrl, embedCode, selected) {
  const isCode = p.kind === 'code';
  const field = isCode
    ? `<textarea id="embed-src-${p.id}" readonly rows="5" wrap="off" aria-label="${L('Código de inserción', 'Embed code', 'Codi d’inserció', 'Txertatzeko kodea', 'Código de inserción')}" class="${FIELD} min-w-0 flex-1 resize-none px-3 py-2 font-mono leading-relaxed">${embedCode}</textarea>`
    : `<input id="embed-src-${p.id}" type="text" readonly value="${shareUrl}" aria-label="${L('Enlace', 'Link', 'Enllaç', 'Esteka', 'Ligazón')}" class="${FIELD} h-9 min-w-0 flex-1 px-3" />`;
  return `<div id="embed-panel-${p.id}" role="tabpanel" aria-labelledby="embed-tab-${p.id}" class="flex flex-col gap-3 p-5"${selected ? '' : ' hidden'}>
          ${p.lead ? `<p class="text-sm leading-relaxed text-[#334155]">${L(p.lead)}</p>` : ''}
          <ol class="flex flex-col gap-2.5">
            ${p.steps
              .map(
                (s, i) => `<li class="flex gap-2.5 text-sm leading-relaxed text-[#1e293b]">
              <span aria-hidden="true" class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e0f2fe] text-xs font-bold text-[#0369a1]">${i + 1}</span>
              <span>${L(s)}</span>
            </li>`,
              )
              .join('')}
          </ol>
          <div class="flex flex-col gap-2 sm:flex-row sm:items-stretch">
            ${field}
            ${copyButton(`embed-src-${p.id}`, isCode ? L('Copiar código', 'Copy code', 'Copia el codi', 'Kopiatu kodea', 'Copiar código') : L('Copiar enlace', 'Copy link', 'Copia l’enllaç', 'Kopiatu esteka', 'Copiar ligazón'), 'self-end sm:self-auto')}
          </div>
          ${p.note ? `<p class="rounded-md border border-[#fde68a] bg-[#fffbeb] px-3 py-2 text-xs leading-relaxed text-[#78350f]">${L(p.note)}</p>` : ''}
        </div>`;
}

// Diálogo de la simulación. view = 'share' (enlace directo) o 'embed' (insertar en el
// aula virtual, con pestañas por plataforma). Desde «Compartir» se pasa a «Insertar».
function createModal(sim, view) {
  const practical = isPractical(sim);
  // El enlace conserva los parámetros de la dirección (en una práctica, el nivel,
  // la muestra y la probeta; en una simulación, el modo y los valores de la ficha).
  const shareUrl = withSimParams(sim, buildShareUrl(sim.id));
  const embedCode = buildEmbedCode(sim);
  const lang = getLang();
  const helpPath = PAGE_PATHS.insertar;

  const title =
    view === 'embed'
      ? L('Insértala en tu aula virtual', 'Embed it in your virtual classroom', 'Insereix-la a la teva aula virtual', 'Txertatu zure ikasgela birtualean', 'Insírea na túa aula virtual')
      : practical
        ? L('Compartir práctica', 'Share practical', 'Comparteix la pràctica', 'Partekatu praktika', 'Compartir práctica')
        : L('Compartir simulación', 'Share simulation', 'Comparteix la simulació', 'Partekatu simulazioa', 'Compartir simulación');

  const shareBody = `
      <div class="flex flex-col gap-5 p-5">
        <div>
          <p class="text-sm font-semibold text-[#1e293b]">${L('Enlace directo', 'Direct link', 'Enllaç directe', 'Esteka zuzena', 'Ligazón directa')}</p>
          <p class="mt-0.5 text-xs text-[#64748b]">${L('Pégalo en el chat de clase, en un correo o en tu plataforma (Moodle, Classroom, Teams…).', 'Paste it into your class chat, an email or your platform (Moodle, Classroom, Teams…).', 'Enganxa’l al xat de classe, en un correu o a la teva plataforma (Moodle, Classroom, Teams…).', 'Itsatsi klaseko txatean, mezu elektroniko batean edo zure plataforman (Moodle, Classroom, Teams…).', 'Pégaa no chat da clase, nun correo ou na túa plataforma (Moodle, Classroom, Teams…).')}</p>
          <div class="mt-2 flex gap-2">
            <input id="share-url" type="text" readonly value="${shareUrl}" class="${FIELD} h-9 min-w-0 flex-1 px-3" />
            ${copyButton('share-url', L('Copiar', 'Copy', 'Copia', 'Kopiatu', 'Copiar'))}
          </div>
        </div>
        <div class="flex items-center gap-3 rounded-md border border-[#bae6fd] bg-[#f0f9ff] p-3">
          <i data-lucide="code-xml" class="h-5 w-5 shrink-0 text-[#0369a1]"></i>
          <p class="min-w-0 flex-1 text-xs leading-relaxed text-[#1e293b]">${L(
            '¿Prefieres que se vea dentro de tu Moodle, tu Google Sites o tu web, sin salir de ella?',
            'Would you rather it showed inside your Moodle, Google Site or website?',
            'Prefereixes que es vegi dins del teu Moodle, el teu Google Sites o el teu web?',
            'Nahiago duzu zure Moodlen, Google Sitesen edo webgunean bertan ikustea?',
            'Prefires que se vexa dentro do teu Moodle, o teu Google Sites ou a túa web?',
          )}</p>
          <button id="share-to-embed" type="button" class="inline-flex shrink-0 items-center gap-1 rounded-md border border-[#0369a1] bg-white px-3 py-1.5 text-xs font-semibold text-[#0369a1] transition-colors hover:bg-[#0369a1] hover:text-white">${L('Insertar', 'Embed', 'Insereix', 'Txertatu', 'Inserir')}<i data-lucide="arrow-right" class="h-3.5 w-3.5"></i></button>
        </div>
      </div>`;

  const embedBody = `
      <div role="tablist" aria-label="${L('Plataforma', 'Platform', 'Plataforma', 'Plataforma', 'Plataforma')}" class="flex shrink-0 gap-1 overflow-x-auto border-b border-[#e2e8f0] px-3 pt-2">
        ${PLATFORMS.map(
          (p, i) => `<button id="embed-tab-${p.id}" role="tab" type="button" data-platform="${p.id}" aria-controls="embed-panel-${p.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" class="embed-tab -mb-px shrink-0 whitespace-nowrap rounded-t-md border border-transparent px-3 py-2 text-sm font-semibold text-[#475569] hover:text-[#0369a1] aria-selected:border-[#e2e8f0] aria-selected:border-b-white aria-selected:bg-white aria-selected:text-[#0369a1]">${L(p.name)}</button>`,
        ).join('')}
      </div>
      ${PLATFORMS.map((p, i) => platformPanel(p, shareUrl, embedCode, i === 0)).join('')}
      <div class="flex shrink-0 flex-wrap items-center justify-between gap-2 border-t border-[#e2e8f0] px-5 py-3 text-xs text-[#64748b]">
        <span>${L('Funciona en el ordenador, la pizarra digital y el móvil, y se actualiza sola.', 'Works on computers, interactive whiteboards and phones, and updates itself.', 'Funciona a l’ordinador, la pissarra digital i el mòbil, i s’actualitza sola.', 'Ordenagailuan, arbel digitalean eta mugikorrean dabil, eta bere kabuz eguneratzen da.', 'Funciona no ordenador, no encerado dixital e no móbil, e actualízase soa.')}</span>
        <a href="${helpPath}" data-route${lang !== 'es' ? ' hreflang="es"' : ''} class="font-semibold text-[#0369a1] underline hover:text-[#075985]">${L('Más ayuda paso a paso', 'Step-by-step help (in Spanish)', 'Més ajuda pas a pas (en castellà)', 'Laguntza gehiago (gaztelaniaz)', 'Máis axuda paso a paso (en castelán)')}</a>
      </div>`;

  const el = document.createElement('div');
  el.id = 'share-modal';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.setAttribute('aria-labelledby', 'share-modal-title');
  el.className = 'fixed inset-0 z-50 flex items-center justify-center p-4';
  el.innerHTML = `
    <div class="absolute inset-0 bg-[#1e293b]/60 backdrop-blur" id="share-backdrop"></div>
    <div class="relative flex max-h-full w-full ${view === 'embed' ? 'max-w-xl' : 'max-w-lg'} flex-col overflow-y-auto rounded-lg border border-[#e2e8f0] bg-white shadow-xl">
      <div class="flex shrink-0 items-start justify-between gap-3 border-b border-[#e2e8f0] px-5 py-4">
        <div>
          <h2 id="share-modal-title" class="font-semibold text-[#1e293b]">${title}</h2>
          ${view === 'embed' ? `<p class="mt-0.5 text-xs text-[#64748b]">${simTitle(sim, lang)} · ${L('se ve y funciona igual que aquí', 'looks and works just like here', 'es veu i funciona igual que aquí', 'hemen bezala ikusten eta dabil', 'vese e funciona igual ca aquí')}</p>` : ''}
        </div>
        <button id="share-close" aria-label="${L('Cerrar', 'Close', 'Tanca', 'Itxi', 'Pechar')}" class="rounded-md p-1 text-[#64748b] transition-colors hover:bg-[#f1f5f9] hover:text-[#1e293b]">
          <i data-lucide="x" class="h-5 w-5"></i>
        </button>
      </div>
      ${view === 'embed' ? embedBody : shareBody}
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
        practical && guide === lang
          ? L('Guía docente de la práctica', 'Teacher guide for the practical', 'Guia docent de la pràctica', 'Praktikaren irakaslearen gida', 'Guía docente da práctica')
          : guideLabel(guide, lang)
      }</a>`
    : '';
  const guionLink = hasStudentDoc(sim, lang) ? `<a href="${guionPath(sim.id, lang)}" data-route class="${ABOUT_LINK}">${studentDoc(sim, lang).label}</a>` : '';
  return `
  <section id="lab-about" aria-labelledby="lab-about-title" data-print-hide class="border-t border-[#e2e8f0] bg-white">
    <div class="mx-auto max-w-3xl px-4 py-10 text-[#334155]">
      <h2 id="lab-about-title" class="text-xl font-semibold text-[#1e293b]">${
        practical
          ? L('Sobre esta práctica', 'About this practical', 'Sobre aquesta pràctica', 'Praktika honi buruz', 'Sobre esta práctica')
          : L('Sobre esta simulación', 'About this simulation', 'Sobre aquesta simulació', 'Simulazio honi buruz', 'Sobre esta simulación')
      }: ${esc(simTitle(sim, lang))}</h2>
      <p class="mt-3 leading-relaxed">${esc(simDescription(sim, lang))}</p>
      <div id="lab-about-guide"${guide === lang ? ' data-pending' : ''}></div>
      ${!practical && hasStudentDoc(sim, lang) ? `<p class="mt-3 leading-relaxed">${L(
        'Esta simulación tiene una <a href="{}" data-route class="{c}">ficha de actividades</a> asociada para el alumnado: predice, observa y explica, con enlaces que abren la simulación ya preparada. Se descarga en Word, LibreOffice o PDF.',
        'This simulation comes with an <a href="{}" data-route class="{c}">activity worksheet</a> for students: predict, observe and explain, with links that open the simulation already set up. It downloads as Word, LibreOffice or PDF.',
        'Aquesta simulació té una <a href="{}" data-route class="{c}">fitxa d’activitats</a> associada per a l’alumnat: prediu, observa i explica, amb enllaços que obren la simulació ja preparada. Es descarrega en Word, LibreOffice o PDF.',
        'Simulazio honek ikasleentzako <a href="{}" data-route class="{c}">jarduera-fitxa</a> bat du lotuta: iragarri, behatu eta azaldu, simulazioa prestatuta irekitzen duten estekekin. Word, LibreOffice edo PDF formatuan deskarga daiteke.',
        'Esta simulación ten unha <a href="{}" data-route class="{c}">ficha de actividades</a> asociada para o alumnado: predí, observa e explica, con ligazóns que abren a simulación xa preparada. Descárgase en Word, LibreOffice ou PDF.',
      ).replace('{}', guionPath(sim.id, lang)).replace('{c}', ABOUT_LINK)}</p>` : ''}
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
        <a href="${frameUrl(sim, lang)}" target="_blank" rel="noopener" data-event="sola/${simSlug(sim)}" class="${ABOUT_LINK}">${L(
          'Abrir sola en una pestaña',
          'Open on its own in a new tab',
          'Obre-la sola en una pestanya',
          'Ireki bakarrik fitxa berri batean',
          'Abrila soa nunha lapela',
        )}</a>
      </p>
      ${relatedMarkup(sim, lang)}
      ${contactCardMarkup(sim, 'sim')}
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

// «Sigue explorando»: otras simulaciones del mismo tema y del mismo curso, como
// enlaces normales en el HTML pregenerado. Así el docente encuentra la siguiente
// actividad y los buscadores recorren el catálogo desde cualquier página.
function relatedMarkup(sim, lang) {
  const others = simulationsIn(lang).filter((s) => s.id !== sim.id);
  const topics = TOPICS.filter((t) => t.sims.includes(sim.id));
  const sameTopic = others.filter((s) => topics.some((t) => t.sims.includes(s.id)));
  const course = sim.courses[0];
  const sameCourse = others.filter((s) => !sameTopic.includes(s) && s.courses.includes(course)).slice(0, 4);
  if (!sameTopic.length && !sameCourse.length) return '';
  const link = (s) => `<li><a href="${simPath(s.id, lang)}" data-route class="flex h-full items-center gap-2 rounded-md border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2 text-sm font-medium text-[#1e293b] transition-colors hover:border-[#0369a1] hover:text-[#0369a1]">
      <i data-lucide="${isPractical(s) ? 'flask-conical' : 'monitor-play'}" class="h-4 w-4 shrink-0 text-[#0369a1]"></i>${esc(simTitle(s, lang))}</a></li>`;
  const group = (title, list, href) =>
    list.length
      ? `<h3 class="mt-6 text-sm font-bold uppercase tracking-wide text-[#475569]">${href ? `<a href="${href}" data-route class="underline-offset-4 hover:text-[#0369a1] hover:underline">${title} ›</a>` : title}</h3>
      <ul class="mt-2 grid gap-2 sm:grid-cols-2">${list.map(link).join('')}</ul>`
      : '';
  const topicName = topics.map((t) => t.label[lang] ?? t.label.es).join(' · ');
  return `
      <nav aria-labelledby="lab-related-title" class="mt-8 border-t border-[#e2e8f0] pt-6">
        <h2 id="lab-related-title" class="text-lg font-semibold text-[#1e293b]">${L('Sigue explorando', 'Keep exploring', 'Continua explorant', 'Jarraitu arakatzen', 'Segue explorando')}</h2>
        ${group(`${L('Del mismo tema', 'Same topic', 'Del mateix tema', 'Gai berekoak', 'Do mesmo tema')}: ${esc(topicName)}`, sameTopic, topics.length === 1 ? topicPath(topics[0].id, lang) : null)}
        ${group(`${L('Más para', 'More for', 'Més per a', 'Gehiago:', 'Máis para')} ${courseLabel(course, lang)}`, sameCourse, coursePath(course, lang))}
      </nav>`;
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
    ? `<a href="${guionPath(sim.id, lang)}" data-route class="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[#e2e8f0] bg-white px-3 py-1.5 text-sm font-medium text-[#1e293b] transition-colors hover:border-[#0369a1] hover:text-[#0369a1]">
        <i data-lucide="clipboard-list" class="h-4 w-4"></i>
        <span class="sr-only lg:not-sr-only">${studentDoc(sim, lang).short}</span>
      </a>`
    : '';
  const guideButton = withGuide
    ? `${guionButton}<a href="${guidePath(sim.id, guide)}" data-route${guide !== lang ? ` hreflang="${guide}"` : ''} class="${guionButton ? '' : 'ml-auto '}inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[#e2e8f0] bg-white px-3 py-1.5 text-sm font-medium text-[#1e293b] transition-colors hover:border-[#0369a1] hover:text-[#0369a1]">
        <i data-lucide="book-open" class="h-4 w-4"></i>
        <span class="sr-only lg:not-sr-only">${guideLabel(guide, lang, true)}</span>
      </a>`
    : '';
  root.innerHTML = `
  <div class="flex h-screen flex-col overflow-hidden">
    <header data-print-hide class="flex h-14 shrink-0 items-center gap-2 sm:gap-3 border-b border-[#e2e8f0] bg-white px-4">
      <button id="lab-back" aria-label="${L('Volver al catálogo', 'Back to catalogue', 'Torna al catàleg', 'Itzuli katalogora', 'Volver ao catálogo')}" class="inline-flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-[#1e293b] transition-colors hover:bg-[#f1f5f9] hover:text-[#0369a1]">
        <i data-lucide="arrow-left" class="h-4 w-4"></i>
        <span class="hidden lg:inline">${L('Volver al catálogo', 'Back to catalogue', 'Torna al catàleg', 'Itzuli katalogora', 'Volver ao catálogo')}</span>
      </button>
      <div class="hidden h-5 w-px bg-[#e2e8f0] sm:block"></div>
      <h1 class="sr-only truncate font-semibold text-[#1e293b] sm:not-sr-only">${title}</h1>
      ${guideButton}
      <button id="lab-fs" class="${withGuide ? '' : 'ml-auto '}inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[#e2e8f0] bg-white px-3 py-1.5 text-sm font-medium text-[#1e293b] transition-colors hover:border-[#0369a1] hover:text-[#0369a1]">
        <i data-lucide="maximize" class="h-4 w-4"></i>
        <span class="sr-only xl:not-sr-only">${L('Pantalla completa', 'Full screen', 'Pantalla completa', 'Pantaila osoa', 'Pantalla completa')}</span>
      </button>
      <button id="lab-embed" title="${L('Insertar en tu aula virtual', 'Embed in your virtual classroom', 'Insereix-la a la teva aula virtual', 'Txertatu zure ikasgela birtualean', 'Inserir na túa aula virtual')}" class="hidden shrink-0 sm:inline-flex items-center gap-1.5 rounded-md border border-[#0369a1] bg-white px-3 py-1.5 text-sm font-semibold text-[#0369a1] transition-colors hover:bg-[#f0f9ff]">
        <i data-lucide="code-xml" class="h-4 w-4"></i>
        <span class="sr-only lg:not-sr-only">${L('Insertar', 'Embed', 'Insereix', 'Txertatu', 'Inserir')}</span>
      </button>
      <button id="lab-share" class="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-[#0369a1] px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#075985]">
        <i data-lucide="share-2" class="h-4 w-4"></i>
        <span class="sr-only lg:not-sr-only">${L('Compartir', 'Share', 'Comparteix', 'Partekatu', 'Compartir')}</span>
      </button>
      ${langSwitchMarkup({ compact: true })}
    </header>

    <div id="lab-stage" data-print-main class="relative min-h-0 flex-1 overflow-hidden bg-[#f8fafc]">
      <div id="lab-loader" class="lab-skeleton absolute inset-0 z-10 flex items-center justify-center text-sm text-[#64748b]">
        ${practical ? L('Cargando la práctica…', 'Loading the practical…', 'Carregant la pràctica…', 'Praktika kargatzen…', 'Cargando a práctica…') : L('Cargando simulación…', 'Loading simulation…', 'Carregant la simulació…', 'Simulazioa kargatzen…', 'Cargando a simulación…')}
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
  root.querySelectorAll('[data-event]').forEach((a) =>
    a.addEventListener('click', () => trackEvent(a.dataset.event, `${a.textContent.trim()}: ${sim.title}`)),
  );

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
    trackEvent(`pantalla-completa/${simSlug(sim)}`, `Pantalla completa: ${sim.title}`);
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

  // --- Diálogos de compartir e insertar ---
  let modal = null;
  let opener = null;

  function openModal(view, from = view === 'embed' ? '#lab-embed' : '#lab-share') {
    if (modal) modal.remove();
    opener = from;
    trackEvent(`${view === 'embed' ? 'abrir-insertar' : 'compartir'}/${simSlug(sim)}`, `${view === 'embed' ? 'Abrir Insertar' : 'Compartir'}: ${sim.title}`);
    modal = createModal(sim, view);
    document.body.appendChild(modal);
    if (window.lucide) window.lucide.createIcons({ nodes: modal.querySelectorAll('[data-lucide]') });

    modal.querySelector('#share-close').addEventListener('click', closeModal);
    modal.querySelector('#share-backdrop').addEventListener('click', closeModal);
    modal.querySelector('#share-to-embed')?.addEventListener('click', () => openModal('embed', '#lab-share'));
    // El enlace de ayuda lleva a otra página: el diálogo se cierra al salir.
    modal.querySelector('a[data-route]')?.addEventListener('click', closeModal);

    // Pestañas por plataforma (flechas para moverse entre ellas, como en un tablist).
    const tabs = [...modal.querySelectorAll('.embed-tab')];
    const select = (tab) => {
      for (const t of tabs) {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        modal.querySelector(`#embed-panel-${t.dataset.platform}`).hidden = !on;
      }
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => select(tab));
      tab.addEventListener('keydown', (e) => {
        const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
        if (!step) return;
        e.preventDefault();
        const next = tabs[(i + step + tabs.length) % tabs.length];
        select(next);
        next.focus();
      });
    });

    // Esc cierra; Tab y Mayús+Tab no salen de la ventana mientras está abierta.
    modal.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') return closeModal();
      if (e.key !== 'Tab') return;
      const items = [...modal.querySelectorAll('button, input, textarea, a[href]')].filter((n) => n.getClientRects().length && n.tabIndex !== -1);
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
        const platform = sourceId.startsWith('embed-src-') ? sourceId.slice(10) : null;
        const code = source.tagName === 'TEXTAREA';
        trackEvent(
          `${code ? 'insertar' : 'copiar-enlace'}/${simSlug(sim)}`,
          `${code ? 'Código de inserción' : 'Enlace copiado'}${platform ? ` (${platform})` : ''}: ${sim.title}`,
        );
      });
    });

    modal.querySelector('#share-close').focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.remove();
    modal = null;
    // El foco vuelve al botón que abrió la ventana.
    root.querySelector(opener)?.focus();
  }

  root.querySelector('#lab-share').addEventListener('click', () => openModal('share'));
  root.querySelector('#lab-embed').addEventListener('click', () => openModal('embed'));

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
