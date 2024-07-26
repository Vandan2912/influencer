"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Button } from "@headlessui/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="min-h-[50vh] md:min-h-[80vh] lg:min-h-screen  w-full relative">
      <Swiper
        navigation={true}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        onSlideChange={(e) => setIndex(e.realIndex)}
        onSlideNextTransitionStart={(e) => setIndex(e.realIndex)}
        onSlidePrevTransitionStart={(e) => setIndex(e.realIndex)}
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
      <div className="absolute bottom-10 right-10 z-10 hidden lg:flex gap-5 items-end w-4/5">
        <Swiper
          onSwiper={setThumbsSwiper}
          // loop={true}
          // freeMode={true}
          // watchSlidesProgress={true}
          slidesPerView={4}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide className="!w-36 !h-[20vh]">
            <img src="/articles_carousel_1.jpeg" className={`object-cover cursor-pointer rounded-md border border-white ${index === 0 ? "!h-28 !w-40" : "!h-24 !w-36"}`} />
          </SwiperSlide>
          <SwiperSlide className="!w-36 !h-[20vh]">
            <img src="/articles_carousel_1.jpeg" className={`object-cover cursor-pointer rounded-md border border-white ${index === 1 ? "!h-28 !w-40" : "!h-24 !w-36"}`} />
          </SwiperSlide>
          <SwiperSlide className="!w-36 !h-[20vh]">
            <img src="/articles_carousel_1.jpeg" className={`object-cover cursor-pointer rounded-md border border-white ${index === 2 ? "!h-28 !w-40" : "!h-24 !w-36"}`} />
          </SwiperSlide>
          <SwiperSlide className="!w-36 !h-[20vh]">
            <img src="/articles_carousel_1.jpeg" className={`object-cover cursor-pointer rounded-md border border-white ${index === 3 ? "!h-28 !w-40" : "!h-24 !w-36"}`} />
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
};

export default HeroSection;

const TextContainer = ({ number, type = "jpg" }) => {
  return (
    <div
      className="px-8 py-20 lg:px-28 lg:py-32 h-full w-full min-h-[50vh] md:min-h-[80vh] lg:min-h-screen flex justify-start items-center"
      style={{
        backgroundImage: `url('/articles_carousel_1.jpeg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-full lg:w-1/2 text-white text-left ms-5">
        <p className="text-2xl lg:text-6xl font-bold">
          The leading Social Media resource for Brands
        </p>
        <p className="text-base lg:text-lg mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
          efficitur lorem, ut condimentum nisi. Integer molestie tellus vel nunc
          sagittis dignissim
        </p>
        <div className="flex gap-0 sm:gap-8 flex-col sm:flex-row">
          <Button className="bg-[#EB3C75] w-fit rounded-full py-3 px-7 text-sm sm:text-base text-white mt-5 flex items-center gap-3">
            About Us
            <ArrowLongRightIcon className="h-5 w-5" />
          </Button>
          <Button className="hover:bg-white w-fit bg-white sm:bg-transparent border border-white text-sm sm:text-base rounded-full py-3 px-7 text-black sm:text-white hover:text-black mt-5 flex items-center gap-3">
            Contact Us
            <ArrowLongRightIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
