# 📊 D&S Professionals — Projektstatus

**Letzte Aktualisierung:** 22. Juni 2026, 02:37 Uhr
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
| **Schritt 5** | ServicesPage & ServiceDetail | ✅ **ERLEDIGT** |
| **Schritt 6** | AboutPage & ContactPage | ✅ **ERLEDIGT** |
| **Schritt 7** | Animationen & Polish | ✅ **ERLEDIGT** |
| **Schritt 8** | SEO & Performance | ✅ **ERLEDIGT** |
| **Schritt 9** | Review & Deploy | ⏳ **NEXT** |

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

**Datum:** 18. Juni 2026

### Erstellt:
- [x] `src/components/layout/Navbar.jsx` ✅
- [x] `src/components/layout/Footer.jsx` ✅
- [x] `src/components/layout/Layout.jsx` ✅
- [x] `src/main.jsx` ✅
- [x] `src/App.jsx` ✅
- [x] `src/styles/globals.css` ✅

### Wichtige Entscheidungen (Schritt 3):
| Entscheidung | Begründung |
|---|---|
| ✅ Echte Logo-Bilder statt SVG-Icon | Professioneller, Markenidentität |
| ✅ `MutationObserver` für Theme-Swap | Reagiert auf Dark/Light ohne Re-Mount |
| ✅ `_a.png` (weiß/gold) immer im Footer | Footer ist immer dunkel, kein Swap nötig |
| ✅ Sticky Navbar mit `backdrop-blur` | Moderner Look, Lesbarkeit beim Scrollen |
| ✅ `layoutId="nav-underline"` (Framer Motion) | Smooth Active-Link-Animation |
| ✅ Body-Scroll-Lock bei mobilem Menü | UX: Verhindert Scrollen hinter dem Menü |

---

## ✅ Schritt 4 — HomePage Sektionen (ERLEDIGT)

**Datum:** 18. Juni 2026

### Erstellt:
- [x] `src/hooks/useCountUp.js`
- [x] `src/data/testimonials.js`
- [x] `src/components/sections/HeroSection.jsx`
- [x] `src/components/sections/ServicesPreview.jsx`
- [x] `src/components/sections/WhyUsSection.jsx`
- [x] `src/components/sections/StatsSection.jsx`
- [x] `src/components/sections/TestimonialsSection.jsx`
- [x] `src/components/sections/CtaSection.jsx`

---

## ✅ Schritt 5 — UI Components & Pages (ERLEDIGT)

**Datum:** 18. Juni 2026

### Erstellt:
- [x] `src/components/ui/Button.jsx`
- [x] `src/components/ui/SectionWrapper.jsx`
- [x] `src/pages/HomePage.jsx`
- [x] `src/pages/ServicesPage.jsx`
- [x] `src/pages/ServiceDetailPage.jsx`

---

## ✅ Schritt 6 — AboutPage & ContactPage (ERLEDIGT)

**Datum:** 18. Juni 2026

### Erstellt:
- [x] `src/pages/AboutPage.jsx`
- [x] `src/pages/ContactPage.jsx`
- [x] `src/hooks/useContactForm.js`
- [x] Legal Pages (Impressum, Datenschutz, AGB, 404)
- [x] `.env` mit EmailJS-Credentials
- [x] EmailJS HTML-Template

---

## ✅ Schritt 7 — Animationen & Polish (ERLEDIGT)

**Datum:** 22. Juni 2026

### Erledigt:
- [x] Alle Sektionen mit `SectionWrapper` gewrappt
- [x] Stagger-Animationen für Listen (ServiceCards, Features)
- [x] Zahlen-Counter Animation verfeinert
- [x] Navbar Scroll-Effekt (Blur + Shadow)
- [x] Hover-States für alle interaktiven Elemente
- [x] Mobile Menu Animation (Slide-in)

---

## ✅ Schritt 8 — SEO & Performance (ERLEDIGT)

**Datum:** 22. Juni 2026

### Erledigt:
- [x] React Helmet Async auf allen Seiten (title, meta, OG Tags, canonical)
- [x] `public/robots.txt` angelegt
- [x] `public/sitemap.xml` erstellt
- [x] `public/manifest.json` erstellt
- [x] `public/_redirects` für SPA-Routing
- [x] `public/.htaccess` für Shared Hosting
- [x] Dark-Mode-Flash-Prevention im `<head>`
- [x] `og-image.png` + Favicons im `public/`-Verzeichnis
- [x] Logo-Bild verkleinert: 1000×1000px → 320×320px (159 KiB → 25 KiB)
- [x] `width`/`height` Attribute auf `<img>` Tags (CLS-Prävention)
- [x] `fetchpriority="high"` auf Navbar-Logo (LCP-Optimierung)
- [x] `loading="lazy"` auf Footer-Logo
- [x] Google Fonts Non-Blocking via `media="print"` + `onload`
- [x] Lighthouse Audit durchgeführt ✅

### 🏆 Finale Lighthouse Scores:
| Kategorie | Score |
|---|---|
| 🟢 Performance | **94 / 100** |
| 🟢 Accessibility | **97 / 100** |
| 🟢 Best Practices | **100 / 100** |
| 🟢 SEO | **100 / 100** |

### Core Web Vitals (Desktop):
| Metrik | Wert | Status |
|---|---|---|
| FCP | 1.1s | 🟢 |
| LCP | 1.2s | 🟢 |
| TBT | 0ms | 🟢 |
| CLS | 0.001 | 🟢 |
| Speed Index | 1.4s | 🟢 |

---

## ⏳ Schritt 9 — Review & Deploy (NEXT)

- [ ] Vollständiger Code-Review
      → Alle Komponenten kommentiert?
      → Keine `console.log` im Produktionscode?
      → ESLint 0 Errors?
      → PropTypes vollständig?

- [ ] Cross-Browser Test
      → Chrome, Firefox, Safari, Edge
      → Mobile: iOS Safari, Android Chrome

- [ ] Responsive Test
      → 320px · 768px · 1024px · 1440px · 1920px

- [ ] Dark Mode Test
      → Alle Seiten in Light + Dark
      → Kein weißer Flash beim Laden
      → localStorage Persistenz funktioniert

- [ ] Lighthouse Final Audit (Live-URL)
      → Performance ≥ 95
      → Accessibility ≥ 95
      → SEO = 100
      → Best Practices = 100

- [ ] Vercel Deployment
      → GitHub Repo verbinden
      → Environment Variables setzen (EmailJS Keys)
      → Custom Domain (optional)

- [ ] Shared Hosting Deployment
      → `npm run build`
      → `dist/` via FTP hochladen
      → `.htaccess` bereits vorhanden ✅

---

## 🏗️ Dateistruktur (aktueller Stand)

