# Guia docent: simulació del principi d’Arquimedes

## Fitxa ràpida

La simulació del principi d’Arquimedes deixa caure un bloc en un dipòsit i calcula a cada instant el seu pes, l’empenta i la força neta. A Catalunya el seu ús principal és a 4t d’ESO, on el currículum situa l’empenta i les forces en líquids i gasos, amb aplicació al bloc de 1r a 3r d’ESO per a l’estudi de les forces i de la seva resultant.

| Dada | Detall |
| --- | --- |
| Enllaç | [jrgrijota.github.io/simulacion-arquimedes](https://jrgrijota.github.io/simulacion-arquimedes/) |
| Cursos | 4t d’ESO (ús principal), 1r a 3r d’ESO; ús puntual a Física de 1r de Batxillerat |
| Matèria | Física i Química; Física al batxillerat |
| Durada orientativa | 15–20 minuts d’explicació amb la simulació projectada |
| Material | Projector o pissarra digital; funciona al navegador, també al mòbil i a la tauleta, sense instal·lar res |
| Coneixements previs | Densitat (ρ = m / V), pes (P = m · g), força com a magnitud amb direcció i sentit |
| Accessibilitat | Tema fosc, clar i d’alt contrast (botó de la roda dentada) |

## Com funciona la simulació

La simulació té dos modes, «Valors lliures» i «Materials reals», que es trien al tauler esquerre. En tots dos es veu el dipòsit amb el bloc i, a la seva esquerra, el percentatge submergit. Una escala vertical de densitats marca la del líquid i la del bloc. Sota el dipòsit apareixen les fórmules del pes i de l’empenta amb els nombres actuals.

| Mode | Què controla el docent | Què mostra |
| --- | --- | --- |
| Valors lliures | Massa (10–200 kg), Volum (50–150 L) i Densitat del líquid (0,50–13,60 kg/L, en passos de 0,01). Valors inicials: 50 kg, 100 L i 1,000 kg/L | La densitat del bloc que en resulta (de 0,07 a 4,00 kg/L), el pes, l’empenta, la força neta, el volum submergit i l’estat del sistema |
| Materials reals | «Material del bloc»: suro (0,24), fusta (0,60), gel (0,917), plàstic (0,95), alumini (2,70), ferro (7,87), plom (11,34) i or (19,30 kg/L). «Líquid del dipòsit»: gasolina (0,740), etanol (0,789), oli (0,920), aigua dolça (1,000), aigua de mar (1,025), glicerina (1,261) i mercuri (13,534 kg/L) | El mateix, amb textures del material i del líquid. El volum queda fix en 100 L i la massa surt de m = ρ · V. Comença amb fusta en aigua dolça |
| Botó «Diagrama de cos lliure» (en tots dos modes) | Mostrar o amagar el tauler dret | Fletxes de pes (vermella), empenta (blava) i força neta, amb llargada proporcional al valor; amb el bloc recolzat al fons, també la normal (violeta). Rètol «P > E», «P < E», «P = E» (en repòs; «P ≈ E» mentre oscil·la) o «P = E + N» i el càlcul «PAS A PAS» |

Tres elements sostenen l’explicació:

- **Les fórmules amb nombres.** Sota el dipòsit es llegeix, per exemple, P = m·g = 50.0 × 9.8 = 490 N i E = Vsub·ρlíq·g = 50.0 × 1.00 × 9.8 = 490 N. Permeten comprovar el càlcul en veu alta.
- **El volum submergit.** La targeta «Vol. submergit» i el percentatge al costat del dipòsit mostren quina part del bloc desplaça líquid. Quan sura, la fracció submergida coincideix amb ρbloc / ρlíquid. El nivell del líquid puja a mesura que el bloc s’enfonsa: és el volum desplaçat.
- **El diagrama de cos lliure.** Les fletxes de P i E surten del centre del bloc. La força neta apareix a dalt en groc si apunta cap avall i en verd si apunta cap amunt.

El desplegable «Monitoratge en temps real» és obert en començar. Conté sis targetes i el bloc «Estat del sistema». Aquest compara amb dues barres les dues densitats i escriu «Surant», «Enfonsant-se», «Al fons» o «Equilibri neutre»; aquest últim només quan les dues densitats coincideixen. El desplegable «Fórmules essencials» resumeix densitat, empenta, pes i la condició d’equilibri Vsub/V = ρbloc/ρlíquid. A la capçalera, «Descripció i regles ràpides» dona les tres regles de comparació de densitats.

## Ús a cada curs

A 4t d’ESO la simulació serveix per presentar el principi d’Arquimedes i calcular l’empenta; al bloc de 1r a 3r d’ESO, per treballar l’empenta com una força més i la resultant de forces oposades.

Els sabers i els criteris d’avaluació citats són els del currículum de Catalunya: Decret 175/2022 (DOGC núm. 8762, de 29 de setembre de 2022) per a l’ESO i Decret 171/2022 (DOGC núm. 8758, de 22 de setembre de 2022) per al batxillerat. A l’ESO, els sabers de 1r, 2n i 3r formen un sol bloc i cada centre decideix en quin curs treballa cada saber; 4t té el seu propi bloc. Al batxillerat, Física i Química són matèries separades des de 1r. Està previst que a partir del curs 2026-27 la Física i la Química de 1r de Batxillerat es fusionin en una sola matèria, «Física i Química»; quan se’n publiqui el currículum caldrà revisar l’apartat de 1r.

A Catalunya l’empenta i la pressió en fluids apareixen amb nom propi a 4t; el bloc de 1r a 3r tracta els efectes de les forces i les lleis de Newton, sense fluids. Per això la seqüència sobre l’empenta com a força va al bloc de 1r a 3r. No encaixa a 2n de Batxillerat.

### 4t d’ESO: principi d’Arquimedes i flotació

*15–16 anys · 10th grade als EUA · Year 11 al Regne Unit*

**Sabers.** La interacció: «Valoració dels efectes de les forces aplicades en líquids i gasos, i especialment del concepte de pressió, i els seus efectes en diferents situacions», «Identificació i representació de les principals forces de l’entorn quotidià, com ara el pes, la normal, el fregament, la tensió o l’empenta, i el seu ús en l’explicació de fenòmens físics en diferents contextos» i «Ús de la representació vectorial en gràfics i operacions numèriques amb forces…». Les destreses científiques bàsiques: «Ús de diversos entorns i recursos d’aprenentatge científic, com ara el laboratori o els entorns virtuals…».

**Criteris d’avaluació.** 1.2 (interpretar i predir el comportament de fenòmens quotidians argumentant-lo amb models, lleis i teories), 2.3 (portar a terme l’experimentació i interpretar-ne els resultats amb eines matemàtiques) i 3.2 (utilitzar adequadament les unitats de mesura i les eines matemàtiques).

El currículum català no anomena el principi d’Arquimedes ni el de Pascal; formen part dels «efectes de les forces aplicades en líquids i gasos».

**Objectius.** Enunciar el principi d’Arquimedes. Calcular l’empenta amb E = ρlíquid · g · Vsubmergit. Predir si un cos sura comparant la seva densitat amb la del líquid. Explicar quina fracció queda submergida quan sura.

**Seqüència d’explicació (15–20 min).**

1. Valors lliures amb els valors inicials: 50 kg, 100 L i 1,000 kg/L. Preguntar per què el bloc s’atura a mitja altura. Llegir «Vol. submergit»: 50,0 L. Aquests 50 L d’aigua tenen 50 kg i pesen 490 N, igual que l’empenta. Enunciar el principi.
2. Activar «Diagrama de cos lliure». Assenyalar P = 490,0 N i E = 490,0 N, amb fletxes iguals i el rètol «P = E». Surar és equilibri de forces, no absència de pes.
3. Demanar una predicció i pujar la massa a 80 kg. El bloc baixa fins a 80,0 L submergits i E = P = 784 N. Obrir «Fórmules essencials» i llegir Vsub/V = ρbloc/ρlíquid: 0,80 / 1,00 = 80 %.
4. Pujar la massa a 150 kg (ρ = 1,50 kg/L). El bloc s’enfonsa. Amb tot el volum dins, l’empenta arriba al màxim: 100 × 1,00 × 9,8 = 980 N, menor que P = 1470 N. En arribar al fons, el diagrama hi afegeix la normal: N = 1470 − 980 = 490 N, i el rètol passa a «P = E + N».
5. Sense tocar la massa, portar «Densitat del líquid» a 2,00 kg/L. El bloc puja i sura amb 75,0 L submergits: 75 × 2,00 × 9,8 = 1470 N. L’empenta depèn del líquid, no del bloc.
6. Passar a «Materials reals». El ferro s’enfonsa en aigua dolça i sura en mercuri amb uns 58,1 L submergits (7,87 / 13,534). Tancar amb el gel: 91,7 L submergits en aigua dolça i 89,5 L en aigua de mar. Relacionar-ho amb els icebergs i amb la línia de flotació dels vaixells.

### 1r a 3r d’ESO: l’empenta com a força i la resultant

*12–15 anys · 7th–9th grade als EUA · Year 8–10 al Regne Unit*

**Sabers.** Interacció: «Diferenciació dels efectes de les forces, com a agents del canvi tant a l’estat de moviment o de repòs d’un cos, així com productores de deformacions…», «Descripció dels efectes de les forces a partir d’observacions de fenòmens quotidians o de situacions simulades en el laboratori» i «Aplicació de les lleis de Newton per entendre com es comporten els sistemes materials davant l’acció de les forces…». Habilitats científiques bàsiques: «Ús del llenguatge científic, incloent-hi l’ús adequat de representacions, sistemes d’unitats i eines matemàtiques…».

**Criteris d’avaluació.** 1.2 (interpretar i predir el comportament de fenòmens quotidians relacionant-lo amb models, lleis i teories) i 3.2 (utilitzar adequadament les unitats de mesura i les eines matemàtiques).

A aquesta edat convé mantenir el càlcul senzill (P = m · g i restes de dues forces) i deixar el principi d’Arquimedes com a idea qualitativa: el líquid empeny cap amunt.

**Objectius.** Reconèixer l’empenta com una força que fa el líquid. Sumar dues forces de la mateixa direcció i sentit contrari. Relacionar resultant nul·la amb repòs i resultant no nul·la amb canvi de velocitat. Expressar la densitat en kg/L i en kg/m³.

**Seqüència d’explicació (15–20 min).**

1. Valors lliures amb els valors inicials i «Diagrama de cos lliure» activat. Presentar les dues forces: pes cap avall i empenta cap amunt. Amb el bloc quiet, P = E = 490,0 N i la resultant és nul·la.
2. Calcular el pes a la pissarra: P = m · g = 50 × 9,8 = 490 N. Comprovar-ho al requadre «PAS A PAS».
3. Pujar la massa a 150 kg. Mentre baixa, el diagrama marca «P > E» i una fletxa groga cap avall. Amb el bloc ja cobert, Fn = 1470 − 980 = 490 N. Hi ha resultant i per això canvia la velocitat.
4. Amb el bloc quiet al fons, assenyalar la tercera força: el fons empeny cap amunt amb N = 490 N i la resultant torna a ser 0 (P = E + N). Després, baixar la massa a 30 kg. Durant la pujada el diagrama marca «P < E» i una fletxa verda cap amunt: 294 − 980 = −686 N. El signe negatiu indica que la resultant apunta cap amunt.
5. El bloc queda surant amb 30,0 L submergits i E = P = 294 N. Resultant nul·la de nou: primera llei de Newton.
6. Passar a «Materials reals» amb aigua dolça: els materials menys densos que 1,000 kg/L suren i els més densos s’enfonsen. Canvi d’unitats amb la targeta «Dens. bloc»: 30 kg / 100 L = 0,30 kg/L = 300 kg/m³. Recordar que 1 kg/L = 1 g/cm³ = 1000 kg/m³. Per introduir la densitat és millor la simulació de densitat.

### Física de 1r de Batxillerat: repàs puntual

*16–17 anys · 11th grade als EUA · Year 12 al Regne Unit*

A Estàtica i dinàmica hi ha «Predicció, a partir de la composició vectorial, del comportament estàtic o dinàmic d’una partícula o un sòlid rígid» i «Descripció i argumentació de la relació entre la mecànica vectorial aplicada sobre una partícula o un sòlid rígid amb el seu estat de repòs o moviment…». La simulació serveix per repassar l’equilibri de translació d’un cos que sura i per treballar el pes i la normal. Amb 150 kg i 100 L el bloc reposa al fons i el diagrama dibuixa la normal: N = P − E = 1470 − 980 = 490 N. Es pot demanar a l’alumnat que la calculi abans d’activar el diagrama.

## Concepcions alternatives que ajuda a corregir

La simulació ataca sobretot la idea que surar depèn del pes o de la mida de l’objecte. Cada fila indica la idea prèvia freqüent i com desmuntar-la amb la simulació.

| Idea de l’alumnat | Idea correcta | Com mostrar-ho |
| --- | --- | --- |
| «El que pesa molt s’enfonsa i el que és lleuger sura» | Surar depèn de la densitat del cos comparada amb la del líquid | Valors lliures amb 140 kg i 150 L: P = 1372 N, ρ = 0,93 kg/L i sura. Després 60 kg i 50 L: P = 588 N, ρ = 1,20 kg/L i s’enfonsa |
| «Els objectes grans suren i els petits s’enfonsen» | Amb la mateixa mida uns suren i altres no | Materials reals en aigua dolça: tots els blocs fan 100 L. La fusta sura i l’alumini s’enfonsa |
| «Si un objecte s’enfonsa, l’aigua no l’empeny» | Tot cos submergit rep empenta, suri o no | Materials reals, ferro en aigua dolça: el bloc s’enfonsa amb E = 980 N davant de P = 7713 N |
| «Com més endins, més empenta» | L’empenta depèn del volum submergit, no de la profunditat | Valors lliures amb 150 kg i 100 L: mentre el bloc baixa totalment submergit, «Empenta (E)» es manté en 980 N |
| «Un cos més pesant rep més empenta» | Amb el mateix volum submergit i el mateix líquid, l’empenta és la mateixa | Materials reals en aigua dolça: alumini, plom i or reben tots tres E = 980 N |
| «Si sura, l’empenta és més gran que el pes» | En un cos que sura en repòs, E = P | Valors inicials amb «Diagrama de cos lliure»: P = E = 490,0 N i rètol «P = E» |
| «Un objecte sura o s’enfonsa per si mateix, sigui quin sigui el líquid» | Depèn de la densitat del líquid | Materials reals: el plàstic sura en aigua dolça (0,95 < 1,000) i s’enfonsa en oli (0,95 > 0,920). El ferro sura en mercuri |

## Simplificacions que convé conèixer

La simulació prioritza la comparació entre pes i empenta i, per això, simplifica el moviment, el dipòsit i algunes forces. Convé conèixer aquestes llicències per no reforçar idees incorrectes sense voler.

1. **La normal només apareix al fons.** El fons és l’única superfície de suport: no hi ha parets laterals ni tapa que empenyin. Amb el bloc al fons la normal és N = P − E i la força neta, 0.
2. **«Equilibri neutre» exigeix densitats iguals.** El rètol només apareix si ρbloc i ρlíquid coincideixen (amb una tolerància del 0,1 % per l’arrodoniment). És un cas límit: qualsevol diferència apreciable fa que el bloc pugi o baixi, encara que sigui molt a poc a poc.
3. **El nivell puja en un dipòsit pla.** El nivell del líquid puja segons l’àrea submergida del bloc repartida sobre l’amplada del dipòsit, com si tot fos un tall en 2D. Per això puja més amb el diagrama obert, quan el dipòsit es dibuixa més estret.
4. **No es veu la pressió.** L’empenta surt directament d’E = ρlíquid · g · Vsub. No es calcula a partir de la diferència de pressions entre les cares. Les marques del 17 % al 83 % del lateral només indiquen profunditat relativa. A 4t d’ESO cal explicar l’origen de l’empenta a la pissarra.
5. **Unitats pràctiques, no SI.** Les densitats van en kg/L i els volums en L; així L × kg/L × 9,8 dona newtons directament. S’utilitza g = 9,8 m/s². La interfície escriu els decimals amb punt. Convé passar a kg/m³ i m³ quan es treballin els canvis d’unitats.
6. **Intervals limitats a Valors lliures.** Amb els lliscadors la densitat del bloc només va de 0,07 a 4,00 kg/L. Per a densitats més grans cal fer servir Materials reals, on el volum és sempre 100 L i la massa arriba a 1930 kg amb l’or.
7. **Moviment només qualitatiu.** La velocitat es multiplica per 0,90 a cada fotograma dins del líquid, té un límit i no hi ha fregament amb l’aire. El bloc oscil·la i es frena de manera orientativa. No serveix per mesurar temps ni acceleracions.
8. **Bloc ideal.** El bloc és sempre un quadrat que no gira ni bolca, i la seva mida a la pantalla creix amb el volum de manera lineal. No es tracta l’estabilitat dels vaixells ni la forma del buc.
9. **Densitats fixes.** Cada material i cada líquid té un valor únic, sense efecte de la temperatura. Les bombolles que pugen quan el bloc és més dens que el líquid són només decoratives.

## Fitxa d’activitats de l’alumnat

La [fitxa d’activitats](https://simulaciencia.es/ca/fitxes/arquimedes/) segueix l’esquema prediu, observa i explica. Cada activitat porta un enllaç a la simulació ja preparada, de manera que funciona a l’aula d’informàtica, amb tauletes o com a tasca a casa. Es descarrega en Word i LibreOffice per adaptar-la.

| Curs | Activitats | Durada orientativa |
| --- | --- | --- |
| 4t d’ESO | Abans de començar, activitats 1 a 6, Aplica el que has après, Revisa les teves idees i Autoavaluació | Una sessió de 50–55 minuts, o dues si es fan a classe els problemes |
| 1r a 3r d’ESO | Activitats 1, 2 i 3, centrades en el pes, l’empenta, la normal i la resultant | Una sessió |
| Física de 1r de Batxillerat | Activitat 2 i Per ampliar, com a repàs de l’equilibri de translació | 20–25 minuts |

La taula d’«Abans de començar» recull cinc de les idees prèvies de la taula de concepcions alternatives. Convé no corregir-la al principi: l’alumnat hi torna a «Revisa les teves idees».

### Solucions

| Apartat | Solució |
| --- | --- |
| Abans de començar | Totes falses. a) Depèn de la densitat, no del pes (activitats 2 i 5). b) Tot cos submergit rep empenta (activitats 3 i 5). c) L’empenta depèn del volum submergit, no de la profunditat (activitat 3). d) Si sura en repòs, E = P (activitat 1). e) Depèn del líquid (activitats 4 i 6) |
| Activitat 1 | P = 490 N, E = 490 N, 50 L submergits, «P = E». Està quiet perquè la resultant és nul·la. 50 L d’aigua tenen 50 kg i pesen 490 N, igual que l’empenta. Principi d’Arquimedes: tot cos submergit en un fluid rep una empenta vertical cap amunt igual al pes del fluid que desplaça |
| Activitat 2 | 50 kg: 0,50 kg/L, 50 L, 490 N, sura. 80 kg: 0,80 kg/L, 80 L, 784 N, sura. 100 kg: 1,00 kg/L, 100 L, 980 N, equilibri neutre. 150 kg: 1,50 kg/L, 100 L, 980 N, s’enfonsa. La fracció submergida és ρbloc / ρlíquid. Amb 150 kg el bloc ja és tot dins i l’empenta màxima és 980 N; al fons apareix la normal, N = 1470 − 980 = 490 N |
| Activitat 3 | L’empenta es manté en 980 N mentre baixa cobert i al fons. Depèn del volum submergit i del líquid, no de la profunditat |
| Activitat 4 | 1,00 kg/L: s’enfonsa, 100 L, 980 N. 1,50 kg/L: equilibri neutre, 100 L, 1470 N. 2,00 kg/L: sura, 75 L, 1470 N. 3,00 kg/L: sura, 50 L, 1470 N. Com més dens és el líquid, més pesa cada litre desplaçat i cal menys volum per igualar el pes |
| Activitat 5 | Suro 0,24 kg/L, P = E = 235 N, sura. Fusta 0,60, P = E = 588 N, sura. Alumini 2,70, P = 2646 N, E = 980 N, s’enfonsa. Plom 11,34, P = 11 113 N, E = 980 N. Or 19,30, P = 18 914 N, E = 980 N. Suren els menys densos que l’aigua. Els tres metalls desplacen els mateixos 100 L d’aigua, així que reben la mateixa empenta |
| Activitat 6 | Gel: sura amb 91,7 L en aigua dolça i 89,5 L en aigua de mar (sobresurt més al mar). Plàstic: sura en aigua dolça amb 95 L i s’enfonsa en oli. Ferro: s’enfonsa en aigua dolça i sura en mercuri amb uns 58 L. Surar depèn de la densitat del cos comparada amb la del líquid |
| Aplica el que has après | 1) E = 40 L · 1,00 kg/L · 9,8 N/kg = 392 N. 2) V<sub>sub</sub> = 10 · 0,24 / 1,00 = 2,4 L; en sobresurt el 76 %. 3) P = 29,4 N; E = 1,2 · 1,00 · 9,8 = 11,76 N; s’enfonsa; P − E = 17,64 N. 4) V = 2 000 000 kg / 1,025 kg/L ≈ 1 951 000 L ≈ 1951 m³ |
| Per ampliar | 1) N = P − E = 1470 − 980 = 490 N. 2) S’enfonsa si m > 120 L · 1,025 kg/L = 123 kg |
