import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  setView: (view: 'home' | 'about') => void;
  currentView: string;
}

const Header: React.FC<HeaderProps> = ({ setView, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: 'home' | 'about', id?: string) => {
    setIsMobileMenuOpen(false);
    setView(view);
    
    if (id) {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-eroum-cream/80 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-full bg-eroum-sage/20 border border-eroum-sage flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-eroum-sage group-hover:scale-125 transition-transform duration-300" />
          </div>
          <span className={`font-bold text-xl tracking-tighter transition-colors ${isScrolled || currentView === 'about' ? 'text-eroum-dark' : 'text-eroum-dark/90'}`}>
            TERRA FLOW
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => handleNavClick('about')}
            className={`text-sm font-medium transition-colors ${currentView === 'about' ? 'text-eroum-sage' : 'text-eroum-dark/70 hover:text-eroum-sage'}`}
          >
            Philosophy
          </button>
          <button 
            onClick={() => handleNavClick('home', 'business')}
            className="text-sm font-medium text-eroum-dark/70 hover:text-eroum-sage transition-colors"
          >
            Supply & Solutions
          </button>
          <span 
            className="text-sm font-medium text-eroum-dark/30 cursor-not-allowed flex items-center gap-1"
            title="Coming Soon"
          >
            Insights
          </span>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if(el) el.scrollIntoView({behavior: 'smooth'});
            }}
            className="flex items-center gap-2 bg-eroum-dark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-eroum-earth transition-all duration-300 shadow-lg shadow-eroum-dark/10 hover:shadow-xl"
          >
            Partner with Us
            <ArrowRight size={16} />
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-eroum-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-eroum-cream border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <button onClick={() => handleNavClick('about')} className="text-left text-eroum-dark font-medium">Philosophy</button>
              <button onClick={() => handleNavClick('home', 'business')} className="text-left text-eroum-dark font-medium">Solutions</button>
              <span className="text-left text-gray-300 font-medium">Insights (Coming Soon)</span>
              <button 
                onClick={() => {
                   setIsMobileMenuOpen(false);
                   document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
                }} 
                className="text-left text-eroum-sage font-bold"
              >
                Connect
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;