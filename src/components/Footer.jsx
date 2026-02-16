import React, { useState } from 'react';
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePaperAirplane,
  HiOutlineShieldCheck,
  HiChevronDown
} from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 5000);
  };

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Our Story', path: '/about' },
        { name: 'Technical Journal', path: '/blog' },
        { name: 'Service Locations', path: '/contact' },
        { name: 'Contact Support', path: '/contact' }
      ]
    },
    {
      title: 'Popular Services',
      isServices: true,
      links: [] // We'll handle this separately
    },
    {
      title: 'Legal & Privacy',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms of Service', path: '/terms-of-service' },
        { name: 'Refund Policy', path: '/refund-policy' },
        { name: 'Cookie Policy', path: '/cookie-policy' }
      ]
    }
  ];

  const displayServices = showAllServices ? servicesData : servicesData.slice(0, 4);

  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-10">
            <Link to="/" className="inline-block">
              <img src="/logo/logo.png" alt="Appliance Pixels" className="h-10 w-auto" />
            </Link>
            <p className="text-slate-500 leading-relaxed font-medium max-w-sm">
              The premier appliance restoration studio in Ohio. We combine engineering precision with white-glove service to keep your luxury home running flawlessly.
            </p>
            <div className="flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full text-blue-700 w-fit">
              <HiOutlineShieldCheck size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest">Certified Technical Studio</span>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((group, idx) => (
            <div key={idx} className="lg:col-span-2">
              <h5 className="font-heading font-black text-slate-900 uppercase tracking-widest text-[11px] mb-8">{group.title}</h5>
              {group.isServices ? (
                <div className="space-y-4">
                  <ul className="space-y-4">
                    {displayServices.map((service) => (
                      <li key={service.id}>
                        <Link to={`/service/${service.slug}`} className="text-slate-500 hover:text-blue-600 transition-colors text-[13px] font-bold">
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {servicesData.length > 4 && (
                    <button
                      onClick={() => setShowAllServices(!showAllServices)}
                      className="flex items-center gap-1 text-[11px] font-black text-blue-600 uppercase tracking-widest hover:text-slate-900 transition-colors pt-2"
                    >
                      {showAllServices ? 'Show Less' : 'Show More'}
                      <HiChevronDown className={`transition-transform duration-300 ${showAllServices ? 'rotate-180' : ''}`} size={14} />
                    </button>
                  )}
                </div>
              ) : (
                <ul className="space-y-4">
                  {group.links.map((link, i) => (
                    <li key={i}>
                      <Link to={link.path} className="text-slate-500 hover:text-blue-600 transition-colors text-[13px] font-bold">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Newsletter Column */}
          <div className="lg:col-span-2">
            <h5 className="font-heading font-black text-slate-900 uppercase tracking-widest text-[11px] mb-8">Newsletter</h5>
            <p className="text-[13px] text-slate-500 mb-8 font-medium leading-relaxed">
              Stay updated with technical tips and seasonal maintenance offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative group">
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white border border-slate-200 rounded-xl py-4 px-5 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all text-xs"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-blue-600 text-white w-10 rounded-lg flex items-center justify-center hover:bg-slate-900 transition-colors shadow-lg shadow-blue-600/20"
                >
                  <HiOutlinePaperAirplane size={14} className="rotate-45 -translate-y-0.5" />
                </button>
              </div>
            </form>
            {subscribed && (
              <p className="text-[10px] font-bold text-green-600 mt-4 flex items-center gap-2">
                <HiOutlineShieldCheck size={14} /> Subscribed!
              </p>
            )}
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-slate-200 mb-12">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/5 flex items-center justify-center text-blue-600 border border-blue-600/10">
              <HiOutlineShieldCheck size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Available</p>
              <p className="text-sm font-heading font-black text-slate-900">24/7 Service Support</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/5 flex items-center justify-center text-blue-600 border border-blue-600/10">
              <HiOutlineEnvelope size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Support</p>
              <p className="text-sm font-heading font-black text-slate-900 leading-none">info@appliancepixels.shop</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/5 flex items-center justify-center text-blue-600 border border-blue-600/10">
              <HiOutlineMapPin size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Our Studio</p>
              <p className="text-sm font-heading font-black text-slate-900">4089 Leap Rd, Hilliard, OH 43026</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[11px] font-bold text-slate-400 tracking-wider text-center md:text-left uppercase">
            &copy; {new Date().getFullYear()} Appliance Pixels. ALL RIGHTS RESERVED. <br className="md:hidden" />
            <span className="hidden md:inline mx-4 opacity-30">|</span>
            Restored With Precision.
          </p>
          <div className="flex gap-10">
            {footerLinks[2].links.map((link) => (
              <Link key={link.name} to={link.path} className="text-[11px] font-black text-slate-400 hover:text-blue-600 uppercase tracking-widest transition-colors">
                {link.name.split(' ')[0]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
