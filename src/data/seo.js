// Título y descripción para Google (el <title> y la meta description) de las
// simulaciones y de sus guías docentes, en español y en inglés.
//
// No cambian lo que se ve en la web (tarjetas, cabecera, H1): solo lo que sale en
// el resultado de búsqueda. Se escriben con las palabras que la gente busca de
// verdad, sacadas de Search Console («simulador cambios de estado», «atomic spectra
// simulation», «atomo interactivo», «enlaces quimicos interactivos»…).
//
// Pautas: título de unos 50-60 caracteres (Google añade « · SimulaCiencia» y corta
// hacia los 60), con la palabra «simulador»/«simulación» o «simulation» junto al tema;
// descripción de 120-160 caracteres que diga qué se hace en la simulación y para
// qué cursos. En catalán, euskera y gallego se usan el título y la descripción del
// catálogo (src/data/simulations.js).
//
// `guideTitle` y `guideDescription` son los de la guía docente (/guias/<sim>/):
// sustituyen al resumen de la «Ficha rápida», que habla de la simulación y no del
// profesorado que busca cómo explicar el tema.
export const SIM_SEO = {
  'sim-arquimedes': {
    es: {
      title: 'Simulación del principio de Arquímedes: empuje y flotación',
      description: 'Simulación gratuita del principio de Arquímedes: mira cuándo un cuerpo flota o se hunde y compara su peso con el empuje, con materiales y líquidos reales.',
      guideTitle: 'Principio de Arquímedes: guía didáctica para 3.º y 4.º ESO',
      guideDescription: 'Cómo explicar el empuje y la flotación con una simulación: secuencia de clase, ideas previas del alumnado y simplificaciones. Gratis, en PDF y Word.',
    },
    en: {
      title: "Archimedes' Principle Simulation: Buoyancy and Upthrust",
      description: 'Free Archimedes’ principle simulation: see when an object floats or sinks and compare its weight with the upthrust, using real materials and liquids.',
      guideTitle: "Teaching Archimedes' Principle: Guide for Ages 14–16",
      guideDescription: 'How to teach buoyancy and upthrust with a free simulation: lesson sequence, common student misconceptions and simplifications. PDF and Word.',
    },
  },
  'sim-densidad': {
    es: {
      title: 'Simulador de densidad: masa, volumen y balanza',
      description: 'Simulador de densidad gratis: compara corcho, agua, hielo o plomo, mira cuánta masa tiene cada litro y compruébalo en una balanza. Para 2.º a 4.º ESO.',
      guideTitle: 'Densidad: guía didáctica con simulación para 2.º a 4.º ESO',
      guideDescription: 'Cómo explicar la densidad con una simulación: masa, volumen y flotación, secuencia de clase e ideas previas del alumnado. Gratis, en PDF y Word.',
    },
    en: {
      title: 'Density Simulation: Compare Mass and Volume of Materials',
      description: 'Free density simulation: compare cork, water, ice or lead, see how much mass each litre has and check it on a two-pan balance. For ages 13–16.',
      guideTitle: 'Teaching Density with a Simulation: Guide for Ages 13–16',
      guideDescription: 'How to teach density with a free simulation: mass, volume and floating, a lesson sequence and common student misconceptions. PDF and Word.',
    },
  },
  'sim-espectros': {
    es: {
      title: 'Simulador de espectros atómicos de emisión y absorción',
      description: 'Simulador gratuito de espectros de emisión y absorción: elige un elemento y mira qué salto del electrón produce cada línea. Para 4.º ESO y Bachillerato.',
      guideTitle: 'Espectros atómicos: guía didáctica para 4.º ESO y Bachillerato',
      guideDescription: 'Cómo explicar los espectros atómicos con una simulación: emisión, absorción y niveles de energía, secuencia de clase e ideas previas. En PDF y Word.',
    },
    en: {
      title: 'Interactive Atomic Spectra Simulation: Emission and Absorption',
      description: 'Free atomic spectra simulation: choose an element, see its emission and absorption lines and the electron transition behind each one. For ages 15–18.',
      guideTitle: 'Teaching Atomic Spectra: Simulation Guide for Ages 15–18',
      guideDescription: 'How to teach emission and absorption spectra and energy levels with a free simulation: lesson sequence and common misconceptions. PDF and Word.',
    },
  },
  'sim-gases': {
    es: {
      title: 'Simulador de gases: teoría cinética y leyes de Boyle y Gay-Lussac',
      description: 'Simulador de gases con partículas: cambia presión, volumen y temperatura y comprueba las leyes de Boyle y de Gay-Lussac con la teoría cinética. Gratis.',
      guideTitle: 'Teoría cinética de los gases: guía didáctica para 2.º a 4.º ESO',
      guideDescription: 'Cómo explicar la presión y las leyes de los gases con una simulación de partículas: secuencia de clase e ideas previas del alumnado. En PDF y Word.',
    },
    en: {
      title: "Gas Laws Simulation: Kinetic Theory, Boyle and Gay-Lussac",
      description: 'Free particle simulation of a gas: change pressure, volume and temperature and test Boyle’s and Gay-Lussac’s laws with kinetic theory. For ages 13–16.',
      guideTitle: 'Teaching Kinetic Theory and Gas Laws: Guide for Ages 13–16',
      guideDescription: 'How to teach gas pressure and the gas laws with a free particle simulation: lesson sequence and common student misconceptions. PDF and Word.',
    },
  },
  'sim-modelos': {
    es: {
      title: 'Simulador de modelos atómicos: Thomson y Rutherford',
      description: 'Simulador de modelos atómicos: lanza partículas alfa contra el átomo de Thomson y el de Rutherford y descubre por qué el átomo tiene núcleo. Gratis.',
      guideTitle: 'Modelos atómicos: guía didáctica con simulación para ESO',
      guideDescription: 'Cómo explicar el paso del modelo de Thomson al de Rutherford con una simulación del experimento: secuencia de clase e ideas previas. En PDF y Word.',
    },
    en: {
      title: "Atomic Models Simulation: Thomson vs Rutherford's Experiment",
      description: 'Free atomic models simulation: fire alpha particles at Thomson’s and Rutherford’s atoms and discover why the atom must have a nucleus. For ages 13–18.',
      guideTitle: 'Teaching Atomic Models: Rutherford Simulation Guide',
      guideDescription: 'How to teach the move from Thomson’s to Rutherford’s model with a free simulation of the experiment: lesson sequence and misconceptions. PDF and Word.',
    },
  },
  'sim-velocidad-reaccion': {
    es: {
      title: 'Simulador de velocidad de reacción y teoría de colisiones',
      description: 'Simulador de velocidad de reacción: cambia temperatura, concentración y catalizador y mira, choque a choque, por qué la reacción va más rápida. Gratis.',
      guideTitle: 'Velocidad de reacción: guía didáctica con simulación',
      guideDescription: 'Cómo explicar la velocidad de reacción y la teoría de colisiones con una simulación: secuencia de clase e ideas previas del alumnado. En PDF y Word.',
    },
    en: {
      title: 'Reaction Rate Simulation: Collision Theory and Catalysts',
      description: 'Free reaction rate simulation: change temperature, concentration and catalyst and see, collision by collision, why the reaction speeds up.',
      guideTitle: 'Teaching Reaction Rate and Collision Theory: Simulation Guide',
      guideDescription: 'How to teach reaction rate and collision theory with a free simulation: lesson sequence and common student misconceptions. PDF and Word.',
    },
  },
  'sim-atomo-real': {
    es: {
      title: 'Átomo interactivo a escala: el tamaño del átomo y del núcleo',
      description: 'Átomo interactivo a escala real: haz zoom ×10 desde el átomo entero hasta su núcleo y comprueba lo diminuto que es el núcleo. Gratis, para ESO.',
      guideTitle: 'El átomo a escala: guía didáctica con simulación para ESO',
      guideDescription: 'Cómo hacer ver en clase lo pequeño que es el núcleo frente al átomo con una simulación a escala: secuencia e ideas previas. En PDF y Word.',
    },
    en: {
      title: 'Interactive Atom to Scale: How Small Is the Nucleus?',
      description: 'Free interactive atom to scale: zoom ×10 at a time from the whole atom down to its nucleus and see how tiny the nucleus really is. For ages 13–16.',
      guideTitle: 'Teaching the Size of the Atom: Simulation Guide for Ages 13–16',
      guideDescription: 'How to show students how tiny the nucleus is compared with the atom using a free scale simulation: lesson sequence and misconceptions. PDF and Word.',
    },
  },
  'sim-enlaces-quimicos': {
    es: {
      title: 'Enlaces químicos interactivos: iónico, covalente y metálico',
      description: 'Simulación de enlaces químicos: mira cómo los átomos ganan, comparten o ponen en común electrones en el enlace iónico, covalente y metálico. Gratis.',
      guideTitle: 'Enlace químico: guía didáctica con simulación para ESO y Bach.',
      guideDescription: 'Cómo explicar el enlace iónico, covalente y metálico con una simulación interactiva: secuencia de clase e ideas previas del alumnado. En PDF y Word.',
    },
    en: {
      title: 'Chemical Bonding Simulation: Ionic, Covalent and Metallic',
      description: 'Free chemical bonding simulation: see how atoms gain, share or delocalise electrons in ionic, covalent and metallic bonds. For ages 14–17.',
      guideTitle: 'Teaching Chemical Bonding: Simulation Guide for Ages 14–17',
      guideDescription: 'How to teach ionic, covalent and metallic bonding with a free interactive simulation: lesson sequence and common misconceptions. PDF and Word.',
    },
  },
  'sim-orbitas': {
    es: {
      title: 'Simulador de órbitas y gravitación: Newton y Kepler',
      description: 'Simulador de órbitas: la bala de cañón de Newton, el Sistema Solar, las leyes de Kepler y las estrellas binarias. Gratis, para ESO y Bachillerato.',
      guideTitle: 'Órbitas y gravitación: guía didáctica con simulación',
      guideDescription: 'Cómo explicar la gravitación y las leyes de Kepler con una simulación de órbitas: secuencia de clase e ideas previas del alumnado. En PDF y Word.',
    },
    en: {
      title: "Orbits and Gravity Simulation: Newton's Cannon and Kepler's Laws",
      description: 'Free orbit simulation: Newton’s cannonball, the Solar System, Kepler’s laws and binary stars in one place. For ages 14–18.',
      guideTitle: 'Teaching Gravity and Orbits: Simulation Guide for Ages 14–18',
      guideDescription: 'How to teach gravitation and Kepler’s laws with a free orbit simulation: lesson sequence and common student misconceptions. PDF and Word.',
    },
  },
  'sim-cambios-estado': {
    es: {
      title: 'Simulador de cambios de estado y diagrama de fases',
      description: 'Simulador de cambios de estado: calienta y enfría agua u otras sustancias, mira sus partículas y la curva de calentamiento y explora el diagrama de fases.',
      guideTitle: 'Cambios de estado: guía didáctica para 2.º a 4.º ESO',
      guideDescription: 'Cómo explicar los cambios de estado con una simulación: partículas, curva de calentamiento y diagrama de fases, con las ideas previas del alumnado.',
    },
    en: {
      title: 'Changes of State Simulation: Heating Curve and Phase Diagram',
      description: 'Free changes of state simulation: heat and cool water and other substances, watch the particles and the heating curve, and explore the phase diagram.',
      guideTitle: 'Teaching Changes of State: Simulation Guide for Ages 13–16',
      guideDescription: 'How to teach melting, boiling and heating curves with a free particle simulation, including phase diagrams and common misconceptions. PDF and Word.',
    },
  },
  'sim-ajuste-reaccion': {
    es: {
      title: 'Simulador de ajuste de reacciones químicas',
      description: 'Ajusta reacciones químicas viendo cómo se reordenan los átomos, comprueba la ley de Lavoisier en una balanza y halla el reactivo limitante. Gratis.',
      guideTitle: 'Ajuste de reacciones: guía didáctica con simulación',
      guideDescription: 'Cómo explicar el ajuste de ecuaciones, la conservación de la masa y el reactivo limitante con una simulación: secuencia e ideas previas. En PDF y Word.',
    },
    en: {
      title: 'Balancing Chemical Equations Simulation',
      description: 'Free simulation for balancing chemical equations: watch the atoms rearrange, check conservation of mass on a balance and find the limiting reactant.',
      guideTitle: 'Teaching Balancing Equations: Simulation Guide for Ages 14–17',
      guideDescription: 'How to teach balancing equations, conservation of mass and limiting reactants with a free simulation: lesson sequence and misconceptions.',
    },
  },
  'sim-energia-mecanica': {
    es: {
      title: 'Simulador de energía mecánica: montaña rusa y péndulo',
      description: 'Simulador de energía mecánica: mira en una montaña rusa y en un péndulo cómo la energía potencial se convierte en cinética y qué hace el rozamiento. Gratis.',
      guideTitle: 'Energía mecánica: guía didáctica con simulación',
      guideDescription: 'Cómo explicar la energía cinética, la potencial y su conservación con una simulación de montaña rusa: secuencia e ideas previas. En PDF y Word.',
    },
    en: {
      title: 'Mechanical Energy Simulation: Roller Coaster and Pendulum',
      description: 'Free energy simulation: watch potential energy turn into kinetic energy on a roller coaster and a pendulum, and see what friction does. For ages 14–17.',
      guideTitle: 'Teaching Kinetic and Potential Energy: Simulation Guide',
      guideDescription: 'How to teach kinetic and potential energy and their conservation with a free roller coaster simulation: lesson sequence and misconceptions.',
    },
  },
  'sim-circuitos': {
    es: {
      title: 'Simulador de circuitos eléctricos: serie, paralelo y ley de Ohm',
      description: 'Simulador de circuitos eléctricos: monta bombillas o resistencias en serie y en paralelo, mide tensión e intensidad y comprueba la ley de Ohm. Gratis.',
      guideTitle: 'Circuitos eléctricos: guía didáctica para 2.º y 3.º ESO',
      guideDescription: 'Cómo explicar tensión, intensidad y la ley de Ohm con una simulación de circuitos: secuencia de clase e ideas previas del alumnado. En PDF y Word.',
    },
    en: {
      title: "Electric Circuits Simulation: Series, Parallel and Ohm's Law",
      description: 'Free electric circuits simulation: build series and parallel circuits with bulbs or resistors, measure voltage and current and check Ohm’s law.',
      guideTitle: 'Teaching Electric Circuits: Simulation Guide for Ages 13–15',
      guideDescription: 'How to teach voltage, current and Ohm’s law with a free circuit simulation: lesson sequence and common student misconceptions. PDF and Word.',
    },
  },
  'sim-cinematica': {
    es: {
      title: 'Simulador de MRU y MRUA con gráficas x‑t, v‑t y a‑t',
      description: 'Simulador de gráficas del movimiento: MRU y MRUA con un coche en una pista, gráficas x‑t, v‑t y a‑t en vivo y 10 retos. Gratis, para 2.º, 3.º y 4.º ESO.',
      guideTitle: 'Gráficas del movimiento: guía didáctica con simulación para ESO',
      guideDescription: 'Cómo enseñar a leer gráficas x‑t y v‑t del MRU y del MRUA con una simulación: secuencia de clase e ideas previas del alumnado. En PDF y Word.',
    },
    en: {
      title: 'Motion Graphs Simulation: Distance-Time and Velocity-Time',
      description: 'Free motion graphs simulation: a car on a track with live position-time, velocity-time and acceleration-time graphs, plus 10 graph-matching challenges. Ages 13–16.',
      guideTitle: 'Teaching Motion Graphs: Simulation Guide for Ages 13–16',
      guideDescription: 'How to teach distance-time and velocity-time graphs, constant velocity and acceleration with a free simulation: lesson sequence and misconceptions. PDF and Word.',
    },
  },
  'sim-ondas': {
    es: {
      title: 'Simulador de ondas: transversales y longitudinales',
      description: 'Simulador de ondas con cuerda y muelle: ondas transversales y longitudinales, amplitud, longitud de onda y período. Gratis, para 4.º ESO y Bachillerato.',
      guideTitle: 'Ondas: guía didáctica con simulación para 4.º ESO y 2.º Bach.',
      guideDescription: 'Cómo explicar las ondas y sus magnitudes con una simulación de cuerda y muelle: secuencia de clase e ideas previas del alumnado. En PDF y Word.',
    },
    en: {
      title: 'Waves Simulation: Transverse and Longitudinal Waves',
      description: 'Free waves simulation with a string and a spring: transverse and longitudinal waves, amplitude, wavelength and period. For ages 15–18.',
      guideTitle: 'Teaching Waves: Simulation Guide for Ages 15–18',
      guideDescription: 'How to teach transverse and longitudinal waves, wavelength and period with a free simulation: lesson sequence and misconceptions. PDF and Word.',
    },
  },
};

export const simSeo = (sim, lang) => SIM_SEO[sim?.id]?.[lang] || null;
