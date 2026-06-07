import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'The Challenge', href: '#problem' },
  { label: 'Philosophy',    href: '#philosophy' },
  { label: 'How It Works',  href: '#technology' },
  { label: 'Solutions',     href: '#solutions' },
  { label: 'Results',       href: '#proof' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#081a0f]/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#4ade80] to-[#15803d] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="white" strokeWidth="2">
              <path d="M12 2C8 2 4 6 4 10c0 6 8 12 8 12s8-6 8-12c0-4-4-8-8-8z"/>
              <circle cx="12" cy="10" r="2.5" fill="white" stroke="none"/>
            </svg>
          </div>
          <div>
            <div className="font-serif font-bold text-white text-lg leading-none">Dr. Terraplus+</div>
            <div className="text-[10px] text-[#4ade80] uppercase tracking-widest leading-none mt-0.5">Soil Restoration Science</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="nav-link text-white/80 hover:text-white text-sm font-medium transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact"
            className="px-5 py-2.5 rounded-full bg-[#4ade80] text-[#081a0f] text-sm font-bold hover:bg-[#86efac] transition-colors">
            Request a Consultation
          </a>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#081a0f]/98 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-white/80 hover:text-[#4ade80] text-sm font-medium transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="px-5 py-2.5 rounded-full bg-[#4ade80] text-[#081a0f] text-sm font-bold text-center">
            Request a Consultation
          </a>
        </div>
      )}
    </header>
  );
}
