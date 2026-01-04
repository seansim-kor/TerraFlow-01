import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ScrollText, Handshake, Sprout } from 'lucide-react';

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; desc: string; delay: number }> = ({ icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex items-start gap-5 p-6 rounded-2xl bg-eroum-accent/20 border border-white hover:border-eroum-sage/30 transition-all group"
  >
    <div className="p-3 bg-white rounded-xl text-eroum-earth shadow-sm group-hover:bg-eroum-earth group-hover:text-white transition-colors duration-500 shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-bold text-eroum-dark mb-2">{title}</h4>
      <p className="text-sm text-eroum-dark/60 leading-relaxed font-light">{desc}</p>
    </div>
  </motion.div>
);

const ConsultingSection: React.FC = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Visual Side */}
          <div className="relative order-2 lg:order-1">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[700px]"
             >
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
                  alt="Terra Flow Strategic Intelligence" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-eroum-dark/20 mix-blend-overlay"></div>
             </motion.div>
             <div className="absolute -bottom-10 -right-10 w-full h-full bg-eroum-accent/30 rounded-[2.5rem] -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="text-eroum-earth font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Strategic Architecture</span>
            <h2 className="text-4xl md:text-6xl font-bold text-eroum-dark mb-8 tracking-tighter">ASEAN Market <br/><span className="italic font-serif font-light text-eroum-sage">Intelligence</span></h2>
            <p className="text-lg text-eroum-dark/70 mb-12 font-light leading-relaxed">
              We provide the critical "Flow" of data and relationships for Korean enterprises. Our intelligence now specializes in bridging the gap between advanced **Agri-Tech innovation** and the massive scale of ASEAN plantations.
            </p>

            <div className="flex flex-col gap-6">
              <FeatureItem 
                delay={0.1}
                icon={<Sprout size={28} />}
                title="Agri-Bio Entry Strategy"
                desc="Specialized roadmaps for biological inputs, fertilizers, and soil technology companies to penetrate the Malaysian and Indonesian markets."
              />
              <FeatureItem 
                delay={0.2}
                icon={<Briefcase size={28} />}
                title="Commercial Synchronization"
                desc="Connecting technology providers with Tier-1 plantation owners and industrial stakeholders through verified trust networks."
              />
              <FeatureItem 
                delay={0.3}
                icon={<ScrollText size={28} />}
                title="Certification & ESG Compliance"
                desc="Expert guidance on ISCC, MSPO, and local environmental regulations for new agricultural products entering the market."
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;