// HeroSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";

// Image Imports
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";

const HeroSection = () => {
  const MotionButton = motion.button;

  return (
    <section className="relative bg-gradient-to-br from-white to-gray-100 py-20 px-6 md:px-20 overflow-hidden">
      {/* SVG Animated Backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-72 h-72 opacity-30 animate-spin-slow" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="#05693A" strokeWidth="5" strokeDasharray="15 15" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-96 h-96 opacity-20 animate-bounce-slow" viewBox="0 0 200 200" fill="none">
          <path fill="#05693A" d="M50,150 Q75,100 100,150 Q125,200 150,150 Q175,100 200,150 L200,200 L0,200 Z" />
        </svg>
        <svg className="absolute top-1/2 left-1/2 w-64 h-64 opacity-10 transform -translate-x-1/2 -translate-y-1/2 animate-float" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" rx="10" fill="#05693A" />
        </svg>
        <svg className="absolute top-10 right-1/4 w-48 h-48 opacity-20 animate-ping-slow" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="25" fill="#05693A" />
        </svg>

        {/* Floating Code Symbols */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className={`absolute text-[#05693A] text-4xl font-mono opacity-[0.05] animate-float-symbol`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 1.5}s`,
              }}
            >
              {["<>", "</>", "{ }", "=>", "if", "==", "!=", "&&", "||", "<div />"][i % 10]}
            </span>
          ))}
        </div>
      </div>

      <motion.div
        className="relative z-10 grid md:grid-cols-2 items-center gap-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Left Text Section */}
        <motion.div
          className="space-y-8"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Transforming Ideas into
            <br />
            <span className="text-[#05693A] inline-block animate-wiggle">
              Digital Excellence
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-700 text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            At <strong>Clouds Web Nepal</strong>, we specialize in crafting visually powerful and technically flawless digital products.
            Whether it's web development or complete tech solutions, we accelerate your business to new heights.
          </motion.p>

          <Link to="/contact-us">
            <MotionButton
              className="bg-[#05693A] hover:bg-[#049b5f] text-white font-bold px-8 py-4 rounded-full shadow-lg transition duration-300 flex items-center gap-2 animate-shimmer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ⚡ Get in Touch With Us
            </MotionButton>
          </Link>
        </motion.div>

        {/* Right Swiper Section */}
        <motion.div
          className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            {[slider1, slider2, slider3].map((img, i) => (
              <SwiperSlide key={i}>
                <motion.img
                  src={img}
                  alt={`Tech Showcase ${i + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 3 }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>

      {/* Tailwind custom animations */}
      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }
        .animate-wiggle {
          animation: wiggle 2s infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce 6s ease-in-out infinite;
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background-image: linear-gradient(90deg, #05693A 25%, #04bf7a 50%, #05693A 75%);
          background-size: 200% auto;
          animation: shimmer 2s linear infinite;
        }
        @keyframes floatSymbol {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.05; }
          50% { transform: translateY(-20px) rotate(2deg); opacity: 0.07; }
          100% { transform: translateY(0) rotate(-2deg); opacity: 0.05; }
        }
        .animate-float-symbol {
          animation: floatSymbol 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
