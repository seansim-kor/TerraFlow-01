import React, { useState } from 'react';
import { View } from '../App';
import { ArrowRight, AlertTriangle, CheckCircle } from 'lucide-react';

interface Props { setView: (v: View) => void; }

const FLOW_STEPS = [
  { label: 'CHEMICAL OVERUSE', desc: 'Salt accumulation & EC spikes above 4.0 dS/m', color: 'border-red-500/40 bg-red-500/5', dot: 'bg-red-400' },
  { label: 'MICROBIOME COLLAPSE', desc: 'Beneficial bacteria populations drop >80%', color: 'border-orange-500/40 bg-orange-500/5', dot: 'bg-orange-400' },
  { label: 'PATHOGEN VACUUM', desc: 'Fusarium & Pythium establish dominance at root surface', color: 'border-amber-500/40 bg-amber-500/5', dot: 'bg-amber-400' },
  { label: 'ROOT NECROSIS', desc: 'Root tip death → nutrient uptake failure → wilt', color: 'border-yellow-500/40 bg-yellow-500/5', dot: 'bg-yellow-400' },
  { label: 'YIELD LOSS', desc: '20–60% seasonal output reduction without apparent cause', color: 'border-terra-green/30 bg-terra-green/5', dot: 'bg-terra-green' },
];

const SOLUTION_STEPS = [
  {
    phase: 'Phase 1',
    title: 'Suppress & Compete',
    icon: '🛡️',
    weeks: 'Wk 1–2',
    body: 'High-density Bacillus subtilis + Trichoderma harzianum inoculation creates competitive exclusion at the root surface. Pathogen populations reduced 60–80% within 14 days.',
    tags: ['B. subtilis', 'T. harzianum', 'Root Drench'],
  },
  {
    phase: 'Phase 2',
    title: 'Restore & Rebuild',
    icon: '🔬',
    weeks: 'Wk 3–6',
    body: 'Phosphorus-solubilising bacteria (PSB) and nitrogen-fixers begin rebuilding nutrient cycling. Mycorrhizal networks extend root surface area 2–3x for enhanced uptake.',
    tags: ['PSB Consortium', 'Mycorrhiza', 'N-Fixers'],
  },
  {
    phase: 'Phase 3',
    title: 'Sustain & Amplify',
    icon: '🌱',
    weeks: 'Wk 7+',
    body: 'Humic-producing decomposers rebuild organic matter scaffold. Enzyme activity (urease, phosphatase) returns to optimal range. Maintenance programme sustains ecosystem stability.',
    tags: ['Humic Builders', 'Enzyme Activators', 'Maintenance'],
  },
];

