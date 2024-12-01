// src/pages/contact.tsx
import React from 'react';
import Link from "next/link"
const ContactUS = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
    {/* Header */}
    <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-5 py-4">
          {/* Logo Section */}
          <div className="text-2xl font-bold text-blue-600">Edtech</div>

          {/* Navigation Section */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
            <Link href="/about" className="text-gray-700 hover:text-blue-500">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </Link>
            <a href="/courses" className="text-gray-700 hover:text-blue-500">
              Courses
            </a>
          </nav>

          {/* Buttons Section */}
          <div className="hidden md:flex space-x-4">
            <button className="text-blue-500 border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white">
              Sign In
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Register
            </button>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
              aria-label="Open menu"
            >
              {/* Hamburger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Heading Section */}
        <h1 className="text-4xl font-semibold text-center text-blue-600 mb-6">
          Contact Us
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          We’re here to help with any questions or concerns you may have. Reach out to us using the form below,
          and we’ll get back to you as soon as possible.
        </p>

        {/* Form Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
          <form>
            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-blue-400 rounded-md mt-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-blue-400 rounded-md mt-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border border-blue-400 rounded-md mt-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here"
                rows={4}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md mt-4 transition-all hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            >
              Send Message
            </button>
          </form>
        </div>

      
       
        
      </div>
    </div>
     {/* Footer Section */}
     <footer className="bg-gray-800 text-white py-8 text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
            <div className="mt-4">
              <a  className="text-blue-500 mx-2">Facebook</a>
              <a  className="text-blue-500 mx-2">Twitter</a>
              <a  className="text-blue-500 mx-2">LinkedIn</a>
            </div>
          </footer>
    </div>

  );
};

export default ContactUS;
