"use client";

import { useState } from "react";
import { calculateMcaCost } from "@/lib/calculator";

export default function McaCostCalculator() {
  const [fundingAmount, setFundingAmount] = useState(50000);
  const [factorRate, setFactorRate] = useState(1.35);
  const [holdbackPercent, setHoldbackPercent] = useState(15);
  const [dailyRevenue, setDailyRevenue] = useState(5000);

  const result = calculateMcaCost({ fundingAmount, factorRate, holdbackPercent, dailyRevenue });

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
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
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Average Daily Revenue</span>
            <input type="number" value={dailyRevenue} onChange={(e) => setDailyRevenue(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={100} step={100} />
          </label>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Results</h3>
          <div><p className="text-sm text-gray-500">Total Repayment</p><p className="text-2xl font-bold text-gray-900">{fmt(result.totalRepayment)}</p></div>
          <div><p className="text-sm text-gray-500">Total Cost of Funding</p><p className="text-2xl font-bold text-red-600">{fmt(result.totalCost)}</p></div>
          <div><p className="text-sm text-gray-500">Estimated Daily Payment</p><p className="text-xl font-semibold text-gray-900">{fmt(result.dailyPayment)}</p></div>
          <div><p className="text-sm text-gray-500">Estimated Repayment Period</p><p className="text-xl font-semibold text-gray-900">{result.estimatedDays} days</p></div>
          <div><p className="text-sm text-gray-500">Effective APR</p><p className="text-xl font-semibold text-orange-600">{result.effectiveAPR.toFixed(1)}%</p></div>
        </div>
      </div>
    </div>
  );
}
