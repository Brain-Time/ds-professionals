/**
 * CTASection.jsx
 * ─────────────────────────────────────────────────────────────
 * Abschluss-CTA Sektion für D&S Professionals
 *
 * Features:
 *   - "Bereit für professionelle Sauberkeit?"
 *   - Gold CTA Button "Jetzt Angebot anfragen"
 *   - Dunkelblauer Kontrasthintergrund
 *   - Framer Motion Pulse-Animation auf Button
 *   - Sekundärer Link: Telefon
 * ─────────────────────────────────────────────────────────────
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// ── Animation Varianten ────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden:  { opacity