# Orber+ móvil 1.4.0

## Actualizar
Extrae el ZIP y sube todos los archivos a la raíz del repositorio GitHub, reemplazando los existentes. No subas el ZIP ni una carpeta contenedora. Abre Ajustes > Buscar actualización y comprueba MÓVIL 1.4.0. No borres los datos del sitio: ahí están descargas, configuración y avance.

Los antiguos CAMBIOS-*.md y ACTUALIZAR-1.1.0.md son documentación y puedes eliminarlos del repositorio. Desde esta versión el paquete utiliza un solo CAMBIOS.md; subir archivos no elimina automáticamente la documentación antigua de GitHub.

## Infantiles
- Nueva pestaña e inicio con sección Infantiles.
- Lee Biblioteca/Infantiles en Drive. Crea esa carpeta si aún no existe; el HTML no crea carpetas ni sube videos a Drive.
- Acepta videos directamente en Infantiles o en subcarpetas por artista/personaje. La primera subcarpeta determina el artista inicial. Los videos de la raíz aparecen en Sin artista.
- Puedes poner poster.jpg dentro de la carpeta de cada artista. También elegir una portada desde su ficha, con el permiso de escritura de Biblioteca.
- Seleccionar videos > Asignar artista permite asignación masiva. Puedes crear un artista escribiendo su nombre, o dejar vacío para quitar la asignación.
- Seleccionar videos > Descargar selección usa la misma cola y los mismos límites de espacio. También descarga individual, elimina únicamente copia local, continúa y empieza desde cero.
- El reproductor ofrece Siguiente video dentro del mismo artista. Reproducción automática usa el ajuste existente y pasa automáticamente solo si el siguiente video ya está descargado.
- Ajustes > Videos del dispositivo > Infantiles importa copias locales. No las sube a Drive ni las hace aparecer en otro dispositivo.
- Actualiza el catálogo después de agregar o mover archivos en Drive. Los IDs que no cambian conservan su historial. No hace falta mover los videos al actualizar Orber+.
- Si antes se había leído Infantiles como una serie, al actualizar el catálogo se reclasifican los archivos encontrados conservando sus IDs. Las copias locales ausentes del catálogo se mantienen para no perderlas.

El avance exacto se guarda localmente cuando reproduces la copia descargada. El visor online de Google no expone ese avance a Orber+. No hay sincronización de historial con Windows ni entre navegadores en esta versión.

## Organización compartida heredada de 1.3.0
Desde el navegador donde ya asignaste artistas, exporta un respaldo en Ajustes antes de activar/sincronizar Biblioteca. Combina las asignaciones locales y las privadas antiguas de esa cuenta con el catálogo compartido; no elimina los datos anteriores.

La sincronización de escritura solicita los permisos OAuth drive y drive.appdata. Si Google los bloquea, revisa Acceso a los datos en el proyecto de Google Cloud y los usuarios de prueba. El permiso drive es amplio, aunque el código solo escribe sus catálogos y portadas en Biblioteca; no modifica los videos ni sus permisos.

Conserva orber-artistas.json, orber-artistas-dispositivo-UUID.json y orber-artista-UUID.jpg dentro de Biblioteca. Orber+ combina los archivos auxiliares de todos los dispositivos para evitar sobrescribir ediciones concurrentes. El archivo inicial por sí solo no contiene necesariamente todos los cambios posteriores: exporta un respaldo desde la app después de sincronizar.

Otra cuenta debe tener acceso a los archivos para leerlos y permiso de edición para guardar. Configura la misma Biblioteca, conecta Google y actualiza catálogo. Activa escritura por navegador; los cambios se guardan automáticamente mientras la autorización siga vigente. Al caducar vuelve a activar; sin Internet quedan locales hasta una sincronización posterior. Las portadas anteriores permanecen en Drive.

## Cola y almacenamiento
La cola persiste, pero requiere Continuar cola después de cerrar o recargar. Cancelar detiene el archivo activo; Pausar espera a que termine. Las descargas incompletas empiezan de nuevo. Mantén Orber+ abierto: no se garantiza ejecución en segundo plano. La cuota disponible es una estimación del navegador, no el espacio físico exacto de Android.

## Validación
Sintaxis de todos los JS; pruebas de clasificación de carpetas, separación de artistas, selección de Infantiles, progreso reutilizado, portada independiente, escaneo recursivo y exclusión de poster.jpg como video. Pruebas anteriores de catálogo y almacenamiento conservadas. No se ha probado esta versión en un Android real ni con las cuentas privadas del usuario. La aplicación de Windows requiere su propia implementación.
