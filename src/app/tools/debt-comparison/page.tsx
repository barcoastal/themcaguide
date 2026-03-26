import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import DebtComparisonCalculator from "@/components/tools/DebtComparisonCalculator";

export const metadata: Metadata = {
  title: "MCA vs Loan Comparison Calculator",
  description: "Compare the true cost of an MCA versus a business loan side by side. See how much you could save with a traditional loan.",
};

export default function DebtComparisonPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "MCA vs Loan Comparison" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">MCA vs Loan Comparison</h1>
      <p className="text-lg text-gray-500 mb-8">See the real difference. Enter your MCA offer and a loan alternative to compare total cost side by side.</p>
      <DebtComparisonCalculator />
      <article className="prose prose-lg prose-blue max-w-none mt-12">
        <h2 id="why-compare">Why You Should Always Compare</h2>
        <p>Most business owners take an MCA without comparing it to other options. This calculator shows you the true cost difference. In most cases, a business loan saves you thousands of dollars.</p>
      </article>
    </div>
  );
}
