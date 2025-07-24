// DevOpsTrainingCourse.jsx
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
    question: "What is DevOps Training?",
    answer: "DevOps Training focuses on bridging the gap between software development and IT operations through automation, CI/CD, and collaboration tools."
  },
  {
    question: "Do I need coding experience?",
    answer: "Basic scripting knowledge is helpful, but we provide foundational guidance for beginners."
  },
  {
    question: "What tools will I learn?",
    answer: "You'll work with Git, Jenkins, Docker, Kubernetes, Ansible, Terraform, AWS, and monitoring tools like Prometheus & Grafana."
  },
  {
    question: "Is this course hands-on?",
    answer: "Yes! You’ll perform real-time deployments, automation, and container management using cloud and local labs."
  },
  {
    question: "Is job placement support available?",
    answer: "Yes. We provide resume guidance, mock interviews, DevOps project portfolio support, and referrals."
  }
];

const DevOpsTrainingCourse = () => {
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
            DevOps Training
          </motion.h1>

          <div className="flex flex-col lg:flex-row gap-5">
            <motion.div
              className="lg:w-2/3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg leading-relaxed">
                Learn how to automate and streamline software delivery with DevOps practices. This course combines hands-on tooling with deployment strategies across various cloud and container platforms.
              </p>
              <p className="mt-4 text-lg">
                Perfect for system admins, developers, and IT professionals aiming to master continuous integration, continuous delivery, and cloud-native DevOps pipelines.
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
      COURSE 7 - ONLINE CLASS
    </h4>
    <ul className="text-sm text-gray-800 space-y-1 text-center">
      <li>9:00AM – 10:30AM</li>
      <li>1:00PM – 2:30PM</li>
      <li>6:00PM – 7:30PM</li>
    </ul>
                  </div>
                </div>

                <p className="text-xs text-center mt-6 font-semibold text-[#044e30]">
                  BUILD | DEPLOY | SCALE
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
            {["Introduction to DevOps & SDLC", "Version Control with Git & GitHub", "CI/CD Pipelines with Jenkins", "Configuration Management with Ansible", "Containerization using Docker", "Container Orchestration with Kubernetes", "Infrastructure as Code (IaC) using Terraform", "Monitoring & Logging – Prometheus, Grafana", "Cloud Services (AWS/GCP basics)", "Automated Deployments & Rollbacks", "Project: End-to-End DevOps Pipeline"]
              .map((item, idx) => (
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
            Benefits of DevOps Training
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[["End-to-end automation expertise", "Master popular DevOps tools", "Practical cloud-native deployment skills", "CI/CD pipeline implementation"],
              ["Certificate & GitHub project portfolio", "DevOps job prep and mock interviews", "Live lab environments", "Flexible schedule (online/offline)"]].map((group, i) => (
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

export default DevOpsTrainingCourse;
