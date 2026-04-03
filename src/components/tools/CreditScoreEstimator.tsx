"use client";

import { useState } from "react";

const questions = [
  {
    key: "yearsInBusiness",
    label: "How many years has your business been operating?",
    options: [
      { label: "Less than 1 year", value: 10 },
      { label: "1 to 3 years", value: 30 },
      { label: "3 to 5 years", value: 50 },
      { label: "5+ years", value: 70 },
    ],
  },
  {
    key: "annualRevenue",
    label: "What is your annual revenue?",
    options: [
      { label: "Under $100,000", value: 10 },
      { label: "$100,000 to $500,000", value: 30 },
      { label: "$500,000 to $1 million", value: 50 },
      { label: "Over $1 million", value: 70 },
    ],
  },
  {
    key: "latePayments",
    label: "Any late payments to vendors or lenders in the past 12 months?",
    options: [
      { label: "None", value: 70 },
      { label: "1 to 2 late payments", value: 40 },
      { label: "3 or more late payments", value: 10 },
    ],
  },
  {
    key: "debtLevel",
    label: "What is your current business debt level?",
    options: [
      { label: "No debt", value: 70 },
      { label: "Low (less than 20% of revenue)", value: 55 },
      { label: "Moderate (20% to 50% of revenue)", value: 35 },
      { label: "High (over 50% of revenue)", value: 15 },
    ],
  },
  {
    key: "creditCards",
    label: "Do you have business credit cards in good standing?",
    options: [
      { label: "Yes", value: 50 },
      { label: "No", value: 20 },
    ],
  },
  {
    key: "liens",
    label: "Any liens or judgments against your business?",
    options: [
      { label: "No", value: 60 },
      { label: "Yes", value: 5 },
    ],
  },
  {
    key: "personalCredit",
    label: "What is your personal credit score range?",
    options: [
      { label: "750+", value: 70 },
      { label: "700 to 749", value: 55 },
      { label: "650 to 699", value: 40 },
      { label: "600 to 649", value: 25 },
      { label: "Below 600", value: 10 },
    ],
  },
];

type Answers = Record<string, number | null>;

function getResults(answers: Answers) {
  const values = Object.values(answers).filter((v) => v !== null) as number[];
  if (values.length < questions.length) return null;

  const total = values.reduce((sum, v) => sum + v, 0);
  const maxPossible = questions.reduce((sum, q) => sum + Math.max(...q.options.map((o) => o.value)), 0);
  const ratio = total / maxPossible;

  const paydexScore = Math.round(ratio * 80 + 10);
  const paydexLow = Math.max(1, paydexScore - 8);
  const paydexHigh = Math.min(100, paydexScore + 8);

  let rating: string;
  let color: string;
  let financingOutlook: string;
  let tips: string[];

  if (paydexScore >= 80) {
    rating = "Excellent";
    color = "text-green-600";
    financingOutlook = "You likely qualify for the best financing terms available, including SBA loans, traditional bank lines of credit, and low-rate business credit cards.";
    tips = [
      "Maintain your on-time payment history.",
      "Keep your credit utilization below 30%.",
      "Monitor your Dun & Bradstreet profile regularly.",
    ];
  } else if (paydexScore >= 60) {
    rating = "Good";
    color = "text-blue-600";
    financingOutlook = "You should qualify for most business financing options. Some lenders may offer slightly higher rates, but you have solid options.";
    tips = [
      "Pay all vendors and lenders early or on time to push your score higher.",
      "Open a business credit card if you do not have one and use it responsibly.",
      "Reduce outstanding debt to lower your debt-to-revenue ratio.",
      "Check your business credit reports for errors.",
    ];
  } else if (paydexScore >= 40) {
    rating = "Fair";
    color = "text-orange-600";
    financingOutlook = "Traditional bank loans may be difficult. You may need to look at alternative lenders, revenue-based financing, or secured credit options.";
    tips = [
      "Focus on paying all bills on time for the next 6 to 12 months.",
      "Work on reducing your total debt before applying for new credit.",
      "Establish trade credit with vendors who report to business credit bureaus.",
      "Avoid taking on new debt until your score improves.",
    ];
  } else {
    rating = "Needs Improvement";
    color = "text-red-600";
    financingOutlook = "Most traditional lenders will decline your application. Your best options right now are secured credit cards, microloans, or community development financial institutions (CDFIs).";
    tips = [
      "Address any outstanding liens or judgments immediately.",
      "Set up automatic payments to avoid future late payments.",
      "Build trade credit with suppliers who report to Dun & Bradstreet.",
      "Consider working with a business credit advisor.",
      "Separate personal and business finances completely.",
    ];
  }

  return { paydexLow, paydexHigh, paydexScore, rating, color, financingOutlook, tips };
}

export default function CreditScoreEstimator() {
  const [answers, setAnswers] = useState<Answers>(
    Object.fromEntries(questions.map((q) => [q.key, null]))
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (key: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setSubmitted(false);
  };

  const allAnswered = Object.values(answers).every((v) => v !== null);
  const results = submitted ? getResults(answers) : null;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={q.key}>
            <p className="text-sm font-medium text-gray-700 mb-2">
              {i + 1}. {q.label}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {q.options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleSelect(q.key, opt.value)}
                  className={`rounded-lg border px-3 py-2 text-sm transition-colors ${
                    answers[q.key] === opt.value
                      ? "border-blue-500 bg-blue-50 text-blue-700 font-medium"
                      : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ))}

        <button
          onClick={() => setSubmitted(true)}
          disabled={!allAnswered}
          className={`w-full rounded-lg px-6 py-3 text-lg font-semibold transition-colors ${
            allAnswered
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Estimate My Score
        </button>

        {results && (
          <div className="bg-blue-50 rounded-lg p-6 space-y-4 mt-4">
            <h3 className="text-lg font-semibold text-gray-900">Your Estimated Business Credit Score</h3>
            <div>
              <p className="text-sm text-gray-500">Estimated PAYDEX Range</p>
              <p className="text-2xl font-bold text-gray-900">
                {results.paydexLow} to {results.paydexHigh}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Rating</p>
              <p className={`text-xl font-semibold ${results.color}`}>{results.rating}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Financing Outlook</p>
              <p className="text-base text-gray-700">{results.financingOutlook}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Tips to Improve</p>
              <ul className="space-y-1">
                {results.tips.map((tip, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">&#8226;</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
