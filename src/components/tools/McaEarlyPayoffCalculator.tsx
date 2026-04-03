"use client";

import { useState } from "react";

export default function McaEarlyPayoffCalculator() {
  const [originalFunding, setOriginalFunding] = useState(50000);
  const [factorRate, setFactorRate] = useState(1.35);
  const [totalRepayment, setTotalRepayment] = useState(67500);
  const [amountPaid, setAmountPaid] = useState(20000);
  const [dailyPayment, setDailyPayment] = useState(750);
  const [extraDaily, setExtraDaily] = useState(250);
  const [lumpSum, setLumpSum] = useState(0);

  const remainingBalance = totalRepayment - amountPaid;
  const balanceAfterLump = Math.max(0, remainingBalance - lumpSum);

  // Normal timeline
  const normalDaysLeft = dailyPayment > 0 ? Math.ceil(remainingBalance / dailyPayment) : 0;

  // Accelerated timeline
  const acceleratedDailyPayment = dailyPayment + extraDaily;
  const acceleratedDaysLeft = acceleratedDailyPayment > 0 ? Math.ceil(balanceAfterLump / acceleratedDailyPayment) : 0;

  const daysSaved = normalDaysLeft - acceleratedDaysLeft;

  // Estimate savings if early payoff discount applies (some MCA providers offer this)
  const totalCost = totalRepayment - originalFunding;
  const costPerDay = normalDaysLeft > 0 ? totalCost / (totalRepayment / dailyPayment) : 0;
  const potentialSavings = costPerDay * daysSaved;

  const today = new Date();
  const normalPayoffDate = new Date(today);
  normalPayoffDate.setDate(normalPayoffDate.getDate() + normalDaysLeft);
  const acceleratedPayoffDate = new Date(today);
  acceleratedPayoffDate.setDate(acceleratedPayoffDate.getDate() + acceleratedDaysLeft);

  const formatDate = (d: Date) => d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  // Progress bar calculations
  const normalProgress = totalRepayment > 0 ? (amountPaid / totalRepayment) * 100 : 0;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Original Funding Amount</span>
            <input type="number" value={originalFunding} onChange={(e) => setOriginalFunding(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1000} step={1000} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Factor Rate</span>
            <input type="number" value={factorRate} onChange={(e) => setFactorRate(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1.0} max={2.0} step={0.01} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Total Repayment Amount</span>
            <input type="number" value={totalRepayment} onChange={(e) => setTotalRepayment(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1000} step={1000} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Amount Already Paid</span>
            <input type="number" value={amountPaid} onChange={(e) => setAmountPaid(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Current Daily Payment</span>
            <input type="number" value={dailyPayment} onChange={(e) => setDailyPayment(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1} step={50} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Extra Daily Payment</span>
            <input type="number" value={extraDaily} onChange={(e) => setExtraDaily(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={50} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">One-Time Lump Sum Payment</span>
            <input type="number" value={lumpSum} onChange={(e) => setLumpSum(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
          </label>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Results</h3>

          <div><p className="text-sm text-gray-500">Remaining Balance</p><p className="text-2xl font-bold text-gray-900">{fmt(remainingBalance)}</p></div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-2">Repayment Progress</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full" style={{ width: `${Math.min(normalProgress, 100)}%` }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">{normalProgress.toFixed(1)}% paid</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-xs font-semibold text-gray-500 mb-2">Normal Payoff</p>
              <p className="text-lg font-bold text-gray-900">{normalDaysLeft} days</p>
              <p className="text-xs text-gray-500">{formatDate(normalPayoffDate)}</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-300">
              <p className="text-xs font-semibold text-green-700 mb-2">Accelerated Payoff</p>
              <p className="text-lg font-bold text-green-700">{acceleratedDaysLeft} days</p>
              <p className="text-xs text-gray-500">{formatDate(acceleratedPayoffDate)}</p>
            </div>
          </div>

          <div><p className="text-sm text-gray-500">Days Saved</p><p className="text-2xl font-bold text-green-600">{daysSaved} days</p></div>

          {potentialSavings > 0 && (
            <div><p className="text-sm text-gray-500">Potential Savings (if discount applies)</p><p className="text-xl font-semibold text-green-600">{fmt(potentialSavings)}</p></div>
          )}

          <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 text-sm text-blue-800">
            <strong>Note:</strong> Most MCA contracts require full repayment of the purchased amount regardless of timing. Early payoff saves you time, not money, unless your provider offers an early payoff discount. Always check your contract or ask your funder directly.
          </div>
        </div>
      </div>
    </div>
  );
}
