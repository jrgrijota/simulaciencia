// Textos de las páginas por curso y por tema (/cursos/<curso>/, /temas/<tema>/):
// título, entradilla y lista de recursos. Los usan la vista (src/views/collection.js)
// y el <head> (título, descripción y datos estructurados).
import { COURSES, TOPICS, courseLabel, isPractical } from './simulations.js';
import { courseSims, topicSims } from '../paths.js';

const AND = { es: 'y', en: 'and', ca: 'i', eu: 'eta', gl: 'e' };
const list = (items, lang) =>
  items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} ${AND[lang]} ${items[items.length - 1]}`;
// «2.º Bach..» al final de una frase: un solo punto.
const fixDots = (t) => t.replace(/\.\.$/, '.');
const lower = (t) => t.charAt(0).toLowerCase() + t.slice(1);
const topicLabel = (t, lang) => t.label[lang] ?? t.label.es;

// «6 simulaciones interactivas y 1 práctica de laboratorio».
function countPhrase(sims, lang) {
  const n = sims.filter((s) => !isPractical(s)).length;
  const p = sims.length - n;
  const simsText = {
    es: `${n} ${n === 1 ? 'simulación interactiva' : 'simulaciones interactivas'}`,
    en: `${n} interactive ${n === 1 ? 'simulation' : 'simulations'}`,
    ca: `${n} ${n === 1 ? 'simulació interactiva' : 'simulacions interactives'}`,
    eu: `${n} simulazio interaktibo`,
    gl: `${n} ${n === 1 ? 'simulación interactiva' : 'simulacións interactivas'}`,
  }[lang];
  const pracText = {
    es: `${p} ${p === 1 ? 'práctica de laboratorio' : 'prácticas de laboratorio'}`,
    en: `${p} lab ${p === 1 ? 'practical' : 'practicals'}`,
    ca: `${p} ${p === 1 ? 'pràctica de laboratori' : 'pràctiques de laboratori'}`,
    eu: `${p} laborategiko praktika`,
    gl: `${p} ${p === 1 ? 'práctica de laboratorio' : 'prácticas de laboratorio'}`,
  }[lang];
  return p ? `${simsText} ${AND[lang]} ${pracText}` : simsText;
}

// Lo que tiene cada simulación, igual en las dos clases de página.
const TAIL = {
  es: 'Cada simulación tiene una guía docente con su uso en el aula, la secuencia de explicación y las ideas previas que ayuda a corregir, y una ficha de actividades para el alumnado. Son gratuitas y funcionan en el navegador, sin registro ni instalación.',
  en: 'Each simulation has a teacher guide on how to use it in class, with a teaching sequence and the misconceptions it helps to address, plus an activity worksheet for students. They are free and run in the browser, with no sign-up or installation.',
  ca: "Cada simulació té una guia docent adaptada al currículum de Catalunya amb el seu ús a l'aula i les idees prèvies que ajuda a corregir, i una fitxa d'activitats per a l'alumnat. Són gratuïtes i funcionen al navegador, sense registre ni instal·lació.",
  eu: 'Simulazio bakoitzak irakaslearen gida bat du, Euskadiko curriculumari egokitua, gelan nola erabili eta zer aurretiazko ideia zuzentzen laguntzen dituen azaltzen duena, eta ikasleentzako jarduera-fitxa bat. Doakoak dira eta nabigatzailean dabiltza, erregistrorik eta instalaziorik gabe.',
  gl: 'Cada simulación ten unha guía docente adaptada ao currículo de Galicia co seu uso na aula e as ideas previas que axuda a corrixir, e unha ficha de actividades para o alumnado. Son gratuítas e funcionan no navegador, sen rexistro nin instalación.',
};
const CURRICULUM = {
  es: 'El uso por curso sigue el currículo LOMLOE de la Comunidad de Madrid.',
  en: null, // en inglés se explica la equivalencia del curso (enTitle)
  ca: "La tria de simulacions per curs segueix el currículum LOMLOE de la Comunitat de Madrid; la guia docent de cada simulació en detalla l'encaix en el currículum de Catalunya.",
  eu: 'Mailaz mailako simulazioen hautaketak Madrilgo Erkidegoko LOMLOE curriculuma jarraitzen du; simulazio bakoitzaren irakaslearen gidak Euskadiko curriculumean nola txertatzen den zehazten du.',
  gl: 'A selección de simulacións por curso segue o currículo LOMLOE da Comunidade de Madrid; a guía docente de cada simulación detalla o seu encaixe no currículo de Galicia.',
};

// Presentación propia de cada página por tema y por curso: qué se estudia con esas
// simulaciones y para qué sirven en clase. Es el texto que distingue cada página de
// las demás (sin él, Google las veía como listas de enlaces repetidas y no las
// indexaba). La primera frase sirve también de descripción para Google, así que
// cabe en unos 155 caracteres.
const TOPIC_TEXT = {
  movimiento: {
    es: 'Simulaciones para estudiar el movimiento y aprender a leer sus gráficas: posición, velocidad y aceleración en el MRU, el MRUA, la caída libre y el tiro parabólico. Con «Gráficas del Movimiento», el alumnado ve un coche o una persona en una pista y, a la vez, sus gráficas x‑t, v‑t y a‑t, y resuelve retos que piden reproducir una gráfica; con la caída libre y los tiros, lleva esas mismas ideas a los objetos que caen o se lanzan.',
    en: 'Simulations to study motion and learn to read its graphs: position, velocity and acceleration at constant velocity, at constant acceleration, in free fall and in projectile motion. With “Motion Graphs”, students watch a car or a person on a track alongside its x‑t, v‑t and a‑t graphs and take on challenges to recreate a graph; with free fall and projectiles, they apply the same ideas to objects that fall or are thrown.',
    ca: "Simulacions per estudiar el moviment i aprendre a llegir-ne les gràfiques: posició, velocitat i acceleració en el MRU, el MRUA, la caiguda lliure i el tir parabòlic. Amb «Gràfiques del Moviment», l'alumnat veu un cotxe o una persona en una pista i, alhora, les seves gràfiques x‑t, v‑t i a‑t, i resol reptes que demanen reproduir una gràfica; amb la caiguda lliure i els tirs, porta aquestes mateixes idees als objectes que cauen o es llancen.",
    eu: 'Mugimendua aztertzeko eta haren grafikoak irakurtzen ikasteko simulazioak: posizioa, abiadura eta azelerazioa MZUn, MZUAn, erorketa askean eta jaurtiketa parabolikoan. «Mugimenduaren grafikoak» simulazioarekin, ikasleek auto bat edo pertsona bat ikusten dute pista batean eta, aldi berean, haren x‑t, v‑t eta a‑t grafikoak, eta grafiko bat errepikatzea eskatzen duten erronkak ebazten dituzte; erorketa askearekin eta jaurtiketekin, ideia berak erortzen edo jaurtitzen diren objektuetara eramaten dituzte.',
    gl: 'Simulacións para estudar o movemento e aprender a ler as súas gráficas: posición, velocidade e aceleración no MRU, no MRUA, na caída libre e no tiro parabólico. Con «Gráficas do movemento», o alumnado ve un coche ou unha persoa nunha pista e, ao mesmo tempo, as súas gráficas x‑t, v‑t e a‑t, e resolve retos que piden reproducir unha gráfica; coa caída libre e os tiros, leva esas mesmas ideas aos obxectos que caen ou se lanzan.',
  },
  fuerzas: {
    es: 'Simulaciones para ver las fuerzas en acción: el empuje que hace flotar un barco y la gravedad que mantiene a la Luna y a los planetas en su órbita. Con el principio de Arquímedes, el alumnado compara el peso y el empuje con materiales y líquidos reales; con «Órbitas y gravitación», pasa de la bala de cañón de Newton a las leyes de Kepler y las estrellas binarias.',
    en: 'Simulations that show forces at work: the upthrust that keeps a ship afloat and the gravity that holds the Moon and the planets in orbit. With Archimedes’ Principle, students compare weight and upthrust using real materials and liquids; with “Orbits and Gravitation”, they go from Newton’s cannonball to Kepler’s laws and binary stars.',
    ca: "Simulacions per veure les forces en acció: l'empenyiment que fa surar un vaixell i la gravetat que manté la Lluna i els planetes en òrbita. Amb el principi d'Arquimedes, l'alumnat compara el pes i l'empenyiment amb materials i líquids reals; amb «Òrbites i gravitació», passa de la bala de canó de Newton a les lleis de Kepler i les estrelles binàries.",
    eu: 'Indarrak martxan ikusteko simulazioak: itsasontzi bat flotatzen mantentzen duen bultzada eta Ilargia eta planetak orbitan eusten dituen grabitatea. Arkimedesen printzipioarekin, ikasleek pisua eta bultzada alderatzen dituzte benetako material eta likidoekin; «Orbitak eta grabitazioa» simulazioarekin, Newtonen kanoi-balatik Keplerren legeetara eta izar bitarretara igarotzen dira.',
    gl: 'Simulacións para ver as forzas en acción: o empuxe que fai flotar un barco e a gravidade que mantén a Lúa e os planetas na súa órbita. Co principio de Arquímedes, o alumnado compara o peso e o empuxe con materiais e líquidos reais; con «Órbitas e gravitación», pasa da bala de canón de Newton ás leis de Kepler e ás estrelas binarias.',
  },
  energia: {
    es: 'Simulaciones de energía mecánica y de circuitos eléctricos para ver cómo se transforma la energía y cómo circula la corriente. La montaña rusa y el péndulo muestran el paso de energía potencial a cinética y lo que se pierde con el rozamiento; los circuitos permiten medir tensión e intensidad, comprobar la ley de Ohm y comparar montajes en serie y en paralelo.',
    en: 'Mechanical energy and electric circuit simulations to see how energy is transformed and how current flows. The roller coaster and the pendulum show potential energy turning into kinetic energy and what friction takes away; the circuits let students measure voltage and current, check Ohm’s law and compare series and parallel circuits.',
    ca: "Simulacions d'energia mecànica i de circuits elèctrics per veure com es transforma l'energia i com circula el corrent. La muntanya russa i el pèndol mostren el pas d'energia potencial a cinètica i el que es perd amb el fregament; els circuits permeten mesurar tensió i intensitat, comprovar la llei d'Ohm i comparar muntatges en sèrie i en paral·lel.",
    eu: 'Energia mekanikoaren eta zirkuitu elektrikoen simulazioak, energia nola eraldatzen den eta korrontea nola zirkulatzen duen ikusteko. Mendi errusiarrak eta penduluak erakusten dute energia potentziala nola bihurtzen den zinetiko eta marruskadurak zer kentzen duen; zirkuituekin, tentsioa eta intentsitatea neurtu, Ohmen legea egiaztatu eta seriean eta paraleloan egindako muntaketak alderatzen dira.',
    gl: 'Simulacións de enerxía mecánica e de circuítos eléctricos para ver como se transforma a enerxía e como circula a corrente. A montaña rusa e o péndulo amosan o paso de enerxía potencial a cinética e o que se perde co rozamento; os circuítos permiten medir tensión e intensidade, comprobar a lei de Ohm e comparar montaxes en serie e en paralelo.',
  },
  ondas: {
    es: 'Simulaciones de ondas y de luz: de la onda que recorre una cuerda o un muelle a las líneas de colores que emite cada elemento químico. Con «Ondas» se miden la amplitud, la longitud de onda y el período y se comprueba que una onda transporta energía y no materia; con «Espectros atómicos», la luz sirve para identificar elementos y conecta con los niveles de energía del átomo.',
    en: 'Simulations of waves and light: from a wave travelling along a string or a spring to the coloured lines that each chemical element gives off. With “Waves”, students measure amplitude, wavelength and period and check that a wave carries energy, not matter; with “Atomic Spectra”, light is used to identify elements and links to the energy levels of the atom.',
    ca: "Simulacions d'ones i de llum: de l'ona que recorre una corda o una molla a les línies de colors que emet cada element químic. Amb «Ones» es mesuren l'amplitud, la longitud d'ona i el període i es comprova que una ona transporta energia i no matèria; amb «Espectres atòmics», la llum serveix per identificar elements i connecta amb els nivells d'energia de l'àtom.",
    eu: 'Uhinen eta argiaren simulazioak: soka edo malguki batean zehar doan uhinetik elementu kimiko bakoitzak igortzen dituen koloretako lerroetara. «Uhinak» simulazioarekin, anplitudea, uhin-luzera eta periodoa neurtzen dira, eta uhinak energia garraiatzen duela egiaztatzen da, ez materia; «Espektro atomikoak» simulazioarekin, argia elementuak identifikatzeko erabiltzen da, eta atomoaren energia-mailekin lotzen da.',
    gl: 'Simulacións de ondas e de luz: da onda que percorre unha corda ou un resorte ás liñas de cores que emite cada elemento químico. Con «Ondas» mídense a amplitude, a lonxitude de onda e o período e compróbase que unha onda transporta enerxía e non materia; con «Espectros atómicos», a luz serve para identificar elementos e conecta cos niveis de enerxía do átomo.',
  },
  materia: {
    es: 'Simulaciones y prácticas de laboratorio para estudiar la materia con el modelo de partículas: densidad, cambios de estado y leyes de los gases. El alumnado compara la densidad de distintos materiales y la mide en un laboratorio virtual, calienta sustancias hasta verlas fundir y hervir, y comprueba las leyes de Boyle y de Gay-Lussac con una jeringa y un matraz.',
    en: 'Simulations and lab practicals to study matter with the particle model: density, changes of state and the gas laws. Students compare the density of different materials and measure it in a virtual lab, heat substances until they melt and boil, and test Boyle’s and Gay-Lussac’s laws with a syringe and a flask.',
    ca: "Simulacions i pràctiques de laboratori per estudiar la matèria amb el model de partícules: densitat, canvis d'estat i lleis dels gasos. L'alumnat compara la densitat de diferents materials i la mesura en un laboratori virtual, escalfa substàncies fins a veure-les fondre i bullir, i comprova les lleis de Boyle i de Gay-Lussac amb una xeringa i un matràs.",
    eu: 'Materia partikula-ereduarekin aztertzeko simulazioak eta laborategiko praktikak: dentsitatea, egoera-aldaketak eta gasen legeak. Ikasleek hainbat materialen dentsitatea alderatzen dute eta laborategi birtual batean neurtzen dute, substantziak berotzen dituzte urtu eta irakin arte, eta Boyleren eta Gay-Lussacen legeak egiaztatzen dituzte xiringa batekin eta matraze batekin.',
    gl: 'Simulacións e prácticas de laboratorio para estudar a materia co modelo de partículas: densidade, cambios de estado e leis dos gases. O alumnado compara a densidade de distintos materiais e mídea nun laboratorio virtual, quenta substancias ata velas fundir e ferver, e comproba as leis de Boyle e de Gay-Lussac cunha xiringa e un matraz.',
  },
  atomo: {
    es: 'Simulaciones para entender cómo es el átomo y cómo lo sabemos: el experimento de Rutherford, el tamaño real del núcleo y los espectros atómicos. Sirven para seguir la historia de los modelos atómicos, desde Thomson hasta los niveles de energía, y para corregir una idea muy extendida: que el núcleo ocupa buena parte del átomo.',
    en: 'Simulations to understand what the atom is like and how we know: Rutherford’s experiment, the real size of the nucleus and atomic spectra. They follow the history of atomic models, from Thomson to energy levels, and help to correct a very common idea: that the nucleus takes up a good part of the atom.',
    ca: "Simulacions per entendre com és l'àtom i com ho sabem: l'experiment de Rutherford, la mida real del nucli i els espectres atòmics. Serveixen per seguir la història dels models atòmics, des de Thomson fins als nivells d'energia, i per corregir una idea molt estesa: que el nucli ocupa bona part de l'àtom.",
    eu: 'Atomoa nolakoa den eta nola dakigun ulertzeko simulazioak: Rutherforden esperimentua, nukleoaren benetako tamaina eta espektro atomikoak. Eredu atomikoen historia jarraitzeko balio dute, Thomsonengandik energia-mailetaraino, eta oso zabalduta dagoen ideia bat zuzentzeko: nukleoak atomoaren zati handi bat hartzen duela.',
    gl: 'Simulacións para entender como é o átomo e como o sabemos: o experimento de Rutherford, o tamaño real do núcleo e os espectros atómicos. Serven para seguir a historia dos modelos atómicos, desde Thomson ata os niveis de enerxía, e para corrixir unha idea moi estendida: que o núcleo ocupa boa parte do átomo.',
  },
  reacciones: {
    es: 'Simulaciones de enlace químico y de reacciones: cómo se unen los átomos, cómo se ajusta una ecuación química y de qué depende la velocidad de una reacción. Muestran el enlace iónico, covalente y metálico, la conservación de la masa y el reactivo limitante, y el efecto de la temperatura, la concentración y los catalizadores según la teoría de colisiones.',
    en: 'Chemical bonding and reaction simulations: how atoms join together, how to balance a chemical equation and what the rate of a reaction depends on. They show ionic, covalent and metallic bonding, conservation of mass and the limiting reactant, and the effect of temperature, concentration and catalysts according to collision theory.',
    ca: "Simulacions d'enllaç químic i de reaccions: com s'uneixen els àtoms, com s'ajusta una equació química i de què depèn la velocitat d'una reacció. Mostren l'enllaç iònic, covalent i metàl·lic, la conservació de la massa i el reactiu limitant, i l'efecte de la temperatura, la concentració i els catalitzadors segons la teoria de col·lisions.",
    eu: 'Lotura kimikoaren eta erreakzioen simulazioak: atomoak nola elkartzen diren, ekuazio bat nola doitzen den eta erreakzio-abiadura zeren araberakoa den. Lotura ionikoa, kobalentea eta metalikoa erakusten dituzte, masaren kontserbazioa eta erreaktibo mugatzailea, eta tenperaturaren, kontzentrazioaren eta katalizatzaileen eragina talken teoriaren arabera.',
    gl: 'Simulacións de enlace químico e de reaccións: como se unen os átomos, como se axusta unha ecuación química e de que depende a velocidade dunha reacción. Amosan o enlace iónico, covalente e metálico, a conservación da masa e o reactivo limitante, e o efecto da temperatura, a concentración e os catalizadores segundo a teoría de colisións.',
  },
};

const COURSE_TEXT = {
  '2ESO': {
    es: 'Recursos para el primer curso de Física y Química, centrado en la materia y sus propiedades: densidad, estados de agregación y cambios de estado. Las simulaciones ayudan a introducir el modelo de partículas, el comportamiento de los gases y una primera idea del átomo, y la práctica de densidad lleva al laboratorio virtual el cálculo de masa entre volumen. Los circuitos eléctricos sencillos y las gráficas del movimiento rectilíneo uniforme completan el curso.',
    en: 'Resources for ages 13–14, the first year of Physics and Chemistry, focused on matter: density, states of matter and changes of state. The simulations introduce the particle model, how gases behave and a first idea of the atom, and the density practical takes the mass-over-volume calculation into a virtual lab. Simple electric circuits and constant-velocity motion graphs round off the year.',
    ca: "Recursos per a 2n d'ESO centrats en la matèria i les seves propietats: densitat, estats d'agregació i canvis d'estat. Les simulacions ajuden a introduir el model de partícules, el comportament dels gasos i una primera idea de l'àtom, i la pràctica de densitat porta al laboratori virtual el càlcul de massa entre volum. Els circuits elèctrics senzills i les gràfiques del moviment rectilini uniforme completen el curs.",
    eu: 'DBHko 2. mailarako baliabideak, materian eta haren propietateetan zentratuak: dentsitatea, agregazio-egoerak eta egoera-aldaketak. Simulazioek partikula-eredua, gasen portaera eta atomoaren lehen ideia bat aurkezten laguntzen dute, eta dentsitatearen praktikak masa zati bolumena kalkulua laborategi birtualera eramaten du. Zirkuitu elektriko errazek eta mugimendu zuzen uniformearen grafikoek osatzen dute maila.',
    gl: 'Recursos para 2.º de ESO centrados na materia e nas súas propiedades: densidade, estados de agregación e cambios de estado. As simulacións axudan a introducir o modelo de partículas, o comportamento dos gases e unha primeira idea do átomo, e a práctica de densidade leva ao laboratorio virtual o cálculo de masa entre volume. Os circuítos eléctricos sinxelos e as gráficas do movemento rectilíneo uniforme completan o curso.',
  },
  '3ESO': {
    es: 'El curso con más recursos: simulaciones y prácticas de laboratorio para el átomo, el enlace, las reacciones químicas, los gases, las fuerzas y la energía. Acompañan el paso del modelo de partículas a la estructura del átomo y a las reacciones químicas, con los modelos atómicos, el ajuste de ecuaciones y la velocidad de reacción, y sirven también para la presión de los gases, el empuje, la gravitación, la energía mecánica y los circuitos. Las gráficas del movimiento ayudan con la posición, la velocidad y la aceleración.',
    en: 'The year group with the most resources (ages 14–15): simulations and lab practicals on the atom, bonding, reactions, gases, forces and energy. They support the step from the particle model to the structure of the atom and to chemical reactions, with atomic models, balancing equations and reaction rate, and also cover gas pressure, upthrust, gravitation, mechanical energy and circuits. Motion graphs help with position, velocity and acceleration.',
    ca: "El curs amb més recursos: simulacions i pràctiques de laboratori sobre l'àtom, l'enllaç, les reaccions químiques, els gasos, les forces i l'energia. Acompanyen el pas del model de partícules a l'estructura de l'àtom i a les reaccions químiques, amb els models atòmics, l'ajust d'equacions i la velocitat de reacció, i serveixen també per a la pressió dels gasos, l'empenyiment, la gravitació, l'energia mecànica i els circuits. Les gràfiques del moviment ajuden amb la posició, la velocitat i l'acceleració.",
    eu: 'Baliabide gehien dituen maila: atomoari, loturari, erreakzio kimikoei, gasei, indarrei eta energiari buruzko simulazioak eta laborategiko praktikak. Partikula-eredutik atomoaren egiturara eta erreakzio kimikoetara igarotzen laguntzen dute, eredu atomikoekin, ekuazioen doikuntzarekin eta erreakzio-abiadurarekin, eta gasen presioa, bultzada, grabitazioa, energia mekanikoa eta zirkuituak lantzeko ere balio dute. Mugimenduaren grafikoek posizioa, abiadura eta azelerazioa lantzen laguntzen dute.',
    gl: 'O curso con máis recursos: simulacións e prácticas de laboratorio sobre o átomo, o enlace, as reaccións químicas, os gases, as forzas e a enerxía. Acompañan o paso do modelo de partículas á estrutura do átomo e ás reaccións químicas, cos modelos atómicos, o axuste de ecuacións e a velocidade de reacción, e serven tamén para a presión dos gases, o empuxe, a gravitación, a enerxía mecánica e os circuítos. As gráficas do movemento axudan coa posición, a velocidade e a aceleración.',
  },
  '4ESO': {
    es: 'Simulaciones y prácticas para 4.º ESO, el curso que amplía el modelo atómico, el enlace y las reacciones químicas y estudia fluidos, gravitación, energía y ondas. Son especialmente útiles para el principio de Arquímedes, las leyes de Kepler, la conservación de la energía mecánica, las magnitudes de una onda y los espectros atómicos, y para repasar con imágenes la velocidad de reacción y el ajuste de ecuaciones. Las gráficas x‑t, v‑t y a‑t del MRU y del MRUA se trabajan con retos que piden reproducir una gráfica. La caída libre y el tiro parabólico se ven con estela, vectores y gráficas, con y sin aire.',
    en: 'Simulations and practicals for ages 15–16, the year that extends the atomic model, bonding and reactions and covers fluids, gravity, energy and waves. They are especially useful for Archimedes’ principle, Kepler’s laws, conservation of mechanical energy, the quantities that describe a wave and atomic spectra, and for revisiting reaction rate and balancing equations visually. The x‑t, v‑t and a‑t graphs of constant-velocity and constant-acceleration motion are practised with graph-matching challenges. Free fall and projectile motion are shown with a strobe trail, vectors and graphs, with and without air.',
    ca: "Simulacions i pràctiques per a 4t d'ESO, el curs que amplia el model atòmic, l'enllaç i les reaccions químiques i estudia fluids, gravitació, energia i ones. Són especialment útils per al principi d'Arquimedes, les lleis de Kepler, la conservació de l'energia mecànica, les magnituds d'una ona i els espectres atòmics, i per repassar amb imatges la velocitat de reacció i l'ajust d'equacions. Les gràfiques x‑t, v‑t i a‑t del MRU i del MRUA es treballen amb reptes que demanen reproduir una gràfica. La caiguda lliure i el tir parabòlic es veuen amb estela, vectors i gràfiques, amb aire i sense.",
    eu: 'DBHko 4. mailarako simulazioak eta praktikak: eredu atomikoa, lotura eta erreakzioak sakontzeko, eta fluidoak, grabitazioa, energia eta uhinak aztertzeko. Bereziki erabilgarriak dira Arkimedesen printzipiorako, Keplerren legeetarako, energia mekanikoaren kontserbaziorako, uhin baten magnitudeetarako eta espektro atomikoetarako, eta erreakzio-abiadura eta ekuazioen doikuntza irudiekin errepasatzeko. MZUren eta MZUAren x‑t, v‑t eta a‑t grafikoak grafiko bat errepikatzea eskatzen duten erronkekin lantzen dira. Erorketa askea eta jaurtiketa parabolikoa arrastoarekin, bektoreekin eta grafikoekin ikusten dira, airearekin eta airerik gabe.',
    gl: 'Simulacións e prácticas para 4.º de ESO, o curso que amplía o modelo atómico, o enlace e as reaccións químicas e estuda fluídos, gravitación, enerxía e ondas. Son especialmente útiles para o principio de Arquímedes, as leis de Kepler, a conservación da enerxía mecánica, as magnitudes dunha onda e os espectros atómicos, e para repasar con imaxes a velocidade de reacción e o axuste de ecuacións. As gráficas x‑t, v‑t e a‑t do MRU e do MRUA trabállanse con retos que piden reproducir unha gráfica. A caída libre e o tiro parabólico vense con estela, vectores e gráficas, con aire e sen el.',
  },
  '1BACH': {
    es: 'Simulaciones para Física y Química de 1.º de Bachillerato: enlace químico, estequiometría, espectros atómicos, energía mecánica y gravitación. Dan una base visual a contenidos más abstractos, como el reactivo limitante y el rendimiento de una reacción, la conservación de la energía cuando hay rozamiento o las órbitas y las leyes de Kepler. En cinemática, el tiro parabólico como composición de dos movimientos independientes, con retos que se calculan antes de lanzar.',
    en: 'Simulations for Physics and Chemistry at ages 16–17: chemical bonding, stoichiometry, atomic spectra, mechanical energy and gravitation. They give a visual basis to more abstract content, such as the limiting reactant and the yield of a reaction, conservation of energy when there is friction, or orbits and Kepler’s laws. In kinematics, projectile motion as two independent motions combined, with challenges to calculate before launching.',
    ca: "Simulacions per a Física i Química de 1r de Batxillerat: enllaç químic, estequiometria, espectres atòmics, energia mecànica i gravitació. Donen una base visual a continguts més abstractes, com el reactiu limitant i el rendiment d'una reacció, la conservació de l'energia quan hi ha fregament o les òrbites i les lleis de Kepler. En cinemàtica, el tir parabòlic com a composició de dos moviments independents, amb reptes que es calculen abans de llançar.",
    eu: 'Batxilergoko 1. mailako Fisika eta Kimikarako simulazioak: lotura kimikoa, estekiometria, espektro atomikoak, energia mekanikoa eta grabitazioa. Oinarri bisuala ematen diete eduki abstraktuagoei, hala nola erreaktibo mugatzaileari eta erreakzio baten etekinari, marruskadura dagoenean energiaren kontserbazioari edo orbitei eta Keplerren legeei. Zinematikan, jaurtiketa parabolikoa bi mugimendu independenteren konposizio gisa, jaurti aurretik kalkulatzen diren erronkekin.',
    gl: 'Simulacións para Física e Química de 1.º de Bacharelato: enlace químico, estequiometría, espectros atómicos, enerxía mecánica e gravitación. Dan unha base visual a contidos máis abstractos, como o reactivo limitante e o rendemento dunha reacción, a conservación da enerxía cando hai rozamento ou as órbitas e as leis de Kepler. En cinemática, o tiro parabólico como composición de dous movementos independentes, con retos que se calculan antes de lanzar.',
  },
  '2BACH': {
    es: 'Simulaciones para Física y para Química de 2.º de Bachillerato: campo gravitatorio y órbitas, ondas, espectros y modelos atómicos, y cinética química. Sirven para explicar y repasar con imágenes contenidos que entran en la PAU, como las leyes de Kepler, las magnitudes de una onda, el origen de las líneas espectrales o la teoría de colisiones.',
    en: 'Simulations for Physics and for Chemistry at ages 17–18: gravitational field and orbits, waves, atomic spectra and models, and chemical kinetics. They help to teach and revise visually topics that come up in final exams, such as Kepler’s laws, the quantities that describe a wave, where spectral lines come from and collision theory.',
    ca: 'Simulacions per a Física i per a Química de 2n de Batxillerat: camp gravitatori i òrbites, ones, espectres i models atòmics, i cinètica química. Serveixen per explicar i repassar amb imatges continguts que entren a les PAU, com les lleis de Kepler, les magnituds d’una ona, l’origen de les línies espectrals o la teoria de col·lisions.',
    eu: 'Batxilergoko 2. mailako Fisikarako eta Kimikarako simulazioak: eremu grabitatorioa eta orbitak, uhinak, espektro eta eredu atomikoak, eta zinetika kimikoa. Unibertsitatera sartzeko proban ateratzen diren edukiak irudiekin azaltzeko eta errepasatzeko balio dute, hala nola Keplerren legeak, uhin baten magnitudeak, lerro espektralen jatorria edo talken teoria.',
    gl: 'Simulacións para Física e para Química de 2.º de Bacharelato: campo gravitatorio e órbitas, ondas, espectros e modelos atómicos, e cinética química. Serven para explicar e repasar con imaxes contidos que entran na PAU, como as leis de Kepler, as magnitudes dunha onda, a orixe das liñas espectrais ou a teoría de colisións.',
  },
};

// { h1, text, intro, sims } de una página por curso o por tema; null si no existe en ese idioma.
// `text`: presentación propia de la página; `intro`: recuento de recursos y lo que trae cada uno.
export function collectionInfo({ courseId, topicId }, lang = 'es') {
  if (courseId) {
    const sims = courseSims(courseId, lang);
    const course = COURSES.find((c) => c.id === courseId);
    if (!sims.length || !course) return null;
    const c = courseLabel(courseId, lang);
    const practicals = sims.some(isPractical);
    const Q = lang === 'en' ? ['“', '”'] : ['«', '»'];
    const topics = list(TOPICS.filter((t) => t.sims.some((id) => sims.some((s) => s.id === id))).map((t) => `${Q[0]}${topicLabel(t, lang)}${Q[1]}`), lang);
    const h1 = {
      es: `${practicals ? 'Simulaciones y prácticas' : 'Simulaciones'} de Física y Química para ${c}`,
      en: `Physics and Chemistry ${practicals ? 'simulations and practicals' : 'simulations'} for ${c}`,
      ca: `${practicals ? 'Simulacions i pràctiques' : 'Simulacions'} de Física i Química per a ${c}`,
      eu: `Fisika eta Kimikako ${practicals ? 'simulazioak eta praktikak' : 'simulazioak'}: ${c}`,
      gl: `${practicals ? 'Simulacións e prácticas' : 'Simulacións'} de Física e Química para ${c}`,
    }[lang];
    const lead = {
      es: `${countPhrase(sims, lang)} para ${c}, sobre ${topics}.`,
      en: `${countPhrase(sims, lang)} for ${c}, covering ${topics}.`,
      ca: `${countPhrase(sims, lang)} per a ${c}, sobre ${topics}.`,
      eu: `${countPhrase(sims, lang)} ${c} mailarako, gai hauei buruz: ${topics}.`,
      gl: `${countPhrase(sims, lang)} para ${c}, sobre ${topics}.`,
    }[lang];
    const note = lang === 'en' ? `Year groups are matched by age to the Spanish curriculum (${course.enTitle}).` : CURRICULUM[lang];
    return { h1, label: c, text: COURSE_TEXT[courseId]?.[lang] ?? '', intro: `${fixDots(lead)} ${TAIL[lang]}`, note, sims };
  }
  if (topicId) {
    const sims = topicSims(topicId, lang);
    const topic = TOPICS.find((t) => t.id === topicId);
    if (!sims.length || !topic) return null;
    const label = topicLabel(topic, lang);
    const courses = list(COURSES.filter((c) => sims.some((s) => s.courses.includes(c.id))).map((c) => courseLabel(c.id, lang)), lang);
    const h1 = {
      es: `${label}: ${sims.some(isPractical) ? 'simulaciones y prácticas' : 'simulaciones'} de Física y Química`,
      en: `${label}: Physics and Chemistry ${sims.some(isPractical) ? 'simulations and practicals' : 'simulations'}`,
      ca: `${label}: ${sims.some(isPractical) ? 'simulacions i pràctiques' : 'simulacions'} de Física i Química`,
      eu: `${label}: Fisika eta Kimikako ${sims.some(isPractical) ? 'simulazioak eta praktikak' : 'simulazioak'}`,
      gl: `${label}: ${sims.some(isPractical) ? 'simulacións e prácticas' : 'simulacións'} de Física e Química`,
    }[lang];
    const lead = {
      es: `${countPhrase(sims, lang)} sobre ${lower(label)}, para ${courses}.`,
      en: `${countPhrase(sims, lang)} on ${lower(label)}, for ${courses}.`,
      ca: `${countPhrase(sims, lang)} sobre ${lower(label)}, per a ${courses}.`,
      eu: `${label}: ${countPhrase(sims, lang)}, maila hauetarako: ${courses}.`,
      gl: `${countPhrase(sims, lang)} sobre ${lower(label)}, para ${courses}.`,
    }[lang];
    return { h1, label, text: TOPIC_TEXT[topicId]?.[lang] ?? '', intro: `${fixDots(lead)} ${TAIL[lang]}`, note: null, sims };
  }
  return null;
}
