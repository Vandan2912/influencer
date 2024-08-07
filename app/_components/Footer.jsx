"use client"

import React from "react";
import twitterIcon from "../../assets/x.png";
import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram.png";
import ticktokIcon from "../../assets/tiktokIcon.png";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname()
  return (
    <footer className="bg-[#02021E] text-white" style={{
      display: pathname == "/login" && "none",
    }}>
      <div className="px-6 py-12 lg:px-28 lg:py-16 grid grid-cols-12 gap-6">
        <div className="col-span-6 md:col-span-3 flex flex-col gap-3">
          <p className="text-lg mb-3">Company</p>

          <a className="cursor-default" href="/articles">
            <p className="text-sm cursor-pointer w-fit">Articles</p>
          </a>
          <a className="cursor-default" href="/platforms">
            <p className="text-sm cursor-pointer w-fit">Platforms</p>
          </a>
          <a className="cursor-default" href="/agencies">
            <p className="text-sm cursor-pointer w-fit">Agencies</p>
          </a>
          <a className="cursor-default" href="/resources">
            <p className="text-sm cursor-pointer w-fit">Resources</p>
          </a>
          <a className="cursor-default" href="/contact">
            <p className="text-sm cursor-pointer w-fit">Contact Us</p>
          </a>
        </div>
        <div className="col-span-6 md:col-span-4 flex flex-col gap-3">
          <p className="text-lg mb-3">Popular</p>

          <a className="cursor-default" href="/platforms/influencer">
            <p className="text-sm cursor-pointer w-fit">Influencer Marketing Platforms</p>
          </a>
          <a className="cursor-default" href="/agencies/influencer">
            <p className="text-sm cursor-pointer w-fit">Influencer Marketing Agencies</p>
          </a>
          <a className="cursor-default" href="/platforms/social">
            <p className="text-sm cursor-pointer w-fit">Social Media Marketing Platforms</p>
          </a>
          <a className="cursor-default" href="/agencies/social">
            <p className="text-sm cursor-pointer w-fit">Social Media Agencies</p>
          </a>
          <a className="cursor-default" href="/platforms/email">
            <p className="text-sm cursor-pointer w-fit">Email Marketing Software</p>
          </a>
          <a className="cursor-default" href="/agencies/email">
            <p className="text-sm cursor-pointer w-fit">Digital Marketing Agencies</p>
          </a>
        </div>

        <div className="col-span-6 md:col-span-3 flex flex-col gap-3">
          <p className="text-lg mb-3">Free Tools</p>

          <a className="cursor-default" href="/resources/tools">
            <p className="text-sm cursor-pointer w-fit">TikTok Engagement Calculator</p>
          </a>
          <a className="cursor-default" href="/resources/tools">
            <p className="text-sm cursor-pointer w-fit">Instagram Calculator</p>
          </a>
          <a className="cursor-default" href="/resources/tools">
            <p className="text-sm cursor-pointer w-fit">YouTube Calculator</p>
          </a>
          <a className="cursor-default" href="/resources/tools">
            <p className="text-sm cursor-pointer w-fit">Glossary</p>
          </a>
          <a className="cursor-default" href="/resources/tools">
            <p className="text-sm cursor-pointer w-fit">Image Resizer</p>
          </a>
        </div>

        <div className="col-span-6 md:col-span-2 flex flex-col gap-3">
          <p className="text-lg mb-3">Other Links</p>

          <a className="cursor-default" href="/cookies">
            <p className="text-sm cursor-pointer w-fit">Cookie Policy</p>
          </a>
          <a className="cursor-default" href="/privacy">
            <p className="text-sm cursor-pointer w-fit">Privacy Policy</p>
          </a>
          <a className="cursor-default" href="/terms-conditions">
            <p className="text-sm cursor-pointer w-fit">Terms & Conditions</p>
          </a>
          <a className="cursor-default" href="/affiliate-disclaimer">
            <p className="text-sm cursor-pointer w-fit">Affiliate Disclaimer</p>
          </a>
          <a className="cursor-default" href="/login">
            <p className="text-sm cursor-pointer w-fit">Member Login</p>
          </a>
          {/* <a className="cursor-default" href="#1">
            <p className="text-sm cursor-pointer w-fit">Authors and Experts</p>
          </a> */}
          <a className="cursor-default" href="/about">
            <p className="text-sm cursor-pointer w-fit">Agency Hub</p>
          </a>
        </div>
      </div>
      <hr className="h-[1px]" />
      <div className="px-6 py-12 lg:px-28 lg:py-9 flex flex-col-reverse lg:flex-row gap-10 justify-between items-center w-full">
        <p>Copyright 2024 influencer marketing hub. all rights reserved</p>
        <div className="flex gap-5">
          <div className="flex justify-center items-center bg-[#EB3C7526] h-6 w-6 cursor-pointer">
            <img src={twitterIcon.src} alt="twitterIcon" className="h-4 w-4" />
          </div>
          <div className="flex justify-center items-center bg-[#EB3C7526] h-6 w-6 cursor-pointer">
            <img src={facebookIcon.src} alt="twitterIcon" className="h-4 w-4" />
          </div>
          <div className="flex justify-center items-center bg-[#EB3C7526] h-6 w-6 cursor-pointer">
            <img
              src={instagramIcon.src}
              alt="twitterIcon"
              className="h-4 w-4"
            />
          </div>
          <div className="flex justify-center items-center bg-[#EB3C7526] h-6 w-6 cursor-pointer">
            <img src={ticktokIcon.src} alt="twitterIcon" className="h-4 w-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
