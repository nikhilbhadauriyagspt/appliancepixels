import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogsData } from '../data/blogs';
import { HiOutlineArrowLongRight, HiOutlineUser, HiOutlineCalendar, HiOutlineBookmark } from 'react-icons/hi2';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Technical Journal | Appliance Pixels | Expert Insights</title>
        <meta name="description" content="Read our latest articles about appliance maintenance, repair tips, and industry news." />
        <link rel="canonical" href="https://www.appliancepixels.shop/blog" />
      </Helmet>

      {/* Modern Hero Section */}
      <div className="relative pt-44 pb-32 overflow-hidden bg-slate-50">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] -mr-40 -mt-40 opacity-60"></div>
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1e40af 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-100 rounded-full text-blue-700 mb-8">
              <span className="text-[11px] font-black uppercase tracking-widest">Knowledge Base</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-heading font-black text-slate-900 mb-10 leading-[1.05] tracking-tight">
              Technical <br />
              <span className="text-blue-600 italic">Journal.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Expert advice, technical maintenance protocols, and industry insights to help you manage your home's vital systems.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogsData.map((blog, index) => (
            <article
              key={blog.id}
              className="group flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >
              <div className="mb-8 overflow-hidden rounded-[3rem] aspect-[4/3] bg-slate-50 shadow-sm border border-slate-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">{blog.date}</span>
                <div className="w-8 h-px bg-slate-200"></div>
                <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                  <HiOutlineBookmark size={14} className="text-blue-600" />
                  Guide
                </div>
              </div>

              <h3 className="text-2xl font-heading font-black text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
              </h3>

              <p className="text-slate-500 font-medium leading-relaxed mb-8 line-clamp-3">
                {blog.shortDesc}
              </p>

              <Link
                to={`/blog/${blog.id}`}
                className="mt-auto inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-slate-900 hover:text-blue-600 transition-all border-b-2 border-slate-50 pb-2 w-fit"
              >
                Read Full Entry
                <HiOutlineArrowLongRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;


