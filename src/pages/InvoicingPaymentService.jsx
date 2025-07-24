import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaMoneyBillWave, FaLock, FaRocket } from "react-icons/fa";
import heroImage from "../assets/pay-per-click.svg"; // Replace with relevant SVG/WebP
import ServicesComponent from "../components/ServicesComponent";
import ServiceForm from "../components/ServiceForm";

const InvoicingPaymentService = () => {
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
            Invoicing & Payment Software
          </h1>
          <p className="mt-4 text-lg">
            Simplify how you create, send, and get paid. Our invoicing and payment software lets you manage cash flow, automate billing cycles, and ensure secure payment processing.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all"
          >
            Try It Free
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
            alt="Invoicing and Payment Software"
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
          Why Choose Our Invoicing Tools?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[{
            icon: <FaMoneyBillWave className="text-green-600 text-3xl" />, title: "Quick Invoicing",
            desc: "Send branded invoices instantly and track statuses in real time."
          }, {
            icon: <FaLock className="text-green-600 text-3xl" />, title: "Secure Payment Links",
            desc: "Accept payments through secured gateways with one-click checkout experiences."
          }, {
            icon: <FaRocket className="text-green-600 text-3xl" />, title: "Auto Follow-Ups",
            desc: "Set reminders and automatic email follow-ups for pending payments."
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
            Our Setup Process
          </motion.h2>

          <ol className="space-y-6 text-gray-700">
            <li><strong>1. Business Profiling:</strong> Setup company branding, invoice format, and terms.</li>
            <li><strong>2. Payment Integration:</strong> Link your bank, wallet, or payment gateways like Khalti or Fonepay.</li>
            <li><strong>3. Customer Import:</strong> Import client database for easy selection and tracking.</li>
            <li><strong>4. Automation Rules:</strong> Define due dates, reminder schedules, and penalty policies.</li>
            <li><strong>5. Go Live:</strong> Start invoicing and tracking payments from a central dashboard.</li>
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
          Get Paid Faster & Easier
        </motion.h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Stop chasing payments. Use our all-in-one solution to invoice, remind, collect, and reconcile — securely and instantly.
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

export default InvoicingPaymentService;
