// src/pages/ContactPage.jsx
// Contact page — form (React Hook Form + EmailJS), map, opening hours, address

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useContactForm } from '../hooks/useContactForm';

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeInUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

// ─── Data ─────────────────────────────────────────────────────────────────────

// Contact info items
const contactInfo = [
  {
    id: 1,
    icon: '📍',
    label: 'Adresse',
    lines: ['Wicherstr. 19', '76185 Karlsruhe'],
  },
  {
    id: 2,
    icon: '📞',
    label: 'Telefon',
    lines: ['+49 177 3512329'],
    href: 'tel:+491773512329',
  },
  {
    id: 3,
    icon: '✉️',
    label: 'E-Mail',
    lines: ['ds-professionals@outlook.de'],
    href: 'mailto:ds-professionals@outlook.de',
  },
];

// Opening hours
const openingHours = [
  { day: 'Montag – Freitag', hours: '10:00 – 18:00 Uhr' },
  { day: 'Samstag',          hours: '10:00 – 16:00 Uhr' },
  { day: 'Sonntag',          hours: 'Geschlossen' },
];

// Service options for the select field
const serviceOptions = [
  'Industriereinigung',
  'Hallenreinigung',
  'Fitnessstudio-Reinigung',
  'Büroreinigung',
  'Treppenhausreinigung',
  'Praxisreinigung',
  'Bildungseinrichtungen',
  'Sonstiges',
];

// ─── Sub-Components ───────────────────────────────────────────────────────────

