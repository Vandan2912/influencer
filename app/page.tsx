import Agencies from "./_components/Home_Page/Agencies";
import Articles from "./_components/Home_Page/Articles";
import GuidsReports from "./_components/Home_Page/GuidsReports";
import HeroSection from "./_components/Home_Page/HeroSection";
import Marketing from "./_components/Home_Page/Marketing";
import News from "./_components/Home_Page/News";
import PopularPool from "./_components/Home_Page/PopularPool";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-Montserrat">
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
