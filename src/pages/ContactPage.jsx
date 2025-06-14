import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo111.jpg'

const ContactPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 overflow-hidden">
      {/* Hamburger Navigation Bar */}
      <nav className="w-full fixed top-0 left-0 z-20 bg-white/80 backdrop-blur shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Solid State Logo" className="w-12 h-12 rounded-2xl shadow-lg border-2 border-blue-200 bg-white/80" />
            <span className="text-2xl font-bold text-indigo-700">Solid State</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-800 hover:text-indigo-600 font-medium transition-colors">Home</Link>
            <Link to="/contact" className="text-gray-800 hover:text-indigo-600 font-medium transition-colors">Contact</Link>
            <Link to="/completed" className="text-gray-800 hover:text-indigo-600 font-medium transition-colors">Handed-Over</Link>
          </div>
          <button
            className="md:hidden text-2xl text-indigo-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur border-t shadow-lg px-4 py-4 space-y-4">
            <Link to="/" className="block text-gray-800 hover:text-indigo-600 font-medium" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/contact" className="block text-gray-800 hover:text-indigo-600 font-medium" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/completed" className="block text-gray-800 hover:text-indigo-600 font-medium" onClick={() => setMenuOpen(false)}>Handed-Over</Link>
          </div>
        )}
      </nav>
      {/* 3D Attractive Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-[-12%] right-[-8%] w-[500px] h-[500px] bg-gradient-to-tr from-purple-300 via-indigo-200 to-blue-300 rounded-full blur-2xl opacity-30 animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-to-tl from-pink-200 via-indigo-100 to-purple-200 rounded-full blur-2xl opacity-30 animate-pulse" style={{ transform: 'translate(-50%, -50%)' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-purple-100 opacity-80" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h1
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="inline-block text-4xl md:text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 bg-clip-text text-transparent drop-shadow-2xl tracking-tight md:tracking-wider font-sans cursor-pointer border-b-4 border-transparent hover:border-blue-600 transition-all duration-200"
          >
            Contact Us
          </motion.h1>
          <p className="text-lg text-gray-600">Get in touch with our team</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.10 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="group bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 transition-transform duration-300 hover:shadow-black/60 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 bg-clip-text text-transparent mb-6 drop-shadow-md tracking-wide font-sans">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <FaPhone className="text-indigo-600 mt-1 text-2xl group-hover:animate-spin transition-transform duration-500" />
                <div>
                  <h3 className="font-medium text-gray-900 text-lg">Sales Enquiries</h3>
                  <a href="tel:01309020643" className="text-gray-600 hover:text-indigo-600 text-base">01309020643</a>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <FaEnvelope className="text-indigo-600 mt-1 text-2xl group-hover:animate-spin transition-transform duration-500" />
                <div>
                  <h3 className="font-medium text-gray-900 text-lg">Email Us</h3>
                  <a href="mailto:solidstatebde@gmail.com" className="text-gray-600 hover:text-indigo-600 text-base">solidstatebde@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <FaMapMarkerAlt className="text-indigo-600 mt-1 text-2xl group-hover:animate-spin transition-transform duration-500" />
                <div>
                  <h3 className="font-medium text-gray-900 text-lg">Visit Us</h3>
                  <span className="text-gray-600 text-base">House 69/3, Road 7/A, Dhanmondi, Dhaka-1209</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.10 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="group bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 transition-transform duration-300 hover:shadow-black/60 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 bg-clip-text text-transparent mb-6 drop-shadow-md tracking-wide font-sans">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white py-2 px-4 rounded-md shadow-lg hover:from-blue-800 hover:to-blue-600 font-bold tracking-wide backdrop-blur-md transition-all duration-200"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Stylish Map Section */}
        <div className="relative group max-w-4xl mx-auto mt-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-700 rounded-3xl blur opacity-60 group-hover:opacity-90 transition duration-500"></div>
          <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl shadow-black/60 overflow-hidden transition-transform duration-300 group-hover:scale-110">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9024424301397!2d90.3712953!3d23.7464663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8983f79fa27%3A0x7c2b1a7c1a0c0c0c!2sHouse%2069%2F3%2C%20Road%207%2FA%2C%20Dhanmondi%2C%20Dhaka%201209!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage 