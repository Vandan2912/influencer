"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation, Pagination, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@headlessui/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  //   const [swipper, setswipper] = useState(null);

  let slideTo = () => {};

  return (
    <div className="min-h-screen w-full relative">
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination, Controller]}
        className="mySwiper"
        onSlideChange={(e) => setIndex(e.activeIndex)}
        onSwiper={(swiper) => {
          slideTo = (index) => {
            swiper?.slideTo(index);
          };
        }}
      >
        <SwiperSlide className="relative">
          <TextContainer number={1} />
        </SwiperSlide>
        <SwiperSlide>
          <TextContainer number={2} type="png" />
        </SwiperSlide>
        <SwiperSlide>
          <TextContainer number={3} />
        </SwiperSlide>
        <SwiperSlide>
          <TextContainer number={4} />
        </SwiperSlide>
      </Swiper>
      <div className="absolute bottom-10 right-10 z-10 hidden lg:flex gap-5 items-end">
        {/* <div className=""></div> */}
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <img
          src="/carousel_image1.jpg"
          alt="1"
          className={`object-cover rounded-md border border-white ${
            index === 0 ? "h-28 w-36" : "h-20 w-28"
          }`}
          onClick={slideTo(0)}
        />
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <img
          src="/carousel_image2.png"
          alt="1"
          className={`object-cover rounded-md border border-white ${
            index === 1 ? "h-28 w-36" : "h-20 w-28"
          }`}
          onClick={slideTo(1)}
        />
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <img
          src="/carousel_image3.jpg"
          alt="1"
          className={`object-cover rounded-md border border-white ${
            index === 2 ? "h-28 w-36" : "h-20 w-28"
          }`}
          onClick={slideTo(2)}
        />
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <img
          src="/carousel_image4.jpg"
          alt="1"
          className={`object-cover rounded-md border border-white ${
            index === 3 ? "h-28 w-36" : "h-20 w-28"
          }`}
          onClick={slideTo(3)}
        />
      </div>
    </div>
  );
};

export default HeroSection;

const TextContainer = ({ number, type="jpg" }) => {
  return (
    <div
      className="px-16 py-20 lg:px-28 lg:py-32 h-full w-full min-h-screen flex justify-start items-center"
      style={{
        backgroundImage: `url('/carousel_image${number}.${type}')`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-full lg:w-1/2 text-white text-left ms-5">
        <p className="text-4xl lg:text-6xl font-bold">
          The leading Social Media resource for Brands
        </p>
        <p className="text-base lg:text-lg mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
          efficitur lorem, ut condimentum nisi. Integer molestie tellus vel nunc
          sagittis dignissim
        </p>
        <div className="flex gap-8">
          <Button className="bg-[#EB3C75] rounded-full py-3 px-7 text-white mt-5 flex items-center gap-3">
            About Us
            <ArrowLongRightIcon className="h-5 w-5" />
          </Button>
          <Button className="hover:bg-white border border-white rounded-full py-3 px-7 text-white hover:text-black mt-5 flex items-center gap-3">
            Contact Us
            <ArrowLongRightIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
