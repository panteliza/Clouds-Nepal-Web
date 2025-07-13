import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import footerBg from "../assets/footerpic.png"; // Replace with actual image path

const Footer = () => {
  return (
    <footer
      className="w-full text-white"
      style={{
        backgroundColor: "#0f3e24", // Tailwind green-700
        backgroundImage: `linear-gradient(to bottom, rgba(21, 128, 61, 0.6), rgba(21, 128, 61, 0.8)), url(${footerBg})`,
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        paddingBottom: "0px",
      }}
    >
      {/* Content Section */}
      <div className="relative z-10 py-10 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-sm leading-relaxed">
              Clouds Nepal Web is a leading software and IT solutions company based in Nepal,
              dedicated to delivering high-quality, innovative digital services. From custom website and
              app development to UI/UX design, digital marketing, and branding, we empower businesses
              to thrive in the digital age through reliable and scalable technology.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xl font-bold mb-4">Our Services</h2>
            <ul className="space-y-2 text-sm">
              {[
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
              ].map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="hover:text-teal-300 transition">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Helpful Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-teal-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-teal-300 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-teal-300 transition">
                  Our Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">24/7 Support</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <MdEmail className="text-lg" />
                <a href="mailto:cloudsnepalweb@gmail.com" className="hover:underline">
                  cloudsnepalweb@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FaPhoneAlt className="text-lg mt-1" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:+97756420265" className="hover:underline">
                    056-420265
                  </a>
                  <a href="tel:+97756420245" className="hover:underline">
                    056-420245
                  </a>
                </div>
              </li>
            </ul>

            {/* CTA Button */}
            <a
              href="https://wa.me/97756420265"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Book An Appointment
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="w-full text-center py-3 px-4 text-white font-medium"
        style={{
          backgroundImage:
            "linear-gradient(to right, #166534, #22c55e, #4ade80, #86efac, #22c55e, #16a34a)",
        }}
      >
        <p className="text-sm xl:text-md">
          © {new Date().getFullYear()} <strong>Clouds Nepal Web</strong>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
