# 🔄 D&S Professionals — Changelog

Alle relevanten Änderungen am Projekt werden hier dokumentiert.
Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.0.0/)

---

## [Unreleased] — Schritt 4: HomePage Sektionen

> Nächster Schritt.

### Geplant
- `src/components/ui/SectionWrapper.jsx` — Framer Motion Scroll-Fade Wrapper
- `src/components/ui/Button.jsx` — Primary / Secondary / Gold Varianten
- `src/components/ui/ServiceCard.jsx` — Wiederverwendbare Service-Karte
- `src/components/sections/HeroSection.jsx` — Fullscreen Hero mit CTA
- `src/components/sections/ServicesPreview.jsx` — 7 Service-Cards (Vorschau)
- `src/components/sections/WhyUsSection.jsx` — 4 USPs mit Icons
- `src/components/sections/StatsSection.jsx` — Counter-Animation
- `src/components/sections/TestimonialsSection.jsx` — Kundenstimmen
- `src/components/sections/CtaSection.jsx` — "Jetzt Angebot anfordern"
- `src/hooks/useCountUp.js` — Zahlen-Counter Hook (IntersectionObserver + rAF)
- `src/data/testimonials.js` — 3 Kundenstimmen Daten
- `src/pages/HomePage.jsx` — Alle Sektionen + React Helmet SEO

---

## [0.3.0] — 2026-05-29 · Schritt 3: Layout (Navbar & Footer) ✅

### Added
- `src/components/layout/Navbar.jsx`
  → Echtes Logo-Bild (`_a.png` Light / `_b.png` Dark) via `useTheme`
  → Firmenname „D&S Professionals" + Subtitle „Reinigungsdienst Karlsruhe"
  → Desktop Navigation: Home | Dienstleistungen | Über uns | Kontakt
  → Active Link Highlighting via `NavLink`
  → Sticky + `backdrop-blur` beim Scrollen (Scroll-Shadow)
  → `ThemeToggle` integriert
  → Gold CTA Button „Angebot anfragen"
  → Mobile Hamburger-Menü (Framer Motion Slide-in)
  → Menü schließt automatisch bei Route-Wechsel
  → `useTheme` korrekt aus `@/hooks/useTheme` importiert

- `src/components/layout/Footer.jsx`
  → Echtes Logo-Bild (`_b.png`, fix dunkel) — kein SVG-Platzhalter mehr
  → Slogan „Mehr als nur sauber"
  → 3 Spalten: Logo+Text | Navigation+Services | Kontakt Karlsruhe
  → Alle 6 Dienstleistungs-Links
  → Kontaktdaten: Adresse, Telefon, E-Mail, Öffnungszeiten
  → Copyright + Jahr (dynamisch via `new Date().getFullYear()`)
  → Legal Links: Impressum · Datenschutz · AGB
  → Referenzen-Badge: Indutec · Iwago · Wisag
  → Framer Motion `whileInView` `fadeInUp` Animationen

- `src/components/layout/Layout.jsx`
  → `<Navbar />` + `<main>` + `<Footer />` Wrapper
  → `ScrollToTop` Komponente (Scroll auf 0 bei Route-Wechsel, `behavior: 'instant'`)
  → Page Transitions via `AnimatePresence mode="wait"` (Framer Motion Fade + Y-Offset)
  → `min-h-screen flex-col` → Footer bleibt immer unten
  → `pt-16 lg:pt-20` für Navbar-Höhen-Kompensation

- `src/main.jsx`
  → React 18 `createRoot`
  → Provider-Stack: `HelmetProvider` → `ThemeProvider` → `BrowserRouter`

- `src/App.jsx`
  → `<Layout>` Wrapper mit React Router `<Routes>`
  → Alle Routen vorbereitet (Placeholder-Pages)

- `src/styles/globals.css` (Ergänzung)
  → Tailwind v4 Dark Mode: `@custom-variant dark (&:where(.dark, .dark *))`

