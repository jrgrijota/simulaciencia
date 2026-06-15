// Tarjeta de simulación: todo el contenido visible de un vistazo,
// sin efectos hover que oculten datos.
const TAG_CLASS =
  'inline-flex items-center rounded-md border border-[#e2e8f0] bg-[#f8fafc] px-2 py-0.5 text-xs font-medium text-[#64748b]';

export function cardMarkup(sim) {
  const haystack = `${sim.title} ${sim.description} ${sim.tags.join(' ')}`.toLowerCase();
  const tags = sim.tags.map((t) => `<span class="${TAG_CLASS}">${t}</span>`).join('');

  return `
  <article
    class="sim-card flex flex-col rounded-md border border-[#e2e8f0] bg-white p-5"
    data-sim-id="${sim.id}"
    data-search="${haystack}"
  >
    <h3 class="text-base font-semibold text-[#1e293b]">${sim.title}</h3>
    <p class="mt-1.5 line-clamp-2 text-sm leading-relaxed text-[#64748b]">${sim.description}</p>
    <div class="mt-3 flex flex-wrap gap-1.5">${tags}</div>
    <button
      data-open="${sim.id}"
      class="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-[#0284c7] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0369a1] focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <i data-lucide="flask-conical" class="h-4 w-4"></i>
      Abrir laboratorio
    </button>
  </article>`;
}
