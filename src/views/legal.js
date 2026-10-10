import { footerMarkup } from '../components/footer.js';

const CONTACT = 'contacto@simulaciencia.es';
const UPDATED = '8 de octubre de 2026';

const H2 = 'mt-8 mb-2 text-lg font-semibold text-[#1e293b]';
const P = 'mb-3 leading-relaxed';
const A = 'text-[#0284c7] underline hover:text-[#0369a1]';

function ext(href, text) {
  return `<a href="${href}" target="_blank" rel="noopener" class="${A}">${text}</a>`;
}

export function renderLegal(root) {
  root.innerHTML = `
  <div class="min-h-screen">
    <header data-print-hide class="sticky top-0 z-20 border-b border-[#e2e8f0] bg-white/95 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <a href="/" data-route class="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium text-[#64748b] hover:text-[#0284c7]">
          <i data-lucide="arrow-left" class="h-4 w-4"></i> Catálogo
        </a>
        <span class="text-lg font-bold tracking-tight text-[#1e293b]">
          <span class="text-[#0284c7]">⚗</span> SimulaCiencia
        </span>
      </div>
    </header>

    <main class="mx-auto max-w-3xl px-4 py-8 text-sm text-[#334155]">
      <h1 class="mb-1 text-2xl font-bold text-[#1e293b]">Aviso legal y privacidad</h1>
      <p class="mb-6 text-xs text-[#64748b]">Última actualización: ${UPDATED}</p>

      <h2 class="${H2}">1. Titular del sitio</h2>
      <p class="${P}">
        SimulaCiencia (<strong>simulaciencia.es</strong>) es un proyecto educativo personal de
        <strong>Juan Ramón Grijota</strong>, sin ánimo de lucro y sin publicidad.
        Contacto: <a href="mailto:${CONTACT}" class="${A}">${CONTACT}</a>.
      </p>

      <h2 class="${H2}">2. Objeto y uso</h2>
      <p class="${P}">
        El sitio ofrece de forma gratuita simulaciones interactivas de Física y Química pensadas
        para el aula y una guía docente de cada una, que se puede consultar en la web o descargar
        en PDF, Word y LibreOffice. Su uso no requiere registro. Quien lo utiliza se compromete a hacerlo de
        forma lícita y a no dañar su funcionamiento.
      </p>

      <h2 class="${H2}">3. Propiedad intelectual y licencias</h2>
      <p class="${P}">
        El código fuente se distribuye bajo licencia ${ext('https://opensource.org/license/mit', 'MIT')}
        y el contenido educativo (textos, explicaciones, imágenes, diseño didáctico y guías docentes,
        incluidas sus versiones descargables) bajo
        ${ext('https://creativecommons.org/licenses/by-sa/4.0/deed.es', 'Creative Commons Atribución-CompartirIgual 4.0')}.
        Puedes usarlo, adaptarlo y compartirlo, también en clase, citando la autoría
        (Juan Ramón Grijota · SimulaCiencia) y compartiendo tus versiones con la misma licencia. Las
        versiones editables de las guías están pensadas precisamente para que las adaptes a tu grupo.
      </p>
      <p class="${P}">
        Las bibliotecas de terceros mantienen sus propias licencias, entre ellas
        ${ext('https://p5js.org', 'p5.js')} (LGPL),
        ${ext('https://lucide.dev', 'Lucide')} (ISC) y la tipografía
        ${ext('https://rsms.me/inter/', 'Inter')} (SIL Open Font License).
      </p>

      <h2 class="${H2}">4. Responsabilidad</h2>
      <p class="${P}">
        Las simulaciones son modelos con fines didácticos: simplifican la realidad y pueden
        contener errores. Se ofrecen «tal cual», sin garantía de ningún tipo. Si detectas un error,
        agradeceré que me lo comuniques en la dirección de contacto.
      </p>
      <p class="${P}">
        Las guías docentes son orientaciones que cada docente puede adaptar a su grupo. Sus
        referencias curriculares siguen la normativa LOMLOE vigente en la Comunidad de Madrid en el
        momento de redactarlas y pueden quedar desactualizadas si esta cambia.
      </p>
      <p class="${P}">
        El sitio puede enlazar a páginas externas sobre cuyo contenido no tengo control ni
        responsabilidad.
      </p>

      <h2 class="${H2}">5. Privacidad y cookies</h2>
      <p class="${P}">
        SimulaCiencia <strong>no recoge datos personales</strong>: no tiene registro ni formularios,
        <strong>no usa cookies</strong> ni publicidad, y no rastrea a sus visitantes.
      </p>
      <p class="${P}">
        Para saber qué simulaciones resultan útiles, el portal y las propias simulaciones (también
        cuando están incrustadas en otras webs, como un aula virtual) cuentan las visitas de forma
        anónima con ${ext('https://www.goatcounter.com', 'GoatCounter')}, un servicio de estadísticas
        respetuoso con la privacidad. No usa cookies ni guarda nada en tu dispositivo, no almacena
        tu dirección IP y no permite identificarte ni seguirte entre webs: solo registra datos
        agregados, como la página visitada, la web de procedencia, el navegador, el tamaño de
        pantalla y el país. También cuenta, del mismo modo anónimo, las descargas de las guías.
        ${ext('https://www.goatcounter.com/help/privacy', 'Política de privacidad de GoatCounter')}.
      </p>
      <p class="${P}">
        Como cualquier web, al visitarla tu navegador se conecta a los servidores que la alojan,
        que pueden registrar datos técnicos (como la dirección IP) por motivos de seguridad y
        funcionamiento:
      </p>
      <ul class="mb-3 list-disc space-y-1 pl-5 leading-relaxed">
        <li>El sitio y las simulaciones se alojan en GitHub Pages (GitHub, Inc.). ${ext('https://docs.github.com/es/site-policy/privacy-policies/github-general-privacy-statement', 'Declaración de privacidad de GitHub')}.</li>
        <li>El contador de visitas se descarga desde los servidores de GoatCounter, descritos en el párrafo anterior.</li>
      </ul>
      <p class="${P}">
        Si escribes a la dirección de contacto, tu correo se usará solo para responderte y no se
        cederá a terceros. Puedes pedir en cualquier momento que se borre escribiendo a esa misma
        dirección.
      </p>

      <h2 class="${H2}">6. Legislación aplicable</h2>
      <p class="${P}">Este aviso se rige por la legislación española.</p>
    </main>
    ${footerMarkup()}
  </div>`;

  return null;
}
