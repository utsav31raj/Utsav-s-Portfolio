import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Send } from 'lucide-react';
import myResumePic from '../assets/my_resume pic.jpg';
import { Tilt } from 'react-tilt';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-glow opacity-20"></div>
        <motion.div
          className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-cyberpunk-blue/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyberpunk-purple/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Cyberpunk grid overlay */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-10"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h2 className="text-lg sm:text-xl font-mono text-cyberpunk-blue mb-3">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                   Hi, I'm Utsav Raj
                                </motion.span>
              </h2>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple animate-glow">Utsav Raj</span>
            </motion.h1>

           

            <motion.div
              className="text-2xl sm:text-3xl font-medium text-gray-300 mb-8 h-10 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="text-cyberpunk-blue">
                <Typewriter
                  words={['Full Stack Developer', 'UI/UX Designer', 'Tech Enthusiast']}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1200}
                />
              </span>
            </motion.div>
            <div className="text-lg sm:text-xl text-gray-300 mb-8 font-mono">
              Enthusiastic Computer Science Engineering student.<br/>
              Passionate about leveraging technology to solve real-world challenges and eager to contribute to dynamic, tech-driven teams.
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple text-white font-medium rounded-md hover:shadow-neon-blue transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={18} />
                Hire Me
              </motion.button>
              
              <motion.a
                href="https://drive.google.com/file/d/1I_W0LqI7h6ip5tWnE3M9y6KAeIpvWTnI/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-transparent border border-cyberpunk-blue text-cyberpunk-blue font-medium rounded-md hover:bg-cyberpunk-blue/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText size={18} />
                Download Resume
              </motion.a>
            </motion.div>
          </div>

          {/* Right content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <Tilt options={{ max: 20, scale: 1.05 }}>
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden flex items-center justify-center bg-white border-4 border-cyberpunk-blue shadow-[0_0_40px_10px_rgba(0,176,255,0.6)]">
                <img src={myResumePic} alt="Utsav Raj Resume" className="w-full h-full object-cover object-center" />
              </div>
            </Tilt>
            {/* Glowing elements */}
            <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-cyberpunk-blue/20 blur-lg"></div>
            <div className="absolute -bottom-5 -right-5 w-10 h-10 rounded-full bg-cyberpunk-purple/20 blur-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;