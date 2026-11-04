# Orber+ móvil 1.1.0

Sube todos los archivos de esta carpeta a la raíz del repositorio existente, reemplazando los anteriores. Incluye mobile.js y mobile.css. No subas el ZIP como un archivo único. Conserva la dirección del sitio para mantener tus datos.

Tras el despliegue, cierra todas las pestañas de Orber+ y vuelve a abrir. Si aparece la versión vieja, ciérrala y ábrela una segunda vez para activar el service worker actualizado. No borres los datos del sitio. La cabecera debe indicar MÓVIL 1.1.0.

En Ajustes conserva o pega el ID OAuth web que ya utilizas. La raíz de Biblioteca viene sugerida y es editable. Guarda, Conectar Google y Actualizar catálogo. El ID de carpeta no concede acceso sin Google. No se incluyen tokens ni contraseñas.

Biblioteca/YouTube se clasifica como VideoMusic; sus subcarpetas se muestran como artistas. Las demás carpetas se clasifican como series. Reconoce .orber y formatos habituales, lee serie.json (orber-serie/1) y relaciona nombre_base o temporada/episodio con archivos encontrados. No usa en_origen para afirmar que el archivo está disponible. Carga poster.jpg después de conectar Google; las portadas no quedan disponibles offline en esta versión.

En línea se mantiene el visor de Google. El reproductor propio funciona sobre las copias descargadas con minuto exacto, reinicio, siguiente episodio y autoavance opcional si el siguiente ya está descargado. No se implementó streaming autenticado propio por rangos; necesita una fase adicional de validación en Android. .orber no convierte códecs ni garantiza compatibilidad. El historial móvil sigue separado de Windows.

Nuevas descargas: escritura progresiva en OPFS sin acumular todo el video en memoria, cuota estimada y cancelación explícita. Una transferencia a la vez. Mantén la aplicación abierta; no se garantiza descarga en segundo plano ni reanudación de transferencias interrumpidas. Se conservan lectura y eliminación de descargas antiguas IndexedDB. Borrar datos del sitio elimina las copias locales. Google Drive se usa solo con permiso de lectura; no se renombra ni elimina ningún original.

Prueba en Android: conectar → actualizar catálogo → Static Shock → temporada → Ver en Google → descargar un episodio pequeño → reproducir a mitad → cerrar → continuar → modo avión → reproducir → eliminar descarga. Confirmar que permanece el original. Probar cancelación y pulsar Descargar en otro video durante una transferencia.

Pruebas de entrega: sintaxis JavaScript y pruebas de clasificación, correspondencia con serie.json, orden y detección de contenedor. OAuth, reproducción, OPFS e instalación reales pendientes de prueba en Android.
