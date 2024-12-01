import React from "react";
import Link from "next/link"

export default function AboutUs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 mb-10 lg:mb-auto">
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

      {/* Hero Section */}
      <section className="bg-white py-20 text-center h-screen flex items-center ">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 px-2 lg:ml-12">
  <h1 className="text-4xl lg:text-[50px] font-bold text-gray-800 leading-tight lg:pb-8">
    About Us
  </h1>
  <p className="text-gray-600 mt-4 text-lg flex-col items-center lg:mx-auto lg:text-left">
    We are a passionate and dynamic team, united by a common mission to help you unlock your fullest potential and achieve both your personal and professional aspirations. Our diverse team brings together experts from a range of fields, including technology, design, business, and education, all working in harmony to create meaningful, impactful experiences for our clients.

    With an unwavering commitment to excellence, we harness our collective knowledge and expertise to craft innovative solutions that address the unique challenges faced by individuals and organizations alike. By blending creativity with technical mastery, we ensure that our offerings are not only effective but also personalized to meet the distinct needs of each client.

    Our collaborative approach fosters an environment where fresh ideas can thrive, and diverse perspectives drive groundbreaking solutions. Whether you're aiming to enhance your skills, streamline business operations, or embark on a personal growth journey, our team is dedicated to supporting and guiding you every step of the way.
  </p>
</div>


          {/* Image Section */}
          <div className="md:w-1/2 px-6 flex justify-center items-center mx-auto">
            <img
              className="w-full md:w-auto h-auto max-w-sm"
              src="/assets/h2.png"
              alt="About Us"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Our mission is to empower individuals with the tools and knowledge they
            need to succeed. We believe in fostering growth through flexible
            learning pathways and personalized guidance to ensure that each person
            has the opportunity to thrive.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold text-gray-800">Our Values</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-blue-500">Integrity</h3>
              <p className="text-gray-600 mt-2">
                We prioritize honesty, transparency, and ethical practices in
                everything we do.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-blue-500">Innovation</h3>
              <p className="text-gray-600 mt-2">
                We embrace change and continuously innovate to deliver the best
                learning experiences.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-blue-500">Excellence</h3>
              <p className="text-gray-600 mt-2">
                We aim for excellence in all our services, providing top-notch
                learning resources and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold text-gray-800">Meet Our Team</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img
                className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"
                src="/assets/p.png"
                alt="Team Member"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img
                className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"
                src="/assets/p.png"
                alt="Team Member"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img
                className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"
                src="/assets/p.png"
                alt="Team Member"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
          </div>
        </div>
      </section>


      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <div className="mt-4">
          <a className="text-blue-500 mx-2">Facebook</a>
          <a className="text-blue-500 mx-2">Twitter</a>
          <a className="text-blue-500 mx-2">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