```
ds-professionals/
├── public/
│   ├── favicon.svg                     ← ✅ Schritt 8
│   ├── og-image.png                    ← ✅ Schritt 8
│   ├── robots.txt                      ← ✅ Schritt 8
│   ├── sitemap.xml                     ← ✅ Schritt 8
│   ├── manifest.json                   ← ✅ Schritt 8
│   ├── _redirects                      ← ✅ Schritt 8
│   └── .htaccess                       ← ✅ Schritt 8
├── src/
│   ├── assets/
│   │   ├── D&S PROFESSIONALS_a.png     ← weiß/gold (Navbar Dark + Footer) ✅
│   │   └── D&S PROFESSIONALS_b.png     ← schwarz/gold (Navbar Light)      ✅
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx              ← ✅ Schritt 3
│   │   │   ├── Navbar.jsx              ← ✅ Schritt 3 + 8
│   │   │   └── Footer.jsx              ← ✅ Schritt 3 + 8
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx         ← ✅ Schritt 4
│   │   │   ├── ServicesPreview.jsx     ← ✅ Schritt 4
│   │   │   ├── WhyUsSection.jsx        ← ✅ Schritt 4
│   │   │   ├── StatsSection.jsx        ← ✅ Schritt 4
│   │   │   ├── TestimonialsSection.jsx ← ✅ Schritt 4
│   │   │   └── CtaSection.jsx          ← ✅ Schritt 4
│   │   └── ui/
│   │       ├── Button.jsx              ← ✅ Schritt 5
│   │       ├── ServiceCard.jsx         ← ✅ Schritt 5
│   │       ├── SectionWrapper.jsx      ← ✅ Schritt 5
│   │       └── ThemeToggle.jsx         ← ✅ Schritt 2
│   ├── components/utils/               ← ✅ Schritt 6
│   ├── pages/
│   │   ├── HomePage.jsx                ← ✅ Schritt 5
│   │   ├── ServicesPage.jsx            ← ✅ Schritt 5
│   │   ├── ServiceDetailPage.jsx       ← ✅ Schritt 5
│   │   ├── AboutPage.jsx               ← ✅ Schritt 6
│   │   ├── ContactPage.jsx             ← ✅ Schritt 6
│   │   ├── ImpressumPage.jsx           ← ✅ Schritt 6
│   │   ├── DatenschutzPage.jsx         ← ✅ Schritt 6
│   │   ├── AGBPage.jsx                 ← ✅ Schritt 6
│   │   └── NotFoundPage.jsx            ← ✅ Schritt 6
│   ├── hooks/
│   │   ├── useTheme.js                 ← ✅ Schritt 2
│   │   ├── useCountUp.js               ← ✅ Schritt 4
│   │   └── useContactForm.js           ← ✅ Schritt 6
│   ├── context/
│   │   └── ThemeContext.jsx            ← ✅ Schritt 2
│   ├── data/
│   │   ├── services.js                 ← ✅ Schritt 1
│   │   ├── stats.js                    ← ✅ Schritt 1
│   │   └── testimonials.js             ← ✅ Schritt 4
│   └── styles/
│       └── globals.css                 ← ✅ Schritt 1
├── docs/
│   ├── projekt_status.md
│   ├── changelog.md
│   ├── todo.md
│   └── projektstruktur.md
├── .env                                ← ✅ (in .gitignore)
├── README.md
├── vite.config.js
├── tailwind.config.js
├── .eslintrc.cjs
├── index.html
├── .gitignore
└── package.json
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
| ✅ Echte Logo-Bilder (`_a.png` / `_b.png`) | Professioneller, Markenidentität |
| ✅ `MutationObserver` für Logo-Swap in Navbar | Reagiert auf Dark/Light ohne Re-Mount |
| ✅ `font-bold/extrabold/medium/normal` | Korrekte Tailwind v4 Klassen |
| ✅ Alle Code-Kommentare auf Englisch | Konsistenz, internationale Lesbarkeit |
| ✅ `<Navigate replace />` bei 404-Slug | Kein Eintrag in Browser-History |
| ✅ Sticky CTA-Karte auf ServiceDetailPage | Conversion-Optimierung, immer sichtbar |
| ✅ `.env` für EmailJS-Keys | Sicherheit: Keys nicht im Git-Repository |
| ✅ `VITE_` Prefix für env-Variablen | Vite-Konvention für Client-seitige Variablen |
| ✅ HTML-E-Mail-Template mit Inline-CSS | E-Mail-Clients unterstützen kein externes CSS |
| ✅ Google Maps Embed statt Leaflet | Keine extra Dependency, einfacher |
| ✅ `noValidate` auf `<form>` | Browser-Validierung deaktiviert → React Hook Form übernimmt |
| ✅ Logo auf 320×320px verkleinert | War 1000×1000px → 159 KiB → jetzt 25 KiB |
| ✅ `width`/`height` auf `<img>` Tags | CLS-Prävention (war 0.623 → jetzt 0.001) |
| ✅ `fetchpriority="high"` auf Navbar-Logo | LCP-Optimierung |
| ✅ `loading="lazy"` auf Footer-Logo | Performance: Bild erst bei Bedarf laden |
| ✅ Google Fonts Non-Blocking | Render-Blocking eliminiert |
| ✅ `.htaccess` für Shared Hosting | SPA-Routing + Gzip + Caching |

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

---

## 🐛 Bekannte Fixes & Lessons Learned

| Problem | Ursache | Fix |
|---|---|---|
| `font-700/800/500/400` greifen nicht | Keine Standard-Tailwind-Klassen | `font-bold/extrabold/medium/normal` |
| CTASection Parse-Error (EOF) | Datei war abgeschnitten beim Speichern | Vollständige Datei neu schreiben |
| Logo unsichtbar auf transparentem Hintergrund | SVG-Icon ohne Kontrast | Echte PNG-Logos verwenden |
| Logo wechselt nicht beim Theme-Toggle | Kein Listener auf `html.dark` | `MutationObserver` auf `classList` |
| `SyntaxError: useTheme not exported` | Falscher Import-Pfad | `@/context/ThemeContext` → `@/hooks/useTheme` |
| React Router Warnings in Konsole | Fehlende `future` Flags | `v7_startTransition` + `v7_relativeSplatPath` in `main.jsx` |
| Tailwind-Klassen greifen nicht | Plugin-Reihenfolge in `vite.config.js` | `@tailwindcss/vite` vor `react()` |
| EmailJS 400-Fehler | Falsche/fehlende Credentials | `error.text` loggen → Keys prüfen |
| HMR-Verbindung bricht ab | WebSocket-Konfiguration fehlt | `server.hmr` in `vite.config.js` |
| CLS = 0.623 (kritisch) | Footer-Logo ohne `width`/`height` | Dimensionen + `loading="lazy"` hinzugefügt |
| Logo-Bild 159 KiB zu groß | 1000×1000px für 44px Anzeige | Mit ImageMagick auf 320×320px skaliert |
| Performance Score 72 | CLS + großes Logo | CLS-Fix + Bildoptimierung → Score 94 |