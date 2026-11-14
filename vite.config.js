import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { simulationsIn, simTitle, simDescription, courseLabel, isPractical } from './src/data/simulations.js';
import { guideIdFromFile, guideSummary, guideMisconceptions } from './src/guides/shared.js';
import { simPath, guidePath, guionPath, homePath, PAGE_PATHS, pagePaths, LANGS, GUIDE_LANGS, FICHA_LANGS, parsePath, translatedPath, absoluteUrl, STUDENT_DOC_DIRS } from './src/paths.js';

// Fecha de última modificación de cada página (<lastmod>), sacada del historial de git
// de los archivos de los que sale su contenido. Google y Bing la usan para decidir qué
// volver a rastrear, así que solo cambia cuando cambia la página. El despliegue necesita
// el historial completo (fetch-depth: 0); sin git, el sitemap sale sin fechas.
const gitDates = new Map();
function gitDate(files) {
  const key = files.join(' ');
  if (!gitDates.has(key)) {
    let date = '';
    try {
      date = execFileSync('git', ['log', '-1', '--format=%cs', '--', ...files], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    } catch {}
    gitDates.set(key, date);
  }
  return gitDates.get(key);
}
function sourceFiles(path) {
  const { lang, simId, guideId, guionId, page } = parsePath(path);
  const slug = (id) => id.replace(/^sim-/, '');
  const guideFile = (id, l) => (l === 'es' ? `guias/${slug(id)}.md` : `guias/${l}/${slug(id)}.md`);
  if (guideId) return [guideFile(guideId, lang)];
  if (guionId) {
    const files = lang === 'es' ? [`guiones/${slug(guionId)}.md`, `fichas/${slug(guionId)}.md`] : [`fichas/${lang}/${slug(guionId)}.md`];
    return files.filter((f) => existsSync(f));
  }
  if (simId) {
    const guide = GUIDE_LANGS.includes(lang) ? guideFile(simId, lang) : null;
    return ['src/data/simulations.js', 'src/views/lab.js', ...(guide && existsSync(guide) ? [guide] : [])];
  }
  if (page) return [`src/views/${page}.js`];
  return ['src/data/simulations.js', 'src/views/catalog.js'];
}
const lastmod = (path) => {
  const files = sourceFiles(path);
  const date = files.length ? gitDate(files) : '';
  return date ? `<lastmod>${date}</lastmod>` : '';
};

// Genera sitemap.xml en cada build a partir del catálogo, para que las
// simulaciones y guías nuevas aparezcan en Google sin mantener el archivo a mano.
// Las páginas que existen en más de un idioma llevan sus alternativas (hreflang).
function sitemap() {
  return {
    name: 'sitemap',
    generateBundle() {
      const guides = (lang) =>
        readdirSync(lang === 'es' ? 'guias' : `guias/${lang}`)
          .filter((f) => f.endsWith('.md'))
          .map((f) => guidePath(guideIdFromFile(f), lang));
      const guiones = STUDENT_DOC_DIRS.filter((d) => existsSync(d)).flatMap((d) =>
        readdirSync(d)
          .filter((f) => f.endsWith('.md'))
          .map((f) => guionPath(guideIdFromFile(f))),
      );
      // Fichas traducidas: fichas/<idioma>/*.md.
      const fichas = (lang) =>
        FICHA_LANGS.includes(lang) && existsSync(`fichas/${lang}`)
          ? readdirSync(`fichas/${lang}`).filter((f) => f.endsWith('.md')).map((f) => guionPath(guideIdFromFile(f), lang))
          : [];
      const paths = [
        homePath('es'),
        ...simulationsIn('es').map((s) => simPath(s.id)),
        ...guides('es'),
        ...guiones,
        ...Object.values(PAGE_PATHS),
        ...LANGS.filter((l) => l !== 'es').flatMap((l) => [
          homePath(l),
          ...simulationsIn(l).map((s) => simPath(s.id, l)),
          ...(GUIDE_LANGS.includes(l) ? guides(l) : []),
          ...fichas(l),
          ...pagePaths(l),
        ]),
      ];
      const body = paths
        .map((path) => {
          const alt = LANGS.map((l) => [l, translatedPath(parsePath(path), l)]).filter(([, p]) => p);
          const links = alt.length > 1
            ? [...alt, ['x-default', alt[0][1]]]
                .map(([l, p]) => `\n    <xhtml:link rel="alternate" hreflang="${l}" href="${absoluteUrl(p)}"/>`)
                .join('')
            : '';
          return `  <url><loc>${absoluteUrl(path)}</loc>${lastmod(path)}${links}${links && '\n  '}</url>`;
        })
        .join('\n');
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source:
          '<?xml version="1.0" encoding="UTF-8"?>\n' +
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
          `${body}\n</urlset>\n`,
      });
    },
  };
}

