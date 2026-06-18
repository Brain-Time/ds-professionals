/**
 * App.jsx
 * ─────────────────────────────────────────────────────────────
 * Root application component
 *
 * Routing structure:
 *   /                        → HomePage
 *   /dienstleistungen        → ServicesPage
 *   /dienstleistungen/:slug  → ServiceDetailPage
 *   /ueber-uns               → AboutPage (Step 6)
 *   /kontakt                 → ContactPage (Step 6)
 *   *                        → 404 NotFoundPage
 * ─────────────────────────────────────────────────────────────
 */

import { Routes, Route } from 'react-router-dom';
import Layout             from './components/layout/Layout';
import HomePage           from './pages/HomePage';
import ServicesPage       from './pages/ServicesPage';
import ServiceDetailPage  from './pages/ServiceDetailPage';

// ── Placeholder for pages not yet built (Step 6) ──────────────
const ComingSoon = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0D1B2A]">
    <div className="text-center">
      <p className="text-sm font-bold text-[#C9A84C] uppercase tracking-widest mb-3">
        In Kürze verfügbar
      </p>
      <h1 className="text-3xl font-extrabold text-[#0D1B2A] dark:text-white">
        {title}
      </h1>
    </div>
  </div>
);

// ── App component ──────────────────────────────────────────────
const App = () => {
  return (
    <Layout>
      <Routes>
        {/* Step 4 — done */}
        <Route path="/"                        element={<HomePage />} />

        {/* Step 5 — done */}
        <Route path="/dienstleistungen"        element={<ServicesPage />} />
        <Route path="/dienstleistungen/:slug"  element={<ServiceDetailPage />} />

        {/* Step 6 — coming soon */}
        <Route path="/ueber-uns"               element={<ComingSoon title="Über uns" />} />
        <Route path="/kontakt"                 element={<ComingSoon title="Kontakt" />} />

        {/* 404 */}
        <Route path="*"                        element={<ComingSoon title="404 – Seite nicht gefunden" />} />
      </Routes>
    </Layout>
  );
};

export default App;