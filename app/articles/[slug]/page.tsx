import { latest, more } from "@/Constants/articles-category-contants";
import HeroSection from "../_components/HeroSection";
import ArticleSection from "./ArticleSection";

export default function Page({ params }: { params: { slug: string } }) {
  const carouselData = [
    {
      image: "/articleSlugimage.jpeg",
    },
    {
      image: "/articleSlugimage.jpeg",
    },
    {
      image: "/articleSlugimage.jpeg",
    },
    {
      image: "/articleSlugimage.jpeg",
    },
  ];

  return (
    <main className="font-Gotham">
      <HeroSection data={carouselData} />
      <section className="min-h-screen grid grid-cols-1 gap-5 p-7">
        <ArticleSection title="Latest" data={latest} />
        <ArticleSection title="More Articles" data={more} loadmore={true} />
      </section>
    </main>
  );
}
