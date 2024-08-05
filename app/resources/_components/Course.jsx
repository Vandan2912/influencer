"use client";
import { Button } from "@headlessui/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import avatar from "../../../assets/avatar.png";
import { useRouter } from "next/navigation";

const Course = ({ title, cources }) => {
  const router = useRouter();
  return (
    <section className="pb-5 px-5 md:pb-11 md:px-16 mt-8">
      <div className="flex justify-between items-center px-5 mb-5">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{title}</h1>
        <Button
          className="bg-[#EB3C75] hover:bg-[#860e35] duration-300 w-fit rounded-full py-3 px-7 text-sm sm:text-base text-white flex items-center gap-3"
          onClick={() => {
            router.push("/resources/cources");
          }}
        >
          View All
          <ArrowLongRightIcon className="h-5 w-5" />
        </Button>
      </div>
      <hr className="h-1 bg-black" />
      <div className="my-0 px-0 lg:my-10 lg:px-20 mt-5">
        <div className="w-full mt-14 grid grid-cols-3 gap-10">
          {cources.map((course, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div
              key={i}
              className="group overflow-hidden border border-[#00000013] cursor-pointer hover:shadow-[0_0_11px_rgba(33,33,33,.2)] duration-300 col-span-3 md:col-span-1 text-center bg-[#00000005] rounded-2xl"
              onClick={() => {
                router.push("/resources/ebook/123");
              }}
            >
              <img
                src="/resources/tool3.png"
                alt=""
                className="w-full h-56 rounded-ss-2xl rounded-se-2xl object-cover group-hover:scale-110 duration-300"
              />
              <div className="p-3">
                <p className="mt-2">
                  Learn How To Build Your Personal Brands On TikTok
                </p>
                <p className="font-semibold mt-2 mb-5">TikTok Influencer</p>
                <div className="flex justify-between items-end gap-5">
                  <div className="flex justify-center gap-2">
                    <img
                      src={avatar.src}
                      alt=""
                      className="bg-[#C7B9DA] h-10 w-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-bold">Olivia Rhye</p>
                      <p className="text-sm text-[#667085]">20 Jan 2022</p>
                    </div>
                  </div>
                  <p className="font-bold">$56</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Course;
