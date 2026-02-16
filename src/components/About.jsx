import React from 'react';
import { HiOutlineArrowLongRight, HiOutlineCheckCircle } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative" data-aos="fade-right">
            <div className="relative z-10 rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src="/banner/about.jpg" 
                alt="Our Craft" 
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/10 transition-all"></div>
            </div>
            
            {/* Decorative Background Shape */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-slate-50 rounded-full -z-0"></div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-10" data-aos="fade-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full text-blue-700">
                <span className="text-[11px] font-black uppercase tracking-widest">Our Story & Craft</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-heading font-black text-slate-900 leading-[1.1] tracking-tight">
                Engineering Excellence <br />
                <span className="text-blue-600 italic">For Your Essentials.</span>
              </h2>
              
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                Appliance Pixels is a premier restoration studio dedicated to the longevity of your home essentials. We understand that precision is non-negotiable when it comes to high-end appliances. Our mission is to provide seamless, expert solutions that ensure your household operates at its absolute peak performance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                'Expert Component Diagnosis',
                'Genuine Manufacturer Parts',
                'Precision Testing Standards',
                'Factory-Trained Mastery'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-700">
                  <HiOutlineCheckCircle className="text-blue-600 flex-shrink-0" size={20} />
                  <span className="text-sm font-bold">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link 
                to="/about"
                className="inline-flex items-center gap-4 text-slate-900 font-heading font-black text-sm uppercase tracking-widest group border-b-2 border-slate-100 pb-2 hover:border-blue-600 transition-all"
              >
                Read More About Us
                <HiOutlineArrowLongRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

