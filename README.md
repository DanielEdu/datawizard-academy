# Data Wizard Academy — Landing Page

Landing page de alta conversión para el bootcamp de Data Engineering: **Databricks + Microsoft Fabric en Azure**.

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (vía `@tailwindcss/vite`)
- **Framer Motion 12** — animaciones al scroll
- **Lucide React** — iconos

## Estructura de carpetas

```
src/
├── components/
│   ├── Navbar.jsx        # Navbar fija con mobile menu
│   ├── Hero.jsx          # Hero con badges, CTAs y bridge animado
│   ├── Problem.jsx       # Comparativa Otros vs Data Wizard
│   ├── WhatYouLearn.jsx  # Grid de 9 pilares del programa
│   ├── Curriculum.jsx    # Acordeón con 8 módulos + stats
│   ├── Methodology.jsx   # 4 pilares metodológicos + quote
│   ├── ForWho.jsx        # Perfiles, prerrequisitos y no-requisitos
│   ├── Instructors.jsx   # Cards de los 2 docentes
│   ├── Pricing.jsx       # Pricing card con incluidos + bonus
│   ├── FAQ.jsx           # 8 preguntas en acordeón
│   ├── CTAFinal.jsx      # CTA final con tagline
│   ├── Footer.jsx        # Footer con redes y links
│   └── FloatingCTA.jsx   # Botón flotante en mobile
├── App.jsx
├── main.jsx
└── index.css             # Tailwind + tokens de color + utilidades
```

## Cómo correr

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173)

## Cómo deployar

### Vercel

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Sube la carpeta dist/ en netlify.com/drop
```

O conecta el repo en Netlify y configura:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

## Identidad visual

| Token | Valor | Uso |
|---|---|---|
| Navy | `#0D1117` | Background principal |
| Navy light | `#11162B` | Secciones alternas |
| Electric | `#00A3FF` | Color Databricks / primario |
| Violet | `#7B2FBE` | Color Fabric / secundario |
| Gold | `#F4B942` | Acento / badges / highlights |

## Personalización rápida

- **URL del CTA:** busca `CTA_URL` en cada componente (Hero, Navbar, Pricing, CTAFinal, FloatingCTA)
- **Discord:** busca `DISCORD_URL` en Footer y FAQ
- **Imágenes de docentes:** en `Instructors.jsx`, reemplaza el bloque del avatar con un `<img>` real
- **Fechas de inicio:** en `FAQ.jsx`, última pregunta
