import Agencies from "@/components/Home_Page/Agencies";
import Articles from "@/components/Home_Page/Articles";
import GuidsReports from "@/components/Home_Page/GuidsReports";
import HeroSection from "@/components/Home_Page/HeroSection";
import Marketing from "@/components/Home_Page/Marketing";
import News from "@/components/Home_Page/News";
import PopularPool from "@/components/Home_Page/PopularPool";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <News />
      <Marketing />
      <Articles />
      <PopularPool />
      <Agencies />
      <GuidsReports />
    </main>
  );
}
