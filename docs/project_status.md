# 📊 D&S Professionals — Projektstatus

**Letzte Aktualisierung:** 22. Mai 2026, 03:40 Uhr
**Entwickler:** Abdourazaki Derman
**AI-Assistent:** Monica (claude-sonnet-4-6)

---

## 🤖 BRIEFING FÜR MONICA (IMMER ZUERST LESEN!)

> Dieses Dokument zu Beginn jedes neuen Chats einfügen.
> Monica liest es und bestätigt, bevor wir weitermachen.

**Projektkontext:**
- React 18 + Vite 5 + Tailwind CSS v4 + Framer Motion
- Vollständiger Rebuild der WordPress-Site ds-professionals.de
- Portfolio-Projekt — Lighthouse 95+ ist Pflicht
- Kein TypeScript — sauberes JavaScript (ES6+)
- Dark Mode via `localStorage` + CSS Custom Properties
- Deployment: Vercel (Portfolio) + Shared Hosting (FTP)

**Arbeitsumgebung:**
- OS: Linux (Ubuntu/Debian) oder Windows mit WSL
- Editor: VS Code
- Node: 20+ LTS
- Projektpfad: `~/projects/ds-professionals/`

---

## 🎯 Projektziel

WordPress-Website von **D&S Professionals** (Reinigungsdienst Karlsruhe)
vollständig in React neu bauen — als hochwertiges Portfolio-Stück.

**Kernziele:**
- Lighthouse Score 95+ in allen Kategorien
- Vollständig responsive (Mobile-first)
- Dark Mode mit sanftem Toggle
- Framer Motion Animationen (dezent, professionell)
- Saubere, kommentierte Komponentenstruktur
- SEO-optimiert mit React Helmet Async

---

## 📋 Fortschritt — 9 Schritte

| Schritt | Inhalt | Status |
|---|---|---|
| **Schritt 1** | Projektstruktur & Setup | ✅ **ERLEDIGT** |
| **Schritt 2** | Design-System & Theme | ✅ **ERLEDIGT** |
| **Schritt 3** | Layout (Navbar, Footer) | ✅ **ERLEDIGT** |
| **Schritt 4** | HomePage Sektionen | ✅ **ERLEDIGT** |
| **Schritt 5** | ServicesPage & ServiceDetail | ⏳ **NEXT** |
| **Schritt 6** | AboutPage & ContactPage | ❌ Offen |
| **Schritt 7** | Animationen & Polish | ❌ Offen |
| **Schritt 8** | SEO & Performance | ❌ Offen |
| **Schritt 9** | Review & Deploy | ❌ Offen |

---

## ✅ Schritt 1 — Projektstruktur & Setup (ERLEDIGT)

**Datum:** 22. Mai 2026

### Erstellt:
- [x] `vite.config.js` — Vite 5 + React Plugin + `@` Alias + Code-Splitting
- [x] `tailwind.config.js` — Custom Colors, Inter Font, Dark Mode, Shadows
- [x] `.eslintrc.cjs` — React 18, Hooks Rules, ES6+ Qualitätsregeln
- [x] `src/styles/globals.css` — Tailwind v4 `@theme` + CSS Custom Properties (Light/Dark)
- [x] `src/data/services.js` — Alle 7 Services vollständig (slug, desc, features, SEO)
- [x] `src/data/stats.js` — 4 Kennzahlen für Counter-Animation
- [x] Vollständige Ordnerstruktur angelegt
- [x] `README.md` — Projektdokumentation
- [x] `docs/` Ordner — projekt_status.md, changelog.md, todo.md

### Wichtige Entscheidungen (Schritt 1):
| Entscheidung | Begründung |
|---|---|
| ✅ Tailwind CSS v4 via `@tailwindcss/vite` Plugin | Kein postcss.config nötig, sauberer |
| ✅ `@theme` statt `tailwind.config` für Farben | Tailwind v4 Best Practice |
| ✅ CSS Custom Properties für Dark/Light | Sanfter Übergang, kein Flash |
| ✅ Code-Splitting (vendor + animations) | Lighthouse Performance |
| ✅ Emoji-Icons statt Icon-Library | Keine externe Dependency, sofort nutzbar |
| ✅ SEO-Daten direkt in services.js | Alles an einem Ort, kein Overhead |

---

## ✅ Schritt 2 — Design-System & Theme (ERLEDIGT)

**Datum:** 22. Mai 2026

### Erstellt:
- [x] `src/context/ThemeContext.jsx` — createContext + ThemeProvider, localStorage Persistenz, System-Preference Detection, Standard: Light Mode
- [x] `src/hooks/useTheme.js` — Custom Hook für ThemeContext, toggleTheme Funktion, Error-Boundary
- [x] `src/components/ui/ThemeToggle.jsx` — Animierter Toggle Button (Framer Motion), Sonne/Mond SVG-Icons (keine Library), Smooth Animation

### Wichtige Entscheidungen (Schritt 2):
| Entscheidung | Begründung |
|---|---|
| ✅ SVG-Icons statt Emoji/Library | Pixelgenau, animierbar, kein Overhead |
| ✅ System-Preference Detection | UX: Respektiert OS-Einstellung beim ersten Besuch |
| ✅ `data-theme` + `dark`-Klasse auf `<html>` | Tailwind v4 Dark Mode kompatibel |
| ✅ `useCallback` für toggleTheme | Verhindert unnötige Re-Renders |

---

## ✅ Schritt 3 — Layout (Navbar, Footer) (ERLEDIGT)

**Datum:** 22. Mai 2026

### Erstellt:
- [x] `src/components/layout/Navbar.jsx` — Sticky mit Scroll-Shadow, Logo (SVG Besen), Desktop-Links, Active Link Highlighting (useLocation), ThemeToggle, Gold CTA, Mobile Hamburger (Framer Motion Slide-in)
- [x] `src/components/layout/Footer.jsx` — 3 Spalten (Logo+Text | Navigation+Services | Kontakt Karlsruhe), Copyright, Impressum, Datenschutz, AGB
- [x] `src/components/layout/Layout.jsx` — Wrapper: Navbar + children + Footer, ScrollToTop bei Route-Wechsel, Page Transitions (Framer Motion Fade)
- [x] `src/main.jsx` — React 18 createRoot, HelmetProvider + ThemeProvider + BrowserRouter Setup (Snippet)
- [x] `src/App.jsx` — Layout-Wrapper mit React Router Routes (Snippet)
- [x] `src/styles/globals.css` — Tailwind v4 Dark Mode Konfiguration (`@custom-variant dark`) (Snippet)

### Wichtige Entscheidungen (Schritt 3):
| Entscheidung | Begründung |
|---|---|
| ✅ Sticky Navbar mit `backdrop-blur` | Moderner Look, Lesbarkeit beim Scrollen |
| ✅ `layoutId="nav-underline"` (Framer Motion) | Smooth Active-Link-Animation |
| ✅ Body-Scroll-Lock bei mobilem Menü | UX: Verhindert Scrollen hinter dem Menü |
| ✅ `AnimatePresence mode="wait"` für Page Transitions | Saubere Ein-/Ausblend-Animation |
| ✅ `flex-col min-h-screen` im Layout | Footer bleibt immer unten (sticky footer) |
| ✅ `behavior: 'instant'` bei ScrollToTop | Kein sichtbares Scrollen bei Route-Wechsel |

---

## ✅ Schritt 4 — HomePage Sektionen (ERLEDIGT)

**Datum:** 22. Mai 2026

### Erstellt:
- [x] `src/hooks/useCountUp.js` — IntersectionObserver Trigger, easeOutQuart Kurve, requestAnimationFrame (60fps), einmalige Ausführung, konfigurierbare Dauer + Threshold
- [x] `src/data/testimonials.js` — 3 Kundenstimmen (Marcus Weber/Indutec, Sandra Hoffmann/FitLife, Dr. Thomas Keller/Praxis), mit Initialen, Rating, Service, Avatar-Farbe
- [x] `src/components/sections/HeroSection.jsx` — Fullscreen, Gradient #0D1B2A→#1B4FD8, H1, Slogan, 2 CTAs (Gold + Outline), Trust-Bar, fadeInUp Stagger, Scroll-Indicator, Blur-Dekorationen
- [x] `src/components/sections/ServicesPreview.jsx` — 6 Service-Karten, Hover-Heben, Stagger via useInView, Responsive Grid 1→2→3, „Alle ansehen" Button
- [x] `src/components/sections/WhyUs.jsx` — 4 USPs, Referenz-Badges (Indutec/Iwago/Wisag), 2-Spalten-Layout, CTA „Mehr über uns"
- [x] `src/components/sections/StatsCounter.jsx` — 4 Kennzahlen aus stats.js, useCountUp integriert, dunkler Gradient-Hintergrund, Gold-Suffix, Trennlinien
- [x] `src/components/sections/Testimonials.jsx` — 3 Karten, Initialen-Avatar, StarRating (SVG), QuoteIcon, Service-Badge, Gesamt-Bewertungs-Badge
- [x] `src/components/sections/CTASection.jsx` — „Bereit für professionelle Sauberkeit?", Gold CTA, dunkler Hintergrund, Framer Motion

### Noch ausstehend (in Schritt 5 erledigen):
- [ ] `src/components/ui/Button.jsx` — Varianten + Größen + `as` Prop + Framer Motion
- [ ] `src/components/ui/SectionWrapper.jsx` — Scroll-Fade Wrapper + Delay-Prop
- [ ] `src/pages/HomePage.jsx` — Alle Sektionen zusammengesetzt + React Helmet SEO

### Wichtige Entscheidungen (Schritt 4):
| Entscheidung | Begründung |
|---|---|
| ✅ `useInView` statt `IntersectionObserver` direkt | Framer Motion API, sauberer Code |
| ✅ `easeOutQuart` für Counter | Natürlichere Bewegung als linear |
| ✅ `requestAnimationFrame` für Counter | 60fps, kein `setInterval` Overhead |
| ✅ Initialen-Avatar statt Bild | Kein Bild-Overhead, immer verfügbar |
| ✅ Trust-Bar im Hero | Sofortige Vertrauensbildung above the fold |
| ✅ Blur-Dekorationen im Hero | Tiefe ohne schwere Assets |

---

## ⏳ Schritt 5 — ServicesPage & ServiceDetail (NEXT)

**Geplante Dateien:**
- [ ] `src/components/ui/Button.jsx` — Varianten: primary | secondary | gold | outline, Größen: sm | md | lg, `as` Prop, Framer Motion
- [ ] `src/components/ui/SectionWrapper.jsx` — Framer Motion whileInView Scroll-Fade, viewport once, Delay-Prop
- [ ] `src/pages/HomePage.jsx` — Alle Sektionen zusammengesetzt, React Helmet SEO
- [ ] `src/pages/ServicesPage.jsx` — Hero, alle 7 Services als Grid, React Helmet SEO
- [ ] `src/pages/ServiceDetailPage.jsx` — Dynamisch via useParams + getServiceBySlug, 404-Handling, Hero + Features + CTA + Breadcrumb, React Helmet dynamisch

---

## 🏗️ Dateistruktur (Zielzustand)

