import React, { useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile3.png';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Fixed: NO duplicate keys, proper hover logic
  const baseStyle = {
    background: isHovered
      ? 'white'
      : 'linear-gradient(90deg, #000000, #1a1a1a)',
    color: isHovered ? 'black' : 'white',
    padding: '12px 30px',
    borderRadius: '9999px',
    fontSize: '1.125rem',
    marginTop: '20px',
    transform: 'scale(1)',
    border: isHovered ? '1px solid black' : 'none',
    transition: 'all 0.3s ease-in-out', // smoother animation
    display: 'inline-block',
  };

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A263F] mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A263F] mb-4 leading-tight">
            Hemchand
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#5E936C] leading-tight">
            <span className="text-[#1C244B]">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'Software Engineer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#A8FBD3]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-[#1A263F]-400 mb-10 mt-8 leading-relaxed">
            I am an entry-level Software Engineer. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>

          <a
            href="https://drive.google.com/file/d/1UIv9loWqHzWxfXtcSWV3klxzGGOJhHfH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={baseStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Download CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[30rem] rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Hemchand"
              className="w-full h-full rounded-full"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
