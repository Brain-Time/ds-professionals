/**
 * ThemeContext.jsx
 * ─────────────────────────────────────────────────────────────
 * Globaler Theme-Context für D&S Professionals
 * Unterstützt: Light / Dark Mode
 * Features:
 *   - localStorage Persistenz
 *   - System-Preference Detection (prefers-color-scheme)
 *   - Standard: Light Mode
 *   - Automatisches Setzen der `data-theme` Klasse auf <html>
 * ─────────────────────────────────────────────────────────────
 */

import { createContext, useState, useEffect, useCallback } from 'react';

// ── Context erstellen ──────────────────────────────────────────
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
  isDark: false,
});

// ── Hilfsfunktion: Initialen Theme-Wert ermitteln ──────────────
const getInitialTheme = () => {
  // 1. Prüfe localStorage (User-Präferenz hat höchste Priorität)
  const stored = localStorage.getItem('ds-theme');
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }

  // 2. Prüfe System-Präferenz (prefers-color-scheme)
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }

  // 3. Standard: Light Mode
  return 'light';
};

// ── ThemeProvider Komponente ───────────────────────────────────
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  /**
   * Effekt: Theme auf <html> Element anwenden
   * Tailwind CSS v4 nutzt `dark`-Klasse auf dem Root-Element
   */
  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }

    // Persistenz in localStorage
    localStorage.setItem('ds-theme', theme);
  }, [theme]);

  /**
   * Effekt: System-Präferenz-Änderungen beobachten
   * Nur aktiv, wenn kein manueller Override in localStorage
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemChange = (e) => {
      // Nur reagieren, wenn User keine manuelle Auswahl getroffen hat
      const stored = localStorage.getItem('ds-theme');
      if (!stored) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  // ── Toggle-Funktion ──────────────────────────────────────────
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  // ── Context-Wert ─────────────────────────────────────────────
  const contextValue = {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;