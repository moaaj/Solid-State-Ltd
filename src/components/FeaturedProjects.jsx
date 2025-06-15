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
          <div className="w-16 h-16 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full mx-auto mb-4 shadow-lg animate-spin-3d hover:scale-110 transition-transform duration-300 flex items-center justify-center">
            <i className="fas fa-cube text-white text-2xl"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 bg-clip-text text-transparent drop-shadow-2xl tracking-tight md:tracking-wider font-sans transition-transform duration-300 hover:scale-110">Featured Projects</h2>
          <p className="text-xl text-blue-900/90 max-w-2xl mx-auto mb-8 drop-shadow-md tracking-wide font-sans">Discover our latest architectural masterpieces that redefine modern living</p>
        </motion.div>

        <div className="absolute left-1/2 top-10 -translate-x-1/2 z-0">
          <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-300 via-blue-400 to-purple-400 rounded-full shadow-2xl blur-sm opacity-60 animate-spin-3d"></div>
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-200 via-blue-300 to-pink-200 rounded-full shadow-xl blur-md opacity-40 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>
        </div>

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
              className="group relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-110 bg-white flex flex-col"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 rounded-t-3xl"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-end">
                <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4 transition-all duration-300 group-hover:text-lg">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold text-blue-900 mb-3 transition-all duration-300 group-hover:text-4xl">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-lg transition-all duration-300 group-hover:text-xl mb-4">
                  {project.description}
                </p>
                <button className="mt-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium transition-all duration-500 delay-200 hover:bg-indigo-600 hover:text-white">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects 