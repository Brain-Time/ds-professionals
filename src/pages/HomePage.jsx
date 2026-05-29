// src/pages/HomePage.jsx
export default function HomePage() {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1 className="text-gold-gradient" style={{ fontSize: '3rem', fontWeight: 800 }}>
        D&S Professionals
      </h1>
      <p style={{ color: 'var(--text-sub)', marginTop: '1rem', fontSize: '1.25rem' }}>
        Mehr als nur sauber ✨
      </p>
      <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
        Design-System aktiv ✅ — Schritt 3 kommt als nächstes
      </p>
    </div>
  );
}