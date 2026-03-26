import { Metadata } from "next";
import Link from "next/link";
import { Calculator, CalendarCheck, TrendingUp, Target, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Business Tools & Calculators",
  description: "Free calculators and tools for small business owners. MCA cost calculator, payoff estimator, cash flow planner, break-even analysis, and loan comparison. No sign-up required.",
};

const tools = [
  { href: "/tools/mca-calculator", icon: Calculator, title: "MCA Cost Calculator", description: "See the true cost of any MCA offer. Enter factor rate, holdback, and funding amount.", color: "bg-blue-50 border-blue-200 hover:border-blue-400", iconColor: "text-blue-600" },
  { href: "/tools/mca-payoff-calculator", icon: CalendarCheck, title: "MCA Payoff Calculator", description: "Find out when you will finish paying off your MCA.", color: "bg-green-50 border-green-200 hover:border-green-400", iconColor: "text-green-600" },
  { href: "/tools/debt-comparison", icon: Scale, title: "MCA vs Loan Comparison", description: "Compare an MCA offer against a traditional business loan side by side.", color: "bg-purple-50 border-purple-200 hover:border-purple-400", iconColor: "text-purple-600" },
  { href: "/tools/cashflow-calculator", icon: TrendingUp, title: "Cash Flow Calculator", description: "Track your monthly revenue and expenses. Find out if you have a cash flow problem.", color: "bg-amber-50 border-amber-200 hover:border-amber-400", iconColor: "text-amber-600" },
  { href: "/tools/break-even-calculator", icon: Target, title: "Break-Even Calculator", description: "How many sales do you need each month to cover your costs?", color: "bg-red-50 border-red-200 hover:border-red-400", iconColor: "text-red-600" },
];

export default function ToolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Free Business Tools</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">Every tool is 100% free. No sign-up required. Built for small business owners.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link key={tool.href} href={tool.href} className={`group block ${tool.color} border-2 rounded-2xl p-6 hover:shadow-lg transition-all`}>
              <Icon className={`w-10 h-10 ${tool.iconColor} mb-4`} />
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{tool.title}</h2>
              <p className="text-sm text-gray-500 mt-2">{tool.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
