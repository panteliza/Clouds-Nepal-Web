// FrontendDevelopmentCourse.jsx – Full Course Page with Navbar
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';
import { FaCheckCircle } from "react-icons/fa";
import Footer from "../components/Footer";

const classSchedule = [
  { date: "22 Jul 2025", slots: ["01:00 PM – 02:30 PM", "06:00 PM – 07:30 PM"] },
  { date: "29 Jul 2025", slots: ["04:00 PM – 05:30 PM", "06:30 PM – 08:00 PM"] },
  { date: "2 Aug 2025", slots: ["11:00 AM – 12:30 PM", "05:00 PM – 06:30 PM"] },
  { date: "5 Aug 2025", slots: ["10:00 AM – 11:30 AM", "06:00 PM – 07:30 PM"] },
  { date: "9 Aug 2025", slots: ["01:00 PM – 02:30 PM", "07:00 PM – 08:30 PM"] },
  { date: "12 Aug 2025", slots: ["09:00 AM – 10:30 AM", "05:00 PM – 06:30 PM"] },
  { date: "15 Aug 2025", slots: ["04:00 PM – 05:30 PM", "06:30 PM – 08:00 PM"] },
];

const faqs = [
  {
    question: "What is frontend development training?",
    answer: "Frontend development training teaches you how to build the visible parts of websites and apps that users interact with, using HTML, CSS, JavaScript, and frameworks like React."
  },
  {
    question: "What tools will I learn in this course?",
    answer: "You'll learn tools like Visual Studio Code, GitHub, Chrome DevTools, Figma for design, and frameworks/libraries like ReactJS."
  },
  {
    question: "Are online classes available?",
    answer: "Yes, we offer both online and physical batch options. Online classes are conducted live with interactive Q&A sessions."
  },
  {
    question: "What skills do I need before enrolling?",
    answer: "Basic computer knowledge is enough. Prior experience with coding is a plus but not required."
  },
  {
    question: "How long is the course duration?",
    answer: "The course runs for approximately 3 months with 3–4 sessions per week, each lasting 1.5 hours."
  },
  {
    question: "Will I get job placement support?",
    answer: "Yes, we provide dedicated placement assistance, resume preparation, and mock interview training."
  },
  {
    question: "Can I work as a freelancer after this course?",
    answer: "Absolutely! We cover freelancing tips, project handling, and portfolio creation to help you get started."
  },
];

const FrontendDevelopmentCourse = () => {
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
          Frontend Development Training in Nepal
        </motion.h1>

        {/* Overview + Classes */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <p className="text-lg leading-relaxed">
              Learn to build beautiful, responsive websites and web applications using HTML, CSS, JavaScript, and React.js. This course is designed to take you from beginner to job-ready frontend developer.
            </p>
            <p className="mt-4 text-lg">
              From layout to interactivity and deployment, gain real-world skills needed to excel in today’s frontend job market.
            </p>
          </div>

          <div className="lg:w-1/3 bg-green-50 p-4 rounded-xl shadow-md self-start">
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
          <li>Introduction to Frontend Development & Web Technologies</li>
          <li>UI/UX Fundamentals – Figma & AI-assisted design tools</li>
          <li>Mastering HTML5 & CSS3 – semantic tags, layout, forms</li>
          <li>Responsive Design – mobile-first, breakpoints, accessibility</li>
          <li>JavaScript ES6+ – DOM, events, async (Promises/Async/Await)</li>
          <li>ReactJS – components, props, hooks, router</li>
          <li>Advanced Styling – Tailwind CSS, Framer Motion animations</li>
          <li>REST APIs – fetch, Axios, dynamic data rendering</li>
          <li>Version Control – Git, GitHub workflows</li>
          <li>Intro to Next.js – SSR, file-based routing</li>
          <li>Form Handling – Formik/React Hook Form</li>
          <li>Final Project – React UI + mock API + Netlify/Vercel deploy</li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-10 mt-16">
        <h2 className="text-2xl font-bold text-[#044e30] mb-6">Benefits of Frontend Development Course</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-700 mt-1" /> Complete beginner-friendly structure</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-700 mt-1" /> Master HTML, CSS, JS, and React</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-700 mt-1" /> Work on real-world projects and designs</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-700 mt-1" /> Suitable for freelance and job-ready goals</p>
          </div>
          <div className="space-y-3">
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-700 mt-1" /> Online + Offline class options</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-700 mt-1" /> Career guidance and placement support</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-700 mt-1" /> Build portfolio and host it live</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-700 mt-1" /> Certificate upon completion</p>
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
    </div>
    <Footer />
    </>
  );
};

export default FrontendDevelopmentCourse;
