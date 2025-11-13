import React from "react";
import {FaTwitter, FaLinkedin, FaInstagram,} from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-[#1A263F] py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="transition-all duration-300 hover:scale-105 hover:200 text-xl font-semibold text-[#1A263F]">Hemchand</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="transition-all duration-300 hover:scale-105 hover:400 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
           
            { icon: <FaTwitter/>, link: "https://x.com/Hemchand44" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/hemchand-prajapati70/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/this.is.hemchand/" },
            
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transition-all duration-300 hover:scale-105  transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-[#1A263F] mt-6">
          © 2025 Hemchand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
