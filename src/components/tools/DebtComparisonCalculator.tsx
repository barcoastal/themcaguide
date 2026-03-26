"use client";

import { useState } from "react";
import { Scale } from "lucide-react";

export default function DebtComparisonCalculator() {
  const [amount, setAmount] = useState(50000);
  const [mcaFactor, setMcaFactor] = useState(1.35);
  const [mcaDays, setMcaDays] = useState(90);
  const [loanRate, setLoanRate] = useState(12);
  const [loanYears, setLoanYears] = useState(3);

  const mcaTotal = amount * mcaFactor;
  const mcaCost = mcaTotal - amount;
  const mcaAPR = (mcaCost / amount) * (365 / mcaDays) * 100;

  const monthlyRate = loanRate / 100 / 12;
  const numPayments = loanYears * 12;
  const loanMonthly = monthlyRate > 0 ? (amount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1) : amount / numPayments;
  const loanTotal = loanMonthly * numPayments;
  const loanCost = loanTotal - amount;

  const savings = mcaCost - loanCost;

  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">Funding Amount</h3>
          <label className="block">
            <span className="text-sm text-gray-600">How much do you need?</span>
            <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-blue-500" min={1000} step={1000} />
          </label>
          <h3 className="font-semibold text-gray-900 pt-2">MCA Terms</h3>
          <label className="block">
            <span className="text-sm text-gray-600">Factor Rate</span>
            <input type="number" value={mcaFactor} onChange={(e) => setMcaFactor(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500" min={1} max={2} step={0.01} />
          </label>
          <label className="block">
            <span className="text-sm text-gray-600">Repayment Days</span>
            <input type="number" value={mcaDays} onChange={(e) => setMcaDays(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500" min={30} step={10} />
          </label>
          <h3 className="font-semibold text-gray-900 pt-2">Loan Terms</h3>
          <label className="block">
            <span className="text-sm text-gray-600">Interest Rate (%)</span>
            <input type="number" value={loanRate} onChange={(e) => setLoanRate(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500" min={0} max={50} step={0.5} />
          </label>
          <label className="block">
            <span className="text-sm text-gray-600">Loan Term (years)</span>
            <input type="number" value={loanYears} onChange={(e) => setLoanYears(Number(e.target.value))} className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500" min={1} max={25} step={1} />
          </label>
        </div>

        <div className="bg-red-50 rounded-lg p-6 border-2 border-red-200">
          <h3 className="text-lg font-bold text-red-800 mb-4">MCA</h3>
          <div className="space-y-3">
            <div><p className="text-sm text-gray-500">You Receive</p><p className="text-xl font-bold">{fmt(amount)}</p></div>
            <div><p className="text-sm text-gray-500">You Pay Back</p><p className="text-xl font-bold text-red-600">{fmt(mcaTotal)}</p></div>
            <div><p className="text-sm text-gray-500">Total Fees</p><p className="text-xl font-bold text-red-600">{fmt(mcaCost)}</p></div>
            <div><p className="text-sm text-gray-500">Effective APR</p><p className="text-xl font-bold text-red-600">{mcaAPR.toFixed(0)}%</p></div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
          <h3 className="text-lg font-bold text-green-800 mb-4">Business Loan</h3>
          <div className="space-y-3">
            <div><p className="text-sm text-gray-500">You Receive</p><p className="text-xl font-bold">{fmt(amount)}</p></div>
            <div><p className="text-sm text-gray-500">You Pay Back</p><p className="text-xl font-bold text-green-600">{fmt(loanTotal)}</p></div>
            <div><p className="text-sm text-gray-500">Total Interest</p><p className="text-xl font-bold text-green-600">{fmt(loanCost)}</p></div>
            <div><p className="text-sm text-gray-500">Monthly Payment</p><p className="text-xl font-bold text-green-600">{fmt(loanMonthly)}</p></div>
          </div>
        </div>
      </div>

      {savings > 0 && (
        <div className="mt-6 bg-green-50 border-2 border-green-300 rounded-xl p-6 text-center">
          <Scale className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-green-700">You save {fmt(savings)} with a loan</p>
          <p className="text-sm text-green-600 mt-1">That is {((savings / mcaCost) * 100).toFixed(0)}% less in fees</p>
        </div>
      )}
    </div>
  );
}
