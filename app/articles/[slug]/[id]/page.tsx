import React from "react";
import BreadCrumb from "../../_components/BreadCrumb";
import AiSummary from "../../_components/AiSummary";
import TableContent from "../../_components/TableContent";
import ArticleDetail from "../../_components/ArticleDetail";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="font-Gotham">
      <BreadCrumb />
      <section className="py-5 px-5 md:py-11 md:px-16 grid grid-cols-4 gap-10">
        <div className="col-span-4 md:col-span-3">
          <AiSummary />
          <ArticleDetail />
        </div>
        <div className="col-span-1 hidden md:block">
          <TableContent />
        </div>
      </section>
      {/* <HeroSection data={carouselData} />
      <section className="min-h-screen grid grid-cols-1 gap-5 p-7">
        <ArticleSection title="Latest" data={latest} />
        <ArticleSection title="More Articles" data={more} loadmore={true} />
      </section> */}
    </main>
  );
}
