import React from 'react';

const features = [
  {
    icon: '🌱',
    title: 'Complete Compound Fertilizer',
    desc: 'Contains 13 concentrated plant growth factors — N, P, K, Ca, Mg, B, S, Fe, Mn, Zn, Cu, Mo, and Cl — for total crop nutrition in a single application.',
  },
  {
    icon: '🧪',
    title: 'Powerful Soil Conditioner',
    desc: 'Neutralises acidic and alkaline soils, resolves salinity accumulation, and corrects salt stress visibly within 24 hours of application.',
  },
  {
    icon: '🛡️',
    title: 'Enhanced Crop Immunity',
    desc: 'Improves sugar content, fruit size, and freshness while delivering natural sterilising effects that reduce dependence on pesticide inputs.',
  },
  {
    icon: '✅',
    title: 'Pesticide Residue Removal',
    desc: 'Efficiently removes over 99% of harmful pesticide residues from crops and soil — ensuring food safety for domestic consumption and export compliance.',
  },
  {
    icon: '💰',
    title: 'Proven Economic Advantage',
    desc: 'High concentration: 1 litre covers 5,000 sq. metres. Replaces multiple conventional inputs, delivering 50% reduction in total fertilizer expenditure.',
  },
  {
    icon: '🌍',
    title: 'Eco-Friendly & Water Soluble',
    desc: 'Neutral pH of 6–7 poses no harm to water, soil, or human health. Heavy metals verified "Not Detected" by AT Analysis Centre laboratory reports.',
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="bg-[#0d2818] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-px bg-[#4ade80]" />
            <span className="text-[#4ade80] text-sm font-semibold uppercase tracking-widest">Multi-Functional Solutions</span>
            <span className="w-6 h-px bg-[#4ade80]" />
          </div>
          <h2 className="reveal font-serif font-bold text-white text-4xl md:text-5xl mb-4" style={{ transitionDelay: '0.1s' }}>
            An All-in-One Platform<br/>for Farm Health
          </h2>
          <p className="reveal text-white/60 text-lg" style={{ transitionDelay: '0.15s' }}>
            "Perfect Solution" is more than a fertilizer. It's an integrated biological agent that addresses your farm's complete agronomic needs — in a single product.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((f, i) => (
            <div key={i}
              className={`reveal card-glow bg-white/5 border border-white/10 rounded-2xl p-7 transition-all duration-300 cursor-default`}
              style={{ transitionDelay: `${0.08 * i}s` }}>
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-white text-lg mb-2">{f.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="reveal border border-[#4ade80]/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-[#4ade80]/5">
          <div>
            <div className="font-serif font-bold text-white text-2xl mb-1">Ready to transform your farm?</div>
            <div className="text-white/60 text-sm">Available in 1L, 5L, 20L, and bulk drum formats for plantations of any scale.</div>
          </div>
          <a href="#contact"
            className="flex-shrink-0 px-8 py-3.5 rounded-full bg-[#4ade80] text-[#081a0f] font-bold text-sm hover:bg-[#86efac] transition-colors whitespace-nowrap">
            Get a Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}
