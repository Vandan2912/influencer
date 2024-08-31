import React from "react";
import HeroSection from "./_components/HeroSection";
import Platforms from "./_components/Platforms";

const page = () => {
  const carouselData = [
    {
      image: "/carousel_image3.jpg",
    },
    {
      image: "/carousel_image2.png",
    },
    {
      image: "/carousel_image1.jpg",
    },
    {
      image: "/carousel_image4.jpg",
    },
  ];

  return (
    <main className="font-Gotham">
      <HeroSection data={carouselData} />
      <div className="px-5 sm:px-10 md:px-20">
        <Platforms />
      </div>
    </main>
  );
};

export default page;
