import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import LoanEligibilityChecker from "@/components/tools/LoanEligibilityChecker";

export const metadata: Metadata = {
  title: "Business Loan Eligibility Checker. See What You Qualify For",
  description: "Answer 5 quick questions to find out which business financing options you likely qualify for, from SBA loans to merchant cash advances, with estimated rate ranges.",
  alternates: {
    canonical: "https://themcaguide.com/tools/loan-eligibility-checker",
  },
};

export default function LoanEligibilityCheckerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "Business Loan Eligibility Checker" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Business Loan Eligibility Checker</h1>
      <p className="text-lg text-gray-500 mb-8">Answer 5 quick questions about your business and see which financing options you are most likely to qualify for, along with estimated rate ranges.</p>
      <LoanEligibilityChecker />
      <article className="prose prose-lg prose-blue max-w-none mt-12">

        <h2 id="how-it-works">How This Eligibility Checker Works</h2>
        <p>This tool evaluates your business profile against the typical requirements for five common types of business financing. It looks at your time in business, annual revenue, credit score range, collateral, and existing debt load. Based on your answers, it estimates whether you are likely to qualify for each product and shows you the typical rate ranges.</p>
        <p>This is not a credit check and it does not affect your credit score. It is a quick screening tool to help you focus your search on the financing options most likely to approve you. Every lender has slightly different criteria, so think of these results as a starting point rather than a guarantee.</p>

        <h2 id="financing-types">Understanding Your Financing Options</h2>
        <p><strong>SBA Loans</strong> are backed by the U.S. Small Business Administration and offer the lowest rates available, typically 6% to 13% APR. They are also the hardest to qualify for. Most SBA lenders want at least 2 years in business, a credit score above 680, and clean financials. The application process can take weeks or months.</p>
        <p><strong>Business Term Loans</strong> from banks and online lenders provide a lump sum you repay over a fixed period. Rates range from 7% to 30% APR depending on your creditworthiness. Online lenders are generally more flexible than traditional banks but charge higher rates.</p>
        <p><strong>Business Lines of Credit</strong> give you access to a revolving pool of funds. You only pay interest on what you draw. This is ideal for managing cash flow gaps or seasonal fluctuations. Rates typically fall between 10% and 30% APR.</p>
        <p><strong>Invoice Factoring</strong> lets you sell unpaid invoices for immediate cash. The factoring company advances you 80% to 90% of the invoice value and collects from your customer. Your customers' creditworthiness matters more than yours. Fees are typically 1% to 5% per invoice.</p>
        <p><strong>Merchant Cash Advances</strong> have the lowest qualification bar. Most MCA companies only need 6 months in business and $10,000 or more in monthly revenue. Credit score matters less because repayment is tied to your daily sales. The tradeoff is cost. Effective APRs on MCAs typically range from 40% to 350%.</p>

        <h2 id="improving-eligibility">How to Improve Your Eligibility</h2>
        <p>If your results show red across the board, there are concrete steps you can take. Pay down existing debt to improve your debt-to-revenue ratio. Build your credit score by making all payments on time and reducing credit utilization. Increase revenue by expanding your customer base or raising prices. Each of these improvements opens doors to better financing options at lower rates.</p>
        <p>Even small improvements matter. Moving your credit score from 580 to 620 can shift you from MCA-only territory into eligibility for online term loans and lines of credit, which typically cost half as much or less.</p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <details>
          <summary>Does this tool check my credit score?</summary>
          <p>No. This tool does not perform any credit checks or access your financial data. You select your credit score range from the options provided. Your answers are processed entirely in your browser and are not stored or shared with anyone.</p>
        </details>

        <details>
          <summary>Why does the tool show me eligible for an MCA but not an SBA loan?</summary>
          <p>SBA loans have strict requirements including strong credit, years of operating history, and detailed documentation. MCAs are designed for businesses that do not meet traditional lending criteria. The tradeoff is that MCAs cost significantly more. If you qualify for both, a traditional loan is almost always the better choice.</p>
        </details>

        <details>
          <summary>How accurate are these results?</summary>
          <p>These results reflect general industry standards and typical lender requirements. Every lender evaluates applications differently, so your actual experience may vary. Use these results to narrow your search and prioritize which lenders to approach first.</p>
        </details>

        <details>
          <summary>What if I am a startup with less than 6 months in business?</summary>
          <p>Most traditional lenders require at least 1 to 2 years in business. Startups typically have access to SBA microloans (through approved intermediaries), business credit cards, crowdfunding, or personal loans. Some online lenders will work with businesses as young as 3 months if revenue is strong enough.</p>
        </details>

        <details>
          <summary>Should I apply for multiple financing types at once?</summary>
          <p>It is a good idea to explore multiple options, but be strategic about formal applications. Each application with a hard credit pull temporarily lowers your credit score. Start with options where you are most likely to qualify, get at least two or three offers, and compare them before committing.</p>
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
                  "name": "Does this tool check my credit score?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. This tool does not perform any credit checks or access your financial data. Your answers are processed entirely in your browser and are not stored or shared."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why does the tool show me eligible for an MCA but not an SBA loan?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SBA loans have strict requirements including strong credit and years of operating history. MCAs are designed for businesses that do not meet traditional lending criteria but cost significantly more."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How accurate are these results?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "These results reflect general industry standards. Every lender evaluates applications differently, so use these results to narrow your search and prioritize which lenders to approach first."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What if I am a startup with less than 6 months in business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most traditional lenders require 1 to 2 years in business. Startups can explore SBA microloans, business credit cards, crowdfunding, or personal loans."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I apply for multiple financing types at once?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Explore multiple options but be strategic. Each hard credit pull temporarily lowers your score. Start with options where you are most likely to qualify and get at least two or three offers to compare."
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
