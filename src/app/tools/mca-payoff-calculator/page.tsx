import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import McaPayoffCalculator from "@/components/tools/McaPayoffCalculator";

export const metadata: Metadata = {
  title: "MCA Payoff Calculator — When Will You Be MCA-Free?",
  description: "Calculate how long it will take to pay off your remaining MCA balance.",
};

export default function McaPayoffCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "MCA Payoff Calculator" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">MCA Payoff Calculator</h1>
      <p className="text-lg text-gray-500 mb-8">Find out exactly when you will finish paying off your merchant cash advance.</p>
      <McaPayoffCalculator />
      <article className="prose prose-lg prose-blue max-w-none mt-12">
        <h2 id="how-it-works">How This Calculator Works</h2>
        <p>This calculator takes your remaining MCA balance and divides it by your daily payment amount to estimate your payoff date.</p>
        <h2 id="tips">Tips for Paying Off Your MCA Faster</h2>
        <ul>
          <li>Negotiate a lower holdback percentage if your business revenue has decreased.</li>
          <li>Consider refinancing to a lower factor rate if you have been making consistent payments.</li>
          <li>Avoid stacking multiple MCAs — this compounds your daily payment obligations.</li>
          <li>Explore MCA debt settlement if your balance feels unmanageable.</li>
        </ul>
      </article>
    </div>
  );
}
