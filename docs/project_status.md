# 📊 D&S Professionals — Projektstatus

**Letzte Aktualisierung:** 30. Mai 2026, 01:17 Uhr
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
- Projektpfad: `~/Documents/Projects/ds-professionals/`

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
| **Schritt 4** | HomePage Sektionen | ⏳ **NEXT** |
| **Schritt 5** | ServicesPage & ServiceDetail | ❌ Offen |
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

**Datum:** 29. Mai 2026

### Erstellt:
- [x] `src/components/layout/Navbar.jsx`
  - Sticky mit Scroll-Shadow
  - **Echtes Logo-Bild** (`_a.png` Light / `_b.png` Dark) + Firmenname + Subtitle
  - Desktop-Links mit Active-Link-Highlighting
  - `useTheme` korrekt aus `@/hooks/useTheme` importiert
  - ThemeToggle + Gold CTA Button
  - Mobile Hamburger-Menü
- [x] `src/components/layout/Footer.jsx`
  - 3 Spalten: Logo+Text | Navigation+Services | Kontakt Karlsruhe
  - **Echtes Logo-Bild** (`_b.png`, fix dunkel) statt SVG-Platzhalter
  - Copyright, Impressum, Datenschutz, AGB
  - Framer Motion `fadeInUp` Animationen
- [x] `src/components/layout/Layout.jsx` — Wrapper: Navbar + Outlet + Footer, ScrollToTop, Page Transitions
- [x] `src/main.jsx` — React 18 createRoot, HelmetProvider + ThemeProvider + BrowserRouter
- [x] `src/App.jsx` — Layout-Wrapper mit React Router Routes

### Assets:
| Datei | Verwendung |
|---|---|
| `src/assets/D&S PROFESSIONALS_a.png` | Logo Light Mode (500×500px) |
| `src/assets/D&S PROFESSIONALS_b.png` | Logo Dark Mode + Footer (500×500px) |

### Behobene Fehler (Schritt 3):
| Fehler | Fix |
|---|---|
| `SyntaxError: useTheme not exported from ThemeContext` | Import auf `@/hooks/useTheme` korrigiert |
| `lucide-react` nicht installiert | `npm install lucide-react` ausgeführt |
| Logo zu klein / SVG-Platzhalter im Footer | Echtes Logo-Bild eingebunden, Größe `h-9 w-9` (Navbar) / `h-12 w-12` (Footer) |

### Wichtige Entscheidungen (Schritt 3):
| Entscheidung | Begründung |
|---|---|
| ✅ Logo-Bild + Firmenname nebeneinander | Quadratisches 500×500 PNG braucht Text-Ergänzung |
| ✅ `_b.png` fix im Footer | Footer hat immer dunklen Hintergrund → kein Theme-Switch nötig |
| ✅ `_a.png` / `_b.png` in Navbar per Theme | Automatischer Wechsel via `useTheme` |
| ✅ Sticky Navbar mit `backdrop-blur` | Moderner Look, Lesbarkeit beim Scrollen |
| ✅ `AnimatePresence mode="wait"` für Page Transitions | Saubere Ein-/Ausblend-Animation |
| ✅ `flex-col min-h-screen` im Layout | Footer bleibt immer unten (sticky footer) |
| ✅ `behavior: 'instant'` bei ScrollToTop | Kein sichtbares Scrollen bei Route-Wechsel |

---

## ⏳ Schritt 4 — HomePage Sektionen (NEXT)

