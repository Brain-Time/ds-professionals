# D&S Professionals – Projektstruktur

```
ds-professionals/
├── public/
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx              ← Wrapper: Navbar + <main> + Footer
│   │   │   ├── Navbar.jsx              ← Logo, Nav-Links, ThemeToggle, Mobile-Menu
│   │   │   └── Footer.jsx              ← Links, Kontakt, Copyright
│   │   │
│   │   ├── sections/                   ← Große Seitenabschnitte (nur HomePage)
│   │   │   ├── HeroSection.jsx         ← Fullscreen Hero mit CTA
│   │   │   ├── ServicesPreview.jsx     ← 7 Service-Cards (Vorschau)
│   │   │   ├── WhyUsSection.jsx        ← 4 USPs mit Icons
│   │   │   ├── StatsSection.jsx        ← Counter-Animation (Kunden, Jahre...)
│   │   │   ├── TestimonialsSection.jsx ← Kundenstimmen
│   │   │   └── CtaSection.jsx          ← "Jetzt Angebot anfordern"
│   │   │
│   │   └── ui/                         ← Wiederverwendbare Micro-Components
│   │       ├── Button.jsx              ← Primary / Secondary / Gold Varianten
│   │       ├── ServiceCard.jsx         ← Karte für einen Service
│   │       ├── SectionWrapper.jsx      ← Scroll-Fade Wrapper (Framer Motion)
│   │       └── ThemeToggle.jsx         ← Sun/Moon Toggle Button
│   │
│   ├── pages/
│   │   ├── HomePage.jsx                ← / (alle Sections zusammengesetzt)
│   │   ├── ServicesPage.jsx            ← /dienstleistungen
│   │   ├── ServiceDetailPage.jsx       ← /dienstleistungen/:slug
│   │   ├── AboutPage.jsx               ← /ueber-uns
│   │   └── ContactPage.jsx             ← /kontakt
│   │
│   ├── hooks/
│   │   ├── useTheme.js                 ← Dark/Light Mode + localStorage
│   │   ├── useCountUp.js               ← Zahlen-Counter Animation
│   │   └── useContactForm.js           ← React Hook Form + EmailJS Logik
│   │
│   ├── context/
│   │   └── ThemeContext.jsx            ← Theme Provider (global)
│   │
│   ├── data/
│   │   ├── services.js                 ← 7 Services (vollständig)        ✅
│   │   ├── stats.js                    ← 4 Kennzahlen                    ✅
│   │   └── testimonials.js             ← Kundenstimmen
│   │
│   ├── styles/
│   │   └── globals.css                 ← Tailwind v4 @theme + CSS Custom Props ✅
│   │
│   ├── assets/
│   │   └── images/                     ← Optimierte WebP Bilder
│   │
│   ├── App.jsx                         ← Router + ThemeProvider
│   └── main.jsx                        ← React 18 createRoot Entry
│
├── docs/
│   ├── projekt_status.md               ← Projektstatus & Fortschritt      ✅
│   ├── changelog.md                    ← Änderungshistorie                ✅
│   └── todo.md                         ← Aufgaben nach Priorität          ✅
│
├── index.html                          ← Google Fonts, Meta-Tags
├── vite.config.js                      ✅
├── tailwind.config.js                  ✅
├── .eslintrc.cjs                       ✅
├── README.md                           ✅
├── .gitignore
└── package.json
```
