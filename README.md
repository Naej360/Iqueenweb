# IQUEEN Technology – versión simple para la tarea (HTML + CSS + Bootstrap)

Solo HTML, CSS y Bootstrap 5.3.8. **No tiene JavaScript propio** (el único JS es el de Bootstrap, para el menú móvil, el desplegable y el panel de ajustes).

## Cómo verla
Abre `index.html` con doble clic (o con Live Server en VS Code). Necesita internet para cargar Bootstrap y las fuentes.

## ¿Cumple lo que pide el profesor?
| Pide | Dónde está |
|---|---|
| **5 animaciones CSS** | `css/estilos.css`, sección 6, con `@keyframes`: 1 `aparecer-arriba` (títulos y tarjetas), 2 `flotar` (imagen de portada), 3 `pulso` (botón de WhatsApp), 4 `degradado-movil` (fondo de portada y cabeceras), 5 `rebote` (iconos al pasar el mouse) |
| **Cambios suaves de color y posición** | Secciones 3 y 5: la línea del menú crece, los enlaces cambian de color, las tarjetas suben 8 px, las imágenes hacen zoom y los botones cambian de color (`transition`) |
| **Fuentes personalizadas** | Poppins (títulos) y Nunito (texto) desde Google Fonts, en el `<head>` de cada página; se usan en la sección 1 de `estilos.css` |
| **Navegación sencilla** | Menú Bootstrap con desplegable de Productos, página activa marcada, migas de pan, enlace "Saltar al contenido" y botón de WhatsApp siempre visible |
| **Configuración útil para el usuario** | Botón **Ajustes** (panel Bootstrap): modo oscuro, tamaño de texto (A, A+, A++) y quitar animaciones. Solo HTML + CSS (selector `:has()`, sección 7). También se respeta "reducir movimiento" del sistema |
| **Accesibilidad y usabilidad** | Etiquetas semánticas (`header`, `nav`, `main`, `section`, `article`, `footer`), un solo `h1` por página, `alt` en imágenes, `label` en cada campo, foco visible, contraste de colores según WCAG, diseño responsive |
| **Estructura de la tarea** | Inicio, Nosotros (visión/misión), Servicios (3, guiados a Contacto), Productos (Laptops, PC's, Domótica, Seguridad), Carrito (resumen, entrega, pago) y Contacto (formulario, mapa, redes, teléfono/WhatsApp, correo) |

## Lo que debes rellenar
Busca `RELLENAR` (Ctrl+Shift+F en VS Code): RUC, dirección, horario, visión/misión reales, redes sociales, productos y precios.

## Límites (a propósito, para mantenerla simple)
- Los ajustes (modo oscuro, tamaño) no se recuerdan al cambiar de página; recordarlos requiere JavaScript.
- El carrito es una página de ejemplo: la compra se cierra con el botón **Pedir por WhatsApp** de cada producto. La versión completa con carrito funcional está en `1-html-bootstrap/`.
- Los formularios abren tu programa de correo (`mailto:`); no hay servidor que los reciba.
- Los productos y los precios son de ejemplo.
