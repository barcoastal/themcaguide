import { Metadata } from "next";
import Link from "next/link";
import { Mail, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Bar Alezrah. My MCA Story",
  description: "I'm Bar Alezrah, a small business owner who almost lost everything to MCA debt. Here's my story and why I built The MCA Guide.",
  alternates: { canonical: "https://themcaguide.com/about/bar-alezrah" },
};

export default function BarAlezrahPage() {
  const authorJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bar Alezrah",
    jobTitle: "Small Business Owner, MCA Debt Survivor & Financial Educator",
    url: "https://themcaguide.com/about/bar-alezrah",
    sameAs: [
      "https://www.linkedin.com/in/bar-elezra-647573153/",
    ],
    image: "https://themcaguide.com/images/authors/bar-alezrah.jpg",
    description: "Small business owner who survived MCA debt and created The MCA Guide to help other business owners avoid the same mistakes.",
    knowsAbout: ["Merchant Cash Advances", "Small Business Financing", "MCA Debt Settlement", "Business Cash Flow Management", "MCA Regulations", "Commercial Financing Disclosure", "Business Debt Relief"],
    alumniOf: { "@type": "Organization", name: "Coastal Debt" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorJsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Author header */}
        <div className="flex items-center gap-6 mb-10">
          <img src="/images/authors/bar-alezrah.jpg" alt="Bar Alezrah" width={96} height={96} loading="lazy" decoding="async" className="w-24 h-24 rounded-full object-cover border-4 border-blue-100" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Bar Alezrah</h1>
            <p className="text-gray-500 mt-1">Small Business Owner & MCA Educator</p>
            <div className="flex items-center gap-3 mt-3">
              <a href="https://www.linkedin.com/in/bar-elezra-647573153/" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> LinkedIn
              </a>
              <a href="mailto:hello@themcaguide.com" className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline">
                <Mail className="w-4 h-4" /> Contact
              </a>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>My Story</h2>

          <p>
            A few years ago, I was running a retail shop. Business was good most months, but like a lot of small business owners, I had cash flow gaps. Rent was due, inventory needed restocking, and my credit card sales took days to hit my account.
          </p>

          <p>
            Then one day I got a call from an MCA broker. He made it sound so easy. "We'll put $75,000 in your account by tomorrow. No credit check. Just sign here." I was stressed about payroll that week, so I signed.
          </p>

          <h3>The First MCA</h3>

          <p>
            The money hit my account fast. That part was true. But what nobody explained clearly was the daily payments. Every morning, before I even opened the shop, $850 was pulled from my bank account. Every. Single. Day.
          </p>

          <p>
            The factor rate was 1.38. That means on my $75,000 advance, I owed $103,500 back. That is $28,500 in fees for about 4 months of funding. If someone had told me the effective APR was over 150%, I would have walked away. But nobody did.
          </p>

          <h3>Then I Stacked</h3>

          <p>
            After two months, the daily payments were killing my cash flow. I could not keep up with inventory and MCA payments at the same time. So what did I do? I took a second MCA to cover the gap.
          </p>

          <p>
            This is what the industry calls "stacking" and it is the single worst financial decision I have ever made. Now I had two companies pulling money from my account every day. My daily payments went from $850 to over $1,400. On a business that was making $4,000 to $5,000 a day in revenue, that is 30% of everything I earned going straight to MCA companies.
          </p>

          <h3>Almost Losing Everything</h3>

          <p>
            Within four months, I was drowning. I could not pay my suppliers. I could not make rent. I had to let staff go. The MCA companies did not care. When I missed a payment, they threatened to freeze my bank account. One of them had a confession of judgment clause in the contract that I did not even know I signed.
          </p>

          <p>
            I came within weeks of closing my business and filing for bankruptcy. That is not an exaggeration. I was looking at losing everything I had built over years because of a decision I made in 20 minutes when I was stressed about payroll.
          </p>

          <h3>How I Got Out</h3>

          <p>
            I got lucky. I found a lawyer who knew MCA contracts. We negotiated with both companies and settled for about 55 cents on the dollar. It cost me money I did not have, but it was better than bankruptcy. I also learned that the second MCA might have been unenforceable because of how the terms were structured, which gave us leverage.
          </p>

          <p>
            It took me over a year to recover financially. I had to rebuild relationships with suppliers, rebuild my credit, and rebuild my confidence as a business owner.
          </p>

          <h2>Why I Built The MCA Guide</h2>

          <p>
            After I got through it, I realized something. There was no good, honest resource for business owners about MCAs. Everything online was either written by MCA companies trying to sell you one, or by lawyers trying to sell you their services. Nobody was just explaining how this stuff works in plain English.
          </p>

          <p>
            So I built this site. The MCA Guide is everything I wish I had before I signed that first contract. Every article is written from the perspective of a business owner who has been through it. No corporate jargon. No sales pitches. Just the truth about how MCAs work, what they really cost, and what your options are.
          </p>

          <p>
            If this site helps even one business owner avoid the mistakes I made, it was worth building.
          </p>

          <h2>My Credentials</h2>

          <ul>
            <li>Small business owner with hands-on experience running a retail operation</li>
            <li>Personal experience with MCA debt, stacking, negotiation, and settlement</li>
            <li>Self-taught in small business finance, MCA contracts, and debt recovery</li>
            <li>Connected with MCA attorneys and settlement professionals</li>
          </ul>

          <h2>Editorial Promise</h2>

          <p>
            Every piece of content on The MCA Guide is:
          </p>

          <ul>
            <li><strong>Honest.</strong> I tell you the real numbers, not the ones that sound good.</li>
            <li><strong>Simple.</strong> Written for business owners, not finance professors.</li>
            <li><strong>Researched.</strong> Facts are checked against government sources (SBA, FTC, Federal Reserve).</li>
            <li><strong>Independent.</strong> Some links are affiliate links, but they never influence what I write. I only recommend what I would use myself.</li>
            <li><strong>Updated.</strong> I review and update content regularly to keep it accurate.</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center">
          <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900">Want to share your MCA story?</h3>
          <p className="text-gray-500 mt-2">Your experience could help another business owner. Reach out.</p>
          <a href="mailto:hello@themcaguide.com" className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
            hello@themcaguide.com
          </a>
        </div>
      </div>
    </>
  );
}
