// Novedades: lo nuevo que se nota en clase (src/data/news.js), la más reciente
// primero, con su fecha, dos frases y un enlace. Canal RSS en /novedades.xml.
import { newsIn } from '../data/news.js';
import { footerMarkup } from '../components/footer.js';
import { siteHeaderMarkup } from '../components/site-header.js';
import { getLang, L } from '../i18n.js';

const LOCALE = { es: 'es-ES', en: 'en-GB', ca: 'ca-ES', eu: 'eu-ES', gl: 'gl-ES' };
const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ESC[c]);

// El navegador no siempre trae datos de euskera y gallego para Intl: se escriben a mano.
const EU_MONTHS = ['urtarrilaren', 'otsailaren', 'martxoaren', 'apirilaren', 'maiatzaren', 'ekainaren', 'uztailaren', 'abuztuaren', 'irailaren', 'urriaren', 'azaroaren', 'abenduaren'];
const GL_MONTHS = ['xaneiro', 'febreiro', 'marzo', 'abril', 'maio', 'xuño', 'xullo', 'agosto', 'setembro', 'outubro', 'novembro', 'decembro'];

export function formatNewsDate(date, lang) {
  const [y, m, d] = date.split('-').map(Number);
  if (lang === 'eu') return `${y}ko ${EU_MONTHS[m - 1]} ${d}a`;
  if (lang === 'gl') return `${d} de ${GL_MONTHS[m - 1]} de ${y}`;
  return new Intl.DateTimeFormat(LOCALE[lang], { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T12:00:00Z`));
}

export function renderNews(root) {
  const lang = getLang();
  const items = newsIn(lang)
    .map((n) => {
      const href = n.link(lang);
      const { title, text } = n[lang];
      return `
        <li class="relative border-l-2 border-[#e2e8f0] pb-8 pl-6 last:pb-0">
          <span aria-hidden="true" class="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-[#0369a1]"></span>
          <article>
            <p class="text-sm font-bold text-[#475569]"><time datetime="${n.date}">${formatNewsDate(n.date, lang)}</time></p>
            <h2 class="mt-1 text-xl font-bold text-[#0f172a]">${href ? `<a href="${href}" data-route class="underline-offset-4 hover:text-[#0369a1] hover:underline">${esc(title)}</a>` : esc(title)}</h2>
            <p class="mt-2 leading-relaxed text-[#334155]">${esc(text)}</p>
          </article>
        </li>`;
    })
    .join('');

  root.innerHTML = `
  <div class="min-h-screen">
    ${siteHeaderMarkup({ current: 'news' })}

    <main>
      <section class="paper border-b border-[#e2e8f0]">
        <div class="mx-auto max-w-3xl px-4 py-10 md:py-14">
          <h1 class="text-3xl font-extrabold leading-[1.1] text-[#0f172a] sm:text-4xl md:text-5xl">${L('Novedades', 'What’s new', 'Novetats', 'Berriak', 'Novidades')}</h1>
          <p class="mt-4 text-lg leading-relaxed text-[#334155]">${L(
            'Lo nuevo de SimulaCiencia que se nota en clase: simulaciones y prácticas nuevas, materiales para el aula y mejoras en cómo se usan.',
            'What’s new in SimulaCiencia that makes a difference in class: new simulations, classroom materials and changes to how they work.',
            "El que hi ha de nou a SimulaCiencia que es nota a classe: simulacions i pràctiques noves, materials per a l'aula i millores en com es fan servir.",
            'SimulaCiencian gelan nabaritzen diren berritasunak: simulazio eta praktika berriak, gelarako materialak eta erabileraren hobekuntzak.',
            'O novo de SimulaCiencia que se nota na clase: simulacións e prácticas novas, materiais para a aula e melloras en como se usan.',
          )}</p>
          ${lang === 'es' ? `<p class="mt-3 text-sm text-[#475569]"><a href="/novedades.xml" class="font-bold text-[#0369a1] underline underline-offset-4 hover:text-[#075985]">Canal RSS</a> para seguirlas desde tu lector de noticias.</p>` : ''}
        </div>
      </section>

      <section class="mx-auto max-w-3xl px-4 py-10">
        <ol class="ml-1.5">${items}</ol>
      </section>
    </main>
    ${footerMarkup()}
  </div>`;

  return null;
}
