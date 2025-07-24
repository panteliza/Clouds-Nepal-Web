import React, { useState } from "react";
import NavbarMain from "../components/Navbar";
import Footer from "../components/Footer";

const serviceOptions = [
  "Website Development", "Application Development", "Mobile App Development", "Enterprise Software",
  "Cloud Services, IT Consulting", "Maintenance & Support", "CRM, HR & Payroll",
  "Accounting, Billing Software", "Invoicing & Payment Software", "POS, IMS, ERP Software",
  "SEO, SEM, PPC", "Marketing & Automation"
];

const inputStyle = "w-full p-4 rounded-lg bg-white/80 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#39765B] focus:border-[#39765B] transition duration-300 text-gray-800 placeholder-gray-500";

const ServiceForm = () => {
  const [serviceMsg, setServiceMsg] = useState(null);

  const handleServiceSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const subject = "Service Inquiry from Website";
    const body = `
      Name: ${encodeURIComponent(data.name)}
      %0ACompany: ${encodeURIComponent(data.company)}
      %0AEmail: ${encodeURIComponent(data.email)}
      %0APhone: ${encodeURIComponent(data.phone)}
      %0AService Interested: ${encodeURIComponent(data.service)}
      %0AMessage: ${encodeURIComponent(data.message)}
    `;

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=webcloudsnepal@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`, "_blank");

    setServiceMsg("Service inquiry sent successfully!");
  };

  return (
    <div className="flex flex-col  bg-gradient-to-tr from-[#e1f5ec] via-[#f0f9ff] to-[#d2ebf5]">
  

      <div className="relative px-6 pt-5 pb-2 flex-grow">
        {/* Background blobs */}
        <div className="absolute w-[500px] h-[500px] bg-[#39765B] opacity-20 rounded-full blur-3xl top-[-100px] left-[-120px] animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-[#91d5c6] opacity-20 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Service Form */}
          <div className="bg-white/20 backdrop-blur-2xl p-10 pt-5 rounded-3xl border border-white/40 shadow-2xl hover:shadow-2xl transition-all duration-500 max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-[#14452F] mb-6 text-center">Request a Service</h2>
            {serviceMsg ? (
              <p className="text-green-700 font-semibold text-center">{serviceMsg}</p>
            ) : (
              <form onSubmit={handleServiceSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
      </div>

  
    </div>
  );
};

export default ServiceForm;
