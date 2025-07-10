import React, { useEffect, useRef, useState } from "react";
import {
  FaUsers,
  FaBriefcase,
  FaLaptopCode,
  FaUniversity,
  FaUserTie,
  FaAward,
} from "react-icons/fa";
import statsImage from "../assets/IT company.jpg";
import { motion, useInView } from "framer-motion";

const statsData = [
  { icon: <FaUsers size={28} />, title: "Active & Enrolled Clients", value: 10000, suffix: "+" },
  { icon: <FaBriefcase size={28} />, title: "Successful Job Placements", value: 7000, suffix: "+" },
  { icon: <FaLaptopCode size={28} />, title: "Software Projects Delivered", value: 30, suffix: "+" },
  { icon: <FaUniversity size={28} />, title: "College Collaborations", value: 20, suffix: "+" },
  { icon: <FaUserTie size={28} />, title: "Expert Trainers", value: 80, suffix: "+" },
  { icon: <FaAward size={28} />, title: "Years of Experience", value: 7, suffix: "+" },
];

const CountUp = ({ end, trigger }) => {
  const [count, setCount] = useState(0);
  const duration = 1500;
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const increment = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, trigger]);
  return count;
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative bg-gradient-to-br from-green-50 via-white to-green-100 py-24 px-4 sm:px-6 lg:px-20 max-w-screen-xl mx-auto overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-green-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 bg-green-400 opacity-20 rounded-full blur-2xl animate-spin-slow z-0"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">
        {/* Left Section */}
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold leading-tight text-gray-800"
          >
            What Sets <span className="text-green-600">Clouds Nepal</span> Apart?
          </motion.h2>
          <p className="text-gray-600 text-lg">
            We're not just building software. We're building futures, shaping businesses,
            and training the next-gen digital workforce.
          </p>
          <img
            src={statsImage}
            alt="Team working"
            className="rounded-xl mt-4 w-full max-w-xs shadow-2xl border border-green-100"
          />
        </div>

        {/* Right Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: [50, -10, 0] }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="bg-green-500 text-white px-6 py-6 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out relative"
            >
              <div className="bg-white text-green-600 p-3 rounded-full w-fit shadow-md animate-bounce mb-2">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold">
                <CountUp end={stat.value} trigger={isInView} />{stat.suffix}
              </h3>
              <p className="text-sm font-medium mt-1">{stat.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StatsSection;
