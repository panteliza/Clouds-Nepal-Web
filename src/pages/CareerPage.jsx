import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import axios from "axios";
import emailjs from "@emailjs/browser";

const CareerPage = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [resumePreview, setResumePreview] = useState(null);

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumePreview(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessageSent(false);
    setUploading(true);
    setUploadProgress(0);

    const formData = new FormData(e.target);
    const file = formData.get("resume");

    try {
      const cloudData = new FormData();
      cloudData.append("file", file);
      cloudData.append("upload_preset", "your_unsigned_preset"); // Replace with your actual preset

      const response = await axios.post("https://api.cloudinary.com/v1_1/your_cloud_name/upload", cloudData, {
        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percent);
        },
      });

      const resumeUrl = response.data.secure_url;

      const templateParams = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
        resume: resumeUrl,
      };

      await emailjs.send(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        templateParams,
        "your_public_key" // Replace with your EmailJS public key
      );

      setMessageSent(true);
    } catch (err) {
      console.error("Submission error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setUploading(false);
    }
  };

  const inputClass = "w-full p-3 rounded-xl bg-white/30 border border-gray-300 placeholder:text-gray-700 text-gray-900 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-[#218C57] shadow-inner transition";

  return (
    <>
      <Navbar />
      <section className="px-4 bg-gradient-to-b from-white to-blue-50 pt-[100px] pb-10 min-h-screen">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#218C57]">Careers at </span>
          <span className="text-green-600">Clouds Nepal Web</span>
        </motion.h2>

        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-10">
          We're always looking for passionate and talented individuals. Submit your details and CV below to join our growing team.
        </p>

        <div className="max-w-3xl mx-auto bg-white/20 backdrop-blur-2xl border border-white/40 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
          {messageSent ? (
            <p className="text-green-700 text-center font-semibold text-lg">
              ✅ Your application has been submitted successfully!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="name" required placeholder="Full Name" className={inputClass} />
                <input type="email" name="email" required placeholder="Email Address" className={inputClass} />
                <input type="tel" name="phone" required placeholder="Phone Number" className={inputClass} />
                <input type="file" name="resume" required accept=".pdf,.doc,.docx" onChange={handleResumeChange} className={inputClass + " bg-white text-gray-900"} />
              </div>

              {resumePreview && (
                <p className="text-sm text-gray-600 mt-[-10px]">📄 Selected: {resumePreview}</p>
              )}

              {uploading && (
                <div className="w-full bg-gray-200 h-3 rounded">
                  <div className="bg-[#218C57] h-3 rounded" style={{ width: `${uploadProgress}%` }}></div>
                </div>
              )}

              <textarea
                name="message"
                rows="4"
                placeholder="Why do you want to join us?"
                className={inputClass}
              ></textarea>

              {error && (
                <p className="text-red-600 text-sm text-center font-medium">{error}</p>
              )}

             <button
  type="submit"
  disabled={uploading}
  className="w-48 mx-auto block bg-[#218C57] text-white py-2.5 text-base font-semibold rounded-xl hover:bg-[#186447] transition disabled:opacity-50"
>
  {uploading ? "Uploading..." : "Submit Application"}
</button>

            </form>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CareerPage;
