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
      'Flotabilidad y empuje: ajusta masa, volumen y densidad del líquido para observar cuándo un cuerpo flota, se hunde o queda en equilibrio.',
    tags: ['Física', 'ESO', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-arquimedes/',
    responsive: true,
  },
  {
    id: 'sim-densidad',
    title: 'Densidad',
    description:
      'Relación entre masa, volumen y densidad con distintos materiales y líquidos. Ideal para introducir la magnitud de forma intuitiva.',
    tags: ['Física', 'Química', 'ESO'],
    url: 'https://jrgrijota.github.io/simulacion-densidad/',
    responsive: true,
  },
  {
    id: 'sim-espectros',
    title: 'Espectros Atómicos',
    description:
      'Visualización e interacción con los espectros de emisión y absorción de diferentes elementos químicos y sus transiciones electrónicas.',
    tags: ['Química', 'Física Cuántica', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-espectros/',
    responsive: true,
  },
  {
    id: 'sim-gases',
    title: 'Cinética de Gases',
    description:
      'Modelo de partículas en movimiento que relaciona presión, temperatura y volumen según la teoría cinético-molecular.',
    tags: ['Física', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-gases/',
    responsive: false,
  },
  {
    id: 'sim-modelos',
    title: 'Modelos Atómicos',
    description:
      'Experimento de dispersión de Rutherford frente al modelo de Thomson: cómo una observación obligó a reescribir el modelo del átomo.',
    tags: ['Física', 'Química', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-modelos/',
    responsive: true,
  },
  {
    id: 'sim-velocidad-reaccion',
    title: 'Velocidad de Reacción',
    description:
      'Cómo afectan temperatura, concentración y catalizador a las colisiones moleculares y a la rapidez de una reacción química.',
    tags: ['Química', 'Bachillerato'],
    url: 'https://jrgrijota.github.io/simulacion-velocidad-reaccion/',
    responsive: false,
  },
];

// Lista ordenada y única de etiquetas presentes en el catálogo (para los filtros).
export const allTags = [...new Set(simulations.flatMap((s) => s.tags))];

export function getSimulationById(id) {
  return simulations.find((s) => s.id === id) || null;
}
