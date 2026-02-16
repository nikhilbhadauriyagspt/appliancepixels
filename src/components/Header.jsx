import React, { useState, useEffect } from 'react';
import {
  HiBars3BottomRight,
  HiXMark,
  HiPhone,
  HiEnvelope,
  HiClock,
  HiChevronDown,
  HiOutlineWrenchScrewdriver,
  HiOutlineCheckBadge
} from 'react-icons/hi2';
import { Link, useLocation } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { servicesData } from '../data/services';

const Header = () => {
  const { openBookingModal } = useBooking();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services', hasDropdown: true },
    { name: 'Technical Journal', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'shadow-lg' : ''
        }`}>
        {/* Top Tier: Blue Info Bar */}
        <div className={`bg-blue-700 text-white transition-all duration-300 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'
          }`}>
          <div className="container mx-auto px-6 lg:px-12 h-full flex justify-between items-center text-[11px] font-bold tracking-wider uppercase">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <HiClock className="text-blue-200" />
                <span>Available 24/7 For Emergency Repairs</span>
              </div>
              <div className="hidden lg:flex items-center gap-2 border-l border-white/20 pl-8">
                <HiEnvelope className="text-blue-200" />
                <span>info@appliancepixels.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-blue-200">
              <HiOutlineCheckBadge size={16} />
              <span className="font-black">Verified Technical Excellence</span>
            </div>
          </div>
        </div>

        {/* Bottom Tier: White Navigation */}
        <div className={`w-full transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-md'
          : 'bg-white py-5'
          }`}>
          <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">

            {/* Logo Area */}
            <div className="flex items-center gap-16">
              <Link to="/" className="flex-shrink-0">
                <img
                  src="/logo/logo.png"
                  alt="Appliance Pixels"
                  className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-16'}`}
                />
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden xl:flex items-center gap-2">
                {navLinks.map((link) => (
                  <div
                    key={link.name}
                    className="relative group h-full flex items-center"
                    onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                    onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`px-4 py-2 text-[13px] font-heading font-black uppercase tracking-widest transition-all flex items-center gap-1 ${location.pathname === link.path || (link.hasDropdown && location.pathname.startsWith('/service/'))
                        ? 'text-blue-700'
                        : 'text-slate-600 hover:text-blue-700'
                        }`}
                    >
                      {link.name}
                      {link.hasDropdown && <HiChevronDown className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />}
                    </Link>

                    {/* Mega Dropdown */}
                    {link.hasDropdown && (
                      <div className={`absolute top-full left-0 pt-4 transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
                        }`}>
                        <div className="bg-white shadow-2xl rounded-2xl border border-slate-100 p-8 w-[600px] grid grid-cols-2 gap-x-8 gap-y-2">
                          <div className="col-span-2 mb-4 pb-4 border-b border-slate-50 flex justify-between items-center">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">Expert Repair Solutions</span>
                            <Link to="/services" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-700 transition-colors">View All Services</Link>
                          </div>
                          {servicesData.slice(0, 10).map((service) => (
                            <Link
                              key={service.id}
                              to={`/service/${service.slug}`}
                              className="group/item flex items-center gap-4 p-3 rounded-xl hover:bg-blue-50 transition-all"
                            >
                              <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:bg-blue-700 group-hover/item:text-white transition-all">
                                <HiOutlineWrenchScrewdriver size={20} />
                              </div>
                              <div>
                                <p className="text-[13px] font-heading font-bold text-slate-900 leading-none mb-1">{service.title}</p>
                                <p className="text-[10px] text-slate-400 font-medium">Professional Repair</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* CTA Section */}
            <div className="flex items-center gap-8">
              <div className="hidden md:flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all">
                  <HiPhone size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase font-black tracking-tighter">Call Anytime</span>
                  <a href="tel:+15305544817" className="text-base font-heading font-black text-slate-900 leading-none">
                    +1 (530) 554-4817
                  </a>
                </div>
              </div>

              <button
                onClick={() => openBookingModal()}
                className="px-8 py-3.5 bg-blue-700 hover:bg-slate-900 text-white rounded-full text-[12px] font-heading font-black uppercase tracking-widest shadow-lg shadow-blue-700/20 transition-all active:scale-95"
              >
                Book Now
              </button>

              <button
                className="xl:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(true)}
              >
                <HiBars3BottomRight size={32} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed inset-0 z-[200] transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'
        }`}>
        <div
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <div className={`absolute right-0 top-0 h-full w-[85%] max-w-[400px] bg-white transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="p-8 flex justify-between items-center border-b border-slate-100">
              <img src="/logo/logo.png" className="h-8" alt="Logo" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 bg-slate-50 text-slate-900 rounded-full"
              >
                <HiXMark size={24} />
              </button>
            </div>

            {/* Sidebar Links */}
            <div className="flex-1 overflow-y-auto py-10 px-8">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <div key={link.name} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link
                        to={link.path}
                        className={`py-4 text-2xl font-heading font-black tracking-tight transition-all flex-1 ${location.pathname === link.path ? 'text-blue-700' : 'text-slate-900'
                          }`}
                        onClick={() => !link.hasDropdown && setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                      {link.hasDropdown && (
                        <button
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className={`p-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                        >
                          <HiChevronDown size={24} className="text-slate-400" />
                        </button>
                      )}
                    </div>

                    {link.hasDropdown && (
                      <div className={`overflow-hidden transition-all duration-300 bg-slate-50 rounded-2xl ${isMobileServicesOpen ? 'max-h-[500px] py-4 px-6 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                        <div className="flex flex-col gap-4">
                          {servicesData.slice(0, 8).map((service) => (
                            <Link
                              key={service.id}
                              to={`/service/${service.slug}`}
                              className="text-sm font-heading font-bold text-slate-600 hover:text-blue-700"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {service.title}
                            </Link>
                          ))}
                          <Link
                            to="/services"
                            className="text-sm font-heading font-black text-blue-700 border-t border-slate-200 pt-4"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            View All Services
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Footer */}
            <div className="p-8 bg-slate-50 border-t border-slate-100">
              <div className="space-y-6">
                <a href="tel:+15305544817" className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-700">
                    <HiPhone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Emergency Call</p>
                    <p className="text-lg font-heading font-black text-slate-900">+1 (530) 554-4817</p>
                  </div>
                </a>

                <button
                  onClick={() => { openBookingModal(); setIsMenuOpen(false); }}
                  className="w-full py-5 bg-blue-700 text-white text-xs font-heading font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-700/20 active:scale-95 transition-all"
                >
                  Schedule Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;






