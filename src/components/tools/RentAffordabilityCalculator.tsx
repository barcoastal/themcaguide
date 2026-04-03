"use client";

import { useState } from "react";

export default function RentAffordabilityCalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(50000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(30000);
  const [proposedRent, setProposedRent] = useState(3000);
  const [leaseTerm, setLeaseTerm] = useState(12);
  const [securityDeposit, setSecurityDeposit] = useState(6000);

  const rentToRevenueRatio = monthlyRevenue > 0 ? (proposedRent / monthlyRevenue) * 100 : 0;
  const cashFlowBeforeRent = monthlyRevenue - monthlyExpenses;
  const cashFlowAfterRent = cashFlowBeforeRent - proposedRent;
  const totalLeaseCost = proposedRent * leaseTerm + securityDeposit;
  const recommendedMaxRent = monthlyRevenue * 0.10; // 10% of revenue is a common guideline

  let status: "green" | "yellow" | "red";
  let statusLabel: string;
  if (rentToRevenueRatio <= 10 && cashFlowAfterRent > 0) {
    status = "green";
    statusLabel = "Affordable. This rent fits your budget.";
  } else if (rentToRevenueRatio <= 15 && cashFlowAfterRent > 0) {
    status = "yellow";
    statusLabel = "Manageable, but tight. Watch your margins.";
  } else {
    status = "red";
    statusLabel = "Too expensive. This rent may strain your business.";
  }

  const statusColors = {
    green: "bg-green-100 text-green-800 border-green-300",
    yellow: "bg-yellow-100 text-yellow-800 border-yellow-300",
    red: "bg-red-100 text-red-800 border-red-300",
  };

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Monthly Revenue</span>
            <input type="number" value={monthlyRevenue} onChange={(e) => setMonthlyRevenue(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Monthly Expenses (excluding rent)</span>
            <input type="number" value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={1000} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Proposed Monthly Rent</span>
            <input type="number" value={proposedRent} onChange={(e) => setProposedRent(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={100} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Lease Term (months)</span>
            <input type="number" value={leaseTerm} onChange={(e) => setLeaseTerm(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={1} max={120} />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Security Deposit</span>
            <input type="number" value={securityDeposit} onChange={(e) => setSecurityDeposit(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500" min={0} step={500} />
          </label>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Results</h3>
          <div className={`rounded-lg border p-4 ${statusColors[status]}`}>
            <p className="font-semibold text-lg">{statusLabel}</p>
          </div>
          <div><p className="text-sm text-gray-500">Rent-to-Revenue Ratio</p><p className="text-2xl font-bold text-gray-900">{rentToRevenueRatio.toFixed(1)}%</p></div>
          <div><p className="text-sm text-gray-500">Recommended Max Rent (10% of revenue)</p><p className="text-xl font-semibold text-green-700">{fmt(recommendedMaxRent)}</p></div>
          <div><p className="text-sm text-gray-500">Monthly Cash Flow After Rent</p><p className={`text-xl font-semibold ${cashFlowAfterRent >= 0 ? "text-gray-900" : "text-red-600"}`}>{fmt(cashFlowAfterRent)}</p></div>
          <div><p className="text-sm text-gray-500">Total Lease Cost (rent + deposit)</p><p className="text-xl font-semibold text-gray-900">{fmt(totalLeaseCost)}</p></div>
          <div><p className="text-sm text-gray-500">Impact on Monthly Cash Flow</p><p className="text-xl font-semibold text-red-600">-{fmt(proposedRent)}</p></div>
        </div>
      </div>
    </div>
  );
}
