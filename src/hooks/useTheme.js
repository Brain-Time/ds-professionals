// src/hooks/useTheme.js
// Direkter Hook – kann auch ohne Context verwendet werden
import { useThemeContext } from '@/context/ThemeContext';

/**
 * useTheme – Zugriff auf Dark/Light Mode
 * @returns {{ isDark: boolean, toggleTheme: function, theme: string }}
 */
export function useTheme() {
  const { isDark, toggleTheme } = useThemeContext();

  return {
    isDark,
    toggleTheme,
    theme: isDark ? 'dark' : 'light',
  };
}