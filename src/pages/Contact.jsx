import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  HiOutlinePhone, 
  HiOutlineEnvelope, 
  HiOutlineMapPin, 
  HiOutlineCheckBadge, 
  HiOutlineArrowPath 
} from 'react-icons/hi2';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact Us | Appliance Pixels | California Support</title>
        <meta name="description" content="Get in touch with us for professional appliance maintenance and repair services." />
        <link rel="canonical" href="https://www.appliancepixels.com/contact" />
      </Helmet>

      {/* Hero */}
      <div className="relative pt-44 pb-20 overflow-hidden bg-slate-50">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] -mr-40 -mt-40 opacity-40"></div>
         <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-100 rounded-full text-blue-700 mb-6">
                <span className="text-[11px] font-black uppercase tracking-widest text-blue-600">Concierge Desk</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-black text-slate-900 mb-6 tracking-tight leading-tight">
                How Can We <span className="text-blue-600">Help?</span>
              </h1>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">
                Connect with our expert team for technical support, service scheduling, or general inquiries. We're here to restore your peace of mind.
              </p>
            </div>
         </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="p-8 bg-blue-50/50 border border-blue-100 rounded-[2rem] group hover:bg-white hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-500">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <HiOutlinePhone size={24} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Call Experts</p>
                <a href="tel:+15305544817" className="text-xl font-heading font-black text-slate-900 leading-none">+1 (530) 554-4817</a>
              </div>

              <div className="p-8 bg-emerald-50/50 border border-emerald-100 rounded-[2rem] group hover:bg-white hover:shadow-xl hover:shadow-emerald-600/5 transition-all duration-500">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <HiOutlineEnvelope size={24} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Email Support</p>
                <a href="mailto:info@appliancepixels.com" className="text-lg font-heading font-black text-slate-900 break-all leading-none">info@appliancepixels.com</a>
              </div>

              <div className="p-8 bg-indigo-50/50 border border-indigo-100 rounded-[2rem] group hover:bg-white hover:shadow-xl hover:shadow-indigo-600/5 transition-all duration-500">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <HiOutlineMapPin size={24} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Our Location</p>
                <p className="text-lg font-heading font-black text-slate-900 leading-tight">Grandview Glendale, <br/> CA 91201, USA</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-100 p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-slate-200/50">
                {isSubmitted ? (
                  <div className="text-center py-10">
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                      <HiOutlineCheckBadge size={40} />
                    </div>
                    <h2 className="text-3xl font-heading font-black text-slate-900 mb-4">Message Sent!</h2>
                    <p className="text-slate-500 font-medium mb-10">Our technical team will reach out to you within 2 business hours.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-xs hover:text-slate-900 transition-colors"
                    >
                      <HiOutlineArrowPath size={18} /> Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                        <input required type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-600 transition-all font-medium text-slate-900" placeholder="John Doe" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                        <input required type="email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-600 transition-all font-medium text-slate-900" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Inquiry Subject</label>
                      <input required type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-600 transition-all font-medium text-slate-900" placeholder="e.g. Refrigerator Maintenance" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">How can we help?</label>
                      <textarea required rows={5} className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-600 transition-all font-medium text-slate-900 resize-none" placeholder="Provide technical details or symptoms..."></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full py-5 bg-blue-600 text-white font-heading font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-slate-900 transition-all active:scale-[0.98] disabled:bg-slate-200"
                    >
                      {isLoading ? 'Transmitting...' : 'Send technical Inquiry'}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


