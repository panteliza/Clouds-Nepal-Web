import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const [showServices, setShowServices] = useState(false);

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
    <footer className="w-full text-white bg-[#0f3e24]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">
          {/* About Us */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-sm leading-relaxed text-gray-100">
              Clouds Nepal Web is a leading software and IT solutions company based in Nepal. From websites to mobile apps, digital marketing to cloud integrations — we build what grows your business.
            </p>
          </div>

          {/* Useful Links & Services */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-xl font-bold mb-4">Useful Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-teal-300 transition">About Us</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-teal-300 transition">Our Courses</Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-teal-300 transition">Contact Us</Link>
              </li>
            </ul>

            <button
              onClick={() => setShowServices(!showServices)}
              className="mt-4 flex items-center text-sm text-teal-300 hover:underline"
            >
              {showServices ? 'Hide Services' : 'View All Services'}
              {showServices ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
            </button>

            {showServices && (
              <div className="mt-4">
                <h3 className="text-base font-semibold mb-2">Our Services</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {services.map((s, idx) => (
                    <li key={idx}>
                      <Link to={s.path} className="hover:text-teal-300 transition">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Support */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-xl font-bold mb-4">24/7 Support</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MdEmail className="text-lg" />
                <a href="mailto:webcloudsnepal@gmail.com" className="hover:underline">
                  webcloudsnepal@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+9779762634769" className="flex items-center gap-2 hover:underline">
                  <FaPhoneAlt /> 9762634769
                </a>
              </li>
              <li>
                <a href="tel:+9779769341576" className="flex items-center gap-2 hover:underline">
                  <FaPhoneAlt /> 9769341576
                </a>
              </li>
              <li>
                <a href="tel:+9779769341568" className="flex items-center gap-2 hover:underline">
                  <FaPhoneAlt /> 9769341568
                </a>
              </li>
            </ul>
            <a
              href="https://wa.me/9766896866"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Book An Appointment
            </a>
          </div>
        </div>
      </div>

      <div
        className="text-center py-3 text-sm font-medium"
        style={{
          backgroundImage: "linear-gradient(to right, #0f3d2e, #14532d, #166534, #1e7b3b, #14532d, #0f3d2e)",
        }}
      >
        © {new Date().getFullYear()} <strong>Clouds Nepal Web</strong>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;