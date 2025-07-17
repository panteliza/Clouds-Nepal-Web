import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const CourseSearchBar = ({ allCourses }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showList, setShowList] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef();
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
      if (!inputRef.current?.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Inline CSS for gradient animation */}
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
      `}</style>

      {/* 🌈 Animated Header */}
      <div className="relative w-full overflow-hidden z-40">
        <div className="absolute inset-0 z-0 animate-gradient-flow bg-[length:200%_200%] bg-gradient-to-r from-green-400 via-emerald-500 to-green-700 blur-sm opacity-90" />
        <div className="absolute inset-0 z-0 bg-white/40 backdrop-blur-sm mix-blend-overlay pointer-events-none" />

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 px-4 md:px-6 py-4">
          {/* Left: All Courses + Search */}
          <div className="flex flex-grow items-center gap-3 w-full md:w-auto">
            <div
              onClick={() => setShowList(!showList)}
              className="flex items-center gap-2 font-semibold text-white text-base cursor-pointer transition hover:text-yellow-100"
            >
              <FaBars className=" sm:text-lg" />
              <span>All Courses</span>
            </div>

            {/* Search Box */}
            <div className="relative flex-grow" ref={inputRef}>
              <form
                onSubmit={handleSearch}
                className="flex rounded-full overflow-hidden shadow-lg bg-white transition focus-within:ring-2 focus-within:ring-green-400"
              >
                <input
                  type="text"
                  placeholder="What do you want to learn today?"
                  className="w-full px-4 py-2 text-sm focus:outline-none bg-transparent"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                />
                <button
                  type="submit"
                  className="px-4 bg-green-100 hover:bg-green-200 text-green-700 text-sm transition"
                >
                  🔍
                </button>
              </form>

              {/* 🔽 Suggestion Dropdown */}
              <AnimatePresence>
                {showSuggestions && searchTerm && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="sm:absolute fixed sm:left-0 left-4 right-4 sm:right-0 top-[58px] sm:top-full bg-white shadow-xl rounded-xl z-[999] max-h-[40vh] overflow-y-auto sm:mt-2"
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

          {/* Right: Inquiry Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-block bg-gradient-to-r from-lime-400 to-green-600 hover:from-lime-500 hover:to-green-700 text-white px-5 py-2 rounded-full shadow font-medium transition"
          >
            Send Inquiry →
          </motion.button>
        </div>
      </div>

      {/* 📜 Scrollable Course List */}
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
    </>
  );
};

export default CourseSearchBar;
