import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

// Platzhalter-Seiten (bis Schritt 5 & 6 fertig)
const ComingSoon = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-2xl font-700 text-[#0D1B2A] dark:text-white">
      {title} — Coming Soon
    </h1>
  </div>
);

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/"                         element={<HomePage />} />
        <Route path="/dienstleistungen"         element={<ComingSoon title="Dienstleistungen" />} />
        <Route path="/dienstleistungen/:slug"   element={<ComingSoon title="Service Detail" />} />
        <Route path="/ueber-uns"                element={<ComingSoon title="Über uns" />} />
        <Route path="/kontakt"                  element={<ComingSoon title="Kontakt" />} />
        <Route path="*"                         element={<ComingSoon title="404 – Seite nicht gefunden" />} />
      </Routes>
    </Layout>
  );
};

export default App;   // ← Das war das Problem!
