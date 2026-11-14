// Novedades de la web (/novedades/). Es una selección, no un registro de cambios:
// solo entra lo que un docente notaría en clase (una simulación o práctica nueva,
// material nuevo para el aula, un idioma nuevo o una función que cambia cómo se usa
// una simulación). Nada de arreglos, diseño, SEO ni cambios técnicos.
// Cada entrada la propone Claude y la aprueba Juanra antes de publicarla.
//
// Campos: date (AAAA-MM-DD), link(lang) => ruta interna, langs (opcional: idiomas en
// los que tiene sentido; sin él, en todos) y el texto en cada idioma { title, text }.
// La más reciente, primero. También salen en el canal RSS (/novedades.xml).
import { coursePath, simPath, guionPath, homePath } from '../paths.js';

export const NEWS = [
  {
    date: '2026-11-14',
    link: (lang) => coursePath('3ESO', lang),
    es: { title: 'Páginas por curso y por tema', text: 'Todas las simulaciones de un curso (por ejemplo, 3.º ESO) o de un tema (por ejemplo, El átomo) reunidas en una sola página, con su guía y su ficha.' },
    en: { title: 'Pages by year group and topic', text: 'All the simulations for a year group (for example, Year 10) or a topic (for example, The atom) gathered on one page, with their guides and worksheets.' },
    ca: { title: 'Pàgines per curs i per tema', text: "Totes les simulacions d'un curs (per exemple, 3r ESO) o d'un tema (per exemple, L'àtom) reunides en una sola pàgina, amb la guia i la fitxa." },
    eu: { title: 'Orriak mailaka eta gaika', text: 'Maila bateko (adibidez, DBH 3.) edo gai bateko (adibidez, Atomoa) simulazio guztiak orri bakarrean, gidarekin eta fitxarekin.' },
    gl: { title: 'Páxinas por curso e por tema', text: 'Todas as simulacións dun curso (por exemplo, 3.º ESO) ou dun tema (por exemplo, O átomo) reunidas nunha soa páxina, coa súa guía e a súa ficha.' },
  },
  {
    date: '2026-11-11',
    link: (lang) => guionPath('sim-densidad', lang),
    es: { title: 'Fichas de actividades para el alumnado', text: 'Cada una de las 14 simulaciones tiene ya su ficha: predice, observa y explica, con enlaces que abren la simulación preparada. Se descarga en Word, LibreOffice o PDF para adaptarla.' },
    en: { title: 'Student activity worksheets', text: 'Each of the 14 simulations now has its worksheet: predict, observe and explain, with links that open the simulation already set up. Download it as Word, LibreOffice or PDF to adapt it.' },
    ca: { title: "Fitxes d'activitats per a l'alumnat", text: 'Cadascuna de les 14 simulacions ja té la seva fitxa: prediu, observa i explica, amb enllaços que obren la simulació preparada. Es descarrega en Word, LibreOffice o PDF per adaptar-la.' },
    eu: { title: 'Ikasleentzako jarduera-fitxak', text: '14 simulazioek badute jada beren fitxa: iragarri, behatu eta azaldu, simulazioa prestatuta irekitzen duten estekekin. Word, LibreOffice edo PDF formatuan deskarga daiteke, egokitzeko.' },
    gl: { title: 'Fichas de actividades para o alumnado', text: 'Cada unha das 14 simulacións ten xa a súa ficha: predí, observa e explica, con ligazóns que abren a simulación preparada. Descárgase en Word, LibreOffice ou PDF para adaptala.' },
  },
  {
    date: '2026-11-07',
    langs: ['es'],
    link: (lang) => simPath('sim-practica-densidad', lang),
    es: { title: 'Primera práctica de laboratorio: densidad de un sólido', text: 'Mide la masa con la balanza y el volumen con la probeta, calcula la densidad e identifica el material. Con guía docente y guion del alumnado editable.' },
  },
  {
    date: '2026-11-06',
    link: (lang) => simPath('sim-cambios-estado', lang),
    es: { title: 'Cambios de estado: pausa, hielo seco y yodo', text: 'Ahora se puede detener la simulación para comentar un instante, y hay dos sustancias nuevas que subliman: el hielo seco y el yodo.' },
    en: { title: 'Changes of state: pause, dry ice and iodine', text: 'You can now pause the simulation to discuss a moment, and there are two new substances that sublime: dry ice and iodine.' },
    ca: { title: "Canvis d'estat: pausa, gel sec i iode", text: 'Ara es pot aturar la simulació per comentar un instant, i hi ha dues substàncies noves que sublimen: el gel sec i el iode.' },
    eu: { title: 'Egoera-aldaketak: pausa, izotz lehorra eta iodoa', text: 'Orain simulazioa gelditu daiteke une bat komentatzeko, eta sublimatzen diren bi substantzia berri daude: izotz lehorra eta iodoa.' },
    gl: { title: 'Cambios de estado: pausa, xeo seco e iodo', text: 'Agora pódese deter a simulación para comentar un instante, e hai dúas substancias novas que subliman: o xeo seco e o iodo.' },
  },
  {
    date: '2026-10-16',
    link: (lang) => simPath('sim-ondas', lang),
    es: { title: 'Nueva simulación: Ondas', text: 'Una cuerda y un muelle para distinguir ondas transversales y longitudinales, medir amplitud, longitud de onda y período, y ver que una onda transporta energía, no materia. Con su guía docente.' },
    en: { title: 'New simulation: Waves', text: 'A string and a spring to tell transverse from longitudinal waves, measure amplitude, wavelength and period, and see that a wave carries energy, not matter. With its teacher guide.' },
    ca: { title: 'Nova simulació: Ones', text: 'Una corda i una molla per distingir ones transversals i longitudinals, mesurar amplitud, longitud d’ona i període, i veure que una ona transporta energia, no matèria. Amb la seva guia docent.' },
    eu: { title: 'Simulazio berria: Uhinak', text: 'Soka bat eta malguki bat zeharkako eta luzetarako uhinak bereizteko, anplitudea, uhin-luzera eta periodoa neurtzeko, eta uhinak energia garraiatzen duela ikusteko, ez materia. Irakaslearen gidarekin.' },
    gl: { title: 'Nova simulación: Ondas', text: 'Unha corda e un resorte para distinguir ondas transversais e lonxitudinais, medir amplitude, lonxitude de onda e período, e ver que unha onda transporta enerxía, non materia. Coa súa guía docente.' },
  },
  {
    date: '2026-10-12',
    link: (lang) => homePath(lang),
    es: { title: 'La web, en cinco idiomas', text: 'La web y todas las simulaciones están en español, inglés, catalán, euskera y gallego. Las guías docentes, en español e inglés.' },
    en: { title: 'The website in five languages', text: 'The website and all the simulations are in Spanish, English, Catalan, Basque and Galician. The teacher guides are in Spanish and English.' },
    ca: { title: 'El web, en cinc idiomes', text: 'El web i totes les simulacions són en castellà, anglès, català, basc i gallec. Les guies docents, en castellà i anglès.' },
    eu: { title: 'Webgunea, bost hizkuntzatan', text: 'Webgunea eta simulazio guztiak gaztelaniaz, ingelesez, katalanez, euskaraz eta galizieraz daude. Irakasleen gidak, gaztelaniaz eta ingelesez.' },
    gl: { title: 'A web, en cinco idiomas', text: 'A web e todas as simulacións están en castelán, inglés, catalán, éuscaro e galego. As guías docentes, en castelán e inglés.' },
  },
];

export const newsIn = (lang = 'es') => NEWS.filter((n) => (!n.langs || n.langs.includes(lang)) && n[lang]);
