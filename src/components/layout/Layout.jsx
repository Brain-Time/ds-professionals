/**
 * Layout.jsx
 * ─────────────────────────────────────────────────────────────
 * Haupt-Layout-Wrapper für D&S Professionals
 *
 * Struktur:
 *   <Layout>
 *     <Navbar />          ← Sticky Header
 *     <main>{children}</main>  ← Seiteninhalt
 *     <Footer />          ← Footer
 *   </Layout>
 *
 * Extras:
 *   - ScrollToTop: Bei Route-Wechsel automatisch nach oben scrollen
 *   - Page Transition: Sanftes Fade-in via Framer Motion
 *   - pt-16/pt-20: Kompensiert die sticky Navbar-Höhe
 * ─────────────────────────────────────────────────────────────
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

// ── ScrollToTop Komponente ─────────────────────────────────────
/**
 * Scrollt bei jedem Route-Wechsel automatisch zum Seitenanfang.
 * Wird innerhalb des Layouts verwendet (kein eigenes Rendering).
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll zum Anfang bei Route-Wechsel
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null; // Kein UI-Output
};

// ── Page Transition Varianten ──────────────────────────────────
const pageVariants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

// ── Layout Komponente ──────────────────────────────────────────
const Layout = ({ children }) => {
  const location = useLocation();

  return (
    // Root-Div: Flex-Column für sticky Footer
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors duration-300">

      {/* ── ScrollToTop (kein Render) ──────────────────── */}
      <ScrollToTop />

      {/* ── Sticky Navbar ─────────────────────────────── */}
      <Navbar />

      {/* ── Hauptinhalt ───────────────────────────────── */}
      {/*
        pt-16 lg:pt-20 kompensiert die Navbar-Höhe (h-16 / h-20)
        flex-1 sorgt dafür, dass der Footer immer unten bleibt
      */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex-1 pt-16 lg:pt-20"
          id="main-content"
          role="main"
          aria-label="Hauptinhalt"
          // Accessibility: Skip-to-content Ziel
          tabIndex={-1}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* ── Footer ────────────────────────────────────── */}
      <Footer />
    </div>
  );
};

export default Layout;