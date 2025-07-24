import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const FloatingEmoji = ({ emoji, style, delay }) => (
  <motion.div
    className="absolute text-3xl"
    style={style}
    animate={{
      y: [0, -20, 0],
      opacity: [0.5, 1, 0.5],
    }}
    transition={{
      repeat: Infinity,
      duration: 6 + delay,
      ease: "easeInOut",
    }}
  >
    {emoji}
  </motion.div>
);

const InternshipApply = () => {
  const { scrollY } = useScroll();
  const blob1Y = useTransform(scrollY, [0, 400], [0, 100]);
  const blob2Y = useTransform(scrollY, [0, 400], [0, -80]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#e0f7fa] via-[#f0fdf4] to-[#e8f5e9] py-16 px-6 rounded-3xl shadow-2xl ">
      {/* 🟢 Parallax Background Blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-green-700 opacity-30 blur-3xl top-[-60px] left-[-80px] rounded-full"
        style={{ y: blob1Y }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-cyan-400 opacity-20 blur-3xl bottom-[-60px] right-[-70px] rounded-full"
        style={{ y: blob2Y }}
      />

      {/* 🌀 Spinning Ring */}
      <motion.div
        className="absolute border-4 border-dotted border-[#198754] rounded-full w-56 h-56 top-1/2 left-1/2 opacity-10 translate-x-[-50%] translate-y-[-50%]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />

      {/* 🌈 Floating Emojis – Border Only, No Overlap */}
<div className="absolute inset-0 z-0 pointer-events-none">
  <FloatingEmoji emoji="💻" delay={0} style={{ top: "5%", left: "2%" }} />
  <FloatingEmoji emoji="📱" delay={1} style={{ bottom: "5%", left: "3%" }} />
  <FloatingEmoji emoji="🧠" delay={2} style={{ top: "10%", right: "3%" }} />
  <FloatingEmoji emoji="🚀" delay={1.5} style={{ bottom: "8%", right: "4%" }} />
  <FloatingEmoji emoji="👨‍💻" delay={0.7} style={{ top: "50%", left: "1%" }} />
</div>


      {/* 🎯 Main Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold text-[#14532d] mb-4 leading-tight">
           Looking for an Internship?
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-6">
          At <span className="font-semibold text-green-700">Clouds Nepal Web</span>, we welcome passionate learners to join our internship programs in design, development, and more!
        </p>

        <motion.div
          initial={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="/career"
            className="inline-block bg-gradient-to-r from-[#15803d] to-[#198754] text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition"
          >
            Explore Career Opportunities →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InternshipApply;
