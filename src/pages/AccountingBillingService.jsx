import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaFileInvoiceDollar, FaCalculator, FaChartPie } from "react-icons/fa";
import heroImage from "../assets/content-writing.svg"; // Replace with relevant SVG/WebP
import ServicesComponent from "../components/ServicesComponent";
import ServiceForm from "../components/ServiceForm";

const AccountingBillingService = () => {
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
            Accounting & Billing Automation
          </h1>
          <p className="mt-4 text-lg">
            Simplify finances with smart tools for bookkeeping, invoicing, and tax-ready reports. Our software helps you track, bill, and manage your business accounts efficiently and error-free.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all"
          >
            Request a Free Demo
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
            alt="Accounting and Billing Software"
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
          Why Use Our Accounting Tools?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[{
            icon: <FaFileInvoiceDollar className="text-green-600 text-3xl" />, title: "Smart Invoicing",
            desc: "Create branded invoices, track due dates, and send reminders with ease."
          }, {
            icon: <FaCalculator className="text-green-600 text-3xl" />, title: "Bookkeeping Simplified",
            desc: "Record transactions, auto-categorize income/expenses, and monitor cash flow."
          }, {
            icon: <FaChartPie className="text-green-600 text-3xl" />, title: "Tax-Ready Reports",
            desc: "Generate GST, VAT, and balance reports with just a few clicks."
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
            Our Automation Process
          </motion.h2>

          <ol className="space-y-6 text-gray-700">
            <li><strong>1. Business Analysis:</strong> Understand your current finance and billing flow.</li>
            <li><strong>2. Configuration:</strong> Setup chart of accounts, tax rules, and invoice templates.</li>
            <li><strong>3. Data Migration:</strong> Import previous records and clean historical data.</li>
            <li><strong>4. Integration:</strong> Connect with POS, CRM, or eCommerce platforms.</li>
            <li><strong>5. Reporting & Training:</strong> Enable dashboards and onboard your finance team.</li>
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
          Automate. Organize. Grow.
        </motion.h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Our accounting and billing software helps you focus on growth, not spreadsheets. Let’s streamline your finances together.
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

export default AccountingBillingService;