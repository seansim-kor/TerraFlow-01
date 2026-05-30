import React from 'react';
import { View } from '../App';

interface FooterProps {
  setView: (v: View) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-terra-darker border-t border-terra-green/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-terra-green flex items-center justify-center">
                <span className="text-xs font-bold text-white">Dr</span>
              </div>
              <div>
                <div className="text-base font-semibold text-white">Dr. Terraplus</div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-terra-green">
                  Biological Soil Restoration
                </div>
              </div>
            </div>
            <p className="text-terra-light/50 text-sm leading-relaxed max-w-xs">
              Rebuilding the soil ecosystem through biological intelligence —
              not chemicals, but life itself.
            </p>
            <p className="mt-6 text-[11px] uppercase tracking-widest text-terra-amber font-semibold">
              "Rebuild the Soil Ecosystem."
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-terra-green font-semibold mb-5">Navigate</h4>
            <ul className="space-y-3">
              {(['home','philosophy','solutions','products','contact'] as View[]).map((v) => (
                <li key={v}>
                  <button
                    onClick={() => setView(v)}
                    className="text-sm text-terra-light/50 hover:text-white capitalize transition-colors"
                  >
                    {v}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-terra-green font-semibold mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-terra-light/50">
              <li>Kuala Lumpur, Malaysia</li>
              <li>ASEAN Regional HQ</li>
              <li className="pt-2">
                <a href="mailto:info@drterraplus.com" className="text-terra-green hover:text-terra-green-light transition-colors">
                  info@drterraplus.com
                </a>
              </li>
              <li>
                <a href="tel:+60" className="hover:text-white transition-colors">+60 — (Enquire)</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-terra-green/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-terra-light/30">
            © {new Date().getFullYear()} Dr. Terraplus. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-terra-light/30">
            <span>ISO 9001 Certified</span>
            <span className="w-1 h-1 rounded-full bg-terra-green/40" />
            <span>Halal Certified</span>
            <span className="w-1 h-1 rounded-full bg-terra-green/40" />
            <span>ASEAN Bio-Standard</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
