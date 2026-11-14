# Irakaslearen gida: orbiten eta grabitazioaren simulazioa

## Laburpena

Simulazioak mekanika orbitaleko lau agertoki biltzen ditu: Newtonen kanoi-bala, Eguzki-sistema, Keplerren legeak eta izar bitarrak. Euskadin Batxilergoko 2. mailako Fisikan erabiltzen da batez ere, eta Batxilergoko 1. mailan eta DBHko 3. eta 4. mailetan ere badu aplikaziorik.

| Datua | Xehetasuna |
| --- | --- |
| Esteka | [jrgrijota.github.io/simulacion-orbitas](https://jrgrijota.github.io/simulacion-orbitas/) |
| Mailak | Batxilergoko 2. maila, Fisika (erabilera nagusia); Batxilergoko 1. maila; DBHko 4. eta 3. mailak |
| Irakasgaia | Fisika eta Kimika; Fisika (Batxilergoko 2.) |
| Gutxi gorabeherako iraupena | 15-20 minutu azalpenerako, simulazioa proiektatuta |
| Materiala | Proiektorea edo arbel digitala; nabigatzailean dabil, baita mugikorrean eta tabletan ere, ezer instalatu gabe. Pantaila estuetan oihala goian geratzen da eta kontrolak behean; azaltzeko, hobe da pantaila handi bat |
| Aurretiko ezagutzak | Abiadura eta indarra; pisua Lurraren erakarpen gisa. Batxilergoan, bektoreak eta energia mekanikoa |
| Irisgarritasuna | Gai iluna bakarrik. Newtonen moduan teklatuko lasterbideak daude: Enter-ek jaurti egiten du, Zuriuneak pausatu eta R-k berrabiarazi |

## Nola dabil simulazioa

Ezkerreko panelaren goiko zabalgarriak modua aukeratzen du: «Newtonen kanoi-bala», «Eguzki-sistema», «Keplerren legeak» edo «Izar bitarrak». Guztiek dituzte «⏸ Pausatu» eta «↺ Berrabiarazi» botoiak eta denbora azkartzen duen «Abiadura» errenkada bat.

| Modua | Irakasleak zer kontrolatzen duen | Zer erakusten duen |
| --- | --- | --- |
| Newtonen kanoi-bala | «Hasierako abiadura» graduatzailea, 0,58tik 12,65 km/s-ra (6,90 km/s-n hasten da). «Vc ≈ 6.89 km/s» eta «Ve ≈ 9.75 km/s» botoiak, «▶ Jaurti» eta 1×, 2×, 4× abiadura | Bala horizontalean irteten da 2017 km-ko altuerako mendi batetik. Arrastoa uzten du, eta «Egoera orbitala» panelak ibilbidea kalkulatzen du |
| Eguzki-sistema | Klik «Planetak» zerrendako planeta batean, 1×, 3×, 8×, 20× abiadura eta zooma (−, 1:1, +) | Zortzi planeta orbita zirkularretan. Bat aukeratzean, zerrendak T²/a³ ematen du eta oihalak a (AU-tan) eta T (urtetan) erakusten ditu |
| Keplerren legeak | «1. legea», «2. legea», «3. legea» botoiak. «Ardatzerdi handia (a)» graduatzailea, 0,40tik 1,30era, eta «Eszentrikotasuna (e)», 0,00tik 0,90era (1,00 eta 0,50ean hasten dira) | Orbita eliptikoan dagoen gorputz bat, Eguzkia foku batean duela. Legearen arabera: erradio bektorea, fokuak, perihelioa eta afelioa, edo T²/a³ zatidura |
| Izar bitarrak | «1. izarra (laranja)» eta «2. izarra (urdina)», 0,5etik 5,0 M☉-ra (2,0 eta 1,0ean hasten dira), eta «Distantzia», 0,8tik 3,0ra (1,6an hasten da) | Bi izar orbita zirkularrean masa-zentroaren inguruan (gurutze berdea, «CM»). Behean, sistemaren Ez, Ep eta E |

Lau elementuk eusten diote azalpenari:

- **«Egoera orbitala» panela.** Balaren hegaldian Abiadura, Altitudea, Ibilbidea, Energia ε, Perigeoa, Apogeoa, Periodoa eta orbita kopurua ematen ditu. Ibilbidea «Suborbitala», «Orbita zirkularra», «Orbita eliptikoa» edo «Ihes-abiadura» gisa sailkatzen da.
- **Vc eta Ve markak.** Graduatzaileak abiadura zirkularra eta ihes-abiadura markatzen ditu. Bi botoiek klik batekin finkatzen dituzte: 6,90 km/s eta 9,78 km/s uzten dituzte, graduatzailearen biribiltzeagatik.
- **Marrazkiko markatzaileak.** Balaren orbitan, puntu hori batek perigeoa markatzen du eta urdin batek apogeoa. Zirkulu berde etendun bat erreferentziako orbita zirkularra da.
- **Oihaleko zifrak.** Kepler moduan r, a eta T²/a³ agertzen dira. Bitarretan, beheko lerroak Ez, Ep eta E ematen ditu, eta E kontserbatu egiten da.

Modu bakoitzak txartel zabalgarri bat du, sartzean itxita: «Newtonen pentsamendu-esperimentua», «Keplerren III. legea (T² ∝ a³)», «Keplerren 3 legeak» eta «Masa-zentroa eta sistema bitarrak». Agertoki bakoitzaren teoria laburtzen dute.

## Maila bakoitzean nola erabili

DBHko 3. mailan, simulazioak grabitazioa naturaren indarretako bat bezala aurkezten du. DBHko 4. mailan, grabitazio unibertsalaren legea, pisua eta energia mekanikoa lantzen ditu. Batxilergoko 1. mailan, mugimendu zirkularrerako, jaurtiketa horizontalerako eta energia potentzialerako balio du. Batxilergoko 2. mailako Fisikan, eremu grabitatorioa, orbitak eta Keplerren legeak hartzen ditu. Aipatutako oinarrizko jakintzak Euskadiko curriculumekoak dira (77/2023 Dekretua DBHrako eta 76/2023 Dekretua Batxilergorako, EHAA, 2023ko ekainaren 9a), testu ofizialaren euskarazko bertsioan. Izartxoak (*) ezinbesteko jakintza dela adierazten du, dekretuan bezala.

DBHko 1. eta 2. mailetako Natura Zientziek Newtonen legeak lantzen dituzte, baina ez grabitazioa; horregatik, sarrera DBHko 3. mailan doa. Kontuan izan DBHko 4. mailako Fisika eta Kimika aukerakoa dela.

### DBHko 3. maila (Fisika eta Kimika): grabitaziorako sarrera

*14-15 urte · 9th grade AEBn · Year 10 Erresuma Batuan*

**Oinarrizko jakintzak.** D multzoa: «Fenomeno grabitatorioak, elektrikoak eta magnetikoak: naturaren indarrekiko lotura agerian uzten duten esperimentu errazak.*».

**Ebaluazio-irizpideak.** 1.1 (eguneroko fenomeno fisiko-kimiko garrantzitsuenak identifikatzea, ulertzea eta azaltzea) eta 2.1 (fenomenoak identifikatzean eta deskribatzean zientziaren berezko metodologiak erabiltzea).

Curriculumak ez du grabitazio unibertsalaren legea izenez aipatzen DBHko 3. mailan; 4. mailan agertzen da.

**Helburuak.** Objektuak erorarazten dituen grabitatea Ilargia eta planetak orbitan mantentzen dituen bera dela ulertzea. Jaurtiketa-abiadura ibilbidearekin erlazionatzea. Erakarpen grabitatorioa elkarrekikoa dela onartzea.

**Azalpen-sekuentzia (15-20 min).**

1. Kanoi-balaren modua. Jarri graduatzailea 3,45 km/s-an eta sakatu «▶ Jaurti». Bala hurbil erortzen da eta panelak «Lurraren kontrako talka» dio. Galdetu zergatik erortzen den.
2. Igo 5,75 km/s-ra eta jaurti. Bala askoz urrunago erortzen da. Galdetu zer gertatuko litzatekeen are azkarragoa balitz.
3. Sakatu «Vc ≈ 6.89 km/s» eta jaurti. Balak buelta ematen du lurra ukitu gabe: «Orbita zirkularra». Azaldu erortzen jarraitzen duela, baina Lurra erritmo berean kurbatzen dela.
4. Ireki «Newtonen pentsamendu-esperimentua» txartela eta irakurri. Ondorioztatu sagar bat erorarazten duen indarra satelite bat orbitan mantentzen duen bera dela.
5. Eguzki-sistemaren modua, 1× abiaduran. Seinalatu Lurrak segundo bat pasatxoan ematen duela buelta eta Neptunok 3 minutu baino gehiago behar dituela. Zenbat eta urrunago Eguzkitik, orduan eta motelagoa da orbita.
6. Amaitu Izar bitarrekin: bi izarrak mugitzen dira. Erakarpen grabitatorioa elkarrekikoa da, ez soilik «handiak txikiaren gainean» egiten duena.

### DBHko 4. maila (Fisika eta Kimika): grabitazio unibertsala, pisua eta energia mekanikoa

*15-16 urte · 10th grade AEBn · Year 11 Erresuma Batuan*

**Oinarrizko jakintzak.** D multzoa: «Grabitazio unibertsalaren legea: unibertsoa osatzen duten gorputzen arteko erakarpena. Pisua, kontzeptu fisiko gisa.*», «Eguneroko inguruneko indar nagusiak: pisua, normala, marruskadura, tentsioa edo bultzada […].*» eta «Gorputz baten mugimendua deskribatzen duten magnitude, ekuazio eta grafiko nagusien aurreikuspena eta egiaztapena […].*». C multzoa: «Energia: energiaren formei eta aplikazioei buruzko hipotesien formulazioa eta egiaztaketa, energiaren propietateetatik eta kontserbazio-printzipiotik abiatuta, eguneroko egoeretan energia mekanikoarekin lotutako problemak esperimentatzeko eta ebazteko oinarri gisa.*».

**Ebaluazio-irizpideak.** 1.1 (eguneroko fenomeno fisiko-kimikoak ulertzea eta zorrotz azaltzea), 1.2 (problemak lege egokiekin ebaztea, emaitzak zuzen eta zehatz adieraziz) eta 2.2 (modu esperimentalean edo deduktiboan egiazta daitezkeen erantzunak aurreikustea).

Curriculumak ez du mugimendu zirkular uniformea izenez aipatzen; «gorputz baten mugimendua deskribatzen duten magnitude nagusiak» lantzean sartzen da.

**Helburuak.** Pisua satelite baten ibilbidea kurbatzen duen indarra dela identifikatzea. Orbita zirkular bat mugimendu zirkular uniforme gisa deskribatzea. Energia mekanikoaren bidez azaltzea zergatik azkartzen den satelitea Lurrera hurbiltzean.

**Azalpen-sekuentzia (15-20 min).**

1. Kanoi-balaren modua hasierako balioarekin, 6,90 km/s. Jaurti. Panelak «Orbita zirkularra» markatzen du, abiadura konstantearekin, eta 127,9 min-ko «Periodoa». Mugimendu zirkular uniformea da.
2. Galdetu zer indarrek eragiten dion balari. Bere pisuak bakarrik. 2017 km-ko altueran g = 9,8 × (6371 / 8388)² ≈ 5,7 m/s² da. Ez dago «grabitaterik eza» grabitaterik ez dagoelako.
3. Berrabiarazi 8,05 km/s-rekin eta jaurti: «Orbita eliptikoa». Abiadura 3,75 km/s ingurura jaisten da apogeoan (11 642 km-ko altitudea) eta berriro igotzen da.
4. Seinalatu «Energia ε» −15,1 km²/s²-an finko geratzen dela buelta osoan. Igotzean, energia zinetikoa potentzial bihurtzen da, eta jaistean, alderantziz.
5. Probatu 10,35 km/s. Energia positiboa ateratzen da (+6,1 km²/s²) eta panelak «Grabitaziotik ihes» esanez amaitzen du. Bala ez da itzultzen.

### Batxilergoko 1. maila: mugimendu zirkularra, jaurtiketa horizontala eta energia potentziala

*16-17 urte · 11th grade AEBn · Year 12 Erresuma Batuan*

**Oinarrizko jakintzak.** E multzoa: «Mugimendu zuzen eta zirkularrean eragiten duten aldagaiak: magnitudeak eta erabilitako unitateak. […]» eta «Mugimendu konposatu baten ibilbidearen eta hori deskribatzeko magnitudeen arteko lotura.*». F multzoa: «Partikula baten gainean aplikatutako mekanika bektorialaren eta bere atseden- edo mugimendu-egoeraren arteko erlazioa […]». G multzoa: «Sistema sinple baten energia potentziala eta energia zinetikoa: sistema kontserbatzaile eta ez-kontserbatzaileetan energia mekanikoa kontserbatzeko eta mundu errealean objektuen mugimendua eragiten duten kausak aztertzeko aplikazioa.».

**Ebaluazio-irizpideak.** 1.1 (eguneroko gertakari fisiko-kimikoen analisian lege eta teoria zientifikoak aplikatzea), 1.2 (eguneroko egoeretatik abiatutako problemak ebaztea, soluzioak argudiatuz) eta 2.3 (hipotesiak baliozkotzean lege eta teoria ezagunak integratzea, aldagaien arteko lotura kualitatibo eta kuantitatiboak aplikatuz).

Batxilergoko 1. mailako curriculumak ez ditu izenez aipatzen indar zentripetua eta −GMm/r energia potentzial grabitatorioa; sekuentziak 2. mailako eremu grabitatoriorako urrats gisa aurkezten ditu.

**Helburuak.** Abiadura orbitala kalkulatzea, pisua indar zentripetuarekin berdinduz. Jaurtiketa horizontala orbita baten muga-kasu gisa ikustea. Ep = −GMm/r erabiltzea mgh-k balio ez duenean. Ihes-abiadura sartzea.

**Azalpen-sekuentzia (15-20 min).**

1. Kanoi-balaren modua 0,58 km/s-rekin, graduatzailearen minimoa. Bala horizontalean irteten da eta arku bat egiten du lurreraino, jaurtiketa horizontal batean bezala. Azaldu parabola g uniformea duen hurbilketa dela.
2. Idatzi orbita zirkularraren baldintza: GMm/r² = mv²/r; beraz, v = √(GM/r). GM = 3,986·10⁵ km³/s² eta r = 8388 km izanik, 6,89 km/s ateratzen da, «Vc» botoiaren balioa.
3. Sakatu «Vc», jaurti eta irakurri periodoa. T = 2πr/v erabiliz, 7646 s ≈ 127,4 min ateratzen da. Panelak 127,9 min ematen ditu graduatzaileak 6,90 km/s uzten dituelako.
4. Berrabiarazi 8,05 km/s-rekin. ε energia −15,1 km²/s²-an mantentzen da altitudea 9600 km aldatzen den bitartean. Azaldu altuera-aldaketa horiekin mgh-k ez duela balio eta −GMm/r erabili behar dela.
5. Sakatu «Ve ≈ 9.75 km/s» eta jaurti. Erakutsi Ve = √2 · Vc dela eta ε energia positiboarekin balak ihes egiten duela.

### Batxilergoko 2. maila (Fisika): eremu grabitatorioa eta Keplerren legeak

*17-18 urte · 12th grade AEBn · Year 13 Erresuma Batuan*

**Oinarrizko jakintzak.** B multzoa, «Eremu grabitatorioa»: «Eremu grabitatorio bateko objektu baten momentu angeluarra: kalkulua, indar zentralekiko erlazioa eta haren kontserbazioaren aplikazioa mugimenduaren azterketan.», «Eremu grabitatorio baten mende dagoen objektu baten energia mekanikoa: berak duen mugimendu mota deduzitzea, posizio, abiadura eta ibilbide mota desberdinen arteko desplazamenduetan dauden energia-balantzeen edo lanaren kalkulua.» eta «Mugimendu planetarioan egiaztatzen diren legeak eta sateliteen eta zeruko gorputzen mugimendura estrapolazioa.».

**Ebaluazio-irizpideak.** 1.2 (problemak modu esperimentalean eta analitikoan ebaztea, fisikaren printzipioak, legeak eta teoriak erabiliz) eta 2.1 (sistema naturalen eboluzioa aztertzea eta ulertzea, fisikaren ereduak, legeak eta teoriak erabiliz).

**Helburuak.** Ibilbideak energia mekanikoaren zeinuaren arabera sailkatzea. Keplerren bigarren legea momentu angeluarraren kontserbazioarekin erlazionatzea. Hirugarren legea eta masa zentralarekiko mendekotasuna egiaztatzea. Bi gorputzeko sistema bat masa-zentroaren inguruan deskribatzea.

**Azalpen-sekuentzia (15-20 min).**

1. Kanoi-bala «Vc»-rekin (6,90 km/s). Panelak ε = −23,7 km²/s² ematen du, ia −GM/2r = −23,8 km²/s². Berrabiarazi 8,05 km/s-rekin: ε = −15,1 km²/s² eta a = −GM/2ε ≈ 13 200 km. Perigeoko eta apogeoko zentrorako distantzien batez bestekoa da.
2. Bilatu ihesaren atalasea. 9,66 km/s-rekin, ε = −0,8 km²/s²: panelak «Orbita eliptikoa» adierazten du, 464 000 km inguruko apogeoarekin. 9,78 km/s-rekin, ε = +0,3 km²/s² eta balak ihes egiten du.
3. Keplerren legeen modua, «1. legea». Mugitu eszentrikotasuna 0,00tik 0,90era. Eguzkia foku batean geratzen da eta beste fokua hutsik dago. Perihelioa a(1 − e) eta afelioa a(1 + e).
4. «2. legea», e = 0,90 eta 1× abiadura. Gorputza perihelioan afelioan baino 19 aldiz azkarrago pasatzen da, r·v kontserbatzen delako: (1 + e)/(1 − e) = 19. Sektore horia azken aldiunean ekortutako azalera da: estua eta luzea afelioan, zabala eta laburra perihelioan, azalera berarekin.
5. «3. legea» eta mugitu a 0,40tik 1,30era. T 1,590etik 9,313ra pasatzen da, baina T²/a³ 39,48an geratzen da = 4π²/GM, GM = 1 izanik. Aldatu e: periodoa ez da aldatzen.
6. Izar bitarrak hasierako balioekin. Izarrek 0,53 eta 1,07 erradioetan egiten dute bira, beren masen alderantzizko arrazoian. Behean irakurtzen da Ez = 0,625, Ep = −1,250 eta E = −0,625. Orbita zirkularrean Ez = −E = −Ep/2.

## Zuzentzen laguntzen dituen ideia okerrak

Simulazioak batez ere orbitan grabitaterik ez dagoela dioen ideiari eta abiadura konstantean doazen orbita oso luzangen irudiari egiten die aurre. Errenkada bakoitzak ohiko aurretiazko ideia bat eta simulazioarekin nola desegin adierazten du.

| Ikasleen ideia | Ideia zuzena | Nola erakutsi |
| --- | --- | --- |
| «Orbitan ez dago grabitaterik» | Satelitea etengabeko erorketa askean dago; 2017 km-ko altueran g 5,7 m/s² ingurukoa da oraindik | Kanoi-bala «Vc»-rekin: bala beti erortzen da Lurrerantz, baina ez da inoiz lurrera iristen |
| «Orbitan jarraitzeko aurrerako indar bat behar da» | Grabitateak bakarrik eragiten du, zentrorantz zuzenduta; abiadura tangentea inertziaz mantentzen da | Kanoi-bala «Vc»-rekin: abiaduraren gezia tangentea da eta ez dago motorrik. Balak buelta ematen du gelditu gabe |
| «Azkarrago jaurtitzen bada, urrunago erortzen da, baina beti erortzen da azkenean» | Atalase batetik gora balak orbitatu egiten du, eta energia positiboarekin ihes egiten du | Kanoi-bala 5,75 km/s-rekin (talka), 6,90 km/s-rekin (orbita) eta 10,35 km/s-rekin (ihesa) |
| «Planeten orbitak elipse oso luzangak dira» | Ia guztiak ia zirkularrak dira; Lurrarenak e ≈ 0,017 du | Keplerren legeak, «1. legea», e = 0,02rekin: r erradio bektorea 0,98 eta 1,02 artean baino ez da aldatzen |
| «Eguzkia orbitaren erdian dago» | Eguzkiak fokuetako bat betetzen du; elipsearen erdigunea hutsik dago | «1. legea» e = 0,50ekin: Eguzkia foku batean dago eta beste fokua hutsik ikusten da |
| «Planeta bat beti abiadura berean doa» | Azkarrago doa Eguzkitik hurbil eta motelago urrun | «2. legea», e = 0,90 eta 1×: gorputza perihelioan afelioan baino 19 aldiz azkarrago pasatzen da |
| «Izar bikote batean, handia geldi dago eta txikiak bira egiten du» | Biek egiten dute bira masa-zentroaren inguruan | Bitarrak 2,0 eta 1,0 M☉-rekin: 0,53 eta 1,07 erradioak. 5,0 eta 0,5 M☉-rekin handia ia ez da mugitzen, Eguzkia bezala |

## Ezagutzea komeni diren sinplifikazioak

Simulazioak lehentasuna ematen dio funtsezko ideiak ikusteari, eta horretarako eskalak trinkotu eta unitate normalizatuak erabiltzen ditu. Komeni da lizentzia horiek ezagutzea, nahi gabe ideia okerrak ez indartzeko.

1. **2017 km-ko mendi bat.** Lurrak 120 px neurtzen ditu, 53,1 km/px-ko eskalan, eta mendiak 38 px. Horrela, bala zentrotik 8388 km-ra irteten da. Ez dago atmosferarik, marruskadurarik ez Lurraren errotaziorik. Komeni da esatea: lur mailan dagoen benetako kanoi batek 7,9 km/s inguru beharko lituzke.
2. **«Orbita zirkularra» tarte batekin.** Jaurti aurretik, graduatzailearen etiketak «Suborbitala» dio talka saihesten duen abiadura minimoaren azpitik (6,40 km/s inguru), «Ihes-abiadura» ihes-abiadura zehatzetik aurrera eta «Orbita zirkularra» 0,97·Vc eta 1,03·Vc artean, nahiz eta orbita horiek apur bat eliptikoak izan. «Egoera orbitala» panelak sailkapen zehatza ematen du hegaldian.
3. **Denbora azkartua.** 1× abiaduran, segundo erreal bakoitza 1500 s-ko hegaldia da. 127,9 min-ko orbita zirkularrak 5 s inguru irauten du pantailan.
4. **Eguzki-sistema, marrazkian distantzia trinkotuekin.** Orbitak zirkularrak eta uniformeak dira. Merkurio, Artizarra, Lurra eta Marte benetako distantzian marrazten dira; Jupiter, Saturno, Urano eta Neptuno, berriz, 3,20, 4,40, 5,50 eta 6,50 UA-ra, 5,20, 9,54, 19,19 eta 30,07ren ordez, sar daitezen. Kepler txartelak abisatu egiten du.
5. **Datuak benetakoak dira.** Zerrendak eta planetaren etiketak benetako ardatzerdia eta periodoa erabiltzen dituzte; beraz, T²/a³ 0,999 eta 1,001 artekoa da zortzi planetetan. Hirugarren legea guztiekin egiazta daiteke, baina ez pantailan distantziak neurtuz.
6. **Jauziak abiadura handietan.** Eguzki-sisteman, 20× abiaduran fotograma bakoitzak 0,27 urte egiten du aurrera. Merkuriok buelta bat baino gehiago ematen du fotograma bakoitzeko, eta motel edo atzeraka mugitzen dela dirudi. Kepler moduan e = 0,90ekin komeni da 1× erabiltzea, gorputzak jauzi egiten duelako perihelioan.
7. **Kepler, unitate normalizatuetan.** GM = 1 da; beraz, T²/a³ 39,48 (4π²) ateratzen da, ez 1, urteekin eta UA-rekin bezala. Eguzkia finko dago, masa infinitua balu bezala. «2. legea»-ren itzalduraren azken 40 fotogrametan ekortutako azalera da, orbita osoan berdina; ezin da beste bira bateko sektore batekin alderatu, azkena baino ez delako ikusten.
8. **Bitarrak, zirkularrak bakarrik eta benetako unitaterik gabe.** Graduatzaile-aldaketa bakoitzak orbita zirkular bat berrabiarazten du; ez dago bitar eszentrikorik. Masek M☉ diote, baina G = 1 da, eta distantziak eta energiek ez dute unitaterik. Izarren tamaina masarekin handitzen da, benetako eskalarik gabe.
9. **Izar arina pantailatik atera daiteke.** 3,0ko distantziarekin eta 5,0 eta 0,5 M☉-ko masekin, arinak masa-zentrotik 2,73 unitatera egiten du bira. Pantailak 2,27 unitate inguru baino ez ditu erakusten alde bakoitzera. Proiektatzeko, txikiagotu distantzia edo hurbildu bi masak.

## Ikasleen jarduera-fitxa

[Jarduera-fitxak](https://simulaciencia.es/eu/fitxak/orbitas/) iragarri, behatu eta azaldu eskema jarraitzen du. Jarduera bakoitzak simulazioa prestatuta irekitzen duen esteka du; beraz, informatika-gelan, tabletekin edo etxeko lan gisa erabil daiteke. Word eta LibreOffice formatuetan deskargatzen da, egokitu ahal izateko.

| Maila | Jarduerak | Gutxi gorabeherako iraupena |
| --- | --- | --- |
| DBHko 3. maila | Hasi aurretik, 1., 2., 4. eta 6. jarduerak, Aplikatu ikasitakoa ataleko 1. eta 4. problemak eta Autoebaluazioa | 50-55 minutuko saio bat |
| DBHko 4. maila | Fitxa osoa, Gehiago jakiteko izan ezik | Saio bat, edo bi problemak klasean egiten badira |
| Batxilergoko 1. maila | 2. eta 3. jarduerak, 3. problema eta Gehiago jakiteko ataleko 1. eta 2. atalak | Saio bat |
| Batxilergoko 2. maila (Fisika) | 3., 5. eta 6. jarduerak eta Gehiago jakiteko osoa | Saio bat |

«Hasi aurretik» taulak grabitazioari buruzko sei aurretiazko ideia biltzen ditu. Hobe da hasieran ez zuzentzea: ikasleak «Berrikusi zure ideiak» atalean itzultzen dira hara. «Egoera orbitala» panelaren datuak ehunen batzuk aldatzen dira buelta bitartean, simulazioak mugimendua urratsez urrats integratzen duelako.

### Soluzioak

| Atala | Soluzioa |
| --- | --- |
| Hasi aurretik | Denak faltsuak. a) Grabitatea badago: Estazioa etengabe erortzen da Lurrerantz, astronautak bezala (2. jarduera). b) Grabitateak bakarrik eragiten du; abiadura inertziaz mantentzen da (2. jarduera). c) Abiadura jakin batetik gora balak orbitatu egiten du, eta azkarrago, ihes egiten du (1. eta 3. jarduerak). d) Eguzkia elipsearen foku batean dago (5. jarduera). e) Azkarrago doa Eguzkitik hurbil (5. jarduera). f) Biek egiten dute bira masa-zentroaren inguruan (6. jarduera) |
| 1. jarduera | 3,45 km/s: hurbil iristen da lurrera, «Lurraren kontrako talka». 5,75 km/s: askoz urrunago iristen da lurrera, hori ere talka. 6,90 km/s: ez da iristen, «Orbita zirkularra». Erortzen da Lurrak erakartzen duelako (bere pisua). Orbitan Lurrerantz erortzen jarraitzen du, baina hain azkar egiten du aurrera, ezen lurra erritmo berean kurbatzen baita eta ez baitu inoiz harrapatzen |
| 2. jarduera | Abiadura 6,87 eta 6,90 km/s artean, altitudea 2017 eta 2060 km artean, periodoa 127,9 min; orbita kopurua handitzen doa. Mugimendu zirkular uniformea da: abiaduraren norabidea aldatzen da, ez haren balioa. Pisuak bakarrik eragiten du, Lurraren zentrorantz zuzenduta; ez dago aurrerako indarrik |
| 3. jarduera | 8,05 km/s: «Orbita eliptikoa»; 8,05 km/s perigeoan (2017 km) eta 3,75 km/s inguru apogeoan (11 643 km); ε = −15,1 km²/s² beti; periodoa 251,6 min. 10,35 km/s: «Ihes-abiadura» eta gero «Grabitaziotik ihes»; ε = +6,1 km²/s². Azkarrago doa Lurretik hurbil: urruntzean energia zinetikoa potentzial bihurtzen da, eta hurbiltzean alderantziz, energia mekanikoa konstante dela. ε positiboarekin, balak nahikoa energia du mugarik gabe urruntzeko |
| 4. jarduera | Merkurio: 0,387 AU, 0,241 urte. Lurra: 1,000 eta 1,000. Marte: 1,524 eta 1,881. Jupiter: 5,203 eta 11,86. Neptuno: 30,07 eta 164,8. T²/a³ ≈ 1,00 guztietan (0,999 eta 1,002 artean). Zenbat eta urrunago egon planeta, orduan eta denbora gehiago behar du buelta emateko (bide luzeagoa egiten du eta motelago). T²/a³ berdina da Eguzki-sistemako planeta guztietan: Keplerren hirugarren legea |
| 5. jarduera | e = 0: zirkunferentzia, Eguzkia erdian. e = 0,50: elipsea; Eguzkia foku batean dago eta beste fokua hutsik dago. e = 0,90: elipse oso luzanga. 2. legean, planeta askoz azkarrago doa Eguzkitik hurbil (perihelioa) urrun (afelioa) baino; ekortutako azalera estua eta luzea da Eguzkitik urrun eta zabala eta laburra hurbil, baina berdina da denbora berdinetan. e = 0,02rekin orbita ia zirkunferentzia bat da: oso luzatuta marraztean ideia faltsua ematen da |
| 6. jarduera | 2,0 eta 1,0: 2. izarrak (masa txikiagoa) egiten du orbita handiena, 1.arena halako bi; CM 1. izarretik hurbilago dago. 3,0 eta 3,0: orbita berdinak, CM erdiko puntuan. 5,0 eta 0,5: 2. izarrak egiten du ia orbita osoa; 1.a ia ez da mugitzen eta CM ia haren gainean dago. Indar grabitatorioak ekintza eta erreakzio bikote bat dira: bi izarrek indar berarekin erakartzen dute elkar. Eguzkiak hainbeste masa du, ezen Eguzki-Lurra sistemaren CM Eguzkiaren barruan baitago |
| Aplikatu ikasitakoa | 1) P = m · g: 70 kg · 9,8 m/s² = 686 N gainazalean; 70 kg · 8,7 m/s² ≈ 609 N Estazioan. Pisua badu; flotatzen du bera eta Estazioa batera erortzen direlako. 2) a³ = T² = 64, a = 4 AU. 3) v = 2πr / T = 2π · 8388 km / (128 · 60 s) ≈ 6,86 km/s, panelaren 6,90 km/s-tik oso hurbil. 4) Ilargia etengabe erortzen da Lurrerantz, baina bere abiadura tangenteak ez dio inoiz iristen uzten: orbitan dago |
| Gehiago jakiteko | 1) v = √(GM/r) = √(3,986·10⁵ / 8388) ≈ 6,89 km/s, «Vc»-ren balioa. 2) √2 · 6,89 ≈ 9,75 km/s, «Ve»-ren balioa. 9,66 km/s-rekin, ε ≈ −0,8 km²/s² (orbita eliptiko oso luzanga); 9,78 km/s-rekin, ε ≈ +0,3 km²/s² (ihes egiten du). 3) T 1,590etik (a = 0,40) 9,313ra (a = 1,30) pasatzen da eta T²/a³ 39,48an mantentzen da = 4π²/GM. Periodoa ez dago eszentrikotasunaren mende, ardatzerdi handiaren mende baizik |
