// src/data/stats.js
// Unternehmenskennzahlen für die StatsSection (mit Counter-Animation)
// D&S Professionals – Zahlen, die Vertrauen schaffen

/**
 * @typedef {Object} Stat
 * @property {string} id      - Eindeutige ID
 * @property {number} value   - Zielwert für den Counter (Endwert der Animation)
 * @property {string} suffix  - Einheit/Suffix nach dem Wert (z.B. "+", "%", "k")
 * @property {string} label   - Beschriftung unter dem Wert
 * @property {string} icon    - Emoji-Icon
 * @property {string} desc    - Kurze Erläuterung (Tooltip / Unterzeile)
 */

export const stats = [
  {
    id: 'customers',
    value: 150,
    suffix: '+',
    label: 'Zufriedene Kunden',
    icon: '🤝',
    desc: 'Unternehmen vertrauen auf unsere Reinigungsdienstleistungen',
  },
  {
    id: 'experience',
    value: 15,
    suffix: '+',
    label: 'Jahre Erfahrung',
    icon: '📅',
    desc: 'Jahrelange Erfahrung bei namhaften Unternehmen (Indutec, Iwago, Wisag)',
  },
  {
    id: 'employees',
    value: 30,
    suffix: '+',
    label: 'Mitarbeiter',
    icon: '👥',
    desc: 'Geschultes und zuverlässiges Reinigungspersonal',
  },
  {
    id: 'projects',
    value: 500,
    suffix: '+',
    label: 'Abgeschlossene Projekte',
    icon: '✅',
    desc: 'Erfolgreich durchgeführte Reinigungs- und Sonderaufträge',
  },
];

export default stats;