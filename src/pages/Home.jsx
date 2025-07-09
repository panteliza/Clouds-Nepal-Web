import React, { useEffect } from "react";
import Navbar from '../components/Navbar';
import Courses from "../components/Courses";
import CoursesLimited from "../components/CoursesLimited";






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
        <div className="w-full flex-shrink-0 overflow-hidden">
             <CoursesLimited/>
      
     
        
        </div>
    
      {/* Main content section */}
      
    </div>
  );
};

export default Home;