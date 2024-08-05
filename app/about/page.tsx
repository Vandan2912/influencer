import { ArrowLongRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import avatar from "../../assets/avatar.png";
import { Button } from "@headlessui/react";

const Page = () => {
  return (
    <main className="font-Gotham min-h-screen py-24 px-5 sm:py-28 sm:px-10 lg:py-28 lg:px-16 max-w-5xl mx-auto">
      <section className="flex justify-center">
        <div className="max-w-3xl">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            About Influencer Marketing Hub
          </h1>
          <p className="mt-5">
            The Influencer Marketing Benchmark Report 2024 is our latest
            overview of the influencer marketing industry. It summarizes the
            thoughts of more than 3000 marketing agencies, brands, and other
            relevant professionals regarding the current state of influencer
            marketing, along with some predictions of how people expect it to
            move over the next year and into the future. 
          </p>
          <img src="/about-company.png" alt="" className="mx-auto mt-10" />
        </div>
      </section>
      <section className="my-10 flex justify-center">
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 sm:col-span-1 border border-[#00000023] hover:shadow-[0_0_11px_rgba(33,33,33,.2)] duration-300 p-5 rounded-lg bg-[#EB3C7599] text-white">
            <h5 className="text-xl font-bold"> Our Research </h5>
            <p>
              At Influencer Marketing Hub, we are at the forefront of
              deciphering the complexities of the digital and influencer
              marketing landscapes. Our dedication to understanding the nuances
              of this rapidly evolving industry is reflected in our extensive
              body of work. With over 6,000 articles and 100 detailed reports,
              we&apos;ve amassed an impressive collection of 4.21 million data
              points from our global surveys, providing us with unparalleled
              insights into marketing trends.
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1 border border-[#00000023] hover:shadow-[0_0_11px_rgba(33,33,33,.2)] duration-300 p-5 rounded-lg bg-[#E9E0E0]">
            <h5 className="text-xl font-bold"> Mission statement </h5>
            <p>
              Influencer Marketing Hub aims to provide the most comprehensive
              reviews of marketing software and services globally, enabling
              brands and marketing decision makers to make smarter decisions
              around their marketing stack.
            </p>
          </div>
        </div>
      </section>
      <section className="my-10 bg-[#F3EDED] p-10 rounded-lg border border-[#00000023] hover:shadow-[0_0_11px_rgba(33,33,33,.2)] duration-300">
        <h5 className="text-lg font-bold">How We Make Money</h5>
        <p>
          At Influencer Marketing Hub, we forge partnerships that may influence
          the lineup of products or services we review, as well as their
          placement on our website. However, this does not sway the counsel or
          endorsements we bestow. Our assessments emerge from extensive
          experience and relentless research, untainted by compensation. Our
          partners are aware that their support cannot buy our favorable
          judgment of their offerings.
          <br />
          <br />
          The integrity behind our content is paramount. When we feature a
          product, service, or application within our analyses or editorials, we
          may embed affiliate links. These links present an opportunity for us
          to earn a referral fee if you decide to utilize the service,
          contributing to our mission of delivering insightful content. This
          financial model underpins our platform and enables continual growth.
          <br />
          <br />
          Yet, our allegiance lies unwaveringly with you, our audience. Every
          review is rooted in rigorous testing and is a reflection of our
          genuine opinion. Our enthusiasm for a product is only shared if we
          find merit in it ourselves. And should our experience fall short of
          our expectations, we maintain the candor to voice our true
          perspective, independent of any commercial ties. For an in-depth
          understanding of our principles, please refer to our full disclosure
          page.
        </p>
      </section>
      <section className="grid grid-cols-1 gap-5 my-10">
        <div className="">
          <h5 className="text-xl font-bold text-center mb-5"> Featured</h5>
          <p>
            Influencer Marketing Hub has consistently been recognized by leading
            media outlets for our authoritative data, findings, and insights.
            Our platform is frequently cited as a trusted source of information,
            demonstrating the value and impact of our work in shaping industry
            standards and practices.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-6 sm:col-span-3 md:col-span-2 flex gap-2">
            <div>
              <PlusIcon className="h-5 w-5 mt-1 text-[#EB3C75]" />
            </div>
            <div>
              <b> Forbes </b> has referenced our comprehensive research and
              analysis, highlighting our contributions to understanding{" "}
              <span className="text-[#EB3C75]">
                market trends and digital marketing strategies.
              </span>
            </div>
          </div>
          <div className="col-span-6 sm:col-span-3 md:col-span-2 flex gap-2">
            <div>
              <PlusIcon className="h-5 w-5 mt-1 text-[#EB3C75]" />
            </div>
            <div>
              <b> Forbes </b> has referenced our comprehensive research and
              analysis, highlighting our contributions to understanding{" "}
              <span className="text-[#EB3C75]">
                market trends and digital marketing strategies.
              </span>
            </div>
          </div>{" "}
          <div className="col-span-6 sm:col-span-3 md:col-span-2 flex gap-2">
            <div>
              <PlusIcon className="h-5 w-5 mt-1 text-[#EB3C75]" />
            </div>
            <div>
              <b> Forbes </b> has referenced our comprehensive research and
              analysis, highlighting our contributions to understanding{" "}
              <span className="text-[#EB3C75]">
                market trends and digital marketing strategies.
              </span>
            </div>
          </div>{" "}
          <div className="col-span-6 sm:col-span-3 md:col-span-2 flex gap-2">
            <div>
              <PlusIcon className="h-5 w-5 mt-1 text-[#EB3C75]" />
            </div>
            <div>
              <b> Forbes </b> has referenced our comprehensive research and
              analysis, highlighting our contributions to understanding{" "}
              <span className="text-[#EB3C75]">
                market trends and digital marketing strategies.
              </span>
            </div>
          </div>{" "}
          <div className="col-span-6 sm:col-span-3 md:col-span-2 flex gap-2">
            <div>
              <PlusIcon className="h-5 w-5 mt-1 text-[#EB3C75]" />
            </div>
            <div>
              <b> Forbes </b> has referenced our comprehensive research and
              analysis, highlighting our contributions to understanding{" "}
              <span className="text-[#EB3C75]">
                market trends and digital marketing strategies.
              </span>
            </div>
          </div>{" "}
          <div className="col-span-6 sm:col-span-3 md:col-span-2 flex gap-2">
            <div>
              <PlusIcon className="h-5 w-5 mt-1 text-[#EB3C75]" />
            </div>
            <div>
              <b> Forbes </b> has referenced our comprehensive research and
              analysis, highlighting our contributions to understanding{" "}
              <span className="text-[#EB3C75]">
                market trends and digital marketing strategies.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10 bg-[#F3EDED] p-7 rounded-lg border border-[#00000023] hover:shadow-[0_0_11px_rgba(33,33,33,.2)] duration-300">
        <h5 className="text-lg font-bold text-center">The Core Team</h5>
        <p>
          In an era where misinformation and intransparency are all too common,
          we dedicate ourselves to delivering well-researched, transparent, and
          actionable insights. Our collective expertise spans across strategic
          growth, technological innovation, content creation, and motion
          graphics, ensuring that every piece of information we share is both
          engaging and educational.
        </p>
      </section>
      <section className="my-10 p-1 md:p-7 rounded-lg">
        <p className="text-[#6941C6] text-sm text-center">we&apos;re hiring</p>
        <h5 className="text-lg font-bold text-center">Meet Our Team</h5>
        <div className="px-10 md:px-20 grid grid-cols-6 gap-10 mt-7">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section className="my-10 grid grid-cols-2 gap-10">
        <div className="col-span-2 sm:col-span-1 flex flex-col justify-between gap-8">
          <div>
            <h6 className="font-bold mb-8">Software</h6>
            <p>
              At Influencer Marketing Hub, our software testing review
              methodology is anchored in a rigorous, standardized process to
              deliver trustworthy, unbiased insights. We meticulously evaluate
              each software through real-world testing, executed by seasoned
              experts with extensive digital marketing experience. Our
              methodology encompasses a detailed exploration of features,
              performance benchmarking against industry standards, and
              comprehensive comparative analysis. We take pride in our
              transparent approach, fully disclosing our testing environments
              and parameters. Our commitment to accuracy and impartiality is
              underpinned by our policy to re-evaluate software in response to
              significant updates, ensuring our reviews remain relevant and
              reliable. This unwavering dedication to detail and objectivity
              cements our reviews as a paragon of trust within the digital
              marketing community.
            </p>
          </div>
          <Button
            className="bg-[#EB3C75] hover:bg-[#860e35] duration-300 hover:border-[#860e35] border border-[#EB3C75] rounded-md w-fit py-1 px-8 text-white flex items-center gap-3 text-sm sm:text-base"
            // onClick={() => {
            //   // router.push(``);
            // }}
          >
            View All
            <ArrowLongRightIcon className="h-5 w-5" />
          </Button>
        </div>
        <div className="col-span-2 sm:col-span-1 flex flex-col justify-between gap-8">
          <div>
            <h6 className="font-bold mb-8">Agency</h6>
            <p>
              Our agency evaluation methodology at Influencer Marketing Hub is
              meticulously designed to assess the qualitative facets of service
              delivery, providing a transparent and trustworthy overview of each
              marketing agency&apos;s capabilities. We scrutinize the
              professional acumen of agency teams, dissect rich case studies,
              and gather authentic client testimonials to paint a complete
              picture of each agency&apos;s service impact. Our evaluations also
              consider the breadth of services, industry specialization, and
              evidence of strategic innovation. We are committed to maintaining
              ethical standards in our reviews, highlighting potential conflicts
              of interest and ensuring that each agency&apos;s adherence to
              industry compliance is closely examined. This holistic and
              ethically grounded approach underpins the trust our readers place
              in our recommendations, allowing them to make informed decisions
              with confidence.
            </p>
          </div>
          <Button
            className="bg-[#EB3C75] hover:bg-[#860e35] hover:border-[#860e35] duration-300 border border-[#EB3C75] rounded-md w-fit py-1 px-8 text-white flex items-center gap-3 text-sm sm:text-base"
            // onClick={() => {
            //   // router.push(``);
            // }}
          >
            View All
            <ArrowLongRightIcon className="h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Page;

const Card = () => {
  return (
    <div className="bg-[#F3EDED] border border-[#00000023] hover:shadow-[0_0_11px_rgba(33,33,33,.2)] duration-300 col-span-6 sm:col-span-3 md:col-span-2 rounded-md flex flex-col items-center justify-center gap-3 p-6 text-sm text-center">
      <img
        src={avatar.src}
        alt=""
        className="bg-[#C7B9DA] h-20 w-20 rounded-full"
      />
      <div>
        <p className="font-bold">Olivia Rhye</p>
        <p className="text-[#6941C6]">Founder & CEO</p>
      </div>
      <p className="text-[#667085]">
        Former co-founder of Opendoor. Early staff at Spotify and Clearbit.
      </p>
      <div className="flex gap-3">
        <img src="/twitter.png" alt="" className="w-5 w-5" />
        <img src="/linkedin.png" alt="" className="w-5 w-5" />
        <img src="/dribble.png" alt="" className="w-5 w-5" />
      </div>
    </div>
  );
};
