import { simPath, guidePath, guionPath } from '../paths.js';
import { isPractical, studentDoc } from '../data/simulations.js';
import { getLang, L } from '../i18n.js';
import { setDescription } from '../head.js';
import { footerMarkup } from '../components/footer.js';
import { siteHeaderMarkup } from '../components/site-header.js';
import { loadGuide, loadGuion, hasGuion, guideLangFor, guideLabel } from '../data/guides.js';
import { trackEvent } from '../analytics.js';
import { renderGuideHtml, guideToc, guideSummary, downloadBase } from '../guides/shared.js';

const BTN_SECONDARY =
  'inline-flex items-center gap-1.5 rounded-md border border-[#e2e8f0] bg-white px-3 py-1.5 text-sm font-medium text-[#1e293b] transition-colors hover:border-[#0369a1] hover:text-[#0369a1]';
const BTN_PRIMARY =
  'inline-flex items-center gap-1.5 rounded-md bg-[#0369a1] px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#075985]';

const DOWNLOADS = [
  { ext: 'pdf', label: 'PDF', hint: { es: 'para imprimir', en: 'to print', ca: 'per imprimir', eu: 'inprimatzeko', gl: 'para imprimir' } },
  { ext: 'docx', label: 'Word', hint: { es: 'editable', en: 'editable', ca: 'editable', eu: 'editagarria', gl: 'editable' } },
  { ext: 'odt', label: 'LibreOffice', hint: { es: 'editable', en: 'editable', ca: 'editable', eu: 'editagarria', gl: 'editable' } },
];
// El guion se descarga sobre todo para adaptarlo: primero los formatos editables.
const GUION_DOWNLOADS = [DOWNLOADS[1], DOWNLOADS[2], DOWNLOADS[0]];
const BTN_HEADER =
  'inline-flex min-h-11 items-center gap-1.5 rounded-lg px-3 text-sm font-bold transition-colors';

const LICENSE_URL = Object.fromEntries(['es', 'en', 'ca', 'eu', 'gl'].map((l) => [l, `https://creativecommons.org/licenses/by-sa/4.0/deed.${l}`]));

function tocMarkup(toc, student = null) {
  const items = toc
    .map(
      (t) =>
        `<li class="${t.depth === 3 ? 'pl-4' : 'font-medium'}"><a href="#${t.id}" class="hover:text-[#0369a1] hover:underline">${t.text}</a></li>`,
    )
    .join('');
  return `
    <nav data-print-hide aria-label="${student ? student.toc : L('Contenido de la guía', 'Guide contents', 'Contingut de la guia', 'Gidaren edukia', 'Contido da guía')}" class="mb-8 rounded-md border border-[#e2e8f0] bg-white px-4 py-3">
      <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-[#64748b]">${student ? student.toc : L('En esta guía', 'In this guide', 'En aquesta guia', 'Gida honetan', 'Nesta guía')}</p>
      <ul class="space-y-1 text-sm text-[#1e293b]">${items}</ul>
    </nav>`;
}

// doc: 'guide' (guía docente) o 'guion' (documento del alumnado: guion de una
// práctica, solo en español, o ficha de actividades de una simulación, en cada idioma).
// Enlaces de la cabecera: abrir la simulación o la práctica y pasar de la guía
// docente al documento del alumnado y al revés.
function headerLinks(sim, lang, doc) {
  const practical = isPractical(sim);
  const open = `<a href="${simPath(sim.id, lang)}" data-route class="${BTN_HEADER} bg-[#0369a1] text-white hover:bg-[#075985]">
          <i data-lucide="play" class="h-4 w-4"></i>
          ${
            practical
              ? '<span class="hidden sm:inline">Abrir la práctica</span><span class="sm:hidden">Práctica</span>'
              : `<span class="hidden sm:inline">${L('Abrir la simulación', 'Open the simulation', 'Obre la simulació', 'Ireki simulazioa', 'Abrir a simulación')}</span><span class="sm:hidden">${L('Simulación', 'Simulation', 'Simulació', 'Simulazioa', 'Simulación')}</span>`
          }
        </a>`;
  const other =
    doc === 'guion'
      ? guideLangFor(sim.id, lang) && {
          href: guidePath(sim.id, guideLangFor(sim.id, lang)),
          icon: 'book-open',
          text: guideLabel(guideLangFor(sim.id, lang), lang, true),
        }
      : hasGuion(sim.id, lang) && { href: guionPath(sim.id, lang), icon: 'clipboard-list', text: studentDoc(sim, lang).label };
  if (!other) return open;
  return `<a href="${other.href}" data-route class="${BTN_HEADER} border border-[#cbd5e1] bg-white text-[#1e293b] hover:border-[#0369a1] hover:text-[#0369a1]">
          <i data-lucide="${other.icon}" class="h-4 w-4"></i><span class="sr-only sm:not-sr-only">${other.text}</span>
        </a>${open}`;
}

