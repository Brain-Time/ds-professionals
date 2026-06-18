import { Suspense, lazy } from 'react';
import { Routes, Route }  from 'react-router-dom';

import Navbar      from './components/layout/Navbar';
import Footer      from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';
import PageLoader  from './components/utils/PageLoader';

const HomePage        = lazy(() => import('./pages/HomePage'));
const ServicesPage    = lazy(() => import('./pages/ServicesPage'));
const ServiceDetail   = lazy(() => import('./pages/ServiceDetailPage'));
const AboutPage       = lazy(() => import('./pages/AboutPage'));
const ContactPage     = lazy(() => import('./pages/ContactPage'));
const ImpressumPage   = lazy(() => import('./pages/ImpressumPage'));
const DatenschutzPage = lazy(() => import('./pages/DatenschutzPage'));
const AGBPage         = lazy(() => import('./pages/AGBPage'));
const NotFoundPage    = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"                        element={<HomePage />} />
          <Route path="/dienstleistungen"        element={<ServicesPage />} />
          <Route path="/dienstleistungen/:slug"  element={<ServiceDetail />} />
          <Route path="/ueber-uns"               element={<AboutPage />} />
          <Route path="/kontakt"                 element={<ContactPage />} />
          <Route path="/impressum"               element={<ImpressumPage />} />
          <Route path="/datenschutz"             element={<DatenschutzPage />} />
          <Route path="/agb"                     element={<AGBPage />} />
          <Route path="*"                        element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}