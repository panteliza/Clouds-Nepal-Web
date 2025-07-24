import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCashRegister, FaWarehouse, FaNetworkWired } from "react-icons/fa";
import heroImage from "../assets/digital-market.svg"; // Replace with retail automation-themed image
import ServicesComponent from "../components/ServicesComponent";
import ServiceForm from "../components/ServiceForm";

const PosImsErpService = () => {
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
            POS, IMS & ERP Software Solutions
          </h1>
          <p className="mt-4 text-lg">
            From inventory tracking to enterprise resource planning — our integrated POS, IMS, and ERP platforms help you automate retail and large-scale business operations with precision and control.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all"
          >
            Request a Demo
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
            alt="POS, IMS, ERP Software"
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
          One Platform for All Operations
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[{
            icon: <FaCashRegister className="text-green-600 text-3xl" />, title: "Point of Sale (POS)",
            desc: "Speed up checkout with sales, discounts, barcode scanning, and digital receipts."
          }, {
            icon: <FaWarehouse className="text-green-600 text-3xl" />, title: "Inventory Management (IMS)",
            desc: "Track stock levels, manage batches, and receive auto-alerts on low quantities."
          }, {
            icon: <FaNetworkWired className="text-green-600 text-3xl" />, title: "ERP Integration",
            desc: "Unify departments — from finance to HR — under one system with role-based access."
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
            Implementation Workflow
          </motion.h2>

          <ol className="space-y-6 text-gray-700">
            <li><strong>1. Needs Analysis:</strong> Map retail/business processes and identify required modules.</li>
            <li><strong>2. System Customization:</strong> Tailor POS, IMS, ERP modules to your workflow and user hierarchy.</li>
            <li><strong>3. Training & Testing:</strong> Educate teams and test use cases in live demo environments.</li>
            <li><strong>4. Deployment:</strong> Go live with data imports, integrations, and hardware setup.</li>
            <li><strong>5. Continuous Support:</strong> Get system monitoring, updates, and feature enhancements.</li>
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
          Digitize Your Entire Business
        </motion.h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          From storefronts to warehouses and headquarters — we build powerful ERP ecosystems that bring your business operations under control.
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

export default PosImsErpService;
