import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Search, LifeBuoy } from "lucide-react";

export const metadata: Metadata = {
  title: "MCA Blog — Guides for Small Business Owners",
  description: "Free guides organized into 3 categories: alternatives before MCA, choosing the right MCA, and getting out of MCA debt.",
};

const categories = [
  {
    href: "/blog/before-mca",
    icon: ShieldCheck,
    title: "Before You Take an MCA",
    subtitle: "Fix your cash flow and explore better options first",
    count: "5 articles",
    color: "bg-green-100 text-green-700",
    border: "border-green-200 hover:border-green-400",
    bg: "bg-green-50",
  },
  {
    href: "/blog/choosing-mca",
    icon: Search,
    title: "Choosing an MCA",
    subtitle: "How to pick the best lender and protect yourself",
    count: "5 articles",
    color: "bg-blue-100 text-blue-700",
    border: "border-blue-200 hover:border-blue-400",
    bg: "bg-blue-50",
  },
  {
    href: "/blog/getting-out",
    icon: LifeBuoy,
    title: "Getting Out of MCA Debt",
    subtitle: "Settlement, negotiation, legal options, and recovery",
    count: "5+ articles",
    color: "bg-red-100 text-red-700",
    border: "border-red-200 hover:border-red-400",
    bg: "bg-red-50",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Where Are You Right Now?</h1>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
          Pick your situation. We'll give you clear, simple guides to help you make the best decision for your business.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link key={cat.href} href={cat.href} className={`group block ${cat.bg} border-2 ${cat.border} rounded-2xl p-8 hover:shadow-xl transition-all`}>
              <div className={`w-16 h-16 rounded-2xl ${cat.color} flex items-center justify-center mb-6`}>
                <Icon className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{cat.title}</h2>
              <p className="text-gray-500 mt-2 leading-relaxed">{cat.subtitle}</p>
              <p className="text-sm font-semibold text-gray-400 mt-4">{cat.count}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
