# Orber+ móvil 1.3.0

## Subir actualización
Extrae el ZIP y sube TODOS los archivos a la raíz del repositorio, reemplazando los existentes. No subas el ZIP ni una carpeta contenedora. Comprueba MÓVIL 1.3.0. Usa Buscar actualización en Ajustes; no borres los datos del sitio.

## Primero: conservar tus artistas
Desde el navegador donde ya los asignaste, abre Ajustes y pulsa Exportar respaldo de artistas. Luego pulsa Activar / sincronizar Biblioteca. Autoriza Google con la cuenta que tiene permiso de edición de Biblioteca. Combina las asignaciones locales con los datos privados anteriores de esa cuenta y con el catálogo compartido. Los datos antiguos no se eliminan.

Si Google bloquea el nuevo permiso, revisa Google Auth Platform > Acceso a los datos en tu proyecto OAuth y añade https://www.googleapis.com/auth/drive y https://www.googleapis.com/auth/drive.appdata. Las cuentas deben cumplir la configuración de usuarios de prueba y las políticas de su organización. El permiso drive es amplio; el código de Orber+ limita sus escrituras a los catálogos de artistas y portadas que crea en Biblioteca. No cambia permisos ni modifica los videos.

## Compartir organización
Biblioteca contiene orber-artistas.json, archivos orber-artistas-dispositivo-UUID.json y portadas orber-artista-UUID.jpg. Conserva TODOS estos archivos: Orber+ combina sus datos, los auxiliares por dispositivo evitan sobrescribir a otros editores. El catálogo inicial no es por sí solo un respaldo completo de cambios posteriores. Para respaldar exporta desde la aplicación después de sincronizar.

En otro navegador o cuenta configura el cliente OAuth y la misma Biblioteca, conecta Google y actualiza el catálogo. Los lectores pueden leer la organización; para modificarla se requiere permiso de edición y activar la sincronización. Cada cuenta necesita acceso a los archivos de Biblioteca. Las actualizaciones de GitHub no los reemplazan.

Al activar escritura en una sesión, guarda automáticamente las asignaciones mientras el permiso esté vigente. Al reconectar o volver a primer plano con sesión válida lee los cambios compartidos. Tras cerrar o caducar la autorización hay que pulsar Activar / sincronizar Biblioteca para volver a guardar. Sin Internet los cambios se mantienen localmente. Google no permite garantizar autorización permanente silenciosa desde un HTML. El avance de reproducción sigue siendo local.

## Portadas y descargas
Entra a un artista > Elegir portada (JPG, PNG, WebP hasta 8 MB). Reduce la imagen y guarda una copia en Biblioteca, disponible para las otras cuentas. Las portadas anteriores permanecen, no se eliminan automáticamente.

VideoMusic > Seleccionar videos > Descargar selección. También hay Descargar temporada dentro de una serie. Muestra tamaño antes de confirmar y aplica límites y margen de espacio. Una descarga activa cada vez, cola en Descargas; pausar detiene al terminar el archivo, cancelar descarga detiene la actual. Tras cerrar o recargar, pulsa Continuar cola; las descargas incompletas comienzan de nuevo, no reanudan bytes. Mantén la aplicación abierta: no se garantiza ejecución en segundo plano en Android. Eliminar copia nunca elimina el original de Drive.

## Validación
Comprobación sintáctica JS, pruebas de asociación de 52 episodios, agrupación y límites de espacio; pruebas de fusión de portadas, escritura de catálogo por dispositivo, cola y errores con Drive simulado. Falta validar OAuth y reproducción en el teléfono y la sincronización real entre dos cuentas. No se ha publicado en GitHub automáticamente.
