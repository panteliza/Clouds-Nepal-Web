import React, { useEffect } from "react";
import NavbarMain from "../components/Navbar";
import ServicesComponent from "../components/ServicesComponent";
import Footer from "../components/Footer";

const ServicesCloudPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // ✅ SEO: Title
    document.title = "Services – Clouds Nepal Web | Software, Cloud & Training";

    // ✅ SEO: Meta Description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore our cloud services, software development, app building, CRM/ERP solutions, and IT training. Tailored for Nepal's digital growth."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Explore our cloud services, software development, app building, CRM/ERP solutions, and IT training. Tailored for Nepal's digital growth.";
      document.head.appendChild(meta);
    }

    // ✅ SEO: Canonical URL
    const canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = "https://www.cloudsnepalweb.com.np/services";
      document.head.appendChild(link);
    }

    // ✅ SEO: Robots Meta
    const robotsTag = document.querySelector("meta[name='robots']");
    if (!robotsTag) {
      const meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = "index, follow";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div>
      <NavbarMain />
      <div className="mt-[70px]">
        <ServicesComponent />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesCloudPage;
