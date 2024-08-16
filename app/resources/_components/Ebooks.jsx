"use client";
import { Button } from "@headlessui/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useRouter } from "next/navigation";

const Ebooks = () => {
  const router = useRouter();
  return (
    <section className="pb-5 px-5 md:pb-11 md:px-16">
      <div className="flex justify-between items-center px-5 mb-5">
        <h1 className="text-3xl font-bold">Ebooks</h1>
        <Button
          className="bg-[#EB3C75] hover:bg-[#860e35] duration-300 w-fit rounded-full py-3 px-7 text-sm sm:text-base text-white flex items-center gap-3"
          onClick={() => {
            router.push("/resources/ebook");
          }}
        >
          View All
          <ArrowLongRightIcon className="h-5 w-5" />
        </Button>
      </div>
      <hr className="h-1 bg-black" />
      <div className="my-0 px-0 lg:my-10 lg:px-20 mt-5">
        <div className="w-full flex flex-col md:flex-row gap-10 justify-center items-center text-center">
          <div className="md:max-w-[50%] overflow-hidden rounded-2xl">
            <img
              src="/resources/tool1.png"
              alt=""
              className="rounded-2xl object-cover cursor-pointer hover:scale-105 duration-300"
              onClick={() => {
                router.push("/resources/ebook/123");
              }}
            />
          </div>
          <div>
            <p className="text-xl font-semibold mt-7 text-[#EB3C75] text-center">
              Ebooks
            </p>
            <p
              className="text-2xl lg:text-3xl font-semibold mt-7 hover:text-[#EB3C75] duration-300 cursor-pointer"
              onClick={() => {
                router.push("/resources/ebook/123");
              }}
            >
              Influencer Marketing Agencies 2022
            </p>
          </div>
        </div>
        {/* <div className="flex mt-14 gap-20"> */}
        <div className="w-full mt-14 grid grid-cols-3 gap-10">
          <div className="col-span-3 md:col-span-1 overflow-hidden group text-center bg-[#00000005] rounded-2xl">
            <div className="w-full h-56 overflow-hidden rounded-ss-2xl rounded-se-2xl">
              <img
                src="/resources/tool3.png"
                alt=""
                className="w-full h-56 rounded-ss-2xl rounded-se-2xl object-cover cursor-pointer group-hover:scale-105 duration-300"
                onClick={() => {
                  router.push("/resources/ebook/123");
                }}
              />
            </div>
            <p className="text-xl font-semibold mt-7 text-[#EB3C75]">Ebooks</p>
            <p
              className="text-xl mt-5 font-bold mb-8 hover:text-[#EB3C75] duration-300 cursor-pointer"
              onClick={() => {
                router.push("/resources/ebook/123");
              }}
            >
              Instagram Hashtag Generator
            </p>
          </div>
          <div className="mt-10 md:mt-0 col-span-3 md:col-span-1 overflow-hidden group text-center bg-[#00000005] rounded-2xl">
            <div className="w-full h-56 overflow-hidden rounded-ss-2xl rounded-se-2xl">
              <img
                src="/resources/tool4.jpeg"
                alt=""
                className="w-full h-56 rounded-ss-2xl rounded-se-2xl object-cover cursor-pointer group-hover:scale-105 duration-300"
                onClick={() => {
                  router.push("/resources/ebook/123");
                }}
              />
            </div>
            <p className="text-xl font-semibold mt-7 text-[#EB3C75]">Ebooks</p>
            <p
              className="text-xl mt-5 font-bold mb-8 hover:text-[#EB3C75] duration-300 cursor-pointer"
              onClick={() => {
                router.push("/resources/ebook/123");
              }}
            >
              Instagram Hashtag Generator
            </p>
          </div>
          <div className="mt-10 md:mt-0 col-span-3 md:col-span-1 overflow-hidden group text-center bg-[#00000005] rounded-2xl">
            <div className="w-full h-56 overflow-hidden rounded-ss-2xl rounded-se-2xl">
              <img
                src="/resources/tool5.jpeg"
                alt=""
                className="w-full h-56 rounded-ss-2xl rounded-se-2xl object-cover cursor-pointer group-hover:scale-105 duration-300"
                onClick={() => {
                  router.push("/resources/ebook/123");
                }}
              />
            </div>
            <p className="text-xl font-semibold mt-7 text-[#EB3C75]">Ebooks</p>
            <p
              className="text-xl mt-5 font-bold mb-8 hover:text-[#EB3C75] duration-300 cursor-pointer"
              onClick={() => {
                router.push("/resources/ebook/123");
              }}
            >
              Instagram Hashtag Generator
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Ebooks;
