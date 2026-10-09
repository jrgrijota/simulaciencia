// Única fuente de verdad del catálogo.
// La web NO descarga ni copia los archivos de las simulaciones: cada `url`
// apunta directamente a su despliegue independiente en GitHub Pages.
//
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
  },
];

// Cursos, en orden, para el filtro y las tarjetas.
export const COURSES = [
  { id: '2ESO', label: '2.º ESO' },
  { id: '3ESO', label: '3.º ESO' },
  { id: '4ESO', label: '4.º ESO' },
  { id: '1BACH', label: '1.º Bach.' },
  { id: '2BACH', label: '2.º Bach.' },
];

export function courseLabel(id) {
  return COURSES.find((c) => c.id === id)?.label || id;
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
