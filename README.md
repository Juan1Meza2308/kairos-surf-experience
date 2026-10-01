# Kairos Surf School — Sitio web

> **Escuela de surf y paddle en Puerto Colombia, Atlántico (Colombia).**
> Clases 100 % personalizadas para todas las edades y niveles.
> **Tagline:** *¡Vive la experiencia de surfear!*

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Juan1Meza2308/kairos-surf-experience)
[![Node](https://img.shields.io/badge/Node-20+-green.svg)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://typescriptlang.org)
[![React](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-4-06b6d4.svg)](https://tailwindcss.com)

---

## 🎯 Qué es este proyecto

Landing page **single-page** (una sola página con navegación por anclas y scroll suave) para **Kairos Surf School**, una escuela de surf y paddle local en **Puerto Colombia, Atlántico**. El sitio está diseñado para educar antes de vender: da datos reales (oleaje, duración de clase, políticas de reprogramación, ratio alumnos/instructor) para que el visitante decida por sí mismo.

### Secciones incluidas

| Sección | Qué cubre |
|---------|-----------|
| **Hero** | Foto de acción, logo, tagline, CTA principal "Reserva tu clase" |
| **La playa** | Carrusel del malecón, datos prácticos (cómo llegar, oleaje típico, mejor hora), mapa Google Maps embebido con punto de encuentro real |
| **El deporte** | Qué es surf/paddle explicado con honestidad, cuánto toma pararse en la tabla, para quién es cada disciplina |
| **Instructores** | Perfiles profundos: foto, historia personal, estilo de enseñanza diferenciado (paciente / técnico / seguridad) |
| **Cómo es una clase** | Timeline paso a paso (bienvenida → teoría → práctica → feedback), duración real, qué incluye, política de mar malo |
| **Planes y precios** | Tabla comparativa objetiva: individual, grupal, niños, paquete 5, yoga+surf. Cada plan con botón "Reservar este plan" |
| **FAQ** | 9 preguntas reales (forma física, natación, tiempo para pararse, mar malo, ratio, qué llevar, edad, pago) |
| **Reserva online** | Formulario en pasos dentro de la misma página → elige plan/instructor → fecha/hora → datos → confirma → abre WhatsApp pre-llenado |
| **Galería** | Grid estilo Instagram con lightbox |
| **Actividades extra** | Yoga+Surf, colaboraciones locales |
| **Testimonios** | Frases concretas de alumnos (situaciones reales, no elogios genéricos) |
| **Ubicación y contacto** | Mapa, dirección, WhatsApp/Instagram directo, CTA final |

---

## 🛠 Tech Stack

| Capa | Tecnología |
|------|------------|
| **Framework** | [TanStack Start](https://tanstack.com/start) (React 19 + SSR + file-based routing) |
| **Router** | `@tanstack/react-router` (type-safe, lazy-loading) |
| **Estado servidor** | `@tanstack/react-query` v5 |
| **Estilos** | [Tailwind CSS v4](https://tailwindcss.com) (OKLCH tokens, `@theme inline`) |
| **UI primitives** | Radix UI (accesibles, unstyled) + componentes propios |
| **Animaciones** | CSS `cubic-bezier(0.16, 1, 0.3, 1)` + `content-visibility: auto` |
| **Formularios** | `react-hook-form` + `zod` (validación) |
| **Iconos** | `lucide-react` |
| **Carrusel** | `embla-carousel-react` |
| **Fechas** | `date-fns` (locale `es`) |
| **Build/Dev** | Vite 8 + `vite-tsconfig-paths` |
| **Lint/Format** | ESLint 9 + Prettier 3 + TypeScript ESLint |
| **Deploy target** | **Cloudflare Workers** (Nitro preset `cloudflare-module` via `wrangler`) — también adaptable a Node.js cambiando el preset |

### Tipografías (auto-cargadas vía `@fontsource` en `index.css`)

- **Display / títulos**: *Cormorant Garamond* (serif elegante, estilo logo)
- **Grotesk / hero grande**: *Archivo* 800 (mayúsculas, tracking negativo)
- **Cuerpo / UI**: *Karla* (sans legible)
- **Script / acentos**: *Caveat* (manuscrita, frases destacadas)

---

## 🚀 Cómo ejecutar en local

```bash
# 1. Clona
git clone https://github.com/Juan1Meza2308/kairos-surf-experience.git
cd kairos-surf-experience

# 2. Instala (Node 20+ requerido)
npm i

# 3. Desarrollo con HMR
npm run dev
# → http://localhost:3000

# 4. Build de producción (output en .output/server/index.mjs)
npm run build

# 5. Preview del build
npm run preview
```

> **Variables de entorno** (opcional): crea un `.env` si quieres sobrescribir el número de WhatsApp o la URL del mapa.
> ```env
> VITE_WHATSAPP_NUMBER=573XXXXXXXXX
> VITE_MAP_EMBED=https://www.google.com/maps/...
> ```

---

## 📁 Estructura del proyecto

```
kairos-surf-experience/
├── public/                     # Assets estáticos (og.jpg, favicon, imágenes)
├── src/
│   ├── components/
│   │   ├── kairos/             # Componentes de negocio (secciones, booking, nav, etc.)
│   │   │   ├── Booking.tsx     # Formulario multi-paso → WhatsApp
│   │   │   ├── data.ts         # Datos tipados: instructores, planes, FAQs, timeline, testimonios
│   │   │   ├── Hero.tsx        # Hero con scrim adaptable a foto diurna/nocturna
│   │   │   ├── Nav.tsx         # Nav fija + botón "Reservar" siempre visible
│   │   │   ├── Sections.tsx    # Barrel export de todas las secciones
│   │   │   └── Reveal.tsx      # IntersectionObserver para fade-in/slide-up
│   │   └── ui/                 # Primitivas reutilizables (Button, Input, Dialog, etc.)
│   ├── hooks/
│   │   ├── use-mobile.tsx      # Media query hook
│   │   └── use-reveal.ts       # Hook de animación on-scroll
│   ├── lib/                    # Utilidades puras
│   │   ├── utils.ts            # cn() = clsx + tailwind-merge
│   │   └── ...
│   ├── routes/
│   │   └── index.tsx           # Página principal (componente Index + head SEO)
│   ├── router.tsx              # Configuración del router (createRouter)
│   ├── start.ts                # Entry point TanStack Start (SSR)
│   ├── styles.css              # Tokens OKLCH, utilidades, tema dark
│   └── routeTree.gen.ts        # Generado automáticamente (no editar)
├── .lovable/                   # Config Lovable (no tocar)
├── AGENTS.md                   # Reglas para agentes de código
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md                   # ← estás aquí
```

---

## 🎨 Diseño y tokens de color (OKLCH)

La paleta vive en `src/styles.css` bajo `:root` y se expone como variables CSS semánticas (`--color-primary`, `--color-teal-deep`, etc.) y utilidades Tailwind (`bg-teal-deep`, `text-gold`, etc.).

| Token | Valor OKLCH | Uso |
|-------|-------------|-----|
| `--teal-deep` | `oklch(0.33 0.055 190)` | Color de marca principal (fondos oscuros, bordes) |
| `--teal-brand` | `oklch(0.38 0.06 186)` | Variante de marca |
| `--gold` | `oklch(0.73 0.107 85)` | Acentos, botones primarios, CTA |
| `--gold-bright` | `oklch(0.76 0.13 84)` | Hover/active de botones |
| `--turquoise` | `oklch(0.82 0.13 182)` | Highlights, tablas, detalles |
| `--terracotta` | `oklch(0.63 0.11 48)` | Acentos cálidos puntuales |
| `--cream` | `oklch(0.95 0.017 88)` | Texto sobre fondo oscuro |
| `--background` | `oklch(0.145 0.005 250)` | Fondo base (casi negro azulado) |

> **Fondo oscuro por defecto**. No hay modo claro: la identidad es oscura, cálida, sobria con toque boho/artesanal — **evita el estilo tropical pastel** típico de escuelas de surf.

---

## 🧩 Convenciones de código

- **TypeScript estricto**: `exactOptionalPropertyTypes`, `noUncheckedIndexedAccess` activados.
- **Sin `any`**: tipado completo en props, hooks, datos.
- **Server/Client boundary**: TanStack Start separa automáticamente — lo que está en `src/routes/**` corre en servidor salvo `"use client"`.
- **Validación Zod** en el formulario de reserva (client-side) y en cualquier endpoint futuro.
- **Accesibilidad**: Radix UI + `focus-visible`, `aria-*`, landmarks semánticos (`<main>`, `<section>`, `<nav>`).
- **Rendimiento**: `content-visibility: auto` en secciones fuera de viewport, `lazy()` en `Booking`, fuentes con `font-display: swap`.
- **Micro-commits**: cada avance lógico = un commit (Conventional Commits, autor `Juan1Meza2308`).

---

## 📦 Deploy

### Cloudflare Workers (preset por defecto)

```bash
# 1. Build
npm run build

# 2. Preview local (requiere Wrangler)
npx wrangler --cwd ./.output dev
# → http://localhost:8787

# 3. Deploy a Cloudflare
npx wrangler --cwd ./.output deploy
```

> El preset `cloudflare-module` genera un bundle compatible con Cloudflare Workers
> (`.output/server/index.mjs` + `.wrangler/` config). No corre como proceso Node
> standalone; para eso hay que cambiar el preset de Nitro a `node-server`.

### Vercel (alternativa)

Vercel detecta TanStack Start y usa su adaptador propio. Si prefieres Vercel:

```bash
# En Vercel: New Project → Import Git Repository
# Build command: npm run build
# Output: (Vercel usa su propio adaptador, no .output/server)
```

### Node.js standalone (cambiando el preset)

Si necesitas un servidor Node puro (Docker, VPS, Railway, Fly.io):

1. Cambia el preset en `vite.config.ts` o `nitro.config.ts`:
   ```ts
   // nitro.config.ts
   export default defineNitroConfig({
     preset: "node-server",
   })
   ```
2. Rebuild:
   ```bash
   npm run build
   node .output/server/index.mjs  # escucha en PORT=3000
   ```

### Variables de entorno en producción

| Variable | Requerida | Descripción |
|----------|-----------|-------------|
| `PORT` | No | Puerto del servidor (Node preset, default 3000) |
| `HOST` | No | Bind address (Node preset, default `0.0.0.0`) |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare | Para `wrangler deploy` |
| `CLOUDFLARE_API_TOKEN` | Cloudflare | Para `wrangler deploy` |

---

## 📸 Assets e imágenes

- Las fotos reales del feed de Instagram **@kairossurf.co** se suben manualmente a `public/` y se importan en `src/components/kairos/data.ts`.
- Mientras no estén las reales, el sitio usa imágenes de referencia (tonos cálidos, tablas turquesa/amarillas, atardeceres, playa con kioscos de palma).
- `og.jpg` (1200×630) en `public/` para Open Graph / Twitter Card.

---

## ♿ Accesibilidad

- Navegación 100 % por teclado (`Tab`, `Enter`, `Escape`).
- `focus-visible` visible en todos los interactivos.
- Landmarks semánticos y `aria-label` donde el icono es el único contenido.
- `prefers-reduced-motion: reduce` respeta animaciones (las desactiva).
- Contraste AA/AAA en tokens de color (ver `styles.css`).

---

## 🔍 SEO incluido

- `title`, `meta description` optimizados para **"clases de surf Puerto Colombia"** y **"clases de surf Atlántico"**.
- `H1` principal: **"Clases de surf en Puerto Colombia"**.
- Open Graph + Twitter Card (`og:image` → `/og.jpg`).
- Anclas de sección legibles (`#playa`, `#deporte`, `#instructores`, `#planes`, `#faq`, `#reserva`, `#galeria`, `#extras`, `#testimonios`, `#contacto`).
- **JSON-LD** `SportsActivityLocation` en `<head>` (nombre, ubicación, tipo de servicio, slogan, `sameAs` Instagram).

---

## 📝 Licencia

Código: **MIT** — úsalo, modifícalo, despliégalo.
Contenido (textos, fotos, marca Kairos): **propiedad de Kairos Surf School** — no reutilizar sin permiso.

---

## 🤝 Contacto

**Kairos Surf School**
- 📍 Puerto Colombia, Atlántico, Colombia
- 📱 WhatsApp: [+57 300 000 0000](https://wa.me/573000000000) (placeholder — reemplazar por el real)
- 📸 Instagram: [@kairossurf.co](https://instagram.com/kairossurf.co)

---

> *Este proyecto fue iniciado con [Lovable](https://lovable.dev) y se mantiene como código propio. Los cambios en `main` se sincronizan de vuelta a Lovable automáticamente.*