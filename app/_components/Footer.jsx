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

          <a href="/articles">
            <p className="text-sm">Articles</p>
          </a>
          <a href="/platforms">
            <p className="text-sm">Platforms</p>
          </a>
          <a href="/agencies">
            <p className="text-sm">Agencies</p>
          </a>
          <a href="/resources">
            <p className="text-sm">Resources</p>
          </a>
          <a href="/contact">
            <p className="text-sm">Contact Us</p>
          </a>
        </div>
        <div className="col-span-6 md:col-span-4 flex flex-col gap-3">
          <p className="text-lg mb-3">Popular</p>

          <a href="/platforms/influencer">
            <p className="text-sm">Influencer Marketing Platforms</p>
          </a>
          <a href="/agencies/influencer">
            <p className="text-sm">Influencer Marketing Agencies</p>
          </a>
          <a href="/platforms/social">
            <p className="text-sm">Social Media Marketing Platforms</p>
          </a>
          <a href="/agencies/social">
            <p className="text-sm">Social Media Agencies</p>
          </a>
          <a href="/platforms/email">
            <p className="text-sm">Email Marketing Software</p>
          </a>
          <a href="/agencies/email">
            <p className="text-sm">Digital Marketing Agencies</p>
          </a>
        </div>

        <div className="col-span-6 md:col-span-3 flex flex-col gap-3">
          <p className="text-lg mb-3">Free Tools</p>

          <a href="/resources/tools">
            <p className="text-sm">TikTok Engagement Calculator</p>
          </a>
          <a href="/resources/tools">
            <p className="text-sm">Instagram Calculator</p>
          </a>
          <a href="/resources/tools">
            <p className="text-sm">YouTube Calculator</p>
          </a>
          <a href="/resources/tools">
            <p className="text-sm">Glossary</p>
          </a>
          <a href="/resources/tools">
            <p className="text-sm">Image Resizer</p>
          </a>
        </div>

        <div className="col-span-6 md:col-span-2 flex flex-col gap-3">
          <p className="text-lg mb-3">Other Links</p>

          <a href="/cookies">
            <p className="text-sm">Cookie Policy</p>
          </a>
          <a href="/privacy">
            <p className="text-sm">Privacy Policy</p>
          </a>
          <a href="/terms-conditions">
            <p className="text-sm">Terms & Conditions</p>
          </a>
          <a href="#1">
            <p className="text-sm">Affiliate Disclaimer</p>
          </a>
          <a href="/login">
            <p className="text-sm">Member Login</p>
          </a>
          <a href="#1">
            <p className="text-sm">Authors and Experts</p>
          </a>
          <a href="/about">
            <p className="text-sm">Agency Hub</p>
          </a>
        </div>
      </div>
      <hr className="h-[1px]" />
      <div className="px-6 py-12 lg:px-28 lg:py-9 flex flex-col-reverse lg:flex-row gap-10 justify-between items-center w-full">
        <p>Copyright 2024 influencermarketinghub. all rights reserved</p>
        <div className="flex gap-5">
          <div className="flex justify-center items-center bg-[#EB3C7526] h-6 w-6">
            <img src={twitterIcon.src} alt="twitterIcon" className="h-4 w-4" />
          </div>
          <div className="flex justify-center items-center bg-[#EB3C7526] h-6 w-6">
            <img src={facebookIcon.src} alt="twitterIcon" className="h-4 w-4" />
          </div>
          <div className="flex justify-center items-center bg-[#EB3C7526] h-6 w-6">
            <img
              src={instagramIcon.src}
              alt="twitterIcon"
              className="h-4 w-4"
            />
          </div>
          <div className="flex justify-center items-center bg-[#EB3C7526] h-6 w-6">
            <img src={ticktokIcon.src} alt="twitterIcon" className="h-4 w-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
