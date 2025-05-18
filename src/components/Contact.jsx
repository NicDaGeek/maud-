
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
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
        Contact
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-serif font-bold mb-6">Get in Touch</h3>
          
          <p className="text-white/90 mb-8">
            I'm always interested in discussing commissions, exhibitions, or collaborations. 
            Feel free to reach out with any inquiries about my work or to schedule a studio visit.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-violet/20 p-3 rounded-full mr-4">
                <Mail className="text-violet" size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Email</h4>
                <p className="text-white/80">contact@elaravoss.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-crimson/20 p-3 rounded-full mr-4">
                <MapPin className="text-crimson" size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Studio Location</h4>
                <p className="text-white/80">Kunstquartier, Bergmannstraße 15<br />10961 Berlin, Germany</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-turquoise/20 p-3 rounded-full mr-4">
                <Phone className="text-turquoise" size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Phone</h4>
                <p className="text-white/80">+49 30 1234 5678</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <h4 className="text-lg font-medium mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-charcoal/50 hover:bg-violet/20 p-3 rounded-full transition-colors duration-300">
                <Instagram className="text-white" size={20} />
              </a>
              <a href="#" className="bg-charcoal/50 hover:bg-crimson/20 p-3 rounded-full transition-colors duration-300">
                <Facebook className="text-white" size={20} />
              </a>
              <a href="#" className="bg-charcoal/50 hover:bg-royal-blue/20 p-3 rounded-full transition-colors duration-300">
                <Twitter className="text-white" size={20} />
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="bg-charcoal/30 p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-bold mb-6">Send a Message</h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/90 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-violet/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet/50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white/90 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-violet/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet/50"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white/90 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-violet/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/90 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-black/50 border border-violet/30 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet/50"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-crimson to-violet text-white py-3 rounded-md transition-all duration-300 ${isSubmitting ? 'opacity-70' : 'hover:opacity-90'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
