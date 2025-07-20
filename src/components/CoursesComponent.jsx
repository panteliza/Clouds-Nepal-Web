import React from "react";
import { motion } from "framer-motion";

// 📌 Replace these with actual image paths
import img1 from "../assets/frontend.webp";
import img2 from "../assets/backend.webp";
import img3 from "../assets/fullstack.webp";
import img4 from "../assets/mean.webp";
import img5 from "../assets/digital-marketing.webp";

import img7 from "../assets/python-django.webp";
import img8 from "../assets/qa.webp";
import img9 from "../assets/uiux.webp";
import img10 from "../assets/ethical-hacking.webp";
import img11 from "../assets/business-analysis.webp";
import img12 from "../assets/flutter.webp";
import img13 from "../assets/react-native.webp";
import img14 from "../assets/python-ai.webp";
import img15 from "../assets/data-science.webp";
import img16 from "../assets/c-cpp.webp";
import img17 from "../assets/aspnet.webp";
import img18 from "../assets/reactjs.webp";
import img19 from "../assets/video-editing.webp";
import img20 from "../assets/aws.webp";
import img21 from "../assets/ml-python.webp";
import img22 from "../assets/python-basic.webp";
import img23 from "../assets/devops.webp";
import img24 from "../assets/php.webp";
import img25 from "../assets/seo-basic.webp";
import img26 from "../assets/seo-advanced.webp";
import img27 from "../assets/nodejs.webp";
import img28 from "../assets/express.webp";

