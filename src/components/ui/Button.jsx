/**
 * Button.jsx
 * ─────────────────────────────────────────────────────────────
 * Universal button component for D&S Professionals
 *
 * Variants:
 *   gold    → Gold CTA button (use sparingly!)
 *   primary → Blue primary button
 *   outline → Transparent outline button
 *   ghost   → No background, text only
 *
 * Sizes: sm | md | lg
 *
 * Props:
 *   as           → Render as <button> or <Link> (default: 'button')
 *   icon         → Optional icon element
 *   iconPosition → 'left' | 'right' (default: 'left')
 *   loading      → Shows spinner, disables interaction
 *   disabled     → Disables interaction
 * ─────────────────────────────────────────────────────────────
 */

import { forwardRef } from 'react';

// ── Variant styles ─────────────────────────────────────────────
const variants = {
  gold: [
    'inline-flex items-center gap-2',
    'bg-[#C9A84C] hover:bg-[#b8943d]',
    'text-white font-bold',
    'rounded-lg shadow-md hover:shadow-lg',
    'transition-all duration-200',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2',
  ].join(' '),

  primary: [
    'inline-flex items-center gap-2',
    'bg-[#1B4FD8] hover:bg-[#1640b0]',
    'text-white font-bold',
    'rounded-lg shadow-md hover:shadow-lg',
    'transition-all duration-200',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4FD8] focus-visible:ring-offset-2',
  ].join(' '),

  outline: [
    'inline-flex items-center gap-2',
    'border-2 border-white/60 hover:border-white',
    'text-white font-bold',
    'rounded-lg',
    'transition-all duration-200',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2',
  ].join(' '),

  ghost: [
    'inline-flex items-center gap-2',
    'font-medium text-slate-600 dark:text-slate-400',
    'hover:text-[#C9A84C] dark:hover:text-[#C9A84C]',
    'transition-colors duration-200',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]',
  ].join(' '),
};

// ── Size styles ────────────────────────────────────────────────
const sizes = {
  sm: 'text-sm px-4 py-2',
  md: 'px-6 py-3',
  lg: 'text-lg px-8 py-4',
};

// ── Loading spinner ────────────────────────────────────────────
const Spinner = () => (
  <svg
    className="animate-spin h-4 w-4 flex-shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10"
      stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
  </svg>
);

// ── Button component ───────────────────────────────────────────
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
  const variantClass = variants[variant] ?? variants.primary;
  // Ghost variant ignores size (padding is minimal)
  const sizeClass = variant !== 'ghost' ? (sizes[size] ?? sizes.md) : '';
  const stateClass = disabled || loading ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer';

  return (
    <Tag
      ref={ref}
      className={[variantClass, sizeClass, stateClass, className].join(' ')}
      disabled={Tag === 'button' ? disabled || loading : undefined}
      aria-disabled={disabled || loading}
      {...props}
    >
      {/* Loading spinner (replaces left icon) */}
      {loading && <Spinner />}

      {/* Icon — left position */}
      {!loading && icon && iconPosition === 'left' && (
        <span aria-hidden="true">{icon}</span>
      )}

      {/* Label */}
      <span>{children}</span>

      {/* Icon — right position */}
      {!loading && icon && iconPosition === 'right' && (
        <span aria-hidden="true">{icon}</span>
      )}
    </Tag>
  );
});

export default Button;