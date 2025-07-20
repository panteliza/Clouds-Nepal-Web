import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Service Images
import webDevImg from "../assets/website.svg";
import appDevImg from "../assets/system-software.svg";
import systemDevImg from "../assets/app development.svg";
import uiuxImg from "../assets/UI_UX.svg";
import seoImg from "../assets/seo.svg";
import smmImg from "../assets/social.svg";
import graphicImg from "../assets/graphic.svg";
import contentImg from "../assets/content-writing.svg";
import ppcImg from "../assets/pay-per-click.svg";
import digImg from "../assets/digital-market.svg";

// Icons
import logoIcon from "../assets/logo.webp";

const services = [
  {
    image: webDevImg,
    flag: logoIcon,
    title: "Website Development",
    description: "Custom websites built for performance and branding.",
    link: "/website-development"
  },
  {
    image: appDevImg,
    flag: logoIcon,
    title: "Application Development",
    description: "Business-centric desktop and web applications.",
    link: "/application-development"
  },
  {
    image: systemDevImg,
    flag: logoIcon,
    title: "Mobile App Development",
    description: "Modern Android & iOS app development solutions.",
    link: "/mobile-app-development"
  },
  {
    image: uiuxImg,
    flag: logoIcon,
    title: "Enterprise Software",
    description: "Scalable software tailored for enterprise operations.",
    link: "/enterprise-software"
  },
  {
    image: webDevImg,
    flag: logoIcon,
    title: "Cloud Services, IT Consulting",
    description: "Consulting, deployment & management of cloud infrastructure.",
    link: "/cloud-it-consulting"
  },
  {
    image: smmImg,
    flag: logoIcon,
    title: "Maintenance & Support",
    description: "Reliable ongoing maintenance and technical support.",
    link: "/maintenance-support"
  },
  {
    image: graphicImg,
    flag: logoIcon,
    title: "CRM, HR & Payroll",
    description: "Simplify your workforce and customer management.",
    link: "/crm-hr-payroll"
  },
  {
    image: contentImg,
    flag: logoIcon,
    title: "Accounting, Billing Software",
    description: "Smart tools for accounting and billing automation.",
    link: "/accounting-billing"
  },
  {
    image: ppcImg,
    flag: logoIcon,
    title: "Invoicing & Payment Software",
    description: "Faster, easier and secure invoicing/payment systems.",
    link: "/invoicing-payment"
  },
  {
    image: digImg,
    flag: logoIcon,
    title: "POS, IMS, ERP Software",
    description: "Retail and enterprise business process automation.",
    link: "/pos-ims-erp"
  },
  {
    image:   seoImg,
    flag: logoIcon,
    title: "SEO, SEM, PPC",
    description: "Boost traffic with advanced digital ad and SEO strategies.",
    link: "/seo-sem-ppc"
  },
  {
    image: appDevImg,
    flag: logoIcon,
    title: "Marketing & Automation",
    description: "Automate your digital campaigns and grow your reach.",
    link: "/marketing-automation"
  }
];

const ServicesComponent = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-100 py-10 px-4 scroll-smooth">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold animate-fadeIn">
          <span className="text-green-600">Our</span>{" "}
          <span className="text-green-700">Services</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2">From development to marketing — we cover it all.</p>
      </div>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <Link
            to={service.link}
            key={index}
            data-index={index}
            className={`service-card relative group sm:py-5 px-5 shadow-md rounded-lg overflow-hidden transition-all duration-700 hover:shadow-xl transform hover:-translate-y-3 bg-white ${
              visibleCards.includes(index.toString()) ? "animate-zoomIn opacity-100" : "opacity-0"
            }`}
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-36 sm:h-48 object-cover rounded"
              />
              <div className="absolute -bottom-5 right-5 bg-white rounded-full p-1 shadow-lg border-4 border-gray-200">
                <img
                  src={service.flag}
                  alt={`${service.title} Icon`}
                  className="w-10 h-10 rounded-full object-contain"
                />
              </div>
            </div>

            {/* Hover/Tap Overlay */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 bg-center bg-cover flex flex-col justify-center items-center text-white p-4 group-hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100`}
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className="flex flex-col items-center space-y-3">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-center">{service.title}</h3>
                <span className="px-4 py-2 bg-white text-green-600 font-semibold rounded-full shadow-md hover:bg-gray-100 text-xs sm:text-sm">
                  Learn more
                </span>
              </div>
            </div>

            {/* Text Section */}
            <div className="pt-6 pb-2 text-center">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes zoomIn {
          0% { transform: scale(0.85); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-zoomIn {
          animation: zoomIn 0.9s ease-out forwards;
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ServicesComponent;
