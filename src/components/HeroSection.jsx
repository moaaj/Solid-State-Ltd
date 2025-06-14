import React from 'react'
import heroImage from '../assets/images/FINAL (12).png'

function HeroSection() {
  // Handlers for CTA buttons
  const getDirections = () => {
    window.open('https://www.google.com/maps/dir/?api=1&destination=23.7464663,90.3910863', '_blank')
  }
  const shareLocation = () => {
    const location = {
      title: 'Solid State Ltd',
      text: 'Visit Solid State Ltd at House 69/3, Road 7/A, Dhanmondi, Dhaka-1209',
      url: window.location.href
    }
    if (navigator.share) {
      navigator.share(location).catch(console.error)
    } else {
      window.open('https://www.google.com/maps/search/?api=1&query=23.7464663,90.3910863', '_blank')
    }
  }
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Moving Gradient Background */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(120deg, #e0f2fe, #60a5fa, #2563eb, #1e3a8a, #0c1a3a)',
          animation: 'gradientMove 2s ease-in-out infinite',
        }}
      />
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 mb-8 md:mb-0 animate-fade-in">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow hover:scale-110 transition-transform duration-300"></div>
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 bg-clip-text text-transparent drop-shadow-2xl tracking-tight md:tracking-wider font-sans transition-transform duration-300 hover:scale-110"
          >
            Think Quality<br />Think Solid State
          </h1>
          <p className="text-lg md:text-2xl font-medium text-blue-900/90 mb-8 drop-shadow-md tracking-wide font-sans">Your trusted partner in modern real estate excellence</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button onClick={getDirections} className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-400 hover:from-blue-800 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2 transition transform hover:scale-105 text-lg">
              <i className="fas fa-map-marker-alt"></i> Visit Us
            </button>
            <button onClick={shareLocation} className="bg-white/80 hover:bg-gray-50 text-blue-900 border-2 border-blue-900 px-8 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2 transition transform hover:scale-105 text-lg">
              <i className="fas fa-share-alt"></i> Share Location
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center animate-fade-in">
          <img src={heroImage} alt="Luxury Property" className="rounded-3xl shadow-2xl w-full max-w-xs md:max-w-md border-4 border-gray-100 bg-white/80 transition-transform duration-300 hover:scale-110" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection 