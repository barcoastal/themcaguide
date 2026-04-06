import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import RealCost from "@/components/home/RealCost";
import Alternatives from "@/components/home/Alternatives";
import TopRisks from "@/components/home/TopRisks";
import PopularTools from "@/components/home/PopularTools";
import HomepageFAQ from "@/components/home/HomepageFAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <RealCost />
      <Alternatives />
      <TopRisks />
      <PopularTools />
      <HomepageFAQ />
    </>
  );
}
