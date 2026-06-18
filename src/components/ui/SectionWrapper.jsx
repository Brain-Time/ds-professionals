/**
 * SectionWrapper.jsx
 * ─────────────────────────────────────────────────────────────
 * Reusable scroll-fade wrapper for all page sections
 *
 * Features:
 *   - Framer Motion whileInView fade-in + Y offset
 *   - viewport once: true (animates only on first enter)
 *   - Configurable delay via `delay` prop
 *   - Configurable Y offset via `yOffset` prop
 *   - Passes through className + all other props
 * ─────────────────────────────────────────────────────────────
 */

import { motion } from 'framer-motion';

// ── SectionWrapper component ───────────────────────────────────
const SectionWrapper = ({
  children,
  className = '',
  delay = 0,
  yOffset = 24,
  duration = 0.6,
  ...props
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;