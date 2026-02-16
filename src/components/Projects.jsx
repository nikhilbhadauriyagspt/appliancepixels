import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h6 className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Recent Projects</h6>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">Our Latest Work</h2>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {['All', 'Commercial', 'Residential', 'Industrial', 'Electronics'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                filter === cat 
                ? 'bg-primary text-white shadow-lg scale-105' 
                : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Link 
              key={project.id} 
              to={`/project/${project.id}`}
              className="group relative overflow-hidden rounded-2xl shadow-md aspect-[4/3] block cursor-pointer"
              data-aos="zoom-in" 
              data-aos-delay={index * 100}
            >
              <img 
                src={project.img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={project.title}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-secondary font-bold text-xs uppercase tracking-[3px] mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold mb-4">{project.title}</h3>
                  <div className="w-12 h-1 bg-secondary rounded-full"></div>
                </div>
              </div>
              
              {/* Top Right Label (Visible always) */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm group-hover:opacity-0 transition-opacity">
                {project.category}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;