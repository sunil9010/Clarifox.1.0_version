import React from 'react';
import { motion } from 'framer-motion';

const ClarifoxLogo = ({ className = '', bgColor = 'bg-blue-950', size = 'lg:w-22 w-16 md:w-24' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <motion.div
        whileHover={{ scale: 1.1, rotate: -10 }}
        className={`${size} h-auto rounded-lg flex items-center justify-center shadow-lg ${bgColor}`}
      >
        <img
          src="/images/Clarifox_Logo-removebg-preview.png"
          alt="Clarifox Logo"
          className="w-full h-auto object-contain rounded"
        />
      </motion.div>
    </div>
  );
};

export default ClarifoxLogo;
