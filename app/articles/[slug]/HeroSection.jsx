"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Button } from "@headlessui/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const HeroSection = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log("index", index);
  return (
    <div className="min-h-[50vh] md:min-h-[80vh] lg:min-h-screen  w-full relative">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        // className="z-0"
        onSlideChangeTransitionStart={(e) => setIndex(e.realIndex)}
        // className="mySwiper"
      >
        {data.map((item, i) => {
          return (
            <SwiperSlide key={i} className="relative">
              <TextContainer data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="absolute bottom-10 right-10  hidden lg:flex gap-5 items-end w-4/5">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {data.map((item, i) => {
            return (
              <SwiperSlide key={i} className={`!w-36 !h-[20vh]`}>
                <div
                  className={`${
                    index === i ? "opacity-100" : "opacity-40 hover:opacity-80"
                  } duration-300`}
                >
                  <img
                    src={item.image}
                    className={`object-cover cursor-pointer rounded-md duration-300 border border-white ${
                      index === i ? "!h-28 !w-40" : "!h-24 !w-36"
                    }`}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;

const TextContainer = ({ data }) => {
  return (
    <div
      className="px-8 py-20 lg:px-28 lg:py-32 h-full w-full min-h-[50vh] md:min-h-[80vh] lg:min-h-screen flex justify-start items-center"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.image})`,
        backgroundRepeat: "inherit",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full lg:w-1/2 text-white lg:text-left ms-5 lg:-translate-y-8 text-center">
        <p className="text-2xl lg:text-6xl font-bold">
          Influencer Marketing News and Resources
        </p>
        <p className="text-base lg:text-lg mt-5">
          Influencer Marketing Hub offers you all the latest Marketing news,
          tools and resources to enable influencers, agencies and platforms to
          connect and harness the power of Marketing.
        </p>
        <div className="flex gap-0 sm:gap-8 flex-col sm:flex-row items-center lg:justify-start justify-center">
          <Button className="bg-[#EB3C75] hover:bg-[#860e35] duration-300 w-fit rounded-full py-3 px-7 text-sm sm:text-base text-white mt-5">
            <div className="flex items-center gap-3">
              <span className="h-fit">About Us</span>
              <ArrowLongRightIcon className="h-5 w-5" />
            </div>
          </Button>
          <Button className="hover:bg-white w-fit duration-300 bg-white sm:bg-transparent border border-white text-sm sm:text-base rounded-full py-3 px-7 text-black sm:text-white hover:text-black mt-5 flex items-center gap-3">
            Contact Us
            <ArrowLongRightIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
