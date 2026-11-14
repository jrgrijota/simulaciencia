# Guía docente: simulación de enerxía mecánica

## Ficha rápida

A simulación de enerxía mecánica solta unha vagoneta nunha montaña rusa ou un péndulo e mostra en cada instante a enerxía cinética, a potencial, a mecánica e a calor disipada, con rozamento opcional. En Galicia o seu uso principal é en 4.º de ESO e 1.º de Bacharelato, con aplicación en 2.º de ESO ás transformacións da enerxía e uso puntual en 2.º de Bacharelato Física.

| Dato | Detalle |
| --- | --- |
| Ligazón | [jrgrijota.github.io/simulacion-energia-mecanica](https://jrgrijota.github.io/simulacion-energia-mecanica/) |
| Cursos | 4.º de ESO e 1.º de Bacharelato (uso principal), 2.º de ESO; uso puntual en 2.º de Bacharelato Física |
| Materia | Física e Química; Física de 2.º de Bacharelato |
| Duración orientativa | 15–20 minutos de explicación coa simulación proxectada |
| Material | Proxector ou encerado dixital; funciona no navegador, tamén no móbil e na tableta, sen instalar nada. En pantallas estreitas os controis pasan arriba e o lenzo debaixo; para explicar é mellor unha pantalla grande |
| Coñecementos previos | Velocidade, masa e peso (P = m · g). Para o rozamento, a forza de rozamento e o traballo dunha forza |
| Accesibilidade | Tema escuro, claro e de alto contraste (botón da roda dentada). Botón de pausa e velocidade de reprodución ×¼, ×½, ×1 e ×2 |

## Como funciona a simulación

A simulación ten dous modos, «Montaña rusa» e «Péndulo», que se escollen enriba do panel esquerdo. Nos dous vese a escena á esquerda, as barras de enerxía á dereita e, debaixo, a gráfica «Enerxía fronte ao tempo» cos últimos 20 s. Os botóns «⏸ Pausar» e de reiniciar e a fila «Velocidade de reprodución» controlan o movemento. Calquera cambio nun deslizador do modo, na gravidade ou no perfil da vía volve soltar o corpo desde o punto de saída; o rozamento, en cambio, pódese activar e axustar en marcha.

| Modo | Que controla o docente | Que mostra |
| --- | --- | --- |
| Montaña rusa | Perfil da vía: clásica (varios outeiros), «Outeiro máis alto (27 m)» e val en U. Altura de saída (5–30 m, en pasos de 0,5), velocidade inicial (0–15 m/s) e masa da vagoneta (100–1000 kg). Valores iniciais: clásica, 25,0 m, 0,0 m/s e 500 kg. A vagoneta tamén se pode arrastrar a calquera punto da vía | Unha vía de 60 m de ancho co eixe de alturas de 0 a 30 m. A vía clásica baixa de 32 m a un val a 0 m e ten outeiros de 18 m e 12 m e vales de 4 m e 1 m. A vía co outeiro sobe a 27 m entre dous vales a 0 m; o val en U é unha parábola. Os dous extremos da vía soben a 32 m e teñen topes |
| Péndulo | Lonxitude do fío (0,5–5,0 m), ángulo inicial (5–90°) e masa da bóla (0,1–5,0 kg). Valores iniciais: 2,0 m, 45° e 1,0 kg. A bóla tamén se pode arrastrar para soltala desde outro ángulo, a un ou outro lado | O soporte, o fío, a bóla e o arco da traxectoria, co ángulo θ, a lonxitude L e o nivel h = 0 (punto máis baixo). Arriba lese o período T ≈ 2π√(L/g) |
| Contorna (nos dous modos) | Gravidade: Terra (9,8), Lúa (1,62), Marte (3,71) e Xúpiter (24,79 m/s²). Interruptor de rozamento co coeficiente de rozamento (μ) de 0,01 a 0,20 na montaña rusa (empeza en 0,05) e a resistencia do aire (b) de 0,01 a 0,50 kg/s no péndulo (empeza en 0,10) | Con rozamento aparece a barra Q e a curva laranxa da gráfica, e a enerxía mecánica baixa. Se a vagoneta se para, un aviso explica que o rozamento transformou en calor a enerxía mecánica que lle faltaba |

Catro elementos sosteñen a explicación:

- **As barras de enerxías.** Ec (verde), Ep (azul), Em (amarelo) e Q (laranxa raiado) debúxanse a escala da enerxía inicial, marcada cunha liña descontinua. Debaixo de cada barra lese o seu valor e a súa porcentaxe. Arriba lémbrase «Ec + Ep = Em» e «Em + Q = E inicial».
- **A liña de altura máxima alcanzable.** Unha liña amarela descontinua marca a altura «Em/(m·g)», á que chegaría o corpo se toda a súa enerxía mecánica fose potencial. Sen rozamento coincide coa altura de saída e non se move; con rozamento baixa pouco a pouco e sepárase dunha liña tenue que marca a altura inicial.
- **A gráfica enerxía–tempo.** As catro curvas usan as mesmas cores. Sen rozamento Ec e Ep crúzanse e soben e baixan en espello, e Em é unha recta horizontal. Con rozamento Em descende e Q sobe na mesma cantidade.
- **O vector velocidade.** O botón «Vector velocidade», arriba á dereita do lenzo, debuxa unha frecha violeta tanxente á traxectoria co valor de v. A súa escala axústase para que a frecha máis longa posible mida sempre o mesmo.

O despregable «Monitorización en tempo real» está aberto ao inicio. Dá a velocidade, a altura, o tempo e as tres enerxías, e o bloque «Balance de enerxía» con E inicial, unha barra que reparte o 100 % entre Ec, Ep e Q e unha frase que resume o balance. O despregable de fórmulas reúne Ec = ½ · m · v², Ep = m · g · h, Em = Ec + Ep, Em,A = Em,B sen rozamento, Em,A = Em,B + |Wroz| con rozamento, a forza de rozamento (μ · N ou b · v), a altura do péndulo h = L · (1 − cos θ) e v = √(2 · g · Δh). Na cabeceira, a descrición resume as tres ideas clave.

## Uso en cada curso

En 4.º de ESO a simulación serve para presentar a enerxía cinética, a potencial e a conservación da enerxía mecánica, e para introducir o traballo de rozamento. En 1.º de Bacharelato traballa os sistemas conservativos e non conservativos, o teorema do traballo e a enerxía e a degradación da enerxía. En 2.º de ESO serve para describir de forma cualitativa as transformacións da enerxía. En 2.º de Bacharelato Física o seu uso é puntual, para a enerxía do péndulo como oscilador. Os contidos e os criterios de avaliación citados son os do currículo de Galicia (Decreto 156/2022, DOG do 26 de setembro de 2022, para ESO; Decreto 157/2022, da mesma data, para Bacharelato), que organiza cada curso en bloques.

En Galicia as transformacións da enerxía en xeral estúdanse en 2.º de ESO; o bloque de enerxía de 3.º centra a enerxía eléctrica. Por iso a secuencia cualitativa vai en 2.º.

### 4.º de ESO: enerxía cinética, potencial e a súa conservación

*15–16 anos · 10th grade nos EUA · Year 11 no Reino Unido*

**Contidos.** Bloque 3: «A enerxía: formulación e comprobación de hipóteses sobre as distintas formas de enerxía e aplicacións a partir das súas propiedades e do principio de conservación, como base para a experimentación e a resolución de problemas relacionados coa enerxía mecánica en situacións cotiás» e «Transferencias de enerxía: o traballo e a calor como formas de transferencia de enerxía entre sistemas relacionados coas forzas ou a diferenza de temperatura…». Bloque 4: «Principais forzas da contorna cotiá, recoñecemento do peso, a normal, o rozamento, a tensión ou o empuxe…». Bloque 1: «Diversas contornas e recursos de aprendizaxe científica, como os laboratorios ou as contornas virtuais».

**Criterios de avaliación.** CA3.1 (comprender e explicar as distintas formas e transferencias de enerxía), CA3.2 (resolver problemas sobre a enerxía e os seus procesos de intercambio) e CA3.5 (aplicar as leis máis importantes relacionadas coa enerxía para validar hipóteses).

O currículo galego non nomea por separado a enerxía cinética e a potencial nin a potencia; entran na «resolución de problemas relacionados coa enerxía mecánica».

**Obxectivos.** Calcular a enerxía cinética e a potencial gravitatoria. Explicar que, sen rozamento, a enerxía mecánica se conserva aínda que Ec e Ep cambien. Calcular velocidades a partir de diferenzas de altura. Recoñecer que o rozamento transforma enerxía mecánica en calor.

**Secuencia de explicación (15–20 min).**

1. Montaña rusa cos valores iniciais: reiniciar e premer «⏸ Pausar». A vagoneta, de 500 kg, está a 25,0 m. Calcular no encerado Ep = m · g · h = 500 × 9,8 × 25 = 122 500 J e comprobar «E inicial = 122,5 kJ». Como sae do repouso, Ec = 0 e toda a enerxía é potencial.
2. Pedir unha predición da velocidade no primeiro val (h = 0) e continuar. Con todo convertido en cinética, ½ · m · v² = 122 500 J e v = √(2 · 9,8 · 25) = 22,1 m/s. Con ×¼ é doado pausar no val e lelo na velocidade.
3. Pausar no cume do outeiro de 18 m. Ep = 500 × 9,8 × 18 = 88 200 J, así que Ec = 122 500 − 88 200 = 34 300 J e v = 11,7 m/s. As barras Ec e Ep cambian, pero Em segue chea: 122,5 kJ.
4. Deixar correr a simulación. A vagoneta chega ao extremo dereito e volve xusto ata 25,0 m, a liña amarela «altura máx. alcanzable». Na gráfica, Em é unha recta e Ec e Ep crúzanse.
5. Subir a masa a 1000 kg. A enerxía inicial duplícase (245,0 kJ), pero a vagoneta móvese igual e a velocidade no val segue sendo 22,1 m/s: a masa simplifícase en ½ · m · v² = m · g · h.
6. Volver a 500 kg e activar o rozamento con μ = 0,05. En cada viaxe a vagoneta queda máis baixa (22,4 m, 20,0 m, 17,5 m…), a liña amarela baixa e crece a barra Q. Pechar co balance: Em,inicial = Em,final + |Wroz|. A enerxía non desaparece: transfórmase en calor.

### 1.º de Bacharelato: sistemas conservativos e non conservativos

*16–17 anos · 11th grade nos EUA · Year 12 no Reino Unido*

**Contidos.** Bloque 7: «Enerxía potencial e enerxía cinética dun sistema sinxelo: aplicación á conservación da enerxía mecánica en sistemas conservativos e non conservativos e ao estudo das causas que determinan o movemento dos obxectos no mundo real» e «Conceptos de traballo e potencia: elaboración de hipóteses sobre o balance enerxético de sistemas mecánicos ou eléctricos da contorna cotiá e o seu rendemento». Bloque 5: «Variables cinemáticas en función do tempo nos distintos movementos que pode ter un obxecto, con ou sen aceleración…».

**Criterios de avaliación.** CA7.1 (aplicar os conceptos de calor e traballo e o teorema de conservación da enerxía mecánica), CA7.2 (resolver problemas sobre transferencia de enerxía mecánica e térmica) e CA7.4 (utilizar con rigor as unidades das magnitudes relacionadas coa enerxía).

O currículo non nomea o teorema do traballo e a enerxía, a forza de rozamento como forza non conservativa nin o segundo principio da termodinámica; son a forma habitual de tratar os «sistemas non conservativos» do bloque 7.

**Obxectivos.** Aplicar o principio de conservación da enerxía mecánica con e sen forzas non conservativas. Calcular o traballo de rozamento. Predicir se un corpo supera un obstáculo a partir da súa enerxía. Interpretar a degradación da enerxía nunha gráfica enerxía–tempo.

**Secuencia de explicación (15–20 min).**

1. Perfil «Outeiro máis alto (27 m)» con saída a 25,0 m e sen rozamento. Preguntar se a vagoneta pasará o outeiro. Non: a liña amarela queda por debaixo do cume e a vagoneta dá a volta a 25,0 m, antes de chegar arriba.
2. Calcular a velocidade inicial mínima para pasar: ½ · v₀² ≥ g · (27 − 25), logo v₀ ≥ 6,26 m/s. Comprobalo: con 6,0 m/s a vagoneta dá a volta a 26,8 m; con 6,5 m/s pasa e chega a 27,2 m no outro lado. A masa non intervén.
3. Volver á vía clásica, saída a 25,0 m, e activar o rozamento con μ = 0,05. Pausar ao chegar ao primeiro val: Q ≈ 2,37 kJ. Con N = m · g · cos θ, o traballo de rozamento é μ · m · g · cos θ · Δs = μ · m · g · Δx, con Δx o percorrido en horizontal. Desde a saída (x ≈ 4,3 m) ata o val (x = 14 m): 0,05 × 500 × 9,8 × 9,7 ≈ 2370 J.
4. Usar a gráfica: Em baixa máis rápido onde a vagoneta vai máis rápida, porque percorre máis vía en cada segundo, e Q crece exactamente o que baixa Em. Ler en «Balance de enerxía» que porcentaxe queda en cada momento. Relacionalo co teorema do traballo e a enerxía: Wroz = ΔEm.
5. Deixar que a vagoneta se pare (algo máis de 2 min a ×1, a metade a ×2). Remata no val de 1 m con Ep = 4,9 kJ: só o 4 % da enerxía segue sendo mecánica e o 96 % converteuse en calor. Aínda que a enerxía total se conserva, a calor non se pode volver converter de todo en enerxía mecánica: é a degradación da enerxía.
6. Pasar ao péndulo con rozamento, b = 0,10 kg/s. A amplitude e Em baixan cada vez menos en cada oscilación: tras 5 s queda o 62 % e tras 10 s o 37 %. Subir a masa a 2,0 kg: agora queda o 79 % e o 61 %. Con resistencia do aire a perda relativa depende de b/m; co rozamento da vía, en cambio, non depende da masa.

### 2.º de ESO: transformacións da enerxía

*13–14 anos · 8th grade nos EUA · Year 9 no Reino Unido*

**Contidos.** Bloque 3: «A enerxía: formulación de cuestións e hipóteses sobre a enerxía, propiedades e manifestacións que a describan como a causa de todos os procesos de cambio» e «Deseño e comprobación experimental de hipóteses relacionadas co uso doméstico e industrial da enerxía nas súas distintas formas e as transformacións entre elas». Bloque 1: «Estratexias de interpretación e produción de información científica utilizando diferentes formatos e diferentes medios…».

**Criterios de avaliación.** CA3.1 (explicar fenómenos cotiáns relacionados coa enerxía) e CA3.4 (interpretar e comunicar información sobre a enerxía e as súas transferencias).

**Obxectivos.** Recoñecer a enerxía de movemento e a enerxía debida á altura. Describir como se transforma unha na outra. Entender que a enerxía non se perde, senón que se transforma noutras formas menos útiles.

**Secuencia de explicación (15–20 min).**

1. Péndulo cos valores iniciais. Sen falar de fórmulas, sinalar as barras: arriba toda a enerxía é azul (potencial) e abaixo é verde (cinética). A amarela, a suma, non cambia.
2. Pausar no punto máis baixo e nun extremo. Ler no bloque «Balance de enerxía» como se reparte o 100 % entre Ec e Ep.
3. Montaña rusa cos valores iniciais. Preguntar onde vai máis rápida a vagoneta: nos vales, onde é menor a altura. Comprobalo con «Vector velocidade».
4. Activar o rozamento. A vagoneta non volve á altura de saída e aparece a barra laranxa Q: parte da enerxía converteuse en calor nas rodas e na vía. A enerxía transfórmase, non se destrúe.
5. Escoller a gravidade da Lúa (1,62 m/s²) con 25,0 m de saída. A enerxía inicial baixa a 20,3 kJ e a vagoneta vai moito máis amodo (9,0 m/s no val). Relacionalo co peso.
6. Pedir ao alumnado que copie unha táboa con altura, velocidade, Ec e Ep en catro puntos da vía (pausando en cada un) e que comprobe que Ec + Ep dá sempre o mesmo.

### 3.º de ESO: sen contido específico

*14–15 anos · 9th grade nos EUA · Year 10 no Reino Unido*

O bloque 3 de 3.º trata a enerxía eléctrica e «O aforro enerxético e a conservación sostible do ambiente». A simulación só ten cabida como repaso da secuencia de 2.º, por exemplo para discutir que a enerxía «perdida» por rozamento non se destrúe.

### 2.º de Bacharelato Física: uso puntual

*17–18 anos · 12th grade nos EUA · Year 13 no Reino Unido*

No bloque 4 aparece «Movemento oscilatorio: variables cinemáticas e dinámicas dun corpo oscilante e conservación da enerxía nestes sistemas». O péndulo con ángulos pequenos (5–10°) é un oscilador case harmónico. Na gráfica, Ec e Ep oscilan coa metade do período do péndulo e sempre suman o mesmo. Con resistencia do aire vese un oscilador amortecido: a enerxía decae de forma exponencial, Em ∝ e^(−b·t/m). A simulación usa g · h e non −GMm/r, así que non serve para a enerxía no campo gravitacional a grande escala; para iso é mellor a simulación de órbitas.

## Concepcións alternativas que axuda a corrixir

A simulación ataca sobre todo a idea de que a enerxía «se gasta» ou desaparece e a de que os corpos máis pesados caen máis rápido por unha rampla. Cada fila indica a idea previa frecuente e como desmontala coa simulación.

| Idea do alumnado | Idea correcta | Como mostralo |
| --- | --- | --- |
| «A enerxía gástase e desaparece» | A enerxía transfórmase: con rozamento a mecánica pasa a calor, e Ec + Ep + Q é sempre a enerxía inicial | Montaña rusa con rozamento: a barra Q crece o mesmo que baixa Em, e o bloque «Balance de enerxía» sempre suma 100 % |
| «Unha vagoneta máis pesada baixa máis rápido» | Sen rozamento, a velocidade só depende do desnivel: v = √(2 · g · Δh) | Masa de 100 kg e de 1000 kg con saída a 25,0 m: nos dous casos 22,1 m/s no val |
| «Con máis velocidade no val, pode subir máis alto que de onde saíu» | Sen rozamento nin velocidade inicial, nunca supera a altura de saída | Perfil «Outeiro máis alto (27 m)» con saída a 25,0 m: dá a volta en 25,0 m |
| «No punto máis alto non hai enerxía» | Arriba a enerxía é potencial; só é nula a cinética | Péndulo en pausa nun extremo: Ec = 0 e Ep = Em = 5,74 J |
| «A enerxía potencial é unha propiedade absoluta do corpo» | Depende do nivel de referencia que se escolla; o que importa son as diferenzas | Sinalar o nivel h = 0 (punto máis baixo): co nivel cero no chan da aula, todas as Ep cambiarían na mesma cantidade e v non |
| «Se non hai rozamento, o péndulo acabará parándose igual» | Sen forzas non conservativas oscila para sempre coa mesma amplitude | Péndulo sen rozamento a ×2 durante un minuto: a liña amarela e a amplitude non cambian |
| «O rozamento só actúa cando o corpo vai amodo» | O traballo de rozamento depende do percorrido; actúa durante todo o movemento | Montaña rusa con μ = 0,05: a curva Q da gráfica sobe durante todo o traxecto |

## Simplificacións que convén coñecer

A simulación prioriza que se vexa o balance de enerxía e, para iso, simplifica a vía, o rozamento e o péndulo. Convén coñecer estas licenzas para non reforzar ideas incorrectas sen querer.

1. **A vagoneta é un punto sobre o raíl.** Non ten tamaño nin rodas que xiren, e vai suxeita á vía, coma nas montañas rusas reais: nunca se despega, aínda que vaia moi rápido por un cume. Non hai bucles.
2. **Normal sen parte centrípeta.** O rozamento usa N = m · g · cos θ, coma nos problemas de clase. Nas curvas reais a normal é maior nos vales e menor nos cumes; aquí ignórase. Por iso o traballo de rozamento é exactamente μ · m · g polo percorrido horizontal.
3. **Un único coeficiente μ.** O mesmo coeficiente vale para o rozamento estático e o dinámico. A vagoneta párase cando a súa velocidade chega a cero nun punto onde a pendente cumpre tan θ ≤ μ, aínda que non estea no fondo dun val.
4. **Rozamentos distintos en cada modo.** Na montaña rusa a forza é constante, μ · N. No péndulo é unha resistencia do aire proporcional á velocidade, b · v, sen rozamento no punto de suspensión. Por iso no péndulo a perda relativa depende de b/m e na montaña rusa non depende da masa.
5. **A calor non quenta nada.** A barra Q só conta a enerxía disipada. Non se calcula a que temperatura chegan a vía, as rodas ou o aire, nin se perde enerxía por son ou vibracións.
6. **Péndulo ideal.** O fío é inextensible e sen masa, e a bóla é puntual. O ángulo inicial vai de 5 a 90°: un fío non aguanta ángulos maiores. O período «T ≈ 2π√(L/g)» é o de oscilacións pequenas; a 45° o período real é duns 2,95 s en vez de 2,84 s.
7. **A escala do péndulo cambia con L.** O fío debuxado crece coa lonxitude, pero menos ca ela para que caiba na pantalla. As alturas dun mesmo péndulo están a escala; as de dúas lonxitudes distintas non se poden comparar na pantalla.
8. **Nivel de referencia fixo.** A enerxía potencial mídese sempre desde o punto máis baixo da vía ou da traxectoria. Non se pode cambiar o nivel cero.
9. **Enerxía calculada por balance.** O programa calcula a velocidade a partir de Ec = E inicial − Ep − Q, de modo que as barras sempre suman exactamente o 100 %. Os extremos da vía teñen topes que devolven a vagoneta sen perdas; só se alcanzan con velocidade inicial.

## Ficha de actividades do alumnado

A [ficha de actividades](https://simulaciencia.es/gl/fichas/energia-mecanica/) segue o esquema predí, observa e explica. Cada actividade leva unha ligazón á simulación xa preparada, así que funciona na aula de informática, con tabletas ou como tarefa na casa. Descárgase en Word e LibreOffice para adaptala.

| Curso | Actividades | Duración orientativa |
| --- | --- | --- |
| 2.º de ESO | Antes de comezar, actividades 1 (sen as columnas de enerxía), 4, 5 e 6, Revisa as túas ideas e Autoavaliación | Unha sesión de 50–55 minutos |
| 4.º de ESO | Ficha completa salvo Para ampliar | Dúas sesións, ou unha se os problemas se fan como tarefa |
| 1.º de Bacharelato | Actividades 3 e 5, Para ampliar e problema 4 de Aplica o aprendido | Unha sesión |

A táboa de «Antes de comezar» recolle cinco ideas previas sobre a enerxía. Convén non corrixila ao principio: o alumnado volve a ela en «Revisa as túas ideas». Pausar xusto nun punto custa: con ×¼ é máis doado, e as solucións admiten unhas décimas de diferenza.

### Solucións

| Apartado | Solución |
| --- | --- |
| Antes de comezar | Todas falsas. a) Sen rozamento a velocidade só depende do desnivel (actividade 2). b) Sen rozamento nin velocidade inicial nunca supera a altura de saída (actividade 3). c) Arriba a enerxía é potencial; só é nula a cinética (actividade 4). d) Sen rozamento oscila sempre coa mesma amplitude (actividade 4). e) Transfórmase en calor; Ec + Ep + Q é sempre a enerxía inicial (actividade 5) |
| Actividade 1 | Saída: 25 m, 0 m/s, Ec = 0, Ep = 122,5 kJ. Primeiro val: 0 m, 22,1 m/s, Ec = 122,5 kJ, Ep = 0. Outeiro de 18 m: 11,7 m/s, Ec = 34,3 kJ, Ep = 88,2 kJ. Val de 4 m: 20,3 m/s, Ec = 102,9 kJ, Ep = 19,6 kJ. Em = 122,5 kJ sempre. Ao baixar, a Ep transfórmase en Ec, e ao subir ao revés. Sen rozamento a enerxía mecánica consérvase |
| Actividade 2 | 100 kg: 24,5 kJ e 22,1 m/s. 1000 kg: 245,0 kJ e 22,1 m/s. A masa aparece nas dúas enerxías: m · g · h = ½ · m · v², así que se simplifica e v = √(2 · g · h) |
| Actividade 3 | 0 m/s: non pasa, dá a volta a 25,0 m. 6,0 m/s: non pasa, chega a 26,8 m. 6,5 m/s: pasa, chega a 27,2 m (por riba do cume). Sen velocidade inicial a súa enerxía só alcanza para subir a 25 m. A velocidade inicial engade enerxía cinética: Em = m · g · h + ½ · m · v₀² |
| Actividade 4 | Extremo: h ≈ 0,59 m, v = 0, Ec = 0, Ep = Em ≈ 5,74 J. Punto máis baixo: h = 0, v ≈ 3,39 m/s, Ec = Em ≈ 5,74 J, Ep = 0. Tras un minuto a amplitude e a liña amarela non cambiaron. No punto máis alto hai enerxía potencial; só é nula a cinética. Na gráfica, Ec e Ep soben e baixan en espello e Em é unha recta horizontal |
| Actividade 5 | Volve cada vez máis baixo: uns 22,4 m, 20,0 m e 17,5 m. Em baixa a preto do 90 %, 80 % e 70 %, e Q sobe ao 10 %, 20 % e 30 %. A enerxía mecánica non desaparece: o rozamento transfórmaa en calor nas rodas e na vía. Ec + Ep + Q suman sempre o 100 % da enerxía inicial: conservación da enerxía. A calor repártese pola contorna e non se pode volver converter de todo en enerxía mecánica: a enerxía degrádase |
| Actividade 6 | Terra: 122,5 kJ e 22,1 m/s. Lúa: 20,3 kJ e 9,0 m/s. Marte: 46,4 kJ e 13,6 m/s. Xúpiter: 309,9 kJ e 35,2 m/s. Ep = m · g · h depende de g: con menos gravidade o peso é menor e hai menos enerxía que converter en movemento |
| Aplica o aprendido | 1) Ep = 400 · 9,8 · 20 = 78 400 J. 2) v = √(2 · 9,8 · 20) ≈ 19,8 m/s no val; no outeiro de 15 m, v = √(2 · 9,8 · 5) ≈ 9,9 m/s. 3) v = √(2 · 9,8 · 0,30) ≈ 2,4 m/s. 4) Wroz = −15 kJ; eses 15 kJ convertéronse en calor |
| Para ampliar | 1) ½ · v₀² ≥ g · (27 − 25), v₀ ≥ √(2 · 9,8 · 2) ≈ 6,26 m/s, entre 6,0 e 6,5. 2) Wroz = 0,05 · 500 · 9,8 · 9,7 ≈ 2,4 kJ, igual ca Q ≈ 2,37 kJ no val. 3) Tras 10 s queda un 37 % con 1 kg e un 61 % con 2 kg. A resistencia do aire, b · v, non depende da masa, pero a enerxía si: a perda relativa depende de b/m |
