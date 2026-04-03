import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import McaAffordabilityCalculator from "@/components/tools/McaAffordabilityCalculator";

export const metadata: Metadata = {
  title: "MCA Affordability Calculator. Can You Afford It?",
  description: "Enter your revenue and expenses to see if your business can handle an MCA. Get a clear affordability score and cash flow breakdown before you sign.",
  alternates: {
    canonical: "https://themcaguide.com/tools/mca-affordability-calculator",
  },
};

export default function McaAffordabilityCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "MCA Affordability Calculator" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">MCA Affordability Calculator</h1>
      <p className="text-lg text-gray-500 mb-8">Find out if your business can comfortably afford a merchant cash advance. Enter your revenue, expenses, and MCA terms to see your remaining cash flow and get a clear affordability rating.</p>
      <McaAffordabilityCalculator />
      <article className="prose prose-lg prose-blue max-w-none mt-12">

        <h2 id="what-is-mca-affordability">Why Affordability Matters More Than Cost</h2>
        <p>Knowing the cost of an MCA is important, but knowing whether you can afford it is essential. A $50,000 advance with a 1.30 factor rate might look reasonable on paper. But if your monthly expenses already eat up 90% of your revenue, that MCA payment could push you into the red. This calculator answers the most important question: after you pay your bills and the MCA, do you have enough cash left to run your business?</p>
        <p>Too many business owners focus on the funding amount and ignore the daily payment impact. They see $50,000 hitting their account and feel relieved. Then, a week later, the daily withdrawals start and they realize there is not enough left to cover payroll or rent. This tool prevents that mistake by mapping out your full financial picture before you commit.</p>
        <p>The affordability score at the bottom gives you a simple green, yellow, or red rating. Green means you have plenty of room. Yellow means it is tight and any revenue dip could cause problems. Red means the MCA will likely create more financial stress than it solves.</p>

        <h2 id="how-to-use">How to Use This Calculator</h2>
        <p>Start by entering your monthly revenue. Use an average from the last 3 to 6 months for the most accurate result. Then enter your major monthly expenses: rent, payroll, supplies or inventory costs, and any other recurring expenses. Be honest with these numbers. Underestimating expenses leads to a misleading affordability score.</p>
        <p>Next, enter the MCA offer details: funding amount, factor rate, and holdback percentage. The calculator will compute your daily payment, monthly MCA cost, and the cash remaining after all obligations. The affordability score will update automatically.</p>
        <p>Try adjusting the numbers to see how different scenarios play out. What if your revenue drops by 20%? Lower the monthly revenue field and see what happens to the affordability score. What if you negotiate a lower holdback? Change the holdback percentage and watch the remaining cash change. This tool is designed for experimentation.</p>

        <h2 id="understanding-results">Understanding the Affordability Score</h2>
        <p>The affordability score is based on the percentage of your revenue that remains after all expenses and MCA payments. If you have 20% or more of revenue left over, the score is green. That cushion gives you room to handle slow weeks, unexpected expenses, or seasonal dips without falling behind.</p>
        <p>A yellow score means you have between 10% and 20% remaining. This is not a disaster, but there is very little margin for error. One bad week could mean choosing between the MCA payment and payroll. If you see yellow, consider negotiating a lower holdback percentage or requesting a smaller advance.</p>
        <p>A red score means less than 10% of revenue remains. At this level, the MCA is likely to create serious cash flow problems. Missing rent, payroll, or supplier payments is a real possibility. If you see red, do not take the advance. Look into alternatives like SBA microloans, business lines of credit, or negotiating extended payment terms with your vendors.</p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <details>
          <summary>What percentage of revenue should go to MCA payments?</summary>
          <p>Financial advisors generally recommend keeping total debt service (including MCA payments) below 20% to 25% of your gross revenue. If MCA payments alone exceed 15% of revenue, your business may struggle during slow periods. This calculator helps you see exactly where you land.</p>
        </details>

        <details>
          <summary>Should I include seasonal revenue changes?</summary>
          <p>Yes. If your business has seasonal swings, use your lowest month of revenue as the input. This gives you a worst-case scenario. If the MCA is affordable during your slowest month, it will be manageable the rest of the year. If it is not affordable during the slow period, you need a plan for how to cover payments during those months.</p>
        </details>

        <details>
          <summary>What if I am already cash flow negative?</summary>
          <p>If your expenses already exceed your revenue before adding an MCA, taking a merchant cash advance will make the problem worse. An MCA is not a solution for a business that is losing money. It is a tool for businesses that are profitable but need short-term capital for growth or to bridge a gap. Fix the underlying profitability issue first.</p>
        </details>

        <details>
          <summary>Can I afford an MCA if my score is yellow?</summary>
          <p>A yellow score means it is possible but risky. If you decide to proceed, have a plan for slow weeks. Build a cash reserve before the MCA starts, negotiate the lowest possible holdback, and avoid taking on any additional debt during the repayment period. Monitor your cash flow weekly and call the funder immediately if you anticipate missing a payment.</p>
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
                  "name": "What percentage of revenue should go to MCA payments?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Financial advisors generally recommend keeping total debt service below 20% to 25% of your gross revenue. If MCA payments alone exceed 15% of revenue, your business may struggle during slow periods."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I include seasonal revenue changes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. If your business has seasonal swings, use your lowest month of revenue as the input. This gives you a worst-case scenario."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What if I am already cash flow negative?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If your expenses already exceed your revenue before adding an MCA, taking a merchant cash advance will make the problem worse. Fix the underlying profitability issue first."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I afford an MCA if my score is yellow?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A yellow score means it is possible but risky. If you decide to proceed, have a plan for slow weeks and build a cash reserve before the MCA starts."
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
