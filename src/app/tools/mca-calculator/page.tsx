import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import McaCostCalculator from "@/components/tools/McaCostCalculator";
import CalloutBox from "@/components/mdx/CalloutBox";

export const metadata: Metadata = {
  title: "MCA Cost Calculator. Calculate Your True MCA Cost",
  description: "Free MCA calculator. Enter your funding amount, factor rate, and holdback percentage to see total cost, effective APR, and daily payments.",
};

export default function McaCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "MCA Cost Calculator" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">MCA Cost Calculator</h1>
      <p className="text-lg text-gray-500 mb-8">Calculate the true cost of a merchant cash advance including total repayment, effective APR, and daily payment amounts.</p>
      <McaCostCalculator />
      <article className="prose prose-lg prose-blue max-w-none mt-12">

        <h2 id="what-is-mca-cost-calculator">What Is an MCA Cost Calculator and Why You Need One</h2>
        <p>A merchant cash advance (MCA) cost calculator is a tool that takes the numbers from your MCA offer and turns them into something you can actually understand. MCA companies do not give you an interest rate like a bank does. Instead, they use a factor rate, a holdback percentage, and an advance amount. Those three numbers together determine how much you will actually pay, but it is almost impossible to figure that out in your head.</p>
        <p>That is where this calculator comes in. You plug in the numbers from your offer, and it tells you the total cost in plain dollars. It also converts the cost into an effective APR so you can compare it to a traditional loan. Without this tool, you are signing a contract without knowing what it truly costs. I have talked to hundreds of business owners who had no idea their MCA was costing them 80% or even 150% when converted to an annual rate.</p>
        <p>If someone handed you a $50,000 check and said "you owe us $70,000 back," you would want to know what that looks like as a percentage. That is exactly what this calculator does.</p>

        <h2 id="how-to-read-mca-offer">How to Read Your MCA Offer</h2>
        <p>Before you use this calculator, you need to find three numbers on your MCA offer. Here is where to look and what each one means:</p>
        <p><strong>Factor Rate:</strong> This is a decimal number, usually between 1.10 and 1.50. It is NOT an interest rate. A factor rate of 1.30 means you pay back 1.30 times whatever you borrowed. So if you received $50,000, you owe $65,000 total. The factor rate is applied once to the full amount. It does not compound over time like interest.</p>
        <p><strong>Holdback Percentage:</strong> This is the percentage of your daily revenue that the MCA company takes as repayment. It is usually between 10% and 25%. If your holdback is 15% and you made $5,000 in sales today, they take $750 from your account.</p>
        <p><strong>Advance Amount (Funding Amount):</strong> This is the actual cash you receive in your bank account. It is not the same as the total repayment. Your offer might say "advance amount: $50,000" and "purchased amount: $65,000." The difference between those two numbers is your cost.</p>

        <CalloutBox type="warning" title="Watch Out">
          <p>Some MCA companies bury the factor rate or call it something else like "buy rate" or "specified percentage." If you cannot find the factor rate on your contract, divide the total payback amount by the advance amount. That gives you the factor rate.</p>
        </CalloutBox>

        <h2 id="how-to-use">Step by Step: How to Use This Calculator</h2>
        <p>Using this calculator takes about 30 seconds. Here is exactly what to do:</p>
        <ol>
          <li><strong>Enter your Funding Amount.</strong> This is the cash you will receive (or already received). For example, $50,000.</li>
          <li><strong>Enter the Factor Rate.</strong> Find this on your MCA agreement. It looks like 1.25, 1.35, 1.40, etc.</li>
          <li><strong>Enter the Holdback Percentage.</strong> This is the percentage of daily revenue taken for repayment. Enter the number without the percent sign. For example, enter 15 for 15%.</li>
          <li><strong>Enter your Average Daily Revenue.</strong> Estimate how much your business brings in per day from credit card sales or total revenue, depending on your MCA structure.</li>
          <li><strong>Click Calculate</strong> and review your results below.</li>
        </ol>

        <CalloutBox type="tip" title="Pro Tip">
          <p>Run the calculator with different factor rates to see how much each tenth of a point costs you. The difference between 1.30 and 1.40 on a $100,000 advance is $10,000. That is real money.</p>
        </CalloutBox>

        <h2 id="understanding-results">Understanding Your Results</h2>
        <p>After you click calculate, you will see five key numbers. Here is what each one means and why it matters:</p>
        <p><strong>Total Repayment:</strong> This is the full amount you will pay back to the MCA company. It equals your funding amount multiplied by the factor rate. If you borrowed $50,000 at a 1.35 factor rate, your total repayment is $67,500.</p>
        <p><strong>Total Cost of Funding:</strong> This is the dollar amount you pay above and beyond what you received. Using the example above, your cost is $17,500. Think of this as the "fee" for borrowing the money. This is the number that matters most because it tells you in plain dollars how much the MCA costs.</p>
        <p><strong>Daily Payment:</strong> This is how much comes out of your account every business day. It is calculated by multiplying your average daily revenue by the holdback percentage. If you bring in $5,000 a day and your holdback is 15%, your daily payment is $750.</p>
        <p><strong>Repayment Period:</strong> This tells you approximately how many business days it will take to pay off the MCA. The calculator divides your total repayment by your daily payment. A shorter repayment period means higher effective APR because you are paying the same fee in less time.</p>
        <p><strong>Effective APR:</strong> This converts the MCA cost into an annual percentage rate so you can compare it to a traditional loan. MCAs typically have effective APRs between 40% and 350%. This is the number that usually shocks people. A factor rate of 1.30 might sound reasonable, but when you realize it converts to a 80%+ APR over 6 months, the picture changes fast.</p>

        <h2 id="good-vs-bad-factor-rate">What Is a Good Factor Rate vs a Bad One</h2>
        <p>Not all factor rates are created equal. Here is a general guide based on what I have seen across hundreds of MCA deals:</p>
        <table>
          <thead>
            <tr>
              <th>Factor Rate Range</th>
              <th>Rating</th>
              <th>What It Means</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.10 to 1.20</td>
              <td>Good</td>
              <td>You have strong revenue and credit. This is about as cheap as MCAs get.</td>
            </tr>
            <tr>
              <td>1.20 to 1.35</td>
              <td>Average</td>
              <td>Most MCA deals fall here. It is expensive but common.</td>
            </tr>
            <tr>
              <td>1.35 to 1.45</td>
              <td>Expensive</td>
              <td>You are paying a premium. Consider other options first.</td>
            </tr>
            <tr>
              <td>1.45 and above</td>
              <td>Very Expensive</td>
              <td>You are likely in a tough spot. Explore alternatives before signing.</td>
            </tr>
          </tbody>
        </table>
        <p>Keep in mind that the factor rate alone does not tell the whole story. A 1.20 factor rate with a 25% holdback can hurt your daily cash flow more than a 1.35 with a 10% holdback. That is why you need to look at all the numbers together, which is exactly what this calculator does.</p>

        <h2 id="compare-multiple-offers">How to Compare Multiple MCA Offers Using This Tool</h2>
        <p>If you have more than one MCA offer on the table (and you should always get at least two or three), use this calculator to run each offer separately. Write down the results for each one and compare them side by side. Here is what to focus on:</p>
        <ol>
          <li><strong>Compare the total cost of funding.</strong> Not the total repayment, but the cost above the advance amount. The offer with the lowest cost saves you the most money.</li>
          <li><strong>Compare the daily payment amount.</strong> Can your business handle this daily withdrawal without running out of cash? The cheapest deal is not always the best if the daily payment crushes your cash flow.</li>
          <li><strong>Compare the effective APR.</strong> This gives you the apples-to-apples comparison. The lower the APR, the cheaper the money.</li>
          <li><strong>Compare the repayment period.</strong> A longer payoff means smaller daily payments but more time with debt on your books. A shorter payoff means bigger daily hits but you are free sooner.</li>
        </ol>

        <CalloutBox type="info" title="Remember">
          <p>The "best" MCA offer is not just the cheapest one. It is the one your business can afford to pay back without missing rent, payroll, or other obligations. Use the daily payment number as your reality check.</p>
        </CalloutBox>

        <h2 id="hidden-costs">The Hidden Costs This Calculator Does Not Show</h2>
        <p>This calculator gives you a clear picture of the core MCA cost, but there are fees that may not be included in the factor rate. You need to ask about these before you sign:</p>
        <ul>
          <li><strong>Origination Fee:</strong> Some MCA companies charge 1% to 3% of the advance amount just to process the deal. On a $100,000 advance, that is $1,000 to $3,000 taken right off the top before you see a dime.</li>
          <li><strong>Closing Fee:</strong> Similar to an origination fee, this is charged at the time of funding. It may be called an "admin fee" or "processing fee."</li>
          <li><strong>ACH Fee:</strong> Every time the MCA company pulls money from your bank account, your bank might charge you an ACH fee. If you are making 20+ payments a month, those small fees add up.</li>
          <li><strong>Wire Transfer Fee:</strong> If the MCA company sends your funds by wire, expect a $25 to $50 fee.</li>
          <li><strong>Broker Fee:</strong> If you used an MCA broker, they might take a percentage of the advance. This is often 5% to 10% and is sometimes baked into the factor rate.</li>
          <li><strong>UCC Filing Fee:</strong> MCA companies file a UCC lien on your business. The filing cost is small, but the lien can affect your ability to get other financing.</li>
        </ul>
        <p>Add up all these fees on top of the total cost number from the calculator. That gives you the true all-in cost of the MCA.</p>

        <h2 id="when-to-walk-away">When the Numbers Say "Walk Away"</h2>
        <p>There are clear signs that an MCA offer is not worth taking. After running the numbers through this calculator, walk away if:</p>
        <ul>
          <li>The effective APR is above 100% and you have any other option available.</li>
          <li>The daily payment is more than 20% of your average daily revenue.</li>
          <li>The total cost of funding is more than 40% of the advance amount (factor rate above 1.40).</li>
          <li>You need to take a second MCA to pay off the first one. That is called stacking, and it is a debt spiral.</li>
          <li>You are using the MCA to cover operating losses, not to fund growth or bridge a temporary gap.</li>
        </ul>
        <p>Walking away from money feels hard, especially when cash is tight. But taking an MCA you cannot afford makes the problem worse, not better. The math does not lie.</p>

        <h2 id="better-alternatives">Better Alternatives If the Cost Is Too High</h2>
        <p>If the calculator shows numbers that make you uncomfortable, here are alternatives to explore before signing an MCA:</p>
        <ul>
          <li><strong>SBA Microloans:</strong> Up to $50,000 with rates between 8% and 13%. The <a href="https://www.sba.gov/funding-programs/loans/microloans" target="_blank" rel="noopener noreferrer">SBA microloan program</a> is designed for small businesses that need smaller amounts of capital.</li>
          <li><strong>Business Line of Credit:</strong> Draw only what you need and pay interest only on what you use. Rates are typically 7% to 25% APR.</li>
          <li><strong>Invoice Factoring:</strong> If you have outstanding invoices, a factoring company will advance you 80% to 90% of the invoice value at a much lower cost than an MCA.</li>
          <li><strong>Equipment Financing:</strong> If you need the money for equipment, use the equipment itself as collateral. Rates are usually 5% to 30% APR.</li>
          <li><strong>Negotiate with Vendors:</strong> Ask for extended payment terms (net 60 or net 90) to free up cash without borrowing at all.</li>
          <li><strong>Revenue-Based Financing:</strong> Similar to an MCA but often with better terms and more transparency. Look for providers that disclose APR upfront.</li>
        </ul>
        <p>The <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-merchant-cash-advance-en-1981/" target="_blank" rel="noopener noreferrer">Consumer Financial Protection Bureau (CFPB)</a> recommends comparing all financing options before committing to any form of business funding.</p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <details>
          <summary>How accurate is this MCA cost calculator?</summary>
          <p>This calculator provides a close estimate based on the numbers you enter. The actual cost may vary slightly because MCA repayment is based on a percentage of daily revenue, which fluctuates. If your revenue drops, payments get smaller but the repayment period gets longer. If revenue increases, you pay it off faster. The total repayment amount stays the same regardless.</p>
        </details>

        <details>
          <summary>What factor rate should I expect for my first MCA?</summary>
          <p>First-time MCA borrowers with decent revenue (at least $15,000 per month) and 6+ months in business typically see factor rates between 1.20 and 1.40. If your credit score is above 600 and your bank statements look clean, you might qualify for the lower end. Businesses with lower revenue or shorter operating history often see rates of 1.35 to 1.50.</p>
        </details>

        <details>
          <summary>Why is the effective APR so high on my MCA?</summary>
          <p>MCA effective APR is high because you are repaying the full cost in a short period, usually 3 to 12 months. When you annualize a cost of 30% to 50% of the principal over just a few months, the APR shoots up. A $50,000 advance with a 1.35 factor rate costs $17,500. If you pay it back in 6 months, that is roughly equivalent to a 70% to 80% APR. Pay it back in 4 months and the APR is even higher.</p>
        </details>

        <details>
          <summary>Can I negotiate the factor rate on an MCA?</summary>
          <p>Yes, factor rates are negotiable. MCA companies set rates based on risk, and they have room to move. If you have strong monthly revenue, clean bank statements, and multiple offers from competitors, use that leverage. Even dropping from a 1.35 to a 1.30 saves you $2,500 on a $50,000 advance. Get at least three offers and play them against each other.</p>
        </details>

        <details>
          <summary>Is an MCA considered a loan?</summary>
          <p>No. Legally, an MCA is a purchase of future receivables, not a loan. This distinction matters because MCAs are not subject to usury laws that cap interest rates on loans. That is why MCA companies can charge effective APRs of 100% or more. The <a href="https://www.federalreserve.gov/publications/2023-november-supervision-and-regulation-report.htm" target="_blank" rel="noopener noreferrer">Federal Reserve</a> has noted the growth of this market and the need for more transparency in pricing.</p>
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
                  "name": "How accurate is this MCA cost calculator?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "This calculator provides a close estimate based on the numbers you enter. The actual cost may vary slightly because MCA repayment is based on a percentage of daily revenue, which fluctuates. The total repayment amount stays the same regardless."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What factor rate should I expect for my first MCA?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "First-time MCA borrowers with decent revenue and 6+ months in business typically see factor rates between 1.20 and 1.40. Businesses with lower revenue or shorter operating history often see rates of 1.35 to 1.50."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why is the effective APR so high on my MCA?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "MCA effective APR is high because you are repaying the full cost in a short period, usually 3 to 12 months. When you annualize a cost of 30% to 50% of the principal over just a few months, the APR shoots up significantly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I negotiate the factor rate on an MCA?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, factor rates are negotiable. If you have strong monthly revenue, clean bank statements, and multiple offers from competitors, use that leverage. Get at least three offers and play them against each other."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is an MCA considered a loan?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Legally, an MCA is a purchase of future receivables, not a loan. This distinction matters because MCAs are not subject to usury laws that cap interest rates on loans."
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