const courses = [
  {
    image: img1,
    title: "Frontend Development",
    path: "/frontend-development",
    points: [
      "HTML, CSS, and JavaScript Basics",
      "Responsive Web Design",
      "JavaScript Frameworks (React, Vue, Angular)",
    ],
  },
  {
    image: img2,
    title: "Backend Development",
    path: "/backend-development",
    points: [
      "MongoDB Basics and Data Modeling",
      "Building RESTful APIs with Express.js",
      "Node.js and Asynchronous Programming",
    ],
  },
  {
    image: img3,
    title: "Full Stack Web Development",
    path: "/fullstack-development",
    points: [
      "Frontend Development with HTML, CSS",
      "Backend Development with Node.js, Express.js",
      "Building RESTful APIs and Integration",
    ],
  },
  {
    image: img4,
    title: "MEAN Stack",
    path: "/mean-stack",
    points: [
      "Frontend Development with HTML, CSS",
      "Backend Development with Node.js, Express.js",
      "Building RESTful APIs and Integrating with Angular",
    ],
  },
  {
    image: img5,
    title: "Digital Marketing",
    path: "/digital-marketing",
    points: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Advertising",
      "Social Media Marketing (SMM)",
    ],
  },
  
  {
    image: img7,
    title: "Python & Django Training",
    path: "/python-django",
    points: [
      "Python Basics and Advanced Concepts",
      "Object-Oriented Programming (OOP) in Python",
      "Python Libraries and Frameworks",
    ],
  },
  {
    image: img8,
    title: "QA Training",
    path: "/qa-training",
    points: [
      "Introduction to Software Testing",
      "Manual Testing Concepts and Techniques",
      "Test Case Design and Execution",
    ],
  },
  {
    image: img9,
    title: "UI/UX Design Training",
    path: "/uiux-design",
    points: [
      "Introduction to UI/UX Design",
      "Design Principles and Fundamentals",
      "User Research and Persona Creation",
    ],
  },
  {
    image: img10,
    title: "Ethical Hacking Training",
    path: "/ethical-hacking",
    points: [
      "Introduction to Ethical Hacking",
      "Networking Fundamentals for Hackers",
      "Linux Basics for Ethical Hacking",
    ],
  },
  {
    image: img11,
    title: "Business Analysis Training",
    path: "/business-analysis",
    points: [
      "Introduction to Business Analysis",
      "Role of a Business Analyst",
      "Business Analysis Planning and Monitoring",
    ],
  },
  {
    image: img12,
    title: "Flutter App Development Training",
    path: "/flutter-training",
    points: [
      "Introduction to Flutter and Dart",
      "Setting Up Flutter Development Environment",
      "Flutter Widgets: Basics and Advanced",
    ],
  },
  {
    image: img13,
    title: "React Native App Development Training",
    path: "/react-native-training",
    points: [
      "Introduction to React Native and JavaScript Basics",
      "Setting Up React Native Development",
      "React Native Components and Styling",
    ],
  },
  {
    image: img14,
    title: "Python With Artificial Intelligence Training",
    path: "/python-ai-training",
    points: [
      "Introduction to Python Programming",
      "Python Basics: Variables, Data Types, and Logic",
      "Control Structures: Loops and Conditionals",
    ],
  },
  {
    image: img15,
    title: "Data Science With Python Training",
    path: "/data-science-python",
    points: [
      "Introduction to Data Science and Python",
      "Python Basics: Variables, Data Types, and Logic",
      "Control Structures: Loops and Conditionals",
    ],
  },
   {
    image: img16,
    title: "C & C++ Programming Language Training",
    path: "/c-cpp-training",
    points: [
      "Introduction to Programming and C Language",
      "C Basics: Variables, Data Types, and Operators",
      "Control Structures: Loops and Conditionals",
    ],
  },
  {
    image: img17,
    title: "ASP.NET Core Training",
    path: "/aspnet-core",
    points: [
      "Introduction to ASP.NET Core",
      "Setting Up the Development Environment",
      "Understanding the ASP.NET Core Architecture",
    ],
  },
  {
    image: img18,
    title: "React JS Training",
    path: "/reactjs-training",
    points: [
      "Introduction to React JS and JavaScript Basics",
      "Setting Up the React Development Environment",
      "Understanding JSX and React Components",
    ],
  },
  {
    image: img19,
    title: "Video Editing Training",
    path: "/video-editing",
    points: [
      "Introduction to Video Editing and Tools",
      "Understanding Video Formats and Resolutions",
      "Getting Started with Video Editing Software (e.g., Adobe Premiere Pro)",
    ],
  },
  {
    image: img20,
    title: "AWS Solutions Architecture Training",
    path: "/aws-training",
    points: [
      "Introduction to Cloud Computing and AWS",
      "AWS Global Infrastructure: Regions, Availability Zones",
      "AWS Core Services: EC2, S3, VPC, and IAM",
    ],
  },
  {
    image: img21,
    title: "Machine Learning With Python Training",
    path: "/ml-python",
    points: [
      "Introduction to Machine Learning and Python",
      "Python Basics for Machine Learning",
      "Data Preprocessing and Cleaning",
    ],
  },
  {
    image: img22,
    title: "Python Training",
    path: "/python-training",
    points: [
      "Introduction to Python and Its Applications",
      "Python Basics: Variables, Data Types, and Logic",
      "Control Structures: Loops and Conditionals",
    ],
  },
  {
    image: img23,
    title: "DevOps Training",
    path: "/devops-training",
    points: [
      "Introduction to DevOps and Its Principles",
      "Understanding the DevOps Lifecycle",
      "Version Control with Git and GitHub",
    ],
  },
  {
    image: img24,
    title: "PHP Training",
    path: "/php-training",
    points: [
      "Introduction to PHP and Its Ecosystem",
      "Setting Up PHP Development Environment",
      "PHP Syntax and Basics",
    ],
  },
  {
    image: img25,
    title: "SEO Basic Training",
    path: "/seo-basic",
    points: [
      "Introduction to SEO and Its Importance",
      "How Search Engines Work",
      "Keyword Research and Analysis",
    ],
  },
  {
    image: img26,
    title: "SEO Advanced Training",
    path: "/seo-advanced",
    points: [
      "Advanced Keyword Research and Semantic SEO",
      "Content Clustering and Topic Modeling",
      "Advanced On-Page SEO: Structured Data and Technical Optimization",
    ],
  },
  {
    image: img27,
    title: "NodeJs Training",
    path: "/nodejs-training",
    points: [
      "Introduction to Node.js and Its Ecosystem",
      "Setting Up Node.js Development Environment",
      "Node.js Basics: Modules, NPM, and Package Management",
    ],
  },
  {
    image: img28,
    title: "ExpressJs Training",
    path: "/expressjs-training",
    points: [
      "Introduction to Express.js and Its Ecosystem",
      "Setting Up an Express.js Development Environment",
      "Express.js Basics: Routing and Middleware",
    ],
  },
];

const CoursesComponent
 = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-green-700 via-green-600 to-green-800 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Explore Our Professional IT Courses
      </motion.h2>

      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
        Gain in-demand skills with our expertly crafted courses led by industry professionals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
            <div className="p-5 flex-1">
              <h3 className="text-lg font-bold text-green-700 mb-2">{course.title}</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {course.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="p-4 flex justify-center">
              <a
                href={course.path}
                className="px-6 py-2 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 transition"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesComponent;