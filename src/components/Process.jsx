import React from 'react';

const steps = [
  {
    num: "01",
    title: "Request Service",
    desc: "Book your appointment online or call us. We're available 24/7 for your needs."
  },
  {
    num: "02",
    title: "Expert Diagnosis",
    desc: "A certified technician arrives to perform a thorough forensic inspection."
  },
  {
    num: "03",
    title: "Precision Fix",
    desc: "We use genuine OEM parts to restore your appliance to factory standards."
  },
  {
    num: "04",
    title: "Quality Check",
    desc: "Every repair is stress-tested to ensure long-term reliability and performance."
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-slate-50" id="process">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="mb-20 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-100 rounded-full text-blue-700 mb-6">
            <span className="text-[11px] font-black uppercase tracking-widest">Our Methodology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 leading-tight">
            The Road to <br />
            <span className="text-blue-600 italic">Total Restoration.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Subtle Connecting Line */}
          <div className="hidden md:block absolute top-[2.25rem] left-[15%] right-[15%] h-[2px] bg-blue-100"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative text-center group" data-aos="fade-up" data-aos-delay={index * 100}>
              {/* Step Circle */}
              <div className="relative w-16 h-16 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 z-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl shadow-blue-600/5">
                <span className="text-lg font-heading font-black">{step.num}</span>
              </div>
              
              <h3 className="text-xl font-heading font-black text-slate-900 mb-4 tracking-tight uppercase">
                {step.title}
              </h3>
              
              <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-[200px] mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
