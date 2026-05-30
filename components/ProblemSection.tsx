import React from 'react';

const problems = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
      </svg>
    ),
    title: 'Yield Inefficiency',
    desc: 'Conventional fertilizers have reached their limit — up to 80% of nutrients never reach the plant, leading to waste and stagnant yields despite rising input costs.',
    stat: '80%', statLabel: 'nutrients wasted',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.279-2.132z"/>
      </svg>
    ),
    title: 'Soil Degradation',
    desc: 'Decades of chemical overuse have created acidic, saline, and nutrient-depleted soils that struggle to support healthy crops — a cycle that worsens season after season.',
    stat: '40%', statLabel: 'of ASEAN soils degraded',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
      </svg>
    ),
    title: 'Environmental Pressure',
    desc: 'Chemical runoff pollutes waterways, harms ecosystems, and leaves harmful residues on crops — threatening both consumer health and regulatory compliance across export markets.',
    stat: '99%+', statLabel: 'residue removal with Dr. Terraplus',
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-px bg-[#15803d]" />
            <span className="text-[#15803d] text-sm font-semibold uppercase tracking-widest">The Challenge</span>
            <span className="w-6 h-px bg-[#15803d]" />
          </div>
          <h2 className="reveal font-serif font-bold text-[#0d2818] text-4xl md:text-5xl mb-4" style={{ transitionDelay: '0.1s' }}>
            Modern Agriculture<br/>Is at a Crossroads
          </h2>
          <p className="reveal text-gray-500 text-lg" style={{ transitionDelay: '0.15s' }}>
            Inefficiencies, environmental pressures, and rising costs threaten farm profitability across Asia. A smarter, biological approach is no longer optional.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <div key={i} className={`reveal card-glow group border border-gray-200 rounded-2xl p-8 transition-all duration-300 cursor-default`}
              style={{ transitionDelay: `${0.1 * i}s` }}>
              <div className="w-14 h-14 rounded-xl bg-[#f0fdf4] flex items-center justify-center text-[#15803d] mb-6 group-hover:bg-[#15803d] group-hover:text-white transition-colors duration-300">
                {p.icon}
              </div>
              <h3 className="font-semibold text-[#0d2818] text-xl mb-3">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{p.desc}</p>
              <div className="pt-4 border-t border-gray-100">
                <span className="font-serif font-bold text-[#15803d] text-3xl">{p.stat}</span>
                <span className="text-gray-400 text-sm ml-2">{p.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
