// src/components/ui/Button.jsx
import { forwardRef } from 'react';

/**
 * Button – Universelle Button-Komponente
 *
 * Varianten:
 *   - gold    → Goldener CTA-Button (sparsam einsetzen!)
 *   - primary → Blauer Haupt-Button
 *   - outline → Transparenter Outline-Button
 *   - ghost   → Kein Hintergrund, nur Text
 *
 * Größen: sm | md | lg
 */

const variants = {
  gold:    'btn-gold',
  primary: 'btn-primary',
  outline: 'btn-outline',
  ghost:   'inline-flex items-center gap-2 px-4 py-2 font-medium text-[var(--text-sub)] hover:text-[var(--color-brand-gold)] transition-colors duration-200 cursor-pointer',
};

const sizes = {
  sm: 'text-sm px-4 py-2',
  md: 'px-6 py-3',
  lg: 'text-lg px-8 py-4',
};

const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    loading = false,
    icon,
    iconPosition = 'left',
    as: Tag = 'button',
    ...props
  },
  ref
) {
  const baseClass = variants[variant] || variants.primary;
  const sizeClass = variant !== 'ghost' ? sizes[size] : '';

  return (
    <Tag
      ref={ref}
      className={`${baseClass} ${sizeClass} ${disabled || loading ? 'opacity-60 cursor-not-allowed' : ''} ${className}`}
      disabled={Tag === 'button' ? disabled || loading : undefined}
      {...props}
    >
      {/* Lade-Spinner */}
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}

      {/* Icon links */}
      {!loading && icon && iconPosition === 'left' && (
        <span aria-hidden="true">{icon}</span>
      )}

      {/* Text */}
      <span>{children}</span>

      {/* Icon rechts */}
      {!loading && icon && iconPosition === 'right' && (
        <span aria-hidden="true">{icon}</span>
      )}
    </Tag>
  );
});

export default Button;