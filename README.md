# Landing Page Pop It

Landing page simple y moderna para promocionar y vender juguetes Pop It. Incluye un hero con llamada a la acción, sección informativa, carrusel de productos, reglas del juego y un footer con enlaces útiles. El diseño es responsive y utiliza una paleta alegre (naranjas y turquesas).

## Características
- Hero con titular, texto y botón de compra.
- Sección “¿Qué es Pop It?” explicativa.
- Carrusel de productos con tarjetas, navegación e indicadores.
- Sección de reglas del juego con imagen demostrativa.
- Footer con enlaces rápidos (métodos de pago, entrega, mayoreo, contactos).
- Estilos responsive para móviles y tablets.

## Demo local
No requiere servidor: abre `index.html` directamente en tu navegador.

Opcional: usa un servidor estático (p. ej., Live Server de VS Code) para recarga automática mientras editas.

## Estructura del proyecto
```
C:\Users\User\OneDrive\Documentos\Landing page pop it\
├─ index.html      # Estructura HTML principal
├─ style.css       # Estilos y responsive
├─ app.js          # (Opcional) Lógica JS para el carrusel
└─ assets\         # Imágenes y recursos (background, productos, etc.)
```

## Tecnologías
- HTML5 (maquetación semántica)
- CSS3 (Flexbox, estilos, media queries)
- Font Awesome (iconos a través de kit remoto)
- JavaScript (opcional, `app.js` para interactividad del carrusel)

## Requisitos
- Navegador moderno (Chrome, Edge, Firefox, Safari)
- Conexión a internet para cargar el kit de Font Awesome (si no usas copia local)

## Instalación y uso
1. Descarga o clona este proyecto.
2. Asegúrate de que `index.html`, `style.css`, `app.js` y la carpeta `assets` estén en la misma ruta.
3. Abre `index.html` con doble clic o arrástralo al navegador.
4. (Opcional) Inicia un servidor local para desarrollo.

## Personalización
- Colores: edita valores en `style.css` (por ejemplo, `#FFBF69`, `#CBF4F0`, `#ff8a00`).
- Tipografía: ajusta la regla `body` en `style.css`.
- Contenido: cambia textos e imágenes en `index.html` y `assets`.
- Productos: duplica o elimina bloques `.products__card` en `index.html` para añadir/quitar items.

## Accesibilidad y SEO (sugerencias)
- Mantén `alt` descriptivos en todas las imágenes.
- Usa jerarquía de encabezados coherente (`h1`, `h2`, `h3`).
- Verifica contrastes de color adecuados para legibilidad.
- Añade una meta descripción y un título de página más descriptivo en `<head>`.

## Créditos
- Imágenes dentro de `assets` incluidas en el proyecto.
- Iconos provistos por Font Awesome.

## Futuras mejoras
- Completar la lógica del carrusel en `app.js` (auto-play, swipe en móvil, navegación con teclado).
- Sincronizar estados activos entre tarjetas, flechas e indicadores.
- Añadir transiciones/animaciones suaves entre productos.
- Integración con carrito o formulario de contacto.

## Licencia
Agrega aquí la licencia que prefieras (p. ej., MIT).
