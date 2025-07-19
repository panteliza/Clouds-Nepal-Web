// BackendDevelopmentCourse.jsx – Full Course Page with Navbar
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';
import { FaCheckCircle } from "react-icons/fa";
import Footer from "../components/Footer";

const classSchedule = [
  { date: "23 Jul 2025", slots: ["01:00 PM – 02:30 PM", "06:00 PM – 07:30 PM"] },
  { date: "30 Jul 2025", slots: ["04:00 PM – 05:30 PM", "06:30 PM – 08:00 PM"] },
  { date: "3 Aug 2025", slots: ["11:00 AM – 12:30 PM", "05:00 PM – 06:30 PM"] },
  { date: "6 Aug 2025", slots: ["10:00 AM – 11:30 AM", "06:00 PM – 07:30 PM"] },
  { date: "10 Aug 2025", slots: ["01:00 PM – 02:30 PM", "07:00 PM – 08:30 PM"] },
  { date: "13 Aug 2025", slots: ["09:00 AM – 10:30 AM", "05:00 PM – 06:30 PM"] },
  { date: "16 Aug 2025", slots: ["04:00 PM – 05:30 PM", "06:30 PM – 08:00 PM"] },
];

const faqs = [
  {
    question: "What is backend development training?",
    answer: "Backend development training focuses on server-side logic, databases, and APIs using technologies like Node.js, Express, MongoDB, and PostgreSQL."
  },
  {
    question: "Do I need frontend knowledge before joining?",
    answer: "No prior frontend experience is needed. However, familiarity with basic programming concepts is helpful."
  },
  {
    question: "Is this course beginner-friendly?",
    answer: "Yes, we start from scratch and gradually build to advanced topics through hands-on projects."
  },
  {
    question: "Will I learn deployment and hosting?",
    answer: "Yes, we cover deployment on platforms like Heroku, Railway, Render, and Vercel."
  },
  {
    question: "What is the course duration?",
    answer: "Approximately 3 months with 3–4 sessions per week. Each session is 1.5 hours long."
  },
  {
    question: "Will I get job placement assistance?",
    answer: "Yes, we offer placement guidance, resume support, and interview preparation."
  },
];

const BackendDevelopmentCourse = () => {
  const [showMore, setShowMore] = useState(false);
  const displayedClasses = showMore ? classSchedule : classSchedule.slice(0, 3);

  return (
    <>
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-[100px] max-w-screen-xl mx-auto px-4 md:px-10">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-[#044e30] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Backend Development Training in Nepal
        </motion.h1>

        {/* Overview + Classes */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <p className="text-lg leading-relaxed">
              Learn to build powerful, scalable server-side applications using Node.js, Express, MongoDB, and PostgreSQL. This course emphasizes APIs, databases, authentication, and deployment. Tailored for job seekers, this program is fully project-based and highly practical.
            </p>
            <p className="mt-4 text-lg">
              From RESTful APIs to cloud deployment, you'll gain real-world skills that are highly demanded in the backend job market.
            </p>
          </div>

          <div className="lg:w-1/3 bg-green-50 p-4 rounded-xl shadow-md">
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
              className="text-green-700 text-sm mt-2 inline-block"
            >
              {showMore ? "See Less" : "See 4 more classes"}
            </button>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-10 mt-16">
        <h2 className="text-2xl font-bold text-[#044e30] mb-6">What You Will Learn</h2>
        <ul className="space-y-3 list-disc pl-5 text-base">
          <li>Introduction to Backend Development & System Architecture</li>
          <li>Node.js Basics – Modules, NPM, core APIs</li>
          <li>Express.js Framework – Routing, Middleware, Controllers</li>
          <li>Working with MongoDB & Mongoose – Schemas, CRUD operations, relationships</li>
          <li>PostgreSQL Basics – Tables, SQL queries, pg-promise or Prisma</li>
          <li>Authentication & Authorization – JWT, bcrypt, OAuth strategies</li>
          <li>RESTful APIs & Error Handling</li>
          <li>File Uploads, Email Integration, and Rate Limiting</li>
          <li>CI/CD Concepts & Environment Management</li>
          <li>Deployment on Render, Railway, Vercel or Heroku</li>
          <li>Final Project: Complete backend for a real-world app</li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-10 mt-16">
        <h2 className="text-2xl font-bold text-[#044e30] mb-6">Benefits of Backend Development Course</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-700 mt-1" /> Hands-on server-side programming</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-700 mt-1" /> Learn MongoDB, PostgreSQL & REST APIs</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-700 mt-1" /> Focused on real-world applications</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-700 mt-1" /> Online & offline batches</p>
          </div>
          <div className="space-y-3">
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-700 mt-1" /> Placement support after completion</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-700 mt-1" /> Learn backend security best practices</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-700 mt-1" /> Git & version control collaboration</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-700 mt-1" /> Certificate and project portfolio</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-10 mt-16 pb-20">
        <h2 className="text-2xl font-bold text-[#044e30] mb-6 text-center">Frequently Asked Questions</h2>
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
      <div className="text-center pb-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#033d26] to-[#044e30] hover:from-[#022e1d] hover:to-[#033d26] text-white px-6 py-3 rounded-full font-semibold tracking-wide shadow-lg transition-all duration-300"
        >
          Send Inquiry →
        </motion.button>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default BackendDevelopmentCourse;
