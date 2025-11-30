import React, { useState } from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile9.png";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-20 md:mt-24 lg:mt-32 transition-colors duration-300"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* LEFT SIDE */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold 
            text-[#1A263F] dark:text-white mb-2 leading-tight transition-colors"
          >
            Hi, I am
          </h1>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold 
            text-[#1A263F] dark:text-white mb-4 leading-tight transition-colors"
          >
            Hemchand
          </h2>

          <h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 
            text-[#1C244B] dark:text-purple-300 leading-tight transition-colors"
          >
            I am a{" "}
            <ReactTypingEffect
              text={["Fullstack Developer", "Software Engineer", "Coder"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#5E936C] dark:text-[#A8FBD3] transition-colors">
                  {cursor}
                </span>
              )}
              displayTextRenderer={(text) => (
                <span className="text-[#1C244B] dark:text-purple-300 transition-colors">
                  {text}
                </span>
              )}
            />
          </h3>

          <p
            className="text-base sm:text-lg md:text-lg 
            text-[#1A263F]/70 dark:text-gray-300 
            mb-10 mt-8 leading-relaxed transition-colors"
          >
            I am an entry-level Software Engineer. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>

          {/* BUTTON (now dark-mode compatible) */}
          <a
            href="https://drive.google.com/file/d/1UIv9loWqHzWxfXtcSWV3klxzGGOJhHfH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`inline-block px-8 py-3 text-lg rounded-full font-medium transition-all duration-300
              ${
                isHovered
                  ? "bg-white text-black border border-black"
                  : "bg-gradient-to-r from-black to-gray-800 text-white"
              }
              dark:${
                isHovered
                  ? "bg-white text-black border border-white"
                  : "bg-gradient-to-r from-gray-800 to-black text-white"
              }
            `}
          >
            Download CV
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center md:justify-end transition-all">
  <Tilt
    className="
      w-40 h-40
      sm:w-56 sm:h-56
      md:w-[25rem] md:h-[32rem]
      rounded-full md:rounded-[150px] overflow-hidden
      shadow-xl dark:shadow-gray-900 transition-all
    "
    tiltMaxAngleX={20}
    tiltMaxAngleY={20}
    scale={1.05}
    transitionSpeed={1000}
    gyroscope={true}
  >
    <img
      src={profileImage}
      alt="Hemchand"
      className="
        w-full h-full object-cover object-top
        rounded-full md:rounded-[150px]
      "
    />
  </Tilt>
</div>


      </div>
    </section>
  );
};

export default About;
