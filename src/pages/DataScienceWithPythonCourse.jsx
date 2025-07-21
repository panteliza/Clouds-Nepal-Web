// DataScienceWithPythonCourse.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavbarMain from '../components/Navbar';
import Footer from "../components/Footer";
import { FaCheckCircle } from "react-icons/fa";
import CourseSearchBar from '../components/CourseSearchBar';
import { allCourses } from "../components/courses";

const faqs = [
  {
    question: "What is Data Science with Python training?",
    answer: "This training teaches how to use Python to collect, clean, analyze, visualize, and interpret data for business and research insights."
  },
  {
    question: "What tools and libraries will I learn?",
    answer: "You will work with Jupyter, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, and basic SQL."
  },
  {
    question: "Are there any prerequisites?",
    answer: "Basic knowledge of computers and logical thinking. No programming experience is required."
  },
  {
    question: "Is this course beginner friendly?",
    answer: "Yes, it's designed for complete beginners and covers Python from scratch with practical examples."
  },
  {
    question: "Do you provide real project experience?",
    answer: "Yes, you will complete mini-projects and a final capstone using real datasets."
  },
  {
    question: "Is there a certificate and job assistance?",
    answer: "Yes, we provide a certificate after completion and career support including resume help and interview prep."
  },
];

const DataScienceWithPythonCourse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-[70px]">
        <NavbarMain />
        <CourseSearchBar allCourses={allCourses} />

        {/* Hero Section */}
        <motion.section
          className="pt-[34px] max-w-screen-xl mx-auto px-4 md:px-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-[#044e30] mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Data Science with Python Training
          </motion.h1>

          <div className="flex flex-col lg:flex-row gap-5">
            <motion.div
              className="lg:w-2/3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg leading-relaxed">
                Explore the world of data-driven decision making. Learn Python programming and statistical techniques to analyze real-world data and build predictive models.
              </p>
              <p className="mt-4 text-lg">
                This hands-on course guides you through the complete data science workflow, using industry-standard libraries and tools.
              </p>
            </motion.div>

            <motion.div
              className="lg:w-1/3 bg-white p-5 rounded-xl shadow-md border border-teal-100"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-cyan-100 p-5 rounded-xl shadow-inner w-full">
                <h3 className="text-lg font-bold text-center text-[#044e30] mb-4">
                  Available Seat TIME
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <h4 className="text-sm font-semibold text-[#044e30] mb-2 text-center">
                      PHYSICAL CLASS
                    </h4>
                    <ul className="text-sm text-gray-800 space-y-1 text-center">
                      <li>7:00AM – 8:30AM</li>
                      <li>1:00PM – 2:30PM</li>
                      <li>3:30PM – 5:00PM</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <h4 className="text-sm font-semibold text-[#044e30] mb-2 text-center">
                      ONLINE CLASS
                    </h4>
                    <ul className="text-sm text-gray-800 space-y-1 text-center">
                      <li>6:30AM – 8:00AM</li>
                      <li>12:30PM – 2:00PM</li>
                      <li>8:00PM – 9:30PM</li>
                    </ul>
                  </div>
                </div>

                <p className="text-xs text-center mt-6 font-semibold text-[#044e30]">
                  MASTER DATA WITH PYTHON
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Curriculum */}
        <motion.section
          className="max-w-screen-xl mx-auto px-4 md:px-10 mt-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.h2 className="text-2xl font-bold text-[#044e30] mb-6">
            What You Will Learn
          </motion.h2>
          <ul className="space-y-3 list-disc pl-5 text-base">
            {["Introduction to Data Science and Python",
              "Python Basics: Variables, Data Types, and Logic",
              "Control Structures: Loops and Conditionals",
              "Functions, Modules, and Error Handling",
              "Working with Libraries: NumPy and Pandas",
              "Data Cleaning, Preprocessing, and Wrangling",
              "Data Visualization with Matplotlib and Seaborn",
              "Basic Statistics for Data Analysis",
              "Exploratory Data Analysis (EDA)",
              "Machine Learning Basics with Scikit-learn",
              "Mini Projects with Real-World Datasets",
              "Capstone Project + GitHub Portfolio Setup"]
              .map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  {item}
                </motion.li>
              ))}
          </ul>
        </motion.section>

        {/* Benefits */}
        <motion.section
          className="max-w-screen-xl mx-auto px-4 md:px-10 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-[#044e30] mb-6">
            Benefits of This Course
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[ ["Zero coding experience required",
                "Learn tools used by professional data scientists",
                "Hands-on projects to boost confidence",
                "Start freelancing or job-ready"],
              ["Real datasets and case studies",
                "Flexible online + offline schedules",
                "Career guidance and mentorship",
                "Certification and portfolio development"]
            ].map((group, i) => (
              <motion.div
                key={i}
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.3 }}
              >
                {group.map((text, j) => (
                  <p className="flex items-start gap-2" key={j}>
                    <FaCheckCircle className="text-green-700 mt-1" />
                    {text}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="max-w-screen-xl mx-auto px-4 md:px-10 mt-16 pb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-[#044e30] mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3 max-w-2xl mx-auto">
            {faqs.map((faq, idx) => (
              <motion.details
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <summary className="cursor-pointer font-semibold text-gray-800">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </motion.section>
      </div>
      <Footer />
    </>
  );
};

export default DataScienceWithPythonCourse;