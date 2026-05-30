import React from 'react';
import { View } from '../App';
import { ArrowRight } from 'lucide-react';

interface Props { setView: (v: View) => void; }

const BROKEN = [
  { icon: '🦠', issue: 'Pathogen Dominance', desc: 'Fusarium, Pythium colonise root zone — beneficial microbes starved out' },
  { icon: '🔴', issue: 'pH Collapse', desc: 'Chronic acidification locks out Phosphorus & Calcium uptake' },
  { icon: '💀', issue: 'Organic Matter Depletion', desc: 'No humic scaffold = no water retention, no microbial food source' },
  { icon: '📉', issue: 'Enzyme Shutdown', desc: 'Urease, phosphatase, and dehydrogenase activity drops below function threshold' },
];

const REBUILT = [
  { icon: '✅', issue: 'Microbial Competitive Exclusion', desc: 'Beneficial Bacillus & Trichoderma strains outcompete pathogens at root surface' },
  { icon: '⚗️', issue: 'pH Buffering System', desc: 'Organic acids produced by introduced strains naturally stabilise pH 6.0–6.8' },
  { icon: '🌿', issue: 'Humic Scaffold Restored', desc: 'Cellulose decomposers rebuild SOM layer, restoring structure and moisture' },
  { icon: '🔬', issue: 'Enzyme Activity Restored', desc: 'Nutrient-cycling enzymes return to functional levels within 3–4 weeks' },
];

const PhilosophySection: React.FC<Props> = ({ setView }) => {
  return (
    <div>
      {/* ── HERO BANNER ── */}
      <section className="relative pt-32 pb-24 overflow-hidden philosophy-bg">
        <div className="max-w-5xl mx-auto px-6">
          <p className="io-trigger text-[11px] uppercase tracking-[0.25em] text-terra-amber font-semibold mb-5">
            Our Philosophy
          </p>
          <h1 className="io-trigger delay-1 font-serif text-5xl md:text-7xl font-bold text-white leading-[1.08] max-w-3xl">
            The seed needs<br />
            <em className="not-italic text-terra-green-light">a house.</em>
          </h1>
          <p className="io-trigger delay-2 mt-6 text-lg text-terra-light/70 max-w-xl leading-relaxed">
            No nutrient programme, no variety selection, no irrigation system will work
            if the soil itself is biologically dead. We start where the problem actually is.
          </p>
        </div>
      </section>

      {/* ── PARADIGM SHIFT SPLIT ── */}
      <section className="py-28 bg-terra-deep">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="io-trigger text-[11px] uppercase tracking-[0.25em] text-terra-amber font-semibold mb-5">
              The Old Paradigm
            </p>
            <h2 className="io-trigger delay-1 font-serif text-4xl font-bold text-white leading-tight mb-6">
              We were treating symptoms,<br />not the cause.
            </h2>
            <p className="io-trigger delay-2 text-terra-light/60 leading-relaxed mb-6">
              Conventional agronomy prescribes fertilisers for deficiency, fungicides for disease,
              pesticides for infestation. Each cycle deepens the dependency and accelerates soil death.
            </p>
            <p className="io-trigger delay-3 text-terra-light/60 leading-relaxed">
              A healthy soil microbiome does all of this naturally — it solubilises phosphorus,
              suppresses pathogens, fixes nitrogen, and builds structure. Dr. Terraplus restores that system.
            </p>
          </div>
          <div className="io-trigger delay-2 space-y-4">
            {[
              { cycle: '01', label: 'Apply Chemical Fertiliser', note: 'Boosts growth short-term, raises EC' },
              { cycle: '02', label: 'Soil Microbiome Crashes', note: 'Salt stress kills beneficial bacteria' },
              { cycle: '03', label: 'Pathogen Fills the Vacuum', note: 'Fusarium, Pythium dominate' },
              { cycle: '04', label: 'Yield Declines', note: 'Apply more fertiliser. Cycle repeats.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-terra-green/5 border border-terra-green/10 rounded-xl">
                <div className="text-[11px] font-bold text-terra-amber bg-terra-amber/10 px-2 py-1 rounded shrink-0">
                  {item.cycle}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white mb-1">{item.label}</div>
                  <div className="text-xs text-terra-light/40">{item.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON GRID ── */}
      <section className="py-28 bg-terra-sand">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="io-trigger text-[11px] uppercase tracking-[0.25em] text-terra-amber font-semibold mb-4">
              Before vs After
            </p>
            <h2 className="io-trigger delay-1 font-serif text-4xl md:text-5xl font-bold text-terra-stone leading-tight">
              What a broken soil looks like.<br />What a rebuilt one does.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Broken House */}
            <div className="io-trigger rounded-2xl overflow-hidden border border-orange-200">
              <div className="bg-amber-50 border-b border-orange-200 px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-400" />
                  <span className="text-sm font-bold text-orange-800 uppercase tracking-wider">Broken House — Before</span>
                </div>
              </div>
              <div className="bg-white divide-y divide-orange-100">
                {BROKEN.map((row, i) => (
                  <div key={i} className="compare-row compare-row-bad flex items-start gap-4 px-6 py-5 border-l-4 border-transparent transition-all duration-200">
                    <span className="text-2xl">{row.icon}</span>
                    <div>
                      <div className="text-sm font-semibold text-terra-stone mb-1">{row.issue}</div>
                      <div className="text-xs text-terra-stone/50 leading-relaxed">{row.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rebuilt House */}
            <div className="io-trigger delay-1 rounded-2xl overflow-hidden border border-emerald-200">
              <div className="bg-emerald-50 border-b border-emerald-200 px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-terra-green" />
                  <span className="text-sm font-bold text-emerald-800 uppercase tracking-wider">Rebuilt House — After</span>
                </div>
              </div>
              <div className="bg-white divide-y divide-emerald-100">
                {REBUILT.map((row, i) => (
                  <div key={i} className="compare-row flex items-start gap-4 px-6 py-5 border-l-4 border-transparent transition-all duration-200">
                    <span className="text-2xl">{row.icon}</span>
                    <div>
                      <div className="text-sm font-semibold text-terra-stone mb-1">{row.issue}</div>
                      <div className="text-xs text-terra-stone/50 leading-relaxed">{row.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRINCIPLE CARDS ── */}
      <section className="py-28 bg-terra-deep">
        <div className="max-w-7xl mx-auto px-6">
          <p className="io-trigger text-center text-[11px] uppercase tracking-[0.25em] text-terra-amber font-semibold mb-14">
            Our Three Principles
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Observe Before You Intervene', body: 'Every soil is different. We map microbial community status before recommending any programme.' },
              { num: '02', title: 'Restore, Don\'t Replace', body: 'We introduce biological helpers to trigger native soil recovery — not dependency on externally managed life.' },
              { num: '03', title: 'Measure What Matters', body: 'Enzyme activity. Microbial CFU count. Root density. Not just "looks green" — we track the biology.' },
            ].map((card, i) => (
              <div key={i} className={`io-trigger delay-${i + 1} bg-terra-green/5 border border-terra-green/15 rounded-2xl p-8 hover:border-terra-green/35 transition-all duration-300`}>
                <div className="text-3xl font-serif font-bold text-terra-green/30 mb-5">{card.num}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-sm text-terra-light/55 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <button
              onClick={() => setView('solutions')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-terra-green text-white font-semibold hover:bg-terra-green-light hover:text-terra-stone transition-all duration-200"
            >
              See Our Solutions <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhilosophySection;
