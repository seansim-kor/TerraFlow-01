import React, { useEffect, useRef, useState } from 'react';
import { View } from '../App';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface Props { setView: (v: View) => void; }

const STATS = [
  { num: 94, suffix: '%', label: 'Pathogen Suppression Rate' },
  { num: 3, suffix: 'x', label: 'Faster Root Development' },
  { num: 12, suffix: '+', label: 'Active Microbial Strains' },
  { num: 40, suffix: '%', label: 'Avg. Yield Increase' },
];

const VALUES = [
  {
    icon: '🌱',
    title: 'Biological Intelligence',
    desc: 'Living microbial consortia that adapt, compete, and rebuild — not chemicals that suppress.',
  },
  {
    icon: '🔬',
    title: 'Science-Backed Formulation',
    desc: 'Each strain is selected for synergistic effect. Lab-verified against 14 key soil pathogens.',
  },
  {
    icon: '🌍',
    title: 'ASEAN-Optimized',
    desc: 'Tropical humidity, laterite soils, monsoon cycles — our strains are acclimated to your land.',
  },
];

const MARQUEE_ITEMS = [
  'Biological Soil Restoration',
  'Pathogen Suppression',
  'Microbial Consortia',
  'Root Zone Rebuilding',
  'ASEAN Agriculture',
  'Organic-Certified',
  'Yield Enhancement',
];

function useCountUp(target: number, triggered: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(timer); }
      else setVal(start);
    }, 20);
    return () => clearInterval(timer);
  }, [triggered, target]);
  return val;
}

const StatItem: React.FC<{ num: number; suffix: string; label: string; triggered: boolean }> = ({ num, suffix, label, triggered }) => {
  const val = useCountUp(num, triggered);
  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-serif font-bold text-white leading-none">
        {val}<span className="text-terra-green">{suffix}</span>
      </div>
      <div className="mt-2 text-xs uppercase tracking-widest text-terra-light/50">{label}</div>
    </div>
  );
};

const HomeSection: React.FC<Props> = ({ setView }) => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsTriggered, setStatsTriggered] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStatsTriggered(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="hero-bg absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-terra-deeper/20 via-transparent to-terra-deep" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-left md:pl-16">
          <p className="io-trigger text-[11px] uppercase tracking-[0.25em] text-terra-amber font-semibold mb-5">
            Biological Soil Science · ASEAN
          </p>
          <h1 className="io-trigger delay-1 font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.08] max-w-3xl">
            Rebuild the<br />
            <em className="not-italic text-terra-green-light">Soil Ecosystem.</em>
          </h1>
          <p className="io-trigger delay-2 mt-6 text-lg md:text-xl text-terra-light/70 max-w-xl leading-relaxed">
            When the soil breaks, nothing grows right. Dr. Terraplus restores the invisible
            biological foundation your crops depend on.
          </p>
          <div className="io-trigger delay-3 mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => setView('solutions')}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-terra-green text-white font-semibold hover:bg-terra-green-light hover:text-terra-stone transition-all duration-200"
            >
              See How It Works <ArrowRight size={16} />
            </button>
            <button
              onClick={() => setView('products')}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-terra-light/20 text-terra-light hover:bg-white/5 transition-all duration-200"
            >
              View Products
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <ChevronDown size={20} className="text-terra-light/30" />
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div className="bg-terra-green/10 border-y border-terra-green/20 py-3 overflow-hidden">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="text-xs uppercase tracking-[0.2em] text-terra-green font-medium px-8">
                ✦ {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── VALUE PROPOSITION ── */}
      <section className="py-28 bg-terra-sand">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="io-trigger text-[11px] uppercase tracking-[0.25em] text-terra-amber font-semibold mb-4">
              Why Dr. Terraplus
            </p>
            <h2 className="io-trigger delay-1 font-serif text-4xl md:text-5xl font-bold text-terra-stone leading-tight">
              The soil is not just dirt.<br />It's a living system.
            </h2>
            <p className="io-trigger delay-2 mt-4 text-terra-stone/60 text-lg leading-relaxed">
              Decades of chemical farming have collapsed the microbial architecture that makes soil work.
              We rebuild it — strain by strain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div
                key={i}
                className={`io-trigger delay-${i + 2} bg-white rounded-2xl p-8 border border-stone-200 hover:border-terra-green/30 hover:shadow-lg transition-all duration-300`}
              >
                <div className="text-4xl mb-5">{v.icon}</div>
                <h3 className="font-semibold text-terra-stone text-lg mb-3">{v.title}</h3>
                <p className="text-terra-stone/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <section ref={statsRef} className="py-24 bg-terra-deep border-y border-terra-green/10">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-[11px] uppercase tracking-[0.25em] text-terra-amber font-semibold mb-12">
            Verified Field Results
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {STATS.map((s, i) => (
              <StatItem key={i} {...s} triggered={statsTriggered} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="py-16 bg-terra-darker">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-terra-light/30 font-medium mb-10">
            Trusted by Farms Across ASEAN
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {['Palm Oil', 'Rice Paddies', 'Durian Orchards', 'Vegetable Farms', 'Rubber Estates'].map((item, i) => (
              <div key={i} className="text-sm font-medium text-terra-light/30 hover:text-terra-light/60 transition-colors tracking-wide">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPLIT CTA ── */}
      <section className="py-28 bg-terra-deep">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="io-trigger text-[11px] uppercase tracking-[0.25em] text-terra-amber font-semibold mb-5">
              The Problem
            </p>
            <h2 className="io-trigger delay-1 font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Your soil is sick.<br />The crops know it.
            </h2>
            <p className="io-trigger delay-2 text-terra-light/60 text-lg leading-relaxed mb-8">
              Stunted growth, root rot, poor yield despite fertiliser. The culprit isn't the weather —
              it's a collapsed soil microbiome that no amount of NPK can fix.
            </p>
            <button
              onClick={() => setView('philosophy')}
              className="io-trigger delay-3 flex items-center gap-2 text-terra-green font-semibold hover:text-terra-green-light transition-colors"
            >
              Read the Science <ArrowRight size={16} />
            </button>
          </div>
          <div className="io-trigger delay-2 grid grid-cols-2 gap-4">
            {[
              { icon: '🦠', label: 'Pathogen Overload', val: 'Root necrosis, wilt' },
              { icon: '🧪', label: 'Chemical Dependency', val: 'Soil pH collapse' },
              { icon: '💧', label: 'Poor Water Retention', val: '30–50% loss' },
              { icon: '📉', label: 'Yield Decline', val: 'Yr-on-yr regression' },
            ].map((item, i) => (
              <div key={i} className="bg-terra-green/5 border border-terra-green/10 rounded-xl p-5">
                <div className="text-2xl mb-3">{item.icon}</div>
                <div className="text-sm font-medium text-terra-light/80 mb-1">{item.label}</div>
                <div className="text-xs text-terra-light/40">{item.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
