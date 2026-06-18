// src/pages/AboutPage.jsx
// About page — company history, values, references, team

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
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

// Company core values
const values = [
  {
    id: 1,
    icon: '🏆',
    title: 'Qualität',
    desc: 'Höchste Reinigungsstandards bei jedem Auftrag — egal ob kleines Büro oder große Industriehalle.',
  },
  {
    id: 2,
    icon: '🤝',
    title: 'Verlässlichkeit',
    desc: 'Pünktlich, zuverlässig, diskret. Unsere Kunden können sich auf uns verlassen — jeden Tag.',
  },
  {
    id: 3,
    icon: '💡',
    title: 'Innovation',
    desc: 'Modernste Reinigungstechnologien und umweltfreundliche Mittel für nachhaltige Ergebnisse.',
  },
  {
    id: 4,
    icon: '❤️',
    title: 'Leidenschaft',
    desc: 'Reinigung ist unser Handwerk — und wir betreiben es mit echtem Engagement und Stolz.',
  },
];

// Company milestones / history
const milestones = [
  {
    year: '2009',
    title: 'Gründung',
    desc: 'D&S Professionals wird in Karlsruhe gegründet. Start mit Büroreinigung für lokale KMUs.',
  },
  {
    year: '2013',
    title: 'Erweiterung',
    desc: 'Ausbau auf Industriereinigung und Hallenreinigung. Erste Großaufträge in der Region.',
  },
  {
    year: '2017',
    title: 'Wachstum',
    desc: 'Team wächst auf 20+ Mitarbeiter. Neue Sparte: Fitnessstudio- und Praxisreinigung.',
  },
  {
    year: '2021',
    title: 'Zertifizierung',
    desc: 'Erweiterung des Leistungsportfolios. Modernisierung des Maschinenparks.',
  },
  {
    year: '2024',
    title: 'Heute',
    desc: '30+ Mitarbeiter, 150+ zufriedene Kunden, 7 Dienstleistungsbereiche — und wir wachsen weiter.',
  },
];

// Reference / partner companies
const references = [
  { id: 1, name: 'Indutec', sector: 'Industrie', icon: '🏭' },
  { id: 2, name: 'Iwago',   sector: 'Gewerbe',   icon: '🏢' },
  { id: 3, name: 'Wisag',   sector: 'Facility',  icon: '🏗️' },
  { id: 4, name: 'FitLife', sector: 'Fitness',   icon: '💪' },
  { id: 5, name: 'MedCenter Karlsruhe', sector: 'Medizin', icon: '🏥' },
  { id: 6, name: 'BildungsZentrum KA', sector: 'Bildung', icon: '🎓' },
];

// Team members
const team = [
  {
    id: 1,
    name: 'Derman S.',
    role: 'Geschäftsführer',
    initials: 'DS',
    color: 'bg-blue-600',
    desc: '15+ Jahre Erfahrung in der Gebäudereinigung. Verantwortlich für Strategie & Qualitätssicherung.',
  },
  {
    id: 2,
    name: 'Anna K.',
    role: 'Teamleiterin Industrie',
    initials: 'AK',
    color: 'bg-amber-600',
    desc: 'Spezialistin für Industriereinigung und Hallenreinigung. Koordiniert 12 Mitarbeiter.',
  },
  {
    id: 3,
    name: 'Marco B.',
    role: 'Teamleiter Gewerbe',
    initials: 'MB',
    color: 'bg-emerald-600',
    desc: 'Experte für Büro- und Praxisreinigung. Ansprechpartner für Gewerbekunden.',
  },
];

// ─── Sub-Components ───────────────────────────────────────────────────────────

// Single value card
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

// Single timeline milestone
function Milestone({ milestone, index, isLast }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      custom={index * 0.1}
      className="relative flex gap-6"
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center
                        text-white font-bold text-xs shrink-0 shadow-md shadow-amber-200
                        dark:shadow-amber-900/30">
          {milestone.year}
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 bg-amber-200 dark:bg-amber-900/40 mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="pb-10">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
          {milestone.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          {milestone.desc}
        </p>
      </div>
    </motion.div>
  );
}

