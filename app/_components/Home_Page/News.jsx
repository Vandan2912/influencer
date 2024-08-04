"use client"

import Image from "next/image";
import React from "react";
import news1 from "../../../assets/news1.png";
import news2 from "../../../assets/news2.png";
import news3 from "../../../assets/news3.png";
import { Button } from "@headlessui/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import Link from "next/link";

const News = () => {
  const router = useRouter()
  return (
    <section className="px-6 py-12 lg:px-28 lg:py-28 w-full min-h-[80vh]">
      <p className="text-3xl lg:text-4xl text-center font-semibold">Latest News</p>
      <div className="flex mt-14 gap-20 flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-[55%] overflow-hidden group">
          <img src={news1.src} alt="" className="w-full mb-7 group-hover:scale-105 duration-300" />
          <Link href="/resources/tools/123" className="text-2xl lg:text-4xl font-semibold hover:text-[#EB3C75]">
            7 Essential Tools for Forward-Thinking Creative Agencies
          </Link>
          <p className="text-base mt-5">
            Creative agencies work on many projects simultaneously, making
            advanced project management tools necessary. However, many agencies
            are still…
          </p>
          <Button className="bg-[#EB3C75] hover:bg-[#860e35] duration-300 rounded-full py-3 px-7 text-white mt-5 flex items-center gap-3" onClick={()=>{router.push('/resources/tools/123')}}>
            Read More
            <ArrowLongRightIcon className="h-5 w-5" />
          </Button>
        </div>
        <div className="w-full lg:w-[45%] flex flex-col md:flex-row lg:flex-col gap-10">
          <div className="flex-1 group overflow-hidden">
            <img src={news2.src} alt="" className="w-full h-1/2 mb-7 group-hover:scale-105 duration-300" />
            <Link href="/resources/tools/123" className="text-2xl font-semibold hover:text-[#EB3C75]">
              8 Trends Shaping the Future of Creative Agencies
            </Link>
            <p className="text-base mt-5">
              Creative agencies have an indisputable role as change agents amid
              evolving consumer behavior and client expectations. Agencies
              stretch…
            </p>
          </div>
          <div className="group overflow-hidden mt-10 md:mt-0 lg:mt-10 flex-1">
            <img src={news3.src} alt="" className="w-full h-1/2 mb-7 group-hover:scale-105 duration-300" />
            <Link href="/resources/tools/123" className="text-2xl font-semibold hover:text-[#EB3C75]">
              Ultimate Guide to Choosing Tools for Digital Marketing Agencies...
            </Link>
            <p className="text-base mt-5">
              In the throes of 2024’s digital marketing agency arena, the
              tremors from OpenAI’s latest conference have sent a…
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
