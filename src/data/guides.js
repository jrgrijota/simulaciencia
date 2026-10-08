import { guideIdFromFile } from '../guides/shared.js';

// Las guías se cargan bajo demanda: el catálogo solo necesita saber cuáles existen.
const files = import.meta.glob('/guias/*.md', { query: '?raw', import: 'default' });

const loaders = new Map(Object.entries(files).map(([path, load]) => [guideIdFromFile(path), load]));

export function hasGuide(simId) {
  return loaders.has(simId);
}

export function loadGuide(simId) {
  return loaders.get(simId)();
}
