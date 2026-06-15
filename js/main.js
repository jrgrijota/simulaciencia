/* ===== CONFIG ===== */
const BASE_URL = ''; // Set to full URL when hosted, e.g. 'https://username.github.io/simulab'

const SIMULATIONS = {
  'arquimedes':          { folder: 'simulacion-arquimedes',          name: 'Principio de Arquímedes' },
  'densidad':            { folder: 'simulacion-densidad',            name: 'Densidad' },
  'espectros':           { folder: 'simulacion-espectros',           name: 'Espectros Atómicos' },
  'gases':               { folder: 'simulacion-gases',               name: 'Cinética de Gases' },
  'modelos':             { folder: 'simulacion-modelos',             name: 'Modelos Atómicos (Rutherford/Thomson)' },
  'velocidad-reaccion':  { folder: 'simulacion-velocidad-reaccion',  name: 'Velocidad de Reacción' },
};

const SIZES = {
  compact:  { width: '560',  height: '400' },
  standard: { width: '800',  height: '600' },
  wide:     { width: '100%', height: '650' },
};

/* ===== EMBED BUILDER (section) ===== */
function buildIframeCode(folder, size) {
  const base = BASE_URL || window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '');
  const src  = `${base}/${folder}/index.html`;
  const { width, height } = SIZES[size];
  const wAttr = width === '100%' ? 'width="100%"' : `width="${width}"`;
  return `<iframe\n  src="${src}"\n  ${wAttr}\n  height="${height}"\n  frameborder="0"\n  allowfullscreen\n  title="${SIMULATIONS[Object.keys(SIMULATIONS).find(k => SIMULATIONS[k].folder === folder)]?.name || folder}"\n  loading="lazy"\n  style="border-radius:8px; max-width:100%;">\n</iframe>`;
}

function updateEmbed() {
  const sim  = document.getElementById('embedSim').value;
  const size = document.getElementById('embedSize').value;
  const code = buildIframeCode(sim, size);
  document.getElementById('embedCode').textContent = code;
}

function copyEmbed() {
  const code = document.getElementById('embedCode').textContent;
  copyText(code, document.getElementById('copyBtn'));
}

/* ===== MODAL EMBED ===== */
let _modalKey  = '';
let _modalSize = 'compact';

function openEmbed(key) {
  _modalKey  = key;
  _modalSize = 'compact';
  const sim = SIMULATIONS[key];
  document.getElementById('modalTitle').textContent = `Código embed — ${sim.name}`;
  document.querySelectorAll('.size-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
  renderModalCode();
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function setModalSize(size, btn) {
  _modalSize = size;
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderModalCode();
}

function renderModalCode() {
  const folder = SIMULATIONS[_modalKey].folder;
  document.getElementById('modalCode').textContent = buildIframeCode(folder, _modalSize);
}

function copyModalEmbed() {
  const code = document.getElementById('modalCode').textContent;
  copyText(code, document.getElementById('modalCopyBtn'));
}

/* ===== COPY UTIL ===== */
function copyText(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = '✓ Copiado';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 2000);
  }).catch(() => {
    // Fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    btn.textContent = '✓ Copiado';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copiar código'; btn.classList.remove('copied'); }, 2000);
  });
}

/* ===== FILTERS ===== */
document.getElementById('filters').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filter = btn.dataset.filter;
  document.querySelectorAll('.sim-card').forEach(card => {
    if (filter === 'all') {
      card.classList.remove('hidden');
    } else {
      const tags = card.dataset.tags || '';
      card.classList.toggle('hidden', !tags.includes(filter));
    }
  });
});

/* ===== NAV MOBILE ===== */
function toggleMenu() {
  document.getElementById('navMobile').classList.toggle('open');
}

/* ===== CONTACT FORM ===== */
function submitForm(e) {
  e.preventDefault();
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const btn     = form.querySelector('button[type=submit]');

  btn.textContent = 'Enviando...';
  btn.disabled    = true;

  // Simulate sending (replace with a real backend endpoint or Formspree/Netlify Forms)
  setTimeout(() => {
    form.reset();
    success.classList.add('visible');
    btn.textContent = 'Enviar mensaje';
    btn.disabled    = false;
    setTimeout(() => success.classList.remove('visible'), 6000);
  }, 1000);
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  updateEmbed();
  // Close modal on Escape
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
});
