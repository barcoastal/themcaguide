import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import McaStackingCalculator from "@/components/tools/McaStackingCalculator";

export const metadata: Metadata = {
  title: "MCA Stacking Calculator. Multiple MCA Costs",
  description: "Calculate the combined cost of multiple merchant cash advances. See total daily payments, combined APR, and whether stacking MCAs is putting your business at risk.",
  alternates: {
    canonical: "https://themcaguide.com/tools/mca-stacking-calculator",
  },
};

export default function McaStackingCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "MCA Stacking Calculator" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">MCA Stacking Calculator</h1>
      <p className="text-lg text-gray-500 mb-8">See the combined impact of multiple merchant cash advances on your business. Enter up to 5 MCAs to calculate your total daily payments, combined cost, and whether your cash flow can handle the load.</p>
      <McaStackingCalculator />
      <article className="prose prose-lg prose-blue max-w-none mt-12">

        <h2 id="what-is-mca-stacking">What Is MCA Stacking and Why It Matters</h2>
        <p>MCA stacking happens when a business takes out a second (or third, or fourth) merchant cash advance before paying off the first one. It is one of the most common ways small businesses get into serious financial trouble with MCAs. Each advance comes with its own factor rate, holdback percentage, and daily payment. When you stack them, those payments add up fast.</p>
        <p>The danger is not always obvious. Each individual MCA might seem manageable on its own. But when two or three funders are pulling money from your bank account every day, the combined drain on your cash flow can become overwhelming. This calculator shows you the full picture by adding up all your MCA obligations in one place.</p>
        <p>If you are already stacking MCAs or considering taking a second advance, use this tool to understand the real impact before you sign anything. The numbers do not lie, and they often tell a story that MCA brokers will not.</p>

        <h2 id="how-to-use">How to Use This Calculator</h2>
        <p>Start by entering your average daily revenue. This is the total amount your business brings in per business day from all sources. Then select how many MCAs you have or are considering (up to 5). For each MCA, enter the funding amount, factor rate, and holdback percentage. You can find these numbers on your MCA agreements.</p>
        <p>The calculator updates in real time. As you add more MCAs, watch how the combined daily payment and revenue percentage change. Pay special attention to the percentage of daily revenue going to MCA payments. If that number crosses 30%, you are in dangerous territory.</p>

        <h2 id="understanding-results">Understanding Your Results</h2>
        <p>The combined daily payment shows you the total amount being pulled from your account every business day across all MCAs. The total cost is the sum of all fees across every advance. The combined effective APR gives you a blended annual rate for all your MCAs together.</p>
        <p>The most important number is the percentage of daily revenue going to MCA payments. Financial experts generally agree that anything above 20% to 25% of revenue going to debt service is risky for a small business. Above 30% is a red flag. If you are there, it is time to look at consolidation, refinancing, or speaking with a financial advisor.</p>
        <p>If the calculator shows a warning, take it seriously. Businesses that stack MCAs beyond their capacity often end up defaulting, which leads to UCC liens, frozen bank accounts, and legal action. The earlier you address the problem, the more options you have.</p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <details>
          <summary>Is MCA stacking illegal?</summary>
          <p>No, MCA stacking is not illegal. However, many MCA contracts include clauses that prohibit taking additional advances from other funders. If you violate that clause, the original funder could declare you in default. Always read the stacking provisions in your contract before taking a second advance.</p>
        </details>

        <details>
          <summary>How many MCAs is too many?</summary>
          <p>There is no magic number, but most financial advisors say that if your combined MCA payments exceed 25% to 30% of your daily revenue, you have too many. The issue is not the count but the total cash flow impact. Two MCAs with low holdbacks might be fine. One MCA with a 25% holdback could be too much on its own.</p>
        </details>

        <details>
          <summary>Can I consolidate multiple MCAs into one?</summary>
          <p>Yes, MCA consolidation is possible. Some funders specialize in paying off existing MCAs and replacing them with a single advance at a lower combined rate. This can reduce your daily payment and simplify your finances. However, the total cost may be higher because you are refinancing the remaining balances at a new factor rate. Use our refinance calculator to compare.</p>
        </details>

        <details>
          <summary>What happens if I default on stacked MCAs?</summary>
          <p>Defaulting on stacked MCAs can trigger serious consequences. Funders may freeze your bank account through a court order, enforce a personal guarantee, or pursue a confession of judgment (in states where that is allowed). With multiple funders, you could face multiple legal actions at once. If you are struggling to make payments, contact your funders proactively to discuss options.</p>
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
                  "name": "Is MCA stacking illegal?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, MCA stacking is not illegal. However, many MCA contracts include clauses that prohibit taking additional advances from other funders. If you violate that clause, the original funder could declare you in default."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How many MCAs is too many?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "There is no magic number, but most financial advisors say that if your combined MCA payments exceed 25% to 30% of your daily revenue, you have too many. The issue is not the count but the total cash flow impact."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I consolidate multiple MCAs into one?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, MCA consolidation is possible. Some funders specialize in paying off existing MCAs and replacing them with a single advance at a lower combined rate."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What happens if I default on stacked MCAs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Defaulting on stacked MCAs can trigger serious consequences. Funders may freeze your bank account, enforce a personal guarantee, or pursue a confession of judgment."
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
