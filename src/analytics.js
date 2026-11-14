// Estadísticas con GoatCounter (sin cookies). Si un bloqueador o el cortafuegos del
// centro impiden cargar el script, no se cuenta nada y la web funciona igual.

// Visita de página con la ruta completa (/simulaciones/…), para saber qué se abre.
// El script carga en async: si aún no está, espera a su load.
export function trackPageview(title = document.title) {
  const hit = { path: location.pathname + location.search, title };
  const send = () => window.goatcounter.count(hit);
  if (window.goatcounter?.count) send();
  else document.getElementById('goatcounter')?.addEventListener('load', send, { once: true });
}

// Evento: algo que se hace en la página y que dice más del uso en clase que la
// visita (descargar, compartir, insertar, pantalla completa). En GoatCounter sale
// en la lista de eventos con su nombre, p. ej. «insertar/densidad».
export function trackEvent(path, title) {
  window.goatcounter?.count?.({ path, title, event: true });
}
