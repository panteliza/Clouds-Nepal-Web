import { useEffect } from 'react';
import NavbarMain from '../components/Navbar';
import CourseSearchBar from '../components/CourseSearchBar';
import { allCourses } from "../components/courses";
import CoursesComponent from '../components/CoursesComponent';
import Footer from '../components/Footer';

const CoursesPage = () => {
  useEffect(() => {
    document.title = "Courses | Clouds Nepal Web – IT Training Programs in Nepal";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore top IT courses in Nepal including frontend, backend, full stack, data science, QA, and more. Enroll today with Clouds Nepal Web.");
    } else {
      const desc = document.createElement("meta");
      desc.name = "description";
      desc.content = "Explore top IT courses in Nepal including frontend, backend, full stack, data science, QA, and more. Enroll today with Clouds Nepal Web.";
      document.head.appendChild(desc);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Courses | Clouds Nepal Web");
    else {
      const og = document.createElement("meta");
      og.setAttribute("property", "og:title");
      og.content = "Courses | Clouds Nepal Web";
      document.head.appendChild(og);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", "Browse expert-led IT training courses in Nepal at Clouds Nepal Web.");
    else {
      const og = document.createElement("meta");
      og.setAttribute("property", "og:description");
      og.content = "Browse expert-led IT training courses in Nepal at Clouds Nepal Web.";
      document.head.appendChild(og);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute("content", "https://www.cloudsnepalweb.com.np/og-image.webp");
    else {
      const og = document.createElement("meta");
      og.setAttribute("property", "og:image");
      og.content = "https://www.cloudsnepalweb.com.np/og-image.webp";
      document.head.appendChild(og);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = "https://www.cloudsnepalweb.com.np/courses";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="pt-[70px]">
      <NavbarMain />
      <CourseSearchBar allCourses={allCourses} />
      <CoursesComponent />
      <Footer />
    </div>
  );
};

export default CoursesPage;
