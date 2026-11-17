# Guia docent: simulació de caiguda lliure i tir parabòlic

## Fitxa ràpida

La simulació de caiguda lliure i tir parabòlic llança un objecte a prop del terra i deixa una estela de punts a intervals iguals de temps, amb els vectors velocitat i acceleració a cada instant. Mostra que la caiguda lliure, el tir vertical, el tir horitzontal i el tir oblic són el mateix moviment, amb l’acceleració de la gravetat sempre cap avall, i que només canvien l’altura i la velocitat amb què comencen. Un botó treu o posa l’aire per veure per què una ploma i una bola d’acer cauen diferent a l’aula i alhora a la Lluna. A Catalunya el seu ús principal és a 4t d’ESO i a Física de 1r de Batxillerat.

| Dada | Detall |
| --- | --- |
| Enllaç | [jrgrijota.github.io/simulacion-caida-libre](https://jrgrijota.github.io/simulacion-caida-libre/?lang=ca) |
| Cursos | 4t d’ESO i Física de 1r de Batxillerat |
| Matèria | Física i Química; Física al batxillerat |
| Durada orientativa | 15–20 minuts d’explicació amb la simulació projectada; el mode «Repte» dona per a una altra sessió de problemes |
| Material | Projector o pissarra digital; funciona al navegador, també al mòbil i a la tauleta, sense instal·lar res. En pantalles estretes el llenç queda a dalt i els controls a sota; per explicar és millor una pantalla gran |
| Coneixements previs | Per a 4t d’ESO, el moviment rectilini uniforme i la idea d’acceleració. Per a 1r de Batxillerat, el MRUA, la descomposició d’un vector en components i les raons trigonomètriques |
| Accessibilitat | Quatre temes visuals (SimulaCiencia, fosc, clar i alt contrast) al botó de la roda dentada. Velocitat ×1, ×0,5 i ×0,25, i un lliscador d’instant amb botons − i + per avançar pas a pas. Els llançaments, l’arribada a terra i l’altura màxima s’anuncien amb lector de pantalla. Tecles: espai per llançar o pausar i R per reiniciar |

## Com funciona la simulació

La simulació té tres modes, «Vertical», «Parabòlic» i «Repte», que es trien a dalt del tauler esquerre. El llenç mostra el terra, el punt de llançament (una persona sobre una plataforma o un terrat si hi ha altura), uns eixos amb l’escala en metres i, a dalt, una franja amb el nom del moviment, el lloc i el valor de g. L’escala del dibuix s’ajusta sola perquè hi càpiga tota la trajectòria.

| Mode | Què s’hi veu |
| --- | --- |
| Vertical | Caiguda lliure i tir vertical. «Altura inicial (h₀)» de 0 a 100 m i «Velocitat inicial (v₀)» de 30 m/s cap avall a 30 m/s cap amunt; al centre, 0 m/s («deixar anar»). Exemples: «Caiguda lliure» (45 m, 0 m/s), «Llançar cap amunt» (0 m, 20 m/s ↑) i «Llançar cap avall» (30 m, 10 m/s ↓). Mentre l’objecte puja, els punts de l’estela són buits, i quan baixa són plens, perquè la pujada i la baixada no es confonguin a la mateixa vertical |
| Parabòlic | Tir horitzontal i oblic. «Altura inicial» de 0 a 50 m, «Rapidesa inicial» de 0 a 30 m/s i «Angle de llançament» de −30° (cap avall) a 90° (vertical). Exemples: «Tir horitzontal» (20 m, 10 m/s, 0°), «Des del terra» (0 m, 20 m/s, 45°) i «Des d’un terrat» (20 m, 15 m/s, 30°) |
| Repte | Quatre problemes amb dades a l’atzar: «Fins al balcó» i «Quant triga?» (4t d’ESO) i «A la diana» i «Dos angles» (Batxillerat). Sempre a la Terra i sense aire. S’escriu la resposta calculada a la llibreta, es prem «Comprovar» i la simulació llança amb aquest valor |

Grup «Què es llança i on» (modes Vertical i Parabòlic):

- **Objecte.** Bola d’acer, pilota de bàsquet, pilota de tennis, pilota de ping-pong, bola de paper o ploma, amb la seva massa. Sense aire, l’objecte no canvia res; amb aire, cadascun es frena de manera diferent.
- **Lloc.** Terra (g = 9,8 m/s²), Lluna (1,6 m/s²), Mart (3,7 m/s²) o Júpiter (24,8 m/s²).
- **«Amb aire».** Només a la Terra. Amb la casella marcada, la franja avisa que el moviment ja no és caiguda lliure o que la trajectòria ja no és una paràbola, i al mode Parabòlic es dibuixa en gris la trajectòria del mateix llançament sense aire.
- **«Comparar amb un altre objecte»** (mode Vertical). Deixa anar alhora un altre objecte, a la dreta, des de la mateixa altura.
- **«Deixar anar una altra bola alhora»** (mode Parabòlic). Una bola cau des del punt de llançament en el mateix instant: arriba a terra alhora que la llançada.
- **«Conservar les trajectòries anteriors»** (mode Parabòlic). Deixa fins a cinc trajectòries en gris amb el seu angle, per comparar abasts.

Grup «Què es veu»:

- **«Vectors velocitat i acceleració».** La velocitat en blau, tangent a la trajectòria, amb els components vₓ i vᵧ al mode Parabòlic, i l’acceleració en taronja, sempre cap avall. Les dues fletxes són a escales diferents, i la llegenda ho diu.
- **«Projeccions sobre els eixos».** Dues «ombres» de l’objecte, una sobre el terra i una altra sobre l’eix vertical, cadascuna amb la seva estela: la del terra avança amb punts igual de separats (MRU) i la de l’eix, amb punts cada vegada més separats en baixar (MRUA).
- **«Estela: un punt cada»** 0,1 s, 0,2 s o 0,5 s.
- **«Pausar a l’altura màxima».** L’animació s’atura al punt més alt per comentar els vectors.
- **«Amagar els resultats».** Amaga el temps de vol, l’altura màxima, l’abast i la velocitat en arribar, perquè es calculin abans de llançar. Les gràfiques només mostren el que ja s’ha recorregut.

A la barra de baix hi ha «Llançar» (que passa a «Pausar», «Reprendre» i «Tornar a llançar»), «Reiniciar», la velocitat ×0,25, ×0,5 o ×1 i el botó «Gràfiques», que afegeix sota el llenç les gràfiques posició-temps i velocitat-temps dels dos components. A sota, la fila «Instant» permet anar a qualsevol moment del llançament amb el lliscador o amb els botons − i +, que avancen un interval de l’estela.

El desplegable «Dades del moviment» dona, a l’instant actual, el temps, la posició x, l’altura y, vₓ, vᵧ (amb una fletxa que indica si puja o baixa) i la rapidesa |v|, i a «Resultats del llançament», el temps de vol, l’altura màxima, l’abast i la velocitat en arribar. «Equacions del moviment» escriu les equacions amb els valors substituïts, per exemple «y = 20 + 7,5 · t − 4,9 · t²», i a sota els resultats calculats amb elles. «Idees clau» resumeix cinc idees: sense aire tots els objectes cauen igual, l’acceleració és sempre g cap avall, al punt més alt la velocitat vertical és zero, els dos moviments són independents i l’aire trenca la paràbola.

Sense aire, la simulació fa servir les equacions exactes, de manera que els seus nombres coincideixen amb els d’un problema resolt a la llibreta amb g = 9,8 m/s².

## Ús a cada curs

A 4t d’ESO la simulació treballa la caiguda lliure i el tir vertical com a MRUA, la predicció de moviments a partir de les seves equacions i gràfiques i la idea que tots els cossos cauen igual quan no hi ha aire. A Física de 1r de Batxillerat treballa la composició de moviments: el tir horitzontal i el tir oblic com a suma d’un MRU i un MRUA independents. Al bloc de 1r a 3r d’ESO es pot fer servir de manera qualitativa (activitats 1 i 2 de la fitxa) per al saber «Predicció de les característiques fonamentals del moviment dels objectes a partir dels conceptes de la cinemàtica».

Els sabers i els criteris d’avaluació citats són els del currículum de Catalunya: Decret 175/2022 (DOGC núm. 8762, de 29 de setembre de 2022) per a l’ESO i Decret 171/2022 (DOGC núm. 8758, de 22 de setembre de 2022) per al batxillerat. A l’ESO, els sabers de 1r, 2n i 3r formen un sol bloc i cada centre decideix en quin curs treballa cada saber; 4t té el seu propi bloc. Al batxillerat, Física i Química són matèries separades des de 1r. Està previst que a partir del curs 2026-27 la Física i la Química de 1r de Batxillerat es fusionin en una sola matèria, «Física i Química»; quan se’n publiqui el currículum caldrà revisar l’apartat de 1r.

### 4t d’ESO: caiguda lliure i tir vertical

*15–16 anys · 10th grade als EUA · Year 11 al Regne Unit*

**Sabers.** La interacció: «Predicció i comprovació, utilitzant l’experimentació i el raonament logicomatemàtic, de les magnituds, equacions i gràfiques principals que descriuen el moviment d’un cos, per relacionar-lo amb situacions quotidianes i la millora de la qualitat de vida» i «Identificació i representació de les principals forces de l’entorn quotidià, com ara el pes, la normal, el fregament, la tensió o l’empenta, i el seu ús en l’explicació de fenòmens físics en diferents contextos».

**Criteris d’avaluació.** 1.2 (interpretar i predir el comportament de fenòmens quotidians argumentant-lo amb models, lleis i teories), 2.2 (dissenyar procediments de recerca que impliquin la deducció, el treball experimental i el raonament logicomatemàtic), 3.1 (generar i usar dades de formats diversos, com taules i gràfiques, per interpretar i comunicar informació d’un procés físic) i 3.2 (utilitzar adequadament els sistemes d’unitats i les eines matemàtiques).

**Objectius.** Reconèixer la caiguda lliure i el tir vertical com a moviments rectilinis uniformement accelerats amb a = g cap avall. Explicar que, sense aire, tots els cossos cauen amb la mateixa acceleració, sigui quina sigui la seva massa. Calcular el temps de caiguda, l’altura màxima i la velocitat en arribar a terra. Interpretar les gràfiques posició-temps i velocitat-temps d’un llançament vertical.

**Seqüència d’explicació (15–20 min).**

1. Mode «Vertical», exemple «Caiguda lliure» (45 m, 0 m/s), estela cada 0,2 s. Preguntar abans: cau sempre a la mateixa velocitat? Llançar. Els punts de l’estela estan cada vegada més separats: en cada 0,2 s recorre més distància que en l’anterior. Arriba en 3,03 s a 29,7 m/s.
2. Marcar «Comparar amb un altre objecte», amb la ploma i la bola d’acer, i marcar «Amb aire». La bola arriba en 3,05 s; la ploma, a 0,8 m/s, triga gairebé un minut. Preguntar: per què? Treure l’aire: arriben juntes en 3,03 s. El que les separava era l’aire, no la massa. Canviar el lloc a la Lluna, que no té aire: cauen juntes en 7,5 s, com la ploma i el martell de l’Apollo 15.
3. Tornar a la Terra sense aire i obrir «Equacions del moviment». Comprovar a la pissarra que 45 = 4,9 · t² dona t = 3,03 s i que v = 9,8 · 3,03 = 29,7 m/s.
4. Exemple «Llançar cap amunt» (0 m, 20 m/s ↑), amb «Pausar a l’altura màxima». Abans de llançar, preguntar quant valen la velocitat i l’acceleració just a dalt. A la pausa, la fletxa de la velocitat ha desaparegut (vᵧ = 0) i la de l’acceleració continua igual, cap avall. Arriba a 20,4 m en 2,04 s.
5. Reprendre. La baixada és simètrica de la pujada: els punts plens cauen sobre els buits, triga uns altres 2,04 s i arriba a terra a 20 m/s, la mateixa rapidesa amb què va sortir. Mentre puja, la velocitat apunta cap amunt i l’acceleració cap avall: per això frena.
6. Prémer «Gràfiques». La posició-temps és una paràbola amb el màxim a 2,04 s; la velocitat-temps és una recta de pendent −9,8 m/s², que talla l’eix en el mateix instant. El pendent és el mateix pujant i baixant: l’acceleració no canvia.
7. Mode «Repte», «Fins al balcó» i «Quant triga?». L’alumnat calcula a la llibreta, escriu el resultat i comprova. Val la resposta arrodonida a dues xifres significatives.

### Física de 1r de Batxillerat: composició de moviments

*16–17 anys · 11th grade als EUA · Year 12 al Regne Unit*

**Sabers.** Cinemàtica: «Anàlisi, càlcul i representació gràfica de l’evolució temporal de les variables cinemàtiques en funció del temps en els diferents moviments que pot tenir un objecte, amb forces externes o sense: resolució de situacions reals relacionades amb la física i l’entorn quotidià» i «Descripció i argumentació de la relació de la trajectòria d’un moviment compost amb les magnituds que el descriuen».

**Criteris d’avaluació.** 1.2 (resoldre problemes plantejats a partir de situacions quotidianes aplicant les lleis i les teories científiques), 2.1 (formular i verificar hipòtesis mitjançant el treball experimental, la indagació i el raonament logicomatemàtic), 2.3 (integrar els models, les teories i les lleis de la física en la validació de les hipòtesis) i 3.2 (extreure, interpretar i expressar informació de formats diversos relativa a un procés concret).

**Objectius.** Descompondre la velocitat inicial en els seus components. Descriure el tir horitzontal i l’oblic com la composició d’un MRU en horitzontal i un MRUA en vertical, independents entre si. Escriure les equacions x(t) i y(t) i obtenir-ne el temps de vol, l’altura màxima i l’abast. Justificar per què dos angles complementaris donen el mateix abast des del terra i per què l’aire redueix l’abast i l’angle òptim.

**Seqüència d’explicació (15–20 min).**

1. Mode «Parabòlic», exemple «Tir horitzontal» (20 m, 10 m/s, 0°), amb «Projeccions sobre els eixos». L’ombra del terra deixa punts igual de separats (MRU, 10 m/s); la de l’eix vertical, punts cada vegada més separats (MRUA), igual que una caiguda lliure.
2. Marcar «Deixar anar una altra bola alhora». Preguntar abans quina arribarà primer. Arriben juntes, en 2,02 s, perquè el temps de caiguda només depèn de l’altura. La bola llançada cau a 20,2 m del peu del terrat.
3. Amb els vectors: vₓ no canvia en tot el vol; vᵧ creix cap avall 9,8 m/s cada segon. En arribar, vₓ = 10,0 m/s i vᵧ = 19,8 m/s cap avall, i la rapidesa és √(10² + 19,8²) = 22,2 m/s.
4. Exemple «Des del terra» (0 m, 20 m/s, 45°), amb «Pausar a l’altura màxima». Al cim la velocitat no és zero: queda vₓ = 14,1 m/s, horitzontal. Només al tir vertical s’atura del tot. Altura màxima 10,2 m, abast 40,8 m, temps de vol 2,89 s.
5. Marcar «Conservar les trajectòries anteriors» i llançar a 30°, 45° i 60° amb 20 m/s. 30° i 60° cauen al mateix punt, 35,3 m: són angles complementaris i sin(2α) és igual per als dos. 45° arriba més lluny. Comprovar-ho amb x = v₀² · sin(2α) / g.
6. Marcar «Amb aire» amb la pilota de tennis. L’abast a 45° baixa de 40,8 m a 25,7 m, la trajectòria es torna asimètrica (baixa més dreta del que va pujar) i la línia grisa recorda la paràbola sense aire. Amb aire, l’angle que arriba més lluny baixa a uns 40°.
7. Exemple «Des d’un terrat» (20 m, 15 m/s, 30°) amb «Amagar els resultats». Plantejar el problema: temps de vol, altura màxima i abast. Resoldre’l, treure la casella i comprovar: 2,93 s, 22,9 m i 38,0 m. Per acabar, els reptes «A la diana» i «Dos angles».

## Concepcions alternatives que ajuda a corregir

La simulació ataca sobretot la idea que els cossos pesants cauen abans i la confusió entre velocitat i acceleració al punt més alt. Cada fila indica la idea prèvia freqüent i com desmuntar-la amb la simulació.

| Idea de l’alumnat | Idea correcta | Com mostrar-ho |
| --- | --- | --- |
| «Els objectes pesants cauen més de pressa» | Sense aire, tots cauen amb la mateixa acceleració g; el que els separa és el fregament amb l’aire | Comparar ploma i bola d’acer des de 45 m: amb aire, 56 s davant de 3 s; sense aire, juntes en 3,03 s. A la Lluna, juntes en 7,5 s |
| «Al punt més alt l’acceleració és zero, perquè l’objecte està aturat» | L’acceleració és g cap avall en tot el vol, també a dalt; el que s’anul·la és la velocitat vertical | «Pausar a l’altura màxima» amb els vectors: la fletxa de l’acceleració no canvia, i a la gràfica velocitat-temps la recta té el mateix pendent abans i després |
| «Mentre puja, la força del llançament l’empeny cap amunt» | Un cop deixat anar, l’única força (sense aire) és el pes; puja perquè porta velocitat, i frena perquè l’acceleració va en contra | Vectors a «Llançar cap amunt»: velocitat cap amunt cada vegada més curta i acceleració sempre cap avall |
| «Al tir parabòlic, al punt més alt la velocitat és zero» | Només s’anul·la vᵧ; vₓ continua igual | «Des del terra» amb pausa al cim: queda la fletxa horitzontal i el tauler marca vₓ = 14,1 m/s |
| «Una bala disparada en horitzontal triga més a caure que una que es deixa anar» | Els dos moviments són independents: el temps de caiguda només depèn de l’altura | «Deixar anar una altra bola alhora»: les dues arriben juntes, i les projeccions verticals coincideixen a cada instant |
| «L’objecte va recte i després cau de cop» | La trajectòria és una paràbola des del primer instant, perquè g actua des del principi | Estela cada 0,1 s al tir horitzontal i projeccions: l’ombra vertical comença a caure des del llançament |
| «A 45° sempre s’arriba més lluny» | Només des del terra i sense aire; amb altura inicial o amb aire, l’angle òptim és més petit | «Conservar les trajectòries anteriors»: amb aire, 40° arriba una mica més lluny que 45°; des del terrat, 30° supera 45° |

## Simplificacions que convé conèixer

La simulació prioritza que els nombres coincideixin amb els d’un problema de classe i que es vegi amb claredat la composició de moviments. Convé conèixer aquestes llicències per no reforçar idees incorrectes sense voler.

1. **g constant i Terra plana.** Es pren g = 9,8 m/s² en tota la trajectòria i el terra és pla. Per a altures d’uns quants centenars de metres la diferència amb la realitat és inapreciable.
2. **L’objecte és un punt.** No gira ni rebota: s’atura en tocar el terra. No hi ha efecte Magnus (el que corba una pilota amb efecte).
3. **Un model d’aire senzill.** Amb aire, el fregament és proporcional al quadrat de la velocitat i cada objecte queda definit per la seva velocitat límit: acer 105 m/s, bàsquet 20 m/s, tennis 22 m/s, ping-pong 9 m/s, paper 5 m/s i ploma 0,8 m/s. Són valors orientatius; una ploma real a més plana i es balanceja. Amb aire, la simulació integra pas a pas i les equacions del tauler són les del mateix llançament sense aire.
4. **Només hi ha aire a la Terra.** La Lluna no té atmosfera, però Mart en té una de molt tènue, que la simulació no té en compte. Júpiter no té superfície sòlida: hi és per comparar el valor de g.
5. **Fletxes a escales diferents.** La velocitat i l’acceleració no es mesuren en les mateixes unitats, així que la seva longitud relativa no vol dir res. L’important és la direcció i com canvia cadascuna.
6. **Les projeccions són una construcció.** Les «ombres» sobre els eixos no existeixen a la realitat; serveixen per separar els dos moviments que formen el tir.
7. **Tolerància als reptes.** Es dona per bona la resposta arrodonida a dues xifres significatives, i als tirs, caure a menys de 0,5 m del centre de la diana.

## Fitxa d’activitats de l’alumnat

La [fitxa d’activitats](https://simulaciencia.es/ca/fitxes/caida-libre/) segueix l’esquema prediu, observa i explica. Cada activitat porta un enllaç a la simulació ja preparada, de manera que funciona a l’aula d’informàtica, amb tauletes o com a tasca a casa. Es descarrega en Word i LibreOffice per adaptar-la.

| Curs | Activitats | Durada orientativa |
| --- | --- | --- |
| 1r a 3r d’ESO | Abans de començar, activitats 1 i 2 (sense els càlculs), Revisa les teves idees | Mitja sessió |
| 4t d’ESO | Activitats 1 a 4, Aplica el que has après (1 a 3) i els reptes «Fins al balcó» i «Quant triga?» | Una sessió de 50–55 minuts, o dues si es fan a classe els problemes |
| Física de 1r de Batxillerat | Activitat 1 com a repàs, activitats 5 a 7, Aplica el que has après (4 i 5) i Per ampliar | Una o dues sessions |

La taula d’«Abans de començar» recull cinc idees prèvies sobre la caiguda dels cossos. Convé no corregir-la al principi: l’alumnat hi torna a «Revisa les teves idees». Amb aire, la ploma triga gairebé un minut a caure des de 45 m: es pot passar a ×1 o prémer «Reiniciar» quan ja s’ha vist que la bola arriba molt abans.

### Solucions

| Apartat | Solució |
| --- | --- |
| Abans de començar | a) Falsa: sense aire cauen juntes (activitat 1). b) Falsa: l’acceleració és g cap avall també al punt més alt (activitat 3). c) Vertadera: puja i baixa amb la mateixa rapidesa al mateix nivell (activitat 3). d) Falsa: arriben alhora (activitat 5). e) Falsa: al cim només s’anul·la la velocitat vertical (activitat 6) |
| Activitat 1 | Amb aire: la bola d’acer triga uns 3,05 s i la ploma uns 56 s. Sense aire: les dues, 3,03 s. A la Lluna: 7,5 s les dues. El que fa caure diferent la ploma és l’aire, no la seva massa: sense aire, tots els objectes cauen amb la mateixa acceleració |
| Activitat 2 | Els punts estan cada vegada més separats: en cada interval recorre més distància, així que la velocitat augmenta. Velocitats: 0, 9,8, 19,6 i 29,4 m/s als 0, 1, 2 i 3 s. t = 3,03 s i v = 29,7 m/s. 45 = ½ · 9,8 · t², t = √(90 / 9,8) = 3,03 s; v = 9,8 · 3,03 = 29,7 m/s. La velocitat augmenta 9,8 m/s cada segon: això és g |
| Activitat 3 | Altura màxima 20,4 m en 2,04 s; torna a terra en 4,08 s a 20 m/s. Al punt més alt v = 0 i l’acceleració continua sent 9,8 m/s² cap avall. Mentre puja, la velocitat va cap amunt i l’acceleració cap avall, per això frena. h = v₀² / (2g) = 400 / 19,6 = 20,4 m; t = v₀ / g = 2,04 s |
| Activitat 4 | La posició-temps és una paràbola (corba) amb el màxim a 2,04 s. La velocitat-temps és una recta que baixa: passa de +20 a −20 m/s i talla l’eix a 2,04 s. El pendent és −9,8 m/s², l’acceleració, i és el mateix en pujar i en baixar |
| Activitat 5 | Arriben alhora, en 2,02 s. L’ombra del terra avança amb punts igual de separats (MRU) i la de l’eix, amb punts cada vegada més separats (MRUA). La bola llançada cau a 20,2 m. El moviment horitzontal no afecta el vertical: el temps de caiguda només depèn de l’altura |
| Activitat 6 | Al cim, vᵧ = 0 i vₓ = 14,1 m/s: la velocitat no és zero, és horitzontal. vₓ és igual en tot el vol. L’acceleració continua sent g cap avall. Altura màxima 10,2 m, temps de vol 2,89 s i abast 40,8 m |
| Activitat 7 | Sense aire: 15°, 30° i 45° donen 20,4 m, 35,3 m i 40,8 m; 60° i 75°, 35,3 m i 20,4 m. Els angles complementaris donen el mateix abast perquè sin(2α) = sin(180° − 2α). El màxim, a 45°. Amb aire i la pilota de tennis, els abasts baixen (uns 25,7 m a 45°) i el millor angle és més petit, uns 40° |
| Aplica el que has après | 1) t = √(2 · 80 / 9,8) = 4,04 s; v = 9,8 · 4,04 = 39,6 m/s. 2) h = 15² / 19,6 = 11,5 m; t de pujada = 15 / 9,8 = 1,53 s; vol 3,06 s. 3) A la Lluna, t = √(2 · 45 / 1,6) = 7,5 s, davant de 3,03 s a la Terra: g és unes sis vegades més petita. 4) t = √(2 · 1,25 / 9,8) = 0,505 s; v₀ = 6 / 0,505 = 11,9 m/s. 5) vₓ = 25 · 0,80 = 20 m/s; vᵧ = 25 · 0,60 = 15 m/s; h = 15² / 19,6 = 11,5 m; t = 2 · 15 / 9,8 = 3,06 s; x = 20 · 3,06 = 61,2 m |
| Per ampliar | 1) x = 15 · cos 30° · t = 13,0 · t; y = 20 + 7,5 · t − 4,9 · t². 2) y = 0 → 4,9 t² − 7,5 t − 20 = 0, t = 2,93 s; x = 38,0 m; altura màxima 20 + 7,5² / 19,6 = 22,9 m. 3) En arribar, vₓ = 13,0 m/s i vᵧ = 7,5 − 9,8 · 2,93 = −21,2 m/s; rapidesa 24,8 m/s, la mateixa que dona la conservació de l’energia: √(15² + 2 · 9,8 · 20) = 24,8 m/s. 4) Des de 20 m, a 45° l’abast és 35,8 m, menys que a 30°: amb altura inicial l’angle òptim és més petit de 45° |
