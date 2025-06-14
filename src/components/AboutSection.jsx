import React from 'react'
import aboutImage from '../assets/images/Bashundhara.jpg'

const features = [
  {
    icon: 'fas fa-building',
    title: 'Premium Locations',
    text: `Strategic properties in Dhaka's most sought-after neighborhoods`,
  },
  {
    icon: 'fas fa-star',
    title: 'Quality Assurance',
    text: 'Highest standards in construction and finishing',
  },
  {
    icon: 'fas fa-home',
    title: 'Modern Design',
    text: 'Contemporary architecture with elegant aesthetics',
  },
  {
    icon: 'fas fa-clock',
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
                    <div className="text-3xl text-blue-500 mb-3 group-hover:text-pink-500 transition-colors duration-300">
                      <i className={feature.icon}></i>
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