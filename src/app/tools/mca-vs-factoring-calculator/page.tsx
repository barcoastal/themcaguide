import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import McaVsFactoringCalculator from "@/components/tools/McaVsFactoringCalculator";

export const metadata: Metadata = {
  title: "MCA vs Invoice Factoring Calculator",
  description: "Compare merchant cash advance costs to invoice factoring side by side. See total fees, effective APR, and payment timelines for both options.",
  alternates: {
    canonical: "https://themcaguide.com/tools/mca-vs-factoring-calculator",
  },
};

export default function McaVsFactoringCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "MCA vs Invoice Factoring Calculator" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">MCA vs Invoice Factoring Calculator</h1>
      <p className="text-lg text-gray-500 mb-8">Compare the true cost of a merchant cash advance against invoice factoring. See total fees, effective APR, and repayment timelines side by side to pick the better option for your business.</p>
      <McaVsFactoringCalculator />
      <article className="prose prose-lg prose-blue max-w-none mt-12">

        <h2 id="what-is-mca-vs-factoring">MCA vs Invoice Factoring: What Is the Difference</h2>
        <p>A merchant cash advance gives you a lump sum of cash in exchange for a percentage of your future revenue. You repay it daily through automatic withdrawals from your bank account. The cost is determined by a factor rate, and you pay back the same total amount regardless of how quickly you repay.</p>
        <p>Invoice factoring works differently. You sell your unpaid invoices to a factoring company at a discount. They advance you 80% to 90% of the invoice value immediately, and you get the rest (minus their fee) when your customer pays the invoice. There are no daily withdrawals from your account. The repayment happens when your customer settles the bill.</p>
        <p>Both options provide fast funding, but the cost structures are completely different. This calculator puts them side by side so you can see which one is cheaper for your specific situation. In most cases, invoice factoring is significantly less expensive, but it only works if you have outstanding invoices from creditworthy customers.</p>

        <h2 id="how-to-use">How to Use This Calculator</h2>
        <p>Enter the amount of funding you need, your average daily revenue, and the MCA terms (factor rate and holdback percentage). Then enter your invoice factoring details: the invoice amount, the advance rate the factoring company offers, their fee percentage, and the payment terms on the invoice (how many days until your customer pays).</p>
        <p>The calculator will show a side-by-side comparison of both options. You will see the total cost, effective APR, payment amounts, and time to repay for each. The green box at the bottom tells you which option is cheaper and by how much.</p>
        <p>If you do not have a factoring quote yet, use these common defaults as a starting point: 85% advance rate, 3% factoring fee, and 30-day payment terms. These are typical for businesses with good-credit customers.</p>

        <h2 id="understanding-results">Understanding the Comparison</h2>
        <p>The total cost number is the most straightforward comparison. It tells you in plain dollars how much each option charges you for access to the cash. The effective APR converts both costs into annual rates so you can compare them fairly, even though the repayment periods differ.</p>
        <p>Keep in mind that these two products work differently in practice. With an MCA, money leaves your account every business day. With factoring, you do not make daily payments. Instead, the factoring company collects directly from your customer when the invoice is due. This difference in cash flow impact can matter just as much as the total cost.</p>
        <p>Also note that factoring only works if you have invoices to sell. If your business is retail or direct-to-consumer without B2B invoices, factoring is not an option. In that case, compare MCA offers against business lines of credit or SBA microloans instead.</p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <details>
          <summary>Is invoice factoring cheaper than an MCA?</summary>
          <p>In most cases, yes. Invoice factoring fees typically range from 1% to 5% of the invoice value, while MCA costs often translate to 20% to 50% of the advance amount. The effective APR on factoring is usually 10% to 40%, compared to 40% to 350% for MCAs. However, factoring requires you to have outstanding invoices from creditworthy customers.</p>
        </details>

        <details>
          <summary>Can I use both an MCA and invoice factoring at the same time?</summary>
          <p>It is possible, but it can get complicated. MCA companies file UCC liens that can interfere with factoring arrangements. If a factoring company sees an existing UCC lien from an MCA funder, they may decline to work with you. Talk to both providers about the situation before signing anything.</p>
        </details>

        <details>
          <summary>What is an invoice factoring advance rate?</summary>
          <p>The advance rate is the percentage of the invoice value the factoring company pays you upfront. A typical advance rate is 80% to 90%. If you factor a $10,000 invoice at an 85% advance rate, you receive $8,500 immediately. The remaining $1,500 (minus the factoring fee) is released when your customer pays the invoice.</p>
        </details>

        <details>
          <summary>Do I need good credit for invoice factoring?</summary>
          <p>Your personal credit matters less with factoring than with an MCA. Factoring companies care more about the creditworthiness of your customers, since those are the people who will be paying the invoices. If your customers are established businesses with good payment histories, you can qualify for factoring even with imperfect personal credit.</p>
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
                  "name": "Is invoice factoring cheaper than an MCA?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In most cases, yes. Invoice factoring fees typically range from 1% to 5% of the invoice value, while MCA costs often translate to 20% to 50% of the advance amount."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I use both an MCA and invoice factoring at the same time?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is possible, but it can get complicated. MCA companies file UCC liens that can interfere with factoring arrangements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is an invoice factoring advance rate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The advance rate is the percentage of the invoice value the factoring company pays you upfront. A typical advance rate is 80% to 90%."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need good credit for invoice factoring?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Your personal credit matters less with factoring than with an MCA. Factoring companies care more about the creditworthiness of your customers."
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
