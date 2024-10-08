"use client";

import {
  Button,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import React, { Fragment } from "react";
import {
  ArrowLongRightIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, easeOut, motion } from "framer-motion";

const Page = () => {
  return (
    <main className="font-Gotham min-h-screen flex justify-center px-4 sm:px-10">
      <section className="max-w-4xl w-full pt-24 md:pt-28 pb-10">
        <h1 className="text-4xl font-bold text-center">Upfluence</h1>

        {/* company detail box */}
        <div className="flex mt-10 gap-10 items-center justify-between border border-[#00000033] px-8 py-6 rounded-2xl">
          <div className="text-center max-w-[40%] sm:max-w-52 ">
            <img src="/platforms/upfluence.png" alt="" />
            <p>4.8 out of 5 stars</p>
          </div>
          <div className="flex flex-1  gap-5 sm:flex-row flex-col sm:justify-evenly">
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-bold">Best For:</p>
                <p>E-commerce</p>
              </div>
              <div>
                <p className="font-bold">Pricing:</p>
                <p>From $478</p>
              </div>
            </div>
            <Button className="group hover:bg-[#EB3C75] duration-300 bg-white border h-fit w-fit border-[#EB3C75] rounded-full py-1 px-5 md:px-8 text-[#EB3C75] hover:text-white mt-5 flex items-center gap-3">
              Summarize
              <ArrowLongRightIcon className="h-6 w-6 text-[#EB3C75] group-hover:text-white" />
            </Button>
          </div>
        </div>

        {/* Text */}
        <p className="text-[#413F3F] mt-5">
          Upfluence was created when co-founders Kevin Creusy and Vivien Garnès
          were looking for a way to build organic collaborations to market their
          necktie business. At its core, influencer marketing is all about
          leveraging genuine connection and affinity. That’s why Upfluence
          software was launched to enable brands and agencies to turn their
          customers into brand ambassadors and run profitable and scalable
          influencer marketing campaigns. Every aspect of influencer campaigns
          can be managed in one place; from influencer search and
          identification, to outreach, sending briefs, making payments and
          tracking performance, including tracking of personalized coupon codes
          and sales.
          <br />
          <br />
          Upfluence’s offering is tailored for direct-to-consumer and eCommerce
          brands, with powerful integrations with Shopify, WooCommerce, Klaviyo,
          Zapier and more that help brands to uncover influencers within their
          network of customers, subscribers and followers. Using consumer and
          influencer data insights, brands are equipped to choose the best
          partners for their campaigns. Brands can drive online sales with
          affiliate campaigns thanks to native promo code generation and
          tracking within Upfluence.
        </p>

        {/* pros and cons */}
        <div className="bg-[#fffafc] mt-10 p-5 grid grid-cols-4 gap-5 rounded-xl">
          <div className="col-span-4 sm:col-span-1 flex flex-col gap-3">
            <img
              src="/platforms/upfluence.png"
              alt=""
              className="w-1/2 sm:w-full mx-auto sm:mx-0"
            />
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="col-span-4 sm:col-span-3 grid grid-cols-5 gap-1">
            {/* 1st column */}
            <div className="col-span-3 flex flex-col gap-1">
              <div className="bg-[#EB3C75] text-white border-2 border-white p-2 rounded text-sm font-bold">
                Pros and Cons
              </div>
              <div className="flex-1 flex flex-col gap-3 bg-white px-3 py-5">
                <div className="flex gap-3 text-sm">
                  <PlusIcon className="h-5 w-5 text-green-600" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </div>
                <div className="flex gap-3 text-sm">
                  <PlusIcon className="h-5 w-5 text-green-600" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </div>
                <div className="flex gap-3 text-sm">
                  <PlusIcon className="h-5 w-5 text-green-600" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </div>
                <div className="flex gap-3 text-sm">
                  <MinusIcon className="h-5 w-5 text-red-600" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </div>
                <div className="flex gap-3 text-sm">
                  <MinusIcon className="h-5 w-5 text-red-600" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </div>
              </div>
              <div className="bg-[#f96496] text-white border-2 border-white p-2 rounded text-sm">
                Best for: E-commerce Business
              </div>
            </div>
            {/* 2nd column */}
            <div className="col-span-2 flex flex-col gap-1">
              <div className="bg-[#EB3C75] text-white border-2 border-white p-2 rounded text-sm font-bold">
                Ratings
              </div>
              <div className="flex-1 flex flex-col gap-3 bg-white px-5 py-5">
                <div className="flex flex-col gap-1 text-sm">
                  <div className="flex justify-between gap-3 text-sm">
                    <p>Features</p>
                    <p>5.0</p>
                  </div>
                  <hr
                    className="h-1 bg-[#d2f8ef]"
                    style={{
                      width: `${500 / 5}%`,
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1 text-sm">
                  <div className="flex justify-between gap-3 text-sm">
                    <p>Ease of Use</p>
                    <p>4.6</p>
                  </div>
                  <hr
                    className="h-1 bg-[#d2f8ef]"
                    style={{
                      width: `${460 / 5}%`,
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1 text-sm">
                  <div className="flex justify-between gap-3 text-sm">
                    <p>Reporting</p>
                    <p>3.0</p>
                  </div>
                  <hr
                    className="h-1 bg-[#d2f8ef]"
                    style={{
                      width: `${300 / 5}%`,
                    }}
                  />
                </div>
              </div>
              <div className="bg-[#f96496] text-white border-2 border-white p-2 rounded text-sm flex justify-between">
                <p>Over Score:</p>
                <p>4.5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <h1 className="text-[#413F3F] text-xl font-bold mt-10">
          Summary By quick jump
        </h1>
        <div className="mt-5">
          <div className="bg-[#EB3C75] text-white text-lg font-bold p-3 text-center rounded-ss-xl rounded-se-xl border border-[#EB3C75]">
            Summary
          </div>
          <div className="bg-white border-[#EB3C75] border-x border-b px-3 py-5">
            <Disclosure as="div" className="p-2">
              {({ open }) => (
                <>
                  <DisclosureButton className="group w-fit flex items-center gap-2">
                    <PlayIcon className="size-5 text-[#EB3C75] group-hover:scale-100 scale-90 group-data-[open]:rotate-90 duration-300" />
                    <span className="text-sm/6 font-medium text-black group-hover:text-[#EB3C75] duration-300">
                      Pricing
                    </span>
                  </DisclosureButton>
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel static as={Fragment}>
                        <motion.div
                          initial={{ opacity: 0, y: -24 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -24 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="mt-2 text-sm/5 text-black ps-8"
                        >
                          If you&apos;re unhappy with your purchase, we&apos;ll
                          refund you in full.
                        </motion.div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="p-2">
              {({ open }) => (
                <>
                  <DisclosureButton className="group w-fit flex items-center gap-2">
                    <PlayIcon className="size-5 text-[#EB3C75] group-hover:scale-100 scale-90 group-data-[open]:rotate-90 duration-300" />
                    <span className="text-sm/6 font-medium text-black group-hover:text-[#EB3C75] duration-300">
                      The Details
                    </span>
                  </DisclosureButton>
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel static as={Fragment}>
                        <motion.div
                          initial={{ opacity: 0, y: -24 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -24 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="mt-2 text-sm/5 text-black ps-8"
                        >
                          If you&apos;re unhappy with your purchase, we&apos;ll
                          refund you in full.
                        </motion.div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="p-2">
              {({ open }) => (
                <>
                  <DisclosureButton className="group w-fit flex items-center gap-2">
                    <PlayIcon className="size-5 text-[#EB3C75] group-hover:scale-100 scale-90 group-data-[open]:rotate-90 duration-300" />
                    <span className="text-sm/6 font-medium text-black group-hover:text-[#EB3C75] duration-300">
                      Conclusion
                    </span>
                  </DisclosureButton>
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel static as={Fragment}>
                        <motion.div
                          initial={{ opacity: 0, y: -24 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -24 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="mt-2 text-sm/5 text-black ps-8"
                        >
                          If you&apos;re unhappy with your purchase, we&apos;ll
                          refund you in full.
                        </motion.div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="p-2">
              {({ open }) => (
                <>
                  <DisclosureButton className="group w-fit flex items-center gap-2">
                    <PlayIcon className="size-5 text-[#EB3C75] group-hover:scale-100 scale-90 group-data-[open]:rotate-90 duration-300" />
                    <span className="text-sm/6 font-medium text-black group-hover:text-[#EB3C75] duration-300">
                      FAQ
                    </span>
                  </DisclosureButton>
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel static as={Fragment}>
                        <motion.div
                          initial={{ opacity: 0, y: -24 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -24 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="mt-2 text-sm/5 text-black ps-8"
                        >
                          If you&apos;re unhappy with your purchase, we&apos;ll
                          refund you in full.
                        </motion.div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
