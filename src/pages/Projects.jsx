import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Our Projects - Appliance Pixels</title>
        <meta name="description" content="View our portfolio of successful appliance repairs and maintenance projects." />
        <link rel="canonical" href="https://www.appliancepixels.shop/projects" />
      </Helmet>

      <div className="relative bg-gray-900 py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Our Latest Projects</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            See how we bring broken appliances back to life with precision and care.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer h-80 block"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-secondary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

