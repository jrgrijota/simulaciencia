// «Sobre el proyecto»: con el estilo de la portada (cabecera cuadriculada, bloques en
// tarjetas y franja oscura al final). Los textos son de Juanra; solo se reparten en bloques.
import { footerMarkup } from '../components/footer.js';
import { copyText, flashCopied } from '../components/copy.js';
import { siteHeaderMarkup } from '../components/site-header.js';
import { L } from '../i18n.js';

const CONTACT = 'contacto@simulaciencia.es';

const PHET = `<a href="https://phet.colorado.edu" target="_blank" rel="noopener noreferrer" class="font-bold text-[#0369a1] underline underline-offset-2 hover:text-[#075985]">PhET Colorado</a>`;

// Trazos de iconos (24 × 24, estilo lucide), dibujados en línea como en la portada.
const ICON = {
  code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
  ruler: '<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/>',
  sparkles: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  flask: '<path d="M9 3h6"/><path d="M10 3v6.5L4.6 18.4A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.4-2.6L14 9.5V3"/><path d="M7.5 15h9"/>',
  scale: '<circle cx="12" cy="12" r="9"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
  book: '<path d="M4 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H4z"/><path d="M13 8a3 3 0 0 1 3-3h4v13h-5a2 2 0 0 0-2 2"/>',
};

const icon = (name, color = '#0369a1') =>
  `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICON[name]}</svg>`;

const card = ({ icon: name, title, text }) => `
  <div class="flex flex-col rounded-xl border border-[#e2e8f0] bg-white p-5 shadow-sm sm:p-6">
    ${icon(name)}
    <h3 class="mt-3 text-xl font-bold text-[#0f172a]">${title}</h3>
    <div class="mt-2 flex flex-col gap-3 leading-relaxed text-[#475569]">${text}</div>
  </div>`;

