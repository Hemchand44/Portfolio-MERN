import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';
import Certification from './components/Certification/Certification';
import IntroVideo from './components/Introvideo/Video';







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

      {/* <> */}
      {/* Single Navbar */}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Optional Background Effects */}
      {/* <BlurBlob top="20%" left="15%" size={350} color="rgba(168, 85, 247, 0.6)" />
      <BlurBlob top="55%" left="65%" size={300} color="rgba(14, 165, 233, 0.6)" />
      <BlurBlob top="80%" left="25%" size={280} color="rgba(244, 63, 94, 0.6)" /> */}

      {/* <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} /> */}

      {/* MAIN CONTENT */}
      <div className="relative pt-20">
          {/* <main className="max-w-[1300px] mx-auto px-4 md:px-8"> */}


        {/* Remove duplicate navbar - only intro wrapper*/}
        {/* <IntroVideo videoSrc="video.mp4"> */}

          <About />
          <Skills />
          <Experience />
          <Work />
          <Education />
          <Certification />
          <Contact />
          <Footer />

        {/* </IntroVideo> */}
        {/* </main> */}
      </div>
    </div>
    // {/* </> */}
  );
};

export default App;
