// Cómo poner una simulación en cada plataforma: los pasos del diálogo «Insertar» de
// cada simulación y de la página /insertar-en-tu-aula/.
//
// Comprobado en noviembre de 2026 con la documentación oficial y el código de cada
// plataforma (revisar si cambian sus menús):
// - Moodle 4.x: una Página y un Área de texto y medios se muestran sin limpiar el
//   HTML (mod/page/view.php y format_module_intro() con noclean), así que el iframe
//   se conserva, salvo que la administración active «limpiar contenido en todas
//   partes» (forceclean). El código fuente del editor TinyMCE está en los menús
//   Ver y Herramientas; en el editor antiguo, Atto, es el botón HTML.
// - Google Sites: Insertar → Insertar → Insertar código → Siguiente → Insertar → Publicar
//   (support.google.com/sites/answer/90569).
// - Teams: desde julio de 2024, las pestañas «Sitio web» del Teams nuevo (escritorio
//   y web) abren la página en el navegador en vez de mostrarla dentro (MC708500), así
//   que en Teams se comparte el enlace.
// - Classroom: no admite insertar páginas; los adjuntos son Drive, Enlace, Archivo y
//   YouTube (support.google.com/edu/classroom/answer/9849192).
//
// Los textos están solo en español por ahora ({ es }); L() usa el español si falta
// el idioma. Pendiente: traducirlos (en, ca, eu, gl).
//
// kind: 'code' copia el código de inserción; 'link', el enlace.

export const PLATFORMS = [
  {
    id: 'moodle',
    name: { es: 'Moodle' },
    kind: 'code',
    steps: [
      { es: 'En tu curso, activa el <b>Modo de edición</b> y, en el tema que quieras, pulsa <b>Añadir una actividad o un recurso</b>. Elige <b>Página</b>, o <b>Área de texto y medios</b> si la quieres ver directamente en la página del curso.' },
      { es: 'En el editor de texto, abre el menú <b>Ver</b> o <b>Herramientas</b> y elige <b>Código fuente</b>. Si tu Moodle usa el editor antiguo (Atto), despliega la barra de botones y pulsa <b>HTML</b>.' },
      { es: 'Pega el código, cierra la ventana del código con <b>Guardar</b> y pulsa <b>Guardar cambios y mostrar</b>.' },
    ],
    note: { es: 'Si al guardar la simulación desaparece, tu Moodle está configurado para quitar el contenido de otras webs. Pide a quien lo administra que lo permita o, mientras tanto, añade el enlace como recurso <b>URL</b>.' },
  },
  {
    id: 'sites',
    name: { es: 'Google Sites' },
    kind: 'code',
    steps: [
      { es: 'Abre tu sitio en el ordenador. En el panel de la derecha, pestaña <b>Insertar</b>, pulsa <b>Insertar</b> (el icono <b>&lt;&gt;</b>).' },
      { es: 'Elige <b>Insertar código</b>, pega el código y pulsa <b>Siguiente</b> y después <b>Insertar</b>.' },
      { es: 'Arrastra las esquinas del recuadro para que la simulación se vea grande y pulsa <b>Publicar</b>.' },
    ],
  },
  {
    id: 'web',
    name: { es: 'Web o blog' },
    kind: 'code',
    steps: [
      { es: 'En <b>WordPress</b>, añade un bloque <b>HTML personalizado</b>. En <b>Blogger</b>, cambia de la <b>Vista de redacción</b> a la <b>Vista HTML</b>. En otras webs, busca la opción de insertar código o HTML.' },
      { es: 'Pega el código donde quieras que aparezca la simulación.' },
      { es: 'Pulsa <b>Actualizar</b> o <b>Publicar</b> y comprueba que se ve.' },
    ],
    note: { es: 'En WordPress.com, algunos planes quitan el código de otras webs al guardar. Si te pasa, pon el enlace.' },
  },
  {
    id: 'teams',
    name: { es: 'Teams' },
    kind: 'link',
    lead: { es: 'Teams ya no muestra páginas de otras webs dentro de la aplicación: desde 2024, las pestañas de tipo «Sitio web» las abren en el navegador. Lo más sencillo es compartir el enlace.' },
    steps: [
      { es: 'Copia el enlace con el botón <b>Copiar enlace</b>.' },
      { es: 'Pégalo en una publicación del canal de tu clase o adjúntalo a una tarea.' },
      { es: 'Al pulsarlo, la simulación se abre en el navegador, a pantalla completa.' },
    ],
  },
  {
    id: 'classroom',
    name: { es: 'Classroom' },
    kind: 'link',
    lead: { es: 'Classroom no permite insertar páginas web: solo enlazarlas. La simulación se abre en una pestaña nueva, a pantalla completa.' },
    steps: [
      { es: 'En <b>Trabajo de clase</b>, pulsa <b>Crear</b> y elige <b>Material</b> o <b>Tarea</b>.' },
      { es: 'En los adjuntos, pulsa <b>Enlace</b>, pega el enlace y pulsa <b>Añadir enlace</b>.' },
      { es: 'Pulsa <b>Publicar</b> (o <b>Asignar</b>, si es una tarea).' },
    ],
  },
];
