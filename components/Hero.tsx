import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden ">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="https://raw.githubusercontent.com/seansim-kor/eROUM-2/main/components/EF_Asia_MV1.mp4" type="video/mp4" />
        </video>        
        <div className="absolute inset-0 bg-gradient-to-b from-eroum-cream/80 via-transparent to-eroum-cream/20"></div>      
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10 relative">
        <div className="max-w-3xl">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 border border-white/20 text-eroum-dark/60 text-[11px] font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-eroum-sage"></span>
              Synchronizing Earth's Potential
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-bold text-eroum-dark leading-[1.05] mb-8 tracking-tighter">
              Mastering the <br />
              <span className="text-eroum-sage italic font-light font-serif">Infinite Flow.</span>
            </h1>
            
            <p className="text-lg text-eroum-dark/80 mb-10 max-w-lg leading-relaxed font-light">
              Terra Flow Pte. Ltd. is the premier architect of resource logistics in ASEAN. We bridge Earth's abundance with global demand through precision sourcing and strategic intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-eroum-dark text-white rounded-full font-medium shadow-2xl hover:bg-eroum-earth transition-all duration-500 flex items-center justify-center gap-2 group"
              >
                Explore Sourcing Excellence
                <ArrowDownRight size={18} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;