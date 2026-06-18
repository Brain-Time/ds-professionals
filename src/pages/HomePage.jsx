/**
 * HomePage.jsx
 * ─────────────────────────────────────────────────────────────
 * Main landing page — assembles all homepage sections
 *
 * Sections (in order):
 *   1. HeroSection      → Fullscreen hero with CTAs
 *   2. ServicesPreview  → 6 service cards grid
 *   3. WhyUs            → 4 USPs + reference badges
 *   4. StatsCounter     → 4 animated KPI counters
 *   5. Testimonials     → 3 customer reviews
 *   6. CTASection       → Final call-to-action
 *
 * SEO: React Helmet Async (title + meta description + OG tags)
 * ─────────────────────────────────────────────────────────────
 */

import { Helmet } from 'react-helmet-async';
import HeroSection     from '../components/sections/HeroSection';
import ServicesPreview from '../components/sections/ServicesPreview';
import WhyUs           from '../components/sections/WhyUsSection';
import StatsCounter    from '../components/sections/StatsSection';
import Testimonials    from '../components/sections/TestimonialsSection';
import CTASection      from '../components/sections/CtaSection';

const HomePage = () => {
  return (
    <>
      {/* ── SEO Meta Tags ──────────────────────────────── */}
      <Helmet>
        <title>D&amp;S Professionals – Reinigungsdienst Karlsruhe</title>
        <meta
          name="description"
          content="Professionelle Reinigungsdienstleistungen in Karlsruhe: Industrie-, Büro-, Praxis- und Hallenreinigung. Zuverlässig, fair, maßgeschneidert. Jetzt Angebot anfordern!"
        />
        <meta property="og:title" content="D&S Professionals – Reinigungsdienst Karlsruhe" />
        <meta
          property="og:description"
          content="Professionelle Reinigungsdienstleistungen in Karlsruhe. Zuverlässig, fair, maßgeschneidert."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* ── Page sections ──────────────────────────────── */}
      <HeroSection />
      <ServicesPreview />
      <WhyUs />
      <StatsCounter />
      <Testimonials />
      <CTASection />
    </>
  );
};

export default HomePage;