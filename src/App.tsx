import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-cyber-gradient bg-cyber-grid bg-[length:40px_40px] opacity-30 z-0"></div>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyberpunk-blue to-transparent z-10"
        animate={{
          opacity: [0.1, 0.5, 0.1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;