import React from "react";
import HeroSection from "./_components/HeroSection";
import Platforms from "./_components/Platforms";

const page = () => {
  const carouselData = [
    {
      image: "/carousel_image3.jpg",
    },
    {
      image: "/carousel_image3.jpg",
    },
    {
      image: "/carousel_image3.jpg",
    },
    {
      image: "/carousel_image3.jpg",
    },
  ];
  
  return (
    <main className="font-Gotham">
      <HeroSection data={carouselData} />
      <Platforms />
    </main>
  );
};

export default page;
