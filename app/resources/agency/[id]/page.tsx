"use client";

import {
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
import AgenciesCard from "../_components/AgenciesCard";

const agencies = [
  {
    category: "momentiq",
    image: "image1.png",
    desc: "SociallyIn offers creative content tailored to each business, offering influencer marketing, social media solutions, social media advertising & more....",
  },
  {
    category: "momentiq",
    image: "image2.png",
    desc: "New Offer: Try before you buy! First 30 days on us, with a 90-day no risk guarantee. Only qualifying brands. AUTHENTICITY WINS™ Disruptive Advertising is the best performance marketing agency for authentic brands and marketers....",
  },
  {
    category: "momentiq",
    image: "image3.png",
    desc: "Thrive Internet Marketing Agency is a full service agency specializing in SEO, PPC, Social Media Management, Web Design, Link Building, and more....",
  },
];

const tags = [
  {
    title: "Blog",
    bg: "#000000",
    color: "#FFFFFF",
    hoverBg: "#333333",
  },
  {
    title: "Facebook",
    bg: "#3b5998",
    color: "#FFFFFF",
    hoverBg: "#2d4373",
  },
  {
    title: "Google",
    bg: "#4285F4",
    color: "#FFFFFF",
    hoverBg: "#357ae8",
  },
  {
    title: "Google Ads",
    bg: "#FF9900",
    color: "#FFF",
    hoverBg: "#e68a00",
  },
  {
    title: "Instagram",
    bg: "#C13584",
    color: "#FFFFFF",
    hoverBg: "#a02a6f",
  },
  {
    title: "LinkedIn",
    bg: "#0077B5",
    color: "#FFFFFF",
    hoverBg: "#005582",
  },
  {
    title: "Pinterest",
    bg: "#E60023",
    color: "#FFFFFF",
    hoverBg: "#c8102e",
  },
  {
    title: "Podcast",
    bg: "#D44F72",
    color: "#FFFFFF",
    hoverBg: "#b33a5a",
  },
  {
    title: "Quora",
    bg: "#B92B27",
    color: "#FFFFFF",
    hoverBg: "#a11e1b",
  },
  {
    title: "Reddit",
    bg: "#FF4500",
    color: "#FFFFFF",
    hoverBg: "#e03d00",
  },
  {
    title: "Snapchat",
    bg: "#FFFC00",
    color: "#000000",
    hoverBg: "#f7f700",
  },
  {
    title: "Spotify",
    bg: "#1DB954",
    color: "#FFFFFF",
    hoverBg: "#1ed760",
  },
  {
    title: "TikTok",
    bg: "#000000",
    color: "#FFFFFF",
    hoverBg: "#333333",
  },
  {
    title: "Twitter (X)",
    bg: "#1DA1F2",
    color: "#FFFFFF",
    hoverBg: "#0d95e8",
  },
  {
    title: "WhatsApp",
    bg: "#25D366",
    color: "#FFFFFF",
    hoverBg: "#20b15a",
  },
  {
    title: "YouTube",
    bg: "#FF0000",
    color: "#FFFFFF",
    hoverBg: "#cc0000",
  },
  {
    title: "YouTube Advertising",
    bg: "#FF0000",
    color: "#FFFFFF",
    hoverBg: "#cc0000",
  },
];

const Page = () => {
  const router = useRouter();

  return (
    <main className="font-Gotham min-h-screen flex justify-center px-4 sm:px-10">
      <section className="max-w-5xl w-full pt-24 md:pt-28 pb-10">
        <img
          src="/resources/Directive-Consulting.webp"
          alt=""
          className="w-52 h-24 object-contain"
        />

        {/* <h1 className="text-4xl font-bold">Directive Consulting</h1> */}

        <div className="flex flex-col gap-3 my-10">
          <p className="font-bold">
            The world&apos;s largest SaaS brands trust Directive to bring their
            performance marketing campaigns to life across Paid Media, SEO,
            Creative, Strategy, Lifecycle Marketing, & Video. Directive&apos;s
            proven Customer Generation methodology has generated +$1B in revenue
            for clients.
          </p>
          <p>
            The world&apos;s largest tech brands trust the global team at
            Directive Consulting to bring their performance marketing campaign
            results to life. Directive&apos;s proven Customer Generation
            methodology has generated +$1B in revenue for clients in the last 10
            years by blending best-in-class campaigns across Paid Media, SEO,
            Creative, Strategy, Lifecycle Marketing, and Video. It&apos;s time
            for tech companies to stop guessing about marketing ROI and start
            predicting sales revenue with industry-leading financial modeling.
            Build a winning game plan with Directive today.
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
          <div className="flex gap-4 flex-wrap">
            {tags.map((tag, index) => (
              <Button
                key={index}
                style={{
                  backgroundColor: tag.bg,
                  color: tag.color,
                  borderColor: tag.bg,
                }}
                className={`border duration-300 hover:bg-[${tag.hoverBg}] hover:border-[${tag.hoverBg}]`}
                onClick={() => {
                  // Add navigation or any other action here
                }}
              >
                {tag.title}
              </Button>
            ))}
          </div>
        </div>

        {/* Links yt tiktok */}
        <div className="flex flex-col gap-3 my-10">
          <hr className="h-1 bg-[#E6E6E6]" />
          <p className="text-lg text-black font-bold">Services:</p>
          <ul className="list-disc mx-4 ">
            <li>PPC Management</li>
            <li>Content & SEO</li>
            <li>Lifecycle Marketing (Revenue Operations)</li>
            <li>Creative</li>
            <li>Performance Marketing</li>
            <li>GTM Strategy</li>
            <li>Video Production</li>
            <li>SEM (Search Engine Marketing)</li>
            <li>B2B SaaS Marketing</li>
            <li>Paid Social</li>
            <li>Customer Generation</li>
            <li>LinkedIn Advertising</li>
            <li>Google Ads Management</li>
            <li>Microsoft Ads Management</li>
            <li>Paid Media</li>
            <li>Integrated Strategy</li>
          </ul>
        </div>

        {/* Offices */}
        <div className="flex flex-col gap-3 my-10">
          <hr className="h-1 bg-[#E6E6E6]" />
          <p className="text-lg text-black font-bold">Offices:</p>
          <p className=" text-black ">Irvine, California</p>
        </div>

        {/* Brands */}
        <div className="flex flex-col gap-3 my-10">
          <hr className="h-1 bg-[#E6E6E6]" />
          <p className="text-2xl text-black font-bold">
            Brands we have worked with:
          </p>
          <div className="grid grid-cols-6 gap-8">
            {Array.from({ length: 3 }, (_, index) => (
              <>
                <div className="col-span-6 sm:col-span-3 md:col-span-2 p-5 rounded-lg border border-gray-200">
                  <img
                    src="/resources/Gong.webp"
                    alt=""
                    className="w-full h-full object-contain sm:grayscale hover:grayscale-0 duration-500"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 md:col-span-2 p-5 rounded-lg border border-gray-200">
                  <img
                    src="/resources/amazon.webp"
                    alt=""
                    className="w-full h-full object-contain sm:grayscale hover:grayscale-0 duration-500"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 md:col-span-2 p-5 rounded-lg border border-gray-200">
                  <img
                    src="/resources/adobe.webp"
                    alt=""
                    className="w-full h-full object-contain sm:grayscale hover:grayscale-0 duration-500"
                  />
                </div>
              </>
            )).flat()}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;

const Button = ({
  className,
  style,
  onClick,
  children,
}: {
  className: any;
  style: any;
  onClick: any;
  children: any;
}) => (
  <button
    className={`rounded-md w-fit py-1 px-4 flex items-center gap-3 text-sm sm:text-base ${className}`}
    style={style}
    onClick={onClick}
  >
    {children}
  </button>
);
