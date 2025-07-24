import React, { useState } from "react";
import { motion } from "framer-motion";
import NavbarMain from "../components/Navbar";
import Footer from "../components/Footer";
import { FaSearch } from "react-icons/fa";

// ✅ Images
import img1 from "../assets/Ansha Basnet.png";
import img2 from "../assets/Anmol Kayastha.png";
import img3 from "../assets/Bipin Sainju Shrestha.jpg";
import img4 from "../assets/Aman Shrestha.jpg";
import img5 from "../assets/Barsha Shrestha.jpg";
import img6 from "../assets/Aryan Gurung.jpg";
import img7 from "../assets/Bhupendra Paneru.jpg";
import img8 from "../assets/Rejita Sharma.png";
import img9 from "../assets/Pradip Rana.png";
import img10 from "../assets/Suraj Rai.png";
import img11 from "../assets/Dharamkaji Shrestha.png";
import img12 from "../assets/Sanjay Chaudhary.jpg";
import img13 from "../assets/Roshan Thapa.jpg";
import img14 from "../assets/Sneha Chaudhary.jpg";
import img15 from "../assets/Gokarna Pandey.jpg";
import img16 from "../assets/Dipjung Gurung.jpg";
import img17 from "../assets/Chetan Rajbansi.jpg";
import img18 from "../assets/Nitesh Acharya.jpg";
import img19 from "../assets/Suman Basnet.jpg";

const testimonials = [
  {
    name: "Ansha Basnet",
    course: "DevOps",
    image: img1,
    text: `Clouds Nepal Web provided one of the most effective DevOps training programs I’ve attended. The structure, mentorship, and practical labs were truly exceptional. I felt supported every step of the way, from basics to CI/CD pipelines.`,
  },
  {
    name: "Anmol Kayastha",
    course: "Python with Data Science",
    image: img2,
    text: `The training blended strong theoretical foundation with hands-on projects. From data wrangling to ML models, everything was clear and career-oriented. I feel confident applying for jobs in this field.`,
  },
  {
    name: "Bipin Sainju Shrestha",
    course: "Web Development",
    image: img3,
    text: `The full-stack web development course helped me go from absolute beginner to deploying my own apps. I loved the mentorship, peer support, and code reviews.`,
  },
  {
    name: "Aman Shrestha",
    course: "UI/UX Design",
    image: img4,
    text: `Practical design skills, Figma workflows, and user research techniques made the training truly rewarding. I now freelance and work confidently with developers.`,
  },
  {
    name: "Barsha Shrestha",
    course: "Machine Learning",
    image: img5,
    text: `ML training built my fundamentals with clear examples. Instructors provided real-time coding support and plenty of practical assignments.`,
  },
  {
    name: "Aryan Gurung",
    course: "Flutter App Dev",
    image: img6,
    text: `From UI to Firebase, I learned every aspect of Flutter development. Published my first Play Store app during training. Absolutely worth it!`,
  },
  {
    name: "Bhupendra Paneru",
    course: "Backend with Node.js",
    image: img7,
    text: `The Node.js backend bootcamp was intense and rewarding. REST APIs, MongoDB, authentication — all covered in-depth with projects.`,
  },
  {
    name: "Rejita Sharma",
    course: "QA Training",
    image: img8,
    text: `I had zero background in IT, but QA training made it easy to learn testing tools and methodologies. Highly recommended!`,
  },
  {
    name: "Pradip Rana",
    course: "Full Stack Dev",
    image: img9,
    text: `Clouds Nepal Web is the best place to learn full stack skills. Friendly mentors, good batch sizes, and live deployment sessions.`,
  },
  {
    name: "Suraj Rai",
    course: "ReactJS",
    image: img10,
    text: `React course here was interactive and focused on real projects. I understood components, hooks, routing, and API handling with ease.`,
  },
  {
    name: "Dharamkaji Shrestha",
    course: "Python with AI",
    image: img11,
    text: `Loved the structure — Python basics to advanced AI concepts, all explained clearly. Great for building a portfolio.`,
  },
  {
    name: "Sanjay Chaudhary",
    course: "Digital Marketing",
    image: img12,
    text: `The digital marketing course helped me land freelance gigs. SEO, PPC, and analytics are taught with Nepali business case studies.`,
  },
  {
    name: "Roshan Thapa",
    course: "C/C++ Programming",
    image: img13,
    text: `C/C++ concepts were taught from scratch. Perfect for engineering students or anyone preparing for software fundamentals.`,
  },
  {
    name: "Sneha Chaudhary",
    course: "UI/UX Design",
    image: img14,
    text: `Loved the portfolio development support. Regular feedback and live design challenges made me confident as a designer.`,
  },
  {
    name: "Gokarna Pandey",
    course: "ASP.NET MVC",
    image: img15,
    text: `Hands-on training on MVC architecture and SQL integration helped me secure a junior developer position in a local company.`,
  },
  {
    name: "Dipjung Gurung",
    course: "QA Manual & Automation",
    image: img16,
    text: `Instructors were highly experienced. Manual and Selenium automation practices were included with real company test cases.`,
  },
  {
    name: "Chetan Rajbansi",
    course: "React Native App Dev",
    image: img17,
    text: `Learned to build cross-platform apps in 2 months. Firebase, navigation, animations — all covered with live mentorship.`,
  },
  {
    name: "Nitesh Acharya",
    course: "Data Science with Python",
    image: img18,
    text: `Data preprocessing, model building, evaluation — explained clearly with projects. I now tutor others thanks to this training.`,
  },
  {
    name: "Suman Basnet",
    course: "AWS & Cloud Infrastructure",
    image: img19,
    text: `Built cloud computing skills with AWS labs. EC2, S3, Lambda, IAM — all practiced during sessions. Very helpful for my IT career.`,
  },
];

const StudentTestimonials = () => {
  const [filter, setFilter] = useState("");
  const filtered = testimonials.filter((t) =>
    t.course.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="relative bg-gradient-to-br from-[#e6f4ec] via-[#f3fdf8] to-[#e6f4ec] overflow-hidden min-h-screen">
      <NavbarMain />

      {/* Background animation */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute w-[400px] h-[400px] bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse left-[-100px] top-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse right-[-120px] bottom-[-100px]" />
      </motion.div>

      <section className="relative z-10 py-24 px-4 max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center text-[#14452F] mb-10"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Hear From Our Students
        </motion.h2>

        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center w-full max-w-md bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-md focus-within:ring-2 ring-green-400">
            <FaSearch className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search testimonials by course..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full text-sm sm:text-base text-gray-700 placeholder-gray-400 outline-none bg-transparent"
            />
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filtered.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all backdrop-blur-md bg-opacity-80"
              whileHover={{ y: -5, scale: 1.02 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="text-4xl text-[#06693A] font-serif mb-3 leading-none">“</p>
              <p className="text-[15px] text-gray-700 mb-5 italic">{t.text}</p>
              <div className="flex items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm mr-4"
                />
                <div>
                  <h4 className="font-semibold text-[#14452F] leading-tight">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.course}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentTestimonials;
