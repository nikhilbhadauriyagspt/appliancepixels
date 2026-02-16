import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { HiOutlineArrowLongLeft, HiOutlineCheckCircle, HiOutlineShieldCheck, HiOutlineWrenchScrewdriver, HiOutlineClock } from 'react-icons/hi2';
import { useBooking } from '../context/BookingContext';

const ServiceTemplate = ({ 
  title, 
  description, 
  longDescription, 
  image, 
  features, 
  commonIssues,
  slug 
}) => {
  const { openBookingModal } = useBooking();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-44 pb-24">
      <Helmet>
        <title>{title} | Appliance Pixels | Professional Restoration</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <div className="container mx-auto px-6 lg:px-12">
        <Link to="/services" className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 mb-12 transition-colors group">
          <HiOutlineArrowLongLeft className="group-hover:-translate-x-2 transition-transform" size={18} /> 
          Back to All Services
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative" data-aos="fade-right">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-blue-900/10"></div>
            </div>
            
            {/* Floating Trust Badge */}
            <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-8 rounded-[2.5rem] shadow-2xl hidden md:block max-w-[260px] z-20">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-3 rounded-xl"><HiOutlineShieldCheck size={24} /></div>
                <h5 className="font-heading font-black text-xs uppercase tracking-widest leading-tight text-white">Genuine <br /> Restoration</h5>
              </div>
              <p className="text-[11px] font-medium opacity-80 leading-relaxed">
                We use 100% original manufacturer parts for every {title.toLowerCase()} service.
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-10" data-aos="fade-left">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full text-blue-700 mb-6">
                <span className="text-[11px] font-black uppercase tracking-widest">Expert Care</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-black text-slate-900 leading-tight mb-8">
                {title} <br />
                <span className="text-blue-600 italic tracking-tight">Mastery.</span>
              </h1>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">
                {description}
              </p>
            </div>
            
            <div className="prose prose-slate text-slate-500 font-medium leading-relaxed max-w-none">
              <p>{longDescription}</p>
              
              {commonIssues && (
                <div className="mt-10 pt-10 border-t border-slate-100">
                  <h3 className="text-xl font-heading font-black text-slate-900 uppercase tracking-tight mb-6">Common Restoration Scenarios</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0">
                    {commonIssues.map((issue, idx) => (
                      <li key={idx} className="flex items-start gap-3 m-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0"></div>
                        <span className="text-sm font-bold text-slate-700">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100">
              <h5 className="font-heading font-black text-xs uppercase tracking-[0.2em] text-blue-600 mb-8 flex items-center gap-3">
                <HiOutlineWrenchScrewdriver size={20} /> Why Homeowners Trust Us
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                    <HiOutlineCheckCircle className="text-blue-600 flex-shrink-0" size={20} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
              <button 
                onClick={() => openBookingModal(title)} 
                className="w-full sm:w-auto bg-blue-600 hover:bg-slate-900 text-white px-12 py-5 rounded-2xl font-heading font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-600/20 active:scale-95 transition-all text-center"
              >
                Schedule Restoration
              </button>
              <div className="flex items-center gap-3 text-slate-400 font-black text-[10px] uppercase tracking-widest">
                <HiOutlineClock className="text-blue-600" size={20} />
                <span>Same-day appointment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-24 border-t border-slate-100 mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-900 mb-4">The {title} Advantage</h2>
            <p className="text-slate-500 font-medium">Why homeowners across California trust us with their luxury appliances.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] hover:bg-white hover:shadow-xl transition-all duration-500 group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <HiOutlineShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-heading font-black text-slate-900 mb-3">Factory-Certified</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Our technicians are trained directly by manufacturers to handle complex modern systems.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2.5rem] hover:bg-white hover:shadow-xl transition-all duration-500 group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <HiOutlineWrenchScrewdriver size={24} />
              </div>
              <h3 className="text-lg font-heading font-black text-slate-900 mb-3">Precision Tooling</h3>
              <p className="text-sm text-slate-500 leading-relaxed">We use advanced diagnostic equipment to identify the root cause, not just the symptoms.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2.5rem] hover:bg-white hover:shadow-xl transition-all duration-500 group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <HiOutlineCheckCircle size={24} />
              </div>
              <h3 className="text-lg font-heading font-black text-slate-900 mb-3">Upfront Pricing</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Get a clear, itemized quote before we start. No hidden fees or surprise charges.</p>
            </div>
          </div>
        </div>

        {/* Simple Process Section */}
        <div className="py-24 border-t border-slate-100">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-900 mb-6">Restoration Protocol</h2>
              <p className="text-slate-500 font-medium leading-relaxed mb-8">
                We follow a strict, standardized procedure for every {title.toLowerCase()} service to ensure consistent, high-quality results.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-heading font-black text-sm">01</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Forensic Diagnosis</h4>
                    <p className="text-sm text-slate-500">Thorough inspection of all mechanical and electronic components.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-heading font-black text-sm">02</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Precision Repair</h4>
                    <p className="text-sm text-slate-500">Replacement of faulty parts using only genuine OEM components.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-heading font-black text-sm">03</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Performance Validation</h4>
                    <p className="text-sm text-slate-500">Stress-testing the appliance to verify it meets factory standards.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 bg-slate-900 rounded-[3rem] p-12 text-center text-white">
              <h3 className="text-2xl font-heading font-black mb-6">Ready to fix your {title}?</h3>
              <p className="text-slate-400 mb-10">Our experts are available 24/7 for emergency repairs.</p>
              <button 
                onClick={() => openBookingModal(title)} 
                className="w-full py-5 bg-blue-600 rounded-2xl font-heading font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all"
              >
                Book Expert Visit
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceTemplate;

