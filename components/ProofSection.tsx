import React from 'react';

const bigStats = [
  { value: '25–40%', label: 'Yield Increase', desc: 'Average across crops and regions' },
  { value: '50%',    label: 'Cost Reduction', desc: 'vs. conventional chemical fertilizers' },
  { value: '95%+',   label: 'Nutrient Absorption', desc: 'Ensuring maximum efficiency' },
];

const caseStudies = [
  {
    flag: '🇨🇳',
    region: 'China',
    crops: 'Cotton & Rice',
    result: '+40% yield in Xinjiang cotton, +30% in Heilongjiang rice. Soil pH normalised within 2 seasons. Farmer input costs reduced by half.',
    highlight: '40%',
  },
  {
    flag: '🇻🇳',
    region: 'Vietnam',
    crops: 'Annam Rice',
    result: 'Exceptional 42% yield increase demonstrated across Mekong Delta rice paddies. Significant boost in local farmer household income.',
    highlight: '42%',
  },
  {
    flag: '🌴',
    region: 'Myanmar & Indonesia',
    crops: 'Palm Oil Plantations',
    result: 'Enhanced tree immunity, visibly improved soil structure, and 50% production cost reduction across large-scale plantation operations.',
    highlight: '50%',
  },
];

export default function ProofSection() {
  return (
    <section id="proof" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-px bg-[#15803d]" />
            <span className="text-[#15803d] text-sm font-semibold uppercase tracking-widest">Global Proof & Case Studies</span>
            <span className="w-6 h-px bg-[#15803d]" />
          </div>
          <h2 className="reveal font-serif font-bold text-[#0d2818] text-4xl md:text-5xl mb-4" style={{ transitionDelay: '0.1s' }}>
            Verified Performance:<br/>Delivering Results
          </h2>
          <p className="reveal text-gray-500 text-lg" style={{ transitionDelay: '0.15s' }}>
            Tested and proven across diverse crops, climates, and farming systems throughout Asia.
          </p>
        </div>

        {/* Big Stats */}
        <div className="reveal grid md:grid-cols-3 gap-8 mb-20 p-8 bg-[#f9fafb] rounded-2xl" style={{ transitionDelay: '0.1s' }}>
          {bigStats.map((s, i) => (
            <div key={i} className={`text-center ${i < bigStats.length - 1 ? 'md:border-r border-gray-200' : ''}`}>
              <div className="font-serif font-black text-[#15803d] text-6xl mb-2">{s.value}</div>
              <div className="font-semibold text-[#0d2818] text-lg mb-1">{s.label}</div>
              <div className="text-gray-400 text-sm">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div>
          <h3 className="reveal font-serif font-bold text-[#0d2818] text-2xl mb-8">Success Stories Across Asia</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {caseStudies.map((c, i) => (
              <div key={i} className={`reveal card-glow border border-gray-200 rounded-2xl p-7 transition-all duration-300`}
                style={{ transitionDelay: `${0.1 * i}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{c.flag}</span>
                  <div>
                    <div className="font-semibold text-[#0d2818]">{c.region}</div>
                    <div className="text-[#15803d] text-sm">{c.crops}</div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{c.result}</p>
                <div className="pt-4 border-t border-gray-100 flex items-baseline gap-2">
                  <span className="font-serif font-black text-[#15803d] text-4xl">{c.highlight}</span>
                  <span className="text-gray-400 text-sm">improvement</span>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal text-center">
            <a href="#contact"
              className="inline-flex items-center gap-2 text-[#15803d] font-semibold text-sm hover:gap-3 transition-all">
              View Detailed Field Test Reports
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
