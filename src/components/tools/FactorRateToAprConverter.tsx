"use client";

import { useState } from "react";

export default function FactorRateToAprConverter() {
  const [factorRate, setFactorRate] = useState(1.35);
  const [repaymentMonths, setRepaymentMonths] = useState(6);
  const [fundingAmount, setFundingAmount] = useState(50000);

  const totalRepayment = fundingAmount * factorRate;
  const totalCost = totalRepayment - fundingAmount;
  const costPerMonth = totalCost / repaymentMonths;
  const costPercent = (factorRate - 1) * 100;
  const effectiveAPR = (costPercent / repaymentMonths) * 12;

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  const comparisons = [
    { type: "SBA Loan", aprRange: "6% - 13%", rating: effectiveAPR <= 13 ? "green" : "red" },
    { type: "Bank Term Loan", aprRange: "7% - 25%", rating: effectiveAPR <= 25 ? "green" : "red" },
    { type: "Business Line of Credit", aprRange: "10% - 30%", rating: effectiveAPR <= 30 ? "green" : effectiveAPR <= 50 ? "yellow" : "red" },
    { type: "Credit Card", aprRange: "18% - 29%", rating: effectiveAPR <= 29 ? "green" : "red" },
    { type: "Online Lender", aprRange: "15% - 80%", rating: effectiveAPR <= 80 ? "yellow" : "red" },
    { type: "Merchant Cash Advance", aprRange: "40% - 350%", rating: effectiveAPR <= 150 ? "yellow" : "red" },
  ];

  const ratingColor = (r: string) => {
    if (r === "green") return "bg-green-100 text-green-800";
    if (r === "yellow") return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  const ratingLabel = (r: string) => {
    if (r === "green") return "Below";
    if (r === "yellow") return "Within Range";
    return "Above";
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Factor Rate</span>
            <input type="number" value={factorRate} onChange={(e) => setFactorRate(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1.0} max={2.0} step={0.01} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Repayment Period (months)</span>
            <input type="number" value={repaymentMonths} onChange={(e) => setRepaymentMonths(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1} max={36} step={1} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Funding Amount (optional, for dollar context)</span>
            <input type="number" value={fundingAmount} onChange={(e) => setFundingAmount(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1000} step={1000} />
          </label>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Results</h3>
          <div><p className="text-sm text-gray-500">Effective APR</p><p className="text-2xl font-bold text-orange-600">{effectiveAPR.toFixed(1)}%</p></div>
          <div><p className="text-sm text-gray-500">Total Cost of Funding</p><p className="text-2xl font-bold text-red-600">{fmt(totalCost)}</p></div>
          <div><p className="text-sm text-gray-500">Cost Per Month</p><p className="text-xl font-semibold text-gray-900">{fmt(costPerMonth)}</p></div>
          <div><p className="text-sm text-gray-500">Total Repayment</p><p className="text-xl font-semibold text-gray-900">{fmt(totalRepayment)}</p></div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">How Your Rate Compares</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 font-medium text-gray-700">Financing Type</th>
                <th className="text-left px-4 py-3 font-medium text-gray-700">Typical APR</th>
                <th className="text-left px-4 py-3 font-medium text-gray-700">Your Rate ({effectiveAPR.toFixed(1)}%)</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row) => (
                <tr key={row.type} className="border-t border-gray-200">
                  <td className="px-4 py-3 text-gray-900">{row.type}</td>
                  <td className="px-4 py-3 text-gray-600">{row.aprRange}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${ratingColor(row.rating)}`}>
                      {ratingLabel(row.rating)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
