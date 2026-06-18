# 🔄 D&S Professionals — Changelog

Alle relevanten Änderungen am Projekt werden hier dokumentiert.
Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.0.0/)

---

## [Unreleased] — Schritt 6: AboutPage & ContactPage

> Nächster Schritt.

### Geplant
- `src/pages/AboutPage.jsx` — Unternehmensgeschichte, Referenzen, Werte & Versprechen, Team (optional)
- `src/pages/ContactPage.jsx` — Kontaktformular (React Hook Form), EmailJS, Karte, Öffnungszeiten
- `src/hooks/useContactForm.js` — React Hook Form Logik, EmailJS `send()`, Loading/Success/Error States

---

## [0.5.0] — 2026-06-18 · Schritt 5: UI Components & Pages ✅

### Added
- `src/components/ui/Button.jsx` (überarbeitet)
  → Varianten: `gold` | `primary` | `outline` | `ghost`
  → Größen: `sm` | `md` | `lg`
  → `as` Prop (render als `<button>` oder `<Link>`)
  → Loading Spinner (SVG, `animate-spin`)
  → `disabled` + `aria-disabled` Support
  → Tailwind-Klassen direkt (kein CSS-Var Overhead)
  → Alle Kommentare auf Englisch

- `src/components/ui/SectionWrapper.jsx` (neu)
  → Framer Motion `whileInView` Scroll-Fade + Y-Offset
  → `viewport={{ once: true, margin: '-80px' }}`
  → Konfigurierbare Props: `delay` | `duration` | `yOffset`
  → Wiederverwendbar für alle Sektionen

- `src/pages/HomePage.jsx` (aktualisiert)
  → React Helmet: `<title>` + `meta description` + OG Tags + `robots`
  → Alle 6 Sektionen zusammengesetzt

- `src/pages/ServicesPage.jsx` (neu)
  → Hero mit Breadcrumb + Titel + Untertitel
  → Alle 7 Services als Grid (1 → 2 → 3 Spalten)
  → `ServiceCard`: Accent-Bar + Icon + Titel + `shortDesc` + 3 Features + Link
  → Staggered Fade-in via `whileInView` + `custom` Index
  → CTA Strip: „Nicht das Richtige gefunden?" + 2 Buttons (Gold + Outline)
  → React Helmet SEO

- `src/pages/ServiceDetailPage.jsx` (neu)
  → Dynamisch via `useParams()` + `getServiceBySlug()`
  → 404-Handling: `<Navigate to="/dienstleistungen" replace />`
  → Hero: Icon-Badge + Breadcrumb + Titel + `shortDesc`
  → Beschreibung (`longDesc`) + vollständige Features-Checkliste (animiert)
  → Sticky CTA-Karte (rechts): Trust-Points + 2 Buttons
  → Related Services: 3 weitere Services (ohne aktuellen)
  → React Helmet: dynamische SEO-Tags pro Service (`metaTitle`, `metaDesc`)

- `src/App.jsx` (aktualisiert)
  → `ServicesPage` + `ServiceDetailPage` eingebunden (echte Pages)
  → `ComingSoon` Placeholder für `AboutPage` + `ContactPage` (Schritt 6)
  → `font-extrabold` statt `font-700` Fix

### Entscheidungen (Schritt 5)
- `whileInView` + `custom` Index für Stagger → kein separater `useInView` Hook nötig
- `<Navigate replace />` bei 404-Slug → kein Eintrag in Browser-History
- Sticky CTA-Karte auf `ServiceDetailPage` → Conversion-Optimierung, immer sichtbar
- Related Services (max. 3) → Cross-Selling ohne Überwältigung
- Tailwind-Klassen direkt in `Button.jsx` → kein CSS-Var Overhead, bessere Lesbarkeit
- `margin: '-80px'` in `viewport` → Animation startet bevor Element vollständig sichtbar

---

## [0.4.0] — 2026-06-18 · Schritt 4: HomePage Sektionen ✅

### Added
- `src/hooks/useCountUp.js`
  → `IntersectionObserver` für Trigger (einmalige Ausführung)
  → `easeOutQuart` Easing-Kurve für natürliche Bewegung
  → `requestAnimationFrame` für 60fps Performance (kein `setInterval`)
  → Konfigurierbare Dauer + Threshold

- `src/data/testimonials.js`
  → 3 Kundenstimmen:
     - Marcus Weber / Indutec (Industriereinigung)
     - Sandra Hoffmann / FitLife (Fitnessstudio-Reinigung)
     - Dr. Thomas Keller / Praxis (Praxisreinigung)
  → Felder: `id`, `name`, `role`, `company`, `initials`, `rating`, `text`, `service`, `avatarColor`

- `src/components/sections/HeroSection.jsx`
  → Fullscreen Hero (`min-h-screen`)
  → Gradient: `#0D1B2A` → `#1B4FD8`
  → H1: „Professionelle Reinigung in Karlsruhe"
  → Slogan + Beschreibung + Referenz-Hinweis
  → CTA 1: „Angebot anfragen" (Gold)
  → CTA 2: „Leistungen entdecken" (Outline)
  → Trust-Bar: 10+ Jahre | 200+ Kunden | Versichert | ⭐ 4.9
  → Framer Motion `fadeInUp` mit Stagger
  → Scroll-Down Indicator (animiert)
  → Dekorative Blur-Kreise (animiert)

- `src/components/sections/ServicesPreview.jsx`
  → 6 Service-Karten aus `services.js`
  → Icon + Titel + Kurzbeschreibung + Link
  → Hover: leichtes Heben (Framer Motion `whileHover`)
  → Staggered Fade-in via `useInView`
  → Responsive Grid: 1 → 2 → 3 Spalten
  → „Alle Dienstleistungen ansehen" Button
  → Hover-Glow Linie oben auf Karte

- `src/components/sections/WhyUs.jsx`
  → 4 USPs: Erfahrung, Zuverlässigkeit, Flexibilität, Faire Preise
  → Referenz-Badges: Indutec · Iwago · Wisag · u.v.m.
  → Zweispaltiges Layout: Text links | USP-Grid rechts
  → CTA „Mehr über uns erfahren"
  → Framer Motion: Links `slideIn` + Rechts staggered

- `src/components/sections/StatsCounter.jsx`
  → 4 animierte Kennzahlen aus `stats.js`
  → `useCountUp` Hook integriert
  → Dunkler Gradient-Hintergrund (`#0D1B2A`)
  → Suffix in Gold (`#C9A84C`)
  → Vertikale Trennlinien zwischen Items (Desktop)
  → Dekoratives Hintergrundmuster + Blur-Akzent

- `src/components/sections/Testimonials.jsx`
  → 3 Testimonial-Karten aus `testimonials.js`
  → Avatar (Initialen + Hintergrundfarbe)
  → `StarRating` Komponente (SVG, Gold)
  → Name, Rolle, Firma, Service-Badge
  → `QuoteIcon` (dekorativ)
  → Gesamt-Bewertungs-Badge (4.9 / 5)
  → Staggered Fade-in via `useInView`

- `src/components/sections/CTASection.jsx`
  → „Bereit für professionelle Sauberkeit?"
  → Gold CTA Button „Jetzt Angebot anfragen"
  → Sekundärer Button „Direkt anrufen" (`tel:` Link)
  → Trust-Note: Kostenlos · 24h Antwort · Karlsruhe
  → Dunkelblauer Kontrasthintergrund + Blur-Dekor
  → Framer Motion staggered Animationen via `useInView`
  → Alle Kommentare auf Englisch

### Entscheidungen (Schritt 4)
- `useInView` (Framer Motion) statt nativem `IntersectionObserver` → sauberer Code, weniger Boilerplate
- `easeOutQuart` für Counter → natürlichere Bewegung als linear
- `requestAnimationFrame` für Counter → 60fps, kein `setInterval` Overhead
- Initialen-Avatar statt Fotos → kein Bild-Overhead, immer verfügbar, DSGVO-sicher
- Trust-Bar im Hero → sofortige Vertrauensbildung above the fold
- Blur-Dekorationen im Hero → Tiefe ohne schwere Assets

