import Hero from "@/components/home/Hero";
import PillarCards from "@/components/home/PillarCards";
import HowItWorks from "@/components/home/HowItWorks";
import RealCost from "@/components/home/RealCost";
import TopRisks from "@/components/home/TopRisks";
import TopLenders from "@/components/home/TopLenders";
import PopularTools from "@/components/home/PopularTools";
import HomepageFAQ from "@/components/home/HomepageFAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <RealCost />
      <PillarCards />
      <TopRisks />
      <TopLenders />
      <PopularTools />
      <HomepageFAQ />
    </>
  );
}
