
import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ activeSection }) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-serif font-bold gradient-text">
            Maudé
          </a>
          
          <div className="flex space-x-6">
            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
            <a href="#gallery" className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`}>Gallery</a>
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
            <a href="#exhibitions" className={`nav-link ${activeSection === 'exhibitions' ? 'active' : ''}`}>Exhibitions</a>
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
