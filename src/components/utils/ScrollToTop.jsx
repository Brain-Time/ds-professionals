/**
 * ScrollToTop.jsx
 * ─────────────────────────────────────────────────────────────
 * Scrollt bei jedem Routenwechsel automatisch nach oben.
 * Wird einmalig in App.jsx eingebunden.
 * ─────────────────────────────────────────────────────────────
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}