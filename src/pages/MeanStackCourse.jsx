// MeanStackCourse.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavbarMain from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCheckCircle } from "react-icons/fa";
import CourseSearchBar from "../components/CourseSearchBar";
import { allCourses } from "../components/courses";

const faqs = [
  {
    question: "What is MEAN Stack training?",
    answer:
      "MEAN Stack training teaches you to build full-stack web applications using MongoDB, Express.js, Angular, and Node.js.",
  },
  {
    question: "Is this course beginner-friendly?",
    answer:
      "Yes. You’ll start with basics and gradually move to advanced full-stack development concepts.",
  },
  {
    question: "Do you offer online classes?",
    answer:
      "Yes, we provide both physical and online live classes with interaction and project reviews.",
  },
  {
    question: "How long is the course?",
    answer:
      "The course lasts around 3–4 months with 3 classes per week, each session being 1.5 hours.",
  },
  {
    question: "Will I build real projects?",
    answer:
      "Yes. You'll build full-stack projects using Angular frontend and Node.js backend with MongoDB database.",
  },
  {
    question: "Will I get placement support?",
    answer:
      "We provide placement assistance, resume help, and interview prep to help you land jobs.",
  },
];

const MeanStackCourse = () => {
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
            MEAN Stack Development Training
          </motion.h1>

          <div className="flex flex-col lg:flex-row gap-5">
            <motion.div
              className="lg:w-2/3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg leading-relaxed">
                Learn to build powerful full-stack web applications using MongoDB, Express, Angular, and Node.js. This industry-ready course is perfect for aspiring backend and full-stack developers.
              </p>
              <p className="mt-4 text-lg">
                From frontend to API development and database handling — become a complete developer equipped to handle modern web projects.
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
                      <li>6:00AM – 7:30AM</li>
                      <li>7:30AM – 9:00AM</li>
                      <li>2:30PM – 4:00PM</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <h4 className="text-sm font-semibold text-[#044e30] mb-2 text-center">
                      ONLINE CLASS
                    </h4>
                    <ul className="text-sm text-gray-800 space-y-1 text-center">
                      <li>7:00AM – 8:30AM</li>
                      <li>1:30PM – 3:00PM</li>
                      <li>8:30PM – 10:00PM</li>
                    </ul>
                  </div>
                </div>
                <p className="text-xs text-center mt-6 font-semibold text-[#044e30]">
                  CODE YOUR FUTURE WITH MEAN STACK
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
              "HTML5 & CSS3 Fundamentals",
              "JavaScript Essentials – ES6+, DOM, Async",
              "Node.js – Environment, Modules, File System",
              "Express.js – Middleware, Routing, RESTful APIs",
              "MongoDB – CRUD operations, Mongoose",
              "Angular – Components, Services, Routing",
              "Connecting Angular frontend to Express backend",
              "JWT Authentication & Authorization",
              "Hosting on platforms like Heroku/Vercel",
              "Git & GitHub for version control",
              "Real-time project with API + UI integration",
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
            Benefits of MEAN Stack Course
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              [
                "Beginner to Advanced MEAN Stack Learning",
                "Build real-world full-stack apps",
                "Work with MongoDB, Express, Angular, and Node",
                "Launch a career as a full-stack developer",
              ],
              [
                "Live online & offline classes",
                "Placement assistance and career mentorship",
                "Project-based curriculum with code reviews",
                "Certificate & portfolio-ready apps",
              ],
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

export default MeanStackCourse;
