import React from 'react';
import { Link } from 'react-router-dom';

const ExpertSupport = () => {
  const openChat = (e) => {
    if (e) e.preventDefault();
    if (window.jivo_api) {
      window.jivo_api.open();
    } else {
      console.log("Chat widget not loaded yet");
    }
  };

  return (
    <div className="min-h-screen bg-white">
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

      <main className="pt-[80px]">
        <section className="py-12 md:py-20 overflow-hidden">
          <div className="container mx-auto px-4 2xl:max-w-[1320px]">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
              <div className="w-full lg:w-1/2">
                <div className="text-center">
                  <div className="mb-4 inline-block relative w-full">
                    <h3 className="text-2xl font-semibold text-gray-900 w-full">Get help with your tech problems.</h3>
                    <div className="h-1 w-24 bg-[#ffc008] mx-auto mt-2"></div>
                  </div>

                  <div className="mb-8 w-full">
                    <p className="text-[13px] text-gray-600 leading-relaxed mx-auto">
                      Support Plans include Protection, Total Appliance Repair, 24 x 7 Support. By continuing, you agree to the following terms: Conditions of Use | Privacy | CA Privacy
                    </p>
                  </div>

                  <h2 className="text-4xl font-medium pt-4 text-black leading-tight w-full">
                    We Care To Serve Best As We Can
                  </h2>

                  <div className="mt-10">
                    <button
                      onClick={openChat}
                      className="bg-[#ffc008] text-gray-900 text-lg px-8 py-2 rounded-md cursor-pointer  hover:bg-[#e6ac07] transition-all transform hover:scale-105 shadow-md"
                    >
                      Chat Now
                    </button>
                  </div>

                  <div className="mt-16">
                    <img
                      src="/support-banner/process.png"
                      alt="How we work"
                      className="w-full"
                    />
                  </div>

                  <p className="text-[10px] mt-10 text-gray-400 leading-relaxed max-w-3xl mx-auto italic">
                    Our Platform is an independent third-party, IT service provider for software-related problems. Unless stated, we are not affiliated with any company, organization, manufacturer, ISP, or email provider. Our services have helped thousands of people with their computer problems. These services may also be available by the brand owner.
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
                <div className="relative lg:top-16">
                  <img
                    src="/support-banner/hero-img.png"
                    className="w-full h-auto rounded-[15px]"
                    alt="ask expert"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ExpertSupport;
