import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/services';
import { useBooking } from '../context/BookingContext';
import { HiOutlineArrowLongRight, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Jose Mendez",
      role: "Operations Management",
      text: "The personalized attention I received from Our Platform was outstanding. They truly made me feel like my issue mattered and didn’t rest until everything was working perfectly. Exceptional service!"
    },
    {
      name: "Danielle Williams",
      role: "Business Analyst",
      text: "I had a complex issue with my home security system, but Our Platform handled it with ease. Their technician quickly identified the problem and delivered a solution that gave me peace of mind. Highly recommended!"
    },
    {
      name: "David Miller",
      role: "Sr. Manager",
      text: "Our Platform’s 24/7 availability is a game-changer. I reached out late at night and was amazed to speak to someone right away. They resolved the issue fast—I felt so relieved and grateful."
    },
    {
      name: "Jeffrey York",
      role: "Real Estate",
      text: "Getting help from Our Platform is always quick and effortless. They genuinely care about their customers and take the time to explain everything clearly. It’s great knowing help is just a call away."
    },
    {
      name: "Veronica Hannon",
      role: "Store Manager",
      text: "The team at Our Platform is incredibly responsive. I had an issue with my security cameras, and they walked me through a fix immediately. Their knowledge and professionalism are second to none."
    },
    {
      name: "Jennifer Austin",
      role: "Finance Management",
      text: "My printer kept jamming and I couldn’t figure out why—until I contacted Our Platform. Not only did their technician fix the problem, but they also explained the cause and how to prevent it. Fantastic experience!"
    },
    {
      name: "Nicholas Duris",
      role: "Relationship Manager",
      text: "When my laptop suddenly crashed, Our Platform came to the rescue. The technician arrived quickly, diagnosed the issue with precision, and had everything up and running in no time. Truly impressive service!"
    }
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = isMobile ? testimonials.length : Math.ceil(testimonials.length / 2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const displayedTestimonials = isMobile
    ? testimonials.map(t => [t])
    : testimonials.reduce((acc, _, i) => {
      if (i % 2 === 0) acc.push(testimonials.slice(i, i + 2));
      return acc;
    }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {displayedTestimonials.map((group, i) => (
          <div key={i} className="w-full flex-shrink-0 flex flex-col md:flex-row gap-6 px-4">
            {group.map((t, idx) => (
              <div
                key={idx}
                className="flex-1 bg-white rounded-[10px] p-[24px] text-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all hover:shadow-lg"
              >
                <img
                  src="/support-banner/profile.png"
                  className="w-[54px] h-[54px] mx-auto mb-4 rounded-full"
                  alt="profile"
                />
                <span className="text-lg block font-semibold text-gray-900">{t.name}</span>
                <p className="text-sm font-bold text-gray-700 mb-2">{t.role}</p>
                <div className="flex justify-center gap-1 mb-4 text-[#ffcc00]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                  ))}
                </div>
                <p className="para-text text-gray-600 italic leading-relaxed">
                  "{t.text}"
                </p>
              </div>
            ))}
            {!isMobile && group.length === 1 && <div className="flex-1 invisible"></div>}
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${currentIndex === i ? 'bg-[#0046be] w-8' : 'bg-gray-400/50'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  const { openBookingModal } = useBooking();

  const openChat = (e) => {
    e.preventDefault();
    if (window.jivo_api) {
      window.jivo_api.open();
    } else {
      console.log("Chat widget not loaded yet");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Our Services | Appliance Pixels</title>
        <meta name="description" content="Expert assistance for your home appliances and devices." />
      </Helmet>

      {/* Header included directly as requested */}
      <header id="header" className="header fixed top-0 left-0 right-0 z-50 flex items-center" style={{ backgroundColor: '#0046be', height: '80px' }}>
        <div className="branding flex items-center w-full">
          <div className="container mx-auto px-4 flex items-center justify-between 2xl:max-w-[1320px]">
            <Link to="/" className="logo flex items-center no-underline">
              <h1 className="sitename m-0 text-white font-bold text-2xl">Customer Support</h1>
            </Link>
            <nav id="navmenu" className="navmenu">
              <div className="flex items-center gap-3 text-left">
                <a href="tel:+1-402-508-9991" className="flex items-center gap-3 no-underline" style={{ cursor: 'pointer' }}>
                  <div className="rounded-full flex items-center justify-center shrink-0" style={{ width: '45px', height: '45px', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'rgb(255, 255, 255)' }}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold uppercase" style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.2' }}>Call Anytime</span>
                    <span className="font-bold whitespace-nowrap text-white" style={{ fontSize: '20px', lineHeight: '1.2' }}>+1-402-508-9991</span>
                  </div>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>


      {/* Main Banner Section */}
      <main>
        <div className="service-best bg-[#f0f2f4] pt-[165px] pb-[105px]">
          <div className="container mx-auto px-4 2xl:max-w-[1320px]">
            <div className="row flex flex-wrap -mx-4">
              <div className="col-lg-12 w-full px-4 pb-[60px]">
                <Link to="/expert-support" className="block">
                  <img
                    className="img-fluid border-set-radius w-full h-auto rounded-[15px]"
                    alt="Explore Our Services"
                    src="/support-banner/bg banner.png"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="about section py-[60px] bg-white overflow-clip" style={{ scrollMarginTop: '112px' }}>
          <div className="container mx-auto px-4 2xl:max-w-[1320px]">
            <div className="about-box border border-[#e0e6ef] p-[30px]">
              <div className="row flex flex-wrap -mx-4 items-center" style={{ minHeight: '400px' }}>
                <div className="col-lg-7 w-full lg:w-7/12 px-4">
                  <div className="content text-start">
                    <h3 className="font-bold text-[28px] mb-[20px] text-gray-900 leading-tight">Expertise That Spans Every Industry</h3>
                    <h2 className="text-[32px] font-bold py-[12px] leading-[35px]" style={{ color: '#0046be' }}>Who we are?</h2>
                    <p className="para-text text-gray-600 text-lg leading-relaxed">
                      Our Platform is your trusted destination for expert assistance—covering everything from home appliances and security systems to smart home technology. We’re more than just a service provider; we’re a team of certified professionals dedicated to delivering fast, personalized solutions whenever you need them. With 24/7 availability and in-depth knowledge of today’s connected living spaces, Our Platform ensures you’re never left without reliable help.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 w-full lg:w-5/12 px-4 relative mt-8 lg:mt-0">
                  <img
                    className="img-fluid border-set-radius w-full h-auto rounded-[15px]"
                    alt="ask expert"
                    src="/support-banner/call-support.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="sl-main-section pb-[60px]">
          <div className="container mx-auto px-4 2xl:max-w-[1320px]">
            <div className="about-box bg-[#e0e6ef] rounded-[15px] p-[30px] md:p-[60px]">
              <div className="sl-sectionHead text-center mb-10">
                <h2 className="text-[32px] font-bold mb-8 text-gray-900">Testimonials</h2>
              </div>

              <TestimonialSlider />
            </div>
          </div>
        </section>

        {/* Promo Section */}
        <section className="mb-20">
          <div className="container mx-auto px-4 2xl:max-w-[1320px]">
            <div className="row flex flex-wrap -mx-4">
              <div className="col-lg-12 w-full px-4">
                <div
                  className="promo_content promo_content_bg text-center relative rounded-[20px] py-[60px] px-[20px] md:py-[100px] md:px-[120px] overflow-hidden mt-[90px]"
                  style={{ background: 'linear-gradient(90deg, #2563eb, #1d4ed8)', zIndex: 1 }}
                >
                  <img className="shap_one absolute top-0 left-0 opacity-20 pointer-events-none" alt="" src="/support-banner/shapes.png" />
                  <img className="shap_two absolute bottom-0 right-0 opacity-20 pointer-events-none" alt="" src="/support-banner/zigzag.png" />

                  <div className="relative z-10">
                    <h2 className="title-animation text-[28px] md:text-[40px] font-bold text-white mb-6 leading-tight">
                      Need Quick, Dependable Help with Your Devices?
                    </h2>
                    <p className="text-white/80 text-lg mb-10 max-w-3xl mx-auto">
                      From smart home setups and security system repairs to network troubleshooting, Our Platform connects you with certified professionals who deliver expert support—whenever and wherever you need it.
                    </p>
                    <a
                      href="#"
                      onClick={openChat}
                      className="inline-block px-10 py-4 bg-white text-[#1d4ed8] rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-all cursor-pointer shadow-lg"
                    >
                      <span>Start with a Free Consultation</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
