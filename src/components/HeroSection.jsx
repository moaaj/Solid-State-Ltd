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
    <section id="hero" className="w-full h-screen flex items-center justify-center m-0 p-0 overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <div className="absolute left-1/2 top-10 -translate-x-1/2 z-0">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-300 via-blue-400 to-purple-400 rounded-full shadow-2xl blur-sm opacity-60 animate-spin-3d"></div>
        <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-200 via-blue-300 to-pink-200 rounded-full shadow-xl blur-md opacity-40 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>
      </div>
      <div className="relative z-20 w-full h-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 m-0 p-2 md:p-12">
        <div className="flex-1 w-full text-center md:text-left bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 flex flex-col justify-center items-center h-full p-4 md:p-12 m-0 animate-fade-in border border-blue-100 transform-gpu hover:-rotate-x-2 hover:-rotate-y-2">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full flex items-center justify-center mb-6 shadow-lg animate-spin-3d hover:scale-110 transition-transform duration-300">
            <i className="fas fa-building text-white text-3xl md:text-4xl"></i>
          </div>
          <h1
            className="text-2xl md:text-5xl font-extrabold mb-2 leading-tight bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-2xl tracking-wide font-sans transition-transform duration-300 hover:scale-105"
            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.04em' }}
          >
            Building Trust Since 1996,<br />Now Shaping Your Future Home
          </h1>
          <div className="w-16 md:w-24 h-1 mx-auto my-3 md:my-4 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 rounded-full"></div>
          <p className="text-sm md:text-xl font-medium text-blue-900/90 mb-6 md:mb-8 drop-shadow-md tracking-wide font-sans" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Your trusted partner in modern real estate excellence
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center md:justify-start mt-2 w-full">
            <button onClick={getDirections} className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl flex items-center gap-2 md:gap-3 transition transform hover:-translate-y-1 hover:scale-105 hover:-rotate-x-2 text-sm md:text-base border-2 border-white/40 w-full md:w-auto">
              <i className="fas fa-map-marker-alt"></i> Visit Us
            </button>
            <button onClick={shareLocation} className="bg-white/90 hover:bg-blue-50 text-blue-900 border-2 border-blue-300 px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl flex items-center gap-2 md:gap-3 transition transform hover:-translate-y-1 hover:scale-105 hover:-rotate-x-2 text-sm md:text-base w-full md:w-auto">
              <i className="fas fa-share-alt"></i> Share Location
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center h-full animate-fade-in mt-6 md:mt-0">
          <div className="rounded-3xl border-8 border-gradient-to-r from-blue-200 via-blue-400 to-blue-500 shadow-2xl p-1 md:p-2 bg-white/80 transform-gpu hover:scale-105 hover:-rotate-y-3 transition-transform duration-500">
            <img src={heroImage} alt="Luxury Property" className="rounded-3xl w-40 h-40 md:w-64 md:h-64 lg:w-96 lg:h-96 object-cover shadow-xl border-4 border-white/80 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 