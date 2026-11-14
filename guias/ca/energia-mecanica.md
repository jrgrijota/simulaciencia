# Guia docent: simulació d’energia mecànica

## Fitxa ràpida

La simulació d’energia mecànica deixa anar una vagoneta en una muntanya russa o un pèndol i mostra a cada instant l’energia cinètica, la potencial, la mecànica i la calor dissipada, amb fregament opcional. A Catalunya el seu ús principal és a 4t d’ESO i a Física de 1r de Batxillerat, amb aplicació al bloc de 1r a 3r d’ESO per a les transformacions de l’energia i ús puntual a Física de 2n de Batxillerat.

| Dada | Detall |
| --- | --- |
| Enllaç | [jrgrijota.github.io/simulacion-energia-mecanica](https://jrgrijota.github.io/simulacion-energia-mecanica/) |
| Cursos | 4t d’ESO i Física de 1r de Batxillerat (ús principal), 1r a 3r d’ESO; ús puntual a Física de 2n de Batxillerat |
| Matèria | Física i Química; Física al batxillerat |
| Durada orientativa | 15–20 minuts d’explicació amb la simulació projectada |
| Material | Projector o pissarra digital; funciona al navegador, també al mòbil i a la tauleta, sense instal·lar res. En pantalles estretes els controls passen a dalt i el llenç a sota; per explicar és millor una pantalla gran |
| Coneixements previs | Velocitat, massa i pes (P = m · g). Per al fregament, la força de fregament i el treball d’una força |
| Accessibilitat | Tema fosc, clar i d’alt contrast (botó de la roda dentada). Botó de pausa i velocitat de reproducció ×¼, ×½, ×1 i ×2 |

## Com funciona la simulació

La simulació té dos modes, «Muntanya russa» i «Pèndol», que es trien a dalt del tauler esquerre. En tots dos es veu l’escena a l’esquerra, les barres d’energia a la dreta i, a sota, la gràfica «ENERGIA EN FUNCIÓ DEL TEMPS» amb els últims 20 s. Els botons «⏸ Pausa» i «↺ Reinicia» i la fila «Velocitat de reproducció» controlen el moviment. Qualsevol canvi en un lliscador del mode, en la gravetat o en el perfil de la via torna a deixar anar el cos des del punt de sortida; el fregament, en canvi, es pot activar i ajustar en marxa.

| Mode | Què controla el docent | Què mostra |
| --- | --- | --- |
| Muntanya russa | Perfil de la via: «Clàssica (diversos turons)», «Turó més alt (27 m)» i «Vall en U». Altura de sortida (5–30 m, en passos de 0,5), velocitat inicial (0–15 m/s) i massa de la vagoneta (100–1000 kg). Valors inicials: clàssica, 25,0 m, 0,0 m/s i 500 kg. La vagoneta també es pot arrossegar a qualsevol punt de la via | Una via de 60 m d’amplada amb l’eix d’altures de 0 a 30 m. La via clàssica baixa de 32 m a una vall a 0 m i té turons de 18 m i 12 m i valls de 4 m i 1 m. La via amb el turó puja a 27 m entre dues valls a 0 m; la vall en U és una paràbola. Els dos extrems de la via pugen a 32 m i tenen topalls |
| Pèndol | Longitud del fil (0,5–5,0 m), angle inicial (5–90°) i massa de la bola (0,1–5,0 kg). Valors inicials: 2,0 m, 45° i 1,0 kg. La bola també es pot arrossegar per deixar-la anar des d’un altre angle, a un costat o a l’altre | El suport, el fil, la bola i l’arc de la trajectòria, amb l’angle θ, la longitud L i el nivell h = 0 (punt més baix). A dalt es llegeix el període T ≈ 2π√(L/g) |
| Entorn (en tots dos modes) | Gravetat: Terra (9,8), Lluna (1,62), Mart (3,71) i Júpiter (24,79 m/s²). Interruptor de fregament amb el coeficient de fregament (μ) de 0,01 a 0,20 a la muntanya russa (comença a 0,05) i la resistència de l’aire (b) de 0,01 a 0,50 kg/s al pèndol (comença a 0,10) | Amb fregament apareix la barra Q i la corba taronja de la gràfica, i l’energia mecànica baixa. Si la vagoneta s’atura, un avís explica que el fregament ha transformat en calor l’energia mecànica que li faltava |

Quatre elements sostenen l’explicació:

- **Les barres d’energies.** Ec (verd), Ep (blau), Em (groc) i Q (taronja ratllat) es dibuixen a escala de l’energia inicial, marcada amb una línia discontínua. Sota cada barra es llegeix el seu valor i el seu percentatge. A dalt es recorda «Ec + Ep = Em» i «Em + Q = E inicial».
- **La línia d’altura màxima assolible.** Una línia groga discontínua marca l’altura «Em/(m·g)», a la qual arribaria el cos si tota la seva energia mecànica fos potencial. Sense fregament coincideix amb l’altura de sortida i no es mou; amb fregament baixa a poc a poc i se separa d’una línia tènue que marca l’altura inicial.
- **La gràfica energia–temps.** Les quatre corbes fan servir els mateixos colors. Sense fregament Ec i Ep es creuen i pugen i baixen en mirall, i Em és una recta horitzontal. Amb fregament Em baixa i Q puja en la mateixa quantitat.
- **El vector velocitat.** El botó «Vector velocitat», a dalt a la dreta del llenç, dibuixa una fletxa violeta tangent a la trajectòria amb el valor de v. La seva escala s’ajusta perquè la fletxa més llarga possible faci sempre el mateix.

El desplegable «Monitoratge en temps real» és obert en començar. Dona la velocitat, l’altura, el temps i les tres energies, i el bloc «Balanç d'energia» amb E inicial, una barra que reparteix el 100 % entre Ec, Ep i Q i una frase que resumeix el balanç. El desplegable «Fórmules essencials» reuneix Ec = ½ · m · v², Ep = m · g · h, Em = Ec + Ep, Em,A = Em,B sense fregament, Em,A = Em,B + |Wfreg| amb fregament, la força de fregament (μ · N o b · v), l’altura del pèndol h = L · (1 − cos θ) i v = √(2 · g · Δh). A la capçalera, «Descripció i regles ràpides» resumeix les tres idees clau.

## Ús a cada curs

A 4t d’ESO la simulació serveix per presentar l’energia cinètica, la potencial i la conservació de l’energia mecànica, i per introduir el treball de fregament. A Física de 1r de Batxillerat treballa els sistemes conservatius i no conservatius, el teorema del treball i l’energia i la degradació de l’energia. Al bloc de 1r a 3r d’ESO serveix per descriure de manera qualitativa les transformacions de l’energia. A Física de 2n de Batxillerat el seu ús és puntual, per a l’energia del pèndol com a oscil·lador.

Els sabers i els criteris d’avaluació citats són els del currículum de Catalunya: Decret 175/2022 (DOGC núm. 8762, de 29 de setembre de 2022) per a l’ESO i Decret 171/2022 (DOGC núm. 8758, de 22 de setembre de 2022) per al batxillerat. A l’ESO, els sabers de 1r, 2n i 3r formen un sol bloc i cada centre decideix en quin curs treballa cada saber; 4t té el seu propi bloc. Al batxillerat, Física i Química són matèries separades des de 1r. Està previst que a partir del curs 2026-27 la Física i la Química de 1r de Batxillerat es fusionin en una sola matèria, «Física i Química»; quan se’n publiqui el currículum caldrà revisar l’apartat de 1r.

### 4t d’ESO: energia cinètica, potencial i la seva conservació

*15–16 anys · 10th grade als EUA · Year 11 al Regne Unit*

**Sabers.** L’energia: «Formulació i comprovació d’hipòtesis sobre les diferents formes d’energia i les seves aplicacions a partir de les seves propietats i del principi de conservació, per a la resolució de problemes relacionats amb l’energia mecànica en situacions quotidianes i de rellevància social» i «Reconeixement dels diferents processos de transferència d’energia en què estan implicats forces o diferències de temperatura, com a base de la resolució de problemes quotidians». La interacció: «Identificació i representació de les principals forces de l’entorn quotidià, com ara el pes, la normal, el fregament…». Les destreses científiques bàsiques: «Ús de diversos entorns i recursos d’aprenentatge científic, com ara el laboratori o els entorns virtuals…».

**Criteris d’avaluació.** 1.2 (interpretar i predir el comportament de fenòmens quotidians argumentant-lo amb models, lleis i teories), 2.3 (portar a terme l’experimentació i interpretar-ne els resultats amb eines matemàtiques) i 3.2 (utilitzar adequadament les unitats de mesura i les eines matemàtiques).

El currículum català no anomena per separat l’energia cinètica i la potencial ni la potència; entren en la «resolució de problemes relacionats amb l’energia mecànica».

**Objectius.** Calcular l’energia cinètica i la potencial gravitatòria. Explicar que, sense fregament, l’energia mecànica es conserva encara que Ec i Ep canviïn. Calcular velocitats a partir de diferències d’altura. Reconèixer que el fregament transforma energia mecànica en calor.

**Seqüència d’explicació (15–20 min).**

1. Muntanya russa amb els valors inicials: reiniciar i prémer «⏸ Pausa». La vagoneta, de 500 kg, és a 25,0 m. Calcular a la pissarra Ep = m · g · h = 500 × 9,8 × 25 = 122 500 J i comprovar «E inicial = 122,5 kJ». Com que surt del repòs, Ec = 0 i tota l’energia és potencial.
2. Demanar una predicció de la velocitat a la primera vall (h = 0) i continuar. Amb tot convertit en cinètica, ½ · m · v² = 122 500 J i v = √(2 · 9,8 · 25) = 22,1 m/s. Amb ×¼ és fàcil fer pausa a la vall i llegir-ho a la velocitat.
3. Fer pausa al cim del turó de 18 m. Ep = 500 × 9,8 × 18 = 88 200 J, així que Ec = 122 500 − 88 200 = 34 300 J i v = 11,7 m/s. Les barres Ec i Ep canvien, però Em continua plena: 122,5 kJ.
4. Deixar córrer la simulació. La vagoneta arriba a l’extrem dret i torna just fins a 25,0 m, la línia groga «altura màx. assolible». A la gràfica, Em és una recta i Ec i Ep es creuen.
5. Pujar la massa a 1000 kg. L’energia inicial es duplica (245,0 kJ), però la vagoneta es mou igual i la velocitat a la vall continua sent 22,1 m/s: la massa se simplifica a ½ · m · v² = m · g · h.
6. Tornar a 500 kg i activar el fregament amb μ = 0,05. A cada viatge la vagoneta queda més baixa (22,4 m, 20,0 m, 17,5 m…), la línia groga baixa i creix la barra Q. Tancar amb el balanç: Em,inicial = Em,final + |Wfreg|. L’energia no desapareix: es transforma en calor.

### Física de 1r de Batxillerat: sistemes conservatius i no conservatius

*16–17 anys · 11th grade als EUA · Year 12 al Regne Unit*

**Sabers.** Energia: «Càlcul de l’energia potencial i l’energia cinètica d’un sistema senzill: aplicació a la conservació de l’energia mecànica en sistemes conservatius i no conservatius i a l’estudi de les causes que produeixen el moviment dels objectes al món real» i «Conceptes de treball i potència: elaboració d’hipòtesis sobre el consum energètic de sistemes mecànics o elèctrics de l’entorn quotidià i el seu rendiment». Cinemàtica: «Anàlisi, càlcul i representació gràfica de l’evolució temporal de les variables cinemàtiques en funció del temps en els diferents moviments que pot tenir un objecte, amb forces externes o sense…».

**Criteris d’avaluació.** 1.2 (resoldre problemes plantejats a partir de situacions quotidianes aplicant les lleis i les teories científiques), 2.3 (integrar els models, les teories i les lleis de la física en la validació de les hipòtesis) i 3.1 (utilitzar de manera rigorosa el Sistema Internacional d’Unitats).

El currículum no anomena el teorema del treball i l’energia, la força de fregament com a força no conservativa ni el segon principi de la termodinàmica; són la manera habitual de tractar els «sistemes conservatius i no conservatius».

**Objectius.** Aplicar el principi de conservació de l’energia mecànica amb forces no conservatives i sense. Calcular el treball de fregament. Predir si un cos supera un obstacle a partir de la seva energia. Interpretar la degradació de l’energia en una gràfica energia–temps.

**Seqüència d’explicació (15–20 min).**

1. Perfil «Turó més alt (27 m)» amb sortida a 25,0 m i sense fregament. Preguntar si la vagoneta passarà el turó. No: la línia groga queda per sota del cim i la vagoneta fa mitja volta a 25,0 m, abans d’arribar a dalt.
2. Calcular la velocitat inicial mínima per passar: ½ · v₀² ≥ g · (27 − 25), per tant v₀ ≥ 6,26 m/s. Comprovar-ho: amb 6,0 m/s la vagoneta fa mitja volta a 26,8 m; amb 6,5 m/s passa i arriba a 27,2 m a l’altre costat. La massa no hi intervé.
3. Tornar a la via clàssica, sortida a 25,0 m, i activar el fregament amb μ = 0,05. Fer pausa en arribar a la primera vall: Q ≈ 2,37 kJ. Amb N = m · g · cos θ, el treball de fregament és μ · m · g · cos θ · Δs = μ · m · g · Δx, amb Δx el recorregut en horitzontal. Des de la sortida (x ≈ 4,3 m) fins a la vall (x = 14 m): 0,05 × 500 × 9,8 × 9,7 ≈ 2370 J.
4. Fer servir la gràfica: Em baixa més de pressa on la vagoneta va més ràpida, perquè recorre més via cada segon, i Q creix exactament el que baixa Em. Llegir a «Balanç d'energia» quin percentatge queda a cada moment. Relacionar-ho amb el teorema del treball i l’energia: Wfreg = ΔEm.
5. Deixar que la vagoneta s’aturi (una mica més de 2 min a ×1, la meitat a ×2). Acaba a la vall d’1 m amb Ep = 4,9 kJ: només el 4 % de l’energia continua sent mecànica i el 96 % s’ha convertit en calor. Tot i que l’energia total es conserva, la calor no es pot tornar a convertir del tot en energia mecànica: és la degradació de l’energia.
6. Passar al pèndol amb fregament, b = 0,10 kg/s. L’amplitud i Em baixen cada vegada menys a cada oscil·lació: després de 5 s en queda el 62 % i després de 10 s, el 37 %. Pujar la massa a 2,0 kg: ara en queda el 79 % i el 61 %. Amb resistència de l’aire la pèrdua relativa depèn de b/m; amb el fregament de la via, en canvi, no depèn de la massa.

### 1r a 3r d’ESO: transformacions de l’energia

*12–15 anys · 7th–9th grade als EUA · Year 8–10 al Regne Unit*

**Sabers.** L’energia: «Formulació de qüestions i hipòtesis sobre l’energia, les manifestacions i les propietats per a l’elaboració d’explicacions amb relació als processos de canvi» i «Disseny i comprovació experimental d’hipòtesis relacionades amb l’ús domèstic i industrial de l’energia en les diferents formes i les seves transferències i transformacions». Habilitats científiques bàsiques: «Interpretació i producció d’informació científica en diferents formats i amb diferents mitjans…».

**Criteris d’avaluació.** 1.2 (interpretar i predir el comportament de fenòmens quotidians relacionant-lo amb models, lleis i teories) i 3.1 (generar i usar dades de formats diversos per interpretar i comunicar informació sobre un procés físic).

**Objectius.** Reconèixer l’energia de moviment i l’energia deguda a l’altura. Descriure com es transforma l’una en l’altra. Entendre que l’energia no es perd, sinó que es transforma en altres formes menys útils.

**Seqüència d’explicació (15–20 min).**

1. Pèndol amb els valors inicials. Sense parlar de fórmules, assenyalar les barres: a dalt tota l’energia és blava (potencial) i a baix és verda (cinètica). La groga, la suma, no canvia.
2. Fer pausa al punt més baix i en un extrem. Llegir al bloc «Balanç d'energia» com es reparteix el 100 % entre Ec i Ep.
3. Muntanya russa amb els valors inicials. Preguntar on va més ràpida la vagoneta: a les valls, on l’altura és menor. Comprovar-ho amb «Vector velocitat».
4. Activar el fregament. La vagoneta no torna a l’altura de sortida i apareix la barra taronja Q: part de l’energia s’ha convertit en calor a les rodes i a la via. L’energia es transforma, no es destrueix.
5. Triar la gravetat de la Lluna (1,62 m/s²) amb 25,0 m de sortida. L’energia inicial baixa a 20,3 kJ i la vagoneta va molt més a poc a poc (9,0 m/s a la vall). Relacionar-ho amb el pes.
6. Demanar a l’alumnat que copiï una taula amb altura, velocitat, Ec i Ep en quatre punts de la via (fent pausa a cadascun) i que comprovi que Ec + Ep dona sempre el mateix.

### Física de 2n de Batxillerat: ús puntual

*17–18 anys · 12th grade als EUA · Year 13 al Regne Unit*

A Vibracions i ones hi ha l’«Estudi del moviment oscil·latori: obtenció i descripció de l’evolució temporal de les variables cinemàtiques d’un cos oscil·lant i conservació d’energia en aquests sistemes». El pèndol amb angles petits (5–10°) és un oscil·lador gairebé harmònic. A la gràfica, Ec i Ep oscil·len amb la meitat del període del pèndol i sempre sumen el mateix. Amb resistència de l’aire es veu un oscil·lador esmorteït: l’energia decau de manera exponencial, Em ∝ e^(−b·t/m). La simulació fa servir g · h i no −GMm/r, així que no serveix per a l’energia al camp gravitatori a gran escala; per a això és millor la simulació d’òrbites.

## Concepcions alternatives que ajuda a corregir

La simulació ataca sobretot la idea que l’energia «es gasta» o desapareix i la idea que els cossos més pesants baixen més de pressa per una rampa. Cada fila indica la idea prèvia freqüent i com desmuntar-la amb la simulació.

| Idea de l’alumnat | Idea correcta | Com mostrar-ho |
| --- | --- | --- |
| «L’energia es gasta i desapareix» | L’energia es transforma: amb fregament la mecànica passa a calor, i Ec + Ep + Q és sempre l’energia inicial | Muntanya russa amb fregament: la barra Q creix el mateix que baixa Em, i el bloc «Balanç d'energia» sempre suma 100 % |
| «Una vagoneta més pesant baixa més de pressa» | Sense fregament, la velocitat només depèn del desnivell: v = √(2 · g · Δh) | Massa de 100 kg i de 1000 kg amb sortida a 25,0 m: en tots dos casos 22,1 m/s a la vall |
| «Amb més velocitat a la vall, pot pujar més amunt que d’on ha sortit» | Sense fregament ni velocitat inicial, mai no supera l’altura de sortida | Perfil «Turó més alt (27 m)» amb sortida a 25,0 m: fa mitja volta a 25,0 m |
| «Al punt més alt no hi ha energia» | A dalt l’energia és potencial; només és nul·la la cinètica | Pèndol en pausa en un extrem: Ec = 0 i Ep = Em = 5,74 J |
| «L’energia potencial és una propietat absoluta del cos» | Depèn del nivell de referència que es triï; el que importa són les diferències | Assenyalar el nivell h = 0 (punt més baix): amb el nivell zero al terra de l’aula, totes les Ep canviarien en la mateixa quantitat i v no |
| «Si no hi ha fregament, el pèndol s’acabarà aturant igualment» | Sense forces no conservatives oscil·la per sempre amb la mateixa amplitud | Pèndol sense fregament a ×2 durant un minut: la línia groga i l’amplitud no canvien |
| «El fregament només actua quan el cos va a poc a poc» | El treball de fregament depèn del recorregut; actua durant tot el moviment | Muntanya russa amb μ = 0,05: la corba Q de la gràfica puja durant tot el trajecte |

## Simplificacions que convé conèixer

La simulació prioritza que es vegi el balanç d’energia i, per això, simplifica la via, el fregament i el pèndol. Convé conèixer aquestes llicències per no reforçar idees incorrectes sense voler.

1. **La vagoneta és un punt sobre el rail.** No té mida ni rodes que girin, i va subjecta a la via, com a les muntanyes russes reals: mai no se’n desenganxa, encara que vagi molt de pressa per un cim. No hi ha bucles.
2. **Normal sense part centrípeta.** El fregament fa servir N = m · g · cos θ, com als problemes de classe. A les corbes reals la normal és més gran a les valls i més petita als cims; aquí s’ignora. Per això el treball de fregament és exactament μ · m · g pel recorregut horitzontal.
3. **Un únic coeficient μ.** El mateix coeficient val per al fregament estàtic i el dinàmic. La vagoneta s’atura quan la seva velocitat arriba a zero en un punt on el pendent compleix tan θ ≤ μ, encara que no sigui al fons d’una vall.
4. **Fregaments diferents a cada mode.** A la muntanya russa la força és constant, μ · N. Al pèndol és una resistència de l’aire proporcional a la velocitat, b · v, sense fregament al punt de suspensió. Per això al pèndol la pèrdua relativa depèn de b/m i a la muntanya russa no depèn de la massa.
5. **La calor no escalfa res.** La barra Q només compta l’energia dissipada. No es calcula a quina temperatura arriben la via, les rodes o l’aire, ni es perd energia per so o vibracions.
6. **Pèndol ideal.** El fil és inextensible i sense massa, i la bola és puntual. L’angle inicial va de 5 a 90°: un fil no aguanta angles més grans. El període «T ≈ 2π√(L/g)» és el d’oscil·lacions petites; a 45° el període real és d’uns 2,95 s en lloc de 2,84 s.
7. **L’escala del pèndol canvia amb L.** El fil dibuixat creix amb la longitud, però menys que ella perquè càpiga a la pantalla. Les altures d’un mateix pèndol són a escala; les de dues longituds diferents no es poden comparar a la pantalla.
8. **Nivell de referència fix.** L’energia potencial es mesura sempre des del punt més baix de la via o de la trajectòria. No es pot canviar el nivell zero.
9. **Energia calculada per balanç.** El programa calcula la velocitat a partir d’Ec = E inicial − Ep − Q, de manera que les barres sempre sumen exactament el 100 %. Els extrems de la via tenen topalls que retornen la vagoneta sense pèrdues; només s’hi arriba amb velocitat inicial.

## Fitxa d’activitats de l’alumnat

La [fitxa d’activitats](https://simulaciencia.es/ca/fitxes/energia-mecanica/) segueix l’esquema prediu, observa i explica. Cada activitat porta un enllaç a la simulació ja preparada, de manera que funciona a l’aula d’informàtica, amb tauletes o com a tasca a casa. Es descarrega en Word i LibreOffice per adaptar-la.

| Curs | Activitats | Durada orientativa |
| --- | --- | --- |
| 1r a 3r d’ESO | Abans de començar, activitats 1 (sense les columnes d’energia), 4, 5 i 6, Revisa les teves idees i Autoavaluació | Una sessió de 50–55 minuts |
| 4t d’ESO | Fitxa completa excepte Per ampliar | Dues sessions, o una si els problemes es fan com a tasca |
| Física de 1r de Batxillerat | Activitats 3 i 5, Per ampliar i problema 4 d’Aplica el que has après | Una sessió |

La taula d’«Abans de començar» recull cinc idees prèvies sobre l’energia. Convé no corregir-la al principi: l’alumnat hi torna a «Revisa les teves idees». Fer pausa just en un punt costa: amb ×¼ és més fàcil, i les solucions admeten unes dècimes de diferència.

### Solucions

| Apartat | Solució |
| --- | --- |
| Abans de començar | Totes falses. a) Sense fregament la velocitat només depèn del desnivell (activitat 2). b) Sense fregament ni velocitat inicial mai no supera l’altura de sortida (activitat 3). c) A dalt l’energia és potencial; només és nul·la la cinètica (activitat 4). d) Sense fregament oscil·la sempre amb la mateixa amplitud (activitat 4). e) Es transforma en calor; Ec + Ep + Q és sempre l’energia inicial (activitat 5) |
| Activitat 1 | Sortida: 25 m, 0 m/s, Ec = 0, Ep = 122,5 kJ. Primera vall: 0 m, 22,1 m/s, Ec = 122,5 kJ, Ep = 0. Turó de 18 m: 11,7 m/s, Ec = 34,3 kJ, Ep = 88,2 kJ. Vall de 4 m: 20,3 m/s, Ec = 102,9 kJ, Ep = 19,6 kJ. Em = 122,5 kJ sempre. En baixar, l’Ep es transforma en Ec, i en pujar al revés. Sense fregament l’energia mecànica es conserva |
| Activitat 2 | 100 kg: 24,5 kJ i 22,1 m/s. 1000 kg: 245,0 kJ i 22,1 m/s. La massa apareix a totes dues energies: m · g · h = ½ · m · v², així que se simplifica i v = √(2 · g · h) |
| Activitat 3 | 0 m/s: no passa, fa mitja volta a 25,0 m. 6,0 m/s: no passa, arriba a 26,8 m. 6,5 m/s: passa, arriba a 27,2 m (per sobre del cim). Sense velocitat inicial, la seva energia només dona per pujar a 25 m. La velocitat inicial afegeix energia cinètica: Em = m · g · h + ½ · m · v₀² |
| Activitat 4 | Extrem: h ≈ 0,59 m, v = 0, Ec = 0, Ep = Em ≈ 5,74 J. Punt més baix: h = 0, v ≈ 3,39 m/s, Ec = Em ≈ 5,74 J, Ep = 0. Després d’un minut l’amplitud i la línia groga no han canviat. Al punt més alt hi ha energia potencial; només és nul·la la cinètica. A la gràfica, Ec i Ep pugen i baixen en mirall i Em és una recta horitzontal |
| Activitat 5 | Torna cada vegada més avall: uns 22,4 m, 20,0 m i 17,5 m. Em baixa a prop del 90 %, 80 % i 70 %, i Q puja al 10 %, 20 % i 30 %. L’energia mecànica no desapareix: el fregament la transforma en calor a les rodes i a la via. Ec + Ep + Q sumen sempre el 100 % de l’energia inicial: conservació de l’energia. La calor es reparteix per l’entorn i no es pot tornar a convertir del tot en energia mecànica: l’energia es degrada |
| Activitat 6 | Terra: 122,5 kJ i 22,1 m/s. Lluna: 20,3 kJ i 9,0 m/s. Mart: 46,4 kJ i 13,6 m/s. Júpiter: 309,9 kJ i 35,2 m/s. Ep = m · g · h depèn de g: amb menys gravetat el pes és menor i hi ha menys energia per convertir en moviment |
| Aplica el que has après | 1) Ep = 400 · 9,8 · 20 = 78 400 J. 2) v = √(2 · 9,8 · 20) ≈ 19,8 m/s a la vall; al turó de 15 m, v = √(2 · 9,8 · 5) ≈ 9,9 m/s. 3) v = √(2 · 9,8 · 0,30) ≈ 2,4 m/s. 4) Wfreg = −15 kJ; aquests 15 kJ s’han convertit en calor |
| Per ampliar | 1) ½ · v₀² ≥ g · (27 − 25), v₀ ≥ √(2 · 9,8 · 2) ≈ 6,26 m/s, entre 6,0 i 6,5. 2) Wfreg = 0,05 · 500 · 9,8 · 9,7 ≈ 2,4 kJ, igual que Q ≈ 2,37 kJ a la vall. 3) Després de 10 s en queda un 37 % amb 1 kg i un 61 % amb 2 kg. La resistència de l’aire, b · v, no depèn de la massa, però l’energia sí: la pèrdua relativa depèn de b/m |
