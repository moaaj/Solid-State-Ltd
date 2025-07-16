import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <motion.section
      className="py-12 sm:py-16 lg:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-3">
          Get in Touch
        </motion.h2>
        <motion.p variants={itemVariants} className="text-base sm:text-lg text-center text-gray-600 mb-8 sm:mb-12">
          Have questions? We'd love to hear from you.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Contact Information</h3>
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <span className="text-xl sm:text-2xl text-purple-600 mt-1">
                  <i className="fas fa-phone"></i>
                </span>
                <div>
                  <span className="block font-medium text-base sm:text-lg">Sales Enquiries</span>
                  <a href="tel:01309020643" className="text-sm sm:text-base text-gray-600 hover:text-purple-600">01309020643</a>
                </div>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <span className="text-xl sm:text-2xl text-purple-600 mt-1">
                  <i className="fas fa-envelope"></i>
                </span>
                <div>
                  <span className="block font-medium text-base sm:text-lg">Email Us</span>
                  <a href="mailto:solidstatebde@gmail.com" className="text-sm sm:text-base text-gray-600 hover:text-purple-600">solidstatebde@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <span className="text-xl sm:text-2xl text-purple-600 mt-1">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <div>
                  <span className="block font-medium text-base sm:text-lg">Visit Us</span>
                  <span className="text-sm sm:text-base text-gray-600">House 69/3, Road 7/A, Dhanmondi, Dhaka-1209</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Form */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Send a Message</h3>
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm sm:text-base font-medium mb-1 sm:mb-2">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm sm:text-base font-medium mb-1 sm:mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm sm:text-base font-medium mb-1 sm:mb-2">Message</label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows="4"
                  placeholder="Your message"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-purple-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection; 