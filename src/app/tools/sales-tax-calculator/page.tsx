import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SalesTaxCalculator from "@/components/tools/SalesTaxCalculator";

export const metadata: Metadata = {
  title: "Sales Tax Calculator. State and Local Sales Tax by State",
  description: "Free sales tax calculator for all 50 states and DC. Enter a sale amount and state to see the tax rate, tax amount, total with tax, and monthly tax estimates.",
  alternates: {
    canonical: "https://themcaguide.com/tools/sales-tax-calculator",
  },
};

export default function SalesTaxCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "Sales Tax Calculator" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Sales Tax Calculator</h1>
      <p className="text-lg text-gray-500 mb-8">Calculate sales tax for any state. Enter your sale amount, select a state, and add any local tax rate to see the full breakdown.</p>
      <SalesTaxCalculator />
      <article className="prose prose-lg prose-blue max-w-none mt-12">

        <h2 id="understanding-sales-tax">Understanding Sales Tax as a Small Business Owner</h2>
        <p>Sales tax is a percentage added to the sale price of goods and some services. As a business owner, you are responsible for collecting this tax from your customers and sending it to your state (and sometimes city or county) government. You do not keep the tax. You are acting as a collector on behalf of the government.</p>
        <p>Getting sales tax wrong can lead to penalties, interest, and even audits. Charging too little means you owe the difference out of pocket. Charging too much means you may owe refunds and face complaints. This calculator helps you get the number right every time.</p>

        <h2 id="state-vs-local">State Tax vs. Local Tax</h2>
        <p>Most states charge a base sales tax rate, but many cities and counties add their own tax on top. For example, California has a 7.25% state rate, but in Los Angeles the combined rate with city and county taxes is over 10%. That local portion matters, especially if you operate in a high-tax city. Use the local tax rate field in this calculator to add your city or county rate for an accurate total.</p>
        <p>Five states have no state sales tax at all: Alaska, Delaware, Montana, New Hampshire, and Oregon. However, Alaska allows local jurisdictions to charge their own sales tax, so some Alaska businesses still collect sales tax depending on their location.</p>

        <h2 id="when-to-collect">When Do You Need to Collect Sales Tax?</h2>
        <p>You need to collect sales tax if you have a "nexus" in a state. Nexus means a significant presence, which could be a physical location, employees, or even a certain volume of online sales. Since the 2018 Supreme Court ruling in South Dakota v. Wayfair, most states require online sellers to collect sales tax once they exceed a threshold of sales (usually $100,000 in revenue or 200 transactions per year in that state).</p>
        <p>If you sell online and ship to multiple states, you may need to collect and remit sales tax in several states. That gets complicated fast. Consider using sales tax automation software once you reach that point.</p>

        <h2 id="monthly-estimates">Why Monthly Tax Estimates Matter</h2>
        <p>Knowing your monthly sales tax obligation helps you set aside the right amount of cash. Too many business owners treat collected sales tax as revenue and spend it. When the quarterly or monthly filing comes due, they do not have the money. Use the monthly estimate feature in this calculator to see what you should be putting aside each month. Keep that money in a separate account so it is always there when you need to file.</p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <details>
          <summary>Which states have no sales tax?</summary>
          <p>Five states have no state-level sales tax: Alaska, Delaware, Montana, New Hampshire, and Oregon. However, Alaska allows local governments to impose their own sales tax, so some businesses in Alaska still need to collect and remit sales tax.</p>
        </details>

        <details>
          <summary>Do I charge sales tax on services?</summary>
          <p>It depends on the state. Some states tax certain services (like repair work, cleaning, or landscaping) while others only tax tangible goods. Check your state's department of revenue website for a list of taxable services. When in doubt, consult a tax professional.</p>
        </details>

        <details>
          <summary>How often do I need to file sales tax returns?</summary>
          <p>Filing frequency depends on your sales volume and your state's rules. Most small businesses file monthly or quarterly. States with lower sales volumes may allow annual filing. Your state will assign you a filing frequency when you register for a sales tax permit.</p>
        </details>

        <details>
          <summary>What happens if I do not collect sales tax?</summary>
          <p>If you are required to collect sales tax and do not, you may owe the uncollected tax out of your own pocket, plus penalties and interest. States actively audit businesses for sales tax compliance, and the penalties can be significant. It is much cheaper to get it right from the start.</p>
        </details>

        <details>
          <summary>Can I deduct sales tax as a business expense?</summary>
          <p>Sales tax you collect from customers is not your money and is not a deductible expense. It is a pass-through to the government. However, sales tax you pay on business purchases (supplies, equipment) may be deductible or included in the cost basis of the item.</p>
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
                  "name": "Which states have no sales tax?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Five states have no state-level sales tax: Alaska, Delaware, Montana, New Hampshire, and Oregon."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I charge sales tax on services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It depends on the state. Some states tax certain services while others only tax tangible goods. Check your state's department of revenue website."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How often do I need to file sales tax returns?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Filing frequency depends on your sales volume. Most small businesses file monthly or quarterly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What happens if I do not collect sales tax?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You may owe the uncollected tax out of your own pocket, plus penalties and interest. States actively audit businesses for compliance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I deduct sales tax as a business expense?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sales tax you collect from customers is not deductible. However, sales tax you pay on business purchases may be deductible or included in the cost basis."
                  }
                }
              ]
            })
          }}
        />

        <h2 id="sources">Sources</h2>
        <ul>
          <li><a href="https://www.taxfoundation.org/publications/state-and-local-sales-tax-rates/" target="_blank" rel="noopener noreferrer">Tax Foundation - State and Local Sales Tax Rates</a></li>
          <li><a href="https://www.sba.gov/business-guide/manage-your-business/pay-taxes" target="_blank" rel="noopener noreferrer">SBA - Pay Taxes</a></li>
          <li><a href="https://www.irs.gov/businesses/small-businesses-self-employed/state-government-websites" target="_blank" rel="noopener noreferrer">IRS - State Government Websites</a></li>
        </ul>

      </article>
    </div>
  );
}
