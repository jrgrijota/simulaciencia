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
| Pared Rígida (Fija) | Los mismos controles. El recipiente queda fijo con el tamaño medio que tenía el globo al cambiar de modo | Un círculo azul claro que no se mueve: el volumen queda constante y solo cambia la presión |
| Ajustes Visuales | «Tamaño partícula» (1–15 px, inicial 3 px), colores, «Color según velocidad» (activado), «Mostrar gráfica P-V» (desactivado), «Pantalla completa» | Partículas de azul (lentas) a rojo (rápidas) y una gráfica P-V sin escala en la esquina inferior izquierda |

Tres elementos sostienen la explicación:

- **Las tarjetas de «Datos Físicos».** Muestran «Presión (P)» en atm y «Volumen (V)» en L, con dos decimales. Al inicio rondan 1,35 atm y 1,20 L. La presión oscila porque se recalcula cada segundo.
- **La «Monitorización del sistema».** Este desplegable muestra la «Frecuencia de impactos» en choques/s y los «Choques totales». La presión se calcula con esa frecuencia: P = 15 · frecuencia / perímetro del recipiente en px. Con 50 partículas a 273 K salen unos 50 choques/s.
- **El color según velocidad.** A una misma temperatura conviven partículas azules y rojas. Las colisiones entre partículas reparten la energía y ensanchan la gama de velocidades.

La simulación no tiene panel de ayuda ni de conceptos clave: la explicación corre a cargo del docente.

## Uso en cada curso

En 2.º ESO la simulación sirve para presentar el modelo cinético y las escalas de temperatura; en 3.º ESO, para las leyes de los gases; en 4.º ESO, para el concepto de presión y la ley general. Los saberes citados son los del currículo LOMLOE de la Comunidad de Madrid para Física y Química. Conviene recargar la página antes de cada secuencia: al volver de «Pared Rígida» el globo conserva el tamaño del recipiente rígido.

### 2.º ESO: teoría cinética y temperatura

**Saberes básicos.** Bloque A: «el laboratorio y los entornos virtuales». Bloque B: «Aplicación de la teoría cinético-molecular a observaciones sobre la materia explicando sus propiedades» y «Introducción a la teoría cinética-molecular. Estados de agregación de la materia». Bloque E: «Temperatura. Escalas de temperatura» y «Efectos del calor sobre la materia: cambios de estado y dilataciones».

**Objetivos.** Describir un gas como partículas en movimiento con espacio vacío entre ellas. Relacionar la temperatura con la rapidez de las partículas. Convertir entre K y ºC. Explicar la dilatación de un gas al calentarlo.

**Secuencia de explicación (15–20 min).**

1. Configuración inicial: globo, 50 partículas, 273 K. Preguntar qué hay entre las partículas. Pulsar «⏸ Pausar» y señalar el espacio vacío. Reanudar con «▶ Reanudar».
2. Activar el interruptor K/ºC: 273 K pasa a 0 ºC. Escribir en la pizarra T (K) = t (ºC) + 273. Los extremos del deslizador cambian a −273 ºC y 227 ºC.
3. Bajar la temperatura hasta 0 K (−273 ºC). Las partículas se paran y la presión marca 0,00 atm. Presentar el cero absoluto como el límite inferior de la escala Kelvin.
4. Subir a 500 K. Las partículas van más rápidas y hay más rojas. El globo crece y el volumen pasa de unos 1,08 L a 0 K a unos 1,30 L.
5. Volver a 100 K: el globo encoge hasta unos 1,14 L. Relacionarlo con la dilatación: al calentar, las partículas no crecen, se mueven más y empujan más la pared.

### 3.º ESO: leyes de los gases

**Saberes básicos.** Bloque A: «Empleo de diversos entornos y recursos de aprendizaje científico, como el laboratorio o los entornos virtuales» y «Registro de datos y resultados empleando tablas, gráficos y expresiones matemáticas». Bloque B: «Profundización en el modelo cinético-molecular de la materia y su relación con los cambios de estado. Leyes de los gases. Modelo cinético-molecular de la materia».

**Objetivos.** Interpretar la presión como efecto de los choques de las partículas con las paredes. Predecir cómo cambian presión y volumen al variar temperatura y número de partículas. Explicar cada ley de los gases con el modelo cinético.

