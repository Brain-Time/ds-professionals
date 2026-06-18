/**
 * Navbar.jsx
 * ─────────────────────────────────────────────────────────────
 * Sticky Navigation for D&S Professionals
 *
 * Features:
 *   - Sticky with background + shadow on scroll
 *   - Logo: image + text "D&S Professionals / Reinigungsdienst Karlsruhe"
 *   - Desktop links: Home | Dienstleistungen | Über uns | Kontakt
 *   - Active link highlighting via useLocation
 *   - ThemeToggle (right side)
 *   - CTA Button "Angebot anfragen" (Gold)
 *   - Mobile: Hamburger → Framer Motion slide-in menu
 *   - Mobile menu header: text-only logo (no image)
 * ─────────────────────────────────────────────────────────────
 */

import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';

// ── Logo images ────────────────────────────────────────────────
import logoLight from '../../assets/D&S PROFESSIONALS_b.png'; // black/gold → light mode
import logoDark  from '../../assets/D&S PROFESSIONALS_a.png'; // white/gold → dark mode

// ── Navigation links config ────────────────────────────────────
const NAV_LINKS = [
  { label: 'Home',             to: '/'                 },
  { label: 'Dienstleistungen', to: '/dienstleistungen' },
  { label: 'Über uns',         to: '/ueber-uns'        },
  { label: 'Kontakt',          to: '/kontakt'          },
];

// ── Hamburger / Close icon ─────────────────────────────────────
const HamburgerIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <AnimatePresence mode="wait" initial={false}>
      {isOpen ? (
        <motion.g
          key="close"
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
        >
          <line x1="18" y1="6"  x2="6"  y2="18" />
          <line x1="6"  y1="6"  x2="18" y2="18" />
        </motion.g>
      ) : (
        <motion.g
          key="open"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <line x1="3" y1="6"  x2="21" y2="6"  />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </motion.g>
      )}
    </AnimatePresence>
  </svg>
);

// ── Mobile menu animation variants ────────────────────────────
const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

const mobileLinkVariants = {
  hidden:  { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.07, duration: 0.3, ease: 'easeOut' },
  }),
};

// ── Navbar component ───────────────────────────────────────────
const Navbar = () => {
  const [isScrolled,   setIsScrolled]   = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDark,       setIsDark]       = useState(false);
  const location = useLocation();

  // Detect current theme to swap logo image
  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains('dark'));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  // Scroll listener: activate background + shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  // ── Active link classes ──────────────────────────────────────
  const getNavLinkClass = ({ isActive }) =>
    [
      'relative text-sm font-medium transition-colors duration-200',
      'hover:text-[#1B4FD8] dark:hover:text-[#1B4FD8]',
      isActive
        ? 'text-[#1B4FD8] dark:text-[#1B4FD8]'
        : 'text-slate-700 dark:text-slate-300',
    ].join(' ');

  // ── Render ───────────────────────────────────────────────────
  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-300',
        isScrolled
          ? 'bg-white/95 dark:bg-[#0D1B2A]/95 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-700/50'
          : 'bg-transparent',
      ].join(' ')}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── Logo: image + text side by side ─────────── */}
          <Link
            to="/"
            className="flex items-center gap-3 flex-shrink-0 group"
            aria-label="D&S Professionals – Home"
          >
            {/* Logo image: swaps on theme change */}
            <motion.img
              key={isDark ? 'logo-dark' : 'logo-light'}
              src={isDark ? logoDark : logoLight}
              alt="D&S Professionals Logo"
              className="h-9 lg:h-11 w-auto object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Divider */}
            <span className="w-px h-8 bg-slate-300 dark:bg-slate-600" aria-hidden="true" />

            {/* Text block */}
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-extrabold text-[#0D1B2A] dark:text-white tracking-tight">
                D&amp;S Professionals
              </span>
              <span className="text-[10px] font-normal text-slate-500 dark:text-slate-400 tracking-widest uppercase">
                Reinigungsdienst Karlsruhe
              </span>
            </div>
          </Link>

          {/* ── Desktop navigation ──────────────────────── */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={getNavLinkClass}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {/* Active underline indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#1B4FD8] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* ── Right side: ThemeToggle + CTA ───────────── */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />

            {/* Gold CTA button */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/kontakt"
                className={[
                  'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg',
                  'bg-[#C9A84C] hover:bg-[#b8943d]',
                  'text-white text-sm font-bold',
                  'shadow-md hover:shadow-lg',
                  'transition-all duration-200',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2',
                ].join(' ')}
              >
                Angebot anfragen
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* ── Mobile: ThemeToggle + Hamburger ─────────── */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              className={[
                'flex items-center justify-center w-10 h-10 rounded-full',
                'text-slate-700 dark:text-slate-300',
                'hover:bg-slate-100 dark:hover:bg-slate-700',
                'transition-colors duration-200',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4FD8]',
              ].join(' ')}
              whileTap={{ scale: 0.9 }}
            >
              <HamburgerIcon isOpen={isMobileOpen} />
            </motion.button>
          </div>
        </div>

        {/* ── Mobile menu (slide-in) ───────────────────── */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={[
                'lg:hidden overflow-hidden',
                'bg-white dark:bg-[#0D1B2A]',
                'border-t border-slate-200 dark:border-slate-700',
              ].join(' ')}
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="px-4 py-6 space-y-1">

                {/* Mobile menu header: text-only logo */}
                <div className="flex flex-col px-4 pb-4 mb-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-base font-extrabold text-[#0D1B2A] dark:text-white tracking-tight">
                    D&amp;S Professionals
                  </span>
                  <span className="text-[10px] font-normal text-slate-500 dark:text-slate-400 tracking-widest uppercase mt-0.5">
                    Reinigungsdienst Karlsruhe
                  </span>
                </div>

                {/* Nav links */}
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.to}
                    custom={i}
                    variants={mobileLinkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        [
                          'flex items-center px-4 py-3 rounded-lg text-base font-medium',
                          'transition-colors duration-200',
                          isActive
                            ? 'bg-[#1B4FD8]/10 text-[#1B4FD8] dark:bg-[#1B4FD8]/20 dark:text-[#1B4FD8]'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800',
                        ].join(' ')
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}

                {/* Mobile CTA button */}
                <motion.div
                  custom={NAV_LINKS.length}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                  className="pt-4"
                >
                  <Link
                    to="/kontakt"
                    className={[
                      'flex items-center justify-center gap-2',
                      'w-full px-4 py-3 rounded-lg',
                      'bg-[#C9A84C] hover:bg-[#b8943d]',
                      'text-white text-base font-bold',
                      'transition-colors duration-200',
                    ].join(' ')}
                  >
                    Angebot anfragen
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;