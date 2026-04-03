"use client";

import { useState } from "react";

export default function McaAffordabilityCalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(100000);
  const [rent, setRent] = useState(5000);
  const [payroll, setPayroll] = useState(35000);
  const [supplies, setSupplies] = useState(10000);
  const [otherExpenses, setOtherExpenses] = useState(8000);

  const [fundingAmount, setFundingAmount] = useState(50000);
  const [factorRate, setFactorRate] = useState(1.35);
  const [holdbackPercent, setHoldbackPercent] = useState(15);

  const dailyRevenue = monthlyRevenue / 22;
  const dailyPayment = dailyRevenue * (holdbackPercent / 100);
  const monthlyMcaCost = dailyPayment * 22;
  const totalExpenses = rent + payroll + supplies + otherExpenses;
  const remainingCash = monthlyRevenue - totalExpenses - monthlyMcaCost;
  const totalRepayment = fundingAmount * factorRate;
  const totalCost = totalRepayment - fundingAmount;
  const estimatedDays = dailyPayment > 0 ? Math.ceil(totalRepayment / dailyPayment) : 0;

  const cashFlowRatio = monthlyRevenue > 0 ? ((monthlyRevenue - totalExpenses - monthlyMcaCost) / monthlyRevenue) * 100 : 0;

  let affordabilityScore: "green" | "yellow" | "red";
  let affordabilityLabel: string;
  if (cashFlowRatio >= 20) {
    affordabilityScore = "green";
    affordabilityLabel = "Affordable";
  } else if (cashFlowRatio >= 10) {
    affordabilityScore = "yellow";
    affordabilityLabel = "Tight but Manageable";
  } else {
    affordabilityScore = "red";
    affordabilityLabel = "Not Affordable";
  }

  const scoreColors = {
    green: "bg-green-100 border-green-300 text-green-800",
    yellow: "bg-yellow-100 border-yellow-300 text-yellow-800",
    red: "bg-red-100 border-red-300 text-red-800",
  };

  const scoreDotColors = {
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    red: "bg-red-500",
  };

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Monthly Revenue</span>
            <input type="number" value={monthlyRevenue} onChange={(e) => setMonthlyRevenue(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1000} step={1000} />
          </label>

          <p className="text-sm font-semibold text-gray-800 border-b pb-2">Monthly Expenses</p>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Rent</span>
            <input type="number" value={rent} onChange={(e) => setRent(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={500} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Payroll</span>
            <input type="number" value={payroll} onChange={(e) => setPayroll(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={500} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Supplies / Inventory</span>
            <input type="number" value={supplies} onChange={(e) => setSupplies(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={500} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Other Expenses</span>
            <input type="number" value={otherExpenses} onChange={(e) => setOtherExpenses(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={500} />
          </label>

          <p className="text-sm font-semibold text-gray-800 border-b pb-2">MCA Offer</p>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Funding Amount</span>
            <input type="number" value={fundingAmount} onChange={(e) => setFundingAmount(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1000} step={1000} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Factor Rate</span>
            <input type="number" value={factorRate} onChange={(e) => setFactorRate(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1.0} max={2.0} step={0.01} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Holdback Percentage (%)</span>
            <input type="number" value={holdbackPercent} onChange={(e) => setHoldbackPercent(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1} max={100} />
          </label>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Results</h3>
          <div><p className="text-sm text-gray-500">Estimated Daily Payment</p><p className="text-2xl font-bold text-gray-900">{fmt(dailyPayment)}</p></div>
          <div><p className="text-sm text-gray-500">Monthly MCA Cost</p><p className="text-2xl font-bold text-red-600">{fmt(monthlyMcaCost)}</p></div>
          <div><p className="text-sm text-gray-500">Total Monthly Expenses (incl. MCA)</p><p className="text-xl font-semibold text-gray-900">{fmt(totalExpenses + monthlyMcaCost)}</p></div>
          <div><p className="text-sm text-gray-500">Remaining Cash After Everything</p><p className={`text-2xl font-bold ${remainingCash >= 0 ? "text-green-600" : "text-red-600"}`}>{fmt(remainingCash)}</p></div>
          <div><p className="text-sm text-gray-500">Total MCA Cost</p><p className="text-xl font-semibold text-gray-900">{fmt(totalCost)}</p></div>
          <div><p className="text-sm text-gray-500">Estimated Repayment Period</p><p className="text-xl font-semibold text-gray-900">{estimatedDays} days</p></div>

          <div className={`rounded-lg p-4 border ${scoreColors[affordabilityScore]}`}>
            <div className="flex items-center gap-2 mb-1">
              <span className={`inline-block w-3 h-3 rounded-full ${scoreDotColors[affordabilityScore]}`}></span>
              <strong>Affordability: {affordabilityLabel}</strong>
            </div>
            <p className="text-sm mt-1">
              {affordabilityScore === "green" && "Your business has enough cash flow cushion to handle this MCA comfortably. You will still have at least 20% of revenue left over after all expenses and MCA payments."}
              {affordabilityScore === "yellow" && "This MCA is tight. You will have between 10% and 20% of revenue remaining. Any dip in sales could cause cash flow problems. Consider a smaller advance or lower holdback."}
              {affordabilityScore === "red" && "This MCA will likely cause cash flow problems. After expenses and MCA payments, you have less than 10% of revenue remaining. A slow week could mean missing other obligations. Do not take this deal."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
