"use client";
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
import { HeartIcon, PlayIcon, UsersIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { useState } from "react";
import FAQ from "./FAQ";

const ArticleDetail = () => {
  const [show, setShow] = useState(false);
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
      <h2 className="text-[#413F3F] text-xl font-bold mt-8">
        Instagram Money & Engagement Calculator:
      </h2>
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
      <h2 className="text-[#413F3F] text-xl font-bold mt-8">
        Instagram Influencer Earnings Calculator
      </h2>
      <p className="my-5">
        The tools below are not official Instagram tools and are not in any way
        associated with or endorsed by Instagram. This tool was developed to
        provide earning potential guidelines to influencers.
      </p>
      <div className="flex flex-col shadow-md rounded-lg mt-5 overflow-hidden">
        <div
          className="p-10"
          style={{
            background:
              " transparent linear-gradient(103deg, #F0AF58 0%, #EA5140 50%, #9563BA 100%) 0% 0% no-repeat padding-box",
          }}
        >
          <h2
            id="instagram-money-engagement-calculator"
            className="text-white text-xl font-bold text-center"
          >
            Instagram Influencer Earnings Calculator
          </h2>
          <div className="flex gap-3 mt-3 justify-center items-end">
            <div className="w-full max-w-md px-4">
              <Field>
                <Label className="text-sm/6 text-white">Project status</Label>
                <div className="relative">
                  <Select
                    className={clsx(
                      "block w-full appearance-none rounded-lg border-none bg-white/10 py-1.5 px-3 text-sm/6 text-white",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                      // Make the text of each option black on Windows
                      "*:text-black"
                    )}
                  >
                    <option value="fitness">Fitness</option>
                    <option value="fashion">Fashion</option>
                    <option value="beauty">Beauty</option>
                    <option value="travel">Travel</option>
                    <option value="gaming">Gaming</option>
                    <option value="other">Other</option>
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
                  placeholder="e.g. 10000"
                  className={clsx(
                    " block w-full rounded-lg border-none bg-white/10 py-2.5 px-3 text-sm/6 text-white placeholder:text-white/60",
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
                  placeholder="e.g. 10000"
                  className={clsx(
                    " block w-full rounded-lg border-none bg-white/10 py-2.5 px-3 text-sm/6 text-white placeholder:text-white/60",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  )}
                />
              </Field>
            </div>
            <Button
              className="inline-flex h-[36px] items-center gap-2 rounded-md bg-white py-1.5 px-3 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-200 duration-300 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
              onClick={() => {
                setShow(true);
              }}
            >
              Calculate
            </Button>
          </div>
        </div>
        {
          <div
            className="grid grid-cols-2 gap-y-5 duration-500"
            style={{
              height: show ? "auto" : "0px",
              marginTop: show ? "1.25rem" : "0px",
            }}
          >
            <div className="col-span-1 flex flex-col justify-center items-center pr-8 ml-auto w-fit gap-1 border-r border-gray-300">
              <UsersIcon className="h-14 w-14 text-[#EB3C75]" />
              <span className="font-bold text-xs">Followers</span>
              <span className="bg-[#eb3c7612] w-fit px-14 py-2 rounded-md">
                1,111
              </span>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center pl-8 mr-auto w-fit gap-1">
              <HeartIcon className="h-14 w-14 text-[#EB3C75]" />
              <span className="font-bold text-xs">Average Likes / Post</span>
              <span className="bg-[#eb3c7612] w-fit px-14 py-2 rounded-md">
                1,111
              </span>
            </div>
            <div className="col-span-2 border-t border-gray-300 py-8 grid grid-cols-7">
              <div className="col-span-3 flex flex-col justify-center items-center pr-8 mx-auto w-fit gap-1 border-r border-gray-300">
                <span className="font-bold text-xs">Engagement Rate</span>
                <span className="text-3xl font-bold w-fit px-14 py-2 rounded-md">
                  100.00%
                </span>
              </div>
              <div className="col-span-4 flex flex-col justify-center items-center pl-8 mx-auto w-fit gap-1">
                <span className="font-bold text-xs">
                  Estimated Earnings Per Post
                </span>
                <span className="text-3xl font-bold w-fit px-14 py-2 rounded-md">
                  $626 - $939
                </span>
              </div>
            </div>
          </div>
        }
      </div>

      {/* Notes */}
      <div className="bg-[#e8e8e8] p-10 my-10 text-sm">
        <b>Note:</b>
        <br />
        <br />
        Unlike with YouTube, where you sell space on your videos and channel
        page for advertising at a rate decided by Google, Instagram does not
        compensate its users for running ads on their posted photos. Facebook
        owns Instagram, so it seeds Facebook ads on people&apos;s posts. As
        such, Instagram influencers and brands don&apos;t have an intermediary
        or set rates if they choose to work together. Brands themselves make
        deals with influencers, and rates can vary markedly depending on the
        circumstances. However, one thing is consistent in nearly all cases -
        Influencers get paid more if they have both a high engagement rate and a
        high number of followers. Brands have learned that you can easily buy
        followers of no practical value to anybody. Hence, they are far more
        interested in you having genuine followers - those who truly interact
        with your posts.
        <br />
        <br />
        Compared to other social media channels, Instagram accounts have
        relatively high interaction levels. For instance, the average Facebook
        or Twitter user has an engagement rate of only 0.5 - 1.0%. The average
        Instagram account, though, has an engagement rate of 3%. Any engagement
        rate above that, combined with a high number of followers, suggests that
        you are an influencer amongst your peers. Our Instagram Earnings
        Estimator takes these factors into account. We look at the average
        engagement rates of your Instagram posts (engagement being likes and
        comments on your posts). Example: If your engagement rate is less than
        8% and you have less than 1000 followers, you can expect to receive less
        payment from brands than those influencers who exceed the average
        engagement rates on their posts. Also see the average engagement rates
        by amount of followers in the above graph.
        <br />
        <br />
        From a brand&apos;s point of view, the niche makes a difference too. For
        instance, fashion firms are far more likely to work with high-profile
        name influencers than firms selling bathroom fittings and businesses set
        their budgets accordingly.
      </div>

      <div className="aa">
        <h2
          id="average-engagement-rates-by-network"
          className="text-2xl font-bold"
        >
          Average Engagement Rates by Network
        </h2>
        <img
          src="/resources/instagram-engagement-rates.png.webp"
          alt=""
          className="w-full object-contain"
        />
      </div>
      {/* cdcdsc */}
      <hr className="h-[1px] bg-black w-full mt-8" />
      <h2
        id="Growing your Instagram Account [Free Instagram Hashtag Generator]"
        className="text-xl font-bold mb-3 mt-5"
      >
        Growing your Instagram Account [Free Instagram Hashtag Generator]
      </h2>
      <p>
        Instagram does not have a standard way of making money, unlike YouTube
        and its Google Ads. Therefore, as an influencer, it is up to you to find
        brands willing to pay you directly.
        <br />
        <br />
        One caveat is if you are large enough to be accepted into one of the
        influencer marketing platforms. In this situation, you can register your
        interest, and if they accept you as being influential enough, they will
        include you in their databases, and suitable brands may come to you if
        you meet the profile of the type of influencer they are looking for. We
        highlight the main Influencer Marketing Platforms here.
        <br />
        <br />
        Any Instagrammer wishing to earn money needs to make building up a
        strong and loyal following their priority task. You can help improve
        your standing here by:
      </p>
      <ul className="list-disc mx-4 ps-5 my-3">
        <li>
          Perfecting your bio so it is very clear who you are and whom you want
          to follow you
        </li>
        <li>
          Posting regularly. Like most social media, Instagram likes to see
          evidence of regular posting - not sudden splurges when you feel you
          have some spare time
        </li>
        <li>
          Post high-quality original photos. Try and take pictures using a
          decent camera rather than simply using the one in your cellphone. You
          need to be known for producing seriously good content (which, in the
          case of Instagram, is high-quality pictures)
        </li>

        <li>
          Use relevant hashtags so people in your niche will find you by your
          tagged images
        </li>
        <li>
          Engage with your followers - comment on and like their images, and
          they are more likely to do the same in return to yours. Also, see this
          article
        </li>
        <li>
          Use Hashtags - use the Instagram Hashtag Generator to generate
          hashtags from your images using Artificial Intelligence.
        </li>
      </ul>

      {/*  */}

      <hr className="h-[1px] bg-black w-full mt-8" />
      <h2 id="Sponsored Posts" className="text-xl font-bold mb-3 mt-5">
        Sponsored Posts
      </h2>
      <p>
        The most common form of cooperation between brands and Instagram
        influencers is through sponsored posts. Our calculator above is designed
        to show estimated earnings from sponsored posts. In this situation, a
        brand normally reaches out to somebody it considers an influencer and
        offer to pay them to push out a sponsored image to their followers.
        <br />
        <br />
        Of course, to be effective, a sponsored post has to sit well with the
        influencer&apos;s audience and appear like a genuine recommendation from
        the influencer. The FTC has gotten involved in recent years, and it is
        now a requirement that sponsored posts are clearly marked as such. If
        the product fits well with the Instagrammers audience, it should not
        matter if a post is marked #sponsored or #ad.
        <br />
        <br />
        The ideal sponsored post shows how the brand&apos;s product fits
        perfectly into the Instagrammer&apos;s life and how it can just as
        easily fit into the lives of his or her followers. It is not unheard of
        for those with more than 100,000 followers to earn $700-$900 per photo.
        Those with 500,000 followers can command $2,000 to $3,000 per sponsored
        photo posted.
        <br />
        <br />
        Then, of course, there are the superstars. Kim Kardashian can command up
        to $850,000 for a post across all of her social media platforms. Of
        course, her 364 million Instagram followers do put her in a class of her
        own! A typical post by any of the Kardashian / Jenners clan usually
        earns at least $200,000. Often, Instagrammers create the content, and
        the brand then has the rights to reuse that content in their marketing
        and on their website.
      </p>

      {/*  */}

      <hr className="h-[1px] bg-black w-full mt-8" />
      <h2 id="Affiliate Marketing" className="text-xl font-bold mb-3 mt-5">
        Affiliate Marketing
      </h2>
      <p>
        Just as a blogger can promote an affiliate product on his or her blog,
        an Instagrammer can promote an affiliate product in his or her posts.
        You could work with a site like Shareasale to find suitable products to
        promote.
        <br />
        <br />
        Of course, like all influencer marketing, this will only be effective if
        the product you are promoting fits nicely with your followers. If it
        looks like an ad for an unconnected product, your followers will be
        unimpressed and won&apos;t follow the link. They may even unfollow you
        in protest.
        <br />
        <br />
        One technical hurdle with affiliate marketing on Instagram is that you
        share photos - not links. One way around this is to include the
        affiliate link (which you should put through a link shortener first) in
        your photo captions.
      </p>

      {/*  */}

      <hr className="h-[1px] bg-black w-full mt-8" />
      <h2
        id="Use Your Instagram Account to Market Your Own Business"
        className="text-xl font-bold mb-3 mt-5"
      >
        Use Your Instagram Account to Market Your Own Business
      </h2>
      <p>
        Of course, if you are a successful Instagrammer, large enough to be
        considered an influencer, you can promote your own products. Even the
        big names, such as Justin Bieber, use their Instagram accounts for this
        purpose. These are similar to sponsored posts, except this time, the
        images are of your own products.
        <br />
        <br />
        These may be images of merchandise you have created especially because
        of your fame, for instance, a t-shirt promoting your Instagram feed, or
        they may refer to some business or product you are involved with. For
        instance, pop star Delta Goodrem used her Instagram account to launch a
        new fragrance line a few years back.
        <br />
        <br />
        Your aim, as an Instagrammer, is to build up both your following and
        your engagement. If you are successful in building both to high levels,
        you definitely have the opportunity to make money through your Instagram
        account.
      </p>

      {/*  */}
      <FAQ />
      {/*  */}
    </div>
  );
};

export default ArticleDetail;
