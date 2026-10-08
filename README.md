# SimulaCiencia

**Simulaciones interactivas de Física y Química para el aula** · [simulaciencia.es](https://simulaciencia.es)

![SimulaCiencia](public/og-image.png)

SimulaCiencia es un catálogo de simulaciones gratuitas para ESO y Bachillerato. Se abren en el
navegador, en el ordenador del aula, en la pizarra digital o en el móvil, sin instalar nada ni
crear una cuenta. Están pensadas para que el alumnado pueda «ver» y manipular lo que ocurre a
escala microscópica o lo que no se puede reproducir en el laboratorio.

Las crea Juanra, profesor de Física y Química en la Comunidad de Madrid. Puedes leer cómo nació el
proyecto en [Sobre el proyecto](https://simulaciencia.es/?page=about).

## Simulaciones

| Simulación | Materia | Nivel | Qué trabaja |
|---|---|---|---|
| [Principio de Arquímedes](https://simulaciencia.es/?sim=sim-arquimedes) | Física | ESO, Bachillerato | Flotabilidad y empuje: cuándo un cuerpo flota, se hunde o queda en equilibrio. |
| [Densidad](https://simulaciencia.es/?sim=sim-densidad) | Física, Química | ESO | Relación entre masa, volumen y densidad con distintos materiales y líquidos. |
| [Cambios de Estado](https://simulaciencia.es/?sim=sim-cambios-estado) | Física, Química | ESO | Recipiente, partículas y curva de calentamiento a la vez, con diagrama de fases. |
| [Enlaces Químicos](https://simulaciencia.es/?sim=sim-enlaces-quimicos) | Química | ESO, Bachillerato | Enlace iónico, covalente y metálico sobre el modelo de Bohr. |
| [Modelos Atómicos](https://simulaciencia.es/?sim=sim-modelos) | Física, Química | Bachillerato | Dispersión de Rutherford frente al modelo de Thomson. |
| [El Átomo a Escala](https://simulaciencia.es/?sim=sim-atomo-real) | Física, Química | Bachillerato | Zoom desde el átomo completo hasta su núcleo, a escala real. |
| [Espectros Atómicos](https://simulaciencia.es/?sim=sim-espectros) | Química | Bachillerato | Espectros de emisión y absorción y transiciones electrónicas. |
| [Cinética de Gases](https://simulaciencia.es/?sim=sim-gases) | Física | Bachillerato | Presión, temperatura y volumen con la teoría cinético-molecular. |
| [Velocidad de Reacción](https://simulaciencia.es/?sim=sim-velocidad-reaccion) | Química | Bachillerato | Efecto de la temperatura, la concentración y el catalizador. |
| [Órbitas y Gravitación](https://simulaciencia.es/?sim=sim-orbitas) | Física | Bachillerato | Bala de cañón de Newton, Sistema Solar, leyes de Kepler y estrellas binarias. |

## Cómo usarlas en clase

- **Enlace directo:** cada simulación tiene su propia dirección (por ejemplo,
  `https://simulaciencia.es/?sim=sim-densidad`) para pegarla en Classroom, Moodle o Teams.
- **Insertarla en tu aula virtual:** el botón *Compartir* de cada simulación da el código
  `<iframe>` listo para pegar.
- **Pantalla completa** para proyectar, y una versión imprimible con `Ctrl + P`.

Las simulaciones simplifican la física para que se entienda lo importante. No sustituyen al
laboratorio ni pretenden ser software de precisión científica.

## Sugerencias y errores

Escribe a **contacto@simulaciencia.es** o abre una
[incidencia en GitHub](https://github.com/jrgrijota/simulaciencia/issues). Las ideas para nuevas
simulaciones son bienvenidas.

## Licencia

© 2026 Juan Ramón Grijota.

- Código: [MIT](LICENSE).
- Contenido educativo (textos, explicaciones, imágenes y diseño didáctico):
  [CC BY-SA 4.0](LICENSE-CONTENT.md).

Puedes usar, adaptar y compartir este material citando la autoría.

---

## Para desarrolladores

Este repositorio es el portal: una SPA hecha con Vite, Tailwind CSS 4 y JavaScript sin framework.
Cada simulación vive en su propio repositorio (`simulacion-*`), se publica por separado en GitHub
Pages y el portal la carga en un `<iframe>`.

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # genera dist/ (incluye sitemap.xml)
```

- **Catálogo:** [`src/data/simulations.js`](src/data/simulations.js) es la única fuente de verdad.
  Para añadir una simulación basta con añadir una entrada; el sitemap se regenera solo.
- **Rutas:** `?sim=<id>` abre una simulación, `?page=about` y `?page=legal` las páginas fijas.
- **Despliegue:** cada push a `main` publica la web en simulaciencia.es mediante GitHub Actions.
