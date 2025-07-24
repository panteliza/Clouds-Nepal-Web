// FrontendDevelopmentCourse.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavbarMain from '../components/Navbar'
import Footer from "../components/Footer";
import { FaCheckCircle } from "react-icons/fa";
import CourseSearchBar from '../components/CourseSearchBar'
import { allCourses } from "../components/courses";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
     <div className="pt-[70px]">
      <NavbarMain/>
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
            Frontend Development Training
          </motion.h1>

          <div className="flex flex-col lg:flex-row gap-5">
            <motion.div
              className="lg:w-2/3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg leading-relaxed">
                Learn to build beautiful, responsive websites and web applications using HTML, CSS, JavaScript, and React.js. This course is designed to take you from beginner to job-ready frontend developer.
              </p>
              <p className="mt-4 text-lg">
                From layout to interactivity and deployment, gain real-world skills needed to excel in today’s frontend job market.
              </p>
            </motion.div>

            {/* Updated Timing Box */}
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
      {/* Physical Class */}
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

      {/* Online Class */}
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
              "Introduction to Frontend Development & Web Technologies",
              "UI/UX Fundamentals – Figma & AI-assisted design tools",
              "Mastering HTML5 & CSS3 – semantic tags, layout, forms",
              "Responsive Design – mobile-first, breakpoints, accessibility",
              "JavaScript ES6+ – DOM, events, async (Promises/Async/Await)",
              "ReactJS – components, props, hooks, router",
              "Advanced Styling – Tailwind CSS, Framer Motion animations",
              "REST APIs – fetch, Axios, dynamic data rendering",
              "Version Control – Git, GitHub workflows",
              "Intro to Next.js – SSR, file-based routing",
              "Form Handling – Formik/React Hook Form",
              "Final Project – React UI + mock API + Netlify/Vercel deploy"
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
            Benefits of Frontend Development Course
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["Complete beginner-friendly structure", "Master HTML, CSS, JS, and React", "Work on real-world projects and designs", "Suitable for freelance and job-ready goals"],
              ["Online + Offline class options", "Career guidance and placement support", "Build portfolio and host it live", "Certificate upon completion"]
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

export default FrontendDevelopmentCourse;
