import React, { useState, useEffect, useRef } from 'react';
import { View } from '../App';
import { Download, CheckCircle, ArrowRight } from 'lucide-react';

interface Props { setView: (v: View) => void; }

const PRODUCTS = [
  {
    id: 'terraplus-r',
    name: 'Terraplus-R',
    tag: 'Root Recovery Formula',
    desc: 'High-density Bacillus & Trichoderma consortium for fast pathogen competitive exclusion at root surface. Phase 1 cornerstone product.',
    color: 'from-emerald-900 to-terra-deep',
    badge: 'Best Seller',
  },
  {
    id: 'terraplus-b',
    name: 'Terraplus-B',
    tag: 'Biological Nutrient Activator',
    desc: 'PSB + mycorrhizal network builder. Solubilises locked phosphorus, extends root surface 2–3x, activates nitrogen cycling.',
    color: 'from-teal-900 to-terra-deep',
    badge: 'Phase 2',
  },
  {
    id: 'terraplus-s',
    name: 'Terraplus-S',
    tag: 'Soil Structure Restorer',
    desc: 'Humic-producing decomposer mix + enzyme activator complex. Rebuilds organic matter scaffold for long-term ecosystem stability.',
    color: 'from-cyan-900 to-terra-deep',
    badge: 'Phase 3',
  },
];

const SPEC_TABS = ['Physical', 'Chemical', 'Biological'];

const SPECS: Record<string, { label: string; value: string }[]> = {
  Physical: [
    { label: 'Form', value: 'Wettable Powder (WP)' },
    { label: 'Colour', value: 'Off-white to light brown' },
    { label: 'Particle Size', value: '< 50 μm (D50)' },
    { label: 'Moisture Content', value: '≤ 8%' },
    { label: 'Bulk Density', value: '0.45 – 0.55 g/cm³' },
    { label: 'Shelf Life', value: '24 months (15–25°C, sealed)' },
  ],
  Chemical: [
    { label: 'pH (1% solution)', value: '6.5 – 7.5' },
    { label: 'Organic Matter', value: '≥ 40%' },
    { label: 'Total N', value: '≥ 2.5%' },
    { label: 'Humic Acid', value: '≥ 8%' },
    { label: 'Heavy Metals', value: 'ND (below detection limit)' },
    { label: 'EC (1% solution)', value: '< 1.5 dS/m' },
  ],
  Biological: [
    { label: 'Bacillus subtilis', value: '≥ 2 × 10⁹ CFU/g', pct: 85 },
    { label: 'Trichoderma harzianum', value: '≥ 1 × 10⁸ CFU/g', pct: 72 },
    { label: 'Mycorrhizal Spores', value: '≥ 50 IP/g', pct: 60 },
    { label: 'PSB (Phospho-Bacteria)', value: '≥ 5 × 10⁸ CFU/g', pct: 78 },
    { label: 'N-Fixing Bacteria', value: '≥ 1 × 10⁸ CFU/g', pct: 55 },
    { label: 'Total Viable CFU', value: '≥ 5 × 10⁹ /g', pct: 90 },
  ],
};

const CERTIFICATIONS = [
  { label: 'ISO 9001', sub: 'Quality Management' },
  { label: 'Halal', sub: 'Certified' },
  { label: 'ASEAN Bio', sub: 'Standard Compliant' },
  { label: 'Organic OK', sub: 'Input Approved' },
];

const BioBar: React.FC<{ label: string; value: string; pct: number; triggered: boolean }> = ({ label, value, pct, triggered }) => (
  <div className="mb-5">
    <div className="flex justify-between items-baseline mb-1.5">
      <span className="text-sm text-terra-stone font-medium">{label}</span>
      <span className="text-xs text-terra-stone/50">{value}</span>
    </div>
    <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-terra-green rounded-full transition-all duration-[1.2s] ease-out"
        style={{ width: triggered ? `${pct}%` : '0%' }}
      />
    </div>
  </div>
);

