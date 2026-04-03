"use client";

import { useState } from "react";

interface Question {
  id: string;
  text: string;
  options: { label: string; value: string; score: number }[];
}

const QUESTIONS: Question[] = [
  {
    id: "reason",
    text: "Why do you need funding?",
    options: [
      { label: "Bridge a temporary cash flow gap", value: "bridge", score: 2 },
      { label: "Growth opportunity (new contract, expansion)", value: "growth", score: 3 },
      { label: "Emergency (broken equipment, urgent expense)", value: "emergency", score: 1 },
      { label: "Pay off other debt", value: "debt", score: -2 },
    ],
  },
  {
    id: "traditional",
    text: "Have you tried traditional financing (bank loan, SBA loan, line of credit)?",
    options: [
      { label: "Yes, I was rejected", value: "rejected", score: 1 },
      { label: "Yes, I was approved but it is too slow", value: "slow", score: 2 },
      { label: "No, I have not tried yet", value: "no", score: -1 },
    ],
  },
  {
    id: "revenue",
    text: "What is your average monthly revenue?",
    options: [
      { label: "Under $10,000", value: "under10k", score: -1 },
      { label: "$10,000 to $25,000", value: "10k-25k", score: 1 },
      { label: "$25,000 to $75,000", value: "25k-75k", score: 2 },
      { label: "$75,000 to $200,000", value: "75k-200k", score: 3 },
      { label: "Over $200,000", value: "over200k", score: 3 },
    ],
  },
  {
    id: "time",
    text: "How long have you been in business?",
    options: [
      { label: "Less than 6 months", value: "under6mo", score: -2 },
      { label: "6 months to 1 year", value: "6mo-1yr", score: 0 },
      { label: "1 to 3 years", value: "1-3yr", score: 2 },
      { label: "More than 3 years", value: "over3yr", score: 3 },
    ],
  },
  {
    id: "existingMca",
    text: "Do you have any existing MCAs?",
    options: [
      { label: "None", value: "none", score: 3 },
      { label: "One active MCA", value: "one", score: -1 },
      { label: "Two or more active MCAs", value: "multiple", score: -3 },
    ],
  },
  {
    id: "urgency",
    text: "How quickly do you need the funds?",
    options: [
      { label: "Today or tomorrow", value: "today", score: 1 },
      { label: "Within this week", value: "week", score: 2 },
      { label: "Within this month", value: "month", score: 0 },
      { label: "No rush, just exploring options", value: "norush", score: -1 },
    ],
  },
  {
    id: "credit",
    text: "What is your personal credit score range?",
    options: [
      { label: "Below 500", value: "below500", score: 1 },
      { label: "500 to 600", value: "500-600", score: 1 },
      { label: "600 to 700", value: "600-700", score: 0 },
      { label: "Above 700", value: "above700", score: -1 },
    ],
  },
  {
    id: "cashflow",
    text: "Can your daily cash flow handle a 10-20% holdback on revenue?",
    options: [
      { label: "Yes, my margins can handle it", value: "yes", score: 3 },
      { label: "It would be tight but possible", value: "tight", score: 1 },
      { label: "No, that would break my cash flow", value: "no", score: -3 },
    ],
  },
];

type Recommendation = "avoid" | "alternatives" | "consider" | "reasonable";

