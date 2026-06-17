/**
 * Testimonials.jsx
 * ─────────────────────────────────────────────────────────────
 * Kundenstimmen-Sektion für D&S Professionals
 *
 * Features:
 *   - 3 Testimonial-Karten aus testimonials.js
 *   - Avatar (Initialen + Hintergrundfarbe)
 *   - Name, Firma, Rolle, Sternebewertung, Text
 *   - Staggered Fade-in (Framer Motion)
 *   - Dark/Light Mode kompatibel
 * ─────────────────────────────────────────────────────────────
 */

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import testimonials from '../../data/testimonials';

// ── Animation Varianten ────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// ── StarRating Komponente ──────────────────────────────────────
/** Zeigt N ausgefüllte Sterne */
const StarRating = ({ rating = 5 }) => (
  <div
    className="flex gap-0.5"
    role="img"
    aria-label={`Bewertung: ${rating} von 5 Sternen`}
  >
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={i < rating ? '#C9A84C' : 'none'}
        stroke="#C9A84C"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

// ── QuoteIcon ──────────────────────────────────────────────────
const QuoteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-[#1B4FD8]/20 dark:text-[#1B4FD8]/30"
    aria-hidden="true"
  >
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
);

// ── TestimonialCard Komponente ─────────────────────────────────
const TestimonialCard = ({ testimonial }) => (
  <motion.article
    variants={cardVariants}
    whileHover={{
      y: -4,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    }}
    className={[
      'relative flex flex-col',
      'bg-white dark:bg-slate-800/60',
      'border border-slate-200 dark:border-slate-700/50',
      'rounded-2xl p-7',
      'shadow-sm hover:shadow-xl dark:hover:shadow-slate-900/50',
      'transition-shadow duration-300',
    ].join(' ')}
  >
    {/* Anführungszeichen (dekorativ) */}
    <div className="absolute top-6 right-6" aria-hidden="true">
      <QuoteIcon />
    </div>

    {/* Sternebewertung */}
    <div className="mb-4">
      <StarRating rating={testimonial.rating} />
    </div>

    {/* Testimonial Text */}
    <blockquote className="flex-1 mb-6">
      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic">
        „{testimonial.text}"
      </p>
    </blockquote>

    {/* Trennlinie */}
    <div className="border-t border-slate-100 dark:border-slate-700 mb-5" />

    {/* Autor */}
    <div className="flex items-center gap-3">
      {/* Avatar (Initialen) */}
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center text-white font-700 text-sm flex-shrink-0"
        style={{ background: testimonial.color || '#1B4FD8' }}
        aria-hidden="true"
      >
        {testimonial.initials}
      </div>

      <div className="min-w-0">
        <p className="text-sm font-700 text-[#0D1B2A] dark:text-white truncate">
          {testimonial.name}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
          {testimonial.role} · {testimonial.company}
        </p>
      </div>

      {/* Service-Badge */}
      <div className="ml-auto flex-shrink-0">
        <span className="inline-block px-2.5 py-1 rounded-full bg-[#1B4FD8]/10 dark:bg-[#1B4FD8]/20 text-[#1B4FD8] text-xs font-600 whitespace-nowrap">
          {testimonial.service}
        </span>
      </div>
    </div>
  </motion.article>
);

// ── Testimonials Komponente ────────────────────────────────────
const Testimonials = () => {
  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="py-20 lg:py-28 bg-[#F8FAFC] dark:bg-[#0F172A]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ──────────────────────────────────────── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B4FD8]/10 dark:bg-[#1B4FD8]/20 text-[#1B4FD8] text-sm font-600 mb-4">
            Kundenstimmen
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-800 text-[#0D1B2A] dark:text-white mb-4"
          >
            Was unsere Kunden sagen
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Über 200 zufriedene Kunden vertrauen auf D&amp;S Professionals.
            Hier sind einige ihrer Erfahrungen.
          </p>
        </motion.div>

        {/* ── Testimonial Cards ────────────────────────────── */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          role="list"
          aria-label="Kundenbewertungen"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} role="listitem">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </motion.div>

        {/* ── Gesamt-Bewertung ─────────────────────────────── */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                  viewBox="0 0 24 24" fill="#C9A84C" stroke="#C9A84C" strokeWidth="1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-700 text-[#0D1B2A] dark:text-white">
              4.9 / 5
            </span>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Durchschnitt aus 200+ Bewertungen
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;