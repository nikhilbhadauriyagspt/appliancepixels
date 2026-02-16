import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { HiArrowLongRight, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { useBooking } from '../context/BookingContext';

const Services = () => {
  const { openBookingModal } = useBooking();
  
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full text-blue-700 mb-6">
              <span className="text-[11px] font-black uppercase tracking-widest">Our Specialties</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-slate-900 leading-tight">
              Elite Repair <br />
              <span className="text-blue-600">Solutions.</span>
            </h2>
          </div>
          
          <div>
            <Link 
              to="/services" 
              className="group flex items-center gap-4 text-sm font-heading font-black uppercase tracking-widest text-slate-900 bg-slate-50 px-8 py-4 rounded-2xl hover:bg-blue-600 hover:text-white transition-all"
            >
              View All Services
              <HiArrowLongRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData && servicesData.slice(0, 12).map((service, index) => (
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
                    <HiArrowLongRight className="group-hover:translate-x-1 transition-transform" />
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
  );
};

export default Services;
