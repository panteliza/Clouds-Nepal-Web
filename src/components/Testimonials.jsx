import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "../assets/logo.webp";
import img2 from "../assets/logo.webp";
import img3 from "../assets/logo.webp";
import img4 from "../assets/logo.webp";
import img5 from "../assets/logo.webp";
import img6 from "../assets/logo.webp";

const testimonials = [
  {
    name: "Susmita Rai",
    course: "DevOps",
    image: img1,
    shortText: `I would like to share my testimony about the impactful DevOps training I recently completed...`,
    fullText: `I would like to share my testimony about the impactful DevOps training I recently completed at Clouds Nepal Web. The experienced instructor left no detail untouched, helped us through technical challenges, and even offered extra sessions when needed. It was a highly rewarding experience that truly boosted my confidence and knowledge.`,
  },
  {
    name: "Bivek Kumar Yadav",
    course: "Python with Data Science",
    image: img2,
    shortText: `The overall experience of training at Clouds Nepal Web was really impressive...`,
    fullText: `The overall experience of training at Clouds Nepal Web was outstanding. Their curriculum, faculty expertise, and focus on real-world projects provided a clear learning path. It greatly improved my coding skills and analytical thinking.`,
  },
  {
    name: "Manisha Shrestha",
    course: "Web Development",
    image: img3,
    shortText: `Clouds Nepal Web gave me the confidence to start a coding career...`,
    fullText: `Clouds Nepal Web gave me the confidence to start a coding career. Their project-based teaching and mentoring helped me go from zero to deploying websites within weeks.`,
  },
  {
    name: "Sagar Thapa",
    course: "UI/UX Design",
    image: img4,
    shortText: `The UI/UX design course at Clouds Nepal Web was engaging and practical...`,
    fullText: `The UI/UX design course at Clouds Nepal Web was engaging and practical. I loved how they combined theory with live design critiques and prototyping tools.`,
  },
  {
    name: "Ramesh Karki",
    course: "Machine Learning",
    image: img5,
    shortText: `The ML program at Clouds Nepal Web was very detailed and industry-focused...`,
    fullText: `The ML program at Clouds Nepal Web was very detailed and industry-focused. From data processing to model evaluation, everything was taught in a very logical way with strong practical examples.`,
  },
  {
    name: "Ritu Sharma",
    course: "Flutter App Dev",
    image: img6,
    shortText: `Flutter training at Clouds Nepal Web made me job-ready...`,
    fullText: `Flutter training at Clouds Nepal Web made me job-ready. The hands-on projects and feedback from instructors helped me build and publish my first real mobile app.`,
  },
];

const Testimonials = () => {
  const [modalData, setModalData] = useState(null);

  return (
    <section className="bg-[#0066b2] text-white py-16 px-4 relative z-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        {/* Left */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Student Voice</h2>
          <p className="mb-6 text-lg">
            Our team can assist you in transforming your skill through latest tech capabilities to stay ahead of the competition.
          </p>
          <div className="flex gap-2">
            {testimonials.slice(0, 5).map((item, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
              >
                <img src={item.image} alt="avatar" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="md:col-span-2">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 5000 }}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
            className="pb-16"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white text-gray-800 rounded-xl p-6 shadow-md h-full flex flex-col justify-between">
                  <p className="text-4xl text-blue-500 font-serif mb-2">“</p>
                  <p className="text-sm mb-3">{item.shortText}</p>
                  <button
                    onClick={() => setModalData(item)}
                    className="text-sm text-blue-600 font-medium hover:underline mb-4"
                  >
                    Read More..
                  </button>
                  <div className="flex items-center mt-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover border"
                    />
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.course}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
          <div className="bg-white text-gray-800 rounded-lg p-6 max-w-xl w-full relative">
            <button
              onClick={() => setModalData(null)}
              className="absolute top-2 right-2 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✖
            </button>
            <p className="text-md mb-6">{modalData.fullText}</p>
            <div className="flex items-center mt-auto">
              <img
                src={modalData.image}
                alt={modalData.name}
                className="w-12 h-12 rounded-full mr-4 object-cover border"
              />
              <div>
                <h4 className="font-semibold">{modalData.name}</h4>
                <p className="text-sm text-gray-600">{modalData.course}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