**Secuencia de explicación (15–20 min).**

1. En «⚙ Ajustes Visuales», bajar «Tamaño partícula» a 2 px: el gas se acerca más a un gas ideal. Abrir «Monitorización del sistema» y relacionar la presión con la frecuencia de impactos.
2. Con el globo, bajar a 100 K y luego subir a 500 K. El volumen pasa de unos 1,15 L a unos 1,29 L. Ley de Charles, cualitativa: a más temperatura, más volumen a presión externa constante.
3. Volver a 273 K, esperar unos segundos y elegir «Pared Rígida (Fija)». El volumen queda fijo en torno a 1,2 L y la presión ronda 1,1–1,2 atm. Subir a 500 K: la presión sube a unos 1,4–1,6 atm. Bajar a 125 K: unos 0,8 atm. Ley de Gay-Lussac, cualitativa.
4. Volver a 273 K y pasar de 50 a 100 partículas. La presión casi se duplica, hasta unos 2,3–2,5 atm. Preguntar por qué: el doble de partículas da el doble de choques por segundo.
5. Cerrar con una tabla en la pizarra: qué variable se fija, cuál se cambia y qué ocurre. Avisar de que la simulación muestra el sentido del cambio, no la proporción exacta con la temperatura.

### 4.º ESO: presión y ley general de los gases

**Saberes básicos.** Bloque B: «Sistemas materiales: resolución de problemas y situaciones de aprendizaje diversas sobre las disoluciones y los gases» y «Los gases. Ley general de los gases». Bloque D: «Fuerzas y presión en los fluidos: efectos de las fuerzas y la presión sobre los líquidos y los gases» y «Concepto de Presión».

**Objetivos.** Explicar la presión de un gas como resultado de muchos choques repartidos por toda la pared. Relacionar a la vez presión, volumen, temperatura y cantidad de gas. Reconocer la ley de Boyle en un recipiente más grande.

**Secuencia de explicación (15–20 min).**

1. Configuración inicial con «Tamaño partícula» a 2 px. Mostrar que el globo se deforma por igual en todas direcciones: la presión actúa sobre toda la pared, no solo hacia abajo.
2. Elegir «Pared Rígida (Fija)». El panel muestra el «Radio del Contenedor», unos 90 px. Con unos 46 choques/s, 15 · 46 / (2π · 90) da 1,22 atm. Comparar con la tarjeta de presión.
3. Recargar la página y poner 2 px. Con el globo, subir a 500 partículas y esperar unos 30 s: el globo crece hasta unos 115 px de radio. Pasar a «Pared Rígida (Fija)» y volver a 50 partículas.
4. Leer el resultado: con las mismas 50 partículas y 273 K, el volumen es unos 1,7 L y la presión unos 0,5 atm. En el recipiente pequeño eran 1,2 L y 1,1–1,2 atm. Ley de Boyle: más volumen, menos presión.
5. Con ese recipiente grande, subir a 500 K y luego a 100 partículas. La presión sube en los dos casos. Escribir P · V / T = constante y razonar cada cambio con el modelo.

### 1.º Bachillerato: repaso cualitativo

La simulación puede servir de repaso al tratar «Leyes de los gases ideales. Volumen molar. Condiciones normales o estándar de un gas» (bloque B) y «Energía interna de un sistema» (bloque F). Sirve para ligar la temperatura con la energía cinética media de las partículas y la presión con los choques. No sirve para comprobar P · V = n · R · T con números: sus unidades son de escala y la presión no es proporcional a la temperatura.

## Concepciones alternativas que ayuda a corregir

La simulación ataca sobre todo la idea de un gas continuo y estático, y la confusión entre propiedades del gas y de sus partículas. Cada fila indica la idea previa frecuente y cómo desmontarla con la simulación.

