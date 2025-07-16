import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import GlassCard from '../components/GlassCard';
import ProjectCard from '../components/ProjectCard';

// LoadingFallback and Suspense removed for static export compatibility

const projects = [
  {
    id: 1,
    title: "Shamol Chaya",
    location: "Plot 726/20/E, Road 10, Baitul Aman Housing Society, Adabar 10",
    description: "A magnificent 10-storied residential building offering modern amenities and comfortable living spaces.",
    feature: "10 storied building",
    image: "/images/projects/1.1.png",
    category: "Residential"
  },
  {
    id: 2,
    title: "Mezan Tower",
    location: "Plot 254 and 255, Road 09, Block: A, Bashundhara R/A Dhaka 1229",
    description: "An impressive 9-storied commercial and residential complex in the heart of Bashundhara.",
    feature: "9 storied building",
    image: "/images/projects/1.2.png",
    category: "Residential"
  },
  {
    id: 3,
    title: "Amina Bhaban",
    location: "Ga/25/5/B, Sahajadpur",
    description: "A beautiful 8-storied residential building with modern architecture and premium facilities.",
    feature: "8 storied building",
    image: "/images/projects/1.3.png",
    category: "Residential"
  },
  {
    id: 4,
    title: "Apon Nibash",
    location: "Plot 41/26, Road 3, Block B, Chand Housing Mohammadpur, Dhaka 1207",
    description: "An elegant 8-storied residential complex offering luxurious living spaces and amenities.",
    feature: "8 storied building",
    image: "/images/projects/1.4.png",
    category: "Residential"
  }
];

export default function Completed() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  // 3D tilt effect for cards
  const tiltTransition = {
    type: 'spring',
    stiffness: 300,
    damping: 20
  };

  // Helper for gallery navigation
  const openGallery = (idx) => {
    setGalleryIndex(idx);
    setGalleryOpen(true);
  };
  const closeGallery = () => setGalleryOpen(false);
  const prevImage = () => setGalleryIndex((prev) => (prev - 1 + projects.length) % projects.length);
  const nextImage = () => setGalleryIndex((prev) => (prev + 1) % projects.length);

  return (
    <>
      <Head>
        <title>Completed Projects - Solid State</title>
        <meta name="description" content="Explore our portfolio of completed real estate projects. See how we've transformed spaces into exceptional living and working environments." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* 3D Animated Gradient Background with Floating Shapes */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-purple-200 via-blue-100 to-pink-100 animate-gradient-xy"
        />
        {/* Floating 3D shapes */}
        <motion.div
          className="absolute top-[-6rem] left-[-6rem] w-96 h-96 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full blur-3xl opacity-60 shadow-2xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-[-4rem] right-[-4rem] w-80 h-80 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-2xl opacity-50 shadow-xl"
          animate={{ y: [0, -20, 0], x: [0, -20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <motion.div
        className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.h1 variants={itemVariants} className="mt-10 sm:mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-3 text-purple-900 drop-shadow-lg">Completed Projects</motion.h1>
          <motion.p variants={itemVariants} className="text-base sm:text-lg text-center text-gray-700 mb-8 sm:mb-12 font-medium">Explore our portfolio of successful real estate developments</motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 8 }}
                transition={tiltTransition}
                className="group relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl bg-white/60 backdrop-blur-lg flex flex-col cursor-pointer border-2 border-purple-200/40 hover:border-purple-400"
                onClick={() => openGallery(idx)}
              >
                {/* Animated glowing border */}
                <motion.div
                  className="absolute -inset-1 rounded-3xl pointer-events-none group-hover:shadow-[0_0_40px_10px_rgba(124,58,237,0.15)] z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Project Image with overlay */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-3xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  {/* Animated badge */}
                  <motion.span
                    className="absolute top-4 left-4 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold shadow-lg tracking-wide animate-pulse z-20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 * idx, duration: 0.5, type: 'spring' }}
                  >
                    {project.category}
                  </motion.span>
                </div>
                {/* Card Content */}
                <div className="p-8 flex-1 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-purple-900 mb-3 transition-all duration-300 group-hover:text-3xl drop-shadow-lg">
                    {project.title}
                  </h3>
                  {project.location && (
                    <p className="text-blue-700 text-base font-semibold mb-1">{project.location}</p>
                  )}
                  {project.feature && (
                    <p className="text-purple-500 text-sm font-medium mb-2">{project.feature}</p>
                  )}
                  <p className="text-gray-700 text-lg transition-all duration-300 group-hover:text-xl mb-4">
                    {project.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium transition-all duration-500 delay-200 hover:bg-indigo-600 hover:text-white shadow-lg"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Gallery Modal */}
      {galleryOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative max-w-3xl w-full mx-4 rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg flex flex-col items-center"
            initial={{ scale: 0.95, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white text-purple-700 rounded-full p-2 shadow-lg focus:outline-none"
              onClick={closeGallery}
              aria-label="Close gallery"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            {/* Image */}
            <div className="w-full flex items-center justify-center bg-black/70">
              <img
                src={projects[galleryIndex].image}
                alt={projects[galleryIndex].title}
                className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl transition-all duration-500"
                style={{ maxWidth: '100%' }}
              />
            </div>
            {/* Title & Description */}
            <div className="p-6 w-full text-center">
              <h2 className="text-2xl font-bold text-white drop-shadow mb-2">{projects[galleryIndex].title}</h2>
              <p className="text-lg text-purple-100 mb-1">{projects[galleryIndex].location}</p>
              <p className="text-base text-gray-200">{projects[galleryIndex].description}</p>
            </div>
            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                className="bg-white/70 hover:bg-purple-200 text-purple-700 rounded-full p-2 m-4 shadow-lg focus:outline-none"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                className="bg-white/70 hover:bg-purple-200 text-purple-700 rounded-full p-2 m-4 shadow-lg focus:outline-none"
                onClick={nextImage}
                aria-label="Next image"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
            {/* Dots/Thumbnails */}
            <div className="flex justify-center items-center gap-2 pb-6">
              {projects.map((p, idx) => (
                <button
                  key={p.id}
                  className={`w-3 h-3 rounded-full border-2 ${galleryIndex === idx ? 'bg-purple-600 border-white scale-125' : 'bg-white/60 border-purple-300'} transition-all duration-200`}
                  onClick={() => setGalleryIndex(idx)}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

// Static Site Generation
export async function getStaticProps() {
  return {
    props: {},
  };
} 