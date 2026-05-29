// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/context/ThemeContext';
import Layout from '@/components/layout/Layout';

// Pages (Lazy Loading für bessere Performance)
import { lazy, Suspense } from 'react';

const HomePage          = lazy(() => import('@/pages/HomePage'));
const ServicesPage      = lazy(() => import('@/pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('@/pages/ServiceDetailPage'));
const AboutPage         = lazy(() => import('@/pages/AboutPage'));
const ContactPage       = lazy(() => import('@/pages/ContactPage'));

// ─── Loading Fallback ─────────────────────────────────────────────────────────
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center"
         style={{ background: 'var(--bg)' }}>
      <div className="flex flex-col items-center gap-4">
        {/* Gold Spinner */}
        <div
          className="w-12 h-12 rounded-full border-4 border-t-transparent animate-spin"
          style={{ borderColor: '#C9A84C', borderTopColor: 'transparent' }}
          aria-label="Seite wird geladen"
        />
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          Wird geladen…
        </p>
      </div>
    </div>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index                          element={<HomePage />} />
                <Route path="dienstleistungen"        element={<ServicesPage />} />
                <Route path="dienstleistungen/:slug"  element={<ServiceDetailPage />} />
                <Route path="ueber-uns"               element={<AboutPage />} />
                <Route path="kontakt"                 element={<ContactPage />} />
                {/* 404 Fallback */}
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-6xl font-bold text-gold-gradient mb-4">404</h1>
                      <p style={{ color: 'var(--text-sub)' }}>Diese Seite existiert nicht.</p>
                    </div>
                  </div>
                } />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}