import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// 📌 Replace these with actual image paths
import img1 from "../assets/frontend.webp";
import img2 from "../assets/backend.webp";
import img3 from "../assets/fullstack.webp";
import img4 from "../assets/mean.webp";
import img5 from "../assets/digital-marketing.webp";
import img6 from "../assets/graphics.webp";
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
  { image: img3, title: "Full Stack Web Development", path: "/fullstack-development", points: ["Frontend with HTML, CSS", "Backend with Node.js, Express.js", "RESTful APIs Integration"] },
  { image: img4, title: "MEAN Stack", path: "/mean-stack", points: ["Frontend with HTML, CSS", "Backend with Node.js, Express.js", "Integrating with Angular"] },
  { image: img5, title: "Digital Marketing", path: "/digital-marketing", points: ["Search Engine Optimization (SEO)", "Pay-Per-Click (PPC) Advertising", "Social Media Marketing (SMM)"] },
  { image: img6, title: "Graphics Design", path: "/graphics-design", points: ["Fundamentals of Design Theory", "Typography and Font Pairing", "Color Theory"] },
  { image: img7, title: "Python & Django", path: "/python-django", points: ["Python Basics & OOP", "Django Framework", "Python Libraries"] },
  { image: img8, title: "QA Training", path: "/qa-training", points: ["Manual Testing", "Test Case Design", "Bug Reporting"] },
  { image: img9, title: "UI/UX Design", path: "/uiux-design", points: ["Design Principles", "Wireframing & Prototyping", "User Research"] },
  { image: img10, title: "Ethical Hacking", path: "/ethical-hacking", points: ["Networking Fundamentals", "Linux for Hackers", "Security Testing"] },
  { image: img11, title: "Business Analysis", path: "/business-analysis", points: ["Planning & Monitoring", "Requirements Gathering", "BA Role"] },
  { image: img12, title: "Flutter App Dev", path: "/flutter-training", points: ["Flutter & Dart", "UI Building", "API Integration"] },
  { image: img13, title: "React Native App Dev", path: "/react-native-training", points: ["JSX Basics", "Component Lifecycle", "Navigation"] },
  { image: img14, title: "Python With AI", path: "/python-ai-training", points: ["Python Basics", "AI Concepts", "Use of AI Libraries"] },
  { image: img15, title: "Data Science With Python", path: "/data-science-python", points: ["NumPy & Pandas", "Data Analysis", "Visualization"] },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", duration: 0.8 } },
};

const CoursesLimited = () => {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-green-700 via-green-600 to-green-800 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Top Professional IT Courses
      </motion.h2>

      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
        Explore our most popular and career-focused trainings, carefully selected for maximum impact.
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
      >
        {courses.slice(0, 15).map((course, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-44 sm:h-52 object-cover transition-transform duration-300 hover:scale-105"
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
              <Link
                to={course.path}
                className="px-3 py-1 sm:px-6 sm:py-2 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 transition"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-14 text-center"
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
