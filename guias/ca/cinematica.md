# Guia docent: Gràfiques del Moviment

## Fitxa ràpida

La simulació Gràfiques del Moviment posa un mòbil (un cotxe o una persona) en una pista recta i dibuixa, alhora que es mou, les seves gràfiques posició–temps (x‑t), velocitat–temps (v‑t) i acceleració–temps (a‑t). Serveix per aprendre a llegir i construir gràfiques del moviment rectilini uniforme (MRU) i uniformement accelerat (MRUA): què vol dir el pendent, què vol dir l’àrea i què indica el signe. Té tres modes: explorar amb exemples de la vida diària, resoldre 10 reptes que demanen reproduir una gràfica i moure el mòbil amb la mà per veure la gràfica del propi moviment. El seu ús principal és al bloc de 1r a 3r d’ESO (gràfiques del MRU, posició, desplaçament i velocitat) i a 4t d’ESO (MRU i MRUA).

| Dada | Detall |
| --- | --- |
| Enllaç | [jrgrijota.github.io/simulacion-cinematica](https://jrgrijota.github.io/simulacion-cinematica/?lang=ca) |
| Cursos | 1r a 3r d’ESO i 4t d’ESO |
| Matèria | Física i Química |
| Durada orientativa | 15–20 minuts d’explicació amb la simulació projectada; els reptes, una sessió sencera |
| Material | Projector o pissarra digital; funciona al navegador, també al mòbil i a la tauleta, sense instal·lar res. En pantalles estretes la pista i les gràfiques queden a dalt i els controls a sota. «Mou-lo tu» funciona millor amb el dit en una tauleta o a la pissarra digital |
| Coneixements previs | Llegir un punt en uns eixos cartesians. Per a 4t d’ESO, la velocitat com a quocient entre desplaçament i temps |
| Accessibilitat | Temes SimulaCiencia, fosc, clar i d’alt contrast (botó de la roda dentada). Ritme ×½, ×1 i ×2. Es fa servir amb el teclat: barra d’espai per iniciar o pausar, R per reiniciar i fletxes per moure el cursor del temps o el mòbil. Els resultats i les pauses es llegeixen en veu alta amb el lector de pantalla |

## Com funciona la simulació

A dalt del llenç hi ha la pista, un regle de −20 a 100 m amb el sentit positiu marcat («x +»). A sota, les tres gràfiques comparteixen l’eix del temps (de 0 a 20 s) i un cursor vertical discontinu: el punt de cada gràfica i la posició del mòbil a la pista corresponen sempre al mateix instant. Els eixos tenen escala fixa (x de −20 a 100 m, v de −10 a 10 m/s, a de −3 a 3 m/s²) perquè es puguin comparar moviments diferents.

A la pista, el mòbil porta una fletxa verda de velocitat i una altra de taronja d’acceleració; la seva longitud és proporcional al valor i el seu sentit, el del vector. Amb «Marques cada segon» deixa un punt a la pista cada segon: en el MRU les marques queden a la mateixa distància; en el MRUA, cada vegada més separades o més juntes.

La simulació té tres modes, que es trien a dalt del tauler de l’esquerra.

| Mode | Què es fa |
| --- | --- |
| Explorar | Triar «MRU» o «MRUA», ajustar «Posició inicial» (−20 a 100 m), «Velocitat» o «Velocitat inicial» (−10 a 10 m/s, amb l’equivalència en km/h) i «Acceleració» (−3 a 3 m/s²), o triar un dels «Exemples de la vida diària». En MRUA, la casella «S’atura en arribar a v = 0» fa que freni sense fer marxa enrere |
| Reptes | 10 gràfiques que cal reproduir construint el moviment per trams. Els reptes 1 a 5 són de MRU i els 6 a 10, de MRUA (4t d’ESO). Cada repte té una petita història, una «Pista» i, en prémer «▶ Comprova», un missatge que diu si coincideix o on i per què se separen les gràfiques. Després de dos intents fallits apareix «Mostra la solució». L’opció «Lliure» serveix per preparar exemples de classe |
| Mou-lo tu | L’alumne arrossega el mòbil amb el ratolí o el dit (o amb les fletxes del teclat) durant 20 s i veu la gràfica x‑t i v‑t del seu propi moviment. A «Gràfica que cal seguir» pot triar una de tres gràfiques i intentar mantenir-se dins d’una franja; al final se li dona el percentatge de temps a dins |

Els exemples de la vida diària són: «Persona que passeja (1,5 m/s)», «Persona que corre (4 m/s)», «Cotxe per un carrer (8,5 m/s ≈ 30 km/h)», «Persona que torna cap a l’origen», «Cotxe que fa marxa enrere (−2 m/s)» (MRU), i «Cotxe que arrenca a poc a poc», «Cotxe que frena en un semàfor» i «Avança frenant i torna» (MRUA).

Als reptes, cada tram té una durada i un valor: la velocitat als reptes de MRU (canvia de cop d’un tram a l’altre) i l’acceleració als de MRUA (la velocitat és contínua). El repte dona la gràfica objectiu en groc discontinu i el moviment de l’alumne es dibuixa a sobre. Als reptes 5, 6 i 10 la gràfica objectiu és la v‑t, i l’enunciat diu d’on surt el mòbil, perquè la v‑t no ho indica.

A «Visualització» es trien les gràfiques visibles, el mòbil i aquestes ajudes:

- **«Pendent de x‑t (velocitat)».** Dibuixa la recta tangent a la x‑t al cursor i hi escriu «pendent = v = … m/s».
- **«Àrea sota v‑t (desplaçament)».** Ombreja l’àrea entre la v‑t i l’eix (per sobre, positiva; per sota, negativa) i hi escriu «àrea = Δx = … m».
- **«Deixa l’anterior (en gris)».** Conserva el recorregut anterior per comparar-lo amb el nou.
- **«Pausa en els moments clau».** Atura la simulació quan el mòbil s’atura o canvia de sentit, amb un rètol com «Canvia de sentit: v = 0, a = −1,0 m/s²».

La barra superior té «Inicia», «Reinicia», el ritme (×½, ×1, ×2) i el lliscador «Instant», que porta el cursor a qualsevol moment del recorregut ja fet. El desplegable «Dades a l’instant del cursor» dona t, x, v (també en km/h), a, la distància recorreguda i el desplaçament. «Taula de valors» dona t, x, v i a cada segon i es pot copiar a un full de càlcul. «Equacions del moviment» escriu les equacions amb les dades de l’exemple (per exemple, x = 0 + 7 · t − 0,5 · t²) i les avalua a l’instant del cursor. «Idees clau» resumeix les cinc idees de la simulació.

Si el mòbil arriba a un extrem de la pista, el recorregut s’acaba allà i s’avisa. A la v‑t, si la velocitat surt de ±10 m/s, la gràfica es talla i s’indica «La gràfica surt de l’escala».

## Ús a cada curs

Al bloc de 1r a 3r d’ESO la simulació treballa les gràfiques x‑t i v‑t del MRU, la posició, el desplaçament, la distància recorreguda i la velocitat, i introdueix l’acceleració. A 4t d’ESO treballa les magnituds, les equacions i les gràfiques del MRU i del MRUA.

Els sabers i els criteris d’avaluació citats són els del currículum de Catalunya: Decret 175/2022 (DOGC núm. 8762, de 29 de setembre de 2022). A l’ESO, els sabers de 1r, 2n i 3r formen un sol bloc i cada centre decideix en quin curs treballa cada saber; 4t té el seu propi bloc.

El currículum català no anomena el MRU ni el MRUA: a 1r a 3r parla de les «característiques fonamentals del moviment» i a 4t, de les «magnituds, equacions i gràfiques principals» del moviment d’un cos. Les dues sessions de 1r a 3r es poden fer al mateix curs o separar-les.

### 1r a 3r d’ESO: gràfiques del MRU, posició i velocitat

*12–15 anys · 7th–9th grade als EUA · Year 8–10 al Regne Unit*

**Sabers.** Interacció: «Predicció de les característiques fonamentals del moviment dels objectes a partir dels conceptes de la cinemàtica, per formular hipòtesis sobre valors futurs d’aquestes magnituds, mitjançant l’ús del càlcul numèric elemental, la interpretació de gràfiques i el disseny, muntatge i anàlisi d’activitats experimentals com a eines de contrast de les hipòtesis relacionades amb el moviment dels objectes».

**Criteris d’avaluació.** 1.1 (analitzar conceptes, fenòmens i processos interpretant informació en diferents formats, com gràfics i taules), 1.2 (interpretar i predir el comportament de fenòmens quotidians relacionant-lo amb models, lleis i teories) i 3.1 (generar i usar dades de fonts i formats diversos per interpretar, validar i comunicar informació).

**Objectius.** Situar la posició respecte a un origen i un sentit positiu. Reconèixer que una gràfica x‑t no és el camí del mòbil. Llegir la velocitat d’un MRU com el pendent de la x‑t i com el valor d’una v‑t horitzontal. Interpretar els trams horitzontals (aturat) i descendents (torna, velocitat negativa). Distingir posició, desplaçament i distància recorreguda. Calcular la velocitat mitjana i comparar-la amb la instantània. Introduir l’acceleració com el canvi de velocitat a cada segon.

**Seqüència d’explicació, 1a sessió: gràfiques del MRU (15–20 min).**

1. Mode «Explorar», exemple «Persona que passeja (1,5 m/s)», amb «Marques cada segon». Abans de prémer «Inicia», preguntar quina forma tindrà la x‑t (la mateixa simulació convida a predir). La persona deixa marques a la mateixa distància i la x‑t és una recta: 1,5 m més cada segon. Als 20 s és a x = 30 m.
2. Activar «Deixa l’anterior (en gris)» i triar «Persona que corre (4 m/s)». Les dues rectes surten del mateix punt: la més inclinada és la del mòbil més ràpid. Als 20 s és a x = 80 m. Activar «Pendent de x‑t» i moure el cursor: el pendent val sempre 4 m/s.
3. Mirar la v‑t dels dos moviments: rectes horitzontals a 1,5 i a 4 m/s. En el MRU la velocitat no canvia; la a‑t és 0 tota l’estona.
4. «Persona que torna cap a l’origen»: surt de x = 60 m amb v = −2 m/s. La x‑t baixa i la v‑t queda per sota de l’eix. Insistir-hi: la persona no «baixa», va cap a l’esquerra; el signe menys indica el sentit. Als 20 s és a x = 20 m.
5. Mode «Reptes», repte 3 «Parada al quiosc». Llegir la gràfica per trams: de 0 a 30 m en 6 s (5 m/s), 6 s aturat, de 30 a 50 m en 8 s (2,5 m/s). Construir els trams i prémer «▶ Comprova». Si s’oblida el tram aturat, el missatge ho pregunta: «Has comptat els trams en què està aturat?».

**Seqüència d’explicació, 2a sessió: posició, desplaçament i velocitat (15–20 min).**

1. Repte 2 «Anada i tornada» (4 m/s durant 10 s i −4 m/s durant 10 s), amb la solució construïda a «Lliure» o després de resoldre’l. Obrir «Dades a l’instant del cursor». Als 20 s la posició és 0, el desplaçament és 0 m i la distància recorreguda és 80 m. La trajectòria és una recta; la gràfica x‑t és una «teulada», no el camí.
2. Repte 3 «Parada al quiosc»: velocitat mitjana en els 20 s = 50 m / 20 s = 2,5 m/s. Moure el cursor: la velocitat instantània val 5, 0 i 2,5 m/s segons el tram. La mitjana no és la velocitat «de gairebé sempre».
3. Velocitat com a vector: «Cotxe que fa marxa enrere (−2 m/s)». La fletxa verda apunta cap a l’esquerra i el valor és negatiu. La rapidesa és el valor sense signe.
4. Acceleració: mode «Explorar», «MRUA», exemple «Cotxe que arrenca a poc a poc» (a = 0,5 m/s²) amb «Marques cada segon». La v‑t puja 0,5 m/s cada segon; les marques se separen cada vegada més. Comprovar-ho amb la taula de valors.
5. Reptes 1 a 5 per a l’alumnat, per parelles.

### 4t d’ESO: MRU i MRUA

*15–16 anys · 10th grade als EUA · Year 11 al Regne Unit*

**Sabers.** La interacció: «Predicció i comprovació, utilitzant l’experimentació i el raonament logicomatemàtic, de les magnituds, equacions i gràfiques principals que descriuen el moviment d’un cos, per relacionar-lo amb situacions quotidianes i la millora de la qualitat de vida».

**Criteris d’avaluació.** 1.2 (interpretar i predir el comportament de fenòmens quotidians, argumentant-lo amb rigor d’acord amb models, lleis i teories), 2.2 (dissenyar procediments de recerca que impliquin la deducció, el treball experimental i el raonament logicomatemàtic), 3.1 (generar i usar dades de fonts i formats diversos, com taules i gràfiques) i 3.2 (utilitzar adequadament les unitats de mesura i les eines matemàtiques).

**Objectius.** Escriure i interpretar x = x₀ + v₀ · t + ½ · a · t² i v = v₀ + a · t. Relacionar les tres gràfiques del MRUA: paràbola a la x‑t, recta inclinada a la v‑t i recta horitzontal a la a‑t. Obtenir l’acceleració com a pendent de la v‑t i el desplaçament com a àrea sota la v‑t. Distingir accelerar i frenar pels signes de v i a, no pel signe de a.

**Seqüència d’explicació (15–20 min).**

1. Repàs ràpid del MRU amb «Persona que corre (4 m/s)»: recta a la x‑t, horitzontal a la v‑t. Activar «Àrea sota v‑t»: als 10 s l’àrea és 4 · 10 = 40 m, igual al que ha avançat.
2. «Cotxe que frena en un semàfor» (v₀ = 10 m/s, a = −2 m/s², «S’atura en arribar a v = 0»). Predir quan s’atura: 10 / 2 = 5 s. La v‑t baixa en línia recta fins a 0 i la x‑t es corba fins a quedar horitzontal. Àrea del triangle = ½ · 5 · 10 = 25 m; comprovar que el cotxe s’atura a x = 25 m. Obrir «Equacions del moviment»: a partir de t = 5 s les equacions del MRUA ja no valen.
3. Treure «S’atura» amb «Avança frenant i torna» (v₀ = 7 m/s, a = −1 m/s²) i activar «Pausa en els moments clau». A t = 7 s s’atura: «Canvia de sentit: v = 0, a = −1,0 m/s²». La velocitat és 0 un instant, però l’acceleració no. El cim de la paràbola és a x = 24,5 m.
4. Signes: després de la pausa, el cotxe torna amb v negativa i a negativa: accelera cap a l’esquerra. Frena quan v i a tenen signes contraris. Comprovar-ho amb el repte 10 «Marxa enrere», que frena amb acceleració positiva.
5. Reptes 6 a 9 per a l’alumnat, per parelles. El 6 «El cotxe arrenca» dona la v‑t: el pendent del primer tram és l’acceleració (1 m/s²). El 8 «La muntanya» desmunta la idea que la gràfica és una pujada.
6. Mode «Mou-lo tu» com a tancament: un alumne mou el mòbil a la pissarra digital intentant seguir la gràfica 2 «Anada i tornada» i la resta comenta què ha de fer a cada tram.

## Concepcions alternatives que ajuda a corregir

La simulació ataca sobretot la confusió entre la gràfica i el camí del mòbil, la idea que velocitat negativa vol dir frenar i la idea que v = 0 implica a = 0. Cada fila indica la idea prèvia freqüent i com desmuntar-la amb la simulació.

| Idea de l’alumnat | Idea correcta | Com mostrar-ho |
| --- | --- | --- |
| «La gràfica és el camí que segueix el mòbil» | La gràfica diu com canvia una magnitud amb el temps; el mòbil sempre va en línia recta | Repte 8 «La muntanya»: la x‑t puja i baixa, però el cotxe avança, s’atura i torna per la mateixa pista |
| «Si la gràfica x‑t baixa, el mòbil baixa una pendent o frena» | Si la x‑t baixa, el mòbil es mou cap al sentit negatiu | «Persona que torna cap a l’origen»: x‑t descendent i persona caminant cap a l’esquerra |
| «Velocitat negativa vol dir que frena» | El signe de v dona el sentit; frena quan v i a tenen signes contraris | Repte 10 «Marxa enrere»: v negativa tota l’estona i, al tercer tram, frena amb a positiva |
| «Acceleració negativa vol dir frenar» | Amb v negativa, una a negativa fa que vagi cada vegada més de pressa | «Avança frenant i torna» després de t = 7 s: v i a negatives, les marques se separen |
| «Si la velocitat és 0, l’acceleració també és 0» | A l’instant en què canvia de sentit, v = 0 però a continua valent el mateix | «Pausa en els moments clau» a «Avança frenant i torna»: «v = 0, a = −1,0 m/s²» |
| «Un tram horitzontal a la x‑t és velocitat constant, com a la v‑t» | Horitzontal a la x‑t és estar aturat; horitzontal a la v‑t és velocitat constant | Repte 3: el tram aturat és horitzontal a la x‑t i és a v = 0 a la v‑t |
| «Distància recorreguda i desplaçament són el mateix» | Només coincideixen si el mòbil no canvia de sentit | Repte 2 «Anada i tornada»: 80 m recorreguts i desplaçament 0 |
| «Les dues gràfiques d’un mateix moviment han de tenir la mateixa forma» | La v‑t és el pendent de la x‑t: una recta a la x‑t és horitzontal a la v‑t; una paràbola, una recta inclinada | Veure les tres gràfiques alhora en qualsevol exemple del MRUA |

## Simplificacions que convé conèixer

La simulació prioritza que les gràfiques es llegeixin amb claredat i es puguin comparar. Per fer-ho fa aquestes simplificacions; convé conèixer-les per no reforçar idees incorrectes sense voler.

1. **Moviment en una dimensió i mòbil puntual.** La posició és la d’un punt del mòbil (el centre del cotxe o els peus de la persona). No hi ha corbes ni trajectòries en el pla.
2. **Canvis de velocitat instantanis en el MRU per trams.** Als reptes de MRU la velocitat salta d’un valor a un altre sense temps de transició, cosa impossible en la realitat (caldria una acceleració infinita). Per això en aquests reptes no es dibuixa la a‑t i la simulació ho explica al seu lloc.
3. **Acceleració constant per trams.** En el MRUA l’acceleració canvia de cop entre trams. Un cotxe real accelera i frena de manera més suau.
4. **No hi ha causes del moviment.** No apareixen forces, fregament ni massa: la simulació és només de cinemàtica. Per a les forces es poden fer servir altres simulacions del web.
5. **Escales i valors de classe.** Els valors (fins a 10 m/s i 3 m/s²) s’han triat perquè el moviment càpiga en 120 m i 20 s. Un cotxe en ciutat va a uns 8 a 14 m/s i frena amb uns 3 a 8 m/s².
6. **La pista s’acaba.** Si el mòbil arriba a −20 m o a 100 m, el recorregut acaba allà. Fora de la simulació el moviment continuaria.
7. **«Mou-lo tu» no dona l’acceleració.** La velocitat es calcula com el pendent mitjà de l’últim quart de segon, com fan els sensors de moviment. L’acceleració d’un moviment fet a mà canvia tan de pressa que la seva gràfica seria il·legible, i no es dibuixa.

## Fitxa d’activitats de l’alumnat

La [fitxa d’activitats](https://simulaciencia.es/ca/fitxes/cinematica/) segueix l’esquema prediu, observa i explica. Cada activitat porta un enllaç a la simulació ja preparada, així que funciona a l’aula d’informàtica, amb tauletes o com a tasca a casa. Es descarrega en Word i LibreOffice per adaptar-la.

| Curs | Activitats | Durada orientativa |
| --- | --- | --- |
| 1r a 3r d’ESO | Activitats 1 a 5, reptes 1 a 5 i problemes 1 a 3 d’Aplica el que has après | Una o dues sessions de 50–55 minuts |
| 4t d’ESO | Fitxa completa, amb els reptes 6 a 10 i Per ampliar | Dues sessions |

La taula d’«Abans de començar» recull cinc idees prèvies sobre les gràfiques del moviment. Convé no corregir-la al principi: l’alumnat hi torna a «Revisa les teves idees». Els reptes guarden al navegador quins s’han superat (apareixen amb ✓ a la llista), cosa que permet al professorat comprovar l’avanç a l’ordinador de cada alumne.

### Solucions

| Apartat | Solució |
| --- | --- |
| Abans de començar | Totes falses. a) La gràfica no és el camí: el mòbil va en línia recta (activitat 1 i repte 8). b) Si la x‑t baixa, el mòbil va cap al sentit negatiu (activitat 3). c) Horitzontal a la x‑t és estar aturat (activitat 2). d) Velocitat negativa és sentit negatiu; frena si v i a tenen signes contraris (activitat 6). e) Quan canvia de sentit, v = 0 però a no (activitat 7) |
| Activitat 1 | La x‑t és una recta que puja; la persona va en línia recta i deixa marques a la mateixa distància. En 20 s arriba a x = 30 m: 1,5 m cada segon. La recta de la persona que corre és més inclinada i arriba a 80 m. Com més inclinada és la x‑t, més ràpid. La gràfica no és el camí |
| Activitat 2 | Trams: 0–6 s de 0 a 30 m (v = 5 m/s); 6–12 s a 30 m (v = 0, aturat); 12–20 s de 30 a 50 m (v = 2,5 m/s). A la v‑t: tres esglaons a 5, 0 i 2,5 m/s. Un tram horitzontal a la x‑t és v = 0 |
| Activitat 3 | La x‑t baixa de 60 a 20 m en 20 s; la v‑t és a −2 m/s, per sota de l’eix; la fletxa verda apunta a l’esquerra. Velocitat negativa vol dir moure’s en el sentit negatiu de l’eix, cap a l’origen. x = 60 − 2 · t |
| Activitat 4 | Anada i tornada: posició final 0 m, desplaçament 0 m, distància recorreguda 80 m. Velocitat mitjana (desplaçament / temps) = 0 m/s; rapidesa mitjana (distància / temps) = 4 m/s. Només coincideixen si el mòbil no canvia de sentit |
| Activitat 5 | Cotxe que arrenca: a = 0,5 m/s². Taula: t = 0, 2, 4, 6 s → v = 0; 1; 2; 3 m/s. La v augmenta 0,5 m/s cada segon; les marques se separen cada vegada més. La v‑t és una recta inclinada i la x‑t, una corba (paràbola). La a‑t és horitzontal a 0,5 m/s² |
| Activitat 6 | Semàfor: s’atura a t = 10 / 2 = 5 s. Àrea del triangle = ½ · 5 · 10 = 25 m, i el cotxe s’atura a x = 25 m. v i a tenen signes contraris: frena. Després d’aturar-se, la x‑t és horitzontal i v = 0 |
| Activitat 7 | Avança frenant i torna: s’atura un instant a t = 7 s, a x = 24,5 m, amb v = 0 i a = −1 m/s². Després torna amb v negativa i cada vegada més ràpid, perquè v i a tenen el mateix signe. Torna a x = 0 a t = 14 s. La x‑t sembla una muntanya però el moviment és rectilini |
| Reptes (trams) | 1: 20 s a 2 m/s. 2: 10 s a 4 m/s i 10 s a −4 m/s. 3: 6 s a 5 m/s, 6 s a 0, 8 s a 2,5 m/s. 4 (x₀ = 80 m): 6 s a −10 m/s, 4 s a 0, 10 s a −3 m/s. 5 (x₀ = 10 m): 5 s a 6 m/s, 5 s a 0, 10 s a −3 m/s. 6 (v₀ = 0): 8 s a 1 m/s², 8 s a 0. 7 (v₀ = 10 m/s): 5 s a −2 m/s², 15 s a 0. 8 (v₀ = 8 m/s): 16 s a −1 m/s². 9 (v₀ = 0): 4 s a 2 m/s², 6 s a 0, 4 s a −2 m/s², 6 s a 0. 10 (x₀ = 60 m, v₀ = 0): 4 s a −2 m/s², 4 s a 0, 4 s a 2 m/s², 8 s a 0 |
| Aplica el que has après | 1) v = (35 − 5) / 10 = 3 m/s; x = 5 + 3 · t; a t = 20 s, x = 65 m. 2) 72 km/h = 20 m/s; t = 500 / 20 = 25 s. 3) Tram A: v = 2 m/s; B: aturat; C: v = −4 m/s, torna cap a l’origen. 4) a = (0 − 20) / 4 = −5 m/s²; Δx = ½ · 4 · 20 = 40 m. 5) v = 0 + 3 · 6 = 18 m/s; x = ½ · 3 · 36 = 54 m |
| Per ampliar | 1) A la x‑t del repte 8, el pendent a t = 0 és 8 m/s; a t = 8 s és 0; a t = 12 s és −4 m/s. 2) Àrea sota la v‑t del repte 9: 16 + 48 + 16 = 80 m, la posició final. 3) Repte 10: entre 8 i 12 s, v < 0 i a > 0: frena encara que l’acceleració sigui positiva |
