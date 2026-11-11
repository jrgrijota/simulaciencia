// Única fuente de verdad del catálogo.
// La web NO descarga ni copia los archivos de las simulaciones: cada `url`
// apunta directamente a su despliegue independiente en GitHub Pages.
//
// `en`, `ca`, `eu`, `gl`: título y descripción en inglés, catalán, euskera y gallego,
//            para /en/, /ca/, /eu/ y /gl/ (la simulación se abre con ?lang=en, ca, eu o gl).
// `courses`: cursos en los que la guía docente la propone como uso principal o
//            aplicación (no los de uso o repaso puntual). Alimentan el filtro.
// `responsive`: true  -> la simulación adapta su propio layout (móvil/tablet);
//                        el iframe ocupa el 100% y ella se reorganiza sola.
//               false -> layout rígido (~1270px); el Modo Laboratorio la escala
//                        proporcionalmente para encuadrarla sin recortes.
// `kind`:    'practica' para las prácticas de laboratorio simuladas (filtro «Tipo»,
//            su guion del alumnado en guiones/<nombre>.md); sin él, simulación.
// `langs`:   idiomas en los que está; sin él, en todos. Fuera de ellos no aparece
//            en el catálogo ni tiene página.
export const simulations = [
  {
    id: 'sim-arquimedes',
    title: 'Principio de Arquímedes',
    description:
      'Flotabilidad y empuje: con valores libres o con materiales y líquidos reales, observa cuándo un cuerpo flota, se hunde o queda en equilibrio, y sus fuerzas.',
    tags: ['Física', 'ESO', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-arquimedes/',
    responsive: true,
    courses: ['3ESO', '4ESO'],
    en: {
      title: "Archimedes' Principle",
      description:
        'Buoyancy and upthrust: with free values or real materials and liquids, see when an object floats, sinks or stays in equilibrium, and the forces on it.',
    },
    ca: {
      title: "Principi d'Arquimedes",
      description:
        "Flotabilitat i empenyiment: amb valors lliures o materials i líquids reals, observa quan un cos sura, s'enfonsa o queda en equilibri, i les seves forces.",
    },
    eu: {
      title: 'Arkimedesen printzipioa',
      description:
        'Flotagarritasuna eta bultzada: balio libreekin edo benetako material eta likidoekin, ikusi noiz flotatzen, hondoratzen edo orekan geratzen den gorputz bat.',
    },
    gl: {
      title: 'Principio de Arquímedes',
      description:
        'Flotabilidade e empuxe: con valores libres ou con materiais e líquidos reais, observa cando un corpo flota, se afunde ou queda en equilibrio, e as súas forzas.',
    },
  },
  {
    id: 'sim-densidad',
    title: 'Densidad',
    description:
      'Masa, volumen y densidad: compara materiales como el corcho, el agua o el plomo, mira cuánta masa tiene cada litro y compruébalo con una balanza de brazos.',
    tags: ['Física', 'Química', 'ESO'],
    url: 'https://jrgrijota.github.io/simulacion-densidad/',
    responsive: true,
    courses: ['2ESO', '3ESO', '4ESO'],
    en: {
      title: 'Density',
      description:
        'Mass, volume and density: compare materials such as cork, water or lead, see how much mass each litre has and check it on a two-pan balance.',
    },
    ca: {
      title: 'Densitat',
      description:
        "Massa, volum i densitat: compara materials com el suro, l'aigua o el plom, mira quanta massa té cada litre i comprova-ho amb una balança de braços.",
    },
    eu: {
      title: 'Dentsitatea',
      description:
        'Masa, bolumena eta dentsitatea: alderatu kortxoa, ura edo beruna, ikusi litro bakoitzak zenbat masa duen eta egiaztatu beso-balantza batekin.',
    },
    gl: {
      title: 'Densidade',
      description:
        'Masa, volume e densidade: compara materiais como a cortiza, a auga ou o chumbo, mira canta masa ten cada litro e compróbao cunha balanza de brazos.',
    },
  },
  {
    id: 'sim-espectros',
    title: 'Espectros Atómicos',
    description:
      'Visualización e interacción con los espectros de emisión y absorción de diferentes elementos químicos y sus transiciones electrónicas.',
    tags: ['Química', 'ESO', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-espectros/',
    responsive: true,
    courses: ['4ESO', '1BACH', '2BACH'],
    en: {
      title: 'Atomic Spectra',
      description:
        'Explore the emission and absorption spectra of different chemical elements and the electron transitions behind them.',
    },
    ca: {
      title: 'Espectres Atòmics',
      description:
        "Visualització i interacció amb els espectres d'emissió i d'absorció de diferents elements químics i les seves transicions electròniques.",
    },
    eu: {
      title: 'Espektro atomikoak',
      description:
        'Elementu kimiko desberdinen igorpen- eta xurgapen-espektroak eta haien trantsizio elektronikoak ikusi eta haiekin jardun.',
    },
    gl: {
      title: 'Espectros atómicos',
      description:
        'Visualización e interacción cos espectros de emisión e absorción de diferentes elementos químicos e as súas transicións electrónicas.',
    },
  },
  {
    id: 'sim-gases',
    title: 'Cinética de Gases',
    description:
      'Modelo de partículas que relaciona presión, temperatura y volumen según la teoría cinético-molecular: comprueba las leyes de Boyle y de Gay-Lussac.',
    tags: ['Física', 'ESO', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-gases/',
    responsive: true,
    courses: ['2ESO', '3ESO', '4ESO'],
    en: {
      title: 'Kinetic Theory of Gases',
      description:
        "A particle model linking pressure, temperature and volume through kinetic molecular theory: test Boyle's law and Gay-Lussac's law.",
    },
    ca: {
      title: 'Cinètica dels Gasos',
      description:
        'Model de partícules que relaciona pressió, temperatura i volum segons la teoria cineticomolecular: comprova les lleis de Boyle i de Gay-Lussac.',
    },
    eu: {
      title: 'Gasen zinetika',
      description:
        'Presioa, tenperatura eta bolumena teoria zinetiko-molekularraren arabera lotzen dituen partikula-eredua: egiaztatu Boyleren eta Gay-Lussacen legeak.',
    },
    gl: {
      title: 'Cinética dos gases',
      description:
        'Modelo de partículas que relaciona presión, temperatura e volume segundo a teoría cinético-molecular: comproba as leis de Boyle e de Gay-Lussac.',
    },
  },
  {
    id: 'sim-modelos',
    title: 'Modelos Atómicos',
    description:
      'Experimento de dispersión de Rutherford frente al modelo de Thomson: cómo una observación obligó a reescribir el modelo del átomo.',
    tags: ['Física', 'Química', 'ESO', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-modelos/',
    responsive: true,
    courses: ['2ESO', '3ESO', '4ESO', '2BACH'],
    en: {
      title: 'Atomic Models',
      description:
        "Rutherford's scattering experiment versus Thomson's model: how one observation forced scientists to rewrite the model of the atom.",
    },
    ca: {
      title: 'Models Atòmics',
      description:
        "Experiment de dispersió de Rutherford davant del model de Thomson: com una observació va obligar a reescriure el model de l'àtom.",
    },
    eu: {
      title: 'Eredu atomikoak',
      description:
        'Rutherforden sakabanatze-esperimentua Thomsonen ereduaren aurrean: behaketa batek nola behartu zuen atomoaren eredua berridaztera.',
    },
    gl: {
      title: 'Modelos atómicos',
      description:
        'Experimento de dispersión de Rutherford fronte ao modelo de Thomson: como unha observación obrigou a reescribir o modelo do átomo.',
    },
  },
  {
    id: 'sim-velocidad-reaccion',
    title: 'Velocidad de Reacción',
    description:
      'Cómo afectan temperatura, concentración y catalizador a la rapidez de una reacción, con un modo choque que muestra por qué hacen falta energía y orientación.',
    tags: ['Química', 'ESO', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-velocidad-reaccion/',
    responsive: true,
    courses: ['3ESO', '4ESO', '2BACH'],
    en: {
      title: 'Reaction Rate',
      description:
        'How temperature, concentration and catalysts change reaction rate, with a collision mode showing why particles need enough energy and the right orientation.',
    },
    ca: {
      title: 'Velocitat de Reacció',
      description:
        "Com afecten la temperatura, la concentració i el catalitzador a la rapidesa d'una reacció, amb un mode xoc que mostra per què calen energia i orientació.",
    },
    eu: {
      title: 'Erreakzio-abiadura',
      description:
        'Tenperaturak, kontzentrazioak eta katalizatzaileak erreakzio-abiaduran duten eragina, eta talka-modua: zergatik behar diren energia eta orientazio egokia.',
    },
    gl: {
      title: 'Velocidade de reacción',
      description:
        'Como afectan a temperatura, a concentración e o catalizador á rapidez dunha reacción, cun modo choque que amosa por que fan falta enerxía e orientación.',
    },
  },
  {
    id: 'sim-atomo-real',
    title: 'El Átomo a Escala',
    description:
      'Viaje de zoom ×10 desde el átomo completo hasta su núcleo: hace tangible lo pequeño que es el núcleo frente al tamaño real del átomo.',
    tags: ['Física', 'Química', 'ESO', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-atomo-real/',
    responsive: true,
    courses: ['2ESO', '3ESO', '4ESO'],
    en: {
      title: 'The Atom to Scale',
      description:
        'A ×10 zoom journey from the whole atom down to its nucleus: makes it tangible how tiny the nucleus is compared with the real size of the atom.',
    },
    ca: {
      title: "L'Àtom a Escala",
      description:
        "Viatge de zoom ×10 des de l'àtom sencer fins al seu nucli: fa tangible com n'és de petit el nucli davant de la mida real de l'àtom.",
    },
    eu: {
      title: 'Atomoa eskalan',
      description:
        '×10eko zoom-bidaia atomo osotik bere nukleoraino: ukigarri bihurtzen du nukleoa zein txikia den atomoaren benetako tamainaren aldean.',
    },
    gl: {
      title: 'O átomo a escala',
      description:
        'Viaxe de zoom ×10 desde o átomo completo ata o seu núcleo: fai tanxible o pequeno que é o núcleo fronte ao tamaño real do átomo.',
    },
  },
  {
    id: 'sim-enlaces-quimicos',
    title: 'Enlaces Químicos',
    description:
      'Enlace iónico, covalente y metálico: cómo los átomos ganan, comparten o deslocalizan electrones, con redes iónicas, cristales covalentes y metales maleables.',
    tags: ['Química', 'ESO', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-enlaces-quimicos/',
    responsive: true,
    courses: ['3ESO', '4ESO', '1BACH'],
    en: {
      title: 'Chemical Bonding',
      description:
        'Ionic, covalent and metallic bonding: how atoms gain, share or delocalise electrons, with ionic lattices, covalent crystals and malleable metals.',
    },
    ca: {
      title: 'Enllaços Químics',
      description:
        'Enllaç iònic, covalent i metàl·lic: com els àtoms guanyen, comparteixen o deslocalitzen electrons, amb xarxes iòniques, cristalls covalents i metalls.',
    },
    eu: {
      title: 'Lotura kimikoak',
      description:
        'Lotura ionikoa, kobalentea eta metalikoa: atomoek elektroiak nola irabazten, partekatzen edo deslokalizatzen dituzten, sareekin, kristalekin eta metalekin.',
    },
    gl: {
      title: 'Enlaces químicos',
      description:
        'Enlace iónico, covalente e metálico: como os átomos gañan, comparten ou deslocalizan electróns, con redes iónicas, cristais covalentes e metais maleables.',
    },
  },
  {
    id: 'sim-orbitas',
    title: 'Órbitas y Gravitación',
    description:
      'Mecánica orbital con la bala de cañón de Newton, el Sistema Solar, las leyes de Kepler y las estrellas binarias en una misma simulación.',
    tags: ['Física', 'ESO', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-orbitas/',
    responsive: true,
    courses: ['3ESO', '4ESO', '1BACH', '2BACH'],
    en: {
      title: 'Orbits and Gravitation',
      description:
        "Orbital mechanics with Newton's cannonball, the Solar System, Kepler's laws and binary stars in a single simulation.",
    },
    ca: {
      title: 'Òrbites i Gravitació',
      description:
        'Mecànica orbital amb la bala de canó de Newton, el Sistema Solar, les lleis de Kepler i les estrelles binàries en una mateixa simulació.',
    },
    eu: {
      title: 'Orbitak eta grabitazioa',
      description:
        'Mekanika orbitala Newtonen kanoi-balarekin, Eguzki-sistemarekin, Keplerren legeekin eta izar bitarrekin, simulazio bakar batean.',
    },
    gl: {
      title: 'Órbitas e gravitación',
      description:
        'Mecánica orbital coa bala de canón de Newton, o Sistema Solar, as leis de Kepler e as estrelas binarias nunha mesma simulación.',
    },
  },
  {
    id: 'sim-cambios-estado',
    title: 'Cambios de Estado',
    description:
      'Calienta y enfría una sustancia viendo sus partículas y su curva de calentamiento, y mira con el diagrama de fases por qué el agua hierve a unos 72 °C en el Everest.',
    tags: ['Física', 'Química', 'ESO'],
    url: 'https://jrgrijota.github.io/simulacion-cambios-estado/',
    responsive: true,
    courses: ['2ESO', '3ESO', '4ESO'],
    en: {
      title: 'Changes of State',
      description:
        'Heat and cool a substance while watching its particles and heating curve, and use the phase diagram to see why water boils at about 72 °C on Everest.',
    },
    ca: {
      title: "Canvis d'Estat",
      description:
        "Escalfa i refreda una substància veient-ne les partícules i la corba d'escalfament, i mira amb el diagrama de fases per què l'aigua bull a uns 72 °C a l'Everest.",
    },
    eu: {
      title: 'Egoera-aldaketak',
      description:
        'Berotu eta hoztu substantzia bat haren partikulak eta berotze-kurba ikusiz, eta aztertu fase-diagramarekin zergatik irakiten duen urak 72 °C-an Everesten.',
    },
    gl: {
      title: 'Cambios de estado',
      description:
        'Quenta e arrefría unha substancia vendo as súas partículas e a curva de quecemento, e descobre co diagrama de fases por que a auga ferve a uns 72 °C no Everest.',
    },
  },
  {
    id: 'sim-ajuste-reaccion',
    title: 'Ajuste de Reacciones',
    description:
      'Ajusta ecuaciones viendo cómo se reordenan los átomos, comprueba en una balanza las leyes de Lavoisier y Proust y halla el reactivo limitante y el rendimiento.',
    tags: ['Química', 'ESO', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-ajuste-reaccion/',
    responsive: true,
    courses: ['3ESO', '4ESO', '1BACH'],
    en: {
      title: 'Balancing Equations',
      description:
        "Balance equations by watching the atoms rearrange, check Lavoisier's and Proust's laws on a balance, and discover the limiting reactant and the yield.",
    },
    ca: {
      title: 'Ajust de Reaccions',
      description:
        "Ajusta equacions veient com es reordenen els àtoms, comprova amb una balança les lleis de Lavoisier i Proust, i descobreix el reactiu limitant i el rendiment.",
    },
    eu: {
      title: 'Erreakzioen doikuntza',
      description:
        'Doitu ekuazioak atomoen berrantolaketa ikusiz, egiaztatu balantzan Lavoisierren eta Prousten legeak, eta aurkitu erreaktibo mugatzailea eta errendimendua.',
    },
    gl: {
      title: 'Axuste de Reaccións',
      description:
        'Axusta ecuacións vendo como se reordenan os átomos, comproba cunha balanza as leis de Lavoisier e Proust, e descobre o reactivo limitante e o rendemento.',
    },
  },
  {
    id: 'sim-energia-mecanica',
    title: 'Energía Mecánica',
    description:
      'Montaña rusa y péndulo: observa cómo la energía potencial se convierte en cinética y, con rozamiento, cómo la energía mecánica se degrada en calor.',
    tags: ['Física', 'ESO', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-energia-mecanica/',
    responsive: true,
    courses: ['3ESO', '4ESO', '1BACH'],
    en: {
      title: 'Mechanical Energy',
      description:
        'Roller coaster and pendulum: watch potential energy turn into kinetic energy and, with friction, mechanical energy being degraded into heat.',
    },
    ca: {
      title: 'Energia Mecànica',
      description:
        "Muntanya russa i pèndol: observa com l'energia potencial es converteix en cinètica i, amb fregament, com l'energia mecànica es degrada en calor.",
    },
    eu: {
      title: 'Energia mekanikoa',
      description:
        'Mendi errusiarra eta pendulua: ikusi nola bihurtzen den energia potentziala zinetiko eta, marruskadurarekin, nola degradatzen den energia mekanikoa beroan.',
    },
    gl: {
      title: 'Enerxía mecánica',
      description:
        'Montaña rusa e péndulo: observa como a enerxía potencial se converte en cinética e, con rozamento, como a enerxía mecánica se degrada en calor.',
    },
  },
  {
    id: 'sim-circuitos',
    title: 'Circuitos Eléctricos',
    description:
      'Pila, interruptor y bombillas o resistencias: mide tensión e intensidad, comprueba la ley de Ohm y compara los receptores en serie y en paralelo.',
    tags: ['Física', 'ESO'],
    url: 'https://jrgrijota.github.io/simulacion-circuitos/',
    responsive: true,
    courses: ['2ESO', '3ESO'],
    en: {
      title: 'Electric Circuits',
      description:
        "Battery, switch and bulbs or resistors: measure voltage and current, check Ohm's law and compare components in series and in parallel.",
    },
    ca: {
      title: 'Circuits Elèctrics',
      description:
        "Pila, interruptor i bombetes o resistències: mesura tensió i intensitat, comprova la llei d'Ohm i compara els receptors en sèrie i en paral·lel.",
    },
    eu: {
      title: 'Zirkuitu elektrikoak',
      description:
        'Pila, etengailua eta bonbillak edo erresistentziak: neurtu tentsioa eta intentsitatea, egiaztatu Ohm-en legea eta konparatu hartzaileak seriean eta paraleloan.',
    },
    gl: {
      title: 'Circuítos eléctricos',
      description:
        'Pila, interruptor e lámpadas ou resistencias: mide tensión e intensidade, comproba a lei de Ohm e compara os receptores en serie e en paralelo.',
    },
  },
  {
    id: 'sim-ondas',
    title: 'Ondas',
    description:
      'Cuerda y muelle: distingue ondas transversales y longitudinales, mide amplitud, longitud de onda y período, y comprueba que transporta energía, no materia.',
    tags: ['Física', 'ESO', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-ondas/',
    responsive: true,
    courses: ['4ESO', '2BACH'],
    en: {
      title: 'Waves',
      description:
        'String and spring: tell transverse from longitudinal waves, measure amplitude, wavelength and period, and check that a wave carries energy, not matter.',
    },
    ca: {
      title: 'Ones',
      description:
        "Corda i molla: distingeix ones transversals i longitudinals, mesura amplitud, longitud d'ona i període, i comprova que l'ona transporta energia, no matèria.",
    },
    eu: {
      title: 'Uhinak',
      description:
        'Soka eta malgukia: bereizi zeharkako eta luzetarako uhinak, neurtu anplitudea, uhin-luzera eta periodoa, eta egiaztatu uhinak energia daramala, ez materia.',
    },
    gl: {
      title: 'Ondas',
      description:
        'Corda e resorte: distingue ondas transversais e lonxitudinais, mide amplitude, lonxitude de onda e período, e comproba que a onda leva enerxía, non materia.',
    },
  },
  {
    id: 'sim-practica-densidad',
    kind: 'practica',
    langs: ['es'],
    title: 'Densidad de un sólido',
    description:
      'Práctica de laboratorio: pesa una muestra desconocida, mide su volumen en una probeta, calcula su densidad e identifica el material. Nivel guiado y nivel libre.',
    tags: ['Física', 'Química', 'ESO'],
    url: 'https://jrgrijota.github.io/simulacion-practica-densidad/',
    responsive: true,
    courses: ['2ESO', '3ESO'],
  },
];

// Bloques temáticos: los botones del filtro «Tema» del catálogo
// (?tema=<bloque> en la dirección). Una simulación puede estar en más de un bloque. Al añadir una
// simulación, añádela también a su bloque.
export const TOPICS = [
  {
    id: 'fuerzas',
    label: { es: 'Fuerzas y gravitación', en: 'Forces and gravity', ca: 'Forces i gravitació', eu: 'Indarrak eta grabitazioa', gl: 'Forzas e gravitación' },
    sims: ['sim-arquimedes', 'sim-orbitas'],
  },
  {
    id: 'energia',
    label: { es: 'Energía y electricidad', en: 'Energy and electricity', ca: 'Energia i electricitat', eu: 'Energia eta elektrizitatea', gl: 'Enerxía e electricidade' },
    sims: ['sim-energia-mecanica', 'sim-circuitos'],
  },
  {
    id: 'ondas',
    label: { es: 'Ondas y luz', en: 'Waves and light', ca: 'Ones i llum', eu: 'Uhinak eta argia', gl: 'Ondas e luz' },
    sims: ['sim-ondas', 'sim-espectros'],
  },
  {
    id: 'materia',
    label: { es: 'La materia y sus estados', en: 'Matter and its states', ca: 'La matèria i els seus estats', eu: 'Materia eta haren egoerak', gl: 'A materia e os seus estados' },
    sims: ['sim-densidad', 'sim-practica-densidad', 'sim-cambios-estado', 'sim-gases'],
  },
  {
    id: 'atomo',
    label: { es: 'El átomo', en: 'The atom', ca: "L'àtom", eu: 'Atomoa', gl: 'O átomo' },
    sims: ['sim-modelos', 'sim-atomo-real', 'sim-espectros'],
  },
  {
    id: 'reacciones',
    label: { es: 'Enlaces y reacciones', en: 'Bonds and reactions', ca: 'Enllaços i reaccions', eu: 'Loturak eta erreakzioak', gl: 'Enlaces e reaccións' },
    sims: ['sim-enlaces-quimicos', 'sim-ajuste-reaccion', 'sim-velocidad-reaccion'],
  },
];

// Cursos, en orden, para el filtro y las tarjetas. En inglés se muestra el
// equivalente por edad en Reino Unido (Year) y EE. UU. (grade); `enTitle`
// recuerda el curso español en el tooltip.
export const COURSES = [
  { id: '2ESO', label: '2.º ESO', en: 'Year 9 (8th grade)', enTitle: 'ESO 2 in Spain · ages 13–14', ca: '2n ESO', eu: 'DBH 2.', gl: '2.º ESO' },
  { id: '3ESO', label: '3.º ESO', en: 'Year 10 (9th grade)', enTitle: 'ESO 3 in Spain · ages 14–15', ca: '3r ESO', eu: 'DBH 3.', gl: '3.º ESO' },
  { id: '4ESO', label: '4.º ESO', en: 'Year 11 (10th grade)', enTitle: 'ESO 4 in Spain · ages 15–16', ca: '4t ESO', eu: 'DBH 4.', gl: '4.º ESO' },
  { id: '1BACH', label: '1.º Bach.', en: 'Year 12 (11th grade)', enTitle: 'Bachillerato 1 in Spain · ages 16–17', ca: '1r Batx.', eu: 'Batx. 1.', gl: '1.º Bach.' },
  { id: '2BACH', label: '2.º Bach.', en: 'Year 13 (12th grade)', enTitle: 'Bachillerato 2 in Spain · ages 17–18', ca: '2n Batx.', eu: 'Batx. 2.', gl: '2.º Bach.' },
];

export function courseLabel(id, lang = 'es') {
  const c = COURSES.find((c) => c.id === id);
  return (lang === 'es' ? c?.label : c?.[lang]) || id;
}

// Título y descripción en el idioma de la página.
export function simTitle(sim, lang = 'es') {
  return sim[lang]?.title || sim.title;
}
export function simDescription(sim, lang = 'es') {
  return sim[lang]?.description || sim.description;
}

// Dirección de la simulación para el iframe y el código para insertar.
export function simUrl(sim, lang = 'es') {
  return lang === 'es' ? sim.url : `${sim.url}?lang=${lang}`;
}

// Las etiquetas se guardan en español (son también el valor de los filtros).
const TAGS = {
  en: { Física: 'Physics', Química: 'Chemistry' },
  ca: { Física: 'Física', Química: 'Química' },
  eu: { Física: 'Fisika', Química: 'Kimika' },
  gl: { Física: 'Física', Química: 'Química' },
};
export function tagLabel(tag, lang = 'es') {
  return TAGS[lang]?.[tag] || tag;
}

// Etapas: ya las cubre el filtro por curso, así que no se repiten como etiqueta.
const STAGE_TAGS = ['ESO', 'Bachillerato'];

// Lista ordenada y única de etiquetas de materia presentes en el catálogo (para los filtros).
export const allTags = [...new Set(simulations.flatMap((s) => s.tags))].filter((t) => !STAGE_TAGS.includes(t));

export function subjectTags(sim) {
  return sim.tags.filter((t) => !STAGE_TAGS.includes(t));
}

export function getSimulationById(id) {
  return simulations.find((s) => s.id === id) || null;
}

// Tipos de recurso del filtro «Tipo»: simulaciones y prácticas de laboratorio.
export const KINDS = [
  { id: 'simulacion', label: { es: 'Simulaciones', en: 'Simulations', ca: 'Simulacions', eu: 'Simulazioak', gl: 'Simulacións' } },
  { id: 'practica', label: { es: 'Prácticas de laboratorio', en: 'Lab practicals', ca: 'Pràctiques de laboratori', eu: 'Laborategiko praktikak', gl: 'Prácticas de laboratorio' } },
];

export const simKind = (sim) => sim.kind || 'simulacion';
export const isPractical = (sim) => simKind(sim) === 'practica';

// ¿Está en este idioma? Las prácticas, por ahora, solo en español.
export const availableIn = (sim, lang = 'es') => !sim.langs || sim.langs.includes(lang);

// Catálogo de un idioma.
export const simulationsIn = (lang = 'es') => simulations.filter((s) => availableIn(s, lang));
