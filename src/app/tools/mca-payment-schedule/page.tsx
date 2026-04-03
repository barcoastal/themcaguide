import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import McaPaymentSchedule from "@/components/tools/McaPaymentSchedule";

export const metadata: Metadata = {
  title: "MCA Payment Schedule Generator. Daily Payment Calendar",
  description: "Generate a full MCA payment schedule showing daily payments, running balance, and estimated payoff date. See exactly how your cash flow will be affected.",
  alternates: {
    canonical: "https://themcaguide.com/tools/mca-payment-schedule",
  },
};

export default function McaPaymentSchedulePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "MCA Payment Schedule Generator" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">MCA Payment Schedule Generator</h1>
      <p className="text-lg text-gray-500 mb-8">See a day-by-day breakdown of your MCA payments including daily amounts, running balance, and your estimated payoff date.</p>
      <McaPaymentSchedule />
      <article className="prose prose-lg prose-blue max-w-none mt-12">

        <h2 id="why-payment-schedule-matters">Why Knowing Your Payment Schedule Matters</h2>
        <p>When you take a merchant cash advance, repayment happens every business day through automatic withdrawals from your bank account. Unlike a monthly loan payment you can plan around, MCA payments hit your account daily. If you do not know exactly how much is coming out and for how long, you risk overdrafts, missed vendor payments, or payroll problems.</p>
        <p>This payment schedule generator gives you a clear calendar view of your MCA repayment. You can see the exact daily amount, watch your balance decrease over time, and know when you will be free and clear. Use it before you accept an offer so you can plan your cash flow, or use it after funding to track your progress.</p>

        <h2 id="how-mca-payments-work">How MCA Daily Payments Work</h2>
        <p>MCA payments are calculated as a percentage of your daily revenue, called the holdback. If your holdback is 15% and you bring in $5,000 today, the MCA company takes $750. This happens every business day until the total repayment amount is reached. Weekends and bank holidays are typically skipped.</p>
        <p>The schedule above assumes consistent daily revenue for planning purposes. In reality, your payments will fluctuate with your sales. On good days you pay more and reduce the balance faster. On slow days you pay less, but the repayment period stretches longer. The total amount you owe stays the same regardless.</p>

        <h2 id="reading-the-schedule">How to Read Your Payment Schedule</h2>
        <p>The table shows five columns. The day number counts business days from your start date. The date column shows the calendar date. The payment column shows how much comes out of your account that day. Total paid shows the running total of everything you have paid so far. Remaining shows how much you still owe.</p>
        <p>Watch the remaining balance column carefully. In the early days, the balance drops slowly because most of your payment goes toward the total repayment. As you get further along, you will see the balance shrinking faster and faster. This is because the payment stays the same while the remaining amount gets smaller.</p>

        <h2 id="planning-cash-flow">Using This Tool for Cash Flow Planning</h2>
        <p>The most valuable thing you can do with this schedule is compare the daily payment amount to your typical daily expenses. If your rent is due on the first, payroll is on the fifteenth, and vendor payments go out weekly, make sure the daily MCA withdrawal does not leave you short on those critical days. Many business owners find that a holdback above 15% starts to create real pressure on daily operations. If the numbers look tight, negotiate a lower holdback or consider a smaller advance amount.</p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <details>
          <summary>Do MCA payments happen on weekends?</summary>
          <p>No. MCA payments are withdrawn on business days only, Monday through Friday. Weekends and federal bank holidays are skipped. This schedule reflects business days only to give you an accurate picture.</p>
        </details>

        <details>
          <summary>What happens if my daily revenue is lower than expected?</summary>
          <p>If your MCA uses a true holdback model (percentage of daily sales), your payment decreases when revenue drops. However, many MCAs use fixed daily ACH withdrawals based on your estimated revenue. Check your contract to know which model applies to you.</p>
        </details>

        <details>
          <summary>Can I pay off my MCA early?</summary>
          <p>Most MCA agreements require you to pay the full repayment amount regardless of timing. Some providers offer a small discount for early payoff, but this is not standard. Read your contract carefully or ask your provider about early payoff terms before assuming you can save money by paying faster.</p>
        </details>

        <details>
          <summary>How accurate is the payoff date estimate?</summary>
          <p>The payoff date is an estimate based on consistent daily revenue. If your actual revenue is higher than the number you entered, you will pay off sooner. If revenue is lower, it will take longer. Use your average daily revenue from the past 3 to 6 months for the most realistic estimate.</p>
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
                  "name": "Do MCA payments happen on weekends?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. MCA payments are withdrawn on business days only, Monday through Friday. Weekends and federal bank holidays are skipped."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What happens if my daily revenue is lower than expected?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If your MCA uses a true holdback model, your payment decreases when revenue drops. However, many MCAs use fixed daily ACH withdrawals. Check your contract to know which model applies."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I pay off my MCA early?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most MCA agreements require you to pay the full repayment amount regardless of timing. Some providers offer a small discount for early payoff, but this is not standard."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How accurate is the payoff date estimate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The payoff date is an estimate based on consistent daily revenue. Use your average daily revenue from the past 3 to 6 months for the most realistic estimate."
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
