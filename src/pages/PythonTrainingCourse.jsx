// PythonTrainingCourse.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavbarMain from '../components/Navbar';
import Footer from "../components/Footer";
import { FaCheckCircle } from "react-icons/fa";
import CourseSearchBar from '../components/CourseSearchBar';
import { allCourses } from "../components/courses";
import CloudsContactForm from "../components/CloudsContactForm";

const faqs = [
  {
    question: "Is this course beginner-friendly?",
    answer: "Yes! This course is designed for absolute beginners with no prior programming experience."
  },
  {
    question: "What kind of projects will I build?",
    answer: "You’ll build real applications like calculator, to-do list, file manager, and data-based mini projects using Python libraries."
  },
  {
    question: "What tools will I use during this training?",
    answer: "You’ll use tools like PyCharm, Jupyter Notebook, and Google Colab with hands-on exercises."
  },
  {
    question: "Will I learn both theory and practical?",
    answer: "Yes! The course focuses on clear conceptual understanding with a hands-on, project-based learning approach."
  },
  {
    question: "Will I get a certificate and job support?",
    answer: "Yes, you’ll receive a certificate and we also help with job preparation and freelancing tips."
  }
];

const PythonTrainingCourse = () => {
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
            Python Programming Training
          </motion.h1>

          <div className="flex flex-col lg:flex-row gap-5">
            <motion.div
              className="lg:w-2/3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg leading-relaxed">
                Learn the world’s most versatile and beginner-friendly programming language. Python is the go-to tool for web development, automation, data analysis, AI, and more.
              </p>
              <p className="mt-4 text-lg">
                This course starts with the fundamentals and builds up to object-oriented programming, basic data processing, and practical mini-projects.
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
      <li>8:00AM – 9:30AM</li>
      <li>1:00PM – 2:30PM</li>
      <li>6:00PM – 7:30PM</li>
    </ul>
  </div>

  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
    <h4 className="text-sm font-semibold text-[#044e30] mb-2 text-center">
       ONLINE CLASS
    </h4>
    <ul className="text-sm text-gray-800 space-y-1 text-center">
      <li>7:30AM – 9:00AM</li>
      <li>12:30PM – 2:00PM</li>
      <li>5:00PM – 6:30PM</li>
    </ul>
                  </div>
                </div>

                <p className="text-xs text-center mt-6 font-semibold text-[#044e30]">
                  CODE SMARTER. THINK LOGICALLY.
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
            {["Introduction to Python & Setup", "Variables, Data Types & Operators", "Control Flow – if, for, while", "Functions & Modules", "Lists, Tuples, Dictionaries, Sets", "File Handling – Reading & Writing Files", "Error Handling & Debugging", "Object-Oriented Programming in Python", "Basic Libraries – Math, Datetime, OS", "Project – Mini Applications & Automation Scripts"]
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
            Benefits of Python Programming Training
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[["Learn from scratch — no experience needed", "Foundation for Data Science, AI & Web Development", "Build portfolio-worthy beginner projects", "Hands-on coding exercises & live demos"],
              ["Certificate after course completion", "Freelancing and job-readiness support", "Flexible timing for students & working pros", "Pathway to advanced Python fields"]].map((group, i) => (
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
          className="max-w-screen-xl mx-auto px-4 md:px-10 mt-16 pb-2"
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
      <CloudsContactForm/>
      <Footer />
    </>
  );
};

export default PythonTrainingCourse;
