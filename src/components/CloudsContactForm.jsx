import React, { useState } from "react";

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

  const inputStyle = "w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition";

  return (
    <div className="relative min-h-screen py-0 px-4 flex items-center justify-center bg-gradient-to-br from-green-200 via-white to-blue-200 overflow-hidden">
      {/* Floating Glow Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-animated rounded-xl z-0"></div>

      <div className="max-w-4xl w-full bg-white p-10 rounded-xl shadow-2xl relative z-10 animate-softFade">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">Enroll in a Course</h2>

        {messageSent ? (
          <p className="text-green-700 font-semibold text-center">Form submitted successfully! Please check your Gmail.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
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
              {courseOptions.map((course, i) => (
                <option key={i} value={course}>{course}</option>
              ))}
            </select>

            <textarea
              name="message"
              placeholder="Write your message..."
              rows="4"
              required
              className={inputStyle}
            />

            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-3 text-lg font-semibold rounded hover:bg-blue-900 transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>

      {/* Custom Animations */}
      <style>{`
        .animate-softFade {
          animation: softFade 1.2s ease-out forwards;
        }

        @keyframes softFade {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .bg-animated {
          background: radial-gradient(circle at 20% 30%, rgba(144, 238, 144, 0.25), transparent 50%),
                      radial-gradient(circle at 80% 70%, rgba(173, 216, 230, 0.25), transparent 50%);
          animation: backgroundShift 15s infinite alternate;
        }

        @keyframes backgroundShift {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default CloudsContactForm;