| Idea del alumnado | Idea correcta | Cómo mostrarlo |
| --- | --- | --- |
| «Entre las partículas del gas hay aire» | Entre las partículas hay vacío | 10 partículas a 273 K y «⏸ Pausar»: casi todo el globo está vacío |
| «Al calentar un gas, sus partículas se hacen más grandes» | Las partículas no cambian; se mueven más rápido y chocan más | Globo de 100 a 500 K: el globo crece y las partículas siguen con el mismo tamaño |
| «Al comprimir un gas, las partículas se encogen» | Se reduce el espacio entre ellas, no su tamaño | Comparar el recipiente rígido de unos 115 px con el de unos 90 px (secuencia de 4.º ESO): mismo tamaño de partícula, más apiñadas |
| «El gas empuja solo hacia abajo, por su peso» | La presión se debe a choques en todas direcciones | Globo con 200 partículas: la membrana se abomba por igual en todo el contorno |
| «Todas las partículas de un gas van a la misma velocidad» | A una temperatura dada hay una distribución de velocidades | 100 partículas a 273 K con «Color según velocidad»: conviven azules y rojas |
| «Cada partícula tiene su temperatura» o «las partículas se calientan» | La temperatura mide la energía cinética media del conjunto | Pausar a 273 K y señalar partículas de colores distintos en el mismo gas |
| «Al calentar un gas hay más gas» | La cantidad de partículas no cambia al calentar | Recipiente rígido de 273 a 500 K: el contador sigue en 50 y la presión sube |

## Simplificaciones que conviene conocer

La simulación prioriza la relación entre choques y presión, y para ello simplifica la geometría, las unidades y el cálculo. Conviene conocer estas licencias para no reforzar ideas incorrectas sin querer.

1. **El gas es bidimensional.** Las partículas se mueven en un plano y el «volumen» es el área del círculo. El código convierte el área en litros de forma lineal: 0,5 L para 25 px de radio y 5,0 L para 220 px. Como la escala no empieza en cero, P · V no sale constante aunque la presión sí siga a la inversa del área.
2. **La presión cuenta choques, no su fuerza.** La presión es 15 · choques por segundo / perímetro en px. Cada choque cuenta igual, sea rápido o lento. Por eso la presión crece con la raíz de T: de 250 a 500 K solo se multiplica por unos 1,4. Conviene decir que en un gas real se duplicaría, porque las partículas chocan más veces y más fuerte.
3. **Las unidades son de escala.** El factor 15 y la conversión a litros están elegidos para dar cifras razonables. Con 1,35 atm, 1,2 L y 273 K saldrían unos 0,07 mol, no 50 partículas. Los números sirven para comparar, no para aplicar P · V = n · R · T.
4. **El globo es un muelle sin atmósfera exterior.** La membrana son 60 nodos unidos por resortes, con un radio de reposo de 90 px. A 0 K el globo no se vacía: se queda en unos 1,08 L. De 100 a 500 K el volumen solo crece de unos 1,14 a 1,30 L. La ley de Charles se ve en su sentido, no en su proporción.
5. **La temperatura reescala las velocidades.** Cada partícula nace con una rapidez al azar entre 1,5 y 3,5 px por fotograma, multiplicada por √(T/300). Al cambiar T, todas se multiplican por √(T nueva / T anterior). Así la energía cinética media es proporcional a T, como en el modelo real. La conversión usa 273, no 273,15.
6. **El cero absoluto es clásico.** A 0 K las partículas se paran del todo y la presión se fuerza a 0,00 atm. Basta en ESO. En Bachillerato se puede matizar que es un límite inalcanzable.
7. **Los choques con la pared no enfrían ni calientan.** Las partículas rebotan sin perder rapidez aunque la membrana se mueva. No hay enfriamiento al expandirse: la temperatura solo cambia con el control. Todos los procesos son isotermos salvo que el docente mueva la temperatura.
8. **Las partículas tienen tamaño.** El radio inicial es 3 px y chocan entre sí. Ese volumen propio hace que la presión crezca algo más que el número de partículas: de 50 a 100 se multiplica por unos 2,2. Con 1 o 2 px el factor se acerca a 2. Para las leyes de los gases conviene usar 2 px.
9. **La gráfica P-V es solo orientativa.** Añade un punto cada 3 s con los valores medios y guarda los 35 últimos. Su eje vertical representa en realidad los choques por segundo, de 0 a 300, sin números. Se borra al cambiar de modo. Además, los botones de «Radio del Contenedor» no responden. El recipiente rígido solo se agranda con el truco de la secuencia de 4.º ESO.
