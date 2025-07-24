import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavbarMain from "../components/Navbar";
import Footer from "../components/Footer";
import { FaBullseye, FaUsers, FaLightbulb, FaChartLine } from "react-icons/fa";
import missionImg from "../assets/MissionPic.png";

const MissionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const iconStyle = "text-green-800 text-3xl mb-4";

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#d4f3e3] via-[#eefbf5] to-[#d4f3e3] overflow-hidden">
      <NavbarMain />

      {/* Background Animated Blobs */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute w-[500px] h-[500px] bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse top-[-120px] left-[-120px]" />
        <div className="absolute w-[500px] h-[500px] bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse bottom-[-100px] right-[-100px]" />
      </motion.div>

      <section className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        <motion.h1
          className="text-5xl font-extrabold text-center text-[#14452F] mb-12"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Our Mission
        </motion.h1>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center space-y-8 lg:space-y-0">
          <motion.div
            className="space-y-6 text-gray-700 text-lg leading-relaxed"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              At <span className="text-green-800 font-semibold">Clouds Nepal Web</span>, our mission is to empower individuals with industry-relevant skills that pave the path to impactful careers in the digital world.
            </p>
            <p>
              We believe education should be accessible, immersive, and future-driven. That’s why we focus on hands-on, practical learning led by real-world mentors, not just theory.
            </p>
            <p>
              From frontend and backend development to data science, digital marketing, and DevOps—we are committed to building confident tech professionals who are job-ready.
            </p>
            <p>
              Every line of code you write here, every tool you master, brings you closer to building something meaningful.
            </p>
          </motion.div>

          <motion.img
            src={missionImg}
            alt="Our Mission"
            className="rounded-2xl shadow-lg w-full object-cover"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[{
            icon: <FaBullseye className={iconStyle} />, title: "Purpose-Driven",
            desc: "We aim to cultivate skills that directly impact career growth, innovation, and real-world problem solving."
          }, {
            icon: <FaLightbulb className={iconStyle} />, title: "Innovation",
            desc: "We embrace technology and adapt our training to reflect what’s shaping the future."
          }, {
            icon: <FaUsers className={iconStyle} />, title: "Inclusive Learning",
            desc: "We believe everyone deserves the opportunity to grow—regardless of their background or experience."
          }, {
            icon: <FaChartLine className={iconStyle} />, title: "Real Results",
            desc: "From classroom to career—we focus on measurable progress through mentorship and live projects."
          }].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md text-center backdrop-blur-sm bg-opacity-80 border border-green-100 hover:shadow-xl transition"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.03 }}
            >
              {item.icon}
              <h3 className="text-xl font-bold text-[#14452F] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default MissionPage;
