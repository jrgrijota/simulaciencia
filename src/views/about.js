import { navigateToCatalog } from '../router.js';
import { footerMarkup } from '../components/footer.js';
import { copyText, flashCopied } from '../components/copy.js';
import { langSwitchMarkup } from '../components/lang-switch.js';
import { homePath } from '../paths.js';
import { getLang, L } from '../i18n.js';

const CONTACT = 'contacto@simulaciencia.es';

export function renderAbout(root) {
  root.innerHTML = `
  <div class="min-h-screen">
    <header data-print-hide class="sticky top-0 z-20 border-b border-[#e2e8f0] bg-white/95 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <a id="about-home" href="${homePath(getLang())}" class="text-lg font-bold tracking-tight text-[#1e293b] hover:text-[#0284c7] transition-colors">
          <span class="text-[#0284c7]">⚗</span> SimulaCiencia
        </a>
        <span class="hidden text-sm text-[#64748b] sm:inline">· ${L('Sobre el proyecto', 'About the project', 'Sobre el projecte', 'Proiektuari buruz')}</span>
        <div class="ml-auto">${langSwitchMarkup()}</div>
      </div>
    </header>

    <main class="mx-auto max-w-2xl px-4 py-10">

      <button id="about-back" class="mb-8 inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-[#64748b] transition-colors hover:bg-[#f1f5f9] hover:text-[#0284c7]">
        <i data-lucide="arrow-left" class="h-4 w-4"></i>
        ${L('Volver al catálogo', 'Back to catalogue', 'Torna al catàleg', 'Itzuli katalogora')}
      </button>

${L(`
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
          <p>
            Para que puedas usarlas con seguridad, cada simulación tiene su <strong>guía docente</strong>:
            en qué cursos encaja, qué saberes básicos trabaja, una secuencia para explicarla en clase,
            las ideas previas que ayuda a corregir y las simplificaciones que conviene conocer. Puedes
            leerla en la web o descargarla en PDF, Word o LibreOffice para adaptarla a tu grupo.
          </p>
        </div>
      </section>

`, `
      <!-- Sección 1 -->
      <section class="mb-10">
        <h1 class="mb-4 text-2xl font-bold text-[#1e293b]">Hello! Here's how this project began</h1>
        <div class="flex flex-col gap-4 text-sm leading-relaxed text-[#475569]">
          <p>
            I'm Juanra, a Physics and Chemistry teacher in the Community of Madrid, Spain. Years ago I
            worked as a programmer, but when I changed careers I gradually lost my coding practice.
          </p>
          <p>
            For a long time I've used the wonderful
            <a href="https://phet.colorado.edu" target="_blank" rel="noopener noreferrer" class="font-medium text-[#0284c7] underline underline-offset-2 hover:text-[#0369a1]">PhET Colorado</a>
            simulations in class. They're an extraordinary tool, but I often missed a particular feature
            for my explanations or, the other way round, had options that ended up distracting my
            students. I wanted something tailored to my lessons.
          </p>
          <p>
            So how did these simulations come about? Thanks to what's now known as
            <em>vibe coding</em>: artificial intelligence tools took care of the heaviest part of the
            programming, which let me design exactly what I needed in the classroom. It started as a
            resource for my own lessons, but I'd be proud if it could also help other teachers and
            students.
          </p>
        </div>
      </section>

      <hr class="border-[#e2e8f0]" />

      <!-- Sección 2 -->
      <section class="my-10">
        <h2 class="mb-4 text-xl font-bold text-[#1e293b]">The goal (and the rules of the game)</h2>
        <div class="flex flex-col gap-4 text-sm leading-relaxed text-[#475569]">
          <p>
            Those of us who teach science know that explaining what can't be seen is a real challenge.
            The microscopic behaviour of matter or wave phenomena are very abstract ideas. The aim of
            this website is to let students "touch" and see those processes so they understand them
            better.
          </p>
          <p>
            When designing each simulation I've been very careful not to reinforce mistaken ideas (what
            science education calls <em>misconceptions</em>) and to aim for maximum clarity. Even so, I
            sometimes had to use small visual "tricks" or licences that put the focus on what really
            matters.
          </p>
          <div class="rounded-md border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 text-[#475569]">
            <p class="mb-1 font-medium text-[#1e293b]">A concrete example</p>
            <p>
              In the Reaction Rate simulation, each catalyst has a slot for each type of molecule and
              pulls in the ones that pass nearby. And when two catalysts have each trapped a different
              molecule, they seek each other out to bring them together. Chemistry doesn't work exactly
              like that at the microscopic scale, but this exaggeration really helps students understand
              the role the catalyst plays in the reaction.
            </p>
          </div>
          <p>
            So bear in mind that the physics in these simulations isn't perfect. They aren't meant to be
            scientific precision software or to replace the lab, but to offer visual, intuitive support
            in the classroom.
          </p>
          <p>
            So that you can use them with confidence, each simulation has a <strong>teacher guide</strong>
            (currently in Spanish only): which year groups it suits, the content it covers in the Spanish
            curriculum, a sequence for teaching it, the misconceptions it helps to address and the
            simplifications worth knowing about. You can read it on the website or download it as a PDF,
            Word or LibreOffice file to adapt it to your class.
          </p>
        </div>
      </section>

