/**
 * testimonials.js
 * ─────────────────────────────────────────────────────────────
 * Kundenstimmen für D&S Professionals
 * Wird in der Testimonials-Sektion der HomePage verwendet
 * ─────────────────────────────────────────────────────────────
 */

const testimonials = [
  {
    id: 1,
    name: 'Marcus Weber',
    role: 'Facility Manager',
    company: 'Indutec GmbH',
    initials: 'MW',
    rating: 5,
    text:
      'D&S Professionals reinigt unsere Produktionshallen seit über zwei Jahren. ' +
      'Die Zuverlässigkeit und Qualität sind hervorragend – pünktlich, gründlich ' +
      'und immer flexibel bei kurzfristigen Anfragen. Absolute Empfehlung!',
    service: 'Industriereinigung',
    color: '#1B4FD8', // Hintergrundfarbe für Avatar
  },
  {
    id: 2,
    name: 'Sandra Hoffmann',
    role: 'Geschäftsführerin',
    company: 'FitLife Karlsruhe',
    initials: 'SH',
    rating: 5,
    text:
      'Unsere Mitglieder loben regelmäßig die Sauberkeit im Studio. Das Team von ' +
      'D&S arbeitet früh morgens, bevor der Betrieb beginnt – diskret, effizient ' +
      'und immer mit einem Lächeln. Wir sind rundum zufrieden.',
    service: 'Fitnessstudio-Reinigung',
    color: '#0D1B2A',
  },
  {
    id: 3,
    name: 'Dr. Thomas Keller',
    role: 'Praxisinhaber',
    company: 'Hausarztpraxis Keller',
    initials: 'TK',
    rating: 5,
    text:
      'In einer Arztpraxis ist Hygiene das A und O. D&S Professionals erfüllt ' +
      'alle Anforderungen an medizinische Reinigung und Desinfektion. ' +
      'Professionell, diskret und immer zuverlässig. Ich kann sie uneingeschränkt empfehlen.',
    service: 'Praxisreinigung',
    color: '#C9A84C',
  },
];

export default testimonials;