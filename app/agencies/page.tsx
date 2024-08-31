import React from "react";
import HeroSection from "./_components/HeroSection";
import Agencies from "./_components/Agencies";
import AgencyIndex from "./_components/AgencyIndex";
import FAQ from "./_components/FAQ";

const Page = () => {
  const carouselData = [
    {
      image: "/agencies/carousel.jpeg",
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
    <main className="font-Gotha">
      <HeroSection data={carouselData} />
      <Agencies />
      <AgencyIndex />
      <FAQ />
    </main>
  );
};

export default Page;
