import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const cloudName = "dj9kmsssz";
const uploadPreset = "unsigned_resume_upload";

const CareerPage = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [resumePreview, setResumePreview] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);

  // ✅ SEO + Indexing
  useEffect(() => {
    window.scrollTo(0, 0);

    // Title
    document.title = "Careers – Work with Clouds Nepal Web | Join Our IT Team";

    // Meta Description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Join the Clouds Nepal Web team! We're always looking for passionate developers, designers, marketers, and cloud experts. Submit your CV today."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Join the Clouds Nepal Web team! We're always looking for passionate developers, designers, marketers, and cloud experts. Submit your CV today.";
      document.head.appendChild(meta);
    }

    // Canonical URL
    const canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = "https://www.cloudsnepalweb.com.np/career";
      document.head.appendChild(link);
    }

    // Robots Tag
    const robotsTag = document.querySelector("meta[name='robots']");
    if (!robotsTag) {
      const meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = "index, follow";
      document.head.appendChild(meta);
    }
  }, []);

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size < 5 * 1024 * 1024) {
      setResumePreview(URL.createObjectURL(file));
      setResumeFile(file);
    } else {
      setError("File too large. Please upload under 5MB.");
    }
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", `https://api.cloudinary.com/v1_1/${cloudName}/upload`);

      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
          const percent = Math.round((e.loaded / e.total) * 100);
          setUploadProgress(percent);
        }
      };

      xhr.onload = () => {
        const res = JSON.parse(xhr.responseText);
        resolve(res.secure_url);
      };

      xhr.onerror = () => reject("Upload failed");
      xhr.send(formData);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessageSent(false);
    setUploading(true);
    setUploadProgress(0);

    const formData = new FormData(e.target);

    try {
      let resumeUrl = "";
      if (resumeFile) {
        resumeUrl = await uploadToCloudinary(resumeFile);
      }

      const templateParams = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
        resume: resumeUrl,
      };

      await emailjs.send(
        "service_g3rlo63",
        "template_n7xu5rr",
        templateParams,
        "Q5TbH441gAc7OeBbK"
      );

      setMessageSent(true);
      e.target.reset();
      setResumeFile(null);
      setResumePreview(null);
    } catch (err) {
      console.error("Submission error:", err);
      setError("❌ Something went wrong. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const inputClass =
    "w-full p-3 rounded-xl bg-white/30 border border-gray-300 placeholder:text-gray-700 text-gray-900 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-[#218C57] shadow-inner transition";

  return (
    <>
      <Navbar />
      <section className="px-4 bg-gradient-to-b from-white to-blue-50 pt-[100px] pb-5">
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="name" required placeholder="Full Name" className={inputClass} />
                <input type="email" name="email" required placeholder="Email Address" className={inputClass} />
                <input type="tel" name="phone" required placeholder="Phone Number" className={inputClass} />
                <input
                  type="file"
                  name="resume"
                  required
                  accept="image/*"
                  onChange={handleResumeChange}
                  className={inputClass + " bg-white text-gray-900"}
                />
              </div>

              {resumePreview && (
                <div>
                  <p className="text-sm text-gray-600 mt-[-10px]">📄 Preview:</p>
                  <img src={resumePreview} alt="Resume preview" className="rounded-xl max-w-full max-h-64 mt-2" />
                  {uploading && (
                    <div className="w-full bg-gray-200 h-3 rounded mt-2">
                      <div className="bg-[#218C57] h-3 rounded" style={{ width: `${uploadProgress}%` }}></div>
                    </div>
                  )}
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
                {uploading ? "Sending..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 italic">🚫 Currently, there are no open positions.</p>
          <p className="text-sm text-gray-500">You can still submit your application for future consideration.</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CareerPage;