// Single team member card
function TeamCard({ member, index }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      custom={index * 0.15}
      className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md
                 border border-slate-100 dark:border-slate-700 text-center"
    >
      {/* Avatar */}
      <div className={`w-16 h-16 rounded-full ${member.color} flex items-center
                       justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg`}>
        {member.initials}
      </div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
        {member.name}
      </h3>
      <p className="text-amber-600 dark:text-amber-400 text-sm font-medium mb-3">
        {member.role}
      </p>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
        {member.desc}
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
          content="Lernen Sie D&S Professionals kennen: 15+ Jahre Erfahrung, 30+ Mitarbeiter, 150+ zufriedene Kunden. Ihr zuverlässiger Reinigungsdienst in Karlsruhe."
        />
        <meta property="og:title" content="Über uns — D&S Professionals" />
        <meta
          property="og:description"
          content="Professionelle Reinigung in Karlsruhe seit 2009. Qualität, Verlässlichkeit und Leidenschaft."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">

        {/* ── Hero ── */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900
                            pt-32 pb-20 overflow-hidden">
          {/* Decorative blurs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <motion.nav
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="flex items-center gap-2 text-sm text-slate-400 mb-6"
              aria-label="Breadcrumb"
            >
              <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-amber-400">Über uns</span>
            </motion.nav>

            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
            >
              Mehr als nur{' '}
              <span className="text-amber-400">sauber</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-xl text-slate-300 max-w-2xl leading-relaxed"
            >
              Seit 2009 stehen wir für professionelle Reinigung in Karlsruhe und Umgebung.
              Lernen Sie das Team kennen, das täglich für Sauberkeit und Ordnung sorgt.
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="flex flex-wrap gap-8 mt-10"
            >
              {[
                { value: '15+', label: 'Jahre Erfahrung' },
                { value: '30+', label: 'Mitarbeiter' },
                { value: '150+', label: 'Kunden' },
                { value: '7',   label: 'Dienstleistungen' },
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
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
              >
                <span className="inline-block text-amber-500 font-semibold text-sm
                                 uppercase tracking-widest mb-4">
                  Unsere Geschichte
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900
                               dark:text-white mb-6 leading-tight">
                  Gegründet mit einer Vision —<br />
                  <span className="text-amber-500">gewachsen durch Vertrauen</span>
                </h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  <p>
                    D&S Professionals wurde 2009 in Karlsruhe mit einer klaren Mission gegründet:
                    professionelle Reinigungsdienstleistungen anzubieten, auf die sich Unternehmen
                    wirklich verlassen können.
                  </p>
                  <p>
                    Was als kleines Team mit großen Ambitionen begann, ist heute ein etabliertes
                    Unternehmen mit über 30 Mitarbeitern und mehr als 150 zufriedenen Kunden —
                    von Industriebetrieben über Fitnessstudios bis hin zu Arztpraxen.
                  </p>
                  <p>
                    Unser Erfolg basiert auf einem einfachen Prinzip: Wir behandeln jeden Auftrag
                    so, als wäre es unser eigenes Unternehmen, das gereinigt wird.
                  </p>
                </div>
              </motion.div>

              {/* Right: Timeline */}
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="relative"
              >
                {milestones.map((milestone, index) => (
                  <Milestone
                    key={milestone.year}
                    milestone={milestone}
                    index={index}
                    isLast={index === milestones.length - 1}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Values Section ── */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={0}
              className="text-center mb-14"
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

            {/* Values Grid */}
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
            {/* Header */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={0}
              className="text-center mb-14"
            >
              <span className="inline-block text-amber-500 font-semibold text-sm
                               uppercase tracking-widest mb-4">
                Vertrauen seit Jahren
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900
                             dark:text-white leading-tight">
                Unsere Referenzen
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                Namhafte Unternehmen aus verschiedenen Branchen vertrauen auf
                unsere Zuverlässigkeit und Qualität.
              </p>
            </motion.div>

            {/* References Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {references.map((ref, index) => (
                <motion.div
                  key={ref.id}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  custom={index * 0.08}
                  className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5
                             border border-slate-100 dark:border-slate-600
                             flex flex-col items-center gap-2 text-center
                             hover:border-amber-400/50 hover:shadow-md
                             transition-all duration-300"
                >
                  <span className="text-3xl">{ref.icon}</span>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">
                    {ref.name}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {ref.sector}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Trust note */}
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.5}
              className="text-center text-slate-500 dark:text-slate-400 text-sm mt-8"
            >
              + viele weitere Kunden aus Industrie, Gewerbe und dem Gesundheitswesen
            </motion.p>
          </div>
        </section>

        {/* ── Team Section ── */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              custom={0}
              className="text-center mb-14"
            >
              <span className="inline-block text-amber-500 font-semibold text-sm
                               uppercase tracking-widest mb-4">
                Die Menschen dahinter
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900
                             dark:text-white leading-tight">
                Unser Team
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                Erfahrene Fachkräfte, die mit Leidenschaft und Präzision arbeiten.
              </p>
            </motion.div>

            {/* Team Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <TeamCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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
                  href="tel:+49XXXXXXXXX"
                  className="inline-flex items-center justify-center gap-2
                             border-2 border-white/30 hover:border-white/60
                             text-white font-bold px-8 py-4 rounded-xl
                             transition-colors duration-200"
                >
                  📞 Direkt anrufen
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
}