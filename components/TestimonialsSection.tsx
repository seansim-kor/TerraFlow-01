import React from 'react';

const testimonials = [
  {
    quote: "We saw a 42% yield increase in our Annam rice paddies after switching. The cost savings on fertilizer were just a bonus. It's a revolutionary product.",
    name: 'Minh Nguyen',
    role: 'Rice Farmer, Vietnam',
    avatar: 'MN',
    color: 'from-emerald-500 to-green-700',
  },
  {
    quote: "Our cotton quality has never been better. The soil health has visibly improved, and we've cut our chemical fertilizer usage by more than half. I highly recommend it.",
    name: 'Li Wei',
    role: 'Cotton Producer, Xinjiang, China',
    avatar: 'LW',
    color: 'from-teal-500 to-emerald-700',
  },
  {
    quote: "As a large-scale palm oil producer, efficiency and sustainability are key. Dr. Terraplus delivers on both. Our trees are healthier and production costs are down 50%.",
    name: 'Ahmad bin Ishak',
    role: 'Plantation Manager, Indonesia',
    avatar: 'AI',
    color: 'from-green-600 to-teal-700',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#f9fafb] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-px bg-[#15803d]" />
            <span className="text-[#15803d] text-sm font-semibold uppercase tracking-widest">Real-World Impact</span>
            <span className="w-6 h-px bg-[#15803d]" />
          </div>
          <h2 className="reveal font-serif font-bold text-[#0d2818] text-4xl md:text-5xl" style={{ transitionDelay: '0.1s' }}>
            Trusted by Growers<br/>Across Asia
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <div key={i} className={`reveal card-glow bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300`}
              style={{ transitionDelay: `${0.1 * i}s` }}>
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-[#d97706] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed mb-7 italic">"{t.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-[#0d2818] text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
