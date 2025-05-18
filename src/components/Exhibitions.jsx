
import React from 'react';
import { motion } from 'framer-motion';

const exhibitions = [
  {
    id: 1,
    title: "Raw Essence: Solo Exhibition",
    location: "Galerie Moderne, Berlin",
    date: "September 15 - October 30, 2023",
    description: "A comprehensive showcase of recent works exploring the female form through abstract expressionism.",
    featured: true
  },
  {
    id: 2,
    title: "Bodies in Motion",
    location: "Contemporary Art Museum, Vienna",
    date: "March 5 - May 12, 2023",
    description: "Group exhibition featuring artists who capture the dynamism of the human form."
  },
  {
    id: 3,
    title: "Chromatic Emotions",
    location: "Kunsthalle, Hamburg",
    date: "November 10 - December 20, 2022",
    description: "An exploration of how color evokes emotional responses in abstract art."
  },
  {
    id: 4,
    title: "The Feminine Divine",
    location: "Gallery 23, Paris",
    date: "June 8 - July 30, 2022",
    description: "A celebration of feminine energy and form in contemporary art."
  },
  {
    id: 5,
    title: "New Perspectives",
    location: "International Art Fair, London",
    date: "February 15-20, 2022",
    description: "A showcase of emerging voices in European abstract expressionism."
  }
];

const Exhibitions = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Exhibitions
      </motion.h2>
      
      {/* Featured Exhibition */}
      {exhibitions.filter(ex => ex.featured).map(exhibition => (
        <motion.div
          key={exhibition.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-crimson to-violet rounded-tl-lg opacity-30" />
              
              <img  
                className="w-full h-auto rounded-lg relative z-10"
                alt="Gallery exhibition of Elara's artwork"
               src="https://images.unsplash.com/photo-1599140427277-7cbcb58180a0" />
              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-royal-blue to-turquoise rounded-br-lg opacity-30" />
            </div>
            
            <div>
              <div className="inline-block bg-crimson/20 text-crimson px-3 py-1 rounded-full text-sm font-medium mb-4">
                Current Exhibition
              </div>
              
              <h3 className="text-3xl font-serif font-bold mb-2">{exhibition.title}</h3>
              
              <div className="mb-4">
                <p className="text-turquoise">{exhibition.location}</p>
                <p className="text-white/70">{exhibition.date}</p>
              </div>
              
              <p className="text-white/90 mb-6">{exhibition.description}</p>
              
              <button className="bg-gradient-to-r from-crimson to-violet hover:opacity-90 text-white px-6 py-3 rounded-md transition-opacity">
                View Exhibition Details
              </button>
            </div>
          </div>
        </motion.div>
      ))}
      
      {/* Past Exhibitions */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-2xl font-serif font-bold mb-8"
      >
        Past Exhibitions
      </motion.h3>
      
      <div className="space-y-6">
        {exhibitions.filter(ex => !ex.featured).map((exhibition, index) => (
          <motion.div
            key={exhibition.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }}
            className="bg-charcoal/30 rounded-lg p-6 hover:bg-charcoal/50 transition-colors duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="text-xl font-serif font-bold mb-2">{exhibition.title}</h4>
                <p className="text-turquoise mb-1">{exhibition.location}</p>
                <p className="text-white/70 mb-3">{exhibition.date}</p>
                <p className="text-white/90">{exhibition.description}</p>
              </div>
              
              <div className="mt-4 md:mt-0 md:ml-4 flex-shrink-0">
                <button className="border border-violet text-violet hover:bg-violet/10 px-4 py-2 rounded-md transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Upcoming */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 bg-gradient-to-r from-violet/20 to-transparent p-8 rounded-lg border-l-4 border-violet"
      >
        <h3 className="text-2xl font-serif font-bold mb-4">Upcoming Exhibitions</h3>
        <p className="text-white/90">
          Stay tuned for announcements about upcoming exhibitions and events. 
          Sign up for my newsletter to be the first to know about new shows and exclusive previews.
        </p>
        
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="bg-charcoal/50 border border-violet/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet/50"
          />
          <button className="bg-violet hover:bg-violet/90 text-white px-6 py-2 rounded-md transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Exhibitions;
