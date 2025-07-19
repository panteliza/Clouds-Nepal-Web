import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaInfoCircle, FaEllipsisH } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

const BottomNav = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const services = [
     { path: '/website-development', label: 'Website Development' },
    { path: '/application-development', label: 'Application Development' },
    { path: '/mobile-app-development', label: 'Mobile App Development' },
    { path: '/enterprise-software', label: 'Enterprise Software' },
    { path: '/cloud-it-consulting', label: 'Cloud Services, IT Consulting' },
    { path: '/maintenance-support', label: 'Maintenance & Support' },
    { path: '/crm-hr-payroll', label: 'CRM, HR & Payroll' },
    { path: '/accounting-billing', label: 'Accounting, Billing Software' },
    { path: '/invoicing-payment', label: 'Invoicing & Payment Software' },
    { path: '/pos-ims-erp', label: 'POS, IMS, ERP Software' },
    { path: '/seo-sem-ppc', label: 'SEO, SEM, PPC' },
    { path: '/marketing-automation', label: 'Marketing & Automation' },
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

      {/* Sidebar + Overlay */}
      {showSidebar && (
        <>
          {/* Light Blur Overlay */}
          <div
            className="fixed inset-0 bg-white/30 backdrop-blur-sm z-40"
            onClick={toggleSidebar}
          ></div>

          {/* Framer Motion Sidebar */}
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-[280px] h-full z-50 p-6 overflow-y-auto rounded-l-2xl shadow-2xl bg-gradient-to-br from-green-50 via-white to-green-100 animate-gradient-bg"
          >
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
                <Link to="/" onClick={toggleSidebar} className="hover:text-green-700 block">🏛️ Home</Link>
                <Link to="/about" onClick={toggleSidebar} className="hover:text-green-700 block">ℹ️ About</Link>
                <Link to="/courses" onClick={toggleSidebar} className="hover:text-green-700 block">📘 Courses</Link>
                <Link to="/testimonials" onClick={toggleSidebar} className="hover:text-green-700 block">
  👨‍🎓 / 👩‍🎓 Students' Testimonial
</Link>

<Link to="/vision" onClick={toggleSidebar} className="hover:text-green-700 block">
  👁️ Our Vision
</Link>

<Link to="/mission" onClick={toggleSidebar} className="hover:text-green-700 block">
  🎯 Our Mission
</Link>

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
          </motion.div>
        </>
      )}
    </>
  );
};

export default BottomNav;
