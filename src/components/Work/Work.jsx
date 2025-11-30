import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#1A263F] dark:text-white">
          Projects
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-[#1A263F]/70 dark:text-gray-300 mt-4 text-lg font-medium">
          A collection of my best work — clean UI, scalable code, and modern tech.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="
              bg-white/70 dark:bg-[#111827]/40 
              border border-gray-200 dark:border-gray-700 
              rounded-2xl 
              backdrop-blur-xl
              shadow-lg 
              hover:shadow-purple-500/40
              transition-all 
              duration-300 
              hover:-translate-y-2 
              cursor-pointer
            "
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl shadow-md"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#1A263F] dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-[#1A263F]/70 dark:text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="
                      bg-gray-200 dark:bg-gray-700 
                      text-xs 
                      font-medium 
                      text-[#1A263F] dark:text-gray-200
                      rounded-full 
                      px-3 py-1
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-[#111827] rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden relative">

            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-red-500 text-3xl leading-none"
            >
              &times;
            </button>

            {/* Modal Image */}
            <div className="w-full flex justify-center bg-gray-50 dark:bg-[#1f2937] p-5">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-[350px] object-contain rounded-xl shadow-md"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#1A263F] dark:text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-[#1A263F]/70 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="
                      bg-gray-200 dark:bg-gray-700
                      text-xs 
                      font-medium 
                      text-gray-800 dark:text-white
                      rounded-full 
                      px-3 py-1
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  className="
                    w-1/2 
                    bg-gray-900 dark:bg-black
                    hover:bg-black dark:hover:bg-gray-800
                    text-white 
                    py-2 
                    rounded-xl 
                    text-center 
                    font-semibold
                    transition
                  "
                >
                  View Code
                </a>

                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  className="
                    w-1/2 
                    bg-purple-600 dark:bg-purple-700
                    hover:bg-purple-700 dark:hover:bg-purple-800
                    text-white 
                    py-2 
                    rounded-xl 
                    text-center 
                    font-semibold
                    transition
                  "
                >
                  View Live
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
