# Irakaslearen gida: erreakzio-abiaduraren simulazioa

## Laburpena

Simulazioak A + B → C erreakzioa orientazioa duten molekulen arteko talka gisa erakusten du, eta tenperatura, molekula kopurua eta katalizatzailea aldatzen uzten du. Euskadin DBHko 4. mailako Fisika eta Kimikan erabiltzen da batez ere, eta DBHko 3. mailan eta Batxilergoko 2. mailako Kimikan ere badu aplikaziorik.

| Datua | Xehetasuna |
| --- | --- |
| Esteka | [jrgrijota.github.io/simulacion-velocidad-reaccion](https://jrgrijota.github.io/simulacion-velocidad-reaccion/) |
| Mailak | DBHko 4. maila (erabilera nagusia), DBHko 3. maila, Batxilergoko 2. mailako Kimika; noizbehinkako erabilera DBHko 1. eta 2. mailetan eta Batxilergoko 1. mailan |
| Irakasgaia | Fisika eta Kimika; Kimika Batxilergoko 2. mailan |
| Gutxi gorabeherako iraupena | 15-20 minutu azalpenerako, simulazioa proiektatuta |
| Materiala | Proiektorea edo arbel digitala; nabigatzailean dabil, baita mugikorrean eta tabletan ere, ezer instalatu gabe |
| Aurretiko ezagutzak | Partikula-eredua, erreaktiboak eta produktuak, tenperatura partikulen asaldura neurtzen duen magnitude gisa |
| Irisgarritasuna | Itxura iluna, argia eta kontraste handikoa (engranajearen botoia, «Itxura») |

## Nola dabil simulazioa

Simulazioak hiru modu ditu, «Modua» txartelean aukeratzen direnak: «Erreakzio-modua», «Konparazio-modua» eta «Talka-modua». Lehen bietan ganbera bat ikusten da A (urdina), B (laranja), C produktua (berdea) eta K katalizatzailea (morea) molekulekin. Azpian «ERREAKZIO-ABIADURA (erreakzioak/s simulatua)» grafikoa agertzen da.

| Modua | Irakasleak zer kontrolatzen duen | Zer erakusten duen |
| --- | --- | --- |
| Erreakzio-modua | «Tenperatura» 1etik 10era («Normala (4)»n hasten da), «A molekulak (erreaktiboa)» eta «B molekulak (erreaktiboa)» 4tik 30era (16an hasten dira) eta «Katalizatzaileak» 0tik 6ra (0an hasten da). «⏸ Pausatu» eta «↺ Berrabiarazi» botoiak | Ganbera bat A, B, C eta K-ren zenbaketarekin, erreakzio termikoak eta katalizatuak («Term.» eta «Kat.»), «bihurketa»-ehunekoa, abiaduren kurba eta erreakzio-abiaduraren grafikoa |
| Konparazio-modua | «Konparatzeko aldagaia»: «Katalizatzailearen presentzia» (0 eta 4, 0-6 tartea), «Energia (tenperatura)» (2 eta 8, 1-10 tartea) edo «Molekula kopurua» (8 eta 24, 4-30 tartea, A eta B kopuru berean). Beste bi aldagaiak «Parametroak» ataleko graduatzaileekin finkatzen dira | Bi ganbera, «◀ Ezkerra» eta «▶ Eskuina», bi kurbak grafikoan gainjarrita. Ganbera batek erreaktibo mugatzailea agortzen duenean, gelditu egiten da eta bakoitzaren bihurketa-ehunekoa erakusten du |
| Talka-modua | Molekula bakoitzaren orientazioa, saguarekin edo hatzarekin arrastatuz. «Talkaren energia» 1etik 10era (5ean hasten da). «▶ Jaurti» eta «↺ Berrabiarazi» botoiak | Aurrez aurre talka egiten duten bi molekula handi. Panel batek «✓ TALKA ERAGINKORRA» edo «✗ TALKA EZ-ERAGINKORRA» dio, eta «Energia nahikoa» eta «Orientazio zuzena» izan diren |

Lau elementuk eusten diote azalpenari:

- **Gune erreaktiboa.** A eta B bakoitzak mutur argi nabarmendu bat du. Erreakzio termikoa bi gune erreaktiboak talkan ukitzen badira bakarrik gertatzen da.
- **Abiaduren laukia.** Ganbera bakoitzaren goian, eskuinean, «Talken abiadura erlatiboa (T = 4)» agertzen da. Molekula-bikoteen abiadura erlatiboak nola banatzen diren marrazten du, «Ea» marra gorri etena, eta berdez hura gainditzen duen zatia: energia nahikoa duten talkak.
- **Erreakzio-abiaduraren grafikoa.** Simulazioko azken segundoko erreakzioak zenbatzen ditu (60 urrats) eta azken 90 balioak gordetzen ditu. Konparazioan bi ganberak gainjartzen ditu, bakoitza bere kolorearekin, eta paneleko estatistikak ganberaka ematen dira: «ezkerra | eskuina».
- **Bihurketa-ehunekoa.** Ganbera bakoitzaren behean, eskuinean, erreaktibo mugatzailearen zer zatik erreakzionatu duen adierazten du.

«Nola funtzionatzen du?» zabalgarriak, hasieran itxita, bide termikoa, bide katalizatua eta konparazio-modua laburbiltzen ditu. «Legenda» txartelak koloreak, gune erreaktiboa eta erreakzio-distira identifikatzen ditu.

## Maila bakoitzean nola erabili

DBHko 3. mailan, simulazioak tenperaturaren eta kontzentrazioaren eragina modu kualitatiboan ikusteko balio du. DBHko 4. mailan, talken teoriaren eta abiaduran eragina duten faktoreen euskarria da. Batxilergoko 2. mailako Kimikan, talken teoria aktibazio-energiarekin, abiadura-legearekin eta katalizatzaileekin lotzen du. Aipatutako oinarrizko jakintzak eta ebaluazio-irizpideak Euskadiko curriculumekoak dira (77/2023 Dekretua DBHrako eta 76/2023 Dekretua Batxilergorako, EHAA, 2023ko ekainaren 9a), testu ofizialaren euskarazko bertsioan. Izartxoak (*) ezinbesteko jakintza dela adierazten du, dekretuan bezala. Kontuan izan DBHko 4. mailako Fisika eta Kimika aukerakoa dela.

Erreakzio kopuruak gutxi gorabeherakoak dira. Simulazioa ausazkoa da, eta erreakzio kopurua pantailaren tamainaren araberakoa da. Adierazitako balioak ohiko eramangarri baten pantailari dagozkio.

### DBHko 1. eta 2. mailak (Natura Zientziak): noizbehinkako erabilera

*12-14 urte · 7th-8th grade AEBn · Year 8-9 Erresuma Batuan*

Ez dago erreakzio-abiadurari buruzko jakintzarik. «Talka-modua»k B multzoko «Sistema materialak: jasaten dituzten aldaketa moten azterketa, aldaketa horien sorburuak aldaketa horien ondorioekin lotuz.*» irudika dezake. Hasierako balioekin, «▶ Jaurti» sakatzean talka eraginkor bat gertatzen da eta C agertzen da, A eta B-ren atomoez osatua. Nahikoa da erreakzio batek atomoak berrantolatzen dituela eta substantzia berri bat sortzen duela erakusteko.

### DBHko 3. maila (Fisika eta Kimika): tenperatura eta kontzentrazioa

*14-15 urte · 9th grade AEBn · Year 10 Erresuma Batuan*

**Oinarrizko jakintzak.** E multzoa, «Aldaketa»: «Erreakzio kimikoen interpretazio makroskopikoa eta mikroskopikoa: kimikak ingurumenarekin, teknologiarekin eta gizartearekin dituen harremanak.*» eta «Erreakzio kimikoei eragiten dieten faktoreak: erreakzio kimikoen eboluzioaren aurreikuspen kualitatiboa, zientziak gaur egun dituen arazoak konpontzeko duen garrantzia ulertuta.*». A multzoa: «Ikaskuntza zientifikorako hainbat ingurune eta baliabide, hala nola laborategia edo ingurune birtualak […].*».

**Ebaluazio-irizpideak.** 1.1 (eguneroko fenomeno fisiko-kimiko garrantzitsuenak identifikatzea, ulertzea eta azaltzea), 2.2 (egindako hipotesiak egiaztatzeko edo ezeztatzeko modurik onena hautatzea) eta 3.1 (prozesu fisiko-kimiko bati buruzko informazioa interpretatzean datuak hainbat formatutan erabiltzea).

Euskadiko curriculumak ez ditu tenperatura eta kontzentrazioa faktore gisa izenez aipatzen 3. mailan; «erreakzio kimikoen eboluzioaren aurreikuspen kualitatiboa»n sartzen dira.

**Helburuak.** Erreakzio bat atomoak berrantolatzen dituzten partikulen arteko talka gisa interpretatzea. Tenperaturaren eta kontzentrazioaren eragina modu kualitatiboan aurreikustea. Tenperatura partikulen azkartasunarekin erlazionatzea.

**Azalpen-sekuentzia (15-20 min).**

1. Erreakzio-modua hasierako balioekin: «Normala (4)», 16 A, 16 B eta 0 katalizatzaile. Ireki «Legenda» eta seinalatu A, B, C eta gune erreaktiboa. Galdetu talka egiten duten bakoitzean erreakzionatzen duten.
2. Utzi minutu batez martxan. Talka asko eta distira gutxi daude: «Erreakzioak» kontagailua 5 eta 8 artean geratu ohi da. Ondorioztatu talka guztiek ez dutela erreakziorik sortzen.
3. Pausatu eta seinalatu C molekula bat: A-ren bi atomo urdin eta B-ren bi laranja ditu. Atomoak berrantolatu egiten dira, ez dira agertzen ez desagertzen.
4. Pasatu Konparazio-modura eta aukeratu «Energia (tenperatura)»: T = 2 eta T = 8 geratzen dira. Eskatu iragarpen bat. Minutu batera, T = 8ko ganberak 12 erreakzio inguru izan ohi ditu, beste ganberaren 7 inguruen aldean.
5. Aukeratu «Molekula kopurua»: 8 A + 8 B eta 24 A + 24 B geratzen dira, ganbera berdinetan. Minutu batera 4 erreakzio inguru egon ohi dira batean eta 17 inguru bestean. Espazio berean partikula gehiagok maizago egiten dute talka.
6. Amaitu bi araurekin: tenperatura handiagoarekin eta kontzentrazio handiagoarekin, erreakzio azkarragoa. Eguneroko adibidea: hozkailuak elikagaiak kontserbatzen ditu haien erreakzioak moteltzen dituelako.

### DBHko 4. maila (Fisika eta Kimika): talken teoria eta faktoreak

*15-16 urte · 10th grade AEBn · Year 11 Erresuma Batuan*

**Oinarrizko jakintzak.** E multzoa, «Aldaketa»: «Erreakzio kimikoen abiaduran eragina duten faktoreak: atomoen berrantolaketa gertatzeko moduaren ulermena, talken teoria bezalako ereduak aplikatuz eta eguneroko prozesu kimiko garrantzitsuenetan aurreikusteak eginez.». A multzoa: «Ikaskuntza zientifikoko hainbat ingurune eta baliabide, hala nola laborategia edo ingurune birtualak […].*».

**Ebaluazio-irizpideak.** 1.1 (eguneroko fenomeno fisiko-kimikoak ulertzea eta printzipio, teoria eta lege egokien arabera zorrotz azaltzea), 2.1 (fenomeno zientifikoak zientziaren berezko metodologiekin identifikatzea eta deskribatzea, informazio grafiko edo zenbakizkoa barne) eta 2.2 (modu esperimentalean edo deduktiboan egiazta daitezkeen erantzunak aurreikustea).

Euskadiko curriculumean jakintza hau izartxorik gabe dago, hau da, ez da ezinbesteko jakintzen artean agertzen.

**Helburuak.** Talka eraginkor baten bi baldintzak adieraztea: energia nahikoa eta orientazio egokia. Tenperaturaren, kontzentrazioaren eta katalizatzailearen eragina baldintza horiekin azaltzea. Erreakzio-abiadura denbora-unitateko erreakzio gisa interpretatzea.

**Azalpen-sekuentzia (15-20 min).**

1. Talka-modua hasierako balioekin: bi gune erreaktiboak aurrez aurre daude. Sakatu «▶ Jaurti»: «✓ TALKA ERAGINKORRA» eta C agertzen da.
2. Sakatu «↺ Berrabiarazi» eta arrastatu A, haren gune erreaktiboak gora begira egon dadin (90° inguru). Jaurti: «✗ TALKA EZ-ERAGINKORRA», «Orientazio zuzena: Ez ✗» adierazita. Definitu orientazio-baldintza.
3. Sakatu «↺ Berrabiarazi», utzi hasierako orientazioa eta jaitsi «Talkaren energia» 3ra. Jaurti: «✗ TALKA EZ-ERAGINKORRA», «Energia nahikoa: Ez ✗» adierazita. Igo 4ra eta jaurti: eraginkorra. Definitu energia-baldintza: Ea 4. mailaren parekoa da.
4. Pasatu Erreakzio-modura eta seinalatu «Talken abiadura erlatiboa (T = 4)» laukia: berdez geratzen dena, «Ea»ren eskuinean, energia nahikoa duten talkak dira. Mugitu «Tenperatura» 1etik 10era: kurba eskuinerantz zabaltzen da eta eremu berdea % 12tik (T = 1) % 81era (T = 10) pasatzen da.
5. Konparazio-modua «Katalizatzailearen presentzia»rekin (hasierako aldagaia da: 0 eta 4). 4 katalizatzaileko ganberak 15-25 s-tan agortu ohi du erreaktiboa. Simulazioa gelditu egiten da, eta beste ganbera % 50etik behera geratu ohi da.
6. Seinalatu «K: 4» zenbaketa ez dela aldatzen: katalizatzailea ez da gastatzen. Irakurri grafikoa: gailur bakoitza segundoko erreakzioak dira, eta abiadura jaitsi egiten da erreaktiboak agortzean.

### Batxilergoko 1. maila: noizbehinkako errepasoa

*16-17 urte · 11th grade AEBn · Year 12 Erresuma Batuan*

Ez dago zinetikari buruzko jakintzarik. Simulazioak C multzoko «Erreakzio kimikoen estekiometria […]» lagun dezake, zehazki erreaktibo mugatzailea lantzean. Erreakzio-moduan 16 A, 10 B eta 4 katalizatzailerekin, erreakzioa C-ren 10 molekularekin gelditzen da. 6 A geratzen dira erreakzionatu gabe eta «bihurketa»k % 100 adierazten du, erreaktibo mugatzailearekiko kalkulatzen delako.

### Batxilergoko 2. maila (Kimika): zinetika kimikoa

*17-18 urte · 12th grade AEBn · Year 13 Erresuma Batuan*

**Oinarrizko jakintzak.** C multzoa, «Erreakzio kimikoak», «2. Zinetika kimikoa»: «Talka-teoria, erreakzio kimikoen eskala mikroskopikoko eredu gisa. "Erreakzio-abiadura" eta "aktibazio-energia" kontzeptuak.», «Erreakzio-baldintzek erreakzioaren abiaduran duten eragina.» eta «Erreakzio kimiko baten abiaduraren lege diferentziala eta erreakzio-ordenak, erreakzio-abiadurari buruzko datu esperimentaletatik abiatuta.».

**Ebaluazio-irizpideak.** 2.3 (kimikaren ereduak eta legeak modu informatu, koherente eta arrazoituan aplikatzea), 5.4 (zailtasun handienak dituzten kimika-kontzeptuak tresna digitalekin irudikatzea eta bistaratzea, laborategi erreal eta birtualeko esperientziak barne) eta 6.3 (kimikaren problemak ebaztea, matematikak eta teknologiak eskaintzen dituzten tresnak erabiliz).

Euskadiko curriculumak ez ditu Arrheniusen ekuazioa eta katalizatzaileak izenez aipatzen zinetikan; «erreakzio-baldintzek erreakzioaren abiaduran duten eragina»n sartzen dira.

**Helburuak.** Arrheniusen ekuazioaren faktoreak, k = A·e^(−Ea/RT), talken teoriarekin interpretatzea. Abiadura erreaktiboen kontzentrazioarekin erlazionatzea. Katalizatzaile baten ekintza mekanismo alternatibo gisa azaltzea.

**Azalpen-sekuentzia (15-20 min).**

1. Erreakzio-modua, «Tenperatura» 4an. Laukian, energia nahikoa duten talken zati berdeak e^(−2,1/T) balio du: % 59 T = 4an. Konparatu Arrheniusen e^(−Ea/RT) faktorearekin.
2. Joan T = 1, 2, 4 eta 10 balioetatik: zatikiak % 12, % 35, % 59 eta % 81 balio du. Ohiko azkartasuna 3,2z baino ez da biderkatzen T = 1 eta T = 10 artean. Ondorioztatu tenperaturak batez ere Ea gainditzen duen zatikiaren bidez eragiten duela.
3. Talka-modua: biratu A 90° inguru eta jaurti. Talka ez da eraginkorra, «Energia nahikoa: Bai ✓» izan arren. Aurkeztu A faktore aurreesponentzialean sartzen den faktore esterikoa.
4. Konparazio-modua, «Molekula kopurua» (8 eta 24). v = k[A][B] izanik, bi kontzentrazioak hirukoizteak hasierako abiadura 9z biderkatzen du. Egiaztatu grafikoan eskuineko kurba askoz gorago doala.
5. Erreakzio-modua 30 A, 30 B eta 4 katalizatzailerekin. Grafikoa 2-4 erreakzio/s-tan hasten da eta 0rantz jaisten da 20-30 s-tan. Abiadura txikitu egiten da kontzentrazioak jaistean, abiadura-legeak iragartzen duen bezala.
6. Konparazio-modua, «Katalizatzailearen presentzia». Azaldu katalizatzaileak beste bide bat eskaintzen duela eta osorik ateratzen dela. Ñabartu hemen hesia ezabatu egiten duela, eta benetako katalizatzaile batek txikitu egiten duela. Aipatu Haber-Bosch sintesia.

## Zuzentzen laguntzen dituen ideia okerrak

Simulazioak batez ere partikulek talka egitea nahikoa dela erreakzionatzeko dioen ideiari egiten dio aurre. Errenkada bakoitzak ohiko aurretiazko ideia bat eta simulazioarekin nola desegin adierazten du.

| Ikasleen ideia | Ideia zuzena | Nola erakutsi |
| --- | --- | --- |
| «Bi erreaktibok talka egiten duten bakoitzean erreakzionatzen dute» | Talken zatiki txiki batek baino ez du erreakzionatzen | Erreakzio-modua hasierako balioekin: talka asko eta, minutu batean, 5-8 erreakzio inguru baino ez «Term.» kontagailuan |
| «Talka oso indartsua bada, beti dago erreakzioa» | Orientazio egokia ere behar da | Talka-modua, «Talkaren energia» 10ean eta A 180° biratuta: «✗ TALKA EZ-ERAGINKORRA», «Energia nahikoa: Bai ✓» adierazita |
| «Berotzean, molekula guztiak abiadura berean doaz, baina azkarrago» | Abiaduren banaketa bat dago; berotzean zabaldu egiten da | Erreakzio-modua: mugitu «Tenperatura» 1etik 10era eta begiratu nola zabaltzen den abiaduren laukiko kurba |
| «Tenperaturak erreakzioa azkartzen du talka gehiago daudelako bakarrik» | Eragin nagusia da molekula gehiagok gainditzen dutela aktibazio-energia | Abiaduren laukia: eremu berdea % 12tik (T = 1) % 81era (T = 10) pasatzen da, azkartasuna baino askoz gehiago (×3,2) |
| «Katalizatzailea gastatu egiten da edo produktuaren parte bihurtzen da» | Katalizatzailea osorik berreskuratzen da eta berriro jarduten du | Erreakzio-modua 4 katalizatzailerekin: «K: 4» zenbaketa ez da aldatzen eta C-k A eta B-ren atomoak baino ez ditu |
| «Katalizatzailearekin produktu gehiago lortzen da» | Katalizatzaileak azkartu baino ez du egiten; produktua erreaktibo mugatzaileak mugatzen du | Erreakzio-modua 16 A, 10 B eta 4 katalizatzailerekin: C 10ean gelditzen da, minutu erdi baino lehen; katalizatzailerik gabe askoz gehiago beharko luke, baina muga bera izango litzateke |
| «Erreakzio-abiadura konstantea da amaitu arte» | Abiadura txikitu egiten da erreaktiboak kontsumitu ahala | Erreakzio-modua 30 A, 30 B eta 4 katalizatzailerekin: grafikoa 2-4 erreakzio/s-tan hasten da eta 0rantz jaisten da 20-30 s-tan |

## Ezagutzea komeni diren sinplifikazioak

Simulazioak talka eraginkorraren bi baldintzei ematen die lehentasuna, eta horretarako energia, katalizatzailea eta eskala sinplifikatzen ditu. Komeni da lizentzia horiek ezagutzea, nahi gabe ideia okerrak ez indartzeko.

1. **Aktibazio-energia abiadura-atalase bat da.** A eta B batek erreakzionatzen dute haien abiadura erlatiboak 5,8 px fotogramako gainditzen badu. Gainera, haien gune erreaktiboak 11 px baino gutxiagora geratu behar dira. Ez da energia zinetikorik kalkulatzen, ezta talka-lerroan zeharreko osagaia erabiltzen ere. Batxilergoko 2. mailan komeni da esatea.
2. **Laukiak bikoteak zenbatzen ditu, ez talkak.** Ausazko molekula-bikote baten abiadura erlatiboa marrazten du, hori baita erreakzioak Ea-rekin konparatzen duena. Baina bikote azkarrek maizago egiten dute talka; beraz, benetan gertatzen diren talken artean energia nahikoa dutenen zatikia eremu berdea baino zertxobait handiagoa da.
3. **Banaketa bi dimentsiokoa da.** Molekulak plano batean mugitzen dira eta kurba f(v) ∝ v·e^(−v²/2σ²) da, σ = 2·√(2T) abiadura erlatiborako (2·√T molekula bakoitzarentzat). Ez da Maxwell-Boltzmannen banaketa hiru dimentsiotan. Haren forma kualitatiboa, ordea, zuzena da.
4. **Tenperatura 1etik 10erako eskala bat da.** Ez dira kelvinak ezta Celsius graduak ere. Azkartasuna √T-rekin hazten da, T-ren proportzionala den batez besteko energia zinetikoarekin bat. Ez da komeni mailak benetako tenperaturetara bihurtzea.
5. **Katalizatzaileak hesia ezabatzen du.** A eta B 115 px-tik erakartzen ditu eta bere bi barrunbeetan eusten ditu. 28 fotogramaren ondoren erreakzionatzen dute, energia- eta orientazio-baldintzarik gabe. Benetako katalizatzaile batek aktibazio-energia txikitzen du, ez du anulatzen. Horregatik, bide katalizatua ia ez da tenperaturaren araberakoa.
6. **Erreakzioa itzulezina da eta ez du energiarik trukatzen.** C ez da inoiz A eta B-tan deskonposatzen, eta ez da berorik askatzen ez xurgatzen. Ez du balio oreka kimikoa edo erreakzio exotermikoak azaltzeko.
7. **Kontzentrazioa ganberako molekula kopurua da.** Ganberaren tamaina pantailaren araberakoa da. Konparazioan ganbera bakoitzak erdia neurtzen du; beraz, 16 molekula kontzentrazio bikoitzaren baliokideak dira. Zenbakiak aldatu egiten dira eramangarriaren eta proiektorearen artean.
8. **Simulazioko segundoak.** Abiadura 60 fotogramako erreakzio kopuruan neurtzen da, «simulazioko segundo» bat. Ekipo motel batean animazioa poliki doa, baina zenbakiak berdinak dira; grafikoak eta laguntzak adierazten dute. Hain molekula gutxirekin, balioak zenbaki oso txikiak eta oso irregularrak dira.
9. **Talka-moduan energia maila-koska bat da.** Molekula bakoitza 1,5·√E abiaduran ateratzen da; beraz, abiadura erlatiboak 5,8ko atalasea 4. mailatik aurrera gainditzen du (3. maila: 5,2; 4. maila: 6,0). Ez dago abiaduren banaketarik: energia finkoko talka bakar bat da.

## Ikasleen jarduera-fitxa

[Jarduera-fitxak](https://simulaciencia.es/eu/fitxak/velocidad-reaccion/) iragarri, behatu eta azaldu eskema jarraitzen du. Jarduera bakoitzak simulazioa prestatuta irekitzen duen esteka du; beraz, informatika-gelan, tabletekin edo etxeko lan gisa erabil daiteke. Word eta LibreOffice formatuetan deskargatzen da, egokitu ahal izateko.

| Maila | Jarduerak | Gutxi gorabeherako iraupena |
| --- | --- | --- |
| DBHko 3. maila | Hasi aurretik, 1., 3. eta 4. jarduerak, Aplikatu ikasitakoaren 1.etik 3.era bitarteko galderak eta Berrikusi zure ideiak | Saio bat |
| DBHko 4. maila | Hasi aurretik, 1.etik 6.era bitarteko jarduerak, Aplikatu ikasitakoa, Berrikusi zure ideiak eta Autoebaluazioa | 50-55 minutuko saio bat |
| Batxilergoko 2. mailako Kimika | 2., 3. eta 5. jarduerak eta Gehiago jakiteko | Saio bat |

«Hasi aurretik» taulak erreakzioei buruzko bost aurretiazko ideia biltzen ditu. Hobe da hasieran ez zuzentzea: ikasleak «Berrikusi zure ideiak» atalean itzultzen dira hara. Simulazioa ausazkoa da: soluzioetako zenbakiak gutxi gorabeherakoak dira eta pantailaren tamainaren araberakoak.

### Soluzioak

| Atala | Soluzioa |
| --- | --- |
| Hasi aurretik | Denak gezurrak. a) Talka eraginkorrek bakarrik erreakzionatzen dute (1. eta 2. jarduerak). b) Atomoak berrantolatu egiten dira; ez dira agertzen ez desagertzen (1. jarduera). c) Molekulak ez dira handitzen; azkarrago mugitzen dira eta energia handiagoz egiten dute talka (3. jarduera). d) Katalizatzailea ez da gastatzen (5. jarduera). e) Abiadura jaitsi egiten da erreaktiboak gastatu ahala (6. jarduera) |
| 1. jarduera | 5 eta 8 erreakzio artean minutu batean, askoz talka gehiagorekin. C molekula batek bi atomo urdin (A-tik) eta bi laranja (B-tik) ditu: atomoak berrantolatu egiten dira. Talka guztiek ez dute erreakziorik sortzen |
| 2. jarduera | 1. kasua: eraginkorra. 2. kasua: ez-eraginkorra, orientazioak huts egiten du. 3. kasua: ez-eraginkorra, energiak huts egiten du. 4. kasua: eraginkorra. Baldintzak: energia nahikoa (gutxienez aktibazio-energia, 4. maila) eta orientazio egokia (gune erreaktiboak ukitzen dira) |
| 3. jarduera | 2 tenperaturan, 7 erreakzio inguru; 8 tenperaturan, 12 inguru. Zati berdea txikia da 2 tenperaturan eta handia 8 tenperaturan. Berotzean, molekulak azkarrago mugitzen dira: maizago egiten dute talka eta talken zati handiago batek gainditzen du aktibazio-energia |
| 4. jarduera | 4 erreakzio inguru 8 + 8-rekin eta 17 inguru 24 + 24-rekin. Bolumen berean molekula gehiagok maizago egiten dute talka. Adibidez: lixiba kontzentratuak diluituak baino lehenago jarduten du |
| 5. jarduera | 4 katalizatzaileko ganberak 15-25 s-tan agortzen du erreaktiboa; besteak % 50etik behera geratu ohi da. 4 katalizatzaile daude hasieran eta amaieran. Katalizatzaileak aktibazio-energia txikiagoko erreakzio-bide bat irekitzen du, eta erreakzio bakoitza amaitzean berreskuratu egiten da |
| 6. jarduera | Abiadura handiagoa da hasieran, eta zeroraino jaisten da amaieran, A edo B geratzen ez denean. Moteldu egiten da gero eta erreaktibo gutxiago dagoelako eta talka gutxiagotan egiten dutelako (kontzentrazio txikiagoa) |
| Aplikatu ikasitakoa | 1) Tenperatura baxuan molekulak motelago mugitzen dira eta talka eraginkor gutxiago daude: elikagaiak hondatzen dituzten erreakzioak motelago doaz. 2) Zerrautsak askoz azalera handiagoa du oxigenoarekin kontaktuan: talka gehiago. 3) Tenperatura handiagoarekin, talka gehiago eta energetikoagoak. 4) Gas toxikoak hain kaltegarriak ez diren beste batzuk bihurtzen dituzten erreakzioak azkartzen ditu; ez da gastatzen, beraz, ez da erabilera bakoitzean berritu behar |
| Gehiago jakiteko | 1) Zati berdea % 12tik (1 tenperatura) % 81era (10 tenperatura) pasatzen da: Ea baino energia handiagoa duten talken zatikia asko hazten da T-rekin, e<sup>−Ea/RT</sup> faktoreak adierazten duen bezala. 2) B da mugatzailea: C-ren 10 molekula sortzen dira eta A-ren 6 geratzen dira soberan; bihurketak % 100 adierazten du |
