import React from 'react';
import { HiOutlineLightBulb, HiOutlineShieldCheck, HiOutlineCircleStack, HiOutlineLifebuoy } from 'react-icons/hi2';

const TrustFeatures = () => {
  const features = [
    {
      icon: <HiOutlineShieldCheck size={28} />,
      title: 'Certified Expertise',
      desc: 'Our technicians are factory-trained and background-verified for your peace of mind.',
      bgColor: 'bg-blue-50/50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-100'
    },
    {
      icon: <HiOutlineCircleStack size={28} />,
      title: 'Transparent Pricing',
      desc: 'No hidden fees. We provide clear, upfront quotes before any work begins on your appliance.',
      bgColor: 'bg-emerald-50/50',
      iconColor: 'text-emerald-600',
      borderColor: 'border-emerald-100'
    },
    {
      icon: <HiOutlineLightBulb size={28} />,
      title: 'Genuine OEM Parts',
      desc: 'We only use original manufacturer parts to ensure the longevity and performance of your machine.',
      bgColor: 'bg-amber-50/50',
      iconColor: 'text-amber-600',
      borderColor: 'border-amber-100'
    },
    {
      icon: <HiOutlineLifebuoy size={28} />,
      title: '90-Day Warranty',
      desc: 'Every repair comes with our signature 90-day warranty on both parts and labor.',
      bgColor: 'bg-indigo-50/50',
      iconColor: 'text-indigo-600',
      borderColor: 'border-indigo-100'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`${feature.bgColor} ${feature.borderColor} border p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50 group`}
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
            >
              <div className={`${feature.iconColor} mb-8 transition-transform duration-500 group-hover:scale-110`}>
                {feature.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-heading font-black text-slate-900 uppercase tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustFeatures;
