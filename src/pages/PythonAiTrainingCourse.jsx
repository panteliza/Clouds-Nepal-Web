// PythonAiTrainingCourse.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavbarMain from "../components/Navbar";
import Footer from "../components/Footer";
import CourseSearchBar from "../components/CourseSearchBar";
import { allCourses } from "../components/courses";
import { FaCheckCircle } from "react-icons/fa";
import CloudsContactForm from "../components/CloudsContactForm";

const faqs = [
  {
    question: "Do I need prior Python experience?",
    answer: "No prior Python experience is needed. We begin from absolute basics and gradually introduce AI-specific topics."
  },
  {
    question: "What projects will I work on?",
    answer: "You’ll build AI-powered apps like chatbots, recommendation engines, sentiment analysis tools, and image classifiers."
  },
  {
    question: "Is AI covered practically?",
    answer: "Yes, we emphasize hands-on learning using datasets, libraries like scikit-learn, TensorFlow, and real-world scenarios."
  },
  {
    question: "Are online classes available?",
    answer: "Yes, we offer both online and physical class options with flexible timings."
  },
];

const PythonAiTrainingCourse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-[70px]">
        <NavbarMain />
        <CourseSearchBar allCourses={allCourses} />

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
            Python with Artificial Intelligence Training
          </motion.h1>

          <div className="flex flex-col lg:flex-row gap-5">
            <motion.div
              className="lg:w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg leading-relaxed">
                This course bridges core Python programming with practical Artificial Intelligence applications. You’ll begin from scratch and build capabilities in logic building, data handling, and AI integration using libraries like NumPy, Pandas, scikit-learn, TensorFlow, and OpenAI API.
              </p>
              <p className="mt-4 text-lg">
                Whether you're aiming to work in machine learning, AI startups, or want to automate smart tasks, this course builds your foundation and project-ready experience.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Timings Section */}
        <motion.section
          className="max-w-screen-xl mx-auto px-4 md:px-10 mt-7"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 className="text-2xl font-bold text-[#044e30] mb-6">
            Class Timings
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Physical Class */}
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <h4 className="text-sm font-semibold text-[#044e30] mb-2 text-center">
                PHYSICAL CLASS
              </h4>
              <ul className="text-sm text-gray-800 space-y-1 text-center">
                <li>7:00AM – 8:30AM</li>
                <li>11:00AM – 12:30PM</li>
                <li>4:00PM – 5:30PM</li>
              </ul>
            </div>

            {/* Online Class */}
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <h4 className="text-sm font-semibold text-[#044e30] mb-2 text-center">
                ONLINE CLASS
              </h4>
              <ul className="text-sm text-gray-800 space-y-1 text-center">
                <li>8:00AM – 9:30AM</li>
                <li>2:00PM – 3:30PM</li>
                <li>7:00PM – 8:30PM</li>
              </ul>
            </div>
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
            {[
              "Introduction to Python Programming & IDE setup",
              "Python Basics: Variables, Data Types, Operators, Logic",
              "Control Flow: Conditionals, Loops, Functions, OOP",
              "Working with Libraries: NumPy, Pandas, Matplotlib",
              "Introduction to AI and Machine Learning",
              "Supervised & Unsupervised Learning with Scikit-learn",
              "Neural Networks with TensorFlow and Keras",
              "AI Use Cases: Image Classification, Chatbots, Predictions",
              "Data Preprocessing & Feature Engineering",
              "Using OpenAI API (ChatGPT) in your Python Projects",
              "Deploying Python AI Models using Streamlit or Flask",
              "Final AI Capstone Project with Deployment"
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
        <motion.section
          className="max-w-screen-xl mx-auto px-4 md:px-10 mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-[#044e30] mb-6">
            Benefits of Python + AI Training
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[["No coding background required", "Ideal for IT students, engineers & job-seekers", "100% project-based learning", "Learn AI tools used in real-world apps"],
              ["Offline + Online flexible options", "CV, GitHub & Portfolio Support", "Capstone project with certificate", "Placement assistance & internship support"]
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
      <CloudsContactForm />
      <Footer />
    </>
  );
};

export default PythonAiTrainingCourse;
