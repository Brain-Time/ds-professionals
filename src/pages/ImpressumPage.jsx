// src/pages/ImpressumPage.jsx
// Impressum — gesetzlich vorgeschriebene Anbieterkennzeichnung (§ 5 TMG)

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// ─── Animation ────────────────────────────────────────────────────────────────
const fadeInUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  }),
};

// ─── Section Block ────────────────────────────────────────────────────────────
function Section({ title, children, delay = 0 }) {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      custom={delay}
      className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8
                 border border-slate-100 dark:border-slate-700 shadow-sm"
    >
      <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4
                     pb-3 border-b border-slate-100 dark:border-slate-700">
        {title}
      </h2>
      <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed space-y-2">
        {children}
      </div>
    </motion.section>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ImpressumPage() {
  return (
    <>
      {/* ── SEO ── */}
      <Helmet>
        <title>Impressum — D&S Professionals | Reinigungsdienst Karlsruhe</title>
        <meta
          name="description"
          content="Impressum von D&S Professionals — Anbieterkennzeichnung gemäß § 5 TMG."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">

        {/* ── Hero ── */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900
                            pt-32 pb-16 overflow-hidden">
          <div className="absolute top-20 right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="text-amber-400">Impressum</span>
            </motion.nav>

            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
            >
              Impressum
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-slate-400 text-sm"
            >
              Angaben gemäß § 5 TMG
            </motion.p>
          </div>
        </section>

        {/* ── Content ── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">

          {/* 1. Anbieter */}
          <Section title="Angaben gemäß § 5 TMG" delay={0}>
            <p className="font-semibold text-slate-800 dark:text-slate-200 text-base">
              D&S Professionals
            </p>
            <p>Inhaber: Ainikaer Kasimujiang</p>
            <p>Einzelunternehmen</p>
            <p>Wicherstr. 19</p>
            <p>76185 Karlsruhe</p>
            <p>Deutschland</p>
          </Section>

          {/* 2. Kontakt */}
          <Section title="Kontakt" delay={0.05}>
            <div className="space-y-1">
              <p>
                <span className="font-medium text-slate-700 dark:text-slate-300">Telefon:</span>{' '}
                <a href="tel:+4917914555532"
                   className="hover:text-amber-500 transition-colors">
                  +49 177 3512329
                </a>
              </p>
              <p>
                <span className="font-medium text-slate-700 dark:text-slate-300">Telefon:</span>{' '}
                <a href="tel:+4915203288397"
                   className="hover:text-amber-500 transition-colors">
                  +49 179 1455532
                </a>
              </p>
              <p>
                <span className="font-medium text-slate-700 dark:text-slate-300">E-Mail:</span>{' '}
                <a href="mailto:info@ds-professionals.de"
                   className="hover:text-amber-500 transition-colors">
                  info@ds-professionals.de
                </a>
              </p>
            </div>
          </Section>

          {/* 3. Steuernummer */}
          <Section title="Steuerliche Angaben" delay={0.1}>
            <p>
              <span className="font-medium text-slate-700 dark:text-slate-300">
                Steuernummer:
              </span>{' '}
              35245/05598
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
              Finanzamt Karlsruhe
            </p>
          </Section>

          {/* 4. Verantwortlich */}
          <Section title="Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)" delay={0.15}>
            <p>Ainikaer Kasimujiang</p>
            <p>Wicherstr. 19</p>
            <p>76185 Karlsruhe</p>
          </Section>

          {/* 5. Haftung für Inhalte */}
          <Section title="Haftung für Inhalte" delay={0.2}>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
              jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
              umgehend entfernen.
            </p>
          </Section>

          {/* 6. Haftung für Links */}
          <Section title="Haftung für Links" delay={0.25}>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p>
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
              Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung
              nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </Section>

          {/* 7. Urheberrecht */}
          <Section title="Urheberrecht" delay={0.3}>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
            <p>
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
              Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
              wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden
              Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
              umgehend entfernen.
            </p>
          </Section>

          {/* 8. Streitschlichtung */}
          <Section title="Streitschlichtung" delay={0.35}>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-2">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </Section>

          {/* Back link */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            className="pt-4"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium
                         text-amber-600 dark:text-amber-400 hover:underline
                         transition-colors duration-200"
            >
              ← Zurück zur Startseite
            </Link>
          </motion.div>

        </div>
      </main>
    </>
  );
}