// src/data/services.js
// Alle 7 Dienstleistungen von D&S Professionals
// Vollständige Datenbasis für ServicesPage, ServiceDetailPage & ServicesPreview

/**
 * @typedef {Object} Service
 * @property {string}   id          - Eindeutige ID
 * @property {string}   slug        - URL-Slug für React Router (/dienstleistungen/:slug)
 * @property {string}   title       - Anzeigename des Services
 * @property {string}   shortDesc   - Kurzbeschreibung (für Cards & Previews)
 * @property {string}   longDesc    - Ausführliche Beschreibung (für DetailPage)
 * @property {string[]} features    - Liste der enthaltenen Leistungen
 * @property {string}   icon        - Emoji-Icon für visuelle Darstellung
 * @property {string}   accentColor - Tailwind CSS Farbklasse (für Card-Akzent)
 * @property {string}   metaTitle   - SEO Title für React Helmet
 * @property {string}   metaDesc    - SEO Meta Description
 */

export const services = [
  {
    id: 'industriereinigung',
    slug: 'industriereinigung',
    title: 'Industriereinigung',
    shortDesc:
      'Professionelle Reinigung von Produktionsflächen, Lagerhallen und Werkstätten – zuverlässig, gründlich und auf Ihre Betriebsabläufe abgestimmt.',
    longDesc:
      'Industrielle Umgebungen stellen höchste Anforderungen an Sauberkeit und Hygiene. D&S Professionals bietet maßgeschneiderte Industriereinigung für Produktionsstätten, Lagerhallen und Werkstätten in Karlsruhe und Umgebung. Unsere erfahrenen Teams arbeiten flexibel – auch nachts, an Wochenenden oder in Betriebspausen – um Ihre Produktionsabläufe nicht zu unterbrechen. Wir setzen auf professionelle Reinigungsmaschinen und umweltverträgliche Reinigungsmittel, die den Anforderungen der Industrie gerecht werden.',
    features: [
      'Reinigung von Produktionsflächen & Maschinenumgebungen',
      'Hallenboden-Reinigung (Epoxid, Beton, Industriebelag)',
      'Entfernung von Öl-, Fett- und Schmutzablagerungen',
      'Reinigung von Regalsystemen & Lagereinrichtungen',
      'Werkstatt- & Werkzeugbereichsreinigung',
      'Regelmäßige oder einmalige Grundreinigung',
      'Flexible Einsatzzeiten (auch nachts & am Wochenende)',
      'Dokumentation auf Wunsch (HACCP-konform möglich)',
    ],
    icon: '🏭',
    accentColor: 'bg-blue-600',
    metaTitle: 'Industriereinigung Karlsruhe | D&S Professionals',
    metaDesc:
      'Professionelle Industriereinigung in Karlsruhe: Produktionsflächen, Lagerhallen & Werkstätten. Zuverlässig, flexibel, faire Preise. Jetzt Angebot anfordern!',
  },

  {
    id: 'hallenreinigung',
    slug: 'hallenreinigung',
    title: 'Hallenreinigung',
    shortDesc:
      'Gründliche Reinigung von Lager-, Sport- und Eventhallen – für ein sauberes, sicheres und repräsentatives Ambiente.',
    longDesc:
      'Hallen sind vielseitige Räumlichkeiten mit hohem Publikumsverkehr – ob Lagerhalle, Sporthalle oder Eventlocation. D&S Professionals sorgt für eine gründliche und regelmäßige Reinigung, die den spezifischen Anforderungen jeder Hallenart gerecht wird. Von der Bodenreinigung großer Flächen bis zur Reinigung von Tribünen, Umkleidebereichen und Sanitäranlagen – wir übernehmen alles aus einer Hand. Unsere Teams sind mit professionellen Reinigungsmaschinen ausgestattet, die auch große Flächen effizient und gründlich reinigen.',
    features: [
      'Großflächige Bodenreinigung (Kehrmaschinen, Scheuersauger)',
      'Reinigung von Tribünen & Zuschauerrängen',
      'Sanitär- & Umkleidebereiche',
      'Eingangs- & Foyer-Reinigung',
      'Fenster- & Glasflächenreinigung',
      'Reinigung nach Veranstaltungen (Event-Nachbereitung)',
      'Regelmäßige Unterhaltsreinigung',
      'Sonderreinigungen & Grundreinigungen',
    ],
    icon: '🏟️',
    accentColor: 'bg-indigo-600',
    metaTitle: 'Hallenreinigung Karlsruhe | D&S Professionals',
    metaDesc:
      'Hallenreinigung in Karlsruhe: Lagerhallen, Sporthallen & Eventhallen professionell gereinigt. Schnell, gründlich, zuverlässig. Kostenlose Anfrage!',
  },

  {
    id: 'fitnessstudio-reinigung',
    slug: 'fitnessstudio-reinigung',
    title: 'Fitnessstudio-Reinigung',
    shortDesc:
      'Hygienische Reinigung und Desinfektion von Trainingsgeräten, Umkleiden und Sanitäranlagen – für das Wohlbefinden Ihrer Mitglieder.',
    longDesc:
      'Fitnessstudios sind Orte, an denen Hygiene und Sauberkeit direkten Einfluss auf die Mitgliederzufriedenheit und die Gesundheit haben. D&S Professionals bietet spezialisierte Reinigungsdienstleistungen für Fitnessstudios in Karlsruhe: von der täglichen Unterhaltsreinigung der Trainingsgeräte bis zur gründlichen Desinfektion von Umkleidekabinen, Duschen und WC-Anlagen. Wir arbeiten mit gerätekompatiblen Reinigungsmitteln, die Oberflächen schonen und gleichzeitig effektiv desinfizieren.',
    features: [
      'Tägliche Reinigung & Desinfektion von Trainingsgeräten',
      'Umkleidekabinen & Spindanlagen',
      'Dusch- & Sanitäranlagen (Desinfektion nach TRBA 400)',
      'Sauna- & Wellnessbereiche',
      'Empfangs- & Wartebereich',
      'Bodenreinigung (Gummimatten, Parkett, Fliesen)',
      'Spiegel- & Glasflächenreinigung',
      'Müllentsorgung & Nachfüllen von Verbrauchsmaterialien',
    ],
    icon: '💪',
    accentColor: 'bg-green-600',
    metaTitle: 'Fitnessstudio Reinigung Karlsruhe | D&S Professionals',
    metaDesc:
      'Fitnessstudio-Reinigung in Karlsruhe: Hygienische Gerätereinigung, Umkleiden & Sanitär. Täglich oder wöchentlich. Jetzt Angebot einholen!',
  },

  {
    id: 'bueroreinigung',
    slug: 'bueroreinigung',
    title: 'Büroreinigung',
    shortDesc:
      'Tägliche oder wöchentliche Büroreinigung für ein sauberes, produktives Arbeitsumfeld – diskret, zuverlässig und termingerecht.',
    longDesc:
      'Ein sauberes Büro steigert die Produktivität, hinterlässt einen professionellen Eindruck bei Kunden und sorgt für das Wohlbefinden der Mitarbeiter. D&S Professionals übernimmt die komplette Büroreinigung für Unternehmen in Karlsruhe – von der täglichen Unterhaltsreinigung bis zur monatlichen Grundreinigung. Wir arbeiten diskret und zuverlässig, auch außerhalb Ihrer Geschäftszeiten, damit Ihr Betrieb nicht gestört wird. Konferenzräume, Küchen, Sanitäranlagen und Empfangsbereiche werden nach Ihren individuellen Anforderungen gereinigt.',
    features: [
      'Tägliche Unterhaltsreinigung (Böden, Oberflächen)',
      'Schreibtische & Arbeitsflächen (staubfrei)',
      'Konferenz- & Besprechungsräume',
      'Küchen & Pausenräume',
      'Sanitäranlagen & WC-Reinigung',
      'Empfangs- & Eingangsbereiche',
      'Papierkorb-Leerung & Müllentsorgung',
      'Fensterreinigung (auf Wunsch)',
      'Grundreinigung (monatlich/quartalsweise)',
    ],
    icon: '🏢',
    accentColor: 'bg-sky-600',
    metaTitle: 'Büroreinigung Karlsruhe | D&S Professionals',
    metaDesc:
      'Professionelle Büroreinigung in Karlsruhe: täglich, wöchentlich oder nach Bedarf. Diskret, zuverlässig, faire Preise. Jetzt kostenloses Angebot anfordern!',
  },

  {
    id: 'treppenhausreinigung',
    slug: 'treppenhausreinigung',
    title: 'Treppenhausreinigung',
    shortDesc:
      'Regelmäßige Reinigung von Treppenhäusern in Wohn- und Gewerbeobjekten – für einen gepflegten ersten Eindruck.',
    longDesc:
      'Das Treppenhaus ist die Visitenkarte eines jeden Gebäudes. D&S Professionals übernimmt die regelmäßige Reinigung von Treppenhäusern in Wohnhäusern, Mehrfamilienhäusern und Gewerbeobjekten in Karlsruhe und Umgebung. Wir reinigen Stufen, Geländer, Briefkastenanlage, Eingangstüren und alle gemeinschaftlich genutzten Bereiche nach einem festen Reinigungsplan. Auf Wunsch übernehmen wir auch die Außenanlagen und Keller-/Tiefgaragenbereiche.',
    features: [
      'Treppenreinigung (Stufen, Podeste, Absätze)',
      'Geländer & Handläufe (Desinfektion möglich)',
      'Briefkastenanlage & Klingelbereich',
      'Eingangstüren & Glasflächen',
      'Fußmatten & Eingangsbereiche',
      'Keller- & Tiefgaragenbereiche (auf Wunsch)',
      'Außenanlagen & Gehwegreinigung',
      'Fester Reinigungsplan (wöchentlich/14-tägig)',
    ],
    icon: '🏠',
    accentColor: 'bg-orange-600',
    metaTitle: 'Treppenhausreinigung Karlsruhe | D&S Professionals',
    metaDesc:
      'Treppenhausreinigung in Karlsruhe für Wohn- & Gewerbeobjekte. Zuverlässig nach Reinigungsplan. Faire Preise, professionelle Ausführung. Anfrage stellen!',
  },

  {
    id: 'praxisreinigung',
    slug: 'praxisreinigung',
    title: 'Praxisreinigung',
    shortDesc:
      'Hygienische Reinigung und Desinfektion für medizinische Einrichtungen – nach RKI-Richtlinien, diskret und zuverlässig.',
    longDesc:
      'Medizinische Einrichtungen wie Arztpraxen, Zahnarztpraxen, Physiotherapiepraxen und Pflegeeinrichtungen stellen höchste Anforderungen an Hygiene und Desinfektion. D&S Professionals bietet spezialisierte Praxisreinigung in Karlsruhe, die den Anforderungen des Robert Koch-Instituts (RKI) und der TRBA 250 entspricht. Unsere Mitarbeiter sind in der hygienischen Aufbereitung medizinischer Räumlichkeiten geschult und arbeiten mit zugelassenen Desinfektionsmitteln. Wir reinigen außerhalb der Öffnungszeiten, um den Praxisbetrieb nicht zu stören.',
    features: [
      'Desinfektion nach RKI-Richtlinien (TRBA 250)',
      'Wartezimmer & Empfangsbereich',
      'Behandlungsräume & Untersuchungsliegen',
      'Sanitäranlagen (desinfizierend)',
      'Böden (Wischdesinfektion)',
      'Türgriffe, Lichtschalter & Kontaktflächen',
      'Medizinischer Abfall (sachgerechte Entsorgung)',
      'Reinigung außerhalb der Öffnungszeiten',
      'Dokumentation der Reinigungsleistungen',
    ],
    icon: '🏥',
    accentColor: 'bg-red-600',
    metaTitle: 'Praxisreinigung Karlsruhe | D&S Professionals',
    metaDesc:
      'Praxisreinigung & Desinfektion in Karlsruhe nach RKI-Richtlinien. Für Arztpraxen, Zahnarztpraxen & medizinische Einrichtungen. Jetzt Angebot anfordern!',
  },

  {
    id: 'bildungseinrichtungen',
    slug: 'bildungseinrichtungen',
    title: 'Bildungseinrichtungen',
    shortDesc:
      'Reinigung von Schulen, Kitas und Kindergärten – kindgerecht, hygienisch und auf die Bedürfnisse von Bildungseinrichtungen abgestimmt.',
    longDesc:
      'Schulen, Kindertagesstätten und Kindergärten sind Orte, an denen Kinder den Großteil ihres Tages verbringen. Sauberkeit und Hygiene sind hier besonders wichtig – für die Gesundheit der Kinder und das Wohlbefinden aller Beteiligten. D&S Professionals reinigt Bildungseinrichtungen in Karlsruhe mit kindgerechten, schadstoffarmen Reinigungsmitteln. Wir arbeiten nach den Vorgaben der Gesundheitsämter und stimmen unsere Einsatzzeiten auf den Schulbetrieb ab – in der Regel nachmittags oder am frühen Abend.',
    features: [
      'Klassenräume & Gruppenräume',
      'Flure, Treppenhäuser & Eingangsbereiche',
      'Sanitäranlagen (kindgerechte Desinfektion)',
      'Turnhallen & Sportbereiche',
      'Mensen & Aufenthaltsräume',
      'Lehrerzimmer & Verwaltungsbereiche',
      'Außenanlagen & Spielbereiche (auf Wunsch)',
      'Kindgerechte, schadstoffarme Reinigungsmittel',
      'Einsatz nach Schulbetrieb (nachmittags/abends)',
    ],
    icon: '🎓',
    accentColor: 'bg-purple-600',
    metaTitle: 'Schulreinigung & Kita-Reinigung Karlsruhe | D&S Professionals',
    metaDesc:
      'Reinigung von Schulen, Kitas & Kindergärten in Karlsruhe. Kindgerechte Reinigungsmittel, hygienisch, zuverlässig. Jetzt kostenloses Angebot anfordern!',
  },
];

/**
 * Hilfsfunktionen für den Datenzugriff
 */

/**
 * Gibt einen einzelnen Service anhand seines Slugs zurück
 * @param {string} slug - URL-Slug des Services
 * @returns {Service|undefined}
 */
export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);

/**
 * Gibt alle Service-Slugs zurück (für Router/Sitemap)
 * @returns {string[]}
 */
export const getAllServiceSlugs = () =>
  services.map((service) => service.slug);

export default services;