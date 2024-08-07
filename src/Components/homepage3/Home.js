import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";


import imag1 from '../images/Paste image (1).png'
import imag2 from '../images/Paste image (1).png'
import imag3 from '../images/Paste image (1).png'
import imag4 from '../images/Paste image (1).png'
import imag5 from '../images/Paste image (1).png'
import imag6 from '../images/Paste image (1).png'
import imag7 from '../images/Paste image (1).png'
// Sample images for demonstration purposes
const ArrivelImage = 'path_to_image'; // Replace with actual image paths

const Home = () => {
  const [slidesNum, setSlidesNum] = useState(getSlidesNum());

  useEffect(() => {
    const handleResize = () => setSlidesNum(getSlidesNum());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getSlidesNum() {
    return window.innerWidth <= 670 ? 1.5 : 4.5;
  }

  return (
    <Swiper
      slidesPerView={slidesNum}
      spaceBetween={30}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="mySwiper my-10"
    >
      {[...Array(6)].map((_, index) => (
        <SwiperSlide key={index} className="flex flex-col cursor-pointer relative slides">
          <div className="relative h-[250px]">
            <img src={ArrivelImage} className="absolute inset-0 w-full h-full rounded-xl" alt="Arrival" />
            <a
              href="#"
              className="absolute w-full bottom-1 left-1 bg-black text-white text-[14px] py-2 px-12 text-center rounded-lg cartBtn"
            >
              Add to cart
            </a>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[14px] font-semibold">Lovreen Pack</h3>
            <span className="text-[14px] font-semibold">$350</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Home;
