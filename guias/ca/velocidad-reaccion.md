# Guia docent: simulació de velocitat de reacció

## Fitxa ràpida

La simulació mostra la reacció A + B → C com a xocs entre molècules amb orientació, i permet variar la temperatura, la quantitat de molècules i el catalitzador. A Catalunya el seu ús principal és a 4t d’ESO i a Química de 2n de Batxillerat, amb aplicacions al bloc de 1r a 3r d’ESO.

| Dada | Detall |
| --- | --- |
| Enllaç | [jrgrijota.github.io/simulacion-velocidad-reaccion](https://jrgrijota.github.io/simulacion-velocidad-reaccion/) |
| Cursos | 4t d’ESO i Química de 2n de Batxillerat (ús principal), 1r a 3r d’ESO; ús puntual a Química de 1r de Batxillerat |
| Matèria | Física i Química (ESO); Química (batxillerat) |
| Durada orientativa | 15–20 minuts d’explicació amb la simulació projectada |
| Material | Projector o pissarra digital; funciona al navegador, també al mòbil i a la tauleta, sense instal·lar res |
| Coneixements previs | Model de partícules, reactius i productes, temperatura com a mesura de l’agitació de les partícules |
| Accessibilitat | Tema fosc, clar i d’alt contrast (botó de la roda dentada, «Aparença») |

## Com funciona la simulació

La simulació té tres modes que es trien a la targeta «Mode»: «Mode reacció», «Mode comparació» i «Mode xoc». Als dos primers es veu una cambra amb molècules A (blau), B (taronja), producte C (verd) i catalitzador K (violeta). A sota apareix la gràfica «VELOCITAT DE REACCIÓ (reaccions/s simulat)».

| Mode | Què controla el docent | Què mostra |
| --- | --- | --- |
| Mode reacció | «Temperatura» d’1 a 10 (comença a «Normal (4)»), «Molècules A (reactiu)» i «Molècules B (reactiu)» de 4 a 30 (comencen a 16) i «Catalitzadors» de 0 a 6 (comença a 0). Botons «⏸ Pausa» i «↺ Reinicia» | Una cambra amb el recompte d’A, B, C i K, les reaccions tèrmiques i catalitzades («Tèrm.» i «Cat.»), el percentatge de «conversió», la corba de velocitats i la gràfica de velocitat de reacció |
| Mode comparació | «Variable per comparar»: «Presència de catalitzador» (0 davant de 4, rang 0–6), «Energia (temperatura)» (2 davant de 8, rang 1–10) o «Quantitat de molècules» (8 davant de 24, rang 4–30, el mateix nombre d’A i de B). Les altres dues variables es fixen amb els controls lliscants de «Paràmetres» | Dues cambres, «◀ Esquerra» i «▶ Dreta», amb les dues corbes superposades a la gràfica. Quan una cambra esgota el reactiu limitant, s’atura i mostra el percentatge de conversió de cadascuna |
| Mode xoc | Orientació de cada molècula, arrossegant-la amb el ratolí o amb el dit. «Energia del xoc» d’1 a 10 (comença a 5). Botons «▶ Llança» i «↺ Reinicia» | Dues molècules grans que xoquen de cara. Un tauler diu «✓ XOC EFECTIU» o «✗ XOC INEFECTIU» i si hi ha hagut «Energia suficient» i «Orientació correcta» |

Quatre elements sostenen l’explicació:

- **El lloc reactiu.** Cada A i cada B té un extrem clar ressaltat. La reacció tèrmica només passa si els dos llocs reactius es toquen en el xoc.
- **El requadre de velocitats.** A dalt a la dreta de cada cambra apareix «Velocitat relativa dels xocs (T = 4)». Dibuixa com es reparteixen les velocitats relatives dels parells de molècules, una línia vermella discontínua «Ea» i en verd la part que la supera: els xocs amb prou energia.
- **La gràfica de velocitat de reacció.** Compta les reaccions de l’últim segon de simulació (60 passos) i guarda els últims 90 valors. En comparació superposa les dues cambres amb el seu color, i les estadístiques del tauler es donen per cambra: «esquerra | dreta».
- **El percentatge de conversió.** A baix a la dreta de cada cambra indica quina part del reactiu limitant ha reaccionat.

El desplegable «Com funciona?», tancat en començar, resumeix la via tèrmica, la via catalitzada i el mode comparació. La targeta «Llegenda» identifica els colors, el lloc reactiu i el destell de reacció.

## Ús a cada curs

Al bloc de 1r a 3r d’ESO la simulació serveix per interpretar les reaccions a escala submicroscòpica i per veure de forma qualitativa l’efecte de la temperatura i de la concentració. A 4t d’ESO és el suport de la teoria de col·lisions i dels factors que influeixen en la velocitat. A Química de 2n de Batxillerat lliga la teoria de col·lisions amb l’energia d’activació, la llei de velocitat i els catalitzadors.

Els sabers i els criteris d’avaluació citats són els del currículum de Catalunya: Decret 175/2022 (DOGC núm. 8762, de 29 de setembre de 2022) per a l’ESO i Decret 171/2022 (DOGC núm. 8758, de 22 de setembre de 2022) per al batxillerat. A l’ESO, els sabers de 1r, 2n i 3r formen un sol bloc i cada centre decideix en quin curs treballa cada saber; 4t té el seu propi bloc. Al batxillerat, Física i Química són matèries separades des de 1r. Està previst que a partir del curs 2026-27 la Física i la Química de 1r de Batxillerat es fusionin en una sola matèria, «Física i Química»; quan se’n publiqui el currículum caldrà revisar l’apartat de 1r.

Les xifres de reaccions són orientatives. La simulació és aleatòria i el nombre de reaccions depèn de la mida de la pantalla. Els valors indicats corresponen a una pantalla de portàtil típica.

### 4t d’ESO: teoria de col·lisions i factors

*15–16 anys · 10th grade als EUA · Year 11 al Regne Unit*

**Sabers.** El canvi: «Relació de les variables termodinàmiques i cinètiques bàsiques a les reaccions químiques, aplicant models com la teoria de col·lisions, per explicar la reordenació dels àtoms i realitzar prediccions aplicades als processos quotidians més importants». Les destreses científiques bàsiques: «Ús de diversos entorns i recursos d’aprenentatge científic, com ara el laboratori o els entorns virtuals…».

**Criteris d’avaluació.** 1.2 (interpretar i predir el comportament de fenòmens quotidians argumentant-lo amb models, lleis i teories) i 3.1 (generar i usar dades de formats diversos per interpretar i comunicar informació sobre un procés químic).

El currículum català de 4t no anomena els catalitzadors ni la concentració; entren en fer «prediccions» amb la teoria de col·lisions.

**Objectius.** Enunciar les dues condicions d’un xoc eficaç: prou energia i orientació adequada. Explicar l’efecte de la temperatura, de la concentració i del catalitzador amb aquestes condicions. Interpretar la velocitat de reacció com a reaccions per unitat de temps.

**Seqüència d’explicació (15–20 min).**

1. Mode xoc amb els valors inicials: els dos llocs reactius es miren de cara. Prémer «▶ Llança»: «✓ XOC EFECTIU» i apareix C.
2. Prémer «↺ Reinicia» i arrossegar A perquè el seu lloc reactiu apunti cap amunt (uns 90°). Llançar: «✗ XOC INEFECTIU», amb «Orientació correcta: No ✗». Definir la condició d’orientació.
3. Prémer «↺ Reinicia», deixar l’orientació inicial i baixar «Energia del xoc» a 3. Llançar: «✗ XOC INEFECTIU», amb «Energia suficient: No ✗». Pujar a 4 i llançar: efectiu. Definir la condició d’energia: Ea equival al nivell 4.
4. Passar a Mode reacció i assenyalar el requadre «Velocitat relativa dels xocs (T = 4)»: el que queda en verd, a la dreta d’«Ea», són els xocs amb prou energia. Moure «Temperatura» d’1 a 10: la corba s’eixampla cap a la dreta i l’àrea verda passa d’un 12 % a T = 1 a un 81 % a T = 10.
5. Mode comparació amb «Presència de catalitzador» (és la variable inicial: 0 davant de 4). La cambra amb 4 catalitzadors sol esgotar el reactiu en 15–25 s. La simulació s’atura i l’altra cambra sol quedar per sota del 50 %.
6. Assenyalar que el recompte «K: 4» no canvia: el catalitzador no es gasta. Llegir la gràfica: cada pic són reaccions per segon, i la velocitat cau quan s’esgoten els reactius.

### 1r a 3r d’ESO: reaccions, temperatura i concentració

*12–15 anys · 7th–9th grade als EUA · Year 8–10 al Regne Unit*

**Sabers.** El canvi: «Interpretació de les reaccions químiques a escala macroscòpica i submicroscòpica per explicar les relacions de la química amb el medi ambient, la tecnologia i la societat» i «Anàlisi dels factors que afecten les reaccions químiques per predir-ne l’evolució de forma qualitativa…». Habilitats científiques bàsiques: «Ús de diversos entorns i recursos d’aprenentatge científic, com ara el laboratori o els entorns virtuals…».

**Criteris d’avaluació.** 1.1 (analitzar fenòmens i processos interpretant informació en diferents formats, com models i gràfics) i 2.1 (plantejar preguntes sobre fenòmens quotidians i formular hipòtesis que es puguin contrastar).

El currículum català de 1r a 3r no anomena la temperatura i la concentració com a factors; entren en l’«anàlisi dels factors que afecten les reaccions químiques». Si el centre treballa primer la reacció química com a reorganització d’àtoms, n’hi ha prou amb el pas 1 i amb el «Mode xoc»: amb els valors inicials, «▶ Llança» dona un xoc efectiu i apareix C, format pels àtoms d’A i de B.

**Objectius.** Interpretar una reacció com a xocs entre partícules que reorganitzen els seus àtoms. Predir de forma qualitativa l’efecte de la temperatura i de la concentració. Relacionar la temperatura amb la rapidesa de les partícules.

**Seqüència d’explicació (15–20 min).**

1. Mode reacció amb els valors inicials: «Normal (4)», 16 A, 16 B i 0 catalitzadors. Obrir «Llegenda» i assenyalar A, B, C i el lloc reactiu. Preguntar si reaccionen cada vegada que xoquen.
2. Deixar-ho córrer un minut. Hi ha molts xocs i pocs destells: el comptador «Reaccions» sol quedar entre 5 i 8. Concloure que no tot xoc produeix reacció.
3. Aturar amb la pausa i assenyalar una molècula C: té dos àtoms blaus d’A i dos de taronja de B. Els àtoms es reorganitzen, no apareixen ni desapareixen.
4. Passar a Mode comparació i triar «Energia (temperatura)»: queda T = 2 davant de T = 8. Demanar una predicció. Al cap d’un minut, la cambra a T = 8 sol portar unes 12 reaccions davant d’unes 7.
5. Triar «Quantitat de molècules»: queden 8 A + 8 B davant de 24 A + 24 B en cambres iguals. Al cap d’un minut sol haver-hi unes 4 reaccions davant d’unes 17. Més partícules en el mateix espai xoquen més sovint.
6. Tancar amb dues regles: amb més temperatura i amb més concentració, reacció més ràpida. Exemple quotidià: la nevera conserva els aliments perquè frena les seves reaccions.

### Química de 2n de Batxillerat: cinètica química

*17–18 anys · 12th grade als EUA · Year 13 al Regne Unit*

**Sabers.** Reaccions químiques › Cinètica química: «Elaboració d’explicacions i prediccions basades en la teoria de les col·lisions com a model a escala submicroscòpica de les reaccions químiques. Conceptes de velocitat de reacció i energia d’activació en contextos propers o d’actualitat», «Elaboració d’explicacions i prediccions basades en la influència de les condicions de reacció sobre la seva velocitat…» i «Aplicació de la llei diferencial de la velocitat d’una reacció química i càlcul dels ordres de reacció a partir de dades experimentals de velocitat de reacció».

**Criteris d’avaluació.** 1.2 (descriure els principals processos químics a partir dels coneixements de la química), 5.5 (representar i visualitzar els conceptes de química que presentin més dificultats amb eines digitals i recursos variats) i 6.3 (solucionar problemes característics de la química amb les eines de les matemàtiques i la tecnologia).

El currículum català no anomena l’equació d’Arrhenius ni els catalitzadors; entren en la «influència de les condicions de reacció sobre la seva velocitat».

**Objectius.** Interpretar els factors de l’equació d’Arrhenius, k = A·e^(−Ea/RT), amb la teoria de col·lisions. Relacionar la velocitat amb la concentració de reactius. Explicar l’acció d’un catalitzador com un mecanisme alternatiu.

**Seqüència d’explicació (15–20 min).**

1. Mode reacció, «Temperatura» a 4. Al requadre, la fracció verda de xocs amb prou energia val e^(−2,1/T): 59 % a T = 4. Comparar-la amb el factor e^(−Ea/RT) d’Arrhenius.
2. Recórrer T = 1, 2, 4 i 10: la fracció val 12 %, 35 %, 59 % i 81 %. La rapidesa típica només es multiplica per 3,2 entre T = 1 i T = 10. Concloure que la temperatura actua sobretot per la fracció que supera Ea.
3. Mode xoc: girar A uns 90° i llançar. El xoc és inefectiu encara que hi hagi «Energia suficient: Sí ✓». Presentar el factor estèric inclòs en el factor preexponencial A.
4. Mode comparació, «Quantitat de molècules» (8 davant de 24). Amb v = k[A][B], triplicar les dues concentracions multiplica per 9 la velocitat inicial. Comprovar a la gràfica que la corba dreta va molt per sobre.
5. Mode reacció amb 30 A, 30 B i 4 catalitzadors. La gràfica comença a 2–4 reaccions/s i cau cap a 0 en uns 20–30 s. La velocitat disminueix en baixar les concentracions, com prediu la llei de velocitat.
6. Mode comparació, «Presència de catalitzador». Explicar que el catalitzador ofereix un altre camí i en surt intacte. Matisar que aquí elimina la barrera, mentre que un catalitzador real la rebaixa. Citar la síntesi de Haber-Bosch.

### Química de 1r de Batxillerat: repàs puntual

*16–17 anys · 11th grade als EUA · Year 12 al Regne Unit*

No hi ha cap saber de cinètica. La simulació pot donar suport a l’«Aplicació de l’estequiometria de les reaccions químiques…», en concret al reactiu limitant. En Mode reacció amb 16 A, 10 B i 4 catalitzadors, la reacció s’atura amb 10 molècules de C. Queden 6 A sense reaccionar i la «conversió» marca 100 %, perquè es calcula respecte del reactiu limitant.

## Concepcions alternatives que ajuda a corregir

La simulació ataca sobretot la idea que n’hi ha prou que les partícules xoquin perquè reaccionin. Cada fila indica la idea prèvia freqüent i com desmuntar-la amb la simulació.

| Idea de l’alumnat | Idea correcta | Com mostrar-ho |
| --- | --- | --- |
| «Sempre que dos reactius xoquen, reaccionen» | Només reacciona una petita fracció dels xocs | Mode reacció amb els valors inicials: molts xocs i, en un minut, només unes 5–8 reaccions al comptador «Tèrm.» |
| «Si el xoc és molt fort, sempre hi ha reacció» | També cal l’orientació adequada | Mode xoc, «Energia del xoc» a 10 i A girada 180°: «✗ XOC INEFECTIU» amb «Energia suficient: Sí ✓» |
| «En escalfar, totes les molècules van a la mateixa velocitat, només que més ràpid» | Hi ha una distribució de velocitats; en escalfar s’eixampla | Mode reacció: moure «Temperatura» d’1 a 10 i mirar com s’eixampla la corba del requadre de velocitats |
| «La temperatura accelera la reacció només perquè hi ha més xocs» | L’efecte principal és que més molècules superen l’energia d’activació | Requadre de velocitats: l’àrea verda passa del 12 % (T = 1) al 81 % (T = 10), molt més que la rapidesa (×3,2) |
| «El catalitzador es gasta o passa a formar part del producte» | El catalitzador es recupera intacte i torna a actuar | Mode reacció amb 4 catalitzadors: el recompte «K: 4» no canvia i C només té àtoms d’A i de B |
| «Amb catalitzador s’obté més producte» | El catalitzador només accelera; el producte el limita el reactiu limitant | Mode reacció amb 16 A, 10 B i 4 catalitzadors: C s’atura a 10, en menys de mig minut; sense catalitzador trigaria molt més, però el límit seria el mateix |
| «La velocitat de reacció és constant fins que s’acaba» | La velocitat disminueix a mesura que es consumeixen els reactius | Mode reacció amb 30 A, 30 B i 4 catalitzadors: la gràfica comença a 2–4 reaccions/s i cau cap a 0 en uns 20–30 s |

## Simplificacions que convé conèixer

La simulació prioritza les dues condicions del xoc eficaç i per això simplifica l’energia, el catalitzador i l’escala. Convé conèixer aquestes llicències per no reforçar idees incorrectes sense voler.

1. **L’energia d’activació és un llindar de velocitat.** Una A i una B reaccionen si la seva velocitat relativa supera 5,8 px per fotograma. A més, els seus llocs reactius han de quedar a menys d’11 px. No es calcula energia cinètica ni es fa servir la component al llarg de la línia de xoc. A 2n de Batxillerat convé dir-ho.
2. **El requadre compta parells, no xocs.** Dibuixa la velocitat relativa d’un parell de molècules a l’atzar, que és el que la reacció compara amb Ea. Però els parells ràpids xoquen més sovint, així que entre els xocs que passen de debò la fracció amb prou energia és una mica més gran que l’àrea verda.
3. **La distribució és bidimensional.** Les molècules es mouen en un pla i la corba és f(v) ∝ v·e^(−v²/2σ²), amb σ = 2·√(2T) per a la velocitat relativa (2·√T per a cada molècula). No és la distribució de Maxwell-Boltzmann en tres dimensions. La seva forma qualitativa sí que és la correcta.
4. **La temperatura és una escala d’1 a 10.** No són kelvins ni graus Celsius. La rapidesa creix amb √T, coherent amb una energia cinètica mitjana proporcional a T. No convé convertir els nivells en temperatures reals.
5. **El catalitzador elimina la barrera.** Atrau A i B des de 115 px i les subjecta a les seves dues cavitats. Als 28 fotogrames reaccionen, sense requisit d’energia ni d’orientació. Un catalitzador real rebaixa l’energia d’activació, no l’anul·la. Per això la via catalitzada gairebé no depèn de la temperatura.
6. **La reacció és irreversible i sense intercanvi d’energia.** C mai es descompon en A i B i no s’allibera ni s’absorbeix calor. No serveix per explicar l’equilibri químic ni les reaccions exotèrmiques.
7. **La concentració és el nombre de molècules a la cambra.** La mida de la cambra depèn de la pantalla. En comparació cada cambra fa la meitat, així que 16 molècules equivalen al doble de concentració. Les xifres canvien entre el portàtil i el projector.
8. **Segons de simulació.** La velocitat es mesura en reaccions per cada 60 fotogrames, un «segon de simulació». En un ordinador lent l’animació va més a poc a poc, però les xifres són les mateixes; la gràfica i l’ajuda ho indiquen. Amb tan poques molècules els valors són enters petits i molt irregulars.
9. **Al Mode xoc l’energia és un graó.** Cada molècula surt a 1,5·√E, així que la velocitat relativa supera el llindar de 5,8 a partir del nivell 4 (nivell 3: 5,2; nivell 4: 6,0). No hi ha distribució de velocitats: és un únic xoc amb una energia fixa.

## Fitxa d’activitats de l’alumnat

La [fitxa d’activitats](https://simulaciencia.es/ca/fitxes/velocidad-reaccion/) segueix l’esquema prediu, observa i explica. Cada activitat porta un enllaç a la simulació ja preparada, així que funciona a l’aula d’informàtica, amb tauletes o com a tasca a casa. Es descarrega en Word i LibreOffice per adaptar-la.

| Curs | Activitats | Durada orientativa |
| --- | --- | --- |
| 1r a 3r d’ESO | Abans de començar, activitats 1, 3 i 4, preguntes 1 a 3 d’Aplica el que has après i Revisa les teves idees | Una sessió |
| 4t d’ESO | Abans de començar, activitats 1 a 6, Aplica el que has après, Revisa les teves idees i Autoavaluació | Una sessió de 50–55 minuts |
| Química de 2n de Batxillerat | Activitats 2, 3, 5 i Per ampliar | Una sessió |

La taula d’«Abans de començar» recull cinc idees prèvies sobre les reaccions. Convé no corregir-la al principi: l’alumnat hi torna a «Revisa les teves idees». La simulació és aleatòria: les xifres de les solucions són orientatives i depenen de la mida de la pantalla.

### Solucions

| Apartat | Solució |
| --- | --- |
| Abans de començar | Totes falses. a) Només els xocs eficaços reaccionen (activitats 1 i 2). b) Els àtoms es reorganitzen; no apareixen ni desapareixen (activitat 1). c) Les molècules no creixen; es mouen més de pressa i xoquen amb més energia (activitat 3). d) El catalitzador no es gasta (activitat 5). e) La velocitat baixa a mesura que es gasten els reactius (activitat 6) |
| Activitat 1 | Entre 5 i 8 reaccions en un minut, amb molts més xocs. Una molècula C té dos àtoms blaus (d’A) i dos de taronja (de B): els àtoms es reorganitzen. No tot xoc produeix reacció |
| Activitat 2 | Cas 1: efectiu. Cas 2: inefectiu, falla l’orientació. Cas 3: inefectiu, falla l’energia. Cas 4: efectiu. Condicions: prou energia (com a mínim l’energia d’activació, nivell 4) i orientació adequada (els llocs reactius es toquen) |
| Activitat 3 | A temperatura 2, unes 7 reaccions; a temperatura 8, unes 12. La part verda és petita a temperatura 2 i gran a temperatura 8. En escalfar, les molècules es mouen més de pressa: xoquen més sovint i una part més gran dels xocs supera l’energia d’activació |
| Activitat 4 | Unes 4 reaccions amb 8 + 8 i unes 17 amb 24 + 24. Més molècules en el mateix volum xoquen més sovint. Exemple: el lleixiu concentrat actua abans que el diluït |
| Activitat 5 | La cambra amb 4 catalitzadors esgota el reactiu en 15–25 s; l’altra sol quedar per sota del 50 %. Hi ha 4 catalitzadors al principi i al final. El catalitzador obre un camí de reacció amb menys energia d’activació i es recupera en acabar cada reacció |
| Activitat 6 | La velocitat és més gran al principi i baixa fins a zero al final, quan no queden A ni B. Es frena perquè cada vegada hi ha menys reactius i xoquen menys sovint (menys concentració) |
| Aplica el que has après | 1) A baixa temperatura les molècules es mouen més a poc a poc i hi ha menys xocs eficaços: les reaccions que fan malbé els aliments van més lentes. 2) La serradura té molta més superfície en contacte amb l’oxigen: més xocs. 3) Amb més temperatura, més xocs i més energètics. 4) Accelera les reaccions que transformen els gasos tòxics en uns altres de menys nocius; no es gasta, així que no cal reposar-lo a cada ús |
| Per ampliar | 1) La part verda passa d’un 12 % a temperatura 1 a un 81 % a temperatura 10: la fracció de xocs amb energia més gran que Ea creix molt amb T, com indica el factor e<sup>−Ea/RT</sup>. 2) B és el limitant: es formen 10 molècules de C i en sobren 6 d’A; la conversió marca 100 % |
