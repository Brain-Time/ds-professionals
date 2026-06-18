// src/data/stats.js
// Unternehmenskennzahlen für die StatsSection (mit Counter-Animation)
// D&S Professionals – Zahlen, die Vertrauen schaffen

/**
 * @typedef {Object} Stat
 * @property {string} id       - Eindeutige ID
 * @property {number} value    - Zielwert für den Counter (Endwert der Animation)
 * @property {string} suffix   - Einheit/Suffix nach dem Wert (z.B. "+", "%", "k")
 * @property {string} label    - Beschriftung unter dem Wert
 * @property {string} icon     - Emoji-Icon
 * @property {string} sublabel - Kurze Erläuterung (Unterzeile)
 */

const stats = [
  {
    id: 'customers',
    value: 5,
    suffix: '+',
    label: 'Zufriedene Kunden',
    icon: '🤝',
    sublabel: 'Unternehmen vertrauen auf unsere Qualität',
  },
  {
    id: 'experience',
    value: 6,
    suffix: '+',
    label: 'Jahre Erfahrung',
    icon: '📅',
    sublabel: 'Erfahrung bei namhaften Unternehmen',
  },
  {
    id: 'projects',
    value: 20,
    suffix: '+',
    label: 'Abgeschlossene Projekte',
    icon: '✅',
    sublabel: 'Erfolgreich durchgeführte Aufträge',
  },
  {
    id: 'availability',
    value: 100,
    suffix: '%',
    label: 'Zuverlässigkeit',
    icon: '🛡️',
    sublabel: 'Pünktlich & gründlich — ohne Ausnahme',
  },
];

export default stats;