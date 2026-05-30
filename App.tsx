import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import PhilosophySection from './components/PhilosophySection';
import TechnologySection from './components/TechnologySection';
import SolutionsSection from './components/SolutionsSection';
import ProofSection from './components/ProofSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <PhilosophySection />
      <TechnologySection />
      <SolutionsSection />
      <ProofSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
