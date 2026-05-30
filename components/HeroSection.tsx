import React, { useEffect, useRef } from 'react';

const stats = [
  { value: 95, suffix: '%+', label: 'Nutrient Absorption Rate' },
  { value: 50, suffix: '%',  label: 'Cost Reduction vs Conventional' },
  { value: 40, suffix: '%',  label: 'Average Yield Increase' },
  { value: 13, suffix: '',   label: 'Essential Growth Factors' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1800;
        const step = (timestamp: number, startTime: number) => {
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(ease * target) + suffix;
          if (progress < 1) requestAnimationFrame(t => step(t, startTime));
        };
        requestAnimationFrame(t => step(t, t));
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function HeroSection() {
  return (
    <section id="hero" className="hero-bg min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#081a0f]/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Eyebrow */}
        <div className="reveal flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#4ade80]" />
          <span className="text-[#4ade80] text-sm font-semibold uppercase tracking-widest">
            Nano-Colloidal Biological Technology
          </span>
        </div>

        {/* Headline */}
        <h1 className="reveal font-serif font-black text-white text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl mb-6" style={{ transitionDelay: '0.1s' }}>
          Rebuild the Soil.<br/>
          <span className="text-[#4ade80]">Unlock Every Acre.</span>
        </h1>

        {/* Sub */}
        <p className="reveal text-white/75 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed" style={{ transitionDelay: '0.2s' }}>
          Dr. Terraplus delivers nano-colloidal biological nutrients with over 95% absorption efficiency — restoring degraded soils and maximising yields across ASEAN agriculture.
        </p>

        {/* CTAs */}
        <div className="reveal flex flex-col sm:flex-row gap-4 mb-20" style={{ transitionDelay: '0.3s' }}>
          <a href="#solutions"
            className="px-8 py-4 rounded-full bg-[#4ade80] text-[#081a0f] font-bold text-base hover:bg-[#86efac] transition-all hover:scale-105 shadow-xl shadow-[#4ade80]/20 text-center">
            Explore Solutions
          </a>
          <a href="#contact"
            className="px-8 py-4 rounded-full border-2 border-white/60 text-white font-semibold text-base hover:border-[#4ade80] hover:text-[#4ade80] transition-all text-center">
            Request a Consultation
          </a>
        </div>

        {/* Stats Row */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/15 pt-10" style={{ transitionDelay: '0.4s' }}>
          {stats.map((s, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="font-serif font-black text-[#4ade80] text-4xl md:text-5xl">
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-white/60 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="text-white/40 text-xs uppercase tracking-widest">Scroll</div>
        <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
}