`, `
      <!-- Sección 1 -->
      <section class="mb-10">
        <h1 class="mb-4 text-2xl font-bold text-[#1e293b]">Hola! T'explico com va néixer aquest projecte</h1>
        <div class="flex flex-col gap-4 text-sm leading-relaxed text-[#475569]">
          <p>
            Soc en Juanra, professor de Física i Química a la Comunitat de Madrid. Fa anys em vaig
            dedicar a la programació, però en canviar de rumb professional vaig anar perdent la
            pràctica amb el codi.
          </p>
          <p>
            Durant molt de temps he fet servir a classe els magnífics simuladors de
            <a href="https://phet.colorado.edu" target="_blank" rel="noopener noreferrer" class="font-medium text-[#0284c7] underline underline-offset-2 hover:text-[#0369a1]">PhET Colorado</a>.
            Són una eina extraordinària, però sovint trobava a faltar alguna funció concreta per a les
            meves explicacions o, al contrari, em sobraven opcions que acabaven distraient l'alumnat.
            Volia alguna cosa feta a la mida de les meves classes.
          </p>
          <p>
            I com han nascut aquestes simulacions? Gràcies al que avui es coneix com a
            <em>vibe coding</em>: eines d'intel·ligència artificial s'han encarregat de la part més
            feixuga de la programació, i això m'ha permès dissenyar exactament el que necessitava a
            l'aula. Va començar com un recurs per a les meves classes, però seria un orgull que també
            pogués servir a altres docents i estudiants.
          </p>
        </div>
      </section>

      <hr class="border-[#e2e8f0]" />

      <!-- Sección 2 -->
      <section class="my-10">
        <h2 class="mb-4 text-xl font-bold text-[#1e293b]">L'objectiu (i les regles del joc)</h2>
        <div class="flex flex-col gap-4 text-sm leading-relaxed text-[#475569]">
          <p>
            Els qui ensenyem ciències sabem que explicar allò que no es veu és tot un repte. El
            comportament microscòpic de la matèria o els fenòmens ondulatoris són conceptes molt
            abstractes. L'objectiu d'aquest web és que l'alumnat pugui «tocar» i veure aquests
            processos per entendre'ls millor.
          </p>
          <p>
            En dissenyar cada simulació he tingut molta cura de no reforçar idees errònies (el que en
            didàctica anomenem <em>concepcions alternatives</em>) i de buscar sempre la màxima claredat.
            Tot i això, de vegades he hagut de recórrer a petits «trucs» o llicències visuals que posen
            el focus en allò realment important.
          </p>
          <div class="rounded-md border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 text-[#475569]">
            <p class="mb-1 font-medium text-[#1e293b]">Un exemple concret</p>
            <p>
              A la simulació de Velocitat de reacció, cada catalitzador té un forat per a cada tipus de
              molècula i atrau cap a si les que passen a prop. A més, quan dos catalitzadors han atrapat
              cadascun una molècula diferent, es busquen per ajuntar-les. A escala microscòpica la
              química no funciona exactament així, però aquesta exageració ajuda moltíssim a entendre
              quin paper té el catalitzador en la reacció.
            </p>
          </div>
          <p>
            Per això cal tenir present que la física d'aquestes simulacions no és perfecta. No volen ser
            un programari de precisió científica ni substituir el laboratori, sinó oferir un suport
            visual i intuïtiu per a l'aula.
          </p>
          <p>
            Perquè les puguis fer servir amb seguretat, cada simulació té la seva <strong>guia docent</strong>
            (de moment només en castellà): en quins cursos encaixa, quins sabers bàsics treballa, una
            seqüència per explicar-la a classe, les idees prèvies que ajuda a corregir i les
            simplificacions que convé conèixer. La pots llegir al web o descarregar-la en PDF, Word o
            LibreOffice per adaptar-la al teu grup.
          </p>
        </div>
      </section>

