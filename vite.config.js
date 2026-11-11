import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { simulationsIn, simTitle, simDescription, courseLabel, isPractical } from './src/data/simulations.js';
import { guideIdFromFile, guideSummary, guideMisconceptions } from './src/guides/shared.js';
import { simPath, guidePath, guionPath, homePath, PAGE_PATHS, pagePaths, LANGS, GUIDE_LANGS, parsePath, translatedPath, absoluteUrl, STUDENT_DOC_DIRS } from './src/paths.js';

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
          return `  <url><loc>${absoluteUrl(path)}</loc>${links}${links && '\n  '}</url>`;
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
              : `  - [Ficha de actividades del alumnado](${absoluteUrl(guionPath(s.id))}): predice, observa y explica, con enlaces a la simulación ya preparada; editable en Word y LibreOffice, o en PDF.`,
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
          'con una guía docente por simulación ligada al currículo LOMLOE de la Comunidad de Madrid. Funcionan en el ' +
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
