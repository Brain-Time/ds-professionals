// src/components/layout/Layout.jsx
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>
      {/* Navbar kommt in Schritt 3 */}
      <main>
        <Outlet />
      </main>
      {/* Footer kommt in Schritt 3 */}
    </div>
  );
}