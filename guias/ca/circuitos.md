# Guia docent: simulació de circuits elèctrics

## Fitxa ràpida

La simulació de circuits elèctrics munta circuits de corrent continu amb una pila, un interruptor i bombetes o resistències, i mostra en cada receptor la seva tensió, la seva intensitat i la seva potència, amb els electrons movent-se pels cables. Té tres modes: llei d’Ohm amb un receptor i aparells de mesura, receptors en sèrie i receptors en paral·lel. A Catalunya el seu ús principal és al bloc de 1r a 3r d’ESO, on el currículum demana el disseny, el muntatge i l’anàlisi de circuits elèctrics elementals «tant en un entorn físic com simulat», amb ús puntual a 4t d’ESO.

| Dada | Detall |
| --- | --- |
| Enllaç | [jrgrijota.github.io/simulacion-circuitos](https://jrgrijota.github.io/simulacion-circuitos/) |
| Cursos | 1r a 3r d’ESO (ús principal); ús puntual a 4t d’ESO i a Física de 1r de Batxillerat |
| Matèria | Física i Química; Física al batxillerat |
| Durada orientativa | 15–20 minuts d’explicació amb la simulació projectada (dues sessions al bloc de 1r a 3r) |
| Material | Projector o pissarra digital; funciona al navegador, també al mòbil i a la tauleta, sense instal·lar res. En pantalles estretes els controls passen a dalt i el llenç a sota; per explicar és millor una pantalla gran |
| Coneixements previs | La matèria està formada per àtoms amb electrons. Per a la llei d’Ohm, aïllar en una fórmula de tres magnituds i llegir una gràfica |
| Accessibilitat | Tema fosc, clar i d’alt contrast (botó de la roda dentada). Botó «Electrons» per amagar l’animació. Tot el que es prem al circuit també es pot fer des del tauler |

## Com funciona la simulació

La simulació té tres modes, «Llei d'Ohm», «Sèrie» i «Paral·lel», que es trien a dalt del tauler esquerre. En tots tres es veu el circuit a dalt i, a sota, una gràfica o uns diagrames de barres. Els canvis es veuen a l’instant: no cal prémer cap botó perquè el circuit «funcioni».

| Mode | Què controla el docent | Què mostra |
| --- | --- | --- |
| Llei d’Ohm | «Resistència (R)» de 5 a 100 Ω, en passos de 5 (comença a 20 Ω). Els botons «＋ Anotar mesura» i «Esborrar mesures» | Una pila, un interruptor, un amperímetre en sèrie i un receptor amb un voltímetre en paral·lel. Cada aparell té una pantalla amb la seva lectura. A sota, la «GRÀFICA INTENSITAT – TENSIÓ» i el requadre «LLEI D'OHM» amb el càlcul, per exemple «I = 6,00 V / 20 Ω = 0,300 A» |
| Sèrie | «Nombre de receptors» (2 o 3), «Resistència R₁», «R₂» i «R₃» de 5 a 100 Ω (comencen a 10, 20 i 30 Ω) i els botons «Receptors connectats» R₁, R₂ i R₃ | Els receptors l’un darrere l’altre al cable de dalt. Al costat de cadascun, la seva R, V, I i P. A sota, els diagrames «TENSIONS (V)» i «INTENSITATS (A)» |
| Paral·lel | Els mateixos controls que en sèrie | Cada receptor a la seva branca, entre el cable de dalt i el de baix, amb els seus valors al costat i els mateixos diagrames de barres |
| En tots tres modes | «Tensió de la pila» de 0 a 12 V, en passos de 0,5 (comença a 6,0 V). L’interruptor. «Tipus de receptor»: «Bombetes» o «Resistències» | Les bombetes brillen més com més potència tenen; les resistències es posen vermelles. Amb el circuit obert apareix l’avís «Circuit obert: no circula corrent (I = 0).» |

L’interruptor s’obre i es tanca des del tauler o prement-lo al circuit. En sèrie i en paral·lel, un receptor es treu i es torna a posar amb els botons «Receptors connectats» o prement-lo al circuit; al seu lloc queden els dos borns buits i el rètol «bombeta treta» o «resistència treta».

Quatre elements sostenen l’explicació:

- **Els electrons.** Uns punts blaus amb signe «−» recorren els cables de − a +, més de pressa on la intensitat és més gran. Són sempre a tots els cables: en obrir el circuit s’aturen, però no desapareixen. Una fletxa taronja amb «I = …» marca el sentit convencional del corrent, de + a − per fora de la pila. El botó «Electrons», a dalt a la dreta del llenç, els amaga.
- **Els rètols del circuit.** La pila mostra la seva tensió i els seus pols. Cada receptor mostra «R₁ = 10 Ω» i a sota (o a la seva dreta) «V₁», «I₁» i «P₁». Amb l’interruptor obert i un sol buit al circuit es llegeix la tensió entre els seus extrems, per exemple «V = 6,00 V».
- **La gràfica I–V.** Al mode «Llei d'Ohm» cada mesura anotada és un punt. Cada resistència té el seu color i la seva recta I = V / R; la del receptor actual és discontínua i un cercle marca el punt en què està funcionant. L’escala d’intensitat s’ajusta sola.
- **Els diagrames de barres.** En sèrie i en paral·lel hi ha una barra per receptor i una altra per a la pila (tensions) o el total (intensitats). Quan l’última és la suma de les altres, es dibuixa apilada amb els trossos V₁, V₂, V₃ o I₁, I₂, I₃. A dalt a la dreta es recorda la regla que es compleix, per exemple «V = V₁ + V₂ + V₃».

El desplegable «Mesures del circuit» és obert en començar. Dona la tensió, la intensitat total i la resistència (la «R equivalent» en sèrie i en paral·lel), una taula «Receptors» amb R, V, I i P de cadascun i del total, i una frase que resumeix el que passa. Al mode «Llei d'Ohm» hi afegeix la «Taula de mesures», amb fins a 12 files i la columna V / I. El desplegable «Fórmules essencials» reuneix I = q / t, V = I · R i les seves formes aïllades, P = V · I, les regles de la sèrie i del paral·lel i les unitats. A la capçalera, «Descripció i regles ràpides» resumeix les tres regles clau.

## Ús a cada curs

Al bloc de 1r a 3r d’ESO la simulació serveix per presentar el circuit elèctric, els seus elements i les magnituds elèctriques amb els seus aparells de mesura, i després per treballar la llei d’Ohm i l’associació de resistències en sèrie i en paral·lel. A 4t d’ESO i a Física de 1r de Batxillerat el seu ús és puntual.

Els sabers i els criteris d’avaluació citats són els del currículum de Catalunya: Decret 175/2022 (DOGC núm. 8762, de 29 de setembre de 2022) per a l’ESO i Decret 171/2022 (DOGC núm. 8758, de 22 de setembre de 2022) per al batxillerat. A l’ESO, els sabers de 1r, 2n i 3r formen un sol bloc i cada centre decideix en quin curs treballa cada saber; 4t té el seu propi bloc. Al batxillerat, Física i Química són matèries separades des de 1r. Està previst que a partir del curs 2026-27 la Física i la Química de 1r de Batxillerat es fusionin en una sola matèria, «Física i Química»; quan se’n publiqui el currículum caldrà revisar l’apartat de 1r.

A Catalunya els circuits elèctrics són al bloc de 1r a 3r i el currículum preveu explícitament treballar-los en un entorn simulat. Les dues sessions es poden fer al mateix curs o separar-les: la primera en un curs i la segona, amb els càlculs, en un altre.

### 1r a 3r d’ESO: el circuit, les magnituds elèctriques i la llei d’Ohm

*12–15 anys · 7th–9th grade als EUA · Year 8–10 al Regne Unit*

**Sabers.** L’energia: «Disseny, muntatge i anàlisi de circuits elèctrics elementals, tant en un entorn físic com simulat», «Realització d’experiments relacionats amb la naturalesa elèctrica de la matèria, i comprovació i interpretació de les propietats conductores dels materials» i «Anàlisi crítica dels diferents processos d’obtenció d’energia elèctrica, per desenvolupar consciència sobre la necessitat de l’estalvi energètic…». Habilitats científiques bàsiques: «Ús del llenguatge científic, incloent-hi l’ús adequat de representacions, sistemes d’unitats i eines matemàtiques…».

**Criteris d’avaluació.** 1.1 (analitzar conceptes, fenòmens i processos interpretant informació en diferents formats, com esquemes, símbols i gràfics), 2.3 (portar a terme dissenys experimentals amb les eines adequades i interpretar-ne els resultats amb eines matemàtiques) i 3.2 (utilitzar adequadament les unitats de mesura i les eines matemàtiques).

El currículum català no anomena la llei d’Ohm, el corrent continu ni l’associació de resistències; formen part de l’«anàlisi de circuits elèctrics elementals».

**Objectius.** Reconèixer els elements d’un circuit i els seus símbols. Distingir tensió, intensitat i resistència, amb les seves unitats. Saber com es connecten l’amperímetre i el voltímetre. Explicar el corrent continu com un moviment d’electrons en un sol sentit. Comprovar experimentalment la llei d’Ohm i representar-la en una gràfica. Calcular la resistència equivalent de dues o tres resistències en sèrie i en paral·lel.

**Seqüència d’explicació, 1a sessió: el circuit i les magnituds (15–20 min).**

1. Mode «Llei d'Ohm» amb els valors inicials. Assenyalar la pila, l’interruptor, els cables i la bombeta, i dibuixar-ne els símbols a la pissarra. La placa llarga de la pila és el pol +.
2. Obrir l’interruptor. La bombeta s’apaga i els electrons s’aturen, però continuen als cables: no surten de la pila, ja hi eren. L’amperímetre marca 0,000 A. Tancar-lo de nou.
3. Llegir els aparells. L’amperímetre, en sèrie, mesura la intensitat: 0,300 A. Explicar que la intensitat és la càrrega que passa cada segon (I = q / t): 0,3 C cada segon, 18 C en un minut. El voltímetre, en paral·lel amb la bombeta, mesura la tensió: 6,00 V. Escriure les unitats: volt (V), ampere (A) i ohm (Ω).
4. Pujar la «Tensió de la pila» a 12 V. La intensitat es duplica (0,600 A), els electrons van el doble de ràpid i la bombeta brilla més. Baixar-la a 0 V: la pila no impulsa els electrons i no hi ha corrent.
5. Explicar el corrent continu: els electrons es mouen sempre en el mateix sentit, de − a +. Per conveni, el sentit del corrent és el contrari, de + a −, com marca la fletxa taronja.
6. Passar a «Sèrie» i després a «Paral·lel» i treure en cada cas la bombeta R₂. En sèrie s’apaguen totes; en paral·lel les altres continuen enceses. Preguntar com deuen estar connectats els llums de casa.

**Seqüència d’explicació, 2a sessió: llei d’Ohm i associació de resistències (15–20 min).**

1. Mode «Llei d'Ohm» amb R = 20 Ω. Formular la pregunta: com canvia la intensitat en canviar la tensió? Portar la tensió a 2, 4, 6, 8, 10 i 12 V i prémer «＋ Anotar mesura» a cadascuna. La taula dona 0,100, 0,200, 0,300, 0,400, 0,500 i 0,600 A, i la columna V / I val sempre 20 Ω.
2. Mirar la gràfica: els punts formen una recta que passa per l’origen. Tensió i intensitat són proporcionals i la constant és la resistència: V = I · R.
3. Canviar a R = 40 Ω i anotar 4, 8 i 12 V: 0,100, 0,200 i 0,300 A. La recta nova té la meitat de pendent (0,025 A/V davant de 0,050 A/V): amb més resistència passa menys corrent per a la mateixa tensió.
4. Plantejar un problema: quina resistència fa passar 0,240 A amb una pila de 12 V? R = 12 / 0,24 = 50 Ω. Comprovar-ho amb el lliscador.
5. Mode «Sèrie» amb els valors inicials (6,0 V; 10, 20 i 30 Ω). La intensitat és la mateixa als tres, 0,100 A, i les tensions, 1, 2 i 3 V, sumen els 6 V de la pila: la barra de la pila és apilada. Resistència equivalent = 10 + 20 + 30 = 60 Ω i I = 6 / 60 = 0,100 A. Treure R₂: es talla l’únic camí i no circula corrent per cap receptor; entre els borns buits hi ha 6,00 V.
6. Mode «Paral·lel» amb els mateixos valors. Tots tenen 6 V i les intensitats, 0,600, 0,300 i 0,200 A, sumen 1,100 A. 1 / R equivalent = 1/10 + 1/20 + 1/30, per tant R equivalent = 5,45 Ω, menor que la més petita. Treure R₂: les altres branques no canvien i la intensitat total baixa a 0,800 A (R equivalent = 7,5 Ω).

### 4t d’ESO: ús puntual

*15–16 anys · 10th grade als EUA · Year 11 al Regne Unit*

A L’energia hi ha l’«Estimació de valors d’energia i consums energètics en situacions quotidianes mitjançant l’aplicació de coneixements, la cerca d’informació contrastada, l’experimentació i el raonament científic…». La simulació dona la potència de cada receptor (P = V · I) i serveix per estimar l’energia consumida amb E = P · t. Per exemple, la bombeta del mode «Llei d'Ohm» amb 6 V i 20 Ω consumeix 1,80 W; en una hora són 1,80 × 3600 = 6480 J. Amb tres bombetes iguals de 20 Ω a 6 V, en paral·lel cadascuna consumeix 1,80 W i en sèrie només 0,20 W: nou vegades menys, per això en sèrie brillen molt menys. No tracta l’energia en kWh ni el cost de la factura.

### Física de 1r de Batxillerat: repàs puntual

*16–17 anys · 11th grade als EUA · Year 12 al Regne Unit*

A Energia hi ha els «Conceptes de treball i potència: elaboració d’hipòtesis sobre el consum energètic de sistemes mecànics o elèctrics de l’entorn quotidià i el seu rendiment». La taula «Receptors» permet comprovar que la potència total és la suma de les potències de cada receptor, tant en sèrie com en paral·lel, i repassar P = V · I = I² · R = V² / R.

## Concepcions alternatives que ajuda a corregir

La simulació ataca sobretot la idea que el corrent «es gasta» en passar pels receptors i la idea que la pila dona sempre el mateix corrent. Cada fila indica la idea prèvia freqüent i com desmuntar-la amb la simulació.

| Idea de l’alumnat | Idea correcta | Com mostrar-ho |
| --- | --- | --- |
| «El corrent es gasta a les bombetes: a l’última n’arriba menys» | En sèrie la intensitat és la mateixa a tots els punts del circuit; el que es transforma és l’energia | Mode «Sèrie»: I₁ = I₂ = I₃ = 0,100 A i els electrons van igual de ràpid abans i després de cada bombeta |
| «Els electrons surten de la pila i triguen a arribar a la bombeta» | Els electrons ja són a tots els cables; la pila els posa en moviment a tots alhora | Obrir i tancar l’interruptor: els electrons s’aturen i arrenquen a tot el circuit alhora |
| «La pila dona sempre la mateixa intensitat» | La pila manté la tensió; la intensitat depèn de la resistència del circuit | Amb 6 V: 0,300 A amb un receptor de 20 Ω, 0,100 A amb tres en sèrie i 1,100 A amb tres en paral·lel |
| «Amb més bombetes, més resistència» | En sèrie la resistència equivalent augmenta; en paral·lel disminueix | Paral·lel amb 2 receptors: 6,67 Ω i 0,900 A; amb 3: 5,45 Ω i 1,100 A |
| «Si una bombeta es fon s’apaguen totes» | Només en sèrie; en paral·lel cada branca és independent | Treure R₂ a «Sèrie» i a «Paral·lel» |
| «Tensió i intensitat són el mateix» | Hi pot haver tensió sense corrent | Mode «Llei d'Ohm» amb l’interruptor obert: l’amperímetre marca 0,000 A i sota l’interruptor es llegeix «V = 6,00 V» |
| «La bombeta amb més resistència sempre brilla menys» | En sèrie brilla més la de més resistència (P = I² · R); en paral·lel, la de menys | Valors inicials: en sèrie brilla més R₃ (0,30 W); en paral·lel, R₁ (3,60 W) |
| «Els electrons van de + a −, com el corrent» | El sentit convencional és de + a −; els electrons van de − a + | La fletxa taronja i els electrons blaus van en sentits oposats |

## Simplificacions que convé conèixer

La simulació prioritza que es vegin les regles de la sèrie i del paral·lel i, per això, tracta tots els elements com a ideals. Convé conèixer aquestes llicències per no reforçar idees incorrectes sense voler.

1. **Pila ideal.** No té resistència interna: dona sempre la seva tensió, passi el corrent que passi. Amb tres receptors de 5 Ω en paral·lel a 12 V circulen 7,2 A, cosa que una pila real no podria mantenir. No se simulen curtcircuits ni fusibles.
2. **Receptors òhmics.** Les bombetes tenen una resistència constant. En una bombeta real de filament la resistència creix molt en escalfar-se, així que la seva gràfica I–V no és una recta. La llei d’Ohm es compleix bé en resistències a temperatura constant.
3. **Cables, interruptor i aparells ideals.** Els cables i l’interruptor no tenen resistència; l’amperímetre tampoc i el voltímetre no deixa passar corrent.
4. **Velocitat dels electrons fora d’escala.** Els electrons d’un cable real avancen de mitjana fraccions de mil·límetre per segon. A l’animació la velocitat és proporcional a la intensitat (70 px/s per ampere) amb un límit a partir d’uns 4,6 A perquè es puguin seguir amb la vista. La separació entre electrons és sempre la mateixa.
5. **Brillantor orientativa.** La brillantor creix amb la potència però se satura (P / (P + 0,5 W)), perquè es distingeixin tant 0,1 W com 3 W. No és una mesura de la llum emesa.
6. **Tensió als buits.** Amb un únic buit en sèrie (un receptor tret o l’interruptor obert), entre els seus extrems hi ha tota la tensió de la pila. Amb dos buits alhora aquesta tensió no està definida en un circuit ideal i es mostra «—».
7. **Només corrent continu.** No hi ha corrent altern, ni xarxa domèstica de 230 V, ni consum en kWh. Les resistències van de 5 en 5 Ω i la tensió de 0,5 en 0,5 V.

## Fitxa d’activitats de l’alumnat

La [fitxa d’activitats](https://simulaciencia.es/ca/fitxes/circuitos/) segueix l’esquema prediu, observa i explica. Cada activitat porta un enllaç a la simulació ja preparada, de manera que funciona a l’aula d’informàtica, amb tauletes o com a tasca a casa. Es descarrega en Word i LibreOffice per adaptar-la.

| Curs | Activitats | Durada orientativa |
| --- | --- | --- |
| 1r a 3r d’ESO | Fitxa completa excepte Per ampliar | Dues sessions, o una si els problemes es fan com a tasca |
| 1r a 3r d’ESO, només la 1a sessió | Abans de començar, activitats 1 i 6, i Revisa les teves idees | Una sessió |
| 4t d’ESO | Activitats 4 a 6 i Per ampliar, com a repàs amb potència i energia | Una sessió |

La taula d’«Abans de començar» recull sis idees prèvies sobre el corrent elèctric. Convé no corregir-la al principi: l’alumnat hi torna a «Revisa les teves idees». Els valors de la simulació són exactes, així que les solucions també.

### Solucions

| Apartat | Solució |
| --- | --- |
| Abans de començar | Totes falses. a) En sèrie la intensitat és la mateixa a totes les bombetes (activitat 4). b) Els electrons ja són a tots els cables i es posen en marxa alhora (activitat 1). c) La intensitat depèn de la resistència (activitat 3). d) En paral·lel la resistència equivalent disminueix (activitat 5). e) Només en sèrie; en paral·lel les altres continuen enceses (activitats 4 i 5). f) Amb l’interruptor obert hi ha tensió, però no corrent (activitat 1) |
| Activitat 1 | Pila: dona l’energia que mou els electrons; 6 V amb l’interruptor tancat i obert. Amperímetre: mesura la intensitat, en sèrie; 0,300 A tancat i 0,000 A obert. Voltímetre: mesura la tensió de la bombeta, en paral·lel; 6,00 V tancat i 0 V obert (la tensió de la pila queda entre els borns de l’interruptor). Els electrons s’aturen, però continuen als cables. L’amperímetre ha de deixar passar tot el corrent; el voltímetre compara dos punts del circuit. Els electrons van de − a +; per conveni, el corrent va de + a − |
| Activitat 2 | 0,100, 0,200, 0,300, 0,400, 0,500 i 0,600 A; V / I = 20 Ω sempre. La gràfica és una recta que passa per l’origen: V i I són directament proporcionals. La constant és la resistència: V = I · R |
| Activitat 3 | 10 Ω: 0,600 A i 3,60 W. 20 Ω: 0,300 A i 1,80 W. 30 Ω: 0,200 A i 1,20 W. 60 Ω: 0,100 A i 0,60 W. En augmentar R, la intensitat i la brillantor disminueixen. La pila manté la tensió; la intensitat depèn de la resistència: I = V / R |
| Activitat 4 | R₁: 10 Ω, 1 V, 0,100 A, 0,10 W. R₂: 20 Ω, 2 V, 0,100 A, 0,20 W. R₃: 30 Ω, 3 V, 0,100 A, 0,30 W. Total: 60 Ω, 6 V, 0,100 A, 0,60 W. En treure R₂ s’apaguen totes: es talla l’únic camí i entre els borns buits hi ha 6,00 V. La intensitat és la mateixa a totes: el corrent no es gasta, el que es transforma és l’energia. V = V₁ + V₂ + V₃ i R equivalent = R₁ + R₂ + R₃ |
| Activitat 5 | R₁: 10 Ω, 6 V, 0,600 A, 3,60 W. R₂: 20 Ω, 6 V, 0,300 A, 1,80 W. R₃: 30 Ω, 6 V, 0,200 A, 1,20 W. Total: 5,45 Ω, 6 V, 1,100 A, 6,60 W. En treure R₂ les altres continuen igual i la intensitat total baixa a 0,800 A (7,5 Ω). Totes tenen la tensió de la pila; I = I₁ + I₂ + I₃. La R equivalent és menor que la més petita: cada branca nova és un camí més per al corrent |
| Activitat 6 | Sèrie: 2 V, 0,100 A i 0,20 W cadascuna; total 0,100 A; en treure’n una s’apaguen totes. Paral·lel: 6 V, 0,300 A i 1,80 W cadascuna; total 0,900 A; les altres continuen enceses. A les cases es connecten en paral·lel: cada aparell rep tota la tensió de la xarxa i funciona encara que se n’apagui o se n’espatlli un altre |
| Aplica el que has après | 1) I = 9 V / 30 Ω = 0,300 A. 2) R = 12 V / 0,240 A = 50 Ω. 3) R = 15 + 45 = 60 Ω; I = 12 / 60 = 0,200 A; V₁ = 0,2 · 15 = 3 V i V₂ = 0,2 · 45 = 9 V (sumen 12 V). 4) I₁ = 12 / 15 = 0,800 A; I₂ = 12 / 45 ≈ 0,267 A; I = 1,067 A; R = 12 / 1,067 ≈ 11,25 Ω (o 1/R = 1/15 + 1/45) |
| Per ampliar | 1) E = 1,80 W · 3600 s = 6480 J. 2) Nou vegades: en paral·lel cadascuna té el triple de tensió i el triple d’intensitat que en sèrie (1,80 W davant de 0,20 W). 3) En sèrie brilla més R₃ (0,30 W), la de més resistència, perquè P = I² · R amb la mateixa I; en paral·lel brilla més R₁ (3,60 W), la de menys resistència, perquè P = V² / R amb la mateixa V. No és cert en sèrie |
