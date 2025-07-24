// CCppCourse.jsx
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
    question: "What is C and C++ training?",
    answer: "C and C++ training teaches the fundamentals of procedural and object-oriented programming using two of the most widely used languages in system/software development."
  },
  {
    question: "What tools will I use in this course?",
    answer: "You'll use tools like GCC compiler, Code::Blocks, Visual Studio Code, and GitHub for version control."
  },
  {
    question: "Are online classes available?",
    answer: "Yes, we offer both online and offline classes with live instructor-led sessions and Q&A support."
  },
  {
    question: "Do I need prior programming experience?",
    answer: "No prior experience is required. This course starts from the basics and builds up to advanced topics."
  },
  {
    question: "How long is the course duration?",
    answer: "The course spans 2.5 to 3 months, with 3–4 sessions per week of 1.5 hours each."
  },
  {
    question: "Is job support included?",
    answer: "Yes, job-oriented training includes resume help, mock interviews, and placement guidance."
  }
];

const CCppCourse = () => {
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
            C & C++ Programming Language Training
          </motion.h1>

          <div className="flex flex-col lg:flex-row gap-5">
            <motion.div
              className="lg:w-2/3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg leading-relaxed">
                Build strong programming fundamentals by learning procedural programming in C and object-oriented concepts in C++. This course is perfect for students, aspiring developers, and engineers.
              </p>
              <p className="mt-4 text-lg">
                Understand memory management, system-level coding, and real-world applications that form the core of software and embedded systems development.
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
      <li>11:00AM – 12:30PM</li>
      <li>3:00PM – 4:30PM</li>
    </ul>
  </div>

  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
    <h4 className="text-sm font-semibold text-[#044e30] mb-2 text-center">
       ONLINE CLASS
    </h4>
    <ul className="text-sm text-gray-800 space-y-1 text-center">
      <li>9:00AM – 10:30AM</li>
      <li>1:00PM – 2:30PM</li>
      <li>7:00PM – 8:30PM</li>
    </ul>
                  </div>
                </div>
                <p className="text-xs text-center mt-6 font-semibold text-[#044e30]">
                  CODE YOUR FUTURE WITH STRONG BASICS
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Curriculum */}
        <motion.section className="max-w-screen-xl mx-auto px-4 md:px-10 mt-7">
          <motion.h2 className="text-2xl font-bold text-[#044e30] mb-6">
            What You Will Learn
          </motion.h2>
          <ul className="space-y-3 list-disc pl-5 text-base">
            {[
              "Introduction to Programming and C Language",
              "C Basics: Variables, Data Types, and Operators",
              "Control Structures: Loops and Conditionals",
              "Functions and Modular Programming",
              "Arrays, Strings, and Pointers",
              "Structures, Unions, and File Handling",
              "Introduction to C++ and Object-Oriented Concepts",
              "Classes, Objects, and Constructors",
              "Inheritance, Polymorphism, Encapsulation",
              "Templates, Exception Handling, and STL",
              "Mini Projects and Debugging Practice"
            ].map((item, idx) => (
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
        <motion.section className="max-w-screen-xl mx-auto px-4 md:px-10 mt-16">
          <h2 className="text-2xl font-bold text-[#044e30] mb-6">
            Benefits of C & C++ Programming Course
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["Build a strong programming foundation", "Learn both procedural and OOP paradigms", "Hands-on project experience", "Suitable for core development and embedded careers"],
              ["Live doubt clearing sessions", "Resume and interview prep included", "Online + Offline flexibility", "Certification after successful completion"]
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
        <motion.section className="max-w-screen-xl mx-auto px-4 md:px-10 mt-16 pb-2">
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

export default CCppCourse;
