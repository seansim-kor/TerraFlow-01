import React from 'react';

const commitments = [
  {
    title: 'Respect for Nature',
    desc: 'We work with the biological intelligence of the soil — not against it. Our formulas enhance microbial diversity and natural nutrient cycles.',
  },
  {
    title: 'Soil Purification',
    desc: 'We restore contaminated soils — neutralising pH imbalances, resolving salinity, and rebuilding organic matter that supports long-term farm productivity.',
  },
  {
    title: 'Farmer Prosperity',
    desc: 'Better yields, lower input costs, and healthier produce — Dr. Terraplus+ is engineered to directly improve the livelihoods of every farmer who uses it.',
  },
  {
    title: 'Science-Backed Innovation',
    desc: 'Every product is developed through rigorous laboratory research and validated with field trials across multiple crop types and climatic zones in Asia.',
  },
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="bg-[#f9fafb] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — image */}
          <div className="reveal relative">
            <div className="rounded-2xl overflow-hidden h-[520px]">
              <img src="/hero-philosophy.jpg" alt="Farmer holding healthy soil" className="w-full h-full object-cover" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#0d2818] text-white rounded-2xl p-6 shadow-xl max-w-[220px]">
              <div className="font-serif font-black text-[#4ade80] text-4xl">25+</div>
              <div className="text-white/70 text-sm mt-1">Years of Soil Biological Research</div>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <div className="reveal flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-[#15803d]" />
              <span className="text-[#15803d] text-sm font-semibold uppercase tracking-widest">Our Commitment</span>
            </div>
            <h2 className="reveal font-serif font-bold text-[#0d2818] text-4xl md:text-5xl mb-4 leading-tight" style={{ transitionDelay: '0.1s' }}>
              Sustainable Stewardship<br/>for Future Generations
            </h2>
            <p className="reveal text-gray-500 text-base leading-relaxed mb-10" style={{ transitionDelay: '0.15s' }}>
              Dr. Terraplus+ is built on a core belief: healthy soil is the foundation of healthy food, healthy economies, and a healthy planet. Every product we create reflects a commitment to biological integrity over chemical convenience.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {commitments.map((c, i) => (
                <div key={i} className={`reveal`} style={{ transitionDelay: `${0.1 + i * 0.08}s` }}>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#f0fdf4] border-2 border-[#15803d] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#15803d]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-[#0d2818] text-sm mb-1">{c.title}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{c.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
