"use client";

import {
  Button,
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
import AgenciesCard from "../_components/AgenciesCard";
import { useRouter } from "next/navigation";
import Agencies from "../_components/Agencies";
import AgencyIndex from "../_components/AgencyIndex";
import FAQ from "../_components/FAQ";

const agencies = [
  {
    category: "momentiq",
    image: "image1.png",
    desc: "MOMENTiQ is the premier influencer marketing agency. They run campaigns at the largest scale for the world’s leading brands, including The Grammy Awards and TikTok Shop itself. They specialize in launching brands/products on TikTok Shop & automating TikTok Shops marketing...",
  },
  {
    category: "momentiq",
    image: "image1.png",
    desc: "MOMENTiQ is the premier influencer marketing agency. They run campaigns at the largest scale for the world’s leading brands, including The Grammy Awards and TikTok Shop itself. They specialize in launching brands/products on TikTok Shop & automating TikTok Shops marketing...",
  },
  {
    category: "momentiq",
    image: "image1.png",
    desc: "MOMENTiQ is the premier influencer marketing agency. They run campaigns at the largest scale for the world’s leading brands, including The Grammy Awards and TikTok Shop itself. They specialize in launching brands/products on TikTok Shop & automating TikTok Shops marketing...",
  },
];

const Page = () => {
  const router = useRouter();

  return (
    <main className="font-Gotham min-h-screen flex justify-center px-4 sm:px-10">
      <section className="w-full pt-24 md:pt-28 pb-10">
        <Agencies />
        <AgencyIndex />
        <FAQ />
      </section>
    </main>
  );
};

export default Page;
