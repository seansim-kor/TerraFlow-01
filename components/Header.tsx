import React, { useState, useEffect } from 'react';
import { View } from '../App';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  setView: (v: View) => void;
  currentView: View;
}

const NAV: { label: string; id: View }[] = [
  { label: 'Home', id: 'home' },
  { label: 'Philosophy', id: 'philosophy' },
  { label: 'Solutions', id: 'solutions' },
  { label: 'Products', id: 'products' },
  { label: 'Contact', id: 'contact' },
];

const Header: React.FC<HeaderProps> = ({ setView, currentView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (id: View) => {
    setView(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-terra-darker/95 backdrop-blur-md border-b border-terra-green/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded-full bg-terra-green flex items-center justify-center">
            <span className="text-xs font-bold text-white">Dr</span>
          </div>
          <div className="leading-tight text-left">
            <div className="text-[15px] font-semibold tracking-wide text-terra-mist group-hover:text-white transition-colors">
              Dr. Terraplus
            </div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-terra-green">
              Biological Soil Restoration
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                currentView === item.id
                  ? 'text-white bg-terra-green/20 border border-terra-green/40'
                  : 'text-terra-light/70 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
              {currentView === item.id && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-terra-green" />
              )}
            </button>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNav('contact')}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-terra-amber text-white text-sm font-semibold hover:bg-terra-amber-lt hover:text-terra-stone transition-all duration-200"
          >
            Get Started
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-terra-light/70 hover:text-white"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`md:hidden ${menuOpen ? 'open' : ''} bg-terra-darker border-t border-terra-green/10`}>
        <div className="px-6 py-4 flex flex-col gap-1">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                currentView === item.id
                  ? 'text-white bg-terra-green/20'
                  : 'text-terra-light/70 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="mt-2 px-5 py-3 rounded-full bg-terra-amber text-white text-sm font-semibold"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
