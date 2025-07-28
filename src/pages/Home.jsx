import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import CoursesComponent from "../components/CoursesComponent";
import CoursesLimited from "../components/CoursesLimited";
import ServicesComponent from "../components/ServicesComponent";
import StatsHighlight from "../components/StatsHighlight";
import CloudsContactForm from "../components/CloudsContactForm";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ClientsSlider from "../components/ClientsSlider";
import CourseSearchBar from "../components/CourseSearchBar";
import { allCourses } from "../components/courses";
import InternshipApply from "../components/InternshipApply";

const Home = () => {
  useEffect(() => {
    // ✅ Scroll to top on page load
    window.scrollTo(0, 0);

    // ✅ SEO Optimization
    document.title =
      "Clouds Nepal Web – IT Training, Cloud Services & Software Company in Nepal";

    // ✅ Meta Description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Clouds Nepal Web is a top IT training institute and software company in Nepal. We provide full-stack development, cloud computing, DevOps, Python, React, and job-ready courses along with cloud and software solutions."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Clouds Nepal Web is a top IT training institute and software company in Nepal. We provide full-stack development, cloud computing, DevOps, Python, React, and job-ready courses along with cloud and software solutions.";
      document.head.appendChild(meta);
    }

    // ✅ Canonical Tag
    const canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = "https://www.cloudsnepalweb.com.np/";
      document.head.appendChild(link);
    }

    // ✅ Robots Tag
    const robots = document.querySelector("meta[name='robots']");
    if (!robots) {
      const meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = "index, follow";
      document.head.appendChild(meta);
    }

    // ✅ Keywords Tag
    const keywords = document.querySelector("meta[name='keywords']");
    if (!keywords) {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content =
        "Clouds Nepal Web, IT Training in Nepal, Software Company Nepal, Cloud Services Nepal, Full Stack Development Nepal, React Training Nepal, DevOps Nepal, MERN Stack Nepal, Best IT Courses Nepal";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div>
      {/* Fixed Navbar */}
      <div className="pt-[70px]">
        <Navbar />
      </div>

      {/* Course Search Bar */}
      <CourseSearchBar allCourses={allCourses} />

      {/* Homepage Content */}
      <div className="w-full flex-shrink-0 overflow-hidden">
        <HeroSection />
        <ServicesComponent />
        <StatsHighlight />
        <CoursesLimited />
        <CloudsContactForm />
        <Testimonials />
        <InternshipApply />
        <ClientsSlider />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
