import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { 
  HiOutlineArrowLongRight, 
  HiOutlineShieldCheck, 
  HiOutlineClock, 
  HiOutlineCheckBadge,
  HiOutlineWrenchScrewdriver
} from 'react-icons/hi2';
import { useBooking } from '../context/BookingContext';

const Services = () => {
  const { openBookingModal } = useBooking();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Hero Section */}
      <div className="relative pt-44 pb-32 overflow-hidden bg-slate-50">
         {/* Subtle Background Elements */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] -mr-40 -mt-40 opacity-60"></div>
         <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1e40af 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
         
         <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-100 rounded-full text-blue-700 mb-8">
                <span className="text-[11px] font-black uppercase tracking-widest">Our Service Catalog</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-heading font-black text-slate-900 mb-10 leading-[1.05] tracking-tight">
                Elite Restoration <br />
                <span className="text-blue-600 italic">For Every Essential.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
                Discover our comprehensive range of specialized technical services, designed to restore and maintain your high-end household appliances.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { icon: <HiOutlineShieldCheck />, text: 'Certified Experts' },
                  { icon: <HiOutlineClock />, text: '24/7 Availability' },
                  { icon: <HiOutlineCheckBadge />, text: 'Genuine Parts' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em]">
                    <span className="text-blue-600 text-lg">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
         </div>
      </div>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData && servicesData.map((service, index) => (
              <div 
                key={service.id || index} 
                className="group relative bg-white border border-slate-100 p-8 rounded-[2rem] hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500 overflow-hidden flex flex-col h-full"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[4rem] -mr-16 -mt-16 group-hover:bg-blue-600 transition-colors duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-blue-600 transition-all duration-500 mb-8 shadow-sm">
                    <HiOutlineWrenchScrewdriver size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 font-medium leading-relaxed mb-10 line-clamp-3">
                    {service.shortDesc}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between gap-4">
                    <Link 
                      to={`/service/${service.slug}`}
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-all"
                    >
                      Explore Details
                      <HiOutlineArrowLongRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <button 
                      onClick={() => openBookingModal(service.title)}
                      className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-heading font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg active:scale-95"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20 -mr-40 -mt-40 group-hover:opacity-30 transition-opacity"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 leading-tight">
                  Can't Find What <br className="hidden md:block" />
                  <span className="text-blue-500">You're Looking For?</span>
                </h2>
                <p className="text-slate-400 text-lg font-medium leading-relaxed">
                  Our technical range is vast. If your appliance isn't listed above, our concierge team can still assist you with a custom restoration quote.
                </p>
              </div>
              <Link 
                to="/contact" 
                className="w-full lg:w-auto px-12 py-6 bg-blue-600 text-white font-heading font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 text-center"
              >
                Custom Request
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
