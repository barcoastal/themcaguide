import Hero from "@/components/home/Hero";
import PillarCards from "@/components/home/PillarCards";
import LatestArticles from "@/components/home/LatestArticles";
import PopularTools from "@/components/home/PopularTools";
import HomepageFAQ from "@/components/home/HomepageFAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <PillarCards />
      <LatestArticles />
      <PopularTools />
      <HomepageFAQ />
    </>
  );
}
