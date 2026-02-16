import React, { useState, useEffect } from 'react';
import { HiOutlineArrowLongRight, HiStar, HiCheckCircle, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useBooking } from '../context/BookingContext';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  const { openBookingModal } = useBooking();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsSubmitted] = useState(false);
  
  const words = [
    "For Your Home.",
    "For Your Kitchen.",
    "For Your Laundry.",
    "For Your Comfort.",
    "For Your Lifestyle."
  ];

  useEffect(() => {
    let typingSpeed = isDeleting ? 70 : 150; // Slower typing (from 50/100 to 70/150)
    
    const timer = setTimeout(() => {
      const currentFullText = words[currentWordIndex];
      
      if (!isDeleting) {
        setDisplayText(currentFullText.slice(0, displayText.length + 1));
        if (displayText === currentFullText) {
          setTimeout(() => setIsSubmitted(true), 3000); // Wait longer before deleting (2s to 3s)
        }
      } else {
        setDisplayText(currentFullText.slice(0, displayText.length - 1));
        if (displayText === '') {
          setIsSubmitted(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWordIndex]);

  const services = [
    { url: '/banner/hero-1.jpg', label: 'Refrigerator Repair' },
    { url: '/banner/hero-2.jpg', label: 'AC Servicing' },
    { url: '/banner/hero-4.jpg', label: 'Washing Machine' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-slate-50/50 pt-36 pb-20 overflow-hidden">
      
      {/* Subtle Visual Enhancements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] -mr-40 -mt-40 opacity-40 z-0"></div>
      
      {/* Faint Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#1e40af 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content: Wider Left Side */}
          <div className="w-full lg:w-[60%] space-y-10" data-aos="fade-right">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex text-blue-600">
                  {[...Array(5)].map((_, i) => <HiStar key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">Trusted California Service</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-heading font-black text-slate-900 leading-[1.1] tracking-tight min-h-[2.2em] md:min-h-[auto]">
                Premium Solutions <br />
                <span className="text-blue-600 block md:inline">
                  {displayText}
                </span>
                <span className="inline-block w-1 h-12 md:h-16 bg-blue-600 ml-2 animate-pulse align-middle"></span>
              </h1>
            </div>

            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">
              We specialize in the restoration of high-end household appliances. Experience precision, reliability, and peace of mind with our expert technicians.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
              <button 
                onClick={() => openBookingModal()}
                className="group px-10 py-5 bg-blue-600 text-white rounded-2xl font-heading font-black text-sm tracking-wide hover:bg-slate-900 transition-all shadow-xl shadow-blue-600/20 active:scale-95 flex items-center gap-3"
              >
                Schedule Now
                <HiOutlineArrowLongRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
              
              <div className="flex items-center gap-4">
                <div className="h-12 w-[1px] bg-slate-200 hidden sm:block"></div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <HiCheckCircle className="text-green-500" size={18} />
                    <span>Certified Technicians</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium ml-6 uppercase tracking-wider">Background Verified</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual: Smaller Right Side */}
          <div className="w-full lg:w-[40%] relative" data-aos="fade-left">
            <div className="relative group">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true, el: '.custom-pagination' }}
                navigation={{ prevEl: '.prev-btn', nextEl: '.next-btn' }}
                className="rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl border-8 border-white"
              >
                {services.map((service, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative h-full w-full">
                      <img src={service.url} alt={service.label} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                      <div className="absolute bottom-8 left-8 text-white">
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Professional Service</span>
                        <h3 className="text-2xl font-bold">{service.label}</h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Slider Controls */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-6 -right-6 flex justify-between z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="prev-btn w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-slate-900 hover:bg-blue-600 hover:text-white transition-all">
                  <HiChevronLeft size={24} />
                </button>
                <button className="next-btn w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-slate-900 hover:bg-blue-600 hover:text-white transition-all">
                  <HiChevronRight size={24} />
                </button>
              </div>
            </div>
            
            {/* Pagination Container */}
            <div className="custom-pagination mt-8 flex justify-center gap-2"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-600 to-transparent"></div>
        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
