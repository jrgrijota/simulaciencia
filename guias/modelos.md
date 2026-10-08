# Guía docente: simulación de modelos atómicos

## Ficha rápida

La simulación reproduce el experimento de dispersión de partículas α de Geiger y Marsden y compara las predicciones de Thomson y Rutherford. Su uso principal es 2.º ESO, con aplicaciones en 3.º y 4.º ESO y en 2.º Bachillerato Física.

| Dato | Detalle |
| --- | --- |
| Enlace | [jrgrijota.github.io/simulacion-modelos](https://jrgrijota.github.io/simulacion-modelos/) |
| Cursos | 2.º ESO (uso principal), 3.º ESO, 4.º ESO, 2.º Bachillerato Física; repaso puntual en 2.º Bachillerato Química |
| Materia | Física y Química |
| Duración orientativa | 15–20 minutos de explicación con la simulación proyectada |
| Material | Proyector o pizarra digital; funciona en navegador, también en móvil y tableta, sin instalar nada |
| Conocimientos previos | Átomo formado por protones, neutrones y electrones; cargas del mismo signo se repelen; en Bachillerato, ley de Coulomb y energía potencial eléctrica |
| Accesibilidad | Tema oscuro, claro y de alto contraste, y tamaño de interfaz «Tablet / Pizarra digital» para pantallas táctiles (botón del engranaje) |

## Cómo funciona la simulación

El panel izquierdo tiene dos tarjetas de controles. En «El átomo» se eligen el «Modelo» (Thomson o Rutherford), la «Vista» («Átomo» o «Lámina») y el «Número atómico (Z)». En «Lanzamiento» se elige cómo se disparan las partículas α y con qué velocidad. En el lienzo, la «Fuente α» está a la izquierda y un arco rotulado «Detector» rodea el blanco. El arco deja abierta la zona de la fuente. La configuración inicial es Thomson, vista Átomo, Z = 14 (silicio), «Una a una (clic)» y velocidad 10.

| Modo | Qué controla el docente | Qué muestra |
| --- | --- | --- |
| Vista «Átomo», modelo Thomson | «Número atómico (Z)» de 1 a 118; empieza en 14. El rótulo indica número y nombre, por ejemplo «79 – Oro» | Una esfera amarilla de carga positiva con los electrones en anillos que giran. Las partículas α apenas se desvían |
| Vista «Átomo», modelo Rutherford | El mismo deslizador de Z | Un núcleo con Z protones (rojos) y Z neutrones (grises). Los electrones van en capas de 2, 8, 18, 32… Las α que pasan cerca del núcleo se curvan y algunas vuelven hacia la fuente |
| Vista «Lámina», cualquier modelo | Modelo y Z. La lámina tiene 3 columnas de átomos pequeños a lo alto de la apertura | Muchas partículas a la vez sobre muchos átomos. En Thomson todas pasan casi rectas; en Rutherford la mayoría pasa recta y unas pocas rebotan |
| «Modo de emisión» | «Una a una (clic)»: cada clic en la zona azul junto a la fuente lanza una α a esa altura. «Lluvia continua»: el botón «Emisión continua» lanza α a alturas al azar, con «Ritmo» de 1 a 60 (empieza en 20) | «Energía (velocidad α)» va de 4 a 16 en pasos de 0,5 y vale para los dos modos. Más velocidad, menos desviación |

Tres elementos sostienen la explicación:

- **Las trayectorias que quedan dibujadas.** En la vista Átomo se conservan las 6 últimas trayectorias durante unos 5 segundos. Se ve que la α se curva antes de llegar al núcleo, sin tocarlo.
- **Las marcas en el detector.** Cada α detectada deja un punto en el arco (se guardan las 40 últimas). Con Thomson se agrupan enfrente de la fuente; con Rutherford se reparten por todo el arco.
- **El «Gráfico de ángulos».** Es una tarjeta plegable con 18 barras de 10° entre 0° y 180°. La primera barra es verde, las de hasta 90° son ámbar y las de más de 90° son rojas. Arriba indica «n=» con las partículas lanzadas. Al pasar el ratón por una barra, muestra su recuento y su porcentaje.

El botón «Reiniciar» borra partículas y gráfico; cambiar de modelo o de vista también lo reinicia. La tarjeta «Guía rápida» resume qué se ve, los dos modelos, las dos vistas y cómo leer el gráfico.

## Uso en cada curso

En 2.º ESO la simulación sirve para presentar los modelos de Thomson y Rutherford y el experimento que los separa. En 3.º ESO apoya la estructura atómica y la fuerza eléctrica entre cargas. En 4.º ESO encaja en la evolución histórica de los modelos y en el análisis de datos. En 2.º Bachillerato Física sirve para aplicar Coulomb, Gauss y la conservación de la energía. En 1.º Bachillerato no hay un saber donde encaje. Los saberes citados son los del currículo LOMLOE de la Comunidad de Madrid para Física y Química.

### 2.º ESO: de Thomson a Rutherford

**Saberes básicos.** Bloque B: «Estructura atómica: presentación del desarrollo histórico de los modelos atómicos», «Los primeros modelos atómicos: modelo de Thomson y modelo de Rutherford» y «Números atómicos». Bloque A: «elaboración de hipótesis y comprobación experimental de las mismas» y «el laboratorio y los entornos virtuales».

**Objetivos.** Describir los modelos de Thomson y Rutherford. Entender que un experimento puede descartar un modelo. Reconocer que el átomo está casi vacío y tiene un núcleo pequeño con carga positiva.

**Secuencia de explicación (15–20 min).**

1. Configuración inicial: Thomson, vista Átomo, Z = 14. Describir el dibujo: una esfera de carga positiva con electrones incrustados, el «budín de pasas». Explicar que la fuente lanza partículas α, con carga positiva.
2. Preguntar qué le pasará a una α lanzada contra este átomo. Hacer varios clics a distintas alturas: todas atraviesan casi rectas, con desviaciones de unos 2° como mucho.
3. Subir Z a 79 («79 – Oro»), el metal de la lámina original. Repetir los clics: siguen pasando casi rectas, con desviaciones de pocos grados.
4. Cambiar a vista Lámina y «Lluvia continua», activar «Emisión continua» y desplegar «Gráfico de ángulos». Con Thomson todas las partículas caen en la primera barra (0–10°).
5. Cambiar el modelo a Rutherford sin tocar nada más. Ahora unas 7 de cada 10 siguen en la primera barra, pero aparecen barras rojas: algunas α rebotan hacia la fuente.
6. Volver a vista Átomo y «Una a una (clic)», con Rutherford y Z = 79. Clicar a la altura del núcleo: la α vuelve atrás. Clicar lejos: pasa recta. Concluir que hay un núcleo diminuto y positivo y mucho espacio vacío.

### 3.º ESO: estructura atómica y fuerza eléctrica

**Saberes básicos.** Bloque B: «Estructura atómica de la materia». Bloque E: «Naturaleza eléctrica de la materia» y «La fuerza eléctrica: analogías y diferencias con la fuerza gravitatoria». Bloque A: «Registro de datos y resultados empleando tablas, gráficos y expresiones matemáticas».

**Objetivos.** Situar protones y neutrones en el núcleo y electrones en la corteza. Explicar la desviación de las α como repulsión eléctrica a distancia. Relacionar la intensidad de la repulsión con la carga del núcleo y con la velocidad de la partícula.

**Secuencia de explicación (15–20 min).**

1. Rutherford, vista Átomo, Z = 14. Señalar protones (rojos), neutrones (grises) y electrones. Recordar que la α tiene dos protones y dos neutrones, como se ve en su dibujo.
2. Lanzar una α un poco por encima del núcleo. Hacer notar que la trayectoria se curva antes de llegar: la fuerza eléctrica actúa a distancia, sin contacto. Comparar con la gravedad, que solo atrae.
3. Bajar Z a 1 («1 – Hidrógeno») y apuntar al núcleo: la desviación no pasa de unos 6°. Subir a 79: la α rebota. Más protones, más carga, más repulsión.
4. Con Z = 79, lanzar a la misma altura, justo por encima del núcleo, con velocidad 4, 10 y 16. La desviación baja de unos 115° a unos 38° y a unos 16°.
5. Pasar a Lámina con «Lluvia continua» y abrir el gráfico. Comparar Z = 1, Z = 14 y Z = 79 con «Reiniciar» entre medias. Anotar en la pizarra el porcentaje de la primera barra y de las rojas.

### 4.º ESO: evolución de los modelos atómicos

**Saberes básicos.** Bloque B: «Modelos atómicos: desarrollo histórico de los principales modelos atómicos clásicos y cuánticos y descripción de las partículas subatómicas» y «Evolución de los modelos atómicos hasta el modelo de Borh-Sommerfeld». Bloque A: «La investigación científica. La medida y su error. Análisis de datos experimentales» y «Valoración de la cultura científica y del papel de científicos y científicas en los principales hitos históricos y actuales de la física y la química». Bloque E: «Energía cinética y energía potencial».

**Objetivos.** Explicar el experimento de Geiger y Marsden como prueba de una hipótesis. Interpretar una distribución de ángulos. Justificar por qué el modelo nuclear sustituye al de Thomson y qué problemas deja abiertos para Bohr.

**Secuencia de explicación (15–20 min).**

1. Thomson, Z = 79, vista Lámina, «Lluvia continua», «Ritmo» al máximo (60) y «Emisión continua». Plantear la hipótesis: si Thomson tiene razón, todas las α pasarán casi rectas.
2. Desplegar el «Gráfico de ángulos» y esperar a unas 500 partículas (n=500). Todas caen en la barra de 0–10°. Esa es la predicción del modelo.
3. Cambiar a Rutherford. Pasar el ratón por las barras: la primera ronda el 69 % y las rojas suman en torno al 11 %. Contar que Geiger y Marsden vieron rebotes que Thomson no podía explicar.
4. Volver a la vista Átomo con Rutherford. Explicar que la desviación depende de lo cerca que pase la α del núcleo. Así se dedujo que el núcleo es diminuto.
5. Mover «Energía (velocidad α)» de 4 a 16 apuntando cerca del núcleo. La energía cinética crece con v²: es 16 veces mayor y la α se desvía mucho menos.
6. Señalar que la simulación ya dibuja los electrones en capas de 2, 8, 18… Eso no estaba en el modelo de Rutherford: es la aportación posterior de Bohr y Sommerfeld.

### 2.º Bachillerato Física: campo y potencial eléctricos

**Saberes básicos.** Bloque B: «Intensidad del campo eléctrico en distribuciones de cargas discretas y continuas. Ley de Coulomb», «Teorema de Gauss. Aplicaciones a esfera y lámina cargadas» y «Potencial eléctrico creado por una o varias cargas». Bloque D: «El núcleo atómico: fuerzas nucleares y energía de enlace» y «Tipos de radiaciones y desintegración radiactiva».

**Objetivos.** Aplicar el teorema de Gauss a la esfera de Thomson y la ley de Coulomb al núcleo. Calcular la distancia de máximo acercamiento con la conservación de la energía. Relacionar ángulo de desviación y parámetro de impacto.

**Secuencia de explicación (15–20 min).**

1. Thomson, vista Átomo, Z = 79. Aplicar Gauss a la esfera cargada: dentro, el campo crece con r; fuera, cae con 1/r². El campo máximo está en la superficie y es débil. Las α apenas se desvían.
2. Cambiar a Rutherford con el mismo Z. Toda la carga está en un radio mucho menor, y cerca del núcleo el campo es enorme. Clicar a la altura del núcleo: la α rebota.
3. Choque frontal: velocidad 8 y luego 16, clicando a la altura exacta del núcleo. Con ½ m v² = k q Q / r_mín, cuadruplicar la energía reduce r_mín a la cuarta parte. En la simulación pasa de unos 19 px a unos 5 px.
4. Con velocidad 10, lanzar α cada vez más cerca del núcleo. A unos 20 px del centro sale unos 38°; a 10 px, unos 71°; a 5 px, unos 111°. La cotangente de θ/2 se reduce a la mitad cada vez, como predice Rutherford.
5. Comentar que la fuente α es un emisor radiactivo y que la α es un núcleo de helio. Si la α llegara a tocar el núcleo actuaría la fuerza nuclear, que la simulación no incluye.

### 2.º Bachillerato Química: repaso puntual

No hay un saber específico de Thomson y Rutherford. La simulación puede abrir el bloque A al tratar «Los espectros atómicos como responsables de la necesidad de la revisión del modelo atómico. Relevancia de este fenómeno en el contexto del desarrollo histórico del modelo atómico». Basta con la vista Lámina en Rutherford para recordar el modelo nuclear. Después se plantea qué no explica: la estabilidad del átomo y los espectros.

## Concepciones alternativas que ayuda a corregir

La simulación ataca sobre todo la idea de átomo macizo y la de que las partículas solo se desvían al chocar. Cada fila indica la idea previa frecuente y cómo desmontarla con la simulación.

| Idea del alumnado | Idea correcta | Cómo mostrarlo |
| --- | --- | --- |
| «El átomo es una bolita maciza, llena de materia» | El átomo es casi todo espacio vacío, con un núcleo muy pequeño | Rutherford, Lámina, Z = 79, lluvia continua: unas 7 de cada 10 α atraviesan la lámina sin desviarse más de 10° |
| «La partícula α rebota porque choca con el núcleo, como una bola de billar» | La repulsión eléctrica actúa a distancia y curva la trayectoria antes de llegar | Rutherford, Átomo, Z = 79: lanzar un poco por encima del núcleo y ver que la trayectoria se curva lejos de él |
| «Las α se desvían al chocar con los electrones» | Los electrones tienen muy poca masa y casi no desvían a la α | Thomson, Átomo, Z = 118: la α atraviesa todos los anillos de electrones y sigue casi recta |
| «Si se cambia de modelo es porque el anterior era una tontería» | Un modelo se sustituye cuando un experimento contradice su predicción | Thomson, Lámina: todo en la primera barra. Mismo experimento en Rutherford: aparecen barras rojas que Thomson no explica |
| «El núcleo ocupa buena parte del átomo» | El núcleo es diminuto: por eso los rebotes son raros | Rutherford, Átomo, Z = 79: solo rebotan las α lanzadas casi a la altura del núcleo; a más de 50 px pasan casi rectas |
| «Todas las partículas α se desvían igual, da igual el átomo o su velocidad» | La desviación crece con la carga del núcleo y baja con la energía de la α | Rutherford, Átomo: apuntar al núcleo con Z = 1 (no pasa de 6°) y con Z = 79 (rebota). Luego repetir con velocidad 4 y 16 |
| «La partícula α es como un electrón» | La α es un núcleo de helio, con dos protones y dos neutrones y carga positiva | Señalar una α en vuelo: se dibuja con dos puntos rojos (protones) y dos grises (neutrones). Comparar con los electrones azules del átomo |

## Simplificaciones que conviene conocer

La simulación prioriza el contraste cualitativo entre los dos modelos y para ello exagera tamaños y frecuencias. Conviene conocer estas licencias para no reforzar ideas incorrectas sin querer.

1. **El núcleo está muy agrandado.** En la vista Átomo el núcleo mide entre 3 y 15 px de radio. El átomo mide entre 80 y 195 px. La proporción es de 1 a 12 en el oro, frente a 1 a 100 000 en la realidad. Conviene decirlo siempre que se hable de tamaños.
2. **Los rebotes están muy exagerados.** En la Lámina de Rutherford con Z = 79, una de cada cuatro α se desvía más de 90°. Geiger y Marsden contaron una de cada 8000. La idea cualitativa es correcta, la proporción no.
3. **La lámina tiene solo 3 átomos de espesor.** Cada α interactúa solo con el átomo más cercano, si está a menos de dos radios. Una lámina de oro real tiene miles de capas de átomos.
4. **Cada modelo usa una constante de fuerza distinta.** Rutherford usa una constante 5 veces mayor que Thomson (40 000 frente a 8000). Thomson tiene además un tope a la fuerza total. En Bachillerato conviene decir que la comparación es cualitativa.
5. **Thomson puede superar los 5° con poca energía.** La «Guía rápida» dice que las desviaciones son «siempre < 5°». Con velocidad 10 se cumple casi siempre, pero con velocidad 4 y Z alto aparecen desviaciones de 20° o 30° en la vista Átomo. Para la demostración, dejar la velocidad en 10 o más.
6. **El detector no cuenta los rebotes más fuertes.** El arco deja abierta la zona de la fuente, unos 54° por arriba y por abajo. En la vista Átomo, una α desviada más de unos 125° sale por ahí. No entra en el gráfico, aunque su trayectoria sí se dibuja. Además, «n=» cuenta las lanzadas, no las detectadas.
7. **El núcleo es «blando» y no hay fuerza nuclear.** La fuerza se suaviza cerca del centro y se anula más allá de 1,2 radios atómicos. Con Z = 1 a velocidad 10, o con Z = 14 a velocidad 16, una α lanzada de frente atraviesa el núcleo sin desviarse.
8. **Neutrones y capas inventados.** El núcleo dibuja tantos neutrones como protones; el oro real tiene 118 neutrones. Los electrones se reparten en capas de 2, 8, 18, 32, 32 y 8, que es una idea de Bohr, no de Rutherford. Desde 4.º ESO conviene señalar el anacronismo.
9. **Los electrones casi nunca chocan.** La masa de la α es 7350 veces la del electrón, cerca del valor real de unas 7300. Pero su radio de choque es de 0,005 px y los choques prácticamente no ocurren. En el modelo de Rutherford los electrones no ejercen fuerza sobre la α.
