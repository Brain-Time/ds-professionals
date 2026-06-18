/**
 * ServicesPage.jsx
 * ─────────────────────────────────────────────────────────────
 * Overview page for all 7 D&S Professionals services
 *
 * Sections:
 *   1. Page hero          → Title + subtitle + breadcrumb
 *   2. ProbereinigungBanner → Hinweis für Langzeitaufträge ✅ NEU
 *   3. Services grid      → All 7 service cards (link to detail)
 *   4. CTA strip          → "Request a quote" call-to-action
 *
 * SEO: React Helmet Async
 * ─────────────────────────────────────────────────────────────
 */

import { Link }     from 'react-router-dom';
import { Helmet }   from 'react-helmet-async';
import { motion }   from 'framer-motion';
import { useRef }   from 'react';
import { services } from '../data/services';

// ── Animation variants ─────────────────────────────────────────
const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
};

// ── Arrow icon ─────────────────────────────────────────────────
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// ── Probereinigung Banner ──────────────────────────────────────
const ProbereinigungBanner = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
  >
    <div className="relative overflow-hidden rounded-2xl
                    bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent
                    border border-amber-500/20 p-6 sm:p-8">

      {/* Decorative glow */}
      <div className="absolute -right-10 -top-10 w-40 h-40
                      bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative flex flex-col sm:flex-row items-start
                      sm:items-center justify-between gap-6">

        {/* Left: Icon + Text */}
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 rounded-xl
                          bg-amber-500/20 border border-amber-500/30
                          flex items-center justify-center text-amber-400">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>

          {/* Text */}
          <div>
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">
              Exklusiv für Langzeitaufträge
            </p>
            <h3 className="text-[#0D1B2A] dark:text-white font-extrabold text-lg mb-1">
              Kostenlose Probereinigung
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xl">
              Planen Sie einen langfristigen Reinigungsauftrag? Wir bieten Ihnen eine
              <strong className="text-slate-700 dark:text-slate-300"> unverbindliche Probereinigung</strong> —
              damit Sie unsere Qualität kennenlernen, bevor Sie sich entscheiden.
            </p>
          </div>
        </div>

        {/* Right: CTA */}
        <div className="flex-shrink-0">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2
                         bg-amber-500 hover:bg-amber-400
                         text-slate-900 font-bold text-sm
                         px-5 py-2.5 rounded-xl
                         transition-colors duration-200
                         shadow-lg shadow-amber-500/20
                         whitespace-nowrap"
            >
              Jetzt anfragen
              <ArrowIcon />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);

// ── Service card ───────────────────────────────────────────────
const ServiceCard = ({ service, index }) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-60px' }}
  >
    <Link
      to={`/dienstleistungen/${service.slug}`}
      className="group flex flex-col h-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4FD8]"
      aria-label={`Mehr über ${service.title} erfahren`}
    >
      {/* Accent bar */}
      <span className={`block w-10 h-1 rounded-full mb-5 ${service.accentColor}`} aria-hidden="true" />

      {/* Icon + title */}
      <div className="flex items-start gap-4 mb-3">
        <span className="text-4xl leading-none" aria-hidden="true">{service.icon}</span>
        <h2 className="text-lg font-bold text-[#0D1B2A] dark:text-white leading-snug pt-1">
          {service.title}
        </h2>
      </div>

      {/* Short description */}
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1 mb-5">
        {service.shortDesc}
      </p>

      {/* Feature list (first 3) */}
      <ul className="space-y-1.5 mb-6" role="list">
        {service.features.slice(0, 3).map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="w-1 h-1 rounded-full bg-[#1B4FD8] flex-shrink-0" aria-hidden="true" />
            {feature}
          </li>
        ))}
        {service.features.length > 3 && (
          <li className="text-xs text-slate-400 dark:text-slate-500 pl-3">
            + {service.features.length - 3} weitere Leistungen
          </li>
        )}
      </ul>

      {/* CTA link */}
      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1B4FD8] group-hover:gap-3 transition-all duration-200 mt-auto">
        Details ansehen
        <ArrowIcon />
      </span>
    </Link>
  </motion.div>
);

// ── ServicesPage component ─────────────────────────────────────
const ServicesPage = () => {
  const gridRef = useRef(null);

  return (
    <>
      {/* ── SEO ──────────────────────────────────────────── */}
      <Helmet>
        <title>Dienstleistungen | D&amp;S Professionals Karlsruhe</title>
        <meta
          name="description"
          content="Alle Reinigungsdienstleistungen von D&S Professionals in Karlsruhe: Industrie-, Büro-, Praxis-, Hallen-, Fitnessstudio- und Treppenhausreinigung."
        />
        <meta property="og:title" content="Dienstleistungen | D&S Professionals Karlsruhe" />
        <meta
          property="og:description"
          content="7 professionelle Reinigungsdienstleistungen in Karlsruhe und Umgebung. Jetzt Angebot anfordern!"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* ── Page hero ────────────────────────────────────── */}
      <section className="bg-[#0D1B2A] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-400" role="list">
              <li><Link to="/" className="hover:text-white transition-colors duration-200">Home</Link></li>
              <li aria-hidden="true"><span className="text-slate-600">/</span></li>
              <li className="text-slate-300" aria-current="page">Dienstleistungen</li>
            </ol>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-block text-xs font-bold text-[#C9A84C] tracking-widest uppercase mb-4">
              Unsere Leistungen
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Professionelle Reinigung<br className="hidden sm:block" />
              <span className="text-[#1B4FD8]"> für jeden Bedarf</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Von der Industriehalle bis zur Arztpraxis — wir bieten maßgeschneiderte
              Reinigungslösungen für Unternehmen in Karlsruhe und Umgebung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services grid ────────────────────────────────── */}
      <section
        ref={gridRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#0D1B2A]/50"
        aria-label="Alle Dienstleistungen"
      >
        <div className="max-w-7xl mx-auto">

          {/* ✅ NEU — Probereinigung Banner */}
          <ProbereinigungBanner />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ────────────────────────────────────── */}
      <section className="bg-[#1B4FD8] py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Nicht das Richtige gefunden?
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            Wir erstellen Ihnen ein individuelles Angebot — kostenlos und unverbindlich.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#C9A84C] hover:bg-[#b8943d] text-white font-bold shadow-lg transition-all duration-200"
              >
                Kostenloses Angebot
                <ArrowIcon />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border-2 border-white/60 hover:border-white text-white font-bold transition-all duration-200"
              >
                Kontakt aufnehmen
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ServicesPage;