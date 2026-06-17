/**
 * useTheme.js
 * ─────────────────────────────────────────────────────────────
 * Custom Hook für den ThemeContext
 * Stellt theme, toggleTheme und isDark bereit
 * ─────────────────────────────────────────────────────────────
 */

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

/**
 * useTheme
 * @returns {{ theme: string, toggleTheme: function, isDark: boolean }}
 *
 * Verwendung:
 *   const { theme, toggleTheme, isDark } = useTheme();
 */
const useTheme = () => {
  const context = useContext(ThemeContext);

  // Sicherheitsprüfung: Hook muss innerhalb des ThemeProviders verwendet werden
  if (!context) {
    throw new Error(
      'useTheme muss innerhalb eines <ThemeProvider> verwendet werden.'
    );
  }

  return context;
};

export default useTheme;