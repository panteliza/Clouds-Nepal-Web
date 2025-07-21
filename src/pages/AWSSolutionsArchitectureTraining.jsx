// AWSSolutionsArchitectureTraining.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavbarMain from '../components/Navbar';
import Footer from "../components/Footer";
import { FaCheckCircle } from "react-icons/fa";
import CourseSearchBar from '../components/CourseSearchBar';
import { allCourses } from "../components/courses";

const faqs = [
  {
    question: "What is AWS Solutions Architecture Training?",
    answer: "This course trains you to design, deploy, and manage scalable, secure cloud infrastructure using Amazon Web Services (AWS)."
  },
  {
    question: "Do I need prior experience with cloud computing?",
    answer: "No prior cloud experience is required, but basic networking and computing knowledge is recommended."
  },
  {
    question: "Is this course aligned with the AWS certification?",
    answer: "Yes, it’s aligned with the AWS Certified Solutions Architect – Associate exam."
  },
  {
    question: "Will I work on real AWS services during training?",
    answer: "Yes, you’ll use hands-on labs to practice deploying services like EC2, S3, Lambda, VPCs, RDS, and more."
  },
  {
    question: "Is there job support after completion?",
    answer: "Yes, we assist with resume preparation, cloud portfolio building, and job referrals."
  }
];

const AWSSolutionsArchitectureTraining = () => {
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
            AWS Solutions Architecture Training
          </motion.h1>

          <div className="flex flex-col lg:flex-row gap-5">
            <motion.div
              className="lg:w-2/3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg leading-relaxed">
                Master cloud infrastructure and architecture on Amazon Web Services (AWS). This course is ideal for aspiring cloud architects, DevOps professionals, and system administrators.
              </p>
              <p className="mt-4 text-lg">
                Learn how to design fault-tolerant, cost-optimized, and secure systems with real-world case studies and practical labs.
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
                      <li>6:30AM – 8:00AM</li>
                      <li>11:00AM – 12:30PM</li>
                      <li>4:00PM – 5:30PM</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <h4 className="text-sm font-semibold text-[#044e30] mb-2 text-center">
                      ONLINE CLASS
                    </h4>
                    <ul className="text-sm text-gray-800 space-y-1 text-center">
                      <li>7:30AM – 9:00AM</li>
                      <li>2:00PM – 3:30PM</li>
                      <li>8:00PM – 9:30PM</li>
                    </ul>
                  </div>
                </div>

                <p className="text-xs text-center mt-6 font-semibold text-[#044e30]">
                  BUILD, SCALE & SECURE WITH AWS
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
            {["Introduction to Cloud & AWS Overview", "IAM – Identity & Access Management", "EC2 – Compute Service Configuration", "S3 – Secure Object Storage & Lifecycle", "VPC – Virtual Private Cloud Networking", "Route 53 – DNS & Traffic Management", "Elastic Load Balancing & Auto Scaling", "RDS & DynamoDB – Managed Databases", "Serverless with AWS Lambda", "CloudWatch & CloudTrail – Monitoring and Auditing", "Cost Optimization & Budgeting in AWS", "Mock Exams + Final Project with Multi-Service Deployment"]
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
            Benefits of AWS Solutions Architecture Training
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[["Certification-focused curriculum", "Hands-on lab experience with real AWS console", "Cloud security & architecture mastery", "Case-study driven approach"],
              ["Flexible learning modes", "Portfolio & project development", "Job-ready & interview-focused", "Official AWS exam preparation"]].map((group, i) => (
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

export default AWSSolutionsArchitectureTraining;