
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img  
          className="w-full h-full object-cover opacity-60"
          alt="Abstract expressionist art featuring female form"
         src="https://images.unsplash.com/photo-1697781554065-5b229782c2db" />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            <span className="gradient-text">Raw Expressions</span> of the <span className="text-turquoise">Female Form</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/80">
            Exploring the essence of femininity through abstract expressionism, 
            where emotion and form intertwine in a dance of color and texture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-gradient-to-r from-crimson to-violet hover:opacity-90 transition-opacity"
              onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Gallery
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-turquoise text-turquoise hover:bg-turquoise/10"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Artist
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-violet to-royal-blue opacity-30 z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute top-40 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-crimson to-claret opacity-20 z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <p className="text-white/60 mb-2 text-sm">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <motion.div 
            className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
