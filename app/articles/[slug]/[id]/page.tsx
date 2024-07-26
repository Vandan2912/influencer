import React from "react";
import BreadCrumb from "../../_components/BreadCrumb";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="font-Gotham">
      <BreadCrumb />
      {/* <HeroSection data={carouselData} />
      <section className="min-h-screen grid grid-cols-1 gap-5 p-7">
        <ArticleSection title="Latest" data={latest} />
        <ArticleSection title="More Articles" data={more} loadmore={true} />
      </section> */}
    </main>
  );
}
