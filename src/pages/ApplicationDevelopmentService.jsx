import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCheckCircle, FaCogs, FaDesktop, FaShieldAlt } from "react-icons/fa";
import heroImage from "../assets/system-software.svg"; // Replace with actual optimized image

import ServicesComponent from "../components/ServicesComponent";

const ApplicationDevelopmentService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-[100px] px-6 md:px-16 max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#044e30] leading-tight">
            Custom Application Development in Nepal
          </h1>
          <p className="mt-4 text-lg">
            We craft scalable desktop and web applications tailored for your specific business processes. From concept to code, we build powerful systems that boost productivity and performance.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all"
          >
            Start Your Project
          </a>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={heroImage}
            alt="Application Development Nepal"
            className="rounded-2xl shadow-xl w-full"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 md:px-16 max-w-screen-xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-[#044e30] text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us for App Development?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaDesktop className="text-green-600 text-3xl" />,
              title: "Cross-Platform Ready",
              desc: "We develop apps that work flawlessly across Windows, Linux, and web environments.",
            },
            {
              icon: <FaCogs className="text-green-600 text-3xl" />,
              title: "Tailored to Business Logic",
              desc: "Your workflows, your rules — our custom apps are built to match your operations.",
            },
            {
              icon: <FaShieldAlt className="text-green-600 text-3xl" />,
              title: "Secure & Reliable",
              desc: "We use modern frameworks, encryption, and deployment practices to ensure safety and uptime.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              {item.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#f0fdf4] py-8 px-6 md:px-16">
        <div className="max-w-screen-xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-[#044e30] text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our App Development Process
          </motion.h2>

          <ol className="space-y-6 text-gray-700">
            <li><strong>1. Consultation & Analysis:</strong> Understand your requirements, workflows, and data.</li>
            <li><strong>2. Planning & Design:</strong> Architect the system and build clean UI/UX with Figma + tools.</li>
            <li><strong>3. Development:</strong> Code with Electron, Python, JavaScript, or frameworks like .NET/Node.</li>
            <li><strong>4. Testing & QA:</strong> Rigorous testing for functionality, performance, and bugs.</li>
            <li><strong>5. Deployment & Support:</strong> Deliver, train your team, and provide updates/maintenance.</li>
          </ol>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-5 px-6 md:px-16 max-w-screen-xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-[#044e30] mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Build the App Your Business Deserves
        </motion.h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Whether it's an internal dashboard, an inventory tool, or a client-facing platform — we’ll help you build it right.
        </p>
        <a
          href="https://wa.me/9766896866"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded-2xl hover:bg-green-600 transition"
        >
        Get a free consultation 
        </a>
      </section>

      <ServicesComponent />
      <Footer />
    </div>
  );
};

export default ApplicationDevelopmentService;
