// VideoEditingTrainingCourse.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavbarMain from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCheckCircle } from "react-icons/fa";
import CourseSearchBar from "../components/CourseSearchBar";
import { allCourses } from "../components/courses";
import CloudsContactForm from "../components/CloudsContactForm";

const faqs = [
  {
    question: "What is video editing training?",
    answer: "This course teaches you how to edit videos using industry-standard software like Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve."
  },
  {
    question: "Do I need any prior experience in video editing?",
    answer: "No, this course is suitable for beginners. We cover everything from the basics to advanced video editing techniques."
  },
  {
    question: "What software will I learn?",
    answer: "You will learn to use Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve, and other tools to enhance your video editing skills."
  },
  {
    question: "Can I create professional-quality videos?",
    answer: "Yes! You'll learn how to create polished, professional-quality videos suitable for various purposes such as YouTube, social media, and corporate videos."
  },
  {
    question: "Is there any job placement assistance?",
    answer: "Yes, we offer career support including portfolio development, resume building, and job placement assistance after completing the course."
  }
];

const VideoEditingTrainingCourse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="pt-[70px]">
        <NavbarMain />
        <CourseSearchBar allCourses={allCourses} />

        {/* Hero Section */}
        <motion.section
          className="pt-[34px] max-w-screen-xl mx-auto px-4 md:px-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-[#044e30] mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Video Editing Training Course
          </motion.h1>

          <div className="flex flex-col lg:flex-row gap-5">
            <motion.div
              className="lg:w-2/3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg leading-relaxed">
                Master the art of video editing with industry-standard tools and techniques. Learn to create professional-quality videos for various platforms such as YouTube, social media, and more.
              </p>
              <p className="mt-4 text-lg">
                This course is ideal for aspiring video editors who want to learn the fundamentals as well as advanced techniques to enhance their video editing skills.
              </p>
            </motion.div>

            <motion.div
              className="lg:w-1/3 bg-white p-5 rounded-xl shadow-md border border-teal-100"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-cyan-100 p-5 rounded-xl shadow-inner w-full">
                <h3 className="text-lg font-bold text-center text-[#044e30] mb-4">
                  Available Seat TIME
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <h4 className="text-sm font-semibold text-[#044e30] mb-2 text-center">
                      PHYSICAL CLASS
                    </h4>
                    <ul className="text-sm text-gray-800 space-y-1 text-center">
                      <li>8:00AM – 9:30AM</li>
                      <li>12:30PM – 2:00PM</li>
                      <li>5:30PM – 7:00PM</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <h4 className="text-sm font-semibold text-[#044e30] mb-2 text-center">
                      ONLINE CLASS
                    </h4>
                    <ul className="text-sm text-gray-800 space-y-1 text-center">
                      <li>9:00AM – 10:30AM</li>
                      <li>2:30PM – 4:00PM</li>
                      <li>7:30PM – 9:00PM</li>
                    </ul>
                  </div>
                </div>

                <p className="text-xs text-center mt-6 font-semibold text-[#044e30]">
                  CREATE STUNNING VIDEOS WITH PROFESSIONAL TOOLS
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Curriculum */}
        <motion.section
          className="max-w-screen-xl mx-auto px-4 md:px-10 mt-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.h2 className="text-2xl font-bold text-[#044e30] mb-6">
            What You Will Learn
          </motion.h2>
          <ul className="space-y-3 list-disc pl-5 text-base">
            {["Introduction to Video Editing", 
              "Editing Techniques with Premiere Pro", 
              "Using Effects & Transitions", 
              "Color Correction and Grading", 
              "Audio Editing and Mixing", 
              "Working with Different Video Formats", 
              "Creating Animations and Motion Graphics", 
              "Exporting and Compressing Videos", 
              "Building a Video Editing Portfolio"].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Benefits */}
        <motion.section
          className="max-w-screen-xl mx-auto px-4 md:px-10 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-[#044e30] mb-6">
            Benefits of Video Editing Training
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[["Master industry-standard editing software", "Hands-on learning with real video projects", "Learn to build a professional video portfolio", "Understand video production workflow"],
              ["Live online and in-person sessions", "Career support including freelancing opportunities", "Learn advanced video editing techniques", "Receive a certificate upon completion"]].map((group, i) => (
              <motion.div
                key={i}
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.3 }}
              >
                {group.map((text, j) => (
                  <p className="flex items-start gap-2" key={j}>
                    <FaCheckCircle className="text-green-700 mt-1" />
                    {text}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="max-w-screen-xl mx-auto px-4 md:px-10 mt-16 pb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-[#044e30] mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3 max-w-2xl mx-auto">
            {faqs.map((faq, idx) => (
              <motion.details
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <summary className="cursor-pointer font-semibold text-gray-800">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </motion.section>
      </div>
      <CloudsContactForm />
      <Footer />
    </>
  );
};

export default VideoEditingTrainingCourse;
