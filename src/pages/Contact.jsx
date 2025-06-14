import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Contact Us</h1>
        <p className="text-center text-gray-600 mb-10">Get in touch with our team</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-3">
                <span className="text-2xl text-purple-600 mt-1">
                  <i className="fas fa-phone"></i>
                </span>
                <div>
                  <span className="block font-medium text-lg">Sales Enquiries</span>
                  <a href="tel:01309020643" className="text-gray-600 hover:text-purple-600 text-base">01309020643</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl text-purple-600 mt-1">
                  <i className="fas fa-envelope"></i>
                </span>
                <div>
                  <span className="block font-medium text-lg">Email Us</span>
                  <a href="mailto:solidstatebde@gmail.com" className="text-gray-600 hover:text-purple-600 text-base">solidstatebde@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl text-purple-600 mt-1">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <div>
                  <span className="block font-medium text-lg">Visit Us</span>
                  <span className="text-gray-600 text-base">House 69/3, Road 7/A, Dhanmondi, Dhaka-1209</span>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" rows="4"></textarea>
              </div>
              <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">Send Message</button>
            </form>
          </div>
        </div>
        {/* Stylish Map Section */}
        <div className="relative group max-w-5xl mx-auto mt-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-400 to-indigo-500 rounded-3xl blur opacity-60 group-hover:opacity-90 transition duration-500"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9024424301397!2d90.3712953!3d23.7464663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8983f79fa27%3A0x7c2b1a7c1a0c0c0c!2sHouse%2069%2F3%2C%20Road%207%2FA%2C%20Dhanmondi%2C%20Dhaka%201209!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

 