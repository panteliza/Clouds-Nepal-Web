import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaUsers, FaUserTie, FaMoneyCheckAlt } from "react-icons/fa";
import heroImage from "../assets/graphic.svg"; // Replace with CRM/HR themed illustration
import ServicesComponent from "../components/ServicesComponent";
import ServiceForm from "../components/ServiceForm";

const CrmHrPayrollService = () => {
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
            CRM, HR & Payroll Solutions
          </h1>
          <p className="mt-4 text-lg">
            Simplify your workforce, employee lifecycle, and customer engagement through our customized CRM and HRM platforms. Manage attendance, payroll, tasks, and communication — all in one place.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all"
          >
            Get a Free Demo
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
            alt="CRM, HR and Payroll"
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
          All-in-One People & Customer Management
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[{
            icon: <FaUsers className="text-green-600 text-3xl" />, title: "Smart CRM System",
            desc: "Track leads, manage follow-ups, and build better customer relationships."
          }, {
            icon: <FaUserTie className="text-green-600 text-3xl" />, title: "HR & Attendance",
            desc: "Automate employee onboarding, leave, and attendance tracking."
          }, {
            icon: <FaMoneyCheckAlt className="text-green-600 text-3xl" />, title: "Payroll Automation",
            desc: "Auto-generate salary slips, handle deductions, bonuses, and pay schedules."
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
            How Our Platform Works
          </motion.h2>

          <ol className="space-y-6 text-gray-700">
            <li><strong>1. Requirements Mapping:</strong> Understand organizational structure and workflow needs.</li>
            <li><strong>2. System Setup:</strong> Configure CRM pipelines, HR policies, and payroll logic.</li>
            <li><strong>3. Training & Access:</strong> Onboard your team and define permission levels.</li>
            <li><strong>4. Automation & Alerts:</strong> Enable automatic email/SMS, reports, and reminders.</li>
            <li><strong>5. Review & Support:</strong> Continuous performance optimization and future scaling.</li>
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
          Empower Your People. Elevate Your Business.
        </motion.h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Save hours of manual work. Gain total visibility and control over your customer and employee lifecycles with our centralized platform.
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
<ServiceForm/>
      <ServicesComponent />
      <Footer />
    </div>
  );
};

export default CrmHrPayrollService;