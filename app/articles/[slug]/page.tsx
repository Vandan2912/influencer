import { latest, more } from "@/Constants/articles-category-contants";
import ArticleSection from "./ArticleSection";
import HeroSection from "./HeroSection";

export default function Page({ params }: { params: { slug: string } }) {
  const carouselData = [
    {
      image: "/articleSlugimage.jpeg",
    },
    {
      image: "/carousel_image2.png",
    },
    {
      image: "/carousel_image3.jpg",
    },
    {
      image: "/carousel_image4.jpg",
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
