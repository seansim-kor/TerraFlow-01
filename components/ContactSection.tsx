import React, { useState } from 'react';

const crops = ['Rice', 'Palm Oil', 'Cotton', 'Vegetables', 'Corn / Maize', 'Sugarcane', 'Other'];
const challenges = ['Low Yield', 'Soil Degradation', 'High Input Costs', 'Salinity Issues', 'Pest / Disease', 'Other'];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', company: '', crop: '', challenge: '', message: '', hectares: '' });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Eco Commitment Banner */}
      <section className="eco-bg py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="reveal flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-[#86efac]" />
              <span className="text-[#86efac] text-sm font-semibold uppercase tracking-widest">Eco-Commitment</span>
            </div>
            <h2 className="reveal font-serif font-bold text-white text-4xl md:text-5xl mb-5" style={{ transitionDelay: '0.1s' }}>
              Agriculture for<br/>a Healthier Planet
            </h2>
            <p className="reveal text-white/70 text-base leading-relaxed mb-8" style={{ transitionDelay: '0.15s' }}>
              Our products are engineered to be as safe for the environment as they are effective for your crops.
            </p>
            <div className="reveal space-y-4" style={{ transitionDelay: '0.2s' }}>
              {[
                { t: 'Environmentally Neutral', d: 'Neutral pH of 6–7. No harm to water, soil, or human health.' },
                { t: 'Verified Safety', d: 'Heavy metals "Not Detected" — verified by AT Analysis Centre.' },
                { t: 'Zero Residue Risk', d: '99%+ pesticide residue removal. Export-safe, consumer-safe produce.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 border-2 border-[#86efac] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#86efac]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.t}</div>
                    <div className="text-white/60 text-xs mt-0.5">{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="rounded-2xl overflow-hidden h-72 shadow-2xl">
              <img src="/hero-contact.jpg" alt="Sustainable farm" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="bg-[#0d2818] py-16 px-6 text-center">
        <h2 className="reveal font-serif font-black text-white text-4xl md:text-5xl mb-4">Unlock Your Farm's Potential Today</h2>
        <p className="reveal text-white/60 text-lg mb-8 max-w-xl mx-auto" style={{ transitionDelay: '0.1s' }}>
          Our agronomists are ready to assess your soil conditions and recommend the right Dr. Terraplus programme.
        </p>
        <a href="#contact" className="reveal inline-block px-10 py-4 rounded-full bg-[#4ade80] text-[#081a0f] font-bold text-base hover:bg-[#86efac] transition-colors"
          style={{ transitionDelay: '0.15s' }}>
          Request a Consultation
        </a>
      </div>

      {/* Contact Form */}
      <section id="contact" className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="reveal flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-[#15803d]" />
              <span className="text-[#15803d] text-sm font-semibold uppercase tracking-widest">Get in Touch</span>
            </div>
            <h2 className="reveal font-serif font-bold text-[#0d2818] text-3xl md:text-4xl mb-4" style={{ transitionDelay: '0.1s' }}>
              Request a<br/>Free Consultation
            </h2>
            <p className="reveal text-gray-500 text-sm leading-relaxed mb-8" style={{ transitionDelay: '0.15s' }}>
              Tell us about your farm and current challenges. Our agronomic specialists will review your situation and recommend a tailored Dr. Terraplus programme.
            </p>

            <div className="reveal space-y-5" style={{ transitionDelay: '0.2s' }}>
              {[
                { icon: '📧', label: 'Email', val: 'info@marencore.com' },
                { icon: '📱', label: 'WhatsApp', val: '+60 17 201 8149' },
                { icon: '🌏', label: 'Serving', val: 'Malaysia, Vietnam, Indonesia, Myanmar, China' },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">{c.label}</div>
                    <div className="text-gray-700 text-sm">{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form action="https://formsubmit.co/info@marencore.com" method="POST" className="reveal space-y-5">
              <input type="hidden" name="_next" value="https://terraflow-01.onrender.com/" />
              <input type="hidden" name="_subject" value="New Dr. Terraplus Consultation Request" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Full Name *</label>
                    <input name="name" required value={form.name} onChange={handle}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#15803d] focus:ring-2 focus:ring-[#15803d]/10 transition-all"
                      placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Email *</label>
                    <input name="email" type="email" required value={form.email} onChange={handle}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#15803d] focus:ring-2 focus:ring-[#15803d]/10 transition-all"
                      placeholder="john@farm.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Company / Farm Name</label>
                    <input name="company" value={form.company} onChange={handle}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#15803d] transition-all"
                      placeholder="Green Valley Farm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Farm Size (Hectares)</label>
                    <input name="hectares" value={form.hectares} onChange={handle}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#15803d] transition-all"
                      placeholder="e.g. 120" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Primary Crop</label>
                    <select name="crop" value={form.crop} onChange={handle}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#15803d] transition-all bg-white">
                      <option value="">Select crop type</option>
                      {crops.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Main Challenge</label>
                    <select name="challenge" value={form.challenge} onChange={handle}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#15803d] transition-all bg-white">
                      <option value="">Select challenge</option>
                      {challenges.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Message</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handle}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#15803d] focus:ring-2 focus:ring-[#15803d]/10 transition-all resize-none"
                    placeholder="Tell us more about your farm and what you're hoping to achieve..." />
                </div>
                <button type="submit" disabled={status === 'loading'}
                  className="w-full py-4 rounded-xl bg-[#0d2818] text-white font-bold text-base hover:bg-[#15803d] transition-colors disabled:opacity-60 flex items-center justify-center gap-3">
                  {status === 'loading' ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Sending...
                    </>
                  ) : 'Submit Consultation Request'}
                </button>
                <p className="text-gray-400 text-xs text-center">We respond within 1 business day. Your information is kept confidential.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
