import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { motion } from 'framer-motion';
import BottomNav from './BottomNav';

import logo from '../assets/logo.webp';
import img1 from '../assets/LinkedIn.jpg';
import img2 from '../assets/Facebook.jpg';
import img3 from '../assets/Instagram.jpg';

const services = [
  { path: '/website-development', label: 'Website Development' },
  { path: '/app-development', label: 'App Development In Nepal' },
  { path: '/system-software-development', label: 'System/Software Development' },
  { path: '/ui-ux', label: 'UI/UX' },
  { path: '/seo', label: 'Search Engine Optimization (SEO)' },
  { path: '/smm', label: 'Social Media Marketing (SMM)' },
  { path: '/graphic-design', label: 'Graphic Design' },
  { path: '/content-writing', label: 'Content Writing' },
  { path: '/pay-per-click', label: 'Pay Per Click' },
  { path: '/digital-marketing', label: 'Digital Marketing' },
];

const navLinks = [
  { path: '/contact-us', label: 'CONTACT US' },
  { path: '/career', label: 'CAREER' },
];

const NavbarMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <>
      <nav className="w-full bg-white shadow-md sm:px-6 sm:py-3 pr-4 flex justify-between items-center fixed top-0 left-0 z-50 h-[70px] lg:h-[85px] 2xl:h-[90px]">
        <div className="flex items-center pl-4 gap-2 sm:gap-4">
          <a href="/" className="flex items-center">
            <motion.img
              src={logo}
              alt="Clouds Nepal Web Logo"
              className="w-[50px] md:w-[60px] 2xl:w-[65px]"
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
            <motion.span
              className="ml-2 text-[20px] sm:text-[24px] md:text-[26px] font-semibold text-green-800 whitespace-nowrap"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              Clouds Nepal Web
            </motion.span>
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-8 2xl:gap-12 text-lg 2xl:text-2xl">
          <Link to="/" className="text-[#038A58] font-medium hover:text-green-600">HOME</Link>
          <Link to="/about" className="text-gray-700 font-medium hover:text-[#038A58]">ABOUT</Link>
          <Link to="/courses" className="text-gray-700 font-medium hover:text-[#038A58]">COURSES</Link>

          <div className="relative text-gray-700 cursor-pointer font-medium hover:text-[#038A58]" onClick={toggleDropdown}>
            <div className="flex items-center gap-1">
              <span>SERVICES</span>
              {showDropdown ? <AiOutlineUp /> : <AiOutlineDown />}
            </div>
            {showDropdown && (
              <div className="absolute top-12 bg-white p-2 grid grid-cols-1 sm:grid-cols-1 gap-2 z-[1] shadow-lg rounded-lg w-[280px]">
                {services.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className="block bg-gray-100 hover:bg-[#038A58] text-gray-700 text-sm text-center py-2 px-2 rounded-md shadow transition-all"
                    onClick={() => setShowDropdown(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map(({ path, label }) => (
            <Link key={path} to={path} className="text-gray-700 font-medium hover:text-[#038A58] transition-all">
              {label}
            </Link>
          ))}

          <div className="flex gap-1">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={img1} alt="LinkedIn" className="h-[44px] w-[44px] rounded-full border border-green-800 p-[5px] object-contain hover:scale-110 transition duration-300" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={img3} alt="Instagram" className="h-[44px] w-[44px] rounded-full border border-green-800 p-[5px] object-contain hover:scale-110 transition duration-300" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={img2} alt="Facebook" className="h-[44px] w-[44px] rounded-full border border-green-800 p-[5px] object-contain hover:scale-110 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Social Icons for Mobile */}
        <div className="flex gap-2 items-center lg:hidden">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={img1} alt="LinkedIn" className="h-[36px] w-[36px] rounded-full border border-green-800 p-[4px] object-contain hover:scale-110 transition duration-300" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={img3} alt="Instagram" className="h-[36px] w-[36px] rounded-full border border-green-800 p-[4px] object-contain hover:scale-110 transition duration-300" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={img2} alt="Facebook" className="h-[36px] w-[36px] rounded-full border border-green-800 p-[4px] object-contain hover:scale-110 transition duration-300" />
          </a>
        </div>
      </nav>

      {/* Show Bottom Nav on Mobile only */}
      <div className="lg:hidden">
        <BottomNav />
      </div>
    </>
  );
};

export default NavbarMain;
