import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineWrenchScrewdriver,
  HiOutlineUserGroup,
  HiOutlineCheckBadge,
  HiOutlineCpuChip
} from 'react-icons/hi2';

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const values = [
    {
      icon: <HiOutlineShieldCheck size={32} />,
      title: "Technical Integrity",
      desc: "We adhere to manufacturer-recommended diagnostic and repair protocols to ensure the longevity of your equipment."
    },
    {
      icon: <HiOutlineWrenchScrewdriver size={32} />,
      title: "Operational Excellence",
      desc: "Our workflow is designed for efficiency, from the initial service request to the final quality inspection."
    },
    {
      icon: <HiOutlineLightBulb size={32} />,
      title: "Transparent Service",
      desc: "We provide clear, upfront technical assessments and cost estimates before any repair work commences."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Our Story | Appliance Pixels | Professional Repair Mastery</title>
        <meta name="description" content="Discover Appliance Pixels's commitment to professional appliance repair standards, technical expertise, and transparent service delivery." />
        <link rel="canonical" href="https://www.appliancepixels.com/about" />
      </Helmet>

      {/* Modern Hero Section */}
      <div className="relative pt-44 pb-32 overflow-hidden bg-slate-50">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] -mr-40 -mt-40 opacity-60"></div>
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1e40af 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-100 rounded-full text-blue-700 mb-8">
              <span className="text-[11px] font-black uppercase tracking-widest">Our Heritage & Identity</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-slate-900 mb-10 leading-[1.05] tracking-tight">
              Restoring the <br />
              <span className="text-blue-600">Rhythm of Your Home.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Establishing higher standards in household appliance maintenance through technical precision and professional accountability.
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <div className="relative">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
                  <img src="/banner/about.jpg" className="w-full h-full object-cover" alt="Technical Workshop" />
                </div>
                {/* Floating Metric */}
                <div className="absolute -bottom-10 -right-4 md:right-10 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-50 hidden sm:block">
                  <div className="flex items-center gap-6">
                    <div className="text-blue-600 text-5xl font-heading font-black">15+</div>
                    <div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] leading-tight">Years of <br /> Unmatched <br /> Expertise</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-10" data-aos="fade-left">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-heading font-black text-slate-900 leading-tight">
                  A Professional Approach to <br />
                  <span className="text-blue-600">Technical Challenges.</span>
                </h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  Appliance Pixels was founded on the principle that household repairs should be handled with the same level of precision as industrial maintenance. We recognize that modern appliances are complex electronic systems that require specialized knowledge.
                </p>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  Our organization focuses on bridging the gap between appliance failure and long-term functional restoration. We aim to deliver results that meet or exceed original equipment manufacturer specifications.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'OEM Standard Parts',
                  'Advanced Diagnostics',
                  'Protocol-Driven Service',
                  'Technical Documentation'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <HiOutlineCheckBadge className="text-blue-600" size={24} />
                    <span className="font-black text-slate-900 text-xs uppercase tracking-wider">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competencies Grid */}
      <section className="bg-slate-900 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">Our Core Competencies</h2>
            <p className="text-slate-400 text-lg font-medium">The pillars that define our service delivery and technical operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500 group">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-xl shadow-blue-600/20">
                  {v.icon}
                </div>
                <h4 className="text-2xl font-heading font-black text-white mb-6 uppercase tracking-tight">{v.title}</h4>
                <p className="text-slate-400 leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Commitment Section */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-10" data-aos="zoom-in">
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-slate-900 tracking-tight leading-tight">
              Our Commitment to <br />
              <span className="text-blue-600 italic">Total Operational Transparency.</span>
            </h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed">
              We believe that trust is built through consistency and honest service. Appliance Pixels ensures that every client receives a detailed explanation of the appliance fault, the proposed solution, and a breakdown of the parts and labor required.
            </p>

            <div className="pt-10">
              <div className="inline-block border-b-4 border-blue-600 pb-2">
                <p className="font-heading font-black text-slate-900 tracking-tighter text-3xl">APPLIANCE <span className="text-blue-600">PIXELS</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

