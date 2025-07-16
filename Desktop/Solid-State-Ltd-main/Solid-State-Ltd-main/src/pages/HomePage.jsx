import React, { useEffect, useState } from 'react'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/images/logo111.jpg'

// Directly import your sections/components
import AboutSection from '../components/AboutSection'
import AmenitiesSection from '../components/AmenitiesSection'
import FeaturedProjects from '../components/FeaturedProjects'

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
  </div>
)

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Add smooth scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= window.innerHeight * 0.75) {
          section.classList.add('animate-fade-in')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-100 via-indigo-100 to-purple-100 overflow-x-hidden">
      {/* 3D Animated Blurred Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-[-12%] right-[-8%] w-[500px] h-[500px] bg-gradient-to-tr from-purple-300 via-indigo-200 to-blue-300 rounded-full blur-2xl opacity-30 animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-to-tl from-pink-200 via-indigo-100 to-purple-200 rounded-full blur-2xl opacity-30 animate-pulse" style={{ transform: 'translate(-50%, -50%)' }} />
      </div>
      {/* Glassmorphic Sticky Navbar */}
      <nav className="w-full fixed top-0 left-0 z-20 bg-white/60 backdrop-blur-lg shadow-lg border-b border-white/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <img src={logo} alt="Solid State Logo" className="w-20 h-20 object-contain block mx-auto" />
            <span className="text-2xl font-bold text-indigo-700 drop-shadow-lg">Solid State</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-800 hover:text-indigo-600 font-medium transition-colors">Home</Link>
            <Link href="/contact" className="text-gray-800 hover:text-indigo-600 font-medium transition-colors">Contact</Link>
            <Link href="/completed" className="text-gray-800 hover:text-indigo-600 font-medium transition-colors">Handed-Over</Link>
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
          <div className="md:hidden bg-white/95 backdrop-blur border-t shadow-lg px-4 py-4 space-y-4 animate-fade-in">
            <Link href="/" className="block text-gray-800 hover:text-indigo-600 font-medium text-lg" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/contact" className="block text-gray-800 hover:text-indigo-600 font-medium text-lg" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link href="/completed" className="block text-gray-800 hover:text-indigo-600 font-medium text-lg" onClick={() => setMenuOpen(false)}>Handed-Over</Link>
          </div>
        )}
      </nav>
      <main className="pt-28">
        <HeroSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 space-y-16 sm:space-y-20 lg:space-y-24">
          <AboutSection />
          <AmenitiesSection />
          <FeaturedProjects />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage 