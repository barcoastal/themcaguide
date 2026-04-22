import { Metadata } from "next";
import Link from "next/link";
import { Heart, Target, Shield, BookOpen } from "lucide-react";
import EditorialHero from "@/components/layout/EditorialHero";

export const metadata: Metadata = {
  title: "About The MCA Guide",
  description: "The MCA Guide was created by Bar Alezrah, a small business owner who almost lost his business to MCA debt. Free, honest education for business owners.",
  alternates: { canonical: "https://themcaguide.com/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <EditorialHero
        kicker="About Us"
        title="About The MCA Guide"
        dek="Free, honest education for small business owners. Written by someone who survived MCA debt."
      />
      <div className="py-12">

      {/* Bar's story card */}
      <Link href="/about/bar-alezrah" className="group block bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-10 hover:shadow-lg transition-all">
        <div className="flex items-center gap-5">
          <img src="/images/authors/bar-alezrah.jpg" alt="Bar Alezrah" width={80} height={80} loading="lazy" decoding="async" className="w-20 h-20 rounded-full object-cover border-3 border-blue-200" />
          <div>
            <p className="text-sm text-blue-600 font-semibold">The Story Behind This Site</p>
            <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">Meet Bar Alezrah</h2>
            <p className="text-gray-500 mt-1">I ran a retail shop, took an MCA, stacked a second one, and almost lost everything. Here is my full story.</p>
            <p className="text-blue-600 font-semibold text-sm mt-2">Read my story &rarr;</p>
          </div>
        </div>
      </Link>

      <div className="prose prose-lg max-w-none">
        <h2>Our Mission</h2>
        <p>
          The MCA Guide exists for one reason: to make sure no business owner signs an MCA contract without understanding exactly what they are getting into. We provide free, honest, no-jargon education about merchant cash advances, written by someone who has been through it.
        </p>

        <h2>What Makes Us Different</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <Heart className="w-6 h-6 text-red-500 mb-2" />
          <h3 className="font-bold text-gray-900">Real Experience</h3>
          <p className="text-sm text-gray-500 mt-1">Written by a business owner who survived MCA debt. Not by a marketing team.</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <Target className="w-6 h-6 text-blue-500 mb-2" />
          <h3 className="font-bold text-gray-900">No Sales Pitches</h3>
          <p className="text-sm text-gray-500 mt-1">We do not sell MCAs. We educate you so you can make your own decision.</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <BookOpen className="w-6 h-6 text-green-500 mb-2" />
          <h3 className="font-bold text-gray-900">Researched Facts</h3>
          <p className="text-sm text-gray-500 mt-1">Every claim is backed by government sources: SBA, FTC, Federal Reserve.</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <Shield className="w-6 h-6 text-purple-500 mb-2" />
          <h3 className="font-bold text-gray-900">Always Free</h3>
          <p className="text-sm text-gray-500 mt-1">Every guide, tool, and calculator on this site is 100% free. No paywalls.</p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2>Editorial Policy</h2>
        <p>Every article on The MCA Guide follows these rules:</p>
        <ul>
          <li><strong>Fact-checked</strong> against primary sources before publishing</li>
          <li><strong>Updated regularly</strong> to reflect current laws and market conditions</li>
          <li><strong>Reviewed for accuracy</strong> by people with real MCA experience</li>
          <li><strong>Written in plain English</strong> that any business owner can understand</li>
          <li><strong>Never influenced</strong> by affiliate partnerships or advertisers</li>
        </ul>

        <h2>Corrections Policy</h2>
        <p>
          If you find an error in any article, email us at <a href="mailto:hello@themcaguide.com">hello@themcaguide.com</a>. We take accuracy seriously and will correct mistakes promptly with a note explaining what changed.
        </p>

        <h2 id="affiliate-disclosure">Affiliate Disclosure</h2>
        <p>
          Some links on The MCA Guide are affiliate links. This means we may earn a small commission if you click through and take action, at no extra cost to you. This helps keep the site free. Our editorial content is never influenced by affiliate partnerships. We only link to products and services we believe genuinely help small business owners.
        </p>

        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:hello@themcaguide.com">hello@themcaguide.com</a>
        </p>
      </div>
      </div>
    </div>
  );
}
