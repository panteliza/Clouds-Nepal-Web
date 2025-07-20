import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaSearchDollar, FaBullhorn, FaChartLine } from "react-icons/fa";
import heroImage from "../assets/seo.svg"; // Replace with optimized digital marketing SVG
import ServicesComponent from "../components/ServicesComponent";

const SeoSemPpcService = () => {
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
            SEO, SEM & PPC Marketing
          </h1>
          <p className="mt-4 text-lg">
            Boost your website traffic, conversions, and brand visibility with strategic SEO, Google Ads, and Pay-Per-Click campaigns — all tailored to your goals.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all"
          >
            Get a Free Audit
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
            alt="SEO SEM PPC Service"
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
          Digital Marketing That Delivers Results
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[{
            icon: <FaSearchDollar className="text-green-600 text-3xl" />, title: "SEO Optimization",
            desc: "Improve rankings, site structure, speed, and authority to increase organic traffic."
          }, {
            icon: <FaBullhorn className="text-green-600 text-3xl" />, title: "Google Ads & SEM",
            desc: "Launch data-driven ad campaigns on Google Search, Display, and YouTube."
          }, {
            icon: <FaChartLine className="text-green-600 text-3xl" />, title: "PPC Strategy & Retargeting",
            desc: "Reach high-intent users with smart bidding, tracking pixels, and remarketing."
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
            How We Drive Performance
          </motion.h2>

          <ol className="space-y-6 text-gray-700">
            <li><strong>1. Website & Competitor Audit:</strong> Evaluate SEO status, ad spend, and competition gaps.</li>
            <li><strong>2. Keyword & Audience Research:</strong> Identify intent-based opportunities and platforms.</li>
            <li><strong>3. Strategy Execution:</strong> Launch on-page SEO, campaigns, and tracking setups.</li>
            <li><strong>4. Analytics & Reporting:</strong> Deliver transparent KPIs via Google Analytics/Data Studio.</li>
            <li><strong>5. Optimization:</strong> Adjust campaigns weekly for max ROI and conversion growth.</li>
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
          Let’s Grow Your Online Visibility
        </motion.h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Whether you want leads, sales, or brand awareness — our SEO/SEM/PPC experts can help you achieve it with precision.
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

export default SeoSemPpcService;