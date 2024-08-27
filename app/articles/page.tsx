import React from "react";
import HeroSection from "./_components/HeroSection";
import Articles from "./_components/Articles";

const page = () => {
  const carouselData = [
    {
      image: "/articles_carousel_1.jpeg",
    },
    {
      image: "/articles_carousel_1.jpeg",
    },
    {
      image: "/articles_carousel_1.jpeg",
    },
    {
      image: "/articles_carousel_1.jpeg",
    },
  ];

  return (
    <main className="font-Gotham">
      <HeroSection data={carouselData} />
      <Articles />
    </main>
  );
};

export default page;
