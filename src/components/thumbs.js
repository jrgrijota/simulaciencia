// Miniaturas SVG de las tarjetas del catálogo: un esquema de lo que se ve en cada
// simulación, no una captura. Son decorativas (aria-hidden): el título y la
// descripción de la tarjeta ya dicen qué es. Lienzo de 320 × 180.
//
// Colores: tinta #0f172a, gris #64748b, azul #0369a1 (Física), naranja #c2410c
// (Química) y violeta #6d28d9.

const MONO = `font-family="'JetBrains Mono', ui-monospace, monospace"`;

// Flecha con punta propia (sin <marker>, para no repetir ids entre tarjetas).
function arrow(x1, y1, x2, y2, color, width = 2.5) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const h = 8;
  const p1 = [x2 - h * Math.cos(a - 0.45), y2 - h * Math.sin(a - 0.45)];
  const p2 = [x2 - h * Math.cos(a + 0.45), y2 - h * Math.sin(a + 0.45)];
  const f = (n) => n.toFixed(1);
  return `<line x1="${x1}" y1="${y1}" x2="${f(x2 - 5 * Math.cos(a))}" y2="${f(y2 - 5 * Math.sin(a))}" stroke="${color}" stroke-width="${width}" stroke-linecap="round"/><path d="M${x2} ${y2}L${f(p1[0])} ${f(p1[1])}L${f(p2[0])} ${f(p2[1])}Z" fill="${color}"/>`;
}

