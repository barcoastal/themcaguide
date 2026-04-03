import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import WorkingCapitalCalculator from "@/components/tools/WorkingCapitalCalculator";

export const metadata: Metadata = {
  title: "Working Capital Calculator. Measure Your Business Liquidity",
  description: "Calculate your working capital, current ratio, and quick ratio. Find out how many days of operations your business can cover and get a health assessment.",
  alternates: {
    canonical: "https://themcaguide.com/tools/working-capital-calculator",
  },
};

export default function WorkingCapitalCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "Working Capital Calculator" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Working Capital Calculator</h1>
      <p className="text-lg text-gray-500 mb-8">Measure your business liquidity by calculating working capital, current ratio, quick ratio, and how many days of operations you can cover.</p>
      <WorkingCapitalCalculator />
      <article className="prose prose-lg prose-blue max-w-none mt-12">

        <h2 id="what-is-working-capital">What Is Working Capital</h2>
        <p>Working capital is the difference between your current assets and current liabilities. Current assets include cash, accounts receivable (money customers owe you), and inventory. Current liabilities include accounts payable (money you owe vendors), short-term debt payments, and accrued expenses like wages or taxes.</p>
        <p>If your current assets total $50,000 and your current liabilities total $25,000, your working capital is $25,000. That is the cash cushion your business has to operate day to day. Positive working capital means you can pay your bills. Negative working capital means you owe more than you have available in the short term.</p>

        <h2 id="current-ratio-vs-quick-ratio">Current Ratio vs Quick Ratio</h2>
        <p>The current ratio divides your total current assets by your total current liabilities. A ratio of 2.0 means you have $2 in assets for every $1 you owe. Most financial advisors recommend a current ratio between 1.5 and 2.0 for a healthy small business.</p>
        <p>The quick ratio is more conservative. It excludes inventory from current assets because inventory cannot always be converted to cash quickly. If your business carries a lot of inventory, the quick ratio gives you a more realistic picture of your immediate liquidity. A quick ratio above 1.0 means you can cover your liabilities without selling any inventory.</p>

        <h2 id="days-of-operations">Understanding Days of Operations Covered</h2>
        <p>This metric takes your working capital and divides it by your average daily operating costs. It tells you how many days your business could keep running if revenue stopped completely. While that scenario is extreme, the number gives you a sense of your safety margin. Most financial experts recommend having at least 30 to 90 days of operating expenses covered. If your number is below 15, you are operating with very little cushion and one bad week could create a cash crisis.</p>

        <h2 id="improving-working-capital">How to Improve Your Working Capital</h2>
        <p>There are several practical ways to boost working capital without taking on new debt. Speed up collections by sending invoices immediately and following up on overdue accounts. Negotiate longer payment terms with your vendors so you have more time to pay. Reduce excess inventory that ties up cash without generating revenue. Cut unnecessary expenses that drain your operating account.</p>
        <p>If you need working capital fast, a business line of credit is usually the most cost-effective option. It gives you access to funds when you need them without the high cost of an MCA. Only draw what you need and pay it back as cash flow allows.</p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <details>
          <summary>What is a good current ratio for a small business?</summary>
          <p>A current ratio between 1.5 and 2.0 is considered healthy for most small businesses. Below 1.0 means your liabilities exceed your assets, which is a warning sign. Above 3.0 may mean you have too much idle cash that could be invested back into the business.</p>
        </details>

        <details>
          <summary>Why is the quick ratio lower than the current ratio?</summary>
          <p>The quick ratio excludes inventory because it is not always easy to convert inventory to cash quickly. If your business has a lot of inventory, the gap between the two ratios will be larger. Service businesses with little or no inventory will see both ratios close together.</p>
        </details>

        <details>
          <summary>How many days of operations should I be able to cover?</summary>
          <p>Aim for at least 30 to 90 days. This gives you enough cushion to handle slow periods, unexpected expenses, or customer payment delays. Seasonal businesses should target the higher end of this range to cover off-season months.</p>
        </details>

        <details>
          <summary>Should I include MCA obligations in current liabilities?</summary>
          <p>Yes. Any debt or repayment obligation due within the next 12 months should be included in current liabilities. For an MCA, include the total remaining balance since most MCAs are repaid within 3 to 12 months.</p>
        </details>

        <details>
          <summary>Can negative working capital be okay?</summary>
          <p>In rare cases, some businesses (like grocery stores or subscription companies) operate with negative working capital because they collect cash before they pay suppliers. For most small businesses, negative working capital is a problem that needs to be addressed quickly.</p>
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
                  "name": "What is a good current ratio for a small business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A current ratio between 1.5 and 2.0 is considered healthy. Below 1.0 means liabilities exceed assets. Above 3.0 may mean too much idle cash."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why is the quick ratio lower than the current ratio?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The quick ratio excludes inventory because it is not always easy to convert to cash quickly. Service businesses with little inventory will see both ratios close together."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How many days of operations should I be able to cover?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Aim for at least 30 to 90 days. Seasonal businesses should target the higher end to cover off-season months."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I include MCA obligations in current liabilities?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Any repayment obligation due within 12 months should be included. For an MCA, include the total remaining balance since most are repaid within 3 to 12 months."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can negative working capital be okay?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In rare cases, businesses that collect cash before paying suppliers can operate this way. For most small businesses, negative working capital needs to be addressed quickly."
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
          <li><a href="https://www.investopedia.com/terms/w/workingcapital.asp" target="_blank" rel="noopener noreferrer">Investopedia - Working Capital Definition</a></li>
        </ul>

      </article>
    </div>
  );
}
