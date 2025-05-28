import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
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
            About <span className="text-cyberpunk-blue">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple mx-auto"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 font-mono text-center">
            <span className="text-cyberpunk-blue"></span> Full Stack Developer <span className="text-cyberpunk-blue"></span>
          </h3>
          
          <div className="space-y-4 text-gray-300 text-center">
            <p>
              Hello! I'm Utsav Raj, a passionate Full Stack Developer with expertise in building modern web applications using cutting-edge technologies. 
            </p>
            <p>
               I specialize in crafting beautiful and functional web experiences. I love solving complex problems and turning ideas into reality through code.
            </p>
            <p>
                I've been honing my skills,constantly learning and adapting to new technologies and methodologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;