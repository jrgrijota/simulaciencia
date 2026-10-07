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
// Los botones rellenos azules pasan a verde mientras dura el aviso.
export function flashCopied(btn, doneText = '¡Copiado!') {
  const label = btn.querySelector('.copy-label');
  const icon = btn.querySelector('[data-lucide]');
  const original = label.textContent;
  label.textContent = doneText;
  icon.setAttribute('data-lucide', 'check');
  if (window.lucide) window.lucide.createIcons({ nodes: [icon] });
  btn.classList.replace('bg-[#0284c7]', 'bg-[#16a34a]');
  btn.classList.replace('hover:bg-[#0369a1]', 'hover:bg-[#15803d]');
  setTimeout(() => {
    label.textContent = original;
    icon.setAttribute('data-lucide', 'copy');
    if (window.lucide) window.lucide.createIcons({ nodes: [icon] });
    btn.classList.replace('bg-[#16a34a]', 'bg-[#0284c7]');
    btn.classList.replace('hover:bg-[#15803d]', 'hover:bg-[#0369a1]');
  }, 2000);
}
