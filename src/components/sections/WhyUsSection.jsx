/**
 * WhyUs.jsx
 * ─────────────────────────────────────────────────────────────
 * "Warum D&S Professionals?" Sektion
 *
 * Features:
 *   - 4 USPs: Erfahrung, Zuverlässigkeit, Flexibilität, Preise
 *   - Referenz auf Indutec, Iwago, Wisag
 *   - Zweispaltiges Layout: Text links | USP-Grid rechts
 *   - Framer Motion Scroll-Animationen
 *   - Dark/Light Mode kompatibel
 * ─────────────────────────────────────────────────────────────
 */

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

// ── USP Daten ──────────────────────────────────────────────────
const USP_ITEMS = [
  {
    id: 1,
    icon: '🏆',
    title: 'Langjährige Erfahrung',
    description:
      'Über 10 Jahre Erfahrung mit namhaften Unternehmen wie Indutec, Iwago und Wisag. Wir kennen die Anforderungen der Industrie.',
    color: '#1B4FD8',
  },
  {
    id: 2,
    icon: '✅',
    title: 'Absolute Zuverlässigkeit',
    description:
      'Pünktlich, gründlich, immer. Unsere Kunden vertrauen auf uns – weil wir liefern, was wir versprechen. Ohne Ausnahme.',
    color: '#0D1B2A',
  },
  {
    id: 3,
    icon: '🔄',
    title: 'Maximale Flexibilität',
    description:
      'Täglich, wöchentlich oder auf Abruf – wir passen uns Ihrem Betrieb an. Kurzfristige Änderungen? Kein Problem.',
    color: '#C9A84C',
  },
  {
    id: 4,
    icon: '💰',
    title: 'Faire Preise',
    description:
      'Transparente Kalkulation ohne versteckte Kosten. Individuelle Angebote, die zu Ihrem Budget passen.',
    color: '#1B4FD8',
  },
];

// ── Referenz-Logos (Text-basiert) ──────────────────────────────
const REFERENCES = ['Indutec', 'Iwago', 'Wisag', 'u.v.m.'];

// ── Animation Varianten ────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden:  { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const leftVariants = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

// ── WhyUs Komponente ───────────────────────────────────────────
const WhyUs = () => {
  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="py-20 lg:py-28 bg-white dark:bg-[#0D1B2A]"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Linke Spalte: Text & Referenzen ─────────── */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {/* Label */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B4FD8]/10 dark:bg-[#1B4FD8]/20 text-[#1B4FD8] text-sm font-semibold mb-4">
              Warum wir?
            </span>

            <h2
              id="why-us-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1B2A] dark:text-white mb-6 leading-tight"
            >
              Reinigung, der Sie{' '}
              <span className="text-[#1B4FD8]">vertrauen</span>{' '}
              können
            </h2>

            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              Wir sind nicht einfach ein Reinigungsunternehmen. Wir sind
              Ihr Partner für Sauberkeit und Hygiene — maßgeschneidert
              auf Ihre Bedürfnisse, zuverlässig in der Ausführung.
            </p>

            {/* Referenzen */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
                Vertraut von namhaften Unternehmen
              </p>
              <div className="flex flex-wrap gap-3">
                {REFERENCES.map((ref) => (
                  <span
                    key={ref}
                    className={[
                      'px-4 py-2 rounded-lg text-sm font-semibold',
                      'bg-slate-100 dark:bg-slate-800',
                      'text-slate-600 dark:text-slate-300',
                      'border border-slate-200 dark:border-slate-700',
                    ].join(' ')}
                  >
                    {ref}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/ueber-uns"
                className={[
                  'inline-flex items-center gap-2 px-6 py-3 rounded-xl',
                  'bg-[#0D1B2A] dark:bg-white',
                  'text-white dark:text-[#0D1B2A]',
                  'hover:bg-[#1B4FD8] dark:hover:bg-slate-100',
                  'font-bold text-sm',
                  'transition-all duration-200',
                ].join(' ')}
              >
                Mehr über uns erfahren
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Rechte Spalte: USP Grid ──────────────────── */}
          <motion.div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            role="list"
            aria-label="Unsere Stärken"
          >
            {USP_ITEMS.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className={[
                  'group p-6 rounded-2xl',
                  'bg-[#F8FAFC] dark:bg-slate-800/50',
                  'border border-slate-200 dark:border-slate-700/50',
                  'hover:border-[#1B4FD8]/30 dark:hover:border-[#1B4FD8]/30',
                  'hover:shadow-lg transition-all duration-200',
                ].join(' ')}
                role="listitem"
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 bg-white dark:bg-slate-700 shadow-sm"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>

                {/* Titel */}
                <h3 className="text-sm font-bold text-[#0D1B2A] dark:text-white mb-2 group-hover:text-[#1B4FD8] transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Beschreibung */}
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;