import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


import client1 from "../assets/client1.jpeg";
import client6 from "../assets/client6.jpeg";
import client2 from "../assets/client2.jpeg";
import client0 from "../assets/client0.webp";
import client4 from "../assets/client4.jpeg";
import client5 from "../assets/client5.jpeg";

import client7 from "../assets/client7.png";
import client8 from "../assets/client8.jpeg";
import client9 from "../assets/client9.jpeg";
import client10 from "../assets/client10.jpeg";
import client11 from "../assets/client11.jpeg";
import client12 from "../assets/client12.jpeg";
import client13 from "../assets/client13.jpeg";
import client14 from "../assets/client14.jpeg";
import client15 from "../assets/client15.jpeg";
import client16 from "../assets/client16.jpeg";
import client17 from "../assets/client17.jpeg";

const clients = [
 client1, client6, client0,   client7,client8, client9,  client4, client5,
 client2, client10, client11,
  client12, client13, client14, client15, client16, client17,
];

const ClientsSlider = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-green-800 mb-5">
        Our Precious Clients
      </h2>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        loop={true}
        modules={[Autoplay]}
      >
        {clients.map((logo, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-20 md:h-24 flex items-center justify-center px-4">
              <img
                src={logo}
                alt={`Client ${idx + 1}`}
                className="max-h-full object-contain"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ClientsSlider;
