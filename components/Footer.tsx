import React from 'react';

const footerLinks = {
  'Company': ['About Dr. Terraplus+', 'Our Philosophy', 'Eco-Commitment', 'News & Updates'],
  'Solutions': ['For Rice Farmers', 'For Palm Oil Plantations', 'For Cotton & Grain', 'For Vegetables'],
  'Resources': ['Field Test Reports', 'Technical Data Sheet', 'Application Guide', 'FAQ'],
};

export default function Footer() {
  return (
    <footer className="bg-[#081a0f] border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#4ade80] to-[#15803d] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="white" strokeWidth="2">
                  <path d="M12 2C8 2 4 6 4 10c0 6 8 12 8 12s8-6 8-12c0-4-4-8-8-8z"/>
                  <circle cx="12" cy="10" r="2.5" fill="white" stroke="none"/>
                </svg>
              </div>
              <div>
                <div className="font-serif font-bold text-white text-lg leading-none">Dr. Terraplus+</div>
                <div className="text-[10px] text-[#4ade80] uppercase tracking-widest leading-none mt-0.5">Soil Restoration Science</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Rebuild the Soil Ecosystem.<br/>
              Nano-colloidal biological technology for maximum yield, lower costs, and sustainable agriculture across Asia.
            </p>
            {/* Certs */}
            <div className="flex gap-2 flex-wrap">
              {['ISO 9001', 'AT Certified', 'Eco-Safe'].map(b => (
                <span key={b} className="text-xs border border-[#4ade80]/30 text-[#4ade80]/70 rounded px-2 py-0.5">{b}</span>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <div className="text-white font-semibold text-sm mb-5">{group}</div>
              <ul className="space-y-3">
                {links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-white/50 text-sm hover:text-[#4ade80] transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} Dr. Terraplus+. All rights reserved. Powered by EF Solution Asia.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Contact'].map(l => (
              <a key={l} href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
