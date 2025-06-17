import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-blue-500 group-hover:text-pink-500 transition-colors duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5V21M3 21h18M3 21v-2.25A2.25 2.25 0 0 1 5.25 16.5h13.5A2.25 2.25 0 0 1 21 18.75V21" />
      </svg>
    ),
    title: 'Premium Locations',
    text: `Strategic properties in Dhaka's most sought-after neighborhoods`,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-yellow-500 group-hover:text-pink-500 transition-colors duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25l6.16 3.24-1.18-6.88 5-4.87-6.91-1-3.09-6.26-3.09 6.26-6.91 1 5 4.87-1.18 6.88L12 17.25z" />
      </svg>
    ),
    title: 'Quality Assurance',
    text: 'Highest standards in construction and finishing',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-green-500 group-hover:text-pink-500 transition-colors duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-7 9 7v7.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 19.5V12z" />
      </svg>
    ),
    title: 'Modern Design',
    text: 'Contemporary architecture with elegant aesthetics',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-purple-500 group-hover:text-pink-500 transition-colors duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Timely Delivery',
    text: 'Committed to delivering projects on schedule',
  },
]

function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const featureVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section 
      className="relative py-24 bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div 
        className="absolute inset-0 pointer-events-none select-none opacity-40 z-0"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute w-96 h-96 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-3xl top-[-6rem] left-[-6rem] opacity-60" />
        <div className="absolute w-80 h-80 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-2xl bottom-[-4rem] right-[-4rem] opacity-50" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <motion.div 
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
            <i className="fas fa-building text-white text-2xl"></i>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 bg-clip-text text-transparent drop-shadow-2xl tracking-tight md:tracking-wider font-sans"
          >
            About Us
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-blue-900/90 max-w-2xl mx-auto mb-8 drop-shadow-md tracking-wide font-sans"
          >
            To the highest standards of quality that we have set and maintained since the beginning of our journey
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={imageVariants}
            className="flex justify-center"
          >
            <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
              <Image 
                src="/images/about/Bashundhara.jpg" 
                alt="Bashundhara Project" 
                width={400}
                height={500}
                className="rounded-3xl shadow-2xl w-full max-w-md border-4 border-white/40 object-cover"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.div 
              className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl shadow-xl p-10 md:p-12"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-700 mb-10 font-medium"
              >
                We plant our hearts in the development of our buildings. Every aspect of their framework defines us. That is why we shape them our way to make the light dance through the rooms and the wind play with the ambiance, like a painter carefully and with purpose picking every brush stroke for his masterpiece.
              </motion.p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    variants={featureVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group hover:bg-gradient-to-br hover:from-blue-100 hover:to-pink-100"
                  >
                    <motion.div 
                      className="mb-3"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-purple-600 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-500 text-sm group-hover:text-gray-700 transition-colors duration-300">{feature.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutSection 