import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, FileText, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import EditorialHero from "@/components/layout/EditorialHero";

export const metadata: Metadata = {
  title: "Choosing an MCA. How to Pick the Best Deal",
  description: "If you're going with an MCA, here's how to pick the best lender, spot red flags, and protect your business.",
};

const dos = [
  "Compare at least 3 different MCA offers",
  "Calculate the effective APR for each offer",
  "Ask for percentage-based holdback (not fixed daily)",
  "Read every page of the contract",
  "Ask: 'What is the TOTAL amount I pay back?'",
  "Check the company's reviews and complaints",
];

const donts = [
  "Sign a Confession of Judgment",
  "Accept the first offer you get",
  "Let anyone rush you into signing",
  "Agree to a blanket UCC lien if possible",
  "Take more than you need",
  "Stack multiple MCAs",
];

export default function ChoosingPage() {
  return (
    <div>
      {/* Hero */}
      <EditorialHero
        kicker="Step 3 of 4"
        title="Choosing an MCA? Protect Yourself."
        dek="If an MCA is your only option, here's how to get the best deal and avoid the worst traps."
        align="center"
      />

      {/* Do's and Don'ts */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
            <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-7 h-7" /> DO This
            </h2>
            <ul className="space-y-4">
              {dos.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
            <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-2">
              <XCircle className="w-7 h-7" /> DON'T Do This
            </h2>
            <ul className="space-y-4">
              {donts.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Red Flags Warning */}
      <section className="bg-red-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-900">Red Flags. Walk Away If You See These</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "They won't tell you the total payback amount",
              "They require a Confession of Judgment",
              "They pressure you to sign today",
              "They won't explain fees in plain English",
              "They want fixed daily ACH (not percentage)",
              "They require a personal guarantee on everything you own",
              "They won't give you the contract to review overnight",
              "They have lots of complaints on BBB or Trustpilot",
            ].map((flag, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-red-200">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm font-medium">{flag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Got an MCA offer? Check the real cost.</h2>
        <p className="text-gray-500 mb-6">Plug in the numbers and see what you'll actually pay.</p>
        <Link href="/tools/mca-calculator" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-lg">
          Open MCA Calculator <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Navigation */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/step/what-is-mca" className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:border-gray-400 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back: What's an MCA?
          </Link>
          <Link href="/step/stuck-in-debt" className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors text-lg shadow-lg shadow-red-600/25">
            Next: I'm Stuck in MCA Debt <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Related articles */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { href: "/articles/best-mca-companies", title: "Best MCA Companies Reviewed" },
            { href: "/articles/mca-contract-red-flags", title: "8 Red Flags in MCA Contracts" },
            { href: "/articles/hidden-fees-in-mca", title: "Hidden Fees Nobody Tells You About" },
            { href: "/articles/can-you-negotiate-mca-debt", title: "How to Negotiate Better Terms" },
            { href: "/articles/mca-broker-vs-direct-funder", title: "Broker vs Direct Funder" },
          ].map((a) => (
            <Link key={a.href} href={a.href} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <FileText className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <span className="font-medium text-gray-900">{a.title}</span>
              <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
