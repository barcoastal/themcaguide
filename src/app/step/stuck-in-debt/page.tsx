import { Metadata } from "next";
import Link from "next/link";
import { LifeBuoy, ArrowRight, ArrowLeft, FileText, Phone, Scale, Handshake, DollarSign, ShieldCheck } from "lucide-react";
import EditorialHero from "@/components/layout/EditorialHero";

export const metadata: Metadata = {
  title: "Stuck in MCA Debt? Here's How to Get Out",
  description: "If you're drowning in MCA payments, you have options. Negotiation, settlement, legal help. here's your step-by-step escape plan.",
};

const steps = [
  {
    icon: ShieldCheck,
    number: "1",
    title: "STOP. Don't Take Another MCA",
    description: "The #1 mistake business owners make is taking a second MCA to pay the first. This is called 'stacking' and it will make everything worse. No matter how bad things feel, don't stack.",
    color: "bg-red-100 text-red-700",
  },
  {
    icon: DollarSign,
    number: "2",
    title: "Add Up What You Owe",
    description: "List every MCA: who you owe, how much is left, what your daily payment is. You need to see the full picture before you can fix it.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Phone,
    number: "3",
    title: "Call Your MCA Company",
    description: "Yes, really. Ask for a lower holdback percentage or a payment pause. Many will negotiate. they'd rather get some money than none if you default.",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: Handshake,
    number: "4",
    title: "Consider a Settlement",
    description: "MCA companies often accept 40-60 cents on the dollar as a lump sum settlement. If you can scrape together some cash, you might settle for way less than you owe.",
    color: "bg-purple-100 text-purple-700",
  },
  {
    icon: Scale,
    number: "5",
    title: "Get Legal Help If Needed",
    description: "If you signed a Confession of Judgment, have UCC liens, or are being threatened. talk to a lawyer who knows MCA contracts. Some states have laws that protect you.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: LifeBuoy,
    number: "6",
    title: "Rebuild and Move Forward",
    description: "Once you're out, rebuild your credit, get UCC liens removed, and set up a real line of credit so you never need an MCA again.",
    color: "bg-teal-100 text-teal-700",
  },
];

export default function StuckInDebtPage() {
  return (
    <div>
      {/* Hero */}
      <EditorialHero
        kicker="Step 4 of 4"
        title="Stuck in MCA Debt? You Have Options."
        dek="Take a deep breath. You're not alone, and this is fixable. Here's your step-by-step plan to get out."
        align="center"
      />

      {/* Steps */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex items-start gap-6 bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-gray-200 transition-colors">
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-gray-400">Step {step.number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Emergency box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-red-800 mb-3">Is Your Bank Account Being Frozen?</h2>
          <p className="text-red-700 mb-6">If an MCA company is threatening to freeze your account or has already done it, you need a lawyer NOW. This is time-sensitive.</p>
          <Link href="/articles/what-happens-default-on-mca" className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors">
            Read: What Happens When You Default <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Payoff calculator */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">How long until you're free?</h2>
          <p className="text-gray-500 mb-6">Use our calculator to see your payoff timeline.</p>
          <Link href="/tools/mca-payoff-calculator" className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors text-lg">
            Open Payoff Calculator <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/step/choosing" className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:border-gray-400 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back: Choosing an MCA
          </Link>
        </div>
      </section>

      {/* Related articles */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { href: "/articles/can-you-negotiate-mca-debt", title: "How to Negotiate MCA Debt" },
            { href: "/articles/mca-debt-relief", title: "All Your MCA Debt Relief Options" },
            { href: "/articles/what-happens-default-on-mca", title: "What Happens If You Default" },
            { href: "/articles/mca-confession-of-judgment", title: "Confession of Judgment Explained" },
            { href: "/articles/mca-ucc-filing-explained", title: "UCC Filings: What They Mean" },
            { href: "/guides/how-to-get-out-of-mca-debt", title: "Full Escape Guide" },
          ].map((a) => (
            <Link key={a.href} href={a.href} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <FileText className="w-5 h-5 text-red-500 flex-shrink-0" />
              <span className="font-medium text-gray-900">{a.title}</span>
              <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
