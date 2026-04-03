import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FactorRateToAprConverter from "@/components/tools/FactorRateToAprConverter";

export const metadata: Metadata = {
  title: "Factor Rate to APR Converter. See the True Cost",
  description: "Convert any MCA factor rate to an effective APR. Compare your rate to credit cards, bank loans, and SBA loans to understand what you are really paying.",
  alternates: {
    canonical: "https://themcaguide.com/tools/factor-rate-to-apr",
  },
};

export default function FactorRateToAprPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "Factor Rate to APR Converter" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Factor Rate to APR Converter</h1>
      <p className="text-lg text-gray-500 mb-8">Convert an MCA factor rate into an effective annual percentage rate so you can compare it to traditional financing options side by side.</p>
      <FactorRateToAprConverter />
      <article className="prose prose-lg prose-blue max-w-none mt-12">

        <h2 id="what-is-factor-rate">What Is a Factor Rate and Why It Is Confusing</h2>
        <p>A factor rate is the number MCA companies use instead of an interest rate. It looks like 1.20, 1.35, or 1.50. You multiply it by your advance amount to get the total you owe. A factor rate of 1.30 on a $50,000 advance means you pay back $65,000 total. Simple math, but the problem is that it hides the true annual cost.</p>
        <p>Banks quote interest as an APR, which tells you the yearly cost of borrowing. Factor rates do not work the same way because they do not account for time. A 1.30 factor rate repaid in 3 months costs far more annually than the same rate repaid over 12 months. That is why converting to APR matters. Without the conversion, you cannot compare an MCA to a bank loan, credit card, or SBA loan.</p>

        <h2 id="how-conversion-works">How the Conversion Works</h2>
        <p>The conversion is straightforward once you know the formula. First, subtract 1 from the factor rate to get the cost as a percentage. A factor rate of 1.35 means a 35% cost. Then divide that percentage by the number of months in the repayment period and multiply by 12. If you are repaying over 6 months, the effective APR is (35% / 6) x 12 = 70%. That same factor rate repaid over 12 months gives you 35% APR. Time changes everything.</p>
        <p>This is exactly what the calculator above does for you automatically. Just plug in your factor rate and repayment period and it handles the math.</p>

        <h2 id="why-apr-matters">Why APR Matters for Your Business</h2>
        <p>APR is the standard way to compare the cost of money across different products. When you see that your MCA has a 70% effective APR, you can immediately compare that to a 10% SBA loan or an 18% credit card. Without APR, you are comparing apples to oranges. The comparison table in the calculator above shows exactly where your rate falls relative to common financing options. If your effective APR lands in the red zone for every category, that is a clear sign to shop around or explore alternatives.</p>

        <h2 id="common-mistakes">Common Mistakes Business Owners Make</h2>
        <p>The most common mistake is thinking a factor rate of 1.30 means 30% interest. It does not. Interest compounds over time and is measured annually. A factor rate is a flat multiplier applied once. Depending on how fast you repay, that 30% cost could translate to 60%, 90%, or even 120% APR.</p>
        <p>Another mistake is ignoring the repayment period. A shorter repayment period dramatically increases the effective APR. Many business owners focus only on the daily payment amount and miss the big picture. Use this tool to see the full picture before you sign anything.</p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <details>
          <summary>What is a good factor rate for an MCA?</summary>
          <p>Factor rates between 1.10 and 1.20 are considered good and are typically offered to businesses with strong revenue and credit. Rates between 1.20 and 1.35 are average. Anything above 1.40 is expensive, and you should explore alternatives first.</p>
        </details>

        <details>
          <summary>Why does the repayment period affect the APR so much?</summary>
          <p>Because APR measures cost on a yearly basis. If you pay a 30% fee over 6 months, you are essentially paying that rate twice a year, which equals 60% APR. Over 3 months, it would be 120% APR. The faster you repay, the higher the annualized cost.</p>
        </details>

        <details>
          <summary>Is a factor rate the same as an interest rate?</summary>
          <p>No. An interest rate is an annual percentage that may compound over time. A factor rate is a one-time multiplier applied to the full advance amount. They measure cost differently, which is why converting to APR is important for comparison.</p>
        </details>

        <details>
          <summary>Can I use this tool for non-MCA financing?</summary>
          <p>This tool is designed for factor rate products like MCAs and some revenue-based financing. If your financing quotes an interest rate or APR directly, you do not need to convert it. This tool is specifically for products that use factor rates instead of interest rates.</p>
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
                  "name": "What is a good factor rate for an MCA?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Factor rates between 1.10 and 1.20 are considered good. Rates between 1.20 and 1.35 are average. Anything above 1.40 is expensive."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why does the repayment period affect the APR so much?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Because APR measures cost on a yearly basis. If you pay a 30% fee over 6 months, you are essentially paying that rate twice a year, which equals 60% APR."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is a factor rate the same as an interest rate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. An interest rate is an annual percentage that may compound over time. A factor rate is a one-time multiplier applied to the full advance amount."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I use this tool for non-MCA financing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "This tool is designed for factor rate products like MCAs and some revenue-based financing. If your financing quotes an interest rate or APR directly, you do not need to convert it."
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
          <li><a href="https://www.federalreserve.gov/releases/g19/current/" target="_blank" rel="noopener noreferrer">Federal Reserve - Consumer Credit Report</a></li>
        </ul>

      </article>
    </div>
  );
}
