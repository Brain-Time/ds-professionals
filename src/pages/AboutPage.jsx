// src/pages/AboutPage.jsx
// Über uns – D&S Professionals

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

const fadeInLeft = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeInRight = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const values = [
  {
    id: 1,
    icon: '🏆',
    title: 'Qualität',
    desc: 'Höchste Reinigungsstandards bei jedem Auftrag — egal ob kleines Büro oder große Gewerbefläche.',
  },
  {
    id: 2,
    icon: '🤝',
    title: 'Verlässlichkeit',
    desc: 'Pünktlich, gründlich, diskret. Unsere Kunden können sich auf uns verlassen — jeden Tag.',
  },
  {
    id: 3,
    icon: '🔄',
    title: 'Flexibilität',
    desc: 'Täglich, wöchentlich oder auf Abruf — wir passen uns Ihrem Betrieb an. Kurzfristige Änderungen? Kein Problem.',
  },
  {
    id: 4,
    icon: '❤️',
    title: 'Leidenschaft',
    desc: 'Reinigung ist unser Handwerk — und wir betreiben es mit echtem Engagement und Stolz.',
  },
];

const references = [
  { id: 1, name: 'Juric Gebäudereinigung', sector: 'Gebäudereinigung', icon: '🏢' },
  { id: 2, name: 'Die Wohlfühlberater',    sector: 'Dienstleistung',   icon: '✨' },
  { id: 3, name: 'Ughur Kitchen',          sector: 'Gastronomie',      icon: '🍽️' },
];

// ─── Sub-Components ───────────────────────────────────────────────────────────