// llms.txt (https://llmstxt.org): índice en Markdown de la web para los asistentes
// de IA (ChatGPT, Claude, Perplexity…). Cada simulación con su curso, su
// descripción, su guía docente y las ideas previas que ayuda a corregir. Se
// genera en cada build a partir del catálogo y de las guías.
function llmsTxt() {
  return {
    name: 'llms-txt',
    generateBundle() {
      const name = (id) => id.replace(/^sim-/, '');
      const guide = (id) => {
        const f = `guias/${name(id)}.md`;
        return existsSync(f) ? readFileSync(f, 'utf8') : null;
      };
      const entry = (s) => {
        const md = guide(s.id);
        const courses = s.courses.map((c) => courseLabel(c)).join(', ');
        const lines = [`- [${simTitle(s)}](${absoluteUrl(simPath(s.id))}): ${simDescription(s)} Cursos: ${courses}.`];
        if (md) {
          lines.push(`  - [Guía docente: ${simTitle(s)}](${absoluteUrl(guidePath(s.id))}): ${guideSummary(md).replace(/[*_`]/g, '')}`);
          const ideas = guideMisconceptions(md).slice(0, 4);
          if (ideas.length) lines.push(`  - Ideas previas que ayuda a corregir: ${ideas.map((i) => `${i.idea} (${i.correct.replace(/\.$/, '')})`).join('; ')}.`);
        }
        if (STUDENT_DOC_DIRS.some((d) => existsSync(`${d}/${name(s.id)}.md`))) {
          lines.push(
            isPractical(s)
              ? `  - [Guion del alumnado](${absoluteUrl(guionPath(s.id))}): editable en Word y LibreOffice, o en PDF.`
              : `  - [Ficha de actividades](${absoluteUrl(guionPath(s.id))}): predice, observa y explica, con enlaces a la simulación ya preparada; editable en Word y LibreOffice, o en PDF.`,
          );
        }
        return lines.join('\n');
      };
      const sims = simulationsIn('es');
      const others = LANGS.filter((l) => l !== 'es');
      const body = [
        '# SimulaCiencia',
        '',
        '> Simulaciones interactivas y gratuitas de Física y Química para Educación Secundaria (ESO) y Bachillerato, ' +
          'con una guía docente y una ficha de actividades para el alumnado por simulación, ligadas al currículo LOMLOE de la Comunidad de Madrid. Funcionan en el ' +
          'navegador del ordenador, la tableta o el móvil, sin registro ni instalación.',
        '',
        'Autor: Juan Ramón Grijota, profesor de Física y Química en la Comunidad de Madrid. Contenido con licencia ' +
          'CC BY-SA 4.0 y código con licencia MIT. Las guías docentes indican, para cada curso, los saberes básicos, ' +
          'una secuencia de explicación, las concepciones alternativas que ayuda a corregir y las simplificaciones del modelo. ' +
          'Cada simulación se puede compartir con un enlace o insertar en Moodle, Classroom o una web con un iframe.',
        '',
        '## Simulaciones',
        '',
        ...sims.filter((s) => !isPractical(s)).map(entry),
        '',
        '## Prácticas de laboratorio simuladas',
        '',
        ...sims.filter(isPractical).map(entry),
        '',
        '## Otros idiomas',
        '',
        'La interfaz de las simulaciones está también en inglés, catalán, euskera y gallego; las guías docentes, en español e inglés.',
        '',
        ...others.map((l) => `- [${{ en: 'English', ca: 'Català', eu: 'Euskara', gl: 'Galego' }[l]}](${absoluteUrl(homePath(l))})`),
        '',
        '## Optional',
        '',
        `- [Sobre el proyecto](${absoluteUrl(PAGE_PATHS.about)}): quién lo hace, por qué y cómo usarlo en clase.`,
        `- [Mapa del sitio](${absoluteUrl('/sitemap.xml')}): todas las páginas en los cinco idiomas.`,
        '- [Código fuente](https://github.com/jrgrijota/simulaciencia)',
        '',
      ];
      this.emitFile({ type: 'asset', fileName: 'llms.txt', source: body.join('\n') });
    },
  };
}

export default defineConfig({
  // base absoluto: las páginas viven en subcarpetas (/guias/densidad/) y la web
  // se sirve en la raíz de simulaciencia.es.
  base: '/',
  plugins: [tailwindcss(), sitemap(), llmsTxt()],
});
