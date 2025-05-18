
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronUp } from 'lucide-react';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Exhibitions from '@/components/Exhibitions';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <Navbar activeSection={activeSection} />
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-serif font-bold gradient-text">Maudé</h1>
          <button 
            onClick={toggleMobileMenu}
            className="text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-4">
                <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={closeMobileMenu}>Home</a>
                <a href="#gallery" className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`} onClick={closeMobileMenu}>Gallery</a>
                <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={closeMobileMenu}>About</a>
                <a href="#exhibitions" className={`nav-link ${activeSection === 'exhibitions' ? 'active' : ''}`} onClick={closeMobileMenu}>Exhibitions</a>
                <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={closeMobileMenu}>Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="gallery" className="py-20">
          <Gallery />
        </section>
        
        <section id="about" className="py-20 bg-gradient-to-b from-black to-charcoal/30">
          <About />
        </section>
        
        <section id="exhibitions" className="py-20">
          <Exhibitions />
        </section>
        
        <section id="contact" className="py-20 bg-gradient-to-b from-black to-charcoal/30">
          <Contact />
        </section>
      </main>
      
      <Footer />
      
      {/* Scroll to top button */}
      <AnimatePresence>
        {scrollY > 500 && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-violet/80 hover:bg-violet text-white p-3 rounded-full shadow-lg z-40"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
      
      <Toaster />
    </div>
  );
}

export default App;
