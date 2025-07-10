import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Service Images
import webDevImg from "../assets/website.svg";
import appDevImg from "../assets/app development.svg";
import systemDevImg from "../assets/system-software.svg";
import uiuxImg from "../assets/UI_UX.svg";
import seoImg from "../assets/seo.svg";
import smmImg from "../assets/social.svg";
import graphicImg from "../assets/graphic.svg";
import contentImg from "../assets/content-writing.svg";
import ppcImg from "../assets/pay-per-click.svg";
import digImg from "../assets/digital-market.svg";

// Icons (can be replaced with actual icons per service)
import webIcon from "../assets/logo.webp";
import appIcon from "../assets/logo.webp";
import systemIcon from "../assets/logo.webp";
import uiuxIcon from "../assets/logo.webp";
import seoIcon from "../assets/logo.webp";
import smmIcon from "../assets/logo.webp";
import graphicIcon from "../assets/logo.webp";
import contentIcon from "../assets/logo.webp";
import ppcIcon from "../assets/logo.webp";
import digIcon from "../assets/logo.webp";

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

  const services = [
    { image: webDevImg, flag: webIcon, title: "Website Development", description: "Specialized Custom Website Development Services", link: "/website-development" },
    { image: appDevImg, flag: appIcon, title: "App Development In Nepal", description: "Building Custom Apps for Seamless User Experience", link: "/app-development" },
    { image: systemDevImg, flag: systemIcon, title: "System/Software Development", description: "Cutting-edge System/Software Development Solutions", link: "/system-development" },
    { image: uiuxImg, flag: uiuxIcon, title: "UI/UX", description: "Design UI/UX interfaces for effortless user interaction", link: "/ui-ux" },
    { image: seoImg, flag: seoIcon, title: "Search Engine Optimization (SEO)", description: "Enhance Search Engine Ranking with Effective SEO", link: "/seo" },
    { image: smmImg, flag: smmIcon, title: "Social Media Marketing (SMM)", description: "Boost online presence, engage audience", link: "/smm" },
    { image: graphicImg, flag: graphicIcon, title: "Graphic Design", description: "Bringing Ideas to Visual Life", link: "/graphic-design" },
    { image: contentImg, flag: contentIcon, title: "Content Writing", description: "Creating Content that Resonates", link: "/content-writing" },
    { image: ppcImg, flag: ppcIcon, title: "Pay Per Click (PPC)", description: "Optimized Pay-Per-Click Campaigns", link: "/ppc" },
    { image: digImg, flag: digIcon, title: "Digital Marketing", description: "Designing Digital Paths That Echo with Audiences", link: "/digital-marketing" },
  ];

  return (
    <div className="bg-gray-100 py-10 px-4 scroll-smooth">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold animate-fadeIn">
          <span className="text-green-600">Our</span>{" "}
          <span className="text-green-700">Services</span>
        </h2>
        <p className="text-gray-600 mt-2">From development to marketing — we cover it all.</p>
      </div>

      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <Link to={service.link} key={index}>
            <div
              data-index={index}
              className={`service-card relative group py-5 px-5 bg-white shadow-md rounded-lg overflow-hidden transition-all duration-700 hover:shadow-xl transform hover:-translate-y-3 cursor-pointer ${
                visibleCards.includes(index.toString()) ? "animate-zoomIn opacity-100" : "opacity-0"
              }`}
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded"
                />
                <div className="absolute -bottom-5 right-5 bg-white rounded-full p-1 shadow-lg border-4 border-gray-200">
                  <img
                    src={service.flag}
                    alt={`${service.title} Icon`}
                    className="w-10 h-10 rounded-full object-contain"
                  />
                </div>
              </div>

              {/* Responsive Overlay Section */}
              <div
                className="absolute inset-0 transition-opacity duration-500 bg-center bg-cover flex flex-col justify-center items-center text-white p-4
                sm:opacity-0 sm:group-hover:opacity-100 opacity-100"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundBlendMode: "overlay",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                <h3 className="text-xl font-bold text-center">{service.title}</h3>
                <span className="mt-4 px-4 py-2 bg-white text-green-600 font-semibold rounded-full shadow-md hover:bg-gray-100 text-sm">
                  Learn more
                </span>
              </div>

              {/* Text Section */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
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
