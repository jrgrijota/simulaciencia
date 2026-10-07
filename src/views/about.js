import { navigateToCatalog } from '../router.js';
import { footerMarkup } from '../components/footer.js';
import { copyText, flashCopied } from '../components/copy.js';

const CONTACT = 'contacto@simulaciencia.es';

export function renderAbout(root) {
  root.innerHTML = `
  <div class="min-h-screen">
    <header data-print-hide class="sticky top-0 z-20 border-b border-[#e2e8f0] bg-white/95 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <a id="about-home" href="#" class="text-lg font-bold tracking-tight text-[#1e293b] hover:text-[#0284c7] transition-colors">
          <span class="text-[#0284c7]">⚗</span> SimulaCiencia
        </a>
        <span class="hidden text-sm text-[#64748b] sm:inline">· Sobre el proyecto</span>
      </div>
    </header>

    <main class="mx-auto max-w-2xl px-4 py-10">

      <button id="about-back" class="mb-8 inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-[#64748b] transition-colors hover:bg-[#f1f5f9] hover:text-[#0284c7]">
        <i data-lucide="arrow-left" class="h-4 w-4"></i>
        Volver al catálogo
      </button>

      <!-- Sección 1 -->
      <section class="mb-10">
        <h1 class="mb-4 text-2xl font-bold text-[#1e293b]">¡Hola! Te cuento cómo nació este proyecto</h1>
        <div class="flex flex-col gap-4 text-sm leading-relaxed text-[#475569]">
          <p>
            Soy Juanra, profesor de Física y Química en la Comunidad de Madrid. Hace años me dediqué
            a la programación, pero al cambiar de rumbo profesional fui perdiendo la práctica con el
            código.
          </p>
          <p>
            Durante mucho tiempo he usado en clase los magníficos simuladores de
            <a href="https://phet.colorado.edu" target="_blank" rel="noopener noreferrer" class="font-medium text-[#0284c7] underline underline-offset-2 hover:text-[#0369a1]">PhET Colorado</a>.
            Son una herramienta extraordinaria, pero a menudo echaba en falta alguna función concreta
            para mis explicaciones o, al contrario, me sobraban opciones que acababan distrayendo al
            alumnado. Quería algo hecho a la medida de mis clases.
          </p>
          <p>
            ¿Y cómo han nacido estas simulaciones? Gracias a lo que hoy se conoce como
            <em>vibe coding</em>: herramientas de inteligencia artificial se han encargado de la parte
            más pesada de la programación, y eso me ha permitido diseñar exactamente lo que necesitaba
            en el aula. Empezó siendo un recurso para mis clases, pero sería un orgullo si pudiera
            servir también a otros docentes y estudiantes.
          </p>
        </div>
      </section>

      <hr class="border-[#e2e8f0]" />

      <!-- Sección 2 -->
      <section class="my-10">
        <h2 class="mb-4 text-xl font-bold text-[#1e293b]">El objetivo (y las reglas del juego)</h2>
        <div class="flex flex-col gap-4 text-sm leading-relaxed text-[#475569]">
          <p>
            Quienes enseñamos ciencias sabemos que explicar lo que no se ve es todo un reto. El
            comportamiento microscópico de la materia o los fenómenos ondulatorios son conceptos muy
            abstractos. El objetivo de esta web es que el alumnado pueda «tocar» y ver esos procesos
            para comprenderlos mejor.
          </p>
          <p>
            Al diseñar cada simulación he cuidado mucho no reforzar ideas erróneas (lo que en didáctica
            llamamos <em>concepciones alternativas</em>) y buscar siempre la máxima claridad. Aun así, a
            veces he tenido que recurrir a pequeñas «trampas» o licencias visuales que ponen el foco en
            lo verdaderamente importante.
          </p>
          <div class="rounded-md border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 text-[#475569]">
            <p class="mb-1 font-medium text-[#1e293b]">Un ejemplo concreto</p>
            <p>
              En la simulación de Velocidad de reacción, cada catalizador tiene un hueco para cada tipo
              de molécula y atrae hacia sí a las que pasan cerca. Además, cuando dos catalizadores han
              atrapado cada uno una molécula distinta, se buscan para juntarlas. A escala microscópica la
              química no funciona exactamente así, pero esta exageración ayuda muchísimo a entender qué
              papel cumple el catalizador en la reacción.
            </p>
          </div>
          <p>
            Por eso conviene tener presente que la física de estas simulaciones no es perfecta. No
            pretenden ser un software de precisión científica ni sustituir al laboratorio, sino ofrecer
            un apoyo visual e intuitivo para el aula.
          </p>
        </div>
      </section>

      <hr class="border-[#e2e8f0]" />

      <!-- Sección 3 -->
      <section class="mt-10">
        <h2 class="mb-4 text-xl font-bold text-[#1e293b]">Ideas, mejoras y comunidad</h2>
        <div class="flex flex-col gap-4 text-sm leading-relaxed text-[#475569]">
          <p>
            Este proyecto no está cerrado: sigue vivo y en constante evolución. Si eres docente,
            estudiante o simplemente te apasionan la ciencia y la programación, tu opinión me interesa
            mucho.
          </p>
          <p>
            Agradeceré cualquier crítica constructiva, idea de mejora o propuesta de nuevas
            simulaciones. Si ves algo que se pueda mejorar o echas en falta alguna herramienta para tus
            clases, no dudes en escribirme.
          </p>
          <p class="flex flex-wrap items-center gap-x-2 gap-y-1">
            Puedes escribirme a
            <a href="mailto:${CONTACT}" class="font-semibold text-[#0284c7] underline underline-offset-2 hover:text-[#0369a1]">${CONTACT}</a>
            <button
              id="about-copy-email"
              type="button"
              aria-label="Copiar dirección de correo"
              class="inline-flex items-center gap-1 rounded-md border border-[#e2e8f0] bg-white px-2 py-0.5 text-xs font-medium text-[#64748b] transition-colors hover:border-[#0284c7] hover:text-[#0284c7]"
            >
              <i data-lucide="copy" class="h-3.5 w-3.5"></i>
              <span class="copy-label">Copiar</span>
            </button>
          </p>
        </div>
      </section>

    </main>
    ${footerMarkup()}
  </div>`;

  const copyBtn = root.querySelector('#about-copy-email');
  copyBtn.addEventListener('click', async () => {
    await copyText(CONTACT);
    flashCopied(copyBtn, '¡Copiada!');
  });

  root.querySelector('#about-back').addEventListener('click', (e) => {
    e.preventDefault();
    navigateToCatalog();
  });
  root.querySelector('#about-home').addEventListener('click', (e) => {
    e.preventDefault();
    navigateToCatalog();
  });

  return null;
}
