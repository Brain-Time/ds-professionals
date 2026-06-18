/**
 * NotFoundPage.jsx
 * 404 page with animated content and back-to-home CTA
 */
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>404 – Seite nicht gefunden | D&S Professionals</title>
      <meta name="robots" content="noindex" />
    </Helmet>

    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] dark:bg-[#0F172A] px-4">
      <motion.div
        className="text-center max-w-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* 404 number */}
        <motion.p
          className="text-8xl font-extrabold text-[#1B4FD8]/20 dark:text-[#1B4FD8]/30 mb-4 select-none"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          404
        </motion.p>

        <h1 className="text-3xl font-extrabold text-[#0D1B2A] dark:text-white mb-4">
          Seite nicht gefunden
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
          Kehren Sie zur Startseite zurück.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1B4FD8] hover:bg-[#1640b8] text-white font-bold transition-colors duration-200"
            >
              ← Zurück zur Startseite
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white font-bold transition-all duration-200"
            >
              Kontakt aufnehmen
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </>
);

export default NotFoundPage;
