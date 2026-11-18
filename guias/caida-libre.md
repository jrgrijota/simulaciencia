# Guía docente: simulación de caída libre y tiro parabólico

## Ficha rápida

La simulación de caída libre y tiro parabólico lanza un objeto cerca del suelo y deja una estela de puntos a intervalos iguales de tiempo, con los vectores velocidad y aceleración en cada instante. Muestra que la caída libre, el tiro vertical, el tiro horizontal y el tiro oblicuo son el mismo movimiento, con la aceleración de la gravedad siempre hacia abajo, y que solo cambian la altura y la velocidad con que empiezan. Un botón quita o pone el aire para ver por qué una pluma y una bola de acero caen distinto en el aula y a la vez en la Luna. Su uso principal es 4.º ESO y 1.º Bachillerato.

| Dato | Detalle |
| --- | --- |
| Enlace | [jrgrijota.github.io/simulacion-caida-libre](https://jrgrijota.github.io/simulacion-caida-libre/) |
| Cursos | 4.º ESO y 1.º Bachillerato |
| Materia | Física y Química |
| Duración orientativa | 15–20 minutos de explicación con la simulación proyectada; el modo «Reto» da para otra sesión de problemas |
| Material | Proyector o pizarra digital; funciona en navegador, también en móvil y tableta, sin instalar nada. En pantallas estrechas el lienzo queda arriba y los controles debajo; para explicar es mejor una pantalla grande |
| Conocimientos previos | Para 4.º ESO, el movimiento rectilíneo uniforme y la idea de aceleración. Para 1.º Bachillerato, el MRUA, la descomposición de un vector en componentes y las razones trigonométricas |
| Accesibilidad | Cuatro temas visuales (SimulaCiencia, oscuro, claro y alto contraste) en el botón del engranaje. Velocidad ×1, ×0,5 y ×0,25, y un deslizador de instante con botones − y + para avanzar paso a paso. Los lanzamientos, la llegada al suelo y la altura máxima se anuncian con lector de pantalla. Teclas: espacio para lanzar o pausar y R para reiniciar |

## Cómo funciona la simulación

La simulación tiene tres modos, «Vertical», «Parabólico» y «Reto», que se eligen arriba del panel izquierdo. El lienzo muestra el suelo, el punto de lanzamiento (una persona sobre una plataforma o una azotea si hay altura), unos ejes con la escala en metros y, arriba, una franja con el nombre del movimiento, el lugar y el valor de g. La escala del dibujo se ajusta sola para que quepa toda la trayectoria.

| Modo | Qué se ve |
| --- | --- |
| Vertical | Caída libre y tiro vertical. «Altura inicial (h₀)» de 0 a 100 m y «Velocidad inicial (v₀)» de 30 m/s hacia abajo a 30 m/s hacia arriba; en el centro, 0 m/s («soltar»). Ejemplos: «Caída libre» (45 m, 0 m/s), «Lanzar hacia arriba» (0 m, 20 m/s ↑) y «Lanzar hacia abajo» (30 m, 10 m/s ↓). Mientras el objeto sube, los puntos de la estela son huecos, y cuando baja son rellenos, para que la subida y la bajada no se confundan en la misma vertical |
| Parabólico | Tiro horizontal y oblicuo. «Altura inicial» de 0 a 50 m, «Rapidez inicial» de 0 a 30 m/s y «Ángulo de lanzamiento» de −30° (hacia abajo) a 90° (vertical). Ejemplos: «Tiro horizontal» (20 m, 10 m/s, 0°), «Desde el suelo» (0 m, 20 m/s, 45°) y «Desde una azotea» (20 m, 15 m/s, 30°) |
| Reto | Cuatro problemas con datos al azar: «Hasta el balcón» y «¿Cuánto tarda?» (4.º ESO) y «A la diana» y «Dos ángulos» (Bachillerato). Siempre en la Tierra y sin aire. Se escribe la respuesta calculada en el cuaderno, se pulsa «Comprobar» y la simulación lanza con ese valor |

Grupo «Qué se lanza y dónde» (modos Vertical y Parabólico):

- **Objeto.** Bola de acero, balón de baloncesto, pelota de tenis, pelota de ping-pong, bola de papel o pluma, con su masa. Sin aire, el objeto no cambia nada; con aire, cada uno se frena de forma distinta.
- **Lugar.** Tierra (g = 9,8 m/s²), Luna (1,6 m/s²), Marte (3,7 m/s²) o Júpiter (24,8 m/s²).
- **«Con aire».** Solo en la Tierra. Con la casilla marcada, la franja avisa de que el movimiento ya no es caída libre o de que la trayectoria ya no es una parábola, y en el modo Parabólico se dibuja en gris la trayectoria del mismo lanzamiento sin aire.
- **«Comparar con otro objeto»** (modo Vertical). Suelta a la vez otro objeto, a la derecha, desde la misma altura.
- **«Soltar otra bola a la vez»** (modo Parabólico). Una bola cae desde el punto de lanzamiento en el mismo instante: llega al suelo a la vez que la lanzada.
- **«Conservar trayectorias anteriores»** (modo Parabólico). Deja hasta cinco trayectorias en gris con su ángulo, para comparar alcances.

Grupo «Qué se ve»:

- **«Vectores velocidad y aceleración».** La velocidad en azul, tangente a la trayectoria, con sus componentes vₓ y vᵧ en el modo Parabólico, y la aceleración en naranja, siempre hacia abajo. Las dos flechas están a escalas distintas, y la leyenda lo dice.
- **«Proyecciones sobre los ejes».** Dos «sombras» del objeto, una sobre el suelo y otra sobre el eje vertical, cada una con su propia estela: la del suelo avanza con puntos igual de separados (MRU) y la del eje, con puntos cada vez más separados al bajar (MRUA).
- **«Estela: un punto cada»** 0,1 s, 0,2 s o 0,5 s.
- **«Pausar en la altura máxima».** La animación se detiene en el punto más alto para comentar los vectores.
- **«Ocultar resultados».** Esconde el tiempo de vuelo, la altura máxima, el alcance y la velocidad al llegar, para que se calculen antes de lanzar. Las gráficas solo muestran lo ya recorrido.

En la barra de abajo están «Lanzar» (que pasa a «Pausar», «Reanudar» y «Lanzar otra vez»), «Reiniciar», la velocidad ×0,25, ×0,5 o ×1 y el botón «Gráficas», que añade bajo el lienzo las gráficas posición–tiempo y velocidad–tiempo de las dos componentes. Debajo, la fila «Instante» permite ir a cualquier momento del lanzamiento con el deslizador o con los botones − y +, que avanzan un intervalo de la estela.

El desplegable «Datos del movimiento» da, en el instante actual, el tiempo, la posición x, la altura y, vₓ, vᵧ (con una flecha que indica si sube o baja) y la rapidez |v|, y en «Resultados del lanzamiento», el tiempo de vuelo, la altura máxima, el alcance y la velocidad al llegar. «Ecuaciones del movimiento» escribe las ecuaciones con los valores sustituidos, por ejemplo «y = 20 + 7,5 · t − 4,9 · t²», y debajo los resultados calculados con ellas. «Ideas clave» resume cinco ideas: todos los objetos caen igual sin aire, la aceleración es siempre g hacia abajo, en el punto más alto la velocidad vertical es cero, los dos movimientos son independientes y el aire rompe la parábola.

Sin aire, la simulación usa las ecuaciones exactas, así que sus números coinciden con los de un problema resuelto en el cuaderno con g = 9,8 m/s².

## Uso en cada curso

En 4.º ESO la simulación trabaja la caída libre y el tiro vertical como MRUA, la predicción de movimientos a partir de sus ecuaciones y la idea de que todos los cuerpos caen igual en ausencia de aire. En 1.º Bachillerato trabaja la composición de movimientos: el tiro horizontal y el tiro oblicuo como suma de un MRU y un MRUA independientes. Los saberes y criterios citados son los del currículo LOMLOE de la Comunidad de Madrid.

### 4.º ESO: caída libre y tiro vertical

*15–16 años · 10th grade en EE. UU. · Year 11 en Reino Unido*

**Saberes básicos.** Bloque D: «Predicción de movimientos sencillos a partir de los conceptos de la cinemática, formulando hipótesis comprobables sobre valores futuros de estas magnitudes, validándolas a través del cálculo numérico, la interpretación de gráficas o el trabajo experimental» y «Ley de la gravitación universal: atracción entre los cuerpos que componen el universo. Concepto de peso». Bloque A: «Utilización de herramientas matemáticas adecuadas en diferentes escenarios científicos y de aprendizaje» y «el laboratorio o los entornos virtuales».

**Criterios de evaluación.** 1.1 (comprender y explicar con rigor los fenómenos fisicoquímicos cotidianos a partir de los principios, teorías y leyes científicas adecuadas), 1.2 (resolver los problemas planteados mediante las leyes adecuadas, expresando los resultados con corrección), 2.2 (predecir respuestas que se puedan comprobar de forma experimental o deductiva) y 3.2 (utilizar adecuadamente las unidades y las herramientas matemáticas).

**Objetivos.** Reconocer la caída libre y el tiro vertical como movimientos rectilíneos uniformemente acelerados con a = g hacia abajo. Explicar que, sin aire, todos los cuerpos caen con la misma aceleración, sea cual sea su masa. Calcular el tiempo de caída, la altura máxima y la velocidad al llegar al suelo. Interpretar las gráficas posición–tiempo y velocidad–tiempo de un lanzamiento vertical.

**Secuencia de explicación (15–20 min).**

1. Modo «Vertical», ejemplo «Caída libre» (45 m, 0 m/s), estela cada 0,2 s. Preguntar antes: ¿cae siempre a la misma velocidad? Lanzar. Los puntos de la estela están cada vez más separados: en cada 0,2 s recorre más distancia que en el anterior. Llega en 3,03 s a 29,7 m/s.
2. Marcar «Comparar con otro objeto», con la pluma y la bola de acero, y marcar «Con aire». La bola llega en 3,05 s; la pluma, a 0,8 m/s, tarda casi un minuto. Preguntar: ¿por qué? Quitar el aire: llegan juntas en 3,03 s. Lo que las separaba era el aire, no la masa. Cambiar el lugar a la Luna, que no tiene aire: caen juntas en 7,5 s, como la pluma y el martillo del Apolo 15.
3. Volver a la Tierra sin aire y abrir «Ecuaciones del movimiento». Comprobar en la pizarra que 45 = 4,9 · t² da t = 3,03 s y que v = 9,8 · 3,03 = 29,7 m/s.
4. Ejemplo «Lanzar hacia arriba» (0 m, 20 m/s ↑), con «Pausar en la altura máxima». Antes de lanzar, preguntar qué valen la velocidad y la aceleración arriba del todo. En la pausa, la flecha de la velocidad ha desaparecido (vᵧ = 0) y la de la aceleración sigue igual, hacia abajo. Llega a 20,4 m en 2,04 s.
5. Reanudar. La bajada es simétrica de la subida: los puntos rellenos caen sobre los huecos, tarda otros 2,04 s y llega al suelo a 20 m/s, la misma rapidez con que salió. Mientras sube, la velocidad apunta hacia arriba y la aceleración hacia abajo: por eso frena.
6. Pulsar «Gráficas». La posición–tiempo es una parábola con el máximo en 2,04 s; la velocidad–tiempo es una recta de pendiente −9,8 m/s², que corta el eje en el mismo instante. La pendiente es la misma subiendo y bajando: la aceleración no cambia.
7. Modo «Reto», «Hasta el balcón» y «¿Cuánto tarda?». El alumnado calcula en el cuaderno, escribe el resultado y comprueba. Vale la respuesta redondeada a dos cifras significativas.

### 1.º Bachillerato: composición de movimientos

*16–17 años · 11th grade en EE. UU. · Year 12 en Reino Unido*

**Saberes básicos.** Bloque D: «Variables cinemáticas en función del tiempo en los distintos movimientos que puede tener un objeto, con o sin fuerzas externas: resolución de situaciones reales relacionadas con la física y el entorno cotidiano», «Relación de la trayectoria de un movimiento compuesto con las magnitudes que lo describen» y «Composición de movimientos: tiro horizontal y tiro oblicuo».

**Criterios de evaluación.** 1.2 (resolver problemas de manera experimental y analítica, utilizando principios, leyes y teorías de la física), 2.1 (analizar y comprender la evolución de los sistemas naturales utilizando modelos, leyes y teorías), 3.2 (utilizar con rigor las unidades y elaborar e interpretar gráficas que relacionan variables físicas) y 5.2 (reproducir en laboratorios, reales o virtuales, procesos físicos modificando las variables que los condicionan).

**Objetivos.** Descomponer la velocidad inicial en sus componentes. Describir el tiro horizontal y el oblicuo como la composición de un MRU en horizontal y un MRUA en vertical, independientes entre sí. Escribir las ecuaciones x(t) e y(t) y obtener de ellas el tiempo de vuelo, la altura máxima y el alcance. Justificar por qué dos ángulos complementarios dan el mismo alcance desde el suelo y por qué el aire reduce el alcance y el ángulo óptimo.

**Secuencia de explicación (15–20 min).**

1. Modo «Parabólico», ejemplo «Tiro horizontal» (20 m, 10 m/s, 0°), con «Proyecciones sobre los ejes». La sombra del suelo deja puntos igual de separados (MRU, 10 m/s); la del eje vertical, puntos cada vez más separados (MRUA), igual que una caída libre.
2. Marcar «Soltar otra bola a la vez». Preguntar antes cuál llegará primero. Llegan juntas, en 2,02 s, porque el tiempo de caída solo depende de la altura. La bola lanzada cae a 20,2 m del pie de la azotea.
3. Con los vectores: vₓ no cambia en todo el vuelo; vᵧ crece hacia abajo 9,8 m/s cada segundo. Al llegar, vₓ = 10,0 m/s y vᵧ = 19,8 m/s hacia abajo, y la rapidez es √(10² + 19,8²) = 22,2 m/s.
4. Ejemplo «Desde el suelo» (0 m, 20 m/s, 45°), con «Pausar en la altura máxima». En la cima la velocidad no es cero: queda vₓ = 14,1 m/s, horizontal. Solo en el tiro vertical se para del todo. Altura máxima 10,2 m, alcance 40,8 m, tiempo de vuelo 2,89 s.
5. Marcar «Conservar trayectorias anteriores» y lanzar a 30°, 45° y 60° con 20 m/s. 30° y 60° caen en el mismo punto, 35,3 m: son ángulos complementarios y sen(2α) es igual para los dos. 45° llega más lejos. Comprobarlo con x = v₀² · sen(2α) / g.
6. Marcar «Con aire» con la pelota de tenis. El alcance a 45° baja de 40,8 m a 25,7 m, la trayectoria se vuelve asimétrica (baja más empinada de lo que subió) y la línea gris recuerda la parábola sin aire. Con aire, el ángulo que llega más lejos baja a unos 40°.
7. Ejemplo «Desde una azotea» (20 m, 15 m/s, 30°) con «Ocultar resultados». Plantear el problema: tiempo de vuelo, altura máxima y alcance. Resolverlo, quitar la casilla y comprobar: 2,93 s, 22,9 m y 38,0 m. Para terminar, los retos «A la diana» y «Dos ángulos».

## Concepciones alternativas que ayuda a corregir

La simulación ataca sobre todo la idea de que los cuerpos pesados caen antes y la confusión entre velocidad y aceleración en el punto más alto. Cada fila indica la idea previa frecuente y cómo desmontarla con la simulación.

| Idea del alumnado | Idea correcta | Cómo mostrarlo |
| --- | --- | --- |
| «Los objetos pesados caen más rápido» | Sin aire, todos caen con la misma aceleración g; lo que los separa es el rozamiento con el aire | Comparar pluma y bola de acero desde 45 m: con aire, 56 s frente a 3 s; sin aire, juntas en 3,03 s. En la Luna, juntas en 7,5 s |
| «En el punto más alto la aceleración es cero, porque el objeto está parado» | La aceleración es g hacia abajo en todo el vuelo, también arriba; lo que se anula es la velocidad vertical | «Pausar en la altura máxima» con los vectores: la flecha de la aceleración no cambia, y en la gráfica velocidad–tiempo la recta tiene la misma pendiente antes y después |
| «Mientras sube, la fuerza del lanzamiento lo empuja hacia arriba» | Al soltarlo, la única fuerza (sin aire) es el peso; sube porque lleva velocidad, y frena porque la aceleración va en contra | Vectores en «Lanzar hacia arriba»: velocidad hacia arriba cada vez más corta y aceleración siempre hacia abajo |
| «En el tiro parabólico, en el punto más alto la velocidad es cero» | Solo se anula vᵧ; vₓ sigue igual | «Desde el suelo» con pausa en la cima: queda la flecha horizontal y el panel marca vₓ = 14,1 m/s |
| «Una bala disparada en horizontal tarda más en caer que una que se suelta» | Los dos movimientos son independientes: el tiempo de caída solo depende de la altura | «Soltar otra bola a la vez»: las dos llegan juntas, y las proyecciones verticales coinciden en cada instante |
| «El objeto va recto y luego cae de golpe» | La trayectoria es una parábola desde el primer instante, porque g actúa desde el principio | Estela cada 0,1 s en el tiro horizontal y proyecciones: la sombra vertical empieza a caer desde el lanzamiento |
| «A 45° se llega siempre más lejos» | Solo desde el suelo y sin aire; con altura inicial o con aire, el ángulo óptimo es menor | «Conservar trayectorias»: con aire, 40° llega algo más lejos que 45°; desde la azotea, 30° supera a 45° |

## Simplificaciones que conviene conocer

La simulación prioriza que los números coincidan con los de un problema de clase y que se vea con claridad la composición de movimientos. Conviene conocer estas licencias para no reforzar ideas incorrectas sin querer.

1. **g constante y Tierra plana.** Se toma g = 9,8 m/s² en toda la trayectoria y el suelo es plano. Para alturas de unos cientos de metros la diferencia con la realidad es inapreciable.
2. **El objeto es un punto.** No gira ni rebota: se detiene al tocar el suelo. No hay efecto Magnus (el que curva una pelota con efecto).
3. **Un modelo de aire sencillo.** Con aire, el rozamiento es proporcional al cuadrado de la velocidad y cada objeto queda definido por su velocidad límite: acero 105 m/s, balón 20 m/s, tenis 22 m/s, ping-pong 9 m/s, papel 5 m/s y pluma 0,8 m/s. Son valores orientativos; una pluma real además planea y se balancea. Con aire, la simulación integra paso a paso y las ecuaciones del panel son las del mismo lanzamiento sin aire.
4. **Solo hay aire en la Tierra.** La Luna no tiene atmósfera, pero Marte sí tiene una muy tenue, que la simulación no tiene en cuenta. Júpiter no tiene superficie sólida: está para comparar el valor de g.
5. **Flechas a escalas distintas.** La velocidad y la aceleración no se miden en las mismas unidades, así que su longitud relativa no significa nada. Lo importante es la dirección y cómo cambia cada una.
6. **Las proyecciones son una construcción.** Las «sombras» sobre los ejes no existen en la realidad; sirven para separar los dos movimientos que forman el tiro.
7. **Tolerancia en los retos.** Se da por buena la respuesta redondeada a dos cifras significativas, y en los tiros, caer a menos de 0,5 m del centro de la diana.

## Ficha de actividades del alumnado

La [ficha de actividades](https://simulaciencia.es/fichas/caida-libre/) sigue el esquema predice, observa y explica. Cada actividad enlaza a la simulación ya preparada, así que funciona en el aula de informática, con tabletas o como tarea en casa. Se descarga en Word y LibreOffice para adaptarla.

| Curso | Actividades | Duración orientativa |
| --- | --- | --- |
| 4.º ESO | Actividades 1 a 4, Aplica lo aprendido (1 a 3) y los retos «Hasta el balcón» y «¿Cuánto tarda?» | Una sesión de 50–55 minutos, o dos si se hacen en clase los problemas |
| 1.º Bachillerato | Actividad 1 como repaso, actividades 5 a 7, Aplica lo aprendido (4 y 5) y Para ampliar | Una o dos sesiones |

La tabla de «Antes de empezar» recoge cinco ideas previas sobre la caída de los cuerpos. Conviene no corregirla al principio: el alumnado vuelve a ella en «Revisa tus ideas». Con aire, la pluma tarda casi un minuto en caer desde 45 m: se puede pasar a ×1 o pulsar «Reiniciar» cuando ya se ha visto que la bola llega mucho antes.

### Soluciones

| Apartado | Solución |
| --- | --- |
| Antes de empezar | a) Falsa: sin aire caen juntas (actividad 1). b) Falsa: la aceleración es g hacia abajo también en el punto más alto (actividad 3). c) Verdadera: sube y baja con la misma rapidez al mismo nivel (actividad 3). d) Falsa: llegan a la vez (actividad 5). e) Falsa: en la cima solo se anula la velocidad vertical (actividad 6) |
| Actividad 1 | Con aire: la bola de acero tarda unos 3,05 s y la pluma unos 56 s. Sin aire: las dos, 3,03 s. En la Luna: 7,5 s las dos. Lo que hace caer distinto a la pluma es el aire, no su masa: sin aire, todos los objetos caen con la misma aceleración |
| Actividad 2 | Los puntos están cada vez más separados: en cada intervalo recorre más distancia, así que la velocidad aumenta. Velocidades: 0, 9,8, 19,6 y 29,4 m/s a los 0, 1, 2 y 3 s. t = 3,03 s y v = 29,7 m/s. 45 = ½ · 9,8 · t², t = √(90 / 9,8) = 3,03 s; v = 9,8 · 3,03 = 29,7 m/s. La velocidad aumenta 9,8 m/s cada segundo: eso es g |
| Actividad 3 | Altura máxima 20,4 m en 2,04 s; vuelve al suelo en 4,08 s a 20 m/s. En el punto más alto v = 0 y la aceleración sigue siendo 9,8 m/s² hacia abajo. Mientras sube, la velocidad va hacia arriba y la aceleración hacia abajo, por eso frena. h = v₀² / (2g) = 400 / 19,6 = 20,4 m; t = v₀ / g = 2,04 s |
| Actividad 4 | La posición–tiempo es una parábola (curva) con el máximo en 2,04 s. La velocidad–tiempo es una recta que baja: pasa de +20 a −20 m/s y corta el eje en 2,04 s. La pendiente es −9,8 m/s², la aceleración, y es la misma al subir y al bajar |
| Actividad 5 | Llegan a la vez, en 2,02 s. La sombra del suelo avanza con puntos igual de separados (MRU) y la del eje, con puntos cada vez más separados (MRUA). La bola lanzada cae a 20,2 m. El movimiento horizontal no afecta al vertical: el tiempo de caída solo depende de la altura |
| Actividad 6 | En la cima, vᵧ = 0 y vₓ = 14,1 m/s: la velocidad no es cero, es horizontal. vₓ es igual en todo el vuelo. La aceleración sigue siendo g hacia abajo. Altura máxima 10,2 m, tiempo de vuelo 2,89 s y alcance 40,8 m |
| Actividad 7 | Sin aire: 15°, 30° y 45° dan 20,4 m, 35,3 m y 40,8 m; 60° y 75°, 35,3 m y 20,4 m. Los ángulos complementarios dan el mismo alcance porque sen(2α) = sen(180° − 2α). El máximo, a 45°. Con aire y la pelota de tenis, los alcances bajan (unos 25,7 m a 45°) y el mejor ángulo es menor, unos 40° |
| Aplica lo aprendido | 1) t = √(2 · 80 / 9,8) = 4,04 s; v = 9,8 · 4,04 = 39,6 m/s. 2) h = 15² / 19,6 = 11,5 m; t subida = 15 / 9,8 = 1,53 s; vuelo 3,06 s. 3) En la Luna, t = √(2 · 45 / 1,6) = 7,5 s, frente a 3,03 s en la Tierra: g es unas seis veces menor. 4) t = √(2 · 1,25 / 9,8) = 0,505 s; v₀ = 6 / 0,505 = 11,9 m/s. 5) vₓ = 25 · 0,80 = 20 m/s; vᵧ = 25 · 0,60 = 15 m/s; h = 15² / 19,6 = 11,5 m; t = 2 · 15 / 9,8 = 3,06 s; x = 20 · 3,06 = 61,2 m |
| Para ampliar | 1) x = 15 · cos 30° · t = 13,0 · t; y = 20 + 7,5 · t − 4,9 · t². 2) y = 0 → 4,9 t² − 7,5 t − 20 = 0, t = 2,93 s; x = 38,0 m; altura máxima 20 + 7,5² / 19,6 = 22,9 m. 3) Al llegar, vₓ = 13,0 m/s y vᵧ = 7,5 − 9,8 · 2,93 = −21,2 m/s; rapidez 24,8 m/s, la misma que da la conservación de la energía: √(15² + 2 · 9,8 · 20) = 24,8 m/s. 4) Desde 20 m, a 45° el alcance es 35,8 m, menos que a 30°: con altura inicial el ángulo óptimo es menor de 45° |
