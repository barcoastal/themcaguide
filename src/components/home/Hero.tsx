import Link from "next/link";
import { ShieldCheck, Search, LifeBuoy } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              From One Business Owner <span className="text-blue-600">to Another</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              I created this guide so you don&apos;t make the same mistakes I&apos;ve seen too many business owners make. MCAs can cost you everything if you don&apos;t understand them. This site gives you all the tools and knowledge, <strong>for free</strong>.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              No sales pitches. No jargon. Just honest information from someone who&apos;s been in your shoes.
            </p>
          </div>
          <div className="hidden md:block">
            <img src="/images/hero-illustration.png" alt="Small business owner learning about merchant cash advances" className="w-full h-auto rounded-2xl" />
          </div>
        </div>

        {/* 3 Blog Paths */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/blog/before-mca" className="group block bg-white border-2 border-green-200 rounded-2xl p-6 hover:shadow-xl hover:border-green-400 transition-all">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-green-700" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">Before You Take an MCA</h2>
            <p className="text-sm text-gray-500 mt-2">Cheaper alternatives and how to fix your cash flow without an MCA</p>
            <p className="text-sm font-semibold text-green-600 mt-4">Explore options →</p>
          </Link>
          <Link href="/blog/choosing-mca" className="group block bg-white border-2 border-blue-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-400 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-blue-700" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">If You&apos;re Taking an MCA</h2>
            <p className="text-sm text-gray-500 mt-2">How to pick the best deal, spot red flags, and protect yourself</p>
            <p className="text-sm font-semibold text-blue-600 mt-4">Learn how →</p>
          </Link>
          <Link href="/blog/getting-out" className="group block bg-white border-2 border-red-200 rounded-2xl p-6 hover:shadow-xl hover:border-red-400 transition-all">
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
              <LifeBuoy className="w-6 h-6 text-red-700" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors">Stuck in MCA Debt</h2>
            <p className="text-sm text-gray-500 mt-2">Settlement, negotiation, legal options. Your way out</p>
            <p className="text-sm font-semibold text-red-600 mt-4">Find help →</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
