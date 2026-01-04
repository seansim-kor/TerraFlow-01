import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import TradingSection from './components/TradingSection';
import ConsultingSection from './components/ConsultingSection';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'about'>('home');

  // Smooth scroll to top when changing views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <div className="antialiased selection:bg-eroum-sage selection:text-white min-h-screen bg-eroum-cream">
      <Header setView={setView} currentView={view} />
      
      <main className="pt-20 md:pt-0">
        {view === 'home' ? (
          <>
            <section id="home">
              <Hero />
            </section>
            <section id="about-preview">
              <BrandStory />
            </section>
            <section id="business">
              <TradingSection />
              <ConsultingSection />
            </section>
            <section id="features">
              <WhyChooseUs />
            </section>
          </>
        ) : (
          <AboutPage />
        )}
      </main>

      <section id="contact">
        <Footer setView={setView} />
      </section>
    </div>
  );
};

export default App;