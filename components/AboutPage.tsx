import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Landmark, Globe, Award, Leaf } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
      {/* Subpage Hero */}
      <section className="relative py-28 bg-eroum-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
            className="w-full h-full object-cover" 
            alt="Terra Flow Headquarters"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-eroum-sage font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block"
          >
            THE TERRA FLOW STORY
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter"
          >
            Harmonizing the <br/><span className="italic font-light text-eroum-sage font-serif">Global Resource Loop</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-white/60 text-xl leading-relaxed font-light"
          >
            Terra Flow Pte. Ltd. is a dedicated facilitator connecting high-demand technology sectors with biological resources through an intelligent, soil-to-energy supply flow.
          </motion.p>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-eroum-dark mb-10 tracking-tight">The Genesis of Terra Flow</h2>
              <div className="space-y-8 text-eroum-dark/70 text-lg leading-relaxed font-light">
                <p>
                  Terra Flow Pte. Ltd. was founded on a simple realization: the global energy transition begins not in the factory, but in the <strong>soil.</strong>
                </p>
                <p>
                  By mastering the biological foundation—through advanced soil improvers and precision fertilizers—we ensure that the resulting natural resources are higher in quality and more sustainable in their origin.
                </p>
                <p>
                  Today, we bridge the gap between Korean innovation in Agri-Bio technology and the massive scale of ASEAN's resources. We don't just move goods; we move <strong>certified value</strong> from the earth to the engine.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-eroum-accent/40 p-10 rounded-[2rem] text-center border border-white">
                <Leaf className="mx-auto mb-6 text-eroum-earth" size={48} />
                <div className="text-4xl font-bold text-eroum-dark mb-2 tracking-tighter">Agri-Bio</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-eroum-dark/40">Soil Health</div>
              </div>
              <div className="bg-eroum-dark p-10 rounded-[2rem] text-center text-white shadow-xl shadow-eroum-dark/10">
                <Target className="mx-auto mb-6 text-eroum-sage" size={48} />
                <div className="text-4xl font-bold mb-2 tracking-tighter">100%</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">Traceability</div>
              </div>
              <div className="bg-eroum-dark p-10 rounded-[2rem] text-center text-white shadow-xl shadow-eroum-dark/10">
                <Users className="mx-auto mb-6 text-eroum-sage" size={48} />
                <div className="text-4xl font-bold mb-2 tracking-tighter">Tier-1</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">Partner Network</div>
              </div>
              <div className="bg-eroum-accent/40 p-10 rounded-[2rem] text-center border border-white">
                <Award className="mx-auto mb-6 text-eroum-earth" size={48} />
                <div className="text-4xl font-bold text-eroum-dark mb-2 tracking-tighter">ESG</div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-eroum-dark/40">Compliance</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Mission */}
      <section className="py-32 bg-eroum-cream border-y border-eroum-accent/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Landmark className="mx-auto text-eroum-earth mb-10" size={56} />
          <h2 className="text-4xl font-bold text-eroum-dark mb-12 tracking-tight">Global Integrity, Local Intelligence</h2>
          <div className="grid md:grid-cols-2 gap-16 text-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-eroum-dark italic font-serif">Integrated Sourcing</h3>
              <p className="text-eroum-dark/70 font-light leading-relaxed">
                We manage the entire loop. From providing the fertilizers that grow the crops to sourcing the resulting bio-energy resources, Terra Flow ensures total control and transparency for our global partners.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-eroum-dark italic font-serif">Agri-Bio Intelligence</h3>
              <p className="text-eroum-dark/70 font-light leading-relaxed">
                The ASEAN market is changing. We help our partners navigate this shift towards sustainable agriculture, ensuring that their expansion is both commercially successful and environmentally sound.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-eroum-dark mb-12 tracking-tighter">Connect with the Terra Flow Network</h2>
          <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
             className="px-12 py-5 bg-eroum-dark text-white rounded-full hover:bg-eroum-earth transition-all shadow-2xl shadow-eroum-dark/10"
          >
            Initiate a Partnership
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;