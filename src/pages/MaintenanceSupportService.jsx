import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaWrench, FaLifeRing, FaSyncAlt } from "react-icons/fa";
import heroImage from "../assets/social.svg"; // Replace with maintenance/support themed image
import ServicesComponent from "../components/ServicesComponent";

const MaintenanceSupportService = () => {
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
            Maintenance & Support Services
          </h1>
          <p className="mt-4 text-lg">
            We provide reliable ongoing maintenance and technical support for your applications, websites, and IT systems. Stay secure, optimized, and up-to-date — always.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all"
          >
            Request Support
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
            alt="Maintenance and Support"
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
          Why Choose Our Support Team?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[{
            icon: <FaLifeRing className="text-green-600 text-3xl" />, title: "24/7 Technical Help",
            desc: "Get round-the-clock technical assistance to resolve issues fast and keep operations running."
          }, {
            icon: <FaWrench className="text-green-600 text-3xl" />, title: "Bug Fixes & Updates",
            desc: "We handle updates, error patches, and performance improvements to keep systems stable."
          }, {
            icon: <FaSyncAlt className="text-green-600 text-3xl" />, title: "Preventive Maintenance",
            desc: "Routine monitoring and system audits to prevent downtime and ensure optimization."
          }].map((item, idx) => (
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
            Our Support Workflow
          </motion.h2>

          <ol className="space-y-6 text-gray-700">
            <li><strong>1. Initial Assessment:</strong> Analyze system state, pain points, and priorities.</li>
            <li><strong>2. Maintenance Plan:</strong> Define scope — updates, frequency, monitoring, reporting.</li>
            <li><strong>3. Execution:</strong> Apply fixes, upgrades, and improvements as per plan.</li>
            <li><strong>4. Reporting:</strong> Share detailed performance and task reports regularly.</li>
            <li><strong>5. Continuous Optimization:</strong> Recommend long-term improvements and upgrades.</li>
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
          Never Worry About Downtime Again
        </motion.h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Let us handle your tech headaches — we’ll keep your systems healthy, updated, and secure around the clock.
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

      <ServicesComponent />
      <Footer />
    </div>
  );
};

export default MaintenanceSupportService;
