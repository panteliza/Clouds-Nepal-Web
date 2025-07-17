import React, { useState, useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

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
    <div className="relative w-full bg-white py-12 px-4 overflow-hidden">
      {/* Top Wave */}
      <svg className="w-full h-32 absolute top-0 left-0 animate-waveUp" viewBox="0 0 1440 320">
        <path
          fill="#22c55e"
          fillOpacity="0.5"
          d="M0,64L40,80C80,96,160,128,240,144C320,160,400,160,480,144C560,128,640,96,720,101.3C800,107,880,149,960,170.7C1040,192,1120,192,1200,181.3C1280,171,1360,149,1400,138.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        />
      </svg>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {/* Form Section */}
        <div className="bg-white p-8 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Enroll Now</h2>
          {messageSent ? (
            <p className="text-green-700 font-semibold text-center">Submitted successfully! Please check your Gmail.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Your Name" required className={inputStyle} />
                <input type="number" name="age" placeholder="Age" required className={inputStyle} />
                <input type="text" name="permanent" placeholder="Permanent Address" required className={inputStyle} />
                <input type="text" name="temporary" placeholder="Temporary Address" required className={inputStyle} />
                <input type="tel" name="phone" placeholder="Phone Number" required className={inputStyle} />
                <input type="email" name="email" placeholder="Email" required className={inputStyle} />
                <input type="text" name="qualification" placeholder="Qualification" required className={inputStyle} />
              </div>

              <select name="course" required className={inputStyle}>
                <option value="">-- Select a Course --</option>
                {courseOptions.map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </select>

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

        {/* Info Cards */}
        <div className="flex flex-col gap-6 justify-center items-center">
          <div ref={refs[0]} className={cardBase} style={{ animation: "fadeInLeft 1.2s ease-out forwards" }}>
            <FaMapMarkerAlt className="text-blue-900 text-3xl mb-3 shiver-icon" />
            <h3 className="font-bold text-lg text-gray-800">Location</h3>
            <p className="text-center text-gray-700">Tinkune, Kathmandu, Nepal</p>
          </div>

         <div ref={refs[1]} className={cardBase} style={{ animation: "fadeInRight 1.2s ease-out forwards" }}>
  <FaPhoneAlt className="text-blue-900 text-3xl mb-3 shiver-icon" />
  <h3 className="font-bold text-lg text-gray-800">Phone</h3>
  <a href="tel:+9779769341568" className="text-gray-700 block">977-9769341568</a>
  <a href="tel:+9779769341576" className="text-gray-700 block">977-9769341576</a>
  <a href="tel:+9779762634769" className="text-gray-700 block">977-9762634769</a>
  <a href="tel:+9779766896866" className="text-gray-700 block">977-9766896866</a>
</div>


          <div ref={refs[2]} className={cardBase} style={{ animation: "fadeInLeft 1.2s ease-out forwards" }}>
            <FaEnvelope className="text-blue-900 text-3xl mb-3 shiver-icon" />
            <h3 className="font-bold text-lg text-gray-800">Email</h3>
            <a href="mailto:cloudsnepalweb@gmail.com" className="text-gray-700">webcloudsnepal@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <svg className="w-full h-32 absolute bottom-0 left-0 animate-waveDown" viewBox="0 0 1440 320">
        <path
          fill="#16a34a"
          fillOpacity="0.45"
          d="M0,96L60,112C120,128,240,160,360,181.3C480,203,600,213,720,192C840,171,960,117,1080,96C1200,75,1320,85,1380,90.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>

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
        @keyframes waveUp {
          0% { transform: translateX(0); }
          50% { transform: translateX(-100px); }
          100% { transform: translateX(0); }
        }
        @keyframes waveDown {
          0% { transform: translateX(0); }
          50% { transform: translateX(100px); }
          100% { transform: translateX(0); }
        }
        @keyframes shiver {
          0% { transform: translate(0, 0) rotate(0); }
          25% { transform: translate(-2px, 2px) rotate(-1deg); }
          50% { transform: translate(2px, -2px) rotate(1deg); }
          75% { transform: translate(-2px, -2px) rotate(-1deg); }
          100% { transform: translate(0, 0) rotate(0); }
        }
        .animate-waveUp {
          animation: waveUp 10s ease-in-out infinite;
        }
        .animate-waveDown {
          animation: waveDown 10s ease-in-out infinite;
        }
        .shiver-icon {
          animation: shiver 1.2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default CloudsContactForm;
