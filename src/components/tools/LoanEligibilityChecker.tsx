"use client";

import { useState } from "react";

type Answer = string | null;

interface LoanResult {
  name: string;
  eligible: "green" | "yellow" | "red";
  rateRange: string;
  description: string;
}

export default function LoanEligibilityChecker() {
  const [timeInBusiness, setTimeInBusiness] = useState<Answer>(null);
  const [annualRevenue, setAnnualRevenue] = useState<Answer>(null);
  const [creditScore, setCreditScore] = useState<Answer>(null);
  const [hasCollateral, setHasCollateral] = useState<Answer>(null);
  const [existingDebt, setExistingDebt] = useState<Answer>(null);
  const [showResults, setShowResults] = useState(false);

  const allAnswered = timeInBusiness && annualRevenue && creditScore && hasCollateral && existingDebt;

  const getResults = (): LoanResult[] => {
    const tib = timeInBusiness;
    const rev = annualRevenue;
    const cs = creditScore;
    const col = hasCollateral;
    const debt = existingDebt;

    const results: LoanResult[] = [];

    // SBA Loan
    let sbaScore = 0;
    if (tib === "2+") sbaScore += 3; else if (tib === "1-2") sbaScore += 2; else if (tib === "6-12") sbaScore += 1;
    if (cs === "700+") sbaScore += 3; else if (cs === "600-700") sbaScore += 2; else if (cs === "500-600") sbaScore += 1;
    if (rev === "500k+") sbaScore += 2; else if (rev === "250k-500k") sbaScore += 2; else if (rev === "100k-250k") sbaScore += 1;
    if (debt === "none") sbaScore += 1;
    results.push({
      name: "SBA Loan",
      eligible: sbaScore >= 7 ? "green" : sbaScore >= 4 ? "yellow" : "red",
      rateRange: "6% - 13% APR",
      description: "Government-backed loans with the lowest rates. Requires strong credit, time in business, and clean financials.",
    });

    // Term Loan
    let termScore = 0;
    if (tib === "2+" || tib === "1-2") termScore += 2; else if (tib === "6-12") termScore += 1;
    if (cs === "700+" || cs === "600-700") termScore += 2; else if (cs === "500-600") termScore += 1;
    if (rev === "500k+" || rev === "250k-500k") termScore += 2; else if (rev === "100k-250k") termScore += 1;
    if (col === "yes") termScore += 1;
    if (debt === "none" || debt === "some") termScore += 1;
    results.push({
      name: "Business Term Loan",
      eligible: termScore >= 6 ? "green" : termScore >= 4 ? "yellow" : "red",
      rateRange: "7% - 30% APR",
      description: "Traditional fixed-term loans from banks and online lenders. Good option for established businesses with decent credit.",
    });

    // Line of Credit
    let locScore = 0;
    if (tib === "2+" || tib === "1-2") locScore += 2; else if (tib === "6-12") locScore += 1;
    if (cs === "700+" || cs === "600-700") locScore += 2; else if (cs === "500-600") locScore += 1;
    if (rev === "500k+" || rev === "250k-500k") locScore += 2; else if (rev === "100k-250k") locScore += 1;
    if (debt === "none" || debt === "some") locScore += 1;
    results.push({
      name: "Business Line of Credit",
      eligible: locScore >= 5 ? "green" : locScore >= 3 ? "yellow" : "red",
      rateRange: "10% - 30% APR",
      description: "Flexible revolving credit you draw from as needed. Only pay interest on what you use.",
    });

    // Invoice Factoring
    let ifScore = 0;
    if (rev === "500k+" || rev === "250k-500k") ifScore += 3; else if (rev === "100k-250k") ifScore += 2; else ifScore += 1;
    if (tib === "2+" || tib === "1-2") ifScore += 1; else if (tib === "6-12") ifScore += 1;
    // Credit score matters less for factoring
    ifScore += 1;
    results.push({
      name: "Invoice Factoring",
      eligible: ifScore >= 4 ? "green" : ifScore >= 3 ? "yellow" : "red",
      rateRange: "1% - 5% per invoice",
      description: "Sell your unpaid invoices for immediate cash. Your customers' creditworthiness matters more than yours.",
    });

    // MCA
    let mcaScore = 0;
    if (tib !== "<6") mcaScore += 2; else mcaScore += 1;
    if (rev !== "<100k") mcaScore += 2; else mcaScore += 1;
    mcaScore += 1; // MCA accepts most credit scores
    results.push({
      name: "Merchant Cash Advance",
      eligible: mcaScore >= 4 ? "green" : mcaScore >= 3 ? "yellow" : "red",
      rateRange: "40% - 350% effective APR",
      description: "Fastest approval with the least requirements. Accepts low credit scores. Highest cost option, so use only if no alternatives exist.",
    });

    return results;
  };

  const eligibilityColor = (e: string) => {
    if (e === "green") return "border-green-400 bg-green-50";
    if (e === "yellow") return "border-yellow-400 bg-yellow-50";
    return "border-red-400 bg-red-50";
  };

  const eligibilityBadge = (e: string) => {
    if (e === "green") return <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">Likely Eligible</span>;
    if (e === "yellow") return <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">Possible</span>;
    return <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">Unlikely</span>;
  };

  const questionClass = "text-sm font-medium text-gray-700 mb-2 block";
  const optionClass = (selected: boolean) =>
    `block w-full text-left px-4 py-3 rounded-lg border text-sm ${selected ? "border-blue-500 bg-blue-50 text-blue-700 font-medium" : "border-gray-200 text-gray-700 hover:border-gray-300"}`;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      {!showResults ? (
        <div className="space-y-6 max-w-xl">
          <div>
            <span className={questionClass}>1. How long has your business been operating?</span>
            <div className="grid grid-cols-2 gap-2">
              {[{ v: "<6", l: "Less than 6 months" }, { v: "6-12", l: "6 - 12 months" }, { v: "1-2", l: "1 - 2 years" }, { v: "2+", l: "2+ years" }].map((o) => (
                <button key={o.v} onClick={() => setTimeInBusiness(o.v)} className={optionClass(timeInBusiness === o.v)}>{o.l}</button>
              ))}
            </div>
          </div>
          <div>
            <span className={questionClass}>2. What is your annual revenue?</span>
            <div className="grid grid-cols-2 gap-2">
              {[{ v: "<100k", l: "Under $100K" }, { v: "100k-250k", l: "$100K - $250K" }, { v: "250k-500k", l: "$250K - $500K" }, { v: "500k+", l: "$500K+" }].map((o) => (
                <button key={o.v} onClick={() => setAnnualRevenue(o.v)} className={optionClass(annualRevenue === o.v)}>{o.l}</button>
              ))}
            </div>
          </div>
          <div>
            <span className={questionClass}>3. What is your credit score range?</span>
            <div className="grid grid-cols-2 gap-2">
              {[{ v: "<500", l: "Below 500" }, { v: "500-600", l: "500 - 600" }, { v: "600-700", l: "600 - 700" }, { v: "700+", l: "700+" }].map((o) => (
                <button key={o.v} onClick={() => setCreditScore(o.v)} className={optionClass(creditScore === o.v)}>{o.l}</button>
              ))}
            </div>
          </div>
          <div>
            <span className={questionClass}>4. Do you have collateral (real estate, equipment, inventory)?</span>
            <div className="grid grid-cols-2 gap-2">
              {[{ v: "yes", l: "Yes" }, { v: "no", l: "No" }].map((o) => (
                <button key={o.v} onClick={() => setHasCollateral(o.v)} className={optionClass(hasCollateral === o.v)}>{o.l}</button>
              ))}
            </div>
          </div>
          <div>
            <span className={questionClass}>5. Do you have existing business debt?</span>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
              {[{ v: "none", l: "None" }, { v: "some", l: "Some" }, { v: "significant", l: "Significant" }].map((o) => (
                <button key={o.v} onClick={() => setExistingDebt(o.v)} className={optionClass(existingDebt === o.v)}>{o.l}</button>
              ))}
            </div>
          </div>
          <button
            onClick={() => setShowResults(true)}
            disabled={!allAnswered}
            className={`w-full py-3 px-6 rounded-lg text-lg font-semibold ${allAnswered ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
          >
            See Results
          </button>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Your Eligibility Results</h3>
            <button onClick={() => { setShowResults(false); setTimeInBusiness(null); setAnnualRevenue(null); setCreditScore(null); setHasCollateral(null); setExistingDebt(null); }} className="text-sm text-blue-600 hover:text-blue-800 font-medium">Start Over</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {getResults().map((r) => (
              <div key={r.name} className={`border-2 rounded-lg p-5 ${eligibilityColor(r.eligible)}`}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{r.name}</h4>
                  {eligibilityBadge(r.eligible)}
                </div>
                <p className="text-sm text-gray-600 mb-2">{r.description}</p>
                <p className="text-sm font-medium text-gray-700">Estimated rate: {r.rateRange}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
