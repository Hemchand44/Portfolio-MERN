import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Certification from './components/Certification/Certification';



const App = () => {



  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0d1117] transition-colors duration-300 overflow-x-hidden">
      {/* Single Navbar */}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* MAIN CONTENT */}
      <div className="relative pt-20">
          <About />
          <Skills />
          <Experience />
          <Work />
          <Education />
          <Certification />
          <Contact />
          <Footer />
      </div>
    </div>
  );
};

export default App;
