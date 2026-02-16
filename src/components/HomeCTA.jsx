import React from 'react';

const HomeCTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="p-10 md:p-16 bg-slate-900 rounded-[3rem] relative overflow-hidden group" data-aos="zoom-in">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20 -mr-40 -mt-40 group-hover:opacity-30 transition-opacity"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-4 leading-tight">
                Ready to restore your <br />
                <span className="text-blue-500">appliance to factory standards?</span>
              </h2>
              <p className="text-slate-400 font-medium">
                Experience premium appliance repair services with our dedicated team of professionals.
              </p>
            </div>

            <a
              href="mailto:info@appliancepixels.shop"
              className="w-full lg:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-heading font-black text-xs tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 whitespace-nowrap text-center"
            >
              EMAIL SUPPORT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
