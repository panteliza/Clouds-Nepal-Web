import React, { useState, useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import mapImage from "../assets/map.png"; // Replace with your own map image

const courseOptions = [
  "ASP.NET", "AWS", "Backend Development", "Business Analysis", "C/C++", "Data Science",
  "DevOps", "Digital Marketing", "Ethical Hacking", "ExpressJS", "Flutter",
  "Frontend Development", "Full Stack Development", "Graphics Design", "Machine Learning (Python)",
  "MEAN Stack", "NodeJS", "PHP", "Python Basic", "Python with AI",
  "Python with Django", "Quality Assurance (QA)", "React Native", "ReactJS", "SEO Advanced",
  "SEO Basic", "UI/UX Design", "Video Editing"
];


const CloudsContactForm = () => {
  const [messageSent, setMessageSent] = useState(false);
  const refs = [useRef(), useRef(), useRef()];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.style.opacity = entry.isIntersecting ? "1" : "0";
          entry.target.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
        });
      },
      { threshold: 0.1 }
    );

    refs.forEach(ref => ref.current && observer.observe(ref.current));
    return () => refs.forEach(ref => ref.current && observer.unobserve(ref.current));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const subject = "Clouds Nepal Web Course Inquiry";
    const body = `
      Name: ${encodeURIComponent(data.name)}
      %0AAge: ${encodeURIComponent(data.age)}
      %0APermanent Address: ${encodeURIComponent(data.permanent)}
      %0ATemporary Address: ${encodeURIComponent(data.temporary)}
      %0APhone: ${encodeURIComponent(data.phone)}
      %0AEmail: ${encodeURIComponent(data.email)}
      %0AQualification: ${encodeURIComponent(data.qualification)}
      %0ACourse: ${encodeURIComponent(data.course)}
      %0AMessage: ${encodeURIComponent(data.message)}
    `;

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=webcloudsnepal@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`;
    window.open(gmailLink, "_blank");
    setMessageSent(true);
  };

  const inputStyle = "w-full p-3 rounded border border-gray-300 hover:shadow-md transition";

  const cardBase =
    "flex flex-col items-center p-6 bg-white shadow-xl rounded-lg transform opacity-0 transition-opacity duration-700 w-full hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300";

  return (
    <div className="w-full bg-gradient-to-b from-[#eef4f8] to-[#ffffff] py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Form Section */}
        <div className="bg-white p-8 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Enroll Now</h2>
          {messageSent ? (
            <p className="text-green-700 font-semibold text-center">Submitted successfully! Please check your Gmail.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Grid Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Your Name" required className={inputStyle} />
                <input type="number" name="age" placeholder="Age" required className={inputStyle} />
                <input type="text" name="permanent" placeholder="Permanent Address" required className={inputStyle} />
                <input type="text" name="temporary" placeholder="Temporary Address" required className={inputStyle} />
                <input type="tel" name="phone" placeholder="Phone Number" required className={inputStyle} />
                <input type="email" name="email" placeholder="Email" required className={inputStyle} />
                <input type="text" name="qualification" placeholder="Qualification" required className={inputStyle} />
              </div>

              {/* Course - Full Width */}
              <select name="course" required className={inputStyle}>
                <option value="">-- Select a Course --</option>
                {courseOptions.map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </select>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Write your message..."
                rows="4"
                required
                className={inputStyle}
              />

              <button type="submit" className="w-full bg-blue-800 text-white py-2 font-semibold rounded hover:bg-blue-900 transition">
                Submit
              </button>
            </form>
          )}
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-6 justify-center items-center">
          <a
            href="https://www.google.com/maps/place/Clouds+Nepal+Web/@27.7026219,85.2856552,14z/data=!4m10!1m2!2m1!1sclouds+nepal+web!3m6!1s0x39eb1921c7255c99:0x6ccea7cf28cfbfce!8m2!3d27.7026219!4d85.3217041!15sChBjbG91ZHMgbmVwYWwgd2VikgEQc29mdHdhcmVfY29tcGFueaoBORABMh8QASIbWnUaihpCWsZ6PG0LXuWV1CKeJTC7zICFwVvWMhQQAiIQY2xvdWRzIG5lcGFsIHdlYuABAA!16s%2Fg%2F11svzpr6j_?entry=ttu&g_ep=EgoyMDI1MDcwOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full overflow-hidden rounded-xl shadow-2xl transform hover:scale-[1.02] transition"
          >
            <img
              src={mapImage}
              alt="Clouds Nepal Web Map"
              className="w-full h-[250px] md:h-[300px] object-contain"
            />
          </a>

          <div ref={refs[0]} className={cardBase} style={{ animation: "fadeInLeft 1.2s ease-out forwards", animationPlayState: "paused" }}>
            <FaMapMarkerAlt className="text-blue-900 text-3xl mb-3 shiver-icon" />
            <h3 className="font-bold text-lg text-gray-800">Location</h3>
            <p className="text-center text-gray-700">Kathmandu, Nepal</p>
          </div>

          <div ref={refs[1]} className={cardBase} style={{ animation: "fadeInRight 1.2s ease-out forwards", animationPlayState: "paused" }}>
            <FaPhoneAlt className="text-blue-900 text-3xl mb-3 shiver-icon" />
            <h3 className="font-bold text-lg text-gray-800">Phone</h3>
            <a href="tel:+9779812345678" className="text-gray-700 block">+977-9812345678</a>
          </div>

          <div ref={refs[2]} className={cardBase} style={{ animation: "fadeInLeft 1.2s ease-out forwards", animationPlayState: "paused" }}>
            <FaEnvelope className="text-blue-900 text-3xl mb-3 shiver-icon" />
            <h3 className="font-bold text-lg text-gray-800">Email</h3>
            <a href="mailto:cloudsnepalweb@gmail.com" className="text-gray-700">cloudsnepalweb@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes shiver {
          0% { transform: translate(0, 0) rotate(0); }
          25% { transform: translate(-2px, 2px) rotate(-1deg); }
          50% { transform: translate(2px, -2px) rotate(1deg); }
          75% { transform: translate(-2px, -2px) rotate(-1deg); }
          100% { transform: translate(0, 0) rotate(0); }
        }
        .shiver-icon {
          animation: shiver 1.2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default CloudsContactForm;
