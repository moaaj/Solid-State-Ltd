import React from 'react'
import { motion } from 'framer-motion'

const amenities = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-blue-500 group-hover:text-blue-700 transition-colors duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17v-2a4 4 0 014-4h10a4 4 0 014 4v2M6 17v2a2 2 0 002 2h8a2 2 0 002-2v-2" />
        <rect x="5" y="11" width="14" height="6" rx="2" />
      </svg>
    ),
    title: 'Parking Space',
    desc: 'Project is in front of 60ft road.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-purple-500 group-hover:text-blue-700 transition-colors duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
    title: 'Private Security',
    desc: 'This (Solid State - Abedin Villa) apartment is on the south gate of Honourable chairman of Bashundhara group. So full security is always there in our apartment.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-pink-500 group-hover:text-blue-700 transition-colors duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4 0 2.21 1.79 4 4 4s4-1.79 4-4c0-2.21-1.79-4-4-4zm0-2c3.31 0 6 2.69 6 6 0 3.31-2.69 6-6 6s-6-2.69-6-6c0-3.31 2.69-6 6-6z" />
      </svg>
    ),
    title: 'Medical Facilities (Walking Distance from our Project)',
    desc: 'Evercare Hospital is 100 meters from our project.',
    highlight: true
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-yellow-500 group-hover:text-blue-700 transition-colors duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25l6.16 3.24-1.18-6.88 5-4.87-6.91-1-3.09-6.26-3.09 6.26-6.91 1 5 4.87-1.18 6.88L12 17.25z" />
      </svg>
    ),
    title: 'Special Facilities',
    desc: 'Very Special facility. The kitchen market is only 2 minutes walking distance from the project. This facility is not available in any other residence in Bashundhara.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-green-500 group-hover:text-blue-700 transition-colors duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-7 9 7v7.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 19.5V12z" />
      </svg>
    ),
    title: 'Smart Homes',
    desc: `Permanently, 3 sides are always open for this apartment's residents. So fresh air and sunlight will always be available flowing the aroma of peace in soul and heart.`
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-blue-800 group-hover:text-blue-700 transition-colors duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5l2.5 2.5M12 4.5l-2.5 2.5M12 4.5V9m7 8v-2.5a2.5 2.5 0 00-2.5-2.5h-1a2.5 2.5 0 00-2.5 2.5V17m0 0v2m0-2h-2m2 0h2m-6 0v2m0-2H7m2 0h2m-6 0v2m0-2H3m2 0h2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 21v-2a2 2 0 012-2h12a2 2 0 012 2v2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 17v-2.5A2.5 2.5 0 0110.5 12h3A2.5 2.5 0 0116 14.5V17" />
      </svg>
    ),
    title: 'Masjid',
    desc: 'A local jummah masjid is situated right beside our apartment after the boundary wall of our project.'
  },
]

function AmenitiesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section 
      id="amenities" 
      className="py-24 bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="absolute left-1/2 top-10 -translate-x-1/2 z-0"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-300 via-blue-400 to-purple-400 rounded-full shadow-2xl blur-sm opacity-60"></div>
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-200 via-blue-300 to-pink-200 rounded-full shadow-xl blur-md opacity-40 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="w-16 h-16 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full mx-auto mb-4 shadow-lg flex items-center justify-center"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <i className="fas fa-star text-white text-2xl"></i>
        </motion.div>

        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 bg-clip-text text-transparent drop-shadow-2xl tracking-tight md:tracking-wider font-sans"
        >
          Building Amenities
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {amenities.map((amenity, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className={`rounded-2xl p-8 shadow-lg flex flex-col items-center text-center transition ${amenity.highlight ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white' : 'bg-white'}`}
            >
              <motion.div 
                variants={iconVariants}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
                className="mb-4"
              >
                {amenity.icon}
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="font-bold text-lg mb-2"
              >
                {amenity.title}
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="text-base opacity-80"
              >
                {amenity.desc}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default AmenitiesSection 