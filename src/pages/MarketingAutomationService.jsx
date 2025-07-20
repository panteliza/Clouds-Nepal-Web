import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaEnvelopeOpenText, FaRobot, FaChartBar } from "react-icons/fa";
import heroImage from "../assets/app development.svg"; // Replace with a marketing automation SVG/WebP
import ServicesComponent from "../components/ServicesComponent";

const MarketingAutomationService = () => {
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
            Marketing & Automation Services
          </h1>
          <p className="mt-4 text-lg">
            Automate your campaigns, boost engagement, and scale growth. Our marketing automation services help you reach the right audience at the right time — on autopilot.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all"
          >
            Let’s Automate Your Growth
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
            alt="Marketing Automation"
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
          Intelligent Marketing. Automated.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[{
            icon: <FaEnvelopeOpenText className="text-green-600 text-3xl" />, title: "Email & Drip Campaigns",
            desc: "Send automated email flows based on user behavior and segment rules."
          }, {
            icon: <FaRobot className="text-green-600 text-3xl" />, title: "Lead Scoring & Nurturing",
            desc: "Qualify leads and personalize follow-ups based on actions and engagement."
          }, {
            icon: <FaChartBar className="text-green-600 text-3xl" />, title: "Analytics & Reports",
            desc: "Track campaign performance and ROI with real-time marketing dashboards."
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
            Our Marketing Automation Workflow
          </motion.h2>

          <ol className="space-y-6 text-gray-700">
            <li><strong>1. Funnel Mapping:</strong> Define campaign goals, triggers, and audience journeys.</li>
            <li><strong>2. Tool Setup:</strong> Configure platforms like Mailchimp, ActiveCampaign, or HubSpot.</li>
            <li><strong>3. Content & Sequences:</strong> Create message flows, forms, and follow-up logic.</li>
            <li><strong>4. Launch & Monitor:</strong> Activate workflows and track open, click, and conversion rates.</li>
            <li><strong>5. Optimize & Scale:</strong> Refine journeys, test content, and automate new segments.</li>
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
          Let Campaigns Work While You Sleep
        </motion.h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Whether it’s email marketing, lead nurturing, or CRM automation — we’ll help you set it up to run automatically.
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

export default MarketingAutomationService;
