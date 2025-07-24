import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// 📌 Replace with actual paths
import img1 from "../assets/frontend.webp";
import img2 from "../assets/backend.webp";
import img3 from "../assets/fullstack.webp";
import img4 from "../assets/mean.webp";
import img5 from "../assets/digital-marketing.webp";

import img7 from "../assets/python-django.webp";
import img8 from "../assets/qa.webp";
import img9 from "../assets/uiux.webp";
import img10 from "../assets/ethical-hacking.webp";
import img11 from "../assets/business-analysis.webp";
import img12 from "../assets/flutter.webp";
import img13 from "../assets/react-native.webp";
import img14 from "../assets/python-ai.webp";
import img15 from "../assets/data-science.webp";

const courses = [
  { image: img1, title: "Frontend Development", path: "/frontend-development", points: ["HTML, CSS, and JavaScript Basics", "Responsive Web Design", "JavaScript Frameworks (React, Vue, Angular)"] },
  { image: img2, title: "Backend Development", path: "/backend-development", points: ["MongoDB Basics and Data Modeling", "Building RESTful APIs with Express.js", "Node.js and Asynchronous Programming"] },
  { image: img3, title: "Full Stack Web Development", path: "/fullstack-development", points: ["Frontend Development with HTML, CSS", "Backend Development with Node.js, Express.js", "Building RESTful APIs and Integration"] },
  { image: img4, title: "MEAN Stack", path: "/mean-stack", points: ["Frontend Development with HTML, CSS", "Backend Development with Node.js, Express.js", "Building RESTful APIs and Integrating with Angular"] },
  { image: img5, title: "Digital Marketing", path: "/digital-marketing", points: ["Search Engine Optimization (SEO)", "Pay-Per-Click (PPC) Advertising", "Social Media Marketing (SMM)"] },
  { image: img7, title: "Python & Django Training", path: "/python-django", points: ["Python Basics and Advanced Concepts", "Object-Oriented Programming (OOP) in Python", "Python Libraries and Frameworks"] },
  { image: img8, title: "QA Training", path: "/qa-training", points: ["Introduction to Software Testing", "Manual Testing Concepts and Techniques", "Test Case Design and Execution"] },
  { image: img9, title: "UI/UX Design Training", path: "/uiux-design", points: ["Introduction to UI/UX Design", "Design Principles and Fundamentals", "User Research and Persona Creation"] },
  { image: img10, title: "Ethical Hacking Training", path: "/ethical-hacking", points: ["Introduction to Ethical Hacking", "Networking Fundamentals for Hackers", "Linux Basics for Ethical Hacking"] },
  { image: img11, title: "Business Analysis Training", path: "/business-analysis", points: ["Introduction to Business Analysis", "Role of a Business Analyst", "Business Analysis Planning and Monitoring"] },
  { image: img12, title: "Flutter App Development Training", path: "/flutter-training", points: ["Introduction to Flutter and Dart", "Setting Up Flutter Development Environment", "Flutter Widgets: Basics and Advanced"] },
  { image: img13, title: "React Native App Development Training", path: "/react-native-training", points: ["Introduction to React Native and JavaScript Basics", "Setting Up React Native Development", "React Native Components and Styling"] },
  { image: img14, title: "Python With Artificial Intelligence Training", path: "/python-ai-training", points: ["Introduction to Python Programming", "Python Basics: Variables, Data Types, and Logic", "Control Structures: Loops and Conditionals"] },
  { image: img15, title: "Data Science With Python Training", path: "/data-science-python", points: ["Introduction to Data Science and Python", "Python Basics: Variables, Data Types, and Logic", "Control Structures: Loops and Conditionals"] },
];

const CoursesLimited = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-green-700 via-green-600 to-green-800 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Top Professional IT Courses
      </motion.h2>

      <motion.p
        className="text-center max-w-3xl mx-auto text-gray-600 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Explore our most popular and career-focused trainings, carefully selected for maximum impact.
      </motion.p>

      <motion.div
        className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto relative z-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        {courses.slice(0, 15).map((course, index) => (
          <Link to={course.path} key={index}>
            <motion.div
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 transition transform hover:-translate-y-2 duration-300 ease-in-out flex flex-col cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-44 sm:h-52 object-cover transition duration-300 ease-in-out hover:scale-105"
                loading="lazy"
              />
              <div className="p-5 flex-1">
                <h3 className="sm:text-lg font-bold text-green-700 mb-2">{course.title}</h3>
                <ul className="list-disc list-inside text-[10px] sm:text-sm text-gray-600 space-y-1">
                  {course.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="sm:p-4 pb-2 flex justify-center">
                <span className="px-3 py-1 sm:px-6 sm:py-2 bg-green-700 text-white rounded-full font-semibold transition">
                  Read More
                </span>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Link
          to="/courses"
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-700 to-green-900 rounded-full shadow-lg hover:scale-105 transition duration-300"
        >
          Explore More Courses
        </Link>
      </motion.div>
    </section>
  );
};

export default CoursesLimited;
