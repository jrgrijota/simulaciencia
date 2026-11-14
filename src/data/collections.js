// Textos de las páginas por curso y por tema (/cursos/<curso>/, /temas/<tema>/):
// título, entradilla y lista de recursos. Los usan la vista (src/views/collection.js)
// y el <head> (título, descripción y datos estructurados).
import { COURSES, TOPICS, courseLabel, isPractical } from './simulations.js';
import { courseSims, topicSims } from '../paths.js';

const AND = { es: 'y', en: 'and', ca: 'i', eu: 'eta', gl: 'e' };
const list = (items, lang) =>
  items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} ${AND[lang]} ${items[items.length - 1]}`;
// «2.º Bach..» al final de una frase: un solo punto.
const fixDots = (t) => t.replace(/\.\.$/, '.');
const lower = (t) => t.charAt(0).toLowerCase() + t.slice(1);
const topicLabel = (t, lang) => t.label[lang] ?? t.label.es;

// «6 simulaciones interactivas y 1 práctica de laboratorio» (las prácticas, solo en español).
function countPhrase(sims, lang) {
  const n = sims.filter((s) => !isPractical(s)).length;
  const p = sims.length - n;
  const simsText = {
    es: `${n} ${n === 1 ? 'simulación interactiva' : 'simulaciones interactivas'}`,
    en: `${n} interactive ${n === 1 ? 'simulation' : 'simulations'}`,
    ca: `${n} ${n === 1 ? 'simulació interactiva' : 'simulacions interactives'}`,
    eu: `${n} simulazio interaktibo`,
    gl: `${n} ${n === 1 ? 'simulación interactiva' : 'simulacións interactivas'}`,
  }[lang];
  return p ? `${simsText} y ${p} ${p === 1 ? 'práctica de laboratorio' : 'prácticas de laboratorio'}` : simsText;
}

// Lo que tiene cada simulación, igual en las dos clases de página.
const TAIL = {
  es: 'Cada simulación tiene una guía docente con su uso en el aula, la secuencia de explicación y las ideas previas que ayuda a corregir, y una ficha de actividades para el alumnado. Son gratuitas y funcionan en el navegador, sin registro ni instalación.',
  en: 'Each simulation has a teacher guide on how to use it in class, with a teaching sequence and the misconceptions it helps to address, plus an activity worksheet for students. They are free and run in the browser, with no sign-up or installation.',
  ca: "Cada simulació té una guia docent (en castellà) amb el seu ús a l'aula i les idees prèvies que ajuda a corregir, i una fitxa d'activitats per a l'alumnat. Són gratuïtes i funcionen al navegador, sense registre ni instal·lació.",
  eu: 'Simulazio bakoitzak irakaslearen gida bat du (gaztelaniaz), gelan nola erabili eta zer aurretiazko ideia zuzentzen laguntzen dituen azaltzen duena, eta ikasleentzako jarduera-fitxa bat. Doakoak dira eta nabigatzailean dabiltza, erregistrorik eta instalaziorik gabe.',
  gl: 'Cada simulación ten unha guía docente (en castelán) co seu uso na aula e as ideas previas que axuda a corrixir, e unha ficha de actividades para o alumnado. Son gratuítas e funcionan no navegador, sen rexistro nin instalación.',
};
const CURRICULUM = {
  es: 'El uso por curso sigue el currículo LOMLOE de la Comunidad de Madrid.',
  en: null, // en inglés se explica la equivalencia del curso (enTitle)
  ca: "L'ús per curs segueix el currículum LOMLOE de la Comunitat de Madrid.",
  eu: 'Mailaz mailako erabilerak Madrilgo Erkidegoko LOMLOE curriculuma jarraitzen du.',
  gl: 'O uso por curso segue o currículo LOMLOE da Comunidade de Madrid.',
};

// { h1, intro, sims } de una página por curso o por tema; null si no existe en ese idioma.
export function collectionInfo({ courseId, topicId }, lang = 'es') {
  if (courseId) {
    const sims = courseSims(courseId, lang);
    const course = COURSES.find((c) => c.id === courseId);
    if (!sims.length || !course) return null;
    const c = courseLabel(courseId, lang);
    const practicals = sims.some(isPractical);
    const Q = lang === 'en' ? ['“', '”'] : ['«', '»'];
    const topics = list(TOPICS.filter((t) => t.sims.some((id) => sims.some((s) => s.id === id))).map((t) => `${Q[0]}${topicLabel(t, lang)}${Q[1]}`), lang);
    const h1 = {
      es: `${practicals ? 'Simulaciones y prácticas' : 'Simulaciones'} de Física y Química para ${c}`,
      en: `Physics and Chemistry simulations for ${c}`,
      ca: `Simulacions de Física i Química per a ${c}`,
      eu: `Fisika eta Kimikako simulazioak: ${c}`,
      gl: `Simulacións de Física e Química para ${c}`,
    }[lang];
    const lead = {
      es: `${countPhrase(sims, lang)} para ${c}, sobre ${topics}.`,
      en: `${countPhrase(sims, lang)} for ${c}, covering ${topics}.`,
      ca: `${countPhrase(sims, lang)} per a ${c}, sobre ${topics}.`,
      eu: `${countPhrase(sims, lang)} ${c} mailarako, gai hauei buruz: ${topics}.`,
      gl: `${countPhrase(sims, lang)} para ${c}, sobre ${topics}.`,
    }[lang];
    const note = lang === 'en' ? `Year groups are matched by age to the Spanish curriculum (${course.enTitle}).` : CURRICULUM[lang];
    return { h1, label: c, intro: `${fixDots(lead)} ${TAIL[lang]}`, note, sims };
  }
  if (topicId) {
    const sims = topicSims(topicId, lang);
    const topic = TOPICS.find((t) => t.id === topicId);
    if (!sims.length || !topic) return null;
    const label = topicLabel(topic, lang);
    const courses = list(COURSES.filter((c) => sims.some((s) => s.courses.includes(c.id))).map((c) => courseLabel(c.id, lang)), lang);
    const h1 = {
      es: `${label}: ${sims.some(isPractical) ? 'simulaciones y prácticas' : 'simulaciones'} de Física y Química`,
      en: `${label}: Physics and Chemistry simulations`,
      ca: `${label}: simulacions de Física i Química`,
      eu: `${label}: Fisika eta Kimikako simulazioak`,
      gl: `${label}: simulacións de Física e Química`,
    }[lang];
    const lead = {
      es: `${countPhrase(sims, lang)} sobre ${lower(label)}, para ${courses}.`,
      en: `${countPhrase(sims, lang)} on ${lower(label)}, for ${courses}.`,
      ca: `${countPhrase(sims, lang)} sobre ${lower(label)}, per a ${courses}.`,
      eu: `${label}: ${countPhrase(sims, lang)}, maila hauetarako: ${courses}.`,
      gl: `${countPhrase(sims, lang)} sobre ${lower(label)}, para ${courses}.`,
    }[lang];
    return { h1, label, intro: `${fixDots(lead)} ${TAIL[lang]}`, note: null, sims };
  }
  return null;
}
