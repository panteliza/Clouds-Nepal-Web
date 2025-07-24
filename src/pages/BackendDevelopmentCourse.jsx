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
    question: "What is backend development training?",
    answer: "Backend development training teaches you how to build server-side logic, APIs, databases, and authentication systems using technologies like Node.js, Express, and MongoDB.",
  },
  {
    question: "Do I need frontend knowledge?",
    answer: "It helps, but not required. This course focuses purely on backend skills.",
  },
  {
    question: "Will I learn to build APIs?",
    answer: "Yes, you will master RESTful API development with Node.js and Express.",
  },
  {
    question: "Do you cover database integration?",
    answer: "Absolutely! We cover MongoDB, schemas, models, and Mongoose.",
  },
  {
    question: "Is this course beginner-friendly?",
    answer: "Yes, it starts with the fundamentals and moves to advanced topics gradually.",
  },
  {
    question: "Do you provide certification?",
    answer: "Yes, you'll receive a certificate upon successful completion.",
  },
  {
    question: "Is job placement support included?",
    answer: "Yes, we provide resume help, interview prep, and job matching.",
  },
];

const BackendDevelopmentCourse = () => {
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
            Backend Development Training
          </motion.h1>

          <div className="flex flex-col lg:flex-row gap-5">
            <motion.div
              className="lg:w-2/3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg leading-relaxed">
                Learn to build powerful and scalable server-side applications using Node.js, Express.js, and MongoDB. This course is ideal for anyone who wants to master API development, authentication, and database management.
              </p>
              <p className="mt-4 text-lg">
                From database design to RESTful APIs, get everything you need to become a successful backend developer.
              </p>
            </motion.div>

            {/* Timing Box */}
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
      COURSE 2 - ONLINE CLASS
    </h4>
    <ul className="text-sm text-gray-800 space-y-1 text-center">
      <li>9:00AM – 10:30AM</li>
      <li>1:00PM – 2:30PM</li>
      <li>7:00PM – 8:30PM</li>
    </ul>
                  </div>
                </div>
                <p className="text-xs text-center mt-6 font-semibold text-[#044e30]">
                  CODE YOUR DREAMS INTO REALITY
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
            {[
              "Intro to Backend Development & Node.js",
              "Setting up Node.js and NPM Environment",
              "Core Modules and Asynchronous JS (Callbacks, Promises)",
              "Building RESTful APIs with Express.js",
              "CRUD Operations with MongoDB and Mongoose",
              "Authentication using JWT and Bcrypt",
              "Middleware, Error Handling, and Logging",
              "API Security Best Practices (CORS, Rate Limiting)",
              "File Uploads, Email Integration, and .env management",
              "Testing with Postman & Thunder Client",
              "Deploying Backend Apps to Cloud (Render/Vercel)",
              "Final Project: Full CRUD API with Auth + Docs"
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
          className="max-w-screen-xl mx-auto px-4 md:px-10 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-[#044e30] mb-6">
            Benefits of Backend Development Course
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["Beginner to Advanced Backend Concepts", "Master Node.js, Express, MongoDB", "Work on Real-world API Projects", "Secure & Optimized Backend Architecture"],
              ["Offline + Live Online Classes", "Job Assistance and Resume Support", "Industry Best Practices and Git Flow", "Earn Certificate & Build Real Projects"]
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
          className="max-w-screen-xl mx-auto px-4 md:px-10 mt-16 "
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

export default BackendDevelopmentCourse;
