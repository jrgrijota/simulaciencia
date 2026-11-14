# Irakaslearen gida: Arkimedesen printzipioaren simulazioa

## Laburpena

Arkimedesen printzipioaren simulazioak bloke bat depositu batera erortzen uzten du, eta une bakoitzean haren pisua, bultzada eta indar garbia kalkulatzen ditu. Euskadin DBHko 4. mailako Fisika eta Kimikan erabiltzen da batez ere, curriculumak han kokatzen baititu fluidoetako indarrak, eta DBHko 1. eta 2. mailetako Natura Zientzietan indarrak eta haien erresultantea lantzeko.

| Datua | Xehetasuna |
| --- | --- |
| Esteka | [jrgrijota.github.io/simulacion-arquimedes](https://jrgrijota.github.io/simulacion-arquimedes/) |
| Mailak | DBHko 4. maila, Fisika eta Kimika (erabilera nagusia); DBHko 1. eta 2. mailak, Natura Zientziak; noizbehinkako erabilera Batxilergoko 1. mailan |
| Irakasgaia | Fisika eta Kimika (DBHko 4. eta Batxilergoa), Natura Zientziak (DBHko 1.-2.) |
| Gutxi gorabeherako iraupena | 15-20 minutu azalpenerako, simulazioa proiektatuta |
| Materiala | Proiektorea edo arbel digitala; nabigatzailean dabil, baita mugikorrean eta tabletan ere, ezer instalatu gabe |
| Aurretiko ezagutzak | Dentsitatea (ρ = m / V), pisua (P = m · g), indarra norabidea eta noranzkoa dituen magnitude gisa |
| Irisgarritasuna | Gai iluna, argia eta kontraste handikoa (engranajearen botoia) |

## Nola dabil simulazioa

Simulazioak bi modu ditu, «Balio libreak» eta «Material errealak», ezkerreko panelean aukeratzen direnak. Bietan blokea duen depositua ikusten da, eta, haren ezkerrean, murgildutako ehunekoa. Dentsitateen eskala bertikal batek likidoarena eta blokearena markatzen ditu. Deposituaren azpian pisuaren eta bultzadaren formulak agertzen dira, uneko zenbakiekin.

| Modua | Irakasleak zer kontrolatzen duen | Zer erakusten duen |
| --- | --- | --- |
| Balio libreak | Masa (10-200 kg), Bolumena (50-150 L) eta Likidoaren dentsitatea (0,50-13,60 kg/L, 0,01eko urratsetan). Hasierako balioak: 50 kg, 100 L eta 1,000 kg/L | Ateratzen den blokearen dentsitatea (0,07tik 4,00 kg/L-ra), pisua, bultzada, indar garbia, bolumen murgildua eta sistemaren egoera |
| Material errealak | «Blokearen materiala»: kortxoa (0,24), egurra (0,60), izotza (0,917), plastikoa (0,95), aluminioa (2,70), burdina (7,87), beruna (11,34) eta urrea (19,30 kg/L). «Deposituko likidoa»: gasolina (0,740), etanola (0,789), olioa (0,920), ur geza (1,000), itsasoko ura (1,025), glizerina (1,261) eta merkurioa (13,534 kg/L) | Gauza bera, materialaren eta likidoaren testurekin. Bolumena 100 L-n finko geratzen da, eta masa m = ρ · V formulatik ateratzen da. Egurrarekin eta ur gezarekin hasten da |
| «Gorputz askearen diagrama» botoia (bi moduetan) | Eskuineko panela erakutsi edo ezkutatu | Pisuaren (gorria), bultzadaren (urdina) eta indar garbiaren geziak, balioarekiko proportzionala den luzerarekin; blokea hondoan bermatuta dagoenean, normala ere bai (morea). «P > E», «P < E», «P ≈ E» edo «P = E + N» errotulua eta «URRATSEZ URRATS» kalkulua |

Hiru elementuk eusten diote azalpenari:

- **Formulak zenbakiekin.** Deposituaren azpian irakurtzen da, adibidez, P = m·g = 50.0 × 9.8 = 490 N eta E = Vsub·ρlik·g = 50.0 × 1.00 × 9.8 = 490 N. Kalkulua ozenki egiaztatzeko balio dute.
- **Bolumen murgildua.** «Bol. murgildua» txartelak eta deposituaren ondoko ehunekoak blokearen zein zatik desplazatzen duen likidoa erakusten dute. Flotatzen duenean, zati murgildua ρblokea / ρlikidoa zatidurarekin bat dator. Likidoaren maila igo egiten da blokea murgildu ahala: desplazatutako bolumena da.
- **Gorputz askearen diagrama.** P eta E geziak blokearen erditik ateratzen dira. Indar garbia goian agertzen da, horiz beherantz badoa eta berdez gorantz badoa.

«Denbora errealeko neurketak» zabalgarria irekita dago hasieran. Sei txartel eta «Sistemaren egoera» blokea ditu. Azken horrek bi dentsitateak bi barrarekin alderatzen ditu eta «Flotatzen», «Hondoratzen», «Hondoan» edo «Oreka neutroa» idazten du; azkena bi dentsitateak bat datozenean bakarrik. «Funtsezko formulak» zabalgarriak dentsitatea, bultzada, pisua eta Vsub/V = ρblokea/ρlikidoa oreka-baldintza laburtzen ditu. Goiburuan, «Deskribapena eta arau azkarrak» atalak dentsitateak alderatzeko hiru arauak ematen ditu.

## Maila bakoitzean nola erabili

DBHko 4. mailan, simulazioak Arkimedesen printzipioa aurkezteko eta bultzada kalkulatzeko balio du; DBHko 1. eta 2. mailetan, Natura Zientzietan, bultzada beste indar bat bezala eta aurkako indarren erresultantea lantzeko. Aipatutako oinarrizko jakintzak Euskadiko curriculumekoak dira (77/2023 Dekretua, EHAA, 2023ko ekainaren 9a), testu ofizialaren euskarazko bertsioan. Izartxoak (*) ezinbesteko jakintza dela adierazten du, dekretuan bezala.

Euskadin indarrak eta Newtonen legeak Natura Zientzietan (DBHko 1.-2.) aurkezten dira, eta 4. mailan itzultzen dira. 3. mailako Fisika eta Kimikak fenomeno grabitatorio, elektriko eta magnetikoak baino ez ditu lantzen D multzoan, eta horregatik bultzada indar gisa lantzeko sekuentzia 1. eta 2. mailetan dago. Kontuan izan DBHko 4. mailako Fisika eta Kimika aukerakoa dela. Ez da egokia Batxilergoko 2. mailarako.

### DBHko 4. maila (Fisika eta Kimika): Arkimedesen printzipioa eta flotazioa

*15-16 urte · 10th grade AEBn · Year 11 Erresuma Batuan*

**Oinarrizko jakintzak.** D multzoa: «Indarrak eta presioa fluidoetan: indarrek eta presioak likidoetan eta gasetan dituzten efektuak. Efektu horiek deskribatzen dituzten oinarrizko printzipioak.*», «Eguneroko inguruneko indar nagusiak: pisua, normala, marruskadura, tentsioa edo bultzada, eta haien erabilera hainbat agertokitan fenomeno fisikoak azaltzeko.*» eta «Indarren izaera bektoriala: oinarrizko aljebra bektorialaren erabilera indarrekin eragiketak grafikoki eta zenbakitan egiteko […].*». A multzoa: «Ikaskuntza zientifikoko hainbat ingurune eta baliabide, hala nola laborategia edo ingurune birtualak: materialak, substantziak eta tresna teknologikoak.*».

Curriculumak ez ditu Arkimedesen eta Pascalen printzipioak izenez aipatzen; fluidoetako indarrak deskribatzen dituzten «oinarrizko printzipioak» dira.

**Helburuak.** Arkimedesen printzipioa enuntziatzea. Bultzada E = ρlikidoa · g · Vmurgildua formularekin kalkulatzea. Gorputz batek flotatuko duen aurreikustea, haren dentsitatea likidoarenarekin alderatuz. Flotatzen duenean zein zati geratzen den murgilduta azaltzea.

**Azalpen-sekuentzia (15-20 min).**

1. Balio libreak, hasierako balioekin: 50 kg, 100 L eta 1,000 kg/L. Galdetu zergatik gelditzen den blokea erdiko altueran. Irakurri «Bol. murgildua»: 50,0 L. 50 L ur horiek 50 kg dituzte eta 490 N pisatzen dute, bultzadaren adina. Enuntziatu printzipioa.
2. Aktibatu «Gorputz askearen diagrama». Seinalatu P = 490,0 N eta E = 490,0 N, gezi berdinekin eta «P ≈ E» errotuluarekin. Flotatzea indarren oreka da, ez pisurik eza.
3. Eskatu aurreikuspen bat eta igo masa 80 kg-ra. Blokea 80,0 L murgilduraino jaisten da, eta E = P = 784 N. Ireki «Funtsezko formulak» eta irakurri Vsub/V = ρblokea/ρlikidoa: 0,80 / 1,00 = % 80.
4. Igo masa 150 kg-ra (ρ = 1,50 kg/L). Blokea hondoratu egiten da. Bolumen osoa barruan dagoela, bultzadak bere maximoa hartzen du: 100 × 1,00 × 9,8 = 980 N, P = 1470 N baino txikiagoa. Hondora iristean, diagramak normala gehitzen du: N = 1470 − 980 = 490 N, eta errotulua «P = E + N» bihurtzen da.
5. Masa ukitu gabe, eraman «Likidoaren dentsitatea» 2,00 kg/L-ra. Blokea igo egiten da eta 75,0 L murgildurekin flotatzen du: 75 × 2,00 × 9,8 = 1470 N. Bultzada likidoaren mende dago, ez blokearen mende.
6. Igaro «Material errealak» modura. Burdina ur gezan hondoratzen da, eta merkurioan flotatzen du, 58,1 L inguru murgilduta (7,87 / 13,534). Amaitu izotzarekin: 91,7 L murgilduta ur gezan eta 89,5 L itsasoko uretan. Lotu icebergekin eta itsasontzien flotazio-lerroarekin.

### DBHko 1. eta 2. mailak (Natura Zientziak): bultzada indar gisa eta erresultantea

*12-14 urte · 7th-8th grade AEBn · Year 8-9 Erresuma Batuan*

**Oinarrizko jakintzak.** C multzoa, «Interakzioa» atala: «Indarrak aldaketarako eragile gisa: gorputz baten mugimendu edo atseden-egoeran nahiz diharduten sistemetan deformazioak sortuz indarrek dituzten efektuen erlazioa.*» eta «Newtonen legeen aplikazioa: indarren ekintzaren aurrean sistema materialek nola jokatzen duten ulertzea ahalbidetzen duten eguneroko egoeren edo laborategiko egoeren behaketa […].*». A multzoa: «Oinarrizko hizkuntza zientifikoa, unitateen sistemen maneiu egokia barne.*».

Ikastetxe bakoitzak erabakitzen du zein mailatan lantzen den interakzioaren zatia. Adin honetan, komeni da kalkulua erraz mantentzea (P = m · g eta bi indarren kenketak), eta Arkimedesen printzipioa ideia kualitatibo gisa uztea: likidoak gorantz bultzatzen du.

**Helburuak.** Bultzada likidoak egiten duen indar gisa ezagutzea. Norabide bereko eta aurkako noranzkoko bi indar batzea. Erresultante nulua atsedenarekin eta erresultante ez-nulua abiadura-aldaketarekin lotzea. Dentsitatea kg/L-tan eta kg/m³-tan adieraztea.

**Azalpen-sekuentzia (15-20 min).**

1. Balio libreak, hasierako balioekin eta «Gorputz askearen diagrama» aktibatuta. Aurkeztu bi indarrak: pisua beherantz eta bultzada gorantz. Blokea geldi dagoela, P = E = 490,0 N, eta erresultantea nulua da.
2. Kalkulatu pisua arbelean: P = m · g = 50 × 9,8 = 490 N. Egiaztatu «URRATSEZ URRATS» koadroan.
3. Igo masa 150 kg-ra. Jaisten ari den bitartean, diagramak «P > E» eta beherako gezi hori bat markatzen ditu. Blokea estalita dagoela, Fn = 1470 − 980 = 490 N. Erresultantea dago, eta horregatik aldatzen da abiadura.
4. Blokea hondoan geldi dagoela, seinalatu hirugarren indarra: hondoak gorantz bultzatzen du N = 490 N-rekin, eta erresultantea berriro 0 da (P = E + N). Ondoren, jaitsi masa 30 kg-ra. Igotzen ari den bitartean, diagramak «P < E» eta goranzko gezi berde bat markatzen ditu: 294 − 980 = −686 N. Zeinu negatiboak erresultantea gorantz doala adierazten du.
5. Blokea flotatzen geratzen da, 30,0 L murgilduta eta E = P = 294 N-rekin. Erresultante nulua berriro: Newtonen lehen legea.
6. Igaro «Material errealak» modura, ur gezarekin: 1,000 kg/L baino dentsitate txikiagoko materialek flotatzen dute, eta dentsoagoak hondoratzen dira. Unitate-aldaketa «Blokearen dents.» txartelarekin: 30 kg / 100 L = 0,30 kg/L = 300 kg/m³. Gogorarazi 1 kg/L = 1 g/cm³ = 1000 kg/m³ dela. Dentsitatea aurkezteko, hobe da dentsitatearen simulazioa.

### DBHko 3. maila (Fisika eta Kimika): jakintza espezifikorik gabe

*14-15 urte · 9th grade AEBn · Year 10 Erresuma Batuan*

3. mailako curriculumak ez ditu indarrak edo fluidoak lantzen. Simulazioa errepaso gisa bakarrik erabil daiteke, dentsitatea edo pisua gogorarazteko.

### Batxilergoko 1. maila: noizbehinkako errepasoa

*16-17 urte · 11th grade AEBn · Year 12 Erresuma Batuan*

F multzoan agertzen dira «Partikula baten eta solido zurrun baten portaera estatiko edo dinamikoaren aurreikuspena, osaera bektorialetatik abiatuta eta indar pare baten eraginpean» eta «Partikula baten gainean aplikatutako mekanika bektorialaren eta bere atseden- edo mugimendu-egoeraren arteko erlazioa». Simulazioak flotatzen ari den gorputz baten translazio-oreka errepasatzeko balio du, baita pisua eta normala lantzeko ere. 150 kg-rekin eta 100 L-rekin, blokea hondoan geratzen da, eta diagramak normala marrazten du: N = P − E = 1470 − 980 = 490 N. Ikasleei eska dakieke kalkula dezatela diagrama aktibatu aurretik.

## Zuzentzen laguntzen dituen ideia okerrak

Simulazioak batez ere flotatzea objektuaren pisuaren edo tamainaren mende dagoelako ideia du jomugan. Errenkada bakoitzak ohiko aurretiazko ideia bat eta simulazioarekin nola desegin adierazten du.

| Ikasleen ideia | Ideia zuzena | Nola erakutsi |
| --- | --- | --- |
| «Asko pisatzen duena hondoratzen da, eta arina dena flotatzen du» | Flotatzea gorputzaren dentsitatearen mende dago, likidoarenarekin alderatuta | Balio libreak, 140 kg eta 150 L: P = 1372 N, ρ = 0,93 kg/L eta flotatzen du. Gero 60 kg eta 50 L: P = 588 N, ρ = 1,20 kg/L eta hondoratzen da |
| «Objektu handiek flotatzen dute, eta txikiak hondoratzen dira» | Tamaina berarekin, batzuek flotatzen dute eta beste batzuek ez | Material errealak ur gezan: bloke guztiek 100 L dituzte. Egurrak flotatzen du eta aluminioa hondoratzen da |
| «Objektu bat hondoratzen bada, urak ez du bultzatzen» | Murgildutako gorputz orok jasotzen du bultzada, flotatu ala ez | Material errealak, burdina ur gezan: blokea hondoratzen da, E = 980 N eta P = 7713 N |
| «Zenbat eta sakonago, orduan eta bultzada handiagoa» | Bultzada bolumen murgilduaren mende dago, ez sakoneraren mende | Balio libreak, 150 kg eta 100 L: blokea erabat murgilduta jaisten den bitartean, «Bultzada (E)» 980 N-n mantentzen da |
| «Gorputz astunago batek bultzada handiagoa jasotzen du» | Bolumen murgildu berarekin eta likido berean, bultzada bera da | Material errealak ur gezan: aluminioak, berunak eta urreak E = 980 N jasotzen dute hirurek |
| «Flotatzen badu, bultzada pisua baino handiagoa da» | Atsedenean flotatzen duen gorputz batean, E = P | Hasierako balioak «Gorputz askearen diagrama» aukerarekin: P = E = 490,0 N eta «P ≈ E» errotulua |
| «Objektu batek berez flotatzen du edo hondoratzen da, likidoa edozein dela ere» | Likidoaren dentsitatearen mende dago | Material errealak: plastikoak ur gezan flotatzen du (0,95 < 1,000) eta olioan hondoratzen da (0,95 > 0,920). Burdinak merkurioan flotatzen du |

## Ezagutzea komeni diren sinplifikazioak

Simulazioak pisuaren eta bultzadaren arteko alderaketa lehenesten du, eta horretarako mugimendua, depositua eta indar batzuk sinplifikatzen ditu. Komeni da lizentzia horiek ezagutzea, nahi gabe ideia okerrak ez indartzeko.

1. **Normala hondoan bakarrik agertzen da.** Hondoa da euskarri-gainazal bakarra: ez dago bultzatzen duen alboko hormarik edo estalkirik. Blokea hondoan dagoela, normala N = P − E da, eta indar garbia 0.
2. **«Oreka neutroa» dentsitate berdinak behar ditu.** Errotulua ρblokea eta ρlikidoa bat datozenean bakarrik agertzen da (% 0,1eko tolerantziarekin, biribiltzeagatik). Muga-kasu bat da: edozein alde nabarmenek blokea igo edo jaitsi egiten du, oso poliki bada ere.
3. **Maila depositu lau batean igotzen da.** Likidoaren maila blokearen azalera murgildua deposituaren zabaleran banatuta igotzen da, dena 2D ebaketa bat balitz bezala. Horregatik igotzen da gehiago diagrama irekita dagoenean, depositua estuago marrazten baita.
4. **Ez da presioa ikusten.** Bultzada zuzenean E = ρlikidoa · g · Vsub formulatik ateratzen da. Ez da aurpegien arteko presio-aldetik kalkulatzen. Alboko % 17tik % 83rako markek sakonera erlatiboa baino ez dute adierazten. DBHko 4. mailan, arbelean azaldu behar da bultzadaren jatorria.
5. **Unitate praktikoak, ez SI.** Dentsitateak kg/L-tan doaz eta bolumenak L-tan; horrela, L × kg/L × 9,8 eragiketak newtonak ematen ditu zuzenean. g = 9,8 m/s² erabiltzen da. Interfazeak puntuarekin idazten ditu hamartarrak. Unitate-aldaketak lantzean, komeni da kg/m³-ra eta m³-ra igarotzea.
6. **Tarte mugatuak Balio libreak moduan.** Graduatzaileekin, blokearen dentsitatea 0,07tik 4,00 kg/L-ra bakarrik doa. Dentsitate handiagoetarako, Material errealak erabili behar da; han bolumena beti 100 L da, eta masa 1930 kg-ra iristen da urrearekin.
7. **Mugimendu kualitatiboa bakarrik.** Abiadura 0,90ez biderkatzen da likidoaren barruko fotograma bakoitzean, muga bat du, eta ez dago airearekiko marruskadurarik. Blokea oszilatu eta balaztatu egiten da, modu orientagarrian. Ez du balio denborak edo azelerazioak neurtzeko.
8. **Bloke ideala.** Blokea beti karratu bat da, ez da biratzen ezta iraultzen ere, eta pantailako tamaina bolumenarekin hazten da modu linealean. Ez da itsasontzien egonkortasuna edo kaskoaren forma lantzen.
9. **Dentsitate finkoak.** Material eta likido bakoitzak balio bakarra du, tenperaturaren eraginik gabe. Blokea likidoa baino dentsoagoa denean igotzen diren burbuilak apaingarri hutsak dira.

## Ikasleen jarduera-fitxa

[Jarduera-fitxak](https://simulaciencia.es/eu/fitxak/arquimedes/) iragarri, behatu eta azaldu eskema jarraitzen du. Jarduera bakoitzak simulazioa prestatuta irekitzen duen esteka du; beraz, informatika-gelan, tabletekin edo etxeko lan gisa erabil daiteke. Word eta LibreOffice formatuetan deskargatzen da, egokitu ahal izateko.

| Maila | Jarduerak | Gutxi gorabeherako iraupena |
| --- | --- | --- |
| DBHko 4. maila | Hasi aurretik, 1.etik 6.era bitarteko jarduerak, Aplikatu ikasitakoa, Berrikusi zure ideiak eta Autoebaluazioa | 50-55 minutuko saio bat, edo bi ariketak klasean egiten badira |
| DBHko 1. edo 2. maila (Natura Zientziak) | 1., 2. eta 3. jarduerak, pisuan, bultzadan, normalean eta erresultantean oinarrituta | Saio bat |
| Batxilergoko 1. maila | 2. jarduera eta Gehiago jakiteko, translazio-orekaren errepaso gisa | 20-25 minutu |

«Hasi aurretik» taulak ideia okerren taulako bost aurretiazko ideia biltzen ditu. Hobe da hasieran ez zuzentzea: ikasleak «Berrikusi zure ideiak» atalean itzultzen dira hara.

### Soluzioak

| Atala | Soluzioa |
| --- | --- |
| Hasi aurretik | Denak gezurrak. a) Dentsitatearen mende dago, ez pisuaren mende (2. eta 5. jarduerak). b) Murgildutako gorputz orok jasotzen du bultzada (3. eta 5. jarduerak). c) Bultzada bolumen murgilduaren mende dago, ez sakoneraren mende (3. jarduera). d) Atsedenean flotatzen badu, E = P (1. jarduera). e) Likidoaren mende dago (4. eta 6. jarduerak) |
| 1. jarduera | P = 490 N, E = 490 N, 50 L murgilduta, «P ≈ E». Geldi dago erresultantea nulua delako. 50 L urek 50 kg dituzte eta 490 N pisatzen dute, bultzadaren adina. Arkimedesen printzipioa: fluido batean murgildutako gorputz orok gorako bultzada bertikal bat jasotzen du, desplazatzen duen fluidoaren pisuaren berdina |
| 2. jarduera | 50 kg: 0,50 kg/L, 50 L, 490 N, flotatzen du. 80 kg: 0,80 kg/L, 80 L, 784 N, flotatzen du. 100 kg: 1,00 kg/L, 100 L, 980 N, oreka neutroa. 150 kg: 1,50 kg/L, 100 L, 980 N, hondoratzen da. Zati murgildua ρblokea / ρlikidoa da. 150 kg-rekin, blokea osorik dago barruan, eta bultzada maximoa 980 N da; hondoan normala agertzen da, N = 1470 − 980 = 490 N |
| 3. jarduera | Bultzada 980 N-n mantentzen da estalita jaisten den bitartean eta hondoan. Bolumen murgilduaren eta likidoaren mende dago, ez sakoneraren mende |
| 4. jarduera | 1,00 kg/L: hondoratzen da, 100 L, 980 N. 1,50 kg/L: oreka neutroa, 100 L, 1470 N. 2,00 kg/L: flotatzen du, 75 L, 1470 N. 3,00 kg/L: flotatzen du, 50 L, 1470 N. Zenbat eta dentsoagoa izan likidoa, orduan eta gehiago pisatzen du desplazatutako litro bakoitzak, eta bolumen txikiagoa nahikoa da pisua berdintzeko |
| 5. jarduera | Kortxoa 0,24 kg/L, P = E = 235 N, flotatzen du. Egurra 0,60, P = E = 588 N, flotatzen du. Aluminioa 2,70, P = 2646 N, E = 980 N, hondoratzen da. Beruna 11,34, P = 11 113 N, E = 980 N. Urrea 19,30, P = 18 914 N, E = 980 N. Ura baino dentsitate txikiagokoek flotatzen dute. Hiru metalek 100 L ur berberak desplazatzen dituzte, eta, beraz, bultzada bera jasotzen dute |
| 6. jarduera | Izotza: flotatzen du, 91,7 L-rekin ur gezan eta 89,5 L-rekin itsasoko uretan (itsasoan gehiago ateratzen da kanpora). Plastikoa: ur gezan flotatzen du 95 L-rekin, eta olioan hondoratzen da. Burdina: ur gezan hondoratzen da, eta merkurioan flotatzen du 58 L inguru murgilduta. Flotatzea gorputzaren dentsitatearen mende dago, likidoarenarekin alderatuta |
| Aplikatu ikasitakoa | 1) E = 40 L · 1,00 kg/L · 9,8 N/kg = 392 N. 2) V<sub>murg</sub> = 10 · 0,24 / 1,00 = 2,4 L; % 76 ateratzen da kanpora. 3) P = 29,4 N; E = 1,2 · 1,00 · 9,8 = 11,76 N; hondoratzen da; P − E = 17,64 N. 4) V = 2 000 000 kg / 1,025 kg/L ≈ 1 951 000 L ≈ 1951 m³ |
| Gehiago jakiteko | 1) N = P − E = 1470 − 980 = 490 N. 2) Hondoratzen da m > 120 L · 1,025 kg/L = 123 kg bada |
