import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaArrowRight, FaTimes } from 'react-icons/fa';
import Header from '../components/Header';

const CompletedPage = () => {
  const canvasRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      id: 1,
      name: "Shamol Chaya",
      location: "Plot 726/20/E, Road 10, Baitul Aman Housing Society, Adabar 10",
      description: "10 storied building",
      image: "/assets/images/1.1.png",
      details: "A magnificent 10-storied residential building offering modern amenities and comfortable living spaces."
    },
    {
      id: 2,
      name: "Mezan Tower",
      location: "Plot 254 and 255, Road 09, Block: A, Bashundhara R/A Dhaka 1229",
      description: "9 storied building",
      image: "/assets/images/1.2.png",
      details: "An impressive 9-storied commercial and residential complex in the heart of Bashundhara."
    },
    {
      id: 3,
      name: "Amina Bhaban",
      location: "Ga/25/5/B, Sahajadpur",
      description: "8 storied building",
      image: "/assets/images/1.3.png",
      details: "A beautiful 8-storied residential building with modern architecture and premium facilities."
    },
    {
      id: 4,
      name: "Apon Nibash",
      location: "Plot 41/26, Road 3, Block B, Chand Housing Mohammadpur, Dhaka 1207",
      description: "8 storied building",
      image: "/assets/images/1.4.png",
      details: "An elegant 8-storied residential complex offering luxurious living spaces and amenities."
    }
  ];

  useEffect(() => {
    // Three.js background animation
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      alpha: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#f97316',
      transparent: true,
      opacity: 0.8
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 2;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500">
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full opacity-30" style={{ pointerEvents: 'none' }} />
      <Header />
      
      {/* Hero Section */}
      <motion.section
        className="relative pt-32 pb-20 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-blue-300/30" />
        <div className="absolute inset-0">
          <div className="absolute left-0 top-1/4 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-blue-300/20 rounded-full blur-3xl" />
          <div className="absolute right-0 bottom-1/4 w-72 h-72 bg-gradient-to-br from-blue-300/20 to-blue-400/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 bg-clip-text text-transparent drop-shadow-2xl tracking-tight md:tracking-wider font-sans">Completed Projects</h1>
            <p className="text-lg md:text-xl text-blue-900/90 max-w-2xl mx-auto mb-2 md:mb-0 drop-shadow-md tracking-wide font-sans">Explore our portfolio of successfully completed projects that showcase our commitment to excellence in construction and design.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* SVG Wavy Divider */}
      <div className="-mt-8">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-24">
          <path fill="#3b82f6" fillOpacity="0.2" d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,101.3C672,107,768,85,864,80C960,75,1056,85,1152,90.7C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
      </div>

      {/* Projects Grid */}
      <motion.section
        className="py-8 md:py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.07, rotate: 2, boxShadow: '0 8px 32px 0 rgba(59,130,246,0.25)' }}
                className="bg-white/70 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-blue-400/60 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col border-2 border-transparent hover:border-blue-400 group"
                onClick={() => openModal(project)}
              >
                <div className="relative h-56 sm:h-80 overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg transition-all duration-300 group-hover:scale-105">{project.name}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center text-white/80 space-y-1 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2" />
                        <span className="text-xs sm:text-sm">{project.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                  <p className="text-blue-900/90 text-sm sm:text-base mb-3 sm:mb-4 font-medium transition-all duration-300 group-hover:scale-105">{project.details}</p>
                  <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-center shadow-md transition-all duration-300 group-hover:scale-105 animate-pulse">{project.description}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <section className="py-16 flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400/80 mt-16 rounded-3xl shadow-2xl mx-2 md:mx-8">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent drop-shadow-2xl text-center">Ready for Your Dream Project?</h2>
        <p className="text-lg text-blue-900/90 mb-8 text-center max-w-xl">Contact us today to start building your future with Solid State Ltd.</p>
        <a href="/contact" className="px-8 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white shadow-xl backdrop-blur-md hover:scale-105 transition-transform duration-300">Contact Us</a>
      </section>

      {/* Project Modal */}
      {showModal && selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Animated Modal Background */}
          <div className="absolute inset-0 animate-gradient-move bg-gradient-to-br from-blue-400 via-blue-600 to-blue-900 opacity-40 blur-2xl z-0" />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-lg w-full bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-blue-400 p-8 sm:p-12 text-center z-10"
            onClick={e => e.stopPropagation()}
          >
            <motion.button
              whileHover={{ scale: 1.2, color: '#1e40af' }}
              className="absolute top-4 right-4 text-blue-700 hover:text-blue-900 text-2xl"
              onClick={closeModal}
            >
              <FaTimes />
            </motion.button>
            <motion.img
              src={selectedProject.image}
              alt={selectedProject.name}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="w-full h-56 object-cover rounded-2xl mb-6 shadow-lg border-2 border-blue-200"
            />
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 bg-clip-text text-transparent drop-shadow-lg font-sans"
            >
              {selectedProject.name}
            </motion.h2>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex items-center justify-center text-blue-700 mb-2"
            >
              <FaMapMarkerAlt className="mr-2" />
              <span>{selectedProject.location}</span>
            </motion.div>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="text-blue-900/90 mb-4 font-medium"
            >
              {selectedProject.details}
            </motion.p>
            <motion.span
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow"
            >
              {selectedProject.description}
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CompletedPage; 