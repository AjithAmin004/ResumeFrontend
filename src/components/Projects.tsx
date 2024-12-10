import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from './animations';

const Projects = () => {
  const projects = [
    {
      title: 'Microservices Architecture',
      description: 'Designed and implemented a scalable microservices system using Node.js and Docker',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Database Optimization',
      description: 'Improved database performance by 200% through query optimization and indexing',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'API Gateway',
      description: 'Built a secure API gateway with rate limiting and authentication',
      image: 'https://images.unsplash.com/photo-1558494950-b8e04bd8c0b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Recent backend development projects
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden w-full"
            >
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-medium text-white">{project.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-400">{project.description}</p>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;