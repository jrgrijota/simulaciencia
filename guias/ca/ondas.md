# Guia docent: simulació d’ones

## Fitxa ràpida

La simulació d’ones mostra com un focus fa vibrar una corda o una molla i com la pertorbació avança pel medi. Distingeix les ones transversals de les longitudinals, mesura al mateix dibuix l’amplitud i la longitud d’ona, i relaciona període, freqüència i velocitat de propagació. Una partícula marcada permet veure que l’ona transporta energia, però no matèria. A Catalunya s’usa al bloc de 1r a 3r d’ESO, amb la transferència d’energia en forma de llum i so; amb la casella de batxillerat serveix també per al moviment ondulatori de Física de 2n de Batxillerat.

| Dada | Detall |
| --- | --- |
| Enllaç | [jrgrijota.github.io/simulacion-ondas](https://jrgrijota.github.io/simulacion-ondas/) |
| Cursos | 1r a 3r d’ESO i 2n de Batxillerat (Física) |
| Matèria | Física i Química (1r a 3r d’ESO) i Física (2n de Batxillerat) |
| Durada orientativa | 15–20 minuts d’explicació amb la simulació projectada |
| Material | Projector o pissarra digital; funciona al navegador, també al mòbil i a la tauleta, sense instal·lar res. En pantalles estretes la simulació queda a dalt i els controls a sota; per explicar és millor una pantalla gran |
| Coneixements previs | Per a l’ESO, la velocitat com a espai entre temps i la idea que l’energia es transfereix. Per a 2n de Batxillerat, el moviment harmònic simple i la funció sinus |
| Accessibilitat | Tema fosc, clar i d’alt contrast (botó de la roda dentada). Velocitat de la simulació ×1, ×0,5 i ×0,25. Els canvis de mode i de nivell es llegeixen en veu alta amb el lector de pantalla |

## Com funciona la simulació

La simulació té tres modes, «Transversal», «Longitudinal» i «Compara», que es trien a dalt del tauler esquerre. A la part de dalt del llenç es veu el medi i, a sota, dos requadres que canvien segons el nivell. Els canvis als controls lliscants es veuen a l’instant.

| Mode | Què es veu |
| --- | --- |
| Transversal | Una corda de 4 m amb les seves partícules. A l’esquerra, un vibrador (el «focus») puja i baixa l’extrem. Les partícules es mouen amunt i avall mentre l’ona avança cap a la dreta |
| Longitudinal | Una molla dibuixada com set files de partícules. Un pistó l’empeny i l’estira. Les partícules van i vénen en la direcció de propagació i formen zones més juntes (compressions, ombrejades en blau) i més separades (enrariments, en taronja) |
| Compara | Les dues alhora, amb el mateix focus i el mateix medi: la corda a dalt i la molla a baix |

Controls del tauler, iguals als tres modes:

- **Focus.** «Tipus de pertorbació»: «Ona contínua» o «Un pols cada vegada» (amb el botó «〰 Emet un pols»). «Amplitud (A)» de 0,05 a 0,30 m (comença a 0,20 m) i «Freqüència (f)» de 0,25 a 2,00 Hz (comença a 1,00 Hz). Un canvi al focus no canvia l’ona que ja és al medi: surt del focus i avança, així que durant uns segons conviuen l’ona antiga i la nova.
- **Medi.** «Velocitat de propagació (v)» de 0,5 a 3,0 m/s (comença a 1,50 m/s). Canviar-la és canviar de medi, per exemple tensar la corda, i afecta tot el medi alhora.
- **Vista.** «Velocitat de la simulació» ×1, ×0,5 o ×0,25, i la casella «Mostra λ, A, crestes i valls». Si es prem una partícula del medi, queda marcada com a P.
- **Batxillerat.** La casella «Mostra l’equació, les gràfiques i la fase» canvia els requadres de baix i afegeix un segon punt Q a una distància Δx de P, amb el seu control (0 a 3 m) i els botons «Δx = λ/4», «Δx = λ/2» i «Δx = λ».

A sobre del llenç hi ha «⏸ Pausa» i «↺ Reinicia». Reiniciar deixa el medi en repòs i torna a llançar l’ona des del focus; així es veu avançar el front (una línia discontínua groga amb el rètol «front») fins que arriba al final del tram.

Elements del llenç que sostenen l’explicació:

- **Les cotes.** La longitud d’ona es mesura entre dues crestes consecutives (o dues compressions) i es retola amb el seu valor, per exemple «λ = 1,50 m». Una fletxa vermella marca l’amplitud des de la línia d’equilibri fins a una cresta. A la corda es retolen dues crestes i dues valls; a la molla, dues compressions i dos enrariments.
- **La partícula P.** Va en vermell, amb una línia discontínua que marca el seu recorregut (de −A a +A) i una fletxa de «vibració». Sempre torna al seu lloc.
- **ESO: «MAGNITUDS DE L’ONA».** A, λ, T, f i v amb les seves unitats i, a sota, els càlculs T = 1 / f, λ = v / f i la comprovació v = λ · f amb els valors del moment.
- **ESO: «ENERGIA, SÍ; MATÈRIA, NO».** Una barra amb l’energia que transporta l’ona (E ∝ A² · f²), expressada com un múltiple de la dels valors inicials («× 1,00» amb A = 0,20 m i f = 1,00 Hz), i al costat el que ha avançat l’ona davant del que s’ha desplaçat la partícula P.
- **Batxillerat: les gràfiques.** «ELONGACIÓ – POSICIÓ», una foto de l’ona a l’instant actual amb P, Q i la cota λ, i «ELONGACIÓ – TEMPS DE P I Q», els últims 8 s dels dos punts amb la cota T.

El desplegable «Mesures de l’ona» dona A, f, T, λ, v i l’energia relativa, amb una frase que relaciona λ amb v i f. Al nivell de batxillerat hi afegeix «Equació i fase»: l’equació amb nombres, per exemple «y(x, t) = 0,20 · sin(6,28 t − 4,19 x) (SI)», la pulsació, el nombre d’ona, la velocitat màxima de vibració (A ω), l’elongació i la velocitat de vibració de P en aquell instant i el desfasament Δφ = k Δx, amb una frase que diu si P i Q estan en fase, en oposició o quant es retarda Q. «Fórmules essencials» reuneix les relacions de cada nivell i exemples d’ones transversals i longitudinals.

## Ús a cada curs

Al bloc de 1r a 3r d’ESO la simulació treballa les ones com a transport d’energia, els dos tipus d’ona i les magnituds que les descriuen. A Física de 2n de Batxillerat treballa les gràfiques d’oscil·lació en funció de la posició i del temps, l’equació d’ona, la diferència entre velocitat de propagació i de vibració i el desfasament.

Els sabers i els criteris d’avaluació citats són els del currículum de Catalunya: Decret 175/2022 (DOGC núm. 8762, de 29 de setembre de 2022) per a l’ESO i Decret 171/2022 (DOGC núm. 8758, de 22 de setembre de 2022) per al batxillerat. A l’ESO, els sabers de 1r, 2n i 3r formen un sol bloc i cada centre decideix en quin curs treballa cada saber; 4t té el seu propi bloc. Al batxillerat, Física i Química són matèries separades des de 1r. Està previst que a partir del curs 2026-27 la Física i la Química de 1r de Batxillerat es fusionin en una sola matèria, «Física i Química»; quan se’n publiqui el currículum caldrà revisar l’apartat de 1r.

A Catalunya les ones només apareixen a l’ESO al bloc de 1r a 3r, dins de l’energia. Els sabers de 4t d’ESO i de Física de 1r de Batxillerat no les tracten; a 4t la simulació només serveix de repàs si el centre no les ha treballat abans.

### 1r a 3r d’ESO: les ones transporten energia

*12–15 anys · 7th–9th grade als EUA · Year 8–10 al Regne Unit*

**Sabers.** L’energia: «Experimentació amb materials d’ús quotidià de fenòmens de transferència d’energia en forma de llum i so» i «Formulació de qüestions i hipòtesis sobre l’energia, les manifestacions i les propietats per a l’elaboració d’explicacions amb relació als processos de canvi». Habilitats científiques bàsiques: «Ús de diversos entorns i recursos d’aprenentatge científic, com ara el laboratori o els entorns virtuals…» i «Ús del llenguatge científic, incloent-hi l’ús adequat de representacions, sistemes d’unitats i eines matemàtiques…».

**Criteris d’avaluació.** 1.2 (interpretar i predir el comportament de fenòmens quotidians relacionant-lo amb models, lleis i teories), 2.3 (portar a terme dissenys experimentals i interpretar-ne els resultats amb eines matemàtiques i tecnològiques) i 3.2 (utilitzar adequadament les unitats de mesura i les eines matemàtiques).

El currículum català no anomena l’amplitud, la longitud d’ona ni els tipus d’ona; entren en estudiar la «transferència d’energia en forma de llum i so». Si el grup encara no fa servir fórmules amb soltesa, els passos 3 a 5 es poden fer de manera qualitativa: més freqüència, ona més curta.

**Objectius.** Explicar que una ona és una pertorbació que transporta energia sense transportar matèria. Distingir ones transversals i longitudinals i posar-ne exemples. Identificar en un dibuix l’amplitud, la longitud d’ona, les crestes i les valls. Relacionar període, freqüència, longitud d’ona i velocitat amb T = 1 / f i v = λ · f.

**Seqüència d’explicació (15–20 min).**

1. Mode «Transversal», tipus «Un pols cada vegada». Prémer «〰 Emet un pols» i marcar una partícula al centre de la corda. Preguntar abans: la partícula viatjarà amb el pols? El pols passa i la partícula puja, baixa i torna al seu lloc. El que viatja és la pertorbació i, amb ella, l’energia.
2. Passar a «Ona contínua» i prémer «↺ Reinicia». El front avança a 1,50 m/s i triga uns 2,7 s a recórrer els 4 m. La fila «La partícula P s’ha desplaçat:» marca valors entre −0,20 i +0,20 m, però mai avança.
3. Llegir les cotes: amplitud 0,20 m i longitud d’ona 1,50 m, entre dues crestes. Comptar amb «×0,25» quant triga P a fer una oscil·lació completa: el període, 1,00 s. Amb f = 1,00 Hz, una oscil·lació per segon.
4. Pujar la freqüència a 2,00 Hz. El canvi surt del focus: l’ona nova, més atapeïda, avança i empeny l’antiga. La cota passa a λ = 0,75 m: amb el doble de freqüència, la meitat de longitud d’ona. Comprovar-ho al requadre: v = 0,75 m · 2,00 Hz = 1,50 m/s. La velocitat no ha canviat perquè el medi és el mateix.
5. Tornar a 1,00 Hz i pujar la velocitat a 3,0 m/s: λ = 3,00 m. Explicar que la velocitat depèn del medi (una corda més tensa, el so a l’aire o a l’aigua) i la freqüència, del focus.
6. Energia: amb A = 0,10 m la barra marca «× 0,25»; amb A = 0,20 m, «× 1,00». Amb el doble d’amplitud, quatre vegades més energia. Relacionar-ho amb un terratrèmol o amb el volum d’un altaveu.
7. Mode «Longitudinal» i després «Compara». Les partícules de la molla vibren en la mateixa direcció en què avança l’ona. Les crestes i les valls de la corda es corresponen amb compressions i enrariments de la molla, i la longitud d’ona es mesura igual, entre dues compressions. Obrir «Fórmules essencials» i repassar els exemples: la llum és transversal; el so, longitudinal.

### Física de 2n de Batxillerat: moviment ondulatori

*17–18 anys · 12th grade als EUA · Year 13 al Regne Unit*

**Sabers.** Vibracions i ones: «Estudi del moviment oscil·latori: obtenció i descripció de l’evolució temporal de les variables cinemàtiques d’un cos oscil·lant i conservació d’energia en aquests sistemes» i «Moviment ondulatori: anàlisi i obtenció de les gràfiques d’oscil·lació en funció de la posició i del temps, de l’equació d’ona que el descriu i de la relació amb el moviment harmònic simple. Estudi dels diferents tipus de moviments ondulatoris a la natura».

**Criteris d’avaluació.** 1.2 (resoldre problemes plantejats a partir de situacions quotidianes de manera experimental i analítica), 2.1 (analitzar i comprendre l’evolució dels sistemes naturals amb models, lleis i teories de la física), 3.2 (utilitzar amb rigor les unitats del SI i elaborar i interpretar gràfiques que relacionin variables físiques) i 5.2 (reproduir en laboratoris, reals o virtuals, processos físics modificant les variables que els condicionen).

El currículum català no anomena la velocitat de vibració ni el desfasament; entren en l’«equació d’ona» i en la seva «relació amb el moviment harmònic simple».

**Objectius.** Escriure l’equació d’una ona harmònica a partir d’A, f i v. Interpretar la gràfica y(x) com una foto de l’ona i la gràfica y(t) com el moviment harmònic simple d’un punt. Distingir la velocitat de propagació de la velocitat de vibració. Calcular el desfasament entre dos punts i reconèixer quan vibren en fase o en oposició.

**Seqüència d’explicació (15–20 min).**

1. Marcar la casella «Mostra l’equació, les gràfiques i la fase» amb els valors inicials (A = 0,20 m, f = 1,00 Hz, v = 1,50 m/s). Calcular a la pissarra ω = 2π f = 6,28 rad/s, λ = v / f = 1,50 m i k = 2π / λ = 4,19 rad/m, i comprovar-ho a «Equació i fase»: y(x, t) = 0,20 · sin(6,28 t − 4,19 x).
2. Comparar les dues gràfiques. A «ELONGACIÓ – POSICIÓ» la distància entre dues crestes és λ; a «ELONGACIÓ – TEMPS DE P I Q» la distància entre dos màxims de P és T. Cada punt del medi fa un moviment harmònic simple; l’ona és aquest moviment repetit amb retard.
3. Velocitat de vibració: A ω = 1,26 m/s, diferent de v = 1,50 m/s. Pausar i mirar «P ara»: quan P passa per la posició d’equilibri la seva velocitat de vibració és màxima; en una cresta és zero. Pujar l’amplitud a 0,30 m: v no canvia, la velocitat màxima de vibració passa a 1,88 m/s.
4. Desfasament. Amb Δx = 0,75 m (λ/2), Δφ = 3,14 rad i la frase diu «en oposició de fase»: a les dues gràfiques P i Q van sempre al contrari. Prémer «Δx = λ»: Δφ torna a 0 i les corbes se superposen. Amb «Δx = λ/4», Q va un quart de període (0,25 s) per darrere de P.
5. Problema: a quina distància mínima són dos punts en oposició si f = 2,00 Hz i v = 3,0 m/s? λ = 1,50 m i Δx = 0,75 m. Posar aquests valors i comprovar-ho amb el botó «Δx = λ/2».
6. Mode «Longitudinal»: la gràfica passa a dir-se «DESPLAÇAMENT – POSICIÓ» i representa ξ, el desplaçament al llarg de la direcció de propagació. Les compressions són on ξ passa per zero baixant. La mateixa equació descriu els dos tipus d’ona; el que canvia és la direcció de la vibració. Enllaçar amb el saber de fenòmens ondulatoris: el so és una ona longitudinal i les seves qualitats (intensitat, to) depenen de l’amplitud i de la freqüència.

## Concepcions alternatives que ajuda a corregir

La simulació ataca sobretot la idea que la matèria viatja amb l’ona i la confusió entre la velocitat de l’ona i la de les partícules. Cada fila indica la idea prèvia freqüent i com desmuntar-la amb la simulació.

| Idea de l’alumnat | Idea correcta | Com mostrar-ho |
| --- | --- | --- |
| «Les partícules viatgen amb l’ona» | Cada partícula oscil·la al voltant de la seva posició; viatgen la pertorbació i l’energia | Marcar P i emetre un pols: P puja, baixa i torna al seu lloc. La fila «La partícula P s’ha desplaçat:» mai supera A |
| «Si moc el focus més ràpid, l’ona va més ràpid» | La velocitat depèn del medi; la freqüència canvia la longitud d’ona | Passar d’1 a 2 Hz: v continua a 1,50 m/s i λ baixa d’1,50 a 0,75 m |
| «Una ona més alta va més ràpid o és més llarga» | L’amplitud no canvia v ni λ; canvia l’energia | Pujar A de 0,10 a 0,30 m: λ i v iguals, l’energia passa de × 0,25 a × 2,25 |
| «La velocitat de l’ona i la de les partícules són la mateixa» | Són diferents: v = λ f; la vibració té velocitat màxima A ω | Nivell de batxillerat: 1,50 m/s davant d’1,26 m/s, i la segona canvia amb A i la primera no |
| «En una ona longitudinal no hi ha longitud d’ona ni amplitud» | Té les mateixes magnituds: λ entre dues compressions i A en la direcció de propagació | Mode «Compara»: la mateixa cota λ a la corda i a la molla |
| «La gràfica y(x) és el camí que segueix una partícula» | y(x) és una foto de tot el medi; el moviment d’un punt és y(t) | Comparar les dues gràfiques del nivell de batxillerat i mirar com es mou P al llenç |
| «Un canvi al focus canvia tota l’ona alhora» | El canvi triga a arribar a cada punt, perquè viatja a la velocitat v | Canviar la freqüència amb l’ona en marxa: durant uns segons conviuen la λ antiga i la nova |

## Simplificacions que convé conèixer

La simulació prioritza que es vegin amb claredat les magnituds de l’ona. Per això tracta el medi com a ideal i tria escales que es puguin seguir amb la vista. Convé conèixer aquestes llicències per no reforçar idees incorrectes sense voler.

1. **Sense esmorteïment ni reflexions.** L’ona no perd energia en avançar i l’extrem dret l’absorbeix del tot: no hi ha ones reflectides ni estacionàries. En una corda real l’ona s’atenua i rebota a l’extrem.
2. **Escales de laboratori lent.** Les freqüències (0,25–2 Hz) i les velocitats (0,5–3 m/s) s’han triat per seguir l’ona amb la vista. Són raonables per a una corda o una molla llargues, però el so a l’aire va a uns 340 m/s i les seves freqüències audibles van de 20 a 20 000 Hz.
3. **Desplaçaments de la molla reduïts.** Al mode longitudinal, quan A · k és gran, els desplaçaments es dibuixen a escala reduïda perquè les partícules no es creuin, i el llenç ho indica («Desplaçaments dibuixats a escala × 0,72…»). Les cotes de λ continuen sent exactes.
4. **L’energia és relativa.** La barra usa E ∝ A² · f² i no dona joules, perquè l’energia real depèn també de la massa del medi i de la velocitat. La barra està en escala d’arrel quadrada perquè es vegin tant × 0,25 com × 9 (el màxim, amb A = 0,30 m i f = 2,00 Hz).
5. **Un canvi de velocitat afecta tot el medi alhora.** Representa canviar de medi. En realitat, una ona que passa a un altre medi canvia de velocitat i de longitud d’ona només a partir de la frontera.
6. **L’equació només descriu l’ona contínua estable.** Mentre conviuen una ona antiga i una de nova, o amb polsos solts, l’equació del tauler no descriu tot el medi; la simulació ho avisa.
7. **No tracta la naturalesa de la llum.** Les ones electromagnètiques apareixen només com a exemple d’ona transversal. La naturalesa de la llum i l’espectre electromagnètic són sabers de Vibracions i ones de Física de 2n de Batxillerat, i la dualitat ona-corpuscle, de Física relativista, quàntica, nuclear i de partícules; es treballen amb la simulació d’espectres atòmics.

## Fitxa d’activitats de l’alumnat

La [fitxa d’activitats](https://simulaciencia.es/ca/fitxes/ondas/) segueix l’esquema prediu, observa i explica. Cada activitat porta un enllaç a la simulació ja preparada, així que funciona a l’aula d’informàtica, amb tauletes o com a tasca a casa. Es descarrega en Word i LibreOffice per adaptar-la.

| Curs | Activitats | Durada orientativa |
| --- | --- | --- |
| 1r a 3r d’ESO | Fitxa completa excepte Per ampliar | Una sessió de 50–55 minuts, o dues si es fan a classe els problemes |
| 2n de Batxillerat Física | Activitats 3 i 5 com a repàs i Per ampliar | Una sessió |

La taula d’«Abans de començar» recull cinc idees prèvies sobre les ones. Convé no corregir-la al principi: l’alumnat hi torna a «Revisa les teves idees». En canviar la freqüència, l’ona nova triga uns segons a omplir la corda: convé esperar que arribi al final abans de llegir λ al dibuix.

### Solucions

| Apartat | Solució |
| --- | --- |
| Abans de començar | Totes falses. a) Cada tros de corda oscil·la i torna al seu lloc (activitat 1). b) La velocitat depèn del medi; si mous el focus més ràpid, baixa la longitud d’ona (activitat 3). c) L’amplitud no canvia la velocitat; canvia l’energia (activitat 5). d) Té λ entre dues compressions i amplitud al llarg de la direcció de propagació (activitat 6). e) L’aigua puja i baixa; el que arriba a la platja és l’energia (activitat 1 i problema 4) |
| Activitat 1 | P puja, baixa i torna al seu lloc; el desplaçament mai supera l’amplitud. El pols arriba fins al final de la corda. Viatja la pertorbació i, amb ella, l’energia. Una ona és una pertorbació que es propaga per un medi i transporta energia sense transportar matèria |
| Activitat 2 | A = 0,20 m (de la línia d’equilibri a una cresta); λ = 1,50 m (entre dues crestes); T = 1,00 s (una oscil·lació de P; amb ×0,25 es veu en 4 s); f = 1,00 Hz; v = 1,50 m/s (el front triga uns 2,7 s a recórrer els 4 m). T = 1 / 1,00 = 1,00 s i v = 1,50 · 1,00 = 1,50 m/s. 1 Hz és una oscil·lació cada segon |
| Activitat 3 | 0,50 Hz: T = 2,00 s, λ = 3,00 m. 1,00 Hz: T = 1,00 s, λ = 1,50 m. 2,00 Hz: T = 0,50 s, λ = 0,75 m. v = 1,50 m/s i λ · f = 1,50 m/s als tres casos. La velocitat no canvia; com més freqüència, menys longitud d’ona. El canvi surt del focus i avança a la velocitat de l’ona, així que durant uns segons conviuen l’ona antiga i la nova |
| Activitat 4 | λ = 1,00 m amb 1,0 m/s, 1,50 m amb 1,5 m/s i 3,00 m amb 3,0 m/s. La freqüència (i el període) la fixa el focus; la velocitat, el medi; la longitud d’ona depèn de tots dos. Exemples: el so en passar de l’aire a l’aigua va més ràpid; la llum en passar de l’aire al vidre va més a poc a poc; una onada que arriba a aigües poc profundes |
| Activitat 5 | v = 1,50 m/s en tots els casos. λ = 1,50 m amb 1,00 Hz i 0,75 m amb 2,00 Hz. Energia: × 0,25 amb 0,10 m, × 1,00 amb 0,20 m, × 2,25 amb 0,30 m i × 4,00 amb 2,00 Hz. L’amplitud no canvia v ni λ: canvia l’energia, que és proporcional a A² · f². Si es duplica l’amplitud, l’energia es multiplica per quatre: un altaveu més fort mou més l’aire; un terratrèmol de més amplitud destrueix molt més |
| Activitat 6 | Corda: les partícules vibren amunt i avall, perpendiculars a l’avanç de l’ona. Molla: vibren endavant i endarrere, en la mateixa direcció en què avança l’ona. Les crestes es corresponen amb compressions (partícules juntes) i les valls amb enrariments (separades). λ = 1,50 m a totes dues. So: longitudinal. Llum: transversal. Corda de saltar: transversal. Molla que s’estira i es comprimeix: longitudinal |
| Aplica el que has après | 1) T = 1 / 5 = 0,20 s; v = 0,40 · 5 = 2,0 m/s. 2) λ = 340 / 440 ≈ 0,77 m. 3) f = 10 / 20 s = 0,5 Hz; T = 2 s; v = 3 · 0,5 = 1,5 m/s. 4) L’ona és una pertorbació que transporta energia, no aigua: el vaixell, com cada partícula d’aigua, puja i baixa al voltant de la seva posició |
| Per ampliar | 1) ω = 2π · 1 = 6,28 rad/s; λ = 1,50 m; k = 2π / 1,50 = 4,19 rad/m; y(x, t) = 0,20 · sin(6,28 t − 4,19 x) (SI). 2) A · ω = 0,20 · 6,28 = 1,26 m/s, diferent de v = 1,50 m/s. Amb A = 0,30 m, A · ω = 1,88 m/s i v no canvia. 3) Δx = λ/2: Δφ = π rad = 3,14 rad, en oposició de fase, corbes oposades. Δx = λ: Δφ = 2π (equival a 0), en fase, corbes superposades |
