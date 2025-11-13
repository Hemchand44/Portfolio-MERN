import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#1A263F]">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-[#1A263F]-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative w-full">
        {/* Vertical line */}
        <div className="absolute left-1/2 w-1 bg-[#1A263F] top-0 bottom-0 transform -translate-x-1/2"></div>

        {education.map((edu, index) => (
          <div key={edu.id} className="w-full flex mb-16 relative">
            {index % 2 === 0 ? (
              <>
                {/* Left card */}
                <div className="sm:w-1/2 flex justify-end pr-8">
                  <div
                    className="w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white
                    bg-white/20 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
                    transform transition-transform duration-300 hover:scale-105"
                  >
                    <div className="flex flex-col sm:flex-row items-center space-x-6">
                      <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                        <img
                          src={edu.img}
                          alt={edu.school}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-[#1A263F]">
                            {edu.degree}
                          </h3>
                          <h4 className="text-md text-[#1A263F]-300">{edu.school}</h4>
                        </div>
                        <p className="text-sm text-[#1A263F] mt-2">{edu.date}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-red-400 font-bold">Grade: {edu.grade}</p>
                    <p className="mt-4 text-[#1A263F]">{edu.desc}</p>
                  </div>
                </div>
                <div className="sm:w-1/2"></div>
              </>
            ) : (
              <>
                <div className="sm:w-1/2"></div>
                {/* Right card */}
                <div className="sm:w-1/2 flex justify-start pl-8">
                  <div
                    className="w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white
                    bg-white/20 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
                    transform transition-transform duration-300 hover:scale-105"
                  >
                    <div className="flex flex-col sm:flex-row items-center space-x-6">
                      <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                        <img
                          src={edu.img}
                          alt={edu.school}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-[#1A263F]">
                            {edu.degree}
                          </h3>
                          <h4 className="text-md text-[#1A263F]-300">{edu.school}</h4>
                        </div>
                        <p className="text-sm text-[#1A263F] mt-2">{edu.date}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-red-400 font-bold">Grade: {edu.grade}</p>
                    <p className="mt-4 text-[#1A263F]">{edu.desc}</p>
                  </div>
                </div>
              </>
            )}

            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 top-1/2 -translate-y-1/2 sm:-translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-[#1A263F] bg-white/10 z-10 flex items-center justify-center overflow-hidden">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