function ValueCard({ value, index }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      custom={index * 0.1}
      className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md
                 border border-slate-100 dark:border-slate-700
                 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="text-4xl mb-4">{value.icon}</div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
        {value.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
        {value.desc}
      </p>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      {/* ── SEO ── */}
      <Helmet>
        <title>Über uns — D&S Professionals | Reinigungsdienst Karlsruhe</title>
        <meta
          name="description"
          content="D&S Professionals — Ihr zuverlässiger Reinigungsdienst in Karlsruhe. Gegründet 2025, mit über 6 Jahren Branchenerfahrung. Qualität, Flexibilität und persönliche Betreuung."
        />
        <meta property="og:title" content="Über uns — D&S Professionals" />
        <meta
          property="og:description"
          content="Professionelle Reinigung in Karlsruhe. Qualität, Verlässlichkeit und Leidenschaft."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">

        {/* ── Hero ── */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900
                            pt-32 pb-20 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <motion.nav
              variants={fadeInUp} initial="hidden" animate="visible" custom={0}
              className="flex items-center gap-2 text-sm text-slate-400 mb-6"
              aria-label="Breadcrumb"
            >
              <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-amber-400">Über uns</span>
            </motion.nav>

            <motion.h1
              variants={fadeInUp} initial="hidden" animate="visible" custom={0.1}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
            >
              Mehr als nur{' '}
              <span className="text-amber-400">sauber</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp} initial="hidden" animate="visible" custom={0.2}
              className="text-xl text-slate-300 max-w-2xl leading-relaxed"
            >
              D&S Professionals steht für gründliche Reinigung, klare Absprachen
              und persönliche Betreuung — direkt aus Karlsruhe.
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={fadeInUp} initial="hidden" animate="visible" custom={0.3}
              className="flex flex-wrap gap-8 mt-10"
            >
              {[
                { value: '2025',  label: 'Gegründet'           },
                { value: '6+',    label: 'Jahre Erfahrung'     },
                { value: '20+',   label: 'Abgeschlossene Projekte' },
                { value: '5+',    label: 'Zufriedene Kunden'   },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-extrabold text-amber-400">{stat.value}</div>
                  <div className="text-sm text-slate-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Story Section ── */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left: Text */}
              <motion.div
                variants={fadeInLeft} initial="hidden"
                whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              >
                <span className="inline-block text-amber-500 font-semibold text-sm
                                 uppercase tracking-widest mb-4">
                  Unsere Geschichte
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900
                               dark:text-white mb-6 leading-tight">
                  Junges Unternehmen —{' '}
                  <span className="text-amber-500">erfahrenes Team</span>
                </h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  <p>
                    D&S Professionals wurde 2025 in Karlsruhe gegründet — mit einer klaren Vision:
                    Reinigungsdienstleistungen anzubieten, auf die sich Unternehmen wirklich
                    verlassen können.
                  </p>
                  <p>
                    Hinter dem Unternehmen steht Inhaber Ainikaer Kasimujiang, der über
                    <strong className="text-slate-800 dark:text-white"> 6 Jahre Erfahrung </strong>
                    in der Reinigungsbranche mitbringt. Diese Erfahrung fliesst in jeden
                    Auftrag ein — von der ersten Absprache bis zum letzten Handgriff.
                  </p>
                  <p>
                    Unser Anspruch ist nicht Masse, sondern Qualität: zuverlässig, pünktlich
                    und mit Blick fürs Detail. Als Einzelunternehmen profitieren unsere Kunden
                    von direkter Kommunikation und persönlicher Betreuung — ohne Umwege.
                  </p>
                </div>
              </motion.div>

              {/* Right: Key Points */}
              <motion.div
                variants={fadeInRight} initial="hidden"
                whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                className="space-y-4"
              >
                {[
                  {
                    icon: '📍',
                    title: 'Standort Karlsruhe',
                    desc:  'Wicherstr. 19, 76185 Karlsruhe — lokal verwurzelt, regional aktiv.',
                  },
                  {
                    icon: '🎯',
                    title: 'Persönliche Betreuung',
                    desc:  'Direkter Kontakt zum Inhaber. Keine Hotlines, keine Zwischenstufen.',
                  },
                  {
                    icon: '⚡',
                    title: 'Schnelle Reaktionszeit',
                    desc:  'Kurzfristige Anfragen? Wir melden uns innerhalb von 24 Stunden.',
                  },
                  {
                    icon: '💼',
                    title: 'Maßgeschneiderte Lösungen',
                    desc:  'Jeder Betrieb ist anders. Wir erstellen individuelle Reinigungskonzepte.',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-2xl
                               bg-slate-50 dark:bg-slate-700/50
                               border border-slate-200 dark:border-slate-600
                               hover:border-amber-400/40 transition-colors duration-200"
                  >
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── Values Section ── */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              custom={0} className="text-center mb-14"
            >
              <span className="inline-block text-amber-500 font-semibold text-sm
                               uppercase tracking-widest mb-4">
                Was uns antreibt
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900
                             dark:text-white leading-tight">
                Unsere Werte
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                Diese vier Grundsätze leiten uns bei jedem Auftrag — und machen den
                Unterschied zwischen gewöhnlicher und außergewöhnlicher Reinigung.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <ValueCard key={value.id} value={value} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ── References Section ── */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              custom={0} className="text-center mb-14"
            >
              <span className="inline-block text-amber-500 font-semibold text-sm
                               uppercase tracking-widest mb-4">
                Vertrauen, das zählt
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900
                             dark:text-white leading-tight">
                Unsere Referenzen
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                Unternehmen aus verschiedenen Branchen vertrauen auf
                unsere Zuverlässigkeit und Qualität.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {references.map((ref, index) => (
                <motion.div
                  key={ref.id}
                  variants={fadeInUp} initial="hidden"
                  whileInView="visible" viewport={{ once: true, margin: '-40px' }}
                  custom={index * 0.1}
                  className="bg-slate-50 dark:bg-slate-700/50 rounded-2xl p-6
                             border border-slate-100 dark:border-slate-600
                             flex flex-col items-center gap-3 text-center
                             hover:border-amber-400/50 hover:shadow-md
                             transition-all duration-300"
                >
                  <span className="text-4xl">{ref.icon}</span>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">
                    {ref.name}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 px-3 py-1
                                   bg-slate-200 dark:bg-slate-600 rounded-full">
                    {ref.sector}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeInUp} initial="hidden"
              whileInView="visible" viewport={{ once: true }}
              custom={0.4}
              className="text-center text-slate-500 dark:text-slate-400 text-sm mt-8"
            >
              + weitere Kunden aus Gastronomie, Gewerbe und dem Dienstleistungsbereich
            </motion.p>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeInUp} initial="hidden"
              whileInView="visible" viewport={{ once: true }}
              custom={0}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Bereit zusammenzuarbeiten?
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
                Kontaktieren Sie uns für ein kostenloses, unverbindliches Angebot.
                Wir melden uns innerhalb von 24 Stunden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center gap-2
                             bg-amber-500 hover:bg-amber-400 text-slate-900
                             font-bold px-8 py-4 rounded-xl transition-colors duration-200
                             shadow-lg shadow-amber-500/25"
                >
                  Jetzt Angebot anfragen
                </Link>
                <a
                  href="tel:+4917914555532"
                  className="inline-flex items-center justify-center gap-2
                             border-2 border-white/30 hover:border-white/60
                             text-white font-bold px-8 py-4 rounded-xl
                             transition-colors duration-200"
                >
                  📞 +49 179 1455532
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
}