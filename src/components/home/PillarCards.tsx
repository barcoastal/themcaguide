import Link from "next/link";
import { Wallet, BookOpen, Search, LifeBuoy } from "lucide-react";

const steps = [
  {
    href: "/step/need-cash",
    icon: Wallet,
    number: "1",
    title: "I Need Cash",
    description: "Try these options before you even think about an MCA. They're cheaper and safer.",
    color: "bg-green-100 text-green-700",
    border: "border-green-200 hover:border-green-400",
  },
  {
    href: "/step/what-is-mca",
    icon: BookOpen,
    number: "2",
    title: "What's an MCA?",
    description: "Simple slideshows that explain how MCAs work, what they cost, and how they take your money.",
    color: "bg-blue-100 text-blue-700",
    border: "border-blue-200 hover:border-blue-400",
  },
  {
    href: "/step/choosing",
    icon: Search,
    number: "3",
    title: "Choosing an MCA",
    description: "If it's your only option. how to pick the best deal and avoid the worst traps.",
    color: "bg-amber-100 text-amber-700",
    border: "border-amber-200 hover:border-amber-400",
  },
  {
    href: "/step/stuck-in-debt",
    icon: LifeBuoy,
    number: "4",
    title: "I'm in MCA Debt",
    description: "Step-by-step plan to negotiate, settle, or get legal help with MCA debt.",
    color: "bg-red-100 text-red-700",
    border: "border-red-200 hover:border-red-400",
  },
];

export default function PillarCards() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Where Are You Right Now?</h2>
        <p className="mt-3 text-lg text-gray-500">Pick your situation. we'll guide you from there</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <Link
              key={step.href}
              href={step.href}
              className={`group block bg-white border-2 ${step.border} rounded-2xl p-6 hover:shadow-xl transition-all`}
            >
              <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase">Step {step.number}</span>
              <h3 className="text-xl font-bold text-gray-900 mt-1 group-hover:text-blue-600 transition-colors">{step.title}</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">{step.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
