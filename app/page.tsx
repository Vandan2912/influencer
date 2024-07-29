import clsx from "clsx";
import Agencies from "./_components/Home_Page/Agencies";
import Articles from "./_components/Home_Page/Articles";
import GuidsReports from "./_components/Home_Page/GuidsReports";
import HeroSection from "./_components/Home_Page/HeroSection";
import Marketing from "./_components/Home_Page/Marketing";
import News from "./_components/Home_Page/News";
import PopularPool from "./_components/Home_Page/PopularPool";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main
      className={clsx(
        montserrat.className,
        "flex min-h-screen flex-col items-center justify-between"
      )}
    >
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
