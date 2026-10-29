# Orber+ móvil — primera versión

## Publicar sin IIS
1. Crea un repositorio público en GitHub. Sube todos los archivos de esta carpeta a su raíz (sin incluir credenciales, cookies ni videos).
2. En Settings → Pages, selecciona Deploy from a branch, rama main y carpeta / (root). Guarda y espera la dirección HTTPS.
3. Abre esa dirección con Chrome en Android. Usa Instalar aplicación o Agregar a pantalla de inicio. La instalación depende del navegador; la web funciona también desde la pestaña.

## Conectar Google Drive privado
1. En Google Cloud crea un proyecto y habilita Google Drive API.
2. Configura Google Auth Platform / pantalla de consentimiento. Para uso personal en pruebas agrega tu correo como usuario de prueba.
3. Crea un cliente OAuth de tipo Aplicación web. En Orígenes JavaScript autorizados registra el origen de Pages, por ejemplo https://tuusuario.github.io (sin la ruta del repositorio).
4. Copia el ID de cliente (termina en apps.googleusercontent.com) a Ajustes de Orber+. Un cliente web público no usa secreto en el HTML. Nunca pegues contraseñas ni cookies.
5. Pega los enlaces de las carpetas de Series y Música. Guarda, pulsa Conectar Google y después Actualizar catálogo. Google puede mostrar advertencia de aplicación de pruebas y solicitar nuevamente autorización cuando expire el token.

Organización de Series: carpeta raíz / Nombre de serie / Temporada 01 / episodios.mp4. Música admite subcarpetas. La consulta recorre hasta 10 niveles. Solo se solicitan permisos de lectura. La API no borra originales.

## Uso
Descargar guarda una copia en IndexedDB. Mantén la aplicación visible y abierta hasta que termine; no hay descargas en segundo plano ni reanudación de transferencias en esta versión. Se permite una descarga a la vez; pulsar su botón de nuevo la cancela. Los archivos grandes consumen memoria durante la descarga: comienza probando un episodio pequeño. Falta de cuota o memoria puede impedir guardarlo.

Descargas permite reproducir sin Internet, reanudar, reiniciar y eliminar la copia local. El progreso permanece aunque elimines una descarga. Para videos importados se elimina también su entrada del catálogo al borrar la única copia administrada; el archivo que seleccionaste originalmente permanece en Android.

La reproducción en línea utiliza la vista previa de Drive, como el HTML anterior. Puede pedir iniciar sesión en Google y depende de cookies/permisos del navegador. Su iframe no permite a Orber+ leer el progreso ni reiniciar con precisión; esas acciones son completas sobre videos descargados/importados. No se promete reproducción directa autenticada ni sincronización del historial con Windows.

El catálogo y progreso se guardan solo en este navegador/dispositivo. Limpiar datos del sitio o desinstalar puede borrar las copias. Solicitar persistencia no garantiza que el navegador la conceda. El formato de video debe ser compatible con Android; MP4 H.264/AAC es un punto de partida habitual.

El icono incluido es provisional; no se contó con el archivo del logo seleccionado. Esta entrega es independiente del ejecutable Windows y no lo modifica.

## Prueba en Android
Importa un MP4 pequeño → reproduce → cierra a mitad → vuelve a abrir y continúa → activa modo avión → reproduce desde Descargas → elimina la copia → confirma que el original sigue en Archivos/Drive. Después prueba la conexión OAuth y un episodio de Drive. La autenticación y reproducción en tu Android requieren esta prueba real; no se han verificado con tu cuenta.
