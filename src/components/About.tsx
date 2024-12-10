import React from 'react';
import { Database, Server, Shield, GitBranch, Terminal, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from './animations';

const About = () => {
  const skills = [
    {
      icon: <Database className="h-6 w-6 text-white" />,
      title: "Database Management",
      description: "Expert in SQL and NoSQL databases, optimization, and scaling strategies"
    },
    {
      icon: <Server className="h-6 w-6 text-white" />,
      title: "Server Architecture",
      description: "Designing and implementing scalable backend systems"
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Security",
      description: "Implementing robust security measures and best practices"
    },
    {
      icon: <GitBranch className="h-6 w-6 text-white" />,
      title: "Version Control",
      description: "Advanced Git workflows and CI/CD pipeline implementation"
    },
    {
      icon: <Terminal className="h-6 w-6 text-white" />,
      title: "API Development",
      description: "RESTful and GraphQL API design and implementation"
    },
    {
      icon: <Cloud className="h-6 w-6 text-white" />,
      title: "Cloud Services",
      description: "Experience with AWS, Docker, and microservices architecture"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">About Me</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Backend developer focused on building scalable and secure systems
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="pt-6"
            >
              <div className="flow-root bg-gray-800 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg">
                    {skill.icon}
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-white tracking-tight">
                    {skill.title}
                  </h3>
                  <p className="mt-5 text-base text-gray-400">
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;