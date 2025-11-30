import React from "react";
import { experiences } from "../../constants";
import bgimage from "../../assets/company_logo/Light-Blurred.jpg";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[5vw] md:px-[7vw] lg:px-[16vw] font-sans 
      bg-skills-gradient dark:bg-none dark:bg-[#0d1117] clip-path-custom-2 
      transition-colors duration-300"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#1A263F] dark:text-white">
          EXPERIENCE
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="mt-4 text-lg font-semibold text-[#1A263F]/70 dark:text-gray-300">
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      <div className="relative">

        {/* 🔥 TIMELINE LINE */}
        <div
            className="
              hidden sm:block        /* mobile: hide, desktop: show */
              absolute left-1/2 top-0 -translate-x-1/2
              w-[3px] h-full bg-gray-800 dark:bg-gray-400
            "
          ></div>


        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`
              flex flex-col sm:flex-row items-center mb-16 relative
              ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}
            `}
          >
            {/* 🔥 DOT */}
            <div
                className="
                  hidden sm:flex         /* mobile: hide, desktop: visible */
                  absolute left-1/2 -translate-x-1/2
                  w-12 h-12 sm:w-16 sm:h-16
                  bg-white dark:bg-[#111827]
                  border-4 border-purple-500 rounded-full shadow-lg
                  z-10 items-center justify-center overflow-hidden
                "
              >
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* 🔥 CARD */}
            <div
              className={`
                w-full sm:max-w-md p-6 sm:p-8 rounded-2xl
                bg-white text-[#1A263F] 
                dark:bg-[#111827] dark:text-gray-200
                border border-gray-300 dark:border-gray-700
                shadow-xl hover:shadow-purple-500/30
                transition-all hover:scale-[1.03]

                
                mx-auto sm:mx-0
                ${index % 2 === 0 ? "sm:ml-40" : "sm:mr-40"}
              `}
              style={{
                backgroundImage: `url(${bgimage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
              }}
            >
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-md overflow-hidden shadow-md">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1A263F] dark:text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm text-red-600 dark:text-red-400">
                    {experience.company}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {experience.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-[#1A263F]/70 dark:text-gray-300 leading-relaxed">
                {experience.desc}
              </p>

              <div className="mt-4">
                <h5 className="font-medium text-red-500 dark:text-red-400 mb-2">
                  Skills:
                </h5>
                <ul className="flex flex-wrap">
                  {experience.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="
                        bg-gray-200 dark:bg-gray-700 
                        text-gray-800 dark:text-gray-200 
                        px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 
                        border border-gray-300 dark:border-gray-600
                      "
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
