import React from 'react';
import { HiStar } from 'react-icons/hi2';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Hilliard',
    quote: "The level of professionalism was unmatched. They didn't just fix my refrigerator; they explained the issue and ensured it wouldn't happen again."
  },
  {
    id: 2,
    name: 'Michael Smith',
    location: 'Dublin',
    quote: "Prompt, courteous, and incredibly skilled. A true boutique experience for home maintenance."
  },
  {
    id: 3,
    name: 'Emily Davis',
    location: 'Upper Arlington',
    quote: "I trust no one else with my vintage appliances. Their technical knowledge is simply superior."
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-white" id="testimonials">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
           <div className="flex justify-center gap-1 mb-6 text-gray-900">
             {[...Array(5)].map((_, i) => <HiStar key={i} size={14} />)}
           </div>
           <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">Client Stories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {testimonials.map((t, index) => (
            <div key={t.id} className="text-center group" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="text-4xl font-serif text-gray-200 mb-6">"</div>
              <p className="text-lg md:text-xl text-gray-900 font-light leading-relaxed italic mb-8">
                {t.quote}
              </p>
              <div className="w-8 h-px bg-gray-200 mx-auto mb-6 group-hover:w-16 group-hover:bg-gray-900 transition-all duration-500"></div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-1">{t.name}</h5>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{t.location}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
