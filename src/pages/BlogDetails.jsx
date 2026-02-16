import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogsData } from '../data/blogs';
import { 
  HiOutlineArrowLongLeft, 
  HiOutlineUser, 
  HiOutlineCalendar, 
  HiOutlineBookmark,
  HiOutlineShare,
  HiOutlineClock
} from 'react-icons/hi2';
import { useBooking } from '../context/BookingContext';

const BlogDetails = () => {
  const { id } = useParams();
  const { openBookingModal } = useBooking();
  
  // Checking data source - our previous edit was to src/data/blogs.js
  // Let's re-import from correct path
  const blog = blogsData.find(b => b.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-20">
        <Helmet>
           <title>Article Not Found | Appliance Pixels</title>
        </Helmet>
        <div className="text-center space-y-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full text-slate-400">
            <HiOutlineBookmark size={40} />
          </div>
          <h2 className="text-4xl font-heading font-black text-slate-900">Article Not Found</h2>
          <Link to="/blog" className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-blue-600/20">
            <HiOutlineArrowLongLeft size={20} />
            Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-44 pb-24">
      <Helmet>
        <title>{blog.title} | Technical Journal | Appliance Pixels</title>
        <meta name="description" content={blog.shortDesc} />
      </Helmet>
      
      <div className="container mx-auto px-6 lg:px-12">
        {/* Navigation & Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <Link to="/blog" className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 mb-12 transition-colors group">
            <HiOutlineArrowLongLeft className="group-hover:-translate-x-2 transition-transform" size={18} /> 
            Back to All Articles
          </Link>

          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full text-blue-600 text-[10px] font-black uppercase tracking-widest">
              <HiOutlineBookmark size={14} />
              Technical Guide
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
              <HiOutlineCalendar size={14} className="text-blue-600" />
              {blog.date}
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
              <HiOutlineUser size={14} className="text-blue-600" />
              {blog.author}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-black text-slate-900 mb-10 leading-[1.1] tracking-tight">
            {blog.title}
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed italic border-l-4 border-blue-600 pl-8 py-2">
            {blog.shortDesc}
          </p>
        </div>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto mb-20 relative group" data-aos="zoom-in">
          <div className="rounded-[3.5rem] overflow-hidden shadow-2xl aspect-[21/9] bg-slate-100 border-8 border-white">
            <img 
              src={blog.image} 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" 
              alt={blog.title} 
            />
          </div>
          {/* Action Floating Buttons */}
          <div className="absolute -bottom-6 right-12 flex gap-4">
            <button className="w-14 h-14 bg-white text-slate-900 rounded-2xl shadow-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all active:scale-90">
              <HiOutlineShare size={24} />
            </button>
          </div>
        </div>
             
        {/* Content Body */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-slate prose-lg md:prose-xl max-w-none 
            prose-headings:font-heading prose-headings:font-black prose-headings:text-slate-900 prose-headings:uppercase prose-headings:tracking-tight
            prose-p:text-slate-600 prose-p:font-medium prose-p:leading-relaxed
            prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
            prose-blockquote:border-blue-600 prose-blockquote:bg-slate-50 prose-blockquote:p-8 prose-blockquote:rounded-3xl"
            dangerouslySetInnerHTML={{ __html: blog.longDesc }} 
          />
             
          {/* Call to Action Box */}
          <div className="mt-24 bg-slate-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden group" data-aos="fade-up">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20 group-hover:opacity-30 transition-opacity"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left space-y-4">
                <h3 className="text-2xl md:text-3xl font-heading font-black text-white leading-tight">
                  Require technical <br />
                  <span className="text-blue-500">assistance today?</span>
                </h3>
                <p className="text-slate-400 font-medium">
                  Our certified technicians are available 24/7.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => openBookingModal()}
                  className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-heading font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95"
                >
                  Book Service
                </button>
                <a 
                  href="tel:+15305544817" 
                  className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-heading font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all text-center"
                >
                  Call +1 (530) 554
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;


