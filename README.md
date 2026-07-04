# NOVA MCN — Landing Page

Landing page para una MCN (Multi-Channel Network) que monetiza con
**TikTok LIVE Agency**, **Favorited** y **Facebook**.

Estética inspirada en estudios de diseño premium: tipografía masiva,
dark mode, acento eléctrico y animaciones fluidas.

## Características

- **Un solo archivo** — `index.html` autocontenido (HTML + CSS + JS), sin build ni dependencias.
- **Preloader animado** con contador de porcentaje y reveal del logotipo.
- **Cursor personalizado** (punto + anillo con lag suave y estado hover).
- **Hero cinético** — títulos gigantes con reveal por líneas, orbes con parallax y texto outline.
- **Marquees infinitos** en dos direcciones (pausan al hacer hover).
- **Contadores animados** de estadísticas al entrar en viewport.
- **Cards de plataformas** con tilt 3D y glow que sigue el mouse (colores de marca de cada plataforma).
- **Lista de servicios** estilo estudio con hover interactivo.
- **FAQ acordeón**, **formulario de aplicación**, **botones magnéticos**, barra de progreso de scroll y nav que se oculta al bajar.
- **Responsive** completo y soporte de `prefers-reduced-motion`.

## Uso

Abre `index.html` en el navegador, o publícalo directamente en GitHub Pages /
Netlify / Vercel — no requiere servidor ni compilación.

## Personalización rápida

- **Nombre de la marca**: busca y reemplaza `NOVA` / `NOVA·MCN` en `index.html`.
- **Colores**: edita las variables CSS en `:root` (el acento principal es `--acid`).
- **Formulario**: hoy es demo (sin backend). Conéctalo a Formspree, Getform o tu API cambiando el handler `applyForm` al final del archivo.
- **Contacto**: actualiza el email y los enlaces del footer.