const ProductsSection: React.FC<Props> = ({ setView }) => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeTab, setActiveTab] = useState('Physical');
  const [barTriggered, setBarTriggered] = useState(false);
  const [dlState, setDlState] = useState<'idle' | 'loading' | 'done'>('idle');
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBarTriggered(false);
    const t = setTimeout(() => setBarTriggered(true), 300);
    return () => clearTimeout(t);
  }, [activeTab, activeProduct]);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setBarTriggered(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleDownload = (type: string) => {
    setDlState('loading');
    setTimeout(() => setDlState('done'), 1800);
    setTimeout(() => setDlState('idle'), 4000);
  };

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 product-bg">
        <div className="max-w-5xl mx-auto px-6">
          <p className="io-trigger text-[11px] uppercase tracking-[0.25em] text-terra-amber font-semibold mb-5">
            Product Line
          </p>
          <h1 className="io-trigger delay-1 font-serif text-5xl md:text-7xl font-bold text-white leading-[1.08] max-w-3xl">
            Formulated for<br />
            <em className="not-italic text-terra-green-light">tropical soil.</em>
          </h1>
          <p className="io-trigger delay-2 mt-6 text-lg text-terra-light/65 max-w-xl leading-relaxed">
            Three products. Three phases. One complete soil restoration system
            engineered for ASEAN climate conditions.
          </p>
        </div>
      </section>

      {/* ── PRODUCT SELECTOR ── */}
      <section className="py-20 bg-terra-deep">
        <div className="max-w-7xl mx-auto px-6">
          {/* Product Tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {PRODUCTS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveProduct(i)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeProduct === i
                    ? 'bg-terra-green text-white'
                    : 'border border-terra-green/20 text-terra-light/60 hover:border-terra-green/40 hover:text-white'
                }`}
              >
                {p.name}
                {p.badge && (
                  <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-terra-amber/20 text-terra-amber">
                    {p.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Product Detail Split */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left — Product Info */}
            <div>
              <div className={`rounded-2xl bg-gradient-to-br ${PRODUCTS[activeProduct].color} border border-terra-green/15 p-8 mb-6`}>
                <div className="text-[10px] uppercase tracking-widest text-terra-amber font-semibold mb-3">
                  {PRODUCTS[activeProduct].tag}
                </div>
                <h2 className="font-serif text-4xl font-bold text-white mb-4">
                  {PRODUCTS[activeProduct].name}
                </h2>
                <p className="text-terra-light/70 leading-relaxed">
                  {PRODUCTS[activeProduct].desc}
                </p>
              </div>

              {/* Certifications */}
              <div className="grid grid-cols-4 gap-3">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="text-center p-3 bg-terra-green/5 border border-terra-green/10 rounded-xl">
                    <div className="text-[11px] font-bold text-terra-green mb-1">{cert.label}</div>
                    <div className="text-[10px] text-terra-light/40">{cert.sub}</div>
                  </div>
                ))}
              </div>

              {/* Download Buttons */}
              <div className="flex gap-3 mt-6">
                {['TDS', 'MSDS'].map((doc) => (
                  <button
                    key={doc}
                    onClick={() => handleDownload(doc)}
                    disabled={dlState === 'loading'}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-terra-green/25 text-sm text-terra-light/60 hover:border-terra-green hover:text-white transition-all duration-200 disabled:opacity-50"
                  >
                    {dlState === 'loading' ? (
                      <span className="w-4 h-4 border-2 border-terra-green/40 border-t-terra-green rounded-full animate-spin" />
                    ) : dlState === 'done' ? (
                      <CheckCircle size={14} className="text-terra-green" />
                    ) : (
                      <Download size={14} />
                    )}
                    {dlState === 'done' ? 'Downloaded!' : `Download ${doc}`}
                  </button>
                ))}
              </div>
            </div>

            {/* Right — Spec Tabs */}
            <div ref={barRef}>
              <div className="flex gap-1 mb-6 bg-terra-green/5 p-1 rounded-xl border border-terra-green/10">
                {SPEC_TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => { setActiveTab(tab); setBarTriggered(false); setTimeout(() => setBarTriggered(true), 100); }}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      activeTab === tab
                        ? 'bg-terra-green text-white'
                        : 'text-terra-light/50 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="bg-terra-green/5 border border-terra-green/10 rounded-2xl p-6">
                {activeTab === 'Biological' ? (
                  <div>
                    {SPECS.Biological.map((row, i) => (
                      <BioBar key={i} label={row.label} value={row.value} pct={(row as any).pct} triggered={barTriggered} />
                    ))}
                  </div>
                ) : (
                  <div className="divide-y divide-terra-green/10">
                    {SPECS[activeTab].map((row, i) => (
                      <div key={i} className="flex justify-between py-3.5 text-sm">
                        <span className="text-terra-light/50">{row.label}</span>
                        <span className="text-terra-light font-medium text-right max-w-[55%]">{row.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATION GUIDE ── */}
      <section className="py-24 bg-terra-sand">
        <div className="max-w-7xl mx-auto px-6">
          <p className="io-trigger text-[11px] uppercase tracking-[0.25em] text-terra-amber font-semibold mb-4">
            Application
          </p>
          <h2 className="io-trigger delay-1 font-serif text-4xl font-bold text-terra-stone mb-12">
            How to apply Dr. Terraplus.
          </h2>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { step: '01', title: 'Soil Assessment', body: 'pH test + visual root check. Identify pathogen pressure level before selecting product phase.' },
              { step: '02', title: 'Mix & Prepare', body: 'Dilute 200–400g per 200L clean water. Agitate until fully dissolved. Use within 4 hours.' },
              { step: '03', title: 'Root Drench / Foliar', body: 'Apply at base or foliar depending on product. Early morning for best microbial survival.' },
              { step: '04', title: 'Repeat & Monitor', body: 'Weekly for Phase 1, bi-weekly Phase 2–3. Track root colour, plant vigour, and leaf tone.' },
            ].map((item, i) => (
              <div key={i} className={`io-trigger delay-${i + 1} bg-white border border-stone-200 rounded-2xl p-6 hover:border-terra-green/30 hover:shadow-md transition-all duration-200`}>
                <div className="text-3xl font-serif font-bold text-terra-green/20 mb-4">{item.step}</div>
                <h3 className="text-sm font-bold text-terra-stone mb-2">{item.title}</h3>
                <p className="text-xs text-terra-stone/55 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => setView('contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-terra-amber text-white font-semibold hover:bg-terra-amber-lt hover:text-terra-stone transition-all duration-200"
            >
              Request a Consultation <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsSection;