// Input field wrapper with label + error message
function FormField({ label, error, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-red-500 text-xs flex items-center gap-1"
            role="alert"
          >
            ⚠️ {error.message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

// Shared input class helper
const inputClass = `
  w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600
  bg-white dark:bg-slate-700/50
  text-slate-900 dark:text-white
  placeholder:text-slate-400 dark:placeholder:text-slate-500
  focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-400
  transition-colors duration-200
`;

const inputErrorClass = `
  w-full px-4 py-3 rounded-xl border border-red-400 dark:border-red-500
  bg-white dark:bg-slate-700/50
  text-slate-900 dark:text-white
  placeholder:text-slate-400 dark:placeholder:text-slate-500
  focus:outline-none focus:ring-2 focus:ring-red-400/60 focus:border-red-400
  transition-colors duration-200
`;

// Success state shown after form submission
function SuccessMessage({ onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center text-center py-16 px-8"
    >
      {/* Checkmark icon */}
      <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30
                      flex items-center justify-center mb-6 shadow-lg">
        <svg className="w-10 h-10 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
        Nachricht gesendet!
      </h3>
      <p className="text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed mb-8">
        Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von
        <strong className="text-amber-500"> 24 Stunden </strong>
        bei Ihnen.
      </p>
      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 text-sm font-medium
                   text-amber-600 dark:text-amber-400 hover:underline
                   transition-colors duration-200"
      >
        ← Neue Nachricht senden
      </button>
    </motion.div>
  );
}

// Error banner shown when EmailJS fails
function ErrorBanner({ message }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-start gap-3 p-4 rounded-xl
                 bg-red-50 dark:bg-red-900/20
                 border border-red-200 dark:border-red-800
                 text-red-700 dark:text-red-400 text-sm"
      role="alert"
    >
      <span className="text-lg shrink-0">⚠️</span>
      <p>{message}</p>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ContactPage() {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    status,
    errorMessage,
    resetStatus,
  } = useContactForm();

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isError   = status === 'error';

  return (
    <>
      {/* ── SEO ── */}
      <Helmet>
        <title>Kontakt — D&S Professionals | Reinigungsdienst Karlsruhe</title>
        <meta
          name="description"
          content="Kontaktieren Sie D&S Professionals in Karlsruhe. Kostenloses Angebot anfragen, Telefon, E-Mail oder direkt vorbeikommen. Antwort innerhalb von 24 Stunden."
        />
        <meta property="og:title" content="Kontakt — D&S Professionals" />
        <meta
          property="og:description"
          content="Jetzt kostenloses Angebot anfragen. Professionelle Reinigung in Karlsruhe — wir melden uns innerhalb von 24 Stunden."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">

        {/* ── Hero ── */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900
                            pt-32 pb-20 overflow-hidden">
          {/* Decorative blurs */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

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
              <span className="text-amber-400">Kontakt</span>
            </motion.nav>

            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
            >
              Sprechen wir über{' '}
              <span className="text-amber-400">Ihr Projekt</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-xl text-slate-300 max-w-2xl leading-relaxed"
            >
              Kostenloses Angebot, unverbindliche Beratung — wir melden uns
              innerhalb von 24 Stunden bei Ihnen.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="flex flex-wrap gap-4 mt-8"
            >
              {['✅ Kostenlos', '⚡ 24h Antwort', '📍 Karlsruhe & Umgebung', '🔒 Diskret & zuverlässig'].map((badge) => (
                <span
                  key={badge}
                  className="text-sm text-slate-300 bg-white/10 backdrop-blur-sm
                             px-4 py-2 rounded-full border border-white/20"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Main Content ── */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">

              {/* ── Left: Contact Info + Hours + Map ── */}
              <div className="lg:col-span-1 space-y-8">

                {/* Contact Info Card */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  custom={0}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md
                             border border-slate-100 dark:border-slate-700"
                >
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-5">
                    Kontaktdaten
                  </h2>
                  <div className="space-y-5">
                    {contactInfo.map((item) => (
                      <div key={item.id} className="flex items-start gap-4">
                        <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                        <div>
                          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400
                                        uppercase tracking-wider mb-1">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-slate-800 dark:text-slate-200 font-medium
                                         hover:text-amber-500 dark:hover:text-amber-400
                                         transition-colors duration-200"
                            >
                              {item.lines[0]}
                            </a>
                          ) : (
                            item.lines.map((line) => (
                              <p key={line} className="text-slate-800 dark:text-slate-200 font-medium">
                                {line}
                              </p>
                            ))
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Opening Hours Card */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  custom={0.1}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md
                             border border-slate-100 dark:border-slate-700"
                >
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-5">
                    🕐 Öffnungszeiten
                  </h2>
                  <div className="space-y-3">
                    {openingHours.map((item) => (
                      <div
                        key={item.day}
                        className="flex justify-between items-center
                                   text-sm border-b border-slate-100 dark:border-slate-700
                                   pb-3 last:border-0 last:pb-0"
                      >
                        <span className="text-slate-600 dark:text-slate-400">{item.day}</span>
                        <span className={`font-semibold ${
                          item.hours === 'Geschlossen'
                            ? 'text-red-500'
                            : 'text-slate-900 dark:text-white'
                        }`}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Google Maps Embed — exakte Adresse: Wicherstr. 19, 76185 Karlsruhe */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  custom={0.2}
                  className="rounded-2xl overflow-hidden shadow-md border
                            border-slate-100 dark:border-slate-700"
                >
                  <iframe
                    title="D&S Professionals — Wicherstr. 19, 76185 Karlsruhe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.5!2d8.3682858!3d49.0070605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479706ee7ca2093b%3A0x345c0ba2b8e5f540!2sWichernstra%C3%9Fe+19%2C+76185+Karlsruhe!5e0!3m2!1sde!2sde!4v1"
                    width="100%"
                    height="220"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </motion.div>

              </div>

              {/* ── Right: Contact Form ── */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={0.15}
                className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl shadow-md
                           border border-slate-100 dark:border-slate-700 overflow-hidden"
              >
                <AnimatePresence mode="wait">

                  {/* ── Success State ── */}
                  {isSuccess ? (
                    <SuccessMessage key="success" onReset={resetStatus} />
                  ) : (

                    /* ── Form State ── */
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-8"
                    >
                      {/* Form header */}
                      <div className="mb-8">
                        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                          Angebot anfragen
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                          Füllen Sie das Formular aus — wir melden uns innerhalb von 24 Stunden.
                        </p>
                      </div>

                      {/* Error banner */}
                      {isError && <div className="mb-6"><ErrorBanner message={errorMessage} /></div>}

                      {/* Form */}
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        className="space-y-6"
                      >
                        {/* Row 1: Name + Email */}
                        <div className="grid sm:grid-cols-2 gap-6">
                          <FormField label="Name" error={errors.name} required>
                            <input
                              type="text"
                              placeholder="Max Mustermann"
                              className={errors.name ? inputErrorClass : inputClass}
                              {...register('name', {
                                required: 'Bitte geben Sie Ihren Namen ein.',
                                minLength: {
                                  value: 2,
                                  message: 'Name muss mindestens 2 Zeichen lang sein.',
                                },
                              })}
                            />
                          </FormField>

                          <FormField label="E-Mail" error={errors.email} required>
                            <input
                              type="email"
                              placeholder="max@beispiel.de"
                              className={errors.email ? inputErrorClass : inputClass}
                              {...register('email', {
                                required: 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
                                pattern: {
                                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                  message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
                                },
                              })}
                            />
                          </FormField>
                        </div>

                        {/* Row 2: Phone + Service */}
                        <div className="grid sm:grid-cols-2 gap-6">
                          <FormField label="Telefon" error={errors.phone}>
                            <input
                              type="tel"
                              placeholder="+49 179 1455532"
                              className={errors.phone ? inputErrorClass : inputClass}
                              {...register('phone', {
                                pattern: {
                                  value: /^[+\d\s\-()]{6,20}$/,
                                  message: 'Bitte geben Sie eine gültige Telefonnummer ein.',
                                },
                              })}
                            />
                          </FormField>

                          <FormField label="Gewünschte Dienstleistung" error={errors.service}>
                            <select
                              className={errors.service ? inputErrorClass : inputClass}
                              {...register('service')}
                            >
                              <option value="">Bitte wählen...</option>
                              {serviceOptions.map((option) => (
                                <option key={option} value={option}>{option}</option>
                              ))}
                            </select>
                          </FormField>
                        </div>

                        {/* Row 3: Message */}
                        <FormField label="Nachricht" error={errors.message} required>
                          <textarea
                            rows={5}
                            placeholder="Beschreiben Sie kurz Ihr Anliegen — z.B. Größe der Fläche, Häufigkeit, besondere Anforderungen..."
                            className={`resize-none ${errors.message ? inputErrorClass : inputClass}`}
                            {...register('message', {
                              required: 'Bitte geben Sie eine Nachricht ein.',
                              minLength: {
                                value: 10,
                                message: 'Die Nachricht muss mindestens 10 Zeichen lang sein.',
                              },
                            })}
                          />
                        </FormField>

                        {/* Privacy note */}
                        <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
                          Mit dem Absenden stimmen Sie unserer{' '}
                          <Link
                            to="/datenschutz"
                            className="text-amber-500 hover:underline"
                          >
                            Datenschutzerklärung
                          </Link>{' '}
                          zu. Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
                        </p>

                        {/* Submit button */}
                        <button
                          type="submit"
                          disabled={isLoading}
                          aria-busy={isLoading}
                          className="w-full flex items-center justify-center gap-3
                                     bg-amber-500 hover:bg-amber-400 disabled:bg-amber-300
                                     dark:disabled:bg-amber-700
                                     text-slate-900 font-bold
                                     px-8 py-4 rounded-xl
                                     transition-colors duration-200
                                     shadow-lg shadow-amber-500/25
                                     disabled:cursor-not-allowed"
                        >
                          {isLoading ? (
                            <>
                              <svg
                                className="w-5 h-5 animate-spin"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12" cy="12" r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8v8H4z"
                                />
                              </svg>
                              Wird gesendet...
                            </>
                          ) : (
                            <>✉️ Anfrage absenden</>
                          )}
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}