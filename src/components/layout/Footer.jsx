/**
 * Footer.jsx
 * ─────────────────────────────────────────────────────────────
 * Footer für D&S Professionals
 *
 * Layout: 3 Spalten (Desktop) / Gestapelt (Mobile)
 *   1. Logo + Slogan + Kurzbeschreibung
 *   2. Schnelllinks (Navigation)
 *   3. Kontaktdaten Karlsruhe
 *
 * Unten: Copyright · Impressum · Datenschutz · AGB
 * ─────────────────────────────────────────────────────────────
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// ── Konfiguration ──────────────────────────────────────────────

const QUICK_LINKS = [
  { label: 'Home',             to: '/'                },
  { label: 'Dienstleistungen', to: '/dienstleistungen' },
  { label: 'Über uns',         to: '/ueber-uns'        },
  { label: 'Kontakt',          to: '/kontakt'          },
];

const SERVICE_LINKS = [
  { label: 'Industriereinigung',       to: '/dienstleistungen/industriereinigung'       },
  { label: 'Büroreinigung',            to: '/dienstleistungen/bueroreinigung'            },
  { label: 'Hallenreinigung',          to: '/dienstleistungen/hallenreinigung'           },
  { label: 'Fitnessstudio-Reinigung',  to: '/dienstleistungen/fitnessstudio-reinigung'  },
  { label: 'Praxisreinigung',          to: '/dienstleistungen/praxisreinigung'           },
  { label: 'Treppenhausreinigung',     to: '/dienstleistungen/treppenhausreinigung'      },
];

const LEGAL_LINKS = [
  { label: 'Impressum',   to: '/impressum'   },
  { label: 'Datenschutz', to: '/datenschutz' },
  { label: 'AGB',         to: '/agb'         },
];

const CURRENT_YEAR = new Date().getFullYear();

// ── SVG Icons ──────────────────────────────────────────────────

const BroomIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#C9A84C]"
    aria-hidden="true"
  >
    <path d="M9 3L5 7l10 10 4-4L9 3z" />
    <path d="M5 7L3 21l7-4" />
    <path d="M15 17l4 4" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// ── Animations-Varianten ───────────────────────────────────────
const fadeInUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0  },
};

// ── Footer Komponente ──────────────────────────────────────────
const Footer = () => {
  return (
    <footer
      className="bg-[#0D1B2A] dark:bg-[#060D14] text-slate-300"
      role="contentinfo"
      aria-label="Seitenfooter"
    >
      {/* ── Hauptbereich ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* ── Spalte 1: Logo + Text ──────────────────────── */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            {/* Logo */}
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 mb-5 group"
              aria-label="D&S Professionals – Startseite"
            >
              <BroomIcon />
              <div className="flex flex-col leading-tight">
                <span className="text-base font-700 text-white tracking-tight">
                  D&amp;S Professionals
                </span>
                <span className="text-[10px] text-slate-400 tracking-widest uppercase">
                  Reinigungsdienst Karlsruhe
                </span>
              </div>
            </Link>

            {/* Slogan */}
            <p className="text-[#C9A84C] font-500 text-sm mb-3 italic">
              „Mehr als nur sauber"
            </p>

            {/* Beschreibung */}
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Professionelle Reinigungsdienstleistungen für Unternehmen in
              Karlsruhe und Umgebung. Maßgeschneidert, zuverlässig und
              zu fairen Preisen.
            </p>

            {/* Referenzen Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
              Vertraut von Indutec · Iwago · Wisag
            </div>
          </motion.div>

          {/* ── Spalte 2: Navigation + Services ───────────── */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Schnelllinks */}
            <h3 className="text-white font-700 text-sm uppercase tracking-wider mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5 mb-8" role="list">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={[
                      'text-sm text-slate-400 hover:text-[#1B4FD8]',
                      'transition-colors duration-200',
                      'flex items-center gap-2 group',
                    ].join(' ')}
                  >
                    <span
                      className="w-1 h-1 rounded-full bg-[#1B4FD8] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Dienstleistungen */}
            <h3 className="text-white font-700 text-sm uppercase tracking-wider mb-5">
              Dienstleistungen
            </h3>
            <ul className="space-y-2.5" role="list">
              {SERVICE_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={[
                      'text-sm text-slate-400 hover:text-[#1B4FD8]',
                      'transition-colors duration-200',
                      'flex items-center gap-2 group',
                    ].join(' ')}
                  >
                    <span
                      className="w-1 h-1 rounded-full bg-[#1B4FD8] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Spalte 3: Kontakt ──────────────────────────── */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-700 text-sm uppercase tracking-wider mb-5">
              Kontakt
            </h3>

            <ul className="space-y-4" role="list">
              {/* Adresse */}
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#1B4FD8] flex-shrink-0">
                  <MapPinIcon />
                </span>
                <address className="not-italic text-sm text-slate-400 leading-relaxed">
                  Karlsruhe und Umgebung<br />
                  Baden-Württemberg, Deutschland
                </address>
              </li>

              {/* Telefon */}
              <li className="flex items-center gap-3">
                <span className="text-[#1B4FD8] flex-shrink-0">
                  <PhoneIcon />
                </span>
                <a
                  href="tel:+4972112345678"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  aria-label="Telefonnummer anrufen"
                >
                  +49 (0) 721 – Auf Anfrage
                </a>
              </li>

              {/* E-Mail */}
              <li className="flex items-center gap-3">
                <span className="text-[#1B4FD8] flex-shrink-0">
                  <MailIcon />
                </span>
                <a
                  href="mailto:info@ds-professionals.de"
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200 break-all"
                >
                  info@ds-professionals.de
                </a>
              </li>

              {/* Öffnungszeiten */}
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#1B4FD8] flex-shrink-0">
                  <ClockIcon />
                </span>
                <div className="text-sm text-slate-400 leading-relaxed">
                  <p>Mo – Fr: 07:00 – 18:00 Uhr</p>
                  <p>Sa: 08:00 – 14:00 Uhr</p>
                  <p className="text-slate-500">So: Geschlossen</p>
                </div>
              </li>
            </ul>

            {/* CTA */}
            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/kontakt"
                className={[
                  'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg',
                  'bg-[#C9A84C] hover:bg-[#b8943d]',
                  'text-white text-sm font-700',
                  'transition-colors duration-200',
                  'shadow-lg shadow-[#C9A84C]/20',
                ].join(' ')}
              >
                Kostenloses Angebot
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Trennlinie ────────────────────────────────────── */}
      <div className="border-t border-white/10" />

      {/* ── Copyright & Legal ────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {CURRENT_YEAR} D&amp;S Professionals – Reinigungsdienst Karlsruhe.
            Alle Rechte vorbehalten.
          </p>

          {/* Legal Links */}
          <nav aria-label="Rechtliche Links">
            <ul className="flex items-center gap-4 sm:gap-6" role="list">
              {LEGAL_LINKS.map((link, i) => (
                <li key={link.to} className="flex items-center gap-4 sm:gap-6">
                  <Link
                    to={link.to}
                    className="text-xs text-slate-500 hover:text-slate-300 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                  {/* Trennpunkt zwischen Links */}
                  {i < LEGAL_LINKS.length - 1 && (
                    <span className="text-slate-700" aria-hidden="true">·</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;