/**
 * PageLoader.jsx
 * ─────────────────────────────────────────────────────────────
 * Fullscreen-Ladeanimation während lazy Pages geladen werden.
 * Wird als Suspense fallback in App.jsx verwendet.
 * ─────────────────────────────────────────────────────────────
 */

export default function PageLoader() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center
                 bg-slate-900"
      aria-label="Seite wird geladen"
      role="status"
    >
      {/* Animated logo mark */}
      <div className="relative mb-6">
        {/* Outer ring */}
        <div className="w-16 h-16 rounded-full border-4 border-slate-700
                        border-t-amber-500 animate-spin" />
        {/* Inner dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
        </div>
      </div>

      {/* Brand name */}
      <p className="text-white font-bold text-lg tracking-wide">
        D<span className="text-amber-400">&</span>S Professionals
      </p>
      <p className="text-slate-500 text-xs mt-1">Wird geladen...</p>
    </div>
  );
}