
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const artworks = [
  {
    id: 1,
    title: "Crimson Silhouette",
    description: "A bold exploration of the female form through layers of crimson and deep violet.",
    year: "2023",
    medium: "Acrylic on canvas",
    dimensions: "48 × 36 inches"
  },
  {
    id: 2,
    title: "Turquoise Dreams",
    description: "Fluid movements captured in turquoise and royal blue, suggesting the grace of the female body.",
    year: "2022",
    medium: "Oil on canvas",
    dimensions: "60 × 48 inches"
  },
  {
    id: 3,
    title: "Violet Essence",
    description: "Abstract representation of feminine energy through vibrant violet and subtle charcoal strokes.",
    year: "2023",
    medium: "Mixed media on canvas",
    dimensions: "40 × 30 inches"
  },
  {
    id: 4,
    title: "Claret Emotions",
    description: "Raw emotional expression through deep claret tones and dynamic brushwork.",
    year: "2021",
    medium: "Oil on canvas",
    dimensions: "36 × 36 inches"
  },
  {
    id: 5,
    title: "Royal Posture",
    description: "The dignity of the female form expressed through royal blue and black contrasts.",
    year: "2022",
    medium: "Acrylic on canvas",
    dimensions: "48 × 24 inches"
  },
  {
    id: 6,
    title: "Charcoal Whispers",
    description: "Subtle feminine curves emerge from layers of charcoal and hints of crimson.",
    year: "2023",
    medium: "Charcoal and acrylic on canvas",
    dimensions: "30 × 40 inches"
  }
];

const Gallery = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [filter, setFilter] = useState('all');
  
  const filteredArtworks = filter === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.year === filter);
  
  const openModal = (artwork) => {
    setSelectedArtwork(artwork);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedArtwork(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div className="container mx-auto px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Gallery
      </motion.h2>
      
      {/* Filters */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap gap-4 mb-12"
      >
        <button 
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-md transition-colors duration-300 ${filter === 'all' ? 'bg-violet text-white' : 'bg-charcoal/50 text-white/70 hover:bg-charcoal'}`}
        >
          All Works
        </button>
        <button 
          onClick={() => setFilter('2023')}
          className={`px-4 py-2 rounded-md transition-colors duration-300 ${filter === '2023' ? 'bg-violet text-white' : 'bg-charcoal/50 text-white/70 hover:bg-charcoal'}`}
        >
          2023
        </button>
        <button 
          onClick={() => setFilter('2022')}
          className={`px-4 py-2 rounded-md transition-colors duration-300 ${filter === '2022' ? 'bg-violet text-white' : 'bg-charcoal/50 text-white/70 hover:bg-charcoal'}`}
        >
          2022
        </button>
        <button 
          onClick={() => setFilter('2021')}
          className={`px-4 py-2 rounded-md transition-colors duration-300 ${filter === '2021' ? 'bg-violet text-white' : 'bg-charcoal/50 text-white/70 hover:bg-charcoal'}`}
        >
          2021
        </button>
      </motion.div>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArtworks.map((artwork, index) => (
          <motion.div
            key={artwork.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="art-card cursor-pointer"
            onClick={() => openModal(artwork)}
          >
            <img  
              className="w-full h-80 object-cover rounded-lg"
              alt={artwork.title}
             src="https://images.unsplash.com/photo-1701294458941-7842c07d4037" />
            
            <div className="art-card-overlay">
              <h3 className="text-xl font-serif font-bold">{artwork.title}</h3>
              <p className="text-white/80">{artwork.year} • {artwork.medium}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-charcoal rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
              onClick={e => e.stopPropagation()}
            >
              <div className="md:w-2/3 relative">
                <img  
                  className="w-full h-full object-cover"
                  alt={selectedArtwork.title}
                 src="https://images.unsplash.com/photo-1694201945826-b1fad5202067" />
              </div>
              
              <div className="md:w-1/3 p-6 flex flex-col">
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/30 rounded-full p-1"
                >
                  <X size={24} />
                </button>
                
                <h3 className="text-2xl font-serif font-bold mb-2">{selectedArtwork.title}</h3>
                <p className="text-white/70 mb-4">{selectedArtwork.year}</p>
                
                <div className="mb-6">
                  <p className="text-white/90 mb-4">{selectedArtwork.description}</p>
                  <div className="text-sm text-white/70">
                    <p className="mb-1"><span className="text-turquoise">Medium:</span> {selectedArtwork.medium}</p>
                    <p><span className="text-turquoise">Dimensions:</span> {selectedArtwork.dimensions}</p>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <button className="w-full bg-gradient-to-r from-crimson to-violet hover:opacity-90 text-white py-3 rounded-md transition-opacity">
                    Inquire About This Piece
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
