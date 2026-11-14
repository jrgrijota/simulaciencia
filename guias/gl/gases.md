# Guía docente: simulación de gases

## Ficha rápida

A simulación de gases mostra partículas que chocan coas paredes dun globo elástico ou dun recipiente ríxido e traduce eses choques en presión e volume. En Galicia o seu uso principal é en 4.º de ESO, onde o currículo sitúa os gases, e en 2.º de ESO para presentar a teoría cinético-molecular. Serve tamén de repaso cualitativo en 1.º de Bacharelato.

| Dato | Detalle |
| --- | --- |
| Ligazón | [jrgrijota.github.io/simulacion-gases](https://jrgrijota.github.io/simulacion-gases/) |
| Cursos | 4.º de ESO (uso principal), 2.º de ESO; repaso cualitativo en 1.º de Bacharelato |
| Materia | Física e Química |
| Duración orientativa | 15–20 minutos de explicación coa simulación proxectada |
| Material | Proxector ou encerado dixital; funciona no navegador, tamén no móbil e na tableta, sen instalar nada |
| Coñecementos previos | Idea de partícula, temperatura en K e ºC, volume en litros; en 4.º de ESO, presión como forza por unidade de superficie |
| Accesibilidade | Só tema escuro. Cores das partículas e da membrana configurables e opción «Pantalla completa» en «⚙ Axustes Visuais» |

## Como funciona a simulación

A pantalla ten un panel esquerdo de controis e un lenzo central co gas. O despregable «Comportamento do recipiente» escolle entre «Membrana Flexible (Globo)», a opción inicial, e «Parede Ríxida (Fixa)». Enriba do lenzo están os botóns «⏸ Pausa» e «⚙ Axustes Visuais», que abre un caixón lateral.

| Modo | Que controla o docente | Que mostra |
| --- | --- | --- |
| Membrana Flexible (Globo) | «Cantidade de partículas», de 1 a 500 (inicial 50, botóns de ±5). «Temperatura», de 0 a 500 K (inicial 273 K, botóns de ±10), ou de −273 a 227 ºC co interruptor K/ºC | Un globo vermello que se deforma con cada choque e unha liña verde descontinua co seu raio medio. A presión e o volume cambian á vez |
| Parede Ríxida (Fixa) | Os mesmos controis e, ademais, os botóns de «Volume do recipiente», que cambian o raio de 5 en 5 px (de 30 a 210 px) e mostran o volume en litros. O recipiente empeza co tamaño medio que tiña o globo | Un círculo azul claro que só cambia de tamaño con eses botóns: a raio fixo o volume é constante e só cambia a presión |
| Axustes Visuais | «Tamaño da partícula» (1–15 px, inicial 3 px), cores, «Cor segundo a velocidade» (activado), «Amosar a gráfica P-V» (desactivado), «Pantalla completa» | Partículas de azul (lentas) a vermello (rápidas) e unha gráfica P-V na esquina inferior esquerda, con P en atm e V en L desde 0 |

Tres elementos sosteñen a explicación:

- **As tarxetas de «Datos Físicos».** Mostran «Presión (P)» en atm e «Volume (V)» en L, con dous decimais. Ao inicio andan arredor de 1,6 atm e 0,8 L; varían algo dunha carga a outra porque as velocidades iniciais son ao chou. A presión oscila porque se recalcula cada segundo.
- **A «Monitorización do sistema».** Este despregable mostra a «Frecuencia de impactos» en choques/s e os «Choques totais». A presión suma o impulso de cada choque contra a parede (2 · velocidade perpendicular) durante un segundo e divídeo polo perímetro: conta cantos choques hai e o fortes que son. Con 50 partículas a 273 K saen uns 50 choques/s.
- **A cor segundo a velocidade.** A unha mesma temperatura conviven partículas azuis e vermellas. As colisións entre partículas reparten a enerxía e ensanchan a gama de velocidades.

A simulación non ten panel de axuda nin de conceptos clave: a explicación corre a cargo do docente.

## Uso en cada curso

En 2.º de ESO a simulación serve para presentar o modelo cinético e as escalas de temperatura; en 4.º de ESO, para as leis dos gases e o concepto de presión. Os contidos e os criterios de avaliación citados son os do currículo de Física e Química de Galicia (Decreto 156/2022, DOG do 26 de setembro de 2022), que organiza cada curso en bloques.

A diferenza doutras comunidades, o currículo galego de 3.º de ESO non inclúe os gases: o seu bloque 2 trata a estrutura atómica e os compostos. As leis dos gases aparecen en 4.º, dentro dos sistemas materiais. Por iso a secuencia de leis dos gases vai aquí en 4.º.

### 2.º de ESO: teoría cinética e temperatura

*13–14 anos · 8th grade nos EUA · Year 9 no Reino Unido*

**Contidos.** Bloque 1: «Contornas e recursos de aprendizaxe científica, como o laboratorio ou as contornas virtuais». Bloque 2: «Teoría cinético-molecular: aplicación a observacións sobre a materia explicando as súas propiedades, os estados de agregación, os cambios de estado e a formación de mesturas e disolucións». Bloque 3: «Efectos da calor sobre a materia: análise dos efectos e aplicación en situacións cotiás».

**Criterios de avaliación.** CA2.1 (explicar fenómenos relacionados coa composición e coa estrutura dos sistemas materiais) e CA3.1 (explicar fenómenos cotiáns relacionados coa enerxía).

O currículo non nomea as escalas de temperatura; a conversión entre K e ºC encaixa no uso de unidades do bloque 1 (CA1.3).

**Obxectivos.** Describir un gas como partículas en movemento con espazo baleiro entre elas. Relacionar a temperatura coa rapidez das partículas. Converter entre K e ºC. Explicar a dilatación dun gas ao quentalo.

**Secuencia de explicación (15–20 min).**

1. Configuración inicial: globo, 50 partículas, 273 K. Preguntar que hai entre as partículas. Premer «⏸ Pausa» e sinalar o espazo baleiro. Retomar con «▶ Continuar».
2. Activar o interruptor K/ºC: 273 K pasa a 0 ºC. Escribir no encerado T (K) = t (ºC) + 273. Os extremos do control deslizante cambian a −273 ºC e 227 ºC.
3. Baixar a temperatura ata 0 K (−273 ºC). As partículas páranse e a presión marca 0,00 atm. Presentar o cero absoluto como o límite inferior da escala Kelvin.
4. Subir a 500 K. As partículas van máis rápidas e hai máis vermellas. O globo crece e o volume pasa de uns 0,70 L a 0 K a uns 0,90 L.
5. Volver a 100 K: o globo encolle ata uns 0,75 L. Relacionalo coa dilatación: ao quentar, as partículas non crecen, móvense máis e empurran máis a parede.

### 3.º de ESO: sen contido específico

*14–15 anos · 9th grade nos EUA · Year 10 no Reino Unido*

O currículo galego de 3.º non trata os gases. A simulación só ten cabida como repaso breve do modelo cinético ao estudar os cambios físicos (bloque 4, «Os sistemas materiais: análise dos diferentes tipos de cambios que experimentan…»), con pasos 1 e 4 da secuencia de 2.º.

### 4.º de ESO: leis dos gases e presión

*15–16 anos · 10th grade nos EUA · Year 11 no Reino Unido*

**Contidos.** Bloque 1: «Diversas contornas e recursos de aprendizaxe científica, como os laboratorios ou as contornas virtuais». Bloque 2: «Sistemas materiais: resolución de problemas e outras situacións de aprendizaxe diversas sobre disolucións e gases, entre outros sistemas materiais significativos». Bloque 4: «Forzas e presión nos fluídos: efectos das forzas e da presión sobre os líquidos e os gases, estudando os principios fundamentais que as describen».

**Criterios de avaliación.** CA2.1 e CA2.2 (explicar e resolver problemas sobre a composición e a estrutura dos sistemas materiais), CA4.1 (explicar fenómenos relacionados coas forzas e os seus efectos) e CA1.4 (uso correcto de varios sistemas de unidades).

O currículo non nomea as leis de Boyle, Charles e Gay-Lussac nin a lei xeral dos gases; son o contido habitual dos problemas «sobre gases» do bloque 2.

**Obxectivos.** Interpretar a presión como efecto dos choques das partículas coas paredes, repartidos por toda a parede. Predicir como cambian a presión e o volume ao variar a temperatura e o número de partículas. Explicar cada lei dos gases co modelo cinético e relacionar á vez presión, volume, temperatura e cantidade de gas.

**Secuencia de explicación (20–25 min).**

1. En «⚙ Axustes Visuais», baixar «Tamaño da partícula» a 2 px: o gas achégase máis a un gas ideal. Abrir «Monitorización do sistema» e relacionar a presión coa frecuencia de impactos. Mostrar que o globo se deforma por igual en todas as direccións: a presión actúa sobre toda a parede, non só cara abaixo.
2. Co globo, baixar a 100 K e logo subir a 500 K. O volume pasa de uns 0,74 L a uns 0,86 L. Lei de Charles, cualitativa: a máis temperatura, máis volume (ver simplificación 4).
3. Volver a 273 K, agardar uns segundos e escoller «Parede Ríxida (Fixa)». O volume queda fixo arredor de 0,8 L e a presión anda nas 1,5 atm. Subir a 500 K: a presión sobe a unhas 2,7 atm. Baixar a 125 K: unhas 0,7 atm. Lei de Gay-Lussac: P / T mantense, unhas 0,0055 atm/K nos tres casos.
4. Volver a 273 K e pasar de 50 a 100 partículas. A presión duplícase, de unhas 1,6 a unhas 3,4 atm. Preguntar por que: o dobre de partículas dá o dobre de choques por segundo.
5. Volver a 50 partículas. Calcular P · V ≈ 1,6 atm · 0,8 L ≈ 1,3 atm·L. Co botón «+» de «Volume do recipiente» subir ata uns 2,3 L: a presión baixa a unhas 0,56 atm e P · V volve dar unhas 1,3 atm·L. Con «−» baixar ata uns 0,37 L: P ≈ 3,8 atm, con P · V ≈ 1,4 atm·L. Lei de Boyle: a temperatura constante P · V mantense; as décimas de diferenza son ruído da medida.
6. Escribir P · V / T = constante e pechar cunha táboa no encerado: que variable se fixa, cal se cambia e que ocorre.

### 1.º de Bacharelato: repaso cualitativo

*16–17 anos · 11th grade nos EUA · Year 12 no Reino Unido*

A simulación pode servir de repaso ao tratar o bloque 3, «Cálculo de cantidades de materia en sistemas fisicoquímicos concretos, como gases ideais ou disolucións, así como o estudo das súas propiedades e variables de estado en situacións da vida cotiá», e o bloque 7, «Variables termodinámicas dun sistema para relacionar as variacións de temperatura que experimenta coas transferencias de enerxía que se producen coa súa contorna». Serve para ligar a temperatura coa enerxía cinética media das partículas e a presión cos choques. Con parede ríxida e 2 px, P · V mantense e P é proporcional a T, con unhas décimas de ruído. Pero non serve para P · V = n · R · T con números: as súas unidades son de escala.

## Concepcións alternativas que axuda a corrixir

A simulación ataca sobre todo a idea dun gas continuo e estático e a confusión entre propiedades do gas e das súas partículas. Cada fila indica a idea previa frecuente e como desmontala coa simulación.

| Idea do alumnado | Idea correcta | Como mostralo |
| --- | --- | --- |
| «Entre as partículas do gas hai aire» | Entre as partículas hai baleiro | 10 partículas a 273 K e «⏸ Pausa»: case todo o globo está baleiro |
| «Ao quentar un gas, as súas partículas fanse máis grandes» | As partículas non cambian; móvense máis rápido e chocan máis | Globo de 100 a 500 K: o globo crece e as partículas seguen co mesmo tamaño |
| «Ao comprimir un gas, as partículas encóllense» | Redúcese o espazo entre elas, non o seu tamaño | Recipiente ríxido de 2,3 L e despois de 0,37 L (secuencia de 4.º): mesmo tamaño de partícula, máis amoreadas |
| «O gas empurra só cara abaixo, polo seu peso» | A presión débese a choques en todas as direccións | Globo con 200 partículas: a membrana abómbase por igual en todo o contorno |
| «Todas as partículas dun gas van á mesma velocidade» | A unha temperatura dada hai unha distribución de velocidades | 100 partículas a 273 K con «Cor segundo a velocidade»: conviven azuis e vermellas |
| «Cada partícula ten a súa temperatura» ou «as partículas quéntanse» | A temperatura mide a enerxía cinética media do conxunto | Pausar a 273 K e sinalar partículas de cores distintas no mesmo gas |
| «Ao quentar un gas hai máis gas» | A cantidade de partículas non cambia ao quentar | Recipiente ríxido de 273 a 500 K: o contador segue en 50 e a presión sobe |

## Simplificacións que convén coñecer

A simulación prioriza a relación entre choques e presión e, para iso, simplifica a xeometría, as unidades e o cálculo. Convén coñecer estas licenzas para non reforzar ideas incorrectas sen querer.

1. **O gas é bidimensional.** As partículas móvense nun plano e o «volume» é a área do círculo, convertida a litros en proporción directa (5 L para 220 px de raio). A «presión» é forza por unidade de lonxitude do contorno. Aínda así, P · V e P / T compórtanse como nun gas real.
2. **A presión mídese en cada segundo.** Súmase o impulso dos choques contra a parede durante un segundo, así que oscila unhas décimas. Con poucas partículas convén ler varios valores e quedar coa media.
3. **As unidades son de escala.** O factor da presión e a conversión a litros están escollidos para dar cifras razoables. Con 1,6 atm, 0,8 L e 273 K sairían uns 0,06 mol, non 50 partículas. Os números serven para comparar, non para aplicar P · V = n · R · T.
4. **O globo é un resorte sen atmosfera exterior.** A membrana son 60 nodos unidos por resortes, cun raio de repouso de 90 px. A 0 K o globo non se baleira: queda nuns 0,70 L. De 100 a 500 K o volume só crece de uns 0,75 a 0,90 L, mentres a presión dentro case se cuadriplica: a membrana é moi ríxida. A lei de Charles vese no seu sentido, non na súa proporción.
5. **A temperatura reescala as velocidades.** Cada partícula nace cunha rapidez ao chou entre 1,5 e 3,5 px por fotograma, multiplicada por √(T/300). Ao cambiar T, todas se multiplican por √(T nova / T anterior). Así a enerxía cinética media é proporcional a T, como no modelo real. A conversión usa 273, non 273,15.
6. **O cero absoluto é clásico.** A 0 K as partículas páranse de todo e a presión fórzase a 0,00 atm. Abonda en ESO. En Bacharelato pódese matizar que é un límite inalcanzable.
7. **Os choques coa parede non arrefrían nin quentan.** As partículas rebotan sen perder rapidez aínda que a membrana se mova. Non hai arrefriamento ao expandirse: a temperatura só cambia co control. Todos os procesos son isotermos salvo que o docente mova a temperatura.
8. **As partículas teñen tamaño.** O raio inicial é 3 px e chocan entre si. Ese volume propio fai que a presión creza algo máis ca o número de partículas: con 3 px e moitas partículas o factor pasa de 2. Con 1 ou 2 px, de 50 a 100 partículas duplícase. Para as leis dos gases convén usar 2 px.
9. **A gráfica P-V garda pouco.** Engade un punto cada 3 s cos valores medios e garda os 35 últimos. V vai de 0 a 5 L e P de 0 ao máximo recente, que se reaxusta só. Bórrase ao cambiar de modo.

## Ficha de actividades do alumnado

A [ficha de actividades](https://simulaciencia.es/gl/fichas/gases/) segue o esquema predí, observa e explica. Cada actividade leva unha ligazón á simulación xa preparada, así que funciona na aula de informática, con tabletas ou como tarefa na casa. Descárgase en Word e LibreOffice para adaptala.

| Curso | Actividades | Duración orientativa |
| --- | --- | --- |
| 4.º de ESO | Antes de comezar, actividades 1 a 6, Aplica o aprendido, Revisa as túas ideas, Para ampliar e Autoavaliación | Unha sesión de 50–55 minutos, ou dúas se se fan na clase os problemas |
| 2.º de ESO | Antes de comezar, actividades 1 a 3 e Revisa as túas ideas | 25–30 minutos |
| 1.º de Bacharelato | Actividades 4 a 6 e Para ampliar, como repaso cualitativo | 20–25 minutos |

A táboa de «Antes de comezar» recolle cinco ideas previas sobre os gases. Convén non corrixila ao principio: o alumnado volve a ela en «Revisa as túas ideas». Os valores da simulación varían unhas décimas dunha carga a outra e dun segundo a outro; as solucións dan valores aproximados.

### Solucións

| Apartado | Solución |
| --- | --- |
| Antes de comezar | Todas falsas. a) Entre as partículas hai baleiro (actividade 1). b) As partículas non cambian de tamaño; móvense máis axiña (actividade 3). c) Redúcese o espazo entre elas (actividade 5). d) O gas empurra por igual en todas as direccións: o globo defórmase cara a todos os lados (actividade 1). e) As partículas móvense sen parar (actividade 1) |
| Actividade 1 | As partículas ocupan unha parte moi pequena; case todo é baleiro. Móvense en liña recta, en todas as direccións, ata que chocan. Ao chocar coa parede empúrrana e rebotan. O globo non se desinfla porque os choques empurran a parede desde dentro en todas as direccións |
| Actividade 2 | 50 partículas: uns 45–50 choques/s e unhas 1,5 atm. 100: uns 100 choques/s e unhas 3,4 atm. 200: uns 200 choques/s e unhas 6,8 atm. A presión é proporcional ao número de choques por segundo (e á súa forza) |
| Actividade 3 | O volume crece coa temperatura, de uns 0,74 L a 100 K a uns 0,86 L a 500 K; as partículas pasan de azuis a vermellas. Ao quentar, as partículas móvense máis axiña e empurran máis a parede, que cede. As partículas non cambian de tamaño |
| Actividade 4 | O volume non cambia (uns 0,8 L). P ≈ 0,7 atm a 125 K, ≈ 1,5 atm a 273 K e ≈ 2,7 atm a 500 K; P / T ≈ 0,0055 atm/K nos tres casos (lei de Gay-Lussac). O gas que queda no bote aumenta a súa presión ao quentarse e pode rebentalo |
| Actividade 5 | P ≈ 3,8 atm con 0,37 L, ≈ 1,5 atm con 0,8 L, ≈ 0,85 atm con 1,5 L e ≈ 0,56 atm con 2,3 L. P · V mantense nunhas 1,3–1,4 atm·L: lei de Boyle. As partículas non se encollen: hai menos espazo entre elas e chocan máis a miúdo coa parede |
| Actividade 6 | Inicial ≈ 0,56 atm. A 500 K sobe a ≈ 1,0 atm (choques máis fortes e frecuentes). Con 100 partículas sobe a ≈ 2 atm (o dobre de choques). Coa metade de volume sobe a ≈ 4 atm (as partículas chegan antes á parede) |
| Aplica o aprendido | 1) Boyle: P₂ = 1 atm · 4 L / 1 L = 4 atm. 2) Gay-Lussac: P₂ = 1 atm · 450 K / 300 K = 1,5 atm. 3) Charles: V₂ = 2 L · 360 K / 300 K = 2,4 L. 4) O rozamento quenta o aire das rodas; as súas partículas móvense máis axiña e chocan máis e máis forte contra as paredes, que apenas cambian de volume |
| Para ampliar | 1) Unha hipérbole: P baixa ao aumentar V. 2) P · V / T sae aproximadamente igual, con unhas décimas de ruído |
