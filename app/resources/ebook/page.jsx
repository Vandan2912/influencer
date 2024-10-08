"use client";

import { Button } from "@headlessui/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useRouter } from "next/navigation";
import HeroSection from "./HeroSection";

const Page = () => {
  const carouselData = [
    {
      image: "/resources/carouselebook.jpg",
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

  const ebooks = [
    {
      image: "/resources/tool3.png",
      text1: "Learn How To Build Your Personal Brands On TikTok",
      text2: "TikTok Influencer",
    },
    {
      image: "/resources/tool4.jpeg",
      text1: "Learn How To Build Your Personal Brands On TikTok",
      text2: "TikTok Influencer",
    },
    {
      image: "/resources/tool5.jpeg",
      text1: "Learn How To Build Your Personal Brands On TikTok",
      text2: "TikTok Influencer",
    },
    {
      image: "/resources/tool1.png",
      text1: "Learn How To Build Your Personal Brands On TikTok",
      text2: "TikTok Influencer",
    },
    {
      image: "/resources/tool2.jpeg",
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
      <OneSection title="eBooks" data={ebooks} />
      <OneSection title="Infographics" data={ebooks} />
      <OneSection title="Data Visualisation" data={ebooks} />
    </main>
  );
};

export default Page;

const OneSection = ({ title, data }) => {
  const router = useRouter();
  return (
    <section className="pb-5 px-5 md:pb-11 md:px-16 mt-8">
      <div className="flex justify-between items-center px-5 mb-5">
        <h1 className="text-3xl font-bold">{title}</h1>
        <Button className="bg-[#EB3C75] hover:bg-[#860e35] duration-300 w-fit rounded-full py-3 px-7 text-sm sm:text-base text-white flex items-center gap-3">
          View All
          <ArrowLongRightIcon className="h-5 w-5" />
        </Button>
      </div>
      <hr className="h-1 bg-black" />
      <div className="my-0 px-0 lg:my-10 lg:px-20 mt-5">
        <div className="w-full mt-14 grid grid-cols-3 gap-10">
          {data.map((item, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
            <div
              key={i}
              className="col-span-3 group overflow-hidden border border-[#00000023] hover:shadow-[0_0_11px_rgba(33,33,33,.2)] duration-300 md:col-span-1 text-center bg-[#00000005] rounded-2xl cursor-pointer"
              onClick={() => {
                router.push("/resources/ebook/123");
              }}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full rounded-ss-2xl rounded-se-2xl object-cover group-hover:scale-105 duration-300"
                />
              </div>
              <p className="text-xl font-semibold mt-7 text-[#EB3C75]">
                Ebooks
              </p>
              <p className="text-xl mt-5 font-bold mb-8">
                Instagram Hashtag Generator
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
