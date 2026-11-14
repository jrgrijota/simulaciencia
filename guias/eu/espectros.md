# Irakaslearen gida: espektro atomikoen simulazioa

## Laburpena

Simulazioak erakusten du atomo batek energia jakineko fotoiak baino ez dituela xurgatzen eta igortzen, argia edo elektroien talkak jasotzean, eta haren espektroa eraikitzen du. Euskadin Batxilergoko 1. mailan erabiltzen da batez ere, eta DBHko 4. mailan eta Batxilergoko 2. mailako Kimikan ere badu aplikaziorik.

| Datua | Xehetasuna |
| --- | --- |
| Esteka | [jrgrijota.github.io/simulacion-espectros](https://jrgrijota.github.io/simulacion-espectros/) |
| Mailak | Batxilergoko 1. maila (erabilera nagusia), DBHko 4. maila, Batxilergoko 2. mailako Kimika; noizbehinkako errepasoa Batxilergoko 2. mailako Fisikan |
| Irakasgaia | Fisika eta Kimika |
| Gutxi gorabeherako iraupena | 15-20 minutu azalpenerako, simulazioa proiektatuta |
| Materiala | Proiektorea edo arbel digitala; nabigatzailean dabil, baita mugikorrean eta tabletan ere, ezer instalatu gabe |
| Aurretiko ezagutzak | Elektroiak mailetan dituen atomoaren ideia, espektro ikusgaia eta koloreak; Batxilergoan, E = h·f eta elektronvolta |
| Irisgarritasuna | Itxura iluna, argia eta kontraste handikoa (engranajearen botoia) |

## Nola dabil simulazioa

Simulazioak hiru modu ditu, «Fotoiak», «Talka» eta «Gas Ionizatua», ezkerreko panelaren goialdean aukeratzen direnak. Azpian, «Elementua» zabalgarriak hidrogenoa (4 maila), helioa (3), sodioa (3) eta neona (5) eskaintzen ditu. Fotoiak eta Talka moduetan atomo bat ikusten da, bere orbitak energiarekin errotulatuta. Eskuinean «Energia-mailen diagrama» agertzen da, eV-tan. Hiru moduetan, behean dago «Emisio-espektroa», 380 nm-tik 780 nm-ra; Fotoiak moduan zerrenda bitan zatitzen da eta gainean «Absortzio-espektroa» agertzen da. Azpian, beste barra batek UV (200-380 nm) eta IR (780-3000 nm) biltzen ditu.

| Modua | Irakasleak zer kontrolatzen duen | Zer erakusten duen |
| --- | --- | --- |
| Fotoiak, «Argi zuria» | «Fotoi bat» (oihaleko iturrian klik eginez jaurtitzen da) edo «Emisio jarraitua», «Fotoi-fluxua» «Motela»tik «Maximoa»ra | 380 eta 780 nm arteko ausazko uhin-luzerako fotoiak. Atomoak bere lerro ikusgaietako batekin bat datozenak baino ez ditu xurgatzen |
| Fotoiak, «Monokromatikoa» | «Uhin-luzera» 380 nm-tik 780 nm-ra, 2 nm-ko urratsetan; 550 nm-an hasten da | Fotoia trantsizio batekin bat badator, errotuluak «XURGATZEN DU 656 nm» adierazten du eta elektroia orbitaz igotzen da. Bestela, fotoiak aurrera jarraitzen du |
| Talka | «Elektroiaren energia» 0,5 eV-tik 6,0 eV-ra, 0,1eko urratsetan; 3,0 eV-an hasten da. «Jaurtiketa bakarra» (klik kanoian) edo «Sorta jarraitua», «Jaurtiketa-maiztasuna»rekin | «KITZIKAPENA» errotulua elektroiak energia nahikoa badu, edo «Talka elastikoa — energia nahikorik ez» bestela. Panel batek energia horrekin zer mailatara iristen den adierazten du |
| Gas Ionizatua | «Hodiaren tentsioa» 1 eV-tik 8 eV-ra, 0,2ko urratsetan; 5,0 eV-an hasten da. «Gasaren dentsitatea» «Oso diluitua»tik «Oso dentsoa»ra (4tik 20 atomora); «Ertaina»n hasten da (10 atomo) | Katodoa eta anodoa dituen hodi bat. Elektroiek atomoak kitzikatzen dituzte, eta horiek distira egiten dute eta igorri egiten dute. Elektroi askeen, atomo kitzikatuen eta igorritako fotoien kontagailuak, eta lerro bakoitzaren gainean fotoi kopurua |

Lau elementuk eusten diote azalpenari:

- **Energia-mailen diagrama.** Mailak beren energiarekin eta trantsizio posible guztiak erakusten ditu. Gertatu berri den trantsizioa nabarmendu egiten da, eta puntu batek elektroiaren maila markatzen du.
- **Egoera-errotulua.** Atomoaren gainean agertzen da, adibidez, «XURGATZEN DU 486 nm» edo «IGORTZEN DU 656 nm», abiapuntuko eta helmugako mailekin, argiaren kolorez margotuta.
- **Espektroak.** Igorritako fotoi bakoitzak bere lerroa pizten du 380-780 nm-ko barran. UV eta IR lerroak beheko barrara doaz. Fotoiak moduan, xurgatutako fotoi bakoitzak bere marra iluntzen du absortzio-espektroan, justu gainean dagoen ortzadar batean; beraz, marra ilunak eta distiratsuak lerrokatuta geratzen dira. Lerroak pixkanaka itzaltzen dira, pausan izan ezik.
- **Energia eskuragarriaren panela.** Talka moduan, «Irits zaitezkeen mailak (3.0 eV):» panelak ✓ edo ✗ batez markatzen ditu maila bakoitza eta behar duen energia.

«Pausatu» eta «Garbitu» botoiak hiru moduetan daude; «Garbitu»k espektroa eta kontagailuak ezabatzen ditu. «Atomoaren trantsizioak» zabalgarriak trantsizio bakoitza zerrendatzen du, bere uhin-luzerarekin, eskualdearekin (ikusgaia, UV edo IR) eta mailekin. «Funtsezko kontzeptuak» atalak E = h·f = h·c / λ eta ΔE = E_goi − E_behe laburbiltzen ditu.

## Maila bakoitzean nola erabili

DBHko 4. mailan, simulazioak eduki zehatza ematen die eredu atomiko kuantikoei eta energia garraiatzen duen argiari. Batxilergoko 1. mailan, tresna nagusia da erradiazioarekiko interakzioa eta egitura elektronikoa erlazionatzeko. Batxilergoko 2. mailako Kimikan, espektro atomikoei eta Bohrren eredutik egindako bideari laguntzen die. DBHko 3. mailan eta lehenagokoetan ez dago simulazioa sartzeko jakintzarik. Aipatutako oinarrizko jakintzak eta ebaluazio-irizpideak Euskadiko curriculumekoak dira (77/2023 Dekretua DBHrako eta 76/2023 Dekretua Batxilergorako, EHAA, 2023ko ekainaren 9a), testu ofizialaren euskarazko bertsioan. Izartxoak (*) ezinbesteko jakintza dela adierazten du, dekretuan bezala. Kontuan izan DBHko 4. mailako Fisika eta Kimika aukerakoa dela.

### DBHko 4. maila (Fisika eta Kimika): energia-mailak eta argiaren kolorea

*15-16 urte · 10th grade AEBn · Year 11 Erresuma Batuan*

**Oinarrizko jakintzak.** B multzoa: «Eredu atomikoak: eredu atomiko klasiko eta kuantiko nagusien garapen historikoa eta partikula subatomikoen deskribapena, fisikaren eta kimikaren aurrerapenekin duten erlazioa ezarriz.*» eta «Atomoen egitura elektronikoa: atomo baten konfigurazio elektronikoa eta horrek taula periodikoan duen posizioarekin […] duen erlazioa.*». C multzoa: «Energia-transferentziak: […] Argia eta soinua, energia transferitzen duten uhin gisa.*». A multzoa: «Ikaskuntza zientifikoko hainbat ingurune eta baliabide, hala nola laborategia edo ingurune birtualak […].*».

**Ebaluazio-irizpideak.** 1.1 (eguneroko fenomeno fisiko-kimikoak ulertzea eta printzipio, teoria eta lege egokien arabera zorrotz azaltzea), 2.2 (modu esperimentalean edo deduktiboan egiazta daitezkeen erantzunak aurreikustea) eta 6.1 (zientzia etengabe eraikitzen ari den prozesua dela onartzea, aurrerapen zientifikoen analisi historikoaren bidez).

Euskadiko curriculumak ez ditu espektroak eta energia-mailak 4. mailan aipatzen; «eredu atomiko […] kuantiko»etan eta energia transferitzen duen uhin gisa ulertutako argian sartzen dira.

**Helburuak.** Elektroiak energia-maila jakin batzuk baino ez dituela betetzen ohartzea. Xurgatzea maila igotzearekin eta igortzea maila jaistearekin lotzea. Argiaren kolorea jauziaren energiarekin erlazionatzea. Espektroa elementu bakoitzaren hatz-marka gisa ulertzea.

**Azalpen-sekuentzia (15-20 min).**

1. Fotoiak modua hidrogenoarekin, «Monokromatikoa» 550 nm-an eta «Fotoi bat» (hasierako konfigurazioa, argia izan ezik). Jaurti iturrian klik eginez. Fotoiak aurrera jarraitzen du. Galdetu zergatik ez duen atomoak aprobetxatzen.
2. Igo uhin-luzera 656 nm-ra eta jaurti. Errotuluak «XURGATZEN DU 656 nm (n=2 → n=3)» dio eta elektroiak hurrengo orbitara egiten du jauzi. Diagraman, jauzia 1,89 eV-koa da.
3. Itxaron 3-5 s inguru: atomoak 656 nm-ko fotoi bat igortzen du edozein norabidetan. Lerro gorria espektroan agertzen da. Ondorioztatu atomoak energia kolore bereko argi gisa itzultzen duela.
4. Errepikatu 486 nm-rekin (2,55 eV) eta 434 nm-rekin (2,86 eV). Seinalatu argi urdinagoa edo bioletagoa jauzi handiagoei dagokiela. Batzuetan jaitsiera bi urratsetan egiten da: 1879 nm-ko IR fotoi bat eta gero 656 nm-ko beste bat.
5. Pasatu Gas Ionizatura 5,0 eV-an. Hidrogenoaren hiru lerro ikusgaiak agertzen dira. Aldatu elementua sodiora (589 nm-ko lerro horia, farola zaharrak) eta neonera (errotuluen gorriak eta laranjak). Elementu bakoitzak espektro desberdina ematen du.

### Batxilergoko 1. maila: espektroak eta egitura elektronikoa

*16-17 urte · 11th grade AEBn · Year 12 Erresuma Batuan*

**Oinarrizko jakintzak.** B multzoa, «Lotura kimikoa eta materiaren egitura»: «Atomoen egitura elektronikoa, erradiazio elektromagnetikoarekin interakzioaren analisiaren ondoren: elementu batek taula periodikoan duen posizioaren azalpena eta talde bakoitzeko elementu kimikoen propietateen antzekotasunen azalpena.».

**Ebaluazio-irizpideak.** 1.2 (eguneroko egoeretatik abiatuta proposatutako problema fisiko-kimikoak ebaztea, lege eta teoria zientifikoak aplikatuz) eta 3.3 (prozesu fisiko-kimiko bati buruzko informazioa interpretatu eta adierazteko hainbat formatu erabiltzea).

Euskadiko curriculumak ez ditu espektro atomikoak 1. mailako jakintza berezi gisa aipatzen; «erradiazio elektromagnetikoarekin interakzioa»n sartzen dira. Izen propioarekin Batxilergoko 2. mailako Kimikan agertzen dira.

**Helburuak.** Fotoi baten energia E = h·c / λ erabiliz kalkulatzea. Lerro bakoitza mailen arteko energia-diferentzia batekin erlazionatzea. Fotoien bidezko kitzikapena (energia zehatza) eta talka bidezkoa (gutxieneko energia) bereiztea. Energiaren kontserbazioa jauzi-segidei aplikatzea.

**Azalpen-sekuentzia (15-20 min).**

1. Fotoiak hidrogenoarekin eta «Monokromatikoa». Ireki «Atomoaren trantsizioak». Kalkulatu arbelean 656 nm-ko fotoi baten energia: E = 6,63·10⁻³⁴ · 3,00·10⁸ / 656·10⁻⁹ = 3,03·10⁻¹⁹ J = 1,89 eV. Egiaztatu diagramarekin bat datorrela.
2. Jarri 600 nm eta jaurti: 2,07 eV ez dagokio inongo jauziri eta fotoia ez da xurgatzen. Jarri 486 nm: xurgatu egiten da eta elektroia 2,55 eV-ko mailara igotzen da.
3. Behatu 2,55 eV-tik abiatutako deskitzikapena. Bi urratsetan jaisten bada, 1879 nm (0,66 eV) eta 656 nm (1,89 eV) igortzen ditu. Batu: 0,66 + 1,89 = 2,55 eV. Energia kontserbatu egiten da.
4. Talka modua hidrogenoarekin eta «Jaurtiketa bakarra». 1,5 eV-ekin «Talka elastikoa — energia nahikorik ez» ateratzen da. 2,0 eV-ekin atomoa 1,89 eV-ra kitzikatzen da eta 656 nm igortzen du. 3,0 eV-ekin 2,86 eV-ko mailara iristen da. Konparatu fotoiarekin, energia zehatza behar baitu.
5. Gas Ionizatua sodioarekin 3,0 eV-an: 589 nm-ko lerroa baino ez da agertzen (2,10 eV). Igo 3,8 eV-ra: talkak 3d mailara iristen dira eta 819 nm ere agertzen da IR zonan. Egiaztatu 2,10 + 1,52 = 3,62 eV. Ez dago 3d → 3s lerro zuzenik: jauzi hori debekatuta dago eta atomoa beti 3p-tik jaisten da.
6. Amaitu absortzio-espektroarekin. Itzuli Fotoiak modura hidrogenoarekin, «Argi zuria» eta «Emisio jarraitua». Atomoak 434, 486 eta 656 nm-ko fotoiak kentzen ditu sortatik: «Absortzio-espektroa»n marra ilunak agertzen dira posizio horietan, emisio-lerroen gainean.

### Batxilergoko 2. maila (Kimika): Bohrren eredutik hidrogenoaren espektrora

*17-18 urte · 12th grade AEBn · Year 13 Erresuma Batuan*

**Oinarrizko jakintzak.** B multzoa, «Lotura kimikoa eta materiaren egitura», «1. Espektro atomikoak»: «Espektro atomikoak, eredu atomikoa berrikusteko beharraren erantzule gisa. […]» eta «Elementuen igorpen-espektroaren eta xurgapen-espektroaren interpretazioa. Atomoaren egitura elektronikoarekiko erlazioa.». «2. Egitura atomikoaren printzipio kuantikoak»: «Espektro atomikoen fenomenoaren eta energiaren kuantizazioaren arteko erlazioa. Bohr-en eredutik eredu mekano-kuantikoetara: hainbat mailatako egitura elektroniko baten beharra.».

**Ebaluazio-irizpideak.** 2.3 (kimikaren ereduak eta legeak modu informatu, koherente eta arrazoituan aplikatzea), 6.1 (kimikaren funtsezko kontzeptuak azaltzea, beste diziplina batzuen eta bereziki fisikaren kontzeptuak aplikatuz) eta 6.3 (kimikaren problemak ebaztea, matematikak eta teknologiak eskaintzen dituzten tresnak erabiliz).

Euskadiko curriculumak ez ditu Bohrren postulatuak eta Balmerren seriea izenez aipatzen; «Bohr-en eredutik eredu mekano-kuantikoetara» doan bidean sartzen dira.

**Helburuak.** Hidrogenoaren espektro ikusgaia Balmerren serie gisa interpretatzea. Bohrren postulatuak ikusten denarekin lotzea. Kuantizazioa energia-atalaseekin erakustea. Ereduaren mugak hainbat elektroi dituzten atomoetan ezagutzea.

**Azalpen-sekuentzia (15-20 min).**

1. Seinalatu hidrogenoaren errotuluak: simulazioko mailak n = 2, 3, 4 eta 5 dira, n = 2-tik neurtutako energiekin. Oinarrizkoa, n = 1, ereduz kanpo geratzen da.
2. Egiaztatu E_n = −13,6 / n² eV erabiliz: E₃ − E₂ = 1,89 eV, E₄ − E₂ = 2,55 eV eta E₅ − E₂ = 2,86 eV. Diagramarekin bat datoz. Balmerren formularekin 656, 486 eta 434 nm ateratzen dira.
3. Gas Ionizatua hidrogenoarekin 2,0 eV-an: 656 nm-ko lerroa baino ez da agertzen. Igo 2,6 eV-ra: 486 nm ere agertzen da. 3,0 eV-an 434 nm agertzen da. Lerro bakoitzak atalase bat du: energia kuantizatuta dago.
4. Seinalatu beheko barrako 1879 eta 1278 nm-ko IR lerroak. n = 3-n amaitzen diren jauziei dagozkie, Paschenen serieari.
5. Itzuli Fotoiak modura «Argi zuria» eta «Emisio jarraitua»rekin. Absortzio-espektroko marra ilunak emisio-lerroen gainean geratzen dira justu: xurgatutako uhin-luzerak igorritakoen berberak dira. Erlazionatu elementu bereko bi espektroak.
6. Aldatu sodiora. 3s eta 3p etiketek Bohrrek azaltzen ez dituen azpimailak adierazten dituzte. Erabili ereduaren mugak eta zenbaki kuantikoen beharra aurkezteko.

### Batxilergoko 2. maila (Fisika): noizbehinkako errepasoa

*17-18 urte · 12th grade AEBn · Year 13 Erresuma Batuan*

Ez dago espektroei buruzko jakintza espezifikorik. Simulazioak E multzoari lagun diezaioke, «Fisika erlatibista, kuantikoa, nuklearra eta partikulena», «Uhin-korpuskulu dualtasuna eta kuantizazioa: De Broglie-ren hipotesia eta efektu fotoelektrikoa» lantzean. Hidrogenoarekin, 550 nm-an eta «Emisio jarraitua» fluxu «Maximoa»n dela, fotoi bat ere ez da xurgatzen. Efektu fotoelektrikoarekiko analogia zuzena da: fotoi bakoitzaren energiak du garrantzia, ez zenbat iristen diren.

## Zuzentzen laguntzen dituen ideia okerrak

Simulazioak batez ere argiaren energia jarraitua dela eta haren intentsitatearen araberakoa baino ez dela dioen ideiari egiten dio aurre. Errenkada bakoitzak ohiko aurretiazko ideia bat eta simulazioarekin nola desegin adierazten du.

| Ikasleen ideia | Ideia zuzena | Nola erakutsi |
| --- | --- | --- |
| «Argi asko iristen bada, atomoak azkenean xurgatuko du» | Fotoi bakoitza haren energia jauzi batekin bat badator bakarrik xurgatzen da | Hidrogenoa, «Monokromatikoa» 550 nm-an, «Emisio jarraitua» eta «Maximoa» fluxua: fotoi bat ere ez da xurgatzen. 656 nm-an, bai |
| «Elektroiak edozein energia izan dezake» | Atomoaren energia kuantizatuta dago | Energia-mailen diagrama hidrogenoarekin: 0; 1,89; 2,55 eta 2,86 eV baino ez. 600 nm-an fotoiak aurrera jarraitzen du |
| «Argi gorriak urdinak baino energia gehiago du» | Fotoiaren energia λ txikitzean hazten da | Hidrogenoa: 656 nm 1,89 eV-ri dagokio eta 434 nm 2,86 eV-ri. Ikusi jauzi bakoitzaren tamaina diagraman |
| «Atomoak fotoi bera itzultzen du berehala, ispilu batek bezala» | Denbora batez kitzikatuta geratzen da eta edozein norabidetan igortzen du, batzuetan hainbat urratsetan | Hidrogenoa 486 nm-an: segundo batzuen ondoren 1879 nm eta gero 656 nm igor ditzake, norabide desberdinetan |
| «Elektroi batek energia zehatza behar du, fotoi batek bezala» | Talka bidez nahikoa da jauziaren energia bera edo handiagoa izatea | Talka hidrogenoarekin 2,0 eV-an: 1,89 eV-ko maila kitzikatzen du. 1,5 eV-an, «Talka elastikoa — energia nahikorik ez» |
| «Lanparak distira egiten du gasa berotu edo erretzen delako» | Elektroien talkek atomoak kitzikatzen dituzte, eta horiek deskitzikatzean igortzen dute | Gas Ionizatua hidrogenoarekin 1,0 eV-an: elektroiak badaude, baina fotoirik ez. Igo 2,0 eV-ra: 656 nm-ko argia agertzen da |
| «Gas guztiek argi bera ematen dute» | Elementu bakoitzak bere espektroa du, hatz-marka bat bezala | Gas Ionizatua 5,0 eV-an: aldatu hidrogenoa, helioa, sodioa eta neona, eta konparatu lerroak |
| «Ikusten dugun argia baino ez dago» | Igorpen ultramoreak eta infragorriak badaude | Gas Ionizatua sodioarekin 3,8 eV-an: 819 nm (IR) agertzen da beheko barran. Hidrogenoarekin 5,0 eV-an, 1879 eta 1278 nm |

## Ezagutzea komeni diren sinplifikazioak

Simulazioak «maila diskretuak, energia jakineko jauziak» ideiari ematen dio lehentasuna, eta horretarako atomoak eta denborak sinplifikatzen ditu. Komeni da lizentzia horiek ezagutzea, nahi gabe ideia okerrak ez indartzeko.

1. **Hidrogenoa n = 2-n hasten da.** Mailak n = 2tik n = 5era doaz eta 0; 1,89; 2,55 eta 2,86 eV balio dute, n = 2-tik neurtuta: lerroak Balmerrenak dira. Oinarrizkoa, n = 1, kanpoan geratzen da, eta panelak n = 2 mailari «ereduko baxuena» deitzen dio. DBHko 4. mailan nahikoa da «beheko maila»z hitz egitea.
2. **Energia positiboak eta maila gutxi.** Energia guztiak beheko mailatik neurtzen dira, 0 balioarekin, eta ez dago energia negatiborik ez ionizaziorik. Atomo bakoitzak 3 eta 5 maila artean ditu. Batxilergoko 2. mailan komeni da gogoraraztea E_n = −13,6 / n² eV dela.
3. **Beheko maila ez da beti oinarrizkoa.** Helioan eta neonean, E₁ maila egoera kitzikatua da jada. Benetako oinarrizkotik 20 eV inguru beharko lirateke. Sodioan mailak 3s, 3p eta 3d dira, benetako energiekin; 3s ↔ 3d jauzia debekatuta dago eta ez da agertzen. Batxilergorako, maila-eredu gisa aurkeztu, ez datu zehatz gisa.
4. **18 nm-ko tartea duen absortzioa.** Lerro batetik 18 nm baino gutxiagora dagoen edozein fotoi xurgatzen da: hidrogenoarekin, 640 nm ere 656 nm balitz bezala xurgatzen da. Benetako lerroak askoz estuagoak dira. Gainera, fotoi ikusgaiak baino ez dira xurgatzen, eta beheko mailatik bakarrik.
5. **Ausazko jauzi-segida eta denbora motelak.** Atomoa 1,3-2,7 s egoten da kitzikatuta, eta gero 2 s maila bakoitzean igorri aurretik. Maila bakoitzetik trantsizio baimendua duen edozein beheko mailatara jaisten da, probabilitate berarekin (sodioan, 3d-tik 3p-ra bakarrik). Errealitatean batez besteko bizitza nanosegundo ingurukoa da, eta trantsizio batzuk beste batzuk baino askoz probableagoak dira.
6. **Talka sinplifikatuak.** Elektroiak iristen den mailarik altuena kitzikatzen du beti, eta gero desagertu egiten da; ez da ikusten soberan duen energia. Gas Ionizatuan, baliozko talka bakoitzak % 40ko probabilitatearekin kitzikatzen du. «Hodiaren tentsioa» eV-tan ematen da: elektroi bakoitzaren energia da, ez lanpara baten benetako tentsioa.
7. **Planeta gisako orbitak.** Elektroiak orbita zirkularretan egiten du bira, hidrogenoan 68 eta 168 pixel arteko erradioekin marraztuta, benetako eskalarik gabe. Bohrren ereduan erradioak n²-rekin hazten dira. Batxilergoko 2. mailan komeni da orbitalaren ideiarekin kontrastatzea.
8. **Beren kabuz ezabatzen diren espektroak.** Absortzio-espektroa Fotoiak moduan bakarrik agertzen da, eta marra ikusgaiak baino ez ditu biltzen. Bi espektroetako lerroek beren distiraren erdia galtzen dute 14 s inguruan; pausan izoztu egiten dira.
9. **IR barra 3000 nm-ra mugatuta.** Hidrogenoaren 4003 nm-ko lerroak eta neonaren 3444 eta 6889 nm-koak igorri egiten dira, baina ez dira marrazten. «Atomoaren trantsizioak» atalean baino ez dira agertzen.

## Ikasleen jarduera-fitxa

[Jarduera-fitxak](https://simulaciencia.es/eu/fitxak/espectros/) iragarri, behatu eta azaldu eskema jarraitzen du. Jarduera bakoitzak simulazioa prestatuta irekitzen duen esteka du; beraz, informatika-gelan, tabletekin edo etxeko lan gisa erabil daiteke. Word eta LibreOffice formatuetan deskargatzen da, egokitu ahal izateko.

| Maila | Jarduerak | Gutxi gorabeherako iraupena |
| --- | --- | --- |
| DBHko 4. maila | Hasi aurretik, 1.etik 4.era bitarteko jarduerak, Aplikatu ikasitakoaren 3. eta 4. galderak, Berrikusi zure ideiak eta Autoebaluazioa | Saio bat |
| Batxilergoko 1. maila | Hasi aurretik, 1.etik 6.era bitarteko jarduerak, Aplikatu ikasitakoa, Berrikusi zure ideiak eta Autoebaluazioa | 50-55 minutuko saio bat, edo bi |
| Batxilergoko 2. mailako Kimika | 3., 5. eta 6. jarduerak eta Gehiago jakiteko | Saio bat |

«Hasi aurretik» taulak argiari eta atomoei buruzko bost aurretiazko ideia biltzen ditu. Hobe da hasieran ez zuzentzea: ikasleak «Berrikusi zure ideiak» atalean itzultzen dira hara.

### Soluzioak

| Atala | Soluzioa |
| --- | --- |
| Hasi aurretik | Denak gezurrak. a) Bere jauzien uhin-luzerak baino ez ditu xurgatzen (1. jarduera). b) Maila jakin batzuk baino ez ditu betetzen (1. jarduera). c) Fotoi bakoitzaren energiak du garrantzia, ez zenbat iristen diren (1. jarduera). d) Elementu bakoitzak bere espektroa du (4. jarduera). e) Urdinak gehiago garraiatzen du (3. jarduera) |
| 1. jarduera | 550 nm (berdea): ez. 600 nm (laranja): ez. 656 nm (gorria): bai, n = 2 → 3, 1,89 eV. 486 nm (urdin berdexka): bai, n = 2 → 4, 2,55 eV. 434 nm (bioleta): bai, n = 2 → 5, 2,86 eV. Elektroia maila jakin batzuetara baino ezin da igaro; fotoiak energia-diferentzia hori zehazki eraman behar du |
| 2. jarduera | Ez: segundo gutxiren buruan jaitsi egiten da eta fotoi bat igortzen du. 656: 656 nm igortzen du edozein norabidetan; lerro gorria espektroan. 486: 486 nm igortzen du edo, bi urratsetan, 1879 nm (IR, beheko barra) eta 656 nm. 0,66 + 1,89 = 2,55 eV: energia kontserbatu egiten da |
| 3. jarduera | 656 nm, gorria, 1,89 eV. 486 nm, urdin berdexka, 2,55 eV. 434 nm, bioleta, 2,86 eV. Zenbat eta uhin-luzera txikiagoa, orduan eta energia handiagoa, E = h · c / λ formulak dioen bezala |
| 4. jarduera | Hidrogenoa: 656, 486 eta 434 nm (gorria nagusi). Helioa: 588 eta 447 nm (horia). Sodioa: 589 nm (horia). Neona: 703, 639, 585 eta 454 nm (gorriak eta laranjak). Elementu bakoitzak maila desberdinak ditu eta lerro desberdinak igortzen ditu: horiek identifikatuz jakiten da zer elementu dauden izar baten argian |
| 5. jarduera | 1,5 eV: talka elastikoa, energia nahikorik ez, mailarik ez. 2,0 eV: 1,89 eV-ko maila kitzikatzen du eta 656 nm igortzen du. 3,0 eV: 1,89, 2,55 eta 2,86 eV-ko mailetara iristen da. Elektroiak ez du energia zehatza behar: nahikoa da gutxienez jauziarena izatea; gainerakoa soberan du |
| 6. jarduera | Marra ilunak 656, 486 eta 434 nm-an, lerro distiratsuen gainean justu. Atomoak jauzi berberetan xurgatzen eta igortzen du, maila berberen artean |
| Aplikatu ikasitakoa | 1) E = 6,63 · 10⁻³⁴ · 3,00 · 10⁸ / 656 · 10⁻⁹ = 3,03 · 10⁻¹⁹ J = 1,89 eV. 2) λ = h · c / E = 1,99 · 10⁻²⁵ / (2,10 · 1,60 · 10⁻¹⁹) ≈ 592 nm, horia: sodioa (589 nm). 3) Sodioak ia 589 nm-an bakarrik igortzen du (horia), eta neonak gorrian eta laranjan ditu lerro ikusgai biziena. 4) Haren energia (2,07 eV) ez dator bat inongo jauzirekin: berdin dio zenbat iristen diren |
| Gehiago jakiteko | 1) E₃ − E₂ = 13,6 · (1/4 − 1/9) = 1,89 eV; E₄ − E₂ = 2,55 eV; E₅ − E₂ = 2,86 eV. Bat datoz. 2) 656 nm 1,9-2,0 eV aldera agertzen da, 486 nm 2,6 eV aldera eta 434 nm 2,9-3,0 eV aldera: lerro bakoitzak atalase bat du, energia kuantizatuta dagoelako |
