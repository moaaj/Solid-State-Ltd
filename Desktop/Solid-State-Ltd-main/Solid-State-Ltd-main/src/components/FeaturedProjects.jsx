import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function FeaturedProjects() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

  const projects = [
    {
      id: 1,
      image: '/images/projects/project1.jpg',
      title: 'Luxury Villa',
      description: 'Modern design meets comfort in this stunning villa project.',
      category: 'Residential'
    },
    {
      id: 2,
      image: '/images/projects/project2.jpg',
      title: 'Urban Residence',
      description: 'Contemporary living spaces in the heart of the city.',
      category: 'Residential'
    },
    {
      id: 3,
      image: '/images/projects/project3.jpg',
      title: 'Premium Apartment',
      description: 'Elegant apartment complex with world-class amenities.',
      category: 'Residential'
    },
    {
      id: 4,
      image: '/images/projects/c.png',
      title: 'Modern Green Tower',
      description: 'A new eco-friendly project with innovative design and lush greenery.',
      category: 'Residential'
    },

    {
      id: 6,
      image: '/images/projects/project4.jpg',
      title: 'New Residential Tower',
      description: 'A recently completed residential tower with modern amenities and design.',
      category: 'Residential'
    }
  ]

  const [selectedIndex, setSelectedIndex] = React.useState(null)

  // Helper to open modal at index
  const openModal = (idx) => setSelectedIndex(idx)
  const closeModal = () => setSelectedIndex(null)
  const showPrev = (e) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }
  const showNext = (e) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

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
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section 
      style={{ opacity, scale }}
      className="py-24 bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10"
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl bg-white flex flex-col cursor-pointer"
              onClick={() => openModal(idx)}
            >
              <motion.div 
                variants={imageVariants}
                className="aspect-w-16 aspect-h-12"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 rounded-t-3xl"
                />
              </motion.div>
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

        {/* Image Slider Modal */}
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full flex flex-col items-center" 
              onClick={e => e.stopPropagation()}
            >
              <img
                src={projects[selectedIndex].image}
                alt={projects[selectedIndex].title}
                className="max-h-[80vh] w-auto rounded-3xl shadow-2xl border-8 border-white object-contain mb-6"
              />
              <div className="flex justify-between items-center w-full px-4 absolute top-1/2 left-0 -translate-y-1/2">
                <button onClick={showPrev} className="text-white text-4xl bg-blue-700/80 rounded-full p-2 shadow-lg hover:bg-blue-900 transition-colors" aria-label="Previous">&#8592;</button>
                <button onClick={showNext} className="text-white text-4xl bg-blue-700/80 rounded-full p-2 shadow-lg hover:bg-blue-900 transition-colors" aria-label="Next">&#8594;</button>
              </div>
              <button
                className="absolute top-8 right-8 text-white text-4xl bg-blue-700/80 rounded-full p-2 shadow-lg hover:bg-blue-900 transition-colors"
                onClick={closeModal}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="text-center mt-2">
                <h3 className="text-2xl font-bold text-blue-100 drop-shadow mb-1">{projects[selectedIndex].title}</h3>
                <p className="text-blue-200 text-lg">{projects[selectedIndex].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}

export default FeaturedProjects 