"use client";
import {
  Button,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import React, { Fragment } from "react";
import { AnimatePresence, easeOut, motion } from "framer-motion";

const ArticleDetail = () => {
  return (
    <div className="mt-10 text-base">
      <h1 className="text-3xl font-bold">
        The State of Influencer Marketing 2024:
        <br />
        Benchmark Report
      </h1>
      <div className="flex justify-between gap-5 mt-7">
        <p>by Influencer Marketing Hub</p>
        <p>Last Updated: June 24th, 2024</p>
        <p>48 min read</p>
      </div>
      <hr className="h-1 bg-black mt-2 mb-8" />
      <p className="text-[#413F3F]">
        The Influencer Marketing Benchmark Report 2024 is our latest overview of
        the influencer marketing industry. It summarizes the thoughts of more
        than 3000 marketing agencies, brands, and other relevant professionals
        regarding the current state of influencer marketing, along with some
        predictions of how people expect it to move over the next year and into
        the future. 
      </p>

      <Button className="bg-[#EB3C75] hover:bg-[#860e35] duration-300 w-fit rounded-xl py-5 px-8 text-sm sm:text-base text-white my-8 flex items-center gap-3 mx-auto">
        Download the Benchmark Report Here
      </Button>

      <p>
        The world around us has changed considerably over the last few years.
        The arrival of Covid in 2020 turned much of the world on its head, with
        enforced lockdowns and scenes reminiscent of a Hollywood disaster movie.
        By 2024, however, much of the world has learned to live with Covid but
        struggled to cope with its financial fallout. We still suffer from
        supply chain disruptions, a chronic shortage of key workers, and
        creeping inflation threatening to unsettle the global economy. And that
        doesn’t even include the effects of Global Warming, associated climatic
        effects, and wars raging on multiple fronts. Unsurprisingly, many
        businesses have struggled to survive in this new environment. And those
        that have made it this far need to find new ways to market, so they
        stand out in the minds of consumers. Creator and influencer marketing
        appear to be more important than ever for connecting brands with their
        target customers. We’ve also seen major advances in artificial
        intelligence (AI) and machine learning (ML) in recent years. ChatGPT and
        other generative AI products have made a significant impact in many ways
        (not just “Deep Fakes” of Hollywood celebrities) and are now prevalent
        in many products we use daily. Google is experimenting with making AI an
        integral part of its search engine. Brands involved in influencer
        marketing can use AI in most phases of the process, from assisting
        influencer discovery to creating reports at the end of campaigns. If
        anything, however, we were surprised by how little change there has been
        in AI usage this year by the marketers who participated in our study,
        compared to results over the last few reports. As well as our annual
        survey collating data related to the influencer marketing industry, the
        Influencer Marketing Benchmark Report 2024 also incorporates data from
        HypeAuditor, and our{" "}
        <a
          href="#"
          className="text-[#EB3C75] hover:text-[#860e35] duration-300"
        >
          Diversity, Equity & Inclusion (DEI) in Influencer Marketing: Racial
          and Gender Inequalities Report.
        </a>
      </p>

      {/*  */}

      <hr className="h-1 bg-[#E6E6E6] my-8" />

      <h2
        id="platform-preferences-in-fnfluencer-marketing"
        className="text-xl font-bold mb-3 mt-5"
      >
        The State of Influencer Marketing Benchmark Report 2024:
      </h2>
      {/* Summary */}
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

      {/*  */}

      <hr className="h-1 bg-[#E6E6E6] my-8" />

      <h2
        id="platform-preferences-in-fnfluencer-marketing"
        className="text-xl font-bold mb-3 mt-5"
      >
        Notable Highlights
      </h2>

      <ul className="list-disc mx-4 ps-5 my-3">
        <li>
          Instagram remains a staple for influencer campaigns, utilized by 39.2%
          of respondents.
        </li>
        <li>
          Nano influencers (1K–10K followers) are primarily engaged by 53.8% of
          brands, underscoring their cost-effectiveness and high engagement
          rates.
        </li>
        <li>
          Micro influencers follow, engaged by 21.6% of respondents, balancing
          reach and relatability.
        </li>
        <li>
          Macro and mega influencers are utilized less frequently, highlighting
          a strategic focus on influencers who resonate more genuinely with
          niche audiences.
        </li>
        <li>
          Instagram remains a staple for influencer campaigns, utilized by 39.2%
          of respondents.
        </li>
        <li>
          Nano influencers (1K–10K followers) are primarily engaged by 53.8% of
          brands, underscoring their cost-effectiveness and high engagement
          rates.
        </li>
        <li>
          Micro influencers follow, engaged by 21.6% of respondents, balancing
          reach and relatability.
        </li>
        <li>
          Macro and mega influencers are utilized less frequently, highlighting
          a strategic focus on influencers who resonate more genuinely with
          niche audiences.
        </li>
      </ul>
      <p>
        Last year&apos;s data from our annual Influencer Marketing Benchmark
        Report, which asked respondents &quot;Which channels do you
        predominantly tap into for influencer marketing campaigns?&quot;
        indicated a much higher preference for TikTok, with 67.8% of brands
        leveraging it for their campaigns. This contrasts with this year&apos;s
        survey phrasing, &quot;Which platforms do you primarily use for
        influencer marketing campaigns?&quot; where only 38% of respondents
        indicated TikTok as their choice.
      </p>

      {/*  */}
      <hr className="h-1 bg-[#E6E6E6] my-8" />

      <h2
        id="budget-allocation-across-influencer-tiers"
        className="text-xl font-bold mb-3 mt-5"
      >
        Survey Methodology
      </h2>
      <p>
        We surveyed approximately 3000 people from a range of backgrounds. 41.9%
        of our respondents work at marketing agencies (including those
        specializing in influencer marketing), and 22.3% consider themselves
        brands (or brand representatives). 5% are PR agencies. We merged the
        remaining 30.8% as Other, representing a wide range of occupations and
        sectors. In the 2022 and 2023 reports, we saw a relative increase in B2B
        businesses over B2C firms compared to 2021. However, this year we had a
        noticeable increase in B2C respondents. 73.1% of those surveyed identify
        as part of the B2C sector (up from 62%), with the remaining 26.9% (down
        from 38%) running B2B campaigns. The most popular vertical represented
        remains Fashion & Beauty (21.6% of respondents, down from last
        year&apos;s 25%). Gaming became the second-most popular sector (11.9%),
        followed by Sports (8.6%). Also at 8.6%, Travel and Lifestyle was only
        two-thirds as popular a category for respondents this year than last.
        Family, Parenting & Home (7.6%) also decreased representation in 2024.
        After a big drop last year, Health and Fitness rebounded slightly to a
        7.6% share. However, the notable change this year was the expansion of
        the category we’ve called Other to cover 34.1% of the respondents (more
        than any individual category). This covers every other vertical
        imaginable and signifies the variety of respondents we had for our
        survey. We have once again noticed a widespread global response to this
        year’s survey. 19.5% of respondents came from Asia (APAC) (14% in 2023)
        and another 19.5% came from the USA (16% in 2023).  14% of our
        respondents come from Africa (31% in 2023), 10% in South America (4% in
        2023), and 8.6% from Europe (8% in 2023). 28.5% describe their location
        as Other (28% 2023). It is highly likely that most respondents who
        selected Other come from Canada, Mexico, or other parts of North
        America. The bulk of our respondents came from relatively small
        organizations, with 35.6% representing companies with fewer than ten
        employees. 21.5% had 10-50 employees, 12.3% 50-100, 14.2% 100-1,000, and
        16.4% came from large enterprises with more than 1,000 employees.
        Overall, this spread is very similar to last year’s sample. We’ve
        noticed an increase in the percentage of our respondents who operate
        eCommerce stores compared to those who don&apos;t. For example, 57.6% of
        the respondents run eCommerce stores versus 42.4% not doing so. This
        represents a noticeable increase in the percentage of
        influencer-contracting brands operating eCommerce stores. Last year, 51%
        of such brands ran eCommerce stores. This is surprisingly high. Remember
        that our survey respondents come from various backgrounds – brands,
        marketing agencies, PR agencies, and &quot;Other&quot;. Clearly,
        eCommerce is increasing in popularity for all types of businesses.
        Website management systems with eCommerce capabilities, such as Shopify,
        now make it easy for even small businesses to set up an online store.
        Consumers now expect to do much of their everyday shopping online, and
        even many traditional brick-and-mortar stores now make this easy.
        However, one thing to be aware of is that the Influencer Marketing Hub
        now caters to all types of online marketing. A more significant portion
        of the site is now devoted to articles about eCommerce than in previous
        years. As a result, we may have a higher percentage of eCommerce
        marketers (compared to influencer marketers) visiting the site and
        answering our survey than previously.
      </p>
    </div>
  );
};

export default ArticleDetail;
