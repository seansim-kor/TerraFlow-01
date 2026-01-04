import React from 'react';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  setView: (view: 'home' | 'about') => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8 cursor-pointer" onClick={() => setView('home')}>
              <div className="w-8 h-8 rounded-full bg-eroum-sage/20 border border-eroum-sage flex items-center justify-center">
                 <div className="w-3 h-3 rounded-full bg-eroum-sage" />
              </div>
              <span className="font-bold text-2xl tracking-tighter text-eroum-dark">
                TERRA FLOW
              </span>
            </div>
            <p className="text-eroum-dark/50 max-w-sm mb-8 leading-relaxed font-light text-lg">
              Architects of sustainable resource logistics. Connecting Earth's abundance with global demand through transparent and resilient supply flows.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-eroum-dark mb-8 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-5">
              <li>
                <button 
                  onClick={() => setView('about')}
                  className="text-eroum-dark/60 hover:text-eroum-sage transition-colors text-left font-medium"
                >
                  Philosophy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setView('home');
                    setTimeout(() => document.getElementById('business')?.scrollIntoView({behavior: 'smooth'}), 100);
                  }}
                  className="text-eroum-dark/60 hover:text-eroum-sage transition-colors text-left font-medium"
                >
                  Supply Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setView('home');
                    setTimeout(() => document.getElementById('business')?.scrollIntoView({behavior: 'smooth'}), 100);
                  }}
                  className="text-eroum-dark/60 hover:text-eroum-sage transition-colors text-left font-medium"
                >
                  Strategy & Entry
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-eroum-dark mb-8 text-sm uppercase tracking-widest">Connect</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-eroum-dark/60">
                <MapPin size={22} className="shrink-0 text-eroum-sage" />
                <span className="font-light">Selangor, Malaysia <br/> & Singapore</span>
              </li>
              <li className="flex items-center gap-4 text-eroum-dark/60">
                <Mail size={22} className="shrink-0 text-eroum-sage" />
                <a href="mailto:seansim.kor@gmail.com" className="hover:text-eroum-sage font-medium">seansim.kor@gmail.com</a>
              </li>
              <li className="flex items-center gap-4 text-eroum-dark/60">
                <Phone size={22} className="shrink-0 text-eroum-sage" />
                <a href="https://wa.me/60172018149" target="_blank" rel="noopener noreferrer" className="hover:text-eroum-sage font-medium">
                  +60 17 201 8149
                </a>
              </li>
            </ul>
            
            {/* Socials */}
            <div className="mt-8">
              <a 
                href="https://www.linkedin.com/in/sean-yssim/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex p-3 bg-eroum-accent/30 rounded-full text-eroum-dark hover:bg-eroum-dark hover:text-white transition-all shadow-sm"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400 font-medium">
          <p>&copy; {new Date().getFullYear()} Terra Flow Pte. Ltd. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-eroum-dark uppercase tracking-widest">Privacy</a>
            <a href="#" className="hover:text-eroum-dark uppercase tracking-widest">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;