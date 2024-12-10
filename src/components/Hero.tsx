import React from 'react';
import { ArrowRight, Database, Server, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './animations';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            {/* The name is split into two blocks so that the first name and last name can be animated separately */}
            {/* The mb-2 class adds a margin bottom of 0.5rem to the first name, which is half of the default margin bottom of 1rem */}
            <span className="block text-indigo-400 mb-2">AJITH</span>
            <span className="block">Backend Developer</span>
            <span className="block text-indigo-400">Building Robust Systems</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="mt-3 mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl max-w-3xl"
          >
            Specializing in scalable server architectures, database optimization, and secure API development
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-2 text-indigo-400">
              <Database className="w-6 h-6" />
              <span>Database Design</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-indigo-400">
              <Server className="w-6 h-6" />
              <span>API Development</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-indigo-400">
              <Lock className="w-6 h-6" />
              <span>Security</span>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="mt-8"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-8 transition-colors"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;