`, `
      <!-- Sección 1 -->
      <section class="mb-10">
        <h1 class="mb-4 text-2xl font-bold text-[#1e293b]">Kaixo! Proiektu hau nola sortu zen kontatuko dizut</h1>
        <div class="flex flex-col gap-4 text-sm leading-relaxed text-[#475569]">
          <p>
            Juanra naiz, Fisika eta Kimikako irakaslea Madrilgo Erkidegoan. Duela urte batzuk
            programazioan aritu nintzen, baina lanbidez aldatu nuenean kodearekiko trebetasuna galtzen
            joan nintzen.
          </p>
          <p>
            Denbora luzez erabili ditut klasean
            <a href="https://phet.colorado.edu" target="_blank" rel="noopener noreferrer" class="font-medium text-[#0284c7] underline underline-offset-2 hover:text-[#0369a1]">PhET Colorado</a>
            proiektuaren simulagailu bikainak. Tresna apartak dira, baina askotan funtzio zehatzen bat
            falta zitzaidan nire azalpenetarako, edo, alderantziz, ikasleak desbideratzen zituzten
            aukerak soberan nituen. Nire klaseetara egokitutako zerbait nahi nuen.
          </p>
          <p>
            Eta nola sortu dira simulazio hauek? Gaur egun <em>vibe coding</em> deritzonari esker:
            adimen artifizialeko tresnek programazioaren zatirik astunena egin dute, eta horri esker
            gelan behar nuena zehazki diseinatu ahal izan dut. Nire klaseetarako baliabide gisa hasi zen,
            baina harro egongo nintzateke beste irakasle eta ikasle batzuei ere baliagarri izango
            balitzaie.
          </p>
        </div>
      </section>

      <hr class="border-[#e2e8f0]" />

      <!-- Sección 2 -->
      <section class="my-10">
        <h2 class="mb-4 text-xl font-bold text-[#1e293b]">Helburua (eta jokoaren arauak)</h2>
        <div class="flex flex-col gap-4 text-sm leading-relaxed text-[#475569]">
          <p>
            Zientziak irakasten ditugunok badakigu ikusten ez dena azaltzea erronka handia dela.
            Materiaren portaera mikroskopikoa edo uhin-fenomenoak oso kontzeptu abstraktuak dira. Webgune
            honen helburua da ikasleek prozesu horiek «ukitu» eta ikusi ahal izatea, hobeto ulertzeko.
          </p>
          <p>
            Simulazio bakoitza diseinatzean kontu handia izan dut ideia okerrak ez indartzeko (didaktikan
            <em>ideia alternatiboak</em> deitzen diegunak) eta beti argitasun handiena bilatzeko. Hala
            ere, batzuetan «tranpa» txikiak edo lizentzia bisualak erabili behar izan ditut, benetan
            garrantzitsua denari arreta jartzeko.
          </p>
          <div class="rounded-md border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3 text-[#475569]">
            <p class="mb-1 font-medium text-[#1e293b]">Adibide zehatz bat</p>
            <p>
              Erreakzio-abiaduraren simulazioan, katalizatzaile bakoitzak zulo bat du molekula mota
              bakoitzarentzat, eta inguruan pasatzen direnak erakartzen ditu. Gainera, bi
              katalizatzailek molekula desberdin bana harrapatu dutenean, elkar bilatzen dute molekulak
              elkartzeko. Eskala mikroskopikoan kimikak ez du zehazki horrela funtzionatzen, baina
              gehiegikeria horrek asko laguntzen du katalizatzaileak erreakzioan zer zeregin duen
              ulertzen.
            </p>
          </div>
          <p>
            Horregatik, kontuan izan behar da simulazio hauen fisika ez dela perfektua. Ez dute
            zehaztasun zientifikoko softwarea izan nahi, ezta laborategia ordezkatu ere, gelarako
            laguntza bisual eta intuitiboa eskaini baizik.
          </p>
          <p>
            Lasai erabili ahal izateko, simulazio bakoitzak bere <strong>irakaslearen gida</strong> du
            (oraingoz gaztelaniaz bakarrik): zein mailatan sartzen den, zer oinarrizko jakintza lantzen
            dituen, klasean azaltzeko sekuentzia bat, zuzentzen laguntzen dituen aurretiazko ideiak eta
            ezagutzea komeni diren sinplifikazioak. Webgunean irakur dezakezu, edo PDF, Word edo
            LibreOffice formatuan deskargatu zure taldera egokitzeko.
          </p>
        </div>
      </section>

