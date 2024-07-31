"use client"

import React from "react";
import modash from "../../../assets/modash.png";
import ubiquitous from "../../../assets/ubiquitous.png";
import insightIQ from "../../../assets/insightIQ.png";
import skeepers from "../../../assets/skeepers.png";
import { Button } from "@headlessui/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const Agencies = () => {
  return (
    <section className="px-6 py-12 lg:px-28 lg:py-24 bg-white w-full min-h-[80vh] flex flex-col gap-8 lg:gap-16">
      <p className="text-3xl lg:text-4xl text-center font-semibold">Top Agencies</p>
      <div className="grid grid-cols-2 gap-6 lg:mt-10">
        <Card
          image={modash}
          title="Modash"
          desc="Ten years ago, if someone said to you, “Content creators for me were kind of the beacon of hope; they were the people I looked up to,” you’d pause for a second before asking, “What’s a content creator?” But social media..."
          color="#343a41"
        />
        <Card
          image={ubiquitous}
          title="Ubiquitous"
          desc="While TikTok had reached “most downloaded app” status by 2018, it wasn’t until 2020 when the social network really became enmeshed in our cultural fabric. TikTok was a major way that people connected during the pandemic as..."
          color="#fff"
        />
        <Card
          image={insightIQ}
          title="InsightIQ"
          desc="Overview The world of influencer marketing is awash with platforms of all kinds: There are influencer marketplaces, influencer relationship platforms, analytics platforms, and end-to-end suites that cover just about everything. What the..."
          color="#f0f0f0"
        />
        <Card
          image={skeepers}
          title="Skeepers"
          desc="Overview Influencer marketing, for all its 21st century bells and whistles, is just a more advanced, programmatic form of word-of-mouth marketing. Word-of-mouth marketing, of course, is just a more programmatic version of actual..."
          color="#fff"
        />
      </div>
      <div className="text-[#EB3C75] text-center mt-10 underline">
        See All Agencies
      </div>
    </section>
  );
};

export default Agencies;

const Card = ({ image, title, desc, color = "black" }) => {
  const router = useRouter()
  return (
    <div className="col-span-2 bg-white rounded-[20px] flex flex-col sm:flex-row min-h-[25vh] border border-[#00000033] p-5">
      <div
        className="w-full sm:w-1/5 rounded-[20px]"
        style={{
          backgroundColor: color,
        }}
      >
        <img
          src={image.src}
          alt=""
          className="w-full h-full object-contain rounded-[20px]"
        />
      </div>

      <div className="ps-0 sm:ps-10 pe-0 sm:pe-5 flex w-full sm:w-4/5 gap-5 sm:gap-10 flex-col lg:flex-row">
        <div className="flex flex-col">
          <p className="text-lg font-semibold mt-3">{title}</p>
          <p className="text-sm mt-3">{desc}</p>
        </div>
        <Button className="w-fit border border-[#EB3C75] text-[#EB3C75] hover:bg-[#EB3C75] rounded-full py-3 px-7 hover:text-white mt-0 sm:mt-5 flex items-center gap-3 shrink-0 h-fit" onClick={()=>{
          router.push(`/agencies/${title}`)
        }}>
          View Details
          <ArrowLongRightIcon className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
