// «Insértala en tu aula virtual»: cómo poner las simulaciones dentro de Moodle, Google
// Sites o una web, y cómo compartirlas en Classroom y Teams, que no admiten insertar.
// Los pasos son los mismos del diálogo «Insertar» del laboratorio (data/platforms.js).
// Por ahora solo en español, como el aviso legal.
import { footerMarkup } from '../components/footer.js';
import { siteHeaderMarkup } from '../components/site-header.js';
import { PLATFORMS } from '../data/platforms.js';
import { homePath } from '../paths.js';
import { L } from '../i18n.js';

const H2 = 'mt-10 mb-3 text-xl font-bold text-[#0f172a]';
const P = 'mb-3 leading-relaxed';
const A = 'text-[#0369a1] underline hover:text-[#075985]';

const step = (text, i) => `
  <li class="flex gap-3 leading-relaxed">
    <span aria-hidden="true" class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e0f2fe] text-xs font-bold text-[#0369a1]">${i + 1}</span>
    <span>${text}</span>
  </li>`;

const platformCard = (p) => `
  <section id="${p.id}" aria-labelledby="${p.id}-titulo" class="scroll-mt-20 rounded-xl border border-[#e2e8f0] bg-white p-5 shadow-sm sm:p-6">
    <div class="mb-3 flex flex-wrap items-baseline justify-between gap-2">
      <h3 id="${p.id}-titulo" class="text-lg font-bold text-[#0f172a]">${L(p.name)}</h3>
      <span class="rounded-full px-2.5 py-0.5 text-xs font-bold ${p.kind === 'code' ? 'bg-[#dcfce7] text-[#166534]' : 'bg-[#f1f5f9] text-[#475569]'}">${p.kind === 'code' ? 'Se puede insertar' : 'Solo con enlace'}</span>
    </div>
    ${p.lead ? `<p class="${P}">${L(p.lead)}</p>` : ''}
    <ol class="flex flex-col gap-2.5">${p.steps.map((s, i) => step(L(s), i)).join('')}</ol>
    ${p.note ? `<p class="mt-4 rounded-md border border-[#fde68a] bg-[#fffbeb] px-3 py-2 text-sm leading-relaxed text-[#78350f]">${L(p.note)}</p>` : ''}
  </section>`;

export function renderEmbedHelp(root) {
  const home = homePath('es');
  root.innerHTML = `
  <div class="min-h-screen bg-[#f8fafc]">
    ${siteHeaderMarkup()}

    <main class="mx-auto max-w-3xl px-4 py-10 text-[#334155]">
      <h1 class="text-3xl font-bold text-[#0f172a] sm:text-4xl">Insértalas en tu aula virtual</h1>
      <p class="mt-3 text-lg leading-relaxed">
        Cualquier simulación de SimulaCiencia puede ir <strong>dentro</strong> de tu Moodle, tu Google Sites,
        tu web o tu blog: el alumnado la usa sin salir de la página, se ve y funciona igual que aquí y
        se actualiza sola cada vez que se mejora. Es gratis y no hace falta registrarse.
      </p>

      <div class="mt-6 grid gap-3 sm:grid-cols-2">
        <div class="rounded-xl border border-[#bae6fd] bg-[#f0f9ff] p-4">
          <p class="font-bold text-[#0f172a]">Insertada</p>
          <p class="mt-1 text-sm leading-relaxed">Aparece dentro de tu página. Para Moodle, Google Sites, webs y blogs. Se copia con el botón <strong>Insertar</strong>.</p>
        </div>
        <div class="rounded-xl border border-[#e2e8f0] bg-white p-4">
          <p class="font-bold text-[#0f172a]">Con enlace</p>
          <p class="mt-1 text-sm leading-relaxed">Se abre en una pestaña nueva, a pantalla completa. Para Classroom, Teams, el correo o el chat de clase. Se copia con el botón <strong>Compartir</strong>.</p>
        </div>
      </div>

      <h2 class="${H2}">Dónde está el código</h2>
      <ol class="flex flex-col gap-2.5">
        ${[
          `Abre la simulación que quieras desde el <a href="${home}" data-route class="${A}">catálogo</a>.`,
          'Arriba a la derecha, pulsa <strong>Insertar</strong> (el icono <strong>&lt;/&gt;</strong>). En el móvil, pulsa <strong>Compartir</strong> y después <strong>Insertar</strong>.',
          'Elige tu plataforma y sigue sus tres pasos. El botón copia el código, o el enlace donde no se puede insertar.',
        ]
          .map(step)
          .join('')}
      </ol>
      <p class="mt-3 text-sm leading-relaxed text-[#64748b]">
        Si abriste la simulación desde una ficha, con un modo o unos valores ya preparados, el código y el enlace los conservan.
      </p>

      <h2 class="${H2}">Paso a paso en cada plataforma</h2>
      <nav aria-label="Plataformas" class="mb-4 flex flex-wrap gap-2">
        ${PLATFORMS.map((p) => `<a href="#${p.id}" data-jump class="rounded-full border border-[#e2e8f0] bg-white px-3 py-1 text-sm font-bold text-[#334155] hover:border-[#0369a1] hover:text-[#0369a1]">${L(p.name)}</a>`).join('')}
      </nav>
      <div class="flex flex-col gap-4">${PLATFORMS.map(platformCard).join('')}</div>

      <h2 class="${H2}">Preguntas frecuentes</h2>
      <h3 class="mb-1 font-bold text-[#0f172a]">¿Puedo cambiar el tamaño?</h3>
      <p class="${P}">Sí. El código ocupa todo el ancho disponible y 600 píxeles de alto. Para que sea más alta o más baja, cambia el número de <code class="rounded bg-[#f1f5f9] px-1 font-mono text-sm">height="600"</code>. La simulación se adapta al espacio que tenga.</p>
      <h3 class="mb-1 font-bold text-[#0f172a]">¿Funciona en el móvil y en la pizarra digital?</h3>
      <p class="${P}">Sí, igual que en la web. Y con el botón de pantalla completa de la propia simulación se ve más grande en el proyector.</p>
      <h3 class="mb-1 font-bold text-[#0f172a]">¿Recoge datos de mi alumnado?</h3>
      <p class="${P}">No. No hay registro ni cookies. Solo se cuentan las visitas de forma anónima, como explica el <a href="/aviso-legal/" data-route class="${A}">aviso legal</a>.</p>
      <h3 class="mb-1 font-bold text-[#0f172a]">¿Qué es la línea que aparece debajo?</h3>
      <p class="${P}">El código incluye, bajo la simulación, un enlace a su página en SimulaCiencia, con la guía docente y la ficha de actividades. Puedes borrarlo si no lo quieres, aunque ayuda a que otros docentes la encuentren.</p>
    </main>
    ${footerMarkup()}
  </div>`;

  // Los saltos a cada plataforma desplazan la página sin cambiar la dirección: un
  // cambio de #… dispara popstate, y el router volvería a dibujar la página arriba.
  root.querySelectorAll('a[data-jump]').forEach((a) =>
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = root.querySelector(a.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.querySelector('h3')?.setAttribute('tabindex', '-1');
      target.querySelector('h3')?.focus({ preventScroll: true });
    }),
  );

  return null;
}
