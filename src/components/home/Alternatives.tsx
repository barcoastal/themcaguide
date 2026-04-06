import Link from "next/link";
import { Landmark, CreditCard, FileText, DollarSign } from "lucide-react";

const alternatives = [
  {
    icon: Landmark,
    title: "SBA Loans",
    rate: "6-13% APR",
    description: "Government-backed loans with the lowest rates available for small businesses.",
    href: "/articles/sba-loan-guide-small-business",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: CreditCard,
    title: "Business Line of Credit",
    rate: "7-25% APR",
    description: "Draw only what you need. Pay interest only on what you use.",
    href: "/guides/mca-alternatives",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: FileText,
    title: "Invoice Factoring",
    rate: "1-5% per invoice",
    description: "Turn unpaid invoices into cash today without taking on debt.",
    href: "/articles/invoice-factoring-guide",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    icon: DollarSign,
    title: "Small Business Grants",
    rate: "Free money",
    description: "Yes, free money exists for small businesses. No repayment required.",
    href: "/articles/small-business-grants-guide",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
];

export default function Alternatives() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Try These Before an MCA</h2>
          <p className="mt-3 text-lg text-gray-500">
            Most businesses have better options. Explore cheaper alternatives first.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {alternatives.map((alt) => {
            const Icon = alt.icon;
            return (
              <Link key={alt.title} href={alt.href} className={`group block ${alt.bg} border-2 ${alt.border} rounded-2xl p-6 hover:shadow-lg transition-all`}>
                <Icon className={`w-10 h-10 ${alt.color} mb-3`} />
                <h3 className="font-bold text-gray-900 text-lg">{alt.title}</h3>
                <p className={`text-sm font-semibold ${alt.color} mt-1`}>{alt.rate}</p>
                <p className="text-gray-500 text-sm mt-2">{alt.description}</p>
              </Link>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <Link href="/guides/mca-alternatives" className="text-blue-600 font-semibold hover:underline">
            See all 8 MCA alternatives &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
