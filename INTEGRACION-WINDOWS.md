# Contrato opcional de organización con Windows

La carpeta física compartida es Biblioteca/Infantiles. La web asigna kind=kids a los archivos de esa carpeta, music a Biblioteca/YouTube y series a otras carpetas de la raíz. Internamente Windows puede usar otro nombre, pero no debe cambiar las rutas sin migración.

La versión móvil usa IDs de archivos de Google Drive como claves estables. Renombrar o mover un archivo conservando su ID mantiene la asignación; copiarlo creando otro ID exige relacionarlo explícitamente. Las importaciones locales tienen UUID de dispositivo y no son automáticamente equivalentes a archivos de Drive.

## Archivos compartidos
Se leen orber-artistas.json y todos los orber-artistas-dispositivo-UUID.json situados directamente en Biblioteca. Cada dispositivo modifica solo su propio archivo. No debe sobrescribirse el documento de otro dispositivo ni tratar el catálogo inicial como única fuente.

Cada documento usa:

```json
{
  "format": "orber-library/1",
  "root": "ID_CARPETA_BIBLIOTECA_EN_DRIVE",
  "records": {
    "ID_VIDEO_EN_DRIVE": {
      "artist": "La Granja de Zenón",
      "updated": 1793808000000,
      "change": "UUID_UNICO_POR_CAMBIO"
    }
  },
  "covers": {
    "kids:la granja de zenón": {
      "id": "ID_IMAGEN_EN_DRIVE",
      "updated": 1793808000000,
      "change": "UUID_UNICO_POR_CAMBIO"
    }
  }
}
```

updated es Unix en milisegundos. Al combinar, gana el mayor updated por clave; empate se resuelve por change lexicográficamente mayor. El valor artist vacío es una desasignación explícita: no se elimina el registro, para no revivir asignaciones antiguas.

Los nombres se normalizan NFC, sin espacios extremos y con espacios internos repetidos reducidos a uno. Las claves de portada usan minúsculas españolas del nombre normalizado. Infantiles antepone kids:; VideoMusic mantiene las claves sin prefijo por compatibilidad.

Las portadas son imágenes separadas; los catálogos contienen sus IDs de Drive, no rutas locales ni URLs temporales. poster.jpg por carpeta es una alternativa inicial. No mover ni eliminar los videos al editar artista. El historial de reproducción no está incluido en este contrato; sigue siendo independiente.

Esta documentación no modifica la versión Windows. Para compartir realmente artistas y portadas, Claude debe implementar lectura y fusión compatibles y conseguir los IDs de Drive correspondientes a los archivos que Windows ve como unidad montada.
