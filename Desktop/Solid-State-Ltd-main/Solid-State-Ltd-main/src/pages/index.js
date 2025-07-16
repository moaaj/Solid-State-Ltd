import { Suspense, lazy, useRef } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import GlassCard from '../components/GlassCard';

// Lazy load components
const AboutSection = lazy(() => import('../components/AboutSection'));
const AmenitiesSection = lazy(() => import('../components/AmenitiesSection'));
const FeaturedProjects = lazy(() => import('../components/FeaturedProjects'));
const VideoSection = lazy(() => import('../components/VideoSection'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[250px]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
  </div>
);

export default function Home() {
  const featuredRef = useRef(null);
  const scrollToFeatured = () => {
    if (featuredRef.current) {
      featuredRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Solid State - Your Trusted Real Estate Partner</title>
        <meta name="description" content="Discover premium real estate solutions with Solid State. We offer innovative property development and investment opportunities in Bangladesh." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero/hero-bg.jpg"
              alt="Luxury real estate background"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Your Trusted Real Estate Partner
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg sm:text-xl text-white font-semibold mb-2 max-w-3xl mx-auto"
            >
              Building Trust Since 1996, Now Shaping Your Future Home<br />
              <span className="text-blue-100/90">Your trusted partner in modern real estate excellence</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
            >
              {/* Removed as per user request */}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact" className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors">
                Get Started
              </Link>
              <button
                onClick={scrollToFeatured}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors"
              >
                View Projects
              </button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <Suspense fallback={<LoadingFallback />}>
          <AboutSection />
        </Suspense>

        {/* Video Section */}
        <Suspense fallback={<LoadingFallback />}>
          <VideoSection />
        </Suspense>

        {/* Amenities Section */}
        <Suspense fallback={<LoadingFallback />}>
          <AmenitiesSection />
        </Suspense>

        {/* Featured Projects */}
        <div ref={featuredRef}>
          <Suspense fallback={<LoadingFallback />}>
            <FeaturedProjects />
          </Suspense>
        </div>
      </main>
    </>
  );
}

// Static Site Generation
export async function getStaticProps() {
  return {
    props: {},
  };
} 