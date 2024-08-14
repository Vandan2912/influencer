"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Button } from "@headlessui/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const CalculatorCarousel = ({ data }) => {
  return (
    <div className="  w-full relative">
      <Swiper
        className="CalculatorCarousel"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // slidesPerView={3}
        spaceBetween={20}
        navigation={true}
        loop={true}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {data.map((item, i) => {
          return (
            <SwiperSlide key={i} className="relative">
              <TextContainer data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CalculatorCarousel;

const TextContainer = ({ data }) => {
  return (
    <div className="px-8 py-10 lg:px-10 lg:py-20 h-full w-full  flex flex-col justify-start items-center">
      <img src={data.image} alt="" />
      <div className="w-full lg:w-1/2 text-black text-left">
        <p className="text-base lg:text-lg mt-5">Instagram Hashtag Generator</p>
      </div>
    </div>
  );
};
