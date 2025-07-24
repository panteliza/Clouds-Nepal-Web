import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavbarMain from "../components/Navbar";
import Footer from "../components/Footer";
import { FaEye, FaRocket, FaGlobeAsia, FaBrain } from "react-icons/fa";
import visionImage from "../assets/VissionPic.png"; // ✅ Make sure this is the corrected image

const OurVission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const iconStyle = "text-4xl text-green-800 mb-4";

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f0fdf4] via-[#e8fff5] to-[#f0fdf4] overflow-hidden">
      <NavbarMain />

      {/* Background Blobs */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute w-[450px] h-[450px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse left-[-100px] top-[-80px]" />
        <div className="absolute w-[400px] h-[400px] bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse right-[-80px] bottom-[-80px]" />
      </motion.div>

      <section className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold text-center text-[#14452F] mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Our Vision
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
     <motion.img
  src={visionImage}
  alt="Vision Banner"
  className="rounded-2xl shadow-xl w-full object-cover"
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.9, delay: 0.2 }}
/>




          <motion.div
            className="space-y-6 text-gray-700 text-lg leading-relaxed"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <p>
              Our vision at <span className="text-green-800 font-semibold">Clouds Nepal Web</span> is to be Nepal's most trusted and innovative tech learning platform, transforming how students and professionals upskill for tomorrow's digital economy.
            </p>
            <p>
              We aim to foster a thriving ecosystem where learners can dream, build, and achieve through guided mentorship, real-world projects, and career-driven roadmaps.
            </p>
            <p>
              We envision a future where every passionate learner, regardless of background, can contribute meaningfully to the global tech workforce from anywhere in Nepal.
            </p>
            <p>
              Through creativity, inclusivity, and continuous innovation—we are shaping changemakers who don't just follow trends but define them.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
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
            icon: <FaEye className={iconStyle} />, title: "Bold Perspective",
            desc: "We aim to redefine tech education through a futuristic, learner-first lens."
          }, {
            icon: <FaRocket className={iconStyle} />, title: "Empowered Growth",
            desc: "We want every learner to accelerate their growth and leave with confidence."
          }, {
            icon: <FaGlobeAsia className={iconStyle} />, title: "Global Standards",
            desc: "Our training, mentors and tools align with global tech standards."
          }, {
            icon: <FaBrain className={iconStyle} />, title: "Creative Intelligence",
            desc: "We promote curiosity and design thinking, the core drivers of innovation."
          }].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md text-center backdrop-blur-sm bg-opacity-80 border border-green-100 hover:shadow-xl transition"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05 }}
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

export default OurVission;