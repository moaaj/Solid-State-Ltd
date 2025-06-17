import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GlassCard from './GlassCard';

const ProjectCard = ({ project }) => {
  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <GlassCard className="overflow-hidden">
      <motion.div
        className="relative h-48 sm:h-56 w-full"
        variants={imageVariants}
        whileHover="hover"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </motion.div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm sm:text-base mb-4">{project.description}</p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-purple-600/90 backdrop-blur-sm text-white py-2 rounded-lg text-sm sm:text-base font-semibold hover:bg-purple-700 transition-colors"
        >
          View Details
        </motion.button>
      </div>
    </GlassCard>
  );
};

export default ProjectCard; 