---

## [0.3.0] — 2026-05-29 · Schritt 3: Layout (Navbar & Footer) ✅

### Added
- `src/components/layout/Navbar.jsx`
  → Logo: echtes Bild (`_b.png` hell / `_a.png` dunkel) + Divider + Text + Untertitel
  → Automatischer Logo-Swap via `MutationObserver` auf `html.classList` (Theme-Wechsel)
  → Mobile Menü Header: Text-Logo (kein Bild, kein Overhead)
  → Desktop Navigation: Home | Dienstleistungen | Über uns | Kontakt
  → Active Link Highlighting via `NavLink` + `layoutId="nav-underline"`
  → Sticky + `backdrop-blur` beim Scrollen (Scroll-Shadow)
  → `ThemeToggle` integriert
  → Gold CTA Button „Angebot anfragen"
  → Mobile Hamburger-Menü (Framer Motion Slide-in)
  → Body-Scroll-Lock bei geöffnetem Menü
  → Menü schließt automatisch bei Route-Wechsel
  → Alle Kommentare auf Englisch
  → Korrekte Tailwind-Klassen: `font-bold`, `font-extrabold`, `font-medium`

- `src/components/layout/Footer.jsx`
  → Logo: echtes Bild (`_a.png` weiß/gold) + Divider + Text + Untertitel
  → Footer immer dunkel → immer `_a.png` (kein Theme-Swap nötig)
  → Slogan „Mehr als nur sauber"
  → 3 Spalten: Logo+Text | Navigation+Services | Kontakt Karlsruhe
  → Alle 6 Dienstleistungs-Links
  → Kontaktdaten: Adresse, Telefon, E-Mail, Öffnungszeiten
  → Copyright + Jahr (dynamisch via `new Date().getFullYear()`)
  → Legal Links: Impressum · Datenschutz · AGB
  → Referenzen-Badge: Indutec · Iwago · Wisag
  → Framer Motion `whileInView` `fadeInUp` Animationen
  → Alle Kommentare auf Englisch

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
- `src/assets/D&S PROFESSIONALS_a.png` — Logo weiß/gold (Navbar Dark + Footer)
- `src/assets/D&S PROFESSIONALS_b.png` — Logo schwarz/gold (Navbar Light)

### Fixed
- `font-700/800/500/400` greifen nicht → korrigiert zu `font-bold/extrabold/medium/normal`
- Logo-Swap funktionierte nicht beim Theme-Toggle → `MutationObserver` auf `html.classList` implementiert
- Mobile Menü zeigte Logo-Bild → auf Text-Logo umgestellt (kein Bild-Overhead)
- `SyntaxError: useTheme not exported from ThemeContext`
  → Import in `Navbar.jsx` von `@/context/ThemeContext` auf `@/hooks/useTheme` korrigiert

### Entscheidungen (Schritt 3)
- Echte Logo-Bilder statt SVG-Icon → professioneller, Markenidentität
- `MutationObserver` für Logo-Swap → reagiert auf Dark/Light ohne Re-Mount
- `_a.png` fix im Footer → dunkler Hintergrund, kein Theme-Switch nötig
- Logo-Bild + Divider + Text nebeneinander → konsistentes Branding in Navbar & Footer
- `backdrop-blur` in Navbar → moderner Look, Lesbarkeit beim Scrollen
- `AnimatePresence mode="wait"` → saubere Page-Transitions
- `behavior: 'instant'` bei ScrollToTop → kein sichtbares Scrollen bei Route-Wechsel
- Alle Code-Kommentare auf Englisch → Konsistenz, internationale Lesbarkeit

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
- SEO-Daten direkt in `services.js` → alles an einem Ort, kein Overhead