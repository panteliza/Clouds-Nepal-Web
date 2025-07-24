import React, { useEffect } from "react";
import Navbar from '../components/Navbar';
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
import  {allCourses }  from "../components/courses";





const Home = () => {
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* Navbar is fixed, so we add a wrapper with padding */}
      <div className="pt-[70px]">
        <Navbar />
      </div>
       <CourseSearchBar allCourses={allCourses} />
        <div className="w-full flex-shrink-0 overflow-hidden">
          <HeroSection/>
          <ServicesComponent/>
          <StatsHighlight/>
             <CoursesLimited/>
             <CloudsContactForm/>
             <Testimonials/>
             <ClientsSlider/>
           <Footer/>
      
     
        
        </div>
    
      {/* Main content section */}
      
    </div>
  );
};

export default Home;