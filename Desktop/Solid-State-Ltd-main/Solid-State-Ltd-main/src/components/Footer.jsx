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
    <footer className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white backdrop-blur-xl shadow-2xl border-t-4 border-blue-400">
      {/* Glassmorphism & Animated Gradient Blobs */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full blur-3xl opacity-40 animate-spin-slow" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-blue-200 via-indigo-400 to-purple-300 rounded-full blur-2xl opacity-30 animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center justify-center gap-4">
          <img src="/images/logo231.png" alt="Solid State Logo" className="w-16 h-16 rounded-2xl shadow-2xl border-4 border-white/30 bg-white/80 object-contain p-2 hover:scale-110 transition-transform duration-300 mb-2" />
          <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg tracking-wide font-sans mb-2">Solid State Ltd</span>
          <p className="text-blue-100/80 text-base md:text-lg font-medium text-center max-w-xs mb-2">Your Splendid House. Building Trust Since 1996.</p>
          <h4 className="text-lg font-semibold text-blue-200 tracking-wide uppercase text-center">Contact</h4>
          <ul className="space-y-2 text-base md:text-lg text-center">
            <li className="flex items-center justify-center gap-3 group">
              <i className="fas fa-map-marker-alt text-pink-400 group-hover:scale-110 transition-transform duration-300"></i>
              <span className="text-blue-100 group-hover:text-pink-300 transition-colors duration-300">House 69/3, Road 7/A, Dhanmondi, Dhaka-1209</span>
            </li>
            <li className="flex items-center justify-center gap-3 group">
              <i className="fas fa-phone text-pink-400 group-hover:scale-110 transition-transform duration-300"></i>
              <a href="tel:01309020643" className="text-blue-100 hover:text-pink-300 transition-colors duration-300">01309020643</a>
            </li>
            <li className="flex items-center justify-center gap-3 group">
              <i className="fas fa-envelope text-pink-400 group-hover:scale-110 transition-transform duration-300"></i>
              <a href="mailto:solidstatebde@gmail.com" className="text-blue-100 hover:text-pink-300 transition-colors duration-300">solidstatebde@gmail.com</a>
            </li>
            <li className="flex items-center justify-center gap-3 group">
              <i className="fas fa-envelope text-pink-400 group-hover:scale-110 transition-transform duration-300"></i>
              <a href="mailto:solidstate_bde@yahoo.com" className="text-blue-100 hover:text-pink-300 transition-colors duration-300">solidstate_bde@yahoo.com</a>
            </li>
            <li className="flex items-center justify-center gap-3 group">
              <i className="fas fa-envelope text-pink-400 group-hover:scale-110 transition-transform duration-300"></i>
              <a href="mailto:admin@solidstatebde.com" className="text-blue-100 hover:text-pink-300 transition-colors duration-300">admin@solidstatebde.com</a>
            </li>
          </ul>
          <div className="flex gap-4 mt-4 justify-center">
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
              <a key={social} href={`#${social}`} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center text-white shadow-lg hover:scale-110 hover:bg-pink-500 transition-all duration-300">
                <i className={`fab fa-${social} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-blue-300/30 text-center">
          <p className="text-blue-100/80 hover:text-pink-300 transition-colors duration-300 text-base md:text-lg">
            Solid State Ltd all rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 