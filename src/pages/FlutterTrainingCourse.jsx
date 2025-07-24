// FlutterTrainingCourse.jsx
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
    question: "What is Flutter app development?",
    answer: "Flutter is a UI toolkit by Google for crafting beautiful, natively compiled applications for mobile, web, and desktop from a single codebase using Dart."
  },
  {
    question: "What are the prerequisites for this course?",
    answer: "Basic programming knowledge is recommended. Prior experience with OOP or mobile development is a plus."
  },
  {
    question: "Do I need to install Android Studio or Xcode?",
    answer: "Yes, you'll learn to install and configure tools like Android Studio or Visual Studio Code for Flutter development."
  },
  {
    question: "Is this course beginner-friendly?",
    answer: "Absolutely. We start with the basics of Dart and Flutter before moving to advanced widgets, state management, and deployment."
  },
  {
    question: "Will we build real projects?",
    answer: "Yes, you will create UI clones, CRUD apps, and a capstone project integrated with Firebase."
  }
];

const classSchedule = [
  { type: "Physical", times: ["6:00AM – 7:30AM", "7:30AM – 9:00AM", "2:30PM – 4:00PM"] },
  { type: "Online", times: ["7:00AM – 8:30AM", "1:30PM – 3:00PM", "8:30PM – 10:00PM"] }
];

const FlutterTrainingCourse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[70px]">
      <NavbarMain />
      <CourseSearchBar allCourses={allCourses} />

      {/* Hero Section */}
      <motion.section className="pt-[34px] max-w-screen-xl mx-auto px-4 md:px-10">
        <motion.h1 className="text-3xl md:text-4xl font-bold text-[#044e30] mb-6">
          Flutter App Development Training
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-5">
          <motion.div className="lg:w-2/3">
            <p className="text-lg leading-relaxed">
              Learn to build beautiful, high-performance mobile apps with Flutter — Google's UI toolkit for cross-platform development. This course teaches everything from Dart basics to publishing your own app.
            </p>
            <p className="mt-4 text-lg">
              You'll work with widgets, layouts, APIs, Firebase, and gain real-world experience by building multiple mobile apps from scratch.
            </p>
          </motion.div>

          {/* Timing Box */}
          <motion.div className="lg:w-1/3 bg-white p-5 rounded-xl shadow-md border border-teal-100">
            <div className="bg-cyan-100 p-5 rounded-xl shadow-inner w-full">
              <h3 className="text-lg font-bold text-center text-[#044e30] mb-4">
                Available Class Timings
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {classSchedule.map((group, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg p-4 shadow-sm border border-gray-200"
                  >
                    <h4 className="text-sm font-semibold text-[#044e30] mb-2 text-center">
                      {group.type.toUpperCase()} CLASS
                    </h4>
                    <ul className="text-sm text-gray-800 space-y-1 text-center">
                      {group.times.map((t, j) => (
                        <li key={j}>{t}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-xs text-center mt-6 font-semibold text-[#044e30]">
                BUILD CROSS-PLATFORM APPS EFFICIENTLY
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
          {["Introduction to Flutter and Dart", "Dart Basics – variables, functions, OOP",
            "Flutter Setup – VSCode, Android Studio, Emulators",
            "Working with Widgets – stateless vs stateful",
            "Layouts, navigation, and routing",
            "State Management – Provider, setState, BLoC",
            "Animations, Forms and Validation",
            "API Integration – HTTP requests, JSON parsing",
            "Firebase Integration – Auth, Firestore, Storage",
            "Project – Build & publish your own app"]
            .map((item, idx) => (
              <motion.li key={idx} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: idx * 0.05 }}>
                {item}
              </motion.li>
            ))}
        </ul>
      </motion.section>

      {/* Benefits */}
      <motion.section className="max-w-screen-xl mx-auto px-4 md:px-10 mt-16">
        <h2 className="text-2xl font-bold text-[#044e30] mb-6">
          Benefits of Flutter Development Course
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[["Build Android and iOS apps with one codebase", "Learn from basics to deployment", "Practice with real-time UI projects", "Beginner-friendly with hands-on training"],
            ["Live support and doubt clearing", "Portfolio and GitHub guidance", "Firebase integration for full-stack mobile apps", "Certificate & career support"]].map((group, i) => (
              <motion.div key={i} className="space-y-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.3 }}>
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
            <motion.details key={idx} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
              <summary className="cursor-pointer font-semibold text-gray-800">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
            </motion.details>
          ))}
        </div>
      </motion.section>
<CloudsContactForm/>
      <Footer />
    </div>
  );
};

export default FlutterTrainingCourse;