function getRecommendation(score: number, answers: Record<string, string>): { level: Recommendation; title: string; color: string; explanation: string; nextSteps: string[] } {
  // Hard disqualifiers
  if (answers.existingMca === "multiple") {
    return {
      level: "avoid",
      title: "Avoid Taking an MCA",
      color: "bg-red-100 text-red-800 border-red-300",
      explanation: "Stacking multiple MCAs is one of the most dangerous financial moves a small business can make. Each additional MCA compounds the daily holdback, which can drain your working capital entirely. Focus on paying down existing advances before considering more funding.",
      nextSteps: [
        "Contact your current MCA providers about restructuring options.",
        "Talk to a small business financial advisor about debt consolidation.",
        "Look into nonprofit small business assistance programs in your area.",
      ],
    };
  }
  if (answers.reason === "debt") {
    return {
      level: "avoid",
      title: "Avoid Taking an MCA",
      color: "bg-red-100 text-red-800 border-red-300",
      explanation: "Using an MCA to pay off other debt almost always makes things worse. MCA costs are significantly higher than most other forms of debt. You would be replacing a cheaper problem with a more expensive one. This is a common path to a debt spiral.",
      nextSteps: [
        "Speak with a debt counselor about restructuring existing obligations.",
        "Negotiate extended payment terms with current creditors.",
        "Explore SBA disaster or economic injury loans if you qualify.",
      ],
    };
  }
  if (answers.cashflow === "no") {
    return {
      level: "avoid",
      title: "Avoid Taking an MCA",
      color: "bg-red-100 text-red-800 border-red-300",
      explanation: "If a daily holdback of 10-20% would break your cash flow, an MCA will create more problems than it solves. Missing daily payments can trigger default provisions in your MCA agreement, which often include aggressive collection actions.",
      nextSteps: [
        "Focus on improving cash flow before taking on any new debt.",
        "Look into invoice factoring as a less cash-flow-intensive option.",
        "Consider a business line of credit with flexible repayment.",
      ],
    };
  }

  if (score >= 12) {
    return {
      level: "reasonable",
      title: "An MCA Is a Reasonable Option",
      color: "bg-green-100 text-green-800 border-green-300",
      explanation: "Based on your answers, an MCA could be a viable funding solution for your situation. You have the revenue and cash flow to handle the daily holdback, and your reason for funding makes sense. Just make sure to compare offers from at least three providers and use our MCA cost calculator to understand the true cost.",
      nextSteps: [
        "Get quotes from at least 3 MCA providers.",
        "Use our MCA cost calculator to compare the true cost of each offer.",
        "Read the full contract carefully, especially default terms and UCC filing details.",
        "Never accept the first offer without negotiating the factor rate.",
      ],
    };
  }
  if (score >= 6) {
    return {
      level: "consider",
      title: "An MCA Might Work, But Proceed with Caution",
      color: "bg-yellow-100 text-yellow-800 border-yellow-300",
      explanation: "Your situation could support an MCA, but there are some risk factors to watch. Make sure the daily holdback will not put too much pressure on your operating cash. Compare the cost of the MCA to other options, and only proceed if the funding will generate a return that exceeds the cost.",
      nextSteps: [
        "Compare the MCA cost to a business line of credit or short-term loan.",
        "Calculate the ROI of what the funding will be used for.",
        "Start with a smaller advance amount to test your ability to handle the holdback.",
        "Read our guide on MCA risks before signing anything.",
      ],
    };
  }
  if (score >= 0) {
    return {
      level: "alternatives",
      title: "Consider Alternatives First",
      color: "bg-orange-100 text-orange-800 border-orange-300",
      explanation: "An MCA is probably not the best fit for your current situation. There are less expensive options worth exploring first. MCAs make sense when speed is critical and you have strong cash flow, but your profile suggests other paths may serve you better.",
      nextSteps: [
        "Apply for an SBA microloan (up to $50,000 at much lower rates).",
        "Check if you qualify for a business line of credit from your bank.",
        "Look into community development financial institutions (CDFIs).",
        "If you need funds urgently, try invoice factoring or a merchant credit card.",
      ],
    };
  }
  return {
    level: "avoid",
    title: "Avoid Taking an MCA Right Now",
    color: "bg-red-100 text-red-800 border-red-300",
    explanation: "Based on your answers, taking an MCA right now carries significant risk. The combination of your current revenue, business history, and cash flow situation means the daily holdback could cause serious harm to your operations. Explore other options first.",
    nextSteps: [
      "Focus on building revenue and business history before seeking funding.",
      "Explore grants, microloans, or community lending programs.",
      "Talk to a SCORE mentor (free) about financing options for your stage.",
      "If you have not tried traditional financing yet, start there.",
    ],
  };
}

export default function ShouldITakeMcaQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = QUESTIONS[step];

  const handleSelect = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const totalScore = Object.entries(answers).reduce((sum, [id, value]) => {
    const q = QUESTIONS.find((q) => q.id === id);
    const opt = q?.options.find((o) => o.value === value);
    return sum + (opt?.score ?? 0);
  }, 0);

  const recommendation = getRecommendation(totalScore, answers);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      {!showResults ? (
        <div>
          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Question {step + 1} of {QUESTIONS.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }} />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">{currentQuestion.text}</h3>

          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className={`block w-full text-left px-4 py-3 rounded-lg border transition-colors ${
                  answers[currentQuestion.id] === opt.value
                    ? "border-blue-500 bg-blue-50 text-blue-900"
                    : "border-gray-300 hover:border-blue-300 hover:bg-gray-50 text-gray-700"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="flex justify-between">
            <button onClick={() => setStep(step - 1)} disabled={step === 0} className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 disabled:opacity-40">
              Back
            </button>
            {step < QUESTIONS.length - 1 ? (
              <button onClick={() => setStep(step + 1)} disabled={!answers[currentQuestion.id]} className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40">
                Next
              </button>
            ) : (
              <button onClick={() => setShowResults(true)} disabled={!answers[currentQuestion.id]} className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40">
                See Results
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className={`rounded-lg border p-6 ${recommendation.color}`}>
            <h3 className="text-2xl font-bold mb-2">{recommendation.title}</h3>
            <p className="text-base">{recommendation.explanation}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Suggested Next Steps</h4>
            <ol className="space-y-2 text-gray-700">
              {recommendation.nextSteps.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Helpful Resources</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/tools/mca-calculator" className="text-blue-600 hover:underline">MCA Cost Calculator</a> - See the true cost of any MCA offer</li>
              <li><a href="/guides/what-is-mca" className="text-blue-600 hover:underline">What Is a Merchant Cash Advance?</a> - Complete guide for beginners</li>
              <li><a href="/guides/mca-alternatives" className="text-blue-600 hover:underline">MCA Alternatives</a> - Other funding options to consider</li>
              <li><a href="/tools/cashflow-calculator" className="text-blue-600 hover:underline">Cash Flow Calculator</a> - Check if your cash flow can handle an MCA</li>
            </ul>
          </div>

          <button onClick={() => { setShowResults(false); setStep(0); setAnswers({}); }} className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
}
