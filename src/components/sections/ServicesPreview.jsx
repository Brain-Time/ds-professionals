/**
 * ServicesPreview.jsx
 * ─────────────────────────────────────────────────────────────
 * Services-Vorschau Sektion für die HomePage
 *
 * Features:
 *   - 6 Service-Karten aus services.js
 *   - Icon + Titel + Kurzbeschreibung + Link
 *   - Hover: leichtes Heben (Framer Motion)
 *   - Staggered Fade-in beim Scrollen (useInView)
 *   - Responsive Grid: 1 → 2 → 3 Spalten
 *   - Dark/Light Mode kompatibel
 * ─────────────────────────────────────────────────────────────
 */

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import services from '../../data/services';

// ── Animation Varianten ────────────────────────────────────────

const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const headerVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// ── ServiceCard (inline) ───────────────────────────────────────
/**
 * Einzelne Service-Karte
 * Ausgelagert als separate Komponente für Wiederverwendbarkeit
 */
const ServiceCard = ({ service, index }) => {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -6,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      className={[
        'group relative flex flex-col',
        'bg-white dark:bg-slate-800/50',
        'border border-slate-200 dark:border-slate-700/50',
        'rounded-2xl p-6',
        'shadow-sm hover:shadow-xl dark:hover:shadow-slate-900/50',
        'transition-shadow duration-300',
        'cursor-pointer',
      ].join(' ')}
    >
      {/* Hover-Glow oben */}
      <div
        className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-[#1B4FD8] to-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 bg-[#1B4FD8]/10 dark:bg-[#1B4FD8]/20 group-hover:bg-[#1B4FD8]/20 dark:group-hover:bg-[#1B4FD8]/30 transition-colors duration-200"
        aria-hidden="true"
      >
        {service.icon}
      </div>

      {/* Titel */}
      <h3 className="text-base font-700 text-[#0D1B2A] dark:text-white mb-2 group-hover:text-[#1B4FD8] dark:group-hover:text-[#1B4FD8] transition-colors duration-200">
        {service.title}
      </h3>

      {/* Kurzbeschreibung */}
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1 mb-5">
        {service.shortDescription || service.description?.slice(0, 100) + '…'}
      </p>

      {/* Link */}
      <Link
        to={`/dienstleistungen/${service.slug}`}
        className={[
          'inline-flex items-center gap-1.5',
          'text-sm font-600 text-[#1B4FD8] dark:text-[#1B4FD8]',
          'hover:gap-2.5 transition-all duration-200',
          'focus:outline-none focus-visible:underline',
        ].join(' ')}
        aria-label={`Mehr über ${service.title} erfahren`}
      >
        Mehr erfahren
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.article>
  );
};

// ── ServicesPreview Komponente ─────────────────────────────────
const ServicesPreview = () => {
  const ref      = useRef(null);
  // useInView: Animation startet wenn Sektion sichtbar wird
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Nur die ersten 6 Services anzeigen (Vorschau)
  const previewServices = services.slice(0, 6);

  return (
    <section
      className="py-20 lg:py-28 bg-[#F8FAFC] dark:bg-[#0F172A]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ──────────────────────────────────────── */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={headerVariants}
        >
          {/* Label */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B4FD8]/10 dark:bg-[#1B4FD8]/20 text-[#1B4FD8] text-sm font-600 mb-4">
            Unsere Leistungen
          </span>

          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-800 text-[#0D1B2A] dark:text-white mb-4"
          >
            Was wir für Sie tun
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Von der Industriehalle bis zur Arztpraxis — wir bieten
            maßgeschneiderte Reinigungslösungen für jeden Bedarf.
          </p>
        </motion.div>

        {/* ── Service Cards Grid ───────────────────────────── */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          role="list"
          aria-label="Dienstleistungen"
        >
          {previewServices.map((service, index) => (
            <div key={service.id || service.slug} role="listitem">
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </motion.div>

        {/* ── "Alle Services" Link ─────────────────────────── */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/dienstleistungen"
              className={[
                'inline-flex items-center gap-2 px-8 py-3.5 rounded-xl',
                'border-2 border-[#1B4FD8] text-[#1B4FD8]',
                'hover:bg-[#1B4FD8] hover:text-white',
                'font-700 text-base',
                'transition-all duration-200',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4FD8]',
              ].join(' ')}
            >
              Alle Dienstleistungen ansehen
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;