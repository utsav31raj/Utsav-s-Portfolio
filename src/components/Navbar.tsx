import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Terminal, Linkedin, Github, Instagram } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-800/80 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-2">
              <Terminal className="h-8 w-8 text-cyberpunk-blue" />
              <span className="text-xl font-mono font-bold text-white">
                <span className="text-cyberpunk-blue"></span>
                Utsav Raj
                <span className="text-cyberpunk-blue"></span>
              </span>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block flex items-center">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-2 py-1 text-sm font-medium text-gray-300 hover:text-cyberpunk-blue transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyberpunk-blue transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <span className="flex flex-col items-center ml-8">
              <span className="h-4" />
              <span className="flex flex-row items-center space-x-6">
                <a href="http://www.linkedin.com/in/utsav-raj-296963253" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyberpunk-blue transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href="https://github.com/utsav31raj" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyberpunk-blue transition-colors">
                  <Github size={22} />
                </a>
                <a href="https://www.instagram.com/utsav31raj?igsh=bDJxOWNvN2Q2Z3ps" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyberpunk-blue transition-colors">
                  <Instagram size={22} />
                </a>
              </span>
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-700 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6\" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6\" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-dark-800 border-t border-dark-700"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-dark-700 hover:text-cyberpunk-blue"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <span className="flex flex-col items-center mt-4 justify-center">
              <span className="h-4" />
              <span className="flex flex-row items-center space-x-6">
                <a href="http://www.linkedin.com/in/utsav-raj-296963253" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyberpunk-blue transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href="https://github.com/utsav31raj" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyberpunk-blue transition-colors">
                  <Github size={22} />
                </a>
                <a href="https://www.instagram.com/utsav31raj?igsh=bDJxOWNvN2Q2Z3ps" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyberpunk-blue transition-colors">
                  <Instagram size={22} />
                </a>
              </span>
            </span>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;