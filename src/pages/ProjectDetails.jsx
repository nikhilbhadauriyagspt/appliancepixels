import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { projectsData } from '../data/projects';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaClock, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Helmet>
           <title>Project Not Found - Appliance Pixels</title>
        </Helmet>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Project Not Found</h2>
          <Link to="/projects" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all shadow-lg">
            Back to All Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{project.title} - Appliance Pixels Project</title>
        <meta name="description" content={project.description} />
        <link rel="canonical" href={`https://www.appliancepixels.com/project/${project.id}`} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Link to="/projects" className="inline-flex items-center gap-2 text-white/70 hover:text-secondary font-bold mb-8 transition-colors">
            <FaArrowLeft /> All Projects
          </Link>
          <h1 className="text-4xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">{project.title}</h1>
          <span className="inline-block bg-secondary text-white text-xs font-bold uppercase tracking-[3px] px-6 py-2 rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content */}
          <div className="w-full lg:w-8/12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Project Overview</h2>
            <div className="prose prose-lg text-gray-500 max-w-none mb-12">
              <p className="text-xl text-primary font-medium mb-8 leading-relaxed">
                {project.description}
              </p>
              <p className="leading-relaxed mb-8">
                {project.fullDescription}
              </p>
            </div>

            <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                 Service Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-secondary transition-all">
                    <FaCheckCircle className="text-secondary flex-shrink-0" />
                    <span className="font-bold text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="w-full lg:w-4/12">
            <div className="bg-primary rounded-[2.5rem] p-10 text-white sticky top-32">
              <h3 className="text-2xl font-bold mb-8 pb-4 border-b border-white/10">Project Details</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-secondary">
                    <FaUser size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1">Client</p>
                    <p className="font-bold text-lg">{project.client}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-secondary">
                    <FaCalendarAlt size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1">Completion Date</p>
                    <p className="font-bold text-lg">{project.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-secondary">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1">Duration</p>
                    <p className="font-bold text-lg">{project.duration}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-secondary">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1">Location</p>
                    <p className="font-bold text-lg">{project.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-white/10 text-center">
                 <p className="text-white/70 text-sm mb-6">Need a similar repair for your appliance?</p>
                 <Link 
                   to="/contact" 
                   className="block w-full bg-secondary hover:bg-white hover:text-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 shadow-xl"
                 >
                   Get Free Quote
                 </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;