export function renderAbout(root) {
  const story = [
    {
      icon: 'code',
      title: L('Del código al aula', 'From code to the classroom', "Del codi a l'aula", 'Kodetik ikasgelara', 'Do código á aula'),
      text: L(
        '<p>Soy Juanra, profesor de Física y Química en la Comunidad de Madrid. Hace años me dediqué a la programación, pero al cambiar de rumbo profesional fui perdiendo la práctica con el código.</p>',
        "<p>I'm Juanra, a Physics and Chemistry teacher in the Community of Madrid, Spain. Years ago I worked as a programmer, but when I changed careers I gradually lost my coding practice.</p>",
        '<p>Soc en Juanra, professor de Física i Química a la Comunitat de Madrid. Fa anys em vaig dedicar a la programació, però en canviar de rumb professional vaig anar perdent la pràctica amb el codi.</p>',
        '<p>Juanra naiz, Fisika eta Kimikako irakaslea Madrilgo Erkidegoan. Duela urte batzuk programazioan aritu nintzen, baina lanbidez aldatu nuenean kodearekiko trebetasuna galtzen joan nintzen.</p>',
        '<p>Son Juanra, profesor de Física e Química na Comunidade de Madrid. Hai anos dediqueime á programación, pero ao cambiar de rumbo profesional fun perdendo a práctica co código.</p>',
      ),
    },
    {
      icon: 'ruler',
      title: L('A la medida de mis clases', 'Tailored to my lessons', 'A la mida de les meves classes', 'Nire klaseetara egokituta', 'Á medida das miñas clases'),
      text: L(
        `<p>Durante mucho tiempo he usado en clase los magníficos simuladores de ${PHET}. Son una herramienta extraordinaria, pero a menudo echaba en falta alguna función concreta para mis explicaciones o, al contrario, me sobraban opciones que acababan distrayendo al alumnado. Quería algo hecho a la medida de mis clases.</p>`,
        `<p>For a long time I've used the wonderful ${PHET} simulations in class. They're an extraordinary tool, but I often missed a particular feature for my explanations or, the other way round, had options that ended up distracting my students. I wanted something tailored to my lessons.</p>`,
        `<p>Durant molt de temps he fet servir a classe els magnífics simuladors de ${PHET}. Són una eina extraordinària, però sovint trobava a faltar alguna funció concreta per a les meves explicacions o, al contrari, em sobraven opcions que acabaven distraient l'alumnat. Volia alguna cosa feta a la mida de les meves classes.</p>`,
        `<p>Denbora luzez erabili ditut klasean ${PHET} proiektuaren simulagailu bikainak. Tresna apartak dira, baina askotan funtzio zehatzen bat falta zitzaidan nire azalpenetarako, edo, alderantziz, ikasleak desbideratzen zituzten aukerak soberan nituen. Nire klaseetara egokitutako zerbait nahi nuen.</p>`,
        `<p>Durante moito tempo usei na aula os magníficos simuladores de ${PHET}. Son unha ferramenta extraordinaria, pero a miúdo botaba en falta algunha función concreta para as miñas explicacións ou, ao contrario, sobrábanme opcións que acababan distraendo o alumnado. Quería algo feito á medida das miñas clases.</p>`,
      ),
    },
    {
      icon: 'sparkles',
      title: L('Con ayuda de la IA', 'With help from AI', "Amb l'ajuda de la IA", 'AAren laguntzarekin', 'Coa axuda da IA'),
      text: L(
        '<p>¿Y cómo han nacido estas simulaciones? Gracias a lo que hoy se conoce como <em>vibe coding</em>: herramientas de inteligencia artificial se han encargado de la parte más pesada de la programación, y eso me ha permitido diseñar exactamente lo que necesitaba en el aula. Empezó siendo un recurso para mis clases, pero sería un orgullo si pudiera servir también a otros docentes y estudiantes.</p>',
        "<p>So how did these simulations come about? Thanks to what's now known as <em>vibe coding</em>: artificial intelligence tools took care of the heaviest part of the programming, which let me design exactly what I needed in the classroom. It started as a resource for my own lessons, but I'd be proud if it could also help other teachers and students.</p>",
        "<p>I com han nascut aquestes simulacions? Gràcies al que avui es coneix com a <em>vibe coding</em>: eines d'intel·ligència artificial s'han encarregat de la part més feixuga de la programació, i això m'ha permès dissenyar exactament el que necessitava a l'aula. Va començar com un recurs per a les meves classes, però seria un orgull que també pogués servir a altres docents i estudiants.</p>",
        '<p>Eta nola sortu dira simulazio hauek? Gaur egun <em>vibe coding</em> deritzonari esker: adimen artifizialeko tresnek programazioaren zatirik astunena egin dute, eta horri esker gelan behar nuena zehazki diseinatu ahal izan dut. Nire klaseetarako baliabide gisa hasi zen, baina harro egongo nintzateke beste irakasle eta ikasle batzuei ere baliagarri izango balitzaie.</p>',
        '<p>E como naceron estas simulacións? Grazas ao que hoxe se coñece como <em>vibe coding</em>: ferramentas de intelixencia artificial encargáronse da parte máis pesada da programación, e iso permitiume deseñar exactamente o que necesitaba na aula. Comezou sendo un recurso para as miñas clases, pero sería un orgullo que puidese servir tamén a outros docentes e estudantes.</p>',
      ),
    },
  ];

  const limits = [
    {
      icon: 'scale',
      title: L('Un apoyo, no un laboratorio', 'Support, not a lab', 'Un suport, no un laboratori', 'Laguntza bat, ez laborategi bat', 'Un apoio, non un laboratorio'),
      text: L(
        '<p>Por eso conviene tener presente que la física de estas simulaciones no es perfecta. No pretenden ser un software de precisión científica ni sustituir al laboratorio, sino ofrecer un apoyo visual e intuitivo para el aula.</p>',
        "<p>So bear in mind that the physics in these simulations isn't perfect. They aren't meant to be scientific precision software or to replace the lab, but to offer visual, intuitive support in the classroom.</p>",
        "<p>Per això cal tenir present que la física d'aquestes simulacions no és perfecta. No volen ser un programari de precisió científica ni substituir el laboratori, sinó oferir un suport visual i intuïtiu per a l'aula.</p>",
        '<p>Horregatik, kontuan izan behar da simulazio hauen fisika ez dela perfektua. Ez dute zehaztasun zientifikoko softwarea izan nahi, ezta laborategia ordezkatu ere, gelarako laguntza bisual eta intuitiboa eskaini baizik.</p>',
        '<p>Por iso convén ter presente que a física destas simulacións non é perfecta. Non pretenden ser un software de precisión científica nin substituír o laboratorio, senón ofrecer un apoio visual e intuitivo para a aula.</p>',
      ),
    },
    {
      icon: 'book',
      title: L('Guía docente y ficha de actividades en cada simulación', 'A teacher guide and an activity worksheet for every simulation', 'Guia docent i fitxa d’activitats per a cada simulació', 'Irakaslearen gida eta jarduera-fitxa simulazio bakoitzean', 'Guía docente e ficha de actividades en cada simulación'),
      text: L(
        '<p>Para que puedas usarlas con seguridad, cada simulación tiene su <strong>guía docente</strong>: en qué cursos encaja, qué saberes básicos trabaja, una secuencia para explicarla en clase, las ideas previas que ayuda a corregir y las simplificaciones que conviene conocer. Puedes leerla en la web o descargarla en PDF, Word o LibreOffice para adaptarla a tu grupo.</p><p>Cada simulación tiene también una <strong>ficha de actividades</strong> asociada para el alumnado: ideas previas, actividades de predecir, observar y explicar con enlaces que abren la simulación ya preparada, problemas y autoevaluación. Se descarga en Word, LibreOffice o PDF, y sus soluciones están al final de la guía docente.</p>',
        '<p>So that you can use them with confidence, each simulation has a <strong>teacher guide</strong> (in Spanish and English): which year groups it suits, the content it covers in the Spanish curriculum, a sequence for teaching it, the misconceptions it helps to address and the simplifications worth knowing about. You can read it on the website or download it as a PDF, Word or LibreOffice file to adapt it to your class.</p><p>Each simulation also comes with an <strong>activity worksheet</strong> for students: prior ideas, predict-observe-explain activities with links that open the simulation already set up, problems and a self-assessment. It downloads as Word, LibreOffice or PDF, and the answers are at the end of the teacher guide.</p>',
        '<p>Perquè les puguis fer servir amb seguretat, cada simulació té la seva <strong>guia docent</strong> (de moment només en castellà): en quins cursos encaixa, quins sabers bàsics treballa, una seqüència per explicar-la a classe, les idees prèvies que ajuda a corregir i les simplificacions que convé conèixer. La pots llegir al web o descarregar-la en PDF, Word o LibreOffice per adaptar-la al teu grup.</p><p>Cada simulació té també una <strong>fitxa d’activitats</strong> associada per a l’alumnat: idees prèvies, activitats de predir, observar i explicar amb enllaços que obren la simulació ja preparada, problemes i autoavaluació. Es descarrega en Word, LibreOffice o PDF, i les solucions són al final de la guia docent.</p>',
        '<p>Lasai erabili ahal izateko, simulazio bakoitzak bere <strong>irakaslearen gida</strong> du (oraingoz gaztelaniaz bakarrik): zein mailatan sartzen den, zer oinarrizko jakintza lantzen dituen, klasean azaltzeko sekuentzia bat, zuzentzen laguntzen dituen aurretiazko ideiak eta ezagutzea komeni diren sinplifikazioak. Webgunean irakur dezakezu, edo PDF, Word edo LibreOffice formatuan deskargatu zure taldera egokitzeko.</p><p>Simulazio bakoitzak ikasleentzako <strong>jarduera-fitxa</strong> bat ere badu: aurretiazko ideiak, iragarri-behatu-azaldu jarduerak simulazioa prestatuta irekitzen duten estekekin, ariketak eta autoebaluazioa. Word, LibreOffice edo PDF formatuan deskarga daiteke, eta soluzioak irakaslearen gidaren amaieran daude.</p>',
        '<p>Para que poidas usalas con seguridade, cada simulación ten a súa <strong>guía docente</strong> (polo de agora só en castelán): en que cursos encaixa, que saberes básicos traballa, unha secuencia para explicala na aula, as ideas previas que axuda a corrixir e as simplificacións que convén coñecer. Podes lela na web ou descargala en PDF, Word ou LibreOffice para adaptala ao teu grupo.</p><p>Cada simulación ten tamén unha <strong>ficha de actividades</strong> asociada para o alumnado: ideas previas, actividades de predicir, observar e explicar con ligazóns que abren a simulación xa preparada, problemas e autoavaliación. Descárgase en Word, LibreOffice ou PDF, e as solucións están ao final da guía docente.</p>',
      ),
    },
  ];

  root.innerHTML = `
  <div class="min-h-screen">
    ${siteHeaderMarkup({ current: 'about' })}

    <main>
      <section class="paper border-b border-[#e2e8f0]">
        <div class="mx-auto max-w-4xl px-4 py-10 text-center md:py-16">
          <p class="text-sm font-bold uppercase tracking-wide text-[#0369a1]">${L('Sobre el proyecto', 'About', 'Sobre el projecte', 'Proiektuari buruz', 'Sobre o proxecto')}</p>
          <h1 class="mt-3 text-3xl font-extrabold leading-[1.1] text-balance text-[#0f172a] sm:text-4xl md:text-5xl">${L(
            '¡Hola! Te cuento cómo nació este proyecto',
            "Hello! Here's how this project began",
            "Hola! T'explico com va néixer aquest projecte",
            'Kaixo! Proiektu hau nola sortu zen kontatuko dizut',
            'Ola! Cóntoche como naceu este proxecto',
          )}</h1>
        </div>
      </section>

      <section class="mx-auto max-w-6xl px-4 py-12" aria-label="${L('Cómo nació', 'How it began', 'Com va néixer', 'Nola sortu zen', 'Como naceu')}">
        <div class="grid grid-cols-1 gap-5 md:grid-cols-3">${story.map(card).join('')}</div>
      </section>

      <section class="border-t border-[#e2e8f0] bg-white" aria-labelledby="objetivo-titulo">
        <div class="mx-auto max-w-6xl px-4 py-12 md:py-14">
          <h2 id="objetivo-titulo" class="text-center text-3xl font-bold text-balance text-[#0f172a]">${L(
            'El objetivo (y las reglas del juego)',
            'The goal (and the rules of the game)',
            "L'objectiu (i les regles del joc)",
            'Helburua (eta jokoaren arauak)',
            'O obxectivo (e as regras do xogo)',
          )}</h2>
          <div class="mt-8 grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-10">
            <div class="flex flex-col gap-4 text-lg leading-relaxed text-[#334155]">${L(
              `<p>Quienes enseñamos ciencias sabemos que explicar lo que no se ve es todo un reto. El comportamiento microscópico de la materia o los fenómenos ondulatorios son conceptos muy abstractos. El objetivo de esta web es que el alumnado pueda «tocar» y ver esos procesos para comprenderlos mejor.</p>
              <p>Al diseñar cada simulación he cuidado mucho no reforzar ideas erróneas (lo que en didáctica llamamos <em>concepciones alternativas</em>) y buscar siempre la máxima claridad. Aun así, a veces he tenido que recurrir a pequeñas «trampas» o licencias visuales que ponen el foco en lo verdaderamente importante.</p>`,
              `<p>Those of us who teach science know that explaining what can't be seen is a real challenge. The microscopic behaviour of matter or wave phenomena are very abstract ideas. The aim of this website is to let students "touch" and see those processes so they understand them better.</p>
              <p>When designing each simulation I've been very careful not to reinforce mistaken ideas (what science education calls <em>misconceptions</em>) and to aim for maximum clarity. Even so, I sometimes had to use small visual "tricks" or licences that put the focus on what really matters.</p>`,
              `<p>Els qui ensenyem ciències sabem que explicar allò que no es veu és tot un repte. El comportament microscòpic de la matèria o els fenòmens ondulatoris són conceptes molt abstractes. L'objectiu d'aquest web és que l'alumnat pugui «tocar» i veure aquests processos per entendre'ls millor.</p>
              <p>En dissenyar cada simulació he tingut molta cura de no reforçar idees errònies (el que en didàctica anomenem <em>concepcions alternatives</em>) i de buscar sempre la màxima claredat. Tot i això, de vegades he hagut de recórrer a petits «trucs» o llicències visuals que posen el focus en allò realment important.</p>`,
              `<p>Zientziak irakasten ditugunok badakigu ikusten ez dena azaltzea erronka handia dela. Materiaren portaera mikroskopikoa edo uhin-fenomenoak oso kontzeptu abstraktuak dira. Webgune honen helburua da ikasleek prozesu horiek «ukitu» eta ikusi ahal izatea, hobeto ulertzeko.</p>
              <p>Simulazio bakoitza diseinatzean kontu handia izan dut ideia okerrak ez indartzeko (didaktikan <em>ideia alternatiboak</em> deitzen diegunak) eta beti argitasun handiena bilatzeko. Hala ere, batzuetan «tranpa» txikiak edo lizentzia bisualak erabili behar izan ditut, benetan garrantzitsua denari arreta jartzeko.</p>`,
              `<p>Quen ensinamos ciencias sabemos que explicar o que non se ve é todo un reto. O comportamento microscópico da materia ou os fenómenos ondulatorios son conceptos moi abstractos. O obxectivo desta web é que o alumnado poida «tocar» e ver eses procesos para comprendelos mellor.</p>
              <p>Ao deseñar cada simulación coidei moito de non reforzar ideas erróneas (o que en didáctica chamamos <em>concepcións alternativas</em>) e de buscar sempre a máxima claridade. Aínda así, ás veces tiven que recorrer a pequenas «trampas» ou licenzas visuais que poñen o foco no verdadeiramente importante.</p>`,
            )}</div>
            <aside class="rounded-xl border border-[#fed7aa] bg-[#fff7ed] p-5 sm:p-6">
              <div class="flex items-center gap-2">
                ${icon('flask', '#c2410c')}
                <h3 class="text-xl font-bold text-[#0f172a]">${L('Un ejemplo concreto', 'A concrete example', 'Un exemple concret', 'Adibide zehatz bat', 'Un exemplo concreto')}</h3>
              </div>
              <p class="mt-3 leading-relaxed text-[#334155]">${L(
                'En la simulación de Velocidad de reacción, cada catalizador tiene un hueco para cada tipo de molécula y atrae hacia sí a las que pasan cerca. Además, cuando dos catalizadores han atrapado cada uno una molécula distinta, se buscan para juntarlas. A escala microscópica la química no funciona exactamente así, pero esta exageración ayuda muchísimo a entender qué papel cumple el catalizador en la reacción.',
                "In the Reaction Rate simulation, each catalyst has a slot for each type of molecule and pulls in the ones that pass nearby. And when two catalysts have each trapped a different molecule, they seek each other out to bring them together. Chemistry doesn't work exactly like that at the microscopic scale, but this exaggeration really helps students understand the role the catalyst plays in the reaction.",
                'A la simulació de Velocitat de reacció, cada catalitzador té un forat per a cada tipus de molècula i atrau cap a si les que passen a prop. A més, quan dos catalitzadors han atrapat cadascun una molècula diferent, es busquen per ajuntar-les. A escala microscòpica la química no funciona exactament així, però aquesta exageració ajuda moltíssim a entendre quin paper té el catalitzador en la reacció.',
                'Erreakzio-abiaduraren simulazioan, katalizatzaile bakoitzak zulo bat du molekula mota bakoitzarentzat, eta inguruan pasatzen direnak erakartzen ditu. Gainera, bi katalizatzailek molekula desberdin bana harrapatu dutenean, elkar bilatzen dute molekulak elkartzeko. Eskala mikroskopikoan kimikak ez du zehazki horrela funtzionatzen, baina gehiegikeria horrek asko laguntzen du katalizatzaileak erreakzioan zer zeregin duen ulertzen.',
                'Na simulación de Velocidade de reacción, cada catalizador ten un oco para cada tipo de molécula e atrae cara a si as que pasan preto. Ademais, cando dous catalizadores atraparon cadanseu unha molécula distinta, búscanse para xuntalas. A escala microscópica a química non funciona exactamente así, pero esta esaxeración axuda moitísimo a entender que papel cumpre o catalizador na reacción.',
              )}</p>
            </aside>
          </div>
          <div class="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">${limits.map(card).join('')}</div>
        </div>
      </section>

      <section class="bg-[#0f172a]" aria-labelledby="comunidad-titulo">
        <div class="mx-auto max-w-6xl px-4 py-14 text-center">
          <h2 id="comunidad-titulo" class="text-3xl font-bold text-balance text-white">${L('Ideas, mejoras y comunidad', 'Ideas, improvements and community', 'Idees, millores i comunitat', 'Ideiak, hobekuntzak eta komunitatea', 'Ideas, melloras e comunidade')}</h2>
          <div class="mt-5 flex flex-col gap-4 text-lg leading-relaxed text-[#cbd5e1]">${L(
            `<p>Este proyecto no está cerrado: sigue vivo y en constante evolución. Si eres docente, estudiante o simplemente te apasionan la ciencia y la programación, tu opinión me interesa mucho.</p>
            <p>Agradeceré cualquier crítica constructiva, idea de mejora o propuesta de nuevas simulaciones. Si ves algo que se pueda mejorar o echas en falta alguna herramienta para tus clases, no dudes en escribirme.</p>`,
            `<p>This project isn't finished: it's alive and constantly evolving. Whether you're a teacher, a student or simply passionate about science and programming, I'd love to hear your opinion.</p>
            <p>I'll welcome any constructive criticism, ideas for improvement or suggestions for new simulations. If you see something that could be better or miss a tool for your lessons, please write to me (in English or Spanish).</p>`,
            `<p>Aquest projecte no està tancat: continua viu i en evolució constant. Si ets docent, estudiant o simplement t'apassionen la ciència i la programació, la teva opinió m'interessa molt.</p>
            <p>Agrairé qualsevol crítica constructiva, idea de millora o proposta de noves simulacions. Si veus alguna cosa que es pugui millorar o trobes a faltar alguna eina per a les teves classes, no dubtis a escriure'm (en català o en castellà).</p>`,
            `<p>Proiektu hau ez dago itxita: bizirik dago eta etengabe aldatzen ari da. Irakaslea, ikaslea edo zientzia eta programazioa gustuko dituen norbait bazara, zure iritzia asko interesatzen zait.</p>
            <p>Eskertuko dut edozein kritika eraikitzaile, hobekuntza-ideia edo simulazio berrien proposamen. Hobetu daitekeen zerbait ikusten baduzu edo zure klaseetarako tresnaren bat falta baduzu, ez izan zalantzarik idazteko (gaztelaniaz edo ingelesez).</p>`,
            `<p>Este proxecto non está pechado: segue vivo e en constante evolución. Se es docente, estudante ou simplemente che apaixonan a ciencia e a programación, a túa opinión interésame moito.</p>
            <p>Agradecerei calquera crítica construtiva, idea de mellora ou proposta de novas simulacións. Se ves algo que se poida mellorar ou botas en falta algunha ferramenta para as túas clases, non dubides en escribirme (en galego ou en castelán).</p>`,
          )}</div>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:${CONTACT}" class="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#0369a1] px-5 py-2 font-bold text-white transition-colors hover:bg-[#075985] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
              <span translate="no">${CONTACT}</span>
            </a>
            <button
              id="about-copy-email"
              type="button"
              aria-label="${L('Copiar dirección de correo', 'Copy email address', 'Copia l’adreça de correu', 'Kopiatu helbide elektronikoa', 'Copiar o enderezo de correo')}"
              class="inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-white/25 px-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              <i data-lucide="copy" class="h-4 w-4"></i>
              <span class="copy-label">${L('Copiar', 'Copy', 'Copia', 'Kopiatu', 'Copiar')}</span>
            </button>
          </div>
          <p class="mt-8 text-sm leading-relaxed text-[#94a3b8]">${L(
            'Las versiones en inglés, catalán, euskera y gallego de la web y de las simulaciones se han traducido con inteligencia artificial. Cualquier corrección o mejora de las traducciones será bienvenida.',
            'The English, Catalan, Basque and Galician versions of the website and the simulations were translated with artificial intelligence. Any corrections or improvements to the translations are welcome.',
            'Les versions en anglès, català, basc i gallec del web i de les simulacions s’han traduït amb intel·ligència artificial. Qualsevol correcció o millora de les traduccions serà benvinguda.',
            'Webgunearen eta simulazioen ingelesezko, katalanezko, euskarazko eta galiziarrezko bertsioak adimen artifizialarekin itzuli dira. Itzulpenetarako edozein zuzenketa edo hobekuntza ongi etorriko da.',
            'As versións en inglés, catalán, éuscaro e galego da web e das simulacións traducíronse con intelixencia artificial. Calquera corrección ou mellora das traducións será benvida.',
          )}</p>
        </div>
      </section>
    </main>
    ${footerMarkup()}
  </div>`;

  const copyBtn = root.querySelector('#about-copy-email');
  copyBtn.addEventListener('click', async () => {
    await copyText(CONTACT);
    flashCopied(copyBtn, L('¡Copiada!', 'Copied!', 'Copiada!', 'Kopiatuta!', 'Copiada!'));
  });

  return null;
}
