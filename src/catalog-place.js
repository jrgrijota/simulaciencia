// Dónde estaba el catálogo al abrir una simulación o una guía desde una tarjeta:
// dirección (con sus filtros), desplazamiento y tarjeta. Sirve para volver al mismo
// sitio con Atrás, con «Volver al catálogo» o con el logo. Se guarda en
// sessionStorage (solo esta pestaña) y se usa una sola vez.
const KEY = 'simulaciencia:catalogo';

export function saveCatalogPlace(place) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(place));
  } catch {
    /* almacenamiento bloqueado: se vuelve arriba, como antes */
  }
}

function read() {
  try {
    return JSON.parse(sessionStorage.getItem(KEY));
  } catch {
    return null;
  }
}

// La dirección del catálogo guardada, si es de ese idioma (para «Volver al catálogo»).
export function savedCatalogUrl(home) {
  const url = read()?.url;
  return url && new URL(url, location.origin).pathname === home ? url : null;
}

// La posición guardada si se vuelve a la misma dirección; la borra al usarla.
export function takeCatalogPlace(url) {
  const place = read();
  if (!place || place.url !== url) return null;
  sessionStorage.removeItem(KEY);
  return place;
}
