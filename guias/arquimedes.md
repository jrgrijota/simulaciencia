# Guía docente: simulación del principio de Arquímedes

## Ficha rápida

La simulación del principio de Arquímedes deja caer un bloque en un depósito y calcula en cada instante su peso, el empuje y la fuerza neta. Su uso principal es 4.º ESO, con aplicación en 3.º ESO al estudio de fuerzas y resultantes.

| Dato | Detalle |
| --- | --- |
| Enlace | [jrgrijota.github.io/simulacion-arquimedes](https://jrgrijota.github.io/simulacion-arquimedes/) |
| Cursos | 4.º ESO (uso principal), 3.º ESO; uso puntual en 2.º ESO y 1.º Bachillerato |
| Materia | Física y Química |
| Duración orientativa | 15–20 minutos de explicación con la simulación proyectada |
| Material | Proyector o pizarra digital; funciona en navegador, también en móvil y tableta, sin instalar nada |
| Conocimientos previos | Densidad (ρ = m / V), peso (P = m · g), fuerza como magnitud con dirección y sentido |
| Accesibilidad | Tema oscuro, claro y de alto contraste (botón del engranaje) |

## Cómo funciona la simulación

La simulación tiene dos modos, «Valores libres» y «Materiales reales», que se eligen en el panel izquierdo. En los dos se ve el depósito con el bloque y, a su izquierda, el porcentaje sumergido. Una escala vertical de densidades marca la del líquido y la del bloque. Bajo el depósito aparecen las fórmulas del peso y del empuje con los números actuales.

| Modo | Qué controla el docente | Qué muestra |
| --- | --- | --- |
| Valores libres | Masa (10–200 kg), Volumen (50–150 L) y Densidad del líquido (0,50–13,60 kg/L, en pasos de 0,01). Valores iniciales: 50 kg, 100 L y 1,000 kg/L | La densidad del bloque que resulta (de 0,07 a 4,00 kg/L), el peso, el empuje, la fuerza neta, el volumen sumergido y el estado del sistema |
| Materiales reales | «Material del bloque»: corcho (0,24), madera (0,60), hielo (0,917), plástico (0,95), aluminio (2,70), hierro (7,87), plomo (11,34) y oro (19,30 kg/L). «Líquido del depósito»: gasolina (0,740), etanol (0,789), aceite (0,920), agua dulce (1,000), agua de mar (1,025), glicerina (1,261) y mercurio (13,534 kg/L) | Lo mismo, con texturas del material y del líquido. El volumen queda fijo en 100 L y la masa sale de m = ρ · V. Empieza con madera en agua dulce |
| Botón «Diagrama de cuerpo libre» (en los dos modos) | Mostrar u ocultar el panel derecho | Flechas de peso (roja), empuje (azul) y fuerza neta, con longitud proporcional al valor; con el bloque apoyado en el fondo, también la normal (violeta). Rótulo «P > E», «P < E», «P ≈ E» o «P = E + N» y el cálculo «PASO A PASO» |

Tres elementos sostienen la explicación:

- **Las fórmulas con números.** Bajo el depósito se lee, por ejemplo, P = m·g = 50.0 × 9.8 = 490 N y E = Vsub·ρlíq·g = 50.0 × 1.00 × 9.8 = 490 N. Permiten comprobar el cálculo en voz alta.
- **El volumen sumergido.** La tarjeta «Vol. sumergido» y el porcentaje junto al depósito muestran qué parte del bloque desaloja líquido. Cuando flota, la fracción sumergida coincide con ρbloque / ρlíquido. El nivel del líquido sube a medida que el bloque se sumerge: es el volumen desalojado.
- **El diagrama de cuerpo libre.** Las flechas de P y E salen del centro del bloque. La fuerza neta aparece encima en amarillo si apunta hacia abajo y en verde si apunta hacia arriba.

El desplegable «Monitorización en tiempo real» está abierto al inicio. Contiene seis tarjetas y el bloque «Estado del sistema». Este compara con dos barras ambas densidades y escribe «Flotando», «Hundiéndose», «En el fondo» o «Equilibrio Neutro»; este último solo cuando las dos densidades coinciden. El desplegable «Fórmulas esenciales» resume densidad, empuje, peso y la condición de equilibrio Vsub/V = ρbloque/ρlíquido. En la cabecera, «Descripción y reglas rápidas» da las tres reglas de comparación de densidades.

## Uso en cada curso

En 4.º ESO la simulación sirve para presentar el principio de Arquímedes y calcular el empuje; en 3.º ESO, para trabajar el empuje como una fuerza más y la resultante de fuerzas opuestas. En 2.º ESO y 1.º Bachillerato su uso es puntual. No encaja en 2.º Bachillerato. Los saberes citados son los del currículo LOMLOE de la Comunidad de Madrid para Física y Química.

### 4.º ESO: principio de Arquímedes y flotación

**Saberes básicos.** Bloque D: «Fuerzas y presión en los fluidos: efectos de las fuerzas y la presión sobre los líquidos y los gases, estudiando los principios fundamentales que las describen», «Principio de Arquímedes y Principio de Pascal» y «Principales fuerzas del entorno cotidiano: reconocimiento del peso, la normal, el rozamiento, la tensión o el empuje, y su uso en la explicación de fenómenos físicos en distintos escenarios». Bloque A: «el laboratorio o los entornos virtuales».

**Objetivos.** Enunciar el principio de Arquímedes. Calcular el empuje con E = ρlíquido · g · Vsumergido. Predecir si un cuerpo flota comparando su densidad con la del líquido. Explicar qué fracción queda sumergida cuando flota.

**Secuencia de explicación (15–20 min).**

1. Valores libres con los valores iniciales: 50 kg, 100 L y 1,000 kg/L. Preguntar por qué el bloque se detiene a media altura. Leer «Vol. sumergido»: 50,0 L. Esos 50 L de agua tienen 50 kg y pesan 490 N, igual que el empuje. Enunciar el principio.
2. Activar «Diagrama de cuerpo libre». Señalar P = 490,0 N y E = 490,0 N, con flechas iguales y el rótulo «P ≈ E». Flotar es equilibrio de fuerzas, no ausencia de peso.
3. Pedir una predicción y subir la masa a 80 kg. El bloque baja hasta 80,0 L sumergidos y E = P = 784 N. Abrir «Fórmulas esenciales» y leer Vsub/V = ρbloque/ρlíquido: 0,80 / 1,00 = 80 %.
4. Subir la masa a 150 kg (ρ = 1,50 kg/L). El bloque se hunde. Con todo el volumen dentro, el empuje alcanza su máximo: 100 × 1,00 × 9,8 = 980 N, menor que P = 1470 N. Al llegar al fondo, el diagrama añade la normal: N = 1470 − 980 = 490 N, y el rótulo pasa a «P = E + N».
5. Sin tocar la masa, llevar «Densidad del líquido» a 2,00 kg/L. El bloque sube y flota con 75,0 L sumergidos: 75 × 2,00 × 9,8 = 1470 N. El empuje depende del líquido, no del bloque.
6. Pasar a «Materiales reales». El hierro se hunde en agua dulce y flota en mercurio con unos 58,1 L sumergidos (7,87 / 13,534). Cerrar con el hielo: 91,7 L sumergidos en agua dulce y 89,5 L en agua de mar. Relacionarlo con los icebergs y la línea de flotación de los barcos.

### 3.º ESO: el empuje como fuerza y la resultante

**Saberes básicos.** Bloque D: «Tipos de magnitudes escalares y vectoriales», «Fuerza y movimiento», «Cálculo de la resultante de varias fuerzas» y «Aplicación de las leyes de Newton: observación de situaciones cotidianas o de laboratorio que permiten entender cómo se comportan los sistemas materiales ante la acción de las fuerzas». Bloque A: «Magnitudes derivadas. Sistema Internacional de Unidades. Cambio de unidades. Factores de conversión».

**Objetivos.** Reconocer el empuje como una fuerza que ejerce el líquido. Sumar dos fuerzas de igual dirección y sentido contrario. Relacionar resultante nula con reposo y resultante no nula con cambio de velocidad. Expresar la densidad en kg/L y en kg/m³.

**Secuencia de explicación (15–20 min).**

1. Valores libres con los valores iniciales y «Diagrama de cuerpo libre» activado. Presentar las dos fuerzas: peso hacia abajo y empuje hacia arriba. Con el bloque quieto, P = E = 490,0 N y la resultante es nula.
2. Calcular el peso en la pizarra: P = m · g = 50 × 9,8 = 490 N. Comprobarlo en el recuadro «PASO A PASO».
3. Subir la masa a 150 kg. Mientras baja, el diagrama marca «P > E» y una flecha amarilla hacia abajo. Con el bloque ya cubierto, Fn = 1470 − 980 = 490 N. Hay resultante y por eso cambia la velocidad.
4. Con el bloque quieto en el fondo, señalar la tercera fuerza: el fondo empuja hacia arriba con N = 490 N y la resultante vuelve a ser 0 (P = E + N). Después, bajar la masa a 30 kg. Durante la subida el diagrama marca «P < E» y una flecha verde hacia arriba: 294 − 980 = −686 N. El signo negativo indica que la resultante apunta hacia arriba.
5. El bloque queda flotando con 30,0 L sumergidos y E = P = 294 N. Resultante nula de nuevo: primera ley de Newton.
6. Cambio de unidades con la tarjeta «Dens. bloque»: 30 kg / 100 L = 0,30 kg/L = 300 kg/m³. Recordar que 1 kg/L = 1 g/cm³ = 1000 kg/m³.

### 2.º ESO: uso puntual

No hay un saber específico de flotación. La simulación sirve de apoyo cualitativo para «Composición sencilla de fuerzas» (bloque D) y para la densidad como «Medidas indirectas» (bloque A). Basta el modo «Materiales reales» con agua dulce: los materiales menos densos que 1,000 kg/L flotan y los más densos se hunden. Para introducir la densidad es mejor la simulación de densidad.

### 1.º Bachillerato: repaso puntual

En el bloque E aparecen «Composición vectorial de un sistema de fuerzas. Fuerza resultante.» y «Leyes de Newton de la dinámica. Condiciones de equilibrio de traslación.». La simulación sirve para repasar el equilibrio de traslación de un cuerpo que flota. También permite trabajar «La fuerza peso y la fuerza normal.». Con 150 kg y 100 L el bloque reposa en el fondo y el diagrama dibuja la normal: N = P − E = 1470 − 980 = 490 N. Se puede pedir al alumnado que la calcule antes de activar el diagrama.

## Concepciones alternativas que ayuda a corregir

La simulación ataca sobre todo la idea de que flotar depende del peso o del tamaño del objeto. Cada fila indica la idea previa frecuente y cómo desmontarla con la simulación.

| Idea del alumnado | Idea correcta | Cómo mostrarlo |
| --- | --- | --- |
| «Lo que pesa mucho se hunde y lo ligero flota» | Flotar depende de la densidad del cuerpo comparada con la del líquido | Valores libres con 140 kg y 150 L: P = 1372 N, ρ = 0,93 kg/L y flota. Luego 60 kg y 50 L: P = 588 N, ρ = 1,20 kg/L y se hunde |
| «Los objetos grandes flotan y los pequeños se hunden» | Con el mismo tamaño unos flotan y otros no | Materiales reales en agua dulce: todos los bloques miden 100 L. La madera flota y el aluminio se hunde |
| «Si un objeto se hunde, el agua no lo empuja» | Todo cuerpo sumergido recibe empuje, flote o no | Materiales reales, hierro en agua dulce: el bloque se hunde con E = 980 N frente a P = 7713 N |
| «Cuanto más hondo, más empuje» | El empuje depende del volumen sumergido, no de la profundidad | Valores libres con 150 kg y 100 L: mientras el bloque baja totalmente sumergido, «Empuje (E)» se mantiene en 980 N |
| «Un cuerpo más pesado recibe más empuje» | Con el mismo volumen sumergido y el mismo líquido, el empuje es el mismo | Materiales reales en agua dulce: aluminio, plomo y oro reciben los tres E = 980 N |
| «Si flota, el empuje es mayor que el peso» | En un cuerpo que flota en reposo, E = P | Valores iniciales con «Diagrama de cuerpo libre»: P = E = 490,0 N y rótulo «P ≈ E» |
| «Un objeto flota o se hunde por sí mismo, sea cual sea el líquido» | Depende de la densidad del líquido | Materiales reales: el plástico flota en agua dulce (0,95 < 1,000) y se hunde en aceite (0,95 > 0,920). El hierro flota en mercurio |

## Simplificaciones que conviene conocer

La simulación prioriza la comparación entre peso y empuje y para ello simplifica el movimiento, el depósito y algunas fuerzas. Conviene conocer estas licencias para no reforzar ideas incorrectas sin querer.

1. **La normal solo aparece en el fondo.** El fondo es la única superficie de apoyo: no hay paredes laterales ni tapa que empujen. Con el bloque en el fondo la normal es N = P − E y la fuerza neta, 0.
2. **«Equilibrio Neutro» exige densidades iguales.** El rótulo solo aparece si ρbloque y ρlíquido coinciden (con una tolerancia del 0,1 % para el redondeo). Es un caso límite: cualquier diferencia apreciable hace que el bloque suba o baje, aunque sea muy despacio.
3. **El nivel sube en un depósito plano.** El nivel del líquido sube según el área sumergida del bloque repartida sobre la anchura del depósito, como si todo fuera un corte en 2D. Por eso sube más con el diagrama abierto, cuando el depósito se dibuja más estrecho.
4. **No se ve la presión.** El empuje sale directamente de E = ρlíquido · g · Vsub. No se calcula a partir de la diferencia de presiones entre las caras. Las marcas de 17 % a 83 % del lateral solo indican profundidad relativa. En 4.º ESO hay que explicar el origen del empuje en la pizarra.
5. **Unidades prácticas, no SI.** Las densidades van en kg/L y los volúmenes en L; así L × kg/L × 9,8 da newtons directamente. Se usa g = 9,8 m/s². La interfaz escribe los decimales con punto. Desde 3.º ESO conviene pasar a kg/m³ y m³.
6. **Rangos limitados en Valores libres.** Con los deslizadores la densidad del bloque solo va de 0,07 a 4,00 kg/L. Para densidades mayores hay que usar Materiales reales, donde el volumen es siempre 100 L y la masa llega a 1930 kg con el oro.
7. **Movimiento solo cualitativo.** La velocidad se multiplica por 0,90 en cada fotograma dentro del líquido, tiene un tope y no hay rozamiento con el aire. El bloque oscila y se frena de forma orientativa. No sirve para medir tiempos ni aceleraciones.
8. **Bloque ideal.** El bloque es siempre un cuadrado que no gira ni vuelca, y su tamaño en pantalla crece con el volumen de forma lineal. No se trata la estabilidad de los barcos ni la forma del casco.
9. **Densidades fijas.** Cada material y cada líquido tiene un valor único, sin efecto de la temperatura. Las burbujas que suben cuando el bloque es más denso que el líquido son solo decorativas.
