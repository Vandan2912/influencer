import React from "react";
import image1 from "../../../assets/articles1.png";
import image2 from "../../../assets/articles2.png";
import image3 from "../../../assets/articles3.png";
import image4 from "../../../assets/articles4.png";
import image5 from "../../../assets/articles5.png";
import Image from "next/image";
import Link from "next/link";

const Articles = () => {
  return (
    <section className="px-6 py-12 lg:px-28 lg:py-28 w-full min-h-[80vh]">
      <p className="text-3xl lg:text-4xl text-center font-semibold">Latest Articles</p>
      <div className="grid grid-cols-12 gap-6 mt-10">
        <Card
          image={image1}
          title="A Deep Dive into Digital Marketing Metrics & KPIs"
          desc="In the early days of digital marketing, gauging success relied on responses; today, the landscape is defined by…"
          className="col-span-12 sm:col-span-6 md:col-span-4"
        />
        <Card
          image={image2}
          title="Content Marketing Guide for 2024 (Post-AI and Helpful-Content..."
          desc="Artificial intelligence is throwing content marketing on its head. On one end, you have unethical brands mass-producing bad…"
          className="col-span-12 sm:col-span-6 md:col-span-4"
        />
        <Card
          image={image3}
          title="5 Ways to Search a Website for Keywords"
          desc="Finding what keywords a particular website (or webpage) is using can open up a lot of opportunities for…"
          className="col-span-12 sm:col-span-6 md:col-span-4"
        />
        <Card
          image={image4}
          title="The Ultimate Guide to Performing a Competitive Analysis"
          desc="Business success requires a thorough understanding of your competition. Which is where performing a competitive analysis can help…"
          className="col-span-12 sm:col-span-6 md:col-span-3"
        />
        <Card
          image={image5}
          title="What Are Keyword Rankings & How to Improve Them"
          desc="Your website’s keyword rankings can impact how much traffic your website gets. And ultimately how much revenue you…"
          className="col-span-12 sm:col-span-6 md:col-span-3"
        />
        <div
          className="col-span-12 overflow-hidden sm:col-span-6 md:col-span-6 min-h-[40vh] sm:min-h-[unset] bg-[#00000025] rounded-[20px] relative"
          style={{
            backgroundImage: "url('/articles6.png')",
            backgroundSize: "cover",
          }}
        >
          {/* <Image src={image6.src} alt="" layout="fill" className="w-full object-cover" /> */}
          <div
            className="p-7 pb-5 md:pb-0 h-full flex flex-col justify-center rounded-[20px]"
            style={{
              background:
                "linear-gradient(271.57deg, rgba(255, 255, 255, 0.8) 3.2%, rgba(245, 245, 245, 0.8) 98.56%)",
            }}
          >
            <p className="text-lg md:text-5xl font-semibold mt-3">
              How to Get Backlinks: 10 Trusted Methods
            </p>
            <p className="text-base mt-3">
              The right backlinks act as endorsements from other websites that
              tell search engines your site is helpful, authoritative,…
            </p>
            <p className="bg-[#00000035] w-fit px-2 rounded-md mt-2">
              Digital Marketing
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <Link href="/articles" className=" linkHoverEffectWhite">
          See All Articles
        </Link>
      </div>
    </section>
  );
};

export default Articles;

const Card = ({ image, title, desc, className }) => {
  return (
    <div className={`${className} group bg-[#00000015] rounded-[20px] pb-6 cursor-pointer overflow-hidden`}>
      <img src={image.src} alt="" className="w-full object-cover group-hover:scale-110 scale-105 duration-300" />
      <div className="p-5 mt-3">
        <p className="bg-[#00000035] w-fit px-2 rounded-md">
          Digital Marketing
        </p>
        <Link href="#" className="text-base font-semibold mt-3">{title}</Link>
        <p className="text-sm mt-3">{desc}</p>
      </div>
    </div>
  );
};