### Assets hinzugefügt
- `src/assets/D&S PROFESSIONALS_a.png` — Logo Light Mode (500×500px)
- `src/assets/D&S PROFESSIONALS_b.png` — Logo Dark Mode + Footer (500×500px)

### Fixed
- `SyntaxError: useTheme not exported from ThemeContext`
  → Import in `Navbar.jsx` von `@/context/ThemeContext` auf `@/hooks/useTheme` korrigiert
- `lucide-react` fehlte → `npm install lucide-react` nachinstalliert
- Logo zu klein / SVG-Platzhalter im Footer
  → Echtes PNG-Logo eingebunden (`h-9 w-9` Navbar / `h-12 w-12` Footer)

### Entscheidungen (Schritt 3)
- Logo-Bild + Firmenname nebeneinander → quadratisches 500×500 PNG braucht Text-Ergänzung
- `_b.png` fix im Footer → dunkler Hintergrund, kein Theme-Switch nötig
- `_a.png` / `_b.png` in Navbar per Theme → automatischer Wechsel via `useTheme`
- `backdrop-blur` in Navbar → moderner Look, Lesbarkeit beim Scrollen
- `AnimatePresence mode="wait"` → saubere Page-Transitions
- `behavior: 'instant'` bei ScrollToTop → kein sichtbares Scrollen bei Route-Wechsel
- `lucide-react` minimal eingesetzt (Menu/X Icons in Navbar)

---

## [0.2.0] — 2026-05-22 · Schritt 2: Design-System & Theme ✅

### Added
- `src/context/ThemeContext.jsx`
  → `ThemeProvider` Komponente + `createContext` + Context Export
  → `isDark` State + `toggleTheme` Funktion (`useCallback`)
  → `localStorage` Persistenz (Key: `ds-theme`)
  → System-Preference Detection (`prefers-color-scheme: dark`)
  → `.dark` Klasse + `data-theme` auf `document.documentElement`
  → Standard: Light Mode

- `src/hooks/useTheme.js`
  → Custom Hook für ThemeContext
  → Gibt `{ isDark, toggleTheme }` zurück
  → Error-Boundary: wirft Fehler wenn außerhalb `ThemeProvider` genutzt

- `src/components/ui/ThemeToggle.jsx`
  → Sun/Moon SVG-Icons (inline, keine Library)
  → Framer Motion `AnimatePresence` Toggle-Animation
  → Rotate + Scale + Opacity beim Wechsel
  → `useTheme` Hook genutzt
  → Accessible: `aria-label`, `role="switch"`, `aria-checked`

### Entscheidungen (Schritt 2)
- SVG-Icons statt Emoji/Library → pixelgenau, animierbar, kein Overhead
- System-Preference Detection → UX: respektiert OS-Einstellung beim ersten Besuch
- `data-theme` + `dark`-Klasse auf `<html>` → Tailwind v4 Dark Mode kompatibel
- `useCallback` für `toggleTheme` → verhindert unnötige Re-Renders

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

- `docs/projekt_status.md` — Projektstatus-Dokument
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
src/assets/
docs/
```

### Terminal-Befehle (Schritt 1)
```bash
npm create vite@latest ds-professionals -- --template react
npm install react-router-dom@6 framer-motion react-helmet-async react-hook-form @emailjs/browser
npm install tailwindcss@4 @tailwindcss/vite
npm install -D eslint eslint-plugin-react eslint-plugin-react-hooks @vitejs/plugin-react
npm install lucide-react
```

### Entscheidungen (Schritt 1)
- Tailwind CSS v4 via `@tailwindcss/vite` → kein `postcss.config.js` nötig
- `@theme` Direktive statt `tailwind.config` für Design-Tokens
- CSS Custom Properties für Dark/Light Mode → kein Theme-Flash
- Code-Splitting für Framer Motion (großes Bundle → eigener Chunk)
- Emoji-Icons für Services → keine externe Icon-Library nötig