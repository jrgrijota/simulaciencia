// Única fuente de verdad del catálogo.
// La web NO descarga ni copia los archivos de las simulaciones: cada `url`
// apunta directamente a su despliegue independiente en GitHub Pages.
//
// `en`, `ca`, `eu`: título y descripción en inglés, catalán y euskera, para /en/,
//            /ca/ y /eu/ (la simulación se abre con ?lang=en, ?lang=ca o ?lang=eu).
// `courses`: cursos en los que la guía docente la propone como uso principal o
//            aplicación (no los de uso o repaso puntual). Alimentan el filtro.
// `responsive`: true  -> la simulación adapta su propio layout (móvil/tablet);
//                        el iframe ocupa el 100% y ella se reorganiza sola.
//               false -> layout rígido (~1270px); el Modo Laboratorio la escala
//                        proporcionalmente para encuadrarla sin recortes.
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
        'Buoyancy and upthrust: with free values or with real materials and liquids, see when an object floats, sinks or stays in equilibrium, and the forces acting on it.',
    },
    ca: {
      title: "Principi d'Arquimedes",
      description:
        "Flotabilitat i empenyiment: amb valors lliures o amb materials i líquids reals, observa quan un cos sura, s'enfonsa o queda en equilibri, i les forces que hi actuen.",
    },
    eu: {
      title: 'Arkimedesen printzipioa',
      description:
        'Flotagarritasuna eta bultzada: balio libreekin edo benetako material eta likidoekin, ikusi noiz dagoen gorputz bat flotatzen, noiz hondoratzen den edo noiz geratzen den orekan, eta zer indarrek eragiten dioten.',
    },
  },
  {
    id: 'sim-densidad',
    title: 'Densidad',
    description:
      'Masa, volumen y densidad: compara materiales como el corcho, el agua o el plomo y observa con la lupa cómo se reparten sus partículas.',
    tags: ['Física', 'Química', 'ESO'],
    url: 'https://jrgrijota.github.io/simulacion-densidad/',
    responsive: true,
    courses: ['2ESO', '3ESO', '4ESO'],
    en: {
      title: 'Density',
      description:
        'Mass, volume and density: compare materials such as cork, water or lead, and use the magnifier to see how their particles are arranged.',
    },
    ca: {
      title: 'Densitat',
      description:
        "Massa, volum i densitat: compara materials com el suro, l'aigua o el plom i observa amb la lupa com es distribueixen les seves partícules.",
    },
    eu: {
      title: 'Dentsitatea',
      description:
        'Masa, bolumena eta dentsitatea: alderatu kortxoa, ura edo beruna bezalako materialak, eta ikusi luparekin nola banatzen diren haien partikulak.',
    },
  },
  {
    id: 'sim-espectros',
    title: 'Espectros Atómicos',
    description:
      'Visualización e interacción con los espectros de emisión y absorción de diferentes elementos químicos y sus transiciones electrónicas.',
    tags: ['Química', 'Física Cuántica', 'ESO', 'Bachillerato'],
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
        'How temperature, concentration and a catalyst affect the rate of a reaction, with a collision mode that shows why particles need enough energy and the right orientation.',
    },
    ca: {
      title: 'Velocitat de Reacció',
      description:
        "Com afecten la temperatura, la concentració i el catalitzador a la rapidesa d'una reacció, amb un mode xoc que mostra per què calen energia i orientació.",
    },
    eu: {
      title: 'Erreakzio-abiadura',
      description:
        'Nola eragiten dioten tenperaturak, kontzentrazioak eta katalizatzaileak erreakzio baten abiadurari, eta talka-modu batek erakusten du zergatik behar diren energia eta orientazioa.',
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
        'Enllaç iònic, covalent i metàl·lic: com els àtoms guanyen, comparteixen o deslocalitzen electrons, amb xarxes iòniques, cristalls covalents i metalls mal·leables.',
    },
    eu: {
      title: 'Lotura kimikoak',
      description:
        'Lotura ionikoa, kobalentea eta metalikoa: nola irabazten, partekatzen edo deslokalizatzen dituzten atomoek elektroiak, sare ionikoekin, kristal kobalenteekin eta metal xaflagarriekin.',
    },
  },
  {
    id: 'sim-orbitas',
    title: 'Órbitas y Gravitación',
    description:
      'Mecánica orbital con la bala de cañón de Newton, el Sistema Solar, las leyes de Kepler y las estrellas binarias en un mismo laboratorio.',
    tags: ['Física', 'ESO', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-orbitas/',
    responsive: true,
    courses: ['3ESO', '4ESO', '1BACH', '2BACH'],
    en: {
      title: 'Orbits and Gravitation',
      description:
        "Orbital mechanics with Newton's cannonball, the Solar System, Kepler's laws and binary stars in a single lab.",
    },
    ca: {
      title: 'Òrbites i Gravitació',
      description:
        'Mecànica orbital amb la bala de canó de Newton, el Sistema Solar, les lleis de Kepler i les estrelles binàries en un mateix laboratori.',
    },
    eu: {
      title: 'Orbitak eta grabitazioa',
      description:
        'Mekanika orbitala Newtonen kanoi-balarekin, Eguzki-sistemarekin, Keplerren legeekin eta izar bitarrekin, laborategi bakar batean.',
    },
  },
  {
    id: 'sim-cambios-estado',
    title: 'Cambios de Estado',
    description:
      'Calienta y enfría una sustancia y observa a la vez el recipiente, sus partículas y la curva de calentamiento; explora con el diagrama de fases por qué el agua hierve a unos 72 °C en el Everest.',
    tags: ['Física', 'Química', 'ESO'],
    url: 'https://jrgrijota.github.io/simulacion-cambios-estado/',
    responsive: true,
    courses: ['2ESO', '3ESO', '4ESO'],
    en: {
      title: 'Changes of State',
      description:
        'Heat and cool a substance and watch the container, its particles and the heating curve at the same time; use the phase diagram to see why water boils at about 72 °C on Everest.',
    },
    ca: {
      title: "Canvis d'Estat",
      description:
        "Escalfa i refreda una substància i observa alhora el recipient, les seves partícules i la corba d'escalfament; explora amb el diagrama de fases per què l'aigua bull a uns 72 °C a l'Everest.",
    },
    eu: {
      title: 'Egoera-aldaketak',
      description:
        'Berotu eta hoztu substantzia bat, eta ikusi aldi berean ontzia, haren partikulak eta berotze-kurba; aztertu fase-diagramarekin zergatik irakiten duen urak 72 °C ingurutan Everesten.',
    },
  },
];

// Cursos, en orden, para el filtro y las tarjetas.
export const COURSES = [
  { id: '2ESO', label: '2.º ESO', en: 'ESO Year 2', ca: '2n ESO', eu: 'DBH 2.' },
  { id: '3ESO', label: '3.º ESO', en: 'ESO Year 3', ca: '3r ESO', eu: 'DBH 3.' },
  { id: '4ESO', label: '4.º ESO', en: 'ESO Year 4', ca: '4t ESO', eu: 'DBH 4.' },
  { id: '1BACH', label: '1.º Bach.', en: 'Bach. Year 1', ca: '1r Batx.', eu: 'Batx. 1.' },
  { id: '2BACH', label: '2.º Bach.', en: 'Bach. Year 2', ca: '2n Batx.', eu: 'Batx. 2.' },
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
  en: { Física: 'Physics', Química: 'Chemistry', 'Física Cuántica': 'Quantum Physics' },
  ca: { Física: 'Física', Química: 'Química', 'Física Cuántica': 'Física Quàntica' },
  eu: { Física: 'Fisika', Química: 'Kimika', 'Física Cuántica': 'Fisika kuantikoa' },
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
