# Innova Group by Alliance Holding — Sitio Web

Sitio multi-página para el holding de creadores que monetiza con
**TikTok LIVE Agency**, **Favorited** y **Facebook**.

Estética inspirada en estudios de diseño premium: tipografía masiva,
dark mode, acento eléctrico y animaciones fluidas.

## Estructura

```
index.html            Home: overview, servicios, referidos, equipo, FAQ, formulario
tiktok/index.html      Landing dedicada a TikTok LIVE Agency
facebook/index.html    Landing dedicada a Facebook Monetización
favorited/index.html   Landing dedicada a Favorited (con link oficial de aplicación)
assets/styles.css      CSS compartido por todas las páginas
assets/site.js         JS compartido (preloader, cursor, reveals, formulario, etc.)
```

Publicado tal cual en GitHub Pages / Netlify / Vercel, las rutas `/tiktok/`,
`/facebook/` y `/favorited/` resuelven solas gracias a sus `index.html`.

## Características

- **Preloader animado** por página, con el nombre de marca/plataforma y contador de porcentaje.
- **Cursor personalizado** (punto + anillo con lag suave y estado hover).
- **Hero cinético** — títulos gigantes con reveal por líneas, orbes con parallax y texto outline.
- **Marquees infinitos** en dos direcciones (pausan al hacer hover).
- **Contadores animados** de estadísticas al entrar en viewport.
- **Cards de plataformas** con tilt 3D, glow que sigue el mouse y **logos reales** de TikTok y Facebook (mismos trazos oficiales de marca, en sus colores).
- **Páginas dedicadas por plataforma** (`/tiktok`, `/facebook`, `/favorited`) con hero propio, ficha rápida de datos, "cómo funciona" paso a paso, beneficios y testimonio.
- **Programa de Referidos** — sección en la home explicando la comisión recurrente por referir creadores.
- **Trabaja con Nosotros** — sección de vacantes internas (Manager de Creadores, Growth & Data, Community & Soporte).
- **CTA especial de Favorited** con el link oficial de aplicación embebido.
- **FAQ acordeón**, **formulario de aplicación** (con preselección automática de plataforma/rol vía `?plataforma=` o `?rol=` en la URL), **botones magnéticos**, barra de progreso de scroll y nav que se oculta al bajar.
- **Responsive** completo y soporte de `prefers-reduced-motion`.

## Sobre los logos

- **TikTok** y **Facebook** usan el trazo oficial de sus logotipos de marca (path SVG estándar), coloreados con la paleta oficial de cada marca.
- **Favorited** no tiene un asset de marca públicamente verificable al que este entorno tuviera acceso (sin conexión a internet en este sandbox), así que se diseñó un **ícono propio "favorite"** (estrella de cuatro puntas, degradado coral→violeta) coherente con la identidad de la app. Si tienes el logo oficial de Favorited (SVG o PNG), se puede reemplazar en segundos en `assets/styles.css` (`.icon-fav`) y en los 3 archivos HTML que lo usan.

## Uso

Abre `index.html` en el navegador, o publica la carpeta completa en GitHub Pages /
Netlify / Vercel — no requiere servidor ni compilación.

## Personalización rápida

- **Nombre de la marca**: busca y reemplaza `INNOVA GROUP` / `Innova Group` / `Alliance Holding` en los 4 archivos HTML.
- **Colores**: edita las variables CSS en `:root` de `assets/styles.css` (el acento principal es `--acid`).
- **Formulario**: hoy es demo (sin backend). Conéctalo a Formspree, Getform o tu API cambiando el handler `applyForm` en `assets/site.js`.
- **Link de Favorited**: está en `favorited/index.html` (nav, hero y CTA final) — busca `fav.gg` para actualizarlo si cambia.
- **Contacto**: actualiza el email y los enlaces del footer en los 4 archivos HTML.
