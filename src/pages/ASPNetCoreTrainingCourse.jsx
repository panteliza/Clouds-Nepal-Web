// ASPNetCoreTrainingCourse.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavbarMain from '../components/Navbar';
import Footer from "../components/Footer";
import { FaCheckCircle } from "react-icons/fa";
import CourseSearchBar from '../components/CourseSearchBar';
import { allCourses } from "../components/courses";
import CloudsContactForm from "../components/CloudsContactForm";

const faqs = [
  {
    question: "What is ASP.NET Core training?",
    answer: "This training covers building scalable web applications using Microsoft ASP.NET Core framework, including Razor Pages, MVC, APIs, and deployment."
  },
  {
    question: "Is this course beginner-friendly?",
    answer: "Yes. While prior programming knowledge is beneficial, we cover .NET fundamentals and guide you through step-by-step."
  },
  {
    question: "What tools and technologies are used?",
    answer: "You'll use Visual Studio/VS Code, C#, Razor, Entity Framework Core, SQL Server, Git, and deployment tools like Azure."
  },
  {
    question: "Are classes online or offline?",
    answer: "Both. We provide flexible class formats to suit your schedule."
  },
  {
    question: "Will there be a final project?",
    answer: "Yes, you'll build a complete web application with authentication, database integration, and deployment."
  },
  {
    question: "Is job assistance provided?",
    answer: "Absolutely! We assist with mock interviews, resume building, and job referrals."
  }
];

const ASPNetCoreTrainingCourse = () => {
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
            ASP.NET Core Training
          </motion.h1>

          <div className="flex flex-col lg:flex-row gap-5">
            <motion.div
              className="lg:w-2/3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg leading-relaxed">
                Learn how to build fast, secure, and scalable web applications using ASP.NET Core. This hands-on training takes you from the basics to advanced backend web development concepts.
              </p>
              <p className="mt-4 text-lg">
                Master MVC, Razor Pages, API development, Entity Framework, and deployment techniques for modern .NET applications.
              </p>
            </motion.div>

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
      <li>10:30AM – 12:00PM</li>
      <li>3:30PM – 5:00PM</li>
    </ul>
  </div>

  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
    <h4 className="text-sm font-semibold text-[#044e30] mb-2 text-center">
       ONLINE CLASS
    </h4>
    <ul className="text-sm text-gray-800 space-y-1 text-center">
      <li>9:00AM – 10:30AM</li>
      <li>1:00PM – 2:30PM</li>
      <li>6:00PM – 7:30PM</li>
    </ul>
                  </div>
                </div>

                <p className="text-xs text-center mt-6 font-semibold text-[#044e30]">
                  BUILD WITH MICROSOFT'S POWERFUL FRAMEWORK
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
            {[".NET & ASP.NET Core Fundamentals", "MVC Architecture and Razor Pages", "C# Programming Basics & OOP", "Working with Entity Framework Core", "Authentication & Authorization", "RESTful APIs in ASP.NET Core", "Dependency Injection", "Middleware and Routing", "Database Integration with SQL Server", "Deployment to IIS/Azure", "Testing & Debugging in .NET", "Final Capstone Project: Full-stack .NET App"].map((item, idx) => (
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
            Benefits of ASP.NET Core Training
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[["Career-ready full-stack development skills", "Hands-on project-based training", "Learn from industry-experienced instructors", "Interview prep and freelancing tips"],
              ["Flexible timing (online/offline)", ".NET ecosystem overview", "Live hosting with Azure or local server", "Globally recognized certification"]].map((group, i) => (
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
      <CloudsContactForm/>
      <Footer />
    </>
  );
};

export default ASPNetCoreTrainingCourse;
