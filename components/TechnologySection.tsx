import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Nano-Colloidal Formulation',
    desc: 'Our liquid solution is engineered at a nano level — creating ultra-small particles that are instantly water-soluble. Compatible with any drip, foliar spray, or fertigation system.',
    detail: 'Particle size < 100nm ensures uniform distribution and zero clogging in irrigation infrastructure.',
    img: '/hero-products.jpg',
  },
  {
    num: '02',
    title: 'Hyper-Efficient Absorption',
    desc: 'Nano-sized nutrients bypass conventional absorption barriers. Crops absorb over 95% of nutrition directly through leaf stomata and root cell walls — driving rapid, visible growth.',
    detail: 'Conventional fertilizers: 20% absorption. Dr. Terraplus+: 95%+. The difference is measurable within 7–14 days.',
    img: '/hero-solutions.jpg',
  },
  {
    num: '03',
    title: 'Soil Ecosystem Restoration',
    desc: 'Unlike chemical fertilizers that degrade soil, our biological formula neutralises pH, resolves salinity, rebuilds microbial communities, and improves soil structure season after season.',
    detail: 'One application visibly corrects pH and salinity within 24 hours. Sustained use rebuilds organic matter over 2–3 seasons.',
    img: '/hero-home.jpg',
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-px bg-[#15803d]" />
            <span className="text-[#15803d] text-sm font-semibold uppercase tracking-widest">How It Works</span>
            <span className="w-6 h-px bg-[#15803d]" />
          </div>
          <h2 className="reveal font-serif font-bold text-[#0d2818] text-4xl md:text-5xl mb-4" style={{ transitionDelay: '0.1s' }}>
            A 3-Step Revolution<br/>in Crop Nutrition
          </h2>
          <p className="reveal text-gray-500 text-lg" style={{ transitionDelay: '0.15s' }}>
            Simple to apply. Extraordinary in results. Dr. Terraplus+ works at the biological level where conventional products cannot reach.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((s, i) => (
            <div key={i} className={`reveal grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}>

              {/* Text */}
              <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="font-serif font-black text-[#e5e7eb] text-7xl leading-none select-none">{s.num}</div>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-[#0d2818] text-2xl md:text-3xl mb-3">{s.title}</h3>
                    <p className="text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                    <div className="bg-[#f0fdf4] border-l-4 border-[#15803d] rounded-r-lg px-5 py-3">
                      <p className="text-[#166534] text-sm font-medium">{s.detail}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={`rounded-2xl overflow-hidden h-72 ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <img src={s.img} alt={s.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
