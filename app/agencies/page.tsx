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
      image: "/agencies/carousel.jpeg",
    },
    {
      image: "/agencies/carousel.jpeg",
    },
    {
      image: "/agencies/carousel.jpeg",
    },
  ];

  return (
    <main className="font-Gotham">
      <HeroSection data={carouselData} />
      <Agencies />
      <AgencyIndex />
      <FAQ />
    </main>
  );
};

export default Page;
