import React from "react";
import HeroSection from "./_components/HeroSection";
import Articles from "./_components/Articles";

const page = () => {

  const carouselData = [
    {
      image: '/articles_carousel_1.jpeg'
    },
    {
      image: '/articles_carousel_1.jpeg'
    },
    {
      image: '/articles_carousel_1.jpeg'
    },
    {
      image: '/articles_carousel_1.jpeg'
    },
  ]

  return (
    <div className="font-Gotham">
      <HeroSection data={carouselData} />
      <Articles />
    </div>
  );
};

export default page;
