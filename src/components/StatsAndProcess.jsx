import React from 'react';
import { HiOutlineCalendarDays, HiOutlineWrench, HiOutlineCheckBadge, HiOutlineArrowRight } from 'react-icons/hi2';

const StatsAndProcess = () => {
  const steps = [
    {
      icon: <HiOutlineCalendarDays size={32} />,
      title: 'Easy Scheduling',
      desc: 'Book your service online in less than 2 minutes.'
    },
    {
      icon: <HiOutlineWrench size={32} />,
      title: 'Expert Diagnosis',
      desc: 'Our certified tech arrives and provides a transparent quote.'
    },
    {
      icon: <HiOutlineCheckBadge size={32} />,
      title: 'Perfect Fix',
      desc: 'We repair your appliance using genuine parts and test it thoroughly.'
    }
  ];

  return (
    <div className="bg-white">
      {/* How It Works - Step by Step */}
      <section className="py-24 bg-blue-50/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-slate-900 mb-6">
              Simple Steps to Get <br />
              <span className="text-blue-600">You Back on Track.</span>
            </h2>
            <p className="text-base md:text-lg text-slate-500 font-medium">
              We've refined our process to be as smooth as possible, ensuring you get the best service without the stress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500" data-aos="fade-up" data-aos-delay={idx * 150}>
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {step.icon}
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-black text-blue-600/30 font-mono">0{idx + 1}</span>
                    <h3 className="text-xl font-heading font-black text-slate-900 uppercase tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                {idx < 2 && (
                  <div className="hidden lg:block absolute top-8 -right-6 text-slate-100">
                    <HiOutlineArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsAndProcess;
