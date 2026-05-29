/**
 * ThemeToggle.jsx
 * ─────────────────────────────────────────────────────────────
 * Animierter Light/Dark Mode Toggle Button
 * - Sonne (☀️) für Light Mode  → SVG, keine externe Library
 * - Mond (🌙) für Dark Mode    → SVG, keine externe Library
 * - Smooth Framer Motion Animation beim Wechsel
 * - Accessible: aria-label, role="switch"
 * ─────────────────────────────────────────────────────────────
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

// ── SVG: Sonne Icon ────────────────────────────────────────────
const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Sonnen-Kern */}
    <circle cx="12" cy="12" r="5" />
    {/* Sonnenstrahlen */}
    <line x1="12" y1="1"  x2="12" y2="3"  />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22"   x2="5.64" y2="5.64"   />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1"  y1="12" x2="3"  y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

// ── SVG: Mond Icon ─────────────────────────────────────────────
const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Mond-Sichel */}
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

// ── Animation Varianten ────────────────────────────────────────
const iconVariants = {
  initial: { opacity: 0, rotate: -90, scale: 0.5 },
  animate: { opacity: 1, rotate: 0,   scale: 1    },
  exit:    { opacity: 0, rotate:  90, scale: 0.5  },
};

const iconTransition = {
  duration: 0.3,
  ease: 'easeInOut',
};

// ── ThemeToggle Komponente ─────────────────────────────────────
const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Zu Light Mode wechseln' : 'Zu Dark Mode wechseln'}
      title={isDark ? 'Light Mode aktivieren' : 'Dark Mode aktivieren'}
      className={[
        // Layout & Form
        'relative flex items-center justify-center',
        'w-10 h-10 rounded-full',
        // Farben – Light Mode
        'bg-slate-100 text-slate-600',
        // Farben – Dark Mode
        'dark:bg-slate-700 dark:text-slate-300',
        // Hover-Effekte
        'hover:bg-slate-200 dark:hover:bg-slate-600',
        'hover:text-[#1B4FD8] dark:hover:text-[#C9A84C]',
        // Übergang
        'transition-colors duration-200',
        // Fokus-Ring (Accessibility)
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4FD8]',
        'focus-visible:ring-offset-2',
        // Cursor
        'cursor-pointer',
      ].join(' ')}
      // Hover-Scale via Framer Motion
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {/* Icon-Wechsel mit AnimatePresence */}
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={iconTransition}
            className="flex items-center justify-center"
          >
            <MoonIcon />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={iconTransition}
            className="flex items-center justify-center"
          >
            <SunIcon />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;