`)}
      <hr class="border-[#e2e8f0]" />

      <!-- Sección 3 -->
      <section class="mt-10">
        <h2 class="mb-4 text-xl font-bold text-[#1e293b]">${L('Ideas, mejoras y comunidad', 'Ideas, improvements and community', 'Idees, millores i comunitat', 'Ideiak, hobekuntzak eta komunitatea')}</h2>
        <div class="flex flex-col gap-4 text-sm leading-relaxed text-[#475569]">
          ${L(
            `<p>
            Este proyecto no está cerrado: sigue vivo y en constante evolución. Si eres docente,
            estudiante o simplemente te apasionan la ciencia y la programación, tu opinión me interesa
            mucho.
          </p>
          <p>
            Agradeceré cualquier crítica constructiva, idea de mejora o propuesta de nuevas
            simulaciones. Si ves algo que se pueda mejorar o echas en falta alguna herramienta para tus
            clases, no dudes en escribirme.
          </p>`,
            `<p>
            This project isn't finished: it's alive and constantly evolving. Whether you're a teacher, a
            student or simply passionate about science and programming, I'd love to hear your opinion.
          </p>
          <p>
            I'll welcome any constructive criticism, ideas for improvement or suggestions for new
            simulations. If you see something that could be better or miss a tool for your lessons,
            please write to me (in English or Spanish).
          </p>`,
            `<p>
            Aquest projecte no està tancat: continua viu i en evolució constant. Si ets docent,
            estudiant o simplement t'apassionen la ciència i la programació, la teva opinió m'interessa
            molt.
          </p>
          <p>
            Agrairé qualsevol crítica constructiva, idea de millora o proposta de noves simulacions. Si
            veus alguna cosa que es pugui millorar o trobes a faltar alguna eina per a les teves
            classes, no dubtis a escriure'm (en català o en castellà).
          </p>`,
            `<p>
            Proiektu hau ez dago itxita: bizirik dago eta etengabe aldatzen ari da. Irakaslea, ikaslea
            edo zientzia eta programazioa gustuko dituen norbait bazara, zure iritzia asko interesatzen
            zait.
          </p>
          <p>
            Eskertuko dut edozein kritika eraikitzaile, hobekuntza-ideia edo simulazio berrien
            proposamen. Hobetu daitekeen zerbait ikusten baduzu edo zure klaseetarako tresnaren bat falta
            baduzu, ez izan zalantzarik idazteko (gaztelaniaz edo ingelesez).
          </p>`,
          )}
          <p class="flex flex-wrap items-center gap-x-2 gap-y-1">
            ${L('Puedes escribirme a', 'You can write to me at', 'Em pots escriure a', 'Idatz iezadazu helbide honetara:')}
            <a href="mailto:${CONTACT}" class="font-semibold text-[#0284c7] underline underline-offset-2 hover:text-[#0369a1]">${CONTACT}</a>
            <button
              id="about-copy-email"
              type="button"
              aria-label="${L('Copiar dirección de correo', 'Copy email address', 'Copia l’adreça de correu', 'Kopiatu helbide elektronikoa')}"
              class="inline-flex items-center gap-1 rounded-md border border-[#e2e8f0] bg-white px-2 py-0.5 text-xs font-medium text-[#64748b] transition-colors hover:border-[#0284c7] hover:text-[#0284c7]"
            >
              <i data-lucide="copy" class="h-3.5 w-3.5"></i>
              <span class="copy-label">${L('Copiar', 'Copy', 'Copia', 'Kopiatu')}</span>
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
    flashCopied(copyBtn, L('¡Copiada!', 'Copied!', 'Copiada!', 'Kopiatuta!'));
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
