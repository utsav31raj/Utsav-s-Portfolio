import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  achievements?: string[];
}

const educationData: EducationItem[] = [
  {
    degree: "Computer Science Engineering",
    institution: "Kalinga Institute of Industrial Technology",
    duration: "September 2022 – Present",
    description: "CGPA: 6.6/10"
  },
  {
    degree: "12th (HSC)",
    institution: "Gyan Niketan",
    duration: "2022",
    description: "80% (CBSE)"
  },
  {
    degree: "10th (SSC)",
    institution: "Gyan Niketan",
    duration: "2020",
    description: "87% (CBSE)"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-dark-800/50 relative">
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
            My <span className="text-cyberpunk-blue">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            My academic journey has equipped me with both theoretical knowledge and practical skills
            that I apply to solve real-world problems.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-dark-600 transform md:translate-x-px"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`md:flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline point */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-dark-800 border-2 border-cyberpunk-blue rounded-full transform -translate-x-1/2 flex items-center justify-center z-10">
                    <GraduationCap size={16} className="text-cyberpunk-blue" />
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-dark-800 border border-dark-600 rounded-lg p-6 hover:border-cyberpunk-blue transition-all duration-300">
                      <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                      <div className="flex items-center text-cyberpunk-blue mb-4">
                        <BookOpen size={16} className="mr-2" />
                        <span>{item.institution}</span>
                      </div>
                      <div className="flex items-center text-gray-400 mb-4">
                        <Calendar size={16} className="mr-2" />
                        <span>{item.duration}</span>
                      </div>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Certifications Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple mx-auto mb-6"></div>
          <ul className="space-y-4 text-lg text-gray-300 font-mono">
            <li>• AWS Academy Cloud Foundations</li>
            <li>• Business Analytics for Decision Making - Coursera</li>
            <li>• AI for Beginners - HP</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;