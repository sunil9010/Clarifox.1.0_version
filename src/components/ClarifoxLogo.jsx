import React from 'react';
import { motion } from 'framer-motion';

const ClarifoxLogo = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.img
        whileHover={{ scale: 1.05 }}
        src="/images/company logo.png"
        alt="Clarifox Logo"
        className="w-12 md:w-22 sm:w-16 bottom-5 md:bottom-5 h-14 absolute object-contain"
      />
      <p className="gradient-text block   text-[7px] sm:text-[10px]  md:text-[8px]">
        IT Consulting & Staffing
      </p>
    </div>
  );
};

export default ClarifoxLogo;