```
ds-professionals/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx          ← ✅ Schritt 3
│   │   │   ├── Navbar.jsx          ← ✅ Schritt 3
│   │   │   └── Footer.jsx          ← ✅ Schritt 3
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx         ← ✅ Schritt 4
│   │   │   ├── ServicesPreview.jsx     ← ✅ Schritt 4
│   │   │   ├── WhyUs.jsx               ← ✅ Schritt 4
│   │   │   ├── StatsCounter.jsx        ← ✅ Schritt 4
│   │   │   ├── Testimonials.jsx        ← ✅ Schritt 4
│   │   │   └── CTASection.jsx          ← ✅ Schritt 4
│   │   └── ui/
│   │       ├── Button.jsx          ← ⏳ Schritt 5
│   │       ├── ServiceCard.jsx     ← ✅ Schritt 4 (inline in ServicesPreview)
│   │       ├── SectionWrapper.jsx  ← ⏳ Schritt 5
│   │       └── ThemeToggle.jsx     ← ✅ Schritt 2
│   ├── pages/
│   │   ├── HomePage.jsx            ← ⏳ Schritt 5
│   │   ├── ServicesPage.jsx        ← ⏳ Schritt 5
│   │   ├── ServiceDetailPage.jsx   ← ⏳ Schritt 5
│   │   ├── AboutPage.jsx           ← ❌ Schritt 6
│   │   └── ContactPage.jsx         ← ❌ Schritt 6
│   ├── hooks/
│   │   ├── useTheme.js             ← ✅ Schritt 2
│   │   ├── useCountUp.js           ← ✅ Schritt 4
│   │   └── useContactForm.js       ← ❌ Schritt 6
│   ├── context/
│   │   └── ThemeContext.jsx        ← ✅ Schritt 2
│   ├── data/
│   │   ├── services.js             ← ✅ Schritt 1
│   │   ├── stats.js                ← ✅ Schritt 1
│   │   └── testimonials.js         ← ✅ Schritt 4
│   └── styles/
│       └── globals.css             ← ✅ Schritt 1
├── docs/
│   ├── projekt_status.md           ← ✅ Schritt 1
│   ├── changelog.md                ← ✅ Schritt 1
│   └── todo.md                     ← ✅ Schritt 1
├── README.md                       ← ✅ Schritt 1
├── vite.config.js                  ← ✅ Schritt 1
├── tailwind.config.js              ← ✅ Schritt 1
└── .eslintrc.cjs                   ← ✅ Schritt 1
```

---

## ⚠️ Wichtige Entscheidungen (nicht mehr diskutieren!)

| Entscheidung | Begründung |
|---|---|
| ❌ Kein TypeScript | Sauberes JS reicht für Portfolio, weniger Overhead |
| ❌ Keine Icon-Library | Emoji-Icons für Services, SVG inline, Lucide nur wenn nötig |
| ❌ Kein Redux/Zustand | ThemeContext reicht, kein globaler State nötig |
| ✅ Tailwind CSS v4 | Aktuellste Version, `@theme` Direktive |
| ✅ Framer Motion | Dezente Scroll-Animationen, kein Overkill |
| ✅ React Hook Form | Leichtgewichtig, kein Overhead |
| ✅ EmailJS | Kein Backend nötig für Kontaktformular |
| ✅ React Helmet Async | SEO pro Seite, Lighthouse-konform |
| ✅ Dark Mode via CSS Custom Props | Kein Flash, sanfter Übergang |
| ✅ Code-Splitting (vendor + animations) | Framer Motion ist groß → eigener Chunk |
| ✅ Mobile-first Tailwind | Bessere Performance, sauberer Code |
| ✅ SVG-Icons inline (kein Icon-Paket) | Keine externe Dependency, animierbar |
| ✅ `backdrop-blur` in Navbar | Moderner Look, Lesbarkeit beim Scrollen |
| ✅ Body-Scroll-Lock bei mobilem Menü | UX: Verhindert Scrollen hinter dem Menü |
| ✅ `useInView` (Framer Motion) statt nativem Observer | Sauberer Code, weniger Boilerplate |
| ✅ `easeOutQuart` für Counter-Animation | Natürlichere Bewegung als linear/easeOut |
| ✅ Initialen-Avatar statt Fotos | Kein Bild-Overhead, immer verfügbar, DSGVO-sicher |

---

## 🛠️ Tech-Stack (vollständig)

| Komponente | Tool | Version | Status |
|---|---|---|---|
| Framework | React | 18 | ✅ |
| Build | Vite | 5 | ✅ |
| Styling | Tailwind CSS | 4 | ✅ |
| Animationen | Framer Motion | latest | ✅ |
| Routing | React Router | 6 | ✅ |
| Formulare | React Hook Form | latest | ✅ |
| E-Mail | EmailJS | latest | ✅ |
| SEO | React Helmet Async | latest | ✅ |
| Linting | ESLint | latest | ✅ |
| Deployment | Vercel + FTP | — | ⏳ |