import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import {
  HiOutlineArrowLongRight,
  HiOutlineWrenchScrewdriver,
  HiChevronLeft,
  HiChevronRight
} from 'react-icons/hi2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { useBooking } from '../context/BookingContext';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Services = () => {
  const { openBookingModal } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bannerImages = [
    '/service-banner/sec-banner.png',
    '/service-banner/main-baner.png',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Slider Hero Section */}
      <div className="relative pt-[144px] pb-0 overflow-hidden bg-white">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 30000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="h-[300px] md:h-[500px] lg:h-[600px] w-full"
        >
          {bannerImages.map((imgUrl, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-full w-full bg-slate-50">
                <img src={imgUrl} alt={`Banner ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData && servicesData.map((service, index) => (
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
                      <HiOutlineArrowLongRight className="group-hover:translate-x-1 transition-transform" />
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

      {/* CTA Final */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20 -mr-40 -mt-40 group-hover:opacity-30 transition-opacity"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 leading-tight">
                  Can't Find What <br className="hidden md:block" />
                  <span className="text-blue-500">You're Looking For?</span>
                </h2>
                <p className="text-slate-400 text-lg font-medium leading-relaxed">
                  Our technical range is vast. If your appliance isn't listed above, our concierge team can still assist you with a custom restoration quote.
                </p>
              </div>
              <Link
                to="/contact"
                className="w-full lg:w-auto px-12 py-6 bg-blue-600 text-white font-heading font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 text-center"
              >
                Custom Request
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
