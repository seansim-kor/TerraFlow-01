import React from 'react';
import { motion } from 'framer-motion';

const BrandStory: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-eroum-accent/20 -skew-x-12 translate-x-1/2 -z-0"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Main Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-block mb-4">
             <span className="text-eroum-earth font-medium tracking-[0.4em] uppercase text-xs">Origin Philosophy</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-eroum-dark tracking-tighter">
            The Terra Flow <span className="font-light italic text-eroum-sage font-serif">Dualism</span>
          </h2>
        </motion.div>

        {/* Deconstruction Area: Terra and Flow */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-32 mb-20 relative">
          
          {/* Vertical Divider for Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-eroum-sage/20 to-transparent -translate-x-1/2"></div>

          {/* Part A: Terra */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center md:items-end text-center md:text-right group"
          >
            <div className="mb-8 relative">
              <span className="text-8xl md:text-[100px] leading-none font-bold text-eroum-dark/5 absolute -top-10 -right-10 select-none">TERRA</span>
              <h3 className="text-6xl md:text-7xl leading-none font-bold text-eroum-dark relative z-10">Terra</h3>
            </div>
            
            <div className="flex items-center gap-2 mb-6 text-eroum-earth font-bold tracking-[0.2em] text-[10px] uppercase">
              <span>Foundation</span>
              <span className="w-1 h-1 rounded-full bg-eroum-earth"></span>
              <span>Stability</span>
              <span className="w-1 h-1 rounded-full bg-eroum-earth"></span>
              <span>Earth</span>
            </div>
            
            <p className="text-eroum-dark/70 leading-relaxed max-w-sm text-lg font-light italic">
              "Terra" signifies our root in the natural world. It represents the raw, untapped potential of the earth’s resources and our unwavering commitment to sustainable sourcing at the very origin.
            </p>
          </motion.div>

          {/* Part B: Flow */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center md:items-start text-center md:text-left group"
          >
             <div className="mb-8 relative">
              <span className="text-8xl md:text-[100px] leading-none font-bold text-eroum-sage/10 absolute -top-10 -left-10 select-none">FLOW</span>
              <h3 className="text-6xl md:text-7xl leading-none font-bold text-eroum-sage relative z-10 italic font-serif">Flow</h3>
            </div>

            <div className="flex items-center gap-2 mb-6 text-eroum-sage font-bold tracking-[0.2em] text-[10px] uppercase">
              <span>Logistics</span>
              <span className="w-1 h-1 rounded-full bg-eroum-sage"></span>
              <span>Continuity</span>
              <span className="w-1 h-1 rounded-full bg-eroum-sage"></span>
              <span>Efficiency</span>
            </div>

            <p className="text-eroum-dark/70 leading-relaxed max-w-sm text-lg font-light italic">
              "Flow" is the pulse of our operation. It embodies the seamless logistics, the dynamic connection between markets, and the transparent supply chain that delivers value without interruption.
            </p>
          </motion.div>

        </div>

        {/* The Integration */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="bg-eroum-dark rounded-[2.5rem] p-12 md:p-20 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-eroum-sage to-transparent"></div>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
            Terra Flow Pte. Ltd. exists to synchronize the <strong className="text-eroum-sage font-bold">stability of Earth</strong> with the <strong className="text-eroum-sage font-bold italic font-serif">dynamics of Global Commerce</strong>. We are the architects of a virtuous cycle where resources meet demand with absolute transparency and zero friction.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default BrandStory;