**Geplante Dateien:**
- [ ] `src/components/sections/HeroSection.jsx` — Headline, Subtext, CTA Buttons, Scroll-Indicator
- [ ] `src/components/sections/ServicesPreview.jsx` — 7 Services als Cards (Vorschau)
- [ ] `src/components/sections/WhyUsSection.jsx` — USPs: Maßgeschneidert, Zuverlässig, Flexibel, Faire Preise
- [ ] `src/components/sections/StatsSection.jsx` — 4 Kennzahlen mit Counter-Animation
- [ ] `src/components/sections/TestimonialsSection.jsx` — Kundenstimmen
- [ ] `src/components/sections/CtaSection.jsx` — Abschluss-CTA mit Gold Button
- [ ] `src/components/ui/ServiceCard.jsx` — Wiederverwendbare Service-Karte
- [ ] `src/components/ui/SectionWrapper.jsx` — Framer Motion Scroll-Fade Wrapper
- [ ] `src/hooks/useCountUp.js` — Counter-Animation Hook
- [ ] `src/data/testimonials.js` — Kundenstimmen Daten
- [ ] `src/pages/HomePage.jsx` — Zusammenführung aller Sektionen

---

## 🏗️ Dateistruktur (Zielzustand)

```
ds-professionals/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── D&S PROFESSIONALS_a.png   ← ✅ Logo Light (500×500)
│   │   └── D&S PROFESSIONALS_b.png   ← ✅ Logo Dark  (500×500)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx          ← ✅ Schritt 3
│   │   │   ├── Navbar.jsx          ← ✅ Schritt 3
│   │   │   └── Footer.jsx          ← ✅ Schritt 3
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx         ← ⏳ Schritt 4
│   │   │   ├── ServicesPreview.jsx     ← ⏳ Schritt 4
│   │   │   ├── WhyUsSection.jsx        ← ⏳ Schritt 4
│   │   │   ├── StatsSection.jsx        ← ⏳ Schritt 4
│   │   │   ├── TestimonialsSection.jsx ← ⏳ Schritt 4
│   │   │   └── CtaSection.jsx          ← ⏳ Schritt 4
│   │   └── ui/
│   │       ├── Button.jsx          ← ⏳ Schritt 4
│   │       ├── ServiceCard.jsx     ← ⏳ Schritt 4
│   │       ├── SectionWrapper.jsx  ← ⏳ Schritt 4
│   │       └── ThemeToggle.jsx     ← ✅ Schritt 2
│   ├── pages/
│   │   ├── HomePage.jsx            ← ⏳ Schritt 4
│   │   ├── ServicesPage.jsx        ← ❌ Schritt 5
│   │   ├── ServiceDetailPage.jsx   ← ❌ Schritt 5
│   │   ├── AboutPage.jsx           ← ❌ Schritt 6
│   │   └── ContactPage.jsx         ← ❌ Schritt 6
│   ├── hooks/
│   │   ├── useTheme.js             ← ✅ Schritt 2
│   │   ├── useCountUp.js           ← ⏳ Schritt 4
│   │   └── useContactForm.js       ← ❌ Schritt 6
│   ├── context/
│   │   └── ThemeContext.jsx        ← ✅ Schritt 2
│   ├── data/
│   │   ├── services.js             ← ✅ Schritt 1
│   │   ├── stats.js                ← ✅ Schritt 1
│   │   └── testimonials.js         ← ⏳ Schritt 4
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
| ✅ `lucide-react` installiert | Für Navbar-Icons (Menu, X) — minimaler Einsatz |
| ✅ Logo als PNG-Bild (500×500) | Echtes Branding statt SVG-Platzhalter |
| ✅ `useTheme` aus `@/hooks/useTheme` | Hook liegt in hooks/, nicht in ThemeContext |

---

## 🛠️ Tech-Stack (vollständig)

| Komponente | Tool | Version | Status |
|---|---|---|---|
| Framework | React | 18 | ✅ |
| Build | Vite | 5 | ✅ |
| Styling | Tailwind CSS | 4 | ✅ |
| Animationen | Framer Motion | latest | ✅ |
| Routing | React Router | 6 | ✅ |
| Icons | lucide-react | 0.x | ✅ |
| Formulare | React Hook Form | latest | ⏳ |
| E-Mail | EmailJS | latest | ⏳ |
| SEO | React Helmet Async | latest | ✅ |
| Linting | ESLint | latest | ✅ |
| Deployment | Vercel + FTP | — | ⏳ |