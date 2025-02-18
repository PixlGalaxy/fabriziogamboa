import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaDiscord, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTelegram } from "react-icons/fa";

const socialLinks = [
  { name: "LinkedIn", icon: <FaLinkedin />, url: "https://linkedin.com/in/fabrizio-gamboa-a606b4161", color: "bg-blue-600" },
  { name: "GitHub", icon: <FaGithub />, url: "https://github.com/PixlGalaxy", color: "bg-gray-800" },
  { name: "Facebook", icon: <FaFacebook />, url: "https://www.facebook.com/fabrizio.gamboa.p", color: "bg-blue-700" },
  { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/gamboafabrizio/", color: "bg-pink-600" },
  { name: "Twitter", icon: <FaTwitter />, url: "https://x.com/Fabriziogp00", color: "bg-blue-400" },
  { name: "YouTube", icon: <FaYoutube />, url: "https://www.youtube.com/@fabriziogamboapalacios6070", color: "bg-red-600" },
  { name: "Telegram", icon: <FaTelegram />, url: "https://t.me/fabriziogamboa", color: "bg-blue-500" },
];

const discordID = "pixwolf";

const Social: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyDiscordID = () => {
    navigator.clipboard.writeText(discordID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 to-black text-white overflow-hidden">
      <title>Fabrizio Gamboa - Social</title>
      {/* Animated Bubbles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="bubbles">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="bubble"></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8">Connect With Me</h1>

        <div className="flex flex-col gap-4">
          {/* Discord Button */}
          <div className="relative">
            <button
              onClick={copyDiscordID}
              className="flex items-center justify-center w-full px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 bg-indigo-600"
            >
              <span className="text-2xl mr-3"><FaDiscord /></span>
              Discord
            </button>
            {copied && (
              <span className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 text-sm rounded-md">
                ID Copied!
              </span>
            )}
          </div>

          {/* Other Networks Bottons */}
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-full px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 ${link.color}`}
            >
              <span className="text-2xl mr-3">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Social;
