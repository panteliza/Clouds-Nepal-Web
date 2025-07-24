import React, { useEffect } from "react";
import NavbarMain from "../components/Navbar";
import ServicesComponent from "../components/ServicesComponent";
import Footer from "../components/Footer";


const ServicesCloudPage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <div>
      <NavbarMain/>
      <div className="mt-[70px]"> <ServicesComponent/></div>
     
      <Footer/>

    </div>
  )
}

export default ServicesCloudPage