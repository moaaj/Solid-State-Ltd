import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import logo from '../assets/images/logo111.jpg'

function Footer() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Three.js setup
    const canvas = canvasRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

    // Create material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: '#fbbf24',
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    })

    // Create mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Mouse movement effect
    let mouseX = 0
    let mouseY = 0
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      particlesMesh.rotation.x += 0.0005
      particlesMesh.rotation.y += 0.0005

      // Mouse interaction
      particlesMesh.rotation.x += mouseY * 0.0005
      particlesMesh.rotation.y += mouseX * 0.0005

      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      scene.clear()
    }
  }, [])

  return (
    <footer className="relative bg-white text-slate-800 overflow-hidden">
      {/* Three.js Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" style={{ pointerEvents: 'none' }} />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Side Decoration */}
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-gradient-to-br from-orange-50/30 to-amber-50/30 rounded-full blur-3xl transform -translate-x-1/2" />
        <div className="absolute left-0 bottom-1/4 w-48 h-48 bg-gradient-to-br from-yellow-50/30 to-orange-50/30 rounded-full blur-3xl transform -translate-x-1/2" />
        
        {/* Right Side Decoration */}
        <div className="absolute right-0 top-1/3 w-72 h-72 bg-gradient-to-br from-amber-50/30 to-yellow-50/30 rounded-full blur-3xl transform translate-x-1/2" />
        <div className="absolute right-0 bottom-1/3 w-56 h-56 bg-gradient-to-br from-orange-50/30 to-amber-50/30 rounded-full blur-3xl transform translate-x-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Solid State Logo" className="w-12 h-12 rounded-xl shadow-lg hover:shadow-orange-200/50 transition-shadow duration-300 bg-white/80 object-contain p-1" />
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Solid State Ltd</h3>
                <p className="text-slate-600">Your Splendid House</p>
              </div>
            </div>
            {/* Social Media Links */}
            <div className="flex gap-4 mt-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a key={social} href={`#${social}`} className="w-10 h-10 rounded-full bg-slate-50 hover:bg-orange-500 hover:text-white flex items-center justify-center transition-all duration-300">
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-lg font-semibold mb-4 text-orange-600">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Plan', 'View Completed Projects', 'Contact Solid State Ltd'].map((item, index) => (
                <li key={index}>
                  <a href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                     className="text-slate-600 hover:text-orange-600 transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-lg font-semibold mb-4 text-orange-600">Customer Care</h4>
            <ul className="space-y-2">
              {['FAQ', 'Order Tracking', 'Terms & Conditions', 'Support'].map((item, index) => (
                <li key={index}>
                  <a href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                     className="text-slate-600 hover:text-orange-600 transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-lg font-semibold mb-4 text-orange-600">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 group">
                <i className="fas fa-map-marker-alt mt-1 text-orange-500 group-hover:scale-110 transition-transform duration-300"></i>
                <span className="text-slate-600 group-hover:text-orange-600 transition-colors duration-300">
                  House 69/3, Road 7/A, Dhanmondi, Dhaka-1209
                </span>
              </li>
              <li className="flex items-center gap-2 group">
                <i className="fas fa-phone text-orange-500 group-hover:scale-110 transition-transform duration-300"></i>
                <a href="tel:01309020643" className="text-slate-600 hover:text-orange-600 transition-colors duration-300">
                  01309020643
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <i className="fas fa-envelope text-orange-500 group-hover:scale-110 transition-transform duration-300"></i>
                <a href="mailto:solidstatebde@gmail.com" className="text-slate-600 hover:text-orange-600 transition-colors duration-300">
                  solidstatebde@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-600 hover:text-orange-600 transition-colors duration-300">
            © 2024 Solid State Ltd. All rights reserved.
          </p>
      </div>
      </div>
    </footer>
  )
}

export default Footer 