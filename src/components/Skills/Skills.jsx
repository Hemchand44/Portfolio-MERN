// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="
      py-24 pb-24 
      px-[12vw] md:px-[7vw] lg:px-[20vw] 
      font-sans 
      bg-skills-gradient 
      dark:bg-none dark:bg-[#0d1117] 
      clip-path-custom
    "
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#1A263F] dark:text-white">
        SKILLS
      </h2>
      <div className="w-24 h-1 bg-[#504d56] dark:bg-purple-400 mx-auto mt-2"></div>

      <p className="mt-4 text-lg font-semibold text-[#1A263F]/70 dark:text-gray-300">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="
            bg-white dark:bg-[#111827] 
            backdrop-blur-lg 
            px-6 sm:px-10 py-8 sm:py-6 
            mb-10 
            w-full sm:w-[48%] 
            rounded-2xl 
            border border-gray-200 dark:border-gray-700 
            shadow-[0_0_20px_1px_rgba(130,69,236,0.25)]
          "
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#4a4a6a] dark:text-gray-200 text-center mb-6">
            {category.title}
          </h3>

          {/* Skill Items */}
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="
                    flex items-center justify-center 
                    space-x-2 
                    bg-transparent 
                    border-2 border-gray-300 dark:border-gray-600 
                    rounded-3xl 
                    py-2 px-2 sm:py-2 sm:px-2 
                    text-center
                    transition
                  "
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-xs sm:text-sm text-[#0b2545] dark:text-gray-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
