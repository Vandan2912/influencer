import {
  Button,
  Description,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Field,
  Input,
  Label,
  Select,
} from "@headlessui/react";
import { PlayIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";

const ArticleDetail = () => {
  return (
    <div className="mt-10 text-base">
      <p>
        The <b>Instagram Money Calculator</b> allows you to calculate your
        estimated earnings from your Instagram account if you are an influencer
        based on your engagement and number of followers. Below are some stats
        relating to engagement on Instagram, followed by the{" "}
        <b>Instagram Influencer Earnings Calculator.</b>
      </p>
      {/* Summary */}
      <hr className="h-[1px] bg-black w-full mt-8" />
      <h1 className="text-[#413F3F] text-xl font-bold mt-8">
        Instagram Money & Engagement Calculator:
      </h1>
      <div className="mt-5">
        <div className="bg-[#EB3C75] text-white text-lg font-bold p-3 text-center rounded-ss-xl rounded-se-xl border border-[#EB3C75]">
          Summary
        </div>
        <div className="bg-white border-[#EB3C75] border-x border-b px-3 py-5">
          <Disclosure as="div" className="p-2">
            <DisclosureButton className="group flex w-full items-center gap-2">
              <PlayIcon className="size-5 text-[#EB3C75] group-data-[open]:rotate-90" />
              <span className="text-sm/6 font-medium text-black">Pricing</span>
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-black ps-8">
              If you&apos;re unhappy with your purchase, we&apos;ll refund you
              in full.
            </DisclosurePanel>
          </Disclosure>
          <Disclosure as="div" className="p-2">
            <DisclosureButton className="group flex w-full items-center gap-2">
              <PlayIcon className="size-5 text-[#EB3C75] group-data-[open]:rotate-90" />
              <span className="text-sm/6 font-medium text-black">
                The Details
              </span>
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-black ps-8">
              If you&apos;re unhappy with your purchase, we&apos;ll refund you
              in full.
            </DisclosurePanel>
          </Disclosure>
          <Disclosure as="div" className="p-2">
            <DisclosureButton className="group flex w-full items-center gap-2">
              <PlayIcon className="size-5 text-[#EB3C75] group-data-[open]:rotate-90" />
              <span className="text-sm/6 font-medium text-black">
                Conclusion
              </span>
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-black ps-8">
              If you&apos;re unhappy with your purchase, we&apos;ll refund you
              in full.
            </DisclosurePanel>
          </Disclosure>
          <Disclosure as="div" className="p-2">
            <DisclosureButton className="group flex w-full items-center gap-2">
              <PlayIcon className="size-5 text-[#EB3C75] group-data-[open]:rotate-90" />
              <span className="text-sm/6 font-medium text-black">FAQ</span>
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-black ps-8">
              If you&apos;re unhappy with your purchase, we&apos;ll refund you
              in full.
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
      {/* Calculator */}
      <hr className="h-[1px] bg-black w-full mt-8" />
      <h1 className="text-[#413F3F] text-xl font-bold mt-8">
        Instagram Influencer Earnings Calculator
      </h1>
      <p className="my-5">
        The tools below are not official Instagram tools and are not in any way
        associated with or endorsed by Instagram. This tool was developed to
        provide earning potential guidelines to influencers.
      </p>
      <div
        className="mt-5 p-10 rounded-lg"
        style={{
          background:
            " transparent linear-gradient(103deg, #F0AF58 0%, #EA5140 50%, #9563BA 100%) 0% 0% no-repeat padding-box",
        }}
      >
        <h1 className="text-white text-xl font-bold text-center">
          Instagram Influencer Earnings Calculator
        </h1>

        <div className="flex gap-3 mt-3 justify-center items-end">
          <div className="w-full max-w-md px-4">
            <Field>
              <Label className="text-sm/6 text-white">Project status</Label>
              <div className="relative">
                <Select
                  className={clsx(
                    "block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                    // Make the text of each option black on Windows
                    "*:text-black"
                  )}
                >
                  <option value="active">Active</option>
                  <option value="paused">Paused</option>
                  <option value="delayed">Delayed</option>
                  <option value="canceled">Canceled</option>
                </Select>
                <ChevronDownIcon
                  className="group pointer-events-none absolute top-2.5 right-2.5 size-4 text-white"
                  aria-hidden="true"
                />
              </div>
            </Field>
          </div>
          <div className="w-full max-w-md px-4">
            <Field>
              <Label className="text-sm/6 text-white">Followers</Label>
              <Input
                className={clsx(
                  " block w-full rounded-lg border-none bg-white/5 py-2.5 px-3 text-sm/6 text-white",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
              />
            </Field>
          </div>
          <div className="w-full max-w-md px-4">
            <Field>
              <Label className="text-sm/6 text-white">
                Avg. Likes / Posts:
              </Label>
              <Input
                className={clsx(
                  " block w-full rounded-lg border-none bg-white/5 py-2.5 px-3 text-sm/6 text-white",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
              />
            </Field>
          </div>
          <Button className="inline-flex h-[36px] items-center gap-2 rounded-md bg-white py-1.5 px-3 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-200 duration-300 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            Calculate
          </Button>
        </div>
      </div>

      {/* cdcdsc */}
      <div
        id="note"
        className="bg-[#EFEFEF] border-l-[1rem] border-l-[#EB3C75] p-8 my-5 rounded-se-2xl rounded-ee-2xl"
      >
        In our survey marketing professionals revealed a landscape where 66.8%
        are planning to increase their{" "}
        <a href="#" className="text-[#EB3C75]">
          influencer marketing budgets
        </a>{" "}
        in the coming year, signaling a robust confidence not seen in other
        sectors. This contrasts sharply with the general anxiety surrounding
        more traditional digital marketing tactics, such as SEO, which
        constantly grapple with{" "}
        <a href="#" className="text-[#EB3C75]">
          Google&apos;s algorithm changes
        </a>
        .
      </div>
      <h2
        id="platform-preferences-in-fnfluencer-marketing"
        className="text-xl font-bold mb-3 mt-5"
      >
        Platform Preferences in Influencer Marketing
      </h2>
      <p>
        The landscape of influencer marketing platforms remains highly
        competitive and diverse. According to our survey:
      </p>
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
      <h2
        id="budget-allocation-across-influencer-tiers"
        className="text-xl font-bold mb-3 mt-5"
      >
        Budget Allocation Across Influencer Tiers
      </h2>
      <p>
        Marketers show a clear preference for more accessible influencers,
        indicating a shift towards authenticity:
      </p>
      <ul className="list-disc mx-4 ps-5 my-3">
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
    </div>
  );
};

export default ArticleDetail;
