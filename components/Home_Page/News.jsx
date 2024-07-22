import Image from "next/image";
import React from "react";
import news1 from "../../assets/news1.png";
import news2 from "../../assets/news2.png";
import news3 from "../../assets/news3.png";
import { Button } from "@headlessui/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const News = () => {
  return (
    <section className="px-28 py-40 w-full min-h-[80vh]">
      <p className="text-4xl text-center font-semibold">Latest News</p>
      <div className="flex mt-14 gap-20 ">
        <div className="w-[55%]">
          <img src={news1.src} alt="" className="w-full" />
          <p className="text-4xl font-semibold mt-7">
            7 Essential Tools for Forward-Thinking Creative Agencies
          </p>
          <p className="text-base mt-5">
            Creative agencies work on many projects simultaneously, making
            advanced project management tools necessary. However, many agencies
            are still…
          </p>
          <Button className="bg-[#EB3C75] rounded-full py-3 px-7 text-white mt-5 flex items-center gap-3">
            Read More
            <ArrowLongRightIcon className="h-5 w-5" />
          </Button>
        </div>
        <div className="w-[45%]">
          <div>
            <img src={news2.src} alt="" className="w-full" />
            <p className="text-2xl font-semibold mt-7">
              8 Trends Shaping the Future of Creative Agencies
            </p>
            <p className="text-base mt-5">
              Creative agencies have an indisputable role as change agents amid
              evolving consumer behavior and client expectations. Agencies
              stretch…
            </p>
          </div>
          <div className="mt-10">
            <img src={news3.src} alt="" className="w-full" />
            <p className="text-2xl font-semibold mt-7">
              Ultimate Guide to Choosing Tools for Digital Marketing Agencies...
            </p>
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
