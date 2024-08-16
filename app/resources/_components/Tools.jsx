"use client";

import { Button } from "@headlessui/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useRouter } from "next/navigation";

const Tools = () => {
  const router = useRouter();
  return (
    <section className="py-5 px-5 md:py-11 md:px-16">
      <div className="flex justify-between items-center px-5 mb-5">
        <h1 className="text-3xl font-bold">Tools</h1>
        <Button
          className="bg-[#EB3C75] hover:bg-[#860e35] duration-300 w-fit rounded-full py-3 px-7 text-sm sm:text-base text-white flex items-center gap-3"
          onClick={() => {
            router.push("/resources/tools");
          }}
        >
          View All
          <ArrowLongRightIcon className="h-5 w-5" />
        </Button>
      </div>
      <hr className="h-1 bg-black" />
      <div className="my-0 px-0 lg:my-10 lg:px-20">
        <p className="text-3xl lg:text-4xl text-center font-semibold">
          Latest News
        </p>
        <div className="flex mt-14 gap-20 flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-[55%] flex flex-col md:flex-row lg:flex-col gap-10">
            <div className="">
              <div className=" w-full overflow-hidden rounded-2xl">
                <img
                  src="/resources/tool1.png"
                  alt=""
                  className="w-full rounded-2xl object-cover cursor-pointer hover:scale-105 duration-300"
                  onClick={() => {
                    router.push("/resources/tools/influencer");
                  }}
                />
              </div>
              <p
                className="text-xl font-semibold mt-7 text-[#EB3C75] text-center"
                onClick={() => {
                  router.push("/resources/tools/influencer");
                }}
              >
                Influencer Marketing
              </p>
              <p
                className="text-2xl hover:text-[#EB3C75] duration-300 cursor-pointer lg:text-3xl font-semibold mt-7"
                onClick={() => {
                  router.push("/resources/tools/influencer");
                }}
              >
                TikTok Money Calculator [Influencer Engagement & Earnings]
              </p>
              <p className="text-base mt-5">
                The TikTok Money calculater allows you to calculater your
                estimated earning from Yours...
              </p>
            </div>
            <div className="">
              <div className="w-full overflow-hidden rounded-2xl">
                <img
                  src="/resources/tool2.jpeg"
                  alt=""
                  className="w-full rounded-2xl object-cover hover:scale-105 duration-300 cursor-pointer "
                  onClick={() => {
                    router.push("/resources/tools/influencer");
                  }}
                />
              </div>
              <p
                className="text-xl font-semibold mt-7 text-[#EB3C75] text-center"
                onClick={() => {
                  router.push("/resources/tools/influencer");
                }}
              >
                Influencer Marketing
              </p>
              <p
                className="text-2xl hover:text-[#EB3C75] duration-300 cursor-pointer lg:text-3xl font-semibold mt-7"
                onClick={() => {
                  router.push("/resources/tools/influencer");
                }}
              >
                TikTok Money Calculator [Influencer Engagement & Earnings]
              </p>
              <p className="text-base mt-5">
                The TikTok Money calculater allows you to calculater your
                estimated earning from Yours...
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[45%] flex flex-col md:flex-row lg:flex-col gap-10">
            <div className="text-center">
              <div className="w-full overflow-hidden rounded-2xl">
                <img
                  src="/resources/tool3.png"
                  alt=""
                  className="w-full max-h-56 rounded-2xl object-cover hover:scale-105 duration-300 cursor-pointer"
                />
              </div>
              <p className="text-xl font-semibold mt-7 text-[#EB3C75]">
                Influencer Marketing
              </p>
              <p
                className="text-2xl font-bold mt-3 hover:text-[#EB3C75] cursor-pointer"
                onClick={() => {
                  router.push("/resources/tools/influencer");
                }}
              >
                Instagram Hashtag Generator
              </p>
            </div>
            <div className="mt-10 md:mt-0 text-center">
              <div className="w-full overflow-hidden rounded-2xl">
                <img
                  src="/resources/tool4.jpeg"
                  alt=""
                  className="w-full max-h-56 rounded-2xl object-cover hover:scale-105 duration-300 cursor-pointer"
                />
              </div>
              <p className="text-xl font-semibold mt-7 text-[#EB3C75]">
                Influencer Marketing
              </p>
              <p
                className="text-2xl font-bold mt-3 hover:text-[#EB3C75] cursor-pointer"
                onClick={() => {
                  router.push("/resources/tools/influencer");
                }}
              >
                Instagram Hashtag Generator
              </p>
            </div>
            <div className="mt-10 md:mt-0 text-center">
              <div className="w-full overflow-hidden rounded-2xl">
                <img
                  src="/resources/tool5.jpeg"
                  alt=""
                  className="w-full max-h-56 rounded-2xl object-cover hover:scale-105 duration-300 cursor-pointer"
                />
              </div>
              <p className="text-xl font-semibold mt-7 text-[#EB3C75]">
                Influencer Marketing
              </p>
              <p
                className="text-2xl font-bold mt-3 hover:text-[#EB3C75] cursor-pointer"
                onClick={() => {
                  router.push("/resources/tools/influencer");
                }}
              >
                Instagram Hashtag Generator
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
