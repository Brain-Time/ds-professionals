// src/data/navigation.js
// Navigationsstruktur für D&S Professionals
// Wird in Navbar, Footer & Mobile Menu verwendet

export const navigationItems = [
  {
    label: 'Home',
    path: '/',
    exact: true,
  },
  {
    label: 'Dienstleistungen',
    path: '/dienstleistungen',
  },
  {
    label: 'Über uns',
    path: '/ueber-uns',
  },
  {
    label: 'Kontakt',
    path: '/kontakt',
  },
];

export const footerNavigation = {
  main: navigationItems,
  legal: [
    {
      label: 'Impressum',
      path: '/impressum',
    },
    {
      label: 'Datenschutz',
      path: '/datenschutz',
    },
    {
      label: 'AGB',
      path: '/agb',
    },
  ],
};

export const contactInfo = {
  company: 'D&S Professionals',
  slogan: 'Mehr als nur sauber',
  phone: '+49 1791455532',
  email: 'info@ds-professionals.de',
  address: 'Karlsruhe und Umgebung',
  hours: {
    weekdays: 'Mo–Fr: 08:00–18:00 Uhr',
    weekend: 'Sa: Nach Vereinbarung',
  },
};

export default navigationItems;
