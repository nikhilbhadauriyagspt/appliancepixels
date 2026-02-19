import React, { useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import {
  HiXMark,
  HiOutlineCheckBadge,
  HiOutlineWrenchScrewdriver,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin
} from 'react-icons/hi2';

const BookingModal = () => {
  const { isModalOpen, closeBookingModal, selectedService } = useBooking();
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      closeBookingModal();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500"
        onClick={closeBookingModal}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-[3rem] shadow-2xl overflow-hidden transform transition-all duration-500">

        {/* Header Ribbon */}
        <div className="h-2 w-full bg-blue-600"></div>

        {/* Close Button */}
        <button
          onClick={closeBookingModal}
          className="absolute top-8 right-8 p-2 bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all z-10"
        >
          <HiXMark size={20} />
        </button>

        {isSubmitted ? (
          <div className="p-12 md:p-16 text-center">
            <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-500/5">
              <HiOutlineCheckBadge size={48} />
            </div>
            <h3 className="text-3xl font-heading font-black text-slate-900 mb-4">Request Logged!</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Our technical coordinator will contact you at your provided number within 15 minutes to confirm availability.
            </p>
          </div>
        ) : (
          <div className="p-10 md:p-12">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100 shadow-sm">
                <HiOutlineWrenchScrewdriver size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-black text-slate-900 leading-none mb-2">Book a Repair</h3>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Restoration Concierge • 24/7 Available</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <input required type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-slate-900 font-medium" placeholder="Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Line</label>
                  <input required type="tel" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-slate-900 font-medium" placeholder="Number" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Service Category</label>
                <select
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-slate-600 font-medium appearance-none cursor-pointer"
                  defaultValue={selectedService}
                >
                  <option value="">Choose a service</option>
                  <option value="Printer Issue">Printer Issue</option>
                  <option value="Router Issue">Router Issue</option>
                  <option value="PC & Laptop Issue">PC & Laptop Issue</option>
                  <option value="Email Issue">Email Issue</option>
                  <option value="Outlook Issues">Outlook Issues</option>
                  <option value="Device Connectivity">Device Connectivity</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Service Location</label>
                <textarea required rows="2" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-slate-900 font-medium resize-none" placeholder="Enter your full address..."></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-slate-900 text-white font-heading font-black uppercase tracking-widest text-xs py-5 rounded-2xl shadow-xl shadow-blue-600/20 active:scale-[0.98] transition-all mt-4 flex items-center justify-center gap-3 group"
              >
                <span>Request Technical Visit</span>
                <HiOutlineCheckBadge className="group-hover:scale-110 transition-transform" size={20} />
              </button>

              <div className="text-center pt-2">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">Or Call Us Directly</p>
                <a href="tel:4025089511" className="text-blue-600 font-black text-lg hover:underline transition-all">+1-402-508-9511</a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
