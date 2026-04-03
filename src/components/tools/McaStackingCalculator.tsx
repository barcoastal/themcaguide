"use client";

import { useState } from "react";

interface McaPosition {
  fundingAmount: number;
  factorRate: number;
  holdbackPercent: number;
}

export default function McaStackingCalculator() {
  const [dailyRevenue, setDailyRevenue] = useState(5000);
  const [mcaCount, setMcaCount] = useState(2);
  const [mcas, setMcas] = useState<McaPosition[]>([
    { fundingAmount: 50000, factorRate: 1.35, holdbackPercent: 15 },
    { fundingAmount: 30000, factorRate: 1.40, holdbackPercent: 10 },
    { fundingAmount: 20000, factorRate: 1.45, holdbackPercent: 12 },
    { fundingAmount: 15000, factorRate: 1.50, holdbackPercent: 10 },
    { fundingAmount: 10000, factorRate: 1.50, holdbackPercent: 10 },
  ]);

  const updateMca = (index: number, field: keyof McaPosition, value: number) => {
    const updated = [...mcas];
    updated[index] = { ...updated[index], [field]: value };
    setMcas(updated);
  };

  const activeMcas = mcas.slice(0, mcaCount);

  const combinedDailyPayment = activeMcas.reduce(
    (sum, mca) => sum + dailyRevenue * (mca.holdbackPercent / 100),
    0
  );

  const totalCostAll = activeMcas.reduce(
    (sum, mca) => sum + mca.fundingAmount * mca.factorRate - mca.fundingAmount,
    0
  );

  const totalRepaymentAll = activeMcas.reduce(
    (sum, mca) => sum + mca.fundingAmount * mca.factorRate,
    0
  );

  const totalFundingAll = activeMcas.reduce(
    (sum, mca) => sum + mca.fundingAmount,
    0
  );

  const combinedHoldback = activeMcas.reduce(
    (sum, mca) => sum + mca.holdbackPercent,
    0
  );

  const revenuePercent = dailyRevenue > 0 ? (combinedDailyPayment / dailyRevenue) * 100 : 0;

  const avgEstimatedDays = combinedDailyPayment > 0 ? Math.ceil(totalRepaymentAll / combinedDailyPayment) : 0;
  const combinedAPR = avgEstimatedDays > 0 ? (totalCostAll / totalFundingAll) * (365 / avgEstimatedDays) * 100 : 0;

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Average Daily Revenue</span>
            <input type="number" value={dailyRevenue} onChange={(e) => setDailyRevenue(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={100} step={100} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Number of MCAs</span>
            <select value={mcaCount} onChange={(e) => setMcaCount(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500">
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </label>

          {activeMcas.map((mca, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4 space-y-3">
              <p className="text-sm font-semibold text-gray-800">MCA #{i + 1}</p>
              <label className="block">
                <span className="text-xs font-medium text-gray-600">Funding Amount</span>
                <input type="number" value={mca.fundingAmount} onChange={(e) => updateMca(i, "fundingAmount", Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:ring-blue-500" min={1000} step={1000} />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-gray-600">Factor Rate</span>
                <input type="number" value={mca.factorRate} onChange={(e) => updateMca(i, "factorRate", Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:ring-blue-500" min={1.0} max={2.0} step={0.01} />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-gray-600">Holdback Percentage (%)</span>
                <input type="number" value={mca.holdbackPercent} onChange={(e) => updateMca(i, "holdbackPercent", Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:ring-blue-500" min={1} max={100} />
              </label>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Results</h3>
          <div><p className="text-sm text-gray-500">Combined Daily Payment</p><p className="text-2xl font-bold text-gray-900">{fmt(combinedDailyPayment)}</p></div>
          <div><p className="text-sm text-gray-500">Total Cost Across All MCAs</p><p className="text-2xl font-bold text-red-600">{fmt(totalCostAll)}</p></div>
          <div><p className="text-sm text-gray-500">Total Repayment (All MCAs)</p><p className="text-xl font-semibold text-gray-900">{fmt(totalRepaymentAll)}</p></div>
          <div><p className="text-sm text-gray-500">Combined Effective APR</p><p className="text-xl font-semibold text-orange-600">{combinedAPR.toFixed(1)}%</p></div>
          <div><p className="text-sm text-gray-500">Combined Holdback</p><p className="text-xl font-semibold text-gray-900">{combinedHoldback}%</p></div>
          <div>
            <p className="text-sm text-gray-500">% of Daily Revenue to MCA Payments</p>
            <p className={`text-xl font-semibold ${revenuePercent > 30 ? "text-red-600" : revenuePercent > 20 ? "text-orange-600" : "text-green-600"}`}>{revenuePercent.toFixed(1)}%</p>
          </div>
          {revenuePercent > 30 && (
            <div className="bg-red-100 border border-red-300 rounded-lg p-4 text-sm text-red-800">
              <strong>Warning:</strong> You are sending more than 30% of your daily revenue to MCA payments. This level of stacking puts your business at serious risk of cash flow problems.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
