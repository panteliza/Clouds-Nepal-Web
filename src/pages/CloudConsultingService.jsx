import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCloud, FaTools, FaLock } from "react-icons/fa";
import heroImage from "../assets/website.svg"; // Replace with cloud/consulting optimized SVG
import ServicesComponent from "../components/ServicesComponent";
import ServiceForm from "../components/ServiceForm";

const CloudConsultingService = () => {
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
            Cloud Services & IT Consulting in Nepal
          </h1>
          <p className="mt-4 text-lg">
            We help businesses migrate, manage, and scale their IT operations on the cloud. Whether it's AWS, Azure, or private cloud — we plan, deploy, and optimize your cloud infrastructure securely.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all"
          >
            Schedule a Free Consultation
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
            alt="Cloud consulting services Nepal"
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
          Why Trust Us for Cloud & IT Consulting?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaCloud className="text-green-600 text-3xl" />,
              title: "Multi-Cloud Expertise",
              desc: "We work with AWS, Azure, and GCP — offering scalable cloud architecture that suits your business model.",
            },
            {
              icon: <FaTools className="text-green-600 text-3xl" />,
              title: "Deployment & Automation",
              desc: "Automate deployments using CI/CD pipelines, Terraform, and DevOps best practices.",
            },
            {
              icon: <FaLock className="text-green-600 text-3xl" />,
              title: "Secure & Compliant",
              desc: "We implement best practices for data protection, access control, and cloud monitoring.",
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
            Our Cloud Deployment Process
          </motion.h2>

          <ol className="space-y-6 text-gray-700">
            <li><strong>1. Discovery & Audit:</strong> Analyze current infrastructure, goals, and bottlenecks.</li>
            <li><strong>2. Architecture Design:</strong> Plan scalable cloud infrastructure using best practices.</li>
            <li><strong>3. Migration & Setup:</strong> Move workloads to cloud and configure network, storage, backups.</li>
            <li><strong>4. Automation & Monitoring:</strong> CI/CD setup, logging, performance dashboards.</li>
            <li><strong>5. Optimization & Support:</strong> Cost control, incident handling, compliance updates.</li>
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
          Let’s Take Your Business to the Cloud
        </motion.h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Whether you're migrating from legacy systems or launching a new SaaS product — we help you architect the cloud securely, efficiently, and affordably.
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

export default CloudConsultingService;
