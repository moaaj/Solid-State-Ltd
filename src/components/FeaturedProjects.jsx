import React from 'react'
import { motion } from 'framer-motion'

function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      image: '/assets/images/2.jpg',
      title: 'Luxury Villa',
      description: 'Modern design meets comfort in this stunning villa project.',
      category: 'Residential'
    },
    {
      id: 2,
      image: '/assets/images/3.jpg',
      title: 'Urban Residence',
      description: 'Contemporary living spaces in the heart of the city.',
      category: 'Residential'
    },
    {
      id: 3,
      image: '/assets/images/4.jpg',
      title: 'Premium Apartment',
      description: 'Elegant apartment complex with world-class amenities.',
      category: 'Residential'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow hover:scale-110 transition-transform duration-300 mx-auto mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 bg-clip-text text-transparent drop-shadow-2xl tracking-tight md:tracking-wider font-sans transition-transform duration-300 hover:scale-110">Featured Projects</h2>
          <p className="text-xl text-blue-900/90 max-w-2xl mx-auto mb-8 drop-shadow-md tracking-wide font-sans">Discover our latest architectural masterpieces that redefine modern living</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-110"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {project.description}
                  </p>
                  <button className="mt-6 px-6 py-3 bg-white text-indigo-600 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200 hover:bg-indigo-600 hover:text-white">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects 