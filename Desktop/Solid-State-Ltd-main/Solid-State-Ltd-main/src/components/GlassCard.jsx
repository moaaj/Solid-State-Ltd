import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', variants, ...props }) => {
  return (
    <motion.div
      className={`relative backdrop-blur-md bg-white/30 border border-white/20 rounded-2xl shadow-lg ${className}`}
      variants={variants}
      {...props}
    >
      {/* Gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 rounded-2xl blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard; 