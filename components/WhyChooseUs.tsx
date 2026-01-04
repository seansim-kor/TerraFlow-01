import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileSearch, Globe2 } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-32 bg-eroum-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" width="100%" height="100%">
           <pattern id="pattern-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
             <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
           </pattern>
           <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter"
          >
            The Terra Flow Advantage
          </motion.h2>
          <p className="text-white/50 text-xl font-light max-w-2xl mx-auto">Engineered for Reliability. Built on Transparency. Focused on Continuity.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center group"
          >
            <div className="mx-auto w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center mb-8 border border-white/10 group-hover:bg-eroum-sage group-hover:border-eroum-sage transition-all duration-700">
              <ShieldCheck size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6 italic font-serif">Absolute Compliance</h3>
            <p className="text-white/50 leading-relaxed font-light">
              We eliminate regulatory friction. Every drop of resource we flow is fully vetted against ISCC, ESG, and EU-DR standards, protecting your brand's future.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center group"
          >
            <div className="mx-auto w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center mb-8 border border-white/10 group-hover:bg-eroum-sage group-hover:border-eroum-sage transition-all duration-700">
              <FileSearch size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6 italic font-serif">Crystal Traceability</h3>
            <p className="text-white/50 leading-relaxed font-light">
              Data-backed sourcing. We provide a transparent 'Flow' of information from the extraction origin to the final delivery vessel, ensuring total supply chain integrity.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center group"
          >
            <div className="mx-auto w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center mb-8 border border-white/10 group-hover:bg-eroum-sage group-hover:border-eroum-sage transition-all duration-700">
              <Globe2 size={40} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6 italic font-serif">Bilateral Synergy</h3>
            <p className="text-white/50 leading-relaxed font-light">
              Connecting Korea's tech vision with Malaysia's resource flow. We are the cultural and operational bridge that ensures seamless expansion and long-term stability.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;