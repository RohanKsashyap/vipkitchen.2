import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    // Show the main button after 2 seconds
    const timer = setTimeout(() => {
      setShowMain(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4 mb-4"
          >
            <a
              href="tel:+917009350717"
              className="flex items-center gap-2 bg-amber-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-amber-700 transition duration-300"
            >
              <Phone size={18} />
              <span>Call Us</span>
            </a>
            <a
              href="https://wa.me/917009350717"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMain && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 ${
              isOpen ? 'bg-gray-700 text-white' : 'bg-amber-600 text-white'
            }`}
          >
            {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingCTA;