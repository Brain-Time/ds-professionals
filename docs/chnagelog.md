# 🔄 D&S Professionals — Changelog

Alle relevanten Änderungen am Projekt werden hier dokumentiert.
Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.0.0/)

---

## [Unreleased] — Schritt 2: Design-System & Theme

> Noch nicht begonnen.

### Geplant
- `src/context/ThemeContext.jsx` — Dark/Light Mode Provider
- `src/hooks/useTheme.js` — Custom Hook mit localStorage
- `src/components/ui/Button.jsx` — Primary / Secondary / Gold Varianten
- `src/components/ui/SectionWrapper.jsx` — Framer Motion Scroll-Fade Wrapper
- `src/components/ui/ThemeToggle.jsx` — Sun/Moon Toggle Button
- `src/App.jsx` — Router Setup + ThemeProvider + alle Routes
- `src/main.jsx` — React 18 createRoot Entry Point
- `index.html` — Google Fonts (Inter), Meta-Tags, Dark-Mode-Script (kein Flash)

---

## [0.1.0] — 2026-05-22 · Schritt 1: Projektstruktur & Setup ✅

### Added
- `vite.config.js`
  → Vite 5 + `@vitejs/plugin-react` + `@tailwindcss/vite`
  → `@` Alias für `src/` (saubere Imports)
  → Code-Splitting: `vendor` Chunk (React/Router) + `animations` Chunk (Framer Motion)
  → Dev-Server auf Port 3000 mit `open: true`
  → `chunkSizeWarningLimit: 600`

- `tailwind.config.js`
  → Custom Colors: `brand.primary`, `brand.accent`, `brand.gold`, `surface.*`
  → Dark Mode via `class` (Toggle setzt `.dark` auf `<html>`)
  → Inter Font als `font-sans`
  → Custom Shadows: `card`, `card-hover`, `gold`, `nav`
  → Custom Border Radius: `xl`, `2xl`, `3xl`

- `.eslintrc.cjs`
  → React 18 (kein `react-in-jsx-scope`)
  → React Hooks Rules (error + warn)
  → ES6+ Qualitätsregeln: `prefer-const`, `no-var`, `eqeqeq`
  → Code Style: Semikolons, Single Quotes, 2 Spaces, Comma-Dangle

- `src/styles/globals.css`
  → Tailwind v4 `@import "tailwindcss"` + `@theme` Block
  → CSS Custom Properties für Light Mode (`:root`) und Dark Mode (`.dark`)
  → Semantische Tokens: `--bg-primary`, `--text-primary`, `--border-color`, etc.
  → Utility Classes: `.container-custom`, `.section-padding`, `.text-gradient`, `.underline-gold`
  → Glassmorphism: `.glass` (für Hero/CTA Overlays)
  → CSS Keyframes: `fadeIn`, `pulseSoft`
  → Scrollbar Styling (Webkit)
  → Fokus-Styles (Accessibility)

- `src/data/services.js`
  → Alle 7 Services vollständig:
     1. Industriereinigung (slug: `industriereinigung`)
     2. Hallenreinigung (slug: `hallenreinigung`)
     3. Fitnessstudio-Reinigung (slug: `fitnessstudio-reinigung`)
     4. Büroreinigung (slug: `bueroreinigung`)
     5. Treppenhausreinigung (slug: `treppenhausreinigung`)
     6. Praxisreinigung (slug: `praxisreinigung`)
     7. Bildungseinrichtungen (slug: `bildungseinrichtungen`)
  → Jeder Service: `id`, `slug`, `title`, `shortDesc`, `longDesc`, `features[]`, `icon`, `accentColor`, `metaTitle`, `metaDesc`
  → Hilfsfunktionen: `getServiceBySlug(slug)`, `getAllServiceSlugs()`

- `src/data/stats.js`
  → 4 Kennzahlen für Counter-Animation:
     - 150+ Zufriedene Kunden
     - 15+ Jahre Erfahrung
     - 30+ Mitarbeiter
     - 500+ Abgeschlossene Projekte
  → Jede Stat: `id`, `value`, `suffix`, `label`, `icon`, `desc`

- `README.md`
  → Projektübersicht, Tech-Stack, Design-System
  → Schnellstart (npm-Befehle)
  → Seiten & Routen Übersicht
  → Services Liste
  → Portfolio-Qualitätsziele Tabelle
  → Deployment-Anleitung (Vercel + FTP)
  → EmailJS Konfiguration

- `docs/projekt_status.md` — Projektstatus-Dokument (dieses Dokument)
- `docs/changelog.md` — Changelog (diese Datei)
- `docs/todo.md` — Aufgabenliste nach Priorität

### Ordnerstruktur angelegt
```
src/components/layout/
src/components/sections/
src/components/ui/
src/pages/
src/hooks/
src/context/
src/data/
src/styles/
src/assets/images/
docs/
```

### Terminal-Befehle (Schritt 1)
```bash
npm create vite@latest ds-professionals -- --template react
npm install react-router-dom@6 framer-motion react-helmet-async react-hook-form @emailjs/browser
npm install tailwindcss@4 @tailwindcss/vite
npm install -D eslint eslint-plugin-react eslint-plugin-react-hooks @vitejs/plugin-react
```

### Entscheidungen (Schritt 1)
- Tailwind CSS v4 via `@tailwindcss/vite` → kein `postcss.config.js` nötig
- `@theme` Direktive statt `tailwind.config` für Design-Tokens
- CSS Custom Properties für Dark/Light Mode → kein Theme-Flash
- Code-Splitting für Framer Motion (großes Bundle → eigener Chunk)
- Emoji-Icons für Services → keine externe Icon-Library nötig
