import React from "react";
import HeroSection from "./_components/HeroSection";
import Tools from "./_components/Tools";

const Page = () => {
  const carouselData = [
    {
      image: "/resources/carousel.png",
    },
    {
      image: "/resources/carousel.png",
    },
    {
      image: "/resources/carousel.png",
    },
    {
      image: "/resources/carousel.png",
    },
  ];

  return (
    <main className="font-Gotham">
      <HeroSection data={carouselData} />
      <Tools />
    </main>
  );
};

export default Page;
