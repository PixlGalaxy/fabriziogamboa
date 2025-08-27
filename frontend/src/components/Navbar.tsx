import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/Icon.svg";
import { Menu, X } from "lucide-react";

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
              <Link to="/" className="text-gray-300 hover:text-blue-500 transition-colors">
                <strong>Home</strong>
              </Link>
              <Link to="https://itzgalaxy.com" className="text-gray-300 hover:text-blue-500 transition-colors">
                <strong>ItzGalaxy</strong>
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-blue-500 transition-colors">
                <strong>About</strong>
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-blue-500 transition-colors">
                <strong>Contact</strong>
              </Link>
              <Link to="/projects" className="text-gray-300 hover:text-blue-500 transition-colors">
                <strong>Projects</strong>
              </Link>
              <Link to="/social" className="text-gray-300 hover:text-blue-500 transition-colors">
                <strong>Social</strong>
              </Link>
              <a
                href="https://github.com/PixlGalaxy"
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                <strong>GitHub</strong>
              </a>
            </div>
          </div>

          {/* Server Status Badge (Only Desktop)*/}
          <div className="flex items-center gap-3">
            {/* Status badge */}
            <a
              href="https://onlinestatus.itzgalaxy.com"
              className="hidden md:block"
              aria-label="ItzGalaxy Server Status"
              title="ItzGalaxy Server Status"
            >
              <iframe
                src="https://onlinestatus.itzgalaxy.com/badge?theme=dark"
                width="220"
                height="28"
                frameBorder="0"
                scrolling="no"
                style={{ colorScheme: "none", border: "0" }}
                title="ItzGalaxy Server Status"
              />
            </a>

            {/* Hamburger Button (Mobile) */}
            <button
              onClick={toggleMenu}
              className={`md:hidden logo hover:text-blue-500 transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-red-300" />
              ) : (
                <Menu className="w-6 h-6 text-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar-mobile ${isMenuOpen ? "active" : ""}`}>
          <div className="flex flex-col space-y-3 text-center">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="navbar-link text-gray-300 hover:text-blue-500 transition-colors py-2"
            >
              <strong>Home</strong>
            </Link>
            <Link
              to="https://itzgalaxy.com"
              onClick={() => setIsMenuOpen(false)}
              className="navbar-link text-gray-300 hover:text-blue-500 transition-colors py-2"
            >
              <strong>ItzGalaxy</strong>
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="navbar-link text-gray-300 hover:text-blue-500 transition-colors py-2"
            >
              <strong>About</strong>
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="navbar-link text-gray-300 hover:text-blue-500 transition-colors py-2"
            >
              <strong>Contact</strong>
            </Link>
            <Link
              to="/projects"
              onClick={() => setIsMenuOpen(false)}
              className="navbar-link text-gray-300 hover:text-blue-500 transition-colors py-2"
            >
              <strong>Projects</strong>
            </Link>
            <Link
              to="/social"
              onClick={() => setIsMenuOpen(false)}
              className="navbar-link text-gray-300 hover:text-blue-500 transition-colors py-2"
            >
              <strong>Social</strong>
            </Link>
            <Link
              to="https://onlinestatus.itzgalaxy.com"
              onClick={() => setIsMenuOpen(false)}
              className="navbar-link text-gray-300 hover:text-blue-500 transition-colors py-2"
            >
              <strong>Server Status</strong>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
