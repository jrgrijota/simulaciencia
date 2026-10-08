// Única fuente de verdad del catálogo.
// La web NO descarga ni copia los archivos de las simulaciones: cada `url`
// apunta directamente a su despliegue independiente en GitHub Pages.
//
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
  },
  {
    id: 'sim-densidad',
    title: 'Densidad',
    description:
      'Masa, volumen y densidad: compara materiales como el corcho, el agua o el plomo y observa con la lupa cómo se reparten sus partículas.',
    tags: ['Física', 'Química', 'ESO'],
    url: 'https://jrgrijota.github.io/simulacion-densidad/',
    responsive: true,
  },
  {
    id: 'sim-espectros',
    title: 'Espectros Atómicos',
    description:
      'Visualización e interacción con los espectros de emisión y absorción de diferentes elementos químicos y sus transiciones electrónicas.',
    tags: ['Química', 'Física Cuántica', 'ESO', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-espectros/',
    responsive: true,
  },
  {
    id: 'sim-gases',
    title: 'Cinética de Gases',
    description:
      'Modelo de partículas que relaciona presión, temperatura y volumen según la teoría cinético-molecular: comprueba las leyes de Boyle y de Gay-Lussac.',
    tags: ['Física', 'ESO', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-gases/',
    responsive: true,
  },
  {
    id: 'sim-modelos',
    title: 'Modelos Atómicos',
    description:
      'Experimento de dispersión de Rutherford frente al modelo de Thomson: cómo una observación obligó a reescribir el modelo del átomo.',
    tags: ['Física', 'Química', 'ESO', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-modelos/',
    responsive: true,
  },
  {
    id: 'sim-velocidad-reaccion',
    title: 'Velocidad de Reacción',
    description:
      'Cómo afectan temperatura, concentración y catalizador a la rapidez de una reacción, con un modo choque que muestra por qué hacen falta energía y orientación.',
    tags: ['Química', 'ESO', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-velocidad-reaccion/',
    responsive: true,
  },
  {
    id: 'sim-atomo-real',
    title: 'El Átomo a Escala',
    description:
      'Viaje de zoom ×10 desde el átomo completo hasta su núcleo: hace tangible lo pequeño que es el núcleo frente al tamaño real del átomo.',
    tags: ['Física', 'Química', 'ESO', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-atomo-real/',
    responsive: true,
  },
  {
    id: 'sim-enlaces-quimicos',
    title: 'Enlaces Químicos',
    description:
      'Enlace iónico, covalente y metálico: cómo los átomos ganan, comparten o deslocalizan electrones, con redes iónicas, cristales covalentes y metales maleables.',
    tags: ['Química', 'ESO', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-enlaces-quimicos/',
    responsive: true,
  },
  {
    id: 'sim-orbitas',
    title: 'Órbitas y Gravitación',
    description:
      'Mecánica orbital con la bala de cañón de Newton, el Sistema Solar, las leyes de Kepler y las estrellas binarias en un mismo laboratorio.',
    tags: ['Física', 'ESO', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-orbitas/',
    responsive: true,
  },
  {
    id: 'sim-cambios-estado',
    title: 'Cambios de Estado',
    description:
      'Calienta y enfría una sustancia y observa a la vez el recipiente, sus partículas y la curva de calentamiento; explora con el diagrama de fases por qué el agua hierve a unos 72 °C en el Everest.',
    tags: ['Física', 'Química', 'ESO'],
    url: 'https://jrgrijota.github.io/simulacion-cambios-estado/',
    responsive: true,
  },
];

// Lista ordenada y única de etiquetas presentes en el catálogo (para los filtros).
export const allTags = [...new Set(simulations.flatMap((s) => s.tags))];

export function getSimulationById(id) {
  return simulations.find((s) => s.id === id) || null;
}
