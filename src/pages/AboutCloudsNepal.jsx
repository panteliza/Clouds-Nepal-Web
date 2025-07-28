import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImage from "../assets/AboutImage.webp";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const AboutCloudsNepal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // ✅ SEO tags
    document.title = "About Clouds Nepal Web – Software, Cloud, and IT Training Experts";

    // ✅ Meta Description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Clouds Nepal Web leads Nepal’s digital transformation through software solutions, cloud services, and professional IT training since 2022."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Clouds Nepal Web leads Nepal’s digital transformation through software solutions, cloud services, and professional IT training since 2022.";
      document.head.appendChild(meta);
    }

    // ✅ Canonical Link (Fixed domain)
    const canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = "https://www.cloudsnepalweb.com.np/about";
      document.head.appendChild(link);
    }

    // ✅ Robots Meta
    const robotsTag = document.querySelector("meta[name='robots']");
    if (!robotsTag) {
      const meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = "index, follow";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#eef6f9] to-[#e2f0ec] overflow-hidden pt-22 py-16 px-6 md:px-16">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-[#39765B] rounded-full filter blur-3xl opacity-20 z-0"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 60, -60, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-100px] right-[-100px] w-[420px] h-[420px] bg-[#39765B] rounded-full filter blur-2xl opacity-20 z-0"
          animate={{ scale: [1, 1.1, 1], rotate: [0, -30, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
          {/* Image */}
          <motion.div
            className="relative rounded-3xl shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-700 ease-in-out"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <img
              src={aboutImage}
              alt="Clouds Nepal Web Team"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-[#14452F] mt-3 mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-[#14452F] to-[#39765B] bg-clip-text text-transparent">
                About Clouds Nepal Web
              </span>
            </motion.h1>

            <motion.p
              className="text-lg leading-relaxed text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              Since <strong>2022</strong>, <strong>Clouds Nepal Web</strong> has led Nepal’s IT transformation.
              From building robust{" "}
              <span className="font-semibold text-[#39765B]">software solutions</span> and{" "}
              <span className="font-semibold text-[#39765B]">cloud platforms</span> to nurturing new tech
              talent through <span className="font-semibold text-[#39765B]">IT training</span>, we’ve been
              the digital engine for startups, students, and enterprise clients.
              <br /><br />
              Our mission is to turn ideas into innovation — locally built, globally trusted.
              We believe technology should be accessible, meaningful, and empowering — whether
              you’re a business seeking automation or a learner preparing for your first
              programming job.
              <br /><br />
              With a team of passionate developers, cloud engineers, and tech mentors,
              we bridge the gap between Nepal’s potential and global tech standards.
              Our services span across <strong>website and app development</strong>,{" "}
              <strong>custom ERP/CRM systems</strong>, and <strong>cloud integrations</strong>,
              while our training programs prepare students for real-world IT careers.
              <br /><br />
              At Clouds Nepal Web, we are not just a service provider — we are partners in
              digital growth. Together with our clients and students, we’re building the future
              of technology in Nepal and beyond.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="relative py-16 px-6 md:px-16 bg-white z-10 overflow-hidden">
        <motion.div
          className="absolute w-[280px] h-[280px] rounded-full bg-[#d0f1e2] blur-3xl opacity-30 top-[20%] left-[40%] z-0"
          animate={{ scale: [1, 1.3, 1], y: [0, 30, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
        >
          {[
            {
              title: "Software Services",
              desc: "Custom apps, cloud platforms, AI tools & secure enterprise software tailored for your business.",
            },
            {
              title: "Professional IT Training",
              desc: "Courses in frontend, backend, DevOps, cloud, AI & mobile app development. Learn from experts.",
            },
            {
              title: "Vision & Mission",
              desc: "To be Nepal’s leading digital accelerator through quality services, innovation & tech education.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className="bg-[#F7FDFB] border border-[#C8E2D5] shadow-lg rounded-2xl p-8 hover:scale-[1.06] hover:shadow-2xl hover:border-[#39765B] transition-all duration-500"
              whileHover={{ rotate: [0, 1, -1, 0] }}
            >
              <h3 className="text-xl font-semibold text-[#14452F] mb-4">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default AboutCloudsNepal;
