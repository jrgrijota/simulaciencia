# Irakaslearen gida: gasen simulazioa

## Laburpena

Gasen simulazioak puxika elastiko baten edo ontzi zurrun baten hormen kontra talka egiten duten partikulak erakusten ditu, eta talka horiek presio eta bolumen bihurtzen ditu. Euskadin DBHko 4. mailako Fisika eta Kimikan erabiltzen da batez ere, curriculumak han kokatzen baititu gasak, eta DBHko 1. eta 2. mailetako Natura Zientzietan teoria zinetiko-molekularra aurkezteko. Batxilergoko 1. mailan errepaso kualitatibo gisa ere balio du.

| Datua | Xehetasuna |
| --- | --- |
| Esteka | [jrgrijota.github.io/simulacion-gases](https://jrgrijota.github.io/simulacion-gases/) |
| Mailak | DBHko 4. maila, Fisika eta Kimika (erabilera nagusia); DBHko 1. eta 2. mailak, Natura Zientziak; errepaso kualitatiboa Batxilergoko 1. mailan |
| Irakasgaia | Fisika eta Kimika (DBHko 4. eta Batxilergoa), Natura Zientziak (DBHko 1.-2.) |
| Gutxi gorabeherako iraupena | 15-20 minutu azalpenerako, simulazioa proiektatuta |
| Materiala | Proiektorea edo arbel digitala; nabigatzailean dabil, baita mugikorrean eta tabletan ere, ezer instalatu gabe |
| Aurretiko ezagutzak | Partikularen ideia, tenperatura K-tan eta ºC-tan, bolumena litrotan; DBHko 4. mailan, presioa azalera-unitateko indar gisa |
| Irisgarritasuna | Gai iluna bakarrik. Partikulen eta mintzaren koloreak konfigura daitezke, eta «Pantaila osoa» aukera dago «⚙ Ikus-doikuntzak» atalean |

## Nola dabil simulazioa

Pantailak kontrolen ezkerreko panel bat eta gasa duen erdiko oihal bat ditu. «Ontziaren portaera» zabalgarriak «Mintz Malgua (Puxika)», hasierako aukera, eta «Horma Zurruna (Finkoa)» artean aukeratzen du. Oihalaren gainean «⏸ Pausatu» eta «⚙ Ikus-doikuntzak» botoiak daude; bigarrenak alboko tiradera bat irekitzen du.

| Modua | Irakasleak zer kontrolatzen duen | Zer erakusten duen |
| --- | --- | --- |
| Mintz Malgua (Puxika) | «Partikula kopurua», 1etik 500era (hasieran 50, ±5eko botoiak). «Tenperatura», 0tik 500 K-ra (hasieran 273 K, ±10eko botoiak), edo −273tik 227 ºC-ra K/ºC etengailuarekin | Talka bakoitzarekin deformatzen den puxika gorri bat eta haren batez besteko erradioa adierazten duen lerro berde etena. Presioa eta bolumena batera aldatzen dira |
| Horma Zurruna (Finkoa) | Kontrol berak eta, gainera, «Ontziaren bolumena» botoiak, erradioa 5 px-ka aldatzen dutenak (30etik 210 px-ra) eta bolumena litrotan erakusten dutenak. Ontziak puxikak zuen batez besteko tamainarekin hasten da | Botoi horiekin bakarrik tamainaz aldatzen den zirkulu urdin argi bat: erradio finkoan bolumena konstantea da, eta presioa bakarrik aldatzen da |
| Ikus-doikuntzak | «Partikularen tamaina» (1-15 px, hasieran 3 px), koloreak, «Kolorea abiaduraren arabera» (aktibatuta), «Erakutsi P-V grafikoa» (desaktibatuta), «Pantaila osoa» | Urdinetik (motelak) gorrira (azkarrak) doazen partikulak eta P-V grafiko bat beheko ezkerreko izkinan, P atm-tan eta V L-tan, 0tik hasita |

Hiru elementuk eusten diote azalpenari:

- **«Datu Fisikoak» txartelak.** «Presioa (P)» atm-tan eta «Bolumena (V)» L-tan erakusten dituzte, bi hamartarrekin. Hasieran 1,6 atm eta 0,8 L ingurukoak dira; karga batetik bestera zertxobait aldatzen dira, hasierako abiadurak ausazkoak direlako. Presioak gora eta behera egiten du, segundo oro berriro kalkulatzen delako.
- **«Sistemaren monitorizazioa».** Zabalgarri honek «Talken maiztasuna» (talka/s) eta «Talkak guztira» erakusten ditu. Presioak hormaren kontrako talka bakoitzaren bultzada (2 · abiadura perpendikularra) batzen du segundo batean zehar, eta perimetroaz zatitzen du: zenbat talka dauden eta zein indartsuak diren zenbatzen du. 273 K-ko 50 partikularekin, 50 talka/s inguru ateratzen dira.
- **Kolorea abiaduraren arabera.** Tenperatura berean partikula urdinak eta gorriak batera daude. Partikulen arteko talkek energia banatzen dute eta abiaduren tartea zabaltzen dute.

Simulazioak ez du laguntza-panelik ez kontzeptu nagusien panelik: azalpena irakaslearen esku dago.

## Maila bakoitzean nola erabili

DBHko 1. eta 2. mailetan, Natura Zientzietan, simulazioak eredu zinetikoa eta tenperatura-eskalak aurkezteko balio du; DBHko 4. mailan, Fisika eta Kimikan, gasen legeetarako eta presioaren kontzepturako. Aipatutako oinarrizko jakintzak Euskadiko curriculumekoak dira (77/2023 Dekretua, EHAA, 2023ko ekainaren 9a), testu ofizialaren euskarazko bertsioan. Izartxoak (*) ezinbesteko jakintza dela adierazten du, dekretuan bezala.

Beste erkidego batzuetan ez bezala, Euskadiko DBHko 3. mailako curriculumak ez ditu gasak lantzen: B multzoan egitura atomikoa eta konposatuak daude. Gasak 4. mailan agertzen dira, sistema materialen barruan, eta horregatik gasen legeen sekuentzia 4. mailan dago hemen. Kontuan izan DBHko 4. mailako Fisika eta Kimika aukerakoa dela.

### DBHko 1. eta 2. mailak (Natura Zientziak): teoria zinetikoa eta tenperatura

*12-14 urte · 7th-8th grade AEBn · Year 8-9 Erresuma Batuan*

**Oinarrizko jakintzak.** A multzoa: «Gai zientifiko jakin bati erantzuteko saiakuntzak eta landa-lana, tresnak eta espazioak (laborategia, ikasgelak, ingurunea…) modu egokian erabiliz» eta «Oinarrizko hizkuntza zientifikoa, unitateen sistemen maneiu egokia barne.*». B multzoa, «Materia eta aldaketa» atala: «Teoria zinetiko-molekularra: materiari buruzko oharretan aplikazioa, haren propietateak, agregazio-egoerak, egoera-aldaketak, eta nahasteen eta disoluzioen eraketa azalduz.*». C multzoa, «Energia» atala: «Beroak materian dituen efektuak: efektuen azterketa eta eguneroko egoeratan aplikazioa.*».

Curriculumak ez ditu tenperatura-eskalak izenez aipatzen; K eta ºC arteko bihurketa unitateen sistemen erabileran sartzen da.

**Helburuak.** Gasa mugimenduan dauden partikula gisa deskribatzea, haien artean hutsunea dagoela. Tenperatura partikulen abiadurarekin lotzea. K eta ºC arteko bihurketak egitea. Gas bat berotzean zergatik dilatatzen den azaltzea.

**Azalpen-sekuentzia (15-20 min).**

1. Hasierako konfigurazioa: puxika, 50 partikula, 273 K. Galdetu zer dagoen partikulen artean. Sakatu «⏸ Pausatu» eta seinalatu hutsunea. Berriro abiarazi «▶ Jarraitu» botoiarekin.
2. Aktibatu K/ºC etengailua: 273 K 0 ºC bihurtzen da. Idatzi arbelean T (K) = t (ºC) + 273. Graduatzailearen muturrak −273 ºC eta 227 ºC bihurtzen dira.
3. Jaitsi tenperatura 0 K-raino (−273 ºC). Partikulak gelditu egiten dira eta presioak 0,00 atm markatzen du. Aurkeztu zero absolutua Kelvin eskalaren beheko muga gisa.
4. Igo 500 K-ra. Partikulak azkarrago doaz eta gorri gehiago daude. Puxika hazi egiten da, eta bolumena 0 K-ko 0,70 L ingurutik 0,90 L ingurura igarotzen da.
5. Itzuli 100 K-ra: puxika 0,75 L ingururaino txikitzen da. Lotu dilatazioarekin: berotzean partikulak ez dira handitzen; gehiago mugitzen dira eta horma gehiago bultzatzen dute.

### DBHko 3. maila (Fisika eta Kimika): jakintza espezifikorik gabe

*14-15 urte · 9th grade AEBn · Year 10 Erresuma Batuan*

Euskadiko 3. mailako curriculumak ez ditu gasak lantzen. Simulazioak eredu zinetikoaren errepaso labur gisa bakarrik du lekua, adibidez E multzoko «Erreakzio kimikoen interpretazio makroskopikoa eta mikroskopikoa» lantzean partikula-eredua gogorarazteko, 1. eta 2. mailetako sekuentziaren 1. eta 4. urratsekin.

### DBHko 4. maila (Fisika eta Kimika): gasen legeak eta presioa

*15-16 urte · 10th grade AEBn · Year 11 Erresuma Batuan*

**Oinarrizko jakintzak.** A multzoa: «Ikaskuntza zientifikoko hainbat ingurune eta baliabide, hala nola laborategia edo ingurune birtualak: materialak, substantziak eta tresna teknologikoak.*». B multzoa: «Sistema materialak: disoluzioei eta gasei buruzko hainbat ikas-problemaren eta -egoeraren ebazpena, beste sistema material esanguratsu batzuen artean.*». D multzoa: «Indarrak eta presioa fluidoetan: indarrek eta presioak likidoetan eta gasetan dituzten efektuak. Efektu horiek deskribatzen dituzten oinarrizko printzipioak.*».

Curriculumak ez ditu Boyle, Charles eta Gay-Lussac-en legeak edo gasen lege orokorra izenez aipatzen; B multzoko «gasei buruzko» problemen ohiko edukia dira.

**Helburuak.** Presioa partikulek hormen kontra egiten dituzten talken ondorio gisa interpretatzea, horma osoan banatuta. Tenperatura eta partikula kopurua aldatzean presioa eta bolumena nola aldatzen diren aurreikustea. Gasen lege bakoitza eredu zinetikoarekin azaltzea, eta presioa, bolumena, tenperatura eta gas-kantitatea batera erlazionatzea.

**Azalpen-sekuentzia (20-25 min).**

1. «⚙ Ikus-doikuntzak» atalean, jaitsi «Partikularen tamaina» 2 px-ra: gasa gas idealera gehiago hurbiltzen da. Ireki «Sistemaren monitorizazioa» eta lotu presioa talken maiztasunarekin. Erakutsi puxika norabide guztietan berdin deformatzen dela: presioak horma osoan eragiten du, ez beherantz bakarrik.
2. Puxikarekin, jaitsi 100 K-ra eta gero igo 500 K-ra. Bolumena 0,74 L ingurutik 0,86 L ingurura igarotzen da. Charlesen legea, kualitatiboki: zenbat eta tenperatura handiagoa, orduan eta bolumen handiagoa (ikus 4. sinplifikazioa).
3. Itzuli 273 K-ra, itxaron segundo batzuk eta aukeratu «Horma Zurruna (Finkoa)». Bolumena 0,8 L inguruan finko geratzen da, eta presioa 1,5 atm ingurukoa da. Igo 500 K-ra: presioa 2,7 atm ingurura igotzen da. Jaitsi 125 K-ra: 0,7 atm inguru. Gay-Lussac-en legea: P / T mantendu egiten da, 0,0055 atm/K inguru hiru kasuetan.
4. Itzuli 273 K-ra eta igaro 50 partikulatik 100era. Presioa bikoiztu egiten da, 1,6 atm ingurutik 3,4 atm ingurura. Galdetu zergatik: partikula kopuru bikoitzak segundoko talka kopuru bikoitza ematen du.
5. Itzuli 50 partikulara. Kalkulatu P · V ≈ 1,6 atm · 0,8 L ≈ 1,3 atm·L. «Ontziaren bolumena» ataleko «+» botoiarekin, igo 2,3 L ingururaino: presioa 0,56 atm ingurura jaisten da, eta P · V-k berriro 1,3 atm·L inguru ematen du. «−» botoiarekin, jaitsi 0,37 L ingururaino: P ≈ 3,8 atm, eta P · V ≈ 1,4 atm·L. Boyleren legea: tenperatura konstantean P · V mantendu egiten da; hamarren batzuetako aldeak neurketaren zarata dira.
6. Idatzi P · V / T = konstantea, eta amaitu arbeleko taula batekin: zein aldagai finkatzen den, zein aldatzen den eta zer gertatzen den.

### Batxilergoko 1. maila: errepaso kualitatiboa

*16-17 urte · 11th grade AEBn · Year 12 Erresuma Batuan*

Simulazioak errepaso gisa balio dezake C multzoko «Sistema fisiko-kimikoetan materia-kantitateen kalkulua, adibidez, gas idealak edo disoluzioak eta horien propietateak: horiek eguneroko bizitzan dituzten egoeren berezko aldagai neurgarriak» lantzean, eta G multzoko «Sistema baten aldagai termodinamikoak, baldintzen arabera: esperimentatzen dituen tenperatura-aldaketen zehaztapena eta ingurunearekin gertatzen diren energia-transferentziak» lantzean. Tenperatura partikulen batez besteko energia zinetikoarekin eta presioa talkekin lotzeko balio du. Horma zurrunarekin eta 2 px-rekin, P · V mantendu egiten da eta P T-rekiko proportzionala da, hamarren batzuetako zaratarekin. Baina ez du balio P · V = n · R · T zenbakiekin aplikatzeko: haren unitateak eskalakoak dira.

## Zuzentzen laguntzen dituen ideia okerrak

Simulazioak batez ere gas jarraitu eta geldiaren ideia du jomugan, baita gasaren eta haren partikulen propietateen arteko nahasmena ere. Errenkada bakoitzak ohiko aurretiazko ideia bat eta simulazioarekin nola desegin adierazten du.

| Ikasleen ideia | Ideia zuzena | Nola erakutsi |
| --- | --- | --- |
| «Gasaren partikulen artean airea dago» | Partikulen artean hutsa dago | 10 partikula 273 K-tan eta «⏸ Pausatu»: puxika ia osoa hutsik dago |
| «Gas bat berotzean, bere partikulak handiagoak egiten dira» | Partikulak ez dira aldatzen; azkarrago mugitzen dira eta talka gehiago egiten dute | Puxika 100 K-tik 500 K-ra: puxika hazi egiten da eta partikulek tamaina bera dute |
| «Gas bat konprimitzean, partikulak txikitu egiten dira» | Haien arteko tartea txikitzen da, ez haien tamaina | Ontzi zurruna 2,3 L-rekin eta gero 0,37 L-rekin (4. mailako sekuentzia): partikula-tamaina bera, elkarrengandik hurbilago |
| «Gasak beherantz bakarrik bultzatzen du, bere pisuagatik» | Presioa norabide guztietako talkei zor zaie | Puxika 200 partikularekin: mintza berdin puzten da inguru osoan |
| «Gas bateko partikula guztiak abiadura berean doaz» | Tenperatura jakin batean abiaduren banaketa bat dago | 100 partikula 273 K-tan, «Kolorea abiaduraren arabera» aukerarekin: urdinak eta gorriak batera daude |
| «Partikula bakoitzak bere tenperatura du» edo «partikulak berotu egiten dira» | Tenperaturak multzoaren batez besteko energia zinetikoa neurtzen du | Pausatu 273 K-tan eta seinalatu gas berean kolore desberdineko partikulak |
| «Gas bat berotzean gas gehiago dago» | Partikula kopurua ez da aldatzen berotzean | Ontzi zurruna 273 K-tik 500 K-ra: kontagailuak 50ean jarraitzen du eta presioa igo egiten da |

## Ezagutzea komeni diren sinplifikazioak

Simulazioak talken eta presioaren arteko erlazioa lehenesten du, eta horretarako geometria, unitateak eta kalkulua sinplifikatzen ditu. Komeni da lizentzia horiek ezagutzea, nahi gabe ideia okerrak ez indartzeko.

1. **Gasa bidimentsionala da.** Partikulak plano batean mugitzen dira, eta «bolumena» zirkuluaren azalera da, litrotara proportzio zuzenean bihurtuta (5 L 220 px-ko erradiorako). «Presioa» inguruaren luzera-unitateko indarra da. Hala ere, P · V eta P / T gas erreal batean bezala portatzen dira.
2. **Presioa segundo bakoitzean neurtzen da.** Hormaren kontrako talken bultzada segundo batean zehar batzen da, eta, beraz, hamarren batzuk gora eta behera egiten ditu. Partikula gutxirekin, komeni da hainbat balio irakurtzea eta batez bestekoa hartzea.
3. **Unitateak eskalakoak dira.** Presioaren faktorea eta litrotarako bihurketa zifra zentzuzkoak emateko aukeratuta daude. 1,6 atm, 0,8 L eta 273 K-rekin 0,06 mol inguru aterako lirateke, ez 50 partikula. Zenbakiek alderatzeko balio dute, ez P · V = n · R · T aplikatzeko.
4. **Puxika kanpoko atmosferarik gabeko malguki bat da.** Mintza malgukiz lotutako 60 nodo dira, 90 px-ko pausaguneko erradioarekin. 0 K-tan puxika ez da husten: 0,70 L inguruan geratzen da. 100 K-tik 500 K-ra bolumena 0,75 L ingurutik 0,90 L-ra baino ez da hazten, barruko presioa ia laukoiztu arren: mintza oso zurruna da. Charlesen legea bere noranzkoan ikusten da, ez bere proportzioan.
5. **Tenperaturak abiadurak eskalatzen ditu.** Partikula bakoitza 1,5 eta 3,5 px/fotograma arteko ausazko abiadurarekin jaiotzen da, √(T/300)-z biderkatuta. T aldatzean, guztiak √(T berria / T zaharra)-z biderkatzen dira. Horrela, batez besteko energia zinetikoa T-rekiko proportzionala da, benetako ereduan bezala. Bihurketak 273 erabiltzen du, ez 273,15.
6. **Zero absolutua klasikoa da.** 0 K-tan partikulak erabat gelditzen dira, eta presioa 0,00 atm-ra behartzen da. DBHn nahikoa da. Batxilergoan zehaztu daiteke iritsi ezin den muga bat dela.
7. **Hormaren kontrako talkek ez dute hozten ez berotzen.** Partikulek abiadurarik galdu gabe errebotatzen dute, mintza mugitu arren. Ez dago hozterik zabaltzean: tenperatura kontrolarekin bakarrik aldatzen da. Prozesu guztiak isotermoak dira, irakasleak tenperatura mugitzen ez badu.
8. **Partikulek tamaina dute.** Hasierako erradioa 3 px da, eta elkarren artean talka egiten dute. Bolumen propio horren ondorioz, presioa partikula kopurua baino zertxobait gehiago hazten da: 3 px-rekin eta partikula askorekin, faktoreak 2 gainditzen du. 1 edo 2 px-rekin, 50 partikulatik 100era bikoiztu egiten da. Gasen legeetarako, komeni da 2 px erabiltzea.
9. **P-V grafikoak gutxi gordetzen du.** 3 s-ro puntu bat gehitzen du batez besteko balioekin, eta azken 35ak gordetzen ditu. V 0tik 5 L-ra doa, eta P 0tik azken maximora, bere kabuz berregokitzen dena. Modua aldatzean ezabatu egiten da.

## Ikasleen jarduera-fitxa

[Jarduera-fitxak](https://simulaciencia.es/eu/fitxak/gases/) iragarri, behatu eta azaldu eskema jarraitzen du. Jarduera bakoitzak simulazioa prestatuta irekitzen duen esteka du; beraz, informatika-gelan, tabletekin edo etxeko lan gisa erabil daiteke. Word eta LibreOffice formatuetan deskargatzen da, egokitu ahal izateko.

| Maila | Jarduerak | Gutxi gorabeherako iraupena |
| --- | --- | --- |
| DBHko 4. maila | Hasi aurretik, 1.etik 6.era bitarteko jarduerak, Aplikatu ikasitakoa, Berrikusi zure ideiak, Gehiago jakiteko eta Autoebaluazioa | 50-55 minutuko saio bat, edo bi ariketak klasean egiten badira |
| DBHko 1. edo 2. maila (Natura Zientziak) | Hasi aurretik, 1.etik 3.era bitarteko jarduerak eta Berrikusi zure ideiak | 25-30 minutu |
| Batxilergoko 1. maila | 4.etik 6.era bitarteko jarduerak eta Gehiago jakiteko, errepaso kualitatibo gisa | 20-25 minutu |

«Hasi aurretik» taulak gasei buruzko bost aurretiazko ideia biltzen ditu. Hobe da hasieran ez zuzentzea: ikasleak «Berrikusi zure ideiak» atalean itzultzen dira hara. Simulazioaren balioak hamarren batzuk aldatzen dira karga batetik bestera eta segundo batetik bestera; soluzioek gutxi gorabeherako balioak ematen dituzte.

### Soluzioak

| Atala | Soluzioa |
| --- | --- |
| Hasi aurretik | Denak gezurrak. a) Partikulen artean hutsa dago (1. jarduera). b) Partikulak ez dira tamainaz aldatzen; azkarrago mugitzen dira (3. jarduera). c) Haien arteko tartea txikitzen da (5. jarduera). d) Gasak norabide guztietan berdin bultzatzen du: puxika alde guztietara deformatzen da (1. jarduera). e) Partikulak etengabe mugitzen dira (1. jarduera) |
| 1. jarduera | Partikulek zati oso txikia hartzen dute; ia dena hutsa da. Lerro zuzenean mugitzen dira, norabide guztietan, talka egin arte. Hormaren kontra talka egitean, bultzatu egiten dute eta errebotatu egiten dute. Puxika ez da husten, talkek barrutik bultzatzen dutelako horma norabide guztietan |
| 2. jarduera | 50 partikula: 45-50 talka/s inguru eta 1,5 atm inguru. 100: 100 talka/s inguru eta 3,4 atm inguru. 200: 200 talka/s inguru eta 6,8 atm inguru. Presioa segundoko talka kopuruarekiko (eta haien indarrarekiko) proportzionala da |
| 3. jarduera | Bolumena tenperaturarekin hazten da, 100 K-ko 0,74 L ingurutik 500 K-ko 0,86 L ingurura; partikulak urdinetik gorrira igarotzen dira. Berotzean, partikulak azkarrago mugitzen dira eta horma gehiago bultzatzen dute, eta hormak amore ematen du. Partikulak ez dira tamainaz aldatzen |
| 4. jarduera | Bolumena ez da aldatzen (0,8 L inguru). P ≈ 0,7 atm 125 K-tan, ≈ 1,5 atm 273 K-tan eta ≈ 2,7 atm 500 K-tan; P / T ≈ 0,0055 atm/K hiru kasuetan (Gay-Lussac-en legea). Potoan geratzen den gasaren presioa handitu egiten da berotzean, eta lehertu egin dezake |
| 5. jarduera | P ≈ 3,8 atm 0,37 L-rekin, ≈ 1,5 atm 0,8 L-rekin, ≈ 0,85 atm 1,5 L-rekin eta ≈ 0,56 atm 2,3 L-rekin. P · V 1,3-1,4 atm·L inguruan mantentzen da: Boyleren legea. Partikulak ez dira txikitzen: haien artean tarte gutxiago dago, eta maizago egiten dute talka hormaren kontra |
| 6. jarduera | Hasieran ≈ 0,56 atm. 500 K-tan ≈ 1,0 atm-ra igotzen da (talka indartsuagoak eta maizagoak). 100 partikularekin ≈ 2 atm-ra igotzen da (talka bikoitzak). Bolumenaren erdiarekin ≈ 4 atm-ra igotzen da (partikulak lehenago iristen dira hormara) |
| Aplikatu ikasitakoa | 1) Boyle: P₂ = 1 atm · 4 L / 1 L = 4 atm. 2) Gay-Lussac: P₂ = 1 atm · 450 K / 300 K = 1,5 atm. 3) Charles: V₂ = 2 L · 360 K / 300 K = 2,4 L. 4) Marruskadurak gurpiletako airea berotzen du; haren partikulak azkarrago mugitzen dira eta maizago eta indar handiagoz egiten dute talka hormen kontra, eta hormen bolumena ia ez da aldatzen |
| Gehiago jakiteko | 1) Hiperbola bat: P jaitsi egiten da V handitzean. 2) P · V / T ia berdina ateratzen da, hamarren batzuetako zaratarekin |
