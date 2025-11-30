import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[5vw] md:px-[7vw] lg:px-[16vw] font-sans 
      bg-skills-gradient dark:bg-none dark:bg-[#0d1117] clip-path-custom-3 
      transition-colors duration-300"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#1A263F] dark:text-white">
          EDUCATION
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="mt-4 text-lg font-semibold text-[#1A263F]/70 dark:text-gray-300">
          My academic background and qualifications.
        </p>
      </div>

      <div className="relative">

        {/* TIMELINE LINE – visible only on desktop */}
        <div
          className="
            hidden sm:block
            absolute left-1/2 top-0 -translate-x-1/2 
            w-[3px] bg-gray-800 dark:bg-gray-400 h-full
          "
        />

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`
              flex flex-col sm:flex-row items-center mb-16 relative
              ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}
            `}
          >

            {/* DOT – hidden on mobile */}
            <div
              className="
                hidden sm:flex
                absolute left-1/2 -translate-x-1/2 
                w-12 h-12 sm:w-16 sm:h-16 rounded-full z-20
                bg-white dark:bg-[#111827]
                border-4 border-purple-500 shadow-lg
                items-center justify-center overflow-hidden
              "
            >
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* CARD */}
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
            >
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-md overflow-hidden shadow-md">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1A263F] dark:text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-red-600 dark:text-red-400">
                    {edu.school}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {edu.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-[#1A263F]/70 dark:text-gray-300 leading-relaxed">
                {edu.desc}
              </p>

              <p className="mt-4 font-semibold text-red-500 dark:text-red-300">
                Grade: {edu.grade}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
