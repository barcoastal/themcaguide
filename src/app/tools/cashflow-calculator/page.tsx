import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CashFlowCalculator from "@/components/tools/CashFlowCalculator";
import CalloutBox from "@/components/mdx/CalloutBox";

export const metadata: Metadata = {
  title: "Cash Flow Calculator for Small Business",
  description: "Free cash flow calculator. Enter your monthly revenue and expenses to see your net cash flow and find areas to cut costs.",
};

export default function CashFlowPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "Cash Flow Calculator" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Cash Flow Calculator</h1>
      <p className="text-lg text-gray-500 mb-8">See where your money goes each month. If your cash flow is negative, this tool helps you find what to cut before taking on debt.</p>
      <CashFlowCalculator />
      <article className="prose prose-lg prose-blue max-w-none mt-12">

        <h2 id="what-is-cash-flow">What Is Cash Flow and Why It Matters for Small Business</h2>
        <p>Cash flow is the movement of money in and out of your business. Money comes in from sales, payments from customers, and other income. Money goes out for rent, payroll, supplies, loan payments, and every other expense. The difference between what comes in and what goes out is your net cash flow.</p>
        <p>Cash flow matters more than almost any other number in your business because it determines whether you can pay your bills today. You might have $500,000 in annual revenue, but if most of that money is tied up in unpaid invoices and your rent is due tomorrow, you have a cash flow problem. Cash flow is about timing. It is about having the right amount of money at the right time.</p>
        <p>According to a study cited by the <a href="https://www.sba.gov/" target="_blank" rel="noopener noreferrer">U.S. Small Business Administration</a>, 82% of small businesses that fail cite cash flow problems as a contributing factor. That is not because they did not have good products or customers. It is because they ran out of cash at the wrong time.</p>

        <h2 id="positive-vs-negative">Positive vs Negative Cash Flow Explained Simply</h2>
        <p><strong>Positive cash flow</strong> means more money came in than went out during a given period. Your bank account grew. You have money left over after paying all your bills. This is where you want to be. Positive cash flow gives you options. You can invest in growth, build a reserve, or take advantage of opportunities when they come up.</p>
        <p><strong>Negative cash flow</strong> means more money went out than came in. Your bank account shrank. You spent more than you earned. If this happens occasionally (like during a slow season), it is manageable as long as you have reserves. If it happens consistently, your business is in trouble and you need to make changes fast.</p>

        <CalloutBox type="warning" title="Red Flag">
          <p>If your cash flow has been negative for 3 or more months in a row, do not take an MCA to cover the gap. An MCA adds a daily payment that makes your cash flow even more negative. Fix the underlying problem first.</p>
        </CalloutBox>

        <h2 id="how-to-use">How to Use This Calculator</h2>
        <ol>
          <li><strong>Enter your monthly revenue.</strong> This is the total money your business brings in during a typical month. Include all sources: sales, service fees, subscriptions, and any other income.</li>
          <li><strong>Enter your monthly expenses.</strong> List all your regular expenses: rent, payroll, utilities, supplies, insurance, loan payments, MCA payments, marketing, and anything else that costs you money each month.</li>
          <li><strong>Review your results.</strong> The calculator shows your net cash flow (revenue minus expenses) and helps you identify which expenses are eating the biggest share of your income.</li>
        </ol>

        <CalloutBox type="tip" title="Be Honest With the Numbers">
          <p>The most common mistake is underestimating expenses. Pull up your bank statement and go through it line by line. Include everything, even the small recurring charges. Those $50 and $100 subscriptions add up to thousands per year.</p>
        </CalloutBox>

        <h2 id="understanding-results">Understanding Your Results</h2>
        <p>After entering your numbers, you will see your net monthly cash flow. Here is how to interpret it:</p>
        <p><strong>Positive and above 20% of revenue:</strong> Your business is in a healthy position. You have a solid cushion and should be building reserves.</p>
        <p><strong>Positive but below 10% of revenue:</strong> You are getting by, but you do not have much room for error. One bad month or unexpected expense could push you into the red. Look for expenses to cut or ways to increase revenue.</p>
        <p><strong>Break even (close to zero):</strong> You are walking a tightrope. Every dollar counts and there is no margin for surprises. This is the time to aggressively cut costs and focus on increasing sales.</p>
        <p><strong>Negative:</strong> You are losing money every month. This is not sustainable. You need to either increase revenue, decrease expenses, or both. Taking on debt (especially an MCA) in this situation only speeds up the problem.</p>

        <h2 id="number-one-reason">The #1 Reason Small Businesses Fail</h2>
        <p>Cash flow. That is the number one killer of small businesses. Not bad products, not lack of customers, not poor marketing. Cash flow. The <a href="https://www.federalreserve.gov/publications/small-business-credit-survey.htm" target="_blank" rel="noopener noreferrer">Federal Reserve's Small Business Credit Survey</a> consistently shows that cash flow challenges are the most common financial issue facing small businesses.</p>
        <p>Here is how it typically plays out: A business is doing well on paper. Revenue is growing. Customers are happy. But the owner is extending net-30 or net-60 payment terms to clients, and those clients are paying late. Meanwhile, rent, payroll, and suppliers all need to be paid on time. The gap between when money goes out and when it comes in creates a cash crunch.</p>
        <p>Desperate for cash, the owner takes an MCA. Now they have a daily payment on top of everything else. The cash flow problem gets worse, not better. They take a second MCA to cover the first. Then a third. Within a year, they are spending 30% to 50% of their revenue just on MCA payments. The business cannot survive that.</p>
        <p>This is why understanding your cash flow before taking on any debt is so important. Use this calculator to get a clear picture of where you stand right now.</p>

        <h2 id="10-ways-to-improve">10 Ways to Improve Your Cash Flow Today</h2>
        <ol>
          <li><strong>Invoice immediately.</strong> Do not wait until the end of the month. Send invoices the same day you complete the work or deliver the product.</li>
          <li><strong>Shorten payment terms.</strong> If you currently offer net-30, switch to net-15 or even net-7 for new clients. Offer a 2% discount for payment within 10 days.</li>
          <li><strong>Follow up on late payments aggressively.</strong> Set up automated reminders at 3 days, 7 days, and 14 days past due. Call personally after 14 days.</li>
          <li><strong>Negotiate longer payment terms with suppliers.</strong> Ask for net-60 instead of net-30. This keeps cash in your account longer.</li>
          <li><strong>Cut subscriptions you do not use.</strong> Go through every recurring charge on your bank statement. Cancel anything you have not used in the last 30 days.</li>
          <li><strong>Require deposits upfront.</strong> For large orders or projects, require 25% to 50% upfront before you start work.</li>
          <li><strong>Review your pricing.</strong> Many small business owners underprice their products or services. A 10% price increase on your most popular items can dramatically improve cash flow.</li>
          <li><strong>Reduce inventory.</strong> Dead inventory is cash sitting on a shelf. Run clearance sales on slow-moving items and use the cash for operations.</li>
          <li><strong>Lease instead of buying equipment.</strong> Leasing spreads the cost over time and preserves your cash for daily operations.</li>
          <li><strong>Open a business line of credit while things are good.</strong> Do not wait until you need it. Apply when your financials look strong and have it ready as a safety net.</li>
        </ol>

        <h2 id="mca-destroys-cash-flow">How MCA Payments Destroy Cash Flow</h2>
        <p>Let me show you exactly what an MCA does to a business with an example:</p>
        <table>
          <thead>
            <tr>
              <th>Monthly Item</th>
              <th>Before MCA</th>
              <th>After MCA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monthly Revenue</td>
              <td>$80,000</td>
              <td>$80,000</td>
            </tr>
            <tr>
              <td>Rent</td>
              <td>$5,000</td>
              <td>$5,000</td>
            </tr>
            <tr>
              <td>Payroll</td>
              <td>$35,000</td>
              <td>$35,000</td>
            </tr>
            <tr>
              <td>Supplies/COGS</td>
              <td>$20,000</td>
              <td>$20,000</td>
            </tr>
            <tr>
              <td>Utilities/Insurance</td>
              <td>$3,000</td>
              <td>$3,000</td>
            </tr>
            <tr>
              <td>Other Expenses</td>
              <td>$5,000</td>
              <td>$5,000</td>
            </tr>
            <tr>
              <td>MCA Daily Payment (x21 days)</td>
              <td>$0</td>
              <td>$10,500</td>
            </tr>
            <tr>
              <td><strong>Net Cash Flow</strong></td>
              <td><strong>$12,000</strong></td>
              <td><strong>$1,500</strong></td>
            </tr>
          </tbody>
        </table>
        <p>Before the MCA, this business had $12,000 in positive cash flow. After adding a $500/day MCA payment (which totals $10,500 per month over 21 business days), they are left with only $1,500. One slow week and they are in the red. One unexpected expense and they cannot make payroll.</p>
        <p>This is why you should always run your numbers through a cash flow calculator before agreeing to any MCA. If the daily payment leaves you with less than 10% of revenue as net cash flow, the MCA is too aggressive for your business.</p>

        <h2 id="seasonal-businesses">When Negative Cash Flow Is Normal (Seasonal Businesses)</h2>
        <p>Not all negative cash flow is a crisis. Some businesses are seasonal by nature. A landscaping company in the northeast will have negative cash flow in December and January. A beach town restaurant will be slow from November through March. A tax preparation business earns most of its revenue from January to April.</p>
        <p>If you run a seasonal business, negative cash flow during your off season is expected. The key is planning for it. During your busy months, you should be building a cash reserve to carry you through the slow months. A good rule of thumb is to save enough during peak season to cover 3 to 4 months of expenses.</p>

        <CalloutBox type="tip" title="Seasonal Business Tip">
          <p>Use this calculator for each month of the year, not just your average month. This shows you exactly which months are positive and which are negative, so you know how much reserve you need to build during the good months.</p>
        </CalloutBox>

        <h2 id="cash-flow-vs-profit">Cash Flow vs Profit: They Are Not the Same Thing</h2>
        <p>This confuses a lot of business owners, so let me be clear: cash flow and profit are two different things.</p>
        <p><strong>Profit</strong> is an accounting concept. It is revenue minus expenses over a period of time. Your profit and loss statement might show that your business made $100,000 in profit last year.</p>
        <p><strong>Cash flow</strong> is about real money moving in and out of your bank account right now. You can be profitable on paper and still have zero cash in the bank. How? Maybe your customers owe you $50,000 in unpaid invoices. That $50,000 shows up as revenue on your P&L, but it is not in your bank account yet.</p>
        <p>The reverse is also true. You can have positive cash flow but not be profitable. If you received a large upfront payment for a project you have not started yet, your bank account looks great, but you have not earned that money yet.</p>
        <p>As a business owner, you need to track both. But when it comes to paying your bills, making payroll, and deciding whether you can afford an MCA payment, cash flow is the number that matters.</p>

        <h2 id="building-cash-reserve">Building a Cash Reserve</h2>
        <p>Every business needs a cash reserve. This is money set aside specifically to cover unexpected expenses, slow months, or emergencies. The <a href="https://www.consumerfinance.gov/about-us/blog/" target="_blank" rel="noopener noreferrer">Consumer Financial Protection Bureau</a> recommends that businesses maintain enough reserves to cover at least 3 months of operating expenses.</p>
        <p>Here is how to build one:</p>
        <ul>
          <li>Open a separate savings account specifically for your business reserve. Do not mix it with your operating account.</li>
          <li>Set up an automatic transfer every week. Even $200 per week adds up to over $10,000 in a year.</li>
          <li>When you have a great month, put the extra profit into the reserve. Do not spend it on upgrades or expansion until your reserve is funded.</li>
          <li>Set a target. Add up your monthly operating expenses and multiply by 3. That is your minimum reserve goal.</li>
          <li>Do not touch the reserve unless it is a genuine emergency. A sale at your supplier is not an emergency. Making payroll is.</li>
        </ul>
        <p>A cash reserve is the best protection against needing an MCA. If you have 3 months of expenses saved up, you can weather a slow season, cover an unexpected repair, or bridge a gap without paying a factor rate of 1.30 or higher.</p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <details>
          <summary>How often should I check my cash flow?</summary>
          <p>At minimum, review your cash flow weekly. Many successful small business owners check it daily. Use this calculator at the beginning of each month to forecast the month ahead. Compare your forecast to actual results at the end of the month. Over time, you will get better at predicting your cash flow, which helps you make smarter decisions about spending, hiring, and borrowing.</p>
        </details>

        <details>
          <summary>What is a good cash flow margin for a small business?</summary>
          <p>A healthy small business should have a net cash flow margin of at least 10% to 15% of revenue. That means if you bring in $100,000 per month, you should have $10,000 to $15,000 left over after all expenses. Some industries run on thinner margins (restaurants, grocery stores), while others can achieve 20% or more (consulting, software). If your margin is below 5%, you are in a fragile position.</p>
        </details>

        <details>
          <summary>Can I have positive cash flow but still be losing money?</summary>
          <p>Yes. Cash flow and profitability are different. You can have positive cash flow temporarily if you received large upfront payments, collected on old invoices, or sold assets. But if your ongoing expenses exceed your ongoing revenue, you are losing money even if your bank account looks healthy today. That is why you need to track both cash flow and profitability.</p>
        </details>

        <details>
          <summary>Should I include MCA payments in my cash flow calculation?</summary>
          <p>Absolutely. MCA payments are one of the biggest cash flow drains for businesses that have them. Include the full monthly MCA payment (daily payment amount times 21 business days) in your expenses. This gives you an accurate picture of your actual cash position. If your cash flow is negative after including MCA payments, that is a sign the MCA is too expensive for your business.</p>
        </details>

        <details>
          <summary>What is the difference between cash flow and working capital?</summary>
          <p>Cash flow measures the movement of money over a period of time (weekly, monthly). Working capital is a snapshot of your financial health at a single point in time. Working capital equals your current assets (cash, accounts receivable, inventory) minus your current liabilities (bills due, loan payments, MCA balance). Healthy businesses need both positive cash flow and positive working capital.</p>
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
                  "name": "How often should I check my cash flow?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "At minimum, review your cash flow weekly. Many successful small business owners check it daily. Use a cash flow calculator at the beginning of each month to forecast the month ahead."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is a good cash flow margin for a small business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A healthy small business should have a net cash flow margin of at least 10% to 15% of revenue. Some industries run on thinner margins while others can achieve 20% or more."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I have positive cash flow but still be losing money?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Cash flow and profitability are different. You can have positive cash flow temporarily from upfront payments or asset sales while your ongoing expenses exceed ongoing revenue."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I include MCA payments in my cash flow calculation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Include the full monthly MCA payment (daily payment times 21 business days) in your expenses for an accurate picture of your actual cash position."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between cash flow and working capital?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cash flow measures the movement of money over a period of time. Working capital is a snapshot at a single point in time, equal to current assets minus current liabilities."
                  }
                }
              ]
            })
          }}
        />

        <h2 id="sources">Sources</h2>
        <ul>
          <li><a href="https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" target="_blank" rel="noopener noreferrer">U.S. Small Business Administration (SBA) - Manage Your Finances</a></li>
          <li><a href="https://www.consumerfinance.gov/consumer-tools/small-business-lending/" target="_blank" rel="noopener noreferrer">Consumer Financial Protection Bureau (CFPB) - Small Business Lending</a></li>
          <li><a href="https://www.federalreserve.gov/publications/small-business-credit-survey.htm" target="_blank" rel="noopener noreferrer">Federal Reserve - Small Business Credit Survey</a></li>
        </ul>

      </article>
    </div>
  );
}
