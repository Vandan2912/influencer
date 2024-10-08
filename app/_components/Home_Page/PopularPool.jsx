"use client";

import React from "react";
import hashtags from "../../../assets/hashtags.png";
import instaCost from "../../../assets/post_cost.png";
import youtube from "../../../assets/youtube.png";
import ticktok from "../../../assets/tiktok.png";
import { useRouter } from "next/navigation";
import Link from "next/link";

const PopularPool = () => {
  return (
    <section className="px-6 py-12 lg:px-28 lg:py-28 bg-[#EFEBEB] w-full min-h-[80vh] flex flex-col gap-16">
      <div className="flex justify-between">
        <p className="text-2xl lg:text-4xl font-semibold">Popular Tool</p>
        <Link href="/resources/tools" className="linkHoverEffect">
          See All Tools
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-10">
        <Card image={hashtags} title="Instagram Hashtag Generator" />
        <Card image={instaCost} title="Instagram Sponsored Post Calculator" />
        <Card
          image={youtube}
          title="YouTube Money Calculator (earnings estimator)"
        />
        <Card image={ticktok} title="TikTok Money Calculator" />
      </div>
    </section>
  );
};

export default PopularPool;

const Card = ({ image, title }) => {
  const router = useRouter();
  return (
    <div
      className="group overflow-hidden col-span-2 md:col-span-1 bg-white rounded-[20px] flex md:flex-row flex-col md:h-[20vh] cursor-pointer duration-300 hover:shadow-[0_0_11px_rgba(33,33,33,.2)]"
      onClick={() => {
        router.push("/resources/tools/123");
      }}
    >
      <div className="md:w-[50%] w-full md:h-auto h-[20vh] overflow-hidden">
        <img
          src={image.src}
          alt=""
          className="w-full h-full object-cover rounded-ss-[20px] md:rounded-es-[20px] group-hover:scale-110 duration-300"
        />
      </div>
      <div className="p-3 md:p-4 flex items-center w-full md:w-[50%]">
        <p className="text-lg font-semibold mt-3">{title}</p>
      </div>
    </div>
  );
};
