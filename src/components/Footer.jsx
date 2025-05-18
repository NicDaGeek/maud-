
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-charcoal/50 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-serif font-bold gradient-text mb-6">Maudé</h3>
            <p className="text-white/70 mb-6">
              Abstract expressionist artist exploring the raw essence of femininity through bold color and dynamic form.
            </p>
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Maudé. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-turquoise transition-colors duration-300">Home</a></li>
              <li><a href="#gallery" className="text-white/70 hover:text-turquoise transition-colors duration-300">Gallery</a></li>
              <li><a href="#about" className="text-white/70 hover:text-turquoise transition-colors duration-300">About</a></li>
              <li><a href="#exhibitions" className="text-white/70 hover:text-turquoise transition-colors duration-300">Exhibitions</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-turquoise transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Visit the Studio</h4>
            <p className="text-white/70 mb-2">
              Kunstquartier, Bergmannstraße 15<br />
              10961 Berlin, Germany
            </p>
            <p className="text-white/70 mb-4">
              Open for visits by appointment only
            </p>
            
            <button className="border border-turquoise text-turquoise hover:bg-turquoise/10 px-4 py-2 rounded-md transition-colors duration-300">
              Schedule a Visit
            </button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            Website designed with passion for art and expression
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors duration-300 text-sm">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors duration-300 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="relative overflow-hidden h-4">
        <motion.div 
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-crimson via-violet to-turquoise"
          animate={{ 
            x: ['-100%', '100%'],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
