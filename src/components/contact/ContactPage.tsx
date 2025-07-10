'use client';

import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import ContactInfoCards from './ContactInfoCards';

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-tr from-[#1A1A2E] via-[#16213E] to-[#2875B4] text-white">
      {/* Professional image banner removed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2470a9] to-[#8bc541]">
              Get In Touch
            </span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            <ContactInfoCards />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          >
            <ContactForm service="General Inquiry" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 