import React from 'react';
import { motion } from 'framer-motion';

const ClarifoxLogo = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <motion.div
        whileHover={{ scale: 1.1, rotate: -10 }}
        className="w-20 h-auto rounded-lg flex items-center justify-center shadow-lg"
      >
        <img src="/images/Clarifox_Logo-removebg-preview.png" alt="Logo" className="" />
      </motion.div>
      
    </div>
  );
};

export default ClarifoxLogo;