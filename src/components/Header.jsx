import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo111.jpg'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Solid State Logo" className="w-12 h-12 rounded-xl shadow-lg border-2 border-blue-200 bg-white/80 object-contain p-1" />
            <span className="text-2xl font-bold text-gray-800">Solid State</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200">
              Home
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200">
              Contact
            </Link>
            <Link to="/completed" className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200">
              Completed Projects
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`block w-full h-0.5 bg-gray-800 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-gray-800 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/completed" 
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Completed Projects
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header 