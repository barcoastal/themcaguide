"use client";

import { useState } from "react";

export default function EmergencyFundCalculator() {
  const [fixedExpenses, setFixedExpenses] = useState(15000);
  const [payroll, setPayroll] = useState(25000);
  const [variableExpenses, setVariableExpenses] = useState(8000);
  const [desiredRunway, setDesiredRunway] = useState(3);
  const [currentSavings, setCurrentSavings] = useState(0);

  const monthlyTotal = fixedExpenses + payroll + variableExpenses;
  const minimumFund = monthlyTotal * desiredRunway;
  const recommendedFund = monthlyTotal * 6;
  const gap = Math.max(0, minimumFund - currentSavings);
  const monthlySavingsTarget12 = gap > 0 ? Math.ceil(gap / 12) : 0;
  const monthlySavingsTarget6 = gap > 0 ? Math.ceil(gap / 6) : 0;
  const coverageMonths = monthlyTotal > 0 ? currentSavings / monthlyTotal : 0;

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Monthly Fixed Expenses (rent, utilities, insurance, loan payments)</span>
            <input
              type="number"
              value={fixedExpenses}
              onChange={(e) => setFixedExpenses(Number(e.target.value))}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500"
              min={0}
              step={500}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Monthly Payroll</span>
            <input
              type="number"
              value={payroll}
              onChange={(e) => setPayroll(Number(e.target.value))}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500"
              min={0}
              step={500}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Monthly Variable Expenses</span>
            <input
              type="number"
              value={variableExpenses}
              onChange={(e) => setVariableExpenses(Number(e.target.value))}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500"
              min={0}
              step={500}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Desired Runway (months)</span>
            <input
              type="number"
              value={desiredRunway}
              onChange={(e) => setDesiredRunway(Number(e.target.value))}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500"
              min={1}
              max={24}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Current Savings (optional)</span>
            <input
              type="number"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(Number(e.target.value))}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:ring-blue-500"
              min={0}
              step={1000}
            />
          </label>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Results</h3>
          <div>
            <p className="text-sm text-gray-500">Total Monthly Expenses</p>
            <p className="text-2xl font-bold text-gray-900">{fmt(monthlyTotal)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Minimum Emergency Fund ({desiredRunway} months)</p>
            <p className="text-2xl font-bold text-gray-900">{fmt(minimumFund)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Recommended Fund (6 months)</p>
            <p className="text-xl font-semibold text-blue-600">{fmt(recommendedFund)}</p>
          </div>
          {currentSavings > 0 && (
            <>
              <div>
                <p className="text-sm text-gray-500">Current Coverage</p>
                <p className={`text-xl font-semibold ${coverageMonths >= desiredRunway ? "text-green-600" : "text-orange-600"}`}>
                  {coverageMonths.toFixed(1)} months
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Gap to Target</p>
                <p className={`text-2xl font-bold ${gap > 0 ? "text-red-600" : "text-green-600"}`}>
                  {gap > 0 ? fmt(gap) : "Fully funded!"}
                </p>
              </div>
            </>
          )}
          {gap > 0 && (
            <div>
              <p className="text-sm text-gray-500">Monthly Savings Target</p>
              <p className="text-base text-gray-700">
                {fmt(monthlySavingsTarget12)}/mo to reach goal in 12 months
              </p>
              <p className="text-base text-gray-700">
                {fmt(monthlySavingsTarget6)}/mo to reach goal in 6 months
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
