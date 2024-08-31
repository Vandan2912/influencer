import React from "react";
import Course from "../_components/Course";
import HeroSection from "./HeroSection";

const Page = () => {
  const carouselData = [
    {
      image: "/resources/carouselcources.png",
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
      <Course title="Available Courses" cources={cources} />
    </main>
  );
};

export default Page;
