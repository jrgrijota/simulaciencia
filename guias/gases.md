# Guía docente: simulación de gases

## Ficha rápida

La simulación de gases muestra partículas que chocan con las paredes de un globo elástico o de un recipiente rígido, y traduce esos choques en presión y volumen. Su uso principal es 3.º ESO, con aplicaciones en 2.º y 4.º ESO y un repaso cualitativo en 1.º Bachillerato.

| Dato | Detalle |
| --- | --- |
| Enlace | [jrgrijota.github.io/simulacion-gases](https://jrgrijota.github.io/simulacion-gases/) |
| Cursos | 3.º ESO (uso principal), 2.º ESO, 4.º ESO; repaso cualitativo en 1.º Bachillerato |
| Materia | Física y Química |
| Duración orientativa | 15–20 minutos de explicación con la simulación proyectada |
| Material | Proyector o pizarra digital; funciona en navegador, también en móvil y tableta, sin instalar nada |
| Conocimientos previos | Idea de partícula, temperatura en K y ºC, volumen en litros; en 4.º ESO, presión como fuerza por unidad de superficie |
| Accesibilidad | Solo tema oscuro. Colores de partículas y membrana configurables y opción «Pantalla completa» en «⚙ Ajustes Visuales» |

## Cómo funciona la simulación

La pantalla tiene un panel izquierdo de controles y un lienzo central con el gas. El desplegable «Comportamiento de recipiente» elige entre «Membrana Flexible (Globo)», la opción inicial, y «Pared Rígida (Fija)». Arriba del lienzo están los botones «⏸ Pausar» y «⚙ Ajustes Visuales», que abre un cajón lateral.

| Modo | Qué controla el docente | Qué muestra |
| --- | --- | --- |
| Membrana Flexible (Globo) | «Cantidad de partículas», de 1 a 500 (inicial 50, botones de ±5). «Temperatura», de 0 a 500 K (inicial 273 K, botones de ±10), o de −273 a 227 ºC con el interruptor K/ºC | Un globo rojo que se deforma con cada choque y una línea verde discontinua con su radio medio. La presión y el volumen cambian a la vez |
| Pared Rígida (Fija) | Los mismos controles y, además, los botones «Radio del Contenedor» (de 5 en 5 px, entre 30 y 210 px). El recipiente empieza con el tamaño medio que tenía el globo | Un círculo azul claro que solo cambia de tamaño con esos botones: a radio fijo el volumen es constante y solo cambia la presión |
| Ajustes Visuales | «Tamaño partícula» (1–15 px, inicial 3 px), colores, «Color según velocidad» (activado), «Mostrar gráfica P-V» (desactivado), «Pantalla completa» | Partículas de azul (lentas) a rojo (rápidas) y una gráfica P-V en la esquina inferior izquierda, con P en atm y V en L desde 0 |

Tres elementos sostienen la explicación:

- **Las tarjetas de «Datos Físicos».** Muestran «Presión (P)» en atm y «Volumen (V)» en L, con dos decimales. Al inicio rondan 1,6 atm y 0,8 L; varían algo de una carga a otra porque las velocidades iniciales son al azar. La presión oscila porque se recalcula cada segundo.
- **La «Monitorización del sistema».** Este desplegable muestra la «Frecuencia de impactos» en choques/s y los «Choques totales». La presión suma el impulso de cada choque contra la pared (2 · velocidad perpendicular) durante un segundo y lo divide por el perímetro: cuenta cuántos choques hay y lo fuertes que son. Con 50 partículas a 273 K salen unos 50 choques/s.
- **El color según velocidad.** A una misma temperatura conviven partículas azules y rojas. Las colisiones entre partículas reparten la energía y ensanchan la gama de velocidades.

La simulación no tiene panel de ayuda ni de conceptos clave: la explicación corre a cargo del docente.

## Uso en cada curso

En 2.º ESO la simulación sirve para presentar el modelo cinético y las escalas de temperatura; en 3.º ESO, para las leyes de los gases; en 4.º ESO, para el concepto de presión y la ley general. Los saberes citados son los del currículo LOMLOE de la Comunidad de Madrid para Física y Química.

### 2.º ESO: teoría cinética y temperatura

**Saberes básicos.** Bloque A: «el laboratorio y los entornos virtuales». Bloque B: «Aplicación de la teoría cinético-molecular a observaciones sobre la materia explicando sus propiedades» y «Introducción a la teoría cinética-molecular. Estados de agregación de la materia». Bloque E: «Temperatura. Escalas de temperatura» y «Efectos del calor sobre la materia: cambios de estado y dilataciones».

**Objetivos.** Describir un gas como partículas en movimiento con espacio vacío entre ellas. Relacionar la temperatura con la rapidez de las partículas. Convertir entre K y ºC. Explicar la dilatación de un gas al calentarlo.

**Secuencia de explicación (15–20 min).**

1. Configuración inicial: globo, 50 partículas, 273 K. Preguntar qué hay entre las partículas. Pulsar «⏸ Pausar» y señalar el espacio vacío. Reanudar con «▶ Reanudar».
2. Activar el interruptor K/ºC: 273 K pasa a 0 ºC. Escribir en la pizarra T (K) = t (ºC) + 273. Los extremos del deslizador cambian a −273 ºC y 227 ºC.
3. Bajar la temperatura hasta 0 K (−273 ºC). Las partículas se paran y la presión marca 0,00 atm. Presentar el cero absoluto como el límite inferior de la escala Kelvin.
4. Subir a 500 K. Las partículas van más rápidas y hay más rojas. El globo crece y el volumen pasa de unos 0,70 L a 0 K a unos 0,90 L.
5. Volver a 100 K: el globo encoge hasta unos 0,75 L. Relacionarlo con la dilatación: al calentar, las partículas no crecen, se mueven más y empujan más la pared.

### 3.º ESO: leyes de los gases

**Saberes básicos.** Bloque A: «Empleo de diversos entornos y recursos de aprendizaje científico, como el laboratorio o los entornos virtuales» y «Registro de datos y resultados empleando tablas, gráficos y expresiones matemáticas». Bloque B: «Profundización en el modelo cinético-molecular de la materia y su relación con los cambios de estado. Leyes de los gases. Modelo cinético-molecular de la materia».

**Objetivos.** Interpretar la presión como efecto de los choques de las partículas con las paredes. Predecir cómo cambian presión y volumen al variar temperatura y número de partículas. Explicar cada ley de los gases con el modelo cinético.

**Secuencia de explicación (15–20 min).**

1. En «⚙ Ajustes Visuales», bajar «Tamaño partícula» a 2 px: el gas se acerca más a un gas ideal. Abrir «Monitorización del sistema» y relacionar la presión con la frecuencia de impactos.
2. Con el globo, bajar a 100 K y luego subir a 500 K. El volumen pasa de unos 0,74 L a unos 0,86 L. Ley de Charles, cualitativa: a más temperatura, más volumen (ver simplificación 4).
3. Volver a 273 K, esperar unos segundos y elegir «Pared Rígida (Fija)». El volumen queda fijo en torno a 0,8 L y la presión ronda 1,5 atm. Subir a 500 K: la presión sube a unos 2,7 atm. Bajar a 125 K: unos 0,7 atm. Ley de Gay-Lussac: P / T se mantiene, unos 0,0055 atm/K en los tres casos.
4. Volver a 273 K y pasar de 50 a 100 partículas. La presión se duplica, de unos 1,6 a unos 3,4 atm. Preguntar por qué: el doble de partículas da el doble de choques por segundo.
5. Cerrar con una tabla en la pizarra: qué variable se fija, cuál se cambia y qué ocurre. Con 2 px las proporciones también se cumplen, con unas décimas de ruido.

### 4.º ESO: presión y ley general de los gases

**Saberes básicos.** Bloque B: «Sistemas materiales: resolución de problemas y situaciones de aprendizaje diversas sobre las disoluciones y los gases» y «Los gases. Ley general de los gases». Bloque D: «Fuerzas y presión en los fluidos: efectos de las fuerzas y la presión sobre los líquidos y los gases» y «Concepto de Presión».

**Objetivos.** Explicar la presión de un gas como resultado de muchos choques repartidos por toda la pared. Relacionar a la vez presión, volumen, temperatura y cantidad de gas. Reconocer la ley de Boyle en un recipiente más grande.

**Secuencia de explicación (15–20 min).**

1. Configuración inicial con «Tamaño partícula» a 2 px. Mostrar que el globo se deforma por igual en todas direcciones: la presión actúa sobre toda la pared, no solo hacia abajo.
2. Elegir «Pared Rígida (Fija)». Aparece el «Radio del Contenedor», unos 90 px, con V ≈ 0,8 L y P ≈ 1,6 atm. Calcular P · V ≈ 1,3 atm·L.
3. Con el botón «+» llevar el radio a 150 px: V ≈ 2,3 L y la presión baja a unos 0,56 atm. P · V vuelve a dar unos 1,3 atm·L.
4. Con «−» bajar a 60 px: V ≈ 0,37 L y P ≈ 3,8 atm, con P · V ≈ 1,4 atm·L. Ley de Boyle: a temperatura constante P · V se mantiene; las décimas de diferencia son ruido de la medida.
5. Volver a 150 px y subir a 500 K: la presión pasa a ~1,0 atm. Luego subir a 100 partículas: sube otra vez. Escribir P · V / T = constante y razonar cada cambio con el modelo.

### 1.º Bachillerato: repaso cualitativo

La simulación puede servir de repaso al tratar «Leyes de los gases ideales. Volumen molar. Condiciones normales o estándar de un gas» (bloque B) y «Energía interna de un sistema» (bloque F). Sirve para ligar la temperatura con la energía cinética media de las partículas y la presión con los choques. Con pared rígida y 2 px, P · V se mantiene y P es proporcional a T, con unas décimas de ruido. Pero no sirve para P · V = n · R · T con números: sus unidades son de escala.

## Concepciones alternativas que ayuda a corregir

La simulación ataca sobre todo la idea de un gas continuo y estático, y la confusión entre propiedades del gas y de sus partículas. Cada fila indica la idea previa frecuente y cómo desmontarla con la simulación.

| Idea del alumnado | Idea correcta | Cómo mostrarlo |
| --- | --- | --- |
| «Entre las partículas del gas hay aire» | Entre las partículas hay vacío | 10 partículas a 273 K y «⏸ Pausar»: casi todo el globo está vacío |
| «Al calentar un gas, sus partículas se hacen más grandes» | Las partículas no cambian; se mueven más rápido y chocan más | Globo de 100 a 500 K: el globo crece y las partículas siguen con el mismo tamaño |
| «Al comprimir un gas, las partículas se encogen» | Se reduce el espacio entre ellas, no su tamaño | Recipiente rígido de 150 px y después de 60 px (secuencia de 4.º ESO): mismo tamaño de partícula, más apiñadas |
| «El gas empuja solo hacia abajo, por su peso» | La presión se debe a choques en todas direcciones | Globo con 200 partículas: la membrana se abomba por igual en todo el contorno |
| «Todas las partículas de un gas van a la misma velocidad» | A una temperatura dada hay una distribución de velocidades | 100 partículas a 273 K con «Color según velocidad»: conviven azules y rojas |
| «Cada partícula tiene su temperatura» o «las partículas se calientan» | La temperatura mide la energía cinética media del conjunto | Pausar a 273 K y señalar partículas de colores distintos en el mismo gas |
| «Al calentar un gas hay más gas» | La cantidad de partículas no cambia al calentar | Recipiente rígido de 273 a 500 K: el contador sigue en 50 y la presión sube |

## Simplificaciones que conviene conocer

La simulación prioriza la relación entre choques y presión, y para ello simplifica la geometría, las unidades y el cálculo. Conviene conocer estas licencias para no reforzar ideas incorrectas sin querer.

1. **El gas es bidimensional.** Las partículas se mueven en un plano y el «volumen» es el área del círculo, convertida a litros en proporción directa (5 L para 220 px de radio). La «presión» es fuerza por unidad de longitud del contorno. Aun así, P · V y P / T se comportan como en un gas real.
2. **La presión se mide en cada segundo.** Se suma el impulso de los choques contra la pared durante un segundo, así que oscila unas décimas. Con pocas partículas conviene leer varios valores y quedarse con la media.
3. **Las unidades son de escala.** El factor de la presión y la conversión a litros están elegidos para dar cifras razonables. Con 1,6 atm, 0,8 L y 273 K saldrían unos 0,06 mol, no 50 partículas. Los números sirven para comparar, no para aplicar P · V = n · R · T.
4. **El globo es un muelle sin atmósfera exterior.** La membrana son 60 nodos unidos por resortes, con un radio de reposo de 90 px. A 0 K el globo no se vacía: se queda en unos 0,70 L. De 100 a 500 K el volumen solo crece de unos 0,75 a 0,90 L, mientras la presión dentro casi se cuadruplica: la membrana es muy rígida. La ley de Charles se ve en su sentido, no en su proporción.
5. **La temperatura reescala las velocidades.** Cada partícula nace con una rapidez al azar entre 1,5 y 3,5 px por fotograma, multiplicada por √(T/300). Al cambiar T, todas se multiplican por √(T nueva / T anterior). Así la energía cinética media es proporcional a T, como en el modelo real. La conversión usa 273, no 273,15.
6. **El cero absoluto es clásico.** A 0 K las partículas se paran del todo y la presión se fuerza a 0,00 atm. Basta en ESO. En Bachillerato se puede matizar que es un límite inalcanzable.
7. **Los choques con la pared no enfrían ni calientan.** Las partículas rebotan sin perder rapidez aunque la membrana se mueva. No hay enfriamiento al expandirse: la temperatura solo cambia con el control. Todos los procesos son isotermos salvo que el docente mueva la temperatura.
8. **Las partículas tienen tamaño.** El radio inicial es 3 px y chocan entre sí. Ese volumen propio hace que la presión crezca algo más que el número de partículas: con 3 px y muchas partículas el factor pasa de 2. Con 1 o 2 px, de 50 a 100 partículas se duplica. Para las leyes de los gases conviene usar 2 px.
9. **La gráfica P-V guarda poco.** Añade un punto cada 3 s con los valores medios y guarda los 35 últimos. V va de 0 a 5 L y P de 0 al máximo reciente, que se reajusta solo. Se borra al cambiar de modo.
