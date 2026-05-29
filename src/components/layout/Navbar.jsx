// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import ThemeToggle from '@/components/ui/ThemeToggle';

import logoHell   from '@/assets/D&S PROFESSIONALS_a.png';
import logoDunkel from '@/assets/D&S PROFESSIONALS_b.png';

const NAV_LINKS = [
  { to: '/',                 label: 'Home'             },
  { to: '/dienstleistungen', label: 'Dienstleistungen' },
  { to: '/ueber-uns',        label: 'Über uns'         },
  { to: '/kontakt',          label: 'Kontakt'          },
];

export default function Navbar() {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const logo = theme === 'dark' ? logoDunkel : logoHell;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
      style={{ background: 'var(--navbar-bg)', borderBottom: '1px solid var(--border)' }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* ── Logo + Firmenname ── */}
        <Link
          to="/"
          onClick={closeMenu}
          className="inline-flex items-center gap-2.5 group"
          aria-label="D&S Professionals – Startseite"
        >
          {/* Quadratisches Logo-Bild */}
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="h-9 w-9 object-contain rounded-sm"
          />
          {/* Firmenname daneben */}
          <div className="flex flex-col leading-tight">
            <span
              className="text-sm font-semibold tracking-tight"
              style={{ color: 'var(--text)' }}
            >
              D&amp;S Professionals
            </span>
            <span className="text-[10px] tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
              Reinigungsdienst Karlsruhe
            </span>
          </div>
        </Link>

        {/* ── Desktop Links ── */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className="text-sm font-medium transition-colors duration-200"
                style={({ isActive }) => ({
                  color: isActive ? 'var(--gold)' : 'var(--text)',
                  opacity: isActive ? 1 : undefined,
                })}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Desktop Right ── */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/kontakt"
            className="px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: 'var(--gold)', color: '#0a0a0a' }}
          >
            Angebot anfragen
          </Link>
        </div>

        {/* ── Mobile Right ── */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menü öffnen"
            style={{ color: 'var(--text)' }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-4 flex flex-col gap-3"
          style={{ background: 'var(--navbar-bg)', borderTop: '1px solid var(--border)' }}
        >
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={closeMenu}
              className="py-2 text-sm font-medium"
              style={({ isActive }) => ({
                color: isActive ? 'var(--gold)' : 'var(--text)',
              })}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/kontakt"
            onClick={closeMenu}
            className="mt-2 px-4 py-2 rounded-lg text-sm font-semibold text-center"
            style={{ background: 'var(--gold)', color: '#0a0a0a' }}
          >
            Angebot anfragen
          </Link>
        </div>
      )}
    </header>
  );
}