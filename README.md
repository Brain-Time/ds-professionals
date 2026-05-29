# 🧹 D&S Professionals — React Website

**Live-Referenz:** [ds-professionals.de](https://ds-professionals.de)
**Portfolio-Projekt:** WordPress-Site vollständig in React neu gebaut
**Letzte Aktualisierung:** 22. Mai 2026

---

## 📌 Projektübersicht

> **D&S Professionals** ist ein professioneller Reinigungsdienst aus Karlsruhe.
> Slogan: *„Mehr als nur sauber"*

Dieses Projekt ist ein **vollständiger React-Rebuild** der bestehenden WordPress-Website —
optimiert für Portfolio-Präsentation, Lighthouse 95+, Dark Mode und moderne UX.

---

## 🚀 Tech-Stack

| Bereich | Technologie |
|---|---|
| Framework | React 18 + JavaScript (ES6+) |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS v4 |
| Animationen | Framer Motion |
| Routing | React Router v6 |
| Formulare | React Hook Form + EmailJS |
| SEO | React Helmet Async |
| Deployment | Vercel (Portfolio) + Shared Hosting (FTP) |

---

## 🎨 Design-System

| Token | Wert | Verwendung |
|---|---|---|
| Primär | `#0D1B2A` | Hintergründe, Text |
| Akzent | `#1B4FD8` | Links, Buttons, Highlights |
| Gold | `#C9A84C` | **NUR** CTAs & Highlights |
| Light BG | `#F8FAFC` | Light Mode Hintergrund |
| Dark BG | `#0F172A` | Dark Mode Hintergrund |
| Schrift | Inter (400/500/700/800) | Gesamte Website |

**Dark Mode:** Standard Light · Toggle in Navbar · Persistenz via `localStorage`

---

## 📁 Projektstruktur

```
ds-professionals/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/        → Navbar, Footer, Layout
│   │   ├── sections/      → Hero, Services, WhyUs, Stats, Testimonials, CTA
│   │   └── ui/            → Button, ServiceCard, ThemeToggle, SectionWrapper
│   ├── pages/             → Home, Services, ServiceDetail, About, Contact
│   ├── hooks/             → useTheme, useCountUp, useContactForm
│   ├── context/           → ThemeContext
│   ├── data/              → services.js, stats.js, testimonials.js
│   └── styles/            → globals.css
├── docs/
│   ├── projekt_status.md
│   ├── changelog.md
│   └── todo.md
├── vite.config.js
├── tailwind.config.js
└── .eslintrc.cjs
```

---

## ⚡ Schnellstart

```bash
# 1. Repository klonen
git clone https://github.com/DEIN-USERNAME/ds-professionals.git
cd ds-professionals

# 2. Dependencies installieren
npm install

# 3. Dev-Server starten
npm run dev
# → http://localhost:3000

# 4. Production Build
npm run build

# 5. Build lokal testen
npm run preview
```

---

## 🌐 Seiten & Routen

| Route | Seite | Beschreibung |
|---|---|---|
| `/` | HomePage | Hero + Services + WhyUs + Stats + Testimonials + CTA |
| `/dienstleistungen` | ServicesPage | Alle 7 Services als Grid |
| `/dienstleistungen/:slug` | ServiceDetailPage | Dynamische Detailseite |
| `/ueber-uns` | AboutPage | Team, Geschichte, Referenzen |
| `/kontakt` | ContactPage | Formular + Karte + Öffnungszeiten |

---

## 🧹 Services

1. 🏭 **Industriereinigung** — Produktionsflächen, Lagerhallen, Werkstätten
2. 🏟️ **Hallenreinigung** — Lager-, Sport-, Eventhallen
3. 💪 **Fitnessstudio-Reinigung** — Geräte, Umkleiden, Sanitär
4. 🏢 **Büroreinigung** — täglich/wöchentlich, Konferenzräume, Küchen
5. 🏠 **Treppenhausreinigung** — Wohn- & Gewerbeobjekte
6. 🏥 **Praxisreinigung** — medizinische Einrichtungen, Desinfektion
7. 🎓 **Bildungseinrichtungen** — Schulen, Kitas, Kindergärten

---

## 📊 Portfolio-Qualitätsziele

| Kriterium | Ziel | Status |
|---|---|---|
| Lighthouse Performance | 95+ | ⏳ |
| Lighthouse Accessibility | 95+ | ⏳ |
| Lighthouse SEO | 100 | ⏳ |
| Lighthouse Best Practices | 100 | ⏳ |
| Mobile-first Responsive | ✅ | ⏳ |
| Dark Mode | ✅ | ⏳ |
| Framer Motion Animationen | Dezent | ⏳ |
| Custom Hooks | ✅ | ⏳ |
| Kommentierter Code | ✅ | ⏳ |

---

## 🔧 Verfügbare Scripts

```bash
npm run dev        # Dev-Server (localhost:3000)
npm run build      # Production Build → dist/
npm run preview    # Build lokal testen
npm run lint       # ESLint ausführen
npm run lint:fix   # ESLint mit Auto-Fix
```

---

## 📬 Kontaktformular (EmailJS)

Das Kontaktformular sendet direkt an eine Outlook-Adresse via **EmailJS**.

Konfiguration in `.env`:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> ⚠️ Niemals `.env` in Git committen! Ist in `.gitignore` eingetragen.

---

## 🚢 Deployment

### Vercel (Portfolio)
```bash
# Automatisch via Git Push (Vercel GitHub Integration)
git push origin main
```

### Shared Hosting (FTP)
```bash
# 1. Build erstellen
npm run build

# 2. dist/ Ordner via FTP hochladen
# → Zielverzeichnis: public_html/ oder www/
```

---

## 📄 Dokumentation

| Datei | Inhalt |
|---|---|
| `docs/projekt_status.md` | Aktueller Projektstatus, Fortschritt je Schritt |
| `docs/changelog.md` | Alle Änderungen chronologisch |
| `docs/todo.md` | Offene Aufgaben nach Priorität |

---

## 👤 Entwickler

**Abdourazaki Derman**
Bachelor Technical Computer Science – Hochschule Pforzheim
Karlsruhe, Deutschland

---

## 📝 Lizenz

Dieses Projekt ist ein **Portfolio-Projekt** und dient ausschließlich
Demonstrationszwecken. Alle Inhalte beziehen sich auf das echte Unternehmen
D&S Professionals, Karlsruhe.