// src/pages/HomePage.jsx
import HeroSection     from '../components/sections/HeroSection';
import ServicesPreview from '../components/sections/ServicesPreview';
import WhyUs           from '../components/sections/WhyUsSection';
import StatsCounter    from '../components/sections/StatsSection';
import Testimonials    from '../components/sections/TestimonialsSection';
import CTASection      from '../components/sections/CtaSection';

const HomePage = () => {
  return (
    <>
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
