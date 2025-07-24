import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaLaptopCode, FaCheckCircle } from "react-icons/fa";

const courseOptions = [
  "ASP.NET", "AWS", "Backend Development", "Business Analysis", "C/C++", "Data Science",
  "DevOps", "Digital Marketing", "Ethical Hacking", "ExpressJS", "Flutter",
  "Frontend Development", "Full Stack Development", "Graphics Design", "Machine Learning (Python)",
  "MEAN Stack", "NodeJS", "PHP", "Python Basic", "Python with AI",
  "Python with Django", "Quality Assurance (QA)", "React Native", "ReactJS", "SEO Advanced",
  "SEO Basic", "UI/UX Design", "Video Editing"
];

const EnquiryModal = ({ isOpen, onClose }) => {
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const subject = "Clouds Nepal Web Course Inquiry";
    const body = `
      Name: ${encodeURIComponent(data.name)}
      %0AEmail: ${encodeURIComponent(data.email)}
      %0APhone: ${encodeURIComponent(data.phone)}
      %0ACourse: ${encodeURIComponent(data.course)}
      %0AMessage: ${encodeURIComponent(data.message)}
    `;

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=webcloudsnepal@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`, "_blank");
    setFormSent(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] bg-black/40 flex items-center justify-center px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative overflow-hidden"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
              onClick={onClose}
            >
              <FaTimes size={18} />
            </button>

            {/* Icon + Heading */}
            <div className="flex items-center justify-center gap-2 mb-6 text-[#06693A]">
              <FaLaptopCode className="text-2xl" />
              <h2 className="text-2xl font-bold text-center">Enroll in Your Dream Course</h2>
            </div>

            {/* Success Message */}
            {formSent ? (
              <div className="text-center text-green-600 font-semibold space-y-2">
                <FaCheckCircle className="mx-auto text-3xl" />
                <p>Form submitted successfully!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Input Fields */}
                {["name", "email", "phone"].map((field, i) => (
                  <div key={i} className="relative">
                    <input
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      name={field}
                      required
                      placeholder=" "
                      className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-[#06693A] transition placeholder-transparent"
                    />
                    <label className="absolute left-4 top-2 text-sm text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
                      {field === "name"
                        ? "Full Name"
                        : field === "email"
                        ? "Email"
                        : "Phone"}
                    </label>
                  </div>
                ))}

                {/* Course Dropdown */}
                <div className="relative">
                  <select
                    name="course"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#06693A] text-gray-700"
                  >
                    <option value="">-- Select Course --</option>
                    {courseOptions.map((course, idx) => (
                      <option key={idx} value={course}>{course}</option>
                    ))}
                  </select>
                </div>

                {/* Message Box */}
                <textarea
                  name="message"
                  required
                  placeholder="Tell us what you're looking for..."
                  rows="3"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#06693A] text-gray-700"
                />

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-[#06693A] hover:bg-[#055a33] text-white font-semibold rounded-lg py-2.5 transition-all shadow-md"
                >
                  Send Inquiry
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;
