/**
 * Navbar.jsx
 * ─────────────────────────────────────────────────────────────
 * Sticky Navigation for D&S Professionals
 *
 * Features:
 *   - Transparent on hero → solid bg + shadow on scroll
 *   - Logo text: white when transparent, dark/white by theme when scrolled
 *   - Logo image: always _a.png (white/gold) when transparent,
 *                 swaps _a/_b based on theme when scrolled
 *   - Desktop links: Home | Dienstleistungen | Über uns | Kontakt
 *   - Active link highlighting via useLocation + layoutId
 *   - ThemeToggle (right side)
 *   - CTA Button "Angebot anfragen" (Gold)
 *   - Mobile: Hamburger → Framer Motion slide-in menu
 *   - Body scroll lock when mobile menu is open
 * ─────────────────────────────────────────────────────────────
 */

import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';

// ── Logo images ────────────────────────────────────────────────
import logoLight from '../../assets/D&S PROFESSIONALS_b.png'; // black/gold → light mode scrolled
import logoDark  from '../../assets/D&S PROFESSIONALS_a.png'; // white/gold → dark mode + transparent

// ── Navigation links ───────────────────────────────────────────
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
    width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true"
  >
    <AnimatePresence mode="wait" initial={false}>
      {isOpen ? (
        <motion.g key="close"
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
        >
          <line x1="18" y1="6"  x2="6"  y2="18" />
          <line x1="6"  y1="6"  x2="18" y2="18" />
        </motion.g>
      ) : (
        <motion.g key="open"
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

// ── Mobile menu variants ───────────────────────────────────────
const mobileMenuVariants = {
  hidden:  { opacity: 0, height: 0,      transition: { duration: 0.3, ease: 'easeInOut' } },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeInOut' } },
};

const mobileLinkVariants = {
  hidden:  { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.07, duration: 0.3, ease: 'easeOut' },
  }),
};

// ── Navbar component ───────────────────────────────────────────
const Navbar = () => {
  const [isScrolled,   setIsScrolled]   = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDark,       setIsDark]       = useState(false);
  const location = useLocation();

  // Detect theme for logo swap
  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains('dark'));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true, attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsMobileOpen(false); }, [location.pathname]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  // When transparent (hero): always use white logo + white text
  // When scrolled: swap logo based on theme
  const isTransparent = !isScrolled && !isMobileOpen;
  const logoSrc = isTransparent ? logoDark : (isDark ? logoDark : logoLight);

  // ── Active link class ────────────────────────────────────────
  const getNavLinkClass = ({ isActive }) =>
    [
      'relative text-sm font-medium transition-colors duration-200',
      isTransparent
        ? 'text-white/80 hover:text-white'
        : 'text-slate-700 dark:text-slate-300 hover:text-[#1B4FD8] dark:hover:text-[#1B4FD8]',
      isActive && !isTransparent ? 'text-[#1B4FD8] dark:text-[#1B4FD8]' : '',
      isActive && isTransparent  ? '!text-white' : '',
    ].join(' ');

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
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

          {/* ── Logo ────────────────────────────────────── */}
          <Link
            to="/"
            className="flex items-center gap-3 flex-shrink-0 group"
            aria-label="D&S Professionals – Home"
          >
            <motion.img
              key={logoSrc}
              src={logoSrc}
              alt="D&S Professionals Logo"
              className="h-9 lg:h-11 w-auto object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              fetchpriority="high"
              width="160"    
              height="44" 
            />

            {/* Divider */}
            <span
              className={[
                'w-px h-8 transition-colors duration-300',
                isTransparent
                  ? 'bg-white/30'
                  : 'bg-slate-300 dark:bg-slate-600',
              ].join(' ')}
              aria-hidden="true"
            />

            {/* Text */}
            <div className="flex flex-col leading-tight">
              <span className={[
                'text-sm font-extrabold tracking-tight transition-colors duration-300',
                isTransparent ? 'text-white' : 'text-[#0D1B2A] dark:text-white',
              ].join(' ')}>
                D&amp;S Professionals
              </span>
              <span className={[
                'text-[10px] font-normal tracking-widest uppercase transition-colors duration-300',
                isTransparent ? 'text-white/60' : 'text-slate-500 dark:text-slate-400',
              ].join(' ')}>
                Reinigungsdienst Karlsruhe
              </span>
            </div>
          </Link>

          {/* ── Desktop nav links ────────────────────────── */}
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
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className={[
                          'absolute -bottom-1 left-0 right-0 h-0.5 rounded-full',
                          isTransparent ? 'bg-white' : 'bg-[#1B4FD8]',
                        ].join(' ')}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* ── Right: ThemeToggle + CTA ─────────────────── */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/kontakt"
                className={[
                  'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg',
                  'bg-[#C9A84C] hover:bg-[#b8943d]',
                  'text-white text-sm font-bold',
                  'shadow-md hover:shadow-lg shadow-[#C9A84C]/25',
                  'transition-all duration-200',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2',
                ].join(' ')}
              >
                Angebot anfragen
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* ── Mobile: ThemeToggle + Hamburger ─────────── */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMobileOpen((p) => !p)}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileOpen ? 'Menü schließen' : 'Menü öffnen'}
              className={[
                'flex items-center justify-center w-10 h-10 rounded-full',
                'transition-colors duration-200',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4FD8]',
                isTransparent
                  ? 'text-white hover:bg-white/10'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700',
              ].join(' ')}
              whileTap={{ scale: 0.9 }}
            >
              <HamburgerIcon isOpen={isMobileOpen} />
            </motion.button>
          </div>
        </div>

        {/* ── Mobile menu ──────────────────────────────── */}
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

                {/* Mobile header */}
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
                            ? 'bg-[#1B4FD8]/10 text-[#1B4FD8] dark:bg-[#1B4FD8]/20'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800',
                        ].join(' ')
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      aria-hidden="true">
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
