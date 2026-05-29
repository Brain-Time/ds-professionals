# D&S Professionals – Projektstruktur

```
ds-professionals/
├── public/
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   │
│   ├── assets/
│   │   ├── D&S PROFESSIONALS_a.png     ← Logo Light Mode (500×500px)   ✅
│   │   └── D&S PROFESSIONALS_b.png     ← Logo Dark Mode + Footer       ✅
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx              ← Wrapper: Navbar + <main> + Footer  ✅
│   │   │   ├── Navbar.jsx              ← Logo, Nav-Links, ThemeToggle, Mobile-Menu ✅
│   │   │   └── Footer.jsx              ← Links, Kontakt, Copyright           ✅
│   │   │
│   │   ├── sections/                   ← Große Seitenabschnitte (nur HomePage)
│   │   │   ├── HeroSection.jsx         ← Fullscreen Hero mit CTA         ⏳ Schritt 4
│   │   │   ├── ServicesPreview.jsx     ← 7 Service-Cards (Vorschau)      ⏳ Schritt 4
│   │   │   ├── WhyUsSection.jsx        ← 4 USPs mit Icons                ⏳ Schritt 4
│   │   │   ├── StatsSection.jsx        ← Counter-Animation (Kunden, Jahre...) ⏳ Schritt 4
│   │   │   ├── TestimonialsSection.jsx ← Kundenstimmen                   ⏳ Schritt 4
│   │   │   └── CtaSection.jsx          ← "Jetzt Angebot anfordern"       ⏳ Schritt 4
│   │   │
│   │   └── ui/                         ← Wiederverwendbare Micro-Components
│   │       ├── Button.jsx              ← Primary / Secondary / Gold Varianten ⏳ Schritt 4
│   │       ├── ServiceCard.jsx         ← Karte für einen Service         ⏳ Schritt 4
│   │       ├── SectionWrapper.jsx      ← Scroll-Fade Wrapper (Framer Motion) ⏳ Schritt 4
│   │       └── ThemeToggle.jsx         ← Sun/Moon Toggle Button          ✅
│   │
│   ├── pages/
│   │   ├── HomePage.jsx                ← / (alle Sections zusammengesetzt) ⏳ Schritt 4
│   │   ├── ServicesPage.jsx            ← /dienstleistungen               ❌ Schritt 5
│   │   ├── ServiceDetailPage.jsx       ← /dienstleistungen/:slug         ❌ Schritt 5
│   │   ├── AboutPage.jsx               ← /ueber-uns                      ❌ Schritt 6
│   │   └── ContactPage.jsx             ← /kontakt                        ❌ Schritt 6
│   │
│   ├── hooks/
│   │   ├── useTheme.js                 ← Dark/Light Mode + localStorage  ✅
│   │   ├── useCountUp.js               ← Zahlen-Counter Animation        ⏳ Schritt 4
│   │   └── useContactForm.js           ← React Hook Form + EmailJS Logik ❌ Schritt 6
│   │
│   ├── context/
│   │   └── ThemeContext.jsx            ← Theme Provider (global)         ✅
│   │
│   ├── data/
│   │   ├── services.js                 ← 7 Services (vollständig)        ✅
│   │   ├── stats.js                    ← 4 Kennzahlen                    ✅
│   │   └── testimonials.js             ← Kundenstimmen                   ⏳ Schritt 4
│   │
│   ├── styles/
│   │   └── globals.css                 ← Tailwind v4 @theme + CSS Custom Props ✅
│   │
│   ├── App.jsx                         ← Router + ThemeProvider          ✅
│   └── main.jsx                        ← React 18 createRoot Entry       ✅
│
├── docs/
│   ├── projekt_status.md               ← Projektstatus & Fortschritt     ✅
│   ├── changelog.md                    ← Änderungshistorie               ✅
│   ├── todo.md                         ← Aufgaben nach Priorität         ✅
│   └── projektstruktur.md              ← Diese Datei                     ✅
│
├── index.html                          ← Google Fonts, Meta-Tags
├── vite.config.js                      ✅
├── tailwind.config.js                  ✅
├── .eslintrc.cjs                       ✅
├── README.md                           ✅
├── .gitignore
└── package.json
```

---

## Legende

| Symbol | Bedeutung |
|--------|-----------|
| ✅ | Fertig & in Betrieb |
| ⏳ | In Arbeit / Nächster Schritt |
| ❌ | Noch nicht begonnen |

---

## Schritte-Übersicht

| Schritt | Bereich | Status |
|---------|---------|--------|
| 1 | Projektstruktur & Setup | ✅ |
| 2 | Design-System & Theme | ✅ |
| 3 | Layout (Navbar, Footer) | ✅ |
| 4 | HomePage Sektionen | ⏳ NEXT |
| 5 | ServicesPage & ServiceDetail | ❌ |
| 6 | AboutPage & ContactPage | ❌ |
| 7 | Animationen & Polish | ❌ |
| 8 | SEO & Performance | ❌ |
| 9 | Review & Deploy | ❌ |