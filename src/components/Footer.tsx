import React from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, Linkedin, Twitter, Instagram, Terminal, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-dark-900 relative">
      {/* Animated border */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyberpunk-blue to-transparent"
        animate={{
          opacity: [0.1, 0.5, 0.1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <a href="#home" className="flex items-center gap-2">
              <Terminal className="h-6 w-6 text-cyberpunk-blue" />
              <span className="text-lg font-mono font-bold text-white">
                <span className="text-cyberpunk-blue">Utsav Raj</span>
              </span>
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6 mb-8 md:mb-0">
            <a href="https://github.com/utsav31raj" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyberpunk-blue transition-colors">
              <GitHub size={20} />
            </a>
            <a href="http://www.linkedin.com/in/utsav-raj-296963253" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyberpunk-blue transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/utsav31raj?igsh=bDJxOWNvN2Q2Z3ps" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyberpunk-blue transition-colors">
              <Instagram size={20} />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {currentYear} All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1 flex items-center justify-center md:justify-end">
              Made with <Heart size={12} className="mx-1 text-cyberpunk-pink" /> in the digital realm
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;