import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryModal from "../components/EnquiryModal"; // 👈 make sure this path is correct

const CourseSearchBar = ({ allCourses }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showList, setShowList] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const inputRef = useRef();
  const containerRef = useRef();
  const navigate = useNavigate();

  const filteredSuggestions = allCourses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    const found = allCourses.find(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (found) {
      navigate(found.path);
      setShowSuggestions(false);
      setSearchTerm("");
    } else {
      alert("Course not found!");
    }
  };

  const handleCourseClick = (path) => {
    navigate(path);
    setSearchTerm("");
    setShowSuggestions(false);
    setShowList(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !inputRef.current?.contains(e.target) &&
        !containerRef.current?.contains(e.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradientFlow 8s ease infinite;
        }
        input, button {
          font-size: 16px !important;
        }
      `}</style>

      <div className="relative w-full z-40">
        <div className="absolute inset-0 z-0 animate-gradient-flow bg-[length:200%_200%] bg-gradient-to-r from-[#06693A] via-[#059669] to-[#034D2C] blur-sm opacity-90" />
        <div className="absolute inset-0 z-0 bg-white/40 backdrop-blur-sm mix-blend-overlay pointer-events-none" />

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 px-4 md:px-6 py-4">
          <div className="flex flex-grow items-center gap-3 w-full md:w-auto">
            <div
              onClick={() => setShowList(!showList)}
              className="flex items-center gap-2 font-semibold text-white text-base cursor-pointer transition hover:text-yellow-100"
            >
              <FaBars className="sm:text-lg" />
              <span className="text-[11px] sm:text-lg">All Courses</span>
            </div>

            <div className="relative flex-grow" ref={containerRef}>
              <form
                onSubmit={handleSearch}
                className="flex items-center gap-2 rounded-full overflow-hidden shadow-md bg-white ring-1 ring-gray-200 focus-within:ring-2 focus-within:ring-[#06693A]"
              >
                <input
                  type="text"
                  placeholder="What do you want to learn today?"
                  className="w-full px-5 py-2 text-sm sm:text-base text-gray-800 placeholder-gray-400 bg-white shadow-inner focus:outline-none focus:ring-0 border-none"
                  value={searchTerm}
                  ref={inputRef}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                />
                <button
                  type="submit"
                  className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-r-full transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                    />
                  </svg>
                </button>
              </form>

              <AnimatePresence>
                {showSuggestions && searchTerm && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 right-0 top-full mt-2 bg-white shadow-xl rounded-xl z-[99] max-h-[260px] overflow-y-auto"
                  >
                    {filteredSuggestions.length > 0 ? (
                      <>
                        <div className="text-xs uppercase text-gray-500 px-4 pt-3 pb-1">
                          Suggestions
                        </div>
                        {filteredSuggestions.map((course, idx) => (
                          <div
                            key={idx}
                            onClick={() => handleCourseClick(course.path)}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 cursor-pointer transition-all"
                          >
                            {course.title}
                          </div>
                        ))}
                      </>
                    ) : (
                      <div className="px-4 py-3 text-sm text-gray-500">
                        No matching courses
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.08, boxShadow: "0px 0px 12px rgba(6, 105, 58, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowEnquiry(true)}
            className="hidden md:inline-block bg-gradient-to-r from-[#044e30] to-[#06693A] hover:from-[#033d26] hover:to-[#055a33] text-white px-6 py-2.5 rounded-full font-semibold tracking-wide shadow-lg transition-all duration-300 mt-1"
          >
            Send Inquiry
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {showList && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-md rounded-b-xl max-h-[300px] overflow-y-auto px-6 py-3"
          >
            <ul className="space-y-2">
              {allCourses.map((course, index) => (
                <motion.li
                  key={index}
                  onClick={() => handleCourseClick(course.path)}
                  className="cursor-pointer text-gray-700 hover:text-green-600 hover:underline text-sm transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  {course.title}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <EnquiryModal isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} />
    </>
  );
};

export default CourseSearchBar;
