# ✅ D&S Professionals — Todo-Liste

> **Strategie:** Schritt für Schritt, ein Schritt pro Chat-Session.
> Jeder Schritt ist vollständig fertig, bevor der nächste beginnt.

---

## 🔴 Schritt 1 — Projektstruktur & Setup ✅ ERLEDIGT

- [x] Terminal-Befehle (npm create vite + alle installs) ✅
- [x] `vite.config.js` — @ Alias, Code-Splitting, Tailwind Plugin ✅
- [x] `tailwind.config.js` — Custom Colors, Dark Mode, Inter Font ✅
- [x] `.eslintrc.cjs` — React 18, Hooks, ES6+ Regeln ✅
- [x] Ordnerstruktur anlegen (mkdir + touch) ✅
- [x] `src/styles/globals.css` — Tailwind v4 @theme + CSS Custom Props ✅
- [x] `src/data/services.js` — Alle 7 Services vollständig ✅
- [x] `src/data/stats.js` — 4 Kennzahlen ✅
- [x] `README.md` ✅
- [x] `docs/` Ordner mit projekt_status.md, changelog.md, todo.md ✅

---

## 🟡 Schritt 2 — Design-System & Theme ✅ ERLEDIGT

- [x] `src/context/ThemeContext.jsx` ✅
      → `ThemeProvider` Komponente
      → `createContext` + Context Export
      → `isDark` State + `toggleTheme` Funktion
      → `localStorage` Persistenz
      → System-Preference Detection (`prefers-color-scheme`)
      → `.dark` Klasse + `data-theme` auf `document.documentElement`
      → Standard: Light Mode

- [x] `src/hooks/useTheme.js` ✅
      → Custom Hook für ThemeContext
      → `toggleTheme` Funktion
      → Error-Boundary (außerhalb Provider → throw)

- [x] `src/components/ui/ThemeToggle.jsx` ✅
      → Sun/Moon Icon (SVG inline, keine Library)
      → Framer Motion Toggle-Animation (`AnimatePresence`)
      → Rotate + Scale + Opacity beim Wechsel
      → `useTheme` Hook genutzt
      → Accessible (aria-label, role="switch")

---

## 🟠 Schritt 3 — Layout (Navbar & Footer) ✅ ERLEDIGT

- [x] `src/components/layout/Navbar.jsx` ✅
      → Logo: echtes Bild (_b.png hell / _a.png dunkel) + Text + Untertitel
      → Automatischer Logo-Swap via MutationObserver (Theme-Wechsel)
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
      → Logo: echtes Bild (_a.png weiß/gold) + Divider + Text + Untertitel
      → Slogan „Mehr als nur sauber"
      → 3 Spalten: Logo+Text | Navigation+Services | Kontakt
      → Services Links (alle 6 Dienstleistungen)
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
      → Echte Pages eingebunden (HomePage, ServicesPage, ServiceDetailPage)
      → `font-700` → `font-extrabold` Fix
      → ComingSoon Placeholder für Schritt 6

- [x] `src/styles/globals.css` ✅
      → Tailwind v4 Dark Mode: `@custom-variant dark`

---

## 🔵 Schritt 4 — HomePage Sektionen ✅ ERLEDIGT

- [x] `src/hooks/useCountUp.js` ✅
      → `IntersectionObserver` für Trigger
      → Easing-Funktion `easeOutQuart`
      → `requestAnimationFrame` für 60fps Performance
      → Einmalige Ausführung (once: true)
      → Konfigurierbare Dauer + Threshold

- [x] `src/data/testimonials.js` ✅
      → 3 Kundenstimmen (Marcus Weber / Indutec, Sandra Hoffmann / FitLife, Dr. Thomas Keller / Praxis)
      → Name, Rolle, Firma, Initialen, Rating, Text, Service, Avatar-Farbe

- [x] `src/components/sections/HeroSection.jsx` ✅
      → Fullscreen Hero (min-h-screen)
      → Gradient: #0D1B2A → #1B4FD8
      → H1: „Professionelle Reinigung in Karlsruhe"
      → Slogan + Beschreibung + Referenz-Hinweis
      → CTA 1: „Angebot anfragen" (Gold)
      → CTA 2: „Leistungen entdecken" (Outline)
      → Trust-Bar: 10+ Jahre | 200+ Kunden | Versichert | ⭐ 4.9
      → Framer Motion fadeInUp mit Stagger
      → Scroll-Down Indicator (animiert)
      → Dekorative Blur-Kreise (animiert)

- [x] `src/components/sections/ServicesPreview.jsx` ✅
      → 6 Service-Karten aus services.js
      → Icon + Titel + Kurzbeschreibung + Link
      → Hover: leichtes Heben (Framer Motion)
      → Staggered Fade-in via `useInView`
      → Responsive Grid: 1 → 2 → 3 Spalten
      → „Alle Dienstleistungen ansehen" Button
      → Hover-Glow Linie oben auf Karte

