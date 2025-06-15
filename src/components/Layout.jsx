import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo111.jpg'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="hover:opacity-90 transition-opacity">
                <img src={logo} alt="Solid State Logo" className="h-12 w-auto max-w-[120px] w-full object-contain bg-white/80 rounded-xl shadow-md p-1" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link to="/" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </Link>
                <Link to="/about" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  About
                </Link>
                <Link to="/contact" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Contact
                </Link>
                <Link to="/completed" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Completed Projects
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 text-sm">
            © 2024 Your Company. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout 