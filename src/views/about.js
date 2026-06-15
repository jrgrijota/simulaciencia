import { navigateToCatalog } from '../router.js';

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
        <h1 class="mb-4 text-2xl font-bold text-[#1e293b]">¡Hola! Te cuento un poco sobre este proyecto</h1>
        <div class="flex flex-col gap-4 text-sm leading-relaxed text-[#475569]">
          <p>
            Soy profesor de Física y Química. Hace ya bastante tiempo me dediqué a la programación,
            pero con los años y el cambio de enfoque profesional fui perdiendo la práctica con el código.
          </p>
          <p>
            Durante años he utilizado en mis clases los fantásticos simuladores de
            <a href="https://phet.colorado.edu" target="_blank" rel="noopener noreferrer" class="font-medium text-[#0284c7] underline underline-offset-2 hover:text-[#0369a1]">PhET Colorado</a>.
            Son una herramienta increíble, pero muchas veces me pasaba que echaba de menos alguna función
            específica para mis explicaciones o, al contrario, me sobraban opciones que acababan distrayendo
            a los alumnos. Quería algo hecho a la medida de mis clases.
          </p>
          <p>
            ¿Cómo han nacido entonces estas simulaciones? A través de lo que hoy se conoce como
            <em>vibe coding</em>. He utilizado herramientas de inteligencia artificial para encargarse
            de la parte pesada de la programación, lo que me ha permitido diseñar justo lo que yo
            necesitaba para el aula. Empezó como un recurso propio, pero si estas herramientas le
            pueden servir a otros profesores o estudiantes, estaré encantado de compartirlas.
          </p>
        </div>
      </section>

      <hr class="border-[#e2e8f0]" />

      <!-- Sección 2 -->
      <section class="my-10">
        <h2 class="mb-4 text-xl font-bold text-[#1e293b]">El objetivo (y las reglas del juego)</h2>
        <div class="flex flex-col gap-4 text-sm leading-relaxed text-[#475569]">
          <p>
            Quienes nos dedicamos a la enseñanza de las ciencias sabemos que explicar lo que no se ve
            es un reto. Conceptos como el comportamiento microscópico de la materia o los fenómenos
            ondulatorios son muy abstractos. El objetivo de esta web es que los estudiantes puedan
            «tocar» y visualizar esos procesos para entenderlos mejor.
          </p>
          <p>
            Al diseñarlas, he puesto mucho cuidado en evitar que se potencien ideas erróneas o
            concepciones alternativas en los alumnos, buscando siempre la máxima claridad didáctica.
            Sin embargo, para lograrlo, a veces he tenido que implementar pequeñas «trampas» o
            licencias visuales que ayudan a resaltar el concepto verdaderamente importante.
          </p>
          <div class="rounded-md border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 text-[#475569]">
            <p class="mb-1 font-medium text-[#1e293b]">Un ejemplo concreto</p>
            <p>
              En la simulación de cinética química, los «catalizadores» atraen a las moléculas de forma
              un tanto artificial y se buscan entre ellos cuando tienen atrapada una molécula de cada tipo.
              La física y la química reales no funcionan exactamente así a nivel microscópico, pero
              visualmente ayuda muchísimo a entender el papel del catalizador en la reacción.
            </p>
          </div>
          <p>
            Por eso, hay que tener en cuenta que la física de estas simulaciones puede no ser perfecta.
            No pretenden ser un software de alta precisión científica ni sustituir a un laboratorio real,
            sino ser un apoyo visual intuitivo para el aula.
          </p>
        </div>
      </section>

      <hr class="border-[#e2e8f0]" />

      <!-- Sección 3 -->
      <section class="mt-10">
        <h2 class="mb-4 text-xl font-bold text-[#1e293b]">Ideas, mejoras y comunidad</h2>
        <div class="flex flex-col gap-4 text-sm leading-relaxed text-[#475569]">
          <p>
            Este proyecto no es algo cerrado; está vivo y en constante evolución. Si eres docente,
            estudiante o simplemente te apasiona la ciencia y la programación, tu punto de vista
            me interesa mucho.
          </p>
          <p>
            Agradezco enormemente cualquier tipo de crítica constructiva, idea de mejora o sugerencia
            para nuevas simulaciones. Si ves algo que se pueda optimizar o crees que falta alguna
            herramienta útil para tus clases, no dudes en escribirme.
          </p>
          <div class="mt-2">
            <a
              href="mailto:jrgrijota@gmail.com"
              class="inline-flex items-center gap-2 rounded-md bg-[#0284c7] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0369a1]"
            >
              <i data-lucide="mail" class="h-4 w-4"></i>
              Escribirme un correo
            </a>
          </div>
        </div>
      </section>

    </main>
  </div>`;

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
