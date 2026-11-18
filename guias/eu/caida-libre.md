# Irakaslearen gida: erorketa askearen eta jaurtiketa parabolikoaren simulazioa

## Laburpena

Erorketa askearen eta jaurtiketa parabolikoaren simulazioak objektu bat jaurtitzen du lurretik gertu, eta denbora-tarte berdinetan puntuz osatutako arrasto bat uzten du, une bakoitzeko abiadura- eta azelerazio-bektoreekin. Erakusten du erorketa askea, jaurtiketa bertikala, jaurtiketa horizontala eta jaurtiketa zeiharra mugimendu bera direla, grabitatearen azelerazioa beti beherantz duela, eta hasierako altuera eta abiadura baino ez direla aldatzen. Botoi batek airea kendu edo jartzen du, luma bat eta altzairuzko bola bat gelan desberdin baina Ilargian batera zergatik erortzen diren ikusteko. Euskadin DBHko 4. mailako Fisika eta Kimikan eta Batxilergoko 1. mailan erabiltzen da batez ere.

| Datua | Xehetasuna |
| --- | --- |
| Esteka | [jrgrijota.github.io/simulacion-caida-libre](https://jrgrijota.github.io/simulacion-caida-libre/?lang=eu) |
| Mailak | DBHko 4. maila eta Batxilergoko 1. maila |
| Irakasgaia | Fisika eta Kimika |
| Gutxi gorabeherako iraupena | 15-20 minutu azalpenerako, simulazioa proiektatuta; «Erronka» moduak beste problema-saio baterako ematen du |
| Materiala | Proiektorea edo arbel digitala; nabigatzailean dabil, baita mugikorrean eta tabletan ere, ezer instalatu gabe. Pantaila estuetan oihala goian geratzen da eta kontrolak behean; azaltzeko, hobe da pantaila handi bat |
| Aurretiko ezagutzak | DBHko 4. mailarako, mugimendu zuzen uniformea eta azelerazioaren ideia. Batxilergoko 1. mailarako, MZUA, bektore bat osagaietan deskonposatzea eta arrazoi trigonometrikoak |
| Irisgarritasuna | Lau itxura (SimulaCiencia, iluna, argia eta kontraste handikoa) engranajearen botoian. ×1, ×0,5 eta ×0,25 abiadura, eta une-graduatzaile bat − eta + botoiekin, pausoz pauso aurrera egiteko. Jaurtiketak, lurrera iristea eta altuera maximoa pantaila-irakurgailuarekin iragartzen dira. Teklak: zuriunea jaurti edo gelditzeko, eta R berrabiarazteko |

## Nola dabil simulazioa

Simulazioak hiru modu ditu, «Bertikala», «Parabolikoa» eta «Erronka», ezkerreko panelaren goian aukeratzen direnak. Oihalean lurra, jaurtiketa-puntua (pertsona bat plataforma baten gainean, edo teilatu-terraza bat altuera badago), eskala metrotan duten ardatzak eta, goian, mugimenduaren izena, lekua eta g-ren balioa dituen zerrenda bat ikusten dira. Marrazkiaren eskala bere kabuz egokitzen da, ibilbide osoa sar dadin.

| Modua | Zer ikusten den |
| --- | --- |
| Bertikala | Erorketa askea eta jaurtiketa bertikala. «Hasierako altuera (h₀)» 0 eta 100 m artean, eta «Hasierako abiadura (v₀)» beherantz 30 m/s-tik gorantz 30 m/s-ra; erdian, 0 m/s («askatu»). Adibideak: «Erorketa askea» (45 m, 0 m/s), «Gorantz jaurti» (0 m, 20 m/s ↑) eta «Beherantz jaurti» (30 m, 10 m/s ↓). Objektua igotzen ari den bitartean, arrastoaren puntuak hutsak dira, eta jaisten ari denean, beteak, igoera eta jaitsiera bertikal berean nahas ez daitezen |
| Parabolikoa | Jaurtiketa horizontala eta zeiharra. «Hasierako altuera» 0 eta 50 m artean, «Hasierako lastertasuna» 0 eta 30 m/s artean, eta «Jaurtiketa-angelua» −30°-tik (beherantz) 90°-ra (bertikala). Adibideak: «Jaurtiketa horizontala» (20 m, 10 m/s, 0°), «Lurretik» (0 m, 20 m/s, 45°) eta «Teilatu-terraza batetik» (20 m, 15 m/s, 30°) |
| Erronka | Ausazko datuak dituzten lau problema: «Balkoiraino» eta «Zenbat behar du?» (DBHko 4. maila), eta «Itura» eta «Bi angelu» (Batxilergoa). Beti Lurrean eta airerik gabe. Koadernoan kalkulatutako erantzuna idazten da, «Egiaztatu» sakatzen da, eta simulazioak balio horrekin jaurtitzen du |

«Zer jaurtitzen den eta non» taldea (Bertikala eta Parabolikoa moduak):

- **Objektua.** Altzairuzko bola, saskibaloiko baloia, tenis-pilota, ping-pong pilota, paperezko bola edo luma, bakoitza bere masarekin. Airerik gabe, objektuak ez du ezer aldatzen; airearekin, bakoitza modu desberdinean balaztatzen da.
- **Lekua.** Lurra (g = 9,8 m/s²), Ilargia (1,6 m/s²), Marte (3,7 m/s²) edo Jupiter (24,8 m/s²).
- **«Airearekin».** Lurrean bakarrik. Laukia markatuta, zerrendak ohartarazten du mugimendua jada ez dela erorketa askea edo ibilbidea jada ez dela parabola bat, eta Parabolikoa moduan jaurtiketa bera airerik gabe grisez marrazten da.
- **«Beste objektu batekin alderatu»** (Bertikala modua). Beste objektu bat askatzen du aldi berean, eskuinean, altuera beretik.
- **«Beste bola bat aldi berean askatu»** (Parabolikoa modua). Bola bat jaurtiketa-puntutik erortzen da une berean: jaurtitakoarekin batera iristen da lurrera.
- **«Aurreko ibilbideak gorde»** (Parabolikoa modua). Bost ibilbide arte uzten ditu grisez, bakoitza bere angeluarekin, irismenak alderatzeko.

«Zer ikusten den» taldea:

- **«Abiadura- eta azelerazio-bektoreak».** Abiadura urdinez, ibilbidearekiko ukitzailea, Parabolikoa moduan vₓ eta vᵧ osagaiekin, eta azelerazioa laranjaz, beti beherantz. Bi geziak eskala desberdinetan daude, eta legendak hala dio.
- **«Ardatzen gaineko proiekzioak».** Objektuaren bi «itzal», bata lurrean eta bestea ardatz bertikalean, bakoitza bere arrastoarekin: lurrekoak puntu berdin bereiziekin egiten du aurrera (MZU), eta ardatzekoak, jaistean gero eta bereiziago dauden puntuekin (MZUA).
- **«Arrastoa: puntu bat»** 0,1 s, 0,2 s edo 0,5 s-ro.
- **«Gelditu altuera maximoan».** Animazioa punturik altuenean gelditzen da, bektoreak komentatzeko.
- **«Emaitzak ezkutatu».** Hegaldi-denbora, altuera maximoa, irismena eta iristean duen abiadura ezkutatzen ditu, jaurti aurretik kalkula daitezen. Grafikoek egindako bidea baino ez dute erakusten.

Beheko barran daude «Jaurti» (gero «Gelditu», «Berrekin» eta «Berriro jaurti» bihurtzen dena), «Berrabiarazi», ×0,25, ×0,5 edo ×1 abiadura eta «Grafikoak» botoia, oihalaren azpian bi osagaien posizio-denbora eta abiadura-denbora grafikoak gehitzen dituena. Azpian, «Unea» errenkadak jaurtiketaren edozein unetara joateko aukera ematen du, graduatzailearekin edo − eta + botoiekin, arrastoaren tarte bat aurrera edo atzera egiten dutenak.

«Mugimenduaren datuak» zabalgarriak, uneko denbora, x posizioa, y altuera, vₓ, vᵧ (gora ala behera doan adierazten duen gezi batekin) eta |v| lastertasuna ematen ditu, eta «Jaurtiketaren emaitzak» atalean, hegaldi-denbora, altuera maximoa, irismena eta iristean duen abiadura. «Mugimenduaren ekuazioak» atalak ekuazioak balioak ordezkatuta idazten ditu, adibidez «y = 20 + 7,5 · t − 4,9 · t²», eta azpian haiekin kalkulatutako emaitzak. «Ideia nagusiak» atalak bost ideia laburbiltzen ditu: airerik gabe objektu guztiak berdin erortzen dira, azelerazioa beti g da beherantz, punturik altuenean abiadura bertikala zero da, bi mugimenduak independenteak dira eta aireak parabola hausten du.

Airerik gabe, simulazioak ekuazio zehatzak erabiltzen ditu; beraz, haren zenbakiak koadernoan g = 9,8 m/s²-rekin ebatzitako problema batenak bezalakoak dira.

## Maila bakoitzean nola erabili

DBHko 4. mailan, simulazioak erorketa askea eta jaurtiketa bertikala MZUA gisa lantzen ditu, mugimenduak haien ekuazio eta grafikoetatik abiatuta aurreikustea, eta airerik ez dagoenean gorputz guztiak berdin erortzen direla. Batxilergoko 1. mailan, mugimenduen konposizioa lantzen du: jaurtiketa horizontala eta zeiharra, MZU baten eta MZUA independente baten batura gisa. DBHko 1. eta 2. mailetako Natura Zientzietan modu kualitatiboan erabil daiteke (fitxako 1. eta 2. jarduerak) «Mugimendu errazen iragarpena zinematikaren kontzeptuetatik abiatuta» jakintzarako. Aipatutako oinarrizko jakintzak Euskadiko curriculumekoak dira (77/2023 Dekretua DBHrako eta 76/2023 Dekretua Batxilergorako, EHAA, 2023ko ekainaren 9a), testu ofizialaren euskarazko bertsioan. Izartxoak (*) ezinbesteko jakintza dela adierazten du, dekretuan bezala.

Kontuan izan DBHko 4. mailako Fisika eta Kimika aukerakoa dela.

### DBHko 4. maila (Fisika eta Kimika): erorketa askea eta jaurtiketa bertikala

*15-16 urte · 10th grade AEBn · Year 11 Erresuma Batuan*

**Oinarrizko jakintzak.** D multzoa, «Interakzioa»: «Gorputz baten mugimendua deskribatzen duten magnitude, ekuazio eta grafiko nagusien aurreikuspena eta egiaztapena, esperimentazioa eta arrazoiketa matematikoa erabiliz, eta eguneroko egoerekin eta bizi-kalitatearen hobekuntzarekin lotuz.*» eta «Grabitazio unibertsalaren legea: unibertsoa osatzen duten gorputzen arteko erakarpena. Pisua, kontzeptu fisiko gisa.*».

**Ebaluazio-irizpideak.** 1.1 (eguneroko fenomeno fisiko-kimikoak ulertzea eta printzipio, teoria eta lege egokien arabera zorrotz azaltzea), 1.2 (problemak lege eta teoria egokiekin ebaztea eta emaitzak zuzen adieraztea), 2.2 (modu esperimentalean edo deduktiboan egiazta daitezkeen erantzunak aurreikustea) eta 3.2 (unitateak eta tresna matematikoak behar bezala erabiltzea).

**Helburuak.** Erorketa askea eta jaurtiketa bertikala a = g beherantz duten mugimendu zuzen uniformeki azeleratu gisa ezagutzea. Airerik gabe gorputz guztiak azelerazio berarekin erortzen direla azaltzea, haien masa edozein dela ere. Erorketa-denbora, altuera maximoa eta lurrera iristean duen abiadura kalkulatzea. Jaurtiketa bertikal baten posizio-denbora eta abiadura-denbora grafikoak interpretatzea.

**Azalpen-sekuentzia (15-20 min).**

1. «Bertikala» modua, «Erorketa askea» adibidea (45 m, 0 m/s), arrastoa 0,2 s-ro. Aurretik galdetu: beti abiadura berean erortzen da? Jaurti. Arrastoaren puntuak gero eta bereiziago daude: 0,2 s bakoitzean aurrekoan baino distantzia handiagoa egiten du. 3,03 s-tan iristen da, 29,7 m/s-ko abiaduran.
2. Markatu «Beste objektu batekin alderatu», luma eta altzairuzko bola hautatuta, eta markatu «Airearekin». Bola 3,05 s-tan iristen da; lumak, 0,8 m/s-ra, ia minutu bat behar du. Galdetu: zergatik? Kendu airea: biak batera iristen dira 3,03 s-tan. Bereizten zituena airea zen, ez masa. Aldatu lekua Ilargira, airerik ez duena: biak batera erortzen dira 7,5 s-tan, Apollo 15eko luma eta mailua bezala.
3. Itzuli Lurrera airerik gabe eta ireki «Mugimenduaren ekuazioak». Arbelean egiaztatu 45 = 4,9 · t² ekuaziotik t = 3,03 s ateratzen dela, eta v = 9,8 · 3,03 = 29,7 m/s.
4. «Gorantz jaurti» adibidea (0 m, 20 m/s ↑), «Gelditu altuera maximoan» markatuta. Jaurti aurretik, galdetu zenbat balio duten abiadurak eta azelerazioak goi-goian. Pausan, abiaduraren gezia desagertu da (vᵧ = 0), eta azelerazioarena berdin dago, beherantz. 20,4 m-ra iristen da 2,04 s-tan.
5. Berrekin. Jaitsiera igoeraren simetrikoa da: puntu beteak hutsen gainean erortzen dira, beste 2,04 s behar ditu, eta 20 m/s-ra iristen da lurrera, irten zen lastertasun berarekin. Igotzen ari den bitartean, abiadura gorantz doa eta azelerazioa beherantz: horregatik balaztatzen da.
6. Sakatu «Grafikoak». Posizio-denbora parabola bat da, maximoa 2,04 s-tan duena; abiadura-denbora −9,8 m/s²-ko maldako zuzen bat da, ardatza une berean ebakitzen duena. Malda berbera da igotzean eta jaistean: azelerazioa ez da aldatzen.
7. «Erronka» modua, «Balkoiraino» eta «Zenbat behar du?». Ikasleek koadernoan kalkulatzen dute, emaitza idazten dute eta egiaztatzen dute. Bi zifra esanguratsutara biribildutako erantzuna ere onartzen da.

### Batxilergoko 1. maila: mugimenduen konposizioa

*16-17 urte · 11th grade AEBn · Year 12 Erresuma Batuan*

**Oinarrizko jakintzak.** E multzoa, «Zinematika»: «Objektu batek, kanpoko indarrarekin edo gabe, izan ditzakeen mugimendu ezberdinen denboraren araberako aldagai zinematikoak: fisikarekin eta eguneroko ingurunearekin lotutako benetako egoeren ebazpena» eta «Mugimendu konposatu baten ibilbidearen eta hori deskribatzeko magnitudeen arteko lotura.*».

**Ebaluazio-irizpideak.** 1.1 (eguneroko gertakarien analisian lege eta teoria zientifikoak aplikatzea), 1.2 (eguneroko egoeretatik abiatutako problemak ebaztea eta emaitzak behar bezala azaltzea), 2.1 (hipotesiak formulatzea eta egiaztatzea, lan esperimentala eta arrazoitze logiko-matematikoa erabiliz) eta 3.3 (prozesu baten informazioa hainbat formatutan interpretatzea eta adieraztea).

**Helburuak.** Hasierako abiadura osagaietan deskonposatzea. Jaurtiketa horizontala eta zeiharra deskribatzea, MZU horizontal baten eta MZUA bertikal baten konposizio gisa, elkarren artean independenteak. x(t) eta y(t) ekuazioak idaztea eta haietatik hegaldi-denbora, altuera maximoa eta irismena ateratzea. Arrazoitzea zergatik bi angelu osagarrik irismen bera ematen duten lurretik, eta zergatik aireak irismena eta angelu optimoa txikiagotzen dituen.

**Azalpen-sekuentzia (15-20 min).**

1. «Parabolikoa» modua, «Jaurtiketa horizontala» adibidea (20 m, 10 m/s, 0°), «Ardatzen gaineko proiekzioak» markatuta. Lurreko itzalak puntu berdin bereiziak uzten ditu (MZU, 10 m/s); ardatz bertikalekoak, gero eta bereiziago dauden puntuak (MZUA), erorketa aske batean bezala.
2. Markatu «Beste bola bat aldi berean askatu». Aurretik galdetu zein iritsiko den lehenago. Batera iristen dira, 2,02 s-tan, erorketa-denbora altueraren araberakoa baino ez delako. Jaurtitako bola teilatu-terrazaren oinetik 20,2 m-ra erortzen da.
3. Bektoreekin: vₓ ez da aldatzen hegaldi osoan; vᵧ beherantz hazten da, 9,8 m/s segundo bakoitzean. Iristean, vₓ = 10,0 m/s eta vᵧ = 19,8 m/s beherantz, eta lastertasuna √(10² + 19,8²) = 22,2 m/s da.
4. «Lurretik» adibidea (0 m, 20 m/s, 45°), «Gelditu altuera maximoan» markatuta. Gailurrean abiadura ez da zero: vₓ = 14,1 m/s geratzen da, horizontala. Jaurtiketa bertikalean bakarrik gelditzen da guztiz. Altuera maximoa 10,2 m, irismena 40,8 m, hegaldi-denbora 2,89 s.
5. Markatu «Aurreko ibilbideak gorde» eta jaurti 30°, 45° eta 60°-ra, 20 m/s-rekin. 30° eta 60° puntu berean erortzen dira, 35,3 m-ra: angelu osagarriak dira, eta sin(2α) berdina da bientzat. 45°-k urrunago iristen da. Egiaztatu x = v₀² · sin(2α) / g formularekin.
6. Markatu «Airearekin» tenis-pilotarekin. 45°-ko irismena 40,8 m-tik 25,7 m-ra jaisten da, ibilbidea asimetriko bihurtzen da (igo zen baino maldatsuago jaisten da) eta lerro grisak airerik gabeko parabola gogorarazten du. Airearekin, urrunen iristen den angelua 40° ingurura jaisten da.
7. «Teilatu-terraza batetik» adibidea (20 m, 15 m/s, 30°), «Emaitzak ezkutatu» markatuta. Problema planteatu: hegaldi-denbora, altuera maximoa eta irismena. Ebatzi, kendu laukia eta egiaztatu: 2,93 s, 22,9 m eta 38,0 m. Amaitzeko, «Itura» eta «Bi angelu» erronkak.

## Zuzentzen laguntzen dituen ideia okerrak

Simulazioak batez ere gorputz astunak lehenago erortzen direlako ideiari eta punturik altuenean abiadura eta azelerazioa nahasteari egiten die aurre. Errenkada bakoitzak ohiko aurretiazko ideia eta simulazioarekin hura desegiteko modua adierazten ditu.

| Ikasleen ideia | Ideia zuzena | Nola erakutsi |
| --- | --- | --- |
| «Objektu astunak azkarrago erortzen dira» | Airerik gabe, guztiak g azelerazio berarekin erortzen dira; bereizten dituena airearekiko marruskadura da | Luma eta altzairuzko bola alderatu 45 m-tik: airearekin, 56 s eta 3 s; airerik gabe, batera 3,03 s-tan. Ilargian, batera 7,5 s-tan |
| «Punturik altuenean azelerazioa zero da, objektua geldi dagoelako» | Azelerazioa g da beherantz hegaldi osoan, goian ere bai; zero bihurtzen dena abiadura bertikala da | «Gelditu altuera maximoan» bektoreekin: azelerazioaren gezia ez da aldatzen, eta abiadura-denbora grafikoan zuzenak malda bera du lehenago eta gero |
| «Igotzen ari den bitartean, jaurtiketaren indarrak gorantz bultzatzen du» | Askatu ondoren, indar bakarra (airerik gabe) pisua da; abiadura daramalako igotzen da, eta azelerazioa kontrako noranzkoan doalako balaztatzen da | Bektoreak «Gorantz jaurti» adibidean: gero eta laburragoa den gorako abiadura eta beti beherantz doan azelerazioa |
| «Jaurtiketa parabolikoan, punturik altuenean abiadura zero da» | vᵧ bakarrik bihurtzen da zero; vₓ berdin mantentzen da | «Lurretik» adibidea gailurrean pausatuta: gezi horizontala geratzen da eta panelak vₓ = 14,1 m/s erakusten du |
| «Horizontalki jaurtitako bala batek askatzen den batek baino denbora gehiago behar du erortzeko» | Bi mugimenduak independenteak dira: erorketa-denbora altueraren araberakoa baino ez da | «Beste bola bat aldi berean askatu»: biak batera iristen dira, eta proiekzio bertikalak bat datoz une bakoitzean |
| «Objektua zuzen doa eta gero bat-batean erortzen da» | Ibilbidea parabola bat da lehen unetik, g hasieratik ari delako | Arrastoa 0,1 s-ro jaurtiketa horizontalean, proiekzioekin: itzal bertikala jaurtiketaren unetik hasten da erortzen |
| «45°-ra beti urrunago iristen da» | Lurretik eta airerik gabe bakarrik; hasierako altuerarekin edo airearekin, angelu optimoa txikiagoa da | «Aurreko ibilbideak gorde»: airearekin, 40°-k 45°-k baino apur bat urrunago iristen da; teilatu-terrazatik, 30°-k 45° gainditzen du |

## Ezagutzea komeni diren sinplifikazioak

Simulazioak lehentasuna ematen dio zenbakiak klaseko problema batenekin bat etortzeari eta mugimenduen konposizioa argi ikusteari. Komeni da lizentzia hauek ezagutzea, nahi gabe ideia okerrak ez indartzeko.

1. **g konstantea eta Lur laua.** g = 9,8 m/s² hartzen da ibilbide osoan, eta lurra laua da. Ehunka metro gutxiko altueretan, errealitatearekiko aldea ezin da antzeman.
2. **Objektua puntu bat da.** Ez du biratzen eta ez du errebote egiten: lurra ukitzean gelditzen da. Ez dago Magnus efekturik (efektua duen pilota bat okertzen duena).
3. **Aire-eredu sinplea.** Airearekin, marruskadura abiaduraren karratuarekiko proportzionala da, eta objektu bakoitza bere muga-abiadurak definitzen du: altzairua 105 m/s, saskibaloia 20 m/s, tenisa 22 m/s, ping-ponga 9 m/s, papera 5 m/s eta luma 0,8 m/s. Gutxi gorabeherako balioak dira; benetako luma batek, gainera, planeatu eta kulunkatu egiten du. Airearekin, simulazioak pausoz pauso integratzen du, eta paneleko ekuazioak jaurtiketa bera airerik gabe egitean dagozkionak dira.
4. **Lurrean bakarrik dago airea.** Ilargiak ez du atmosferarik, baina Martek oso mehea du, eta simulazioak ez du kontuan hartzen. Jupiterrek ez du gainazal solidorik: g-ren balioa alderatzeko dago.
5. **Geziak eskala desberdinetan.** Abiadura eta azelerazioa ez dira unitate berberetan neurtzen; beraz, haien luzera erlatiboak ez du ezer esan nahi. Garrantzitsua norabidea da, eta bakoitza nola aldatzen den.
6. **Proiekzioak eraikuntza bat dira.** Ardatzen gaineko «itzalak» ez dira errealitatean existitzen; jaurtiketa osatzen duten bi mugimenduak bereizteko balio dute.
7. **Erronketako tolerantzia.** Bi zifra esanguratsutara biribildutako erantzuna ontzat ematen da, eta jaurtiketetan, ituaren erdigunetik 0,5 m baino gutxiagora erortzea.

## Ikasleen jarduera-fitxa

[Jarduera-fitxak](https://simulaciencia.es/eu/fitxak/caida-libre/) iragarri, behatu eta azaldu eskema jarraitzen du. Jarduera bakoitzak simulazioa prestatuta irekitzen duen esteka du; beraz, informatika-gelan, tabletekin edo etxeko lan gisa erabil daiteke. Word eta LibreOffice formatuetan deskargatzen da, egokitu ahal izateko.

| Maila | Jarduerak | Gutxi gorabeherako iraupena |
| --- | --- | --- |
| DBHko 1. edo 2. maila (Natura Zientziak) | Hasi aurretik, 1. eta 2. jarduerak (kalkulurik gabe), Berrikusi zure ideiak | Saio erdia |
| DBHko 4. maila | 1.etik 4.era arteko jarduerak, Aplikatu ikasitakoa (1.etik 3.era) eta «Balkoiraino» eta «Zenbat behar du?» erronkak | 50-55 minutuko saio bat, edo bi ariketak klasean egiten badira |
| Batxilergoko 1. maila | 1. jarduera errepaso gisa, 5.etik 7.era arteko jarduerak, Aplikatu ikasitakoa (4. eta 5.) eta Gehiago jakiteko | Saio bat edo bi |

«Hasi aurretik» taulak gorputzen erorketari buruzko bost aurretiazko ideia biltzen ditu. Hobe da hasieran ez zuzentzea: ikasleak «Berrikusi zure ideiak» atalean itzultzen dira hara. Airearekin, lumak ia minutu bat behar du 45 m-tik erortzeko: ×1 abiadurara pasa daiteke, edo «Berrabiarazi» sakatu bola askoz lehenago iristen dela ikusi ondoren.

### Soluzioak

| Atala | Soluzioa |
| --- | --- |
| Hasi aurretik | a) Gezurra: airerik gabe batera erortzen dira (1. jarduera). b) Gezurra: azelerazioa g da beherantz punturik altuenean ere (3. jarduera). c) Egia: lastertasun berarekin igotzen eta jaisten da maila berean (3. jarduera). d) Gezurra: aldi berean iristen dira (5. jarduera). e) Gezurra: gailurrean abiadura bertikala bakarrik bihurtzen da zero (6. jarduera) |
| 1. jarduera | Airearekin: altzairuzko bolak 3,05 s inguru behar ditu eta lumak 56 s inguru. Airerik gabe: biek 3,03 s. Ilargian: biek 7,5 s. Luma desberdin erortzea eragiten duena airea da, ez haren masa: airerik gabe, objektu guztiak azelerazio berarekin erortzen dira |
| 2. jarduera | Puntuak gero eta bereiziago daude: tarte bakoitzean distantzia handiagoa egiten du; beraz, abiadura handitzen da. Abiadurak: 0, 9,8, 19,6 eta 29,4 m/s, 0, 1, 2 eta 3 s-tan. t = 3,03 s eta v = 29,7 m/s. 45 = ½ · 9,8 · t², t = √(90 / 9,8) = 3,03 s; v = 9,8 · 3,03 = 29,7 m/s. Abiadura 9,8 m/s handitzen da segundo bakoitzean: hori da g |
| 3. jarduera | Altuera maximoa 20,4 m, 2,04 s-tan; lurrera itzultzen da 4,08 s-tan, 20 m/s-ra. Punturik altuenean v = 0, eta azelerazioa 9,8 m/s² da oraindik, beherantz. Igotzen ari den bitartean, abiadura gorantz doa eta azelerazioa beherantz; horregatik balaztatzen da. h = v₀² / (2g) = 400 / 19,6 = 20,4 m; t = v₀ / g = 2,04 s |
| 4. jarduera | Posizio-denbora parabola bat da (kurba), maximoa 2,04 s-tan duena. Abiadura-denbora jaisten den zuzen bat da: +20tik −20 m/s-ra pasatzen da eta ardatza 2,04 s-tan ebakitzen du. Malda −9,8 m/s² da, azelerazioa, eta berdina da igotzean eta jaistean |
| 5. jarduera | Aldi berean iristen dira, 2,02 s-tan. Lurreko itzalak puntu berdin bereiziekin egiten du aurrera (MZU), eta ardatzekoak, gero eta bereiziago dauden puntuekin (MZUA). Jaurtitako bola 20,2 m-ra erortzen da. Mugimendu horizontalak ez dio bertikalari eragiten: erorketa-denbora altueraren araberakoa baino ez da |
| 6. jarduera | Gailurrean, vᵧ = 0 eta vₓ = 14,1 m/s: abiadura ez da zero, horizontala da. vₓ berdina da hegaldi osoan. Azelerazioa g da oraindik, beherantz. Altuera maximoa 10,2 m, hegaldi-denbora 2,89 s eta irismena 40,8 m |
| 7. jarduera | Airerik gabe: 15°, 30° eta 45°-k 20,4 m, 35,3 m eta 40,8 m ematen dituzte; 60° eta 75°-k, 35,3 m eta 20,4 m. Angelu osagarriek irismen bera ematen dute, sin(2α) = sin(180° − 2α) delako. Maximoa, 45°-tan. Airearekin eta tenis-pilotarekin, irismenak txikiagoak dira (25,7 m inguru 45°-tan) eta angelurik onena txikiagoa da, 40° ingurukoa |
| Aplikatu ikasitakoa | 1) t = √(2 · 80 / 9,8) = 4,04 s; v = 9,8 · 4,04 = 39,6 m/s. 2) h = 15² / 19,6 = 11,5 m; igoera-denbora = 15 / 9,8 = 1,53 s; hegaldia 3,06 s. 3) Ilargian, t = √(2 · 45 / 1,6) = 7,5 s, Lurreko 3,03 s-en aldean: g sei aldiz txikiagoa da gutxi gorabehera. 4) t = √(2 · 1,25 / 9,8) = 0,505 s; v₀ = 6 / 0,505 = 11,9 m/s. 5) vₓ = 25 · 0,80 = 20 m/s; vᵧ = 25 · 0,60 = 15 m/s; h = 15² / 19,6 = 11,5 m; t = 2 · 15 / 9,8 = 3,06 s; x = 20 · 3,06 = 61,2 m |
| Gehiago jakiteko | 1) x = 15 · cos 30° · t = 13,0 · t; y = 20 + 7,5 · t − 4,9 · t². 2) y = 0 → 4,9 t² − 7,5 t − 20 = 0, t = 2,93 s; x = 38,0 m; altuera maximoa 20 + 7,5² / 19,6 = 22,9 m. 3) Iristean, vₓ = 13,0 m/s eta vᵧ = 7,5 − 9,8 · 2,93 = −21,2 m/s; lastertasuna 24,8 m/s, energiaren kontserbazioak ematen duen bera: √(15² + 2 · 9,8 · 20) = 24,8 m/s. 4) 20 m-tik, 45°-tan irismena 35,8 m da, 30°-tan baino txikiagoa: hasierako altuerarekin, angelu optimoa 45° baino txikiagoa da |
