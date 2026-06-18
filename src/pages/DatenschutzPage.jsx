// src/pages/DatenschutzPage.jsx
// Datenschutzerklärung gemäß DSGVO / BDSG

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
      <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed space-y-3">
        {children}
      </div>
    </motion.section>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function DatenschutzPage() {
  return (
    <>
      {/* ── SEO ── */}
      <Helmet>
        <title>Datenschutz — D&S Professionals | Reinigungsdienst Karlsruhe</title>
        <meta
          name="description"
          content="Datenschutzerklärung von D&S Professionals gemäß DSGVO und BDSG."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">

        {/* ── Hero ── */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900
                            pt-32 pb-16 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

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
              <span className="text-amber-400">Datenschutz</span>
            </motion.nav>

            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
            >
              Datenschutzerklärung
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-slate-400 text-sm"
            >
              Gemäß DSGVO und BDSG — Stand: Juni 2026
            </motion.p>
          </div>
        </section>

        {/* ── Content ── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">

          {/* 1. Verantwortlicher */}
          <Section title="1. Verantwortlicher" delay={0}>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 space-y-1
                            border border-slate-100 dark:border-slate-600">
              <p className="font-semibold text-slate-800 dark:text-slate-200">D&S Professionals</p>
              <p>Inhaber: Ainikaer Kasimujiang</p>
              <p>Wicherstr. 19, 76185 Karlsruhe</p>
              <p>
                Telefon:{' '}
                <a href="tel:+4917914555532" className="hover:text-amber-500 transition-colors">
                  +49 179 1455532
                </a>
              </p>
              <p>
                E-Mail:{' '}
                <a href="mailto:ds-professionals@outlook.de" className="hover:text-amber-500 transition-colors">
                  ds-professionals@outlook.de
                </a>
              </p>
            </div>
          </Section>

          {/* 2. Allgemeines */}
          <Section title="2. Allgemeines zur Datenverarbeitung" delay={0.05}>
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p>
              Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten
              möglich. Soweit auf unseren Seiten personenbezogene Daten (z. B. Name, E-Mail-Adresse)
              erhoben werden, erfolgt dies stets auf freiwilliger Basis.
            </p>
            <p>
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der
              Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
            </p>
          </Section>

          {/* 3. Hosting */}
          <Section title="3. Hosting" delay={0.1}>
            <p>
              Diese Website wird bei <strong className="text-slate-700 dark:text-slate-300">Vercel Inc.</strong> gehostet.
              Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
            </p>
            <p>
              Wenn Sie unsere Website besuchen, erfasst Vercel automatisch sogenannte
              Server-Log-Dateien, die Ihr Browser übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage
              ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren Betrieb).
            </p>
          </Section>

          {/* 4. Kontaktformular */}
          <Section title="4. Kontaktformular und E-Mail-Kontakt" delay={0.15}>
            <p>
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre
              Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
              zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p>
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
              Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
              beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p>
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns
              zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
              für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen — insbesondere
              Aufbewahrungsfristen — bleiben unberührt.
            </p>
          </Section>

          {/* 5. EmailJS */}
          <Section title="5. E-Mail-Versand via EmailJS" delay={0.2}>
            <p>
              Für den Versand von Kontaktformular-Nachrichten nutzen wir den Dienst{' '}
              <strong className="text-slate-700 dark:text-slate-300">EmailJS</strong> (EmailJS Ltd.,
              Großbritannien).
            </p>
            <p>
              Beim Absenden des Kontaktformulars werden Ihre eingegebenen Daten (Name, E-Mail,
              Telefon, Nachricht) an die Server von EmailJS übermittelt und von dort als E-Mail
              an uns weitergeleitet. EmailJS speichert diese Daten nicht dauerhaft.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>
            <p>
              Weitere Informationen:{' '}
              <a
                href="https://www.emailjs.com/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:underline"
              >
                EmailJS Datenschutzrichtlinie
              </a>
            </p>
          </Section>

          {/* 6. Google Maps */}
          <Section title="6. Google Maps" delay={0.25}>
            <p>
              Diese Seite nutzt den Kartendienst <strong className="text-slate-700 dark:text-slate-300">Google Maps</strong> der
              Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p>
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu
              speichern. Diese Informationen werden in der Regel an einen Server von Google in
              den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen
              Einfluss auf diese Datenübertragung.
            </p>
            <p>
              Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung
              unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der
              Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von
              Art. 6 Abs. 1 lit. f DSGVO dar.
            </p>
            <p>
              Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:underline"
              >
                Datenschutzerklärung von Google
              </a>
              .
            </p>
          </Section>

          {/* 7. Cookies */}
          <Section title="7. Cookies" delay={0.3}>
            <p>
              Unsere Website verwendet keine Tracking-Cookies oder Analyse-Cookies.
              Es werden ausschließlich technisch notwendige Cookies verwendet, die für den
              Betrieb der Website erforderlich sind (z. B. Theme-Einstellung).
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am
              technischen Betrieb der Website).
            </p>
          </Section>

          {/* 8. Rechte */}
          <Section title="8. Ihre Rechte" delay={0.35}>
            <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li><strong className="text-slate-700 dark:text-slate-300">Auskunftsrecht</strong> — Art. 15 DSGVO</li>
              <li><strong className="text-slate-700 dark:text-slate-300">Recht auf Berichtigung</strong> — Art. 16 DSGVO</li>
              <li><strong className="text-slate-700 dark:text-slate-300">Recht auf Löschung</strong> — Art. 17 DSGVO</li>
              <li><strong className="text-slate-700 dark:text-slate-300">Recht auf Einschränkung der Verarbeitung</strong> — Art. 18 DSGVO</li>
              <li><strong className="text-slate-700 dark:text-slate-300">Recht auf Datenübertragbarkeit</strong> — Art. 20 DSGVO</li>
              <li><strong className="text-slate-700 dark:text-slate-300">Widerspruchsrecht</strong> — Art. 21 DSGVO</li>
            </ul>
            <p>
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
              <a
                href="mailto:ds-professionals@outlook.de"
                className="text-amber-500 hover:underline"
              >
                ds-professionals@outlook.de
              </a>
            </p>
            <p>
              Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
              beschweren. Die zuständige Aufsichtsbehörde für Baden-Württemberg ist:
            </p>
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 space-y-1
                            border border-slate-100 dark:border-slate-600">
              <p className="font-semibold text-slate-700 dark:text-slate-300">
                Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg
              </p>
              <p>Königstraße 10a, 70173 Stuttgart</p>
              <p>
                <a
                  href="https://www.baden-wuerttemberg.datenschutz.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:underline"
                >
                  www.baden-wuerttemberg.datenschutz.de
                </a>
              </p>
            </div>
          </Section>

          {/* 9. Aktualität */}
          <Section title="9. Aktualität dieser Datenschutzerklärung" delay={0.4}>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juni 2026.
            </p>
            <p>
              Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher
              bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung
              zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website
              unter{' '}
              <Link to="/datenschutz" className="text-amber-500 hover:underline">
                /datenschutz
              </Link>{' '}
              abgerufen werden.
            </p>
          </Section>

          {/* Back link */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.45}
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
          </motion.div>

        </div>
      </main>
    </>
  );
}
