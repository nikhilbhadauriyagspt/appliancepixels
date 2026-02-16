import React, { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi2';

const faqs = [
  {
    question: "Do you service luxury brands?",
    answer: "Yes. Our technicians are specifically trained in the architecture of high-end brands including Sub-Zero, Wolf, Miele, and Viking."
  },
  {
    question: "What is your warranty policy?",
    answer: "We offer a comprehensive 45-day warranty on all parts and labor. We stand firmly behind the quality of our craftsmanship."
  },
  {
    question: "How quickly can you arrive?",
    answer: "We offer priority scheduling for urgent matters. Most service calls are fulfilled within 24-48 hours of initial contact."
  },
  {
    question: "Are your parts authentic?",
    answer: "Absolutely. We strictly adhere to manufacturer specifications and use only genuine OEM parts to ensure system integrity."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-32 bg-[#F9F9F9]" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">Inquiries</h2>
          <p className="text-gray-500 font-light">Common questions regarding our service protocols.</p>
        </div>

        <div className="space-y-0 border-t border-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 group">
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-8 text-left focus:outline-none"
              >
                <span className={`text-lg md:text-xl font-serif transition-colors duration-300 ${activeIndex === index ? 'text-gray-900 italic' : 'text-gray-600 group-hover:text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className={`text-gray-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-gray-900' : ''}`}>
                  {activeIndex === index ? <HiMinus size={20} /> : <HiPlus size={20} />}
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-40 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-500 font-light leading-relaxed pr-10">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
