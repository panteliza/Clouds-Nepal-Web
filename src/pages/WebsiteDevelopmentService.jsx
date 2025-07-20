// WebsiteDevelopmentService.jsx – Fully Animated Service Page
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCheckCircle, FaCode, FaChartLine, FaMobileAlt } from "react-icons/fa";
import heroImage from "../assets/react-native.webp"; // Replace with actual optimized image
import featureImg from "../assets/uiux.webp"; // Replace with actual optimized image

const WebsiteDevelopmentService = () => {
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
            Custom Website Development in Nepal
          </h1>
          <p className="mt-4 text-lg">
            We build high-performance, responsive, and secure websites tailored to your brand and business goals. Our expert team delivers future-proof solutions from static sites to enterprise-grade platforms.
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
            alt="Website development Nepal"
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
          Why Choose Us for Website Development?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaCode className="text-green-600 text-3xl" />, title: "Modern Tech Stack",
              desc: "We use React, Next.js, Node, TailwindCSS, and headless CMSs like Strapi for speed and scalability."
            },
            {
              icon: <FaMobileAlt className="text-green-600 text-3xl" />, title: "Mobile-First Design",
              desc: "Every site we build is responsive and optimized for all screen sizes and devices."
            },
            {
              icon: <FaChartLine className="text-green-600 text-3xl" />, title: "SEO & Speed Optimized",
              desc: "From Core Web Vitals to structured data, we ensure your site ranks and loads fast."
            }
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
            Our Development Process
          </motion.h2>

          <ol className="space-y-6 text-gray-700">
            <li><strong>1. Discovery & Strategy:</strong> Understand your brand, market, and goals.</li>
            <li><strong>2. UI/UX Design:</strong> Wireframes & visual design using Figma + AI tools.</li>
            <li><strong>3. Development:</strong> Code using React/Next.js, Tailwind, APIs, and CMS.</li>
            <li><strong>4. QA & Optimization:</strong> Speed, security, and SEO testing.</li>
            <li><strong>5. Launch & Support:</strong> Deploy on Vercel/Netlify + maintenance plans.</li>
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
          Let’s Build Your Dream Website
        </motion.h2>
        <p className="text-gray-600 max-w-xl mx-auto ">
          Whether it’s a business website, portfolio, eCommerce store, or a custom app – our team in Nepal will deliver a world-class solution tailored to your needs.
        </p>
       <a
              href="https://wa.me/9766896866"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded-2xl hover:bg-green-600 transition"
            >
             Get a free consulation
            </a>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteDevelopmentService;
