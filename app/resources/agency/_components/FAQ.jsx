import React from "react";

const FAQ = () => {
  const faqs = [
    {
      que: "What do influencer marketing agencies do?",
      ans: [
        {
          type: "text",
          text: "Brands approach influencer marketing agencies with a brief asking for a campaign that improves conversions, traffic, downloads, and/or awareness by working with influencers. Once appointed the agency would:",
        },
        {
          type: "bullet",
          bullets: [
            "Make the creative and content strategy",
            "Produce the campaign timeline",
            "Find relevant insights on the brand, competitors, industry, and audience",
            "Find and select the most relevant Influencers for the brand and campaign",
            "Outreach to the influencers, brief them and contract them",
            "Manage the influencers and produce the content with them",
            "Report the success metrics in the campaign",
          ],
        },
      ],
    },
    {
      que: "How do influencer marketing agencies make money?",
      ans: [
        {
          type: "text",
          text: "An influencer marketing agency would typically charge a monthly management fee for managing their client’s influencer campaign. Sometimes they may charge a percentage fee for specific campaigns. In some cases, the agency fee may depend on the number of posts required. Because every influencer marketing campaign is different, agencies may customize the way they charge for each campaign. Depending on the size and sophistication of your influencer marketing campaign, agencies often charge between $1,000 and $18,000 per month.",
        },
      ],
    },
  ];

  return (
    <section className="mb-10 p-7 px-5 sm:px-10 md:px-20">
      <div className="flex mt-20 my-10 justify-center items-center gap-10 w-full">
        <hr className="w-32 border-black" />
        <p className="text-xl font-bold">QUESTIONS & ANSWERS</p>
        <hr className="w-32 border-black" />
      </div>
      {faqs.map((faq, i) => {
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <div className="" key={i}>
            <div className="mt-5">
              <div className="bg-[#f6f6f6] font-bold p-3 rounded-ss-xl rounded-se-xl border border-grabg-gray-100">
                {faq.que}
              </div>
              <div className="bg-[#f6f6f6] border-grabg-gray-100 border-x border-b px-3 py-5 flex flex-col gap-3">
                {faq?.ans.map((item, i) => {
                  if (item.type === "bullet") {
                    return (
                      <ul key={i} className="list-disc">
                        {item.bullets.map((list, i) => {
                          return (
                            <li key={i} className="ms-9">
                              {list}
                            </li>
                          );
                        })}
                      </ul>
                    );
                  }
                  return <p key={i}>{item.text} </p>;
                })}
              </div>
            </div>
          </div>
        );
      })}
      {/* if (faq.type === "bullet") {
                    return (
                        <div className="s"></div>
                    )
                } */}
    </section>
  );
};

export default FAQ;

const FAQCard = () => {
  return (
    <div className="">
      <div className=""></div>
    </div>
  );
};
