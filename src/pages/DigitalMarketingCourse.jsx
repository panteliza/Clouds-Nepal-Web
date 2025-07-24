// DigitalMarketingCourse.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavbarMain from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCheckCircle } from "react-icons/fa";
import CourseSearchBar from "../components/CourseSearchBar";
import { allCourses } from "../components/courses";
import CloudsContactForm from "../components/CloudsContactForm";

const faqs = [
  {
    question: "What is Digital Marketing training?",
    answer:
      "Digital Marketing training helps you master online marketing tools and strategies like SEO, PPC, Social Media, Email Marketing, and more to grow businesses online.",
  },
  {
    question: "Do I need any technical background?",
    answer:
      "No. This course is beginner-friendly. Anyone interested in marketing, freelancing, or growing online presence can join.",
  },
  {
    question: "Are online classes available?",
    answer:
      "Yes, we offer both online and physical class options for your convenience.",
  },
  {
    question: "What’s the duration of the course?",
    answer:
      "The course runs for about 2.5 to 3 months with regular interactive sessions and real-time project work.",
  },
  {
    question: "Will I work on real campaigns?",
    answer:
      "Yes, you’ll practice with real-world tools and case studies including campaign analysis and ad setup.",
  },
  {
    question: "Is there placement or freelancing support?",
    answer:
      "We provide freelancing guidance, resume reviews, mock interviews, and job placement assistance.",
  },
];

const DigitalMarketingCourse = () => {
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
            Digital Marketing Training
          </motion.h1>

          <div className="flex flex-col lg:flex-row gap-5">
            <motion.div
              className="lg:w-2/3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg leading-relaxed">
                Master the skills to market products, services, and brands online. Learn SEO, PPC, content creation, analytics, and social media strategy to become a certified digital marketer.
              </p>
              <p className="mt-4 text-lg">
                Ideal for job seekers, freelancers, and entrepreneurs looking to grow their presence in the digital world.
              </p>
            </motion.div>

            {/* Timing Box */}
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
      <li>11:30AM – 1:00PM</li>
      <li>4:30PM – 6:00PM</li>
    </ul>
  </div>

  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
    <h4 className="text-sm font-semibold text-[#044e30] mb-2 text-center">
      COURSE 5 - ONLINE CLASS
    </h4>
    <ul className="text-sm text-gray-800 space-y-1 text-center">
      <li>8:00AM – 9:30AM</li>
      <li>1:30PM – 3:00PM</li>
      <li>6:30PM – 8:00PM</li>
    </ul>
                  </div>
                </div>
                <p className="text-xs text-center mt-6 font-semibold text-[#044e30]">
                  DOMINATE DIGITAL PLATFORMS
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
              "Search Engine Optimization (SEO)",
              "Pay-Per-Click (PPC) Advertising",
              "Social Media Marketing (SMM)",
              "Content Marketing & Blogging",
              "Email Marketing Strategies",
              "Google Ads & Meta Ads (Facebook/Instagram)",
              "YouTube Marketing & Video SEO",
              "Google Analytics & Campaign Tracking",
              "Marketing Funnel Strategy",
              "Freelancing & Client Pitching",
              "Real-World Campaign Setup & Analysis",
              "Portfolio & Certification Guidance",
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
            Benefits of Digital Marketing Course
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              [
                "Beginner-friendly digital marketing blueprint",
                "Learn SEO, Google Ads, SMM, and Email Marketing",
                "Work on real campaigns and tools",
                "Perfect for job seekers & entrepreneurs",
              ],
              [
                "Live online & offline sessions",
                "Resume & portfolio building guidance",
                "Freelancing and client pitching skills",
                "Certification after course completion",
              ],
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

export default DigitalMarketingCourse;
