/**
 * ServiceDetailPage.jsx
 * ─────────────────────────────────────────────────────────────
 * Dynamic detail page for a single service
 *
 * Routing: /dienstleistungen/:slug
 * Data:    getServiceBySlug(slug) from services.js
 * 404:     Redirects to /dienstleistungen if slug not found
 *
 * Sections:
 *   1. Hero         → Service title + icon + short description
 *   2. Description  → Long description text
 *   3. Features     → Full feature list (checklist)
 *   4. CTA          → Contact / quote request
 *
 * SEO: Dynamic React Helmet (title + meta per service)
 * ─────────────────────────────────────────────────────────────
 */

import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { getServiceBySlug, services } from '../data/services';

// ── Check icon ─────────────────────────────────────────────────
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className="text-[#1B4FD8] flex-shrink-0 mt-0.5"
    aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// ── Arrow icon ─────────────────────────────────────────────────
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// ── ServiceDetailPage component ────────────────────────────────
const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  // 404: slug not found → redirect to services overview
  if (!service) {
    return <Navigate to="/dienstleistungen" replace />;
  }

  // Related services (exclude current, max 3)
  const related = services
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* ── Dynamic SEO ──────────────────────────────────── */}
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDesc} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDesc} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-[#0D1B2A] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-400 flex-wrap" role="list">
              <li>
                <Link to="/" className="hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li aria-hidden="true"><span className="text-slate-600">/</span></li>
              <li>
                <Link to="/dienstleistungen" className="hover:text-white transition-colors duration-200">
                  Dienstleistungen
                </Link>
              </li>
              <li aria-hidden="true"><span className="text-slate-600">/</span></li>
              <li className="text-slate-300" aria-current="page">{service.title}</li>
            </ol>
          </nav>

          {/* Hero content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row sm:items-start gap-6"
          >
            {/* Icon badge */}
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center text-5xl"
              aria-hidden="true">
              {service.icon}
            </div>

            <div>
              {/* Accent label */}
              <span className="inline-block text-xs font-bold text-[#C9A84C] tracking-widest uppercase mb-3">
                Dienstleistung
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                {service.title}
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                {service.shortDesc}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0D1B2A]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left: description + features */}
          <div className="lg:col-span-2">
            {/* Long description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-extrabold text-[#0D1B2A] dark:text-white mb-4">
                Über diese Dienstleistung
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base mb-10">
                {service.longDesc}
              </p>
            </motion.div>

            {/* Features checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-extrabold text-[#0D1B2A] dark:text-white mb-6">
                Leistungsumfang
              </h2>
              <ul className="space-y-3" role="list">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                  >
                    <CheckIcon />
                    <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right: sticky CTA card */}
          <div className="lg:col-span-1">
            <motion.div
              className="sticky top-24 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg font-extrabold text-[#0D1B2A] dark:text-white mb-2">
                Angebot anfordern
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                Kostenlos und unverbindlich. Wir melden uns innerhalb von 24 Stunden.
              </p>

              {/* Trust points */}
              <ul className="space-y-2 mb-6" role="list">
                {['Kostenlose Beratung', 'Kein Risiko, kein Vertragszwang', 'Antwort in 24h'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA buttons */}
              <div className="flex flex-col gap-3">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/kontakt"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-[#C9A84C] hover:bg-[#b8943d] text-white font-bold text-sm transition-all duration-200 shadow-md"
                  >
                    Jetzt Angebot anfragen
                    <ArrowIcon />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/kontakt"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg border-2 border-[#1B4FD8] text-[#1B4FD8] dark:text-white dark:border-white font-bold text-sm hover:bg-[#1B4FD8] hover:text-white transition-all duration-200"
                  >
                    Kontakt aufnehmen
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Related services ─────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#060D14]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-extrabold text-[#0D1B2A] dark:text-white mb-8">
            Weitere Dienstleistungen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Link
                  to={`/dienstleistungen/${s.slug}`}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="text-2xl flex-shrink-0" aria-hidden="true">{s.icon}</span>
                  <span className="text-sm font-bold text-[#0D1B2A] dark:text-white group-hover:text-[#1B4FD8] transition-colors duration-200">
                    {s.title}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;