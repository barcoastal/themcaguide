import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import PayrollBurdenCalculator from "@/components/tools/PayrollBurdenCalculator";

export const metadata: Metadata = {
  title: "Payroll Burden Calculator. True Cost of Each Employee",
  description: "Free payroll burden calculator. Enter salary, state, benefits, and taxes to see total employee cost, burden rate percentage, monthly cost, and cost per hour.",
  alternates: {
    canonical: "https://themcaguide.com/tools/payroll-burden-calculator",
  },
};

export default function PayrollBurdenCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "Payroll Burden Calculator" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Payroll Burden Calculator</h1>
      <p className="text-lg text-gray-500 mb-8">Calculate the true cost of hiring an employee including salary, payroll taxes, health insurance, retirement benefits, and more.</p>
      <PayrollBurdenCalculator />
      <article className="prose prose-lg prose-blue max-w-none mt-12">

        <h2 id="what-is-payroll-burden">What Is Payroll Burden and Why It Matters</h2>
        <p>Payroll burden is the total cost of employing someone beyond their base salary. It includes payroll taxes, health insurance, retirement contributions, and other mandatory costs. Most small business owners think of an employee as their salary number, but the real cost is 20% to 40% higher. If you are paying someone $55,000 a year, your actual cost is closer to $70,000 to $75,000 once you add taxes and benefits.</p>
        <p>Understanding your payroll burden is critical for pricing your services, building a budget, and deciding if you can afford to hire. If you underprice your work because you forgot about payroll taxes and benefits, you are losing money on every job. This calculator shows you the full picture so you can plan with real numbers.</p>

        <h2 id="what-is-included">What Is Included in Payroll Burden</h2>
        <p>The biggest components of payroll burden are employer-side payroll taxes and benefits. Here is what makes up the cost:</p>
        <ul>
          <li><strong>FICA taxes:</strong> Employers pay 6.2% for Social Security and 1.45% for Medicare, totaling 7.65% of the employee's gross wages. This is mandatory for every W-2 employee.</li>
          <li><strong>Federal Unemployment Tax (FUTA):</strong> This is 6% on the first $7,000 of wages, but after the state credit it is typically just 0.6%. It adds up to about $42 per employee per year.</li>
          <li><strong>State Unemployment Insurance (SUI):</strong> Rates vary by state and by your business's claims history. New employers typically pay the standard new employer rate for their state.</li>
          <li><strong>Health insurance:</strong> If you offer health benefits, the employer portion averages about $6,000 to $8,000 per year for individual coverage.</li>
          <li><strong>Retirement match:</strong> If you offer a 401(k) or similar plan with an employer match, this is usually 3% to 6% of salary.</li>
        </ul>

        <h2 id="how-to-use">How to Use This Calculator</h2>
        <p>Enter the employee's annual salary, select their state for the correct unemployment insurance rate, and fill in your benefits costs. The calculator updates in real time. If you do not offer health insurance or retirement, set those fields to zero. The payroll taxes checkbox lets you toggle employer-side taxes on or off if you want to see the difference.</p>
        <p>The results show you the total annual cost, the burden rate as a percentage, what the employee costs you per month, and the fully loaded cost per hour based on a standard 2,080-hour work year.</p>

        <h2 id="burden-rate-benchmarks">Typical Burden Rates by Industry</h2>
        <p>Burden rates vary depending on what benefits you offer. A bare-bones setup with no health insurance or retirement might have a burden rate of 10% to 15%. A full benefits package with health coverage and a generous retirement match pushes the rate to 30% to 40%. Government and union positions often have burden rates above 50%. Knowing where you fall helps you benchmark against your industry.</p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <details>
          <summary>What is a typical payroll burden rate for small businesses?</summary>
          <p>Most small businesses have a payroll burden rate between 15% and 30%. This includes mandatory payroll taxes (about 10%) plus whatever benefits you offer. If you provide health insurance and retirement matching, expect the rate to be closer to 25% to 35%.</p>
        </details>

        <details>
          <summary>Does payroll burden include the employee's salary?</summary>
          <p>No. The burden rate is the percentage of additional costs on top of the salary. If an employee earns $50,000 and your burden rate is 25%, the total cost is $62,500. The $12,500 in extras is the burden.</p>
        </details>

        <details>
          <summary>How do I reduce my payroll burden?</summary>
          <p>You can reduce burden by shopping for more affordable health plans, adjusting retirement match percentages, or hiring contractors instead of employees for certain roles. Just be careful with contractor classification, as the IRS has strict rules about who qualifies.</p>
        </details>

        <details>
          <summary>Are payroll burden costs tax deductible?</summary>
          <p>Yes. Employer-side payroll taxes, health insurance premiums, and retirement contributions are all deductible business expenses. They reduce your taxable income dollar for dollar.</p>
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
                  "name": "What is a typical payroll burden rate for small businesses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most small businesses have a payroll burden rate between 15% and 30%. This includes mandatory payroll taxes (about 10%) plus whatever benefits you offer."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does payroll burden include the employee's salary?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. The burden rate is the percentage of additional costs on top of the salary. If an employee earns $50,000 and your burden rate is 25%, the total cost is $62,500."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I reduce my payroll burden?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can reduce burden by shopping for more affordable health plans, adjusting retirement match percentages, or hiring contractors instead of employees for certain roles."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are payroll burden costs tax deductible?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Employer-side payroll taxes, health insurance premiums, and retirement contributions are all deductible business expenses."
                  }
                }
              ]
            })
          }}
        />

        <h2 id="sources">Sources</h2>
        <ul>
          <li><a href="https://www.irs.gov/businesses/small-businesses-self-employed/understanding-employment-taxes" target="_blank" rel="noopener noreferrer">IRS - Understanding Employment Taxes</a></li>
          <li><a href="https://www.bls.gov/news.release/ecec.nr0.htm" target="_blank" rel="noopener noreferrer">Bureau of Labor Statistics - Employer Costs for Employee Compensation</a></li>
          <li><a href="https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees" target="_blank" rel="noopener noreferrer">SBA - Hire and Manage Employees</a></li>
        </ul>

      </article>
    </div>
  );
}
