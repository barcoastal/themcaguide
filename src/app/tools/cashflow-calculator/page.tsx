import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CashFlowCalculator from "@/components/tools/CashFlowCalculator";

export const metadata: Metadata = {
  title: "Cash Flow Calculator for Small Business",
  description: "Free cash flow calculator. Enter your monthly revenue and expenses to see your net cash flow and find areas to cut costs.",
};

export default function CashFlowPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "Cash Flow Calculator" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Cash Flow Calculator</h1>
      <p className="text-lg text-gray-500 mb-8">See where your money goes each month. If your cash flow is negative, this tool helps you find what to cut before taking on debt.</p>
      <CashFlowCalculator />
      <article className="prose prose-lg prose-blue max-w-none mt-12">
        <h2 id="why-cash-flow">Why Cash Flow Matters</h2>
        <p>Cash flow is the lifeblood of your business. If more money goes out than comes in, you have a problem. Many business owners take MCAs because of cash flow issues that could be solved by cutting costs or speeding up collections.</p>
        <h2 id="tips">Tips to Improve Cash Flow</h2>
        <ul>
          <li>Invoice immediately and follow up on late payments</li>
          <li>Negotiate longer payment terms with suppliers</li>
          <li>Cut expenses that do not directly generate revenue</li>
          <li>Build a cash reserve of 3-6 months of expenses</li>
          <li>Consider invoice factoring instead of an MCA</li>
        </ul>
      </article>
    </div>
  );
}
