import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ShouldITakeMcaQuiz from "@/components/tools/ShouldITakeMcaQuiz";

export const metadata: Metadata = {
  title: "Should I Take an MCA? Free Quiz for Business Owners",
  description: "Answer 8 quick questions to find out if a merchant cash advance is right for your business. Get a personalized recommendation with next steps and alternatives.",
  alternates: {
    canonical: "https://themcaguide.com/tools/should-i-take-mca-quiz",
  },
};

export default function ShouldITakeMcaQuizPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "Should I Take an MCA? Quiz" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Should I Take an MCA? Quiz</h1>
      <p className="text-lg text-gray-500 mb-8">Answer 8 questions about your business situation and get a personalized recommendation on whether a merchant cash advance makes sense for you.</p>
      <ShouldITakeMcaQuiz />
      <article className="prose prose-lg prose-blue max-w-none mt-12">

        <h2 id="why-this-quiz">Why This Quiz Exists</h2>
        <p>Merchant cash advances are one of the most misunderstood forms of business funding. They are not inherently good or bad. They are a tool, and like any tool, they work well in the right situation and cause damage in the wrong one. The problem is that MCA companies market aggressively to every business owner, regardless of whether the product fits their situation. This quiz helps you cut through the marketing and figure out if an MCA actually makes sense for your business right now.</p>
        <p>The quiz looks at eight key factors: your reason for funding, whether you have explored cheaper options, your revenue level, business history, existing debt, how urgently you need the money, your credit profile, and whether your cash flow can handle the daily holdback. Together, these factors paint a clear picture of your situation.</p>

        <h2 id="when-mca-makes-sense">When an MCA Makes Sense</h2>
        <p>An MCA can be a reasonable choice when you need funding fast for a specific opportunity that will generate a return. For example, you landed a big contract but need to buy materials upfront. Or a competitor is closing and you can acquire their customer list at a discount. In these cases, the MCA cost is a known expense that gets offset by the revenue the opportunity generates.</p>
        <p>MCAs also make sense when you have been rejected by traditional lenders but have strong, consistent daily revenue. The MCA holdback structure works best for businesses with steady, predictable cash flow from credit card transactions or daily sales.</p>

        <h2 id="when-to-avoid">When to Avoid an MCA</h2>
        <p>Taking an MCA to pay off other debt is almost always a mistake. MCA costs are higher than most other forms of financing, so you are making your debt problem more expensive. Stacking MCAs (taking a new one to pay an existing one) is especially dangerous and is a common path to business failure.</p>
        <p>If your monthly revenue is below $10,000 or you have been in business less than six months, an MCA is risky. Your revenue base may not be large enough to absorb the daily holdback without running out of cash for operations. If your cash flow cannot handle a 10% to 20% daily reduction, you need a different type of funding.</p>

        <h2 id="alternatives">What to Do Instead</h2>
        <p>If the quiz tells you to consider alternatives, here are the most common options. SBA microloans offer up to $50,000 at rates between 8% and 13%. Business lines of credit give you flexible access to cash at lower rates. Invoice factoring advances you cash against outstanding invoices. Equipment financing uses the equipment itself as collateral. Many of these options take longer to get approved, but they cost a fraction of what an MCA charges.</p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <details>
          <summary>How does this quiz determine its recommendation?</summary>
          <p>The quiz scores your answers across eight factors that affect whether an MCA is a good fit. Positive factors like strong revenue, healthy cash flow, and a clear growth purpose earn points. Risk factors like existing MCAs, low revenue, or using funding to pay off debt reduce your score. The final recommendation is based on your total score and any hard disqualifiers in your answers.</p>
        </details>

        <details>
          <summary>Can I still get an MCA if the quiz says to avoid it?</summary>
          <p>Yes. MCA companies will fund many businesses regardless of their situation. The quiz is not about whether you can get an MCA. It is about whether you should. Just because a lender will give you money does not mean it is a good decision for your business.</p>
        </details>

        <details>
          <summary>What if I need money urgently but the quiz says to avoid MCAs?</summary>
          <p>Look into emergency options like invoice factoring (if you have outstanding invoices), a business credit card for short-term needs, or negotiating extended payment terms with vendors. Some online lenders can approve and fund a short-term loan within 24 to 48 hours at lower rates than an MCA.</p>
        </details>

        <details>
          <summary>Is this quiz a substitute for financial advice?</summary>
          <p>No. This quiz is an educational tool to help you think through the decision. It does not account for every detail of your financial situation. For major funding decisions, consult a financial advisor, accountant, or SCORE mentor who can review your specific numbers and circumstances.</p>
        </details>

        <details>
          <summary>What is MCA stacking and why is it dangerous?</summary>
          <p>MCA stacking means taking out a new merchant cash advance while you still have one or more active MCAs. Each MCA takes a percentage of your daily revenue. With multiple MCAs, the combined holdback can take 30% to 50% of your daily revenue, leaving you without enough cash to operate. This creates a cycle where you need another MCA just to stay afloat, and each one costs more than the last.</p>
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
                  "name": "How does this quiz determine its recommendation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The quiz scores your answers across eight factors that affect whether an MCA is a good fit. The final recommendation is based on your total score and any hard disqualifiers."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I still get an MCA if the quiz says to avoid it?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. MCA companies will fund many businesses regardless. The quiz is about whether you should take an MCA, not whether you can get one."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What if I need money urgently but the quiz says to avoid MCAs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Look into invoice factoring, business credit cards, vendor payment negotiations, or online lenders that can fund within 24 to 48 hours at lower rates."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is this quiz a substitute for financial advice?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. This is an educational tool. For major funding decisions, consult a financial advisor, accountant, or SCORE mentor."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is MCA stacking and why is it dangerous?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "MCA stacking means taking new MCAs while existing ones are active. Combined holdbacks can take 30-50% of daily revenue, creating a dangerous debt cycle."
                  }
                }
              ]
            })
          }}
        />

        <h2 id="sources">Sources</h2>
        <ul>
          <li><a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-merchant-cash-advance-en-1981/" target="_blank" rel="noopener noreferrer">CFPB - What Is a Merchant Cash Advance?</a></li>
          <li><a href="https://www.sba.gov/funding-programs/loans" target="_blank" rel="noopener noreferrer">SBA - Loan Programs</a></li>
          <li><a href="https://www.federalreserve.gov/publications/2023-november-supervision-and-regulation-report.htm" target="_blank" rel="noopener noreferrer">Federal Reserve - Supervision and Regulation Report</a></li>
        </ul>

      </article>
    </div>
  );
}
