import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import McaEarlyPayoffCalculator from "@/components/tools/McaEarlyPayoffCalculator";

export const metadata: Metadata = {
  title: "MCA Early Payoff Calculator. Pay Off Faster",
  description: "See how extra payments or a lump sum can shorten your MCA repayment. Compare normal vs accelerated payoff timelines and potential savings.",
  alternates: {
    canonical: "https://themcaguide.com/tools/mca-early-payoff-calculator",
  },
};

export default function McaEarlyPayoffCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "MCA Early Payoff Calculator" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">MCA Early Payoff Calculator</h1>
      <p className="text-lg text-gray-500 mb-8">Find out how much faster you can pay off your merchant cash advance with extra daily payments or a lump sum. Compare your normal timeline to an accelerated one and see the days you could save.</p>
      <McaEarlyPayoffCalculator />
      <article className="prose prose-lg prose-blue max-w-none mt-12">

        <h2 id="what-is-mca-early-payoff">Why Consider Paying Off Your MCA Early</h2>
        <p>Paying off a merchant cash advance early can free your business from daily withdrawals sooner, giving you full control of your cash flow again. Every day that an MCA is pulling money from your account is a day you have less flexibility to invest in growth, handle emergencies, or simply run your business without stress.</p>
        <p>There is an important caveat. Most MCA contracts require you to pay back the full purchased amount regardless of when you pay it. That means paying early does not save you money in most cases. You still owe the same total. What it does save you is time. You get out from under the daily payment obligation faster, which has real value for your business operations.</p>
        <p>Some MCA providers do offer early payoff discounts, typically 5% to 15% off the remaining balance. If your contract includes this provision, paying early can save you real money. This calculator shows you the potential savings if a discount applies, but always confirm with your funder before making extra payments.</p>

        <h2 id="how-to-use">How to Use This Calculator</h2>
        <p>Enter your original funding amount and factor rate for reference. Then enter the total repayment amount from your contract, the amount you have already paid, and your current daily payment. These numbers establish your normal payoff timeline.</p>
        <p>To see the accelerated scenario, enter an extra daily payment amount, a one-time lump sum, or both. The extra daily payment is an additional amount you would pay on top of your regular daily withdrawal. The lump sum is a single payment you make right away to reduce the balance.</p>
        <p>The results panel shows your normal payoff date versus the accelerated payoff date, how many days you would save, and a progress bar showing how far along you are. If your provider offers an early payoff discount, the potential savings estimate gives you a rough idea of what you could save.</p>

        <h2 id="understanding-results">Understanding Your Results</h2>
        <p>The "Days Saved" number is the most straightforward result. It tells you how many fewer business days you would be making MCA payments. If you are currently 90 days from payoff and the accelerated timeline shows 60 days, you save 30 days of daily withdrawals from your account.</p>
        <p>The "Potential Savings" figure is an estimate that only applies if your MCA provider offers an early payoff discount. Not all do. Check your contract for language about early payoff, prepayment, or early termination. If there is no discount provision, the total you owe stays the same regardless of how fast you pay. You still benefit from getting your cash flow back sooner.</p>
        <p>The progress bar gives you a visual sense of where you stand. If you are more than halfway through repayment, the remaining balance is relatively small and a modest lump sum could dramatically shorten the remaining timeline. If you are early in repayment, extra payments have less relative impact but still help.</p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <details>
          <summary>Do I save money by paying off an MCA early?</summary>
          <p>Not automatically. Most MCA contracts require full repayment of the purchased amount regardless of timing. However, some providers offer early payoff discounts. Check your contract or call your funder to ask. If no discount exists, early payoff saves you time, not money. You still benefit from ending the daily withdrawals sooner.</p>
        </details>

        <details>
          <summary>Can I make extra payments on my MCA?</summary>
          <p>Most MCA companies allow extra payments, but the process varies. Some let you make additional ACH payments through their portal. Others require you to call and arrange a lump sum payment. Contact your funder to find out their process and whether they offer any discount for early payoff.</p>
        </details>

        <details>
          <summary>Should I use extra cash to pay off my MCA or invest in my business?</summary>
          <p>This depends on your situation. If the MCA has a high factor rate (above 1.35) and you have no early payoff discount, investing the cash in revenue-generating activities might produce a better return than paying off the MCA early. But if the daily payments are straining your cash flow and limiting your ability to operate, getting rid of them faster is usually worth it.</p>
        </details>

        <details>
          <summary>What is a confession of judgment in an MCA contract?</summary>
          <p>A confession of judgment (COJ) is a clause in some MCA contracts that allows the funder to get a court judgment against you without a trial if you default. Several states have banned or restricted COJs, but they still appear in contracts from funders based in states where they are legal. Always look for this clause before signing and consult an attorney if you find one.</p>
        </details>

        <details>
          <summary>Can I negotiate an early payoff discount after signing?</summary>
          <p>Yes, it is worth trying. If you are in good standing and offer to pay a significant portion of the remaining balance at once, some funders will negotiate a discount. They get their money back faster and can deploy it to new deals. Start by asking for 10% to 15% off the remaining balance and see what they say.</p>
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
                  "name": "Do I save money by paying off an MCA early?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Not automatically. Most MCA contracts require full repayment of the purchased amount regardless of timing. However, some providers offer early payoff discounts. Check your contract or call your funder to ask."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I make extra payments on my MCA?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most MCA companies allow extra payments, but the process varies. Some let you make additional ACH payments through their portal. Others require you to call and arrange a lump sum payment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I use extra cash to pay off my MCA or invest in my business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "This depends on your situation. If the MCA has a high factor rate and you have no early payoff discount, investing in revenue-generating activities might produce a better return."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is a confession of judgment in an MCA contract?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A confession of judgment is a clause that allows the funder to get a court judgment against you without a trial if you default. Several states have banned or restricted these clauses."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I negotiate an early payoff discount after signing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it is worth trying. If you are in good standing and offer to pay a significant portion at once, some funders will negotiate a discount of 10% to 15% off the remaining balance."
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
