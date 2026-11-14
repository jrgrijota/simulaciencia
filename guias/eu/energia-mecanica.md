# Irakaslearen gida: energia mekanikoaren simulazioa

## Laburpena

Energia mekanikoaren simulazioak bagoneta bat mendi errusiar batean edo pendulu bat askatzen du, eta une bakoitzean energia zinetikoa, potentziala, mekanikoa eta xahututako beroa erakusten ditu, marruskadurarekin edo gabe. Euskadin DBHko 4. mailako Fisika eta Kimikan eta Batxilergoko 1. mailan erabiltzen da batez ere; DBHko 1. eta 2. mailetako Natura Zientzietan energiaren eraldaketak lantzeko balio du, eta noizbehinka Batxilergoko 2. mailako Fisikan.

| Datua | Xehetasuna |
| --- | --- |
| Esteka | [jrgrijota.github.io/simulacion-energia-mecanica](https://jrgrijota.github.io/simulacion-energia-mecanica/) |
| Mailak | DBHko 4. maila eta Batxilergoko 1. maila (erabilera nagusia); DBHko 1. eta 2. mailak, Natura Zientziak; noizbehinkako erabilera Batxilergoko 2. mailako Fisikan |
| Irakasgaia | Fisika eta Kimika; Natura Zientziak (DBHko 1.-2.); Fisika (Batxilergoko 2.) |
| Gutxi gorabeherako iraupena | 15-20 minutu azalpenerako, simulazioa proiektatuta |
| Materiala | Proiektorea edo arbel digitala; nabigatzailean dabil, baita mugikorrean eta tabletan ere, ezer instalatu gabe. Pantaila estuetan kontrolak goian geratzen dira eta oihala behean; azaltzeko, hobe da pantaila handi bat |
| Aurretiko ezagutzak | Abiadura, masa eta pisua (P = m · g). Marruskadurarako, marruskadura-indarra eta indar baten lana |
| Irisgarritasuna | Gai iluna, argia eta kontraste handikoa (engranajearen botoia). Pausa-botoia eta ×¼, ×½, ×1 eta ×2 erreprodukzio-abiadura |

## Nola dabil simulazioa

Simulazioak bi modu ditu, «Mendi errusiarra» eta «Pendulua», ezkerreko panelaren goialdean aukeratzen direnak. Bietan eszena ezkerrean ikusten da, energia-barrak eskuinean, eta, azpian, «Energia denboraren arabera» grafikoa, azken 20 s-ekin. «⏸ Pausatu» botoiak, berrabiarazteko botoiak eta «Erreprodukzio-abiadura» errenkadak mugimendua kontrolatzen dute. Moduaren graduatzaile batean, grabitatean edo trenbidearen profilean egindako edozein aldaketak gorputza irteera-puntutik askatzen du berriro; marruskadura, aldiz, martxan aktibatu eta doitu daiteke.

| Modua | Irakasleak zer kontrolatzen duen | Zer erakusten duen |
| --- | --- | --- |
| Mendi errusiarra | Trenbidearen profila: klasikoa (hainbat muino), «Muino garaiagoa (27 m)» eta U formako harana. Irteera-altuera (5-30 m, 0,5eko urratsetan), hasierako abiadura (0-15 m/s) eta bagonetaren masa (100-1000 kg). Hasierako balioak: klasikoa, 25,0 m, 0,0 m/s eta 500 kg. Bagoneta trenbideko edozein puntutara arrastatu daiteke | 60 m zabaleko trenbide bat, altueren ardatza 0tik 30 m-ra duela. Trenbide klasikoa 32 m-tik 0 m-ko haran batera jaisten da, eta 18 m-ko eta 12 m-ko muinoak eta 4 m-ko eta 1 m-ko haranak ditu. Muinoa duen trenbidea 27 m-ra igotzen da 0 m-ko bi haranen artean; U formako harana parabola bat da. Trenbidearen bi muturrak 32 m-ra igotzen dira eta geldiuneak dituzte |
| Pendulua | Hariaren luzera (0,5-5,0 m), hasierako angelua (5-90°) eta bolaren masa (0,1-5,0 kg). Hasierako balioak: 2,0 m, 45° eta 1,0 kg. Bola arrastatu ere egin daiteke, beste angelu batetik askatzeko, alde batera edo bestera | Euskarria, haria, bola eta ibilbidearen arkua, θ angeluarekin, L luzerarekin eta h = 0 mailarekin (puntu baxuena). Goian T ≈ 2π√(L/g) periodoa irakurtzen da |
| Ingurunea (bi moduetan) | Grabitatea: Lurra (9,8), Ilargia (1,62), Marte (3,71) eta Jupiter (24,79 m/s²). Marruskadura-etengailua, marruskadura-koefizientearekin (μ) 0,01etik 0,20ra mendi errusiarrean (0,05ean hasten da) eta airearen erresistentziarekin (b) 0,01etik 0,50 kg/s-ra penduluan (0,10ean hasten da) | Marruskadurarekin, Q barra eta grafikoko kurba laranja agertzen dira, eta energia mekanikoa jaitsi egiten da. Bagoneta gelditzen bada, ohar batek azaltzen du marruskadurak beroa bihurtu duela falta zitzaion energia mekanikoa |

Lau elementuk eusten diote azalpenari:

- **Energia-barrak.** Ec (berdea), Ep (urdina), Em (horia) eta Q (laranja marraduna) hasierako energiaren eskalan marrazten dira, lerro eten batekin markatuta. Barra bakoitzaren azpian haren balioa eta ehunekoa irakurtzen dira. Goian «Ec + Ep = Em» eta «Em + Q = E hasierakoa» gogorarazten dira.
- **Irits daitekeen altuera maximoaren lerroa.** Lerro hori eten batek «Em/(m·g)» altuera markatzen du: gorputza hara iritsiko litzateke bere energia mekaniko guztia potentziala balitz. Marruskadurarik gabe, irteera-altuerarekin bat dator eta ez da mugitzen; marruskadurarekin, pixkanaka jaisten da eta hasierako altuera markatzen duen lerro ahul batetik urruntzen da.
- **Energia-denbora grafikoa.** Lau kurbek kolore berberak erabiltzen dituzte. Marruskadurarik gabe, Ec eta Ep gurutzatu egiten dira eta ispiluan igo eta jaisten dira, eta Em lerro zuzen horizontal bat da. Marruskadurarekin, Em jaitsi egiten da eta Q kantitate berean igotzen da.
- **Abiadura-bektorea.** Oihalaren goiko eskuineko «Abiadura-bektorea» botoiak ibilbidearekiko gezi more ukitzaile bat marrazten du, v-ren balioarekin. Haren eskala egokitu egiten da, gezi luzeenak beti neurri bera izan dezan.

«Denbora errealeko jarraipena» zabalgarria irekita dago hasieran. Abiadura, altuera, denbora eta hiru energiak ematen ditu, eta «Energia-balantzea» blokea, E hasierakoarekin, % 100 Ec, Ep eta Q artean banatzen duen barra batekin eta balantzea laburtzen duen esaldi batekin. Formulen zabalgarriak hauek biltzen ditu: Ec = ½ · m · v², Ep = m · g · h, Em = Ec + Ep, Em,A = Em,B marruskadurarik gabe, Em,A = Em,B + |Wmarr| marruskadurarekin, marruskadura-indarra (μ · N edo b · v), penduluaren altuera h = L · (1 − cos θ) eta v = √(2 · g · Δh). Goiburuan, deskribapenak hiru ideia nagusiak laburtzen ditu.

## Maila bakoitzean nola erabili

DBHko 4. mailan, simulazioak energia zinetikoa, potentziala eta energia mekanikoaren kontserbazioa aurkezteko eta marruskaduraren lana sartzeko balio du. Batxilergoko 1. mailan, sistema kontserbatzaileak eta ez-kontserbatzaileak, lanaren eta energiaren teorema eta energiaren degradazioa lantzen ditu. DBHko 1. eta 2. mailetan, Natura Zientzietan, energiaren eraldaketak modu kualitatiboan deskribatzeko balio du. Batxilergoko 2. mailako Fisikan noizbehinka erabiltzen da, penduluaren energia osziladore gisa aztertzeko. Aipatutako oinarrizko jakintzak Euskadiko curriculumekoak dira (77/2023 Dekretua DBHrako eta 76/2023 Dekretua Batxilergorako, EHAA, 2023ko ekainaren 9a), testu ofizialaren euskarazko bertsioan. Izartxoak (*) ezinbesteko jakintza dela adierazten du, dekretuan bezala.

Kontuan izan DBHko 4. mailako Fisika eta Kimika aukerakoa dela.

### DBHko 4. maila (Fisika eta Kimika): energia zinetikoa, potentziala eta haien kontserbazioa

*15-16 urte · 10th grade AEBn · Year 11 Erresuma Batuan*

**Oinarrizko jakintzak.** C multzoa: «Energia: energiaren formei eta aplikazioei buruzko hipotesien formulazioa eta egiaztaketa, energiaren propietateetatik eta kontserbazio-printzipiotik abiatuta, eguneroko egoeretan energia mekanikoarekin lotutako problemak esperimentatzeko eta ebazteko oinarri gisa.*» eta «Energia-transferentziak: lana eta beroa, indarrekin edo tenperatura-diferentziarekin lotutako sistemen arteko energia-transferentziarako modu gisa. […]*». D multzoa: «Eguneroko inguruneko indar nagusiak: pisua, normala, marruskadura, tentsioa edo bultzada, eta haien erabilera hainbat agertokitan fenomeno fisikoak azaltzeko.*». A multzoa: «Ikaskuntza zientifikoko hainbat ingurune eta baliabide, hala nola laborategia edo ingurune birtualak […].*».

Curriculumak ez ditu energia zinetikoa eta potentziala bereizita izenez aipatzen; «energia mekanikoarekin lotutako problemetan» sartzen dira.

**Helburuak.** Energia zinetikoa eta potentzial grabitatorioa kalkulatzea. Marruskadurarik gabe energia mekanikoa kontserbatu egiten dela azaltzea, Ec eta Ep aldatu arren. Altuera-aldeetatik abiadurak kalkulatzea. Marruskadurak energia mekanikoa bero bihurtzen duela ohartzea.

**Azalpen-sekuentzia (15-20 min).**

1. Mendi errusiarra, hasierako balioekin: berrabiarazi eta sakatu «⏸ Pausatu». 500 kg-ko bagoneta 25,0 m-tan dago. Kalkulatu arbelean Ep = m · g · h = 500 × 9,8 × 25 = 122 500 J, eta egiaztatu «E hasierakoa = 122,5 kJ». Pausagunetik ateratzen denez, Ec = 0 da eta energia guztia potentziala da.
2. Eskatu lehen haraneko (h = 0) abiaduraren aurreikuspena eta jarraitu. Dena zinetiko bihurtuta, ½ · m · v² = 122 500 J eta v = √(2 · 9,8 · 25) = 22,1 m/s. ×¼ abiadurarekin erraza da haranean pausatzea eta abiadura irakurtzea.
3. Pausatu 18 m-ko muinoaren gailurrean. Ep = 500 × 9,8 × 18 = 88 200 J; beraz, Ec = 122 500 − 88 200 = 34 300 J eta v = 11,7 m/s. Ec eta Ep barrak aldatu egiten dira, baina Em beteta dago: 122,5 kJ.
4. Utzi simulazioa martxan. Bagoneta eskuineko muturrera iristen da eta 25,0 m-raino itzultzen da, hain zuzen «irits daitekeen altuera max.» lerro horiraino. Grafikoan, Em lerro zuzena da eta Ec eta Ep gurutzatu egiten dira.
5. Igo masa 1000 kg-ra. Hasierako energia bikoiztu egiten da (245,0 kJ), baina bagoneta berdin mugitzen da, eta haraneko abiadura 22,1 m/s da oraindik: masa sinplifikatu egiten da ½ · m · v² = m · g · h berdintzan.
6. Itzuli 500 kg-ra eta aktibatu marruskadura, μ = 0,05ekin. Bidaia bakoitzean bagoneta baxuago geratzen da (22,4 m, 20,0 m, 17,5 m…), lerro horia jaitsi egiten da eta Q barra hazi. Amaitu balantzearekin: Em,hasierakoa = Em,amaierakoa + |Wmarr|. Energia ez da desagertzen: bero bihurtzen da.

### Batxilergoko 1. maila: sistema kontserbatzaileak eta ez-kontserbatzaileak

*16-17 urte · 11th grade AEBn · Year 12 Erresuma Batuan*

**Oinarrizko jakintzak.** G multzoa: «Sistema sinple baten energia potentziala eta energia zinetikoa: sistema kontserbatzaile eta ez-kontserbatzaileetan energia mekanikoa kontserbatzeko eta mundu errealean objektuen mugimendua eragiten duten kausak aztertzeko aplikazioa» eta «Lan- eta potentzia-kontzeptuak: eguneroko ingurunearen sistema mekanikoen edo elektrikoen energia-kontsumoari eta errendimenduari buruzko hipotesiak egitea». E multzoa: «Objektu batek, kanpoko indarrarekin edo gabe, izan ditzakeen mugimendu ezberdinen denboraren araberako aldagai zinematikoak […]».

Curriculumak ez ditu lanaren eta energiaren teorema, marruskadura indar ez-kontserbatzaile gisa edo termodinamikaren bigarren printzipioa izenez aipatzen; G multzoko «sistema ez-kontserbatzaileak» lantzeko ohiko bidea dira.

**Helburuak.** Energia mekanikoaren kontserbazio-printzipioa aplikatzea, indar ez-kontserbatzaileekin eta gabe. Marruskaduraren lana kalkulatzea. Gorputz batek oztopo bat gaindituko duen aurreikustea, haren energiatik abiatuta. Energiaren degradazioa energia-denbora grafiko batean interpretatzea.

**Azalpen-sekuentzia (15-20 min).**

1. «Muino garaiagoa (27 m)» profila, irteera 25,0 m-tan eta marruskadurarik gabe. Galdetu bagonetak muinoa gaindituko duen. Ez: lerro horia gailurraren azpitik geratzen da, eta bagonetak buelta ematen du 25,0 m-tan, goraino iritsi aurretik.
2. Kalkulatu gainditzeko gutxieneko hasierako abiadura: ½ · v₀² ≥ g · (27 − 25); beraz, v₀ ≥ 6,26 m/s. Egiaztatu: 6,0 m/s-rekin bagonetak buelta ematen du 26,8 m-tan; 6,5 m/s-rekin gainditu egiten du eta beste aldean 27,2 m-ra iristen da. Masak ez du eraginik.
3. Itzuli trenbide klasikora, irteera 25,0 m-tan, eta aktibatu marruskadura, μ = 0,05ekin. Pausatu lehen haranera iristean: Q ≈ 2,37 kJ. N = m · g · cos θ izanik, marruskaduraren lana μ · m · g · cos θ · Δs = μ · m · g · Δx da, Δx ibilbide horizontala izanik. Irteeratik (x ≈ 4,3 m) haraneraino (x = 14 m): 0,05 × 500 × 9,8 × 9,7 ≈ 2370 J.
4. Erabili grafikoa: Em azkarrago jaisten da bagoneta azkarrago doan lekuan, segundo bakoitzean trenbide gehiago egiten duelako, eta Q zehazki Em jaisten den adina hazten da. Irakurri «Energia-balantzea» atalean une bakoitzean zer ehuneko geratzen den. Lotu lanaren eta energiaren teoremarekin: Wmarr = ΔEm.
5. Utzi bagoneta gelditzen (2 min pasatxo ×1 abiaduran, erdia ×2 abiaduran). 1 m-ko haranean amaitzen da, Ep = 4,9 kJ-rekin: energiaren % 4 bakarrik da mekanikoa oraindik, eta % 96 bero bihurtu da. Energia osoa kontserbatzen den arren, beroa ezin da berriro energia mekaniko bihurtu osorik: energiaren degradazioa da.
6. Igaro penduluaren modura, marruskadurarekin, b = 0,10 kg/s. Anplitudea eta Em gero eta gutxiago jaisten dira oszilazio bakoitzean: 5 s-ren buruan % 62 geratzen da, eta 10 s-ren buruan % 37. Igo masa 2,0 kg-ra: orain % 79 eta % 61 geratzen dira. Airearen erresistentziarekin, galera erlatiboa b/m-ren mende dago; trenbidearen marruskadurarekin, aldiz, ez dago masaren mende.

### DBHko 1. eta 2. mailak (Natura Zientziak): energiaren eraldaketak

*12-14 urte · 7th-8th grade AEBn · Year 8-9 Erresuma Batuan*

**Oinarrizko jakintzak.** C multzoa, «Energia» atala: «Energia: energiari, propietateei eta aldaketa-prozesu guztien kausa gisa deskribatuko duten adierazpenei buruzko galderen eta hipotesien formulazioa.*» eta «Energiaren etxeko erabilerarekin eta erabilera industrialarekin zerikusia duten hipotesien diseinu eta egiaztapen esperimentala, energiaren forma guztiak eta horien arteko eraldaketak aintzat hartuta.*». A multzoa: «Prozesuen, emaitzen edo ideien komunikazioa formatu analogiko edo digitaletan (aurkezpena, grafikoa, bideoa, posterra, txostena…)».

DBHko 3. mailako Fisika eta Kimikak energiari buruzko jakintza orokor bera du berriro (izartxorik gabe); sekuentzia hori han ere erabil daiteke, energia elektrikoa landu aurretik.

**Helburuak.** Mugimenduaren energia eta altuerari zor zaion energia ezagutzea. Bata bestean nola eraldatzen den deskribatzea. Energia ez dela galtzen ulertzea, baizik eta beste forma batzuetan eraldatzen dela, ez hain erabilgarrietan.

**Azalpen-sekuentzia (15-20 min).**

1. Pendulua, hasierako balioekin. Formularik aipatu gabe, seinalatu barrak: goian energia guztia urdina da (potentziala) eta behean berdea (zinetikoa). Horia, batura, ez da aldatzen.
2. Pausatu puntu baxuenean eta mutur batean. Irakurri «Energia-balantzea» blokean nola banatzen den % 100 Ec eta Ep artean.
3. Mendi errusiarra, hasierako balioekin. Galdetu non doan azkarren bagoneta: haranetan, altuera txikiena den lekuan. Egiaztatu «Abiadura-bektorea» botoiarekin.
4. Aktibatu marruskadura. Bagoneta ez da irteera-altuerara itzultzen, eta Q barra laranja agertzen da: energiaren zati bat bero bihurtu da gurpiletan eta trenbidean. Energia eraldatu egiten da, ez da suntsitzen.
5. Aukeratu Ilargiko grabitatea (1,62 m/s²), 25,0 m-ko irteerarekin. Hasierako energia 20,3 kJ-ra jaisten da, eta bagoneta askoz motelago doa (9,0 m/s haranean). Lotu pisuarekin.
6. Eskatu ikasleei trenbideko lau puntutan altuera, abiadura, Ec eta Ep dituen taula bat kopiatzeko (puntu bakoitzean pausatuz), eta Ec + Ep beti berdina ateratzen dela egiaztatzeko.

### Batxilergoko 2. maila (Fisika): noizbehinkako erabilera

*17-18 urte · 12th grade AEBn · Year 13 Erresuma Batuan*

D multzoan agertzen da «Oszilazio-higidura: gorputz oszilatzaile baten aldagai zinematikoak eta energia-kontserbazioa sistema horietan». Angelu txikiekin (5-10°), pendulua ia osziladore harmoniko bat da. Grafikoan, Ec eta Ep penduluaren periodoaren erdiarekin oszilatzen dute, eta beti berdin batzen dute. Airearen erresistentziarekin osziladore moteldu bat ikusten da: energia esponentzialki jaisten da, Em ∝ e^(−b·t/m). Simulazioak g · h erabiltzen du eta ez −GMm/r; beraz, ez du balio eskala handiko eremu grabitatorioko energiarako; horretarako, hobe da orbiten simulazioa.

## Zuzentzen laguntzen dituen ideia okerrak

Simulazioak batez ere energia «gastatu» edo desagertu egiten delako ideia du jomugan, baita gorputz astunagoak arrapala batean behera azkarrago erortzen direlako ideia ere. Errenkada bakoitzak ohiko aurretiazko ideia bat eta simulazioarekin nola desegin adierazten du.

| Ikasleen ideia | Ideia zuzena | Nola erakutsi |
| --- | --- | --- |
| «Energia gastatu eta desagertu egiten da» | Energia eraldatu egiten da: marruskadurarekin, mekanikoa bero bihurtzen da, eta Ec + Ep + Q beti da hasierako energia | Mendi errusiarra marruskadurarekin: Q barra Em jaisten den adina hazten da, eta «Energia-balantzea» blokeak beti % 100 batzen du |
| «Bagoneta astunago bat azkarrago jaisten da» | Marruskadurarik gabe, abiadura desnibelaren mende bakarrik dago: v = √(2 · g · Δh) | 100 kg-ko eta 1000 kg-ko masa, irteera 25,0 m-tan: bi kasuetan 22,1 m/s haranean |
| «Haranean abiadura handiagoa duenez, irten zen lekua baino gorago igo daiteke» | Marruskadurarik eta hasierako abiadurarik gabe, ez du inoiz irteera-altuera gainditzen | «Muino garaiagoa (27 m)» profila, irteera 25,0 m-tan: buelta ematen du 25,0 m-tan |
| «Punturik garaienean ez dago energiarik» | Goian energia potentziala da; zinetikoa bakarrik da nulua | Pendulua pausan mutur batean: Ec = 0 eta Ep = Em = 5,74 J |
| «Energia potentziala gorputzaren propietate absolutua da» | Aukeratzen den erreferentzia-mailaren mende dago; aldeak dira garrantzitsuak | Seinalatu h = 0 maila (puntu baxuena): zero-maila gelako zoruan jarrita, Ep guztiak kantitate berean aldatuko lirateke, eta v ez |
| «Marruskadurarik ez badago ere, pendulua azkenean gelditu egingo da» | Indar ez-kontserbatzailerik gabe, betiko oszilatzen du anplitude berarekin | Pendulua marruskadurarik gabe, ×2 abiaduran minutu batez: lerro horia eta anplitudea ez dira aldatzen |
| «Marruskadurak gorputza motel doanean bakarrik eragiten du» | Marruskaduraren lana ibilbidearen mende dago; mugimendu osoan zehar eragiten du | Mendi errusiarra μ = 0,05ekin: grafikoko Q kurba ibilbide osoan igotzen da |

## Ezagutzea komeni diren sinplifikazioak

Simulazioak energia-balantzea ikustea lehenesten du, eta horretarako trenbidea, marruskadura eta pendulua sinplifikatzen ditu. Komeni da lizentzia horiek ezagutzea, nahi gabe ideia okerrak ez indartzeko.

1. **Bagoneta errailaren gaineko puntu bat da.** Ez du tamainarik ez biratzen duten gurpilik, eta trenbideari lotuta doa, benetako mendi errusiarretan bezala: ez da inoiz askatzen, gailur batean oso azkar joan arren. Ez dago kiribilik.
2. **Normala, alde zentripetorik gabe.** Marruskadurak N = m · g · cos θ erabiltzen du, eskolako problemetan bezala. Benetako kurbetan normala handiagoa da haranetan eta txikiagoa gailurretan; hemen ez da kontuan hartzen. Horregatik, marruskaduraren lana zehazki μ · m · g bider ibilbide horizontala da.
3. **μ koefiziente bakarra.** Koefiziente bera erabiltzen da marruskadura estatikorako eta dinamikorako. Bagoneta gelditu egiten da haren abiadura zero denean malda tan θ ≤ μ betetzen duen puntu batean, haran baten hondoan ez egon arren.
4. **Marruskadura desberdinak modu bakoitzean.** Mendi errusiarrean indarra konstantea da, μ · N. Penduluan, airearen erresistentzia bat da, abiadurarekiko proportzionala, b · v, eta ez dago marruskadurarik eskegitze-puntuan. Horregatik, penduluan galera erlatiboa b/m-ren mende dago, eta mendi errusiarrean ez dago masaren mende.
5. **Beroak ez du ezer berotzen.** Q barrak xahututako energia bakarrik zenbatzen du. Ez da kalkulatzen trenbidea, gurpilak edo airea zein tenperaturatara iristen diren, ezta soinuagatik edo bibrazioengatik galtzen den energia ere.
6. **Pendulu ideala.** Haria luzaezina eta masarik gabekoa da, eta bola puntuala. Hasierako angelua 5etik 90°-ra doa: hari batek ez du angelu handiagorik jasaten. «T ≈ 2π√(L/g)» periodoa oszilazio txikiena da; 45°-tan, benetako periodoa 2,95 s ingurukoa da, 2,84 s-ren ordez.
7. **Penduluaren eskala L-rekin aldatzen da.** Marraztutako haria luzerarekin hazten da, baina hura baino gutxiago, pantailan sar dadin. Pendulu bereko altuerak eskalan daude; bi luzera desberdinetakoak ezin dira pantailan alderatu.
8. **Erreferentzia-maila finkoa.** Energia potentziala beti trenbidearen edo ibilbidearen punturik baxuenetik neurtzen da. Ezin da zero-maila aldatu.
9. **Energia balantzearen bidez kalkulatua.** Programak abiadura Ec = E hasierakoa − Ep − Q formulatik kalkulatzen du; horrela, barrek beti % 100 batzen dute zehazki. Trenbidearen muturrek galerarik gabe itzultzen dute bagoneta; hasierako abiadurarekin bakarrik iristen da hara.

## Ikasleen jarduera-fitxa

[Jarduera-fitxak](https://simulaciencia.es/eu/fitxak/energia-mecanica/) iragarri, behatu eta azaldu eskema jarraitzen du. Jarduera bakoitzak simulazioa prestatuta irekitzen duen esteka du; beraz, informatika-gelan, tabletekin edo etxeko lan gisa erabil daiteke. Word eta LibreOffice formatuetan deskargatzen da, egokitu ahal izateko.

| Maila | Jarduerak | Gutxi gorabeherako iraupena |
| --- | --- | --- |
| DBHko 1. edo 2. maila (Natura Zientziak) | Hasi aurretik, 1. jarduera (energia-zutabeak gabe), 4., 5. eta 6. jarduerak, Berrikusi zure ideiak eta Autoebaluazioa | 50-55 minutuko saio bat |
| DBHko 4. maila | Fitxa osoa, Gehiago jakiteko izan ezik | Bi saio, edo bat ariketak etxeko lan gisa egiten badira |
| Batxilergoko 1. maila | 3. eta 5. jarduerak, Gehiago jakiteko eta Aplikatu ikasitakoa ataleko 4. problema | Saio bat |

«Hasi aurretik» taulak energiari buruzko bost aurretiazko ideia biltzen ditu. Hobe da hasieran ez zuzentzea: ikasleak «Berrikusi zure ideiak» atalean itzultzen dira hara. Puntu jakin batean pausatzea zaila da: ×¼ abiadurarekin errazagoa da, eta soluzioek hamarren batzuetako aldea onartzen dute.

### Soluzioak

| Atala | Soluzioa |
| --- | --- |
| Hasi aurretik | Denak gezurrak. a) Marruskadurarik gabe, abiadura desnibelaren mende bakarrik dago (2. jarduera). b) Marruskadurarik eta hasierako abiadurarik gabe, ez du inoiz irteera-altuera gainditzen (3. jarduera). c) Goian energia potentziala da; zinetikoa bakarrik da nulua (4. jarduera). d) Marruskadurarik gabe, beti oszilatzen du anplitude berarekin (4. jarduera). e) Bero bihurtzen da; Ec + Ep + Q beti da hasierako energia (5. jarduera) |
| 1. jarduera | Irteera: 25 m, 0 m/s, Ec = 0, Ep = 122,5 kJ. Lehen harana: 0 m, 22,1 m/s, Ec = 122,5 kJ, Ep = 0. 18 m-ko muinoa: 11,7 m/s, Ec = 34,3 kJ, Ep = 88,2 kJ. 4 m-ko harana: 20,3 m/s, Ec = 102,9 kJ, Ep = 19,6 kJ. Em = 122,5 kJ beti. Jaistean, Ep Ec bihurtzen da, eta igotzean alderantziz. Marruskadurarik gabe, energia mekanikoa kontserbatu egiten da |
| 2. jarduera | 100 kg: 24,5 kJ eta 22,1 m/s. 1000 kg: 245,0 kJ eta 22,1 m/s. Masa bi energietan agertzen da: m · g · h = ½ · m · v²; beraz, sinplifikatu egiten da eta v = √(2 · g · h) |
| 3. jarduera | 0 m/s: ez du gainditzen, buelta ematen du 25,0 m-tan. 6,0 m/s: ez du gainditzen, 26,8 m-ra iristen da. 6,5 m/s: gainditu egiten du, 27,2 m-ra iristen da (gailurraren gainetik). Hasierako abiadurarik gabe, haren energia 25 m-ra igotzeko bakarrik iristen da. Hasierako abiadurak energia zinetikoa gehitzen du: Em = m · g · h + ½ · m · v₀² |
| 4. jarduera | Muturra: h ≈ 0,59 m, v = 0, Ec = 0, Ep = Em ≈ 5,74 J. Puntu baxuena: h = 0, v ≈ 3,39 m/s, Ec = Em ≈ 5,74 J, Ep = 0. Minutu baten buruan, anplitudea eta lerro horia ez dira aldatu. Punturik garaienean energia potentziala dago; zinetikoa bakarrik da nulua. Grafikoan, Ec eta Ep ispiluan igo eta jaisten dira, eta Em lerro zuzen horizontala da |
| 5. jarduera | Gero eta baxuago itzultzen da: 22,4 m, 20,0 m eta 17,5 m inguru. Em % 90, % 80 eta % 70 ingurura jaisten da, eta Q % 10, % 20 eta % 30era igotzen da. Energia mekanikoa ez da desagertzen: marruskadurak bero bihurtzen du gurpiletan eta trenbidean. Ec + Ep + Q beti dira hasierako energiaren % 100: energiaren kontserbazioa. Beroa ingurunean banatzen da eta ezin da berriro energia mekaniko bihurtu osorik: energia degradatu egiten da |
| 6. jarduera | Lurra: 122,5 kJ eta 22,1 m/s. Ilargia: 20,3 kJ eta 9,0 m/s. Marte: 46,4 kJ eta 13,6 m/s. Jupiter: 309,9 kJ eta 35,2 m/s. Ep = m · g · h g-ren mende dago: grabitate txikiagoarekin, pisua txikiagoa da eta mugimendu bihurtzeko energia gutxiago dago |
| Aplikatu ikasitakoa | 1) Ep = 400 · 9,8 · 20 = 78 400 J. 2) v = √(2 · 9,8 · 20) ≈ 19,8 m/s haranean; 15 m-ko muinoan, v = √(2 · 9,8 · 5) ≈ 9,9 m/s. 3) v = √(2 · 9,8 · 0,30) ≈ 2,4 m/s. 4) Wmarr = −15 kJ; 15 kJ horiek bero bihurtu dira |
| Gehiago jakiteko | 1) ½ · v₀² ≥ g · (27 − 25), v₀ ≥ √(2 · 9,8 · 2) ≈ 6,26 m/s, 6,0 eta 6,5 artean. 2) Wmarr = 0,05 · 500 · 9,8 · 9,7 ≈ 2,4 kJ, haraneko Q ≈ 2,37 kJ-ren berdina. 3) 10 s-ren buruan % 37 geratzen da 1 kg-rekin eta % 61 2 kg-rekin. Airearen erresistentzia, b · v, ez dago masaren mende, baina energia bai: galera erlatiboa b/m-ren mende dago |
