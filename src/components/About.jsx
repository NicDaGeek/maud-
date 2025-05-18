
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        About the Artist
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img  
            className="w-full h-auto rounded-lg shadow-[0_0_30px_rgba(138,43,226,0.3)]"
            alt="Portrait of Maudé in her studio"
           src="https://images.unsplash.com/photo-1697383039465-027d79690ede" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-serif font-bold mb-6 gradient-text">Maudé</h3>
          
          <div className="space-y-4 text-white/90">
            <p>
              Born in Vienna and based in Berlin, I am an abstract expressionist artist whose work explores the raw essence of femininity through bold color and dynamic form.
            </p>
            
            <p>
              My artistic journey began at the Academy of Fine Arts Vienna, where I developed a fascination with the human form and its emotional resonance. After years of traditional training, I broke free into abstraction, finding that the unrestrained expression of color and movement better captured the complexity of the female experience.
            </p>
            
            <p>
              My work celebrates the female form not as an object of desire, but as a vessel of power, vulnerability, and transformation. Through layers of crimson, violet, turquoise, and charcoal, I seek to reveal the multifaceted nature of womanhood – both its strength and its tenderness.
            </p>
            
            <p>
              Each canvas is an emotional landscape, a conversation between the physical and the spiritual, the seen and the felt. I invite viewers to look beyond the surface and connect with the raw energy that pulses through every brushstroke.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-charcoal/50 px-4 py-3 rounded-md">
              <h4 className="text-turquoise font-medium mb-1">Education</h4>
              <p className="text-white/80">Academy of Fine Arts Vienna</p>
            </div>
            
            <div className="bg-charcoal/50 px-4 py-3 rounded-md">
              <h4 className="text-turquoise font-medium mb-1">Based in</h4>
              <p className="text-white/80">Berlin, Germany</p>
            </div>
            
            <div className="bg-charcoal/50 px-4 py-3 rounded-md">
              <h4 className="text-turquoise font-medium mb-1">Medium</h4>
              <p className="text-white/80">Oil, Acrylic, Mixed Media</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Artist Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-20 bg-gradient-to-r from-charcoal/50 to-black p-8 rounded-lg border-l-4 border-crimson"
      >
        <h3 className="text-2xl font-serif font-bold mb-4">Artist Statement</h3>
        
        <blockquote className="text-white/90 italic">
          "My work is a rebellion against the objectification of women in art history. I strip away the male gaze to reveal the authentic female experience – messy, powerful, vulnerable, and whole. Through abstraction, I can express what realistic depiction cannot: the feeling of inhabiting a female body, the emotional landscape of womanhood, the tension between how we are seen and how we see ourselves. 
          <br /><br />
          Each canvas is a conversation about identity, power, and the sacred nature of the feminine. I use color as emotion – crimson for passion, violet for transformation, turquoise for healing, charcoal for grounding. My hope is that viewers, regardless of gender, can connect with the raw humanity in these works and perhaps see the female form through a new lens – not as an object, but as a subject with agency, complexity, and inherent worth."
        </blockquote>
      </motion.div>
    </div>
  );
};

export default About;
