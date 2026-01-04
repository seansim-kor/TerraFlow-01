import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Truck, TrendingDown, CheckCircle2, Sprout, Droplets, Zap, Microscope } from 'lucide-react';

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; desc: string; delay: number }> = ({ icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex items-start gap-4 p-6 rounded-2xl bg-white/50 hover:bg-white transition-all shadow-sm border border-transparent hover:border-eroum-sage/20 group"
  >
    <div className="p-3 bg-eroum-sage/10 rounded-xl text-eroum-sage group-hover:bg-eroum-dark group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold text-eroum-dark mb-2">{title}</h4>
      <p className="text-sm text-eroum-dark/60 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const TradingSection: React.FC = () => {
  return (
    <section className="py-32 bg-eroum-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Pillar 1: Bio-Energy Flow */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="order-2 lg:order-1">
            <span className="text-eroum-sage font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Industrial Resource Flow</span>
            <h2 className="text-4xl md:text-5xl font-bold text-eroum-dark mb-8 tracking-tight">Sustainable <br/><span className="font-light italic font-serif">Bio-Energy Pillar</span></h2>
            <p className="text-eroum-dark/60 mb-12 text-xl font-light">
              Strategic sourcing of Palm Acid Oil (PAO) and renewable feedstocks for global bio-refineries. We ensure the raw energy flow never stops.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <FeatureItem 
                delay={0.1}
                icon={<Factory size={24} />}
                title="Direct Extraction"
                desc="Direct gate-access to independent mills across ASEAN for unmatched origin control."
              />
              <FeatureItem 
                delay={0.2}
                icon={<CheckCircle2 size={24} />}
                title="Molecular Precision"
                desc="Guaranteed quality specs (FFA/M&I) verified by global inspection bodies."
              />
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
             >
                <img 
                  src="https://lh3.googleusercontent.com/d/1gpWNQidrVeI6dBVOHneQgwr21QgKhakO"
                  alt="Bio Energy Operations" 
                  className="w-full h-auto object-cover aspect-[4/3] scale-105 hover:scale-100 transition-transform duration-[2s]"
                />
             </motion.div>
          </div>
        </div>

        {/* Pillar 2: Agri-Bio Solutions (NEW) */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
             >
                <img 
                  src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=2070"
                  alt="Precision Agriculture" 
                  className="w-full h-auto object-cover aspect-[4/3] scale-105 hover:scale-100 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-eroum-earth/20 mix-blend-multiply"></div>
             </motion.div>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-eroum-sage/10 rounded-full blur-3xl -z-0"></div>
          </div>

          <div>
            <span className="text-eroum-earth font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Agricultural Technology</span>
            <h2 className="text-4xl md:text-5xl font-bold text-eroum-dark mb-8 tracking-tight">Precision <br/><span className="font-light italic font-serif text-eroum-earth">Agri-Bio Solutions</span></h2>
            <p className="text-eroum-dark/60 mb-12 text-xl font-light">
              Optimizing the Earth from the ground up. We develop and distribute advanced biological inputs that restore soil health and maximize crop performance.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <FeatureItem 
                delay={0.1}
                icon={<Sprout size={24} />}
                title="Soil Amendments"
                desc="Bio-active soil improvers that restore microbial balance and long-term land fertility."
              />
              <FeatureItem 
                delay={0.2}
                icon={<Zap size={24} />}
                title="Absorption Enhancers"
                desc="Scientific catalysts that maximize fertilizer uptake, reducing cost and chemical waste."
              />
              <FeatureItem 
                delay={0.3}
                icon={<Droplets size={24} />}
                title="Liquid Fertilizers"
                desc="Performance-grade foliar and soil nutrients engineered for rapid crop response."
              />
              <FeatureItem 
                delay={0.4}
                icon={<Microscope size={24} />}
                title="Bio-Tech R&D"
                desc="Customized nutrient formulations tailored for specific ASEAN plantation conditions."
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TradingSection;