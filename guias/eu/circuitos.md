# Irakaslearen gida: zirkuitu elektrikoen simulazioa

## Laburpena

Zirkuitu elektrikoen simulazioak korronte zuzeneko zirkuituak muntatzen ditu pila batekin, etengailu batekin eta bonbillekin edo erresistentziekin, eta hartzaile bakoitzean haren tentsioa, intentsitatea eta potentzia erakusten ditu, elektroiak kableetan zehar mugitzen direla. Hiru modu ditu: Ohm-en legea, hartzaile batekin eta neurgailuekin; hartzaileak seriean; eta hartzaileak paraleloan. Euskadin DBHko 3. mailako Fisika eta Kimikan erabiltzen da batez ere, curriculumak han kokatzen baititu zirkuitu elektrikoak, eta noizbehinka DBHko 4. mailan eta Batxilergoko 1. mailan.

| Datua | Xehetasuna |
| --- | --- |
| Esteka | [jrgrijota.github.io/simulacion-circuitos](https://jrgrijota.github.io/simulacion-circuitos/) |
| Mailak | DBHko 3. maila, Fisika eta Kimika (erabilera nagusia); noizbehinkako erabilera DBHko 4. mailan eta Batxilergoko 1. mailan |
| Irakasgaia | Fisika eta Kimika |
| Gutxi gorabeherako iraupena | 15-20 minutu azalpenerako, simulazioa proiektatuta (bi saio 3. mailan) |
| Materiala | Proiektorea edo arbel digitala; nabigatzailean dabil, baita mugikorrean eta tabletan ere, ezer instalatu gabe. Pantaila estuetan kontrolak goian geratzen dira eta oihala behean; azaltzeko, hobe da pantaila handi bat |
| Aurretiko ezagutzak | Materia elektroiak dituzten atomoz osatuta dago. Ohm-en legerako, hiru magnitudeko formula batean askatzea eta grafiko bat irakurtzea |
| Irisgarritasuna | Gai iluna, argia eta kontraste handikoa (engranajearen botoia). «Elektroiak» botoia, animazioa ezkutatzeko. Zirkuituan sakatzen den guztia paneletik ere egin daiteke |

## Nola dabil simulazioa

Simulazioak hiru modu ditu, «Ohm-en legea», «Seriean» eta «Paraleloan», ezkerreko panelaren goialdean aukeratzen direnak. Hiruretan zirkuitua goian ikusten da eta, azpian, grafiko bat edo barra-diagrama batzuk. Aldaketak berehala ikusten dira: ez da botoirik sakatu behar zirkuituak «funtziona» dezan.

| Modua | Irakasleak zer kontrolatzen duen | Zer erakusten duen |
| --- | --- | --- |
| Ohm-en legea | «Erresistentzia (R)», 5etik 100 Ω-ra, 5eko urratsetan (20 Ω-n hasten da). «＋ Neurketa idatzi» botoia eta neurketak ezabatzekoa | Pila bat, etengailu bat, seriean dagoen amperemetro bat eta paraleloan voltmetro bat duen hartzaile bat. Aparatu bakoitzak bere irakurketa duen pantaila bat du. Azpian, intentsitate-tentsio grafikoa eta Ohm-en legearen koadroa, kalkuluarekin, adibidez «I = 6,00 V / 20 Ω = 0,300 A» |
| Seriean | Hartzaile kopurua (2 edo 3), «R₁», «R₂» eta «R₃» erresistentziak, 5etik 100 Ω-ra (10, 20 eta 30 Ω-n hasten dira), eta «Konektatutako hartzaileak» R₁, R₂ eta R₃ botoiak | Hartzaileak bata bestearen atzetik goiko kablean. Bakoitzaren ondoan, haren R, V, I eta P. Azpian, tentsioen (V) eta intentsitateen (A) diagramak |
| Paraleloan | Seriean moduko kontrol berberak | Hartzaile bakoitza bere adarrean, goiko eta beheko kableen artean, bere balioak ondoan dituela eta barra-diagrama berberekin |
| Hiru moduetan | «Pilaren tentsioa», 0tik 12 V-ra, 0,5eko urratsetan (6,0 V-n hasten da). Etengailua. Hartzaile mota: bonbillak edo erresistentziak | Bonbillek zenbat eta potentzia handiagoa izan, orduan eta gehiago distiratzen dute; erresistentziak gori jartzen dira. Zirkuitua irekita dagoenean, korronterik ez dabilela (I = 0) dioen ohar bat agertzen da |

Etengailua paneletik edo zirkuituan bertan sakatuta irekitzen eta ixten da. Seriean eta paraleloan, hartzaile bat kendu eta berriro jartzen da «Konektatutako hartzaileak» botoiekin edo zirkuituan sakatuta; haren lekuan bi borne hutsak eta kendu dela adierazten duen errotulu bat geratzen dira.

Lau elementuk eusten diote azalpenari:

- **Elektroiak.** «−» zeinua duten puntu urdin batzuek kableak zeharkatzen dituzte −-tik +-ra, azkarrago intentsitatea handiagoa den lekuan. Beti daude kable guztietan: zirkuitua irekitzean gelditu egiten dira, baina ez dira desagertzen. «I = …» duen gezi laranja batek korrontearen noranzko konbentzionala markatzen du, +-tik −-ra pilaz kanpo. Oihalaren goiko eskuineko «Elektroiak» botoiak ezkutatu egiten ditu.
- **Zirkuituaren errotuluak.** Pilak bere tentsioa eta poloak erakusten ditu. Hartzaile bakoitzak «R₁ = 10 Ω» erakusten du, eta azpian (edo eskuinean) «V₁», «I₁» eta «P₁». Etengailua irekita eta zirkuituan hutsune bakarra dagoela, haren muturren arteko tentsioa irakurtzen da, adibidez «V = 6,00 V».
- **I-V grafikoa.** «Ohm-en legea» moduan, idatzitako neurketa bakoitza puntu bat da. Erresistentzia bakoitzak bere kolorea eta bere I = V / R zuzena ditu; uneko hartzailearena etena da, eta zirkulu batek funtzionatzen ari den puntua markatzen du. Intentsitate-eskala bere kabuz egokitzen da.
- **Barra-diagramak.** Seriean eta paraleloan, barra bat dago hartzaile bakoitzeko, eta beste bat pilarentzat (tentsioak) edo guztirakoarentzat (intentsitateak). Azkena besteen batura denean, pilatuta marrazten da, V₁, V₂, V₃ edo I₁, I₂, I₃ zatiekin. Goiko eskuinean betetzen den araua gogorarazten da, adibidez «V = V₁ + V₂ + V₃».

«Zirkuituaren neurketak» zabalgarria irekita dago hasieran. Tentsioa, intentsitate osoa eta erresistentzia ematen ditu (erresistentzia baliokidea seriean eta paraleloan), «Hartzaileak» taula bat, bakoitzaren eta guztirakoaren R, V, I eta P balioekin, eta gertatzen dena laburtzen duen esaldi bat. «Ohm-en legea» moduan, neurketen taula gehitzen du, 12 errenkadaraino eta V / I zutabearekin. Formulen zabalgarriak I = q / t, V = I · R eta haren askapenak, P = V · I, seriearen eta paraleloaren arauak eta unitateak biltzen ditu. Goiburuan, deskribapenak hiru arau nagusiak laburtzen ditu.

## Maila bakoitzean nola erabili

DBHko 3. mailan, simulazioak zirkuitu elektrikoa, haren elementuak eta magnitude elektrikoak neurgailuekin aurkezteko balio du, eta gero Ohm-en legea eta erresistentzien elkarketa seriean eta paraleloan lantzeko. DBHko 4. mailan eta Batxilergoko 1. mailan noizbehinka erabiltzen da. Aipatutako oinarrizko jakintzak Euskadiko curriculumekoak dira (77/2023 Dekretua, EHAA, 2023ko ekainaren 9a), testu ofizialaren euskarazko bertsioan. Izartxoak (*) ezinbesteko jakintza dela adierazten du, dekretuan bezala.

Euskadin zirkuitu elektrikoak DBHko 3. mailako jakintza dira; DBHko 1. eta 2. mailetako Natura Zientziek energia orokorrean lantzen dute, elektrizitatea aipatu gabe. Horregatik, bi sekuentziak 3. mailan daude, bi saiotan.

### DBHko 3. maila (Fisika eta Kimika): zirkuitua, magnitude elektrikoak eta Ohm-en legea

*14-15 urte · 9th grade AEBn · Year 10 Erresuma Batuan*

**Oinarrizko jakintzak.** C multzoa: «Materiaren izaera elektrikoa: gorputzen elektrizazioa, zirkuitu elektrikoak eta energia elektrikoa lortzeko bideak. Energia aurrezteko beharraren eta ingurumenaren kontserbazio jasangarriaren inguruko kontzientziazioa.*». A multzoa: «Hizkuntza zientifikoa: Nazioarteko Sistemaren unitateak eta hauen sinboloak. Oinarrizko tresna matematikoak hainbat zientzia- eta ikas-egoeratan.*» eta «Ikaskuntza zientifikorako hainbat ingurune eta baliabide, hala nola laborategia edo ingurune birtualak: materialak, substantziak eta tresna teknologikoak.*».

Curriculumak ez ditu Ohm-en legea, korronte zuzena edo erresistentzien elkarketa izenez aipatzen; 3. mailako «zirkuitu elektrikoen» ohiko edukia dira.

**Helburuak.** Zirkuitu baten elementuak eta haien ikurrak ezagutzea. Tentsioa, intentsitatea eta erresistentzia bereiztea, haien unitateekin. Amperemetroa eta voltmetroa nola konektatzen diren jakitea. Korronte zuzena noranzko bakarrean mugitzen diren elektroien mugimendu gisa azaltzea. Ohm-en legea esperimentalki egiaztatzea eta grafiko batean irudikatzea. Bi edo hiru erresistentziaren erresistentzia baliokidea kalkulatzea, seriean eta paraleloan.

**Azalpen-sekuentzia, 1. saioa: zirkuitua eta magnitudeak (15-20 min).**

1. «Ohm-en legea» modua, hasierako balioekin. Seinalatu pila, etengailua, kableak eta bonbilla, eta marraztu haien ikurrak arbelean. Pilaren plaka luzea + poloa da.
2. Ireki etengailua. Bonbilla itzali egiten da eta elektroiak gelditu egiten dira, baina kableetan jarraitzen dute: ez dira pilatik ateratzen, lehendik zeuden han. Amperemetroak 0,000 A markatzen du. Itxi berriro.
3. Irakurri aparatuak. Amperemetroak, seriean, intentsitatea neurtzen du: 0,300 A. Azaldu intentsitatea segundo bakoitzean pasatzen den karga dela (I = q / t): 0,3 C segundoko, 18 C minutu batean. Voltmetroak, bonbillarekin paraleloan, tentsioa neurtzen du: 6,00 V. Idatzi unitateak: volta (V), amperea (A) eta ohma (Ω).
4. Igo «Pilaren tentsioa» 12 V-ra. Intentsitatea bikoiztu egiten da (0,600 A), elektroiak bi aldiz azkarrago doaz eta bonbillak gehiago distiratzen du. Jaitsi 0 V-ra: pilak ez ditu elektroiak bultzatzen eta ez dago korronterik.
5. Azaldu korronte zuzena: elektroiak beti noranzko berean mugitzen dira, −-tik +-ra. Hitzarmenez, korrontearen noranzkoa aurkakoa da, +-tik −-ra, gezi laranjak markatzen duen bezala.
6. Igaro «Seriean» modura eta gero «Paraleloan» modura, eta kendu bakoitzean R₂ bonbilla. Seriean guztiak itzaltzen dira; paraleloan besteak piztuta jarraitzen dute. Galdetu nola egongo diren konektatuta etxeko argiak.

**Azalpen-sekuentzia, 2. saioa: Ohm-en legea eta erresistentzien elkarketa (15-20 min).**

1. «Ohm-en legea» modua, R = 20 Ω-rekin. Planteatu galdera: nola aldatzen da intentsitatea tentsioa aldatzean? Eraman tentsioa 2, 4, 6, 8, 10 eta 12 V-ra, eta sakatu «＋ Neurketa idatzi» bakoitzean. Taulak 0,100, 0,200, 0,300, 0,400, 0,500 eta 0,600 A ematen ditu, eta V / I zutabeak beti 20 Ω balio du.
2. Begiratu grafikoari: puntuek jatorritik igarotzen den zuzen bat osatzen dute. Tentsioa eta intentsitatea proportzionalak dira, eta konstantea erresistentzia da: V = I · R.
3. Aldatu R = 40 Ω-ra eta idatzi 4, 8 eta 12 V: 0,100, 0,200 eta 0,300 A. Zuzen berriak maldaren erdia du (0,025 A/V, 0,050 A/V-ren aldean): erresistentzia handiagoarekin, korronte gutxiago pasatzen da tentsio berarekin.
4. Planteatu problema bat: zer erresistentziak pasarazten ditu 0,240 A 12 V-ko pila batekin? R = 12 / 0,24 = 50 Ω. Egiaztatu graduatzailearekin.
5. «Seriean» modua, hasierako balioekin (6,0 V; 10, 20 eta 30 Ω). Intentsitatea berdina da hiruretan, 0,100 A, eta tentsioek, 1, 2 eta 3 V, pilaren 6 V-ak batzen dituzte: pilaren barra pilatuta dago. Erresistentzia baliokidea = 10 + 20 + 30 = 60 Ω, eta I = 6 / 60 = 0,100 A. Kendu R₂: bide bakarra mozten da eta ez dabil korronterik bateetatik ere; borne hutsen artean 6,00 V daude.
6. «Paraleloan» modua, balio berberekin. Guztiek 6 V dituzte, eta intentsitateek, 0,600, 0,300 eta 0,200 A, 1,100 A batzen dituzte. 1 / R baliokidea = 1/10 + 1/20 + 1/30; beraz, R baliokidea = 5,45 Ω, txikiena baino txikiagoa. Kendu R₂: beste adarrak ez dira aldatzen, eta intentsitate osoa 0,800 A-ra jaisten da (R baliokidea = 7,5 Ω).

### DBHko 1. eta 2. mailak (Natura Zientziak): erabilera mugatua

*12-14 urte · 7th-8th grade AEBn · Year 8-9 Erresuma Batuan*

C multzoak «Energiaren etxeko erabilerarekin eta erabilera industrialarekin zerikusia duten hipotesien diseinu eta egiaztapen esperimentala, energiaren forma guztiak eta horien arteko eraldaketak aintzat hartuta.*» jakintza du, elektrizitatea izenez aipatu gabe. Simulazioak, kalkulurik gabe, bonbillak energia elektrikoa argi eta bero bihurtzen duela erakusteko balio dezake (3. mailako lehen saioko 1., 2. eta 6. urratsak).

### DBHko 4. maila (Fisika eta Kimika): noizbehinkako erabilera

*15-16 urte · 10th grade AEBn · Year 11 Erresuma Batuan*

C multzoan agertzen da «Energia gure munduan: eguneroko bizitzan kontsumitutako energiaren balioespena, informazio egiaztatua bilatuz, esperimentatuz eta arrazoiketa zientifikoa eginez […].*». Simulazioak hartzaile bakoitzaren potentzia ematen du (P = V · I), eta kontsumitutako energia E = P · t formularekin balioesteko balio du. Adibidez, «Ohm-en legea» moduko bonbillak, 6 V-rekin eta 20 Ω-rekin, 1,80 W kontsumitzen ditu; ordubetean 1,80 × 3600 = 6480 J dira. 20 Ω-ko hiru bonbilla berdinekin 6 V-tan, paraleloan bakoitzak 1,80 W kontsumitzen ditu, eta seriean 0,20 W baino ez: bederatzi aldiz gutxiago; horregatik distiratzen dute askoz gutxiago seriean. Ez du energia kWh-tan lantzen, ezta fakturaren kostua ere.

### Batxilergoko 1. maila: noizbehinkako errepasoa

*16-17 urte · 11th grade AEBn · Year 12 Erresuma Batuan*

G multzoak «Lan- eta potentzia-kontzeptuak: eguneroko ingurunearen sistema mekanikoen edo elektrikoen energia-kontsumoari eta errendimenduari buruzko hipotesiak egitea» jakintza du. «Hartzaileak» taulak potentzia osoa hartzaile bakoitzaren potentzien batura dela egiaztatzeko aukera ematen du, bai seriean bai paraleloan, eta P = V · I = I² · R = V² / R errepasatzeko.

## Zuzentzen laguntzen dituen ideia okerrak

Simulazioak batez ere korrontea hartzaileetatik pasatzean «gastatzen» delako ideia du jomugan, baita pilak beti korronte bera ematen duelako ideia ere. Errenkada bakoitzak ohiko aurretiazko ideia bat eta simulazioarekin nola desegin adierazten du.

| Ikasleen ideia | Ideia zuzena | Nola erakutsi |
| --- | --- | --- |
| «Korrontea bonbilletan gastatzen da: azkenera gutxiago iristen da» | Seriean intentsitatea berdina da zirkuituko puntu guztietan; eraldatzen dena energia da | «Seriean» modua: I₁ = I₂ = I₃ = 0,100 A, eta elektroiak abiadura berean doaz bonbilla bakoitzaren aurretik eta ondoren |
| «Elektroiak pilatik ateratzen dira eta denbora behar dute bonbillara iristeko» | Elektroiak kable guztietan daude lehendik; pilak denak batera jartzen ditu mugimenduan | Ireki eta itxi etengailua: elektroiak zirkuitu osoan batera gelditzen eta abiatzen dira |
| «Pilak beti intentsitate bera ematen du» | Pilak tentsioa mantentzen du; intentsitatea zirkuituaren erresistentziaren mende dago | 6 V-rekin: 0,300 A 20 Ω-ko hartzaile batekin, 0,100 A hiru seriean, eta 1,100 A hiru paraleloan |
| «Bonbilla gehiagorekin, erresistentzia handiagoa» | Seriean erresistentzia baliokidea handitu egiten da; paraleloan, txikitu | Paraleloan 2 hartzailerekin: 6,67 Ω eta 0,900 A; 3rekin: 5,45 Ω eta 1,100 A |
| «Bonbilla bat erretzen bada, denak itzaltzen dira» | Seriean bakarrik; paraleloan adar bakoitza independentea da | Kendu R₂ «Seriean» eta «Paraleloan» moduetan |
| «Tentsioa eta intentsitatea gauza bera dira» | Tentsioa egon daiteke korronterik gabe | «Ohm-en legea» modua etengailua irekita: amperemetroak 0,000 A markatzen du, eta etengailuaren azpian «V = 6,00 V» irakurtzen da |
| «Erresistentzia handieneko bonbillak beti distiratzen du gutxiago» | Seriean erresistentzia handienekoak distiratzen du gehiago (P = I² · R); paraleloan, txikienekoak | Hasierako balioak: seriean R₃-k distiratzen du gehiago (0,30 W); paraleloan, R₁-ek (3,60 W) |
| «Elektroiak +-tik −-ra doaz, korrontea bezala» | Noranzko konbentzionala +-tik −-ra da; elektroiak −-tik +-ra doaz | Gezi laranja eta elektroi urdinak aurkako noranzkoetan doaz |

## Ezagutzea komeni diren sinplifikazioak

Simulazioak seriearen eta paraleloaren arauak ikustea lehenesten du, eta horretarako elementu guztiak idealtzat hartzen ditu. Komeni da lizentzia horiek ezagutzea, nahi gabe ideia okerrak ez indartzeko.

1. **Pila ideala.** Ez du barne-erresistentziarik: beti ematen du bere tentsioa, korronte bat edo beste pasatu. 5 Ω-ko hiru hartzailerekin paraleloan 12 V-tan 7,2 A dabiltza, benetako pila batek mantendu ezingo lukeen zerbait. Ez dira zirkuitulaburrak edo fusibleak simulatzen.
2. **Hartzaile ohmikoak.** Bonbillek erresistentzia konstantea dute. Benetako harizpi-bonbilla batean erresistentzia asko handitzen da berotzean; beraz, haren I-V grafikoa ez da zuzen bat. Ohm-en legea ondo betetzen da tenperatura konstantean dauden erresistentzietan.
3. **Kable, etengailu eta aparatu idealak.** Kableek eta etengailuak ez dute erresistentziarik; amperemetroak ere ez, eta voltmetroak ez du korronterik pasatzen uzten.
4. **Elektroien abiadura eskalaz kanpo.** Benetako kable bateko elektroiek, batez beste, milimetro-zatiak aurreratzen dituzte segundoko. Animazioan abiadura intentsitatearekiko proportzionala da (70 px/s ampere bakoitzeko), eta 4,6 A ingurutik aurrera muga bat du, begiarekin jarraitu ahal izateko. Elektroien arteko tartea beti berdina da.
5. **Distira orientagarria.** Distira potentziarekin hazten da, baina saturatu egiten da (P / (P + 0,5 W)), 0,1 W eta 3 W bereizi ahal izateko. Ez da igorritako argiaren neurria.
6. **Tentsioa hutsuneetan.** Seriean hutsune bakarra dagoenean (hartzaile bat kenduta edo etengailua irekita), haren muturren artean pilaren tentsio osoa dago. Bi hutsune batera daudenean, tentsio hori ez dago definituta zirkuitu ideal batean, eta «—» erakusten da.
7. **Korronte zuzena bakarrik.** Ez dago korronte alternorik, ez 230 V-ko etxeko sarerik, ez kWh-tako kontsumorik. Erresistentziak 5 Ω-ka doaz, eta tentsioa 0,5 V-ka.

## Ikasleen jarduera-fitxa

[Jarduera-fitxak](https://simulaciencia.es/eu/fitxak/circuitos/) iragarri, behatu eta azaldu eskema jarraitzen du. Jarduera bakoitzak simulazioa prestatuta irekitzen duen esteka du; beraz, informatika-gelan, tabletekin edo etxeko lan gisa erabil daiteke. Word eta LibreOffice formatuetan deskargatzen da, egokitu ahal izateko.

| Maila | Jarduerak | Gutxi gorabeherako iraupena |
| --- | --- | --- |
| DBHko 3. maila | Fitxa osoa, Gehiago jakiteko izan ezik | Bi saio, edo bat ariketak etxeko lan gisa egiten badira |
| DBHko 4. maila | 4.etik 6.era bitarteko jarduerak eta Gehiago jakiteko, potentzia eta energiarekin errepasatzeko | Saio bat |
| Batxilergoko 1. maila | 4. eta 5. jarduerak eta Gehiago jakiteko | 20-25 minutu |

«Hasi aurretik» taulak korronte elektrikoari buruzko sei aurretiazko ideia biltzen ditu. Hobe da hasieran ez zuzentzea: ikasleak «Berrikusi zure ideiak» atalean itzultzen dira hara. Simulazioaren balioak zehatzak dira; beraz, soluzioak ere bai.

### Soluzioak

| Atala | Soluzioa |
| --- | --- |
| Hasi aurretik | Denak gezurrak. a) Seriean intentsitatea berdina da bonbilla guztietan (4. jarduera). b) Elektroiak kable guztietan daude lehendik eta batera abiatzen dira (1. jarduera). c) Intentsitatea erresistentziaren mende dago (3. jarduera). d) Paraleloan erresistentzia baliokidea txikitu egiten da (5. jarduera). e) Seriean bakarrik; paraleloan besteak piztuta jarraitzen dute (4. eta 5. jarduerak). f) Etengailua irekita tentsioa dago, baina ez korronterik (1. jarduera) |
| 1. jarduera | Pila: elektroiak mugitzen dituen energia ematen du; 6 V etengailua itxita eta irekita. Amperemetroa: intentsitatea neurtzen du, seriean; 0,300 A itxita eta 0,000 A irekita. Voltmetroa: bonbillaren tentsioa neurtzen du, paraleloan; 6,00 V itxita eta 0 V irekita (pilaren tentsioa etengailuaren borneen artean geratzen da). Elektroiak gelditu egiten dira, baina kableetan jarraitzen dute. Amperemetroak korronte osoa pasatzen utzi behar du; voltmetroak zirkuituko bi puntu alderatzen ditu. Elektroiak −-tik +-ra doaz; hitzarmenez, korrontea +-tik −-ra doa |
| 2. jarduera | 0,100, 0,200, 0,300, 0,400, 0,500 eta 0,600 A; V / I = 20 Ω beti. Grafikoa jatorritik igarotzen den zuzen bat da: V eta I zuzenki proportzionalak dira. Konstantea erresistentzia da: V = I · R |
| 3. jarduera | 10 Ω: 0,600 A eta 3,60 W. 20 Ω: 0,300 A eta 1,80 W. 30 Ω: 0,200 A eta 1,20 W. 60 Ω: 0,100 A eta 0,60 W. R handitzean, intentsitatea eta distira txikitu egiten dira. Pilak tentsioa mantentzen du; intentsitatea erresistentziaren mende dago: I = V / R |
| 4. jarduera | R₁: 10 Ω, 1 V, 0,100 A, 0,10 W. R₂: 20 Ω, 2 V, 0,100 A, 0,20 W. R₃: 30 Ω, 3 V, 0,100 A, 0,30 W. Guztira: 60 Ω, 6 V, 0,100 A, 0,60 W. R₂ kentzean guztiak itzaltzen dira: bide bakarra mozten da, eta borne hutsen artean 6,00 V daude. Intentsitatea berdina da guztietan: korrontea ez da gastatzen, energia da eraldatzen dena. V = V₁ + V₂ + V₃ eta R baliokidea = R₁ + R₂ + R₃ |
| 5. jarduera | R₁: 10 Ω, 6 V, 0,600 A, 3,60 W. R₂: 20 Ω, 6 V, 0,300 A, 1,80 W. R₃: 30 Ω, 6 V, 0,200 A, 1,20 W. Guztira: 5,45 Ω, 6 V, 1,100 A, 6,60 W. R₂ kentzean besteak berdin jarraitzen dute, eta intentsitate osoa 0,800 A-ra jaisten da (7,5 Ω). Guztiek pilaren tentsioa dute; I = I₁ + I₂ + I₃. R baliokidea txikiena baino txikiagoa da: adar berri bakoitza korrontearentzako bide bat gehiago da |
| 6. jarduera | Seriean: 2 V, 0,100 A eta 0,20 W bakoitza; guztira 0,100 A; bat kentzean guztiak itzaltzen dira. Paraleloan: 6 V, 0,300 A eta 1,80 W bakoitza; guztira 0,900 A; besteak piztuta jarraitzen dute. Etxeetan paraleloan konektatzen dira: aparatu bakoitzak sarearen tentsio osoa jasotzen du eta funtzionatzen du beste bat itzali edo hondatu arren |
| Aplikatu ikasitakoa | 1) I = 9 V / 30 Ω = 0,300 A. 2) R = 12 V / 0,240 A = 50 Ω. 3) R = 15 + 45 = 60 Ω; I = 12 / 60 = 0,200 A; V₁ = 0,2 · 15 = 3 V eta V₂ = 0,2 · 45 = 9 V (12 V batzen dituzte). 4) I₁ = 12 / 15 = 0,800 A; I₂ = 12 / 45 ≈ 0,267 A; I = 1,067 A; R = 12 / 1,067 ≈ 11,25 Ω (edo 1/R = 1/15 + 1/45) |
| Gehiago jakiteko | 1) E = 1,80 W · 3600 s = 6480 J. 2) Bederatzi aldiz: paraleloan bakoitzak seriean baino hiru aldiz tentsio eta intentsitate handiagoa du (1,80 W eta 0,20 W). 3) Seriean R₃-k distiratzen du gehiago (0,30 W), erresistentzia handienekoak, P = I² · R delako I berarekin; paraleloan R₁-ek distiratzen du gehiago (3,60 W), erresistentzia txikienekoak, P = V² / R delako V berarekin. Seriean ez da egia |
