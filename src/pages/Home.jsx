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
    window.scrollTo(0, 0);
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