- [x] `src/components/sections/WhyUs.jsx` ✅
      → 4 USPs: Erfahrung, Zuverlässigkeit, Flexibilität, Faire Preise
      → Referenz-Badges: Indutec · Iwago · Wisag · u.v.m.
      → Zweispaltiges Layout: Text links | USP-Grid rechts
      → CTA „Mehr über uns erfahren"
      → Framer Motion: Links slideIn + Rechts staggered

- [x] `src/components/sections/StatsCounter.jsx` ✅
      → 4 animierte Kennzahlen aus stats.js
      → `useCountUp` Hook integriert
      → Dunkler Gradient-Hintergrund (#0D1B2A)
      → Suffix in Gold (#C9A84C)
      → Vertikale Trennlinien zwischen Items (Desktop)
      → Dekoratives Hintergrundmuster + Blur-Akzent

- [x] `src/components/sections/Testimonials.jsx` ✅
      → 3 Testimonial-Karten aus testimonials.js
      → Avatar (Initialen + Hintergrundfarbe)
      → StarRating Komponente (SVG, Gold)
      → Name, Rolle, Firma, Service-Badge
      → QuoteIcon (dekorativ)
      → Gesamt-Bewertungs-Badge (4.9 / 5)
      → Staggered Fade-in via `useInView`

- [x] `src/components/sections/CTASection.jsx` ✅
      → „Bereit für professionelle Sauberkeit?"
      → Gold CTA Button „Jetzt Angebot anfragen"
      → Sekundärer Button „Direkt anrufen"
      → Trust-Note: Kostenlos · 24h Antwort · Karlsruhe
      → Dunkelblauer Kontrasthintergrund + Blur-Dekor
      → Framer Motion staggered Animationen via `useInView`
      → Alle Kommentare auf Englisch

---

## 🟣 Schritt 5 — UI Components & Pages ✅ ERLEDIGT

- [x] `src/components/ui/Button.jsx` ✅
      → Varianten: `gold` | `primary` | `outline` | `ghost`
      → Größen: `sm` | `md` | `lg`
      → `as` Prop (Link vs Button)
      → Loading Spinner (SVG, animiert)
      → `disabled` + `aria-disabled` Support
      → Alle Kommentare auf Englisch

- [x] `src/components/ui/SectionWrapper.jsx` ✅
      → Framer Motion `whileInView` Scroll-Fade + Y-Offset
      → `viewport={{ once: true, margin: '-80px' }}`
      → Konfigurierbare `delay` + `duration` + `yOffset` Props
      → Wiederverwendbar für alle Sektionen

- [x] `src/pages/HomePage.jsx` ✅
      → Alle 6 Sektionen zusammengesetzt
      → React Helmet: title + meta description + OG tags + robots

- [x] `src/pages/ServicesPage.jsx` ✅
      → Hero mit Breadcrumb + Titel + Untertitel
      → Alle 7 Services als Grid (1 → 2 → 3 Spalten)
      → ServiceCard: Accent-Bar + Icon + Titel + shortDesc + 3 Features + Link
      → Staggered Fade-in via `whileInView`
      → CTA Strip: „Nicht das Richtige gefunden?" + 2 Buttons
      → React Helmet SEO

- [x] `src/pages/ServiceDetailPage.jsx` ✅
      → Dynamisch via `useParams()` + `getServiceBySlug()`
      → 404-Handling: `<Navigate to="/dienstleistungen" replace />`
      → Hero: Icon-Badge + Breadcrumb + Titel + shortDesc
      → Beschreibung (longDesc) + vollständige Features-Checkliste
      → Sticky CTA-Karte (rechts): Trust-Points + 2 Buttons
      → Related Services (3 weitere, ohne aktuellen)
      → React Helmet: dynamische SEO-Tags pro Service

- [x] `src/App.jsx` ✅ (aktualisiert)
      → HomePage, ServicesPage, ServiceDetailPage eingebunden
      → ComingSoon Placeholder für AboutPage + ContactPage (Schritt 6)
      → `font-extrabold` statt `font-700`

---

## ⚫ Schritt 6 — AboutPage & ContactPage ← **NEXT**

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

## 📝 Notizen & Ideen (Nice-to-Have, nicht Priorität!)

- [ ] Mehrsprachigkeit (DE/EN) — via i18n
- [ ] Blog/News Bereich
- [ ] Preisrechner (interaktiv)
- [ ] Buchungskalender
- [ ] WhatsApp Chat Button
- [ ] Cookie Banner (DSGVO)
- [ ] Google Analytics Integration
- [ ] PWA Support (Service Worker)