import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { HiOutlineDocumentText, HiOutlineArrowLongLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const PolicyTemplate = ({ title, lastUpdated, children, description, canonical }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-44 pb-24">
      <Helmet>
        <title>{title} | Appliance Pixels</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <div className="container mx-auto px-6 lg:px-12">
        <Link to="/" className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 mb-12 transition-colors group">
          <HiOutlineArrowLongLeft className="group-hover:-translate-x-2 transition-transform" size={18} /> 
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 pb-16 border-b border-slate-100">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full text-blue-700 mb-8">
              <HiOutlineDocumentText size={18} />
              <span className="text-[11px] font-black uppercase tracking-widest text-blue-600">Legal Document</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-slate-900 mb-6 tracking-tight">
              {title}
            </h1>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">
              Last updated {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate prose-lg md:prose-xl max-w-none 
            prose-headings:font-heading prose-headings:font-black prose-headings:text-slate-900 prose-headings:uppercase prose-headings:tracking-tight
            prose-p:text-slate-600 prose-p:font-medium prose-p:leading-relaxed
            prose-strong:text-slate-900 prose-strong:font-black
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-li:text-slate-600 prose-li:font-medium
            prose-ul:list-disc prose-ol:list-decimal
            prose-section:mb-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyTemplate;
