import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import DebtToRevenueCalculator from "@/components/tools/DebtToRevenueCalculator";

export const metadata: Metadata = {
  title: "Debt-to-Revenue Ratio Calculator. Check Your Business Health",
  description: "Calculate your debt-to-revenue ratio and debt service coverage ratio. See if your business debt is at a healthy level and what lenders look for.",
  alternates: {
    canonical: "https://themcaguide.com/tools/debt-to-revenue-calculator",
  },
};

export default function DebtToRevenueCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "Debt-to-Revenue Ratio Calculator" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Debt-to-Revenue Ratio Calculator</h1>
      <p className="text-lg text-gray-500 mb-8">Find out if your business debt is at a healthy level. Calculate your debt-to-revenue ratio and debt service coverage ratio to see where you stand.</p>
      <DebtToRevenueCalculator />
      <article className="prose prose-lg prose-blue max-w-none mt-12">

        <h2 id="what-is-debt-to-revenue">What Is the Debt-to-Revenue Ratio</h2>
        <p>The debt-to-revenue ratio measures your total business debt against your annual revenue. It tells you how much of your yearly income it would take to pay off all your debt. A ratio of 30% means your total debt equals 30% of your annual revenue. Lenders use this number to gauge how leveraged your business is. The lower the ratio, the less risky you appear to lenders and the better financing terms you can get.</p>
        <p>For example, if your business brings in $600,000 a year and you owe $180,000 across all loans and MCAs, your debt-to-revenue ratio is 30%. That is generally considered manageable. If your total debt climbs to $400,000 on the same revenue, your ratio jumps to 67%, and most lenders will see that as a red flag.</p>

        <h2 id="what-is-dscr">What Is the Debt Service Coverage Ratio</h2>
        <p>The debt service coverage ratio (DSCR) compares your monthly revenue to your monthly debt payments. It answers a simple question: do you bring in enough money each month to cover your obligations? A DSCR of 1.0 means you earn exactly enough to make your payments with nothing left over. Most lenders want to see a DSCR of at least 1.25, meaning you earn 25% more than your monthly debt payments.</p>
        <p>A DSCR below 1.0 means you cannot cover your debt payments from revenue alone. You are either dipping into savings, borrowing more, or falling behind. This is a critical warning sign that needs immediate attention.</p>

        <h2 id="what-lenders-want">What Lenders Look For</h2>
        <p>Different lenders have different thresholds, but here are the general standards. SBA lenders typically want a debt-to-revenue ratio below 30% and a DSCR above 1.25. Traditional bank lenders are similar. Online lenders are more flexible and may accept ratios up to 50% if your revenue trend is positive. MCA companies focus less on these ratios and more on daily bank balances and revenue consistency.</p>
        <p>If you are planning to apply for any type of financing, run your numbers through this calculator first. Knowing your ratios before you apply helps you target the right lenders and avoid wasting time on applications that will be declined.</p>

        <h2 id="improving-ratios">How to Improve Your Ratios</h2>
        <p>There are two ways to improve your debt-to-revenue ratio: increase revenue or decrease debt. On the revenue side, look at ways to grow sales, raise prices, or add new revenue streams. On the debt side, focus on paying down the highest-cost debt first (usually MCAs and credit cards). Refinancing expensive debt into a lower-rate product also helps reduce monthly payments and improve your DSCR.</p>
        <p>Avoid the common trap of taking on new debt to cover existing debt payments. This is especially tempting with MCAs because they are easy to get, but stacking debt on debt creates a downward spiral that is very hard to escape.</p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <details>
          <summary>What is a healthy debt-to-revenue ratio?</summary>
          <p>A ratio below 30% is generally considered healthy. Between 30% and 50% is moderate and may limit your financing options. Above 50% is high risk and suggests your business is carrying too much debt relative to what it earns.</p>
        </details>

        <details>
          <summary>Should I include MCA balances in total debt?</summary>
          <p>Yes. Even though an MCA is technically a purchase of future receivables and not a loan, you still owe the money. Include the remaining balance of any MCA in your total debt calculation for an accurate picture of your financial obligations.</p>
        </details>

        <details>
          <summary>What is a good DSCR?</summary>
          <p>A DSCR of 1.25 or higher is considered good by most lenders. This means you earn $1.25 for every $1 in debt payments. A DSCR above 2.0 is excellent and gives you significant breathing room.</p>
        </details>

        <details>
          <summary>How often should I check these ratios?</summary>
          <p>Review your ratios at least once a quarter, or whenever you take on new debt or experience a significant change in revenue. Tracking these numbers over time helps you spot trends and catch problems early before they become critical.</p>
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
                  "name": "What is a healthy debt-to-revenue ratio?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A ratio below 30% is generally considered healthy. Between 30% and 50% is moderate. Above 50% is high risk."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I include MCA balances in total debt?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Even though an MCA is technically a purchase of future receivables, you still owe the money. Include the remaining balance of any MCA in your total debt calculation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is a good DSCR?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A DSCR of 1.25 or higher is considered good by most lenders. A DSCR above 2.0 is excellent and gives you significant breathing room."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How often should I check these ratios?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Review your ratios at least once a quarter, or whenever you take on new debt or experience a significant change in revenue."
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
          <li><a href="https://www.fdic.gov/resources/bankers/small-business-lending/" target="_blank" rel="noopener noreferrer">FDIC - Small Business Lending</a></li>
        </ul>

      </article>
    </div>
  );
}
