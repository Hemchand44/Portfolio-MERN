import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certification", label: "Certification" },
    { id: "contact", label: "Contact" },
  ];

  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 
        transition duration-300 
        ${isScrolled ? "bg-white/70 dark:bg-[#0d1117]/70 backdrop-blur-lg shadow-md" : "bg-transparent"}
      `}
    >
      {/* MAX WIDTH CONTAINER — THIS FIXES EVERYTHING */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-5 flex justify-between items-center">

        {/* LOGO */}
        <div className="text-xl font-semibold font-poppins cursor-pointer">
          <span className="text-[#FF204E]">&lt;</span>
          <span className="text-black dark:text-white">Hemchand</span>
          <span className="text-[#FF204E]">/&gt;</span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className="cursor-pointer text-[#1C244B] dark:text-gray-200 hover:text-[#33428e] dark:hover:text-purple-300"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* DESKTOP ICONS */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="https://github.com/Hemchand44" target="_blank" className="text-[#1C244B] dark:text-gray-200 hover:text-purple-300">
            <FaGithub size={24} />
          </a>

          <a href="https://www.linkedin.com/in/hemchand-prajapati70" target="_blank" className="text-[#1C244B] dark:text-gray-200 hover:text-purple-300">
            <FaLinkedin size={24} />
          </a>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX className="text-3xl text-purple-600 dark:text-purple-300" onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu className="text-3xl text-purple-600 dark:text-purple-300" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden 
      w-full 
      absolute left-0 top-full 
      bg-white/90 dark:bg-[#0d1117]/90 
      backdrop-blur-xl
      shadow-lg 
      py-6 
      px-8
      z-40">
          <ul className="space-y-4 py-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className="text-lg text-gray-800 dark:text-gray-200 hover:text-purple-500"
                >
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex justify-center space-x-6 pt-4">
              <FaGithub size={24} className="text-gray-700 dark:text-gray-200" />
              <FaLinkedin size={24} className="text-gray-700 dark:text-gray-200" />
            </div>

            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg shadow"
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
