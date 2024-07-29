import React from "react";
import HeroSection from "../_components/HeroSection";
import Course from "../_components/Course";

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

  const cources = [
    {
      image: "/resources/tool3.png",
      text1: "Learn How To Build Your Personal Brands On TikTok",
      text2: "TikTok Influencer",
    },
    {
      image: "/resources/tool3.png",
      text1: "Learn How To Build Your Personal Brands On TikTok",
      text2: "TikTok Influencer",
    },
    {
      image: "/resources/tool3.png",
      text1: "Learn How To Build Your Personal Brands On TikTok",
      text2: "TikTok Influencer",
    },
    {
      image: "/resources/tool3.png",
      text1: "Learn How To Build Your Personal Brands On TikTok",
      text2: "TikTok Influencer",
    },
    {
      image: "/resources/tool3.png",
      text1: "Learn How To Build Your Personal Brands On TikTok",
      text2: "TikTok Influencer",
    },
    {
      image: "/resources/tool3.png",
      text1: "Learn How To Build Your Personal Brands On TikTok",
      text2: "TikTok Influencer",
    },
  ];

  return (
    <main className="font-Gotham">
      <HeroSection data={carouselData} />
      <Course title='Available Courses' cources={cources} />
    </main>
  );
};

export default Page;
