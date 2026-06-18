// src/pages/AGBPage.jsx
// Allgemeine Geschäftsbedingungen — D&S Professionals

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
function Section({ number, title, children, delay = 0 }) {
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
                     pb-3 border-b border-slate-100 dark:border-slate-700
                     flex items-center gap-3">
        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/10
                         text-amber-600 dark:text-amber-400
                         flex items-center justify-center
                         text-sm font-extrabold">
          {number}
        </span>
        {title}
      </h2>
      <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed space-y-3">
        {children}
      </div>
    </motion.section>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AGBPage() {
  return (
    <>
      {/* ── SEO ── */}
      <Helmet>
        <title>AGB — D&S Professionals | Reinigungsdienst Karlsruhe</title>
        <meta
          name="description"
          content="Allgemeine Geschäftsbedingungen von D&S Professionals — Reinigungsdienst Karlsruhe."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">

        {/* ── Hero ── */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900
                            pt-32 pb-16 overflow-hidden">
          <div className="absolute bottom-0 right-20 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

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
              <span className="text-amber-400">AGB</span>
            </motion.nav>

            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
            >
              Allgemeine Geschäftsbedingungen
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-slate-400 text-sm"
            >
              D&S Professionals · Ainikaer Kasimujiang · Stand: Juni 2026
            </motion.p>
          </div>
        </section>

        {/* ── Content ── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">

          {/* Geltungsbereich */}
          <Section number="§1" title="Geltungsbereich" delay={0}>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen
              D&S Professionals, Inhaber Ainikaer Kasimujiang, Wicherstr. 19, 76185 Karlsruhe
              (nachfolgend <strong className="text-slate-700 dark:text-slate-300">„Auftragnehmer"</strong>)
              und dem jeweiligen Auftraggeber über die Erbringung von Reinigungsdienstleistungen.
            </p>
            <p>
              Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des
              Auftraggebers werden nur dann Vertragsbestandteil, wenn und soweit der Auftragnehmer
              ihrer Geltung ausdrücklich schriftlich zugestimmt hat.
            </p>
          </Section>

          {/* Vertragsschluss */}
          <Section number="§2" title="Vertragsschluss" delay={0.05}>
            <p>
              Angebote des Auftragnehmers sind freibleibend und unverbindlich, sofern sie nicht
              ausdrücklich als verbindlich gekennzeichnet sind.
            </p>
            <p>
              Ein Vertrag kommt zustande durch:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>schriftliche Auftragsbestätigung des Auftragnehmers, oder</li>
              <li>Beginn der Leistungserbringung durch den Auftragnehmer.</li>
            </ul>
            <p>
              Mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung.
            </p>
          </Section>

          {/* Leistungsumfang */}
          <Section number="§3" title="Leistungsumfang" delay={0.1}>
            <p>
              Der Umfang der zu erbringenden Reinigungsleistungen ergibt sich aus dem jeweiligen
              Angebot bzw. der Auftragsbestätigung. Dazu gehören insbesondere:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Industrie- und Hallenreinigung</li>
              <li>Büro- und Praxisreinigung</li>
              <li>Fitnessstudio-Reinigung</li>
              <li>Treppenhausreinigung</li>
              <li>Sonderreinigungen nach Vereinbarung</li>
            </ul>
            <p>
              Leistungsänderungen oder Erweiterungen bedürfen einer gesonderten schriftlichen
              Vereinbarung und können zu einer Anpassung der Vergütung führen.
            </p>

            {/* ✅ NEU — Probereinigung Hinweis */}
            <div className="mt-4 flex items-start gap-3 p-4 rounded-xl
                            bg-amber-50 dark:bg-amber-900/10
                            border border-amber-200 dark:border-amber-800/30">
              <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <div>
                <p className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wide mb-1">
                  Probereinigung für Langzeitaufträge
                </p>
                <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                  Bei langfristigen Aufträgen (Dauerschuldverhältnissen) bieten wir auf Anfrage eine
                  <strong> unverbindliche Probereinigung</strong> an — damit Sie unsere Qualität
                  kennenlernen, bevor Sie sich festlegen. Die Probereinigung ist bei
                  anschließendem Vertragsabschluss für Sie kostenlos. Details auf Anfrage unter{' '}
                  <a
                    href="mailto:ds-professionals@outlook.de"
                    className="font-semibold underline hover:no-underline text-amber-700 dark:text-amber-400"
                  >
                    ds-professionals@outlook.de
                  </a>{' '}
                  oder{' '}
                  <Link
                    to="/kontakt"
                    className="font-semibold underline hover:no-underline text-amber-700 dark:text-amber-400"
                  >
                    über unser Kontaktformular
                  </Link>.
                </p>
              </div>
            </div>
          </Section>

          {/* Pflichten des Auftraggebers */}
          <Section number="§4" title="Pflichten des Auftraggebers" delay={0.15}>
            <p>Der Auftraggeber ist verpflichtet:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>
                dem Auftragnehmer und seinen Mitarbeitern rechtzeitig Zugang zu den zu
                reinigenden Räumlichkeiten zu gewähren;
              </li>
              <li>
                Wasser und Strom in ausreichendem Maß kostenlos zur Verfügung zu stellen,
                sofern nicht ausdrücklich anders vereinbart;
              </li>
              <li>
                Mängel unverzüglich, spätestens innerhalb von 24 Stunden nach Leistungserbringung,
                schriftlich zu rügen;
              </li>
              <li>
                Wertgegenstände, Bargeld und sensible Unterlagen vor Beginn der Reinigung
                zu sichern.
              </li>
            </ul>
          </Section>

          {/* Vergütung und Zahlung */}
          <Section number="§5" title="Vergütung und Zahlung" delay={0.2}>
            <p>
              Die Vergütung richtet sich nach dem vereinbarten Angebot. Alle Preise verstehen
              sich zzgl. der gesetzlichen Mehrwertsteuer, sofern der Auftragnehmer
              umsatzsteuerpflichtig ist.
            </p>
            <p>
              Rechnungen sind innerhalb von <strong className="text-slate-700 dark:text-slate-300">14 Tagen</strong> nach
              Rechnungsdatum ohne Abzug zur Zahlung fällig, sofern keine andere Zahlungsfrist
              vereinbart wurde.
            </p>
            <p>
              Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen in Höhe von
              9 Prozentpunkten über dem jeweiligen Basiszinssatz (§ 288 Abs. 2 BGB) zu berechnen.
            </p>
            <p>
              Aufrechnungs- und Zurückbehaltungsrechte des Auftraggebers sind ausgeschlossen,
              es sei denn, die Gegenforderung ist unbestritten oder rechtskräftig festgestellt.
            </p>
          </Section>

          {/* Kündigung */}
          <Section number="§6" title="Vertragsdauer und Kündigung" delay={0.25}>
            <p>
              Dauerschuldverhältnisse (regelmäßige Reinigungsaufträge) werden auf unbestimmte
              Zeit geschlossen und können von beiden Seiten mit einer Frist von
              <strong className="text-slate-700 dark:text-slate-300"> 4 Wochen</strong> zum
              Monatsende schriftlich gekündigt werden.
            </p>
            <p>
              Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
              Ein wichtiger Grund liegt insbesondere vor, wenn:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>der Auftraggeber mit der Zahlung mehr als 30 Tage in Verzug ist;</li>
              <li>der Auftraggeber seinen Mitwirkungspflichten trotz Abmahnung nicht nachkommt.</li>
            </ul>
          </Section>

          {/* Haftung */}
          <Section number="§7" title="Haftung" delay={0.3}>
            <p>
              Der Auftragnehmer haftet für Schäden, die durch seine Mitarbeiter schuldhaft
              verursacht werden, nach den gesetzlichen Bestimmungen.
            </p>
            <p>
              Die Haftung für leichte Fahrlässigkeit ist — außer bei Verletzung von Leben,
              Körper oder Gesundheit sowie bei Verletzung wesentlicher Vertragspflichten
              (Kardinalpflichten) — ausgeschlossen.
            </p>
            <p>
              Bei Beschädigung von Gegenständen, die der Auftraggeber nicht gesichert hat
              (z. B. offen liegende Wertgegenstände, ungesicherte Elektrogeräte), haftet der
              Auftragnehmer nicht.
            </p>
            <p>
              Der Auftragnehmer ist im Rahmen seiner gewerblichen Tätigkeit
              <strong className="text-slate-700 dark:text-slate-300"> haftpflichtversichert</strong>.
            </p>
          </Section>

          {/* Datenschutz */}
          <Section number="§8" title="Datenschutz" delay={0.35}>
            <p>
              Der Auftragnehmer verarbeitet personenbezogene Daten des Auftraggebers
              ausschließlich zur Vertragserfüllung und im Rahmen der gesetzlichen Bestimmungen.
            </p>
            <p>
              Weitere Informationen zum Datenschutz finden Sie in unserer{' '}
              <Link to="/datenschutz" className="text-amber-500 hover:underline">
                Datenschutzerklärung
              </Link>.
            </p>
          </Section>

          {/* Schlussbestimmungen */}
          <Section number="§9" title="Schlussbestimmungen" delay={0.4}>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des
              UN-Kaufrechts (CISG).
            </p>
            <p>
              Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem
              Vertrag ist — soweit gesetzlich zulässig —{' '}
              <strong className="text-slate-700 dark:text-slate-300">Karlsruhe</strong>.
            </p>
            <p>
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt
              die Wirksamkeit der übrigen Bestimmungen unberührt. Die unwirksame Bestimmung
              ist durch eine wirksame zu ersetzen, die dem wirtschaftlichen Zweck der
              unwirksamen Bestimmung am nächsten kommt.
            </p>
            <p>
              Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform.
            </p>
          </Section>

          {/* Info Box */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.45}
            className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200
                       dark:border-amber-800/30 rounded-2xl p-6"
          >
            <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
              <strong>Hinweis:</strong> Diese AGB wurden nach bestem Wissen erstellt.
              Für eine rechtssichere Prüfung empfehlen wir die Konsultation eines
              Rechtsanwalts. Bei Fragen wenden Sie sich an{' '}
              <a
                href="mailto:ds-professionals@outlook.de"
                className="font-semibold underline hover:no-underline"
              >
                ds-professionals@outlook.de
              </a>.
            </p>
          </motion.div>

          {/* Back links */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.5}
            className="pt-4 flex flex-wrap gap-6"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium
                         text-amber-600 dark:text-amber-400 hover:underline
                         transition-colors duration-200"
            >
              ← Zurück zur Startseite
            </Link>
            <Link
              to="/impressum"
              className="inline-flex items-center gap-2 text-sm font-medium
                         text-slate-500 dark:text-slate-400 hover:underline
                         transition-colors duration-200"
            >
              Impressum →
            </Link>
            <Link
              to="/datenschutz"
              className="inline-flex items-center gap-2 text-sm font-medium
                         text-slate-500 dark:text-slate-400 hover:underline
                         transition-colors duration-200"
            >
              Datenschutz →
            </Link>
          </motion.div>

        </div>
      </main>
    </>
  );
}