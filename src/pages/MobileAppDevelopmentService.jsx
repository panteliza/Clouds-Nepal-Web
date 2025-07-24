import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaMobileAlt, FaReact, FaCloudUploadAlt } from "react-icons/fa";
import heroImage from "../assets/app development.svg"; // Replace with optimized mobile app dev image
import ServicesComponent from "../components/ServicesComponent";
import ServiceForm from "../components/ServiceForm";

const MobileAppDevelopmentService = () => {
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
            Android & iOS App Development in Nepal
          </h1>
          <p className="mt-4 text-lg">
            We craft high-performance mobile apps with modern tech that run seamlessly on Android and iOS. Our apps are fast, intuitive, secure, and ready to scale with your business.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all"
          >
            Start Your App Project
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
            alt="Mobile App Development Nepal"
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
          Why Choose Us for Mobile App Development?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaReact className="text-green-600 text-3xl" />,
              title: "React Native & Flutter Experts",
              desc: "We build hybrid and native apps using React Native and Flutter for faster development and smooth UI.",
            },
            {
              icon: <FaMobileAlt className="text-green-600 text-3xl" />,
              title: "User-Centric Design",
              desc: "Pixel-perfect UI/UX for delightful experiences across all screen sizes and device types.",
            },
            {
              icon: <FaCloudUploadAlt className="text-green-600 text-3xl" />,
              title: "App Store Ready",
              desc: "From builds to publishing, we handle submission to Google Play Store and Apple App Store.",
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
            Our Mobile App Development Process
          </motion.h2>

          <ol className="space-y-6 text-gray-700">
            <li><strong>1. App Strategy:</strong> Define the app’s purpose, target audience, and business goals.</li>
            <li><strong>2. UI/UX Design:</strong> Wireframes and prototypes with smooth user flows.</li>
            <li><strong>3. Development:</strong> React Native, Flutter, or native Android/iOS coding.</li>
            <li><strong>4. Testing & Optimization:</strong> QA on multiple devices + performance tuning.</li>
            <li><strong>5. Publishing & Support:</strong> Launch to stores and offer post-launch updates & support.</li>
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
          Let’s Launch Your Dream Mobile App
        </motion.h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          From startup MVPs to enterprise apps, we bring your mobile ideas to life with stunning, functional, and scalable builds.
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
<ServiceForm/>
      <ServicesComponent />
      <Footer />
    </div>
  );
};

export default MobileAppDevelopmentService;
