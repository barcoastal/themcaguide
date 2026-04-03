import { Metadata } from "next";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CreditScoreEstimator from "@/components/tools/CreditScoreEstimator";

export const metadata: Metadata = {
  title: "Business Credit Score Estimator. Check Your PAYDEX Score",
  description: "Free business credit score estimator. Answer 7 quick questions to get your estimated PAYDEX score, financing outlook, and tips to improve your business credit.",
  alternates: {
    canonical: "https://themcaguide.com/tools/credit-score-estimator",
  },
};

export default function CreditScoreEstimatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Tools", href: "/tools" }, { label: "Business Credit Score Estimator" }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Business Credit Score Estimator</h1>
      <p className="text-lg text-gray-500 mb-8">Answer a few quick questions about your business to get an estimated PAYDEX credit score range and personalized tips for improving your business credit.</p>
      <CreditScoreEstimator />
      <article className="prose prose-lg prose-blue max-w-none mt-12">

        <h2 id="what-is-business-credit-score">What Is a Business Credit Score and Why It Matters</h2>
        <p>A business credit score is a number that tells lenders, suppliers, and partners how likely your business is to pay its bills on time. The most widely used business credit score is the Dun & Bradstreet PAYDEX score, which ranges from 1 to 100. A score of 80 or above is considered good, while anything below 50 signals risk.</p>
        <p>Unlike your personal credit score, your business credit score is not automatically generated. You need to actively build it by establishing trade credit, paying bills on time, and making sure your vendors report your payment history to business credit bureaus. Many small business owners do not even know they have a business credit score, or that it is separate from their personal one.</p>
        <p>Your business credit score directly affects your ability to get financing, the interest rates you qualify for, and even whether suppliers will extend you trade credit. A strong score opens doors to SBA loans, business lines of credit, and better vendor terms. A weak score limits you to expensive options like merchant cash advances.</p>

        <h2 id="how-estimator-works">How This Estimator Works</h2>
        <p>This tool asks seven questions about your business profile, payment history, debt level, and personal credit. It uses these answers to estimate where your PAYDEX score likely falls. The questions are based on the same factors that Dun & Bradstreet and other business credit bureaus use when calculating your actual score.</p>
        <p>Keep in mind that this is an estimate. Your actual score depends on the specific payment data reported to the credit bureaus. To get your official PAYDEX score, you can request it directly from <a href="https://www.dnb.com/" target="_blank" rel="noopener noreferrer">Dun & Bradstreet</a>. Many business owners use this estimator as a starting point to understand where they stand before pulling their official report.</p>

        <h2 id="how-to-improve">How to Improve Your Business Credit Score</h2>
        <p>Building business credit takes time, but the steps are straightforward. Start by getting a D-U-N-S number if you do not have one. It is free and required for a PAYDEX score. Then open trade credit accounts with vendors who report to business credit bureaus. Pay every bill early or on time. Even one late payment can drop your score significantly.</p>
        <p>Separate your personal and business finances completely. Use a dedicated business bank account and business credit card. Keep your credit utilization low. If you have outstanding liens or judgments, resolve them as quickly as possible. These steps, done consistently over 6 to 12 months, can move your score from fair to good.</p>

        <h2 id="faq">Frequently Asked Questions</h2>

        <details>
          <summary>How accurate is this business credit score estimator?</summary>
          <p>This tool provides an estimated range based on key business factors. Your actual PAYDEX score depends on specific payment data reported to Dun & Bradstreet. Use this as a directional guide, then pull your official report for exact numbers.</p>
        </details>

        <details>
          <summary>What is a good PAYDEX score?</summary>
          <p>A PAYDEX score of 80 or above is considered good. It means you consistently pay bills on time or early. Scores between 50 and 79 are average, and anything below 50 signals payment risk to lenders and suppliers.</p>
        </details>

        <details>
          <summary>Does my personal credit score affect my business credit?</summary>
          <p>Your personal credit score and business credit score are tracked separately. However, many lenders look at both when making lending decisions, especially for small businesses. A strong personal score can help when your business credit history is thin.</p>
        </details>

        <details>
          <summary>How long does it take to build business credit?</summary>
          <p>Most businesses can establish a solid credit profile in 6 to 12 months of consistent, on-time payments to vendors who report to business credit bureaus. Getting a D-U-N-S number is the first step, and it can be done in a few days.</p>
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
                  "name": "How accurate is this business credit score estimator?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "This tool provides an estimated range based on key business factors. Your actual PAYDEX score depends on specific payment data reported to Dun & Bradstreet. Use this as a directional guide, then pull your official report for exact numbers."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is a good PAYDEX score?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A PAYDEX score of 80 or above is considered good. It means you consistently pay bills on time or early. Scores between 50 and 79 are average, and anything below 50 signals payment risk to lenders and suppliers."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does my personal credit score affect my business credit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Your personal credit score and business credit score are tracked separately. However, many lenders look at both when making lending decisions, especially for small businesses."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to build business credit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most businesses can establish a solid credit profile in 6 to 12 months of consistent, on-time payments to vendors who report to business credit bureaus."
                  }
                }
              ]
            })
          }}
        />

        <h2 id="sources">Sources</h2>
        <ul>
          <li><a href="https://www.dnb.com/" target="_blank" rel="noopener noreferrer">Dun & Bradstreet - Business Credit Reports</a></li>
          <li><a href="https://www.sba.gov/business-guide/launch-your-business/establish-business-credit" target="_blank" rel="noopener noreferrer">U.S. Small Business Administration - Establish Business Credit</a></li>
          <li><a href="https://www.experian.com/business/small-business-credit" target="_blank" rel="noopener noreferrer">Experian - Small Business Credit</a></li>
        </ul>

      </article>
    </div>
  );
}
