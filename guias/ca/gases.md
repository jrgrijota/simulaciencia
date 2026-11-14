# Guia docent: simulació de gasos

## Fitxa ràpida

La simulació de gasos mostra partícules que xoquen amb les parets d’un globus elàstic o d’un recipient rígid i tradueix aquests xocs en pressió i volum. A Catalunya el seu ús principal és a 4t d’ESO, on el currículum situa la pressió en líquids i gasos, i al bloc de 1r a 3r d’ESO per presentar la teoria cineticomolecular. Serveix també de repàs qualitatiu a Química de 1r de Batxillerat.

| Dada | Detall |
| --- | --- |
| Enllaç | [jrgrijota.github.io/simulacion-gases](https://jrgrijota.github.io/simulacion-gases/) |
| Cursos | 4t d’ESO (ús principal), 1r a 3r d’ESO; repàs qualitatiu a Química de 1r de Batxillerat |
| Matèria | Física i Química; Química al batxillerat |
| Durada orientativa | 15–20 minuts d’explicació amb la simulació projectada |
| Material | Projector o pissarra digital; funciona al navegador, també al mòbil i a la tauleta, sense instal·lar res |
| Coneixements previs | Idea de partícula, temperatura en K i °C, volum en litres; a 4t d’ESO, pressió com a força per unitat de superfície |
| Accessibilitat | Només tema fosc. Colors de les partícules i de la membrana configurables i opció «Pantalla completa» a «⚙ Ajustaments Visuals» |

## Com funciona la simulació

La pantalla té un tauler esquerre de controls i un llenç central amb el gas. El desplegable «Comportament del recipient» tria entre «Membrana Flexible (Globus)», l’opció inicial, i «Paret Rígida (Fixa)». A sobre del llenç hi ha els botons «⏸ Pausa» i «⚙ Ajustaments Visuals», que obre un calaix lateral.

| Mode | Què controla el docent | Què mostra |
| --- | --- | --- |
| Membrana Flexible (Globus) | «Quantitat de partícules», d’1 a 500 (inicial 50, botons de ±5). «Temperatura», de 0 a 500 K (inicial 273 K, botons de ±10), o de −273 a 227 °C amb l’interruptor «Temperatura en °C» | Un globus vermell que es deforma amb cada xoc i una línia verda discontínua amb el seu radi mitjà. La pressió i el volum canvien alhora |
| Paret Rígida (Fixa) | Els mateixos controls i, a més, els botons de «Volum del recipient», que canvien el radi de 5 en 5 px (de 30 a 210 px) i mostren el volum en litres. El recipient comença amb la mida mitjana que tenia el globus | Un cercle blau clar que només canvia de mida amb aquests botons: amb el radi fix el volum és constant i només canvia la pressió |
| Ajustaments Visuals | «Mida de partícula» (1–15 px, inicial 3 px), colors, «Color segons la velocitat» (activat), «Mostra la gràfica P-V» (desactivat), «Pantalla completa» | Partícules de blau (lentes) a vermell (ràpides) i una gràfica P-V a la cantonada inferior esquerra, amb P en atm i V en L des de 0 |

Tres elements sostenen l’explicació:

- **Les targetes de «Dades Físiques».** Mostren «Pressió (P)» en atm i «Volum (V)» en L, amb dos decimals. En començar ronden 1,6 atm i 0,8 L; varien una mica d’una càrrega a una altra perquè les velocitats inicials són a l’atzar. La pressió oscil·la perquè es recalcula cada segon.
- **El «Monitoratge del sistema».** Aquest desplegable mostra la «Freqüència d'impactes» en xocs/s i els «Xocs totals». La pressió suma l’impuls de cada xoc contra la paret (2 · velocitat perpendicular) durant un segon i el divideix pel perímetre: compta quants xocs hi ha i com són de forts. Amb 50 partícules a 273 K surten uns 50 xocs/s.
- **El color segons la velocitat.** A una mateixa temperatura hi conviuen partícules blaves i vermelles. Les col·lisions entre partícules reparteixen l’energia i eixamplen la gamma de velocitats.

La simulació no té tauler d’ajuda ni de conceptes clau: l’explicació va a càrrec del docent.

## Ús a cada curs

Al bloc de 1r a 3r d’ESO la simulació serveix per presentar el model cinètic i les escales de temperatura; a 4t d’ESO, per al concepte de pressió i les lleis dels gasos.

Els sabers i els criteris d’avaluació citats són els del currículum de Catalunya: Decret 175/2022 (DOGC núm. 8762, de 29 de setembre de 2022) per a l’ESO i Decret 171/2022 (DOGC núm. 8758, de 22 de setembre de 2022) per al batxillerat. A l’ESO, els sabers de 1r, 2n i 3r formen un sol bloc i cada centre decideix en quin curs treballa cada saber; 4t té el seu propi bloc. Al batxillerat, Física i Química són matèries separades des de 1r. Està previst que a partir del curs 2026-27 la Física i la Química de 1r de Batxillerat es fusionin en una sola matèria, «Física i Química»; quan se’n publiqui el currículum caldrà revisar l’apartat de 1r.

El currículum català d’ESO no anomena les lleis dels gasos. La pressió en gasos és a 4t, i les variables d’estat dels gasos ideals, a Química de 1r de Batxillerat. Per això la seqüència de lleis dels gasos va a 4t, de manera qualitativa i semiquantitativa.

### 1r a 3r d’ESO: teoria cinètica i temperatura

*12–15 anys · 7th–9th grade als EUA · Year 8–10 al Regne Unit*

**Sabers.** La matèria: «Aplicació del model cinètic de la matèria i la teoria cineticomolecular a partir d’observacions sobre la matèria per explicar-ne les propietats, els estats d’agregació i els canvis d’estat, i la formació de barreges i dissolucions». L’energia: «Anàlisi i aplicació dels mecanismes i efectes de la transferència i conducció de calor sobre els sistemes materials (fluids i sòlids)…». Habilitats científiques bàsiques: «Ús de diversos entorns i recursos d’aprenentatge científic, com ara el laboratori o els entorns virtuals…».

**Criteris d’avaluació.** 1.2 (interpretar i predir el comportament de fenòmens quotidians relacionant-lo amb models i teories) i 3.2 (utilitzar adequadament les unitats de mesura).

El currículum no anomena les escales de temperatura; la conversió entre K i °C encaixa en l’ús d’unitats del criteri 3.2.

**Objectius.** Descriure un gas com a partícules en moviment amb espai buit entre elles. Relacionar la temperatura amb la rapidesa de les partícules. Convertir entre K i °C. Explicar la dilatació d’un gas en escalfar-lo.

**Seqüència d’explicació (15–20 min).**

1. Configuració inicial: globus, 50 partícules, 273 K. Preguntar què hi ha entre les partícules. Prémer «⏸ Pausa» i assenyalar l’espai buit. Reprendre amb «▶ Reprèn».
2. Activar l’interruptor «Temperatura en °C»: 273 K passa a 0 °C. Escriure a la pissarra T (K) = t (°C) + 273. Els extrems del control lliscant canvien a −273 °C i 227 °C.
3. Baixar la temperatura fins a 0 K (−273 °C). Les partícules s’aturen i la pressió marca 0,00 atm. Presentar el zero absolut com el límit inferior de l’escala Kelvin.
4. Pujar a 500 K. Les partícules van més de pressa i n’hi ha més de vermelles. El globus creix i el volum passa d’uns 0,70 L a 0 K a uns 0,90 L.
5. Tornar a 100 K: el globus s’encongeix fins a uns 0,75 L. Relacionar-ho amb la dilatació: en escalfar, les partícules no creixen, es mouen més i empenyen més la paret.

### 4t d’ESO: pressió i lleis dels gasos

*15–16 anys · 10th grade als EUA · Year 11 al Regne Unit*

**Sabers.** La interacció: «Valoració dels efectes de les forces aplicades en líquids i gasos, i especialment del concepte de pressió, i els seus efectes en diferents situacions». La matèria: «Realització d’activitats de naturalesa variada sobre els sistemes materials més comuns, incloent-hi dissolucions i sistemes dispersos, per a la resolució de problemes relacionats amb situacions quotidianes diverses». Les destreses científiques bàsiques: «Ús de diversos entorns i recursos d’aprenentatge científic, com ara el laboratori o els entorns virtuals…».

**Criteris d’avaluació.** 1.2 (interpretar i predir el comportament de fenòmens quotidians argumentant-lo amb models, lleis i teories), 2.3 (portar a terme l’experimentació i interpretar-ne els resultats amb eines matemàtiques) i 3.2 (utilitzar adequadament diversos sistemes d’unitats).

El currículum no anomena les lleis de Boyle, Charles i Gay-Lussac ni la llei general dels gasos; entren en el concepte de pressió en gasos i en la resolució de problemes sobre sistemes materials comuns.

**Objectius.** Interpretar la pressió com a efecte dels xocs de les partícules amb les parets, repartits per tota la paret. Predir com canvien la pressió i el volum en variar la temperatura i el nombre de partícules. Explicar cada llei dels gasos amb el model cinètic i relacionar alhora pressió, volum, temperatura i quantitat de gas.

**Seqüència d’explicació (20–25 min).**

1. A «⚙ Ajustaments Visuals», baixar «Mida de partícula» a 2 px: el gas s’acosta més a un gas ideal. Obrir «Monitoratge del sistema» i relacionar la pressió amb la freqüència d’impactes. Mostrar que el globus es deforma igual en totes direccions: la pressió actua sobre tota la paret, no només cap avall.
2. Amb el globus, baixar a 100 K i després pujar a 500 K. El volum passa d’uns 0,74 L a uns 0,86 L. Llei de Charles, qualitativa: a més temperatura, més volum (vegeu la simplificació 4).
3. Tornar a 273 K, esperar uns segons i triar «Paret Rígida (Fixa)». El volum queda fix al voltant de 0,8 L i la pressió ronda 1,5 atm. Pujar a 500 K: la pressió puja a unes 2,7 atm. Baixar a 125 K: unes 0,7 atm. Llei de Gay-Lussac: P / T es manté, unes 0,0055 atm/K en els tres casos.
4. Tornar a 273 K i passar de 50 a 100 partícules. La pressió es duplica, d’unes 1,6 a unes 3,4 atm. Preguntar per què: el doble de partícules dona el doble de xocs per segon.
5. Tornar a 50 partícules. Calcular P · V ≈ 1,6 atm · 0,8 L ≈ 1,3 atm·L. Amb el botó «+» de «Volum del recipient» pujar fins a uns 2,3 L: la pressió baixa a unes 0,56 atm i P · V torna a donar unes 1,3 atm·L. Amb «−» baixar fins a uns 0,37 L: P ≈ 3,8 atm, amb P · V ≈ 1,4 atm·L. Llei de Boyle: a temperatura constant P · V es manté; les dècimes de diferència són soroll de la mesura.
6. Escriure P · V / T = constant i tancar amb una taula a la pissarra: quina variable es fixa, quina es canvia i què passa.

### Química de 1r de Batxillerat: repàs qualitatiu

*16–17 anys · 11th grade als EUA · Year 12 al Regne Unit*

La simulació pot servir de repàs en tractar el «Càlcul de quantitats de matèria en sistemes fisicoquímics concrets, com ara gasos ideals o dissolucions, i investigació i interpretació de les seves propietats i de les variables mesurables pròpies del seu estat…» (Reaccions químiques), que és on el currículum català situa les variables d’estat dels gasos. A Física de 1r encaixa amb l’«Anàlisi de les variables termodinàmiques d’un sistema en funció de les condicions…». Serveix per lligar la temperatura amb l’energia cinètica mitjana de les partícules i la pressió amb els xocs. Amb paret rígida i 2 px, P · V es manté i P és proporcional a T, amb unes dècimes de soroll. Però no serveix per a P · V = n · R · T amb nombres: les seves unitats són d’escala.

## Concepcions alternatives que ajuda a corregir

La simulació ataca sobretot la idea d’un gas continu i estàtic i la confusió entre propietats del gas i de les seves partícules. Cada fila indica la idea prèvia freqüent i com desmuntar-la amb la simulació.

| Idea de l’alumnat | Idea correcta | Com mostrar-ho |
| --- | --- | --- |
| «Entre les partícules del gas hi ha aire» | Entre les partícules hi ha buit | 10 partícules a 273 K i «⏸ Pausa»: gairebé tot el globus és buit |
| «En escalfar un gas, les seves partícules es fan més grans» | Les partícules no canvien; es mouen més de pressa i xoquen més | Globus de 100 a 500 K: el globus creix i les partícules continuen amb la mateixa mida |
| «En comprimir un gas, les partícules s’encongeixen» | Es redueix l’espai entre elles, no la seva mida | Recipient rígid de 2,3 L i després de 0,37 L (seqüència de 4t): la mateixa mida de partícula, més amuntegades |
| «El gas només empeny cap avall, pel seu pes» | La pressió es deu a xocs en totes direccions | Globus amb 200 partícules: la membrana s’abomba igual en tot el contorn |
| «Totes les partícules d’un gas van a la mateixa velocitat» | A una temperatura donada hi ha una distribució de velocitats | 100 partícules a 273 K amb «Color segons la velocitat»: hi conviuen blaves i vermelles |
| «Cada partícula té la seva temperatura» o «les partícules s’escalfen» | La temperatura mesura l’energia cinètica mitjana del conjunt | Fer pausa a 273 K i assenyalar partícules de colors diferents en el mateix gas |
| «En escalfar un gas hi ha més gas» | La quantitat de partícules no canvia en escalfar | Recipient rígid de 273 a 500 K: el comptador continua a 50 i la pressió puja |

## Simplificacions que convé conèixer

La simulació prioritza la relació entre xocs i pressió i, per això, simplifica la geometria, les unitats i el càlcul. Convé conèixer aquestes llicències per no reforçar idees incorrectes sense voler.

1. **El gas és bidimensional.** Les partícules es mouen en un pla i el «volum» és l’àrea del cercle, convertida a litres en proporció directa (5 L per a 220 px de radi). La «pressió» és força per unitat de longitud del contorn. Tot i així, P · V i P / T es comporten com en un gas real.
2. **La pressió es mesura cada segon.** Se suma l’impuls dels xocs contra la paret durant un segon, així que oscil·la unes dècimes. Amb poques partícules convé llegir diversos valors i quedar-se amb la mitjana.
3. **Les unitats són d’escala.** El factor de la pressió i la conversió a litres s’han triat perquè donin xifres raonables. Amb 1,6 atm, 0,8 L i 273 K sortirien uns 0,06 mol, no 50 partícules. Els nombres serveixen per comparar, no per aplicar P · V = n · R · T.
4. **El globus és una molla sense atmosfera exterior.** La membrana són 60 nodes units per molles, amb un radi de repòs de 90 px. A 0 K el globus no es buida: queda en uns 0,70 L. De 100 a 500 K el volum només creix d’uns 0,75 a 0,90 L, mentre que la pressió a dins gairebé es quadruplica: la membrana és molt rígida. La llei de Charles es veu en el seu sentit, no en la seva proporció.
5. **La temperatura reescala les velocitats.** Cada partícula neix amb una rapidesa a l’atzar entre 1,5 i 3,5 px per fotograma, multiplicada per √(T/300). En canviar T, totes es multipliquen per √(T nova / T anterior). Així l’energia cinètica mitjana és proporcional a T, com al model real. La conversió fa servir 273, no 273,15.
6. **El zero absolut és clàssic.** A 0 K les partícules s’aturen del tot i la pressió es força a 0,00 atm. N’hi ha prou a l’ESO. Al batxillerat es pot matisar que és un límit inassolible.
7. **Els xocs amb la paret no refreden ni escalfen.** Les partícules reboten sense perdre rapidesa encara que la membrana es mogui. No hi ha refredament en expandir-se: la temperatura només canvia amb el control. Tots els processos són isoterms tret que el docent mogui la temperatura.
8. **Les partícules tenen mida.** El radi inicial és 3 px i xoquen entre si. Aquest volum propi fa que la pressió creixi una mica més que el nombre de partícules: amb 3 px i moltes partícules el factor passa de 2. Amb 1 o 2 px, de 50 a 100 partícules es duplica. Per a les lleis dels gasos convé fer servir 2 px.
9. **La gràfica P-V guarda poc.** Afegeix un punt cada 3 s amb els valors mitjans i guarda els 35 últims. V va de 0 a 5 L i P de 0 al màxim recent, que es reajusta sol. S’esborra en canviar de mode.

## Fitxa d’activitats de l’alumnat

La [fitxa d’activitats](https://simulaciencia.es/ca/fitxes/gases/) segueix l’esquema prediu, observa i explica. Cada activitat porta un enllaç a la simulació ja preparada, de manera que funciona a l’aula d’informàtica, amb tauletes o com a tasca a casa. Es descarrega en Word i LibreOffice per adaptar-la.

| Curs | Activitats | Durada orientativa |
| --- | --- | --- |
| 4t d’ESO | Abans de començar, activitats 1 a 6, Aplica el que has après, Revisa les teves idees, Per ampliar i Autoavaluació | Una sessió de 50–55 minuts, o dues si es fan a classe els problemes |
| 1r a 3r d’ESO | Abans de començar, activitats 1 a 3 i Revisa les teves idees | 25–30 minuts |
| Química de 1r de Batxillerat | Activitats 4 a 6 i Per ampliar, com a repàs qualitatiu | 20–25 minuts |

La taula d’«Abans de començar» recull cinc idees prèvies sobre els gasos. Convé no corregir-la al principi: l’alumnat hi torna a «Revisa les teves idees». Els valors de la simulació varien unes dècimes d’una càrrega a una altra i d’un segon a un altre; les solucions donen valors aproximats.

### Solucions

| Apartat | Solució |
| --- | --- |
| Abans de començar | Totes falses. a) Entre les partícules hi ha buit (activitat 1). b) Les partícules no canvien de mida; es mouen més de pressa (activitat 3). c) Es redueix l’espai entre elles (activitat 5). d) El gas empeny igual en totes direccions: el globus es deforma cap a tots els costats (activitat 1). e) Les partícules es mouen sense parar (activitat 1) |
| Activitat 1 | Les partícules ocupen una part molt petita; gairebé tot és buit. Es mouen en línia recta, en totes direccions, fins que xoquen. En xocar amb la paret l’empenyen i reboten. El globus no es desinfla perquè els xocs empenyen la paret des de dins en totes direccions |
| Activitat 2 | 50 partícules: uns 45–50 xocs/s i unes 1,5 atm. 100: uns 100 xocs/s i unes 3,4 atm. 200: uns 200 xocs/s i unes 6,8 atm. La pressió és proporcional al nombre de xocs per segon (i a la seva força) |
| Activitat 3 | El volum creix amb la temperatura, d’uns 0,74 L a 100 K a uns 0,86 L a 500 K; les partícules passen de blaves a vermelles. En escalfar, les partícules es mouen més de pressa i empenyen més la paret, que cedeix. Les partícules no canvien de mida |
| Activitat 4 | El volum no canvia (uns 0,8 L). P ≈ 0,7 atm a 125 K, ≈ 1,5 atm a 273 K i ≈ 2,7 atm a 500 K; P / T ≈ 0,0055 atm/K en els tres casos (llei de Gay-Lussac). El gas que queda al pot augmenta la seva pressió en escalfar-se i el pot fer rebentar |
| Activitat 5 | P ≈ 3,8 atm amb 0,37 L, ≈ 1,5 atm amb 0,8 L, ≈ 0,85 atm amb 1,5 L i ≈ 0,56 atm amb 2,3 L. P · V es manté en unes 1,3–1,4 atm·L: llei de Boyle. Les partícules no s’encongeixen: hi ha menys espai entre elles i xoquen més sovint amb la paret |
| Activitat 6 | Inicial ≈ 0,56 atm. A 500 K puja a ≈ 1,0 atm (xocs més forts i freqüents). Amb 100 partícules puja a ≈ 2 atm (el doble de xocs). Amb la meitat de volum puja a ≈ 4 atm (les partícules arriben abans a la paret) |
| Aplica el que has après | 1) Boyle: P₂ = 1 atm · 4 L / 1 L = 4 atm. 2) Gay-Lussac: P₂ = 1 atm · 450 K / 300 K = 1,5 atm. 3) Charles: V₂ = 2 L · 360 K / 300 K = 2,4 L. 4) El fregament escalfa l’aire de les rodes; les seves partícules es mouen més de pressa i xoquen més i més fort contra les parets, que amb prou feines canvien de volum |
| Per ampliar | 1) Una hipèrbola: P baixa en augmentar V. 2) P · V / T surt aproximadament igual, amb unes dècimes de soroll |
