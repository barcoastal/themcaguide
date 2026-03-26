import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight, ArrowLeft, FileText } from "lucide-react";
import HowMcaWorks from "@/components/slideshows/HowMcaWorks";
import McaCosts from "@/components/slideshows/McaCosts";
import HowTheyPullMoney from "@/components/slideshows/HowTheyPullMoney";

export const metadata: Metadata = {
  title: "What's an MCA?. Simple Explanation for Business Owners",
  description: "Learn how merchant cash advances actually work in plain English. Slideshows explain the process, costs, and how they take your money.",
};

export default function WhatIsMcaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4" /> Step 2 of 4
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            What's a Merchant Cash Advance?
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
            Click through these simple slideshows to understand exactly how MCAs work, what they cost, and how they take money from your account.
          </p>
        </div>
      </section>

      {/* Slideshow 1 */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HowMcaWorks />
      </section>

      {/* Slideshow 2 */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <McaCosts />
      </section>

      {/* Slideshow 3 */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HowTheyPullMoney />
      </section>

      {/* Navigation */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/step/need-cash" className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:border-gray-400 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back: I Need Cash
          </Link>
          <Link href="/step/choosing" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-lg shadow-lg shadow-blue-600/25">
            Next: Choosing an MCA <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Related articles */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Want More Detail?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { href: "/guides/what-is-mca", title: "Complete MCA Guide (Full Article)" },
            { href: "/articles/mca-factor-rates-explained", title: "Factor Rates Explained" },
            { href: "/guides/mca-vs-business-loans", title: "MCA vs Business Loans" },
            { href: "/tools/mca-calculator", title: "MCA Cost Calculator" },
          ].map((a) => (
            <Link key={a.href} href={a.href} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <FileText className="w-5 h-5 text-blue-500 flex-shrink-0" />
              <span className="font-medium text-gray-900">{a.title}</span>
              <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
