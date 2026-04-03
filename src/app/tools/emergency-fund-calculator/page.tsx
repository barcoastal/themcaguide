import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import EmergencyFundCalculator from "@/components/tools/EmergencyFundCalculator";

export const metadata: Metadata = {
  title: "Business Emergency Fund Calculator. How Much Do You Need?",
  description: "Free emergency fund calculator for small businesses. Enter your monthly expenses and payroll to find out how much you need saved and how to get there.",
  alternates: {
    canonical: "https://themcaguide.com/tools/emergency-fund-calculator",
  },
};

export default function EmergencyFundCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "Emergency Fund Calculator" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Business Emergency Fund Calculator</h1>
      <p className="text-lg text-gray-500 mb-8">Calculate how much your business needs in emergency reserves to cover expenses during slow periods, unexpected disruptions, or economic downturns.</p>
      <EmergencyFundCalculator />
      <article className="prose prose-lg prose-blue max-w-none mt-12">

        <h2 id="why-emergency-fund">Why Your Business Needs an Emergency Fund</h2>
        <p>An emergency fund is the financial cushion that keeps your business running when revenue drops unexpectedly. Whether it is a slow season, a lost client, equipment failure, or an economic downturn, having cash reserves means you do not have to scramble for expensive financing just to make payroll or keep the lights on.</p>
        <p>According to a <a href="https://www.jpmorgan.com/insights/research/small-business-cash-liquidity" target="_blank" rel="noopener noreferrer">JPMorgan Chase study</a>, the median small business holds only 27 days of cash reserves. That means half of all small businesses could not survive a single month without revenue. This calculator helps you figure out exactly how much you need and how to build it.</p>

        <h2 id="how-much-to-save">How Much Should You Save</h2>
        <p>The standard recommendation is 3 to 6 months of total operating expenses. That includes rent, utilities, insurance, loan payments, payroll, and variable costs. If your business is seasonal or in a volatile industry, aim for the higher end. If you have steady recurring revenue and long-term contracts, 3 months may be enough.</p>
        <p>Start by calculating your monthly burn rate, which is the total amount your business spends every month regardless of revenue. This calculator does that for you by adding up your fixed expenses, payroll, and variable costs. Multiply that number by your desired runway and you have your target.</p>

        <h2 id="how-to-build">How to Build Your Emergency Fund</h2>
        <p>Building reserves does not happen overnight. Set a monthly savings target and treat it like a fixed expense. Open a separate high-yield business savings account so the money is accessible but not mixed with operating cash. Start with 1% to 5% of monthly revenue and increase it as your business grows.</p>
        <p>If you just experienced a strong month, put the extra profit directly into reserves. Avoid the temptation to spend every good month. Businesses that build reserves during good times are the ones that survive bad times. The <a href="https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" target="_blank" rel="noopener noreferrer">SBA recommends</a> making savings a non-negotiable part of your monthly budget.</p>

        <h2 id="when-to-use">When to Use Your Emergency Fund</h2>
        <p>Your emergency fund is for genuine emergencies, not opportunities. Use it when revenue drops below your break-even point, when you face an unexpected major expense, or when you need to bridge a temporary gap. Do not use it to fund expansion, buy new equipment, or cover chronic operating losses. If your business is consistently losing money, the solution is fixing the business model, not draining your reserves.</p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <details>
          <summary>How many months of expenses should a small business save?</summary>
          <p>Most financial advisors recommend 3 to 6 months of total operating expenses. Businesses with variable revenue or seasonal swings should target 6 months. Businesses with stable, recurring revenue can start with 3 months.</p>
        </details>

        <details>
          <summary>Where should I keep my business emergency fund?</summary>
          <p>Keep it in a separate high-yield business savings account. You want the money accessible within 1 to 2 business days but not so easy to reach that you spend it on non-emergencies. Do not invest emergency funds in stocks or other volatile assets.</p>
        </details>

        <details>
          <summary>Should I build an emergency fund before paying off debt?</summary>
          <p>Start with a small emergency fund of at least one month of expenses, then focus on paying down high-interest debt. Once the expensive debt is gone, aggressively build your reserves to the 3 to 6 month target. Having zero reserves while paying off debt leaves you vulnerable to any unexpected expense.</p>
        </details>

        <details>
          <summary>What counts as a business emergency?</summary>
          <p>A business emergency is any unexpected event that threatens your ability to operate. This includes sudden revenue drops, major equipment failure, natural disasters, loss of a key client, or unexpected legal expenses. Planned expenses like seasonal inventory purchases are not emergencies and should be budgeted separately.</p>
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
                  "name": "How many months of expenses should a small business save?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most financial advisors recommend 3 to 6 months of total operating expenses. Businesses with variable revenue or seasonal swings should target 6 months."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where should I keep my business emergency fund?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Keep it in a separate high-yield business savings account. You want the money accessible within 1 to 2 business days but not so easy to reach that you spend it on non-emergencies."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I build an emergency fund before paying off debt?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Start with a small emergency fund of at least one month of expenses, then focus on paying down high-interest debt. Once the expensive debt is gone, aggressively build your reserves to the 3 to 6 month target."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What counts as a business emergency?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A business emergency is any unexpected event that threatens your ability to operate, including sudden revenue drops, major equipment failure, natural disasters, loss of a key client, or unexpected legal expenses."
                  }
                }
              ]
            })
          }}
        />

        <h2 id="sources">Sources</h2>
        <ul>
          <li><a href="https://www.jpmorgan.com/insights/research/small-business-cash-liquidity" target="_blank" rel="noopener noreferrer">JPMorgan Chase Institute - Small Business Cash Liquidity</a></li>
          <li><a href="https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" target="_blank" rel="noopener noreferrer">U.S. Small Business Administration - Manage Your Finances</a></li>
          <li><a href="https://www.fdic.gov/resources/bankers/small-business-lending/" target="_blank" rel="noopener noreferrer">FDIC - Small Business Lending Resources</a></li>
        </ul>

      </article>
    </div>
  );
}
