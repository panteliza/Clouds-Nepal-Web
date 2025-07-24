import React, { useState } from "react";
import NavbarMain from "../components/Navbar";
import Footer from "../components/Footer";

const courseOptions = [
  "ASP.NET", "AWS", "Backend Development", "Business Analysis", "C/C++", "Data Science",
  "DevOps", "Digital Marketing", "Ethical Hacking", "ExpressJS", "Flutter",
  "Frontend Development", "Full Stack Development", "Graphics Design", "Machine Learning (Python)",
  "MEAN Stack", "NodeJS", "PHP", "Python Basic", "Python with AI",
  "Python with Django", "Quality Assurance (QA)", "React Native", "ReactJS", "SEO Advanced",
  "SEO Basic", "UI/UX Design", "Video Editing"
];

const serviceOptions = [
  "Website Development", "Application Development", "Mobile App Development", "Enterprise Software",
  "Cloud Services, IT Consulting", "Maintenance & Support", "CRM, HR & Payroll",
  "Accounting, Billing Software", "Invoicing & Payment Software", "POS, IMS, ERP Software",
  "SEO, SEM, PPC", "Marketing & Automation"
];

const inputStyle = "w-full p-3 rounded-xl bg-white/30 border border-white/40 backdrop-blur-xl placeholder:text-gray-800 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#39765B] shadow-inner transition";

const CloudsContactUsPage = () => {
  const [courseMsg, setCourseMsg] = useState(false);
  const [serviceMsg, setServiceMsg] = useState(false);

  const handleCourseSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
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

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=webcloudsnepal@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`, "_blank");
    setCourseMsg(true);
  };

  const handleServiceSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const subject = "Clouds Nepal Web Service Inquiry";
    const body = `
      Name: ${encodeURIComponent(data.name)}
      %0ACompany: ${encodeURIComponent(data.company)}
      %0AEmail: ${encodeURIComponent(data.email)}
      %0APhone: ${encodeURIComponent(data.phone)}
      %0AService Interested: ${encodeURIComponent(data.service)}
      %0AMessage: ${encodeURIComponent(data.message)}
    `;

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=webcloudsnepal@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`, "_blank");
    setServiceMsg(true);
  };

  return (
    <>
    <NavbarMain/>
    <div className="relative min-h-screen px-6 py-24 bg-gradient-to-tr from-[#e1f5ec] via-[#f0f9ff] to-[#d2ebf5] overflow-hidden">
      {/* Glowing background blobs */}
      <div className="absolute w-[500px] h-[500px] bg-[#39765B] opacity-20 rounded-full blur-3xl top-[-100px] left-[-120px] animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-[#91d5c6] opacity-20 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* 🎓 Course Form */}
        <div className="bg-white/20 backdrop-blur-2xl p-10 rounded-3xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500">
          <h2 className="text-3xl font-bold text-[#14452F] mb-6 text-center">📘 Enroll in a Course</h2>
          {courseMsg ? (
            <p className="text-green-700 font-semibold text-center">Course form submitted successfully!</p>
          ) : (
            <form onSubmit={handleCourseSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="name" placeholder="Name" required className={inputStyle} />
                <input name="age" type="number" placeholder="Age" required className={inputStyle} />
                <input name="permanent" placeholder="Permanent Address" required className={inputStyle} />
                <input name="temporary" placeholder="Temporary Address" required className={inputStyle} />
                <input name="phone" type="tel" placeholder="Phone" required className={inputStyle} />
                <input name="email" type="email" placeholder="Email" required className={inputStyle} />
                <input name="qualification" placeholder="Qualification" required className={inputStyle} />
              </div>

              <select name="course" required className={inputStyle}>
                <option value="">-- Select Course --</option>
                {courseOptions.map((course, i) => (
                  <option key={i} value={course}>{course}</option>
                ))}
              </select>

              <textarea name="message" placeholder="Write your message..." rows="4" required className={inputStyle} />
              <button
  type="submit"
  className="bg-[#14452F] text-white px-8 py-3 text-lg font-semibold rounded-xl hover:bg-[#0f3a28] transition mx-auto block"
>
  Submit
</button>

            </form>
          )}
        </div>

        {/* 🛠️ Service Form */}
        <div className="bg-white/20 backdrop-blur-2xl p-10 rounded-3xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500">
          <h2 className="text-3xl font-bold text-[#14452F] mb-6 text-center">💻 Request a Service</h2>
          {serviceMsg ? (
            <p className="text-green-700 font-semibold text-center">Service inquiry sent successfully!</p>
          ) : (
            <form onSubmit={handleServiceSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="name" placeholder="Your Name" required className={inputStyle} />
                <input name="company" placeholder="Company Name (optional)" className={inputStyle} />
                <input name="email" type="email" placeholder="Email" required className={inputStyle} />
                <input name="phone" type="tel" placeholder="Phone" required className={inputStyle} />
              </div>

              <select name="service" required className={inputStyle}>
                <option value="">-- Select Service --</option>
                {serviceOptions.map((service, i) => (
                  <option key={i} value={service}>{service}</option>
                ))}
              </select>

              <textarea name="message" placeholder="Describe your project, timeline..." rows="4" required className={inputStyle} />
              <button
  type="submit"
  className="bg-[#39765B] text-white px-8 py-3 text-lg font-semibold rounded-xl hover:bg-[#2e5e49] transition mx-auto block"
>
  Send Inquiry
</button>

            </form>
          )}
        </div>
      </div>
      <Footer/>

      {/* Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
    </>
  );
};

export default CloudsContactUsPage;
