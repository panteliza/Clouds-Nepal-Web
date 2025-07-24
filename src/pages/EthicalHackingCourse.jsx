// EthicalHackingCourse.jsx
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
    question: "What is ethical hacking training?",
    answer: "Ethical hacking training provides the skills to identify and fix security vulnerabilities in systems, networks, and applications by using hacking techniques ethically."
  },
  {
    question: "Do I need a technical background to start?",
    answer: "A basic understanding of computers and networking is helpful, but the course starts from foundational concepts."
  },
  {
    question: "Is Linux knowledge required?",
    answer: "No prior Linux knowledge is needed. We cover Linux essentials as part of the training."
  },
  {
    question: "Will this help me become a certified ethical hacker?",
    answer: "Yes, this course covers key CEH topics and prepares you for ethical hacking certifications."
  },
  {
    question: "Are practical labs included?",
    answer: "Yes, hands-on labs and exercises are included to practice real-world hacking techniques ethically."
  }
];

const EthicalHackingCourse = () => {
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
            Ethical Hacking Training
          </motion.h1>

          <div className="flex flex-col lg:flex-row gap-5">
            <motion.div
              className="lg:w-2/3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg leading-relaxed">
                Learn how to ethically hack into systems to find and fix security flaws. This course equips you with practical skills in cybersecurity, Linux, networking, and ethical penetration testing.
              </p>
              <p className="mt-4 text-lg">
                Prepare for a cybersecurity career with hands-on labs and real-world tools used by ethical hackers.
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
      <li>7:30AM – 9:00AM</li>
      <li>12:00PM – 1:30PM</li>
      <li>5:30PM – 7:00PM</li>
    </ul>
  </div>

  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
    <h4 className="text-sm font-semibold text-[#044e30] mb-2 text-center">
       ONLINE CLASS
    </h4>
    <ul className="text-sm text-gray-800 space-y-1 text-center">
      <li>8:00AM – 9:30AM</li>
      <li>2:00PM – 3:30PM</li>
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
            {["Introduction to Ethical Hacking",
              "Networking Fundamentals for Hackers",
              "Linux Basics for Ethical Hacking",
              "Reconnaissance and Footprinting",
              "Scanning and Enumeration Techniques",
              "Vulnerability Assessment & Exploitation",
              "WiFi and Web Application Hacking",
              "Social Engineering Attacks & Prevention",
              "Cyber Laws and Responsible Disclosure",
              "Penetration Testing Tools (Kali Linux, Metasploit, Nmap)",
              "Report Writing and Incident Handling"
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
            Benefits of Ethical Hacking Training
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["Hands-on ethical hacking practice in labs",
              "Learn from industry-expert instructors",
              "Understand how hackers think and act",
              "Suitable for cybersecurity beginners"],

              ["Build a career in ethical hacking or penetration testing",
              "Gain confidence with real-world tools",
              "Live online or offline batch options",
              "Certificate after course completion"]
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

export default EthicalHackingCourse;