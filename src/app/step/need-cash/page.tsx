import { Metadata } from "next";
import Link from "next/link";
import { Wallet, TrendingUp, FileText, Building2, Gift, CreditCard, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "I Need Cash. Alternatives Before Taking an MCA",
  description: "Before you take a merchant cash advance, try these options first. They're cheaper, safer, and better for your business.",
};

const options = [
  {
    icon: TrendingUp,
    title: "Speed Up Your Invoicing",
    description: "Send invoices immediately. Offer 2% discount for early payment. Switch to online invoicing. Most businesses wait too long to bill. fix this first.",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: FileText,
    title: "Invoice Factoring",
    description: "Sell your unpaid invoices for 90-95% of their value today. Way cheaper than an MCA. You get cash in 24 hours.",
    color: "bg-blue-100 text-blue-700",
    link: "/articles/invoice-factoring-guide",
  },
  {
    icon: Building2,
    title: "SBA Loans",
    description: "6-13% APR vs MCA's 40-350% APR. Yes, they take longer to get (2-4 weeks), but they'll save you thousands.",
    color: "bg-purple-100 text-purple-700",
    link: "/articles/sba-loan-guide-small-business",
  },
  {
    icon: CreditCard,
    title: "Business Line of Credit",
    description: "Apply before you need it. Draw money when you need it, pay interest only on what you use. Much cheaper than MCA.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Gift,
    title: "Grants (Free Money)",
    description: "SBA grants, state programs, minority/women/veteran grants. It's real money you don't have to pay back.",
    color: "bg-pink-100 text-pink-700",
    link: "/articles/small-business-grants-guide",
  },
  {
    icon: Wallet,
    title: "Cut Costs First",
    description: "Before borrowing, look at what you can cut. Renegotiate rent, switch vendors, reduce inventory. Every dollar saved is a dollar you don't need to borrow.",
    color: "bg-gray-100 text-gray-700",
    link: "/articles/fix-cashflow-before-mca",
  },
];

export default function NeedCashPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Wallet className="w-4 h-4" /> Step 1 of 4
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            I Need Cash for My Business
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
            Before you take an MCA, try these options first. They're cheaper, safer, and better for your business.
          </p>
        </div>
      </section>

      {/* Options Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">6 Better Options</h2>
        <p className="text-center text-gray-500 mb-10">Each one is cheaper and safer than a merchant cash advance</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((opt) => {
            const Icon = opt.icon;
            const content = (
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all h-full">
                <div className={`w-12 h-12 rounded-xl ${opt.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{opt.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{opt.description}</p>
                {opt.link && (
                  <p className="text-sm font-medium text-green-600 mt-4">Read full guide →</p>
                )}
              </div>
            );
            return opt.link ? (
              <Link key={opt.title} href={opt.link} className="block h-full">{content}</Link>
            ) : (
              <div key={opt.title}>{content}</div>
            );
          })}
        </div>
      </section>

      {/* Still need an MCA? */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Tried everything and still need cash fast?</h2>
          <p className="text-gray-500 mb-8">If an MCA is your only option, at least understand what you're getting into.</p>
          <Link
            href="/step/what-is-mca"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-lg shadow-lg shadow-blue-600/25"
          >
            Next: What's an MCA? <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Related detailed articles */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Deep Dive Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { href: "/articles/fix-cashflow-before-mca", title: "10 Ways to Fix Your Cash Flow" },
            { href: "/articles/emergency-business-funding-not-mca", title: "7 Emergency Funding Options (Not MCA)" },
            { href: "/articles/small-business-grants-guide", title: "Free Money: Guide to Small Business Grants" },
            { href: "/articles/invoice-factoring-guide", title: "Invoice Factoring Explained Simply" },
            { href: "/articles/sba-loan-guide-small-business", title: "SBA Loans: The Best Deal Most Owners Miss" },
          ].map((a) => (
            <Link key={a.href} href={a.href} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <FileText className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="font-medium text-gray-900">{a.title}</span>
              <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
