import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC<{ className?: string }> = ({ className = "mt-20" }) => (
  <footer className={`relative z-10 ${className} border-t border-white/10 bg-gray-950/85 backdrop-blur-md`}>
    <div className="container mx-auto px-4 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
      <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Fabrizio Gamboa | ItzGalaxy.com | All Rights Reserved.</p>
      <div className="flex items-center gap-5">
        <a href="https://github.com/PixlGalaxy" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-lg hover:text-white transition-colors">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/fabrizio-gamboa-p" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-lg hover:text-white transition-colors">
          <FaLinkedin />
        </a>
        <a href="mailto:contact@fabriziogamboa.com" className="hover:text-white transition-colors">
          contact@fabriziogamboa.com
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
