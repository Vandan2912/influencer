"use client";

import {
  Button,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import React from "react";
import {
  ArrowLongRightIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import AgenciesCard from "../../_components/AgenciesCard";

const agencies = [
  {
    category: "momentiq",
    image: "image1.png",
    desc: "MOMENTiQ is the premier influencer marketing agency. They run campaigns at the largest scale for the world’s leading brands, including The Grammy Awards and TikTok Shop itself. They specialize in launching brands/products on TikTok Shop & automating TikTok Shops marketing...",
  },
  {
    category: "momentiq",
    image: "image1.png",
    desc: "MOMENTiQ is the premier influencer marketing agency. They run campaigns at the largest scale for the world’s leading brands, including The Grammy Awards and TikTok Shop itself. They specialize in launching brands/products on TikTok Shop & automating TikTok Shops marketing...",
  },
  {
    category: "momentiq",
    image: "image1.png",
    desc: "MOMENTiQ is the premier influencer marketing agency. They run campaigns at the largest scale for the world’s leading brands, including The Grammy Awards and TikTok Shop itself. They specialize in launching brands/products on TikTok Shop & automating TikTok Shops marketing...",
  },
];

const Page = () => {
  const router = useRouter();

  return (
    <main className="font-Gotham min-h-screen flex justify-center px-4 sm:px-10">
      <section className="max-w-5xl w-full pt-24 md:pt-28 pb-10">
        <img
          src="/agencies/image1.png"
          alt=""
          className="w-52 h-24 object-contain"
        />

        {/* <h1 className="text-4xl font-bold text-center">Upfluence</h1> */}

        <div className="flex flex-col gap-3 my-10">
          <p className="font-bold">
            MOMENTiQ is the premier influencer marketing agency. They run
            campaigns at the largest scale for the world’s leading brands,
            including The Grammy Awards and TikTok Shop itself. They specialize
            in launching brands/products on TikTok Shop & automating TikTok
            Shops marketing
          </p>
          <p>
            MOMENTiQ is a team of influencer marketing industry veterans that
            have created several of today’s leading influencer marketing
            agencies and platforms. They’ve served billions of impressions, are
            trusted by the world’s leading brands, and are known for delivering
            campaigns that create cultural moments. MOMENTiQ specializes in two
            types of campaigns: 1. TikTok Shop campaigns that drive
            conversions2. Brand Awareness campaigns at the largest scale
            <br />
            <br />
            They became the foremost leading experts in TikTok Shop early by
            running influencer marketing campaigns for TikTok Shop itself -
            launching and scaling Shop to the US.
            <br />
            <br />
            When Bytedance (TikTok’s parent company) launched TikTok Shop in the
            US, they partnered with MOMENTiQ to run the influencer campaigns
            that launch & scale TikTok Shop into the US. To this day, MOMENTiQ
            runs several campaigns for TikTok Shop themselves at a massive
            scale.
            <br />
            <br />
            Since then, MOMENTiQ has led the Shops revolution in the US.MOMENTiQ
            runs brands’ TikTok Shop marketing end-to-end. They create & deploy
            Shops influencer campaigns, as well as performance marketing Shops
            Ads campaigns that they layer on top of their Shops influencer
            campaigns.
            <br />
            <br />
            They’ve even created the industry’s first platform for launching
            products/brands on Shop and managing Shops marketing end-to-end.Put
            simply - MOMENTiQ is the one stop shop for leading brands on TikTok
            Shops.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {agencies.map((item, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <AgenciesCard key={i} data={item} />
          ))}
        </div>

        {/* Links yt tiktok */}
        <div className="flex flex-col gap-5 my-10">
          <hr className="h-1 bg-[#E6E6E6]" />
          <p className="text-sm text-[#A79A9ACF]">
            The agency specializes in marketing in the following areas:
          </p>
          <div className="flex gap-7">
            <Button
              className="bg-[#EB3C75] hover:bg-[#860e35] hover:border-[#860e35] duration-300 border border-[#EB3C75] rounded-md w-fit py-1 px-8 text-white flex items-center gap-3 text-sm sm:text-base"
              onClick={() => {
                // router.push(``);
              }}
            >
              Tiktok
            </Button>
            <Button
              className="bg-[#EB3C75] hover:bg-[#860e35] hover:border-[#860e35] duration-300 border border-[#EB3C75] rounded-md w-fit py-1 px-8 text-white flex items-center gap-3 text-sm sm:text-base"
              onClick={() => {
                // router.push(``);
              }}
            >
              Youtube
            </Button>
          </div>
        </div>

        {/* Links yt tiktok */}
        <div className="flex flex-col gap-3 my-10">
          <hr className="h-1 bg-[#E6E6E6]" />
          <p className="text-lg text-black font-bold">Services:</p>
          <p className=" text-black ">1. Influencer Marketing</p>
          <p className=" text-black ">2. UGC Content</p>
        </div>

        {/* Offices */}
        <div className="flex flex-col gap-3 my-10">
          <hr className="h-1 bg-[#E6E6E6]" />
          <p className="text-lg text-black font-bold">Offices:</p>
          <p className=" text-black ">Los Angeles</p>
        </div>

        {/* Brands */}
        <div className="flex flex-col gap-3 my-10">
          <hr className="h-1 bg-[#E6E6E6]" />
          <p className="text-2xl text-black font-bold">
            Brands we have worked with:
          </p>
          <div className="grid grid-cols-3 gap-8">
            <img
              src="/agencies/image1.png"
              alt=""
              className="w-52 h-24 object-contain"
            />
            <img
              src="/agencies/image1.png"
              alt=""
              className="w-52 h-24 object-contain"
            />
            <img
              src="/agencies/image1.png"
              alt=""
              className="w-52 h-24 object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
