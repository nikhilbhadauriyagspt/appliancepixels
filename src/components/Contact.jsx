import React, { useState } from 'react';
import { HiOutlineEnvelope, HiOutlineShieldCheck, HiOutlineMapPin } from 'react-icons/hi2';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20 -mr-40 -mt-40"></div>

          <div className="flex flex-col lg:flex-row relative z-10">
            {/* Info Side */}
            <div className="w-full lg:w-5/12 p-10 md:p-16 lg:p-20 bg-slate-800/50 backdrop-blur-md">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-600/10 rounded-full text-blue-400 mb-8">
                <span className="text-[11px] font-black uppercase tracking-widest">Concierge Support</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-12 leading-tight">
                Let's Restore <br />
                <span className="text-blue-500 italic">Your Home.</span>
              </h2>

              <div className="space-y-10">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-blue-500 border border-white/10">
                    <HiOutlineMapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Our Location</p>
                    <p className="text-lg font-medium text-white leading-relaxed">
                      4089 Leap Rd, <br />
                      Hilliard, OH 43026, USA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-blue-500 border border-white/10">
                    <HiOutlineShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Availability</p>
                    <p className="text-lg font-medium text-white italic">24/7 Rapid Response</p>
                    <p className="text-xs text-slate-500 mt-1">Always here to help</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-blue-500 border border-white/10">
                    <HiOutlineEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Digital Support</p>
                    <p className="text-lg font-medium text-white">info@appliancepixels.shop</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="w-full lg:w-7/12 p-10 md:p-16 lg:p-20">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-blue-600 transition-all placeholder-white/10" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                    <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-blue-600 transition-all placeholder-white/10" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Service Type</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-blue-600 transition-all placeholder-white/10" placeholder="e.g. Refrigerator Repair" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Message</label>
                  <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-blue-600 transition-all placeholder-white/10 resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full md:w-auto px-12 py-5 bg-blue-600 text-white font-heading font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                    {submitted ? 'Message Sent Successfully' : 'Send Inquiry'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

