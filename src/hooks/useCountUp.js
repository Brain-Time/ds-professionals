/**
 * useCountUp.js
 * ─────────────────────────────────────────────────────────────
 * Custom Hook für animierte Zahlen-Counter
 *
 * Features:
 *   - Intersection Observer: startet NUR wenn Element sichtbar
 *   - Zählt von 0 auf Zielwert (ease-out Kurve)
 *   - requestAnimationFrame für flüssige 60fps Animation
 *   - Einmalige Ausführung (once: true)
 *   - Konfigurierbare Dauer
 * ─────────────────────────────────────────────────────────────
 */

import { useState, useEffect, useRef } from 'react';

/**
 * Ease-out Funktion: Schnell am Anfang, langsam am Ende
 * @param {number} t - Fortschritt 0..1
 * @returns {number} - Geglätteter Fortschritt 0..1
 */
const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

/**
 * useCountUp
 * @param {number} target      - Zielwert (z.B. 200)
 * @param {number} duration    - Animationsdauer in ms (Standard: 2000)
 * @param {number} threshold   - Sichtbarkeits-Schwelle 0..1 (Standard: 0.3)
 * @returns {{ count: number, ref: React.RefObject }}
 *
 * Verwendung:
 *   const { count, ref } = useCountUp(200, 2000);
 *   <div ref={ref}>{count}+</div>
 */
const useCountUp = (target, duration = 2000, threshold = 0.3) => {
  const [count, setCount]       = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref                     = useRef(null);
  const animationRef            = useRef(null);
  const startTimeRef            = useRef(null);

  // ── Intersection Observer ──────────────────────────────────
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Starte Animation wenn Element sichtbar & noch nicht gestartet
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect(); // Einmalig – danach nicht mehr beobachten
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasStarted, threshold]);

  // ── Counter Animation (requestAnimationFrame) ──────────────
  useEffect(() => {
    if (!hasStarted) return;

    const animate = (timestamp) => {
      // Startzeit beim ersten Frame setzen
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed  = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1); // 0..1 begrenzen
      const eased    = easeOutQuart(progress);
      const current  = Math.round(eased * target);

      setCount(current);

      // Weiterlaufen bis Zielwert erreicht
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target); // Exakten Zielwert sicherstellen
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    // Cleanup: Animation stoppen wenn Komponente unmountet
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [hasStarted, target, duration]);

  return { count, ref };
};

export default useCountUp;