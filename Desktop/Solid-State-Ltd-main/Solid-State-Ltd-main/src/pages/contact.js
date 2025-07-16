import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import GlassCard from '../components/GlassCard';

// Lazy load the map component
const MapComponent = lazy(() => import('../components/MapComponent'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[250px]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
  </div>
);

export default function Contact() {
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

  // Animated icons for values
  const valueIcons = [
    <i className="fas fa-handshake text-2xl text-purple-500 animate-pulse" key="trust" />, // Trust
    <i className="fas fa-gem text-2xl text-yellow-500 animate-bounce" key="quality" />, // Quality
    <i className="fas fa-users text-2xl text-pink-500 animate-pulse" key="care" />, // Care
    <i className="fas fa-lightbulb text-2xl text-blue-500 animate-bounce" key="innovation" /> // Innovation
  ];

  return (
    <>
      <Head>
        <title>Contact Us - Solid State</title>
        <meta name="description" content="Get in touch with Solid State for all your real estate needs. We're here to help you find your dream property." />
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
          <motion.h1 variants={itemVariants} className="mt-10 sm:mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-3 text-purple-900 drop-shadow-lg">Contact Us</motion.h1>
          <motion.p variants={itemVariants} className="text-base sm:text-lg text-center text-gray-700 mb-8 sm:mb-12 font-medium">Get in touch with our team</motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Our Values & Vision Card with 3D tilt and animated icons */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.04, rotateY: 6 }}
              transition={tiltTransition}
              className="h-full"
            >
              <GlassCard className="p-8 h-full transition-transform duration-300 hover:shadow-2xl border-2 border-purple-200/60 shadow-xl relative group">
                <motion.div
                  className="absolute -inset-1 rounded-3xl pointer-events-none group-hover:shadow-[0_0_40px_10px_rgba(124,58,237,0.15)]"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <h2 className="text-2xl font-bold mb-6 text-center gradient-text">Our Values & Vision</h2>
                <div className="space-y-7">
                  <div className="flex items-start gap-4">
                    {valueIcons[0]}
                    <div>
                      <h3 className="text-lg font-semibold text-purple-700 mb-1">Trust & Integrity</h3>
                      <p className="text-gray-700">We build lasting relationships with our clients through honesty, transparency, and reliability.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    {valueIcons[1]}
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-600 mb-1">Quality Commitment</h3>
                      <p className="text-gray-700">Every project is delivered to the highest standards, ensuring comfort, safety, and elegance.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    {valueIcons[2]}
                    <div>
                      <h3 className="text-lg font-semibold text-pink-600 mb-1">Customer Care</h3>
                      <p className="text-gray-700">Our team is always here to support you, from your first inquiry to long after you move in.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    {valueIcons[3]}
                    <div>
                      <h3 className="text-lg font-semibold text-blue-600 mb-1">Innovation</h3>
                      <p className="text-gray-700">We embrace modern design and technology to create spaces that inspire and delight.</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Contact Information Card with subtle hover effect */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03, rotateY: -6 }}
              transition={tiltTransition}
              className="h-full"
            >
              <GlassCard className="p-8 h-full transition-transform duration-300 hover:shadow-2xl border-2 border-blue-200/60 shadow-xl">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-900">Contact Information</h2>
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <span className="block font-medium text-base sm:text-lg mb-1">Sales Enquiries</span>
                    <a href="tel:01309020643" className="text-sm sm:text-base text-gray-600 hover:text-purple-600">01309020643</a>
                  </div>
                  <div>
                    <span className="block font-medium text-base sm:text-lg mb-1">Email Us</span>
                    <a href="mailto:solidstatebde@gmail.com" className="text-sm sm:text-base text-gray-600 hover:text-purple-600 block">solidstatebde@gmail.com</a>
                    <a href="mailto:solidstate_bde@yahoo.com" className="text-sm sm:text-base text-gray-600 hover:text-purple-600 block">solidstate_bde@yahoo.com</a>
                    <a href="mailto:admin@solidstatebde.com" className="text-sm sm:text-base text-gray-600 hover:text-purple-600 block">admin@solidstatebde.com</a>
                  </div>
                  <div>
                    <span className="block font-medium text-base sm:text-lg mb-1">Visit Us</span>
                    <span className="text-sm sm:text-base text-gray-600">House 69/3, Road 7/A, Dhanmondi, Dhaka-1209</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Stylish Map Section */}
          <motion.div
            variants={itemVariants}
            className="relative group max-w-5xl mx-auto mt-8 sm:mt-12"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 rounded-3xl blur-sm"></div>
            <div className="relative bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Suspense fallback={<LoadingFallback />}>
                <MapComponent />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

// Static Site Generation
export async function getStaticProps() {
  return {
    props: {},
  };
} 