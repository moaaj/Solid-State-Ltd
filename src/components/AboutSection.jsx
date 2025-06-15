import React from 'react'
import aboutImage from '../assets/images/Bashundhara.jpg'

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-blue-500 group-hover:text-pink-500 transition-colors duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5V21M3 21h18M3 21v-2.25A2.25 2.25 0 0 1 5.25 16.5h13.5A2.25 2.25 0 0 1 21 18.75V21" />
      </svg>
    ),
    title: 'Premium Locations',
    text: `Strategic properties in Dhaka's most sought-after neighborhoods`,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-yellow-500 group-hover:text-pink-500 transition-colors duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25l6.16 3.24-1.18-6.88 5-4.87-6.91-1-3.09-6.26-3.09 6.26-6.91 1 5 4.87-1.18 6.88L12 17.25z" />
      </svg>
    ),
    title: 'Quality Assurance',
    text: 'Highest standards in construction and finishing',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-green-500 group-hover:text-pink-500 transition-colors duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-7 9 7v7.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 19.5V12z" />
      </svg>
    ),
    title: 'Modern Design',
    text: 'Contemporary architecture with elegant aesthetics',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-purple-500 group-hover:text-pink-500 transition-colors duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Timely Delivery',
    text: 'Committed to delivering projects on schedule',
  },
]

function AboutSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none opacity-40 z-0">
        {/* Decorative blurred gradient blobs */}
        <div className="absolute w-96 h-96 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-3xl top-[-6rem] left-[-6rem] opacity-60" />
        <div className="absolute w-80 h-80 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-2xl bottom-[-4rem] right-[-4rem] opacity-50" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full mx-auto mb-4 shadow-lg animate-spin-3d hover:scale-110 transition-transform duration-300 flex items-center justify-center">
            <i className="fas fa-building text-white text-2xl"></i>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 bg-clip-text text-transparent drop-shadow-2xl tracking-tight md:tracking-wider font-sans transition-transform duration-300 hover:scale-110">About Us</h2>
          <p className="text-lg md:text-xl text-blue-900/90 max-w-2xl mx-auto mb-8 drop-shadow-md tracking-wide font-sans">To the highest standards of quality that we have set and maintained since the beginning of our journey</p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <img src={aboutImage} alt="Bashundhara Project" className="rounded-3xl shadow-2xl w-full max-w-md border-4 border-white/40 transition-transform duration-300 hover:scale-110" />
          </div>
          <div>
            <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl shadow-xl p-10 md:p-12 transition-transform duration-300 hover:scale-105">
              <p className="text-lg md:text-xl text-gray-700 mb-10 font-medium">
                We plant our hearts in the development of our buildings. Every aspect of their framework defines us. That is why we shape them our way to make the light dance through the rooms and the wind play with the ambiance, like a painter carefully and with purpose picking every brush stroke for his masterpiece.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group hover:bg-gradient-to-br hover:from-blue-100 hover:to-pink-100 hover:scale-110"
                  >
                    <div className="mb-3">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-purple-600 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-gray-500 text-sm group-hover:text-gray-700 transition-colors duration-300">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 