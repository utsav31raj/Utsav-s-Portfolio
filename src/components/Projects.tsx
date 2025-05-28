import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Github, ExternalLink, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "My Portfolio",
    description: "A personal portfolio website to showcase my skills, education, and projects.",
    fullDescription: "This is my personal portfolio website, built to highlight my journey, skills, education, certifications, and selected works. It features a modern UI, smooth animations, and responsive design.",
    image: "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg",
    tags: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/yourusername/your-portfolio-repo",
    demo: "https://your-portfolio-demo-link.com",
    features: [
      "Responsive and modern design",
      "Animated hero and section transitions",
      "Showcases skills, education, certifications, and contact info",
      "Contact form integration",
      "Dark mode UI"
    ]
  }
];

const defaultTiltOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1.03,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-cyberpunk-blue">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted to solve specific problems
            and showcase different technical skills.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Tilt options={defaultTiltOptions} className="h-full">
                <motion.div
                  className="h-full overflow-hidden bg-dark-800 border border-dark-600 rounded-lg hover:border-cyberpunk-blue transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openModal(project)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
                    
                    {/* Cyberpunk scanline effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,_rgba(0,_0,_0,_0.1)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyberpunk-blue transition-colors">{project.title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-2 py-1 text-xs font-mono bg-dark-700 text-cyberpunk-blue rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="inline-block px-2 py-1 text-xs font-mono bg-dark-700 text-gray-400 rounded-md">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <button className="text-cyberpunk-blue text-sm font-medium hover:underline">
                      View Details
                    </button>
                  </div>
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-dark-800 border border-dark-600 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent"></div>
                
                {/* Close button */}
                <button 
                  className="absolute top-4 right-4 p-2 bg-dark-800/80 rounded-full text-white hover:bg-cyberpunk-blue/30 transition-colors"
                  onClick={closeModal}
                >
                  <X size={20} />
                </button>
                
                {/* Project title on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl sm:text-3xl font-bold">{selectedProject.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 text-xs font-mono bg-dark-700 text-cyberpunk-blue rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6">{selectedProject.fullDescription}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-3 text-cyberpunk-blue">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-cyberpunk-blue rounded-full mt-2 mr-3"></span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 bg-dark-700 hover:bg-dark-600 text-white font-medium rounded-md transition-colors"
                  >
                    <Github size={18} />
                    GitHub Repo
                  </a>
                  <a 
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple text-white font-medium rounded-md hover:shadow-neon-blue transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;