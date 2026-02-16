import React from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from '../data/blogs';
import { HiArrowLongRight } from 'react-icons/hi2';

const Blog = () => {
  return (
    <section className="py-24 bg-white" id="blog">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full text-blue-700 mb-6">
              <span className="text-[11px] font-black uppercase tracking-widest">Our Journal</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 leading-tight">
              Latest Technical <br />
              <span className="text-blue-600 italic">Insights.</span>
            </h2>
          </div>
          
          <div data-aos="fade-left">
            <Link 
              to="/blog" 
              className="group flex items-center gap-4 text-sm font-heading font-black uppercase tracking-widest text-slate-900 bg-slate-50 px-8 py-4 rounded-2xl hover:bg-blue-600 hover:text-white transition-all"
            >
              Read Archive
              <HiArrowLongRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogsData.map((blog, index) => (
            <article 
              key={blog.id} 
              className="group flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-8 overflow-hidden rounded-[2.5rem] aspect-[4/3] bg-slate-50 shadow-sm border border-slate-100">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">{blog.date}</span>
                <div className="w-8 h-px bg-slate-200"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Technical Tip</span>
              </div>

              <h3 className="text-2xl font-heading font-black text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                <Link to={`/blog/${blog.id}`}>
                  {blog.title}
                </Link>
              </h3>
              
              <p className="text-slate-500 font-medium leading-relaxed mb-8 line-clamp-2">
                {blog.shortDesc}
              </p>

              <Link 
                to={`/blog/${blog.id}`} 
                className="mt-auto inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-slate-900 hover:text-blue-600 transition-all border-b-2 border-slate-50 pb-2 w-fit"
              >
                Read Article
                <HiArrowLongRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
