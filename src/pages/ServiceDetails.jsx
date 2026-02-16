import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/services';
import { FaCheckCircle, FaArrowLeft, FaShieldAlt, FaTools, FaRegClock } from 'react-icons/fa';
import { useBooking } from '../context/BookingContext';

const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === parseInt(id));
  const { openBookingModal } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light">
        <Helmet>
           <title>Service Not Found - Appliance Pixels</title>
        </Helmet>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Service Not Found</h2>
          <Link to="/" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all shadow-lg">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <Helmet>
        <title>{service.title} - Appliance Pixels Services</title>
        <meta name="description" content={service.shortDesc} />
        <link rel="canonical" href={`https://www.appliancepixels.com/service/${service.slug}`} />
        <meta property="og:title" content={`${service.title} - Professional Repair`} />
        <meta property="og:description" content={service.longDesc} />
        <meta property="og:image" content={service.image} />
      </Helmet>
      
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-bold mb-12 transition-colors group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to All Services
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Image Side */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <div className="relative">
              <img 
                src={service.image} 
                className="rounded-3xl shadow-2xl w-full object-cover max-h-[600px]" 
                alt={service.title} 
              />
              <div className="absolute -bottom-8 -left-8 bg-secondary p-8 rounded-3xl shadow-2xl hidden md:block max-w-[280px]">
                <div className="flex items-center gap-4 text-white">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <FaShieldAlt size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold leading-tight">100% Guaranteed Satisfaction</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <h6 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Our Specialization</h6>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-8 leading-tight">{service.title}</h1>
            
            <p className="text-xl text-primary font-medium mb-6 leading-relaxed">
              {service.shortDesc}
            </p>
            
            <div className="prose prose-lg text-gray-500 mb-10 max-w-none">
              <p>{service.longDesc}</p>
            </div>
            
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 mb-10">
              <h5 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-3">
                <FaTools className="text-secondary" /> Key Features of This Service:
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                    <FaCheckCircle className="text-secondary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button 
                onClick={() => openBookingModal(service.title)}
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest shadow-xl hover:-translate-y-1 transition-all text-center"
              >
                Book Service Now
              </button>
              <div className="flex items-center gap-3 text-gray-500 font-bold">
                <FaRegClock className="text-secondary" />
                <span>Fast 2-Hour Response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;


