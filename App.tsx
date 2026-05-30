import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import PhilosophySection from './components/PhilosophySection';
import SolutionsSection from './components/SolutionsSection';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export type View = 'home' | 'philosophy' | 'solutions' | 'products' | 'contact';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [prevView, setPrevView] = useState<View>('home');

  const handleSetView = (newView: View) => {
    setPrevView(view);
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Re-run intersection observer on view change
  useEffect(() => {
    const timer = setTimeout(() => {
      const triggers = document.querySelectorAll('.io-trigger');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.12 }
      );
      triggers.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  }, [view]);

  const renderSection = () => {
    switch (view) {
      case 'home':
        return <HomeSection setView={handleSetView} />;
      case 'philosophy':
        return <PhilosophySection setView={handleSetView} />;
      case 'solutions':
        return <SolutionsSection setView={handleSetView} />;
      case 'products':
        return <ProductsSection setView={handleSetView} />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection setView={handleSetView} />;
    }
  };

  return (
    <div className="antialiased min-h-screen bg-terra-deep text-terra-mist">
      <Header setView={handleSetView} currentView={view} />
      <main className="tab-section" key={view}>
        {renderSection()}
      </main>
      <Footer setView={handleSetView} />
    </div>
  );
};

export default App;
