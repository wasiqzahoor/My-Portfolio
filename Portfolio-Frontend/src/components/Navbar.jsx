// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 bg-opacity-80 backdrop-blur-md text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">

        {/* Left Side: Portfolio */}
        <div className="relative text-2xl font-bold tracking-widest cursor-pointer">
          <Link to="/" onClick={closeMenu} className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            Portfolio
          </Link>
          {/* Smoke Puffs */}
          <span className="absolute -bottom-2 -left-2 w-8 h-8 bg-white opacity-0 rounded-full filter blur-md animate-smoke" style={{ animationDelay: '0s' }}></span>
          <span className="absolute -bottom-1 -left-4 w-10 h-10 bg-white opacity-0 rounded-full filter blur-lg animate-smoke" style={{ animationDelay: '0.5s' }}></span>
          <span className="absolute -bottom-2 -left-0 w-12 h-12 bg-white opacity-0 rounded-full filter blur-xl animate-smoke" style={{ animationDelay: '1s' }}></span>
          <span className="absolute -bottom-1 -right-2 w-8 h-8 bg-white opacity-0 rounded-full filter blur-md animate-smoke" style={{ animationDelay: '1.5s' }}></span>
        </div>

        {/* Center: Navigation Links (for desktop) */}
        <ul className="hidden md:flex space-x-8">
          {['Home', 'About', 'Projects', 'Certificates', 'Contact'].map((item) => (
            <li key={item} className="group">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium tracking-wider relative hover:text-blue-200 cursor-pointer"
              >
                {item}
                {/* Hover Underline Effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side: Theme Toggle Switch & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Mobile Hamburger Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
            {isMenuOpen ? (
              // Close Icon (X)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links (Visible when isMenuOpen is true) */}
      <ul className={`md:hidden absolute top-full left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        {['Home', 'About', 'Projects', 'Certificates', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu} // Close menu when a link is clicked
              className="block py-3 px-6 text-xl font-medium tracking-wider text-center border-b border-gray-700 hover:bg-gray-800 transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;