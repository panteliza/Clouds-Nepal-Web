// FullStackDevelopmentCourse.jsx – Full Course Page with Navbar
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';
import { FaCheckCircle } from "react-icons/fa";
import Footer from "../components/Footer";

const classSchedule = [
  { date: "24 Jul 2025", slots: ["01:00 PM – 02:30 PM", "06:00 PM – 07:30 PM"] },
  { date: "31 Jul 2025", slots: ["04:00 PM – 05:30 PM", "06:30 PM – 08:00 PM"] },
  { date: "4 Aug 2025", slots: ["11:00 AM – 12:30 PM", "05:00 PM – 06:30 PM"] },
  { date: "7 Aug 2025", slots: ["10:00 AM – 11:30 AM", "06:00 PM – 07:30 PM"] },
  { date: "11 Aug 2025", slots: ["01:00 PM – 02:30 PM", "07:00 PM – 08:30 PM"] },
  { date: "14 Aug 2025", slots: ["09:00 AM – 10:30 AM", "05:00 PM – 06:30 PM"] },
  { date: "17 Aug 2025", slots: ["04:00 PM – 05:30 PM", "06:30 PM – 08:00 PM"] },
];

const faqs = [
  {
    question: "What is Full Stack Development?",
    answer: "Full Stack Development involves building both the frontend and backend of web applications. You'll learn everything from designing user interfaces to managing databases and deploying applications."
  },
  {
    question: "Who is this course for?",
    answer: "This course is ideal for beginners as well as those looking to become versatile developers capable of building end-to-end solutions."
  },
  {
    question: "Do I need prior coding experience?",
    answer: "Basic computer skills are sufficient. Prior knowledge of HTML or any programming language is helpful but not mandatory."
  },
  {
    question: "Will I learn deployment and hosting?",
    answer: "Yes, you'll deploy your full stack projects using platforms like Vercel, Netlify, Heroku, and Render."
  },
  {
    question: "Do I get placement support?",
    answer: "Yes, job assistance, interview training, and freelancing support are provided after course completion."
  },
];

const FullStackDevelopmentCourse = () => {
  const [showMore, setShowMore] = useState(false);
  const displayedClasses = showMore ? classSchedule : classSchedule.slice(0, 3);

  return (
    <>
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-[100px] max-w-screen-xl mx-auto px-4 md:px-10">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-[#06693A] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Full Stack Web Development Training in Nepal
        </motion.h1>

        {/* Overview + Classes */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <p className="text-lg leading-relaxed">
              Our Full Stack Web Development course combines frontend and backend technologies into one streamlined program. You’ll learn to create complete web applications using HTML, CSS, JavaScript, ReactJS, Node.js, Express, MongoDB, PostgreSQL, and deployment tools.
            </p>
            <p className="mt-4 text-lg">
              By the end of the course, you’ll be able to build, deploy, and maintain full stack projects from scratch, opening doors to versatile career opportunities in tech.
            </p>
          </div>

          <div className="lg:w-1/3 bg-green-100 p-4 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg mb-2">Upcoming Classes</h3>
            <ul className="space-y-2 text-sm">
              {displayedClasses.map((cls, idx) => (
                <li key={idx}>
                  <strong>{cls.date}</strong>
                  <br /> {cls.slots.join(" | ")}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-blue-700 text-sm mt-2 inline-block"
            >
              {showMore ? "See Less" : "See 4 more classes"}
            </button>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-10 mt-16">
        <h2 className="text-2xl font-bold text-[#044e30]  mb-6">Course Curriculum</h2>
        <ul className="space-y-3 list-disc pl-5 text-base">
          <li>Introduction to Web Development & Software Stack Overview</li>
          <li>Frontend: HTML5, CSS3, Responsive Design, Tailwind CSS</li>
          <li>JavaScript (ES6+), DOM, Events, Async/Await</li>
          <li>ReactJS: Components, Hooks, Routing, State Management</li>
          <li>Backend: Node.js & Express.js – REST APIs, Middleware</li>
          <li>Databases: MongoDB with Mongoose and PostgreSQL</li>
          <li>Authentication: JWT, OAuth, bcrypt password encryption</li>
          <li>Version Control: Git, GitHub, Branching, Collaboration</li>
          <li>Deployment: Hosting with Vercel, Netlify, Heroku, Render</li>
          <li>Dev Tools: Postman, Chrome DevTools, Environment Variables</li>
          <li>Final Project: Full Stack Application (Frontend + Backend + Database)</li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-10 mt-16">
        <h2 className="text-2xl font-bold text-[#044e30]  mb-6">Why Choose Full Stack Training?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="flex items-start gap-2"><FaCheckCircle className="text-blue-700 mt-1" /> Master both frontend & backend development</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-blue-700 mt-1" /> Build deployable, production-grade web apps</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-blue-700 mt-1" /> Perfect for job seekers and freelancers</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-blue-700 mt-1" /> No prior experience required</p>
          </div>
          <div className="space-y-3">
            <p className="flex items-start gap-2"><FaCheckCircle className="text-blue-700 mt-1" /> Career guidance & placement support</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-blue-700 mt-1" /> Lifetime access to project code & resources</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-blue-700 mt-1" /> Certification & real-world portfolio</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-blue-700 mt-1" /> Online & physical class options</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-10 mt-16 pb-20">
        <h2 className="text-2xl font-bold text-[#044e30]  mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-3 max-w-2xl mx-auto">
          {faqs.map((faq, idx) => (
            <details key={idx} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <summary className="cursor-pointer font-semibold text-gray-800">{faq.question}</summary>
              <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Inquiry Button */}
     
    </div>
    <Footer />
    </>
  );
};

export default FullStackDevelopmentCourse;
