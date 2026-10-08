# Guía docente: simulación de espectros atómicos

## Ficha rápida

La simulación muestra que un átomo solo absorbe y emite fotones de energías concretas, al recibir luz o choques de electrones, y construye su espectro. Su uso principal es 1.º Bachillerato, con aplicaciones en 4.º ESO y 2.º Bachillerato Química.

| Dato | Detalle |
| --- | --- |
| Enlace | [jrgrijota.github.io/simulacion-espectros](https://jrgrijota.github.io/simulacion-espectros/) |
| Cursos | 1.º Bachillerato (uso principal), 4.º ESO, 2.º Bachillerato Química; repaso puntual en 2.º Bachillerato Física |
| Materia | Física y Química |
| Duración orientativa | 15–20 minutos de explicación con la simulación proyectada |
| Material | Proyector o pizarra digital; funciona en navegador, también en móvil y tableta, sin instalar nada |
| Conocimientos previos | Idea de átomo con electrones en niveles, espectro visible y colores; en Bachillerato, E = h·f y el electronvoltio |
| Accesibilidad | Tema oscuro, claro y de alto contraste (botón del engranaje) |

## Cómo funciona la simulación

La simulación tiene tres modos, «Fotones», «Colisión» y «Gas Ionizado», que se eligen arriba del panel izquierdo. Debajo, el desplegable «Elemento» ofrece hidrógeno (4 niveles), helio (3), sodio (3) y neón (5). En Fotones y Colisión se ve un átomo con sus órbitas rotuladas con su energía. A la derecha aparece un «Diagrama de niveles» en eV. En los tres modos, abajo está el «Espectro de emisión» de 380 a 780 nm. Debajo, otra barra recoge el UV (200–380 nm) y el IR (780–3000 nm).

| Modo | Qué controla el docente | Qué muestra |
| --- | --- | --- |
| Fotones, «Luz blanca» | «Un fotón» (se dispara con clic en la fuente del lienzo) o «Emisión continua», con «Flujo de fotones» de «Lento» a «Máximo» | Fotones de longitud de onda al azar entre 380 y 780 nm. El átomo solo absorbe los que coinciden con una de sus líneas visibles |
| Fotones, «Monocromática» | «Longitud de onda» de 380 a 780 nm, en pasos de 2 nm; empieza en 550 nm | Si el fotón coincide con una transición, el rótulo indica «ABSORBE 656 nm» y el electrón sube de órbita. Si no, el fotón pasa de largo |
| Colisión | «Energía del electrón» de 0,5 a 6,0 eV, en pasos de 0,1; empieza en 3,0 eV. «Disparo único» (clic en el cañón) o «Haz continuo» con «Frecuencia de disparo» | Rótulo «EXCITACIÓN» si el electrón tiene energía suficiente o «Colisión elástica — energía insuficiente» si no. Un panel indica qué niveles se alcanzan con esa energía |
| Gas Ionizado | «Voltaje del tubo» de 1 a 8 eV, en pasos de 0,2; empieza en 5,0 eV. «Densidad del gas» de 4 a 20 átomos; empieza en 10 | Un tubo con cátodo y ánodo. Los electrones excitan átomos, que brillan y emiten. Contadores de electrones libres, átomos excitados y fotones emitidos, y el número de fotones encima de cada línea |

Cuatro elementos sostienen la explicación:

- **El diagrama de niveles.** Muestra los niveles con su energía y todas las transiciones posibles. La transición que acaba de ocurrir se resalta, y un punto marca el nivel del electrón.
- **El rótulo de estado.** Encima del átomo aparece, por ejemplo, «ABSORBE 486 nm» o «EMITE 656 nm» con los niveles de partida y llegada, coloreado con el color de la luz.
- **El espectro de emisión.** Cada fotón emitido enciende su línea en la barra de 380–780 nm. Las líneas UV e IR van a la barra inferior. Las líneas se apagan poco a poco.
- **El panel de energía accesible.** En Colisión, «Con 3.0 eV puedes alcanzar:» marca con ✓ o ✗ cada nivel y su energía necesaria.

Los botones «Pausar» y «Limpiar» son comunes a los tres modos; «Limpiar» borra el espectro y los contadores. El desplegable «Transiciones del átomo» lista cada transición con su longitud de onda, su región (visible, UV o IR) y sus niveles. «Conceptos esenciales» resume E = h·f = h·c / λ y ΔE = E_sup − E_inf.

## Uso en cada curso

En 4.º ESO la simulación sirve para dar contenido al modelo de Bohr y a la luz como transporte de energía. En 1.º Bachillerato es la herramienta central para relacionar espectros y estructura electrónica. En 2.º Bachillerato Química apoya los postulados de Bohr y el espectro del hidrógeno. En 2.º y 3.º ESO no hay saberes donde encaje. Los saberes citados son los del currículo LOMLOE de la Comunidad de Madrid para Física y Química.

### 4.º ESO: niveles de energía y color de la luz

**Saberes básicos.** Bloque A: «Empleo de diversos entornos y recursos de aprendizaje científico, como el laboratorio o los entornos virtuales». Bloque B: «Modelos atómicos: desarrollo histórico de los principales modelos atómicos clásicos y cuánticos y descripción de las partículas subatómicas». Bloque E: «La luz y el sonido como ondas que transfieren energía».

**Objetivos.** Reconocer que el electrón solo ocupa niveles de energía concretos. Asociar absorber con subir de nivel y emitir con bajar. Relacionar el color de la luz con la energía del salto. Entender el espectro como huella de cada elemento.

**Secuencia de explicación (15–20 min).**

1. Modo Fotones con hidrógeno, «Monocromática» a 550 nm y «Un fotón» (configuración inicial salvo la luz). Disparar con clic en la fuente. El fotón pasa de largo. Preguntar por qué el átomo no lo aprovecha.
2. Subir la longitud de onda a 656 nm y disparar. El rótulo dice «ABSORBE 656 nm» y el electrón salta a la segunda órbita. En el diagrama, el salto es de 1,89 eV.
3. Esperar unos 3–5 s: el átomo emite un fotón de 656 nm en cualquier dirección. La línea roja aparece en el espectro. Concluir que el átomo devuelve la energía como luz del mismo color.
4. Repetir con 486 nm (2,55 eV) y 434 nm (2,86 eV). Señalar que la luz más azul o violeta corresponde a saltos mayores. A veces la bajada se hace en dos pasos: un fotón IR de 1879 nm y luego otro de 656 nm.
5. Pasar a Gas Ionizado a 5,0 eV. Aparecen las tres líneas visibles del hidrógeno. Cambiar el elemento a sodio (línea amarilla de 589 nm, farolas antiguas) y a neón (rojos y naranjas de los letreros). Cada elemento da un espectro distinto.

### 1.º Bachillerato: espectros y estructura electrónica

**Saberes básicos.** Bloque A: «Estructura electrónica de los átomos tras el análisis de su interacción con la radiación electromagnética» y «Los espectros atómicos y la estructura electrónica de los átomos».

**Objetivos.** Calcular la energía de un fotón con E = h·c / λ. Relacionar cada línea con una diferencia de energía entre niveles. Distinguir la excitación por fotones (energía exacta) de la excitación por choque (energía mínima). Aplicar la conservación de la energía a las cascadas.

**Secuencia de explicación (15–20 min).**

1. Fotones con hidrógeno y «Monocromática». Abrir «Transiciones del átomo». Calcular en la pizarra la energía de un fotón de 656 nm: E = 6,63·10⁻³⁴ · 3,00·10⁸ / 656·10⁻⁹ = 3,03·10⁻¹⁹ J = 1,89 eV. Comprobar que coincide con el diagrama.
2. Poner 600 nm y disparar: 2,07 eV no corresponde a ningún salto y el fotón no se absorbe. Poner 486 nm: se absorbe y el electrón sube al nivel de 2,55 eV.
3. Observar la desexcitación desde 2,55 eV. Si baja en dos pasos, emite 1879 nm (0,66 eV) y 656 nm (1,89 eV). Sumar: 0,66 + 1,89 = 2,55 eV. La energía se conserva.
4. Modo Colisión con hidrógeno y «Disparo único». Con 1,5 eV sale «Colisión elástica — energía insuficiente». Con 2,0 eV el átomo se excita a 1,89 eV y emite 656 nm. Con 3,0 eV llega al nivel de 2,86 eV. Comparar con el fotón, que necesita la energía justa.
5. Gas Ionizado con sodio a 3,0 eV: solo aparece la línea de 589 nm (2,10 eV). Subir a 3,8 eV: aparecen 343 nm en la zona UV y 819 nm en la IR. Comprobar que 2,10 + 1,52 = 3,62 eV.
6. Cerrar con el espectro de absorción. Con «Luz blanca», el átomo retira del haz justo los fotones de 434, 486 y 656 nm. Dibujar en la pizarra las rayas oscuras en esas posiciones, porque la simulación no las dibuja.

### 2.º Bachillerato Química: modelo de Bohr y espectro del hidrógeno

**Saberes básicos.** Bloque A: «El espectro de emisión del hidrógeno», «Relación entre el fenómeno de los espectros atómicos y la cuantización de la energía», «Modelo atómico de Bohr. Postulados. Energía de las órbitas del átomo de hidrógeno», «Interpretación de los espectros de emisión y absorción de los elementos» y «Aciertos y limitaciones del modelo atómico de Bohr».

**Objetivos.** Interpretar el espectro visible del hidrógeno como la serie de Balmer. Ligar los postulados de Bohr con lo que se ve. Mostrar la cuantización con umbrales de energía. Reconocer las limitaciones del modelo en átomos con varios electrones.

**Secuencia de explicación (15–20 min).**

1. Avisar antes de empezar: el nivel inferior del hidrógeno, rotulado «n=1», corresponde en realidad a n = 2. Los niveles de la simulación son n = 2, 3, 4 y 5, medidos desde n = 2.
2. Comprobarlo con E_n = −13,6 / n² eV: E₃ − E₂ = 1,89 eV, E₄ − E₂ = 2,55 eV y E₅ − E₂ = 2,86 eV. Coinciden con el diagrama. Con la fórmula de Balmer salen 656, 486 y 434 nm.
3. Gas Ionizado con hidrógeno a 2,0 eV: solo aparece la línea de 656 nm. Subir a 2,6 eV: aparece también 486 nm. A 3,0 eV aparece 434 nm. Cada línea tiene un umbral: la energía está cuantizada.
4. Señalar las líneas IR de 1879 y 1278 nm en la barra inferior. Corresponden a saltos que acaban en n = 3, la serie de Paschen.
5. Volver a Fotones con «Luz blanca» y «Emisión continua». Las longitudes de onda absorbidas son las mismas que las emitidas. Relacionar los espectros de absorción y de emisión del mismo elemento.
6. Cambiar a sodio. Las etiquetas 3s y 3p remiten a subniveles que Bohr no explica. Usarlo para presentar las limitaciones del modelo y la necesidad de los números cuánticos.

### 2.º Bachillerato Física: repaso puntual

No hay un saber específico de espectros más allá de una mención. La simulación puede apoyar el saber del bloque D «Otras limitaciones de la física clásica: radiación del cuerpo negro, efecto fotoeléctrico y espectros atómicos». Con hidrógeno, 550 nm y «Emisión continua» al flujo «Máximo», ningún fotón se absorbe. La analogía con el efecto fotoeléctrico es directa: importa la energía de cada fotón, no cuántos llegan.

## Concepciones alternativas que ayuda a corregir

La simulación ataca sobre todo la idea de que la energía de la luz es continua y depende solo de su intensidad. Cada fila indica la idea previa frecuente y cómo desmontarla con la simulación.

| Idea del alumnado | Idea correcta | Cómo mostrarlo |
| --- | --- | --- |
| «Si llega mucha luz, el átomo acabará absorbiendo» | Cada fotón se absorbe solo si su energía coincide con un salto | Hidrógeno, «Monocromática» a 550 nm, «Emisión continua» y flujo «Máximo»: ningún fotón se absorbe. A 656 nm, sí |
| «El electrón puede tener cualquier energía» | La energía del átomo está cuantizada | Diagrama de niveles con hidrógeno: solo 0; 1,89; 2,55 y 2,86 eV. A 600 nm el fotón pasa de largo |
| «La luz roja tiene más energía que la azul» | La energía del fotón crece al bajar λ | Hidrógeno: 656 nm corresponde a 1,89 eV y 434 nm a 2,86 eV. Ver el tamaño de cada salto en el diagrama |
| «El átomo devuelve el mismo fotón al instante, como un espejo» | Queda excitado un tiempo y emite en cualquier dirección, a veces en varios pasos | Hidrógeno a 486 nm: tras unos segundos puede emitir 1879 nm y luego 656 nm, en direcciones distintas |
| «Un electrón necesita la energía justa, igual que un fotón» | Por choque basta con una energía igual o mayor que el salto | Colisión con hidrógeno a 2,0 eV: excita el nivel de 1,89 eV. A 1,5 eV, «Colisión elástica — energía insuficiente» |
| «La lámpara brilla porque el gas se calienta o arde» | Los choques de electrones excitan los átomos y estos emiten al desexcitarse | Gas Ionizado con hidrógeno a 1,0 eV: hay electrones pero ningún fotón. Subir a 2,0 eV: aparece la luz de 656 nm |
| «Todos los gases dan la misma luz» | Cada elemento tiene su espectro, como una huella | Gas Ionizado a 5,0 eV: cambiar entre hidrógeno, helio, sodio y neón y comparar las líneas |
| «Solo existe la luz que vemos» | Hay emisiones ultravioletas e infrarrojas | Gas Ionizado con sodio a 3,8 eV: aparecen 343 nm (UV) y 819 nm (IR) en la barra inferior |

## Simplificaciones que conviene conocer

La simulación prioriza la idea «niveles discretos, saltos con energía concreta» y para ello simplifica los átomos y los tiempos. Conviene conocer estas licencias para no reforzar ideas incorrectas sin querer.

1. **El hidrógeno empieza en n = 2.** Los niveles valen 0; 1,89; 2,55 y 2,86 eV, medidos desde el nivel inferior. Ese nivel se rotula «n=1», pero las líneas son las de Balmer, que acaban en n = 2. En 4.º ESO basta con hablar de «nivel inferior»; en Bachillerato hay que corregir el rótulo.
2. **Energías positivas y pocos niveles.** Todas las energías se miden desde el nivel inferior, con valor 0, y no hay energías negativas ni ionización. Cada átomo tiene entre 3 y 5 niveles. En 2.º Bachillerato conviene recordar que E_n = −13,6 / n² eV.
3. **El nivel inferior no siempre es el fundamental.** En helio y neón, el nivel E₁ ya es un estado excitado. Desde el fundamental real harían falta unos 20 eV. En sodio, la etiqueta «4d» corresponde en realidad al nivel 3d. Para Bachillerato, presentarlos como modelos de niveles, no como datos exactos.
4. **Absorción con margen de 18 nm.** Se absorbe cualquier fotón a menos de 18 nm de una línea: con hidrógeno, 640 nm también se absorbe como si fuera 656 nm. Las líneas reales son mucho más estrechas. Además, solo se absorben fotones visibles y solo desde el nivel inferior.
5. **Cascada al azar y tiempos lentos.** El átomo pasa 1,3–2,7 s excitado y luego 2 s en cada nivel antes de emitir. Desde cada nivel baja a cualquiera inferior con igual probabilidad. En la realidad la vida media ronda los nanosegundos y unas transiciones son mucho más probables que otras.
6. **Choques simplificados.** El electrón siempre excita el nivel más alto que alcanza y luego desaparece; no se ve la energía que le sobra. En Gas Ionizado cada choque válido excita con una probabilidad del 40 %. El «Voltaje del tubo» se da en eV: es la energía de cada electrón, no la tensión real de una lámpara.
7. **Órbitas como planetas.** El electrón gira en órbitas circulares dibujadas con radios de 68 a 168 píxeles en hidrógeno, sin escala real. En Bohr los radios crecen con n². En 2.º Bachillerato conviene contrastarlo con la idea de orbital.
8. **Solo espectro de emisión.** No se dibuja el espectro de absorción con rayas oscuras; hay que hacerlo en la pizarra. Las líneas pierden la mitad de su brillo en unos 14 s, también en pausa.
9. **Barra IR limitada a 3000 nm.** Las líneas de 4003 nm del hidrógeno y de 3444 y 6889 nm del neón se emiten pero no se dibujan. Solo aparecen en «Transiciones del átomo».
