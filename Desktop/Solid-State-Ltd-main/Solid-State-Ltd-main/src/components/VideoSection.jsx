import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function VideoSection() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])
  
  const videoRef = useRef(null)

  const handleVideoEnd = () => {
    // Video will loop automatically
  }

  return (
    <motion.section 
      style={{ opacity, scale }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black w-full"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 w-screen h-full" style={{ left: '50%', transform: 'translateX(-50%)' }}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          autoPlay
          onEnded={handleVideoEnd}
        >
          <source src="/images/projects/111.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/40 to-blue-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        {/* Animated circles */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rounded-full"
        />
        
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-32 right-32 w-24 h-24 border-2 border-blue-400/30 rounded-full"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-sm"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >


          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Solid State - Abedin Villa
            </span>
          </motion.h2>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-8"
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
              <p className="text-white/90 text-lg md:text-xl font-medium drop-shadow-lg">
                Ahmed Akbar Sobhan Road
              </p>
              <p className="text-white/80 text-base md:text-lg">
                House: 276/B, Block-E Road-8
              </p>
              <p className="text-white/80 text-base md:text-lg">
                Bashundhara R/A, Dhaka-1229
              </p>
            </div>
          </motion.div>

          {/* Flat for Sale */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-block bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl px-8 py-6 border-2 border-purple-400/30 shadow-2xl">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <i className="fas fa-home text-white text-xl"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                  Flat for Sale
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
                  <p className="text-white/80 text-sm md:text-base mb-1">Floor</p>
                  <p className="text-white text-xl md:text-2xl font-bold">9th Floor</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
                  <p className="text-white/80 text-sm md:text-base mb-1">Size</p>
                  <p className="text-white text-xl md:text-2xl font-bold">2050 ft²</p>
                </div>
              </div>
            </div>
          </motion.div>




        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </motion.section>
  )
}

export default VideoSection 