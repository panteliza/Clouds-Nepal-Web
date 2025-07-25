import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImage from "../assets/AboutImage.webp";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const AboutCloudsNepal = () => {
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Set document title
    document.title = "About Us | Clouds Nepal Web – Nepal’s Leading Tech Company";

    // Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Learn more about Clouds Nepal Web, Nepal’s top IT company and training provider. Discover our mission, services, and vision for digital Nepal.");
    } else {
      const desc = document.createElement("meta");
      desc.name = "description";
      desc.content = "Learn more about Clouds Nepal Web, Nepal’s top IT company and training provider. Discover our mission, services, and vision for digital Nepal.";
      document.head.appendChild(desc);
    }

    // Canonical Link
    if (!document.querySelector('link[rel="canonical"]')) {
      const canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = "https://www.cloudsnepalweb.com.np/about";
      document.head.appendChild(canonical);
    }

    // Open Graph Title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "About Us | Clouds Nepal Web");
    else {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:title");
      tag.content = "About Us | Clouds Nepal Web";
      document.head.appendChild(tag);
    }

    // Open Graph Description
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "Explore the mission, vision, and team behind Clouds Nepal Web, Nepal’s top-rated IT services and training company.");
    else {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:description");
      tag.content = "Explore the mission, vision, and team behind Clouds Nepal Web, Nepal’s top-rated IT services and training company.";
      document.head.appendChild(tag);
    }

    // Open Graph Image
    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute("content", "https://www.cloudsnepalweb.com.np/og-image.webp");
    else {
      const tag = document.createElement("meta");
      tag.setAttribute("property", "og:image");
      tag.content = "https://www.cloudsnepalweb.com.np/og-image.webp";
      document.head.appendChild(tag);
    }

    // Twitter Tags
    const twitterTitle = document.createElement("meta");
    twitterTitle.name = "twitter:title";
    twitterTitle.content = "About Clouds Nepal Web";
    document.head.appendChild(twitterTitle);

    const twitterDesc = document.createElement("meta");
    twitterDesc.name = "twitter:description";
    twitterDesc.content = "Learn how Clouds Nepal Web is transforming Nepal’s tech space through IT education and digital solutions.";
    document.head.appendChild(twitterDesc);

    const twitterImg = document.createElement("meta");
    twitterImg.name = "twitter:image";
    twitterImg.content = "https://www.cloudsnepalweb.com.np/og-image.webp";
    document.head.appendChild(twitterImg);

    const twitterCard = document.createElement("meta");
    twitterCard.name = "twitter:card";
    twitterCard.content = "summary_large_image";
    document.head.appendChild(twitterCard);
  }, []);

  return (
    <>
      <Navbar />
      {/* Your existing full JSX code here remains untouched */}
      {/* Keep the rest of your AboutCloudsNepal component the same */}
      <Footer />
    </>
  );
};

export default AboutCloudsNepal;
