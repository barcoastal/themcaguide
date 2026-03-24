import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MCA Tools & Calculators",
  description: "Free MCA calculators to help you understand the true cost of merchant cash advances.",
};

const tools = [
  { href: "/tools/mca-calculator", title: "MCA Cost Calculator", description: "Calculate the total cost, daily payment, and effective APR of a merchant cash advance." },
  { href: "/tools/mca-payoff-calculator", title: "MCA Payoff Calculator", description: "Find out how long it will take to pay off your remaining MCA balance." },
];

export default function ToolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">MCA Tools & Calculators</h1>
      <p className="text-lg text-gray-500 mb-8">Free tools to help you make informed financing decisions.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href} className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-gray-900 mb-2">{tool.title}</h2>
            <p className="text-gray-500">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
