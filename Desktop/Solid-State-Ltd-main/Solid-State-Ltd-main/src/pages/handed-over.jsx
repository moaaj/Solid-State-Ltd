import React from 'react';
import Navbar from '../components/Navbar';

const HandedOverPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 to-amber-100/30" />
        <div className="absolute inset-0">
          <div className="absolute left-0 top-1/4 w-64 h-64 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-3xl" />
          <div className="absolute right-0 bottom-1/4 w-72 h-72 bg-gradient-to-br from-amber-200/20 to-yellow-200/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Handed Over Projects
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our successfully completed and handed over projects.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add your handed over projects here */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Project Name</h3>
              <p className="text-slate-600">Project description goes here.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HandedOverPage; 