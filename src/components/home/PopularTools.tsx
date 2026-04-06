import Link from "next/link";
import { Calculator, CalendarCheck, TrendingUp, Percent, Scale, DollarSign } from "lucide-react";

const tools = [
  {
    href: "/tools/mca-calculator",
    icon: Calculator,
    title: "MCA Cost Calculator",
    description: <>Enter your deal terms and see the <span className="font-semibold text-red-600">true cost</span></>,
    gradient: "from-blue-50 to-blue-100",
    border: "border-blue-200",
    iconColor: "text-blue-600",
    hoverColor: "group-hover:text-blue-700",
    ctaColor: "text-blue-600",
  },
  {
    href: "/tools/mca-payoff-calculator",
    icon: CalendarCheck,
    title: "MCA Payoff Calculator",
    description: <>Find out exactly <span className="font-semibold text-green-600">when you&apos;ll be free</span></>,
    gradient: "from-green-50 to-green-100",
    border: "border-green-200",
    iconColor: "text-green-600",
    hoverColor: "group-hover:text-green-700",
    ctaColor: "text-green-600",
  },
  {
    href: "/tools/debt-comparison",
    icon: Scale,
    title: "MCA vs Loan Comparison",
    description: <>Compare MCA and loan offers <span className="font-semibold text-purple-600">side by side</span></>,
    gradient: "from-purple-50 to-purple-100",
    border: "border-purple-200",
    iconColor: "text-purple-600",
    hoverColor: "group-hover:text-purple-700",
    ctaColor: "text-purple-600",
  },
  {
    href: "/tools/profit-margin-calculator",
    icon: Percent,
    title: "Profit Margin Calculator",
    description: <>Know your <span className="font-semibold text-amber-600">gross and net margin</span></>,
    gradient: "from-amber-50 to-amber-100",
    border: "border-amber-200",
    iconColor: "text-amber-600",
    hoverColor: "group-hover:text-amber-700",
    ctaColor: "text-amber-600",
  },
  {
    href: "/tools/loan-payment-calculator",
    icon: TrendingUp,
    title: "Loan Payment Calculator",
    description: <>See your <span className="font-semibold text-indigo-600">monthly payment and total cost</span></>,
    gradient: "from-indigo-50 to-indigo-100",
    border: "border-indigo-200",
    iconColor: "text-indigo-600",
    hoverColor: "group-hover:text-indigo-700",
    ctaColor: "text-indigo-600",
  },
  {
    href: "/tools/loan-eligibility-checker",
    icon: DollarSign,
    title: "Loan Eligibility Checker",
    description: <>Find out what <span className="font-semibold text-pink-600">financing you qualify for</span></>,
    gradient: "from-pink-50 to-pink-100",
    border: "border-pink-200",
    iconColor: "text-pink-600",
    hoverColor: "group-hover:text-pink-700",
    ctaColor: "text-pink-600",
  },
];

export default function PopularTools() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Free Calculators</h2>
        <p className="mt-3 text-lg text-gray-500">See the numbers before you commit</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link key={tool.href} href={tool.href} className={`group bg-gradient-to-br ${tool.gradient} border-2 ${tool.border} rounded-2xl p-8 hover:shadow-xl transition-all text-center`}>
              <Icon className={`w-12 h-12 ${tool.iconColor} mx-auto mb-4`} />
              <h3 className={`text-xl font-bold text-gray-900 ${tool.hoverColor}`}>{tool.title}</h3>
              <p className="text-gray-500 mt-2">{tool.description}</p>
              <p className={`mt-4 ${tool.ctaColor} font-semibold text-sm`}>Try it free &rarr;</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
