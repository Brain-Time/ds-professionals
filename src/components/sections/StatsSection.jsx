/**
 * StatsCounter.jsx
 * ─────────────────────────────────────────────────────────────
 * Animierte Kennzahlen-Sektion für D&S Professionals
 *
 * Features:
 *   - 4 animierte Zahlen aus stats.js
 *   - useCountUp Hook (Intersection Observer)
 *   - Dunkler Hintergrund als Kontrast (#0D1B2A)
 *   - Framer Motion Stagger-Animation
 *   - Suffix-Unterstützung ("+", "%", etc.)
 * ─────────────────────────────────────────────────────────────
 */

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import useCountUp from '../../hooks/useCountUp';
import stats from '../../data/stats';

// ── Animation Varianten ────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// ── StatItem Komponente ────────────────────────────────────────
/**
 * Einzelne Kennzahl mit Counter-Animation
 * Bekommt isInView als Prop, damit alle Counter gleichzeitig starten
 */
const StatItem = ({ stat, isVisible }) => {
  const { count, ref } = useCountUp(
    stat.value,
    stat.duration || 2200,
    0.1
  );

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className="flex flex-col items-center text-center px-4"
      role="figure"
      aria-label={`${stat.label}: ${stat.value}${stat.suffix || ''}`}
    >
      {/* Icon */}
      {stat.icon && (
        <span className="text-3xl mb-3" aria-hidden="true">
          {stat.icon}
        </span>
      )}

      {/* Zahl + Suffix */}
      <div className="flex items-end gap-0.5 mb-2">
        {/* Prefix (z.B. "~") */}
        {stat.prefix && (
          <span className="text-2xl font-medium text-white/60 mb-1">
            {stat.prefix}
          </span>
        )}

        {/* Animierte Zahl */}
        <span
          className="text-5xl sm:text-6xl font-extrabold text-white leading-none tabular-nums"
          aria-live="polite"
        >
          {isVisible ? count.toLocaleString('de-DE') : 0}
        </span>

        {/* Suffix (z.B. "+", "%") */}
        {stat.suffix && (
          <span
            className="text-3xl font-bold mb-1"
            style={{ color: '#C9A84C' }}
            aria-hidden="true"
          >
            {stat.suffix}
          </span>
        )}
      </div>

      {/* Label */}
      <p className="text-base font-semibold text-white/80 mb-1">
        {stat.label}
      </p>

      {/* Sublabel */}
      {stat.sublabel && (
        <p className="text-sm text-white/40">
          {stat.sublabel}
        </p>
      )}

      {/* Trennlinie unten (dekorativ) */}
      <div
        className="mt-4 w-8 h-0.5 rounded-full"
        style={{ background: '#C9A84C', opacity: 0.6 }}
        aria-hidden="true"
      />
    </motion.div>
  );
};

// ── StatsCounter Komponente ────────────────────────────────────
const StatsCounter = () => {
  const ref      = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0f2744 100%)' }}
      aria-labelledby="stats-heading"
    >
      {/* ── Dekoratives Hintergrundmuster ─────────────────── */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* ── Dekorativer Blur-Akzent ───────────────────────── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 blur-3xl opacity-20"
        style={{ background: '#1B4FD8' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ──────────────────────────────────────── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/70 text-sm font-semibold mb-4">
            Zahlen, die überzeugen
          </span>
          <h2
            id="stats-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            D&amp;S Professionals in Zahlen
          </h2>
        </motion.div>

        {/* ── Stats Grid ───────────────────────────────────── */}
        <motion.div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          role="list"
          aria-label="Unternehmenskennzahlen"
        >
          {/* Trennlinien zwischen Items (Desktop) */}
          {stats.map((stat, index) => (
            <div
              key={stat.id || index}
              className={[
                'relative',
                // Vertikale Trennlinie nach jedem Item außer dem letzten
                index < stats.length - 1
                  ? 'lg:after:absolute lg:after:right-0 lg:after:top-1/4 lg:after:h-1/2 lg:after:w-px lg:after:bg-white/10'
                  : '',
              ].join(' ')}
              role="listitem"
            >
              <StatItem
                stat={stat}
                isVisible={isInView}
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default StatsCounter;