const SolutionsSection: React.FC<Props> = ({ setView }) => {
  const [activeFlow, setActiveFlow] = useState<number | null>(null);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 bg-terra-deeper">
        <div className="max-w-5xl mx-auto px-6">
          <p className="io-trigger text-[11px] uppercase tracking-[0.25em] text-terra-amber font-semibold mb-5">
            How It Works
          </p>
          <h1 className="io-trigger delay-1 font-serif text-5xl md:text-7xl font-bold text-white leading-[1.08] max-w-3xl">
            The pathogen<br />
            <em className="not-italic text-terra-green-light">sequencing model.</em>
          </h1>
          <p className="io-trigger delay-2 mt-6 text-lg text-terra-light/65 max-w-xl leading-relaxed">
            Soil failure follows a predictable cascade. Dr. Terraplus intervenes at each
            stage with targeted biological agents — not broad-spectrum chemistry.
          </p>
        </div>
      </section>

      {/* ── PATHOGEN FLOW DIAGRAM ── */}
      <section className="py-20 bg-terra-deep">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-center text-[11px] uppercase tracking-[0.25em] text-terra-amber font-semibold mb-12">
            The Soil Failure Cascade
          </p>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-6 bottom-6 w-px bg-terra-green/20" />
            <div className="space-y-2">
              {FLOW_STEPS.map((step, i) => (
                <div
                  key={i}
                  className="flow-step"
                  onClick={() => setActiveFlow(activeFlow === i ? null : i)}
                >
                  <div className={`flex items-start gap-5 p-5 rounded-xl border cursor-pointer transition-all duration-200 ${step.color} ${activeFlow === i ? 'ring-1 ring-terra-green/30' : ''}`}>
                    <div className={`mt-1 w-3 h-3 rounded-full shrink-0 ${step.dot}`} />
                    <div className="flex-1">
                      <div className="text-xs font-bold tracking-widest text-terra-light/60 mb-1">{step.label}</div>
                      <div className="text-sm text-terra-light/80">{step.desc}</div>
                    </div>
                    <div className="text-[11px] text-terra-light/30 shrink-0">Step {i + 1}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3-STEP SOLUTION CARDS ── */}
      <section className="py-28 bg-terra-sand">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="io-trigger text-[11px] uppercase tracking-[0.25em] text-terra-amber font-semibold mb-4">
              The Dr. Terraplus Protocol
            </p>
            <h2 className="io-trigger delay-1 font-serif text-4xl md:text-5xl font-bold text-terra-stone leading-tight">
              Three phases.<br />One restored ecosystem.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SOLUTION_STEPS.map((step, i) => (
              <div
                key={i}
                className={`io-trigger delay-${i + 1} bg-white rounded-2xl border border-stone-200 hover:border-terra-green/30 hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                <div className="bg-terra-deep px-6 py-4 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest text-terra-amber font-bold">{step.phase}</span>
                  <span className="text-[11px] text-terra-light/40 font-medium">{step.weeks}</span>
                </div>
                <div className="p-7">
                  <div className="text-3xl mb-4">{step.icon}</div>
                  <h3 className="text-lg font-bold text-terra-stone mb-3">{step.title}</h3>
                  <p className="text-sm text-terra-stone/60 leading-relaxed mb-5">{step.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] px-3 py-1 rounded-full bg-terra-green/10 text-terra-green font-medium border border-terra-green/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS STRIP ── */}
      <section className="py-16 bg-terra-deep border-y border-terra-green/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '14 days', label: 'First pathogen suppression' },
              { val: '4 weeks', label: 'Root density improvement' },
              { val: '6 weeks', label: 'Full enzyme recovery' },
              { val: '1 season', label: 'Yield improvement visible' },
            ].map((item, i) => (
              <div key={i} className={`io-trigger delay-${i + 1}`}>
                <div className="text-2xl md:text-3xl font-serif font-bold text-terra-green-light mb-1">{item.val}</div>
                <div className="text-xs text-terra-light/40 uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER BANNER ── */}
      <section className="py-10 bg-amber-950/30 border-y border-amber-500/20">
        <div className="max-w-5xl mx-auto px-6 flex items-start gap-4">
          <AlertTriangle size={18} className="text-terra-amber shrink-0 mt-0.5" />
          <p className="text-sm text-terra-amber/80 leading-relaxed">
            <strong className="text-terra-amber">Field results vary by crop type, soil baseline, and application consistency.</strong>{' '}
            All efficacy data referenced is based on controlled field trials and replicated farm programs across ASEAN.
            Dr. Terraplus products are biological soil amendments — they complement, not replace, balanced agronomic programmes.
            Consult our technical team for crop-specific protocol design.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-terra-deep text-center">
        <p className="io-trigger text-[11px] uppercase tracking-[0.25em] text-terra-amber font-semibold mb-5">Ready to Restore?</p>
        <h2 className="io-trigger delay-1 font-serif text-3xl md:text-4xl font-bold text-white mb-8">
          See the products that power the protocol.
        </h2>
        <button
          onClick={() => setView('products')}
          className="io-trigger delay-2 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-terra-green text-white font-semibold hover:bg-terra-green-light hover:text-terra-stone transition-all duration-200"
        >
          View Products <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
};

export default SolutionsSection;
