/**
 * NotFoundPage.jsx
 * ─────────────────────────────────────────────────────────────
 * 404-Seite — wird angezeigt wenn keine Route matched
 * ─────────────────────────────────────────────────────────────
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 — Seite nicht gefunden | D&S Professionals</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
        {/* Decorative blur */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96
                        bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative text-center max-w-lg">

          {/* 404 number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-[10rem] font-extrabold leading-none
                       text-transparent bg-clip-text
                       bg-gradient-to-br from-amber-400 to-amber-600
                       select-none mb-2"
          >
            404
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl font-extrabold text-white mb-4"
          >
            Seite nicht gefunden
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
            className="text-slate-400 leading-relaxed mb-10"
          >
            Die gesuchte Seite existiert nicht oder wurde verschoben.
            Kein Problem — wir bringen Sie zurück auf den richtigen Weg.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2
                         bg-amber-500 hover:bg-amber-400
                         text-slate-900 font-bold
                         px-6 py-3 rounded-xl
                         transition-colors duration-200
                         shadow-lg shadow-amber-500/25"
            >
              ← Zurück zur Startseite
            </Link>

            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2
                         bg-white/10 hover:bg-white/20
                         text-white font-medium
                         px-6 py-3 rounded-xl
                         border border-white/20
                         transition-colors duration-200"
            >
              Kontakt aufnehmen
            </Link>
          </motion.div>

        </div>
      </main>
    </>
  );
}