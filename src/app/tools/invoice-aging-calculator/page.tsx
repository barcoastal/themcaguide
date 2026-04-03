import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import InvoiceAgingCalculator from "@/components/tools/InvoiceAgingCalculator";

export const metadata: Metadata = {
  title: "Invoice Aging Calculator. Track Outstanding Receivables",
  description: "Free invoice aging calculator. Enter your outstanding invoices to see aging breakdown, DSO, estimated collections, and recommendations for improving cash flow.",
  alternates: {
    canonical: "https://themcaguide.com/tools/invoice-aging-calculator",
  },
};

export default function InvoiceAgingCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "Invoice Aging Calculator" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Invoice Aging Calculator</h1>
      <p className="text-lg text-gray-500 mb-8">Analyze your outstanding invoices by aging bucket to understand your collections health, calculate days sales outstanding (DSO), and identify cash flow risks.</p>
      <InvoiceAgingCalculator />
      <article className="prose prose-lg prose-blue max-w-none mt-12">

        <h2 id="what-is-invoice-aging">What Is Invoice Aging and Why It Matters</h2>
        <p>Invoice aging is a report that categorizes your outstanding invoices by how long they have been unpaid. The standard buckets are current (not yet due), 1 to 30 days past due, 31 to 60 days past due, and 61+ days past due. The longer an invoice goes unpaid, the less likely you are to collect the full amount.</p>
        <p>Understanding your invoice aging is critical for cash flow management. If most of your receivables are in the 60+ day bucket, you have a collections problem that will eventually become a cash flow crisis. This calculator breaks down your outstanding invoices so you can see exactly where your money is stuck and take action before it becomes uncollectable.</p>

        <h2 id="understanding-dso">Understanding Days Sales Outstanding (DSO)</h2>
        <p>Days Sales Outstanding, or DSO, measures the average number of days it takes to collect payment after a sale. A lower DSO means you are collecting faster, which is good for cash flow. A higher DSO means money is sitting in your customers' accounts instead of yours.</p>
        <p>The average DSO varies by industry, but as a general rule, anything under 30 days is excellent, 30 to 45 days is normal, and above 60 days is a warning sign. If your DSO is climbing over time, it means your customers are paying slower and you need to tighten your collections process. The <a href="https://www.federalreserve.gov/releases/g19/current/" target="_blank" rel="noopener noreferrer">Federal Reserve tracks</a> credit trends that can affect payment timing across industries.</p>

        <h2 id="collection-rates">Collection Rates by Aging Bucket</h2>
        <p>The probability of collecting an invoice drops sharply as it ages. Industry data shows that invoices in the current bucket have about a 98% collection rate. Once an invoice passes 30 days, that drops to around 92%. At 60 days, you are looking at roughly 80%. Beyond 90 days, the odds of full collection drop to 55% or lower.</p>
        <p>This calculator uses these collection rates to estimate how much of your outstanding receivables you can realistically expect to collect. If the estimated collectable amount is significantly lower than your total outstanding, it is time to get aggressive with your collections efforts or consider invoice factoring as a way to convert those receivables into immediate cash.</p>

        <h2 id="improve-collections">How to Improve Your Collections</h2>
        <p>Send invoices immediately after delivering your product or service. The sooner the invoice goes out, the sooner the clock starts. Set clear payment terms upfront and put them in writing. Offer a small discount for early payment, such as 2% off for payment within 10 days. Send automated reminders at 7 days, 14 days, and 30 days past due.</p>
        <p>For chronic late payers, consider requiring deposits or partial payment upfront. If an invoice hits 60 days, pick up the phone. Email follow-ups are easy to ignore. A personal call often gets results faster. For invoices beyond 90 days, you may need to involve a collections agency or write off the amount as bad debt.</p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <details>
          <summary>What is a good DSO for a small business?</summary>
          <p>A DSO of 30 days or less is considered excellent. Between 30 and 45 days is normal for most industries. If your DSO is above 60 days, your collections process needs attention. Compare your DSO to industry benchmarks to see how you stack up.</p>
        </details>

        <details>
          <summary>How do I calculate DSO?</summary>
          <p>DSO equals your total accounts receivable divided by your average daily revenue. If you have $81,000 in outstanding invoices and your annual revenue is $500,000, your daily revenue is about $1,370. Your DSO would be 81,000 divided by 1,370, which is roughly 59 days.</p>
        </details>

        <details>
          <summary>When should I consider invoice factoring?</summary>
          <p>Consider invoice factoring if your DSO is above 45 days and you need cash to cover operations. Factoring companies advance you 80% to 90% of the invoice value immediately and collect from your customer. The cost is typically 1% to 5% of the invoice value, which is much less than an MCA.</p>
        </details>

        <details>
          <summary>What percentage of old invoices are actually collected?</summary>
          <p>Collection rates drop sharply with age. Current invoices are collected about 98% of the time. At 30 days past due, it drops to roughly 92%. At 60 days, about 80%. Beyond 90 days, you may only collect 55% or less. The key is to address overdue invoices quickly before they become uncollectable.</p>
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
                  "name": "What is a good DSO for a small business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A DSO of 30 days or less is considered excellent. Between 30 and 45 days is normal for most industries. If your DSO is above 60 days, your collections process needs attention."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I calculate DSO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DSO equals your total accounts receivable divided by your average daily revenue. This calculator computes it automatically based on your inputs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "When should I consider invoice factoring?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Consider invoice factoring if your DSO is above 45 days and you need cash to cover operations. Factoring companies advance you 80% to 90% of the invoice value immediately."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What percentage of old invoices are actually collected?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Collection rates drop sharply with age. Current invoices are collected about 98% of the time. At 30 days past due, it drops to roughly 92%. At 60 days, about 80%. Beyond 90 days, you may only collect 55% or less."
                  }
                }
              ]
            })
          }}
        />

        <h2 id="sources">Sources</h2>
        <ul>
          <li><a href="https://www.federalreserve.gov/releases/g19/current/" target="_blank" rel="noopener noreferrer">Federal Reserve - Consumer Credit Data</a></li>
          <li><a href="https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" target="_blank" rel="noopener noreferrer">U.S. Small Business Administration - Manage Your Finances</a></li>
          <li><a href="https://www.score.org/resource/accounts-receivable-aging-report" target="_blank" rel="noopener noreferrer">SCORE Association - Accounts Receivable Aging</a></li>
        </ul>

      </article>
    </div>
  );
}
