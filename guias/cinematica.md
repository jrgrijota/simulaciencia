# Guía docente: Gráficas del Movimiento

## Ficha rápida

La simulación Gráficas del Movimiento pone un móvil (un coche o una persona) en una pista recta y dibuja, a la vez que se mueve, sus gráficas posición–tiempo (x‑t), velocidad–tiempo (v‑t) y aceleración–tiempo (a‑t). Sirve para aprender a leer y construir gráficas del movimiento rectilíneo uniforme (MRU) y uniformemente acelerado (MRUA): qué significa la pendiente, qué significa el área y qué dice el signo. Tiene tres modos: explorar con ejemplos de la vida diaria, resolver 10 retos que piden reproducir una gráfica y mover el móvil con la mano para ver la gráfica del propio movimiento. Su uso principal es 2.º ESO (MRU) y 4.º ESO (MRU y MRUA); en 3.º ESO sirve para posición, trayectoria, espacio recorrido, velocidad y aceleración.

| Dato | Detalle |
| --- | --- |
| Enlace | [jrgrijota.github.io/simulacion-cinematica](https://jrgrijota.github.io/simulacion-cinematica/) |
| Cursos | 2.º, 3.º y 4.º ESO |
| Materia | Física y Química |
| Duración orientativa | 15–20 minutos de explicación con la simulación proyectada; los retos, una sesión completa |
| Material | Proyector o pizarra digital; funciona en navegador, también en móvil y tableta, sin instalar nada. En pantallas estrechas la pista y las gráficas quedan arriba y los controles debajo. «Muévelo tú» va mejor con el dedo en una tableta o en la pizarra digital |
| Conocimientos previos | Leer un punto en unos ejes cartesianos. Para 4.º ESO, la velocidad como cociente entre desplazamiento y tiempo |
| Accesibilidad | Temas SimulaCiencia, oscuro, claro y de alto contraste (botón del engranaje). Ritmo ×½, ×1 y ×2. Se maneja con teclado: barra espaciadora para iniciar o pausar, R para reiniciar y flechas para mover el cursor del tiempo o el móvil. Los resultados y las pausas se leen en voz alta con lector de pantalla |

## Cómo funciona la simulación

Arriba del lienzo está la pista, una regla de −20 a 100 m con el sentido positivo marcado («x +»). Debajo, las tres gráficas comparten el eje del tiempo (de 0 a 20 s) y un cursor vertical discontinuo: el punto de cada gráfica y la posición del móvil en la pista corresponden siempre al mismo instante. Los ejes tienen escala fija (x de −20 a 100 m, v de −10 a 10 m/s, a de −3 a 3 m/s²) para que se puedan comparar distintos movimientos.

En la pista, el móvil lleva una flecha verde de velocidad y otra naranja de aceleración; su longitud es proporcional al valor y su sentido, el del vector. Con «Marcas cada segundo» deja un punto en la pista cada segundo: en el MRU las marcas quedan a la misma distancia; en el MRUA, cada vez más separadas o más juntas.

La simulación tiene tres modos, que se eligen arriba del panel izquierdo.

| Modo | Qué se hace |
| --- | --- |
| Explorar | Elegir «MRU» o «MRUA», ajustar «Posición inicial» (−20 a 100 m), «Velocidad» o «Velocidad inicial» (−10 a 10 m/s, con su equivalencia en km/h) y «Aceleración» (−3 a 3 m/s²), o elegir uno de los «Ejemplos de la vida diaria». En MRUA, la casilla «Se para al llegar a v = 0» hace que frene sin dar marcha atrás |
| Retos | 10 gráficas que hay que reproducir construyendo el movimiento por tramos. Los retos 1 a 5 son de MRU (2.º ESO) y los 6 a 10, de MRUA (4.º ESO). Cada reto tiene una pequeña historia, una «Pista» y, al pulsar «▶ Comprobar», un mensaje que dice si coincide o dónde y por qué se separan las gráficas. Tras dos intentos fallidos aparece «Ver solución». La opción «Libre» sirve para preparar ejemplos de clase |
| Muévelo tú | El alumno arrastra el móvil con el ratón o el dedo (o con las flechas del teclado) durante 20 s y ve la gráfica x‑t y v‑t de su propio movimiento. En «Gráfica que seguir» puede elegir una de tres gráficas y tratar de mantenerse dentro de una franja; al final se da el porcentaje de tiempo dentro |

Los ejemplos de la vida diaria son: «Persona que pasea (1,5 m/s)», «Persona que corre (4 m/s)», «Coche por una calle (8,5 m/s ≈ 30 km/h)», «Persona que vuelve hacia el origen», «Coche que da marcha atrás (−2 m/s)» (MRU), y «Coche que arranca despacio», «Coche que frena en un semáforo» y «Avanza frenando y vuelve» (MRUA).

En los retos, cada tramo tiene una duración y un valor: la velocidad en los retos de MRU (cambia de golpe de un tramo a otro) y la aceleración en los de MRUA (la velocidad es continua). El reto da la gráfica objetivo en amarillo discontinuo y el movimiento del alumno se dibuja encima. En los retos 5, 6 y 10 la gráfica objetivo es la v‑t, y el enunciado dice de dónde sale el móvil, porque la v‑t no lo indica.

En «Ver» se eligen las gráficas visibles, el móvil y estas ayudas:

- **«Pendiente de x‑t (velocidad)».** Dibuja la recta tangente a la x‑t en el cursor y rotula «pendiente = v = … m/s».
- **«Área bajo v‑t (desplazamiento)».** Sombrea el área entre la v‑t y el eje (por encima, positiva; por debajo, negativa) y rotula «área = Δx = … m».
- **«Dejar la anterior (en gris)».** Conserva el recorrido anterior para compararlo con el nuevo.
- **«Pausar en los momentos clave».** Detiene la simulación cuando el móvil se para o cambia de sentido, con un rótulo como «Cambia de sentido: v = 0, a = −1,0 m/s²».

La barra superior tiene «Iniciar», «Reiniciar», el ritmo (×½, ×1, ×2) y el deslizador «Instante», que lleva el cursor a cualquier momento del recorrido ya hecho. El desplegable «Datos en el instante del cursor» da t, x, v (también en km/h), a, la distancia recorrida y el desplazamiento. «Tabla de valores» da t, x, v y a cada segundo y se puede copiar a una hoja de cálculo. «Ecuaciones del movimiento» escribe las ecuaciones con los datos del ejemplo (por ejemplo, x = 0 + 7 · t − 0,5 · t²) y las evalúa en el instante del cursor. «Ideas clave» resume las cinco ideas de la simulación.

Si el móvil llega a un extremo de la pista, el recorrido acaba ahí y se avisa. En la v‑t, si la velocidad sale de ±10 m/s, la gráfica se corta y se indica «La gráfica se sale de la escala».

## Uso en cada curso

En 2.º ESO la simulación trabaja las gráficas x‑t y v‑t del MRU, incluido estar parado y volver. En 3.º ESO trabaja posición, trayectoria, espacio recorrido, desplazamiento, velocidad media e instantánea y aceleración. En 4.º ESO trabaja las magnitudes, ecuaciones y gráficas del MRU y del MRUA. Los saberes y criterios citados son los del currículo LOMLOE de la Comunidad de Madrid.

### 2.º ESO: gráficas del MRU

*13–14 años · 8th grade en EE. UU. · Year 9 en Reino Unido*

**Saberes básicos.** Bloque D: «Predicción de movimientos sencillos a partir de los conceptos de la cinemática, formulando hipótesis comprobables sobre valores futuros de estas magnitudes a través de la interpretación de gráficas o el trabajo experimental. Introducción a la Cinemática. El movimiento. Sistemas de referencia. Representaciones gráficas espacio-tiempo y velocidad-tiempo en el movimiento rectilíneo y uniforme».

**Criterios de evaluación.** 1.1 (identificar los fenómenos fisicoquímicos cotidianos más relevantes utilizando la terminología científica adecuada), 2.2 (seleccionar la mejor manera de comprobar o refutar las hipótesis formuladas) y 3.1 (utilizar datos en diferentes formatos para interpretar y comunicar información relativa a un proceso fisicoquímico concreto).

**Objetivos.** Situar la posición respecto a un origen y un sentido positivo. Reconocer que una gráfica x‑t no es el camino del móvil. Leer la velocidad de un MRU como la pendiente de la x‑t y como el valor de una v‑t horizontal. Interpretar los tramos horizontales (parado) y descendentes (vuelve, velocidad negativa). Calcular x = x₀ + v · t.

**Secuencia de explicación (15–20 min).**

1. Modo «Explorar», ejemplo «Persona que pasea (1,5 m/s)», con «Marcas cada segundo». Antes de pulsar «Iniciar», preguntar qué forma tendrá la x‑t (la propia simulación lo invita a predecir). La persona deja marcas a la misma distancia y la x‑t es una recta: 1,5 m más en cada segundo. A los 20 s está en x = 30 m.
2. Activar «Dejar la anterior (en gris)» y elegir «Persona que corre (4 m/s)». Las dos rectas salen del mismo punto: la más inclinada es la del móvil más rápido. A los 20 s está en x = 80 m. Activar «Pendiente de x‑t» y mover el cursor: la pendiente vale siempre 4 m/s.
3. Mirar la v‑t de los dos movimientos: rectas horizontales en 1,5 y en 4 m/s. En el MRU la velocidad no cambia; la a‑t es 0 todo el rato.
4. «Persona que vuelve hacia el origen»: sale de x = 60 m con v = −2 m/s. La x‑t baja y la v‑t está por debajo del eje. Insistir: la persona no «baja», va hacia la izquierda; el signo menos indica el sentido. A los 20 s está en x = 20 m.
5. Modo «Retos», reto 3 «Parada en el quiosco». Leer la gráfica por tramos: de 0 a 30 m en 6 s (5 m/s), 6 s parado, de 30 a 50 m en 8 s (2,5 m/s). Construir los tramos y pulsar «▶ Comprobar». Si se olvida el tramo parado, el mensaje lo pregunta: «¿Has contado los tramos en los que está parado?».
6. Reto 2 «Ida y vuelta» o reto 4 «Vuelta a casa» como ejercicio para el alumnado: velocidades negativas y cruce del origen.

### 3.º ESO: posición, desplazamiento y velocidad

*14–15 años · 9th grade en EE. UU. · Year 10 en Reino Unido*

**Saberes básicos.** Bloque D: «Predicción de movimientos sencillos a partir de los conceptos de la cinemática, formulando hipótesis comprobables sobre valores futuros de estas magnitudes, validándolas a través del cálculo numérico, la interpretación de gráficas o el trabajo experimental. Tipos de magnitudes escalares y vectoriales. Concepto de posición, trayectoria y espacio recorrido. Velocidad media, velocidad instantánea y aceleración».

**Criterios de evaluación.** 1.1 (comprender y explicar los fenómenos fisicoquímicos cotidianos a partir de los principios, teorías y leyes científicas adecuadas), 1.2 (resolver los problemas planteados razonando los procedimientos y expresando adecuadamente los resultados), 3.1 (emplear datos en diferentes formatos para interpretar y comunicar información) y 3.2 (utilizar adecuadamente las unidades de medida y las herramientas matemáticas).

**Objetivos.** Distinguir posición, desplazamiento y distancia recorrida. Reconocer la velocidad como magnitud vectorial (valor y sentido). Calcular la velocidad media y compararla con la instantánea. Introducir la aceleración como cambio de velocidad en cada segundo.

**Secuencia de explicación (15–20 min).**

1. Modo «Retos», reto 2 «Ida y vuelta» (4 m/s durante 10 s y −4 m/s durante 10 s), con la solución construida en «Libre» o tras resolverlo. Abrir «Datos en el instante del cursor». A los 20 s la posición es 0, el desplazamiento es 0 m y la distancia recorrida es 80 m. La trayectoria es una recta; la gráfica x‑t es un «tejado», no el camino.
2. Reto 3 «Parada en el quiosco»: velocidad media en los 20 s = 50 m / 20 s = 2,5 m/s. Mover el cursor: la velocidad instantánea vale 5, 0 y 2,5 m/s según el tramo. La media no es la velocidad «de casi siempre».
3. Velocidad como vector: «Coche que da marcha atrás (−2 m/s)». La flecha verde apunta hacia la izquierda y el valor es negativo. Comparar con «Persona que corre»: la rapidez de cada una es el valor sin signo.
4. Aceleración: modo «Explorar», «MRUA», ejemplo «Coche que arranca despacio» (a = 0,5 m/s²) con «Marcas cada segundo». La v‑t sube 0,5 m/s cada segundo; las marcas se separan cada vez más. Usar la tabla de valores para comprobarlo.
5. Velocidad en km/h: con «Coche por una calle (8,5 m/s ≈ 30 km/h)» hacer el cambio de unidades y comprobarlo con el dato en km/h del panel.

### 4.º ESO: MRU y MRUA

*15–16 años · 10th grade en EE. UU. · Year 11 en Reino Unido*

**Saberes básicos.** Bloque D: «Predicción y comprobación, utilizando la experimentación y el razonamiento matemático, de las principales magnitudes, ecuaciones y gráficas que describen el movimiento de un cuerpo, relacionándolo con situaciones cotidianas y con la mejora de la calidad de vida. Movimiento rectilíneo y uniforme. Movimiento rectilíneo uniformemente acelerado».

**Criterios de evaluación.** 1.1 (comprender y explicar con rigor los fenómenos fisicoquímicos cotidianos), 1.2 (resolver los problemas planteados expresando los resultados con corrección y precisión), 2.2 (predecir respuestas que se puedan comprobar de forma experimental o deductiva, aplicando el razonamiento lógico-matemático) y 3.2 (utilizar adecuadamente las unidades y las herramientas matemáticas).

**Objetivos.** Escribir e interpretar x = x₀ + v₀ · t + ½ · a · t² y v = v₀ + a · t. Relacionar las tres gráficas del MRUA: parábola en x‑t, recta inclinada en v‑t y recta horizontal en a‑t. Obtener la aceleración como pendiente de la v‑t y el desplazamiento como área bajo la v‑t. Distinguir acelerar y frenar por los signos de v y a, no por el signo de a.

**Secuencia de explicación (15–20 min).**

1. Repaso rápido del MRU con «Persona que corre (4 m/s)»: recta en x‑t, horizontal en v‑t. Activar «Área bajo v‑t»: a los 10 s el área es 4 · 10 = 40 m, igual a lo que ha avanzado.
2. «Coche que frena en un semáforo» (v₀ = 10 m/s, a = −2 m/s², «Se para al llegar a v = 0»). Predecir cuándo se para: 10 / 2 = 5 s. La v‑t baja en línea recta hasta 0 y la x‑t se curva hasta quedar horizontal. Área del triángulo = ½ · 5 · 10 = 25 m; comprobar que el coche se para en x = 25 m. Abrir «Ecuaciones del movimiento»: a partir de t = 5 s las ecuaciones del MRUA ya no valen.
3. Quitar «Se para» con «Avanza frenando y vuelve» (v₀ = 7 m/s, a = −1 m/s²) y activar «Pausar en los momentos clave». En t = 7 s se detiene: «Cambia de sentido: v = 0, a = −1,0 m/s²». La velocidad es 0 un instante, pero la aceleración no. La cima de la parábola está en x = 24,5 m.
4. Signos: después de la pausa, el coche vuelve con v negativa y a negativa: acelera hacia la izquierda. Frena cuando v y a tienen signos contrarios. Comprobarlo con el reto 10 «Marcha atrás», que frena con aceleración positiva.
5. Retos 6 a 9 para el alumnado, en parejas. El 6 «Arranca el coche» da la v‑t: la pendiente del primer tramo es la aceleración (1 m/s²). El 8 «La montaña» desmonta la idea de que la gráfica es una cuesta.
6. Modo «Muévelo tú» como cierre: un alumno mueve el móvil en la pizarra digital intentando seguir la gráfica 2 «Ida y vuelta» y el resto comenta qué debe hacer en cada tramo.

## Concepciones alternativas que ayuda a corregir

La simulación ataca sobre todo la confusión entre la gráfica y el camino del móvil, la idea de que velocidad negativa significa frenar y la de que v = 0 implica a = 0. Cada fila indica la idea previa frecuente y cómo desmontarla con la simulación.

| Idea del alumnado | Idea correcta | Cómo mostrarlo |
| --- | --- | --- |
| «La gráfica es el camino que sigue el móvil» | La gráfica dice cómo cambia una magnitud con el tiempo; el móvil siempre va en línea recta | Reto 8 «La montaña»: la x‑t sube y baja, pero el coche avanza, se para y vuelve por la misma pista |
| «Si la gráfica x‑t baja, el móvil baja una cuesta o frena» | Si la x‑t baja, el móvil se mueve hacia el sentido negativo | «Persona que vuelve hacia el origen»: x‑t descendente y persona andando hacia la izquierda |
| «Velocidad negativa significa que frena» | El signo de v da el sentido; frena cuando v y a tienen signos contrarios | Reto 10 «Marcha atrás»: v negativa todo el rato y, en el tercer tramo, frena con a positiva |
| «Aceleración negativa significa frenar» | Con v negativa, una a negativa hace que vaya cada vez más deprisa | «Avanza frenando y vuelve» después de t = 7 s: v y a negativas, las marcas se separan |
| «Si la velocidad es 0, la aceleración también es 0» | En el instante en que cambia de sentido, v = 0 pero a sigue valiendo lo mismo | «Pausar en los momentos clave» en «Avanza frenando y vuelve»: «v = 0, a = −1,0 m/s²» |
| «Un tramo horizontal en x‑t es velocidad constante, como en la v‑t» | Horizontal en x‑t es estar parado; horizontal en v‑t es velocidad constante | Reto 3: el tramo parado es horizontal en x‑t y está en v = 0 en la v‑t |
| «Distancia recorrida y desplazamiento son lo mismo» | Solo coinciden si el móvil no cambia de sentido | Reto 2 «Ida y vuelta»: 80 m recorridos y desplazamiento 0 |
| «Las dos gráficas de un mismo movimiento deben tener la misma forma» | La v‑t es la pendiente de la x‑t: una recta en x‑t es horizontal en v‑t; una parábola, una recta inclinada | Ver las tres gráficas a la vez en cualquier ejemplo del MRUA |

## Simplificaciones que conviene conocer

La simulación prioriza que las gráficas se lean con claridad y se puedan comparar. Para ello hace estas simplificaciones; conviene conocerlas para no reforzar ideas incorrectas sin querer.

1. **Movimiento en una dimensión y móvil puntual.** La posición es la de un punto del móvil (el centro del coche o los pies de la persona). No hay curvas ni trayectorias en el plano.
2. **Cambios de velocidad instantáneos en el MRU por tramos.** En los retos de MRU la velocidad salta de un valor a otro sin tiempo de transición, algo imposible en la realidad (haría falta una aceleración infinita). Por eso en esos retos no se dibuja la a‑t y la simulación lo explica en su lugar.
3. **Aceleración constante por tramos.** En el MRUA la aceleración cambia de golpe entre tramos. Un coche real acelera y frena de forma más suave.
4. **No hay causas del movimiento.** No aparecen fuerzas, rozamiento ni masa: la simulación es solo de cinemática. Para las fuerzas se pueden usar otras simulaciones de la web.
5. **Escalas y valores de clase.** Los valores (hasta 10 m/s y 3 m/s²) se han elegido para que el movimiento quepa en 120 m y 20 s. Un coche en ciudad va a unos 8 a 14 m/s y frena con unos 3 a 8 m/s².
6. **La pista se acaba.** Si el móvil llega a −20 m o a 100 m, el recorrido termina ahí. Fuera de la simulación el movimiento seguiría.
7. **«Muévelo tú» no da la aceleración.** La velocidad se calcula como la pendiente media del último cuarto de segundo, como hacen los sensores de movimiento. La aceleración de un movimiento hecho a mano cambia tan deprisa que su gráfica sería ilegible, y no se dibuja.

## Ficha de actividades del alumnado

La [ficha de actividades](https://simulaciencia.es/fichas/cinematica/) sigue el esquema predice, observa y explica. Cada actividad enlaza a la simulación ya preparada, así que funciona en el aula de informática, con tabletas o como tarea en casa. Se descarga en Word y LibreOffice para adaptarla.

| Curso | Actividades | Duración orientativa |
| --- | --- | --- |
| 2.º ESO | Actividades 1 a 4, retos 1 a 5 y problemas 1 y 2 de Aplica lo aprendido | Una sesión de 50–55 minutos |
| 3.º ESO | Actividades 1 a 5 y problemas 1 a 3 | Una sesión, o dos si se hacen los retos |
| 4.º ESO | Ficha completa, con los retos 6 a 10 y Para ampliar | Dos sesiones |

La tabla de «Antes de empezar» recoge cinco ideas previas sobre las gráficas del movimiento. Conviene no corregirla al principio: el alumnado vuelve a ella en «Revisa tus ideas». Los retos guardan en el navegador cuáles se han superado (aparecen con ✓ en la lista), lo que permite al profesorado comprobar el avance en el ordenador de cada alumno.

### Soluciones

| Apartado | Solución |
| --- | --- |
| Antes de empezar | Todas falsas. a) La gráfica no es el camino: el móvil va en línea recta (actividad 1 y reto 8). b) Si la x‑t baja, el móvil va hacia el sentido negativo (actividad 3). c) Horizontal en x‑t es estar parado (actividad 2). d) Velocidad negativa es sentido negativo; frena si v y a tienen signos contrarios (actividad 6). e) Cuando cambia de sentido, v = 0 pero a no (actividad 7) |
| Actividad 1 | La x‑t es una recta que sube; la persona va en línea recta y deja marcas a la misma distancia. En 20 s llega a x = 30 m: 1,5 m cada segundo. La recta de la persona que corre es más inclinada y llega a 80 m. Cuanto más inclinada la x‑t, más rápido. La gráfica no es el camino |
| Actividad 2 | Tramos: 0–6 s de 0 a 30 m (v = 5 m/s); 6–12 s en 30 m (v = 0, parado); 12–20 s de 30 a 50 m (v = 2,5 m/s). En la v‑t: tres escalones a 5, 0 y 2,5 m/s. Un tramo horizontal en x‑t es v = 0 |
| Actividad 3 | La x‑t baja de 60 a 20 m en 20 s; la v‑t está en −2 m/s, por debajo del eje; la flecha verde apunta a la izquierda. Velocidad negativa significa moverse en el sentido negativo del eje, hacia el origen. x = 60 − 2 · t |
| Actividad 4 | Ida y vuelta: posición final 0 m, desplazamiento 0 m, distancia recorrida 80 m. Velocidad media (desplazamiento / tiempo) = 0 m/s; rapidez media (distancia / tiempo) = 4 m/s. Solo coinciden si el móvil no cambia de sentido |
| Actividad 5 | Coche que arranca: a = 0,5 m/s². Tabla: t = 0, 2, 4, 6 s → v = 0; 1; 2; 3 m/s. La v aumenta 0,5 m/s cada segundo; las marcas se separan cada vez más. La v‑t es una recta inclinada y la x‑t, una curva (parábola). La a‑t es horizontal en 0,5 m/s² |
| Actividad 6 | Semáforo: se para en t = 10 / 2 = 5 s. Área del triángulo = ½ · 5 · 10 = 25 m, y el coche se para en x = 25 m. v y a tienen signos contrarios: frena. Después de pararse, la x‑t es horizontal y v = 0 |
| Actividad 7 | Avanza frenando y vuelve: se para un instante en t = 7 s, en x = 24,5 m, con v = 0 y a = −1 m/s². Después vuelve con v negativa y cada vez más rápido, porque v y a tienen el mismo signo. Vuelve a x = 0 en t = 14 s. La x‑t parece una montaña pero el movimiento es rectilíneo |
| Retos (tramos) | 1: 20 s a 2 m/s. 2: 10 s a 4 m/s y 10 s a −4 m/s. 3: 6 s a 5 m/s, 6 s a 0, 8 s a 2,5 m/s. 4 (x₀ = 80 m): 6 s a −10 m/s, 4 s a 0, 10 s a −3 m/s. 5 (x₀ = 10 m): 5 s a 6 m/s, 5 s a 0, 10 s a −3 m/s. 6 (v₀ = 0): 8 s a 1 m/s², 8 s a 0. 7 (v₀ = 10 m/s): 5 s a −2 m/s², 15 s a 0. 8 (v₀ = 8 m/s): 16 s a −1 m/s². 9 (v₀ = 0): 4 s a 2 m/s², 6 s a 0, 4 s a −2 m/s², 6 s a 0. 10 (x₀ = 60 m, v₀ = 0): 4 s a −2 m/s², 4 s a 0, 4 s a 2 m/s², 8 s a 0 |
| Aplica lo aprendido | 1) v = (35 − 5) / 10 = 3 m/s; x = 5 + 3 · t; en t = 20 s, x = 65 m. 2) 72 km/h = 20 m/s; t = 500 / 20 = 25 s. 3) Tramo A: v = 2 m/s; B: parado; C: v = −4 m/s, vuelve hacia el origen. 4) a = (0 − 20) / 4 = −5 m/s²; Δx = ½ · 4 · 20 = 40 m. 5) v = 0 + 3 · 6 = 18 m/s; x = ½ · 3 · 36 = 54 m |
| Para ampliar | 1) En la x‑t del reto 8, la pendiente en t = 0 es 8 m/s; en t = 8 s es 0; en t = 12 s es −4 m/s. 2) Área bajo la v‑t del reto 9: 16 + 48 + 16 = 80 m, la posición final. 3) Reto 10: entre 8 y 12 s, v < 0 y a > 0: frena aunque la aceleración sea positiva |
