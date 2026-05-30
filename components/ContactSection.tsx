import React, { useState } from 'react';
import { CheckCircle, Loader2, Mail, MapPin, Phone } from 'lucide-react';

const CROPS = ['Palm Oil', 'Rice', 'Durian', 'Vegetable', 'Rubber', 'Banana', 'Other'];
const CHALLENGES = [
  'Root rot / Basal stem rot',
  'Stunted growth despite fertilising',
  'Wilt disease (Fusarium/Pythium)',
  'High EC / Salt build-up',
  'Poor fruiting / low yield',
  'Soil compaction / poor drainage',
];

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: '', company: '', country: '', email: '',
    crop: '', volume: '', challenges: [] as string[], message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const toggle = (item: string) => {
    setForm((f) => ({
      ...f,
      challenges: f.challenges.includes(item)
        ? f.challenges.filter((x) => x !== item)
        : [...f.challenges, item],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 2200);
  };

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 contact-bg">
        <div className="max-w-5xl mx-auto px-6">
          <p className="io-trigger text-[11px] uppercase tracking-[0.25em] text-terra-amber font-semibold mb-5">
            Get In Touch
          </p>
          <h1 className="io-trigger delay-1 font-serif text-5xl md:text-6xl font-bold text-white leading-[1.08] max-w-2xl">
            Let's rebuild<br />
            <em className="not-italic text-terra-green-light">your soil.</em>
          </h1>
          <p className="io-trigger delay-2 mt-5 text-lg text-terra-light/65 max-w-lg leading-relaxed">
            Tell us about your farm, your crop, and your challenge.
            Our technical team responds within 24 hours.
          </p>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section className="py-20 bg-terra-deep">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-14">
          {/* Sidebar */}
          <div className="space-y-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-terra-amber font-semibold mb-5">Contact Details</p>
              <div className="space-y-4 text-sm text-terra-light/60">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-terra-green mt-0.5 shrink-0" />
                  <div>Kuala Lumpur, Malaysia<br /><span className="text-terra-light/35">ASEAN Regional HQ</span></div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-terra-green shrink-0" />
                  <a href="mailto:info@drterraplus.com" className="hover:text-white transition-colors">
                    info@drterraplus.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-terra-green shrink-0" />
                  <span>+60 — (Enquire via form)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-terra-green/10">
              <p className="text-[10px] uppercase tracking-widest text-terra-amber font-semibold mb-5">Who We Work With</p>
              <div className="space-y-3 text-sm text-terra-light/55">
                {['Commercial farms (>10ha)', 'Agri-distributors', 'Plantation companies', 'Cooperative groups', 'Research institutions'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-terra-green/40" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-terra-green/10">
              <p className="text-[10px] uppercase tracking-widest text-terra-amber font-semibold mb-5">Response Time</p>
              <div className="text-sm text-terra-light/55">
                <span className="text-terra-green font-semibold">≤ 24 hours</span> on weekdays<br />
                Technical proposals: 3–5 business days
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-24 gap-6 text-center">
                <CheckCircle size={56} className="text-terra-green" />
                <h3 className="font-serif text-3xl font-bold text-white">Enquiry Received.</h3>
                <p className="text-terra-light/60 max-w-sm leading-relaxed">
                  Thank you — our technical team will review your soil challenge and respond within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2.5 rounded-full border border-terra-green/30 text-sm text-terra-light/60 hover:text-white hover:border-terra-green transition-all"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Ahmad Razali' },
                    { id: 'company', label: 'Company / Farm Name', type: 'text', placeholder: 'Green Valley Estate' },
                  ].map((f) => (
                    <div key={f.id}>
                      <label className="block text-[11px] uppercase tracking-widest text-terra-light/40 font-semibold mb-2">{f.label}</label>
                      <input
                        type={f.type}
                        required
                        placeholder={f.placeholder}
                        value={(form as any)[f.id]}
                        onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                        className="w-full bg-terra-green/5 border border-terra-green/15 rounded-xl px-4 py-3 text-sm text-white placeholder-terra-light/25 focus:outline-none focus:border-terra-green/50 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { id: 'country', label: 'Country', type: 'text', placeholder: 'Malaysia' },
                    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'ahmad@greenfarm.com' },
                  ].map((f) => (
                    <div key={f.id}>
                      <label className="block text-[11px] uppercase tracking-widest text-terra-light/40 font-semibold mb-2">{f.label}</label>
                      <input
                        type={f.type}
                        required
                        placeholder={f.placeholder}
                        value={(form as any)[f.id]}
                        onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                        className="w-full bg-terra-green/5 border border-terra-green/15 rounded-xl px-4 py-3 text-sm text-white placeholder-terra-light/25 focus:outline-none focus:border-terra-green/50 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                {/* Crop + Volume */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-terra-light/40 font-semibold mb-2">Primary Crop Type</label>
                    <select
                      value={form.crop}
                      onChange={(e) => setForm({ ...form, crop: e.target.value })}
                      className="w-full bg-terra-green/5 border border-terra-green/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-terra-green/50 transition-colors"
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="" disabled>Select crop</option>
                      {CROPS.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-terra-light/40 font-semibold mb-2">Farm Area (Hectares)</label>
                    <input
                      type="text"
                      placeholder="e.g. 50 ha"
                      value={form.volume}
                      onChange={(e) => setForm({ ...form, volume: e.target.value })}
                      className="w-full bg-terra-green/5 border border-terra-green/15 rounded-xl px-4 py-3 text-sm text-white placeholder-terra-light/25 focus:outline-none focus:border-terra-green/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Soil Challenges */}
                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-terra-light/40 font-semibold mb-3">Soil Challenges (select all that apply)</label>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {CHALLENGES.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggle(item)}
                        className={`text-left px-4 py-2.5 rounded-xl text-xs transition-all duration-150 border ${
                          form.challenges.includes(item)
                            ? 'bg-terra-green/15 border-terra-green/40 text-white'
                            : 'bg-terra-green/3 border-terra-green/10 text-terra-light/50 hover:border-terra-green/25 hover:text-terra-light/75'
                        }`}
                      >
                        {form.challenges.includes(item) && <span className="mr-1.5 text-terra-green">✓</span>}
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-terra-light/40 font-semibold mb-2">Additional Notes</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your current situation, previous treatments used, or any specific questions..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-terra-green/5 border border-terra-green/15 rounded-xl px-4 py-3 text-sm text-white placeholder-terra-light/25 focus:outline-none focus:border-terra-green/50 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-terra-green text-white font-semibold hover:bg-terra-green-light hover:text-terra-stone transition-all duration-200 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    'Submit Enquiry'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
