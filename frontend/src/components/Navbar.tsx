import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/Icon.svg";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-95 shadow-sm backdrop-blur-sm z-50">
      <div className="mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <Logo className="logo w-10 h-10 flex-shrink-0" />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                <strong>Home</strong>
              </Link>
              <Link
                to="https://itzgalaxy.com"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                <strong>ItzGalaxy</strong>
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                <strong>About</strong>
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                <strong>Contact</strong>
              </Link>
              <Link
                to="/projects"
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                <strong>Projects</strong>
              </Link>
              <Link
                to="/social"
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                <strong>Social</strong>
              </Link>
              <a
                href="https://github.com/PixlGalaxy"
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                <strong>GitHub</strong>
              </a>
              <Link
                to="https://onlinestatus.itzgalaxy.com"
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                <strong>Server Status</strong>
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-blue-500">
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-3 text-center">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-blue-500 transition-colors py-2"
              >
                <strong>Home</strong>
              </Link>
              <Link
                to="https://itzgalaxy.com"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-blue-500 transition-colors py-2"
              >
                <strong>ItzGalaxy</strong>
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-blue-500 transition-colors py-2"
              >
                <strong>About</strong>
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-blue-500 transition-colors py-2"
              >
                <strong>Contact</strong>
              </Link>
              <Link
                to="/projects"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-blue-500 transition-colors py-2"
              >
                <strong>Projects</strong>
              </Link>
              <Link
                to="/social"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-blue-500 transition-colors py-2"
              >
                <strong>Social</strong>
              </Link>
              <Link
                to="https://onlinestatus.itzgalaxy.com"
                className="text-gray-300 hover:text-blue-500 transition-colors py-2"
              >
                <strong>Server Status</strong>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
