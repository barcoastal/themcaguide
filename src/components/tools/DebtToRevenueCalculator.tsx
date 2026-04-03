"use client";

import { useState } from "react";

export default function DebtToRevenueCalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(50000);
  const [totalDebt, setTotalDebt] = useState(100000);
  const [monthlyDebtPayments, setMonthlyDebtPayments] = useState(8000);

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  const annualRevenue = monthlyRevenue * 12;
  const debtToRevenue = annualRevenue > 0 ? totalDebt / annualRevenue : 0;
  const debtToRevenuePercent = debtToRevenue * 100;
  const dscr = monthlyDebtPayments > 0 ? monthlyRevenue / monthlyDebtPayments : 0;
  const debtPaymentPercent = monthlyRevenue > 0 ? (monthlyDebtPayments / monthlyRevenue) * 100 : 0;

  let healthRating: "healthy" | "caution" | "danger";
  let healthColor: string;
  let healthLabel: string;
  let recommendation: string;

  if (debtToRevenue <= 0.3 && dscr >= 1.5) {
    healthRating = "healthy";
    healthColor = "text-green-600";
    healthLabel = "Healthy";
    recommendation = "Your debt levels are well within a manageable range. You are in a strong position to qualify for competitive financing if needed. Focus on maintaining this ratio as your business grows.";
  } else if (debtToRevenue <= 0.5 && dscr >= 1.1) {
    healthRating = "caution";
    healthColor = "text-yellow-600";
    healthLabel = "Caution";
    recommendation = "Your debt load is moderate. You can likely still qualify for financing, but lenders may offer higher rates. Consider paying down existing debt before taking on more. Avoid stacking multiple MCAs.";
  } else {
    healthRating = "danger";
    healthColor = "text-red-600";
    healthLabel = "Danger";
    recommendation = "Your debt levels are high relative to your revenue. Taking on additional debt could put your business at serious risk. Focus on increasing revenue or paying down existing obligations before borrowing more.";
  }

  const healthBg = healthRating === "healthy" ? "bg-green-50 border-green-200" : healthRating === "caution" ? "bg-yellow-50 border-yellow-200" : "bg-red-50 border-red-200";

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Monthly Revenue</span>
            <input type="number" value={monthlyRevenue} onChange={(e) => setMonthlyRevenue(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Total Business Debt (loans, MCAs, credit cards)</span>
            <input type="number" value={totalDebt} onChange={(e) => setTotalDebt(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Monthly Debt Payments (all combined)</span>
            <input type="number" value={monthlyDebtPayments} onChange={(e) => setMonthlyDebtPayments(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={100} />
          </label>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Results</h3>
          <div><p className="text-sm text-gray-500">Debt-to-Revenue Ratio</p><p className="text-2xl font-bold text-gray-900">{debtToRevenuePercent.toFixed(1)}%</p></div>
          <div><p className="text-sm text-gray-500">Debt Service Coverage Ratio (DSCR)</p><p className="text-2xl font-bold text-gray-900">{dscr.toFixed(2)}x</p></div>
          <div><p className="text-sm text-gray-500">Revenue Going to Debt Payments</p><p className="text-xl font-semibold text-gray-900">{debtPaymentPercent.toFixed(1)}%</p></div>
          <div><p className="text-sm text-gray-500">Health Rating</p><p className={`text-2xl font-bold ${healthColor}`}>{healthLabel}</p></div>
        </div>
      </div>

      <div className={`mt-6 border rounded-lg p-5 ${healthBg}`}>
        <h4 className="font-semibold text-gray-900 mb-2">Recommendation</h4>
        <p className="text-sm text-gray-700">{recommendation}</p>
      </div>

      <div className="mt-6 bg-gray-50 rounded-lg p-5">
        <h4 className="font-semibold text-gray-900 mb-3">What Lenders Look For</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
            <span><strong>Debt-to-Revenue below 30%:</strong> Considered low risk. Best rates available.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block"></span>
            <span><strong>Debt-to-Revenue 30% - 50%:</strong> Moderate risk. Expect higher rates or additional requirements.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
            <span><strong>Debt-to-Revenue above 50%:</strong> High risk. Many lenders will decline or offer expensive terms.</span>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
            <span><strong>DSCR above 1.25x:</strong> Most lenders want to see at least $1.25 in revenue for every $1 in debt payments.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
