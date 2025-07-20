import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// ✅ Correct Image Imports
import img1 from "../assets/Ansha Basnet.png";
import img2 from "../assets/Anmol Kayastha.png";
import img3 from "../assets/Bipin Sainju Shrestha.jpg";
import img4 from "../assets/Aman Shrestha.jpg";
import img5 from "../assets/Barsha Shrestha.jpg";
import img6 from "../assets/Aryan Gurung.jpg";
import img7 from "../assets/Bhupendra Paneru.jpg";
import img8 from "../assets/Rejita Sharma.png";
import img9 from "../assets/Pradip Rana.png";
import img10 from "../assets/Suraj Rai.png";
import img11 from "../assets/Dharamkaji Shrestha.png";
import img12 from "../assets/Sanjay Chaudhary.jpg";
import img13 from "../assets/Roshan Thapa.jpg";
import img14 from "../assets/Sneha Chaudhary.jpg";
import img15 from "../assets/Gokarna Pandey.jpg";
import img16 from "../assets/Dipjung Gurung.jpg";
import img17 from "../assets/Chetan Rajbansi.jpg";
import img18 from "../assets/Nitesh Acharya.jpg";
import img19 from "../assets/Suman Basnet.jpg";


const testimonials = [
  {
    name: "Ansha Basnet",
    course: "DevOps",
    image: img1,
    shortText: `Clouds Nepal Web provided one of the most effective DevOps training programs I’ve attended.`,
    fullText: `Clouds Nepal Web provided one of the most effective DevOps training programs I’ve attended. The course was well-structured, highly practical, and the instructors left no stone unturned. We tackled real-world challenges, received constant feedback, and even had the opportunity to revisit complex topics through extra classes. I gained not only technical skills but also confidence to handle DevOps workflows professionally.`,
  },
  {
    name: "Anmol Kayastha",
    course: "Python with Data Science",
    image: img2,
    shortText: `My journey at Clouds Nepal Web was truly transformative in terms of data science skills.`,
    fullText: `My journey at Clouds Nepal Web was truly transformative. The Python with Data Science course blended strong theoretical foundation with practical hands-on projects. From data wrangling to machine learning model evaluation, the instructors made sure we built real skills. I now feel ready to pursue both job and freelance opportunities in the field.`,
  },
  {
    name: "Bipin Sainju Shrestha",
    course: "Web Development",
    image: img3,
    shortText: `The full-stack course at Clouds Nepal Web helped me go from zero to deployment.`,
    fullText: `The full-stack course at Clouds Nepal Web helped me go from zero to deployment. It was practical, beginner-friendly, and focused on real-world tools like Git, React, and Node.js. The support from mentors was consistent and the peer environment was highly encouraging.`,
  },
  {
    name: "Aman Shrestha",
    course: "UI/UX Design",
    image: img4,
    shortText: `Clouds Nepal Web gave me practical design skills and confidence to build prototypes.`,
    fullText: `Clouds Nepal Web gave me practical design skills and confidence to build prototypes. Their UI/UX design course combined Figma practice, user psychology, and live project reviews. It helped me build a solid portfolio and understand how to work with developers effectively.`,
  },
  {
    name: "Barsha Shrestha",
    course: "Machine Learning",
    image: img5,
    shortText: `ML training at Clouds Nepal Web built my fundamentals and project skills.`,
    fullText: `ML training at Clouds Nepal Web built my fundamentals and project skills. The instructors broke down complex algorithms in a beginner-friendly way and gave hands-on assignments to reinforce learning. I can now confidently experiment with datasets and train models for real use.`,
  },
  {
    name: "Aryan Gurung",
    course: "Flutter App Dev",
    image: img6,
    shortText: `The Flutter course helped me publish my first app to the Play Store.`,
    fullText: `The Flutter course helped me publish my first app to the Play Store. From UI design to integrating Firebase, the training covered it all. The course taught me not just coding but also best practices in mobile development.`,
  },
  {
    name: "Bhupendra Paneru",
    course: "Backend with Node.js",
    image: img7,
    shortText: `Great backend bootcamp experience with professional instructors and live projects.`,
    fullText: `Great backend bootcamp experience with professional instructors and live projects. I understood Node.js architecture, Express, MongoDB, and REST APIs in depth. The hands-on projects and mentorship boosted my skills for real-world applications.`,
  },
];

const Testimonials = () => {
  const [modalData, setModalData] = useState(null);
  const avatarImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18,
    img19,
  ];

  return (
    <section className="bg-green-900 text-white py-16 px-4 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Student Voice</h2>
          <p className="mb-6 text-lg">
            Our team can assist you in transforming your skill through latest tech capabilities to stay ahead of the competition.
          </p>
        <div className="flex items-center flex-wrap gap-2 mt-4">
  <div className="flex -space-x-2 overflow-hidden">
    {avatarImages.map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`Student ${i + 1}`}
        className="w-8 h-8 rounded-full border-2 border-white object-cover"
      />
    ))}
  </div>
  <div className="text-sm font-semibold text-white whitespace-nowrap ml-4">
    +1200 Students have learned with us
  </div>
</div>

        </div>

        {/* Swiper Section */}
        <div className="md:col-span-2">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
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
        <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white text-gray-800 rounded-lg p-6 w-full max-w-lg sm:max-w-xl relative shadow-lg">
            <button
              onClick={() => setModalData(null)}
              className="absolute top-2 right-2 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600 transition"
            >
              ✖
            </button>
            <p className="text-base mb-6 leading-relaxed">{modalData.fullText}</p>
            <div className="flex items-center">
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