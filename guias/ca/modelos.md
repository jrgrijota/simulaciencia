# Guia docent: simulació de models atòmics

## Fitxa ràpida

La simulació reprodueix l’experiment de dispersió de partícules α de Geiger i Marsden i compara les prediccions de Thomson i Rutherford. A Catalunya el seu ús principal és al bloc de 1r a 3r d’ESO, on el currículum situa el desenvolupament històric del model atòmic, amb aplicacions a 4t d’ESO i a Física de 2n de Batxillerat.

| Dada | Detall |
| --- | --- |
| Enllaç | [jrgrijota.github.io/simulacion-modelos](https://jrgrijota.github.io/simulacion-modelos/) |
| Cursos | 1r a 3r d’ESO (ús principal), 4t d’ESO, Física de 2n de Batxillerat; repàs puntual a Química de 2n de Batxillerat |
| Matèria | Física i Química; Física i Química al batxillerat |
| Durada orientativa | 15–20 minuts d’explicació amb la simulació projectada |
| Material | Projector o pissarra digital; funciona al navegador, també al mòbil i a la tauleta, sense instal·lar res |
| Coneixements previs | Àtom format per protons, neutrons i electrons; les càrregues del mateix signe es repel·leixen; al batxillerat, llei de Coulomb i energia potencial elèctrica |
| Accessibilitat | Tema fosc, clar i d’alt contrast, i mida de la interfície «Tauleta / Pissarra digital» per a pantalles tàctils (botó de la roda dentada) |

## Com funciona la simulació

El tauler esquerre té dues targetes de controls. A «L'àtom» es trien el «Model» (Thomson o Rutherford), la «Vista» («Àtom» o «Làmina») i el «Nombre atòmic (Z)». A «Llançament» es tria com es disparen les partícules α i amb quina velocitat. Al llenç, la «Font α» és a l’esquerra i un arc retolat «Detector» envolta el blanc. L’arc deixa oberta la zona de la font. La configuració inicial és Thomson, vista Àtom, Z = 14 (silici), «Una a una (clic)» i velocitat 10.

| Mode | Què controla el docent | Què mostra |
| --- | --- | --- |
| Vista «Àtom», model Thomson | «Nombre atòmic (Z)» d’1 a 118; comença a 14. El rètol indica el nombre i el nom, per exemple «79 – Or» | Una esfera groga de càrrega positiva amb els electrons en anells que giren. Les partícules α amb prou feines es desvien |
| Vista «Àtom», model Rutherford | El mateix control de Z | Un nucli amb Z protons (vermells) i Z neutrons (grisos). Els electrons van en capes de 2, 8, 18, 32… Les α que passen a prop del nucli es corben i algunes tornen cap a la font |
| Vista «Làmina», qualsevol model | Model i Z. La làmina té 3 columnes d’àtoms petits al llarg de l’obertura | Moltes partícules alhora sobre molts àtoms. Amb Thomson totes passen gairebé rectes; amb Rutherford la majoria passa recta i unes poques reboten |
| «Mode d'emissió» | «Una a una (clic)»: cada clic a la zona blava al costat de la font llança una α a aquesta altura. «Pluja contínua»: el botó «Emissió contínua» llança α a altures a l’atzar, amb «Ritme» d’1 a 60 (comença a 20) | «Energia (velocitat α)» va de 4 a 16 en passos de 0,5 i val per als dos modes. Més velocitat, menys desviació |

Tres elements sostenen l’explicació:

- **Les trajectòries que queden dibuixades.** A la vista Àtom es conserven les 6 últimes trajectòries durant uns 5 segons. Es veu que l’α es corba abans d’arribar al nucli, sense tocar-lo.
- **Les marques al detector.** Cada α detectada deixa un punt a l’arc (es guarden les 40 últimes). Amb Thomson s’agrupen davant de la font; amb Rutherford es reparteixen per tot l’arc. Les que reboten cap a la font surten per l’obertura sense deixar marca, però sí que es compten a la gràfica.
- **La «Gràfica d'angles».** És una targeta plegable amb 18 barres de 10° entre 0° i 180°. La primera barra és verda, les de fins a 90° són àmbar i les de més de 90° són vermelles. A dalt indica «n=» amb les partícules llançades. En passar el ratolí per una barra, en mostra el recompte i el percentatge.

El botó «Reiniciar» esborra partícules i gràfica; canviar de model o de vista també la reinicia. La targeta «Guia ràpida» resumeix què es veu, els dos models, les dues vistes i com llegir la gràfica.

## Ús a cada curs

Al bloc de 1r a 3r d’ESO la simulació serveix per presentar els models de Thomson i Rutherford i l’experiment que els separa, i per lligar l’estructura atòmica amb la naturalesa elèctrica de la matèria. A 4t d’ESO encaixa en el reconeixement dels principals models atòmics i en l’anàlisi de dades. A Física de 2n de Batxillerat serveix per aplicar Coulomb, el flux del camp elèctric i la conservació de l’energia. A 1r de Batxillerat no hi ha un saber on encaixi.

Els sabers i els criteris d’avaluació citats són els del currículum de Catalunya: Decret 175/2022 (DOGC núm. 8762, de 29 de setembre de 2022) per a l’ESO i Decret 171/2022 (DOGC núm. 8758, de 22 de setembre de 2022) per al batxillerat. A l’ESO, els sabers de 1r, 2n i 3r formen un sol bloc i cada centre decideix en quin curs treballa cada saber; 4t té el seu propi bloc. Al batxillerat, Física i Química són matèries separades des de 1r.

La presentació dels dos models i el treball amb la força elèctrica van junts al bloc de 1r a 3r, en dues parts que es poden fer en una o en dues sessions.

### 1r a 3r d’ESO: de Thomson a Rutherford, i la força elèctrica

*12–15 anys · 7th–9th grade als EUA · Year 8–10 al Regne Unit*

**Sabers.** La matèria: «Aplicació dels coneixements sobre l’estructura atòmica de la matèria per entendre la formació de ions, l’existència d’isòtops i les seves propietats, el desenvolupament històric del model atòmic i la seva contribució a l’ordenació dels elements a la taula periòdica». L’energia: «Realització d’experiments relacionats amb la naturalesa elèctrica de la matèria…». Habilitats científiques bàsiques: «Utilització de metodologies pròpies de la investigació científica per a la identificació i la formulació de qüestions, l’elaboració d’hipòtesis i el seu contrast experimental» i «Ús de diversos entorns i recursos d’aprenentatge científic, com ara el laboratori o els entorns virtuals…».

**Criteris d’avaluació.** 1.1 (analitzar conceptes i fenòmens interpretant informació en diferents formats, com models i gràfics), 2.1 (plantejar preguntes i formular hipòtesis que es puguin contrastar a través de l’experimentació) i 6.1 (interpretar la ciència com un procés en construcció a través de l’anàlisi amb perspectiva històrica).

El currículum català no anomena els models de Thomson i Rutherford ni compara la força elèctrica amb la gravitatòria; entren en el «desenvolupament històric del model atòmic» i en la «naturalesa elèctrica de la matèria».

**Objectius.** Descriure els models de Thomson i Rutherford. Entendre que un experiment pot descartar un model. Reconèixer que l’àtom és gairebé buit i té un nucli petit amb càrrega positiva. Explicar la desviació de les α com a repulsió elèctrica a distància i relacionar-la amb la càrrega del nucli i amb la velocitat de la partícula.

**Seqüència d’explicació, primera part: de Thomson a Rutherford (15–20 min).**

1. Configuració inicial: Thomson, vista Àtom, Z = 14. Descriure el dibuix: una esfera de càrrega positiva amb electrons incrustats, el «púding de panses». Explicar que la font llança partícules α, amb càrrega positiva.
2. Preguntar què li passarà a una α llançada contra aquest àtom. Fer diversos clics a diferents altures: totes travessen gairebé rectes, amb desviacions d’1° com a màxim.
3. Pujar Z a 79 («79 – Or»), el metall de la làmina original. Repetir els clics: continuen passant gairebé rectes, amb desviacions d’1° o 2°.
4. Canviar a la vista Làmina i «Pluja contínua», activar «Emissió contínua» i desplegar «Gràfica d'angles». Amb Thomson totes les partícules cauen a la primera barra (0–10°).
5. Canviar el model a Rutherford sense tocar res més. Gairebé 9 de cada 10 continuen a la primera barra, però apareixen barres vermelles: unes poques α reboten cap a la font.
6. Tornar a la vista Àtom i a «Una a una (clic)», amb Rutherford i Z = 79. Fer clic a l’altura del nucli: l’α torna enrere. Fer clic lluny: passa recta. Concloure que hi ha un nucli diminut i positiu i molt espai buit.

**Seqüència d’explicació, segona part: estructura atòmica i força elèctrica (15–20 min).**

1. Rutherford, vista Àtom, Z = 14. Assenyalar protons (vermells), neutrons (grisos) i electrons. Recordar que l’α té dos protons i dos neutrons, com es veu al seu dibuix.
2. Llançar una α una mica per sobre del nucli. Fer notar que la trajectòria es corba abans d’arribar-hi: la força elèctrica actua a distància, sense contacte. Comparar-ho amb la gravetat, que només atrau.
3. Baixar Z a 1 («1 – Hidrogen») i apuntar al nucli: la desviació no passa d’uns 6°. Pujar a 79: l’α rebota. Més protons, més càrrega, més repulsió.
4. Amb Z = 79, llançar a la mateixa altura, just per sobre del nucli, amb velocitat 4, 10 i 16. La desviació baixa d’uns 115° a uns 38° i a uns 16°.
5. Passar a Làmina amb «Pluja contínua» i obrir la gràfica. Comparar Z = 1, Z = 14 i Z = 79 amb «Reiniciar» entremig. Anotar a la pissarra el percentatge de la primera barra i de les vermelles.

### 4t d’ESO: evolució dels models atòmics

*15–16 anys · 10th grade als EUA · Year 11 al Regne Unit*

**Sabers.** La matèria: «Reconeixement dels principals models atòmics i dels constituents dels àtoms per establir la relació amb els avenços de la física i de la química més rellevants de la història recent». Les destreses científiques bàsiques: «Disseny del treball experimental i emprenedoria de projectes de recerca per a la resolució de problemes mitjançant l’ús de l’experimentació i el tractament de l’error…» i «Valoració de la cultura científica i del paper de científics i científiques en les principals fites històriques i actuals de la física i la química per a l’avenç i la millora de la societat».

**Criteris d’avaluació.** 1.1 (analitzar conceptes i fenòmens interpretant informació en diferents formats i obtenint conclusions fonamentades), 2.1 (plantejar preguntes i formular hipòtesis que es puguin contrastar a través de l’experimentació) i 6.1 (interpretar la ciència com un procés en construcció, tant amb perspectiva històrica com a través de les línies de recerca actuals).

**Objectius.** Explicar l’experiment de Geiger i Marsden com la prova d’una hipòtesi. Interpretar una distribució d’angles. Justificar per què el model nuclear substitueix el de Thomson i quins problemes deixa oberts per a Bohr.

**Seqüència d’explicació (15–20 min).**

1. Thomson, Z = 79, vista Làmina, «Pluja contínua», «Ritme» al màxim (60) i «Emissió contínua». Formular la hipòtesi: si Thomson té raó, totes les α passaran gairebé rectes.
2. Desplegar la «Gràfica d'angles» i esperar a unes 500 partícules (n=500). Totes cauen a la barra de 0–10°. Aquesta és la predicció del model.
3. Canviar a Rutherford. Passar el ratolí per les barres: la primera ronda el 88 % i les vermelles sumen al voltant del 4 %. Explicar que Geiger i Marsden van veure rebots que Thomson no podia explicar, tot i que molts menys: 1 de cada 8000.
4. Tornar a la vista Àtom amb Rutherford. Explicar que la desviació depèn de com s’acosti l’α al nucli. Així es va deduir que el nucli és diminut.
5. Moure «Energia (velocitat α)» de 4 a 16 apuntant a prop del nucli. L’energia cinètica creix amb v²: és 16 vegades més gran i l’α es desvia molt menys.
6. Assenyalar que la simulació ja dibuixa els electrons en capes de 2, 8, 18… Això no era al model de Rutherford: és l’aportació posterior de Bohr i Sommerfeld.

### Física de 2n de Batxillerat: camp i potencial elèctrics

*17–18 anys · 12th grade als EUA · Year 13 al Regne Unit*

**Sabers.** Camp electromagnètic: «Càlcul i anàlisi qualitativa de la intensitat del camp elèctric en distribucions de càrregues discretes i contínues i interpretació del flux de camp elèctric» i «Càlcul i anàlisi qualitativa de l’energia d’una distribució de càrregues estàtiques…». Física relativista, quàntica, nuclear i de partícules: «…l’estudi de les principals partícules involucrades en la física atòmica i nuclear: propietats i interaccions…» i «Estudi de la radioactivitat natural…».

**Criteris d’avaluació.** 1.2 (resoldre problemes de manera experimental i analítica fent servir principis, lleis i teories de la física), 2.1 (analitzar i comprendre l’evolució dels sistemes naturals amb models, lleis i teories de la física) i 5.2 (reproduir en laboratoris, reals o virtuals, processos físics modificant les variables que els condicionen).

El currículum català no anomena el teorema de Gauss; entra en la «interpretació del flux de camp elèctric».

**Objectius.** Aplicar el teorema de Gauss a l’esfera de Thomson i la llei de Coulomb al nucli. Calcular la distància de màxima aproximació amb la conservació de l’energia. Relacionar l’angle de desviació i el paràmetre d’impacte.

**Seqüència d’explicació (15–20 min).**

1. Thomson, vista Àtom, Z = 79. Aplicar Gauss a l’esfera carregada: a dins, el camp creix amb r; a fora, cau amb 1/r². El camp màxim és a la superfície i és feble. Les α amb prou feines es desvien.
2. Canviar a Rutherford amb el mateix Z. Tota la càrrega és en un radi molt menor, i a prop del nucli el camp és enorme. Fer clic a l’altura del nucli: l’α rebota.
3. Xoc frontal: velocitat 8 i després 16, fent clic a l’altura exacta del nucli. Amb ½ m v² = k q Q / r_mín, quadruplicar l’energia redueix r_mín a la quarta part. A la simulació passa d’uns 19 px a uns 5 px.
4. Amb velocitat 10, llançar α cada vegada més a prop del nucli. A uns 20 px del centre surt a uns 38°; a 10 px, a uns 71°; a 5 px, a uns 111°. La cotangent de θ/2 es redueix a la meitat cada vegada, com prediu Rutherford.
5. Comentar que la font α és un emissor radioactiu i que l’α és un nucli d’heli. Si l’α arribés a tocar el nucli actuaria la força nuclear, que la simulació no inclou.

### Química de 2n de Batxillerat: repàs puntual

*17–18 anys · 12th grade als EUA · Year 13 al Regne Unit*

No hi ha un saber específic de Thomson i Rutherford. La simulació pot obrir la «Caracterització dels espectres atòmics com a evidència experimental responsable de la necessitat de la revisió del model atòmic…» (Enllaç químic i estructura de la matèria › Espectres atòmics i tècniques espectroscòpiques). N’hi ha prou amb la vista Làmina amb Rutherford per recordar el model nuclear. Després es planteja el que no explica: l’estabilitat de l’àtom i els espectres.

## Concepcions alternatives que ajuda a corregir

La simulació ataca sobretot la idea d’àtom massís i la idea que les partícules només es desvien en xocar. Cada fila indica la idea prèvia freqüent i com desmuntar-la amb la simulació.

| Idea de l’alumnat | Idea correcta | Com mostrar-ho |
| --- | --- | --- |
| «L’àtom és una boleta massissa, plena de matèria» | L’àtom és gairebé tot espai buit, amb un nucli molt petit | Rutherford, Làmina, Z = 79, pluja contínua: gairebé 9 de cada 10 α travessen la làmina sense desviar-se més de 10° |
| «La partícula α rebota perquè xoca amb el nucli, com una bola de billar» | La repulsió elèctrica actua a distància i corba la trajectòria abans d’arribar-hi | Rutherford, Àtom, Z = 79: llançar una mica per sobre del nucli i veure que la trajectòria es corba lluny d’ell |
| «Les α es desvien en xocar amb els electrons» | Els electrons tenen molt poca massa i gairebé no desvien l’α | Thomson, Àtom, Z = 118: l’α travessa tots els anells d’electrons i continua gairebé recta |
| «Si es canvia de model és perquè l’anterior era una ximpleria» | Un model se substitueix quan un experiment en contradiu la predicció | Thomson, Làmina: tot a la primera barra. El mateix experiment amb Rutherford: apareixen barres vermelles que Thomson no explica |
| «El nucli ocupa bona part de l’àtom» | El nucli és diminut: per això els rebots són rars | Rutherford, Àtom, Z = 79: només reboten les α llançades gairebé a l’altura del nucli; a més de 50 px passen gairebé rectes |
| «Totes les partícules α es desvien igual, tant se val l’àtom o la seva velocitat» | La desviació creix amb la càrrega del nucli i baixa amb l’energia de l’α | Rutherford, Àtom: apuntar al nucli amb Z = 1 (no passa de 6°) i amb Z = 79 (rebota). Després repetir-ho amb velocitat 4 i 16 |
| «La partícula α és com un electró» | L’α és un nucli d’heli, amb dos protons i dos neutrons i càrrega positiva | Assenyalar una α en vol: es dibuixa amb dos punts vermells (protons) i dos de grisos (neutrons). Comparar-la amb els electrons blaus de l’àtom |

## Simplificacions que convé conèixer

La simulació prioritza el contrast qualitatiu entre els dos models i per això exagera mides i freqüències. Convé conèixer aquestes llicències per no reforçar idees incorrectes sense voler.

1. **El nucli és molt engrandit.** A la vista Àtom el nucli fa entre 3 i 15 px de radi. L’àtom fa entre 80 i 195 px. La proporció és d’1 a 12 a l’or, davant d’1 a 100 000 en la realitat. Convé dir-ho sempre que es parli de mides.
2. **Els rebots són exagerats.** A la Làmina de Rutherford amb Z = 79 i velocitat 10, unes 4 de cada 100 α es desvien més de 90°. Geiger i Marsden en van comptar una de cada 8000; amb aquesta proporció no es veuria cap rebot a classe. La «Guia ràpida» ho avisa.
3. **La làmina només té 3 àtoms de gruix.** Cada α interacciona només amb l’àtom més proper, si és a menys de dos radis. Una làmina d’or real té milers de capes d’àtoms.
4. **Cada model fa servir una constant de força diferent.** Rutherford fa servir una constant 5 vegades més gran que Thomson (40 000 davant de 8000). Thomson té a més un límit a la força total, que depèn de la velocitat de l’α i assegura desviacions de menys de 5°. Al batxillerat convé dir que la comparació és qualitativa.
5. **El límit de Thomson és artificial.** Les desviacions són sempre de menys de 5° amb qualsevol Z i velocitat (com a màxim 4,3°, amb Z = 118 i velocitat 4) perquè la força està limitada a propòsit. Al model de Thomson real les desviacions per àtom eren encara més petites, d’una fracció de grau.
6. **El detector té una obertura.** L’arc deixa oberta la zona de la font, uns 54° per dalt i per baix. Les α desviades més d’uns 125° surten per aquí sense deixar marca, tot i que sí que es compten a la gràfica. A l’experiment real no es mesurava en totes direccions alhora: es movia el detector.
7. **El nucli és «tou» i no hi ha força nuclear.** La força se suavitza a prop del centre i s’anul·la més enllà d’1,2 radis atòmics. Amb Z = 1 a velocitat 10, o amb Z = 14 a velocitat 16, una α llançada de cara travessa el nucli sense desviar-se.
8. **Neutrons i capes inventats.** El nucli dibuixa tants neutrons com protons; l’or real en té 118. Els electrons es reparteixen en capes de 2, 8, 18, 32, 32 i 8, que és una idea de Bohr, no de Rutherford. A partir de 4t d’ESO convé assenyalar l’anacronisme.
9. **Els electrons gairebé mai no xoquen.** La massa de l’α és 7350 vegades la de l’electró, a prop del valor real d’uns 7300. Però el seu radi de xoc és de 0,005 px i els xocs pràcticament no passen. Al model de Rutherford els electrons no fan cap força sobre l’α.

## Fitxa d’activitats de l’alumnat

La [fitxa d’activitats](https://simulaciencia.es/ca/fitxes/modelos/) segueix l’esquema prediu, observa i explica. Cada activitat porta un enllaç a la simulació ja preparada, de manera que funciona a l’aula d’informàtica, amb tauletes o com a tasca a casa. Es descarrega en Word i LibreOffice per adaptar-la.

| Curs | Activitats | Durada orientativa |
| --- | --- | --- |
| 1r a 3r d’ESO | Abans de començar, activitats 1 a 5, Aplica el que has après, Revisa les teves idees i Autoavaluació | Una o dues sessions, segons si les dues parts de l’explicació es fan juntes o per separat |
| 4t d’ESO | Abans de començar, activitats 1 a 6, Aplica el que has après, Revisa les teves idees i Autoavaluació | Una sessió de 50–55 minuts |
| Física de 2n de Batxillerat | Activitats 3 i 5 i Per ampliar | 30 minuts |

La taula d’«Abans de començar» recull cinc de les idees prèvies de la taula de concepcions alternatives. Convé no corregir-la al principi: l’alumnat hi torna a «Revisa les teves idees».

### Solucions

| Apartat | Solució |
| --- | --- |
| Abans de començar | Totes falses. a) L’àtom és gairebé tot buit (activitats 2 i 3). b) La repulsió elèctrica actua a distància i corba la trajectòria abans d’arribar-hi (activitat 3). c) El nucli és diminut (activitat 3). d) Un model es canvia quan un experiment en contradiu la predicció (activitat 2). e) La desviació depèn de la càrrega del nucli i de la velocitat (activitats 4 i 5) |
| Activitat 1 | Totes travessen l’àtom, amb desviacions d’1° o 2° com a màxim; cap no torna. La càrrega positiva està repartida en una esfera gran i el seu efecte és feble a tot arreu |
| Activitat 2 | Thomson: el 100 % a la primera barra i cap de vermella. Rutherford: al voltant del 88 % a la primera barra i al voltant del 4 % a les vermelles. Thomson no pot explicar cap rebot; cal una càrrega positiva molt concentrada (a l’experiment real rebotava 1 de cada 8000) |
| Activitat 3 | A l’altura del nucli torna enrere; una mica per sobre es corba molt; lluny passa recta. No toca el nucli: la desvia la repulsió elèctrica entre càrregues positives, que actua a distància. Gairebé totes passen rectes perquè l’àtom és gairebé tot buit i el nucli és diminut |
| Activitat 4 | Z = 1: es desvia poc (uns 6° com a màxim). Z = 14: es desvia bastant. Z = 79: rebota. Més protons, més càrrega positiva i més repulsió |
| Activitat 5 | Velocitat 4: molta (uns 115°). 10: mitjana (uns 38°). 16: poca (uns 16°). Amb més energia cinètica, la repulsió té menys temps i menys efecte per corbar-la |
| Activitat 6 | Nucli: 14 protons i 14 neutrons. Escorça: 14 electrons en capes de 2, 8 i 4. Bohr (1913): els electrons només poden estar en certes òrbites o nivells d’energia; així l’àtom és estable i s’expliquen els espectres |
| Aplica el que has après | 1) Thomson: esfera positiva amb electrons incrustats. Rutherford: nucli positiu diminut al centre i electrons girant al voltant. 2) Uns 1000 m (1 km): com una bala de vidre al centre d’un estadi gran. 3) El model de Thomson explicava el que se sabia aleshores; es va substituir quan un experiment nou el va contradir, que és com avança la ciència. 4) Serien atretes pel nucli: també es desviarien a prop seu, però corbant-se cap a ell |
| Per ampliar | 1) r<sub>mín</sub> es redueix a la quarta part; a la simulació, d’uns 19 px a uns 5 px. 2) r<sub>mín</sub> = 9 · 10⁹ · (2 · 1,6 · 10⁻¹⁹) · (79 · 1,6 · 10⁻¹⁹) / (5 · 10⁶ · 1,6 · 10⁻¹⁹ J) ≈ 4,5 · 10⁻¹⁴ m |
