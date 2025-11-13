import React, { useState } from "react";
import { certifications } from "../../constants";

const certification = () => {
  const [selectedcertification, setSelectedcertification] = useState(null);

  const handleOpenModal = (certification) => {
    setSelectedcertification(certification);
  };

  const handleCloseModal = () => {
    setSelectedcertification(null);
  };

  return (
    <section
      id="certification"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#1A263F]">Certification</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-[#1A263F] mt-4 text-lg font-semibold">
          A showcase of the certifications I have earned, reflecting my knowledge, skills, and commitment to continuous learning in various technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certification) => (
          <div
            key={certification.id}
            onClick={() => handleOpenModal(certification)}
            className="border border-white bg-gradient-to-r from-gray-700 via-gray-600 to-gray-400 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={certification.image}
                alt={certification.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {certification.title}
              </h3>
              <p className="text-white mb-4 pt-4 line-clamp-3">
                {certification.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedcertification && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-90 p-4">
          <div className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-400 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-red-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gradient-to-r from-gray-700 via-gray-600 to-gray-400 px-4">
                <img
                  src={selectedcertification.image}
                  alt={selectedcertification.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedcertification.title}
                </h3>
                <p className="text-white mb-6 lg:text-base text-xs">
                  {selectedcertification.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default certification;
