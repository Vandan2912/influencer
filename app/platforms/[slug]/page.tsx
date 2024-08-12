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
import Platforms from "../_components/Platforms";

const Page = () => {
  return (
    <main className="font-Gotham min-h-screen flex justify-center px-4 sm:px-10">
      <section className=" w-full pt-28 md:pt-28 pb-10 px-5 sm:px-10 md:px-20">
        <h1 className="text-4xl font-bold text-center">Influencer Marketing</h1>
        <Platforms /> 
      </section>
    </main>
  );
};

export default Page;