export function renderGuide(root, sim, doc = 'guide') {
  const lang = getLang();
  const guion = doc === 'guion';
  const practical = isPractical(sim);
  const student = guion ? studentDoc(sim, lang) : null;
  const base = downloadBase(sim.id, lang, doc, practical);
  const primary = guion ? 'docx' : 'pdf';
  const downloads = (guion ? GUION_DOWNLOADS : DOWNLOADS).map(
    (d) => `
      <a href="/${base}.${d.ext}" download data-download class="${d.ext === primary ? BTN_PRIMARY : BTN_SECONDARY}">
        <i data-lucide="download" class="h-4 w-4"></i>
        ${d.label} <span class="hidden font-normal opacity-90 sm:inline">· ${d.hint[lang]}</span>
      </a>`,
  ).join('');

  root.innerHTML = `
  <div class="min-h-screen">
    ${siteHeaderMarkup({ extra: headerLinks(sim, lang, doc) })}

    <main data-print-main class="mx-auto max-w-3xl px-4 py-8">
      <div id="guide-body" class="guide-prose${guion ? ' guion-prose' : ''}">
        <p class="text-sm text-[#64748b]">${guion ? student.loading : L('Cargando la guía…', 'Loading the guide…', 'S’està carregant la guia…', 'Gida kargatzen…', 'Cargando a guía…')}</p>
      </div>
    </main>
    ${footerMarkup()}
  </div>`;

  let cancelled = false;
  (guion ? loadGuion(sim.id, lang) : loadGuide(sim.id, lang)).then((markdown) => {
    if (cancelled) return;
    setDescription(guideSummary(markdown));
    const body = root.querySelector('#guide-body');
    const html = renderGuideHtml(markdown, lang);
    // El h1 va primero; tras él, las descargas y el índice.
    const h1End = html.indexOf('</h1>') + '</h1>'.length;
    body.innerHTML = `
      ${html.slice(0, h1End)}
      <div data-print-hide class="mb-6 flex flex-wrap items-center gap-2">
        <span class="mr-1 text-sm text-[#64748b]">${L('Descargar:', 'Download:', 'Descarrega:', 'Deskargatu:', 'Descargar:')}</span>${downloads}
      </div>
      ${guion ? `<p data-print-hide class="-mt-3 mb-6 text-sm text-[#475569]">${student.adapt}</p>` : ''}
      ${!guion && hasGuion(sim.id, lang) ? (practical
        ? `<p data-print-hide class="-mt-3 mb-6 text-sm text-[#475569]">El alumnado sigue el <a href="${guionPath(sim.id)}" data-route class="font-bold text-[#0369a1] underline underline-offset-4">guion de la práctica</a>, que se descarga en formato editable.</p>`
        : `<p data-print-hide class="-mt-3 mb-6 text-sm text-[#475569]">${L(
            `Para el alumnado hay una <a href="${guionPath(sim.id)}" data-route class="font-bold text-[#0369a1] underline underline-offset-4">ficha de actividades</a> con enlaces que abren la simulación ya preparada. Se descarga en formato editable. Al final de esta guía están el uso por curso y las soluciones.`,
            `For students there is an <a href="${guionPath(sim.id, 'en')}" data-route class="font-bold text-[#0369a1] underline underline-offset-4">activity worksheet</a> with links that open the simulation already set up. It downloads in an editable format. Its use in each year group and the answers are at the end of this guide.`,
            `Per a l’alumnat hi ha una <a href="${guionPath(sim.id, 'ca')}" data-route class="font-bold text-[#0369a1] underline underline-offset-4">fitxa d’activitats</a> amb enllaços que obren la simulació ja preparada. Es descarrega en format editable. Al final d’aquesta guia hi ha l’ús per curs i les solucions.`,
            `Ikasleentzat <a href="${guionPath(sim.id, 'eu')}" data-route class="font-bold text-[#0369a1] underline underline-offset-4">jarduera-fitxa</a> bat dago, simulazioa prestatuta irekitzen duten estekekin. Formatu editagarrian deskargatzen da. Gida honen amaieran daude maila bakoitzeko erabilera eta soluzioak.`,
            `Para o alumnado hai unha <a href="${guionPath(sim.id, 'gl')}" data-route class="font-bold text-[#0369a1] underline underline-offset-4">ficha de actividades</a> con ligazóns que abren a simulación xa preparada. Descárgase en formato editable. Ao final desta guía están o uso por curso e as solucións.`,
          )}</p>`) : ''}
      ${tocMarkup(guideToc(markdown), student)}
      ${html.slice(h1End)}
      <p class="mt-10 border-t border-[#e2e8f0] pt-4 text-xs text-[#64748b]">
        © 2026 Juan Ramón Grijota · ${guion ? student.license : L('Guía bajo licencia', 'Guide licensed under', 'Guia amb llicència', 'Gida lizentzia honekin', 'Guía baixo licenza')}
        <a href="${LICENSE_URL[lang]}" target="_blank" rel="noopener license">CC BY-SA 4.0</a>:
        ${guion
          ? student.licenseEnd
          : L(
              'puedes adaptarla y compartirla citando la autoría y con la misma licencia.',
              'you may adapt and share it, crediting the author and keeping the same licence.',
              'la pots adaptar i compartir citant-ne l’autoria i amb la mateixa llicència.',
              'egokitu eta partekatu dezakezu, egilea aipatuz eta lizentzia bera erabiliz.',
              'podes adaptala e compartila citando a autoría e coa mesma licenza.',
            )}
      </p>`;
    window.lucide?.createIcons({ nodes: [...body.querySelectorAll('[data-lucide]')] });

    // Las descargas se cuentan como eventos en GoatCounter (sin cookies).
    body.querySelectorAll('[data-download]').forEach((a) =>
      a.addEventListener('click', () =>
        trackEvent(a.getAttribute('href'), `Descarga${guion ? (practical ? ' del guion' : ` de la ficha (${lang})`) : ''}: ${sim.title}`),
      ),
    );

    // Saltos del índice sin cambiar la URL (el router usa la query string).
    body.querySelectorAll('nav a[href^="#"]').forEach((a) =>
      a.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById(a.getAttribute('href').slice(1))?.scrollIntoView({ behavior: 'smooth' });
      }),
    );
  });


  return () => {
    cancelled = true;
  };
}
