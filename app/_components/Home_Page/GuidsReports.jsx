"use client"

import React from "react";
import ai from "../../../assets/ai.png";
import inflation from "../../../assets/inflation.png";
import digital_marketing from "../../../assets/digital_marketing.png";
import { useRouter } from "next/navigation";

const GuidsReports = () => {
  const router = useRouter()
  return (
    <section className="px-6 py-12 lg:px-28 lg:py-24 bg-[#EFEBEB] w-full min-h-[80vh] flex flex-col gap-16">
      <div className="flex justify-between">
        <p className="text-2xl lg:text-4xl font-semibold">Guids & Reports</p>
        <div className="cursor-pointer linkHoverEffect" onClick={() => {
          router.push("/articles");
        }}>See All</div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-10">
        <Card
          image={ai}
          title="Artificial Intelligence (AI) Marketing Benchmark Report: 2023"
          desc="The AI Marketing Benchmark Report 2023 is our inaugural overview of the use of AI by the marketing…"
          tag="AI Marketing"
        />
        <Card
          image={inflation}
          title="May 2024 Influencer Marketing Report"
          desc="The Influencer Marketing Report May 2024 provides an in-depth look at the current state of the influencer marketing…"
          tag="Influencer Marketing"
        />
        <Card
          image={digital_marketing}
          title="Digital Marketing Benchmark Report 2024"
          desc="The Digital Marketing Benchmark Report 2024 offers an extensive analysis of the digital marketing landscape, gathering insights from…"
          tag="Digital Marketing"
        />
      </div>
    </section>
  );
};

export default GuidsReports;

const Card = ({ image, title, desc, tag }) => {
  const router = useRouter()
  return (
    <div className="group overflow-hidden col-span-3 md:col-span-1 bg-white rounded-[20px] pb-6 hover:shadow-[0_0_11px_rgba(33,33,33,.2)] duration-300 ">
      <img src={image.src} alt="" className="w-full max-h-52 object-cover rounded-ss-[20px] rounded-se-[20px] cursor-pointer group-hover:scale-105 duration-300" onClick={()=>{router.push("/resources/benchmark-report")}} />
      <div className="p-5">
        <p className="bg-[#00000020] w-fit px-2 rounded-md">{tag}</p>
        <p className="text-base font-semibold mt-3 cursor-pointer hover:text-[#EB3C75]" onClick={()=>{router.push("/resources/benchmark-report")}}>{title}</p>
        <p className="text-sm mt-3">{desc}</p>
      </div>
    </div>
  );
};
