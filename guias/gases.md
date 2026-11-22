# Guía docente: simulación de gases

## Ficha rápida

La simulación de gases muestra un globo de goma y un cilindro con émbolo y, a su lado, un modelo con las moléculas que chocan contra la pared. Esos choques son la presión. Su uso principal es 3.º ESO, con aplicaciones en 2.º y 4.º ESO y un repaso cualitativo en 1.º Bachillerato.

| Dato | Detalle |
| --- | --- |
| Enlace | [jrgrijota.github.io/simulacion-gases](https://jrgrijota.github.io/simulacion-gases/) |
| Cursos | 3.º ESO (uso principal), 2.º ESO, 4.º ESO; repaso cualitativo en 1.º Bachillerato |
| Materia | Física y Química |
| Duración orientativa | 15–20 minutos de explicación con la simulación proyectada |
| Material | Proyector o pizarra digital; funciona en navegador, también en móvil y tableta, sin instalar nada |
| Conocimientos previos | Idea de molécula, temperatura en K y °C, volumen en litros; en 4.º ESO, presión como fuerza por unidad de superficie |
| Accesibilidad | Cuatro temas en «⚙» (SimulaCiencia, Oscuro, Claro y Alto contraste), pantalla completa, teclado (barra espaciadora para pausar, R para reiniciar) y mensajes que leen los lectores de pantalla |

## Cómo funciona la simulación

La pantalla es una escena con tres partes: a la izquierda, el recipiente con sus aparatos y los mandos; en el centro, el modelo de moléculas; a la derecha, el panel que explica lo que pasa y lo que miden los aparatos. Debajo hay una tira de papel con la gráfica. En la cabecera, el carril «Recipiente» elige entre «Globo», la opción inicial, y «Recipiente rígido».

| Recipiente | Qué controla el docente | Qué muestra |
| --- | --- | --- |
| Globo | «Temperatura», de 0 a 500 K (inicial 273 K), o de −273 a 227 °C con el carril K · °C. «Moléculas», de 0 a 500 (inicial 50). Los dos valores se pueden escribir | Un globo de goma atado a una boquilla, con termómetro (sonda en el gas), manómetro y termostato. El globo crece o encoge hasta que dentro y fuera empujan igual: la presión se queda en 1 atm y lo que cambia es el volumen |
| Recipiente rígido | Los mismos mandos y, además, «Volumen», de 0,09 a 4,60 L. Empieza con el volumen que tenía el globo (1,20 L) | Un cilindro de vidrio con el émbolo sujeto y graduado en litros. El volumen solo cambia con el mando: lo que cambia es la presión |
| ⚙ Ajustes | «Color por rapidez» y «Mostrar la velocidad (estelas)», activados; «Tamaño medio del globo», desactivado; «Tamaño de las moléculas» (1–15, inicial 2); pantalla completa y tema visual | Moléculas de turquesa (lentas) a rosa (rápidas), con una estela que marca hacia dónde van, y una circunferencia discontinua con el tamaño medio del globo |

Cuatro elementos sostienen la explicación:

- **El modelo de moléculas.** Es un corte de todo el gas, ampliado. En el globo se ve también el aire de fuera, en gris: son moléculas de verdad a 273 K que chocan con la goma y la empujan hacia dentro. Cada choque contra la pared deja una marca corta.
- **El panel de la derecha.** Un rótulo dice qué está pasando («EQUILIBRIO», «SE INFLA», «SE DESINFLA», «LA GOMA TIRA», «AL LÍMITE», «VACÍO», «CERO ABSOLUTO», «MUY FRÍO», «SUBE LA PRESIÓN»…) y debajo lo explica en una o dos frases. «Lo que miden los aparatos» da presión, volumen, temperatura y moléculas; junto a cada valor aparece «· 2», «/ 2» o «igual» al compararlo con la situación anterior. Al final, los choques contra la pared cada segundo y V / T (globo) o P · V y P / T (rígido).
- **La gráfica.** Un carril elige P–V, V–T o P–T. La plumilla marca un punto cuando el gas se ha estabilizado: espera 5 s (rígido) o 7 s (globo) tras cada cambio y apunta la media de los 3 s siguientes. Guarda los 35 últimos puntos.
- **El momento clave.** Si, con lo demás igual, se lleva un mando al doble o a la mitad y el gas cumple la ley, aparece un sello («LEY DE BOYLE», «LEY DE CHARLES», «LEY DE GAY-LUSSAC», «LEY DE AVOGADRO») y el panel explica la ley con el modelo. A 0 K aparece «CERO ABSOLUTO».

Tiene además un panel de ayuda («?») con las ideas clave y las cuatro leyes, y unos retos opcionales («★ Retos») con un álbum de cinco sellos. Lo conseguido se guarda solo en ese navegador.

### El globo, de principio a fin

El globo es el recipiente más rico para explicar. Con 50 moléculas a 273 K ocupa unos 1,2 L. La goma tiembla un poco porque hay pocas moléculas y los choques no llegan siempre igual; el panel lo explica y un globo real, con miles de trillones de moléculas, no tiembla.

| Situación (273 K) | Qué pasa | Presión |
| --- | --- | --- |
| 0 moléculas | «VACÍO»: el aire de fuera aplasta el globo, que queda arrugado en la boquilla | 0 atm |
| 10 a 200 moléculas | «EQUILIBRIO»: el volumen es proporcional al número de moléculas (unos 0,3 L con 10 y unos 4,6 L con 200) | unos 1,0 atm |
| Unas 260 o más | «LA GOMA TIRA»: la goma, muy estirada, tira hacia dentro (flechas) y el globo casi no crece. Dentro hay más presión que fuera | 1,3 atm con 300; 2,1 atm con 500 |
| Por encima de 2,8 atm | «AL LÍMITE»: la goma está a punto de romperse | 2,8–3 atm |
| Más de 3 atm durante 4 s | «¡HA EXPLOTADO!»: la goma se rompe y las moléculas salen al aire. «↺ Globo nuevo» vuelve a empezar | — |

A 273 K el globo no llega a explotar ni con 500 moléculas. Explota si además se calienta: con 500 moléculas aguanta a 400 K (unas 2,9 atm, «AL LÍMITE») y revienta por encima de unos 450 K; a 500 K revienta con unas 450 moléculas.

### Valores de referencia

Medias de 30 s con 50 moléculas de tamaño 2. Varían unas centésimas de una vez a otra (en el globo, alguna décima).

| Recipiente | Situación | Volumen | Presión | Choques/s |
| --- | --- | --- | --- | --- |
| Globo | 100 K | 0,49 L | 1,07 atm | 43 |
| Globo | 200 K | 0,90 L | 1,05 atm | 41 |
| Globo | 273 K | 1,27 L | 1,08 atm | 40 |
| Globo | 400 K | 1,75 L | 1,04 atm | 38 |
| Globo | 500 K | 2,52 L | 1,00 atm | 37 |
| Globo | 25 / 100 / 200 moléculas | 0,61 / 2,45 / 4,58 L | 1,04 atm | 28 / 56 / 79 |
| Rígido | 136 / 200 / 273 / 400 / 500 K | 1,20 L | 0,49 / 0,75 / 1,03 / 1,61 / 1,85 atm | 38 / 46 / 55 / 67 / 72 |
| Rígido | 0,30 / 0,60 / 2,40 / 4,60 L | — | 4,42 / 2,28 / 0,50 / 0,24 atm | 199 / 102 / 32 / 22 |
| Rígido | 25 / 100 / 200 moléculas | 1,20 L | 0,52 / 1,96 / 4,19 atm | 27 / 105 / 225 |

En el globo, V / T ronda 0,0047 L/K. En el rígido de 1,20 L, P / T ronda 0,0037 atm/K, y P · V se queda entre 1,1 y 1,4 atm·L de 4,6 a 0,3 L.

## Uso en cada curso

En 2.º ESO la simulación sirve para presentar el modelo cinético y las escalas de temperatura; en 3.º ESO, para las leyes de los gases; en 4.º ESO, para el concepto de presión y la ley general. Los saberes citados son los del currículo LOMLOE de la Comunidad de Madrid para Física y Química.

### 2.º ESO: teoría cinética y temperatura

*13–14 años · 8th grade en EE. UU. · Year 9 en Reino Unido*

**Saberes básicos.** Bloque A: «el laboratorio y los entornos virtuales». Bloque B: «Aplicación de la teoría cinético-molecular a observaciones sobre la materia explicando sus propiedades» y «Introducción a la teoría cinética-molecular. Estados de agregación de la materia». Bloque E: «Temperatura. Escalas de temperatura» y «Efectos del calor sobre la materia: cambios de estado y dilataciones».

**Objetivos.** Describir un gas como moléculas en movimiento con vacío entre ellas. Relacionar la temperatura con la rapidez de las moléculas. Convertir entre K y °C. Explicar la dilatación de un gas al calentarlo.

**Secuencia de explicación (15–20 min).**

1. Configuración inicial: globo, 50 moléculas, 273 K. Preguntar qué hay entre las moléculas. Pulsar «⏸ Pausar»: el panel recuerda que entre ellas no hay nada, ni siquiera aire. Reanudar.
2. Pasar el carril a °C: 273 K son 0 °C. Escribir en la pizarra T (K) = t (°C) + 273. Los extremos del mando cambian a −273 °C y 227 °C.
3. Subir a 500 K. Las moléculas van más rápidas y pasan de turquesa a rosa; el panel dice «SE INFLA» y el globo crece hasta unos 2,5 L. Las moléculas siguen igual de grandes: la idea clave de la ayuda.
4. Bajar a 100 K: «SE DESINFLA», unos 0,5 L. Relacionarlo con la dilatación de los gases.
5. Bajar a 0 K: las moléculas se paran, la presión marca 0 atm y el aire de fuera aplasta el globo contra ellas. Presentar el cero absoluto como el límite inferior de la escala Kelvin.

### 3.º ESO: leyes de los gases

*14–15 años · 9th grade en EE. UU. · Year 10 en Reino Unido*

**Saberes básicos.** Bloque A: «Empleo de diversos entornos y recursos de aprendizaje científico, como el laboratorio o los entornos virtuales» y «Registro de datos y resultados empleando tablas, gráficos y expresiones matemáticas». Bloque B: «Profundización en el modelo cinético-molecular de la materia y su relación con los cambios de estado. Leyes de los gases. Modelo cinético-molecular de la materia».

**Objetivos.** Interpretar la presión como efecto de los choques de las moléculas con las paredes. Predecir cómo cambian presión y volumen al variar temperatura, volumen y número de moléculas. Explicar cada ley de los gases con el modelo cinético.

**Secuencia de explicación (15–20 min).**

1. Globo a 273 K: explicar el equilibrio con el panel. Dentro, las moléculas empujan la goma; fuera, el aire empuja igual (1 atm).
2. Ley de Charles: pasar de 200 K a 400 K y esperar. El globo pasa de unos 0,9 L a unos 1,8 L y aparece el sello «LEY DE CHARLES». Elegir la gráfica V–T: los puntos quedan en una recta que apunta al origen.
3. Ley de Avogadro: volver a 273 K y pasar de 50 a 100 moléculas. El volumen se duplica (de 1,2 a 2,4 L) y la presión vuelve a 1 atm.
4. Pasar a «Recipiente rígido». Ley de Gay-Lussac: de 200 K a 400 K la presión pasa de unos 0,75 a unos 1,6 atm, con P / T casi constante. Ley de Boyle: de 1,20 a 0,60 L la presión pasa de 1 a unas 2,3 atm; el panel marca «· 2» y dibuja dónde estaba el émbolo.
5. Cerrar con una tabla en la pizarra: qué variable se fija, cuál se cambia y qué ocurre, y con la idea común: más choques, o choques más fuertes, es más presión.

### 4.º ESO: presión y ley general de los gases

*15–16 años · 10th grade en EE. UU. · Year 11 en Reino Unido*

**Saberes básicos.** Bloque B: «Sistemas materiales: resolución de problemas y situaciones de aprendizaje diversas sobre las disoluciones y los gases» y «Los gases. Ley general de los gases». Bloque D: «Fuerzas y presión en los fluidos: efectos de las fuerzas y la presión sobre los líquidos y los gases» y «Concepto de Presión».

**Objetivos.** Explicar la presión de un gas como resultado de muchos choques repartidos por toda la pared. Relacionar a la vez presión, volumen, temperatura y cantidad de gas. Distinguir la presión del gas de la fuerza que hace una pared elástica.

**Secuencia de explicación (15–20 min).**

1. Globo con 50 moléculas: el globo es redondo porque los choques empujan por igual en todas direcciones. Activar «Tamaño medio del globo» para ver que el temblor es alrededor de un tamaño fijo.
2. Recipiente rígido con la gráfica P–V: 0,6, 1,2, 2,4 y 4,6 L. Los puntos dibujan una hipérbola y P · V se queda en torno a 1,2–1,4 atm·L (ley de Boyle).
3. Con 2,40 L, subir a 500 K y luego a 100 moléculas. Escribir P · V / T = constante y razonar cada cambio con el modelo: choques más fuertes, más choques.
4. Volver al globo y subir a 500 moléculas. A partir de unas 260, «LA GOMA TIRA»: la goma estirada hace una fuerza hacia dentro y por eso la presión de dentro supera 1 atm (unas 2,1 atm con 500).
5. Calentar ese globo: a 400 K «AL LÍMITE» y a unos 450 K explota. Relacionarlo con por qué no se deben calentar recipientes cerrados.

### 1.º Bachillerato: repaso cualitativo

*16–17 años · 11th grade en EE. UU. · Year 12 en Reino Unido*

La simulación puede servir de repaso al tratar «Leyes de los gases ideales. Volumen molar. Condiciones normales o estándar de un gas» (bloque B) y «Energía interna de un sistema» (bloque F). Sirve para ligar la temperatura con la energía cinética media de las moléculas y la presión con los choques, y para hablar de las fluctuaciones: con N moléculas, el volumen del globo oscila del orden de 1/√N (con 50, alrededor de un 15 %). Pero no sirve para P · V = n · R · T con números: sus unidades son de escala.

## Concepciones alternativas que ayuda a corregir

La simulación ataca sobre todo la idea de un gas continuo y estático, la confusión entre propiedades del gas y de sus moléculas y la idea de que un globo se hincha porque la goma empuja. Cada fila indica la idea previa frecuente y cómo desmontarla con la simulación.

| Idea del alumnado | Idea correcta | Cómo mostrarlo |
| --- | --- | --- |
| «Entre las moléculas del gas hay aire» | Entre las moléculas hay vacío | 10 moléculas y «⏸ Pausar»: casi todo el globo está vacío, y el panel lo dice |
| «Al calentar un gas, sus moléculas se hacen más grandes» | Las moléculas no cambian; se mueven más rápido y chocan más | Globo de 100 a 500 K: el globo crece y las moléculas siguen con el mismo tamaño |
| «Al comprimir un gas, las moléculas se encogen» | Se reduce el espacio entre ellas, no su tamaño | Recipiente rígido de 2,40 a 0,30 L: mismo tamaño de molécula, más apiñadas y más choques |
| «El gas empuja solo hacia abajo, por su peso» | La presión se debe a choques en todas direcciones | El globo es redondo y las marcas de choque salen por todo el contorno |
| «El globo se hincha porque la goma empuja hacia fuera» | La goma tira hacia dentro; lo que empuja hacia fuera es el gas | Globo con 500 moléculas: las flechas de «LA GOMA TIRA» apuntan hacia el centro |
| «Dentro de un globo inflado no hay más presión que fuera» o «siempre hay más» | Mientras la goma no está tensa, dentro hay la misma presión que fuera (1 atm); solo cuando la goma tira hay más | Globo de 50 a 200 moléculas: 1 atm; con 500, unas 2,1 atm |
| «Un globo vacío se queda lleno de nada y no cambia» | Sin gas dentro, el aire de fuera lo aplasta | Bajar a 0 moléculas: «VACÍO» |
| «Todas las moléculas de un gas van a la misma velocidad» | A una temperatura dada hay moléculas lentas y rápidas | «Color por rapidez»: conviven moléculas turquesa y rosas |
| «Al calentar un gas hay más gas» | La cantidad de moléculas no cambia al calentar | Recipiente rígido de 273 a 500 K: siguen siendo 50 y la presión sube |

## Simplificaciones que conviene conocer

La simulación prioriza la relación entre choques y presión, y para ello simplifica la geometría, las unidades y el cálculo. Conviene conocer estas licencias para no reforzar ideas incorrectas sin querer.

1. **El gas es bidimensional.** Las moléculas se mueven en un plano y el «volumen» es el área del dibujo, convertida a litros en proporción directa. La «presión» es fuerza por unidad de longitud de la pared. Aun así, P · V, V / T y P / T se comportan como en un gas real.
2. **La presión es una media.** Se suman los choques contra la pared durante los últimos 3 s. Tras un cambio hay que esperar unos segundos a que se asiente; la gráfica ya lo hace sola.
3. **Pocas moléculas, mucho temblor.** Con 50 moléculas el globo oscila alrededor de un ±15 %. Por eso «SE INFLA» y «SE DESINFLA» solo salen después de mover un mando, y los sellos de las leyes se comprueban con una media más larga.
4. **El aire de fuera es real, pero de pocas moléculas.** A su alrededor, el borde del visor hace de resto de la atmósfera: entran o salen moléculas para que fuera haya siempre 1 atm y 273 K. El aire no se calienta al calentar el gas del globo.
5. **La goma solo tira al final.** Hasta unos 5,5 L la goma no hace fuerza y dentro hay 1 atm; un globo real ya tira algo desde el principio. A partir de ahí tira cada vez más y revienta con 3 atm durante 4 s.
6. **Las unidades son de escala.** El factor de la presión y la conversión a litros están elegidos para dar cifras razonables: con 1 atm, 1,2 L y 273 K saldrían unos 0,05 mol, no 50 moléculas. Los números sirven para comparar, no para aplicar P · V = n · R · T.
7. **El termostato mantiene la temperatura.** Al cambiarla, la rapidez de todas las moléculas se multiplica por √(T nueva / T anterior). No hay enfriamiento al expandirse: todos los procesos son isotermos salvo que se mueva la temperatura. La conversión usa 273, no 273,15.
8. **El cero absoluto es clásico.** A 0 K las moléculas se paran del todo y la presión es 0 atm. Por debajo de 80 K el panel avisa de que un gas real ya sería líquido: este modelo es un gas ideal.
9. **Las moléculas tienen tamaño.** Con el tamaño inicial (2) apenas importa; con volúmenes muy pequeños o moléculas grandes la presión sube algo más de lo que dice la ley de Boyle (P · V pasa de 1,2 a 1,4 atm·L entre 1,2 y 0,3 L). Para medir leyes conviene no subir el tamaño.

## Ficha de actividades del alumnado

La [ficha de actividades](https://simulaciencia.es/fichas/gases/) sigue el esquema predice, observa y explica. Cada actividad enlaza a la simulación ya preparada, así que funciona en el aula de informática, con tabletas o como tarea en casa. Se descarga en Word y LibreOffice para adaptarla.

| Curso | Actividades | Duración orientativa |
| --- | --- | --- |
| 3.º ESO | Antes de empezar, actividades 1 a 6, Aplica lo aprendido, Revisa tus ideas y Autoevaluación | Una sesión de 50–55 minutos, o dos si se hacen en clase los problemas |
| 4.º ESO | Actividades 2, 5, 7 y 8, Aplica lo aprendido y Para ampliar | Una sesión |
| 1.º Bachillerato | Actividades 5, 7 y 8 y Para ampliar, como repaso cualitativo | 20–25 minutos |

La tabla de «Antes de empezar» recoge seis ideas previas sobre los gases. Conviene no corregirla al principio: el alumnado vuelve a ella en «Revisa tus ideas». Los valores de la simulación varían unas centésimas (en el globo, alguna décima) de una vez a otra; las soluciones dan valores aproximados.

### Soluciones

| Apartado | Solución |
| --- | --- |
| Antes de empezar | Todas falsas. a) Entre las moléculas hay vacío (actividad 1). b) Las moléculas no cambian de tamaño; se mueven más deprisa (actividad 3). c) Se reduce el espacio entre ellas (actividad 5). d) El gas empuja por igual en todas direcciones: el globo es redondo (actividad 1). e) Las moléculas se mueven sin parar (actividad 1). f) La goma tira hacia dentro; empuja el gas (actividad 7) |
| Actividad 1 | Las moléculas ocupan una parte muy pequeña; casi todo es vacío. Se mueven en línea recta, en todas direcciones, hasta que chocan. Al chocar con la pared la empujan y rebotan. El globo no se desinfla porque los choques empujan la goma desde dentro igual que el aire la empuja desde fuera |
| Actividad 2 | 50 moléculas: unos 55 choques/s y 1,0 atm. 100: unos 105 choques/s y 2,0 atm. 200: unos 225 choques/s y 4,2 atm. La presión es proporcional al número de choques por segundo |
| Actividad 3 | El volumen crece con la temperatura: unos 0,5 L a 100 K, 0,9 L a 200 K, 1,8 L a 400 K. V / T ≈ 0,0045–0,005 L/K: ley de Charles. Las moléculas pasan de turquesa a rosa: van más deprisa y empujan más la goma, que cede. No cambian de tamaño |
| Actividad 4 | El volumen no cambia (1,20 L). P ≈ 0,75 atm a 200 K, ≈ 1,0 atm a 273 K y ≈ 1,6 atm a 400 K; P / T ≈ 0,0037–0,004 atm/K (ley de Gay-Lussac). El gas que queda en el bote aumenta su presión al calentarse y puede reventarlo |
| Actividad 5 | P ≈ 2,3 atm con 0,6 L, ≈ 1,0 atm con 1,2 L, ≈ 0,5 atm con 2,4 L y ≈ 0,24 atm con 4,6 L. P · V se mantiene en unos 1,1–1,4 atm·L: ley de Boyle. Las moléculas no se encogen: hay menos espacio entre ellas y chocan más a menudo con la pared |
| Actividad 6 | Con 50 moléculas, unos 1,2 L; con 100, unos 2,4 L; con 25, unos 0,6 L. La presión se queda en 1 atm: el globo crece hasta que dentro hay tantos choques por unidad de pared como antes (ley de Avogadro). Con 0 moléculas, el aire de fuera aplasta el globo: «VACÍO» |
| Actividad 7 | Hasta unas 250 moléculas, 1 atm. Con 300, unos 1,3 atm; con 500, unos 2,1 atm. Las flechas apuntan hacia dentro: la goma estirada tira hacia el centro y, junto con el aire de fuera, sostiene más presión dentro |
| Actividad 8 | A 400 K, «AL LÍMITE» (unas 2,9 atm). Por encima de unos 450 K el globo explota. Al calentar, las moléculas chocan más fuerte; la goma ya no puede estirarse lo bastante y la presión sube hasta romperla (ley de Gay-Lussac en un globo casi rígido) |
| Aplica lo aprendido | 1) Boyle: P₂ = 1 atm · 4 L / 1 L = 4 atm. 2) Gay-Lussac: P₂ = 1 atm · 450 K / 300 K = 1,5 atm. 3) Charles: V₂ = 2 L · 360 K / 300 K = 2,4 L. 4) El rozamiento calienta el aire de las ruedas; sus moléculas se mueven más deprisa y chocan más y más fuerte contra las paredes, que apenas cambian de volumen |
| Para ampliar | 1) Una hipérbola: P baja al aumentar V. 2) P · V / T sale aproximadamente igual, con unas centésimas de diferencia |
