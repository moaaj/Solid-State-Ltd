import React from 'react'

const amenities = [
  {
    icon: 'fas fa-car',
    title: 'Parking Space',
    desc: 'Project is in front of 60ft road.'
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Private Security',
    desc: 'This (Solid-State Abedin Villa) apartment is on the south gate of Honourable chairman of Bashundhara group. So full security is always there in our apartment.'
  },
  {
    icon: 'fas fa-heartbeat',
    title: 'Medical Facilities (Walking Distance from our Project)',
    desc: 'Evercare Hospital is 100 meters from our project.',
    highlight: true
  },
  {
    icon: 'fas fa-star',
    title: 'Special Facilities',
    desc: 'Very Special facility. The kitchen market is only 2 minutes walking distance from the project. This facility is not available in any other residence in Bashundhara.'
  },
  {
    icon: 'fas fa-home',
    title: 'Smart Homes',
    desc: `Permanently, 3 sides are always open for this apartment's residents. So fresh air and sunlight will always be available flowing the aroma of peace in soul and heart.`
  },
  {
    icon: 'fas fa-mosque',
    title: 'Masjid',
    desc: 'A local jummah masjid is situated right beside our apartment after the boundary wall of our project.'
  },
]

function AmenitiesSection() {
  return (
    <section id="amenities" className="py-24 bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow hover:scale-110 transition-transform duration-300 mx-auto mb-4"></div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 bg-clip-text text-transparent drop-shadow-2xl tracking-tight md:tracking-wider font-sans transition-transform duration-300 hover:scale-110">Building Amenities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {amenities.map((amenity, idx) => (
            <div key={idx} className={`rounded-2xl p-8 shadow-lg flex flex-col items-center text-center transition hover:-translate-y-2 hover:shadow-2xl hover:scale-110 ${amenity.highlight ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white' : 'bg-white'}`}>
              <div className={`text-4xl mb-4 ${amenity.highlight ? 'text-white' : 'text-blue-500'}`}>
                <i className={amenity.icon}></i>
              </div>
              <div className="font-bold text-lg mb-2">{amenity.title}</div>
              <div className="text-base opacity-80">{amenity.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AmenitiesSection 