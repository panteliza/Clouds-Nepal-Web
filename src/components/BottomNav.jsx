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

  const coursesall = [
    { title: "Frontend Development", path: "/frontend-development-course" },
    { title: "Backend Development", path: "/backend-development" },
    { title: "Full Stack Web Development", path: "/fullstack-development" },
    { title: "MEAN Stack", path: "/mean-stack" },
    { title: "Digital Marketing", path: "/digital-marketing" },
    { title: "Python & Django Training", path: "/python-django" },
    { title: "QA Training", path: "/qa-training" },
    { title: "UI/UX Design Training", path: "/uiux-design" },
    { title: "Ethical Hacking Training", path: "/ethical-hacking" },
    { title: "Business Analysis Training", path: "/business-analysis" },
    { title: "Flutter App Development Training", path: "/flutter-training" },
    { title: "React Native App Development Training", path: "/react-native-training" },
    { title: "Python With Artificial Intelligence Training", path: "/python-ai-training" },
    { title: "Data Science With Python Training", path: "/data-science-python" },
    { title: "C & C++ Programming Language Training", path: "/c-cpp-training" },
    { title: "ASP.NET Core Training", path: "/aspnet-core" },
    { title: "React JS Training", path: "/reactjs-training" },
    { title: "Video Editing Training", path: "/video-editing" },
    { title: "AWS Solutions Architecture Training", path: "/aws-training" },
    { title: "Machine Learning With Python Training", path: "/ml-python" },
    { title: "Python Training", path: "/python-training" },
    { title: "DevOps Training", path: "/devops-training" },
    { title: "PHP Training", path: "/php-training" },
    { title: "SEO Basic Training", path: "/seo-basic" },
    { title: "SEO Advanced Training", path: "/seo-advanced" },
    { title: "NodeJs Training", path: "/nodejs-training" },
    { title: "ExpressJs Training", path: "/expressjs-training" },
  ];

  return (
    <>
      {/* Bottom Nav */}
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
        <button onClick={toggleSidebar} className="text-gray-700 flex flex-col items-center text-sm font-medium">
          <FaEllipsisH size={20} />
          <span>More</span>
        </button>
      </nav>

      {/* Sidebar and Overlay */}
      {showSidebar && (
        <>
          <div className="fixed inset-0 bg-white/30 backdrop-blur-sm z-40" onClick={toggleSidebar}></div>
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-[280px] h-full z-50 p-6 overflow-y-auto rounded-l-2xl shadow-2xl bg-gradient-to-br from-green-50 via-white to-green-100 animate-gradient-bg"
          >
            <div className="flex justify-end mb-4">
              <button onClick={toggleSidebar} className="text-gray-600 hover:text-red-600">
                <MdClose size={26} />
              </button>
            </div>

            <motion.div
              className="flex flex-col space-y-5 text-[16px] font-medium text-gray-800"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            >
              <motion.div
                className="space-y-3"
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Link to="/" onClick={toggleSidebar} className="hover:text-green-700 block">🏛️ Home</Link>
                <Link to="/about" onClick={toggleSidebar} className="hover:text-green-700 block">ℹ️ About</Link>
               
                <Link to="/testimonials" onClick={toggleSidebar} className="hover:text-green-700 block">👨‍🎓 / 👩‍🎓 Testimonials</Link>
                <Link to="/vision" onClick={toggleSidebar} className="hover:text-green-700 block">👁️ Our Vision</Link>
                <Link to="/mission" onClick={toggleSidebar} className="hover:text-green-700 block">🎯 Our Mission</Link>
                <Link to="/contact-us" onClick={toggleSidebar} className="hover:text-green-700 block">📩 Contact Us</Link>
                <Link to="/career" onClick={toggleSidebar} className="hover:text-green-700 block">💼 Career</Link>
              </motion.div>

              {/* Services */}
              <motion.div className="pt-5 border-t border-gray-200">
                <h3 className="text-green-700 font-semibold text-sm mb-3">💻 Our Services</h3>
                <div className="space-y-2">
                  {services.map(({ path, label }) => (
                    <motion.div
                      key={path}
                      variants={{
                        hidden: { opacity: 0, x: 30 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link to={path} onClick={toggleSidebar} className="text-[15px] text-gray-700 hover:text-green-700 block">
                        {label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Courses */}
              <motion.div className="pt-5 border-t border-gray-200">
                <h3 className="text-green-700 font-semibold text-sm mb-3">📚 Our Courses</h3>
                <div className="space-y-2">
                  {coursesall.map(({ path, title }) => (
                    <motion.div
                      key={path}
                      variants={{
                        hidden: { opacity: 0, x: 30 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link to={path} onClick={toggleSidebar} className="text-[15px] text-gray-700 hover:text-green-700 block">
                        {title}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default BottomNav;
