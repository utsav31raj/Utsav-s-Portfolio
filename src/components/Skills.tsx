import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Code, Server, PaintBucket, Database, MonitorSmartphone, Shapes } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
  delay: number;
}

const defaultTiltOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1.05,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, skills, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <Tilt options={defaultTiltOptions}>
        <div className="h-full bg-dark-800 border border-dark-600 rounded-lg p-6 hover:border-cyberpunk-blue transition-all duration-300 group">
          <div className="w-12 h-12 bg-dark-700 rounded-lg flex items-center justify-center mb-5 text-cyberpunk-blue group-hover:shadow-neon-blue transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-gray-400 mb-5">{description}</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-block px-3 py-1 text-xs font-mono bg-dark-700 text-cyberpunk-blue rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind"],
    },
    {
      icon: <Server size={24} />,
      title: "Backend Development",
      description: "Creating robust server-side applications",
      skills: ["Node.js", "Express", "Python", "Java", "API Design", "GraphQL"],
    },
    {
      icon: <Database size={24} />,
      title: "Database",
      description: "Designing and optimizing database structures",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "ORM"],
    },
    {
      icon: <Shapes size={24} />,
      title: "Machine Learning Algorithms",
      description: "Implementing and understanding core ML algorithms",
      skills: ["Linear Regression", "Logistic Regression", "Decision Trees", "KNN", "SVM", "Clustering"],
    },
    {
      icon: <Code size={24} />,
      title: "Python & Its Libraries",
      description: "Programming in Python and using popular libraries",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow"],
    },
    {
      icon: <Shapes size={24} />,
      title: "Elementary AI",
      description: "Basic concepts and applications of Artificial Intelligence",
      skills: ["Search Algorithms", "Knowledge Representation", "Simple Agents", "AI Concepts"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-800/50 relative">
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
            My <span className="text-cyberpunk-blue">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here are my main areas of expertise:
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              icon={category.icon}
              title={category.title}
              description={category.description}
              skills={category.skills}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;