const THUMBS = {
  // Bloque en un líquido: empuje hacia arriba y peso hacia abajo.
  'sim-arquimedes': `
    <rect x="70" y="86" width="180" height="74" fill="#bae6fd"/>
    <path d="M70 86q22.5 -5 45 0t45 0t45 0t45 0" fill="none" stroke="#0284c7" stroke-width="1.5"/>
    <path d="M70 40V160H250V40" fill="none" stroke="#0f172a" stroke-width="2"/>
    <rect x="135" y="62" width="50" height="46" fill="#fef3c7" stroke="#0f172a" stroke-width="2"/>
    ${arrow(160, 85, 160, 28, '#0369a1')}
    ${arrow(160, 85, 160, 142, '#c2410c')}
    <circle cx="160" cy="85" r="3" fill="#0f172a"/>
    <text x="168" y="38" ${MONO} font-size="13" fill="#0369a1">E</text>
    <text x="168" y="140" ${MONO} font-size="13" fill="#c2410c">P</text>`,

  // Balanza de brazos equilibrada: la misma masa de corcho (mucho volumen) y de plomo (poco).
  'sim-densidad': `
    <path d="M160 52V150M132 150H188" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
    <path d="M70 52H250" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
    <circle cx="160" cy="52" r="5" fill="#0f172a"/>
    <path d="M80 52L66 100M80 52L94 100M240 52L226 100M240 52L254 100" stroke="#64748b" stroke-width="1.2"/>
    <path d="M56 100H104M216 100H264" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
    <rect x="60" y="56" width="40" height="42" rx="2" fill="#d6b48c" stroke="#0f172a" stroke-width="1.5"/>
    <rect x="231" y="83" width="18" height="15" rx="1" fill="#64748b" stroke="#0f172a" stroke-width="1.5"/>
    <text x="80" y="122" text-anchor="middle" ${MONO} font-size="12" fill="#475569">1 kg</text>
    <text x="240" y="122" text-anchor="middle" ${MONO} font-size="12" fill="#475569">1 kg</text>`,

  // Práctica de densidad: probeta con agua y la muestra (ciruela) sumergida, y la
  // balanza electrónica con su lectura.
  'sim-practica-densidad': `
    <rect x="56" y="104" width="108" height="6" rx="3" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.5"/>
    <path d="M110 110V118" stroke="#0f172a" stroke-width="3"/>
    <path d="M40 160L48 118H172L180 160Z" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.5" stroke-linejoin="round"/>
    <rect x="66" y="128" width="88" height="24" rx="3" fill="#0f172a"/>
    <text x="110" y="145" text-anchor="middle" ${MONO} font-size="14" font-weight="500" fill="#7dd3fc">52,6 g</text>
    <rect x="226" y="72" width="40" height="84" fill="#bae6fd"/>
    <path d="M226 72q20 6 40 0" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.2"/>
    <path d="M237 126l11 -7l10 5l-1 27l-13 4l-8 -7z" fill="#7c2d4f" stroke="#0f172a" stroke-width="1.3" stroke-linejoin="round"/>
    <path d="M222 20H270M226 20V156H266V20" fill="none" stroke="#0f172a" stroke-width="2"/>
    <path d="M214 160H278" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
    <g stroke="#475569" stroke-width="1.2">
      <path d="M266 36h-10M266 52h-6M266 68h-10M266 84h-6M266 100h-10M266 116h-6M266 132h-10M266 148h-6"/>
    </g>
    <text x="276" y="72" ${MONO} font-size="11" fill="#475569">mL</text>`,

  // Espectro de emisión del hidrógeno: las tres líneas visibles de Balmer del modelo.
  'sim-espectros': `
    <text x="30" y="44" ${MONO} font-size="13" font-weight="500" fill="#334155">H</text>
    <rect x="30" y="54" width="260" height="52" rx="6" fill="#0f172a"/>
    <rect x="58" y="54" width="3" height="52" fill="#7c3aed"/>
    <rect x="103" y="54" width="3" height="52" fill="#22d3ee"/>
    <rect x="250" y="54" width="4" height="52" fill="#ef4444"/>
    <line x1="30" y1="118" x2="290" y2="118" stroke="#64748b" stroke-width="1.2"/>
    <g ${MONO} font-size="11" fill="#475569">
      <text x="59" y="134" text-anchor="middle">434</text>
      <text x="104" y="134" text-anchor="middle">486</text>
      <text x="252" y="134" text-anchor="middle">656</text>
      <text x="290" y="154" text-anchor="end">λ (nm)</text>
    </g>`,

  // Gas en un globo (membrana flexible, el modo inicial): la membrana roja se ajusta
  // a la presión del gas; la línea discontinua es el tamaño de referencia.
  'sim-gases': `
    <circle cx="128" cy="92" r="62" fill="none" stroke="#16a34a" stroke-width="1.2" stroke-dasharray="4 4"/>
    <path d="M86 42C104 30 140 26 160 36C178 46 192 70 190 96C188 122 172 146 146 154C120 160 92 152 76 132C62 114 62 84 70 64C74 54 80 46 86 42Z" fill="#fee2e2" fill-opacity=".45" stroke="#dc2626" stroke-width="2.5" stroke-linejoin="round"/>
    <g fill="#0369a1">
      <circle cx="98" cy="64" r="3"/><circle cx="136" cy="54" r="3"/><circle cx="166" cy="78" r="3"/><circle cx="88" cy="100" r="3"/>
      <circle cx="124" cy="96" r="3"/><circle cx="170" cy="112" r="3"/><circle cx="108" cy="132" r="3"/><circle cx="146" cy="138" r="3"/>
    </g>
    <g fill="#7c3aed">
      <circle cx="116" cy="74" r="3"/><circle cx="150" cy="96" r="3"/><circle cx="92" cy="122" r="3"/><circle cx="132" cy="118" r="3"/><circle cx="154" cy="60" r="3"/>
    </g>
    <g ${MONO}>
      <text x="220" y="62" font-size="11" fill="#475569">P</text>
      <text x="220" y="82" font-size="16" font-weight="500" fill="#0f172a">1,22 atm</text>
      <text x="220" y="112" font-size="11" fill="#475569">V</text>
      <text x="220" y="132" font-size="16" font-weight="500" fill="#0f172a">0,89 L</text>
    </g>`,

  // Dispersión de partículas α: la fuente a la izquierda, un átomo de Thomson
  // (esfera con cargas positivas y electrones) y el detector en arco.
  'sim-modelos': `
    <rect x="22" y="22" width="26" height="136" rx="3" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.5"/>
    <text x="35" y="96" text-anchor="middle" ${MONO} font-size="16" font-weight="500" fill="#0f172a">α</text>
    <path d="M196 14A92 92 0 0 1 196 166" fill="none" stroke="#0369a1" stroke-width="2.5" stroke-linecap="round"/>
    <g stroke="#0369a1" stroke-width="1.6" stroke-linecap="round" opacity=".7">
      <path d="M52 34H200"/><path d="M52 146H200"/>
    </g>
    <circle cx="170" cy="90" r="46" fill="#fde68a" fill-opacity=".6" stroke="#b45309" stroke-width="1.5"/>
    <g stroke="#b45309" stroke-width="1.6" stroke-linecap="round">
      <path d="M146 72h8M150 68v8M178 66h8M182 62v8M156 98h8M160 94v8M186 92h8M190 88v8M168 120h8M172 116v8M138 92h6M141 89v6M196 114h6M199 111v6"/>
    </g>
    <g fill="#0369a1">
      <circle cx="166" cy="78" r="2.5"/><circle cx="148" cy="112" r="2.5"/><circle cx="196" cy="74" r="2.5"/><circle cx="176" cy="104" r="2.5"/><circle cx="164" cy="56" r="2.5"/>
    </g>`,

  // Concentración de reactivo y de producto frente al tiempo.
  'sim-velocidad-reaccion': `
    <path d="M50 28V150H292" fill="none" stroke="#0f172a" stroke-width="1.6"/>
    <path d="M50 40C110 110 170 135 290 142" fill="none" stroke="#c2410c" stroke-width="2.6"/>
    <path d="M50 148C110 80 170 55 290 48" fill="none" stroke="#0369a1" stroke-width="2.6"/>
    <g ${MONO} font-size="12">
      <text x="270" y="130" fill="#c2410c">[A]</text>
      <text x="270" y="40" fill="#0369a1">[B]</text>
      <text x="286" y="168" fill="#475569">t</text>
      <text x="36" y="32" fill="#475569">c</text>
    </g>`,

  // Átomo de hidrógeno a escala: el núcleo, en el centro, es demasiado pequeño para
  // verse; la flecha lo señala. Debajo, el diámetro del átomo.
  'sim-atomo-real': `
    <circle cx="160" cy="76" r="60" fill="#e0f2fe" fill-opacity=".5" stroke="#0369a1" stroke-width="1.6"/>
    <circle cx="137" cy="131.5" r="3.5" fill="#0369a1"/>
    ${arrow(84, 18, 158, 74, '#dc2626', 2)}
    <circle cx="160" cy="76" r="1.2" fill="#0f172a"/>
    ${arrow(160, 152, 100, 152, '#0369a1', 1.8)}
    ${arrow(160, 152, 220, 152, '#0369a1', 1.8)}
    <path d="M100 145V159M220 145V159" stroke="#0369a1" stroke-width="1.8"/>
    <text x="160" y="172" text-anchor="middle" ${MONO} font-size="12" fill="#0369a1">D = 62 pm</text>`,

  // Red iónica: cationes y aniones alternados.
  'sim-enlaces-quimicos': (() => {
    let g = '';
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 6; c++) {
        const cat = (r + c) % 2 === 0;
        const x = 70 + c * 36;
        const y = 36 + r * 36;
        g += cat
          ? `<circle cx="${x}" cy="${y}" r="10" fill="#c2410c"/><path d="M${x - 4} ${y}H${x + 4}M${x} ${y - 4}V${y + 4}" stroke="#fff" stroke-width="1.8"/>`
          : `<circle cx="${x}" cy="${y}" r="14" fill="#bae6fd" stroke="#0369a1" stroke-width="1.5"/><path d="M${x - 4} ${y}H${x + 4}" stroke="#0369a1" stroke-width="1.8"/>`;
      }
    }
    return g;
  })(),

  // Órbita elíptica con la estrella en un foco y la velocidad del planeta.
  'sim-orbitas': `
    <ellipse cx="160" cy="90" rx="110" ry="66" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 5"/>
    <circle cx="74" cy="90" r="20" fill="#fde68a" opacity=".6"/>
    <circle cx="74" cy="90" r="12" fill="#f59e0b"/>
    ${arrow(244, 48, 282, 76, '#0369a1')}
    <circle cx="244" cy="48" r="7" fill="#0284c7" stroke="#0f172a" stroke-width="1.2"/>`,

  // Curva de calentamiento: temperatura frente al tiempo, con los cambios de estado.
  'sim-cambios-estado': `
    <path d="M50 24V150H292" fill="none" stroke="#0f172a" stroke-width="1.6"/>
    <path d="M56 140L96 112H150L180 70H246L284 36" fill="none" stroke="#c2410c" stroke-width="2.8" stroke-linejoin="round"/>
    <path d="M50 112H96M50 70H180" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 4"/>
    <g ${MONO} font-size="11" fill="#475569">
      <text x="66" y="150">s</text>
      <text x="118" y="104">s + l</text>
      <text x="198" y="62">l + g</text>
      <text x="36" y="28">T</text>
      <text x="286" y="168">t</text>
    </g>`,

  // Ecuación ajustada con modelos de bolas: 2 H₂ + O₂ → 2 H₂O.
  'sim-ajuste-reaccion': (() => {
    const h = (x, y) => `<circle cx="${x}" cy="${y}" r="7" fill="#fff" stroke="#0f172a" stroke-width="1.5"/>`;
    const o = (x, y) => `<circle cx="${x}" cy="${y}" r="11" fill="#c2410c" stroke="#0f172a" stroke-width="1.5"/>`;
    const h2 = (x, y) => h(x, y) + h(x + 12, y);
    const water = (x, y) => h(x - 11, y + 9) + h(x + 11, y + 9) + o(x, y);
    return `
      ${h2(34, 70)}${h2(34, 104)}
      <text x="72" y="93" ${MONO} font-size="18" fill="#475569">+</text>
      ${o(104, 87)}${o(124, 87)}
      ${arrow(150, 88, 190, 88, '#0369a1')}
      ${water(230, 66)}${water(230, 106)}
      <text x="160" y="160" text-anchor="middle" ${MONO} font-size="13" fill="#334155">2 H₂ + O₂ → 2 H₂O</text>`;
  })(),

  // Péndulo: posiciones extremas y central.
  'sim-energia-mecanica': `
    <path d="M100 24H220" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
    <path d="M98.3 97.5A96 96 0 0 0 221.7 97.5" fill="none" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4 5"/>
    <line x1="160" y1="24" x2="98.3" y2="97.5" stroke="#94a3b8" stroke-width="1.2"/>
    <circle cx="98.3" cy="97.5" r="10" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.2"/>
    <line x1="160" y1="24" x2="160" y2="120" stroke="#0f172a" stroke-width="1.6"/>
    <circle cx="160" cy="120" r="12" fill="#0369a1" stroke="#0f172a" stroke-width="1.4"/>
    ${arrow(176, 120, 222, 120, '#c2410c')}
    <text x="230" y="124" ${MONO} font-size="13" fill="#c2410c">v</text>`,

  // Circuito con pila, interruptor y bombilla.
  'sim-circuitos': `
    <path d="M60 50H130M190 50H260V140H190M130 140H60V50" fill="none" stroke="#0f172a" stroke-width="2.2" stroke-linejoin="round"/>
    <path d="M130 50L182 34" stroke="#0f172a" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="130" cy="50" r="3" fill="#0f172a"/><circle cx="190" cy="50" r="3" fill="#0f172a"/>
    <path d="M150 124V156M164 132V148" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
    <path d="M130 140H150M164 140H190" stroke="#0f172a" stroke-width="2.2"/>
    <circle cx="260" cy="95" r="16" fill="#fef3c7" stroke="#0f172a" stroke-width="2"/>
    <path d="M249 84L271 106M271 84L249 106" stroke="#0f172a" stroke-width="1.6"/>
    <text x="134" y="120" ${MONO} font-size="11" fill="#475569">+</text>`,

  // Onda en una cuerda, con la amplitud y la longitud de onda.
  'sim-ondas': `
    <line x1="24" y1="90" x2="296" y2="90" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 5"/>
    <path d="M24 90C44 40 74 40 94 90S144 140 164 90S214 40 234 90S284 140 296 112" fill="none" stroke="#0369a1" stroke-width="2.8"/>
    <path d="M59 34H199" stroke="#c2410c" stroke-width="1.4"/>
    <path d="M59 28V40M199 28V40" stroke="#c2410c" stroke-width="1.4"/>
    <text x="129" y="26" text-anchor="middle" ${MONO} font-size="13" fill="#c2410c">λ</text>
    <path d="M250 90V52" stroke="#0f172a" stroke-width="1.4"/>
    <path d="M244 52H256M244 90H256" stroke="#0f172a" stroke-width="1.4"/>
    <text x="262" y="76" ${MONO} font-size="13" fill="#0f172a">A</text>`,
};

export function thumbMarkup(simId) {
  const body = THUMBS[simId];
  if (!body) return '';
  return `<svg viewBox="0 0 320 180" width="100%" height="100%" aria-hidden="true" focusable="false">${body}</svg>`;
}
