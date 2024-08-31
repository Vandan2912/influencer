import React from "react";
import HeroSection from "./_components/HeroSection";
import Articles from "./_components/Articles";

const page = () => {
  const carouselData = [
    {
      image: "/articles_carousel_1.jpeg",
    },
    {
      image: "/carousel_image2.png",
    },
    {
      image: "/carousel_image3.jpg",
    },
    {
      image: "/carousel_image4.jpg",
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
