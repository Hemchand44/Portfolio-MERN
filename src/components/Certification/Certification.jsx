import React, { useState } from "react";
import { certifications } from "../../constants";

const Certification = () => {
  const [selected, setSelected] = useState(null);

  const openModal = (item) => setSelected(item);
  const closeModal = () => setSelected(null);

  return (
    <section
      id="certification"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans transition-colors duration-300"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#1A263F] dark:text-white">
          Certification
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-[#1A263F]/70 dark:text-gray-300 mt-4 text-lg font-medium">
          Verified certifications showcasing my continuous learning & technical expertise.
        </p>
      </div>

      {/* Certification Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((item) => (
          <div
            key={item.id}
            onClick={() => openModal(item)}
            className="
              bg-white/70 dark:bg-[#111827]/50 
              border border-gray-200 dark:border-gray-700
              rounded-2xl 
              shadow-lg 
              backdrop-blur-xl
              hover:shadow-purple-500/40
              hover:-translate-y-2
              transition-all duration-300
              cursor-pointer
            "
          >
            <div className="p-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-xl shadow-md"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#1A263F] dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-[#1A263F]/70 dark:text-gray-300 leading-relaxed line-clamp-3">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center 
          bg-black/50 backdrop-blur-md p-4 transition-all"
        >
          <div
            className="
              bg-white dark:bg-[#111827] 
              rounded-2xl 
              shadow-2xl 
              w-full max-w-3xl 
              overflow-hidden 
              relative
            "
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 
              hover:text-red-500 text-3xl leading-none"
            >
              &times;
            </button>

            {/* Image */}
            <div className="w-full flex justify-center bg-gray-100 dark:bg-[#1f2937] p-4">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full max-h-[380px] object-contain rounded-xl shadow-md"
              />
            </div>

            {/* Details */}
            <div className="p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#1A263F] dark:text-white mb-4">
                {selected.title}
              </h3>

              <p className="text-[#1A263F]/70 dark:text-gray-300 leading-relaxed">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certification;
