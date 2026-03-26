import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import McaCostCalculator from "@/components/tools/McaCostCalculator";

export const metadata: Metadata = {
  title: "MCA Cost Calculator. Calculate Your True MCA Cost",
  description: "Free MCA calculator. Enter your funding amount, factor rate, and holdback percentage to see total cost, effective APR, and daily payments.",
};

export default function McaCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "MCA Cost Calculator" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">MCA Cost Calculator</h1>
      <p className="text-lg text-gray-500 mb-8">Calculate the true cost of a merchant cash advance including total repayment, effective APR, and daily payment amounts.</p>
      <McaCostCalculator />
      <article className="prose prose-lg prose-blue max-w-none mt-12">
        <h2 id="how-to-use">How to Use This Calculator</h2>
        <p>Enter your MCA details above to instantly see your total cost breakdown. Here is what each field means:</p>
        <ul>
          <li><strong>Funding Amount:</strong> The amount of cash you receive from the MCA provider.</li>
          <li><strong>Factor Rate:</strong> The multiplier applied to your funding amount (typically 1.1 to 1.5).</li>
          <li><strong>Holdback Percentage:</strong> The percentage of your daily credit card sales or revenue withheld for repayment.</li>
          <li><strong>Average Daily Revenue:</strong> Your typical daily revenue from credit card sales.</li>
        </ul>
        <h2 id="understanding-results">Understanding Your Results</h2>
        <p>The calculator shows five key metrics:</p>
        <ul>
          <li><strong>Total Repayment:</strong> The full amount you will pay back (funding amount x factor rate).</li>
          <li><strong>Total Cost of Funding:</strong> How much extra you pay beyond the original funding amount.</li>
          <li><strong>Daily Payment:</strong> Your estimated daily payment based on your revenue and holdback rate.</li>
          <li><strong>Repayment Period:</strong> How many business days until the MCA is fully repaid.</li>
          <li><strong>Effective APR:</strong> The annualized cost expressed as a percentage for comparison with traditional loans.</li>
        </ul>
      </article>
    </div>
  );
}
