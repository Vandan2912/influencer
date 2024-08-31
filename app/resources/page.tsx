import React from "react";
import HeroSection from "./_components/HeroSection";
import Tools from "./_components/Tools";
import Ebooks from "./_components/Ebooks";
import Course from "./_components/Course";

const Page = () => {
  const carouselData = [
    {
      image: "/resources/carousel.png",
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
  ];

  return (
    <main className="font-Gotham">
      <HeroSection data={carouselData} />
      <Tools />
      <Ebooks />
      <Course title="Courses" cources={cources} />
    </main>
  );
};

export default Page;
