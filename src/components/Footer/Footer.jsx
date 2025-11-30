import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="
        py-12 
        px-[12vw] md:px-[7vw] lg:px-[20vw]
        bg-white/60 dark:bg-[#0d1117]/60
        backdrop-blur-xl
        border-t border-gray-300 dark:border-gray-700
        transition-all
      "
    >
      <div className="text-center">

        {/* Name / Branding */}
        <h2 className="text-2xl font-bold text-[#1A263F] dark:text-gray-100 hover:scale-105 transition-transform">
          Hemchand
        </h2>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-5 mt-4 text-sm sm:text-base">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" }, // ← FIXED (your ID was wrong)
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="
                text-[#1A263F]/80 dark:text-gray-300 
                hover:text-purple-600 dark:hover:text-purple-400
                transition-all hover:scale-110
              "
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6">
          {[
            { icon: <FaTwitter />, link: "https://x.com/Hemchand44" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/hemchand-prajapati70/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/this.is.hemchand/" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-2xl
                text-[#1A263F]/80 dark:text-gray-300
                hover:text-purple-600 dark:hover:text-purple-400 
                transition-transform hover:scale-125
              "
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent mt-8 mb-4"></div>

        {/* Copyright */}
        <p className="text-sm text-[#1A263F]/70 dark:text-gray-400">
          © {new Date().getFullYear()} Hemchand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
