import { L } from '../i18n.js';

// Copiar al portapapeles con respaldo para navegadores sin Clipboard API
// (o contextos no seguros), y feedback visual en el botón que lo dispara.

export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
}

// El botón debe contener un icono [data-lucide] y un <span class="copy-label">.
// Mientras dura el aviso cambian el icono (copiar → marca) y el texto, sin cambiar
// el color ni el tamaño del botón; el lector de pantalla lo anuncia por la región viva.
export function flashCopied(btn, doneText = L('Copiado', 'Copied', 'Copiat', 'Kopiatuta', 'Copiado')) {
  const label = btn.querySelector('.copy-label');
  const icon = btn.querySelector('[data-lucide], svg[data-lucide]');
  if (!btn.dataset.copyText) btn.dataset.copyText = label.textContent;
  clearTimeout(btn._copyTimer);
  label.textContent = doneText;
  icon.setAttribute('data-lucide', 'check');
  if (window.lucide) window.lucide.createIcons({ nodes: [icon] });
  const live = document.getElementById('route-announcer');
  if (live) live.textContent = doneText;
  btn._copyTimer = setTimeout(() => {
    label.textContent = btn.dataset.copyText;
    const current = btn.querySelector('[data-lucide]');
    current.setAttribute('data-lucide', 'copy');
    if (window.lucide) window.lucide.createIcons({ nodes: [current] });
  }, 2000);
}
