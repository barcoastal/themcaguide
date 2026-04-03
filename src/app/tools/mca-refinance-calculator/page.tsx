import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import McaRefinanceCalculator from "@/components/tools/McaRefinanceCalculator";

export const metadata: Metadata = {
  title: "MCA Refinance Calculator. Should You Refinance?",
  description: "Compare your current MCA to a new refinance offer. See if refinancing saves you money or costs more, with daily payment changes and a clear recommendation.",
  alternates: {
    canonical: "https://themcaguide.com/tools/mca-refinance-calculator",
  },
};

export default function McaRefinanceCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "MCA Refinance Calculator" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">MCA Refinance Calculator</h1>
      <p className="text-lg text-gray-500 mb-8">Compare your current MCA to a new refinance offer. See whether switching saves you money, lowers your daily payment, or ends up costing more in the long run.</p>
      <McaRefinanceCalculator />
      <article className="prose prose-lg prose-blue max-w-none mt-12">

        <h2 id="what-is-mca-refinancing">What Is MCA Refinancing</h2>
        <p>MCA refinancing means taking a new merchant cash advance to pay off an existing one. The goal is usually to get a lower daily payment, a better factor rate, or extra cash on top of paying off the old advance. MCA companies call this a "renewal" or "refinance," and it is one of the most common offers you will receive once you are a few weeks into repayment.</p>
        <p>The catch is that refinancing an MCA is not the same as refinancing a mortgage. With a mortgage, you replace a higher interest rate with a lower one and save money. With an MCA, you are paying off the remaining balance of the old advance using funds from a new advance, and the new advance comes with its own factor rate applied to the full amount. This means you could end up paying more in total even if your daily payment goes down.</p>
        <p>That is why you need a calculator. It is the only way to see whether a refinance offer actually benefits you or just spreads the cost over a longer period.</p>

        <h2 id="how-to-use">How to Use This Calculator</h2>
        <p>Start with your current MCA details. Enter the remaining balance you still owe, your current daily payment amount, and how many business days are left until payoff. You can find these numbers by calling your MCA company or checking your online portal.</p>
        <p>Next, enter the details of the new MCA offer: the funding amount, factor rate, holdback percentage, and your average daily revenue. The calculator will compare both options and show you the daily payment difference, total cost comparison, and net cash you receive after paying off the old advance.</p>
        <p>Look at the recommendation at the bottom. It tells you whether the refinance makes financial sense based on the numbers. A good refinance gives you a lower daily payment and puts cash in your pocket. A bad refinance costs more overall and just delays the pain.</p>

        <h2 id="understanding-results">Understanding Your Results</h2>
        <p>The "Cost to Finish Current MCA" is the remaining balance on your existing advance. This is money you owe no matter what. The "New MCA Total Cost" is the fee portion of the new advance (total repayment minus funding amount). Compare these two numbers carefully.</p>
        <p>The "Net Cash After Paying Off Current" shows how much money actually lands in your bank account after the old MCA is settled. If this number is negative, it means the new advance is not even large enough to cover your existing balance. That is a deal breaker.</p>
        <p>The daily payment comparison is critical for cash flow. Even if the total cost is higher, a lower daily payment might save your business if you are struggling with cash flow right now. Just understand the trade-off: you are paying more overall for the breathing room.</p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <details>
          <summary>Is it worth refinancing an MCA?</summary>
          <p>It depends on the numbers. Refinancing makes sense if the new daily payment is significantly lower and you receive meaningful cash after paying off the old balance. It does not make sense if the total cost of the new MCA far exceeds what you would pay to finish the current one. Always run the numbers through this calculator before deciding.</p>
        </details>

        <details>
          <summary>How soon can I refinance an MCA?</summary>
          <p>Most MCA companies will offer a renewal or refinance after you have paid back 40% to 60% of the original advance. Some aggressive funders will offer refinancing even earlier. Just because you can refinance early does not mean you should. The less you have paid off, the more of the new advance goes to covering the old balance, leaving you with less cash.</p>
        </details>

        <details>
          <summary>Will refinancing hurt my credit?</summary>
          <p>MCAs do not typically report to credit bureaus, so refinancing an MCA usually has no direct impact on your personal credit score. However, the new MCA will involve a UCC filing, and if you default on the new advance, that could lead to collections activity that does affect your credit.</p>
        </details>

        <details>
          <summary>Can I refinance with a different MCA company?</summary>
          <p>Yes, you can refinance with a different funder. In fact, shopping around is recommended. The new funder will pay off your existing balance directly, and you receive the difference. Compare offers from at least two or three funders to get the best rate and terms.</p>
        </details>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is it worth refinancing an MCA?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It depends on the numbers. Refinancing makes sense if the new daily payment is significantly lower and you receive meaningful cash after paying off the old balance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How soon can I refinance an MCA?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most MCA companies will offer a renewal or refinance after you have paid back 40% to 60% of the original advance. Some aggressive funders will offer refinancing even earlier."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will refinancing hurt my credit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "MCAs do not typically report to credit bureaus, so refinancing an MCA usually has no direct impact on your personal credit score."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I refinance with a different MCA company?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can refinance with a different funder. The new funder will pay off your existing balance directly, and you receive the difference. Compare offers from at least two or three funders."
                  }
                }
              ]
            })
          }}
        />

        <h2 id="sources">Sources</h2>
        <ul>
          <li><a href="https://www.sba.gov/funding-programs/loans" target="_blank" rel="noopener noreferrer">U.S. Small Business Administration (SBA) - Loan Programs</a></li>
          <li><a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-merchant-cash-advance-en-1981/" target="_blank" rel="noopener noreferrer">Consumer Financial Protection Bureau (CFPB) - What Is a Merchant Cash Advance?</a></li>
          <li><a href="https://www.federalreserve.gov/publications/2023-november-supervision-and-regulation-report.htm" target="_blank" rel="noopener noreferrer">Federal Reserve - Supervision and Regulation Report</a></li>
        </ul>

      </article>
    </div>
  );
}
