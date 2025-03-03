import { useState } from "react";
import { motion } from "framer-motion";

const Interior = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  ;
  
  const images = [
    "/images/interior1.jpg",
    "/images/interior2.jpg",
    "/images/interior3.jpg",
    "/images/interior4.jpg",
  ];

  return (
    <div className="bg-white text-gray-900 p-6 md:p-12">
      <motion.h1 
        className="text-4xl font-bold text-center text-salmon-500 mb-6"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Interior Design
      </motion.h1>
      
      <motion.p 
        className="text-center text-lg mb-8 max-w-3xl mx-auto"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.7 }}
      >
        Elevate your living spaces with our expert interior design solutions. We blend aesthetics and functionality to create stunning interiors tailored to your style.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <motion.img 
            key={index}
            src={src} 
            alt={`Interior Design ${index + 1}`}
            className="w-full rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedImage(src)}
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>
      
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img 
            src={selectedImage} 
            alt="Selected Interior"
            className="max-w-full max-h-full rounded-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
      
      <div className="mt-12 text-center">
        <motion.a 
          href="/contact" 
          className="px-6 py-3 bg-salmon-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-salmon-600 transition"
          whileHover={{ scale: 1.1 }}
        >
          Get a Free Consultation
        </motion.a>
      </div>
    </div>
  );
};

export default Interior;
