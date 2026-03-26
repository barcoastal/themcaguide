import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BreakEvenCalculator from "@/components/tools/BreakEvenCalculator";

export const metadata: Metadata = {
  title: "Break-Even Calculator for Small Business",
  description: "Find out how many sales you need to cover your costs. Free break-even calculator for small business owners.",
};

export default function BreakEvenPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "Break-Even Calculator" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Break-Even Calculator</h1>
      <p className="text-lg text-gray-500 mb-8">How many sales do you need each month to cover all your costs? Find your break-even point in seconds.</p>
      <BreakEvenCalculator />
      <article className="prose prose-lg prose-blue max-w-none mt-12">
        <h2 id="what-is-break-even">What is a Break-Even Point?</h2>
        <p>Your break-even point is the number of sales you need to cover all your fixed costs. Anything above that is profit. If you are below it, you are losing money every month.</p>
        <h2 id="how-to-use">How to Use This</h2>
        <ul>
          <li>Enter your total monthly fixed costs (rent, payroll, insurance, etc.)</li>
          <li>Enter what you charge per sale or unit</li>
          <li>Enter what each sale costs you (materials, shipping, etc.)</li>
          <li>The calculator shows how many sales you need to break even</li>
        </ul>
      </article>
    </div>
  );
}
