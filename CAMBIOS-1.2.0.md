# Orber+ móvil 1.2.0

Actualiza subiendo TODOS los archivos de esta carpeta al mismo repositorio, incluidos design.js y design.css. No borres los datos del sitio. Comprueba MÓVIL 1.2.0 al terminar el despliegue. Conserva tu configuración, catálogo, historial y descargas.

## Navegación
Series muestra portadas pequeñas, dos por fila en móvil. Al entrar aparece una cabecera con portada, botón de reproducción y temporadas plegables con episodios compactos. No se inventan sinopsis, años ni duraciones. Inicio incluye continuar viendo y accesos a series/artistas. El minuto exacto sigue disponible solo al reproducir copias descargadas; el visor Google conserva su limitación.

VideoMusic agrupa por artista. Sin metadatos usa las subcarpetas de YouTube como antes o Sin artista. Seleccionar videos permite marcar varios, seleccionar todos los resultados y asignar un artista existente o nuevo. Dejar el nombre vacío los devuelve a Sin artista. No se mueven ni renombran videos. Las imágenes de artista usan la miniatura de un video cuando existe; no hay proveedor de retratos en esta versión. Las miniaturas remotas pueden caducar; las portadas de series mantienen caché privada.

## Artistas en Drive
Las asignaciones se guardan inmediatamente en el dispositivo. Para compartirlas entre tus dispositivos abre Ajustes → Sincronizar artistas con Drive. Conecta Google primero. Se solicita además drive.appdata para guardar un catálogo en el espacio privado de la app, invisible en la interfaz normal de Drive. Los videos conservan permiso de solo lectura. Puede ser necesario agregar este alcance en la configuración de permisos del proyecto Google Cloud. Usa el mismo cliente OAuth, cuenta y Biblioteca en los dos dispositivos.

La sincronización es explícita: después de editar pulsa sincronizar; después en el segundo dispositivo pulsa sincronizar. Se guarda un documento por dispositivo, se combinan asignaciones por archivo con fecha y desempate por identificador de cambio. Los relojes deben estar correctos; no es edición transaccional simultánea. Una sincronización fallida conserva la copia local. El historial de reproducción NO se sincroniza con Windows ni con otros móviles. Un cambio de cuenta selecciona su espacio de datos; las asignaciones de la cuenta anterior no se suben a la nueva.

## Almacenamiento
Descargas y Ajustes muestran cuota, uso y disponibilidad ESTIMADOS del sitio. La web no conoce el espacio físico libre exacto de Android. El dominio github.io puede compartir parte de la cuota con otros proyectos de ese mismo origen. Datos de Drive en nube no se cuentan como ocupación local hasta descargarlos.

Límite propio predeterminado de videos: 5 GB (configurable, 0 desactiva este límite). Margen reservado dentro de cuota: 512 MB. Bloquea nuevas descargas/importaciones que excedan estos valores o la cuota estimada; no borra nada para cumplirlos. La estimación no garantiza que haya espacio: el navegador/Android pueden rechazar una escritura y se informa el error. La cifra de videos usa los tamaños del catálogo/índice; podría variar frente al uso real del sitio que incluye caché y otros datos. No se modifica la caché de Drive.

## Prueba en Android
Entrar en Series → ficha → abrir temporada → reproducir descargado y continuar. VideoMusic → Seleccionar → marcar varios → Asignar artista → comprobar agrupación. En Ajustes sincronizar artistas y probar en otro dispositivo con la misma cuenta. Descargar y eliminar una copia y actualizar la medición de almacenamiento. Probar un límite pequeño para comprobar el bloqueo sin borrar archivos.

Esta entrega comprueba sintaxis y lógica local. OAuth appdata real, pantallas Android y sincronización entre dispositivos requieren prueba con tu cuenta. Se mantienen todos los arreglos de 1.1.2.
