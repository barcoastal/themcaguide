import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BreakEvenCalculator from "@/components/tools/BreakEvenCalculator";
import CalloutBox from "@/components/mdx/CalloutBox";

export const metadata: Metadata = {
  title: "Break-Even Calculator for Small Business",
  description: "Find out how many sales you need to cover your costs. Free break-even calculator for small business owners.",
};

export default function BreakEvenPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "Break-Even Calculator" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Break-Even Calculator</h1>
      <p className="text-lg text-gray-500 mb-8">How many sales do you need each month to cover all your costs? Find your break-even point in seconds.</p>
      <BreakEvenCalculator />
      <article className="prose prose-lg prose-blue max-w-none mt-12">

        <h2 id="what-is-break-even">What Is a Break-Even Point and Why Every Owner Should Know Theirs</h2>
        <p>Your break-even point is the exact number of sales (or dollar amount of revenue) where your business covers all its costs. Not making a profit, not losing money. Just breaking even. Every sale above that number is profit. Every sale below it is a loss.</p>
        <p>If you do not know your break-even point, you are flying blind. You cannot set prices intelligently. You cannot evaluate whether a new expense is worth it. You cannot tell if a slow month is "a little slow" or "we are losing money." And you definitely cannot make a smart decision about taking on debt like an MCA.</p>
        <p>The math behind break-even analysis is straightforward: take your total fixed costs and divide by the profit you make on each sale (called the contribution margin). This calculator does that math for you instantly. All you need are three numbers from your business.</p>
        <p>According to the <a href="https://www.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs" target="_blank" rel="noopener noreferrer">SBA</a>, understanding your break-even point is one of the most important steps in evaluating your business finances, whether you are a startup or have been operating for years.</p>

        <h2 id="how-to-use">How to Use This Calculator</h2>
        <ol>
          <li><strong>Enter your Total Monthly Fixed Costs.</strong> These are costs that stay the same regardless of how many sales you make. Rent, insurance, loan or MCA payments, software subscriptions, base salaries, and utilities all count as fixed costs.</li>
          <li><strong>Enter your Price Per Unit (or Average Sale Amount).</strong> If you sell products, this is the price of one unit. If you sell services, this is your average transaction or project value. If you have multiple products at different prices, use your weighted average price.</li>
          <li><strong>Enter your Variable Cost Per Unit.</strong> This is what each sale costs you in direct expenses. For a product, it includes materials, shipping, and packaging. For a service, it might include labor hours, supplies, or travel costs. Only include costs that change with each sale.</li>
          <li><strong>Click Calculate</strong> to see your break-even point in units and in dollars.</li>
        </ol>

        <CalloutBox type="tip" title="Not Sure About Your Numbers?">
          <p>Pull up last month's financial statement. Add up everything that you would still pay even if you made zero sales. That is your fixed costs. Then look at what you spent directly on fulfilling orders or delivering services. Divide that by the number of sales to get your variable cost per unit.</p>
        </CalloutBox>

        <h2 id="understanding-results">Understanding Your Results</h2>
        <p>The calculator gives you two key numbers:</p>
        <p><strong>Break-even in Units:</strong> The number of sales you need to make each month to cover all your costs. If the calculator says 200 units and you typically sell 250, you have a 50-unit cushion. If you typically sell 180, you are losing money every month.</p>
        <p><strong>Break-even in Dollars:</strong> The total revenue you need to bring in each month. This is the unit number multiplied by your price per unit. Compare this to your actual monthly revenue to see where you stand.</p>
        <p>The further above your break-even point you operate, the more profitable and resilient your business is. If you are only 5% to 10% above break-even, one bad week can wipe out your profit for the entire month.</p>

        <h2 id="fixed-vs-variable-costs">Fixed Costs vs Variable Costs Explained Simply</h2>
        <p>Getting this distinction right is critical for an accurate break-even calculation. Here is the simplest way to think about it:</p>
        <p><strong>Fixed costs</strong> are the bills you pay even if you sell nothing. They do not change based on how busy you are.</p>
        <table>
          <thead>
            <tr>
              <th>Fixed Cost Examples</th>
              <th>Typical Monthly Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rent/Lease</td>
              <td>$2,000 to $10,000+</td>
            </tr>
            <tr>
              <td>Insurance</td>
              <td>$200 to $1,500</td>
            </tr>
            <tr>
              <td>Salaries (not hourly wages)</td>
              <td>Varies</td>
            </tr>
            <tr>
              <td>Software subscriptions</td>
              <td>$100 to $1,000</td>
            </tr>
            <tr>
              <td>Loan/MCA payments</td>
              <td>Varies</td>
            </tr>
            <tr>
              <td>Utilities (base amount)</td>
              <td>$200 to $800</td>
            </tr>
          </tbody>
        </table>
        <p><strong>Variable costs</strong> go up or down based on how many sales you make. Sell more, spend more. Sell less, spend less.</p>
        <table>
          <thead>
            <tr>
              <th>Variable Cost Examples</th>
              <th>How It Varies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Raw materials/ingredients</td>
              <td>Per unit produced</td>
            </tr>
            <tr>
              <td>Shipping/delivery</td>
              <td>Per order shipped</td>
            </tr>
            <tr>
              <td>Packaging</td>
              <td>Per unit sold</td>
            </tr>
            <tr>
              <td>Sales commissions</td>
              <td>Per sale made</td>
            </tr>
            <tr>
              <td>Hourly labor (production)</td>
              <td>Per hour worked</td>
            </tr>
            <tr>
              <td>Credit card processing fees</td>
              <td>Per transaction</td>
            </tr>
          </tbody>
        </table>
        <p>Some costs are semi-variable (like electricity that has a base charge plus usage). For break-even purposes, put the base portion in fixed costs and the usage portion in variable costs. If that is too complicated, just put the whole thing in fixed costs. It is better to slightly overestimate your break-even point than underestimate it.</p>

        <h2 id="lower-break-even">How to Lower Your Break-Even Point</h2>
        <p>A lower break-even point means you need fewer sales to cover your costs, which makes your business more resilient. There are three ways to lower it:</p>
        <ol>
          <li><strong>Reduce fixed costs.</strong> Every dollar you cut from fixed costs directly lowers your break-even point. Can you negotiate lower rent? Can you switch to cheaper software? Can you reduce your insurance premium by adjusting coverage? Even small reductions matter when multiplied over 12 months.</li>
          <li><strong>Increase your prices.</strong> If you raise prices without increasing variable costs, your contribution margin per sale goes up, which means you need fewer sales to break even. A 10% price increase could lower your break-even point by 15% or more depending on your margins.</li>
          <li><strong>Reduce variable costs per unit.</strong> Negotiate better rates with suppliers. Find cheaper shipping options. Reduce waste in your production process. Every dollar you save per unit increases your margin and lowers break-even.</li>
        </ol>

        <CalloutBox type="info" title="Quick Math">
          <p>If your fixed costs are $10,000/month and you make $20 profit on each sale, your break-even is 500 units. Cut fixed costs to $8,000 and you only need 400 units. Raise your margin to $25 per unit and you only need 320 units. Small changes make a big difference.</p>
        </CalloutBox>

        <h2 id="break-even-and-debt">What Your Break-Even Point Tells You About Taking On Debt</h2>
        <p>Here is where break-even analysis becomes incredibly practical for business owners considering an MCA or any other form of debt.</p>
        <p>When you take on an MCA, you add a new fixed cost to your business: the daily payment. If your MCA payment is $500 per day (roughly $10,500 per month), that entire amount gets added to your fixed costs. Run the calculator again with this new higher fixed cost number and see what happens to your break-even point.</p>
        <p>If your break-even point jumps from 500 units to 700 units, ask yourself: "Can I realistically sell 700 units every month for the next 6 to 9 months?" If the answer is no, the MCA is too expensive for your business. It is that simple.</p>

        <h2 id="should-you-take-mca">If You Cannot Break Even, Should You Take an MCA?</h2>
        <p>If your business is not currently breaking even without debt payments, adding an MCA payment will make things worse, not better. The only exception is if you are using the MCA funds to directly generate revenue that exceeds the MCA cost. For example:</p>
        <ul>
          <li>You have a confirmed large order and need cash to buy inventory to fill it. The profit from the order exceeds the MCA cost.</li>
          <li>You need to repair essential equipment that is preventing you from operating. Getting the equipment running generates revenue that covers the MCA payment.</li>
          <li>You have a seasonal business about to enter peak season and need working capital to stock up. Your peak season revenue will easily cover the MCA cost.</li>
        </ul>
        <p>In all three cases, there is a direct line from the MCA funds to revenue that exceeds the cost. If you cannot draw that line clearly, do not take the MCA.</p>

        <CalloutBox type="warning" title="Reality Check">
          <p>Using an MCA to cover operating losses is like using a credit card to pay rent. It buys time but does not fix the problem. If you are below break-even, you need to cut costs or increase revenue first.</p>
        </CalloutBox>

        <h2 id="real-world-examples">Real World Examples</h2>
        <p><strong>Restaurant Example:</strong> A pizza restaurant has fixed costs of $15,000/month (rent $4,000, payroll $8,000, insurance $500, utilities $1,000, other $1,500). Their average pizza sells for $18 and costs $6 in ingredients and packaging (variable cost). Contribution margin: $12 per pizza. Break-even: $15,000 / $12 = 1,250 pizzas per month, or about 42 pizzas per day. If they take a $50,000 MCA with $500/day payments ($10,500/month), their new break-even is $25,500 / $12 = 2,125 pizzas per month, or 71 per day. That is a 70% increase in the volume they need to sell just to break even.</p>
        <p><strong>Retail Store Example:</strong> A clothing boutique has fixed costs of $8,000/month. Their average sale is $65 with a variable cost of $30 per item. Contribution margin: $35. Break-even: $8,000 / $35 = 229 items per month. Add a $300/day MCA payment ($6,300/month) and the new break-even is $14,300 / $35 = 409 items per month. They need to nearly double their sales volume to break even.</p>
        <p><strong>Service Business Example:</strong> A plumbing company has fixed costs of $12,000/month. Their average service call brings in $250 with $50 in variable costs (gas, parts). Contribution margin: $200. Break-even: $12,000 / $200 = 60 service calls per month. Add a $400/day MCA payment ($8,400/month) and the new break-even is $20,400 / $200 = 102 service calls per month. That is an extra 42 calls they need to make every month just to break even.</p>

        <h2 id="pricing-decisions">How to Use Break-Even Analysis for Pricing Decisions</h2>
        <p>Break-even analysis is not just about knowing when you stop losing money. It is one of the best tools for setting prices. Here is how to use it:</p>
        <ol>
          <li><strong>Test different price points.</strong> Run the calculator at your current price, then try 10% higher and 10% lower. See how each change affects your break-even volume. You might find that a small price increase dramatically reduces the number of sales you need.</li>
          <li><strong>Evaluate new products or services.</strong> Before adding something to your menu or catalog, calculate its contribution margin and see how it affects your overall break-even. If a new product has thin margins, it might increase your revenue without actually helping your bottom line.</li>
          <li><strong>Decide on discounts.</strong> Before running a 20% off sale, plug the discounted price into the calculator. You might discover that at 20% off, you need to sell three times as many units just to break even on the promotion.</li>
          <li><strong>Plan for cost increases.</strong> If your supplier raises prices, run the new numbers through the calculator to see if you need to raise your own prices to stay above break-even.</li>
        </ol>

        <h2 id="faq">Frequently Asked Questions</h2>

        <details>
          <summary>What if I sell multiple products at different prices?</summary>
          <p>Use a weighted average. Take your total revenue from last month and divide by total units sold. That gives you your average price per unit. Do the same for variable costs: take total variable costs and divide by total units. These averages give you a good approximation for break-even analysis. If you want to be more precise, run the calculator separately for each product line.</p>
        </details>

        <details>
          <summary>Should I include MCA payments as a fixed cost?</summary>
          <p>Yes. If you have an MCA with fixed daily payments, include the total monthly MCA payment (daily amount times 21 business days) as a fixed cost. If your MCA is percentage-based, it is technically a variable cost (it fluctuates with revenue), but for planning purposes, it is safer to include it as a fixed cost based on your average payment amount. This gives you a more conservative break-even estimate.</p>
        </details>

        <details>
          <summary>How often should I recalculate my break-even point?</summary>
          <p>Recalculate whenever something changes: a rent increase, a new hire, a price change, a new loan or MCA payment, or a change in supplier costs. At minimum, run the calculation quarterly. Many smart business owners recalculate monthly. The number is only useful if it reflects your current reality.</p>
        </details>

        <details>
          <summary>What is a good break-even margin of safety?</summary>
          <p>Your margin of safety is how far above break-even your actual sales are. A margin of safety of 25% or more is considered healthy. That means if your break-even is 200 units, you should be selling at least 250 units consistently. A margin below 10% means you are dangerously close to losing money, and any slowdown could put you in the red. The <a href="https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" target="_blank" rel="noopener noreferrer">SBA recommends</a> maintaining healthy margins as part of sound financial management.</p>
        </details>

        <details>
          <summary>Does break-even analysis work for service businesses?</summary>
          <p>Absolutely. Instead of "units," think of each service job, project, or billable hour as a unit. Your price per unit is your rate or average project fee. Your variable cost includes the direct costs of delivering that service (travel, supplies, subcontractor labor). Fixed costs work the same way. Break-even analysis is just as valuable for a consulting firm as it is for a retail store.</p>
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
                  "name": "What if I sell multiple products at different prices?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Use a weighted average. Take your total revenue from last month and divide by total units sold for your average price. Do the same for variable costs. These averages give you a good approximation for break-even analysis."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I include MCA payments as a fixed cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Include the total monthly MCA payment (daily amount times 21 business days) as a fixed cost for a more conservative break-even estimate."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How often should I recalculate my break-even point?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Recalculate whenever something changes: a rent increase, a new hire, a price change, or a new loan payment. At minimum, run the calculation quarterly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is a good break-even margin of safety?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A margin of safety of 25% or more is considered healthy. A margin below 10% means you are dangerously close to losing money."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does break-even analysis work for service businesses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Instead of units, think of each service job, project, or billable hour as a unit. Break-even analysis is just as valuable for a consulting firm as it is for a retail store."
                  }
                }
              ]
            })
          }}
        />

        <h2 id="sources">Sources</h2>
        <ul>
          <li><a href="https://www.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs" target="_blank" rel="noopener noreferrer">U.S. Small Business Administration (SBA) - Calculate Your Startup Costs</a></li>
          <li><a href="https://www.consumerfinance.gov/consumer-tools/small-business-lending/" target="_blank" rel="noopener noreferrer">Consumer Financial Protection Bureau (CFPB) - Small Business Lending</a></li>
          <li><a href="https://www.federalreserve.gov/publications/small-business-credit-survey.htm" target="_blank" rel="noopener noreferrer">Federal Reserve - Small Business Credit Survey</a></li>
        </ul>

      </article>
    </div>
  );
}
