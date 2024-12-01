import Link from "next/link";
export default function Home() {

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



      {/* Hero Section */}
      <section className="bg-white py-10 text-center h-auto flex flex-col justify-center items-center md:h-screen md:flex-row">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="w-full md:w-1/2 px-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-snug pb-4 md:pb-8">
              Unlock Your Potential <br /> And Build Your Future
            </h1>
            <p className="text-gray-600 mt-4 text-base sm:text-lg md:w-[70%] md:mx-auto">
              Explore our flexible learning options and choose the path to success that suits you. Start investing in your future today!
            </p>
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-blue-600 transition duration-300">
              Get Started
            </button>
            <div className="flex flex-col items-center gap-4 mt-6 md:flex-row lg:justify-center lg:gap-7 lg:py-10">
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-blue-500">500+</p>
                <p className="text-gray-600">Online Courses</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-blue-500">Expert</p>
                <p className="text-gray-600">Instruction</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-blue-500">Lifetime</p>
                <p className="text-gray-600">Access</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 px-4 flex justify-center mt-6 md:mt-0">
            <img
              src="/assets/hh.jpg"
              alt="Hero Section"
              className="w-full max-w-xs sm:max-w-sm md:max-w-lg h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
            Our Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Web development", price: 50 },
              { title: "Adobe Photoshop", price: 99 },
              { title: "Adobe Illustrator", price: 75 },
              { title: "After Effects", price: 180 },
              { title: "Google UX Design", price: 55 },
              { title: "Web Design", price: 80 },
              { title: "Google UX Design", price: 55 },
              { title: "Web Design", price: 80 }
            ].map((course, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src="/assets/c1.jpeg"
                  alt={course.title}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 flex-col items-center mx-auto text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mt-2">Starting at ${course.price}</p>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <button className="block mx-auto mt-8 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 text-center text-lg sm:text-xl border-white transition-all transform hover:scale-105 duration-300 ease-in-out">
        View more...
      </button>


      
<section className="py-20 mt-10  h-screen">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-semibold text-blue-700">Our Commitment to Quality</h2>
    <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
      At [Your Company Name], we believe that quality is the foundation of success. We are dedicated to ensuring that every learning experience, resource, and solution we provide is of the highest standard. Our team works tirelessly to create valuable content, innovative tools, and personalized support that empower learners to reach their full potential.
    </p>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-screen-lg mx-auto">
      <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
        <h3 className="text-xl font-bold text-blue-500">Expertly Curated Content</h3>
        <p className="text-gray-600 mt-2">
          We collaborate with industry experts and thought leaders to curate the most relevant, up-to-date, and effective content, ensuring that every learner receives the best educational material available.
        </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
        <h3 className="text-xl font-bold text-blue-500">Continuous Improvement</h3>
        <p className="text-gray-600 mt-2">
          Quality is not just a one-time goal. We are committed to continuous improvement, constantly evolving our content and methodologies based on feedback and the latest industry trends.
        </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
        <h3 className="text-xl font-bold text-blue-500">Personalized Learning</h3>
        <p className="text-gray-600 mt-2">
          We understand that every learner has unique needs. Our personalized learning experiences are designed to cater to individual goals and learning styles, ensuring success for everyone.
        </p>
      </div>
    </div>
  </div>
</section>


      <footer className="bg-blue-800 text-white py-20 mt-20 pt-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* About Us Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">About Us</h3>
              <p className="text-sm text-gray-300">
                We provide quality education resources and tools to help students succeed in their learning journey. Our mission is to make education accessible and affordable to all.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-blue-400 text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-400 text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-400 text-sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-blue-400 text-sm">
                    Courses
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact</h3>
              <p className="text-sm text-gray-300">
                <span className="font-semibold">Email:</span> info@edtech.com
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-semibold">Phone:</span> +1 234 567 890
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-semibold">Address:</span> 123 EdTech Lane, Learning City, 56789
              </p>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition duration-300"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition duration-300"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition duration-300"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm text-gray-300">
            &copy; 2024 EdTech. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
