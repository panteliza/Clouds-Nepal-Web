import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaProjectDiagram,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";
import heroImage from "../assets/UI_UX.svg"; // Replace with optimized enterprise software illustration
import ServicesComponent from "../components/ServicesComponent";
import ServiceForm from "../components/ServiceForm";

const EnterpriseSoftwareService = () => {
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
            Custom Enterprise Software Solutions
          </h1>
          <p className="mt-4 text-lg">
            We design and build robust enterprise-grade software tailored for your organizational operations. Our solutions streamline workflows, centralize data, and scale with your growing needs.
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
            alt="Enterprise Software Development Nepal"
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
          Why Choose Us for Enterprise Software?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaProjectDiagram className="text-green-600 text-3xl" />,
              title: "Process Automation",
              desc: "Automate complex business processes across departments using secure centralized systems.",
            },
            {
              icon: <FaServer className="text-green-600 text-3xl" />,
              title: "Enterprise Architecture",
              desc: "We build scalable architectures ready for data warehousing, APIs, and third-party integrations.",
            },
            {
              icon: <FaShieldAlt className="text-green-600 text-3xl" />,
              title: "Security & Compliance",
              desc: "Our platforms are built with enterprise-grade security, roles, permissions, and data protection.",
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
            Our Enterprise Software Development Process
          </motion.h2>

          <ol className="space-y-6 text-gray-700">
            <li><strong>1. Business Needs Assessment:</strong> Gather requirements and define operational gaps.</li>
            <li><strong>2. System Design:</strong> Design software architecture and UI/UX that meets enterprise workflows.</li>
            <li><strong>3. Development & Integration:</strong> Build scalable modules using secure coding practices and APIs.</li>
            <li><strong>4. Testing & Compliance:</strong> QA, data security, performance and industry compliance checks.</li>
            <li><strong>5. Deployment & Support:</strong> Deploy to servers or cloud and maintain through SLAs.</li>
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
          Build Software That Powers Your Enterprise
        </motion.h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Let us build a fully customized enterprise software solution that streamlines your workflows, boosts productivity, and integrates across all departments.
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

export default EnterpriseSoftwareService;
