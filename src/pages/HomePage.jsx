/**
 * HomePage.jsx
 * ─────────────────────────────────────────────────────────────
 * Main landing page — assembles all homepage sections
 *
 * Sections (in order):
 *   1. HeroSection          → Fullscreen hero with CTAs
 *   2. ServicesPreview      → 6 service cards grid
 *   3. ProbereinigungSection → Probereinigung für Langzeitaufträge ✅ Step 7
 *   4. WhyUs                → 4 USPs + reference badges
 *   5. StatsCounter         → 4 animated KPI counters
 *   6. Testimonials         → 3 customer reviews
 *   7. CTASection           → Final call-to-action
 *
 * SEO: React Helmet Async (title + meta description + OG tags)
 * ─────────────────────────────────────────────────────────────
 */

import { Helmet }      from 'react-helmet-async';
import { Link }        from 'react-router-dom';
import { motion }      from 'framer-motion';

import HeroSection     from '../components/sections/HeroSection';
import ServicesPreview from '../components/sections/ServicesPreview';
import WhyUs           from '../components/sections/WhyUsSection';
import StatsCounter    from '../components/sections/StatsSection';
import Testimonials    from '../components/sections/TestimonialsSection';
import CTASection      from '../components/sections/CtaSection';

// ─── Probereinigung Section ───────────────────────────────────────────────────
function ProbereinigungSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-900">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                            bg-amber-500/10 border border-amber-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
                Für Langzeitaufträge
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Überzeugen Sie sich —{' '}
              <span className="text-amber-400">kostenlos.</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Bei langfristigen Aufträgen bieten wir Ihnen eine
              <strong className="text-white"> unverbindliche Probereinigung</strong> an.
              Lernen Sie unsere Qualität, unser Team und unsere Arbeitsweise
              kennen — bevor Sie sich festlegen.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                'Keine Vertragsbindung bei der Probereinigung',
                'Professionelles Equipment & geprüfte Mitarbeiter',
                'Individuelle Absprache vor Ort',
                'Transparente Preisgestaltung danach',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                  <svg
                    className="w-5 h-5 text-amber-400 flex-shrink-0"
                    fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2
                             bg-amber-500 hover:bg-amber-400
                             text-slate-900 font-bold
                             px-6 py-3 rounded-xl
                             transition-colors duration-200
                             shadow-lg shadow-amber-500/25"
                >
                  Probereinigung anfragen
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="tel:+49 177 3512329"
                  className="inline-flex items-center gap-2
                             border border-slate-600 hover:border-slate-400
                             text-slate-300 hover:text-white font-semibold
                             px-6 py-3 rounded-xl
                             transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 1.27h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.91a16 16 0 006 6l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.73 16.92z" />
                  </svg>
                  +49 177 3512329
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: 3 Steps ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {[
              {
                step:  '01',
                title: 'Kontakt aufnehmen',
                desc:  'Schreiben Sie uns oder rufen Sie an — wir melden uns innerhalb von 24 Stunden.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                ),
              },
              {
                step:  '02',
                title: 'Termin vereinbaren',
                desc:  'Wir besichtigen Ihr Objekt und besprechen den Umfang der Probereinigung.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                step:  '03',
                title: 'Probereinigung erleben',
                desc:  'Unser Team reinigt Ihr Objekt — Sie entscheiden danach, ob wir zusammenpassen.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-5 p-5 rounded-2xl
                           bg-white/5 border border-white/10
                           hover:bg-white/[0.08] hover:border-amber-500/20
                           transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl
                                bg-amber-500/10 border border-amber-500/20
                                flex items-center justify-center
                                text-amber-400 group-hover:bg-amber-500/20
                                transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-amber-500 tracking-widest">
                      {item.step}
                    </span>
                    <h3 className="text-white font-bold text-base">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Trust note */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl
                            bg-green-500/5 border border-green-500/20 mt-2">
              <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className="text-green-300 text-xs">
                <strong>Keine versteckten Kosten</strong> — die Probereinigung ist
                für Sie bei Vertragsabschluss kostenlos.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────
const HomePage = () => {
  return (
    <>
      {/* ── SEO Meta Tags ──────────────────────────────── */}
      <Helmet>
        <title>D&amp;S Professionals – Reinigungsdienst Karlsruhe</title>
        <meta
          name="description"
          content="Professionelle Reinigungsdienstleistungen in Karlsruhe: Industrie-, Büro-, Praxis- und Hallenreinigung. Zuverlässig, fair, maßgeschneidert. Jetzt Angebot anfordern!"
        />
        <meta property="og:title" content="D&S Professionals – Reinigungsdienst Karlsruhe" />
        <meta
          property="og:description"
          content="Professionelle Reinigungsdienstleistungen in Karlsruhe. Zuverlässig, fair, maßgeschneidert."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* ── Page sections ──────────────────────────────── */}
      <HeroSection />
      <ServicesPreview />
      <ProbereinigungSection />   {/* ✅ NEU — Step 7 */}
      <WhyUs />
      <StatsCounter />
      <Testimonials />
      <CTASection />
    </>
  );
};

export default HomePage;