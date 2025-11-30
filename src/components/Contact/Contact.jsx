import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = "service_x32qsnk";
    const templateID = "template_cs41hdr";
    const publickey = "TrvpKyymY_dthvov8";

    emailjs
      .sendForm(serviceID, templateID, form.current, publickey)
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅");
        },
        () => {
          toast.error("Failed to send message ❌");
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] transition-colors"
    >
      <ToastContainer />

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#1A263F] dark:text-white">
          CONTACT
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-[#1A263F]/70 dark:text-gray-300 mt-4 text-lg font-medium">
          Feel free to reach out for collaborations or opportunities.
        </p>
      </div>

      {/* Modern Form Card */}
      <div
        className="
          w-full max-w-lg 
          bg-white/70 dark:bg-[#111827]/50
          backdrop-blur-xl
          border border-gray-300 dark:border-gray-700
          shadow-xl 
          rounded-2xl 
          p-8
          transition-all
        "
      >
        <h3 className="text-2xl font-bold text-[#1A263F] dark:text-white text-center mb-6">
          Let's Connect 🚀
        </h3>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-5">

          {/* Email */}
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="
              w-full p-3 rounded-xl 
              bg-gray-100 dark:bg-[#1f2937]
              border border-gray-300 dark:border-gray-700 
              text-gray-800 dark:text-white
              focus:outline-none focus:border-purple-500 
              focus:ring-1 focus:ring-purple-400
            "
          />

          {/* Name */}
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="
              w-full p-3 rounded-xl 
              bg-gray-100 dark:bg-[#1f2937]
              border border-gray-300 dark:border-gray-700 
              text-gray-800 dark:text-white
              focus:outline-none focus:border-purple-500 
              focus:ring-1 focus:ring-purple-400
            "
          />

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="
              w-full p-3 rounded-xl 
              bg-gray-100 dark:bg-[#1f2937]
              border border-gray-300 dark:border-gray-700 
              text-gray-800 dark:text-white
              focus:outline-none focus:border-purple-500 
              focus:ring-1 focus:ring-purple-400
            "
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="
              w-full p-3 rounded-xl 
              bg-gray-100 dark:bg-[#1f2937]
              border border-gray-300 dark:border-gray-700 
              text-gray-800 dark:text-white
              focus:outline-none focus:border-purple-500 
              focus:ring-1 focus:ring-purple-400
            "
          />

          {/* Send Button */}
          <button
            type="submit"
            className="
              w-full 
              bg-purple-600 dark:bg-purple-700
              hover:bg-purple-700 dark:hover:bg-purple-800
              text-white 
              py-3 
              rounded-xl 
              text-lg 
              font-semibold 
              shadow-md
              transition-all duration-200
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
