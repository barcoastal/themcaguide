import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import RevenueForecastCalculator from "@/components/tools/RevenueForecastCalculator";

export const metadata: Metadata = {
  title: "Revenue Forecast Calculator. 12-Month Revenue Projections",
  description: "Free revenue forecast calculator. Enter your recent revenue and growth assumptions to project the next 12 months with seasonal adjustments and planned changes.",
  alternates: {
    canonical: "https://themcaguide.com/tools/revenue-forecast-calculator",
  },
};

export default function RevenueForecastCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "Revenue Forecast Calculator" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Revenue Forecast Calculator</h1>
      <p className="text-lg text-gray-500 mb-8">Project your business revenue for the next 12 months based on recent performance, growth assumptions, and seasonal patterns.</p>
      <RevenueForecastCalculator />
      <article className="prose prose-lg prose-blue max-w-none mt-12">

        <h2 id="why-forecast-revenue">Why You Should Forecast Revenue</h2>
        <p>Revenue forecasting is not just for big companies with finance teams. Every small business owner needs to know where revenue is headed over the next 6 to 12 months. Without a forecast, you are making decisions about hiring, inventory, and spending based on gut feeling instead of numbers.</p>
        <p>A good revenue forecast helps you plan for slow periods before they hit, decide when to hire or invest in marketing, set realistic goals for the year, and identify when you might need outside financing. According to the <a href="https://www.score.org/" target="_blank" rel="noopener noreferrer">SCORE Association</a>, businesses that plan financially are significantly more likely to survive and grow than those that do not.</p>

        <h2 id="how-to-use">How to Use This Calculator</h2>
        <p>Start by entering your revenue from the last three months. The calculator averages these to create a baseline. Then set your expected monthly growth rate. If you are unsure, 2% to 5% per month is a reasonable assumption for a growing small business. Zero percent means flat growth, which is useful as a comparison point.</p>
        <p>If your business has slow seasons, turn on seasonal adjustments and select the months when revenue typically dips. The calculator reduces projected revenue by 25% for those months. You can also add additional monthly revenue from planned changes like a new product launch, increased marketing spend, or new hires.</p>
        <p>The results table shows your projected revenue alongside flat growth so you can see the impact of your growth assumptions. The projected annual total gives you a number to plan around for budgeting, hiring, and investment decisions.</p>

        <h2 id="growth-rate-tips">Choosing the Right Growth Rate</h2>
        <p>The growth rate you enter has a big impact on the forecast. Here are some guidelines. If your business has been growing steadily, use your actual month-over-month growth rate from the past 6 to 12 months. If you are launching something new, you might use a higher rate for the first few months and adjust down after that.</p>
        <p>Be honest with your assumptions. Overly optimistic forecasts lead to overspending and cash flow problems. Conservative forecasts give you room to outperform. Run the calculator with multiple growth rates to see the range of outcomes. The difference between 3% and 7% monthly growth compounds quickly over 12 months.</p>

        <h2 id="seasonal-adjustments">Understanding Seasonal Adjustments</h2>
        <p>Most businesses have seasonal patterns. Retailers peak during the holidays. Landscapers slow down in winter. Accountants are busiest from January through April. Identifying your slow months and planning for them is one of the most important things you can do for your cash flow. This calculator lets you mark those months so your forecast reflects reality instead of a smooth upward line.</p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <details>
          <summary>How accurate are revenue forecasts?</summary>
          <p>Revenue forecasts are estimates based on assumptions. They become more accurate as you refine your inputs with real data. Review and update your forecast monthly. The goal is not perfection but having a reasonable plan to make better decisions.</p>
        </details>

        <details>
          <summary>What growth rate should I use?</summary>
          <p>Use your actual historical growth rate if you have at least 6 months of data. If you are a newer business, 3% to 5% monthly growth is a reasonable starting assumption. Adjust based on planned investments in marketing, sales, or new products.</p>
        </details>

        <details>
          <summary>Should I include one-time revenue in my forecast?</summary>
          <p>No. Base your forecast on recurring or repeatable revenue. One-time windfalls like a large project or insurance payout should be tracked separately. Including them in your baseline will inflate your projections and lead to poor planning.</p>
        </details>

        <details>
          <summary>How often should I update my revenue forecast?</summary>
          <p>Update your forecast at least once a month with actual revenue data. Replace projections with real numbers as each month closes. This rolling forecast approach keeps your plan grounded in reality and helps you spot trends early.</p>
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
                  "name": "How accurate are revenue forecasts?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Revenue forecasts are estimates based on assumptions. They become more accurate as you refine your inputs with real data. Review and update your forecast monthly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What growth rate should I use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Use your actual historical growth rate if you have at least 6 months of data. If you are a newer business, 3% to 5% monthly growth is a reasonable starting assumption."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I include one-time revenue in my forecast?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Base your forecast on recurring or repeatable revenue. One-time windfalls should be tracked separately to avoid inflating your projections."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How often should I update my revenue forecast?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Update your forecast at least once a month with actual revenue data. This rolling forecast approach keeps your plan grounded in reality."
                  }
                }
              ]
            })
          }}
        />

        <h2 id="sources">Sources</h2>
        <ul>
          <li><a href="https://www.score.org/" target="_blank" rel="noopener noreferrer">SCORE Association - Free Business Mentoring and Resources</a></li>
          <li><a href="https://www.sba.gov/business-guide/plan-your-business/financial-projections" target="_blank" rel="noopener noreferrer">U.S. Small Business Administration - Financial Projections</a></li>
          <li><a href="https://www.census.gov/programs-surveys/abs.html" target="_blank" rel="noopener noreferrer">U.S. Census Bureau - Annual Business Survey</a></li>
        </ul>

      </article>
    </div>
  );
}
