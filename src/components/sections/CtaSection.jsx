/**
 * CTASection.jsx
 * ─────────────────────────────────────────────────────────────
 * Final CTA section for D&S Professionals
 *
 * Features:
 *   - "Bereit für professionelle Sauberkeit?"
 *   - Gold CTA button "Jetzt Angebot anfragen"
 *   - Dark blue contrast background
 *   - Framer Motion fade-in + slide-up animations
 *   - Secondary link: phone number
 * ─────────────────────────────────────────────────────────────
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// ── Animation variants ─────────────────────────────────────────
const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// ── CTASection component ───────────────────────────────────────
const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#0D1B2A] py-20 sm:py-28"
      aria-labelledby="cta-heading"
    >
      {/* Background decorative glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#1B4FD8]/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#C9A84C]/10 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#C9A84C] text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
              Jetzt anfragen
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            id="cta-heading"
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6"
          >
            Bereit für{' '}
            <span className="text-[#C9A84C]">professionelle</span>
            <br />
            Sauberkeit?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Kontaktieren Sie uns noch heute für ein unverbindliches Angebot.
            Schnelle Reaktionszeit, faire Preise, zuverlässiger Service.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary: Gold button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/kontakt"
                className={[
                  'inline-flex items-center gap-2.5 px-8 py-4 rounded-xl',
                  'bg-[#C9A84C] hover:bg-[#b8943d]',
                  'text-white text-base font-bold',
                  'shadow-lg shadow-[#C9A84C]/25 hover:shadow-xl hover:shadow-[#C9A84C]/30',
                  'transition-all duration-200',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1B2A]',
                ].join(' ')}
              >
                Jetzt Angebot anfragen
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
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

            {/* Secondary: Phone link */}
            <motion.a
              href="tel:+491773512329"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={[
                'inline-flex items-center gap-2.5 px-8 py-4 rounded-xl',
                'border border-slate-600 hover:border-slate-400',
                'text-slate-300 hover:text-white text-base font-medium',
                'transition-all duration-200',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1B2A]',
              ].join(' ')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
              </svg>
              Direkt anrufen
            </motion.a>
          </motion.div>

          {/* Trust note */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-slate-500 text-sm"
          >
            ✓ Kostenlos &amp; unverbindlich &nbsp;·&nbsp; ✓ Antwort innerhalb 24h &nbsp;·&nbsp; ✓ Karlsruhe &amp; Umgebung
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;