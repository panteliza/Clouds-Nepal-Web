import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaInfoCircle, FaEllipsisH } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const BottomNav = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const services = [
    { path: "/website-development", label: "Website Development" },
    { path: "/app-development", label: "App Development" },
    { path: "/system-software-development", label: "System Software" },
    { path: "/ui-ux", label: "UI/UX Design" },
    { path: "/seo", label: "SEO Optimization" },
    { path: "/smm", label: "Social Media Marketing" },
    { path: "/graphic-design", label: "Graphic Design" },
    { path: "/content-writing", label: "Content Writing" },
    { path: "/pay-per-click", label: "Pay Per Click Ads" },
    { path: "/digital-marketing", label: "Digital Marketing" },
  ];

  return (
    <>
      {/* Bottom Navigation (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md z-40 flex justify-around items-center h-14 lg:hidden">
        <Link to="/" className="text-green-700 flex flex-col items-center text-sm font-medium">
          <FaHome size={20} />
          <span>Home</span>
        </Link>
        <Link to="/courses" className="text-gray-700 flex flex-col items-center text-sm font-medium">
          <FaBook size={20} />
          <span>Courses</span>
        </Link>
        <Link to="/about" className="text-gray-700 flex flex-col items-center text-sm font-medium">
          <FaInfoCircle size={20} />
          <span>About</span>
        </Link>
        <button
          onClick={toggleSidebar}
          className="text-gray-700 flex flex-col items-center text-sm font-medium"
        >
          <FaEllipsisH size={20} />
          <span>More</span>
        </button>
      </nav>

      {/* Sidebar and Overlay */}
      {showSidebar && (
        <>
          {/* Light blur (not dark) */}
          <div
            className="fixed inset-0 bg-white/30 backdrop-blur-sm z-40"
            onClick={toggleSidebar}
          ></div>

          {/* Sidebar Drawer */}
          <div className="fixed top-0 right-0 w-[280px] h-full bg-white z-50 p-6 overflow-y-auto shadow-2xl transition-transform duration-300 ease-in-out translate-x-0 rounded-l-2xl">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={toggleSidebar}
                className="text-gray-600 hover:text-red-600"
              >
                <MdClose size={26} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col space-y-5 text-[16px] font-medium text-gray-800">
              <div className="space-y-3">
                <Link to="/" onClick={toggleSidebar} className="hover:text-green-700 block">🏠 Home</Link>
                <Link to="/about" onClick={toggleSidebar} className="hover:text-green-700 block">ℹ️ About</Link>
                <Link to="/courses" onClick={toggleSidebar} className="hover:text-green-700 block">📘 Courses</Link>
                <Link to="/contact-us" onClick={toggleSidebar} className="hover:text-green-700 block">📩 Contact Us</Link>
                <Link to="/career" onClick={toggleSidebar} className="hover:text-green-700 block">💼 Career</Link>
              </div>

              {/* Services */}
              <div className="pt-5 border-t border-gray-200">
               <h3 className="text-green-700 font-semibold text-sm mb-3">💻 Our Services</h3>

                <div className="space-y-2">
                  {services.map(({ path, label }) => (
                    <Link
                      key={path}
                      to={path}
                      onClick={toggleSidebar}
                      className="text-[15px] text-gray-700 hover:text-green-700 block"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BottomNav;
