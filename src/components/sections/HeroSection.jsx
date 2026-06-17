/**
 * HeroSection.jsx
 * ─────────────────────────────────────────────────────────────
 * Fullscreen Hero für D&S Professionals HomePage
 *
 * Features:
 *   - Gradient: #0D1B2A → #1B4FD8
 *   - H1: "Professionelle Reinigung in Karlsruhe"
 *   - Subtext + Slogan
 *   - CTA 1: "Angebot anfragen" (Gold)
 *   - CTA 2: "Leistungen entdecken" (Outline)
 *   - Trust-Bar: 10+ Jahre | 200+ Kunden | Versichert | ⭐ 4.9
 *   - Framer Motion: fadeInUp mit Stagger
 *   - Scroll-Down Indicator
 * ─────────────────────────────────────────────────────────────
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// ── Animation Varianten ────────────────────────────────────────

/** Container: staggert alle Kind-Elemente */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/** Jedes Kind: fadeInUp */
const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

/** Trust-Bar Items: von unten einblenden */
const trustVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.8 + i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

// ── Trust-Bar Daten ────────────────────────────────────────────
const TRUST_ITEMS = [
  { icon: '🏆', label: '10+ Jahre', sub: 'Erfahrung'   },
  { icon: '👥', label: '200+',      sub: 'Kunden'      },
  { icon: '🛡️', label: 'Versichert', sub: 'Vollkasko'  },
  { icon: '⭐', label: '4.9 / 5',   sub: 'Bewertung'   },
];

// ── HeroSection Komponente ─────────────────────────────────────
const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero-Bereich"
    >
      {/* ── Hintergrund-Gradient ──────────────────────────── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(135deg, #0D1B2A 0%, #0f2744 40%, #1B4FD8 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Dekoratives Muster (subtiles Grid) ───────────── */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      {/* ── Dekorativer Blur-Kreis oben rechts ───────────── */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: '#1B4FD8' }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      {/* ── Dekorativer Blur-Kreis unten links ───────────── */}
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{ background: '#C9A84C' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        aria-hidden="true"
      />

      {/* ── Hauptinhalt ───────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ── Badge ─────────────────────────────────────── */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-500 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
              Reinigungsdienst Karlsruhe &amp; Umgebung
            </span>
          </motion.div>

          {/* ── H1 Headline ───────────────────────────────── */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-800 text-white leading-tight mb-6"
          >
            Professionelle{' '}
            <span
              className="relative inline-block"
              style={{
                background: 'linear-gradient(90deg, #C9A84C, #e8c97a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Reinigung
            </span>
            <br />
            in Karlsruhe
          </motion.h1>

          {/* ── Subtext ───────────────────────────────────── */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/70 leading-relaxed mb-4 max-w-2xl"
          >
            <em className="text-white/90 not-italic font-500">
              „Mehr als nur sauber"
            </em>{' '}
            — Maßgeschneiderte Reinigungslösungen für Unternehmen,
            Praxen und Bildungseinrichtungen. Zuverlässig, flexibel
            und zu fairen Preisen.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-sm text-white/50 mb-10"
          >
            Vertraut von Indutec · Iwago · Wisag und vielen weiteren namhaften Unternehmen.
          </motion.p>

          {/* ── CTA Buttons ───────────────────────────────── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            {/* CTA 1: Gold */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/kontakt"
                className={[
                  'inline-flex items-center justify-center gap-2',
                  'px-8 py-4 rounded-xl',
                  'bg-[#C9A84C] hover:bg-[#b8943d]',
                  'text-white font-700 text-base',
                  'shadow-xl shadow-[#C9A84C]/30',
                  'transition-all duration-200',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]',
                ].join(' ')}
              >
                Angebot anfragen
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* CTA 2: Outline */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/dienstleistungen"
                className={[
                  'inline-flex items-center justify-center gap-2',
                  'px-8 py-4 rounded-xl',
                  'bg-transparent border-2 border-white/30',
                  'hover:bg-white/10 hover:border-white/50',
                  'text-white font-700 text-base',
                  'backdrop-blur-sm',
                  'transition-all duration-200',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50',
                ].join(' ')}
              >
                Leistungen entdecken
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Trust-Bar ─────────────────────────────────── */}
          <div
            className="flex flex-wrap gap-6 sm:gap-8 pt-8 border-t border-white/10"
            role="list"
            aria-label="Vertrauensindikatoren"
          >
            {TRUST_ITEMS.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={trustVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-3"
                role="listitem"
              >
                <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                <div>
                  <p className="text-white font-700 text-base leading-tight">
                    {item.label}
                  </p>
                  <p className="text-white/50 text-xs">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Scroll-Down Indicator ─────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        aria-hidden="true"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Scrollen
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center pt-1.5"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-white/60"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;