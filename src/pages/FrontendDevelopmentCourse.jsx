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
          className="text-3xl md:text-4xl font-bold text-[#06693A] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frontend Development Training in Nepal
        </motion.h1>

        {/* Course Overview + Upcoming Classes */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <p className="text-lg leading-relaxed">
              Our Frontend Development course is a hands-on, project-based program tailored for aspiring developers looking to specialize in crafting modern, responsive, and interactive user interfaces. Students will explore advanced HTML5/CSS3, JavaScript ES6+, and frameworks such as ReactJS. You'll also learn UI/UX design fundamentals using Figma, and incorporate tools like GitHub and DevTools for version control and debugging.
            </p>
            <p className="mt-4 text-lg">
              The course focuses on building real-world web applications from scratch. Ideal for job seekers, freelancers, and entrepreneurs looking to stand out in today’s tech-driven landscape.
            </p>
          </div>

          <div className="lg:w-1/3 bg-blue-50 p-4 rounded-xl shadow-md">
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
              className="text-blue-600 text-sm mt-2 inline-block"
            >
              {showMore ? "See Less" : "See 4 more classes"}
            </button>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-10 mt-16">
        <h2 className="text-2xl font-bold text-[#06693A] mb-6">Your Learning Journey</h2>
        <p className="text-lg mb-4">
          Our curriculum is designed based on real-world demand. Delivered by industry experts, the course emphasizes 85% practical learning.
        </p>

        <ul className="space-y-3 list-disc pl-5 text-base">
  <li>Introduction to Frontend Development & Web Technologies – understanding the development ecosystem and project lifecycle</li>
  <li>UI/UX Fundamentals – designing wireframes & prototypes using Figma and AI-assisted design tools</li>
  <li>Mastering HTML5 & CSS3 – semantic tags, flexbox, grid, forms, and media queries</li>
  <li>Responsive Design Principles – mobile-first design, adaptive layout, breakpoints, and accessibility best practices</li>
  <li>JavaScript (ES6+) Essentials – variables, functions, DOM manipulation, events, and asynchronous programming (Promises, Async/Await)</li>
  <li>ReactJS for Beginners – components, props, hooks (useState, useEffect), conditional rendering, and routing (React Router)</li>
  <li>Advanced Styling – Tailwind CSS, CSS animations, transitions, Framer Motion for enhanced UI interactions</li>
  <li>Working with RESTful APIs – fetch, Axios, data handling, rendering external data dynamically</li>
  <li>Version Control – Git, GitHub, branching strategies, pull requests, code collaboration</li>
  <li>Modern Framework Overview – Introduction to Next.js (SSR, file-based routing, image optimization)</li>
  <li>Form Handling – building reusable forms, validation with Formik or React Hook Form</li>
  <li>Final Project – full-stack like UI using React + mock API, hosting on GitHub Pages, Netlify or Vercel</li>
</ul>
      </section>

      {/* Benefits Section */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-10 mt-16">
        <h2 className="text-2xl font-bold text-[#06693A] mb-6">Benefits of Frontend Development Training</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1" /> Learn UI/UX tools and design thinking</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1" /> Real-world projects with AI integration</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1" /> Online & physical batch options</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1" /> Build a job-ready portfolio</p>
          </div>
          <div className="space-y-3">
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1" /> Get job placement & internship support</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1" /> Freelance & remote job opportunities</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1" /> Personal mentorship & guidance</p>
            <p className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-1" /> Certification upon completion</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-10 mt-16 pb-20">
        <h2 className="text-2xl font-bold text-[#06693A] mb-6 text-center">Frequently Asked Questions</h2>
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
          className="bg-gradient-to-r from-[#044e30] to-[#06693A] hover:from-[#033d26] hover:to-[#055a33] text-white px-6 py-3 rounded-full font-semibold tracking-wide shadow-lg transition-all duration-300"
        >
          Send Inquiry →
        </motion.button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default FrontendDevelopmentCourse;
