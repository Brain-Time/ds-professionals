# 📊 D&S Professionals — Projektstatus

**Letzte Aktualisierung:** 18. Juni 2026, 02:42 Uhr
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
| **Schritt 6** | AboutPage & ContactPage | ⏳ **NEXT** |
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

**Datum:** 18. Juni 2026

### Erstellt:
- [x] `src/components/layout/Navbar.jsx` ✅
      → Logo: echtes Bild (`_b.png` hell / `_a.png` dunkel) + Divider + Text + Untertitel
      → Automatischer Logo-Swap via `MutationObserver` (Theme-Wechsel)
      → Desktop Navigation Links (Home | Dienstleistungen | Über uns | Kontakt)
      → `ThemeToggle` integriert
      → Mobile Hamburger Menu (Framer Motion Slide-in)
      → Mobile Menü Header: Text-Logo (kein Bild)
      → Active Link Highlighting via `useLocation` + `layoutId`
      → Sticky + `backdrop-blur` beim Scrollen
      → CTA Button "Angebot anfragen" (Gold)
      → Body-Scroll-Lock bei geöffnetem Menü
      → Menü schließt bei Route-Wechsel
      → Alle Kommentare auf Englisch

- [x] `src/components/layout/Footer.jsx` ✅
      → Logo: echtes Bild (`_a.png` weiß/gold) + Divider + Text + Untertitel
      → Footer immer dunkel → immer `_a.png` (kein Theme-Swap nötig)
      → Slogan „Mehr als nur sauber"
      → 3 Spalten: Logo+Text | Navigation+Services | Kontakt
      → Services Links (alle 7 Dienstleistungen)
      → Kontaktdaten (Adresse, Tel, E-Mail, Öffnungszeiten)
      → Copyright + Jahr (dynamisch)
      → Legal Links: Impressum · Datenschutz · AGB
      → Referenzen-Badge (Indutec · Iwago · Wisag)
      → Framer Motion `whileInView` Fade-in
      → Alle Kommentare auf Englisch

- [x] `src/components/layout/Layout.jsx` ✅
      → `<Navbar />` + `<main>` + `<Footer />`
      → `ScrollToTop` Komponente (bei Route-Wechsel)
      → Page Transitions (Framer Motion Fade + Y-Offset)
      → `min-h-screen flex-col` Layout (sticky Footer)
      → `pt-16 lg:pt-20` für Navbar-Kompensation

- [x] `src/main.jsx` ✅
      → React 18 `createRoot`
      → `HelmetProvider` + `ThemeProvider` + `BrowserRouter`

- [x] `src/App.jsx` ✅
      → `Layout`-Wrapper mit React Router `<Routes>`
      → Echte Pages eingebunden (Schritt 5 aktualisiert)

- [x] `src/styles/globals.css` ✅
      → Tailwind v4 Dark Mode: `@custom-variant dark`

### Wichtige Entscheidungen (Schritt 3):
| Entscheidung | Begründung |
|---|---|
| ✅ Echte Logo-Bilder statt SVG-Icon | Professioneller, Markenidentität |
| ✅ `MutationObserver` für Theme-Swap | Reagiert auf Dark/Light ohne Re-Mount |
| ✅ `_a.png` (weiß/gold) immer im Footer | Footer ist immer dunkel, kein Swap nötig |
| ✅ Logo-Bild + Divider + Text nebeneinander | Konsistentes Branding in Navbar & Footer |
| ✅ Mobile Menü: nur Text-Logo (kein Bild) | Sauberer, kein Bild-Overhead im Menü |
| ✅ Sticky Navbar mit `backdrop-blur` | Moderner Look, Lesbarkeit beim Scrollen |
| ✅ `layoutId="nav-underline"` (Framer Motion) | Smooth Active-Link-Animation |
| ✅ Body-Scroll-Lock bei mobilem Menü | UX: Verhindert Scrollen hinter dem Menü |
| ✅ `AnimatePresence mode="wait"` für Page Transitions | Saubere Ein-/Ausblend-Animation |
| ✅ `flex-col min-h-screen` im Layout | Footer bleibt immer unten (sticky footer) |

---

## ✅ Schritt 4 — HomePage Sektionen (ERLEDIGT)

**Datum:** 18. Juni 2026

### Erstellt:
- [x] `src/hooks/useCountUp.js` — IntersectionObserver Trigger, easeOutQuart Kurve, requestAnimationFrame (60fps), einmalige Ausführung, konfigurierbare Dauer + Threshold
- [x] `src/data/testimonials.js` — 3 Kundenstimmen (Marcus Weber/Indutec, Sandra Hoffmann/FitLife, Dr. Thomas Keller/Praxis), mit Initialen, Rating, Service, Avatar-Farbe
- [x] `src/components/sections/HeroSection.jsx` — Fullscreen, Gradient #0D1B2A→#1B4FD8, H1, Slogan, 2 CTAs (Gold + Outline), Trust-Bar, fadeInUp Stagger, Scroll-Indicator, Blur-Dekorationen
- [x] `src/components/sections/ServicesPreview.jsx` — 6 Service-Karten, Hover-Heben, Stagger via useInView, Responsive Grid 1→2→3, „Alle ansehen" Button
- [x] `src/components/sections/WhyUsSection.jsx` — 4 USPs, Referenz-Badges (Indutec/Iwago/Wisag), 2-Spalten-Layout, CTA „Mehr über uns"
- [x] `src/components/sections/StatsSection.jsx` — 4 Kennzahlen aus stats.js, useCountUp integriert, dunkler Gradient-Hintergrund, Gold-Suffix, Trennlinien
- [x] `src/components/sections/TestimonialsSection.jsx` — 3 Karten, Initialen-Avatar, StarRating (SVG), QuoteIcon, Service-Badge, Gesamt-Bewertungs-Badge
- [x] `src/components/sections/CtaSection.jsx` ✅
      → „Bereit für professionelle Sauberkeit?"
      → Gold CTA Button „Jetzt Angebot anfragen"
      → Sekundärer Button „Direkt anrufen" (tel: Link)
      → Trust-Note: Kostenlos · 24h Antwort · Karlsruhe
      → Dunkelblauer Kontrasthintergrund + Blur-Dekor
      → Framer Motion staggered Animationen via `useInView`
      → Alle Kommentare auf Englisch

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

## ✅ Schritt 5 — UI Components & Pages (ERLEDIGT)

**Datum:** 18. Juni 2026

### Erstellt:
- [x] `src/components/ui/Button.jsx` ✅
      → Varianten: `gold` | `primary` | `outline` | `ghost`
      → Größen: `sm` | `md` | `lg`
      → `as` Prop (render als `<button>` oder `<Link>`)
      → Loading Spinner (SVG, `animate-spin`)
      → `disabled` + `aria-disabled` Support
      → Tailwind-Klassen direkt (kein CSS-Var Overhead)
      → Alle Kommentare auf Englisch

- [x] `src/components/ui/SectionWrapper.jsx` ✅
      → Framer Motion `whileInView` Scroll-Fade + Y-Offset
      → `viewport={{ once: true, margin: '-80px' }}`
      → Konfigurierbare Props: `delay` | `duration` | `yOffset`
      → Wiederverwendbar für alle Sektionen

- [x] `src/pages/HomePage.jsx` ✅
      → Alle 6 Sektionen zusammengesetzt
      → React Helmet: `<title>` + `meta description` + OG Tags + `robots`

- [x] `src/pages/ServicesPage.jsx` ✅
      → Hero mit Breadcrumb + Titel + Untertitel
      → Alle 7 Services als Grid (1 → 2 → 3 Spalten)
      → `ServiceCard`: Accent-Bar + Icon + Titel + `shortDesc` + 3 Features + Link
      → Staggered Fade-in via `whileInView` + `custom` Index
      → CTA Strip: „Nicht das Richtige gefunden?" + 2 Buttons (Gold + Outline)
      → React Helmet SEO

- [x] `src/pages/ServiceDetailPage.jsx` ✅
      → Dynamisch via `useParams()` + `getServiceBySlug()`
      → 404-Handling: `<Navigate to="/dienstleistungen" replace />`
      → Hero: Icon-Badge + Breadcrumb + Titel + `shortDesc`
      → Beschreibung (`longDesc`) + vollständige Features-Checkliste (animiert)
      → Sticky CTA-Karte (rechts): Trust-Points + 2 Buttons
      → Related Services: 3 weitere Services (ohne aktuellen)
      → React Helmet: dynamische SEO-Tags pro Service (`metaTitle`, `metaDesc`)

- [x] `src/App.jsx` ✅ (aktualisiert)
      → `ServicesPage` + `ServiceDetailPage` eingebunden
      → `ComingSoon` Placeholder für `AboutPage` + `ContactPage`
      → `font-extrabold` statt `font-700` Fix

### Wichtige Entscheidungen (Schritt 5):
| Entscheidung | Begründung |
|---|---|
| ✅ `whileInView` + `custom` Index für Stagger | Kein separater `useInView` Hook nötig |
| ✅ `<Navigate replace />` bei 404-Slug | Kein Eintrag in Browser-History |
| ✅ Sticky CTA-Karte auf `ServiceDetailPage` | Conversion-Optimierung, immer sichtbar |
| ✅ Related Services (max. 3) | Cross-Selling ohne Überwältigung |
| ✅ Tailwind-Klassen direkt in `Button.jsx` | Kein CSS-Var Overhead, bessere Lesbarkeit |
| ✅ `margin: '-80px'` in `viewport` | Animation startet bevor Element vollständig sichtbar |

---

## ⏳ Schritt 6 — AboutPage & ContactPage (NEXT)

### Geplante Dateien:
- [ ] `src/pages/AboutPage.jsx`
      → Unternehmensgeschichte
      → Referenzen (Indutec, Iwago, Wisag)
      → Werte & Versprechen
      → Team-Bereich (optional)

- [ ] `src/pages/ContactPage.jsx`
      → Kontaktformular (React Hook Form)
      → Validierung (required, email format)
      → EmailJS Integration
      → Erfolgs-/Fehlermeldung
      → Karte (Google Maps Embed oder Leaflet)
      → Öffnungszeiten
      → Adresse + Telefon + E-Mail

- [ ] `src/hooks/useContactForm.js`
      → React Hook Form Logik
      → EmailJS `send()` Aufruf
      → Loading / Success / Error States

---

## ⚪ Schritt 7 — Animationen & Polish

- [ ] Alle Sektionen mit `SectionWrapper` wrappen
- [ ] Stagger-Animationen für Listen (ServiceCards, Features)
- [ ] Zahlen-Counter Animation verfeinern
- [ ] Navbar Scroll-Effekt (Blur + Shadow)
- [ ] Page Transitions (optional)
- [ ] Hover-States für alle interaktiven Elemente
- [ ] Loading States (Skeleton oder Spinner)
- [ ] Mobile Menu Animation (Slide-in)

---

## 🔶 Schritt 8 — SEO & Performance

- [ ] React Helmet Async auf allen Seiten
      → Unique `<title>` pro Seite
      → Meta Description
      → Open Graph Tags
      → Canonical URL

- [ ] `public/robots.txt` anlegen
- [ ] Sitemap generieren (vite-plugin-sitemap oder manuell)
- [ ] Bilder optimieren (WebP, lazy loading)
- [ ] `loading="lazy"` auf allen `<img>` Tags
- [ ] Lighthouse Audit durchführen → Fixes
- [ ] Core Web Vitals prüfen (LCP, FID, CLS)
- [ ] Bundle-Größe analysieren (`npm run build` → Ausgabe prüfen)

---

## 🏁 Schritt 9 — Review & Deploy

- [ ] Vollständiger Code-Review
      → Alle Komponenten kommentiert?
      → Keine `console.log` im Produktionscode?
      → ESLint 0 Errors?
      → PropTypes vollständig?

- [ ] Cross-Browser Test
      → Chrome, Firefox, Safari, Edge
      → Mobile: iOS Safari, Android Chrome

- [ ] Responsive Test
      → 320px (kleinstes Handy)
      → 768px (Tablet)
      → 1024px (Laptop)
      → 1440px (Desktop)
      → 1920px (Wide)

- [ ] Dark Mode Test
      → Alle Seiten in Light + Dark
      → Kein weißer Flash beim Laden
      → localStorage Persistenz funktioniert

- [ ] Lighthouse Final Audit
      → Performance ≥ 95 ✅
      → Accessibility ≥ 95 ✅
      → SEO = 100 ✅
      → Best Practices = 100 ✅

- [ ] Vercel Deployment
      → GitHub Repo erstellen
      → Vercel mit GitHub verbinden
      → Environment Variables setzen (EmailJS Keys)
      → Custom Domain (optional)

- [ ] Shared Hosting Deployment
      → `npm run build`
      → `dist/` via FTP hochladen
      → `.htaccess` für React Router (SPA Fallback)

---

## 🏗️ Dateistruktur (aktueller Stand)

```
ds-professionals/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── D&S PROFESSIONALS_a.png   ← weiß/gold (Navbar Dark + Footer)  ✅
│   │   └── D&S PROFESSIONALS_b.png   ← schwarz/gold (Navbar Light)        ✅
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx              ← ✅ Schritt 3
│   │   │   ├── Navbar.jsx              ← ✅ Schritt 3
│   │   │   └── Footer.jsx              ← ✅ Schritt 3
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
│   ├── pages/
│   │   ├── HomePage.jsx                ← ✅ Schritt 5
│   │   ├── ServicesPage.jsx            ← ✅ Schritt 5
│   │   ├── ServiceDetailPage.jsx       ← ✅ Schritt 5
│   │   ├── AboutPage.jsx               ← ❌ Schritt 6
│   │   └── ContactPage.jsx             ← ❌ Schritt 6
│   ├── hooks/
│   │   ├── useTheme.js                 ← ✅ Schritt 2
│   │   ├── useCountUp.js               ← ✅ Schritt 4
│   │   └── useContactForm.js           ← ❌ Schritt 6
│   ├── context/
│   │   └── ThemeContext.jsx            ← ✅ Schritt 2
│   ├── data/
│   │   ├── services.js                 ← ✅ Schritt 1
│   │   ├── stats.js                    ← ✅ Schritt 1
│   │   └── testimonials.js             ← ✅ Schritt 4
│   └── styles/
│       └── globals.css                 ← ✅ Schritt 1
├── docs/
│   ├── projekt_status.md               ← ✅
│   ├── changelog.md                    ← ✅
│   ├── todo.md                         ← ✅
│   └── projektstruktur.md              ← ✅
├── README.md                           ← ✅ Schritt 1
├── vite.config.js                      ← ✅ Schritt 1
├── tailwind.config.js                  ← ✅ Schritt 1
├── .eslintrc.cjs                       ← ✅ Schritt 1
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
| ✅ `font-bold/extrabold/medium/normal` | Korrekte Tailwind v4 Klassen (kein font-700 etc.) |
| ✅ Alle Code-Kommentare auf Englisch | Konsistenz, internationale Lesbarkeit |
| ✅ `<Navigate replace />` bei 404-Slug | Kein Eintrag in Browser-History |
| ✅ Sticky CTA-Karte auf ServiceDetailPage | Conversion-Optimierung, immer sichtbar |

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