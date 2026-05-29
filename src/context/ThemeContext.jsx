// src/context/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';

// ─── Context erstellen ────────────────────────────────────────────────────────
const ThemeContext = createContext(null);

// ─── Provider Komponente ──────────────────────────────────────────────────────
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    // 1. localStorage prüfen
    const stored = localStorage.getItem('ds-theme');
    if (stored) return stored === 'dark';
    // 2. System-Präferenz als Fallback
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // .dark class auf <html> setzen/entfernen
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // In localStorage speichern
    localStorage.setItem('ds-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ─── Custom Hook (bequemer Zugriff) ──────────────────────────────────────────
export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext muss innerhalb von ThemeProvider verwendet werden');
  }
  return context;
}